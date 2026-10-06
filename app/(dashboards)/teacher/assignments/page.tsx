'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function TeacherAssignmentsPage() {
  const [assignments, setAssignments] = useState([
    {
      id: 'A1',
      course: 'CS101',
      title: 'Data Structures: Red-Black Tree Implementation',
      desc: 'Implement balancing rotations and insertion algorithms in C++ with unit tests.',
      dueDate: 'Oct 18, 2026',
      submissions: '41/45',
      maxScore: 100,
      status: 'Active',
    },
    {
      id: 'A2',
      course: 'CS302',
      title: 'Relational Schema Normalization & BCNF Proof',
      desc: 'Decompose database schemas into Boyce-Codd normal form with functional dependencies.',
      dueDate: 'Oct 22, 2026',
      submissions: '28/52',
      maxScore: 50,
      status: 'Active',
    },
    {
      id: 'A3',
      course: 'AI405',
      title: 'Convolutional Network for Image Classification',
      desc: 'Train a ResNet-18 baseline on CIFAR-10 achieving at least 88% validation accuracy.',
      dueDate: 'Nov 02, 2026',
      submissions: '12/38',
      maxScore: 100,
      status: 'Active',
    },
    {
      id: 'A4',
      course: 'ENG201',
      title: 'Software Architecture Proposal Memo',
      desc: 'Write a 4-page formal executive memorandum detailing microservices migration.',
      dueDate: 'Oct 04, 2026',
      submissions: '28/28',
      maxScore: 40,
      status: 'Closed',
    },
  ]);

  const [form, setForm] = useState({
    title: '',
    course: 'CS101',
    maxScore: '100',
    dueDate: '',
    desc: '',
  });

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.dueDate) return;
    setAssignments([
      {
        id: `A${assignments.length + 1}`,
        course: form.course,
        title: form.title,
        desc: form.desc || 'No description provided.',
        dueDate: form.dueDate,
        submissions: '0/45',
        maxScore: Number(form.maxScore),
        status: 'Active',
      },
      ...assignments,
    ]);
    setForm({ title: '', course: 'CS101', maxScore: '100', dueDate: '', desc: '' });
  };

  return (
    <div className={styles.container}>
      <Link href="/teacher" className={styles.backLink}>
        ← Back to Faculty Dashboard
      </Link>

      <div className={styles.header}>
        <div className={styles.titleArea}>
          <h1><span>📝</span> Assignment Creator & Curricula</h1>
          <p className={styles.subtitle}>
            Publish problem sets, set deadlines, and monitor student submissions in real time.
          </p>
        </div>
      </div>

      <div className={styles.statsGrid}>
        <div className={`${styles.statCard} glass`}>
          <span className={styles.statLabel}>Active Assignments</span>
          <span className={styles.statValue}>
            {assignments.filter((a) => a.status === 'Active').length}
          </span>
        </div>
        <div className={`${styles.statCard} glass`}>
          <span className={styles.statLabel}>Total Submissions</span>
          <span className={styles.statValue}>109</span>
        </div>
        <div className={`${styles.statCard} glass`}>
          <span className={styles.statLabel}>Avg Class Score</span>
          <span className={styles.statValue}>86.4%</span>
        </div>
        <div className={`${styles.statCard} glass`}>
          <span className={styles.statLabel}>Pending Grading</span>
          <span className={styles.statValue}>22</span>
        </div>
      </div>

      <div className={styles.contentLayout}>
        <form onSubmit={handleCreate} className={`${styles.formCard} glass`}>
          <h3 style={{ color: 'var(--accent-primary)', fontSize: '18px' }}>Create Assignment</h3>
          
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Course</label>
            <select
              className={styles.select}
              value={form.course}
              onChange={(e) => setForm({ ...form, course: e.target.value })}
            >
              <option value="CS101">CS101: Intro to CS</option>
              <option value="CS302">CS302: Database Systems</option>
              <option value="AI405">AI405: Deep Learning</option>
              <option value="ENG201">ENG201: Tech Writing</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Assignment Title</label>
            <input
              type="text"
              placeholder="e.g. Lab 4: Graph BFS/DFS"
              className={styles.input}
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Due Date</label>
            <input
              type="date"
              className={styles.input}
              value={form.dueDate}
              onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Max Points</label>
            <input
              type="number"
              className={styles.input}
              value={form.maxScore}
              onChange={(e) => setForm({ ...form, maxScore: e.target.value })}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Instructions / Rubric</label>
            <textarea
              rows={3}
              placeholder="Outline problem requirements, test parameters..."
              className={styles.textarea}
              value={form.desc}
              onChange={(e) => setForm({ ...form, desc: e.target.value })}
            />
          </div>

          <button type="submit" className={styles.createBtn}>
            + Publish Assignment
          </button>
        </form>

        <div className={styles.assignmentsList}>
          <h3 style={{ fontSize: '18px', color: 'var(--text-primary)' }}>Existing Assignments</h3>
          {assignments.map((item) => (
            <div key={item.id} className={`${styles.itemCard} glass`}>
              <div className={styles.itemTop}>
                <div>
                  <span className={styles.itemBadge}>{item.course}</span>
                  <span className={styles.itemTitle}>{item.title}</span>
                </div>
                <span
                  className={
                    item.status === 'Active' ? styles.statusActive : styles.statusClosed
                  }
                >
                  {item.status}
                </span>
              </div>
              <p className={styles.itemDesc}>{item.desc}</p>
              <div className={styles.metaRow}>
                <span>📅 Due: <strong>{item.dueDate}</strong></span>
                <span>📥 Submissions: <strong>{item.submissions}</strong></span>
                <span>🎯 Max: <strong>{item.maxScore} pts</strong></span>
                <Link
                  href="/teacher/grading"
                  style={{
                    color: 'var(--accent-primary)',
                    fontWeight: 600,
                    textDecoration: 'underline',
                  }}
                >
                  Review
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
