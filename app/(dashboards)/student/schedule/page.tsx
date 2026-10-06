'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Schedule.module.css';

interface ClassItem {
  id: string;
  time: string;
  duration: string;
  course: string;
  code: string;
  room: string;
  instructor: string;
  type: string;
  status: 'ongoing' | 'upcoming' | 'completed';
}

const mockSchedule: Record<string, ClassItem[]> = {
  Mon: [
    { id: '1', time: '09:00 - 10:30 AM', duration: '90 mins', course: 'Advanced Algorithms', code: 'CS301', room: 'Hall B, CS Wing', instructor: 'Dr. Evelyn Reed', type: 'Lecture', status: 'completed' },
    { id: '2', time: '11:00 - 12:30 PM', duration: '90 mins', course: 'Machine Learning Lab', code: 'CS410', room: 'Lab 304, Tech Park', instructor: 'Prof. Marcus Vance', type: 'Laboratory', status: 'ongoing' },
    { id: '3', time: '02:00 - 03:30 PM', duration: '90 mins', course: 'Quantum Mechanics', code: 'PHYS201', room: 'Science Hall 101', instructor: 'Dr. Sarah Chen', type: 'Lecture', status: 'upcoming' },
    { id: '4', time: '04:00 - 05:00 PM', duration: '60 mins', course: 'Linear Algebra & Optimization', code: 'MATH220', room: 'Auditorium 2', instructor: 'Prof. Davis', type: 'Tutorial', status: 'upcoming' },
  ],
  Tue: [
    { id: '5', time: '10:00 - 11:30 AM', duration: '90 mins', course: 'Operating Systems Internals', code: 'CS320', room: 'Room 205', instructor: 'Dr. Evelyn Reed', type: 'Lecture', status: 'upcoming' },
    { id: '6', time: '01:30 - 03:00 PM', duration: '90 mins', course: 'Distributed Cloud Systems', code: 'CS450', room: 'Lab 102', instructor: 'Prof. Miller', type: 'Seminar', status: 'upcoming' },
  ],
  Wed: [
    { id: '7', time: '09:00 - 10:30 AM', duration: '90 mins', course: 'Advanced Algorithms', code: 'CS301', room: 'Hall B, CS Wing', instructor: 'Dr. Evelyn Reed', type: 'Lecture', status: 'upcoming' },
    { id: '8', time: '11:00 - 12:30 PM', duration: '90 mins', course: 'Computer Vision & AI', code: 'CS480', room: 'Tech Center 4', instructor: 'Dr. Sarah Chen', type: 'Lecture', status: 'upcoming' },
    { id: '9', time: '02:00 - 04:00 PM', duration: '120 mins', course: 'Robotics Workshop', code: 'ENG390', room: 'Makerspace A', instructor: 'Prof. Davis', type: 'Workshop', status: 'upcoming' },
  ],
  Thu: [
    { id: '10', time: '10:00 - 11:30 AM', duration: '90 mins', course: 'Linear Algebra & Optimization', code: 'MATH220', room: 'Auditorium 2', instructor: 'Prof. Davis', type: 'Lecture', status: 'upcoming' },
    { id: '11', time: '01:30 - 03:30 PM', duration: '120 mins', course: 'Database Systems Architecture', code: 'CS315', room: 'Lab 201', instructor: 'Prof. Miller', type: 'Laboratory', status: 'upcoming' },
  ],
  Fri: [
    { id: '12', time: '09:30 - 11:00 AM', duration: '90 mins', course: 'Quantum Mechanics', code: 'PHYS201', room: 'Science Hall 101', instructor: 'Dr. Sarah Chen', type: 'Lecture', status: 'upcoming' },
    { id: '13', time: '02:00 - 03:30 PM', duration: '90 mins', course: 'Capstone Project Colloquium', code: 'CS499', room: 'Executive Hall', instructor: 'Faculty Board', type: 'Colloquium', status: 'upcoming' },
  ]
};

export default function SmartTimetablePage() {
  const [selectedDay, setSelectedDay] = useState<string>('Mon');
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const currentClasses = mockSchedule[selectedDay] || [];

  return (
    <div className={styles.container}>
      <Link href="/student" className={styles.backLink}>
        ← Back to Student Hub
      </Link>

      <div className={styles.headerRow}>
        <div className={styles.titleArea}>
          <h1>📅 Smart Timetable</h1>
          <p className={styles.subtitle}>Real-time synchronized schedule with campus IoT presence</p>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.syncBtn}>Sync to iCal / Google</button>
        </div>
      </div>

      <div className={`${styles.alertCard} glass`}>
        <div className={styles.alertLeft}>
          <span className={styles.alertIcon}>⚡</span>
          <div>
            <div className={styles.alertTitle}>Current Class in Progress: Machine Learning Lab</div>
            <div className={styles.alertDesc}>Lab 304, Tech Park • Prof. Marcus Vance • Tap RFID or check-in via App</div>
          </div>
        </div>
        <span className={styles.liveTag}>Live Now</span>
      </div>

      <div className={styles.dayTabs}>
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`${styles.dayBtn} ${selectedDay === day ? styles.dayBtnActive : ''}`}
          >
            {day === 'Mon' ? 'Monday' : day === 'Tue' ? 'Tuesday' : day === 'Wed' ? 'Wednesday' : day === 'Thu' ? 'Thursday' : 'Friday'}
          </button>
        ))}
      </div>

      <div className={styles.scheduleList}>
        {currentClasses.map((item) => (
          <div key={item.id} className={`${styles.scheduleItem} glass`}>
            <div className={styles.timeCol}>
              <span className={styles.timeText}>{item.time}</span>
              <span className={styles.duration}>{item.duration}</span>
            </div>

            <div className={styles.infoCol}>
              <div className={styles.courseHeader}>
                <span className={styles.courseName}>{item.course}</span>
                <span className={styles.courseBadge}>{item.code}</span>
                <span className={styles.courseBadge}>{item.type}</span>
              </div>
              <div className={styles.metaRow}>
                <span>📍 {item.room}</span>
                <span>👨‍🏫 {item.instructor}</span>
              </div>
            </div>

            <div className={styles.statusCol}>
              <span className={`${styles.statusBadge} ${
                item.status === 'ongoing' ? styles.statusOngoing :
                item.status === 'upcoming' ? styles.statusUpcoming : styles.statusCompleted
              }`}>
                {item.status === 'ongoing' ? '● In Progress' :
                 item.status === 'upcoming' ? 'Upcoming' : 'Completed'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
