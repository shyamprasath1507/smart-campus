'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function TeacherDigitalIdPage() {
  const [rfidActive, setRfidActive] = useState(true);

  return (
    <div className={styles.container}>
      <Link href="/teacher" className={styles.backLink}>
        ← Back to Faculty Dashboard
      </Link>

      <div className={styles.header}>
        <div className={styles.titleArea}>
          <h1><span>🪪</span> Faculty Digital ID & NFC Credential</h1>
          <p className={styles.subtitle}>
            Cryptographically signed RFID smart badge for lab access, parking barriers, and secure print stations.
          </p>
        </div>
      </div>

      <div className={styles.layout}>
        <div className={`${styles.idCardContainer} glass`}>
          <div className={styles.cardGlow} />

          <div className={styles.cardTop}>
            <span className={styles.institutionLogo}>SMART CAMPUS UNIVERSITY</span>
            <span className={styles.nfcChip}>📶</span>
          </div>

          <div className={styles.profileSection}>
            <div className={styles.avatar}>AV</div>
            <div>
              <h2 className={styles.facultyName}>Dr. Alan Vance</h2>
              <div className={styles.facultyDept}>Dept of Computer Science & AI</div>
              <div className={styles.facultyId}>ID: FAC-2024-88392 &nbsp;|&nbsp; RFID: 04E9C12B</div>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px',
              fontSize: '12px',
              color: 'var(--text-secondary)',
              borderTop: '1px solid var(--glass-border)',
              paddingTop: '12px',
            }}
          >
            <div>
              <span>Security Clearance</span>
              <div style={{ color: 'var(--accent-primary)', fontWeight: 700 }}>
                Tier 1 (Labs + Server Vault)
              </div>
            </div>
            <div>
              <span>Parking Permit</span>
              <div style={{ color: 'var(--accent-secondary)', fontWeight: 700 }}>
                Faculty Lot A - Assigned
              </div>
            </div>
            <div>
              <span>Valid Through</span>
              <div style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                August 31, 2028
              </div>
            </div>
            <div>
              <span>NFC Status</span>
              <div
                style={{
                  color: rfidActive ? 'var(--accent-secondary)' : '#ff4757',
                  fontWeight: 700,
                }}
              >
                {rfidActive ? '● Active & Emitting' : '○ Card Locked'}
              </div>
            </div>
          </div>

          <div className={styles.barcodeContainer}>
            <div className={styles.barcodeMock}>||| | |||| | || ||| || ||| |</div>
            <div className={styles.barcodeNum}>*9024883920194829*</div>
          </div>

          <button
            onClick={() => setRfidActive(!rfidActive)}
            style={{
              background: rfidActive ? 'rgba(255, 71, 87, 0.15)' : 'var(--accent-primary)',
              color: rfidActive ? '#ff4757' : 'var(--bg-primary)',
              border: rfidActive ? '1px solid rgba(255, 71, 87, 0.4)' : 'none',
              padding: '10px',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '13px',
              cursor: 'pointer',
            }}
          >
            {rfidActive ? 'Lock Badge Access (Report Stolen)' : 'Reactivate Badge'}
          </button>
        </div>
      </div>
    </div>
  );
}
