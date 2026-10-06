import React from 'react';
import styles from './TopHeader.module.css';

export default function TopHeader() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.searchBar}>
        <span className={styles.searchIcon}>🔍</span>
        <input type="text" placeholder="Search courses, people, or events..." className={styles.searchInput} />
      </div>
      
      <div className={styles.actions}>
        <button className={styles.iconButton}>
          🔔
          <span className={styles.badge}>3</span>
        </button>
        <div className={styles.avatar}>
          JD
        </div>
      </div>
    </header>
  );
}
