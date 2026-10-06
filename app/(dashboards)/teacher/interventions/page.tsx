'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function TeacherInterventionsPage() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'Jordan Hayes',
      course: 'CS101',
      attendance: '58%',
      avgScore: '48%',
      risk: 'HIGH',
      trigger: 'Missed 4 consecutive labs; failed Quiz 2.',
      status: 'Advisory Scheduled',
    },
    {
      id: 2,
      name: 'David Kim',
      course: 'AI405',
      attendance: '71%',
      avgScore: '62%',
      risk: 'MEDIUM',
      trigger: 'Late submission on Lab 1 and Lab 2.',
      status: 'Email Check-in Sent',
    },
    {
      id: 3,
      name: 'Lucas Wright',
      course: 'CS302',
      attendance: '64%',
      avgScore: '55%',
      risk: 'HIGH',
      trigger: 'Zero score recorded for Midterm assignment.',
      status: 'Action Required',
    },
    {
      id: 4,
      name: 'Aaliyah Patel',
      course: 'ENG201',
      attendance: '74%',
      avgScore: '68%',
      risk: 'MEDIUM',
      trigger: 'Missing peer review feedback drafts.',
      status: 'Resolved (Recovered)',
    },
  ]);

  const triggerIntervention = (id: number) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: 'Mentor Assigned & Alert Dispatched' } : s))
    );
    alert('Academic retention alert sent to university counseling & student mentor!');
  };

  return (
    <div className={styles.container}>
      <Link href="/teacher" className={styles.backLink}>
        ← Back to Faculty Dashboard
      </Link>

      <div className={styles.header}>
        <div className={styles.titleArea}>
          <h1><span>⚠️</span> Early Warning & Student Interventions</h1>
          <p className={styles.subtitle}>
            Predictive AI flags students at risk of dropout, course failure, or attendance revocation.
          </p>
        </div>
      </div>

      <div className={styles.statsGrid}>
        <div className={`${styles.statCard} glass`}>
          <span className={styles.statLabel}>Flagged Students</span>
          <span className={styles.statValue} style={{ color: '#ff4757' }}>
            {students.filter((s) => s.risk === 'HIGH').length}
          </span>
          <span style={{ color: '#ff4757', fontSize: '13px' }}>Immediate Action</span>
        </div>
        <div className={`${styles.statCard} glass`}>
          <span className={styles.statLabel}>Moderate Risk</span>
          <span className={styles.statValue} style={{ color: '#ffc107' }}>
            {students.filter((s) => s.risk === 'MEDIUM').length}
          </span>
          <span style={{ color: '#ffc107', fontSize: '13px' }}>Monitoring</span>
        </div>
        <div className={`${styles.statCard} glass`}>
          <span className={styles.statLabel}>Intervention Success</span>
          <span className={styles.statValue}>88.4%</span>
          <span style={{ color: 'var(--accent-secondary)', fontSize: '13px' }}>Grade recovery</span>
        </div>
        <div className={`${styles.statCard} glass`}>
          <span className={styles.statLabel}>Advisor Sync</span>
          <span className={styles.statValue}>Active</span>
          <span style={{ color: 'var(--accent-primary)', fontSize: '13px' }}>Real-time telemetry</span>
        </div>
      </div>

      <div className={`${styles.tableCard} glass`}>
        <h3 style={{ color: 'var(--text-primary)' }}>High-Risk Cohort Telemetry</h3>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Student</th>
                <th>Course</th>
                <th>Attendance</th>
                <th>Avg Grade</th>
                <th>Risk Level</th>
                <th>Identified Risk Indicator</th>
                <th>Current Status</th>
                <th>Intervention Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s) => (
                <tr key={s.id}>
                  <td style={{ fontWeight: 600 }}>{s.name}</td>
                  <td>
                    <span
                      style={{
                        background: 'rgba(255,255,255,0.06)',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        fontSize: '12px',
                      }}
                    >
                      {s.course}
                    </span>
                  </td>
                  <td style={{ color: Number(s.attendance.replace('%', '')) < 65 ? '#ff4757' : '#ffc107' }}>
                    {s.attendance}
                  </td>
                  <td>{s.avgScore}</td>
                  <td>
                    <span className={s.risk === 'HIGH' ? styles.riskHigh : styles.riskMed}>
                      {s.risk}
                    </span>
                  </td>
                  <td style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                    {s.trigger}
                  </td>
                  <td style={{ fontSize: '13px', fontWeight: 600, color: 'var(--accent-primary)' }}>
                    {s.status}
                  </td>
                  <td>
                    <button
                      onClick={() => triggerIntervention(s.id)}
                      style={{
                        background: 'rgba(255, 71, 87, 0.15)',
                        border: '1px solid rgba(255, 71, 87, 0.4)',
                        color: '#ff4757',
                        padding: '6px 12px',
                        borderRadius: '6px',
                        fontSize: '12px',
                        fontWeight: 700,
                      }}
                    >
                      Trigger Advisory
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
