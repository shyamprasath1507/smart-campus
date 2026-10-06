import React from 'react';
import NavigationBar from '@/components/NavigationBar/NavigationBar';
import TopHeader from '@/components/TopHeader/TopHeader';
import styles from './DashboardLayout.module.css';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  // Mock user role for layout scaffolding (would come from Zustand/JWT)
  const userRole = 'STUDENT'; 

  return (
    <div className={styles.dashboardContainer}>
      <NavigationBar role={userRole} />
      
      <div className={styles.mainContent}>
        <TopHeader />
        
        <main className={styles.pageContent}>
          {children}
        </main>
      </div>
    </div>
  );
}
