import React from 'react';
import styles from './TeacherDashboard.module.css';
import Link from 'next/link';

export default function TeacherDashboard() {
  
  const teacherFeatures = [
    { title: "My Courses", icon: "📚", link: "/teacher/courses" },
    { title: "QR Attendance Scanner", icon: "📷", link: "/teacher/attendance" },
    { title: "Assignment Creator", icon: "📝", link: "/teacher/assignments" },
    { title: "Grading & Plagiarism", icon: "✅", link: "/teacher/grading" },
    { title: "Class Analytics", icon: "📈", link: "/teacher/analytics" },
    { title: "Broadcast Alerts", icon: "📢", link: "/teacher/broadcast" },
    { title: "Office Hours", icon: "🕒", link: "/teacher/office-hours" },
    { title: "Leave Application", icon: "🏖️", link: "/teacher/leave" },
    { title: "Salary & Payslips", icon: "💵", link: "/teacher/salary" },
    { title: "Syllabus Manager", icon: "📋", link: "/teacher/syllabus" },
    { title: "Discussion Forums", icon: "💬", link: "/teacher/forums" },
    { title: "Student Interventions", icon: "⚠️", link: "/teacher/interventions" },
    { title: "Exam Scheduler", icon: "📅", link: "/teacher/exams" },
    { title: "Quiz Generator", icon: "❓", link: "/teacher/quiz" },
    { title: "Department Notes", icon: "📓", link: "/teacher/notes" },
    { title: "Grant Tracker", icon: "🔬", link: "/teacher/grants" },
    { title: "IT Helpdesk", icon: "💻", link: "/teacher/helpdesk" },
    { title: "Digital ID", icon: "🪪", link: "/teacher/id" },
    { title: "Lab Booking", icon: "🔬", link: "/teacher/labs" },
    { title: "Settings", icon: "⚙️", link: "/teacher/settings" },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Academic Engine</h1>
      <p className={styles.subtitle}>Manage your courses, grading, and attendance from here.</p>
      
      <div className={styles.highlightGrid}>
        <div className={`${styles.card} glass`}>
          <h3>Active Courses</h3>
          <div className={styles.courseItem}>
            <span>CS101: Intro to CS</span>
            <span className={styles.badge}>45 Enrolled</span>
          </div>
          <div className={styles.courseItem}>
            <span>ENG201: Tech Writing</span>
            <span className={styles.badge}>28 Enrolled</span>
          </div>
        </div>
        
        <div className={`${styles.card} glass`}>
          <h3>Quick Actions</h3>
          <div className={styles.actionGrid}>
            <button className={styles.actionButton}>Scan QR Attendance</button>
            <button className={styles.actionButton}>Upload Grades</button>
            <button className={`${styles.actionButton} ${styles.danger}`}>Broadcast Alert</button>
          </div>
        </div>
      </div>

      <h2 className={styles.sectionTitle}>Faculty Tools</h2>
      <div className={styles.featuresGrid}>
        {teacherFeatures.map((feature, idx) => (
          <Link href={feature.link} key={idx} className={`${styles.featureTile} glass`}>
            <span className={styles.featureIcon}>{feature.icon}</span>
            <span className={styles.featureName}>{feature.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
