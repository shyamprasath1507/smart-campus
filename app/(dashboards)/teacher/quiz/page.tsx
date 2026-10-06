'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function TeacherQuizPage() {
  const [topic, setTopic] = useState('Graph Algorithms & Dijkstra');
  const [difficulty, setDifficulty] = useState('Medium');
  const [qCount, setQCount] = useState('5');

  const [questions, setQuestions] = useState([
    {
      id: 1,
      q: 'What is the time complexity of Dijkstra algorithm implemented with a Fibonacci heap?',
      options: ['O(V^2)', 'O(E + V log V)', 'O(E log V)', 'O(V log E)'],
      correctIndex: 1,
      explanation: 'Fibonacci heap amortizes key decrease operations to O(1), yielding O(E + V log V).',
    },
    {
      id: 2,
      q: 'Which data structure is primarily utilized to detect cycles in an undirected graph in near-linear time?',
      options: ['Disjoint Set Union (Union-Find)', 'Min-Heap', 'Red-Black Tree', 'Suffix Automaton'],
      correctIndex: 0,
      explanation: 'Disjoint-Set (DSU) with path compression and rank union operates in near O(E * α(V)).',
    },
    {
      id: 3,
      q: 'Can Dijkstra algorithm correctly resolve shortest paths on graphs containing negative edge weights without cycles?',
      options: ['Yes, always', 'No, Bellman-Ford must be used', 'Only if the source has zero in-degree', 'Yes, by adding a constant offset to all edges'],
      correctIndex: 1,
      explanation: 'Greedy assumption fails on negative weights. Bellman-Ford or SPFA is required.',
    },
  ]);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`AI synthesized ${qCount} brand new test questions on "${topic}"!`);
  };

  return (
    <div className={styles.container}>
      <Link href="/teacher" className={styles.backLink}>
        ← Back to Faculty Dashboard
      </Link>

      <div className={styles.header}>
        <div className={styles.titleArea}>
          <h1><span>❓</span> AI Quiz Generator & Item Bank</h1>
          <p className={styles.subtitle}>
            Generate Bloom-taxonomy calibrated quizzes, code MCQs, and algorithmic conceptual challenges.
          </p>
        </div>
      </div>

      <div className={styles.layout}>
        <form onSubmit={handleGenerate} className={`${styles.genCard} glass`}>
          <h3 style={{ color: 'var(--accent-primary)', fontSize: '18px' }}>AI Quiz Generation Engine</h3>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Course Module or Topic Prompt</label>
            <input
              type="text"
              className={styles.input}
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Target Difficulty</label>
            <select
              className={styles.select}
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <option value="Fundamental">Fundamental (Bloom Level 1-2)</option>
              <option value="Medium">Medium (Application & Analysis)</option>
              <option value="Rigorous">Rigorous / Olympiad Level</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Number of Questions</label>
            <select
              className={styles.select}
              value={qCount}
              onChange={(e) => setQCount(e.target.value)}
            >
              <option value="3">3 Rapid Fire Questions</option>
              <option value="5">5 Comprehensive Questions</option>
              <option value="10">10 Full Quiz Items</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Source Lecture Notes (Optional)</label>
            <textarea
              rows={3}
              placeholder="Paste lecture transcript, slides summary, or syllabus bullet points..."
              className={styles.textarea}
            />
          </div>

          <button type="submit" className={styles.generateBtn}>
            ✨ Synthesize Quiz with AI
          </button>
        </form>

        <div className={styles.previewList}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontSize: '18px', color: 'var(--text-primary)' }}>
              Question Bank Preview ({questions.length} Items)
            </h3>
            <button
              onClick={() => alert('Quiz exported directly to LMS Canvas!')}
              style={{
                background: 'rgba(0, 255, 133, 0.15)',
                color: 'var(--accent-secondary)',
                padding: '6px 14px',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: 600,
              }}
            >
              Push to LMS
            </button>
          </div>

          {questions.map((item, idx) => (
            <div key={item.id} className={`${styles.questionCard} glass`}>
              <div style={{ fontWeight: 700, fontSize: '15px', color: 'var(--text-primary)' }}>
                Q{idx + 1}. {item.q}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {item.options.map((opt, oIdx) => (
                  <div
                    key={oIdx}
                    className={`${styles.optionItem} ${
                      oIdx === item.correctIndex ? styles.optionCorrect : ''
                    }`}
                  >
                    <span>
                      {String.fromCharCode(65 + oIdx)}. {opt}
                    </span>
                    {oIdx === item.correctIndex && <span>✓ Correct Answer</span>}
                  </div>
                ))}
              </div>

              <div style={{ fontSize: '13px', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                💡 Explanation: {item.explanation}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
