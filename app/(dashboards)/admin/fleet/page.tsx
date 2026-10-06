import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function ShuttleFleetPage() {
  const shuttles = [
    {
      id: 'SHT-01',
      name: 'Blue Express Shuttle',
      driver: 'Marcus Vance',
      route: 'North Dorms ⇄ Science Quad ⇄ Metro Station',
      nextStop: 'Central Library Plaza (2 mins away)',
      status: 'ON TIME',
      occupancy: 78,
      speed: '28 km/h',
      charge: '92% EV Battery',
    },
    {
      id: 'SHT-02',
      name: 'Green Perimeter Loop',
      driver: 'Sarah Lin',
      route: 'Athletics Stadium ⇄ Health Sciences ⇄ Dining Center',
      nextStop: 'Medical Center West (At Stop)',
      status: 'ON TIME',
      occupancy: 45,
      speed: '0 km/h (Boarding)',
      charge: '84% EV Battery',
    },
    {
      id: 'SHT-03',
      name: 'Red Campus Orbit',
      driver: 'Robert Hayes',
      route: 'Main Gate ⇄ Graduate Housing ⇄ Engineering Labs',
      nextStop: 'Robotics Complex (Traffic congestion)',
      status: 'DELAY (+4m)',
      occupancy: 94,
      speed: '14 km/h',
      charge: '68% EV Battery',
    },
    {
      id: 'SHT-04',
      name: 'Night Owl Escort Bus',
      driver: 'Deandre Cole',
      route: 'Residence Halls ⇄ 24hr Study Hub ⇄ North Parking',
      nextStop: 'In Depot (Pre-shift inspection)',
      status: 'STANDBY',
      occupancy: 0,
      speed: '0 km/h',
      charge: '100% EV Full',
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
            <span className={styles.icon}>🚌</span>
            <h1 className={styles.title}>Campus Shuttle Fleet Telematics</h1>
          </div>
          <p className={styles.subtitle}>
            Live GPS vehicle coordinates, passenger capacity meters, driver schedules, and route dispatching.
          </p>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.primaryBtn}>+ Reassign Route</button>
        </div>
      </div>

      <div className={styles.metricsGrid}>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Active Fleet</span>
          <span className={styles.metricValue}>4 Shuttles</span>
          <span className={styles.metricSub}>3 En-route, 1 Standby</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Daily Passenger Vol</span>
          <span className={styles.metricValue}>3,840</span>
          <span className={styles.metricSub}>Peak hours: 08:30 & 17:00</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Fleet On-Time Rate</span>
          <span className={styles.metricValue}>97.4%</span>
          <span className={styles.metricSub}>Average delay: 1.2 mins</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Average Battery Level</span>
          <span className={styles.metricValue}>86%</span>
          <span className={styles.metricSub}>Zero carbon transit</span>
        </div>
      </div>

      <div className={styles.fleetGrid}>
        {shuttles.map((s) => (
          <div key={s.id} className={`${styles.shuttleCard} glass`}>
            <div className={styles.shuttleHeader}>
              <h3 className={styles.shuttleName}>{s.name}</h3>
              <span className={s.status.includes('DELAY') ? styles.statusDelay : styles.statusActive}>
                {s.status}
              </span>
            </div>
            <div className={styles.routePath}>{s.route}</div>

            <div className={styles.detailRow}>
              <span>Driver</span>
              <span className={styles.detailValue}>{s.driver}</span>
            </div>
            <div className={styles.detailRow}>
              <span>Next Stop</span>
              <span className={styles.detailValue}>{s.nextStop}</span>
            </div>
            <div className={styles.detailRow}>
              <span>Vehicle State</span>
              <span className={styles.detailValue}>{s.speed} • {s.charge}</span>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 6 }}>
                <span style={{ color: 'var(--text-secondary)' }}>Passenger Occupancy</span>
                <span style={{ color: '#fff', fontWeight: 600 }}>{s.occupancy}%</span>
              </div>
              <div className={styles.occupancyTrack}>
                <div
                  className={styles.occupancyFill}
                  style={{
                    width: `${s.occupancy}%`,
                    background: s.occupancy > 90 ? '#FF4757' : '#00FF85',
                  }}
                />
              </div>
            </div>

            <div className={styles.cardActions}>
              <button className={styles.cardBtn}>Live GPS Map</button>
              <button className={styles.cardBtn}>Radio Driver</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
