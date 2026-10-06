'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function TeacherLeavePage() {
  const [leaves, setLeaves] = useState([
    {
      id: 1,
      type: 'Conference / Duty Leave',
      dates: 'Nov 12, 2026 - Nov 15, 2026 (4 days)',
      substitute: 'Prof. Marcus Vance (CS302 & CS101)',
      reason: 'Keynote Speaker at IEEE Global AI & Edge Computing Symposium in Boston.',
      status: 'APPROVED',
    },
    {
      id: 2,
      type: 'Casual Leave',
      dates: 'Oct 02, 2026 - Oct 03, 2026 (2 days)',
      substitute: 'Dr. Sarah Connor',
      reason: 'Personal family engagement.',
      status: 'APPROVED',
    },
    {
      id: 3,
      type: 'Medical Leave',
      dates: 'Nov 28, 2026 (1 day)',
      substitute: 'Prof. David Lee',
      reason: 'Annual medical wellness checkup.',
      status: 'PENDING',
    },
  ]);

  const [form, setForm] = useState({
    type: 'Casual Leave',
    startDate: '',
    endDate: '',
    substitute: 'Prof. Marcus Vance',
    reason: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.startDate || !form.endDate || !form.reason) return;
    setLeaves([
      {
        id: Date.now(),
        type: form.type,
        dates: `${form.startDate} to ${form.endDate}`,
        substitute: form.substitute,
        reason: form.reason,
        status: 'PENDING',
      },
      ...leaves,
    ]);
    setForm({
      type: 'Casual Leave',
      startDate: '',
      endDate: '',
      substitute: 'Prof. Marcus Vance',
      reason: '',
    });
    alert('Leave application submitted to Dean of Faculty for sign-off.');
  };

  return (
    <div className={styles.container}>
      <Link href="/teacher" className={styles.backLink}>
        ← Back to Faculty Dashboard
      </Link>

      <div className={styles.header}>
        <div className={styles.titleArea}>
          <h1><span>🏖️</span> Faculty Leave Application & Quotas</h1>
          <p className={styles.subtitle}>
            Apply for research sabbatical, duty leaves, substitute endorsements, and track balances.
          </p>
        </div>
      </div>

      <div className={styles.statsGrid}>
        <div className={`${styles.statCard} glass`}>
          <span className={styles.statLabel}>Paid Leaves Balance</span>
          <span className={styles.statValue}>14 Days</span>
        </div>
        <div className={`${styles.statCard} glass`}>
          <span className={styles.statLabel}>Duty Leaves Used</span>
          <span className={styles.statValue}>4 Days</span>
        </div>
        <div className={`${styles.statCard} glass`}>
          <span className={styles.statLabel}>Pending Requests</span>
          <span className={styles.statValue} style={{ color: '#ffc107' }}>
            {leaves.filter((l) => l.status === 'PENDING').length}
          </span>
        </div>
        <div className={`${styles.statCard} glass`}>
          <span className={styles.statLabel}>Substitutes Arranged</span>
          <span className={styles.statValue}>100%</span>
        </div>
      </div>

      <div className={styles.layout}>
        <form onSubmit={handleSubmit} className={`${styles.formCard} glass`}>
          <h3 style={{ color: 'var(--accent-primary)', fontSize: '18px' }}>Apply For Leave</h3>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Leave Type</label>
            <select
              className={styles.select}
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
            >
              <option value="Casual Leave">Casual Leave</option>
              <option value="Conference / Duty Leave">Conference / Duty Leave</option>
              <option value="Medical Leave">Medical Leave</option>
              <option value="Research Sabbatical">Research Sabbatical</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Start Date</label>
            <input
              type="date"
              className={styles.input}
              value={form.startDate}
              onChange={(e) => setForm({ ...form, startDate: e.target.value })}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>End Date</label>
            <input
              type="date"
              className={styles.input}
              value={form.endDate}
              onChange={(e) => setForm({ ...form, endDate: e.target.value })}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Substitute Faculty for Lectures</label>
            <input
              type="text"
              className={styles.input}
              value={form.substitute}
              onChange={(e) => setForm({ ...form, substitute: e.target.value })}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Reason / Remarks</label>
            <textarea
              rows={3}
              className={styles.textarea}
              placeholder="State reason or conference invitation details..."
              value={form.reason}
              onChange={(e) => setForm({ ...form, reason: e.target.value })}
              required
            />
          </div>

          <button type="submit" className={styles.submitBtn}>
            Submit Leave Request
          </button>
        </form>

        <div className={styles.historyList}>
          <h3 style={{ fontSize: '18px', color: 'var(--text-primary)' }}>Application History</h3>
          {leaves.map((l) => (
            <div key={l.id} className={`${styles.historyCard} glass`}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <strong style={{ fontSize: '16px', color: 'var(--text-primary)' }}>{l.type}</strong>
                <span
                  className={l.status === 'APPROVED' ? styles.badgeApproved : styles.badgePending}
                >
                  {l.status}
                </span>
              </div>
              <div style={{ fontSize: '13px', color: 'var(--accent-primary)', fontWeight: 600 }}>
                📅 {l.dates}
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                Substitute: <strong>{l.substitute}</strong>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{l.reason}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
