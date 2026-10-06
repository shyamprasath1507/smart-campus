'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Helpdesk.module.css';

interface Ticket {
  id: string;
  category: string;
  subject: string;
  status: 'OPEN' | 'IN_PROGRESS' | 'RESOLVED';
  date: string;
}

const initialTickets: Ticket[] = [
  { id: 'TICK-4819', category: 'Campus Wi-Fi / Eduroam', subject: 'Periodic dropped packet latency in Dorm Tower B 4th floor', status: 'IN_PROGRESS', date: 'Yesterday' },
  { id: 'TICK-4790', category: 'Software Licensing', subject: 'MATLAB / Simulink university license renewal token failed', status: 'RESOLVED', date: 'Oct 2, 2026' },
  { id: 'TICK-4602', category: 'Physical RFID Keycard', subject: 'Turnstile tap sensor delays at Tech Park Gate 2', status: 'RESOLVED', date: 'Sep 28, 2026' },
];

export default function HelpdeskRequestPage() {
  const [tickets, setTickets] = useState<Ticket[]>(initialTickets);
  const [category, setCategory] = useState('Campus Wi-Fi / Eduroam');
  const [subject, setSubject] = useState('');
  const [desc, setDesc] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subject) return;

    const newTicket: Ticket = {
      id: `TICK-${Math.floor(5000 + Math.random() * 4000)}`,
      category,
      subject,
      status: 'OPEN',
      date: 'Just now',
    };

    setTickets([newTicket, ...tickets]);
    setSubject('');
    setDesc('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className={styles.container}>
      <Link href="/student" className={styles.backLink}>
        ← Back to Student Hub
      </Link>

      <div className={styles.headerRow}>
        <div className={styles.titleArea}>
          <h1>🔧 Campus IT & Facility Helpdesk</h1>
          <p className={styles.subtitle}>Report technical infrastructure issues, hardware requests, or dormitory maintenance</p>
        </div>
      </div>

      <div className={styles.helpdeskLayout}>
        <div className={`${styles.formCard} glass`}>
          <h2 style={{ fontSize: '18px', fontWeight: 700 }}>Open Support Ticket</h2>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Issue Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className={styles.inputField}
              >
                <option value="Campus Wi-Fi / Eduroam">Campus Wi-Fi & Eduroam Access</option>
                <option value="Software Licensing">Software Licensing (MATLAB, Adobe, PyCharm)</option>
                <option value="Hardware / Lab Equipment">Hardware / Lab GPU Cluster Access</option>
                <option value="Smart ID & Door Locks">Smart ID & Dorm RFID Access</option>
                <option value="Dormitory Facilities">Dormitory Air Conditioning / Maintenance</option>
              </select>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Subject Summary</label>
              <input
                type="text"
                placeholder="Brief summary of the issue..."
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className={styles.inputField}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Detailed Description & Location</label>
              <textarea
                placeholder="Include room number, device MAC address, or error codes..."
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className={styles.inputField}
                rows={4}
              />
            </div>

            {submitted && (
              <div style={{ color: 'var(--accent-secondary)', fontSize: '13px', fontWeight: 700 }}>
                ✓ Ticket submitted! Our technicians have been dispatched.
              </div>
            )}

            <button type="submit" className={styles.submitBtn}>
              Submit Request Ticket
            </button>
          </form>
        </div>

        <div>
          <h2 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '14px' }}>My Active Tickets ({tickets.length})</h2>
          <div className={styles.ticketsList}>
            {tickets.map((t) => (
              <div key={t.id} className={`${styles.ticketCard} glass`}>
                <div className={styles.ticketTop}>
                  <span className={styles.ticketId}>{t.id}</span>
                  <span className={
                    t.status === 'OPEN' ? styles.statusOpen :
                    t.status === 'IN_PROGRESS' ? styles.statusProgress : styles.statusResolved
                  }>
                    {t.status.replace('_', ' ')}
                  </span>
                </div>
                <div style={{ fontWeight: 700, fontSize: '15px', color: 'var(--text-primary)' }}>{t.subject}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--text-secondary)' }}>
                  <span>🏷️ {t.category}</span>
                  <span>{t.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
