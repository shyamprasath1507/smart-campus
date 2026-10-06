import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function EmergencyBroadcastPage() {
  const pastAlerts = [
    {
      title: 'Inclement Weather Alert - Gale Warning',
      time: 'Yesterday at 16:45',
      message: 'Severe thunderstorms forecast for East District. Outdoor recreational fields closed until 06:00 tomorrow.',
      reach: '4,198 recipients • 99.8% confirmed delivery',
      severity: 'WARNING',
    },
    {
      title: 'Power Grid Switchover Maintenance',
      time: 'Oct 02, 2026',
      message: 'Scheduled 15-minute auxiliary generator test in Science Quad buildings 2 & 3. Elevators will operate in eco-mode.',
      reach: '1,240 recipients • 100% confirmed delivery',
      severity: 'INFO',
    },
    {
      title: 'Annual Campus Fire Evacuation Drill',
      time: 'Sep 24, 2026',
      message: 'Mandatory fire evacuation exercise concluded successfully across all 8 residence towers.',
      reach: '4,210 recipients • 99.9% reach',
      severity: 'INFO',
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
            <span className={styles.icon}>🚨</span>
            <h1 className={styles.title}>Emergency Broadcast Console</h1>
          </div>
          <p className={styles.subtitle}>
            Direct-to-device mass emergency notifications, PA sirens, and digital campus billboard overrides.
          </p>
        </div>
      </div>

      <div className={styles.liveAlertCard}>
        <div className={styles.liveAlertContent}>
          <div className={styles.alertPulseDot} />
          <div>
            <div className={styles.liveAlertTitle}>ACTIVE BROADCAST STATUS: READY</div>
            <div className={styles.liveAlertText}>All 18 emergency towers, siren repeaters, and push gateways online.</div>
          </div>
        </div>
        <button className={styles.dismissBtn}>Run Diagnostic Ping</button>
      </div>

      <div className={styles.consoleGrid}>
        {/* Dispatch Form */}
        <div className={`${styles.glassPanel} glass`}>
          <h2 className={styles.panelTitle}>Dispatch Emergency Notification</h2>

          <div className={styles.formGroup}>
            <label className={styles.label}>Alert Severity</label>
            <div className={styles.severityOptions}>
              <div className={`${styles.severityPill} ${styles.sevCritical}`}>CRITICAL (Level 1)</div>
              <div className={`${styles.severityPill} ${styles.sevWarning}`}>WARNING (Level 2)</div>
              <div className={`${styles.severityPill} ${styles.sevInfo}`}>INFO (Level 3)</div>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Broadcast Headline</label>
            <input
              type="text"
              placeholder="e.g. FLASH FLOOD WARNING - SHELTER IN PLACE"
              className={styles.input}
              defaultValue=""
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Alert Body Text</label>
            <textarea
              placeholder="Provide clear, concise emergency instructions for students and campus personnel..."
              className={styles.textarea}
              defaultValue=""
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Broadcast Channels</label>
            <div className={styles.channelCheckboxes}>
              <label className={styles.channelItem}>
                <input type="checkbox" defaultChecked />
                <span>Mobile App Push</span>
              </label>
              <label className={styles.channelItem}>
                <input type="checkbox" defaultChecked />
                <span>SMS Gateway (All Users)</span>
              </label>
              <label className={styles.channelItem}>
                <input type="checkbox" defaultChecked />
                <span>PA Public Sirens</span>
              </label>
              <label className={styles.channelItem}>
                <input type="checkbox" defaultChecked />
                <span>Digital Wall Displays</span>
              </label>
            </div>
          </div>

          <button className={styles.dispatchBtn}>🚨 INITIATE MASS BROADCAST NOW</button>
        </div>

        {/* History Log */}
        <div className={`${styles.glassPanel} glass`}>
          <h2 className={styles.panelTitle}>Broadcast Dispatch History</h2>
          <div className={styles.historyList}>
            {pastAlerts.map((alert, idx) => (
              <div key={idx} className={styles.historyItem}>
                <div className={styles.historyTop}>
                  <span className={styles.historyTitle}>{alert.title}</span>
                  <span className={styles.historyTime}>{alert.time}</span>
                </div>
                <p className={styles.historyMsg}>{alert.message}</p>
                <div className={styles.historyMeta}>
                  <span>{alert.reach}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
