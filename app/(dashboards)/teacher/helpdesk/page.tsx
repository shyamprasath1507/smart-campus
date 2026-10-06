'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function TeacherHelpdeskPage() {
  const [tickets, setTickets] = useState([
    {
      id: 'TICK-1092',
      category: 'Classroom AV',
      location: 'Science Hall 302',
      issue: 'Laser Projector HDMI port flickers during lecture slide projection.',
      urgency: 'HIGH',
      status: 'OPEN',
      openedAt: 'Today, 08:45 AM',
      technician: 'Marcus B. (En Route)',
    },
    {
      id: 'TICK-1081',
      category: 'Software & Licensing',
      location: 'Faculty Office 402',
      issue: 'MATLAB / Simulink network campus license key renewal expired.',
      urgency: 'NORMAL',
      status: 'RESOLVED',
      openedAt: 'Oct 12, 11:20 AM',
      technician: 'Central IT Services',
    },
    {
      id: 'TICK-1070',
      category: 'Lab Hardware',
      location: 'Turing Lab 104',
      issue: 'Workstation #14 failed RAM test and refuses to boot Ubuntu 24.04.',
      urgency: 'NORMAL',
      status: 'RESOLVED',
      openedAt: 'Oct 05, 03:10 PM',
      technician: 'Devon K.',
    },
  ]);

  const [form, setForm] = useState({
    category: 'Classroom AV',
    location: '',
    urgency: 'HIGH',
    issue: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.location || !form.issue) return;
    setTickets([
      {
        id: `TICK-${Math.floor(1000 + Math.random() * 9000)}`,
        category: form.category,
        location: form.location,
        issue: form.issue,
        urgency: form.urgency,
        status: 'OPEN',
        openedAt: 'Just now',
        technician: 'Automated Dispatch Queued',
      },
      ...tickets,
    ]);
    setForm({ category: 'Classroom AV', location: '', urgency: 'HIGH', issue: '' });
    alert('Support ticket created. On-call field engineer notified via pager!');
  };

  return (
    <div className={styles.container}>
      <Link href="/teacher" className={styles.backLink}>
        ← Back to Faculty Dashboard
      </Link>

      <div className={styles.header}>
        <div className={styles.titleArea}>
          <h1><span>💻</span> Campus IT & Classroom Helpdesk</h1>
          <p className={styles.subtitle}>
            Submit urgent auditorium AV tickets, request software licenses, and track technician dispatches.
          </p>
        </div>
      </div>

      <div className={styles.layout}>
        <form onSubmit={handleSubmit} className={`${styles.formCard} glass`}>
          <h3 style={{ color: 'var(--accent-primary)', fontSize: '18px' }}>Create Support Ticket</h3>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Category</label>
            <select
              className={styles.select}
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            >
              <option value="Classroom AV">Classroom AV / Projector / Mic</option>
              <option value="Software & Licensing">Software & Academic Licenses</option>
              <option value="Lab Hardware">Lab Workstations & Server Nodes</option>
              <option value="Wi-Fi & Network">Wi-Fi & Eduroam Connectivity</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Room / Location</label>
            <input
              type="text"
              placeholder="e.g. Science Hall 302 or Office 402"
              className={styles.input}
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Urgency</label>
            <select
              className={styles.select}
              value={form.urgency}
              onChange={(e) => setForm({ ...form, urgency: e.target.value })}
            >
              <option value="HIGH">High (Lecture actively in progress)</option>
              <option value="NORMAL">Normal (Within 24 business hours)</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Issue Description</label>
            <textarea
              rows={3}
              placeholder="Describe malfunction, error code, or equipment ID..."
              className={styles.textarea}
              value={form.issue}
              onChange={(e) => setForm({ ...form, issue: e.target.value })}
              required
            />
          </div>

          <button type="submit" className={styles.submitBtn}>
            Submit IT Request
          </button>
        </form>

        <div className={styles.ticketsList}>
          <h3 style={{ fontSize: '18px', color: 'var(--text-primary)' }}>Your Service Tickets</h3>
          {tickets.map((t) => (
            <div key={t.id} className={`${styles.ticketCard} glass`}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span
                    style={{
                      fontFamily: 'monospace',
                      color: 'var(--accent-primary)',
                      marginRight: '8px',
                      fontWeight: 700,
                    }}
                  >
                    {t.id}
                  </span>
                  <strong style={{ fontSize: '15px', color: 'var(--text-primary)' }}>
                    {t.category}
                  </strong>
                </div>
                <span className={t.status === 'OPEN' ? styles.badgeOpen : styles.badgeResolved}>
                  {t.status}
                </span>
              </div>

              <div style={{ fontSize: '13px', color: 'var(--accent-secondary)' }}>
                📍 {t.location} &nbsp;|&nbsp; 🕒 {t.openedAt}
              </div>

              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                {t.issue}
              </p>

              <div
                style={{
                  fontSize: '12px',
                  color: 'var(--text-muted)',
                  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                  paddingTop: '8px',
                }}
              >
                Assigned: <strong>{t.technician}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
