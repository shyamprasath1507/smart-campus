'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function TeacherAnalyticsPage() {
  const [selectedCourse, setSelectedCourse] = useState('All');

  return (
    <div className={styles.container}>
      <Link href="/teacher" className={styles.backLink}>
        ← Back to Faculty Dashboard
      </Link>

      <div className={styles.header}>
        <div className={styles.titleArea}>
          <h1><span>📈</span> Class Analytics & Telemetry</h1>
          <p className={styles.subtitle}>
            Continuous student engagement tracking, bell-curve distribution, and dropout alerts.
          </p>
        </div>
        <div>
          <select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid var(--glass-border)',
              borderRadius: '8px',
              padding: '10px 16px',
              color: 'var(--text-primary)',
              fontSize: '14px',
            }}
          >
            <option value="All">All Courses Aggregated</option>
            <option value="CS101">CS101: Intro to CS</option>
            <option value="CS302">CS302: Database Systems</option>
            <option value="AI405">AI405: Deep Learning</option>
          </select>
        </div>
      </div>

      <div className={styles.statsGrid}>
        <div className={`${styles.statCard} glass`}>
          <span className={styles.statLabel}>Median Course GPA</span>
          <span className={styles.statValue}>3.64</span>
          <span style={{ color: 'var(--accent-secondary)', fontSize: '13px' }}>+0.2 vs Last Term</span>
        </div>
        <div className={`${styles.statCard} glass`}>
          <span className={styles.statLabel}>On-Time Submissions</span>
          <span className={styles.statValue}>91.8%</span>
          <span style={{ color: 'var(--accent-secondary)', fontSize: '13px' }}>High Compliance</span>
        </div>
        <div className={`${styles.statCard} glass`}>
          <span className={styles.statLabel}>Attendance Health</span>
          <span className={styles.statValue}>94.2%</span>
          <span style={{ color: 'var(--accent-primary)', fontSize: '13px' }}>Across 4 Cohorts</span>
        </div>
        <div className={`${styles.statCard} glass`}>
          <span className={styles.statLabel}>Intervention Flags</span>
          <span className={styles.statValue} style={{ color: '#ffc107' }}>4</span>
          <span style={{ color: '#ffc107', fontSize: '13px' }}>Needs Follow-up</span>
        </div>
      </div>

      <div className={styles.chartsGrid}>
        <div className={`${styles.chartCard} glass`}>
          <div className={styles.chartHeader}>
            <h3 style={{ color: 'var(--accent-primary)' }}>Grade Distribution Curve</h3>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>163 Students</span>
          </div>
          <div className={styles.barsList}>
            <div className={styles.barRow}>
              <div className={styles.barInfo}>
                <span>Grade A (90% - 100%)</span>
                <strong>42% (68 students)</strong>
              </div>
              <div className={styles.barTrack}>
                <div className={styles.barFillGreen} style={{ width: '42%' }} />
              </div>
            </div>
            <div className={styles.barRow}>
              <div className={styles.barInfo}>
                <span>Grade B (80% - 89%)</span>
                <strong>36% (58 students)</strong>
              </div>
              <div className={styles.barTrack}>
                <div className={styles.barFillPrimary} style={{ width: '36%' }} />
              </div>
            </div>
            <div className={styles.barRow}>
              <div className={styles.barInfo}>
                <span>Grade C (70% - 79%)</span>
                <strong>16% (26 students)</strong>
              </div>
              <div className={styles.barTrack}>
                <div className={styles.barFillWarning} style={{ width: '16%' }} />
              </div>
            </div>
            <div className={styles.barRow}>
              <div className={styles.barInfo}>
                <span>Grade D/F (&lt; 70%)</span>
                <strong>6% (11 students)</strong>
              </div>
              <div className={styles.barTrack}>
                <div
                  style={{
                    height: '100%',
                    background: '#ff4757',
                    borderRadius: '5px',
                    width: '6%',
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.chartCard} glass`}>
          <div className={styles.chartHeader}>
            <h3 style={{ color: 'var(--accent-primary)' }}>Weekly Lecture Attendance Trends</h3>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Past 6 Weeks</span>
          </div>
          <div className={styles.barsList}>
            <div className={styles.barRow}>
              <div className={styles.barInfo}>
                <span>Week 1 (Orientation)</span>
                <strong>98%</strong>
              </div>
              <div className={styles.barTrack}>
                <div className={styles.barFillGreen} style={{ width: '98%' }} />
              </div>
            </div>
            <div className={styles.barRow}>
              <div className={styles.barInfo}>
                <span>Week 2 (Data Structures)</span>
                <strong>95%</strong>
              </div>
              <div className={styles.barTrack}>
                <div className={styles.barFillGreen} style={{ width: '95%' }} />
              </div>
            </div>
            <div className={styles.barRow}>
              <div className={styles.barInfo}>
                <span>Week 3 (Tree Algorithms)</span>
                <strong>93%</strong>
              </div>
              <div className={styles.barTrack}>
                <div className={styles.barFillPrimary} style={{ width: '93%' }} />
              </div>
            </div>
            <div className={styles.barRow}>
              <div className={styles.barInfo}>
                <span>Week 4 (Midterm Prep)</span>
                <strong>96%</strong>
              </div>
              <div className={styles.barTrack}>
                <div className={styles.barFillGreen} style={{ width: '96%' }} />
              </div>
            </div>
            <div className={styles.barRow}>
              <div className={styles.barInfo}>
                <span>Week 5 (Graph Theory)</span>
                <strong>89%</strong>
              </div>
              <div className={styles.barTrack}>
                <div className={styles.barFillWarning} style={{ width: '89%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
