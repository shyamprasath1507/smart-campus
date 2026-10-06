'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function TeacherExamsPage() {
  const [exams] = useState([
    {
      id: 1,
      course: 'CS101',
      title: 'Midterm Examination: Algorithms & Data Structures',
      date: 'Nov 12, 2026',
      time: '10:00 AM - 12:00 PM (2 Hours)',
      room: 'Auditorium Alpha & Beta',
      proctors: 'Prof. Vance, TA Emily Clark',
      format: 'In-Person Proctored Written & Code',
      students: 45,
    },
    {
      id: 2,
      course: 'CS302',
      title: 'Practical Database Systems Lab Exam',
      date: 'Nov 18, 2026',
      time: '02:00 PM - 04:00 PM (2 Hours)',
      room: 'Turing Computer Lab 1 & 2',
      proctors: 'Prof. David Lee, TA Kevin Patel',
      format: 'Hands-on SQL & Query Tuning',
      students: 52,
    },
    {
      id: 3,
      course: 'AI405',
      title: 'Deep Learning Final Project Defense & Viva',
      date: 'Dec 04, 2026',
      time: '09:00 AM - 01:00 PM',
      room: 'Innovation Center 402',
      proctors: 'External Committee & Faculty',
      format: 'Oral Presentation & Code Defense',
      students: 38,
    },
  ]);

  return (
    <div className={styles.container}>
      <Link href="/teacher" className={styles.backLink}>
        ← Back to Faculty Dashboard
      </Link>

      <div className={styles.header}>
        <div className={styles.titleArea}>
          <h1><span>📅</span> Examination & Proctoring Scheduler</h1>
          <p className={styles.subtitle}>
            Organize midterm dates, book exam halls, assign invigilators, and publish seating matrices.
          </p>
        </div>
        <button
          onClick={() => alert('Opening examination hall requisition portal...')}
          style={{
            background: 'linear-gradient(135deg, var(--accent-primary), #00b3cc)',
            color: 'var(--bg-primary)',
            padding: '10px 18px',
            borderRadius: '8px',
            fontWeight: 700,
            fontSize: '14px',
          }}
        >
          + Request Exam Hall
        </button>
      </div>

      <div className={styles.examsGrid}>
        {exams.map((exam) => (
          <div key={exam.id} className={`${styles.examCard} glass`}>
            <div className={styles.examHeader}>
              <div>
                <span className={styles.examBadge}>{exam.course}</span>
                <h3 style={{ fontSize: '18px', color: 'var(--text-primary)', marginTop: '4px' }}>
                  {exam.title}
                </h3>
              </div>
            </div>

            <div>
              <div className={styles.detailRow}>
                <span>Date & Time</span>
                <strong style={{ color: 'var(--accent-secondary)' }}>
                  {exam.date} ({exam.time})
                </strong>
              </div>
              <div className={styles.detailRow}>
                <span>Location</span>
                <strong>{exam.room}</strong>
              </div>
              <div className={styles.detailRow}>
                <span>Proctors / TAs</span>
                <span>{exam.proctors}</span>
              </div>
              <div className={styles.detailRow}>
                <span>Format</span>
                <span>{exam.format}</span>
              </div>
              <div className={styles.detailRow}>
                <span>Registered Students</span>
                <strong>{exam.students} Candidates</strong>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}>
              <button
                onClick={() => alert('Generating dynamic anti-cheating seating chart...')}
                style={{
                  flex: 1,
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid var(--glass-border)',
                  color: 'var(--text-primary)',
                  padding: '8px',
                  borderRadius: '6px',
                  fontSize: '13px',
                  fontWeight: 600,
                }}
              >
                Seating Chart
              </button>
              <button
                onClick={() => alert('Printing watermarked exam paper booklets...')}
                style={{
                  flex: 1,
                  background: 'rgba(0, 229, 255, 0.1)',
                  color: 'var(--accent-primary)',
                  padding: '8px',
                  borderRadius: '6px',
                  fontSize: '13px',
                  fontWeight: 600,
                }}
              >
                Print Packets
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
