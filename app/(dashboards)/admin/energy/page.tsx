import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function EnergyMetricsPage() {
  const buildingLoads = [
    { name: 'Science & Engineering Complex', draw: '110 kW', percent: 85, status: 'High Compute' },
    { name: 'Undergraduate Residence Halls', draw: '85 kW', percent: 65, status: 'Nominal' },
    { name: 'Central Campus Library', draw: '45 kW', percent: 35, status: 'Optimized' },
    { name: 'Data Center & HPC Vault', draw: '45 kW', percent: 90, status: 'Constant Baseload' },
    { name: 'Recreation & Aquatic Center', draw: '35 kW', percent: 28, status: 'Eco-Mode' },
  ];

  return (
    <div className={styles.container}>
      <Link href="/admin" className={styles.backLink}>
        ← Back to Command Center
      </Link>

      <div className={styles.header}>
        <div className={styles.titleArea}>
          <div className={styles.titleRow}>
            <span className={styles.icon}>⚡</span>
            <h1 className={styles.title}>Campus Smart Grid & Telemetry</h1>
          </div>
          <p className={styles.subtitle}>
            Rooftop solar microgrid generation, building consumption loads, and automated load balancing.
          </p>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.primaryBtn}>⚡ Grid Load Shedding</button>
        </div>
      </div>

      <div className={styles.metricsGrid}>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Total Instant Load</span>
          <span className={styles.metricValue}>320 kW</span>
          <span className={styles.metricSub}>-5% vs yesterday peak</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Solar Microgrid Gen</span>
          <span className={styles.metricValue}>145 kW</span>
          <span className={styles.metricSub}>45.3% solar self-powered</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Daily Carbon Abated</span>
          <span className={styles.metricValue}>1.8 Tons</span>
          <span className={styles.metricSub}>Equivalent to 78 trees</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Battery Storage Reserve</span>
          <span className={styles.metricValue}>88%</span>
          <span className={styles.metricSub}>4.2 MWh available</span>
        </div>
      </div>

      <div className={styles.energyGrid}>
        {/* Building Telemetry */}
        <div className={`${styles.glassPanel} glass`}>
          <h2 className={styles.panelTitle}>Building Sub-station Consumption</h2>
          <div className={styles.buildingList}>
            {buildingLoads.map((b, idx) => (
              <div key={idx} className={styles.buildingItem}>
                <div className={styles.buildingTop}>
                  <div>
                    <span className={styles.bName}>{b.name}</span>
                    <span style={{ fontSize: 11, color: 'var(--text-secondary)', marginLeft: 8 }}>({b.status})</span>
                  </div>
                  <span className={styles.bKw}>{b.draw}</span>
                </div>
                <div className={styles.progressTrack}>
                  <div
                    className={styles.progressBar}
                    style={{ width: `${b.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Smart Grid Automations */}
        <div className={`${styles.glassPanel} glass`}>
          <h2 className={styles.panelTitle}>Autonomous Grid Policies</h2>
          <div className={styles.smartGridToggles}>
            <div className={styles.toggleRow}>
              <div className={styles.toggleInfo}>
                <span className={styles.toggleTitle}>Solar Peak Inversion</span>
                <span className={styles.toggleDesc}>Discharge battery banks during 14:00-18:00 peak tariff</span>
              </div>
              <span className={styles.statusIndicator}>● ACTIVE</span>
            </div>

            <div className={styles.toggleRow}>
              <div className={styles.toggleInfo}>
                <span className={styles.toggleTitle}>Smart HVAC Setback</span>
                <span className={styles.toggleDesc}>Auto-throttle unoccupied lecture halls via PIR sensors</span>
              </div>
              <span className={styles.statusIndicator}>● ACTIVE</span>
            </div>

            <div className={styles.toggleRow}>
              <div className={styles.toggleInfo}>
                <span className={styles.toggleTitle}>EV Fleet Smart Charging</span>
                <span className={styles.toggleDesc}>Schedule shuttle bus charging strictly during night off-peak</span>
              </div>
              <span className={styles.statusIndicator}>● SCHEDULED</span>
            </div>

            <div className={styles.toggleRow}>
              <div className={styles.toggleInfo}>
                <span className={styles.toggleTitle}>Data Center Heat Recovery</span>
                <span className={styles.toggleDesc}>Channel server exhaust heat to warm campus aquatic center</span>
              </div>
              <span className={styles.statusIndicator}>● ONLINE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
