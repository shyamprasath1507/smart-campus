import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function SystemLogsPage() {
  const logEntries = [
    { time: '22:15:31.042', level: 'INFO', service: 'auth-service', msg: 'JWT session renewed for admin@campus.edu via token rotation' },
    { time: '22:15:19.821', level: 'AUTH', service: 'iot-access', msg: 'RFID badge verified: Reader Lab-402, User: Dr. Evelyn Vance (Granted)' },
    { time: '22:14:48.110', level: 'INFO', service: 'shuttle-gps', msg: 'Fleet beacon heartbeat: 4 active shuttles within geofence' },
    { time: '22:14:02.993', level: 'WARN', service: 'grid-telemetry', msg: 'Science Hall 3 inverter #2 power factor threshold warning (0.89)' },
    { time: '22:13:30.412', level: 'INFO', service: 'wallet-engine', msg: 'Micro-transaction processed: STU-8821 cafeteria debit ($4.50)' },
    { time: '22:12:15.004', level: 'ERROR', service: 'notification-gw', msg: 'Push token invalid for client UUID f882-990a: pruned from active device index' },
    { time: '22:11:50.812', level: 'AUTH', service: 'auth-service', msg: 'Rate limit applied to IP 203.0.113.44: 5 consecutive failed logins' },
    { time: '22:10:04.119', level: 'INFO', service: 'database', msg: 'SQLite vacuum & WAL checkpoint completed in 14ms' },
  ];

  return (
    <div className={styles.container}>
      <Link href="/admin" className={styles.backLink}>
        ← Back to Command Center
      </Link>

      <div className={styles.header}>
        <div className={styles.titleArea}>
          <div className={styles.titleRow}>
            <span className={styles.icon}>🖥️</span>
            <h1 className={styles.title}>System Audit & Observability Logs</h1>
          </div>
          <p className={styles.subtitle}>
            Live distributed system telemetry, security audit trails, API latency, and authentication streams.
          </p>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.secondaryBtn}>Download JSON Stream</button>
          <button className={styles.primaryBtn}>⚡ Live WebSocket: ACTIVE</button>
        </div>
      </div>

      <div className={styles.metricsGrid}>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Event Ingestion</span>
          <span className={styles.metricValue}>1,420 /s</span>
          <span className={styles.metricSub}>99.99% buffer capacity free</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>System Error Rate</span>
          <span className={styles.metricValue}>0.02%</span>
          <span className={styles.metricSub}>Well below 0.1% SLA threshold</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>P99 Query Latency</span>
          <span className={styles.metricValue}>14 ms</span>
          <span className={styles.metricSub}>Local SQLite WAL operational</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Active WebSockets</span>
          <span className={styles.metricValue}>1,840</span>
          <span className={styles.metricSub}>Low latency streaming</span>
        </div>
      </div>

      <div className={styles.logTerminal}>
        <div className={styles.logFilterBar}>
          <div className={styles.terminalDots}>
            <div className={`${styles.dot} ${styles.dotRed}`} />
            <div className={`${styles.dot} ${styles.dotYellow}`} />
            <div className={`${styles.dot} ${styles.dotGreen}`} />
          </div>
          <span style={{ color: '#888', fontSize: 12 }}>tail -f /var/log/campus-cloud/ecosystem.log</span>
          <div style={{ display: 'flex', gap: 8 }}>
            <span style={{ color: '#00FF85', fontSize: 11, fontWeight: 700 }}>● TAILING REALTIME</span>
          </div>
        </div>

        <div className={styles.logStream}>
          {logEntries.map((entry, idx) => (
            <div key={idx} className={styles.logLine}>
              <span className={styles.logTimestamp}>{entry.time}</span>
              <span
                className={`${styles.logLevel} ${
                  entry.level === 'INFO'
                    ? styles.levelInfo
                    : entry.level === 'WARN'
                    ? styles.levelWarn
                    : entry.level === 'AUTH'
                    ? styles.levelAuth
                    : styles.levelError
                }`}
              >
                {entry.level}
              </span>
              <span className={styles.logService}>[{entry.service}]</span>
              <span className={styles.logMessage}>{entry.msg}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
