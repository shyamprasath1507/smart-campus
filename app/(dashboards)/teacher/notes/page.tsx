'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function TeacherNotesPage() {
  const [notes] = useState([
    {
      id: 1,
      category: 'Faculty Council',
      title: 'Minutes of CS Curriculum Board: Fall Accreditation Review',
      excerpt: 'Approved update to CS101 moving from Python basics to deeper algorithmic rigor in C++ and memory safety models. ABET criteria met.',
      author: 'Prof. Marcus Vance (Chair)',
      date: 'Oct 04, 2026',
    },
    {
      id: 2,
      category: 'Infrastructure',
      title: 'Department AI Cluster Node Upgrades & Power Specs',
      excerpt: 'Four new NVIDIA H100 servers commissioned in Server Room 4B. Faculty priority compute queues open via Slurm scheduler.',
      author: 'Dr. Sarah Connor',
      date: 'Sep 29, 2026',
    },
    {
      id: 3,
      category: 'Pedagogy & Policy',
      title: 'Generative AI Policy for Student Programming Assignments',
      excerpt: 'Students permitted to consult LLMs for conceptual explanation but must cite AI assistance and submit self-written test suites.',
      author: 'Academic Ethics Board',
      date: 'Sep 15, 2026',
    },
    {
      id: 4,
      category: 'Budgeting',
      title: 'FY27 Lab Hardware Requisition & Teaching Assistant Allocations',
      excerpt: 'Proposals due by Nov 1 for TA allocations for Spring courses. Budget capped at $45,000 for undergraduate laboratory consumables.',
      author: 'Finance & Admin Dean',
      date: 'Aug 28, 2026',
    },
  ]);

  return (
    <div className={styles.container}>
      <Link href="/teacher" className={styles.backLink}>
        ← Back to Faculty Dashboard
      </Link>

      <div className={styles.header}>
        <div className={styles.titleArea}>
          <h1><span>📓</span> Department Notes & Knowledge Base</h1>
          <p className={styles.subtitle}>
            Faculty meeting minutes, ABET compliance memoranda, lab directives, and shared policies.
          </p>
        </div>
        <button
          onClick={() => alert('New faculty note editor launched!')}
          style={{
            background: 'linear-gradient(135deg, var(--accent-primary), #00b3cc)',
            color: 'var(--bg-primary)',
            padding: '10px 18px',
            borderRadius: '8px',
            fontWeight: 700,
            fontSize: '14px',
          }}
        >
          + Create Department Note
        </button>
      </div>

      <div className={styles.notesGrid}>
        {notes.map((note) => (
          <div key={note.id} className={`${styles.noteCard} glass`}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className={styles.noteCategory}>{note.category}</span>
              <span className={styles.noteDate}>{note.date}</span>
            </div>

            <h3 style={{ fontSize: '17px', color: 'var(--text-primary)', lineHeight: 1.3 }}>
              {note.title}
            </h3>

            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              {note.excerpt}
            </p>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 'auto',
                paddingTop: '10px',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                fontSize: '12px',
                color: 'var(--text-muted)',
              }}
            >
              <span>By {note.author}</span>
              <span style={{ color: 'var(--accent-primary)', cursor: 'pointer' }}>Read Full Memo →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
