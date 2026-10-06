import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function PayrollSystemPage() {
  const staffPayroll = [
    { id: 'EMP-101', name: 'Dr. Evelyn Vance', role: 'Professor & Dept Chair', base: '$11,500', benefits: '$1,800', tax: '$2,450', net: '$10,850', status: 'PAID', date: 'Oct 01, 2026' },
    { id: 'EMP-102', name: 'Prof. Ananya Rao', role: 'Associate Professor', base: '$9,200', benefits: '$1,400', tax: '$1,920', net: '$8,680', status: 'PAID', date: 'Oct 01, 2026' },
    { id: 'EMP-103', name: 'Dean Sarah Connor', role: 'Dean of Academics', base: '$14,000', benefits: '$2,200', tax: '$3,150', net: '$13,050', status: 'PAID', date: 'Oct 01, 2026' },
    { id: 'EMP-104', name: 'Dr. Marcus Webb', role: 'Postdoctoral Fellow', base: '$6,400', benefits: '$950', tax: '$1,120', net: '$6,230', status: 'PROCESSING', date: 'Oct 01, 2026' },
    { id: 'EMP-105', name: 'James Morrison', role: 'Head of Campus Security', base: '$7,800', benefits: '$1,100', tax: '$1,480', net: '$7,420', status: 'PAID', date: 'Oct 01, 2026' },
    { id: 'EMP-106', name: 'Elena Rostova', role: 'Senior Systems Architect', base: '$10,400', benefits: '$1,650', tax: '$2,180', net: '$9,870', status: 'PAID', date: 'Oct 01, 2026' },
  ];

  return (
    <div className={styles.container}>
      <Link href="/admin" className={styles.backLink}>
        ← Back to Command Center
      </Link>

      <div className={styles.header}>
        <div className={styles.titleArea}>
          <div className={styles.titleRow}>
            <span className={styles.icon}>💳</span>
            <h1 className={styles.title}>Faculty & Staff Payroll Console</h1>
          </div>
          <p className={styles.subtitle}>
            Monthly salary disbursements, tax withholdings, stipends, and direct deposit verifications.
          </p>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.secondaryBtn}>Generate W-2 / Tax Forms</button>
          <button className={styles.primaryBtn}>⚡ Run Batch Payout</button>
        </div>
      </div>

      <div className={styles.metricsGrid}>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Monthly Payroll Total</span>
          <span className={styles.metricValue}>$1,420,500</span>
          <span className={styles.metricSub}>October 2026 Cycle</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Disbursed Accounts</span>
          <span className={styles.metricValue}>511 / 512</span>
          <span className={styles.metricSub}>99.8% settled via ACH</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Total Tax Withheld</span>
          <span className={styles.metricValue}>$312,400</span>
          <span className={styles.metricSub}>Remitted to State & Federal</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Next Pay Cycle</span>
          <span className={styles.metricValue}>Oct 31</span>
          <span className={styles.metricSub}>Cutoff in 25 days</span>
        </div>
      </div>

      <div className={`${styles.glassPanel} glass`}>
        <div className={styles.filterBar}>
          <input
            type="text"
            placeholder="Search employee by name, ID, or department..."
            className={styles.searchInput}
            readOnly
            defaultValue=""
          />
          <button className={styles.secondaryBtn}>Filter by Department</button>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}>Staff Member</th>
                <th className={styles.th}>Position</th>
                <th className={styles.th}>Base Salary</th>
                <th className={styles.th}>Allowances</th>
                <th className={styles.th}>Deductions</th>
                <th className={styles.th}>Net Payout</th>
                <th className={styles.th}>Status</th>
                <th className={styles.th}>Slip</th>
              </tr>
            </thead>
            <tbody>
              {staffPayroll.map((item) => (
                <tr key={item.id} className={styles.tr}>
                  <td className={styles.td}>
                    <div style={{ fontWeight: 600 }}>{item.name}</div>
                    <div style={{ fontSize: 11, color: 'var(--text-secondary)' }}>{item.id}</div>
                  </td>
                  <td className={styles.td}>{item.role}</td>
                  <td className={styles.td}>{item.base}</td>
                  <td className={styles.td} style={{ color: '#00FF85' }}>+{item.benefits}</td>
                  <td className={styles.td} style={{ color: '#FF4757' }}>-{item.tax}</td>
                  <td className={styles.td} style={{ fontWeight: 700, color: 'var(--accent-primary)' }}>{item.net}</td>
                  <td className={styles.td}>
                    <span className={item.status === 'PAID' ? styles.badgePaid : styles.badgePending}>
                      {item.status}
                    </span>
                  </td>
                  <td className={styles.td}>
                    <button className={styles.actionBtn}>PDF</button>
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
