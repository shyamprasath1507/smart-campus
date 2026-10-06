import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function CafeteriaVendorsPage() {
  const vendors = [
    {
      id: 'VEN-01',
      name: 'The Grand Campus Commons',
      type: 'Multi-Cuisine Food Court',
      location: 'Student Union Ground Floor',
      rating: '4.8 ★',
      hygiene: 'Grade A (100/100)',
      todaySales: '$12,450',
      activeOrders: 18,
      status: 'OPEN',
    },
    {
      id: 'VEN-02',
      name: 'Java & Byte Artisan Roastery',
      type: 'Specialty Coffee & Pastries',
      location: 'Engineering Atrium',
      rating: '4.9 ★',
      hygiene: 'Grade A (98/100)',
      todaySales: '$8,210',
      activeOrders: 12,
      status: 'OPEN',
    },
    {
      id: 'VEN-03',
      name: 'Green Oasis Bowls',
      type: 'Organic Salads & Mediterranean',
      location: 'Health Sciences Wing',
      rating: '4.7 ★',
      hygiene: 'Grade A (99/100)',
      todaySales: '$5,980',
      activeOrders: 8,
      status: 'OPEN',
    },
    {
      id: 'VEN-04',
      name: 'Speedy Stone-Fired Pizza',
      type: 'Italian & Flatbreads',
      location: 'Athletics Concourse',
      rating: '4.6 ★',
      hygiene: 'Grade B+ (94/100)',
      todaySales: '$6,420',
      activeOrders: 6,
      status: 'OPEN',
    },
  ];

  return (
    <div className={styles.container}>
      <Link href="/admin" className={styles.backLink}>
        ← Back to Command Center
      </Link>

      <div className={styles.header}>
        <div className={styles.titleArea}>
          <div className={styles.titleRow}>
            <span className={styles.icon}>🍔</span>
            <h1 className={styles.title}>Dining Services & Vendor Management</h1>
          </div>
          <p className={styles.subtitle}>
            Monitor campus dining halls, food court POS transactions, food safety audits, and vendor concession contracts.
          </p>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.primaryBtn}>+ Register Food Vendor</button>
        </div>
      </div>

      <div className={styles.metricsGrid}>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Daily Food Sales</span>
          <span className={styles.metricValue}>$33,060</span>
          <span className={styles.metricSub}>+12% vs prior Tuesday</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Total Meals Served</span>
          <span className={styles.metricValue}>4,890</span>
          <span className={styles.metricSub}>Peak meal window: 12:30 PM</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Active Food Outlets</span>
          <span className={styles.metricValue}>4 Vendors</span>
          <span className={styles.metricSub}>100% operational</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Avg Fulfillment Time</span>
          <span className={styles.metricValue}>4.2 mins</span>
          <span className={styles.metricSub}>Mobile pre-order active</span>
        </div>
      </div>

      <div className={styles.vendorsGrid}>
        {vendors.map((v) => (
          <div key={v.id} className={`${styles.vendorCard} glass`}>
            <div className={styles.vendorHeader}>
              <h3 className={styles.vendorName}>{v.name}</h3>
              <span className={styles.badgeOpen}>{v.status}</span>
            </div>
            <div className={styles.vendorCuisine}>{v.type} • {v.location}</div>

            <div className={styles.statsRow}>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Daily Revenue</span>
                <span className={styles.statVal} style={{ color: '#00FF85' }}>{v.todaySales}</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Hygiene Audit</span>
                <span className={styles.statVal}>{v.hygiene}</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Patron Rating</span>
                <span className={styles.statVal} style={{ color: '#FFB800' }}>{v.rating}</span>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: 'var(--text-secondary)' }}>
              <span>Live Order Queue:</span>
              <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>{v.activeOrders} tickets in kitchen</span>
            </div>

            <div className={styles.cardActions}>
              <button className={styles.cardBtn}>Menu & Pricing</button>
              <button className={styles.cardBtn}>Sales Audit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
