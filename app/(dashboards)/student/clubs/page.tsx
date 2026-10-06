'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Clubs.module.css';

interface Club {
  id: string;
  name: string;
  category: string;
  icon: string;
  description: string;
  membersCount: number;
  president: string;
}

const mockClubs: Club[] = [
  { id: '1', name: 'Robotics & Autonomous AI Club', category: 'Engineering & Tech', icon: '🤖', description: 'Building autonomous rovers, humanoid bipedal robotics, and participating in RoboCup international.', membersCount: 142, president: 'Marcus Sterling' },
  { id: '2', name: 'ACM Student Chapter', category: 'Computer Science', icon: '💻', description: 'Competitive programming bootcamps, ICPC qualifiers, open-source sprints, and industry tech talks.', membersCount: 210, president: 'Sophia Lin' },
  { id: '3', name: 'EcoCampus Sustainability Collective', category: 'Environment & Social', icon: '🌱', description: 'Zero-waste initiatives, rooftop hydroponics farming, and campus renewable energy advocacy.', membersCount: 88, president: 'David Kim' },
  { id: '4', name: 'Campus Esports & Game Dev Guild', category: 'Creative & Gaming', icon: '🎮', description: 'Unreal Engine 5 indie game jams, varsity Valorant & Rocket League tournaments, and gaming LANs.', membersCount: 320, president: 'Jordan Chase' },
  { id: '5', name: 'Debate Society & Model UN', category: 'Humanities & Law', icon: '⚖️', description: 'Parliamentary debate, geopolitical simulations, public speaking mastery, and inter-varsity cups.', membersCount: 75, president: 'Elena Rostova' },
];

export default function ClubHubPage() {
  const [joined, setJoined] = useState<string[]>(['1']);

  const toggleJoin = (id: string) => {
    if (joined.includes(id)) {
      setJoined(joined.filter((x) => x !== id));
    } else {
      setJoined([...joined, id]);
    }
  };

  return (
    <div className={styles.container}>
      <Link href="/student" className={styles.backLink}>
        ← Back to Student Hub
      </Link>

      <div className={styles.headerRow}>
        <div className={styles.titleArea}>
          <h1>🎭 Student Clubs & Organizations Hub</h1>
          <p className={styles.subtitle}>Discover student societies, participate in workshops, and lead campus initiatives</p>
        </div>
      </div>

      <div className={styles.clubsGrid}>
        {mockClubs.map((club) => {
          const isMember = joined.includes(club.id);
          return (
            <div key={club.id} className={`${styles.clubCard} glass`}>
              <div>
                <div className={styles.clubIcon}>{club.icon}</div>
                <h3 className={styles.clubName}>{club.name}</h3>
                <span style={{ fontSize: '12px', color: 'var(--accent-primary)', fontWeight: 600 }}>{club.category}</span>
                <p className={styles.clubDesc}>{club.description}</p>
              </div>

              <div className={styles.clubMeta}>
                <span>👥 {club.membersCount + (isMember ? 1 : 0)} Members</span>
                <span>Lead: {club.president}</span>
              </div>

              <button
                onClick={() => toggleJoin(club.id)}
                className={isMember ? styles.joinedBtn : styles.joinBtn}
              >
                {isMember ? '✓ Joined Member (Leave)' : '+ Join Organization'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
