import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function ITInfrastructurePage() {
  const infraNodes = [
    { id: 'CORE-GW-01', name: 'Core Optical Backbone Gateway', ip: '10.0.0.1 / bgp.campus.net', latency: '0.8 ms', load: '4.2 Gbps / 10 Gbps', uptime: '184 days', status: 'HEALTHY' },
    { id: 'WIFI-AP-CLUSTER', name: 'Wi-Fi 7 Mesh AP Matrix (240 APs)', ip: '10.10.0.0/16', latency: '2.1 ms', load: '8,420 Clients connected', uptime: '99.98%', status: 'HEALTHY' },
    { id: 'DNS-DHCP-PRI', name: 'Authoritative Anycast DNS & DHCP', ip: '10.0.1.53', latency: '1.0 ms', load: '14,200 QPS resolved', uptime: '320 days', status: 'HEALTHY' },
    { id: 'HPC-GPU-SLURM', name: 'DGX H100 GPU Compute Cluster', ip: '10.200.4.12', latency: '0.4 ms', load: '92% GPU Utilization', uptime: '45 days', status: 'HEALTHY' },
    { id: 'AUTH-RADIUS-01', name: '802.1X Enterprise RADIUS / Kerberos', ip: '10.0.2.18', latency: '3.4 ms', load: '180 auth requests/sec', uptime: '120 days', status: 'HEALTHY' },
    { id: 'EDGE-FIREWALL', name: 'Next-Gen Perimeter Threat Shield', ip: '198.51.100.1', latency: '1.2 ms', load: '0 Intrusions detected', uptime: '90 days', status: 'ARMED' },
  ];

  return (
    <div className={styles.container}>
      <Link href="/admin" className={styles.backLink}>
        ← Back to Command Center
      </Link>

      <div className={styles.header}>
        <div className={styles.titleArea}>
          <div className={styles.titleRow}>
            <span className={styles.icon}>🌐</span>
            <h1 className={styles.title}>IT & Network Infrastructure</h1>
          </div>
          <p className={styles.subtitle}>
            Multi-gigabit campus mesh Wi-Fi, core fiber switches, DNS/DHCP clusters, and cyber defense telemetry.
          </p>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.primaryBtn}>⚡ Run Network Diagnostic</button>
        </div>
      </div>

      <div className={styles.metricsGrid}>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Wi-Fi Mesh Active Devices</span>
          <span className={styles.metricValue}>8,420</span>
          <span className={styles.metricSub}>98% on 5GHz/6GHz bands</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Core Fiber Throughput</span>
          <span className={styles.metricValue}>4.2 Gbps</span>
          <span className={styles.metricSub}>42% of 10G pipe</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>90-Day Network Uptime</span>
          <span className={styles.metricValue}>99.99%</span>
          <span className={styles.metricSub}>Zero unplanned outages</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Firewall Threat Level</span>
          <span className={styles.metricValue}>Nominal</span>
          <span className={styles.metricSub}>DDoS shields operational</span>
        </div>
      </div>

      <div className={styles.itGrid}>
        {infraNodes.map((node) => (
          <div key={node.id} className={`${styles.nodeCard} glass`}>
            <div className={styles.nodeHeader}>
              <h3 className={styles.nodeName}>{node.name}</h3>
              <span className={styles.badgeOnline}>{node.status}</span>
            </div>
            <div className={styles.nodeIp}>{node.ip}</div>

            <div className={styles.nodeMeta}>
              <div><strong style={{ color: '#fff' }}>Load / Traffic:</strong> {node.load}</div>
              <div><strong style={{ color: '#fff' }}>Ping Latency:</strong> {node.latency}</div>
              <div><strong style={{ color: '#fff' }}>System Uptime:</strong> {node.uptime}</div>
            </div>

            <div className={styles.nodeActions}>
              <button className={styles.actionBtn}>Metrics Graphs</button>
              <button className={styles.actionBtn}>SSH Console</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
