'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Attendance.module.css';

interface CourseAttendance {
  code: string;
  name: string;
  attended: number;
  total: number;
  percentage: number;
}

const courseAttendanceData: CourseAttendance[] = [
  { code: 'CS301', name: 'Advanced Algorithms', attended: 22, total: 24, percentage: 91.7 },
  { code: 'CS410', name: 'Machine Learning Lab', attended: 12, total: 12, percentage: 100.0 },
  { code: 'PHYS201', name: 'Quantum Mechanics', attended: 19, total: 22, percentage: 86.4 },
  { code: 'MATH220', name: 'Linear Algebra & Optimization', attended: 18, total: 22, percentage: 81.8 },
  { code: 'ENG210', name: 'Technical Communications', attended: 10, total: 12, percentage: 83.3 },
];

const mockTaps = [
  { time: 'Today, 11:02 AM', room: 'Lab 304 RFID Reader', status: 'PRESENT', course: 'CS410: Machine Learning Lab' },
  { time: 'Today, 09:01 AM', room: 'Hall B CS Wing Gate 1', status: 'PRESENT', course: 'CS301: Advanced Algorithms' },
  { time: 'Yesterday, 02:05 PM', room: 'Science Hall Turnstile', status: 'PRESENT', course: 'PHYS201: Quantum Mechanics' },
  { time: 'Oct 3, 2026, 10:14 AM', room: 'Auditorium 2 Door A', status: 'LATE (Excused)', course: 'MATH220: Linear Algebra' },
];

export default function AttendanceTrackerPage() {
  const totalAttended = courseAttendanceData.reduce((acc, c) => acc + c.attended, 0);
  const totalClasses = courseAttendanceData.reduce((acc, c) => acc + c.total, 0);
  const overallPercentage = ((totalAttended / totalClasses) * 100).toFixed(1);

  return (
    <div className={styles.container}>
      <Link href="/student" className={styles.backLink}>
        ← Back to Student Hub
      </Link>

      <div className={styles.headerRow}>
        <div className={styles.titleArea}>
          <h1>✅ Smart Attendance Tracker</h1>
          <p className={styles.subtitle}>RFID sensor tap-ins, course compliance minimums, and excused leave logs</p>
        </div>
      </div>

      <div className={`${styles.kpiCard} glass`}>
        <div>
          <div style={{ fontSize: '13px', color: 'var(--text-secondary)', fontWeight: 600 }}>OVERALL ATTENDANCE RATE</div>
          <div className={styles.kpiVal}>{overallPercentage}%</div>
          <div style={{ fontSize: '14px', color: 'var(--accent-secondary)' }}>
            ✓ Compliant with university 75% minimum criteria
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '24px', fontWeight: 800 }}>{totalAttended} / {totalClasses}</div>
          <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Total Class Sessions Attended</div>
        </div>
      </div>

      <h2 style={{ fontSize: '20px', fontWeight: 700 }}>Course Breakdown</h2>
      <div className={styles.coursesList}>
        {courseAttendanceData.map((c) => (
          <div key={c.code} className={`${styles.courseItem} glass`}>
            <div className={styles.courseTop}>
              <div>
                <strong style={{ color: 'var(--text-primary)' }}>{c.code}: {c.name}</strong>
                <span style={{ fontSize: '12px', color: 'var(--text-secondary)', marginLeft: '12px' }}>
                  {c.attended} of {c.total} classes
                </span>
              </div>
              <span style={{ fontWeight: 800, color: c.percentage >= 85 ? 'var(--accent-secondary)' : 'var(--accent-primary)' }}>
                {c.percentage.toFixed(1)}%
              </span>
            </div>
            <div className={styles.progressBarBg}>
              <div className={styles.progressBarFill} style={{ width: `${c.percentage}%` }}></div>
            </div>
          </div>
        ))}
      </div>

      <h2 style={{ fontSize: '20px', fontWeight: 700 }}>Recent Tap-In Events</h2>
      <div className="glass" style={{ borderRadius: 'var(--border-radius)', overflow: 'hidden' }}>
        <table className={styles.recentLogsTable}>
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Course Session</th>
              <th>Sensor / Gate</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {mockTaps.map((t, idx) => (
              <tr key={idx}>
                <td>{t.time}</td>
                <td>{t.course}</td>
                <td>{t.room}</td>
                <td style={{ color: 'var(--accent-secondary)', fontWeight: 600 }}>● {t.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
