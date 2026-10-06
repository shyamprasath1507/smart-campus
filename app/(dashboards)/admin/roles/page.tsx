import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function RoleManagementPage() {
  const roles = [
    {
      name: 'Super Admin',
      members: 4,
      desc: 'Complete administrative dominion over all services, credentials, and financial systems.',
      permissions: ['Global System Override', 'Manage Security & Roles', 'Audit Logs Access', 'Emergency Broadcast Dispatch'],
    },
    {
      name: 'Academic Dean',
      members: 12,
      desc: 'Supervises academic faculty, course catalogs, grade moderation, and faculty leaves.',
      permissions: ['Curriculum Approval', 'Grade Override Rights', 'Faculty Leave Approvals', 'Academic Calendar Edits'],
    },
    {
      name: 'Faculty Member',
      members: 480,
      desc: 'Conducts courses, manages attendance rosters, grades submissions, and files leaves.',
      permissions: ['Manage Course Sessions', 'Grade Student Submissions', 'Take Classroom Attendance', 'Create Announcements'],
    },
    {
      name: 'Campus Registrar',
      members: 18,
      desc: 'Oversees student admissions, course enrollments, ID card provision, and disciplinary files.',
      permissions: ['Manage Enrollments', 'Issue Student IDs', 'Access Disciplinary Records', 'Generate Transcripts'],
    },
    {
      name: 'Campus Security & Facilities',
      members: 35,
      desc: 'Maintains door access policies, campus shuttle fleets, work orders, and emergency systems.',
      permissions: ['Door Access Override', 'Shuttle Fleet Dispatch', 'Manage Work Orders', 'Emergency SOS Receiver'],
    },
    {
      name: 'Student',
      members: 3450,
      desc: 'Standard campus account with access to coursework, wallet, library, and campus dining.',
      permissions: ['View Courses & Timetable', 'Submit Assignments', 'Digital Wallet Payments', 'Reserve Library Books'],
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
            <span className={styles.icon}>🔐</span>
            <h1 className={styles.title}>Role & Permission Management</h1>
          </div>
          <p className={styles.subtitle}>
            Define access boundaries, enforce zero-trust security policies, and manage RBAC scopes.
          </p>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.primaryBtn}>+ Create Custom Role</button>
        </div>
      </div>

      <div className={styles.metricsGrid}>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Configured Roles</span>
          <span className={styles.metricValue}>6 Roles</span>
          <span className={styles.metricSub}>Role-Based Access Control</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Granular Permissions</span>
          <span className={styles.metricValue}>32 Scopes</span>
          <span className={styles.metricSub}>Fully isolated</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>MFA Enforcement</span>
          <span className={styles.metricValue}>100%</span>
          <span className={styles.metricSub}>Required for all staff</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Policy Audits</span>
          <span className={styles.metricValue}>Passed</span>
          <span className={styles.metricSub}>Zero privilege escalation detected</span>
        </div>
      </div>

      <div className={styles.rolesGrid}>
        {roles.map((role, idx) => (
          <div key={idx} className={`${styles.roleCard} glass`}>
            <div className={styles.roleHeader}>
              <h3 className={styles.roleName}>{role.name}</h3>
              <span className={styles.badgeMembers}>{role.members} Users</span>
            </div>
            <p className={styles.roleDesc}>{role.desc}</p>
            <div className={styles.permissionList}>
              <span className={styles.permTitle}>Key Permissions</span>
              {role.permissions.map((perm, pIdx) => (
                <div key={pIdx} className={styles.permTag}>
                  <span>✓</span>
                  <span>{perm}</span>
                </div>
              ))}
            </div>
            <div className={styles.cardFooter}>
              <button className={styles.editBtn}>Edit Scopes</button>
              <button className={styles.editBtn}>View Users</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
