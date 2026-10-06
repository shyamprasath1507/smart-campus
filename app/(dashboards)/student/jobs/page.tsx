'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Jobs.module.css';

interface Job {
  id: string;
  title: string;
  dept: string;
  wage: string;
  hours: string;
  type: string;
  deadline: string;
}

const mockJobs: Job[] = [
  { id: '1', title: 'Undergraduate AI Lab Research Assistant', dept: 'Cognitive Computing Institute', wage: '$22.50 / hr', hours: '12-15 hrs/week', type: 'Work-Study & Departmental', deadline: 'Oct 20, 2026' },
  { id: '2', title: 'IT Service Desk & Hardware Specialist', dept: 'Campus Information Technology', wage: '$19.00 / hr', hours: '10-20 hrs/week', type: 'Work-Study Eligible', deadline: 'Oct 18, 2026' },
  { id: '3', title: 'Science Library Circulation & Archive Assistant', dept: 'University Library System', wage: '$17.50 / hr', hours: '8-12 hrs/week', type: 'Part-Time Student Role', deadline: 'Oct 25, 2026' },
  { id: '4', title: 'Campus Tour Guide & Student Ambassador', dept: 'Office of Undergraduate Admissions', wage: '$18.00 / hr', hours: '5-10 hrs/week', type: 'Hourly Campus Role', deadline: 'Nov 01, 2026' },
];

export default function CampusJobBoardPage() {
  const [applied, setApplied] = useState<string[]>([]);

  const handleApply = (id: string) => {
    setApplied([...applied, id]);
  };

  return (
    <div className={styles.container}>
      <Link href="/student" className={styles.backLink}>
        ← Back to Student Hub
      </Link>

      <div className={styles.headerRow}>
        <div className={styles.titleArea}>
          <h1>💼 Campus Student Job Board</h1>
          <p className={styles.subtitle}>On-campus employment, federal work-study, lab assistantships, and internships</p>
        </div>
      </div>

      <div className={styles.jobsList}>
        {mockJobs.map((job) => {
          const isApplied = applied.includes(job.id);

          return (
            <div key={job.id} className={`${styles.jobCard} glass`}>
              <div className={styles.jobLeft}>
                <span className={styles.jobDept}>{job.dept}</span>
                <h3 className={styles.jobTitle}>{job.title}</h3>
                <div className={styles.jobMeta}>
                  <span>💵 {job.wage}</span>
                  <span>⏱️ {job.hours}</span>
                  <span>🏷️ {job.type}</span>
                  <span>📅 Apply by: {job.deadline}</span>
                </div>
              </div>

              <div>
                {isApplied ? (
                  <span style={{ color: 'var(--accent-secondary)', fontWeight: 700, fontSize: '14px' }}>
                    ✓ Applied with Student Profile
                  </span>
                ) : (
                  <button onClick={() => handleApply(job.id)} className={styles.applyBtn}>
                    1-Click Apply
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
