'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function TeacherForumsPage() {
  const [threads, setThreads] = useState([
    {
      id: 1,
      course: 'CS101',
      author: 'Samantha Chen',
      title: 'Clarification on Tree Balancing Rotations in Lab 3',
      body: 'When doing a double right-left rotation, do we recalculate tree height properties in the subroot before or after fixing parent pointer links?',
      replies: 5,
      upvotes: 14,
      instructorEndorsed: true,
      answered: true,
    },
    {
      id: 2,
      course: 'CS302',
      author: 'Alex Rivera',
      title: 'Lossless join condition for BCNF decomposition',
      body: 'In the textbook problem 4.2, are functional dependencies preserved if the intersection of schemas is a superkey of only one schema?',
      replies: 2,
      upvotes: 8,
      instructorEndorsed: false,
      answered: false,
    },
    {
      id: 3,
      course: 'AI405',
      author: 'Marcus Johnson',
      title: 'PyTorch CUDA Out of Memory Error on Lab GPU Node 3',
      body: 'We are receiving batch allocation OOM errors when running batch size 64 on the CIFAR-10 baseline.',
      replies: 3,
      upvotes: 19,
      instructorEndorsed: true,
      answered: true,
    },
  ]);

  const [replyText, setReplyText] = useState<{ [key: number]: string }>({});

  const handleReply = (id: number) => {
    if (!replyText[id]) return;
    setThreads((prev) =>
      prev.map((t) => (t.id === id ? { ...t, replies: t.replies + 1, answered: true, instructorEndorsed: true } : t))
    );
    setReplyText((prev) => ({ ...prev, [id]: '' }));
    alert('Instructor endorsed response published to cohort thread!');
  };

  return (
    <div className={styles.container}>
      <Link href="/teacher" className={styles.backLink}>
        ← Back to Faculty Dashboard
      </Link>

      <div className={styles.header}>
        <div className={styles.titleArea}>
          <h1><span>💬</span> Academic Discussion Forums</h1>
          <p className={styles.subtitle}>
            Monitor course Q&A, provide verified faculty solutions, and endorse peer explanations.
          </p>
        </div>
      </div>

      <div className={styles.threadsList}>
        {threads.map((t) => (
          <div key={t.id} className={`${styles.threadCard} glass`}>
            <div className={styles.threadHeader}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className={styles.courseTag}>{t.course}</span>
                <strong style={{ fontSize: '17px', color: 'var(--text-primary)' }}>
                  {t.title}
                </strong>
              </div>
              {t.instructorEndorsed && (
                <span className={styles.endorsedBadge}>★ Verified Faculty Answer</span>
              )}
            </div>

            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              {t.body}
            </p>

            <div className={styles.threadFooter}>
              <span>Posted by <strong>{t.author}</strong></span>
              <span>💬 {t.replies} Replies &nbsp;|&nbsp; ⬆️ {t.upvotes} Upvotes</span>
            </div>

            <div className={styles.replyInputArea}>
              <input
                type="text"
                placeholder="Post verified instructor answer..."
                className={styles.replyInput}
                value={replyText[t.id] || ''}
                onChange={(e) =>
                  setReplyText({ ...replyText, [t.id]: e.target.value })
                }
              />
              <button onClick={() => handleReply(t.id)} className={styles.replyBtn}>
                Endorse & Reply
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
