import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function DisciplinaryRecordsPage() {
  const cases = [
    { id: 'DSC-2026-08', respondent: 'Liam Gallagher (STU-9903)', incident: 'Unauthorized Lab Entry after hours', reportedBy: 'Campus Security Patrol', date: 'Sep 28, 2026', hearingDate: 'Oct 12, 2026', status: 'HEARING SCHEDULED', sanction: 'Temporary Badge Suspension' },
    { id: 'DSC-2026-07', respondent: 'Case #07 (Confidential)', incident: 'Academic Integrity: Code Plagiarism in CS-482', reportedBy: 'Prof. Ananya Rao', date: 'Sep 22, 2026', hearingDate: 'Oct 02, 2026', status: 'SANCTION IMPOSED', sanction: 'Course Grade F + Ethics Seminar' },
    { id: 'DSC-2026-06', respondent: 'Case #06 (Confidential)', incident: 'Residence Quiet Hours & Noise Violation', reportedBy: 'Dorm Proctor Hall 3', date: 'Sep 15, 2026', hearingDate: 'Sep 18, 2026', status: 'RESOLVED', sanction: 'Formal Written Warning' },
    { id: 'DSC-2026-05', respondent: 'Case #05 (Confidential)', incident: 'Unauthorized Scooter Charging in Stairwell', reportedBy: 'Fire Marshal Inspection', date: 'Sep 10, 2026', hearingDate: 'Sep 14, 2026', status: 'RESOLVED', sanction: 'Device Confiscated & Fine Paid' },
  ];

  return (
    <div className={styles.container}>
      <Link href="/admin" className={styles.backLink}>
        ← Back to Command Center
      </Link>

      <div className={styles.header}>
        <div className={styles.titleArea}>
          <div className={styles.titleRow}>
            <span className={styles.icon}>⚖️</span>
            <h1 className={styles.title}>Student Conduct & Integrity Docket</h1>
          </div>
          <p className={styles.subtitle}>
            Confidential disciplinary case records, student conduct hearings, honor code reviews, and sanctions.
          </p>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.primaryBtn}>+ File Incident Report</button>
        </div>
      </div>

      <div className={styles.confidentialNotice}>
        <span>🔒</span>
        <span>CONFIDENTIAL DOCKET: FERPA / Title IX Protected. Access is restricted and audited on every record view.</span>
      </div>

      <div className={styles.metricsGrid}>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Active Formal Inquiries</span>
          <span className={styles.metricValue}>4 Cases</span>
          <span className={styles.metricSub}>1 Scheduled for hearing this week</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Resolved This Term</span>
          <span className={styles.metricValue}>16 Cases</span>
          <span className={styles.metricSub}>Avg adjudication: 5.2 days</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Campus Integrity Score</span>
          <span className={styles.metricValue}>99.1%</span>
          <span className={styles.metricSub}>Low incident rate campus-wide</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Honor Board Members</span>
          <span className={styles.metricValue}>8 Active</span>
          <span className={styles.metricSub}>Faculty & Student peers</span>
        </div>
      </div>

      <div className={`${styles.glassPanel} glass`}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: 18, fontWeight: 700 }}>Active Incident Review Docket</h2>
          <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>Academic Year 2026-2027</span>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}>Docket #</th>
                <th className={styles.th}>Involved Party</th>
                <th className={styles.th}>Incident Allegation</th>
                <th className={styles.th}>Reported By</th>
                <th className={styles.th}>Incident Date</th>
                <th className={styles.th}>Status</th>
                <th className={styles.th}>Current Sanction</th>
                <th className={styles.th}>Action</th>
              </tr>
            </thead>
            <tbody>
              {cases.map((c) => (
                <tr key={c.id} className={styles.tr}>
                  <td className={styles.td} style={{ fontWeight: 700, color: 'var(--accent-primary)', fontFamily: 'monospace' }}>
                    {c.id}
                  </td>
                  <td className={styles.td} style={{ fontWeight: 600 }}>{c.respondent}</td>
                  <td className={styles.td}>{c.incident}</td>
                  <td className={styles.td}>{c.reportedBy}</td>
                  <td className={styles.td}>{c.date}</td>
                  <td className={styles.td}>
                    <span className={
                      c.status.includes('HEARING')
                        ? styles.badgeHearing
                        : c.status.includes('SANCTION')
                        ? styles.badgeInquiry
                        : styles.badgeResolved
                    }>
                      {c.status}
                    </span>
                  </td>
                  <td className={styles.td} style={{ fontSize: 12 }}>{c.sanction}</td>
                  <td className={styles.td}>
                    <button className={styles.actionBtn}>Case File</button>
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
