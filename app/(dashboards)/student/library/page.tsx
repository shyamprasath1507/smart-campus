'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Library.module.css';

interface Book {
  id: string;
  title: string;
  author: string;
  isbn: string;
  shelf: string;
  available: boolean;
}

const mockCatalog: Book[] = [
  { id: '1', title: 'Introduction to Algorithms (4th Ed)', author: 'Thomas H. Cormen, Charles E. Leiserson', isbn: '978-0262046305', shelf: 'Floor 2, Shelf CS-104', available: true },
  { id: '2', title: 'Artificial Intelligence: A Modern Approach', author: 'Stuart Russell, Peter Norvig', isbn: '978-0134610993', shelf: 'Floor 2, Shelf AI-201', available: true },
  { id: '3', title: 'Quantum Computation & Quantum Information', author: 'Michael A. Nielsen, Isaac L. Chuang', isbn: '978-1107002173', shelf: 'Floor 3, Shelf PHYS-88', available: false },
  { id: '4', title: 'Designing Data-Intensive Applications', author: 'Martin Kleppmann', isbn: '978-1449373320', shelf: 'Floor 2, Shelf CS-309', available: true },
  { id: '5', title: 'Deep Learning', author: 'Ian Goodfellow, Yoshua Bengio, Aaron Courville', isbn: '978-0262035613', shelf: 'Floor 2, Shelf AI-110', available: true },
  { id: '6', title: 'Clean Architecture: A Craftsman’s Guide', author: 'Robert C. Martin', isbn: '978-0134494166', shelf: 'Floor 2, Shelf SE-04', available: false },
];

export default function LibraryReservationsPage() {
  const [search, setSearch] = useState('');
  const [reservedIds, setReservedIds] = useState<string[]>([]);

  const filtered = mockCatalog.filter(
    (b) =>
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase()) ||
      b.isbn.includes(search)
  );

  const handleReserve = (id: string) => {
    setReservedIds([...reservedIds, id]);
  };

  return (
    <div className={styles.container}>
      <Link href="/student" className={styles.backLink}>
        ← Back to Student Hub
      </Link>

      <div className={styles.headerRow}>
        <div className={styles.titleArea}>
          <h1>📚 Smart Library Reservations</h1>
          <p className={styles.subtitle}>Digital catalog, book lockers, checkout renewals, and RFID tracking</p>
        </div>
      </div>

      <div className="glass" style={{ borderRadius: 'var(--border-radius)', padding: '20px', borderLeft: '4px solid var(--accent-secondary)' }}>
        <div style={{ fontWeight: 700, fontSize: '15px', color: 'var(--text-primary)' }}>
          Currently Borrowed: Clean Code (Robert C. Martin)
        </div>
        <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '4px' }}>
          Due in 3 Days (Oct 9, 2026) • Returned at Smart Kiosk 2 or Drop-Box A
        </div>
      </div>

      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search by title, author, keyword, or ISBN..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      <h2 className={styles.sectionTitle}>Library Catalog ({filtered.length})</h2>
      <div className={styles.booksGrid}>
        {filtered.map((book) => {
          const isReserved = reservedIds.includes(book.id);
          return (
            <div key={book.id} className={`${styles.bookCard} glass`}>
              <div className={styles.bookInfo}>
                <span className={styles.bookTitle}>{book.title}</span>
                <span className={styles.bookAuthor}>{book.author}</span>
                <span className={styles.bookIsbn}>ISBN: {book.isbn}</span>
                <span style={{ fontSize: '12px', color: 'var(--accent-primary)', marginTop: '4px' }}>
                  📍 {book.shelf}
                </span>
              </div>

              <div>
                {isReserved ? (
                  <button disabled className={styles.reserveBtn} style={{ background: 'rgba(0, 255, 133, 0.2)', color: 'var(--accent-secondary)', borderColor: 'var(--accent-secondary)' }}>
                    ✓ Reserved for Pickup
                  </button>
                ) : book.available ? (
                  <button onClick={() => handleReserve(book.id)} className={styles.reserveBtn}>
                    Reserve for Pickup (24h Hold)
                  </button>
                ) : (
                  <button disabled className={styles.reserveBtn} style={{ opacity: 0.5, cursor: 'not-allowed' }}>
                    Currently Checked Out
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
