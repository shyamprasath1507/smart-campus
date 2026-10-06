'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Assignments.module.css';

interface Assignment {
  id: string;
  course: string;
  title: string;
  description: string;
  dueDate: string;
  points: number;
  status: 'pending' | 'submitted' | 'graded';
  score?: number;
  feedback?: string;
}

const mockAssignments: Assignment[] = [
  {
    id: '1',
    course: 'CS301: Advanced Algorithms',
    title: 'Problem Set 4: Dynamic Programming & Min-Cut',
    description: 'Implement Ford-Fulkerson max-flow in Python and prove time complexity bounds for bipartite matching graph.',
    dueDate: 'Tomorrow at 11:59 PM',
    points: 100,
    status: 'pending',
  },
  {
    id: '2',
    course: 'CS410: Machine Learning Lab',
    title: 'Project Milestone 2: Transformer Attention Mechanism',
    description: 'Build a multi-head self-attention module from scratch using PyTorch and evaluate on Shakespeare dataset.',
    dueDate: 'Oct 12, 2026',
    points: 150,
    status: 'pending',
  },
  {
    id: '3',
    course: 'PHYS201: Quantum Mechanics',
    title: 'Hamiltonian Simulation Problem 3',
    description: 'Derive time-dependent Schrodinger equation states for 2-qubit entangled system.',
    dueDate: 'Oct 15, 2026',
    points: 50,
    status: 'pending',
  },
  {
    id: '4',
    course: 'MATH220: Linear Algebra',
    title: 'Singular Value Decomposition Analysis',
    description: 'Compression and low-rank approximation analysis of campus satellite imagery.',
    dueDate: 'Submitted Oct 4, 2026',
    points: 100,
    status: 'submitted',
  },
  {
    id: '5',
    course: 'CS301: Advanced Algorithms',
    title: 'Midterm Research Paper Review',
    description: 'Critical analysis of randomized quicksort variants and caching cache-oblivious algorithms.',
    dueDate: 'Graded Oct 1, 2026',
    points: 100,
    status: 'graded',
    score: 98,
    feedback: 'Exceptional proofs and rigorous analysis of asymptotic runtime.',
  },
];

export default function AssignmentsPortalPage() {
  const [tab, setTab] = useState<'pending' | 'submitted' | 'graded'>('pending');

  const filtered = mockAssignments.filter((a) => a.status === tab);

  return (
    <div className={styles.container}>
      <Link href="/student" className={styles.backLink}>
        ← Back to Student Hub
      </Link>

      <div className={styles.headerRow}>
        <div className={styles.titleArea}>
          <h1>📝 Assignments & Submissions Portal</h1>
          <p className={styles.subtitle}>Track course deadlines, upload solutions, and review grades & feedback</p>
        </div>
      </div>

      <div className={styles.filterTabs}>
        <button
          onClick={() => setTab('pending')}
          className={`${styles.filterTab} ${tab === 'pending' ? styles.filterTabActive : ''}`}
        >
          Pending Due (3)
        </button>
        <button
          onClick={() => setTab('submitted')}
          className={`${styles.filterTab} ${tab === 'submitted' ? styles.filterTabActive : ''}`}
        >
          Submitted (1)
        </button>
        <button
          onClick={() => setTab('graded')}
          className={`${styles.filterTab} ${tab === 'graded' ? styles.filterTabActive : ''}`}
        >
          Graded & Evaluated (1)
        </button>
      </div>

      <div className={styles.assignmentList}>
        {filtered.map((item) => (
          <div key={item.id} className={`${styles.assignmentCard} glass`}>
            <div className={styles.cardMain}>
              <span className={styles.courseTag}>{item.course}</span>
              <h3 className={styles.assignmentTitle}>{item.title}</h3>
              <p className={styles.assignmentDesc}>{item.description}</p>
              <div className={styles.dueInfo}>
                <span>📅 {item.dueDate}</span>
                {item.feedback && (
                  <span style={{ color: 'var(--accent-secondary)' }}>💬 Feedback: {item.feedback}</span>
                )}
              </div>
            </div>

            <div className={styles.cardSide}>
              <span className={styles.pointsBadge}>{item.points} Points</span>
              {item.status === 'pending' && (
                <button className={styles.submitBtn}>Upload & Submit</button>
              )}
              {item.status === 'submitted' && (
                <span className={styles.statusSubmitted}>✓ Under Review</span>
              )}
              {item.status === 'graded' && (
                <div className={styles.gradeScore}>{item.score} / {item.points}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
