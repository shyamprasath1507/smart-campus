'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function TeacherGradingPage() {
  const [submissions, setSubmissions] = useState([
    {
      id: 'sub-1',
      student: 'Alex Rivera',
      course: 'CS101',
      assignment: 'Red-Black Tree Balance',
      file: 'rbtree_sol.cpp',
      submittedAt: 'Oct 17, 2:14 PM',
      similarity: 3,
      score: 95,
      graded: true,
    },
    {
      id: 'sub-2',
      student: 'Samantha Chen',
      course: 'CS101',
      assignment: 'Red-Black Tree Balance',
      file: 'rbtree_final.cpp',
      submittedAt: 'Oct 17, 4:50 PM',
      similarity: 4,
      score: 98,
      graded: true,
    },
    {
      id: 'sub-3',
      student: 'Jordan Hayes',
      course: 'CS101',
      assignment: 'Red-Black Tree Balance',
      file: 'main.cpp',
      submittedAt: 'Oct 18, 11:02 AM',
      similarity: 42,
      score: 0,
      graded: false,
    },
    {
      id: 'sub-4',
      student: 'Elena Rostova',
      course: 'CS302',
      assignment: 'Relational Normalization',
      file: 'bcnf_proof.pdf',
      submittedAt: 'Oct 18, 1:20 PM',
      similarity: 7,
      score: 88,
      graded: true,
    },
    {
      id: 'sub-5',
      student: 'David Kim',
      course: 'AI405',
      assignment: 'ResNet-18 Image Classifier',
      file: 'model_train.ipynb',
      submittedAt: 'Oct 19, 10:15 AM',
      similarity: 11,
      score: 0,
      graded: false,
    },
  ]);

  const updateScore = (id: string, newScore: number) => {
    setSubmissions((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, score: newScore, graded: true } : item
      )
    );
  };

  return (
    <div className={styles.container}>
      <Link href="/teacher" className={styles.backLink}>
        ← Back to Faculty Dashboard
      </Link>

      <div className={styles.header}>
        <div className={styles.titleArea}>
          <h1><span>✅</span> Grading & AI Plagiarism Analysis</h1>
          <p className={styles.subtitle}>
            Codebase similarity engine, semantic AST checks, and instant grade dispatch.
          </p>
        </div>
      </div>

      <div className={styles.statsGrid}>
        <div className={`${styles.statCard} glass`}>
          <span className={styles.statLabel}>Pending Grading</span>
          <span className={styles.statValue}>
            {submissions.filter((s) => !s.graded).length}
          </span>
          <span style={{ color: '#ffc107', fontSize: '13px' }}>Needs Instructor Review</span>
        </div>
        <div className={`${styles.statCard} glass`}>
          <span className={styles.statLabel}>Avg Plagiarism Score</span>
          <span className={styles.statValue}>13.4%</span>
          <span style={{ color: 'var(--accent-secondary)', fontSize: '13px' }}>Normal range</span>
        </div>
        <div className={`${styles.statCard} glass`}>
          <span className={styles.statLabel}>Flagged Submissions</span>
          <span className={styles.statValue} style={{ color: '#ff4757' }}>
            {submissions.filter((s) => s.similarity > 30).length}
          </span>
          <span style={{ color: '#ff4757', fontSize: '13px' }}>&gt;30% similarity found</span>
        </div>
        <div className={`${styles.statCard} glass`}>
          <span className={styles.statLabel}>Graded Submissions</span>
          <span className={styles.statValue}>
            {submissions.filter((s) => s.graded).length} / {submissions.length}
          </span>
          <span style={{ color: 'var(--accent-secondary)', fontSize: '13px' }}>
            Syncing to Canvas/SIS
          </span>
        </div>
      </div>

      <div className={`${styles.tableCard} glass`}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ color: 'var(--text-primary)' }}>Submission Queue & Similarity Scores</h3>
          <button
            onClick={() => alert('Plagiarism cross-check engine scan complete!')}
            style={{
              background: 'rgba(0, 229, 255, 0.1)',
              color: 'var(--accent-primary)',
              padding: '6px 14px',
              borderRadius: '6px',
              fontSize: '13px',
              fontWeight: 600,
            }}
          >
            ⚡ Re-run Semantic Check
          </button>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Student</th>
                <th>Course</th>
                <th>Assignment</th>
                <th>File</th>
                <th>Submitted</th>
                <th>Plagiarism Match</th>
                <th>Score (/100)</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((sub) => (
                <tr key={sub.id}>
                  <td style={{ fontWeight: 600 }}>{sub.student}</td>
                  <td>
                    <span
                      style={{
                        background: 'rgba(255,255,255,0.06)',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        fontSize: '12px',
                      }}
                    >
                      {sub.course}
                    </span>
                  </td>
                  <td>{sub.assignment}</td>
                  <td style={{ fontFamily: 'monospace', color: 'var(--accent-primary)' }}>
                    📄 {sub.file}
                  </td>
                  <td style={{ color: 'var(--text-muted)' }}>{sub.submittedAt}</td>
                  <td>
                    <span
                      className={
                        sub.similarity > 30 ? styles.simFlagged : styles.simClean
                      }
                    >
                      {sub.similarity}% {sub.similarity > 30 ? '⚠️ High Match' : '✓ Verified'}
                    </span>
                  </td>
                  <td>
                    <input
                      type="number"
                      value={sub.score}
                      onChange={(e) => updateScore(sub.id, Number(e.target.value))}
                      className={styles.scoreInput}
                    />
                  </td>
                  <td>
                    {sub.graded ? (
                      <span style={{ color: 'var(--accent-secondary)', fontSize: '13px', fontWeight: 600 }}>
                        Graded
                      </span>
                    ) : (
                      <button
                        onClick={() => updateScore(sub.id, 85)}
                        className={styles.saveBtn}
                      >
                        Grade
                      </button>
                    )}
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
