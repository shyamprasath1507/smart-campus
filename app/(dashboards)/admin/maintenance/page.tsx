import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function FacilityMaintenancePage() {
  const workOrders = [
    { id: 'WO-8820', facility: 'Science Hall B - Room 304', category: 'HVAC Airflow Balancing', priority: 'URGENT', technician: 'Tech Team Alpha (Dan K.)', sla: '2 hrs left', status: 'IN PROGRESS' },
    { id: 'WO-8819', facility: 'Central Library West Wing', category: 'Smart Light Dimmer Ballast', priority: 'MEDIUM', technician: 'Electrical Crew 2', sla: '8 hrs left', status: 'DISPATCHED' },
    { id: 'WO-8818', facility: 'Undergraduate Dorm Tower 4', category: 'Elevator #2 Periodic Safety Cable Check', priority: 'HIGH', technician: 'Otis Certified Contractor', sla: '4 hrs left', status: 'IN PROGRESS' },
    { id: 'WO-8817', facility: 'Engineering Lab Robotics Bay', category: 'Emergency Eye-Wash Station Inspection', priority: 'MEDIUM', technician: 'Safety Officer Lopez', sla: '12 hrs left', status: 'PENDING' },
    { id: 'WO-8816', facility: 'Auditorium Main Stage', category: '4K Laser Projector Optical Cleaning', priority: 'LOW', technician: 'AV Services (Maya S.)', sla: '24 hrs left', status: 'SCHEDULED' },
  ];

  return (
    <div className={styles.container}>
      <Link href="/admin" className={styles.backLink}>
        ← Back to Command Center
      </Link>

      <div className={styles.header}>
        <div className={styles.titleArea}>
          <div className={styles.titleRow}>
            <span className={styles.icon}>🔧</span>
            <h1 className={styles.title}>Facility Maintenance & Work Orders</h1>
          </div>
          <p className={styles.subtitle}>
            Campus physical infrastructure upkeep, automated work order dispatch, HVAC telemetry, and technician SLAs.
          </p>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.primaryBtn}>+ Dispatch Work Order</button>
        </div>
      </div>

      <div className={styles.metricsGrid}>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Open Work Orders</span>
          <span className={styles.metricValue}>18 Active</span>
          <span className={styles.metricSub}>Across 26 campus facilities</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Urgent Priority</span>
          <span className={styles.metricValue}>2 Orders</span>
          <span className={styles.metricSub}>Technicians on-site</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Mean Resolution Time</span>
          <span className={styles.metricValue}>3.4 Hours</span>
          <span className={styles.metricSub}>98.2% within SLA targets</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Scheduled Preventative</span>
          <span className={styles.metricValue}>12 Tasks</span>
          <span className={styles.metricSub}>Next batch: Tomorrow 06:00</span>
        </div>
      </div>

      <div className={`${styles.glassPanel} glass`}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: 18, fontWeight: 700 }}>Active Campus Work Orders</h2>
          <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>Live Dispatch Queue</span>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}>Ticket</th>
                <th className={styles.th}>Location</th>
                <th className={styles.th}>Equipment / Issue</th>
                <th className={styles.th}>Priority</th>
                <th className={styles.th}>Assigned Crew</th>
                <th className={styles.th}>SLA Status</th>
                <th className={styles.th}>Action</th>
              </tr>
            </thead>
            <tbody>
              {workOrders.map((wo) => (
                <tr key={wo.id} className={styles.tr}>
                  <td className={styles.td} style={{ fontWeight: 700, color: 'var(--accent-primary)' }}>{wo.id}</td>
                  <td className={styles.td} style={{ fontWeight: 600 }}>{wo.facility}</td>
                  <td className={styles.td}>{wo.category}</td>
                  <td className={styles.td}>
                    <span className={
                      wo.priority === 'URGENT'
                        ? styles.badgeUrgent
                        : wo.priority === 'HIGH'
                        ? styles.badgeHigh
                        : styles.badgeMedium
                    }>
                      {wo.priority}
                    </span>
                  </td>
                  <td className={styles.td}>{wo.technician}</td>
                  <td className={styles.td} style={{ fontSize: 12, color: wo.sla.includes('2 hrs') ? '#FF4757' : '#00FF85' }}>
                    {wo.sla}
                  </td>
                  <td className={styles.td}>
                    <button className={styles.actionBtn}>Resolve</button>
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
