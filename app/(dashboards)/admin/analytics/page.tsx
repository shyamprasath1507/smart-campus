import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function AnalyticsEnginePage() {
  const departmentPassRates = [
    { faculty: 'Computer Science & AI', passRate: 97.4, students: 840 },
    { faculty: 'Biomedical & Health Sciences', passRate: 98.1, students: 620 },
    { faculty: 'Electrical & Mechanical Eng.', passRate: 94.8, students: 780 },
    { faculty: 'Business & Management Science', passRate: 96.2, students: 590 },
    { faculty: 'Humanities, Law & Architecture', passRate: 98.5, students: 420 },
  ];

  return (
    <div className={styles.container}>
      <Link href="/admin" className={styles.backLink}>
        ← Back to Command Center
      </Link>

      <div className={styles.header}>
        <div className={styles.titleArea}>
          <div className={styles.titleRow}>
            <span className={styles.icon}>📊</span>
            <h1 className={styles.title}>Predictive Analytics & Campus Intelligence</h1>
          </div>
          <p className={styles.subtitle}>
            Machine-learning retention projections, space utilization heatmaps, course performance trajectories, and early intervention alerts.
          </p>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.secondaryBtn}>Export Bi-Weekly Dossier</button>
          <button className={styles.primaryBtn}>⚡ Re-train Model Weights</button>
        </div>
      </div>

      <div className={styles.metricsGrid}>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Retention Probability</span>
          <span className={styles.metricValue}>94.2%</span>
          <span className={styles.metricSub}>+1.8% vs Fall 2025 baseline</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Campus Mean CGPA</span>
          <span className={styles.metricValue}>3.42</span>
          <span className={styles.metricSub}>Scale 4.00 • +0.06 YoY</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>At-Risk Student Alerts</span>
          <span className={styles.metricValue}>14 Flagged</span>
          <span className={styles.metricSub}>Assigned to peer tutors</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Facility Space Efficiency</span>
          <span className={styles.metricValue}>89.4%</span>
          <span className={styles.metricSub}>Optimized class scheduling</span>
        </div>
      </div>

      <div className={styles.analyticsGrid}>
        {/* Academic Pass Rates */}
        <div className={`${styles.glassPanel} glass`}>
          <h2 className={styles.panelTitle}>Faculty Academic Performance Index</h2>
          <div className={styles.chartBarGroup}>
            {departmentPassRates.map((d, idx) => (
              <div key={idx} className={styles.barRow}>
                <div className={styles.barHeader}>
                  <span style={{ fontWeight: 600 }}>{d.faculty}</span>
                  <span style={{ color: '#00FF85', fontWeight: 700 }}>{d.passRate}% pass</span>
                </div>
                <div className={styles.barTrack}>
                  <div
                    className={styles.barFill}
                    style={{ width: `${d.passRate}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Predictive Insights */}
        <div className={`${styles.glassPanel} glass`}>
          <h2 className={styles.panelTitle}>Autonomous Campus Insights</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div className={styles.insightCard}>
              <span className={styles.insightTitle}>💡 Study Space Bottleneck Mitigation</span>
              <p className={styles.insightText}>
                Library Floors 2 & 3 reach 96% occupancy between 13:00 - 16:00. The engine recommends auto-opening Science Hall B atrium breakout zones.
              </p>
            </div>

            <div className={styles.insightCard}>
              <span className={styles.insightTitle}>📈 Early Intervention Tutoring</span>
              <p className={styles.insightText}>
                8 students in CS-482 flagged for supplemental instruction based on quiz 1 drop patterns. Success recovery rate modeled at 91% if paired by Oct 10.
              </p>
            </div>

            <div className={styles.insightCard}>
              <span className={styles.insightTitle}>⚡ Microgrid Savings Optimization</span>
              <p className={styles.insightText}>
                Pre-cooling lecture halls using surplus solar power at 11:30 will reduce grid peak draw charges by approximately $3,800 this month.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
