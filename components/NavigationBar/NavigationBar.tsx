'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/useAuthStore';
import styles from './NavigationBar.module.css';

export default function NavigationBar({ role }: { role: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const logout = useAuthStore(state => state.logout);

  const handleLogout = async () => {
    logout();
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/');
  };

  const getLinks = () => {
    switch (role) {
      case 'STUDENT':
        return [
          { href: '/student', label: 'Hub', icon: '📚' },
          { href: '/student/schedule', label: 'Schedule', icon: '📅' },
          { href: '/student/wallet', label: 'Wallet', icon: '💳' },
        ];
      case 'TEACHER':
        return [
          { href: '/teacher', label: 'Courses', icon: '📖' },
          { href: '/teacher/attendance', label: 'Attendance', icon: '✅' },
          { href: '/teacher/grading', label: 'Grading', icon: '📝' },
        ];
      case 'ADMIN':
        return [
          { href: '/admin', label: 'Operations', icon: '🏢' },
          { href: '/admin/users', label: 'Users', icon: '👥' },
        ];
      default:
        return [];
    }
  };

  const links = getLinks();

  return (
    <nav className={styles.navContainer}>
      <div className={styles.logoArea}>
        <div className={styles.logoIcon}>U</div>
        <span className={styles.logoText}>SmartCampus</span>
      </div>
      
      <div className={styles.navLinks}>
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`${styles.navItem} ${isActive ? styles.navItemActive : ''}`}
            >
              <span className={styles.navIcon}>{link.icon}</span>
              <span className={styles.navLabel}>{link.label}</span>
            </Link>
          );
        })}
      </div>
      
      <button onClick={handleLogout} className={styles.logoutButton}>
        Log Out
      </button>
    </nav>
  );
}
