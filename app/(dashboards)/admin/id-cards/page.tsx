import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function IDCardsPage() {
  const cardQueue = [
    { id: 'REQ-4401', student: 'Marcus Chen', studentId: 'STU-8821', type: 'Physical RFID + Apple Wallet', token: 'NFC-9842A-01', printStatus: 'PRINTING', requestType: 'First Issue' },
    { id: 'REQ-4402', student: 'Elena Vasquez', studentId: 'STU-3319', type: 'Apple Wallet Virtual Pass', token: 'NFC-5512B-04', printStatus: 'READY', requestType: 'Replacement' },
    { id: 'REQ-4403', student: 'Dr. Evelyn Vance', studentId: 'FAC-1002', type: 'Dual Frequency Faculty SmartCard', token: 'NFC-0019C-99', printStatus: 'READY', requestType: 'Renewal' },
    { id: 'REQ-4404', student: 'Liam Gallagher', studentId: 'STU-9903', type: 'Physical RFID Card', token: 'PENDING_WRITE', printStatus: 'QUEUED', requestType: 'Lost Card Reissue' },
    { id: 'REQ-4405', student: 'Amina Yusuf', studentId: 'STU-7729', type: 'Physical RFID + Google Wallet', token: 'PENDING_WRITE', printStatus: 'QUEUED', requestType: 'First Issue' },
  ];

  return (
    <div className={styles.container}>
      <Link href="/admin" className={styles.backLink}>
        ← Back to Command Center
      </Link>

      <div className={styles.header}>
        <div className={styles.titleArea}>
          <div className={styles.titleRow}>
            <span className={styles.icon}>🪪</span>
            <h1 className={styles.title}>Smart ID Card Provisioning Station</h1>
          </div>
          <p className={styles.subtitle}>
            Encode RFID tokens, push cryptographic Apple/Google Wallet campus keys, and batch-print identity credentials.
          </p>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.primaryBtn}>⚡ Batch Print Selected</button>
        </div>
      </div>

      <div className={styles.metricsGrid}>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Issued This Term</span>
          <span className={styles.metricValue}>1,420 Cards</span>
          <span className={styles.metricSub}>94% mobile wallet enabled</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>In Print Queue</span>
          <span className={styles.metricValue}>14 Cards</span>
          <span className={styles.metricSub}>Printer Station #1 Online</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Lost Replacement Requests</span>
          <span className={styles.metricValue}>8 Pending</span>
          <span className={styles.metricSub}>$15 fee automatically billed</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>NFC Encoder Firmware</span>
          <span className={styles.metricValue}>v4.2.1</span>
          <span className={styles.metricSub}>AES-128 Encryption Active</span>
        </div>
      </div>

      <div className={`${styles.glassPanel} glass`}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: 18, fontWeight: 700 }}>Card Encoding & Issuance Pipeline</h2>
          <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>Zebra ZXP7 Card Printer: Ready (Cyan: 82%, Ribbon: 94%)</span>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}>Batch ID</th>
                <th className={styles.th}>Recipient Name</th>
                <th className={styles.th}>Card Medium</th>
                <th className={styles.th}>Hardware UID</th>
                <th className={styles.th}>Request Reason</th>
                <th className={styles.th}>Print Status</th>
                <th className={styles.th}>Action</th>
              </tr>
            </thead>
            <tbody>
              {cardQueue.map((item) => (
                <tr key={item.id} className={styles.tr}>
                  <td className={styles.td} style={{ fontWeight: 700, color: 'var(--accent-primary)' }}>{item.id}</td>
                  <td className={styles.td}>
                    <div style={{ fontWeight: 600 }}>{item.student}</div>
                    <div style={{ fontSize: 11, color: 'var(--text-secondary)' }}>{item.studentId}</div>
                  </td>
                  <td className={styles.td}>{item.type}</td>
                  <td className={styles.td} style={{ fontFamily: 'monospace', fontSize: 12 }}>{item.token}</td>
                  <td className={styles.td}>{item.requestType}</td>
                  <td className={styles.td}>
                    <span className={
                      item.printStatus === 'READY'
                        ? styles.badgeReady
                        : item.printStatus === 'PRINTING'
                        ? styles.badgePrinting
                        : styles.badgeQueued
                    }>
                      {item.printStatus}
                    </span>
                  </td>
                  <td className={styles.td}>
                    <button className={styles.actionBtn}>Encode UID</button>
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
