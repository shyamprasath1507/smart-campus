'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './OfficeHours.module.css';

interface Faculty {
  id: string;
  name: string;
  dept: string;
  office: string;
  slots: string[];
}

const mockFaculty: Faculty[] = [
  { id: '1', name: 'Dr. Evelyn Reed', dept: 'Computer Science Department', office: 'Innovation Hall 402', slots: ['Wed 02:00 PM', 'Wed 02:30 PM', 'Fri 10:00 AM'] },
  { id: '2', name: 'Prof. Marcus Vance', dept: 'AI & Data Intelligence Lab', office: 'Tech Park 304', slots: ['Tue 01:00 PM', 'Thu 03:00 PM', 'Thu 03:30 PM'] },
  { id: '3', name: 'Dr. Sarah Chen', dept: 'Department of Modern Physics', office: 'Science Complex 108', slots: ['Mon 11:00 AM', 'Thu 02:00 PM'] },
];

export default function OfficeHoursSchedulerPage() {
  const [booked, setBooked] = useState<string[]>([]);

  const handleBook = (slotKey: string) => {
    setBooked([...booked, slotKey]);
  };

  return (
    <div className={styles.container}>
      <Link href="/student" className={styles.backLink}>
        ← Back to Student Hub
      </Link>

      <div className={styles.headerRow}>
        <div className={styles.titleArea}>
          <h1>👨‍🏫 Faculty Office Hours Scheduler</h1>
          <p className={styles.subtitle}>Book 1-on-1 academic mentorship, project advisement, and research sessions</p>
        </div>
      </div>

      <div className={styles.facultyGrid}>
        {mockFaculty.map((prof) => (
          <div key={prof.id} className={`${styles.profCard} glass`}>
            <div>
              <div className={styles.profTop}>
                <div className={styles.profAvatar}>
                  {prof.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <div className={styles.profName}>{prof.name}</div>
                  <div className={styles.profDept}>{prof.dept}</div>
                  <div style={{ fontSize: '12px', color: 'var(--accent-primary)', marginTop: '2px' }}>
                    📍 {prof.office}
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.slotList}>
              <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Available Timeslots:</span>
              {prof.slots.map((s) => {
                const key = `${prof.id}-${s}`;
                const isBooked = booked.includes(key);

                return (
                  <div key={s} className={styles.slotItem}>
                    <span>🗓️ {s}</span>
                    {isBooked ? (
                      <span style={{ color: 'var(--accent-secondary)', fontWeight: 700, fontSize: '12px' }}>
                        ✓ Confirmed
                      </span>
                    ) : (
                      <button onClick={() => handleBook(key)} className={styles.bookBtn}>
                        Book Slot
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
