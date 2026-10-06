'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Sos.module.css';

const emergencyContacts = [
  { title: 'Campus Police Dispatch (24/7)', desc: 'Immediate crime, threat, or hazard response', phone: '(555) 019-9911', icon: '🚓' },
  { title: 'University Health & Paramedics', desc: 'Ambulance, first aid, acute medical trauma', phone: '(555) 019-9112', icon: '🚑' },
  { title: 'NightWalk Campus Safety Escort', desc: 'Dorm-to-dorm night walking chaperone', phone: '(555) 019-WALK', icon: '🔦' },
  { title: 'Crisis Counseling Helpline', desc: 'Confidential mental health support 24/7', phone: '(555) 019-SAFE', icon: '🤝' },
];

export default function EmergencySosPage() {
  const [triggered, setTriggered] = useState(false);

  return (
    <div className={styles.container}>
      <Link href="/student" className={styles.backLink}>
        ← Back to Student Hub
      </Link>

      <div className={styles.headerRow}>
        <div className={styles.titleArea}>
          <h1>🚨 Emergency SOS & Campus Safety</h1>
          <p className={styles.subtitle}>Immediate distress beacon, location telemetry, and critical dispatch contacts</p>
        </div>
      </div>

      <div className={`${styles.sosHeroCard} glass`}>
        <button
          onClick={() => setTriggered(!triggered)}
          className={`${styles.sosButton} ${triggered ? styles.sosButtonActive : ''}`}
        >
          {triggered ? 'ALERT SENT' : 'SOS'}
        </button>

        <div>
          <h2 style={{ fontSize: '20px', fontWeight: 800, color: triggered ? 'var(--accent-secondary)' : '#FF4757' }}>
            {triggered ? '🚨 Emergency Beacon Transmitted' : 'Tap SOS to Alert Campus Dispatch'}
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px', maxWidth: '500px', margin: '8px auto 0' }}>
            {triggered
              ? 'Security has your GPS location (37.7749° N, 122.4194° W) and live student telemetry. Officers are responding.'
              : 'Pressing this button broadcasts your live telemetry, profile details, and nearby camera alerts to Central Dispatch.'}
          </p>
        </div>
      </div>

      <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)' }}>Emergency Direct Dial</h2>
      <div className={styles.contactsGrid}>
        {emergencyContacts.map((c, i) => (
          <div key={i} className={`${styles.contactCard} glass`}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, fontSize: '15px' }}>
                <span>{c.icon}</span> {c.title}
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '4px' }}>{c.desc}</div>
            </div>
            <a href={`tel:${c.phone}`} className={styles.contactPhone}>
              {c.phone}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
