import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function AlumniNetworkPage() {
  const alumniList = [
    { id: 'ALM-201', name: 'Dr. Katherine Price', gradYear: 'Class of 2018', major: 'Ph.D. Computer Science', company: 'Principal AI Researcher @ DeepMind', location: 'London, UK', status: 'ACTIVE MENTOR', contribution: '$50,000' },
    { id: 'ALM-202', name: 'Devon Vance', gradYear: 'Class of 2020', major: 'B.S. Robotics Engineering', company: 'Founder & CEO @ Autonomous Dynamics', location: 'San Francisco, CA', status: 'FOUNDER DONOR', contribution: '$250,000' },
    { id: 'ALM-203', name: 'Priya Sharma', gradYear: 'Class of 2016', major: 'M.S. Biotechnology', company: 'VP of Therapeutics @ Genentech', location: 'Boston, MA', status: 'ACTIVE MENTOR', contribution: '$25,000' },
    { id: 'ALM-204', name: 'Alexander Wright', gradYear: 'Class of 2022', major: 'B.S. Economics & Data', company: 'Quantitative Strategist @ Citadel', location: 'New York, NY', status: 'ACTIVE MENTOR', contribution: '$15,000' },
    { id: 'ALM-205', name: 'Mei-Ling Chen', gradYear: 'Class of 2014', major: 'B.Arch Architecture', company: 'Lead Partner @ Studio Urbanism', location: 'Singapore', status: 'DONOR', contribution: '$100,000' },
  ];

  return (
    <div className={styles.container}>
      <Link href="/admin" className={styles.backLink}>
        ← Back to Command Center
      </Link>

      <div className={styles.header}>
        <div className={styles.titleArea}>
          <div className={styles.titleRow}>
            <span className={styles.icon}>🎓</span>
            <h1 className={styles.title}>Alumni Relations & Philanthropy</h1>
          </div>
          <p className={styles.subtitle}>
            Graduate directory, mentorship program pairing, alumni chapter tracking, and endowment giving.
          </p>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.primaryBtn}>+ Connect Mentorship Cohort</button>
        </div>
      </div>

      <div className={styles.metricsGrid}>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Total Alumni Network</span>
          <span className={styles.metricValue}>18,450</span>
          <span className={styles.metricSub}>24 Regional Chapters worldwide</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Active Student Mentors</span>
          <span className={styles.metricValue}>620 Mentors</span>
          <span className={styles.metricSub}>1,840 active student pairings</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Annual Alumni Giving</span>
          <span className={styles.metricValue}>$2.4M</span>
          <span className={styles.metricSub}>Funded 88 scholarships</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Reunion Registration</span>
          <span className={styles.metricValue}>1,240</span>
          <span className={styles.metricSub}>Homecoming Weekend in 45 days</span>
        </div>
      </div>

      <div className={`${styles.glassPanel} glass`}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: 18, fontWeight: 700 }}>Distinguished Alumni Directory</h2>
          <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>Showing top contributing ambassadors</span>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}>Alumnus</th>
                <th className={styles.th}>Class / Degree</th>
                <th className={styles.th}>Current Position & Org</th>
                <th className={styles.th}>Location</th>
                <th className={styles.th}>Engagement</th>
                <th className={styles.th}>Endowment Giving</th>
                <th className={styles.th}>Connect</th>
              </tr>
            </thead>
            <tbody>
              {alumniList.map((item) => (
                <tr key={item.id} className={styles.tr}>
                  <td className={styles.td} style={{ fontWeight: 600 }}>{item.name}</td>
                  <td className={styles.td}>
                    <div>{item.gradYear}</div>
                    <div style={{ fontSize: 11, color: 'var(--text-secondary)' }}>{item.major}</div>
                  </td>
                  <td className={styles.td}>{item.company}</td>
                  <td className={styles.td}>{item.location}</td>
                  <td className={styles.td}>
                    <span className={item.status.includes('MENTOR') ? styles.badgeMentor : styles.badgeDonor}>
                      {item.status}
                    </span>
                  </td>
                  <td className={styles.td} style={{ fontWeight: 700, color: '#00FF85' }}>{item.contribution}</td>
                  <td className={styles.td}>
                    <button className={styles.actionBtn}>Message</button>
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
