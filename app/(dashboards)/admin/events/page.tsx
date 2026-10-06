import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function EventApprovalsPage() {
  const eventProposals = [
    { id: 'EVT-501', title: 'Campus Hackathon: AI for Sustainability', org: 'ACM Student Chapter', venue: 'Student Innovation Center', date: 'Oct 24-25, 2026', attendees: 300, budget: '$4,500', status: 'PENDING' },
    { id: 'EVT-502', title: 'Annual International Food Festival', org: 'Multicultural Student Alliance', venue: 'Central Quad Lawn', date: 'Nov 02, 2026', attendees: 1200, budget: '$8,200', status: 'APPROVED' },
    { id: 'EVT-503', title: 'Distinguished Guest Lecture: Dr. Terrence Tao', org: 'Department of Mathematics', venue: 'Grand Auditorium Hall A', date: 'Nov 12, 2026', attendees: 850, budget: '$6,000', status: 'APPROVED' },
    { id: 'EVT-504', title: 'Autonomous Drone Racing Exhibition', org: 'Robotics & UAV Club', venue: 'Athletic Field Turf', date: 'Nov 18, 2026', attendees: 450, budget: '$3,200', status: 'PENDING' },
    { id: 'EVT-505', title: 'Fall Chamber Orchestra Concert', org: 'Conservatory of Music', venue: 'Symphony Hall', date: 'Dec 04, 2026', attendees: 600, budget: '$2,800', status: 'APPROVED' },
  ];

  return (
    <div className={styles.container}>
      <Link href="/admin" className={styles.backLink}>
        ← Back to Command Center
      </Link>

      <div className={styles.header}>
        <div className={styles.titleArea}>
          <div className={styles.titleRow}>
            <span className={styles.icon}>🎉</span>
            <h1 className={styles.title}>Campus Event Approvals & Logistics</h1>
          </div>
          <p className={styles.subtitle}>
            Review student organization and departmental venue bookings, safety compliance, and budget authorizations.
          </p>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.primaryBtn}>+ Submit Event Proposal</button>
        </div>
      </div>

      <div className={styles.metricsGrid}>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Pending Approval</span>
          <span className={styles.metricValue}>5 Events</span>
          <span className={styles.metricSub}>2 Require fire marshal sign-off</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Approved This Month</span>
          <span className={styles.metricValue}>28 Events</span>
          <span className={styles.metricSub}>Across 12 campus venues</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Auditorium Utilization</span>
          <span className={styles.metricValue}>85%</span>
          <span className={styles.metricSub}>High demand on weekends</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Student Involvement</span>
          <span className={styles.metricValue}>4,200+</span>
          <span className={styles.metricSub}>Projected attendee reach</span>
        </div>
      </div>

      <div className={`${styles.glassPanel} glass`}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: 18, fontWeight: 700 }}>Event Docket & Venue Approvals</h2>
          <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>Showing active calendar requests</span>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}>Event Title</th>
                <th className={styles.th}>Organizer</th>
                <th className={styles.th}>Requested Venue</th>
                <th className={styles.th}>Scheduled Date</th>
                <th className={styles.th}>Est. Attendees</th>
                <th className={styles.th}>Budget Grant</th>
                <th className={styles.th}>Status</th>
                <th className={styles.th}>Decision</th>
              </tr>
            </thead>
            <tbody>
              {eventProposals.map((item) => (
                <tr key={item.id} className={styles.tr}>
                  <td className={styles.td}>
                    <div style={{ fontWeight: 600 }}>{item.title}</div>
                    <div style={{ fontSize: 11, color: 'var(--text-secondary)' }}>{item.id}</div>
                  </td>
                  <td className={styles.td}>{item.org}</td>
                  <td className={styles.td}>{item.venue}</td>
                  <td className={styles.td}>{item.date}</td>
                  <td className={styles.td} style={{ fontWeight: 600 }}>{item.attendees}</td>
                  <td className={styles.td} style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>{item.budget}</td>
                  <td className={styles.td}>
                    <span className={item.status === 'APPROVED' ? styles.badgeApproved : styles.badgePending}>
                      {item.status}
                    </span>
                  </td>
                  <td className={styles.td}>
                    {item.status === 'PENDING' ? (
                      <div>
                        <button className={styles.actionBtnApprove}>Approve</button>
                        <button className={styles.actionBtnReject}>Decline</button>
                      </div>
                    ) : (
                      <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Confirmed</span>
                    )}
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
