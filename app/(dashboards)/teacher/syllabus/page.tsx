'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function TeacherSyllabusPage() {
  const [selectedCourse, setSelectedCourse] = useState('CS101');
  const [modules, setModules] = useState([
    {
      id: 1,
      week: 'Weeks 1 - 2',
      title: 'Module 1: Computational Complexity & Big-O Notation',
      status: 'COMPLETED',
      topics: ['Asymptotic Analysis', 'Worst vs Average Case', 'Master Theorem', 'Space Complexity'],
    },
    {
      id: 2,
      week: 'Weeks 3 - 5',
      title: 'Module 2: Advanced Trees & Self-Balancing Structures',
      status: 'IN_PROGRESS',
      topics: ['AVL Trees', 'Red-Black Balancing Rotations', 'B-Trees & 2-3 Trees', 'Tries & Prefix Trees'],
    },
    {
      id: 3,
      week: 'Weeks 6 - 8',
      title: 'Module 3: Graph Traversal, DAGs & Topological Sorting',
      status: 'UPCOMING',
      topics: ['Breadth-First Search', 'Depth-First Search', 'Tarjan SCC Algorithm', 'Dijkstra Shortest Path'],
    },
    {
      id: 4,
      week: 'Weeks 9 - 11',
      title: 'Module 4: Dynamic Programming & Greedy Heuristics',
      status: 'UPCOMING',
      topics: ['Optimal Substructure', 'Memoization vs Tabulation', 'Knapsack Problem', 'Huffman Coding'],
    },
    {
      id: 5,
      week: 'Weeks 12 - 14',
      title: 'Module 5: NP-Completeness & Approximation Algorithms',
      status: 'UPCOMING',
      topics: ['Turing Reductions', 'Cook-Levin Theorem', 'Vertex Cover', 'Traveling Salesperson Problem'],
    },
  ]);

  const toggleStatus = (id: number) => {
    setModules((prev) =>
      prev.map((m) => {
        if (m.id !== id) return m;
        const next =
          m.status === 'COMPLETED'
            ? 'IN_PROGRESS'
            : m.status === 'IN_PROGRESS'
            ? 'UPCOMING'
            : 'COMPLETED';
        return { ...m, status: next };
      })
    );
  };

  return (
    <div className={styles.container}>
      <Link href="/teacher" className={styles.backLink}>
        ← Back to Faculty Dashboard
      </Link>

      <div className={styles.header}>
        <div className={styles.titleArea}>
          <h1><span>📋</span> Curriculum & Syllabus Manager</h1>
          <p className={styles.subtitle}>
            Accreditation-aligned learning outcomes, module pacing, and syllabus milestones.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid var(--glass-border)',
              borderRadius: '8px',
              padding: '10px 14px',
              color: 'var(--text-primary)',
              fontSize: '14px',
            }}
          >
            <option value="CS101">CS101: Intro to CS</option>
            <option value="CS302">CS302: Database Systems</option>
            <option value="AI405">AI405: Deep Learning</option>
          </select>
          <button
            onClick={() => alert('Syllabus PDF generated with university seal.')}
            style={{
              background: 'linear-gradient(135deg, var(--accent-primary), #00b3cc)',
              color: 'var(--bg-primary)',
              padding: '10px 16px',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '14px',
            }}
          >
            Download Official Syllabus
          </button>
        </div>
      </div>

      <div className={styles.modulesList}>
        {modules.map((m) => (
          <div key={m.id} className={`${styles.moduleCard} glass`}>
            <div className={styles.moduleTop}>
              <div>
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: 'var(--accent-primary)',
                    marginRight: '8px',
                  }}
                >
                  {m.week}
                </span>
                <strong style={{ fontSize: '16px', color: 'var(--text-primary)' }}>
                  {m.title}
                </strong>
              </div>
              <button
                onClick={() => toggleStatus(m.id)}
                className={
                  m.status === 'COMPLETED'
                    ? styles.badgeDone
                    : m.status === 'IN_PROGRESS'
                    ? styles.badgeCurrent
                    : styles.badgeUpcoming
                }
              >
                {m.status.replace('_', ' ')} (Click to Toggle)
              </button>
            </div>

            <div className={styles.topicsList}>
              {m.topics.map((t, idx) => (
                <span key={idx} className={styles.topicTag}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
