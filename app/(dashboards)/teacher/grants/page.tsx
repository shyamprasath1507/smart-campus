'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function TeacherGrantsPage() {
  const [grants] = useState([
    {
      id: 'NSF-2024-88',
      agency: 'National Science Foundation (NSF)',
      title: 'Real-Time Edge Intelligence & Decentralized Learning for Smart Campuses',
      totalAward: '$480,000',
      expended: '$290,000',
      percent: 60,
      pi: 'Dr. Alan Vance (Lead PI)',
      duration: 'Jan 2025 - Dec 2027',
      nextDeliverable: 'Year 2 Annual Progress Report (Due Nov 30, 2026)',
      status: 'Active',
    },
    {
      id: 'DARPA-AI-09',
      agency: 'DARPA / Information Innovation',
      title: 'Formal Verification of Neural Autonomous Agents under Adversarial Attacks',
      totalAward: '$320,000',
      expended: '$140,000',
      percent: 43,
      pi: 'Dr. Alan Vance (Co-PI with Robotics Lab)',
      duration: 'Sep 2025 - Aug 2028',
      nextDeliverable: 'Quarterly Benchmark Evaluation Matrix (Due Dec 15, 2026)',
      status: 'Active',
    },
  ]);

  return (
    <div className={styles.container}>
      <Link href="/teacher" className={styles.backLink}>
        ← Back to Faculty Dashboard
      </Link>

      <div className={styles.header}>
        <div className={styles.titleArea}>
          <h1><span>🔬</span> Research Grant Tracker & Proposals</h1>
          <p className={styles.subtitle}>
            Monitor active funded research awards, budget burn rates, overhead, and sponsor deliverables.
          </p>
        </div>
        <button
          onClick={() => alert('Grant proposal drafting workspace opened!')}
          style={{
            background: 'linear-gradient(135deg, var(--accent-primary), #00b3cc)',
            color: 'var(--bg-primary)',
            padding: '10px 18px',
            borderRadius: '8px',
            fontWeight: 700,
            fontSize: '14px',
          }}
        >
          + Submit New Proposal
        </button>
      </div>

      <div className={styles.statsGrid}>
        <div className={`${styles.statCard} glass`}>
          <span className={styles.statLabel}>Total Research Funding</span>
          <span className={styles.statValue}>$800,000</span>
          <span style={{ color: 'var(--accent-secondary)', fontSize: '13px' }}>2 Active Grants</span>
        </div>
        <div className={`${styles.statCard} glass`}>
          <span className={styles.statLabel}>Expended to Date</span>
          <span className={styles.statValue}>$430,000</span>
          <span style={{ color: 'var(--accent-primary)', fontSize: '13px' }}>53.7% Burn rate</span>
        </div>
        <div className={`${styles.statCard} glass`}>
          <span className={styles.statLabel}>Graduate RA Support</span>
          <span className={styles.statValue}>4 Ph.D. RAs</span>
          <span style={{ color: 'var(--accent-secondary)', fontSize: '13px' }}>Fully funded</span>
        </div>
        <div className={`${styles.statCard} glass`}>
          <span className={styles.statLabel}>Upcoming Milestones</span>
          <span className={styles.statValue} style={{ color: '#ffc107' }}>2</span>
          <span style={{ color: '#ffc107', fontSize: '13px' }}>Due Q4 2026</span>
        </div>
      </div>

      <div className={styles.grantsList}>
        {grants.map((grant) => (
          <div key={grant.id} className={`${styles.grantCard} glass`}>
            <div className={styles.grantTop}>
              <div>
                <span className={styles.agencyBadge}>{grant.agency}</span>
                <h3 style={{ fontSize: '18px', color: 'var(--text-primary)', marginTop: '6px' }}>
                  {grant.title}
                </h3>
              </div>
              <span
                style={{
                  background: 'rgba(0, 255, 133, 0.15)',
                  color: 'var(--accent-secondary)',
                  padding: '4px 10px',
                  borderRadius: '12px',
                  fontSize: '12px',
                  fontWeight: 700,
                }}
              >
                {grant.status}
              </span>
            </div>

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', fontSize: '13px', color: 'var(--text-secondary)' }}>
              <span>Award ID: <strong>{grant.id}</strong></span>
              <span>Duration: <strong>{grant.duration}</strong></span>
              <span>PI Role: <strong>{grant.pi}</strong></span>
            </div>

            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '13px',
                  marginBottom: '6px',
                }}
              >
                <span>Budget Expenditure: <strong>{grant.expended}</strong> of {grant.totalAward}</span>
                <span style={{ fontWeight: 700, color: 'var(--accent-primary)' }}>{grant.percent}%</span>
              </div>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: `${grant.percent}%` }} />
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '10px',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                fontSize: '13px',
              }}
            >
              <span style={{ color: '#ffc107' }}>📌 {grant.nextDeliverable}</span>
              <button
                onClick={() => alert('Grant ledger & purchasing requisitions exported.')}
                style={{
                  color: 'var(--accent-primary)',
                  fontWeight: 600,
                  textDecoration: 'underline',
                  fontSize: '13px',
                }}
              >
                View Financial Ledger
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
