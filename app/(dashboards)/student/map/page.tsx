'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Map.module.css';

interface Zone {
  id: string;
  name: string;
  icon: string;
  occupancy: string;
  hours: string;
  floors: number;
  amenities: string;
}

const campusZones: Zone[] = [
  { id: '1', name: 'Main Science Library', icon: '📚', occupancy: '74% Occupied', hours: '24/7 Access with ID', floors: 5, amenities: 'Silent pods, 3D printers, Cafe' },
  { id: '2', name: 'Engineering & Tech Hub', icon: '💻', occupancy: '52% Occupied', hours: '07:00 AM - 11:00 PM', floors: 4, amenities: 'AI Clusters, Robotics Lab, VR Room' },
  { id: '3', name: 'Central Dining Commons', icon: '🍔', occupancy: '88% Occupied', hours: '08:00 AM - 09:30 PM', floors: 2, amenities: '12 food stalls, Grab & Go, Vegan bar' },
  { id: '4', name: 'Student Union & Clubs', icon: '🎭', occupancy: '40% Occupied', hours: '08:00 AM - 10:00 PM', floors: 3, amenities: 'Auditorium, Lounge, Game center' },
  { id: '5', name: 'Athletic Sports Complex', icon: '🏋️', occupancy: '35% Occupied', hours: '06:00 AM - 10:00 PM', floors: 2, amenities: 'Olympic pool, Gym, Squash courts' },
  { id: '6', name: 'Campus Shuttle Terminal', icon: '🚌', occupancy: '15% Busy', hours: 'Routes active until midnight', floors: 1, amenities: 'Real-time schedule screens, Chargers' },
];

export default function CampusMapPage() {
  const [activeZone, setActiveZone] = useState<Zone>(campusZones[0]);

  return (
    <div className={styles.container}>
      <Link href="/student" className={styles.backLink}>
        ← Back to Student Hub
      </Link>

      <div className={styles.headerRow}>
        <div className={styles.titleArea}>
          <h1>🗺️ Campus Interactive Map & Navigation</h1>
          <p className={styles.subtitle}>IoT building occupancy, walking turn-by-turn routes, and venue directory</p>
        </div>
      </div>

      <div className={styles.mapLayout}>
        <div className={`${styles.mapCard} glass`}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontWeight: 700, fontSize: '15px' }}>Interactive Campus Zones</span>
            <span style={{ fontSize: '12px', color: 'var(--accent-secondary)' }}>● GPS Signal Acquired</span>
          </div>

          <div className={styles.mapCanvas}>
            {campusZones.map((zone) => (
              <div
                key={zone.id}
                onClick={() => setActiveZone(zone)}
                className={`${styles.zoneItem} ${activeZone.id === zone.id ? styles.zoneItemActive : ''}`}
              >
                <span className={styles.zoneIcon}>{zone.icon}</span>
                <span className={styles.zoneName}>{zone.name}</span>
                <span className={styles.zoneStatus}>{zone.occupancy}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles.infoCard} glass`}>
          <div className={styles.infoTitle}>{activeZone.icon} {activeZone.name}</div>
          
          <div className={styles.infoRow}>
            <span style={{ color: 'var(--text-secondary)' }}>Live Density</span>
            <span style={{ color: 'var(--accent-secondary)', fontWeight: 700 }}>{activeZone.occupancy}</span>
          </div>

          <div className={styles.infoRow}>
            <span style={{ color: 'var(--text-secondary)' }}>Access Hours</span>
            <span>{activeZone.hours}</span>
          </div>

          <div className={styles.infoRow}>
            <span style={{ color: 'var(--text-secondary)' }}>Total Floors</span>
            <span>{activeZone.floors} Floors</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <span style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>Facilities & Amenities:</span>
            <span style={{ fontSize: '14px', color: 'var(--text-primary)' }}>{activeZone.amenities}</span>
          </div>

          <button className={styles.navActionBtn}>Start Walking Navigation (3 min)</button>
        </div>
      </div>
    </div>
  );
}
