import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function UserCRMPage() {
  const users = [
    { id: 'usr-1', name: 'Dr. Evelyn Vance', email: 'evelyn.vance@campus.edu', role: 'TEACHER', department: 'Computer Science', rfid: 'RFID-9842A', status: 'ACTIVE', initials: 'EV' },
    { id: 'usr-2', name: 'Marcus Chen', email: 'marcus.c@student.campus.edu', role: 'STUDENT', department: 'Electrical Eng.', rfid: 'RFID-1209B', status: 'ACTIVE', initials: 'MC' },
    { id: 'usr-3', name: 'Dean Sarah Connor', email: 's.connor@campus.edu', role: 'ADMIN', department: 'Academic Affairs', rfid: 'RFID-0021A', status: 'ACTIVE', initials: 'SC' },
    { id: 'usr-4', name: 'Liam Gallagher', email: 'liam.g@student.campus.edu', role: 'STUDENT', department: 'Mechanical Eng.', rfid: 'RFID-4412F', status: 'SUSPENDED', initials: 'LG' },
    { id: 'usr-5', name: 'Prof. Ananya Rao', email: 'a.rao@campus.edu', role: 'TEACHER', department: 'Data Science', rfid: 'RFID-6623C', status: 'ACTIVE', initials: 'AR' },
    { id: 'usr-6', name: 'Elena Rostova', email: 'e.rostova@campus.edu', role: 'ADMIN', department: 'Security & Access', rfid: 'RFID-0055D', status: 'ACTIVE', initials: 'ER' },
  ];

  return (
    <div className={styles.container}>
      <Link href="/admin" className={styles.backLink}>
        ← Back to Command Center
      </Link>

      <div className={styles.header}>
        <div className={styles.titleArea}>
          <div className={styles.titleRow}>
            <span className={styles.icon}>👥</span>
            <h1 className={styles.title}>User CRM & Identity Directory</h1>
          </div>
          <p className={styles.subtitle}>
            Comprehensive identity management, profile provisioning, and access credentials.
          </p>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.secondaryBtn}>Export Directory</button>
          <button className={styles.primaryBtn}>+ Provision New User</button>
        </div>
      </div>

      <div className={styles.metricsGrid}>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Total Registered Users</span>
          <span className={styles.metricValue}>4,210</span>
          <span className={styles.metricSub}>+38 enrolled this term</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Active Students</span>
          <span className={styles.metricValue}>3,450</span>
          <span className={styles.metricSub}>81.9% of user base</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Faculty Members</span>
          <span className={styles.metricValue}>480</span>
          <span className={styles.metricSub}>14 academic departments</span>
        </div>
        <div className={`${styles.metricCard} glass`}>
          <span className={styles.metricLabel}>Administrative Personnel</span>
          <span className={styles.metricValue}>280</span>
          <span className={styles.metricSub}>All security clearances active</span>
        </div>
      </div>

      <div className={`${styles.glassPanel} glass`}>
        <div className={styles.filterBar}>
          <input
            type="text"
            placeholder="Search by name, email, or RFID tag..."
            className={styles.searchInput}
            readOnly
            defaultValue=""
          />
          <select className={styles.filterSelect} defaultValue="ALL">
            <option value="ALL">All Roles</option>
            <option value="STUDENT">Students</option>
            <option value="TEACHER">Faculty</option>
            <option value="ADMIN">Admins</option>
          </select>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}>User Details</th>
                <th className={styles.th}>Role</th>
                <th className={styles.th}>Department</th>
                <th className={styles.th}>RFID Identifier</th>
                <th className={styles.th}>Status</th>
                <th className={styles.th}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id} className={styles.tr}>
                  <td className={styles.td}>
                    <div className={styles.userInfo}>
                      <div className={styles.avatar}>{u.initials}</div>
                      <div>
                        <div className={styles.userName}>{u.name}</div>
                        <div className={styles.userEmail}>{u.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className={styles.td}>
                    <span
                      className={`${styles.badge} ${
                        u.role === 'STUDENT'
                          ? styles.badgeStudent
                          : u.role === 'TEACHER'
                          ? styles.badgeTeacher
                          : styles.badgeAdmin
                      }`}
                    >
                      {u.role}
                    </span>
                  </td>
                  <td className={styles.td}>{u.department}</td>
                  <td className={styles.td}>
                    <span className={styles.rfidCode}>{u.rfid}</span>
                  </td>
                  <td className={styles.td}>
                    <span
                      className={`${styles.badge} ${
                        u.status === 'ACTIVE' ? styles.badgeActive : styles.badgeSuspended
                      }`}
                    >
                      {u.status}
                    </span>
                  </td>
                  <td className={styles.td}>
                    <div className={styles.actionBtnGroup}>
                      <button className={styles.tableActionBtn}>Edit</button>
                      <button className={styles.tableActionBtn}>Permissions</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
