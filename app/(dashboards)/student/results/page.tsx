'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Results.module.css';

interface CourseGrade {
  code: string;
  name: string;
  credits: number;
  grade: string;
  points: number;
  status: string;
}

const semesterGrades: Record<string, CourseGrade[]> = {
  'Spring 2026': [
    { code: 'CS301', name: 'Advanced Algorithms', credits: 4, grade: 'A', points: 4.0, status: 'Passed' },
    { code: 'CS315', name: 'Database Management Systems', credits: 4, grade: 'A', points: 4.0, status: 'Passed' },
    { code: 'MATH220', name: 'Linear Algebra & Applications', credits: 3, grade: 'A-', points: 3.7, status: 'Passed' },
    { code: 'PHYS201', name: 'Modern Quantum Mechanics', credits: 4, grade: 'A', points: 4.0, status: 'Passed' },
    { code: 'ENG210', name: 'Technical Communications', credits: 2, grade: 'A', points: 4.0, status: 'Passed' },
  ],
  'Fall 2025': [
    { code: 'CS201', name: 'Data Structures', credits: 4, grade: 'A', points: 4.0, status: 'Passed' },
    { code: 'CS210', name: 'Computer Organization & Architecture', credits: 4, grade: 'B+', points: 3.3, status: 'Passed' },
    { code: 'MATH150', name: 'Discrete Mathematics', credits: 3, grade: 'A', points: 4.0, status: 'Passed' },
    { code: 'ENG101', name: 'Academic Writing & Logic', credits: 3, grade: 'A-', points: 3.7, status: 'Passed' },
  ],
};

export default function ExamResultsPage() {
  const [selectedSemester, setSelectedSemester] = useState('Spring 2026');
  const grades = semesterGrades[selectedSemester] || [];

  return (
    <div className={styles.container}>
      <Link href="/student" className={styles.backLink}>
        ← Back to Student Hub
      </Link>

      <div className={styles.headerRow}>
        <div className={styles.titleArea}>
          <h1>📊 Academic Performance & Exam Results</h1>
          <p className={styles.subtitle}>Transcript records, GPA calculations, and official semester grades</p>
        </div>
      </div>

      <div className={styles.cgpaHero}>
        <div className={`${styles.statCard} glass`}>
          <span className={styles.statLabel}>Cumulative GPA</span>
          <div className={styles.statValue}>3.88</div>
          <span className={styles.statDesc}>Top 3% of Department</span>
        </div>

        <div className={`${styles.statCard} glass`}>
          <span className={styles.statLabel}>Total Earned Credits</span>
          <div className={styles.statValue}>78 / 120</div>
          <span className={styles.statDesc}>On track for 2028 Graduation</span>
        </div>

        <div className={`${styles.statCard} glass`}>
          <span className={styles.statLabel}>Academic Honor</span>
          <div className={styles.statValue}>Dean’s List</div>
          <span className={styles.statDesc}>All Semesters Active</span>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Select Semester:</span>
        {Object.keys(semesterGrades).map((sem) => (
          <button
            key={sem}
            onClick={() => setSelectedSemester(sem)}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              background: selectedSemester === sem ? 'var(--accent-primary)' : 'rgba(255,255,255,0.06)',
              color: selectedSemester === sem ? '#000' : 'var(--text-primary)',
              fontWeight: 600,
              fontSize: '13px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            {sem}
          </button>
        ))}
      </div>

      <div className={`${styles.tableSection} glass`}>
        <table className={styles.gradesTable}>
          <thead>
            <tr>
              <th>Code</th>
              <th>Course Name</th>
              <th>Credits</th>
              <th>Grade</th>
              <th>Grade Points</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {grades.map((g) => (
              <tr key={g.code}>
                <td style={{ fontWeight: 700, color: 'var(--accent-primary)' }}>{g.code}</td>
                <td>{g.name}</td>
                <td>{g.credits}</td>
                <td><span className={styles.gradeBadge}>{g.grade}</span></td>
                <td>{g.points.toFixed(1)}</td>
                <td style={{ color: 'var(--accent-secondary)' }}>✓ {g.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
