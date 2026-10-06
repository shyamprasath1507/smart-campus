'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Tutoring.module.css';

interface Tutor {
  id: string;
  name: string;
  major: string;
  rating: number;
  sessions: number;
  subjects: string[];
  hourlyCost: string;
}

const mockTutors: Tutor[] = [
  { id: '1', name: 'Sophia Lin', major: 'Senior • Computer Science', rating: 4.9, sessions: 64, subjects: ['Data Structures', 'Algorithms', 'Python', 'C++'], hourlyCost: 'Free (Campus Work-Study)' },
  { id: '2', name: 'Liam Vance', major: 'Graduate • Applied Mathematics', rating: 5.0, sessions: 88, subjects: ['Linear Algebra', 'Multivariate Calc', 'Differential Equations'], hourlyCost: 'Free (Peer Program)' },
  { id: '3', name: 'Elena Rostova', major: 'Senior • Physics & Quantum Engineering', rating: 4.8, sessions: 42, subjects: ['Quantum Mechanics', 'Thermodynamics', 'MATLAB'], hourlyCost: 'Free (Campus Work-Study)' },
];

export default function PeerTutoringMatchPage() {
  const [requested, setRequested] = useState<string[]>([]);

  const handleRequest = (id: string) => {
    setRequested([...requested, id]);
  };

  return (
    <div className={styles.container}>
      <Link href="/student" className={styles.backLink}>
        ← Back to Student Hub
      </Link>

      <div className={styles.headerRow}>
        <div className={styles.titleArea}>
          <h1>🤝 Peer Tutoring & Study Group Match</h1>
          <p className={styles.subtitle}>Connect with certified student tutors and collaborative study circles</p>
        </div>
      </div>

      <div className={styles.tutorsGrid}>
        {mockTutors.map((tutor) => {
          const isReq = requested.includes(tutor.id);

          return (
            <div key={tutor.id} className={`${styles.tutorCard} glass`}>
              <div className={styles.tutorTop}>
                <div className={styles.tutorAvatar}>
                  {tutor.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <h3 className={styles.tutorName}>{tutor.name}</h3>
                  <div className={styles.tutorMajor}>{tutor.major}</div>
                  <div className={styles.tutorRating}>★ {tutor.rating.toFixed(1)} ({tutor.sessions} sessions)</div>
                </div>
              </div>

              <div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '6px' }}>Topics & Specialties:</div>
                <div className={styles.skillsWrap}>
                  {tutor.subjects.map((s, i) => (
                    <span key={i} className={styles.skillBadge}>{s}</span>
                  ))}
                </div>
              </div>

              <div style={{ fontSize: '13px', color: 'var(--accent-primary)', fontWeight: 600 }}>
                💵 Rate: {tutor.hourlyCost}
              </div>

              {isReq ? (
                <div style={{ background: 'rgba(0, 255, 133, 0.15)', color: 'var(--accent-secondary)', padding: '10px', borderRadius: '8px', textAlign: 'center', fontSize: '13px', fontWeight: 700 }}>
                  ✓ Match Request Sent to {tutor.name.split(' ')[0]}
                </div>
              ) : (
                <button onClick={() => handleRequest(tutor.id)} className={styles.matchBtn}>
                  Request 45-Min Session
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
