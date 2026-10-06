'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function TeacherCoursesPage() {
  const [courses] = useState([
    {
      code: 'CS101',
      title: 'Introduction to Computer Science',
      term: 'Fall 2026',
      students: 45,
      schedule: 'Mon, Wed 10:00 - 11:30 AM',
      location: 'Science Hall 302',
      progress: 68,
      activeAssignments: 2,
    },
    {
      code: 'CS302',
      title: 'Database Management Systems',
      term: 'Fall 2026',
      students: 52,
      schedule: 'Tue, Thu 02:00 - 03:30 PM',
      location: 'Turing Lab 104',
      progress: 54,
      activeAssignments: 1,
    },
    {
      code: 'AI405',
      title: 'Deep Learning & Neural Networks',
      term: 'Fall 2026',
      students: 38,
      schedule: 'Mon, Fri 01:00 - 02:30 PM',
      location: 'Innovation Complex 201',
      progress: 80,
      activeAssignments: 3,
    },
    {
      code: 'ENG201',
      title: 'Technical Writing for Engineers',
      term: 'Fall 2026',
      students: 28,
      schedule: 'Wed 03:00 - 05:00 PM',
      location: 'Humanities Wing 110',
      progress: 42,
      activeAssignments: 1,
    },
  ]);

  return (
    <div className={styles.container}>
      <Link href="/teacher" className={styles.backLink}>
        ← Back to Faculty Dashboard
      </Link>

      <div className={styles.header}>
        <div className={styles.titleArea}>
          <h1><span>📚</span> My Courses & Curriculum</h1>
          <p className={styles.subtitle}>
            Oversee assigned courses, track module completion, and manage student cohorts.
          </p>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.secondaryBtn}>Export Syllabus</button>
          <button className={styles.primaryBtn}>+ Create New Course</button>
        </div>
      </div>

      <div className={styles.statsGrid}>
        <div className={`${styles.statCard} glass`}>
          <span className={styles.statLabel}>Active Courses</span>
          <span className={styles.statValue}>{courses.length}</span>
          <span className={styles.statHint}>Across 2 Departments</span>
        </div>
        <div className={`${styles.statCard} glass`}>
          <span className={styles.statLabel}>Total Enrolled</span>
          <span className={styles.statValue}>
            {courses.reduce((acc, c) => acc + c.students, 0)}
          </span>
          <span className={styles.statHint}>98.4% Retention</span>
        </div>
        <div className={`${styles.statCard} glass`}>
          <span className={styles.statLabel}>Avg Progress</span>
          <span className={styles.statValue}>61%</span>
          <span className={styles.statHint}>Week 7 of 14</span>
        </div>
        <div className={`${styles.statCard} glass`}>
          <span className={styles.statLabel}>Open Assignments</span>
          <span className={styles.statValue}>7</span>
          <span className={styles.statHint}>2 Due Tomorrow</span>
        </div>
      </div>

      <div className={styles.coursesGrid}>
        {courses.map((course) => (
          <div key={course.code} className={`${styles.courseCard} glass`}>
            <div className={styles.courseHeader}>
              <div>
                <span className={styles.courseCode}>{course.code}</span>
                <h3 className={styles.courseTitle}>{course.title}</h3>
                <span className={styles.courseTerm}>{course.term}</span>
              </div>
            </div>

            <div className={styles.courseMeta}>
              <span>👥 {course.students} Students</span>
              <span>📍 {course.location}</span>
            </div>

            <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
              🕒 {course.schedule}
            </div>

            <div className={styles.progressContainer}>
              <div className={styles.progressInfo}>
                <span>Syllabus Completion</span>
                <span style={{ fontWeight: 700, color: 'var(--accent-secondary)' }}>
                  {course.progress}%
                </span>
              </div>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>

            <div className={styles.cardActions}>
              <button className={styles.cardBtn}>Course Roster</button>
              <button className={styles.cardBtn}>Upload Material</button>
              <button className={styles.cardBtn}>Announcements</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
