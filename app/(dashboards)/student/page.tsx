import React from 'react';
import styles from './StudentDashboard.module.css';
import Link from 'next/link';

export default function StudentDashboard() {
  
  const studentFeatures = [
    { title: "Smart Timetable", icon: "📅", link: "/student/schedule" },
    { title: "Course Announcements", icon: "📢", link: "/student/announcements" },
    { title: "Digital Wallet & Scanner", icon: "💳", link: "/student/wallet" },
    { title: "Tuition Fee Portal", icon: "💰", link: "/student/fees" },
    { title: "Assignments Portal", icon: "📝", link: "/student/assignments" },
    { title: "Exam Results Viewer", icon: "📊", link: "/student/results" },
    { title: "Campus Map & Nav", icon: "🗺️", link: "/student/map" },
    { title: "Library Reservations", icon: "📚", link: "/student/library" },
    { title: "Study Room Booking", icon: "🏫", link: "/student/rooms" },
    { title: "Cafeteria Pre-order", icon: "🍔", link: "/student/cafeteria" },
    { title: "Attendance Tracker", icon: "✅", link: "/student/attendance" },
    { title: "Club Hub", icon: "🎭", link: "/student/clubs" },
    { title: "Shuttle Tracker", icon: "🚌", link: "/student/shuttle" },
    { title: "Emergency SOS", icon: "🚨", link: "/student/sos" },
    { title: "Digital ID Card", icon: "🪪", link: "/student/id" },
    { title: "Office Hours Scheduler", icon: "👨‍🏫", link: "/student/office-hours" },
    { title: "Peer Tutoring Match", icon: "🤝", link: "/student/tutoring" },
    { title: "Campus Job Board", icon: "💼", link: "/student/jobs" },
    { title: "Helpdesk Request", icon: "🔧", link: "/student/helpdesk" },
    { title: "Campus Email Portal", icon: "✉️", link: "/student/email" },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Student Hub</h1>
      <p className={styles.subtitle}>Welcome back! All your campus tools in one place.</p>
      
      {/* Core Highlight Features */}
      <div className={styles.highlightGrid}>
        <Link href="/student/schedule" className={`${styles.card} glass`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <h3>Upcoming Classes</h3>
          <div className={styles.classItem}>
            <div className={styles.classTime}>10:00 AM</div>
            <div className={styles.classDetails}>
              <h4>Advanced Physics</h4>
              <p>Lecture Hall A • Prof. Smith</p>
            </div>
          </div>
          <div className={styles.classItem}>
            <div className={styles.classTime}>01:30 PM</div>
            <div className={styles.classDetails}>
              <h4>Computer Science 101</h4>
              <p>Lab 304 • Prof. Davis</p>
            </div>
          </div>
        </Link>

        <Link href="/student/wallet" className={`${styles.card} glass`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <h3>Digital Wallet Scanner</h3>
          <div className={styles.walletDisplay}>
            <h2 className={styles.balance}>$124.50</h2>
            <div className={styles.qrMock}>
              <div className={styles.qrScanLine}></div>
              [ QR / NFC Scanner Active ]
            </div>
          </div>
          <div className={styles.actionButtons}>
            <button className={styles.actionButton}>Add Funds</button>
            <button className={`${styles.actionButton} ${styles.secondary}`}>Scan to Pay</button>
          </div>
        </Link>
        
        <Link href="/student/fees" className={`${styles.card} glass`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <h3>Tuition & Fees</h3>
          <div className={styles.feeItem}>
            <span>Fall Semester 2026</span>
            <span className={styles.dueAlert}>Due in 5 days</span>
          </div>
          <div className={styles.feeAmount}>$4,500.00</div>
          <button className={styles.payButton}>Pay Now via Portal</button>
        </Link>
      </div>

      <h2 className={styles.sectionTitle}>All Features</h2>
      <div className={styles.featuresGrid}>
        {studentFeatures.map((feature, idx) => (
          <Link href={feature.link} key={idx} className={`${styles.featureTile} glass`}>
            <span className={styles.featureIcon}>{feature.icon}</span>
            <span className={styles.featureName}>{feature.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
