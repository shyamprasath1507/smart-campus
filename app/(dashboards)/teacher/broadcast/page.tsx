'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function TeacherBroadcastPage() {
  const [broadcasts, setBroadcasts] = useState([
    {
      id: 1,
      target: 'CS101 - Intro to CS',
      severity: 'HIGH',
      subject: 'Lab Session Moved to Turing Hall 104',
      message: 'Due to audio maintenance in Hall 302, please assemble in Turing Hall 104 today.',
      timestamp: 'Today at 08:30 AM',
      delivery: '45/45 Delivered (Push & SMS)',
    },
    {
      id: 2,
      target: 'All Enrolled Students (4 Cohorts)',
      severity: 'NORMAL',
      subject: 'Midterm Review Slides Uploaded',
      message: 'Supplementary lecture review materials and solution sets are now live on LMS.',
      timestamp: 'Yesterday at 04:15 PM',
      delivery: '163/163 Delivered',
    },
    {
      id: 3,
      target: 'AI405 - Deep Learning',
      severity: 'HIGH',
      subject: 'GPU Cluster Maintenance Window Tonight',
      message: 'The AI Supercomputing cluster will undergo kernel patching between 11 PM and 2 AM.',
      timestamp: 'Oct 14, 2:00 PM',
      delivery: '38/38 Delivered',
    },
  ]);

  const [target, setTarget] = useState('CS101');
  const [severity, setSeverity] = useState('NORMAL');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subject || !message) return;
    setBroadcasts([
      {
        id: Date.now(),
        target,
        severity,
        subject,
        message,
        timestamp: 'Just now',
        delivery: 'Queued for instantaneous push delivery',
      },
      ...broadcasts,
    ]);
    setSubject('');
    setMessage('');
    alert('Broadcast notification sent to target student channels!');
  };

  return (
    <div className={styles.container}>
      <Link href="/teacher" className={styles.backLink}>
        ← Back to Faculty Dashboard
      </Link>

      <div className={styles.header}>
        <div className={styles.titleArea}>
          <h1><span>📢</span> Broadcast Alerts & Push Channels</h1>
          <p className={styles.subtitle}>
            Dispatch urgent announcements, classroom relocations, and critical push notifications.
          </p>
        </div>
      </div>

      <div className={styles.layout}>
        <form onSubmit={handleSend} className={`${styles.formCard} glass`}>
          <h3 style={{ color: 'var(--accent-primary)', fontSize: '18px' }}>Send New Broadcast</h3>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Target Audience</label>
            <select
              className={styles.select}
              value={target}
              onChange={(e) => setTarget(e.target.value)}
            >
              <option value="CS101">CS101 Enrolled Students (45)</option>
              <option value="CS302">CS302 Enrolled Students (52)</option>
              <option value="AI405">AI405 Enrolled Students (38)</option>
              <option value="All Enrolled">All My Students (163)</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Urgency Level</label>
            <select
              className={styles.select}
              value={severity}
              onChange={(e) => setSeverity(e.target.value)}
            >
              <option value="NORMAL">Normal (Push Notification)</option>
              <option value="HIGH">High Urgency (SMS + Push Alert)</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Broadcast Subject</label>
            <input
              type="text"
              placeholder="e.g. Class Rescheduled / Room Change"
              className={styles.input}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Message Content</label>
            <textarea
              rows={4}
              placeholder="Type message text to blast to mobile devices..."
              className={styles.textarea}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <button type="submit" className={styles.sendBtn}>
            📢 Blast Notification
          </button>
        </form>

        <div className={styles.historyList}>
          <h3 style={{ fontSize: '18px', color: 'var(--text-primary)' }}>Broadcast Dispatch Log</h3>
          {broadcasts.map((b) => (
            <div key={b.id} className={`${styles.historyCard} glass`}>
              <div className={styles.historyTop}>
                <div>
                  <span
                    className={
                      b.severity === 'HIGH' ? styles.urgencyHigh : styles.urgencyNormal
                    }
                  >
                    {b.severity}
                  </span>
                  <span
                    style={{
                      marginLeft: '10px',
                      fontSize: '13px',
                      color: 'var(--text-secondary)',
                      fontWeight: 600,
                    }}
                  >
                    {b.target}
                  </span>
                </div>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                  {b.timestamp}
                </span>
              </div>
              <h4 style={{ fontSize: '16px', color: 'var(--text-primary)' }}>{b.subject}</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                {b.message}
              </p>
              <div
                style={{
                  fontSize: '12px',
                  color: 'var(--accent-secondary)',
                  fontWeight: 600,
                  marginTop: '4px',
                }}
              >
                ✓ {b.delivery}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
