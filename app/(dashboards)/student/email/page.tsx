'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Email.module.css';

interface Email {
  id: string;
  sender: string;
  email: string;
  subject: string;
  date: string;
  preview: string;
  body: string;
  unread: boolean;
}

const mockEmails: Email[] = [
  {
    id: '1',
    sender: 'Office of the University Registrar',
    email: 'registrar@campus.edu',
    subject: 'Official Confirmation: Fall 2026 Academic Course Registration',
    date: '10:45 AM',
    preview: 'Your schedule has been confirmed for 16 credits across CS301, CS410, PHYS201, and MATH220...',
    body: 'Dear Student,\n\nYour course registration for Fall Semester 2026 has been officially verified and locked in the university student information system. Please inspect your Smart Timetable to review venue allocations and laboratory safety certifications.\n\nBest regards,\nOffice of Academic Records',
    unread: true,
  },
  {
    id: '2',
    sender: 'Dr. Evelyn Reed',
    email: 'evelyn.reed@cs.campus.edu',
    subject: 'CS301 Advanced Algorithms - Reading Material for Module 4',
    date: 'Yesterday',
    preview: 'Please find attached the notes on randomized min-cut algorithms and Ford-Fulkerson augmentation...',
    body: 'Hi Class,\n\nPlease read chapters 7 and 8 before Wednesday’s lecture. We will dive straight into max-flow min-cut duality proofs and implement network reductions in the lab.\n\nDr. Reed',
    unread: false,
  },
  {
    id: '3',
    sender: 'Campus Activities Board',
    email: 'cab@campus.edu',
    subject: 'Invitations: Fall Welcome Carnival & Club Fair this Weekend',
    date: 'Oct 3',
    preview: 'Food trucks, student band stages, robotics demos, and esports LAN qualifiers kick off on the Quad...',
    body: 'Join the campus community this Saturday from 1:00 PM to 7:00 PM on the Great Lawn for the annual student festival. Free carnival bites with your Digital Student ID pass!',
    unread: false,
  },
  {
    id: '4',
    sender: 'University Library Services',
    email: 'library@campus.edu',
    subject: 'Friendly Reminder: Book Due Date Approaching in 3 Days',
    date: 'Oct 2',
    preview: 'Clean Code: A Handbook of Agile Software Craftsmanship is scheduled for return on Oct 9...',
    body: 'Notice: Clean Code (Barcode #90182) borrowed by student STU-8942 is due on Oct 9, 2026. You may renew online via the Library Reservations portal or deposit into any smart drop-box.',
    unread: false,
  },
];

export default function CampusEmailPortalPage() {
  const [selectedEmail, setSelectedEmail] = useState<Email>(mockEmails[0]);
  const [folder, setFolder] = useState('inbox');

  return (
    <div className={styles.container}>
      <Link href="/student" className={styles.backLink}>
        ← Back to Student Hub
      </Link>

      <div className={styles.headerRow}>
        <div className={styles.titleArea}>
          <h1>✉️ Campus Webmail Portal</h1>
          <p className={styles.subtitle}>Official student university inbox (`student.alex@campus.edu`)</p>
        </div>
      </div>

      <div className={styles.emailLayout}>
        <div className={`${styles.sidebarCard} glass`}>
          <button className={styles.composeBtn}>✏️ Compose</button>

          <button
            onClick={() => setFolder('inbox')}
            className={`${styles.folderBtn} ${folder === 'inbox' ? styles.folderActive : ''}`}
          >
            <span>📥 Inbox</span>
            <span style={{ fontSize: '12px', background: 'var(--accent-primary)', color: '#000', padding: '1px 6px', borderRadius: '10px', fontWeight: 700 }}>
              4
            </span>
          </button>
          <button
            onClick={() => setFolder('starred')}
            className={`${styles.folderBtn} ${folder === 'starred' ? styles.folderActive : ''}`}
          >
            <span>⭐ Starred</span>
          </button>
          <button
            onClick={() => setFolder('sent')}
            className={`${styles.folderBtn} ${folder === 'sent' ? styles.folderActive : ''}`}
          >
            <span>📤 Sent</span>
          </button>
          <button
            onClick={() => setFolder('archive')}
            className={`${styles.folderBtn} ${folder === 'archive' ? styles.folderActive : ''}`}
          >
            <span>📁 Archive</span>
          </button>
          <button
            onClick={() => setFolder('trash')}
            className={`${styles.folderBtn} ${folder === 'trash' ? styles.folderActive : ''}`}
          >
            <span>🗑️ Trash</span>
          </button>

          <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)', fontSize: '11px', color: 'var(--text-muted)' }}>
            Storage: 2.4 GB / 15.0 GB used
          </div>
        </div>

        <div>
          <div className={`${styles.inboxPane} glass`}>
            {mockEmails.map((email) => (
              <div
                key={email.id}
                onClick={() => setSelectedEmail(email)}
                className={styles.mailItem}
                style={{
                  background: selectedEmail.id === email.id ? 'rgba(0, 229, 255, 0.08)' : 'transparent',
                }}
              >
                <div className={styles.mailSender}>
                  {email.unread && <span style={{ color: 'var(--accent-primary)', marginRight: '6px' }}>●</span>}
                  {email.sender}
                </div>
                <div className={styles.mailSubject}>
                  <strong style={{ color: 'var(--text-primary)' }}>{email.subject}</strong> — {email.preview}
                </div>
                <div className={styles.mailDate}>{email.date}</div>
              </div>
            ))}
          </div>

          {selectedEmail && (
            <div className={`${styles.detailCard} glass`}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h2 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-primary)' }}>
                    {selectedEmail.subject}
                  </h2>
                  <div style={{ fontSize: '13px', color: 'var(--accent-primary)', marginTop: '4px' }}>
                    From: {selectedEmail.sender} &lt;{selectedEmail.email}&gt;
                  </div>
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{selectedEmail.date}</div>
              </div>

              <div style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--text-secondary)', whiteSpace: 'pre-line', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '16px' }}>
                {selectedEmail.body}
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
                <button style={{ background: 'var(--accent-primary)', color: '#000', padding: '8px 16px', borderRadius: '8px', fontWeight: 700, fontSize: '13px' }}>
                  ↩ Reply
                </button>
                <button style={{ background: 'rgba(255,255,255,0.08)', color: 'var(--text-primary)', padding: '8px 16px', borderRadius: '8px', fontWeight: 600, fontSize: '13px' }}>
                  ➡ Forward
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
