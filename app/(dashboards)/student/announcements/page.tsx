'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Announcements.module.css';

interface AnnouncementItem {
  id: string;
  title: string;
  course: string;
  sender: string;
  role: string;
  date: string;
  content: string;
  urgent?: boolean;
}

const mockAnnouncements: AnnouncementItem[] = [
  {
    id: '1',
    title: 'Midterm Examination Schedule & Venue Allocation',
    course: 'CS301: Advanced Algorithms',
    sender: 'Dr. Evelyn Reed',
    role: 'Course Coordinator',
    date: '2 hours ago',
    content: 'The Fall Midterm will take place this Thursday at 10:00 AM in Examination Hall B. Bring your physical or Digital Student ID. Formula sheets will be provided at the desks.',
    urgent: true,
  },
  {
    id: '2',
    title: 'Lab Session Relocated to Innovation Hub 304',
    course: 'CS410: Machine Learning Lab',
    sender: 'Prof. Marcus Vance',
    role: 'Instructor',
    date: 'Yesterday at 4:15 PM',
    content: 'Due to scheduled GPU cluster maintenance in Lab 201, tomorrow’s lab will convene in Innovation Hub Room 304. Docker images and Jupyter notebooks are pre-synced.',
    urgent: false,
  },
  {
    id: '3',
    title: 'Guest Lecture: Quantum Computing in Cryptography',
    course: 'PHYS201: Quantum Mechanics',
    sender: 'Dr. Sarah Chen',
    role: 'Professor',
    date: 'Oct 4, 2026',
    content: 'Join us this Friday for a guest seminar by Dr. Aris Thorne from Quantum Dynamics. Attendance is worth 2 bonus project credits.',
    urgent: false,
  },
  {
    id: '4',
    title: 'Annual Campus Innovation Hackathon 2026 Registrations Open',
    course: 'Campus Wide',
    sender: 'Office of Student Affairs',
    role: 'Campus Administration',
    date: 'Oct 3, 2026',
    content: 'Registration for the 48-Hour Smart Campus Hackathon is now live! Over $10,000 in prizes and seed grants for winning projects. Register teams up to 4.',
    urgent: false,
  },
];

export default function CourseAnnouncementsPage() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filters = ['All', 'Urgent', 'CS301', 'CS410', 'PHYS201', 'Campus Wide'];

  const filtered = mockAnnouncements.filter((item) => {
    const matchesFilter =
      filter === 'All' ? true :
      filter === 'Urgent' ? item.urgent :
      item.course.includes(filter);

    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.content.toLowerCase().includes(search.toLowerCase()) ||
      item.course.toLowerCase().includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className={styles.container}>
      <Link href="/student" className={styles.backLink}>
        ← Back to Student Hub
      </Link>

      <div className={styles.headerRow}>
        <div className={styles.titleArea}>
          <h1>📢 Course Announcements</h1>
          <p className={styles.subtitle}>Official department notices, instructor updates, and campus alerts</p>
        </div>
      </div>

      <div className={styles.searchFilterBar}>
        <input
          type="text"
          placeholder="Search announcements, professors, or keywords..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.searchInput}
        />

        <div className={styles.filterChips}>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`${styles.filterChip} ${filter === f ? styles.filterChipActive : ''}`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.announcementsGrid}>
        {filtered.map((item) => (
          <div key={item.id} className={`${styles.announcementCard} glass`}>
            <div className={styles.cardTop}>
              <div className={styles.badgeGroup}>
                <span className={styles.courseBadge}>{item.course}</span>
                {item.urgent && <span className={styles.urgentBadge}>URGENT</span>}
              </div>
              <span className={styles.dateText}>{item.date}</span>
            </div>

            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardBody}>{item.content}</p>

            <div className={styles.cardFooter}>
              <div className={styles.senderInfo}>
                <div className={styles.avatar}>
                  {item.sender.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <div className={styles.senderName}>{item.sender}</div>
                  <div className={styles.senderRole}>{item.role}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
