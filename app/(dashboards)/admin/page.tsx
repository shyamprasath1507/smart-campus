import React from 'react';
import styles from './AdminDashboard.module.css';
import Link from 'next/link';

export default function AdminDashboard() {
  
  const adminFeatures = [
    { title: "User CRM", icon: "👥", link: "/admin/crm" },
    { title: "Role Management", icon: "🔐", link: "/admin/roles" },
    { title: "Emergency Broadcast", icon: "🚨", link: "/admin/broadcast" },
    { title: "Financial Dashboard", icon: "💰", link: "/admin/finance" },
    { title: "Payroll System", icon: "💳", link: "/admin/payroll" },
    { title: "Energy Metrics", icon: "⚡", link: "/admin/energy" },
    { title: "Shuttle Fleet", icon: "🚌", link: "/admin/fleet" },
    { title: "Library Fines", icon: "📚", link: "/admin/fines" },
    { title: "System Logs", icon: "🖥️", link: "/admin/logs" },
    { title: "Cafeteria Vendors", icon: "🍔", link: "/admin/cafeteria" },
    { title: "Academic Calendar", icon: "📅", link: "/admin/calendar" },
    { title: "Facility Maintenance", icon: "🔧", link: "/admin/maintenance" },
    { title: "ID Card Provision", icon: "🪪", link: "/admin/id-cards" },
    { title: "Door Access Control", icon: "🚪", link: "/admin/doors" },
    { title: "Alumni Network", icon: "🎓", link: "/admin/alumni" },
    { title: "Event Approvals", icon: "🎉", link: "/admin/events" },
    { title: "IT Infrastructure", icon: "🌐", link: "/admin/it" },
    { title: "Course Catalog", icon: "📖", link: "/admin/courses" },
    { title: "Disciplinary Records", icon: "⚖️", link: "/admin/disciplinary" },
    { title: "Analytics Engine", icon: "📊", link: "/admin/analytics" },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Command Center</h1>
      <p className={styles.subtitle}>Campus-wide operations, financial oversight, and system configurations.</p>
      
      <div className={styles.metricsGrid}>
        <div className={`${styles.metricCard} glass`}>
          <h4>Active Users</h4>
          <span className={styles.value}>4,210</span>
          <span className={styles.trend}>+12 this week</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <h4>Server Health</h4>
          <span className={styles.value}>99.9%</span>
          <span className={styles.trendNeutral}>All systems nominal</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <h4>Campus Energy</h4>
          <span className={styles.value}>320 kW</span>
          <span className={styles.trendNegative}>-5% vs yesterday</span>
        </div>
      </div>
      
      <h2 className={styles.sectionTitle}>Admin Control Modules</h2>
      <div className={styles.featuresGrid}>
        {adminFeatures.map((feature, idx) => (
          <Link href={feature.link} key={idx} className={`${styles.featureTile} glass`}>
            <span className={styles.featureIcon}>{feature.icon}</span>
            <span className={styles.featureName}>{feature.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
