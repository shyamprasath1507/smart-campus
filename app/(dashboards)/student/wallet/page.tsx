'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Wallet.module.css';

interface Transaction {
  id: string;
  name: string;
  location: string;
  time: string;
  amount: number;
  type: 'credit' | 'debit';
  icon: string;
}

const initialTransactions: Transaction[] = [
  { id: '1', name: 'Campus Cafeteria - Combo Meal', location: 'Dining Hall 2', time: 'Today, 1:15 PM', amount: -8.50, type: 'debit', icon: '🍔' },
  { id: '2', name: 'University Bookstore Supplies', location: 'Student Union', time: 'Yesterday, 3:45 PM', amount: -24.00, type: 'debit', icon: '📚' },
  { id: '3', name: 'Instant Reload via Apple Pay', location: 'Online Topup', time: 'Oct 4, 2026', amount: 50.00, type: 'credit', icon: '💳' },
  { id: '4', name: 'Library Print Station (12 pgs)', location: 'Science Library', time: 'Oct 3, 2026', amount: -1.20, type: 'debit', icon: '🖨️' },
  { id: '5', name: 'Vending Machine Snack', location: 'Engineering Block 3', time: 'Oct 2, 2026', amount: -2.75, type: 'debit', icon: '🥤' },
];

export default function DigitalWalletPage() {
  const [balance, setBalance] = useState<number>(124.50);
  const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions);

  const handleTopup = (amount: number) => {
    setBalance((prev) => prev + amount);
    const newTx: Transaction = {
      id: Date.now().toString(),
      name: `Instant Wallet Reload (+$${amount})`,
      location: 'Student Mobile Portal',
      time: 'Just now',
      amount: amount,
      type: 'credit',
      icon: '⚡',
    };
    setTransactions([newTx, ...transactions]);
  };

  return (
    <div className={styles.container}>
      <Link href="/student" className={styles.backLink}>
        ← Back to Student Hub
      </Link>

      <div className={styles.headerRow}>
        <div className={styles.titleArea}>
          <h1>💳 Digital Wallet & NFC Scanner</h1>
          <p className={styles.subtitle}>Contactless campus payments, RFID pass simulator, and transaction ledger</p>
        </div>
      </div>

      <div className={styles.walletGrid}>
        <div className={`${styles.balanceCard} glass`}>
          <div className={styles.balanceTop}>
            <span className={styles.balanceLabel}>CAMPUS PAY BALANCE</span>
            <span className={styles.chipTag}>RFID Active • STU-8942</span>
          </div>

          <div className={styles.balanceAmount}>${balance.toFixed(2)}</div>

          <div>
            <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '10px' }}>
              Quick Reload
            </div>
            <div className={styles.quickTopupRow}>
              <button onClick={() => handleTopup(10)} className={styles.topupBtn}>+$10</button>
              <button onClick={() => handleTopup(25)} className={styles.topupBtn}>+$25</button>
              <button onClick={() => handleTopup(50)} className={styles.topupBtn}>+$50</button>
              <button onClick={() => handleTopup(100)} className={styles.topupBtn}>+$100</button>
            </div>
          </div>
        </div>

        <div className={`${styles.scannerCard} glass`}>
          <div className={styles.qrContainer}>
            <div className={styles.qrScanLine}></div>
            <span className={styles.qrText}>[ TAP OR SCAN ]</span>
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: '16px', marginBottom: '4px' }}>Dynamic Touchless Token</div>
            <p className={styles.scannerInstructions}>
              Present this QR or hold phone near NFC turnstiles, cafeteria cash registers, and dorm access locks.
            </p>
          </div>
        </div>
      </div>

      <h2 className={styles.sectionTitle}>Recent Transactions</h2>
      <div className={`${styles.transactionsCard} glass`}>
        {transactions.map((tx) => (
          <div key={tx.id} className={styles.txItem}>
            <div className={styles.txLeft}>
              <div className={styles.txIcon}>{tx.icon}</div>
              <div>
                <div className={styles.txTitle}>{tx.name}</div>
                <div className={styles.txTime}>{tx.location} • {tx.time}</div>
              </div>
            </div>
            <div className={tx.amount > 0 ? styles.txAmountPos : styles.txAmountNeg}>
              {tx.amount > 0 ? `+$${tx.amount.toFixed(2)}` : `-$${Math.abs(tx.amount).toFixed(2)}`}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
