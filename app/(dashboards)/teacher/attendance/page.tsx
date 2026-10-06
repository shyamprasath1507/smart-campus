'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function TeacherAttendancePage() {
  const [isSessionActive, setIsSessionActive] = useState(true);
  const [timer, setTimer] = useState(15);
  const [selectedCourse, setSelectedCourse] = useState('CS101');

  useEffect(() => {
    if (!isSessionActive) return;
    const interval = setInterval(() => {
      setTimer((prev) => (prev <= 1 ? 15 : prev - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [isSessionActive]);

  const [records, setRecords] = useState([
    { rfid: '04A9C12B', name: 'Alex Rivera', time: '10:02 AM', status: 'PRESENT' },
    { rfid: '04B8F991', name: 'Samantha Chen', time: '10:04 AM', status: 'PRESENT' },
    { rfid: '042C9901', name: 'Marcus Johnson', time: '10:14 AM', status: 'LATE' },
    { rfid: '041E44AA', name: 'Priya Sharma', time: '10:01 AM', status: 'PRESENT' },
    { rfid: '0488BB23', name: 'David Kim', time: '—', status: 'ABSENT' },
    { rfid: '0477EE51', name: 'Elena Rostova', time: '10:03 AM', status: 'PRESENT' },
  ]);

  const toggleStatus = (index: number) => {
    setRecords((prev) =>
      prev.map((rec, i) => {
        if (i !== index) return rec;
        const nextStatus =
          rec.status === 'PRESENT' ? 'LATE' : rec.status === 'LATE' ? 'ABSENT' : 'PRESENT';
        return { ...rec, status: nextStatus };
      })
    );
  };

  return (
    <div className={styles.container}>
      <Link href="/teacher" className={styles.backLink}>
        ← Back to Faculty Dashboard
      </Link>

      <div className={styles.header}>
        <div className={styles.titleArea}>
          <h1><span>📷</span> QR Attendance Scanner & Sessions</h1>
          <p className={styles.subtitle}>
            Dynamic time-synced QR code authentication with NFC & biometric check-ins.
          </p>
        </div>
      </div>

      <div className={styles.statsGrid}>
        <div className={`${styles.statCard} glass`}>
          <span className={styles.statLabel}>Current Session</span>
          <span className={styles.statValue}>{selectedCourse}</span>
          <span style={{ color: 'var(--accent-secondary)', fontSize: '13px' }}>
            Lecture Hall 302
          </span>
        </div>
        <div className={`${styles.statCard} glass`}>
          <span className={styles.statLabel}>Present</span>
          <span className={styles.statValue}>
            {records.filter((r) => r.status === 'PRESENT').length} / {records.length}
          </span>
          <span style={{ color: 'var(--accent-secondary)', fontSize: '13px' }}>83% Cohort Rate</span>
        </div>
        <div className={`${styles.statCard} glass`}>
          <span className={styles.statLabel}>Tardy / Late</span>
          <span className={styles.statValue}>
            {records.filter((r) => r.status === 'LATE').length}
          </span>
          <span style={{ color: '#ffc107', fontSize: '13px' }}>Within 15 mins grace</span>
        </div>
        <div className={`${styles.statCard} glass`}>
          <span className={styles.statLabel}>Unaccounted</span>
          <span className={styles.statValue}>
            {records.filter((r) => r.status === 'ABSENT').length}
          </span>
          <span style={{ color: '#ff4757', fontSize: '13px' }}>Alerts queued</span>
        </div>
      </div>

      <div className={styles.scannerLayout}>
        <div className={`${styles.qrCard} glass`}>
          <h3 style={{ color: 'var(--accent-primary)' }}>Live Rolling QR</h3>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
            Students scan using their Smart Campus Mobile App. Token rotates every 15s.
          </p>

          <div className={styles.qrBox}>
            <div className={styles.qrScanLine} />
            <div className={styles.qrMockIcon}>📲</div>
            <div className={styles.qrToken}>SC-{selectedCourse}-78X{timer}</div>
          </div>

          <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
            Rotating in <strong style={{ color: 'var(--accent-primary)' }}>{timer}s</strong>
          </div>

          <div className={styles.sessionControls}>
            <button
              onClick={() => setIsSessionActive(!isSessionActive)}
              className={isSessionActive ? styles.stopBtn : styles.startBtn}
            >
              {isSessionActive ? 'End Live Session' : 'Start Live Session'}
            </button>
          </div>
        </div>

        <div className={`${styles.rosterCard} glass`}>
          <div className={styles.rosterHeader}>
            <h3 style={{ color: 'var(--text-primary)' }}>Real-Time Verification Roster</h3>
            <button
              onClick={() => alert('Attendance CSV downloaded successfully!')}
              style={{
                fontSize: '13px',
                color: 'var(--accent-primary)',
                background: 'rgba(0, 229, 255, 0.1)',
                padding: '6px 12px',
                borderRadius: '6px',
              }}
            >
              Export CSV
            </button>
          </div>

          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>RFID Tag</th>
                  <th>Student Name</th>
                  <th>Scan Time</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {records.map((rec, i) => (
                  <tr key={rec.rfid}>
                    <td style={{ fontFamily: 'monospace', color: 'var(--text-secondary)' }}>
                      {rec.rfid}
                    </td>
                    <td style={{ fontWeight: 600 }}>{rec.name}</td>
                    <td style={{ color: 'var(--text-muted)' }}>{rec.time}</td>
                    <td>
                      <span
                        className={
                          rec.status === 'PRESENT'
                            ? styles.badgePresent
                            : rec.status === 'LATE'
                            ? styles.badgeLate
                            : styles.badgeAbsent
                        }
                      >
                        {rec.status}
                      </span>
                    </td>
                    <td>
                      <button
                        onClick={() => toggleStatus(i)}
                        style={{
                          fontSize: '12px',
                          color: 'var(--text-secondary)',
                          textDecoration: 'underline',
                        }}
                      >
                        Override
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
