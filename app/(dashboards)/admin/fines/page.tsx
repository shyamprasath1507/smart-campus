import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function LibraryFinesPage() {
  const overdueAccounts = [
    { id: 'BOR-101', student: 'Marcus Chen (STU-8821)', book: 'Introduction to Algorithms (4th Ed.)', dueDate: 'Sep 20, 2026', daysOverdue: 16, fine: '$16.00', status: 'UNPAID' },
    { id: 'BOR-102', student: 'Liam Gallagher (STU-9903)', book: 'Deep Learning & Neural Networks', dueDate: 'Sep 25, 2026', daysOverdue: 11, fine: '$11.00', status: 'UNPAID' },
    { id: 'BOR-103', student: 'Chloe Adams (STU-4412)', book: 'Principles of Quantum Mechanics', dueDate: 'Sep 28, 2026', daysOverdue: 8, fine: '$8.00', status: 'WAIVER REQUESTED' },
    { id: 'BOR-104', student: 'Zack Taylor (STU-2184)', book: 'Designing Data-Intensive Applications', dueDate: 'Oct 01, 2026', daysOverdue: 5, fine: '$5.00', status: 'UNPAID' },
    { id: 'BOR-105', student: 'Amina Yusuf (STU-7729)', book: 'Organic Chemistry Laboratory Manual', dueDate: 'Oct 02, 2026', daysOverdue: 4, fine: '$4.00', status: 'UNPAID' },
  ];

  return (
    <div className={styles.container}>
      <Link href="/admin" className={styles.backLink}>
        ← Back to Command Center
      </Link>

      <div className={styles.header}>
        <div className={styles.titleArea}>
          <div className={styles.titleRow}>
            <span className={styles.icon}>📚</span>
            <h1 className={styles.title}>Library Circulation Fines & Penalties</h1>
          </div>
          <p className={styles.subtitle}>
            Track overdue circulation items, process fine collections, review waiver appeals, and manage hold restrictions.
          </p>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.secondaryBtn}>Auto-Notify Borrowers</button>
          <button className={styles.primaryBtn}>Process Payment</button>
        </div>
      </div>

      <div className={styles.metricsGrid}>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Total Overdue Balance</span>
          <span className={styles.metricValue}>$3,420</span>
          <span className={styles.metricSub}>Across 84 patrons</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Overdue Items</span>
          <span className={styles.metricValue}>92 Books</span>
          <span className={styles.metricSub}>Average 6.4 days overdue</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Collected This Month</span>
          <span className={styles.metricValue}>$1,280</span>
          <span className={styles.metricSub}>Direct wallet deductions</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Appeals / Waivers</span>
          <span className={styles.metricValue}>6 Pending</span>
          <span className={styles.metricSub}>Review required by librarian</span>
        </div>
      </div>

      <div className={`${styles.glassPanel} glass`}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: 18, fontWeight: 700 }}>Delinquent Circulation Roster</h2>
          <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>Showing 5 of 84 items</span>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}>Patron Details</th>
                <th className={styles.th}>Book Title</th>
                <th className={styles.th}>Due Date</th>
                <th className={styles.th}>Days Late</th>
                <th className={styles.th}>Accrued Fine</th>
                <th className={styles.th}>Status</th>
                <th className={styles.th}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {overdueAccounts.map((item) => (
                <tr key={item.id} className={styles.tr}>
                  <td className={styles.td}>
                    <div style={{ fontWeight: 600 }}>{item.student}</div>
                    <div style={{ fontSize: 11, color: 'var(--text-secondary)' }}>{item.id}</div>
                  </td>
                  <td className={styles.td}>{item.book}</td>
                  <td className={styles.td}>{item.dueDate}</td>
                  <td className={styles.td} style={{ color: '#FF4757', fontWeight: 600 }}>+{item.daysOverdue}d</td>
                  <td className={styles.td} style={{ fontWeight: 700, color: '#FFB800' }}>{item.fine}</td>
                  <td className={styles.td}>
                    <span style={{
                      fontSize: 11,
                      fontWeight: 700,
                      padding: '4px 8px',
                      borderRadius: 12,
                      background: item.status.includes('WAIVER') ? 'rgba(0, 229, 255, 0.15)' : 'rgba(255, 71, 87, 0.15)',
                      color: item.status.includes('WAIVER') ? '#00E5FF' : '#FF4757',
                    }}>
                      {item.status}
                    </span>
                  </td>
                  <td className={styles.td}>
                    <button className={styles.actionBtn}>Deduct Wallet</button>
                    <button className={styles.actionBtn}>Waive</button>
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
