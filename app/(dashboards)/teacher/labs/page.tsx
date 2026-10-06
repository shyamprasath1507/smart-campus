'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function TeacherLabsPage() {
  const [labs, setLabs] = useState([
    {
      id: 'LAB-401',
      name: 'High-Performance AI & GPU Cluster Facility',
      location: 'Science Complex, 4th Floor',
      capacity: '40 Workstations (NVIDIA A100 / H100)',
      status: 'AVAILABLE',
      reservedByMe: false,
    },
    {
      id: 'LAB-204',
      name: 'VLSI & Embedded Systems Hardware Lab',
      location: 'Engineering Hall, Room 204',
      capacity: '30 Oscilloscopes, FPGA kits & Soldering bays',
      status: 'RESERVED',
      reservedByMe: true,
    },
    {
      id: 'LAB-102',
      name: 'Robotics Prototyping & Motion Capture Arena',
      location: 'Maker Pavilion, Ground Floor',
      capacity: '20 Quadrotors, Manipulator Arms, Vicon Cameras',
      status: 'AVAILABLE',
      reservedByMe: false,
    },
  ]);

  const toggleReservation = (id: string) => {
    setLabs((prev) =>
      prev.map((lab) => {
        if (lab.id !== id) return lab;
        const newReserved = !lab.reservedByMe;
        return {
          ...lab,
          reservedByMe: newReserved,
          status: newReserved ? 'RESERVED' : 'AVAILABLE',
        };
      })
    );
  };

  return (
    <div className={styles.container}>
      <Link href="/teacher" className={styles.backLink}>
        ← Back to Faculty Dashboard
      </Link>

      <div className={styles.header}>
        <div className={styles.titleArea}>
          <h1><span>🔬</span> Laboratory & Computing Facility Booking</h1>
          <p className={styles.subtitle}>
            Reserve research cluster nodes, experimental robotics arenas, and instructional hardware benches.
          </p>
        </div>
      </div>

      <div className={styles.labsGrid}>
        {labs.map((lab) => (
          <div key={lab.id} className={`${styles.labCard} glass`}>
            <div className={styles.labTop}>
              <div>
                <span
                  style={{
                    fontFamily: 'monospace',
                    fontSize: '12px',
                    color: 'var(--accent-primary)',
                    fontWeight: 700,
                  }}
                >
                  {lab.id}
                </span>
                <h3 style={{ fontSize: '18px', color: 'var(--text-primary)', marginTop: '4px' }}>
                  {lab.name}
                </h3>
              </div>
              <span
                style={{
                  background:
                    lab.status === 'AVAILABLE'
                      ? 'rgba(0, 255, 133, 0.15)'
                      : 'rgba(255, 193, 7, 0.15)',
                  color: lab.status === 'AVAILABLE' ? 'var(--accent-secondary)' : '#ffc107',
                  padding: '4px 10px',
                  borderRadius: '12px',
                  fontSize: '12px',
                  fontWeight: 700,
                }}
              >
                {lab.status}
              </span>
            </div>

            <div className={styles.specsList}>
              <div>📍 <strong>Location:</strong> {lab.location}</div>
              <div>⚡ <strong>Equipment:</strong> {lab.capacity}</div>
              {lab.reservedByMe && (
                <div style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>
                  ✓ Reserved under your faculty profile for this week
                </div>
              )}
            </div>

            <button
              onClick={() => toggleReservation(lab.id)}
              className={styles.reserveBtn}
              style={{
                background: lab.reservedByMe
                  ? 'rgba(255, 71, 87, 0.15)'
                  : undefined,
                color: lab.reservedByMe ? '#ff4757' : undefined,
                border: lab.reservedByMe ? '1px solid rgba(255, 71, 87, 0.4)' : undefined,
              }}
            >
              {lab.reservedByMe ? 'Cancel Reservation' : 'Reserve Facility Slot'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
