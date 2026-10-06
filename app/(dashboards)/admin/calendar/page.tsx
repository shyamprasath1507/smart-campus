import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function AcademicCalendarPage() {
  const milestones = [
    {
      month: 'OCT',
      day: '15',
      title: 'Midterm Examination Period Begins',
      desc: 'Central exam slots open across all science and engineering lecture halls.',
      type: 'EXAMINATION',
      color: '#FFB800',
    },
    {
      month: 'OCT',
      day: '28',
      title: 'Course Drop / Withdrawal Deadline',
      desc: 'Final cutoff date for students to modify term course credits without penalty.',
      type: 'DEADLINE',
      color: '#00E5FF',
    },
    {
      month: 'NOV',
      day: '24',
      title: 'Thanksgiving & Fall Campus Recess',
      desc: 'Campus administrative offices, research facilities, and classes closed for recess.',
      type: 'HOLIDAY',
      color: '#00FF85',
    },
    {
      month: 'DEC',
      day: '10',
      title: 'Final Capstone Project Submissions',
      desc: 'Submissions portal closes for senior capstone papers and team repositories.',
      type: 'ACADEMIC',
      color: '#A855F7',
    },
    {
      month: 'DEC',
      day: '14',
      title: 'Fall Semester Final Examinations',
      desc: 'Comprehensive end-of-term examinations commence.',
      type: 'EXAMINATION',
      color: '#FF4757',
    },
    {
      month: 'DEC',
      day: '22',
      title: 'Winter Commencement & Degree Ceremony',
      desc: 'Graduation proceedings in the Central Grand Auditorium.',
      type: 'CEREMONY',
      color: '#00E5FF',
    },
  ];

  return (
    <div className={styles.container}>
      <Link href="/admin" className={styles.backLink}>
        ← Back to Command Center
      </Link>

      <div className={styles.header}>
        <div className={styles.titleArea}>
          <div className={styles.titleRow}>
            <span className={styles.icon}>📅</span>
            <h1 className={styles.title}>Academic Calendar & Milestones</h1>
          </div>
          <p className={styles.subtitle}>
            Manage campus-wide term dates, examination blocks, registration deadlines, and university holidays.
          </p>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.primaryBtn}>+ Add Calendar Event</button>
        </div>
      </div>

      <div className={styles.metricsGrid}>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Current Academic Term</span>
          <span className={styles.metricValue}>Fall 2026</span>
          <span className={styles.metricSub}>Week 8 of 16 complete</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Days to Finals</span>
          <span className={styles.metricValue}>69 Days</span>
          <span className={styles.metricSub}>Dec 14 examination start</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Scheduled Holidays</span>
          <span className={styles.metricValue}>12 Days</span>
          <span className={styles.metricSub}>Across 2026-2027 cycle</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Instructional Days</span>
          <span className={styles.metricValue}>74 Days</span>
          <span className={styles.metricSub}>Accreditation requirements met</span>
        </div>
      </div>

      <div className={`${styles.glassPanel} glass`}>
        <h2 style={{ fontSize: 18, fontWeight: 700 }}>Upcoming Institutional Milestones</h2>
        <div className={styles.timelineList}>
          {milestones.map((item, idx) => (
            <div key={idx} className={styles.eventItem}>
              <div className={styles.eventDateBox}>
                <span className={styles.eventMonth}>{item.month}</span>
                <span className={styles.eventDay}>{item.day}</span>
              </div>
              <div className={styles.eventDetails}>
                <h3 className={styles.eventTitle}>{item.title}</h3>
                <p className={styles.eventDesc}>{item.desc}</p>
              </div>
              <span
                className={styles.badgeTag}
                style={{
                  background: `${item.color}22`,
                  color: item.color,
                  border: `1px solid ${item.color}55`,
                }}
              >
                {item.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
