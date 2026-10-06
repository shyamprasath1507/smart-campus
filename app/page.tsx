import React from 'react';
import Link from 'next/link';
import styles from './Landing.module.css';

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundGlow}></div>
      
      <header className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>U</div>
          <h1>SmartCampus</h1>
        </div>
      </header>

      <main className={styles.main}>
        <h2 className={styles.title}>Select Your Portal</h2>
        <p className={styles.subtitle}>Enter the unified digital ecosystem tailored for your role.</p>

        <div className={styles.portalsGrid}>
          
          <Link href="/login/student" className={`${styles.portalCard} glass`}>
            <div className={`${styles.portalIcon} ${styles.studentIcon}`}>🎓</div>
            <h3>Student Portal</h3>
            <p>Access your timetable, digital wallet, assignments, and campus life hub.</p>
          </Link>

          <Link href="/login/teacher" className={`${styles.portalCard} glass`}>
            <div className={`${styles.portalIcon} ${styles.teacherIcon}`}>👨‍🏫</div>
            <h3>Teacher Portal</h3>
            <p>Manage courses, mark attendance via QR, and analyze class performance.</p>
          </Link>

          <Link href="/login/admin" className={`${styles.portalCard} glass`}>
            <div className={`${styles.portalIcon} ${styles.adminIcon}`}>🏢</div>
            <h3>Administration</h3>
            <p>Oversee campus operations, financial metrics, and emergency broadcasting.</p>
          </Link>

        </div>
      </main>
    </div>
  );
}
