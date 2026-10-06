'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Rooms.module.css';

interface Room {
  id: string;
  name: string;
  location: string;
  capacity: string;
  amenities: string[];
}

const mockRooms: Room[] = [
  { id: '1', name: 'Collaboration Pod Alpha', location: 'Tech Park, 3rd Floor', capacity: '4 Persons', amenities: ['65" 4K Smart Display', 'Magnetic Glass Board', 'USB-C Hub', 'Sound Isolation'] },
  { id: '2', name: 'Silent Focus Booth 12', location: 'Library, 4th Floor', capacity: '1 Person', amenities: ['Ergonomic Chair', 'Acoustic Wall Panels', 'Dual Monitors', 'High-Speed LAN'] },
  { id: '3', name: 'Innovation Team Suite', location: 'Engineering Block, Room 210', capacity: '8 Persons', amenities: ['Conference Cam', 'Dual 4K TV', 'Motorized Whiteboard', 'Polycom Mic'] },
  { id: '4', name: 'Multimedia Editing Lab', location: 'Arts & Media Wing', capacity: '2 Persons', amenities: ['Mac Studio M2 Ultra', 'Color-Calibrated Display', 'Studio Monitors'] },
];

export default function StudyRoomBookingPage() {
  const [selectedSlot, setSelectedSlot] = useState<Record<string, string>>({});
  const [bookedRooms, setBookedRooms] = useState<Record<string, { time: string; pin: string }>>({});

  const slots = ['09:00 AM - 11:00 AM', '11:30 AM - 01:30 PM', '02:00 PM - 04:00 PM', '04:30 PM - 06:30 PM', '07:00 PM - 09:00 PM'];

  const handleBook = (roomId: string) => {
    const slot = selectedSlot[roomId] || slots[0];
    const pin = Math.floor(1000 + Math.random() * 9000).toString();
    setBookedRooms({ ...bookedRooms, [roomId]: { time: slot, pin } });
  };

  return (
    <div className={styles.container}>
      <Link href="/student" className={styles.backLink}>
        ← Back to Student Hub
      </Link>

      <div className={styles.headerRow}>
        <div className={styles.titleArea}>
          <h1>🏫 Smart Study Room Booking</h1>
          <p className={styles.subtitle}>Reserve group study pods, silent booths, and multimedia suites with instant door access</p>
        </div>
      </div>

      <div className={styles.roomGrid}>
        {mockRooms.map((room) => {
          const booking = bookedRooms[room.id];
          const activeSlot = selectedSlot[room.id] || slots[0];

          return (
            <div key={room.id} className={`${styles.roomCard} glass`}>
              <div className={styles.roomHeader}>
                <div>
                  <h3 className={styles.roomName}>{room.name}</h3>
                  <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>📍 {room.location}</span>
                </div>
                <span className={styles.roomCapacity}>{room.capacity}</span>
              </div>

              <div className={styles.amenitiesList}>
                {room.amenities.map((a, i) => (
                  <span key={i} className={styles.amenityTag}>✓ {a}</span>
                ))}
              </div>

              {!booking ? (
                <>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Available Slots Today:</span>
                    <div className={styles.timeSlotsRow}>
                      {slots.map((s) => (
                        <button
                          key={s}
                          onClick={() => setSelectedSlot({ ...selectedSlot, [room.id]: s })}
                          className={`${styles.slotBtn} ${activeSlot === s ? styles.slotBtnActive : ''}`}
                        >
                          {s.split(' - ')[0]}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button onClick={() => handleBook(room.id)} className={styles.bookBtn}>
                    Book {activeSlot.split(' - ')[0]}
                  </button>
                </>
              ) : (
                <div style={{ background: 'rgba(0, 255, 133, 0.1)', border: '1px solid var(--accent-secondary)', padding: '12px', borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ color: 'var(--accent-secondary)', fontWeight: 700, fontSize: '14px' }}>
                    ✓ Confirmed for {booking.time}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--text-primary)', marginTop: '4px' }}>
                    Smart Lock Door PIN: <strong style={{ color: 'var(--accent-primary)', letterSpacing: '2px' }}>{booking.pin}</strong>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
