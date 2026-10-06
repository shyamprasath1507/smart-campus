import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function DoorAccessPage() {
  const doors = [
    { id: 'DR-101', name: 'Main Campus Gate East Turnstiles', loc: 'Perimeter Boundary', status: 'SCHEDULED OPEN', rule: 'Open 06:00 - 23:00 to all badge holders', lastSwipe: 'STU-8821 (1 min ago)' },
    { id: 'DR-102', name: 'Science Hall - AI & GPU Cluster Vault', loc: 'Lab Complex 4th Floor', status: 'RESTRICTED', rule: 'Faculty & Grad Researchers Only (MFA PIN)', lastSwipe: 'Dr. Evelyn Vance (12 mins ago)' },
    { id: 'DR-103', name: 'Biochemistry Chemical Storage Depot', loc: 'Basement Level B2', status: 'HIGH SECURITY', rule: 'Authorized Hazmat Personnel Only', lastSwipe: 'Lab Tech Lopez (2 hrs ago)' },
    { id: 'DR-104', name: 'Central University Library Turnstiles', loc: 'Library Main Foyer', status: 'SCHEDULED OPEN', rule: 'Tap card to pass • Open 24/7', lastSwipe: 'STU-4412 (3 mins ago)' },
    { id: 'DR-105', name: 'Server Farm & Core Fiber Exchange', loc: 'IT Center Building 1', status: 'LOCKED & ARMED', rule: 'Network Admins Only • Biometric Fingerprint', lastSwipe: 'Elena Rostova (42 mins ago)' },
    { id: 'DR-106', name: 'Residence Hall Tower 3 Night Gate', loc: 'Student Housing West', status: 'NIGHT LOCKDOWN', rule: 'Dorm residents only • Visitors prohibited after 22:00', lastSwipe: 'STU-9903 (5 mins ago)' },
  ];

  return (
    <div className={styles.container}>
      <Link href="/admin" className={styles.backLink}>
        ← Back to Command Center
      </Link>

      <div className={styles.header}>
        <div className={styles.titleArea}>
          <div className={styles.titleRow}>
            <span className={styles.icon}>🚪</span>
            <h1 className={styles.title}>Campus Door Access & Smart Locks</h1>
          </div>
          <p className={styles.subtitle}>
            IoT biometric door readers, perimeter turnstiles, restricted research lab credentials, and emergency lockdown controls.
          </p>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.secondaryBtn}>Schedule Normalization</button>
          <button className={styles.dangerBtn}>🚨 EMERGENCY LOCKDOWN</button>
        </div>
      </div>

      <div className={styles.metricsGrid}>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Connected Smart Locks</span>
          <span className={styles.metricValue}>142 Locks</span>
          <span className={styles.metricSub}>Zigbee / PoE Mesh online</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Currently Locked & Armed</span>
          <span className={styles.metricValue}>138 Doors</span>
          <span className={styles.metricSub}>Perimeter secure</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Scheduled Open Gates</span>
          <span className={styles.metricValue}>4 Portals</span>
          <span className={styles.metricSub}>Turnstile free-flow active</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Access Denied Today</span>
          <span className={styles.metricValue}>3 Attempts</span>
          <span className={styles.metricSub}>Expired badges automatically blocked</span>
        </div>
      </div>

      <div className={styles.doorsGrid}>
        {doors.map((door) => (
          <div key={door.id} className={`${styles.doorCard} glass`}>
            <div className={styles.doorHeader}>
              <h3 className={styles.doorName}>{door.name}</h3>
              <span className={
                door.status.includes('OPEN')
                  ? styles.badgeSchedule
                  : door.status.includes('RESTRICTED')
                  ? styles.badgeRestricted
                  : styles.badgeLocked
              }>
                {door.status}
              </span>
            </div>
            <div className={styles.doorLoc}>{door.loc} • {door.id}</div>

            <div className={styles.doorMeta}>
              <div><strong style={{ color: '#fff' }}>Policy:</strong> {door.rule}</div>
              <div><strong style={{ color: '#fff' }}>Recent Swipe:</strong> {door.lastSwipe}</div>
            </div>

            <div className={styles.doorActionRow}>
              <button className={styles.toggleLockBtn}>Toggle Remote Unlock</button>
              <button className={styles.toggleLockBtn}>View Sensor Telemetry</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
