import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function CourseCatalogPage() {
  const courses = [
    { code: 'CS-482', title: 'Deep Generative AI & LLMs', dept: 'Computer Science', credits: '4.0', instructor: 'Dr. Evelyn Vance', enrolled: '120 / 120', status: 'CAPACITY FULL' },
    { code: 'DS-301', title: 'Applied Statistical Learning', dept: 'Data Science', credits: '3.0', instructor: 'Prof. Ananya Rao', enrolled: '85 / 90', status: 'OPEN' },
    { code: 'ROB-510', title: 'Autonomous Robotics & SLAM', dept: 'Robotics Engineering', credits: '4.0', instructor: 'Dr. Marcus Webb', enrolled: '45 / 50', status: 'OPEN' },
    { code: 'BIO-220', title: 'Molecular Genetics & CRISPR', dept: 'Health Sciences', credits: '4.0', instructor: 'Prof. Sarah Jenkins', enrolled: '72 / 75', status: 'OPEN' },
    { code: 'EE-340', title: 'Embedded Microcontroller Systems', dept: 'Electrical Eng.', credits: '3.5', instructor: 'Prof. David Chang', enrolled: '60 / 60', status: 'CAPACITY FULL' },
    { code: 'ECON-102', title: 'Macroeconomic Principles', dept: 'Business & Econ', credits: '3.0', instructor: 'Dr. Linda Morales', enrolled: '190 / 200', status: 'OPEN' },
  ];

  return (
    <div className={styles.container}>
      <Link href="/admin" className={styles.backLink}>
        ← Back to Command Center
      </Link>

      <div className={styles.header}>
        <div className={styles.titleArea}>
          <div className={styles.titleRow}>
            <span className={styles.icon}>📖</span>
            <h1 className={styles.title}>University Course Master & Curriculum</h1>
          </div>
          <p className={styles.subtitle}>
            Syllabus repository, course prerequisites, enrollment caps, instructor assignments, and accreditation review.
          </p>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.primaryBtn}>+ Create New Course</button>
        </div>
      </div>

      <div className={styles.metricsGrid}>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Active Catalog Courses</span>
          <span className={styles.metricValue}>340 Courses</span>
          <span className={styles.metricSub}>Across 14 Academic Departments</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Total Student Seats</span>
          <span className={styles.metricValue}>14,800</span>
          <span className={styles.metricSub}>91.4% Capacity Enrolled</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Accredited Programs</span>
          <span className={styles.metricValue}>100%</span>
          <span className={styles.metricSub}>ABET / AACSB Compliant</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Faculty Instructors</span>
          <span className={styles.metricValue}>480 Profs</span>
          <span className={styles.metricSub}>12:1 Student-to-Faculty Ratio</span>
        </div>
      </div>

      <div className={`${styles.glassPanel} glass`}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: 18, fontWeight: 700 }}>Curriculum Directory</h2>
          <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>Fall 2026 Active Offerings</span>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}>Course Code</th>
                <th className={styles.th}>Title</th>
                <th className={styles.th}>Department</th>
                <th className={styles.th}>Credits</th>
                <th className={styles.th}>Lead Instructor</th>
                <th className={styles.th}>Enrollment</th>
                <th className={styles.th}>Status</th>
                <th className={styles.th}>Action</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((c) => (
                <tr key={c.code} className={styles.tr}>
                  <td className={styles.td} style={{ fontWeight: 700, color: 'var(--accent-primary)', fontFamily: 'monospace' }}>
                    {c.code}
                  </td>
                  <td className={styles.td} style={{ fontWeight: 600 }}>{c.title}</td>
                  <td className={styles.td}>{c.dept}</td>
                  <td className={styles.td}>{c.credits}</td>
                  <td className={styles.td}>{c.instructor}</td>
                  <td className={styles.td}>{c.enrolled}</td>
                  <td className={styles.td}>
                    <span className={c.status === 'OPEN' ? styles.badgeActive : styles.badgeFull}>
                      {c.status}
                    </span>
                  </td>
                  <td className={styles.td}>
                    <button className={styles.actionBtn}>Edit Syllabus</button>
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
