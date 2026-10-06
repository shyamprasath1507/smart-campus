import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function FinancialDashboardPage() {
  const departmentBudgets = [
    { name: 'Computer Science & AI', allocated: '$3,800,000', used: '$2,950,000', percent: 77 },
    { name: 'Health Sciences & Medicine', allocated: '$4,200,000', used: '$3,570,000', percent: 85 },
    { name: 'Engineering & Fabrication Labs', allocated: '$2,900,000', used: '$2,100,000', percent: 72 },
    { name: 'Campus Facilities & Clean Energy', allocated: '$2,100,000', used: '$1,380,000', percent: 65 },
    { name: 'IT Infrastructure & High-Performance Computing', allocated: '$1,800,000', used: '$1,620,000', percent: 90 },
  ];

  const recentTransactions = [
    { id: 'TXN-9042', desc: 'Fall Term Tuition Batch Settlement', category: 'Tuition Income', amount: '+$342,000.00', status: 'SETTLED', date: 'Oct 06, 2026' },
    { id: 'TXN-9041', desc: 'NVIDIA H100 Compute Cluster Lease', category: 'IT Capex', amount: '-$54,200.00', status: 'SETTLED', date: 'Oct 05, 2026' },
    { id: 'TXN-9040', desc: 'Solar Microgrid Inverter Servicing', category: 'Maintenance', amount: '-$12,450.00', status: 'SETTLED', date: 'Oct 04, 2026' },
    { id: 'TXN-9039', desc: 'Dining Hall Wholesale Food Supply', category: 'Dining Ops', amount: '-$28,800.00', status: 'PENDING', date: 'Oct 04, 2026' },
    { id: 'TXN-9038', desc: 'Library Elsevier Academic Subscriptions', category: 'Library Services', amount: '-$18,900.00', status: 'SETTLED', date: 'Oct 03, 2026' },
  ];

  return (
    <div className={styles.container}>
      <Link href="/admin" className={styles.backLink}>
        ← Back to Command Center
      </Link>

      <div className={styles.header}>
        <div className={styles.titleArea}>
          <div className={styles.titleRow}>
            <span className={styles.icon}>💰</span>
            <h1 className={styles.title}>Campus Financial Oversight</h1>
          </div>
          <p className={styles.subtitle}>
            Multi-department operational budgets, tuition revenue realization, and capital expenditures.
          </p>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.secondaryBtn}>Fiscal Audit Report</button>
          <button className={styles.primaryBtn}>+ Record Disbursement</button>
        </div>
      </div>

      <div className={styles.metricsGrid}>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Fiscal YTD Revenue</span>
          <span className={styles.metricValue}>$14.8M</span>
          <span className={styles.metricSubPositive}>+8.4% ahead of projection</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Tuition Realization</span>
          <span className={styles.metricValue}>$12.2M</span>
          <span className={styles.metricSubPositive}>94.1% collection rate</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Operating Expenditures</span>
          <span className={styles.metricValue}>$6.1M</span>
          <span className={styles.metricSubNeutral}>Under quarterly cap</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Endowment Pool</span>
          <span className={styles.metricValue}>$24.5M</span>
          <span className={styles.metricSubPositive}>+5.2% annual yield</span>
        </div>
      </div>

      <div className={styles.budgetGrid}>
        {/* Department Budgets */}
        <div className={`${styles.glassPanel} glass`}>
          <h2 className={styles.panelTitle}>Department Budget Consumption</h2>
          <div className={styles.deptBarContainer}>
            {departmentBudgets.map((dept, idx) => (
              <div key={idx} className={styles.deptBarItem}>
                <div className={styles.deptMeta}>
                  <span className={styles.deptName}>{dept.name}</span>
                  <span className={styles.deptAmount}>
                    {dept.used} / {dept.allocated} ({dept.percent}%)
                  </span>
                </div>
                <div className={styles.progressTrack}>
                  <div
                    className={styles.progressBar}
                    style={{ width: `${dept.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Ledger */}
        <div className={`${styles.glassPanel} glass`}>
          <h2 className={styles.panelTitle}>Recent Ledger Transactions</h2>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.th}>Transaction</th>
                  <th className={styles.th}>Category</th>
                  <th className={styles.th}>Amount</th>
                  <th className={styles.th}>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentTransactions.map((t) => (
                  <tr key={t.id} className={styles.tr}>
                    <td className={styles.td}>
                      <div style={{ fontWeight: 600 }}>{t.desc}</div>
                      <div style={{ fontSize: 11, color: 'var(--text-secondary)' }}>{t.id} • {t.date}</div>
                    </td>
                    <td className={styles.td}>{t.category}</td>
                    <td className={styles.td} style={{ fontWeight: 700, color: t.amount.startsWith('+') ? '#00FF85' : '#fff' }}>
                      {t.amount}
                    </td>
                    <td className={styles.td}>
                      <span className={t.status === 'SETTLED' ? styles.badgeSuccess : styles.badgePending}>
                        {t.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
