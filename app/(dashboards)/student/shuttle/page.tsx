'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Shuttle.module.css';

interface Shuttle {
  id: string;
  name: string;
  busNumber: string;
  driver: string;
  eta: string;
  capacityPct: number;
  currentStop: string;
  stops: string[];
}

const mockShuttles: Shuttle[] = [
  {
    id: '1',
    name: 'North Campus Express',
    busNumber: 'Bus #04',
    driver: 'Robert Henderson',
    eta: '3 mins away',
    capacityPct: 65,
    currentStop: 'Approaching Science Library Stop',
    stops: ['Central Transit Hub', 'Science Library (Current)', 'Tech Park', 'North Dorms'],
  },
  {
    id: '2',
    name: 'Metro Link & South Station',
    busNumber: 'Bus #11',
    driver: 'Aisha Patel',
    eta: '8 mins away',
    capacityPct: 40,
    currentStop: 'At University South Gate',
    stops: ['Student Union', 'University South Gate (Current)', 'Subway Central Station'],
  },
  {
    id: '3',
    name: 'Athletic Fields & West Residences',
    busNumber: 'Bus #07',
    driver: 'Carlos Ramirez',
    eta: '14 mins away',
    capacityPct: 20,
    currentStop: 'At Stadium West Parking',
    stops: ['Stadium West (Current)', 'Dorm Tower B', 'Dining Commons 2', 'Engineering Quad'],
  },
];

export default function ShuttleTrackerPage() {
  return (
    <div className={styles.container}>
      <Link href="/student" className={styles.backLink}>
        ← Back to Student Hub
      </Link>

      <div className={styles.headerRow}>
        <div className={styles.titleArea}>
          <h1>🚌 Campus Shuttle Real-time GPS Tracker</h1>
          <p className={styles.subtitle}>Live vehicle telemetry, estimated arrival times, and passenger density</p>
        </div>
      </div>

      <div className={styles.routesGrid}>
        {mockShuttles.map((shuttle) => (
          <div key={shuttle.id} className={`${styles.routeCard} glass`}>
            <div className={styles.routeTop}>
              <div>
                <h3 className={styles.routeName}>{shuttle.name}</h3>
                <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                  {shuttle.busNumber} • Driver: {shuttle.driver}
                </span>
              </div>
              <span className={styles.etaBadge}>{shuttle.eta}</span>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '6px' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Seating Occupancy</span>
                <span style={{ color: 'var(--accent-primary)', fontWeight: 700 }}>{shuttle.capacityPct}% Full</span>
              </div>
              <div className={styles.capacityBarBg}>
                <div className={styles.capacityFill} style={{ width: `${shuttle.capacityPct}%` }}></div>
              </div>
            </div>

            <div style={{ fontSize: '13px', color: 'var(--accent-secondary)', fontWeight: 600 }}>
              📍 {shuttle.currentStop}
            </div>

            <div className={styles.stopsTimeline}>
              {shuttle.stops.map((stop, i) => (
                <div key={i} className={`${styles.stopItem} ${stop.includes('(Current)') ? styles.stopActive : ''}`}>
                  {stop}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
