'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function TeacherOfficeHoursPage() {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      student: 'Alex Rivera',
      topic: 'CS101: Red-Black Tree Rotation Edge Cases',
      time: 'Today, 2:30 PM - 2:45 PM',
      type: 'In-Person (Room 402)',
      status: 'CONFIRMED',
    },
    {
      id: 2,
      student: 'Jordan Hayes',
      topic: 'Academic Recovery & Midterm Retake Discussion',
      time: 'Tomorrow, 3:00 PM - 3:15 PM',
      type: 'Virtual (SmartCampus Meet)',
      status: 'CONFIRMED',
    },
    {
      id: 3,
      student: 'Elena Rostova',
      topic: 'Undergraduate Research Assistantship Inquiry',
      time: 'Thursday, 4:00 PM - 4:15 PM',
      type: 'In-Person (Room 402)',
      status: 'PENDING',
    },
  ]);

  const confirmBooking = (id: number) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status: 'CONFIRMED' } : b))
    );
  };

  return (
    <div className={styles.container}>
      <Link href="/teacher" className={styles.backLink}>
        ← Back to Faculty Dashboard
      </Link>

      <div className={styles.header}>
        <div className={styles.titleArea}>
          <h1><span>🕒</span> Office Hours & Consultations</h1>
          <p className={styles.subtitle}>
            Set calendar availability, manage one-on-one student slots, and conduct virtual advisories.
          </p>
        </div>
      </div>

      <div className={styles.statsGrid}>
        <div className={`${styles.statCard} glass`}>
          <span className={styles.statLabel}>Weekly Slots Available</span>
          <span className={styles.statValue}>12</span>
        </div>
        <div className={`${styles.statCard} glass`}>
          <span className={styles.statLabel}>Reserved Slots</span>
          <span className={styles.statValue}>{bookings.length}</span>
        </div>
        <div className={`${styles.statCard} glass`}>
          <span className={styles.statLabel}>Pending Approval</span>
          <span className={styles.statValue} style={{ color: '#ffc107' }}>
            {bookings.filter((b) => b.status === 'PENDING').length}
          </span>
        </div>
        <div className={`${styles.statCard} glass`}>
          <span className={styles.statLabel}>Student Rating</span>
          <span className={styles.statValue}>4.9 / 5.0</span>
        </div>
      </div>

      <div className={styles.layout}>
        <div className={`${styles.slotCard} glass`}>
          <h3 style={{ color: 'var(--accent-primary)', fontSize: '18px' }}>Weekly Availability</h3>
          <div className={styles.slotItem}>
            <div>
              <strong>Mondays</strong>
              <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>2:00 PM - 4:00 PM</div>
            </div>
            <span style={{ fontSize: '12px', color: 'var(--accent-secondary)' }}>Active</span>
          </div>
          <div className={styles.slotItem}>
            <div>
              <strong>Wednesdays</strong>
              <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>3:00 PM - 5:00 PM</div>
            </div>
            <span style={{ fontSize: '12px', color: 'var(--accent-secondary)' }}>Active</span>
          </div>
          <div className={styles.slotItem}>
            <div>
              <strong>Thursdays</strong>
              <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>4:00 PM - 5:00 PM</div>
            </div>
            <span style={{ fontSize: '12px', color: 'var(--accent-secondary)' }}>Active</span>
          </div>

          <button
            onClick={() => alert('New availability slot added!')}
            style={{
              background: 'linear-gradient(135deg, var(--accent-primary), #00b3cc)',
              color: 'var(--bg-primary)',
              padding: '10px',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '13px',
              marginTop: '8px',
            }}
          >
            + Add Availability Slot
          </button>
        </div>

        <div className={styles.bookingsList}>
          <h3 style={{ fontSize: '18px', color: 'var(--text-primary)' }}>Student Appointments</h3>
          {bookings.map((b) => (
            <div key={b.id} className={`${styles.bookingCard} glass`}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <strong style={{ fontSize: '16px' }}>{b.student}</strong>
                  <span
                    className={
                      b.status === 'CONFIRMED' ? styles.badgeConfirmed : styles.badgePending
                    }
                  >
                    {b.status}
                  </span>
                </div>
                <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{b.topic}</div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                  🕒 {b.time} &nbsp;|&nbsp; 📍 {b.type}
                </div>
              </div>

              <div>
                {b.status === 'PENDING' ? (
                  <button
                    onClick={() => confirmBooking(b.id)}
                    style={{
                      background: 'var(--accent-primary)',
                      color: 'var(--bg-primary)',
                      padding: '8px 16px',
                      borderRadius: '6px',
                      fontWeight: 700,
                      fontSize: '13px',
                    }}
                  >
                    Accept
                  </button>
                ) : (
                  <button
                    onClick={() => alert('Launching SmartCampus virtual video bridge...')}
                    style={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      color: 'var(--text-primary)',
                      border: '1px solid var(--glass-border)',
                      padding: '8px 16px',
                      borderRadius: '6px',
                      fontWeight: 600,
                      fontSize: '13px',
                    }}
                  >
                    Join Room
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
