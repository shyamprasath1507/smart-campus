'use client';
import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function TeacherSalaryPage() {
  const payslips = [
    {
      id: 'SLIP-2026-09',
      month: 'September 2026',
      gross: '$8,450.00',
      deductions: '$1,530.00',
      net: '$6,920.00',
      disbursedDate: 'Oct 01, 2026',
      status: 'DISBURSED',
    },
    {
      id: 'SLIP-2026-08',
      month: 'August 2026',
      gross: '$8,450.00',
      deductions: '$1,530.00',
      net: '$6,920.00',
      disbursedDate: 'Sep 01, 2026',
      status: 'DISBURSED',
    },
    {
      id: 'SLIP-2026-07',
      month: 'July 2026',
      gross: '$8,450.00',
      deductions: '$1,530.00',
      net: '$6,920.00',
      disbursedDate: 'Aug 01, 2026',
      status: 'DISBURSED',
    },
    {
      id: 'SLIP-2026-06',
      month: 'June 2026',
      gross: '$8,450.00',
      deductions: '$1,530.00',
      net: '$6,920.00',
      disbursedDate: 'Jul 01, 2026',
      status: 'DISBURSED',
    },
  ];

  return (
    <div className={styles.container}>
      <Link href="/teacher" className={styles.backLink}>
        ← Back to Faculty Dashboard
      </Link>

      <div className={styles.header}>
        <div className={styles.titleArea}>
          <h1><span>💵</span> Compensation, Payroll & Payslips</h1>
          <p className={styles.subtitle}>
            Faculty compensation statements, research stipend credits, and tax withholdings.
          </p>
        </div>
      </div>

      <div className={styles.statsGrid}>
        <div className={`${styles.statCard} glass`}>
          <span className={styles.statLabel}>Monthly Gross</span>
          <span className={styles.statValue}>$8,450.00</span>
          <span style={{ color: 'var(--accent-secondary)', fontSize: '13px' }}>Base + Allowances</span>
        </div>
        <div className={`${styles.statCard} glass`}>
          <span className={styles.statLabel}>Net Take-Home</span>
          <span className={styles.statValue}>$6,920.00</span>
          <span style={{ color: 'var(--accent-secondary)', fontSize: '13px' }}>Direct Deposit</span>
        </div>
        <div className={`${styles.statCard} glass`}>
          <span className={styles.statLabel}>YTD Earnings</span>
          <span className={styles.statValue}>$76,050</span>
          <span style={{ color: 'var(--accent-primary)', fontSize: '13px' }}>CY 2026</span>
        </div>
        <div className={`${styles.statCard} glass`}>
          <span className={styles.statLabel}>Next Payday</span>
          <span className={styles.statValue}>Nov 01</span>
          <span style={{ color: 'var(--accent-secondary)', fontSize: '13px' }}>Automated ACH</span>
        </div>
      </div>

      <div className={styles.layout}>
        <div className={`${styles.slipCard} glass`}>
          <h3 style={{ color: 'var(--accent-primary)', fontSize: '18px' }}>
            Current Earnings Breakdown (Sept 2026)
          </h3>

          <div>
            <div className={styles.breakdownRow}>
              <span>Base Academic Salary</span>
              <strong>$6,800.00</strong>
            </div>
            <div className={styles.breakdownRow}>
              <span>Research & Lab Allowance</span>
              <strong>$1,150.00</strong>
            </div>
            <div className={styles.breakdownRow}>
              <span>Course Overload Stipend</span>
              <strong>$500.00</strong>
            </div>
            <div className={styles.breakdownRow} style={{ color: '#ff6b81' }}>
              <span>Federal & State Tax Withholding</span>
              <strong>-$1,120.00</strong>
            </div>
            <div className={styles.breakdownRow} style={{ color: '#ff6b81' }}>
              <span>Faculty Health & Retirement (403b)</span>
              <strong>-$410.00</strong>
            </div>
            <div
              className={styles.breakdownRow}
              style={{
                marginTop: '12px',
                paddingTop: '12px',
                borderTop: '1px solid var(--accent-secondary)',
                fontSize: '16px',
              }}
            >
              <strong style={{ color: 'var(--accent-secondary)' }}>Net Disbursed</strong>
              <strong style={{ color: 'var(--accent-secondary)' }}>$6,920.00</strong>
            </div>
          </div>

          <button
            onClick={() => alert('Downloading official encrypted PDF payslip...')}
            style={{
              background: 'linear-gradient(135deg, var(--accent-primary), #00b3cc)',
              color: 'var(--bg-primary)',
              padding: '12px',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '14px',
              marginTop: '10px',
            }}
          >
            📥 Download Sept 2026 PDF
          </button>
        </div>

        <div className={`${styles.tableCard} glass`}>
          <h3 style={{ color: 'var(--text-primary)' }}>Historical Payslip Archive</h3>

          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Period</th>
                  <th>Gross</th>
                  <th>Deductions</th>
                  <th>Net Paid</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Document</th>
                </tr>
              </thead>
              <tbody>
                {payslips.map((slip) => (
                  <tr key={slip.id}>
                    <td style={{ fontWeight: 600 }}>{slip.month}</td>
                    <td>{slip.gross}</td>
                    <td style={{ color: '#ff6b81' }}>{slip.deductions}</td>
                    <td style={{ fontWeight: 700, color: 'var(--accent-secondary)' }}>
                      {slip.net}
                    </td>
                    <td style={{ color: 'var(--text-muted)' }}>{slip.disbursedDate}</td>
                    <td>
                      <span className={styles.badgePaid}>PAID</span>
                    </td>
                    <td>
                      <button
                        onClick={() => alert(`Downloading payslip for ${slip.month}`)}
                        style={{
                          fontSize: '13px',
                          color: 'var(--accent-primary)',
                          textDecoration: 'underline',
                        }}
                      >
                        PDF
                      </button>
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
