'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Fees.module.css';

export default function TuitionFeePortalPage() {
  const [paid, setPaid] = useState(false);

  const breakdown = [
    { item: 'Tuition (Undergraduate Engineering - 16 Credits)', amount: 3800.00 },
    { item: 'Laboratory & Research Cluster Fee', amount: 350.00 },
    { item: 'Technology & Smart Campus Infrastructure Fee', amount: 150.00 },
    { item: 'Student Health & Wellness Coverage', amount: 120.00 },
    { item: 'Campus Athletic & Recreation Fee', amount: 80.00 },
    { item: 'Merit Academic Scholarship (Semester Deduction)', amount: -500.00 },
  ];

  const total = breakdown.reduce((acc, curr) => acc + curr.amount, 0);

  const pastReceipts = [
    { semester: 'Spring 2026', invoice: 'INV-2026-0811', date: 'Jan 10, 2026', amount: '$4,000.00', status: 'PAID' },
    { semester: 'Fall 2025', invoice: 'INV-2025-4920', date: 'Aug 15, 2025', amount: '$4,000.00', status: 'PAID' },
    { semester: 'Spring 2025', invoice: 'INV-2025-0129', date: 'Jan 12, 2025', amount: '$3,850.00', status: 'PAID' },
  ];

  return (
    <div className={styles.container}>
      <Link href="/student" className={styles.backLink}>
        ← Back to Student Hub
      </Link>

      <div className={styles.headerRow}>
        <div className={styles.titleArea}>
          <h1>💰 Tuition Fee & Bursar Portal</h1>
          <p className={styles.subtitle}>Semester invoices, payment plans, financial aid, and receipts</p>
        </div>
      </div>

      <div className={`${styles.dueHero} glass`}>
        <div className={styles.dueDetails}>
          <span className={styles.dueBadge}>{paid ? 'NO DUES PENDING' : 'DUE IN 5 DAYS • OCT 11, 2026'}</span>
          <div className={styles.dueAmount}>{paid ? '$0.00' : `$${total.toFixed(2)}`}</div>
          <div className={styles.dueTerm}>Fall Semester 2026 • Full-Time Enrollment</div>
        </div>

        <div className={styles.payActionGroup}>
          {!paid ? (
            <>
              <button onClick={() => setPaid(true)} className={styles.payFullBtn}>
                Pay Full Balance Now
              </button>
              <button className={styles.installmentBtn}>
                Request 3-Month Plan
              </button>
            </>
          ) : (
            <div style={{ color: 'var(--accent-secondary)', fontWeight: 700, textAlign: 'center' }}>
              ✓ Payment Received & Receipt Issued
            </div>
          )}
        </div>
      </div>

      <h2 className={styles.sectionTitle}>Itemized Fee Breakdown</h2>
      <div className={`${styles.breakdownCard} glass`}>
        {breakdown.map((row, idx) => (
          <div key={idx} className={styles.breakdownRow}>
            <span>{row.item}</span>
            <span style={{ color: row.amount < 0 ? 'var(--accent-secondary)' : 'inherit' }}>
              {row.amount < 0 ? `-$${Math.abs(row.amount).toFixed(2)}` : `$${row.amount.toFixed(2)}`}
            </span>
          </div>
        ))}
        <div className={styles.breakdownRow}>
          <span>Net Total Payable</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <h2 className={styles.sectionTitle}>Previous Invoices & Receipts</h2>
      <div className="glass" style={{ borderRadius: 'var(--border-radius)', overflow: 'hidden' }}>
        <table className={styles.receiptsTable}>
          <thead>
            <tr>
              <th>Semester</th>
              <th>Invoice No.</th>
              <th>Date Paid</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Receipt</th>
            </tr>
          </thead>
          <tbody>
            {pastReceipts.map((r, i) => (
              <tr key={i}>
                <td>{r.semester}</td>
                <td>{r.invoice}</td>
                <td>{r.date}</td>
                <td>{r.amount}</td>
                <td><span className={styles.statusPaid}>{r.status}</span></td>
                <td><span className={styles.downloadLink}>Download PDF</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
