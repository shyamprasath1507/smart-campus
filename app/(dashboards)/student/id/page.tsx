'use client';

import React from 'react';
import Link from 'next/link';
import styles from './IdCard.module.css';

export default function DigitalIdCardPage() {
  return (
    <div className={styles.container}>
      <Link href="/student" className={styles.backLink}>
        ← Back to Student Hub
      </Link>

      <div className={styles.headerRow}>
        <div className={styles.titleArea}>
          <h1>🪪 Digital Student ID & Smart Credential</h1>
          <p className={styles.subtitle}>Cryptographically verified campus pass, NFC turnstile key, and library card</p>
        </div>
      </div>

      <div className={styles.cardContainer}>
        <div className={styles.idCard}>
          <div className={styles.cardTop}>
            <div className={styles.univBadge}>
              <span>🏛️</span>
              <span>SMART CAMPUS UNIVERSITY</span>
            </div>
            <span className={styles.nfcIcon}>📡 NFC</span>
          </div>

          <div className={styles.cardMiddle}>
            <div className={styles.avatarBox}>
              JD
            </div>
            <div>
              <div className={styles.cardName}>John Doe</div>
              <div className={styles.cardProgram}>B.S. Artificial Intelligence & Systems</div>
              <div className={styles.cardIdNumber}>ID: STU-2026-8942</div>
            </div>
          </div>

          <div className={styles.cardBottom}>
            <div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>STATUS / VALID THRU</div>
              <div style={{ fontSize: '13px', color: 'var(--accent-secondary)', fontWeight: 700 }}>ACTIVE • 06/2028</div>
            </div>
            <div className={styles.barcodeMock}>
              ||| | |||| || ||| |
            </div>
          </div>
        </div>
      </div>

      <div className={styles.actionsRow}>
        <button className={styles.walletSyncBtn}> Add to Apple Wallet</button>
        <button className={styles.walletSyncBtn}>💳 Add to Google Wallet</button>
        <button className={styles.walletSyncBtn} style={{ color: '#FF6B6B' }}>⚠️ Report Lost Pass</button>
      </div>
    </div>
  );
}
