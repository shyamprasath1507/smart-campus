'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function TeacherSettingsPage() {
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [submissionNotifs, setSubmissionNotifs] = useState(true);
  const [autoCurveGrading, setAutoCurveGrading] = useState(false);
  const [twoFactorAuth, setTwoFactorAuth] = useState(true);

  const [officeNumber, setOfficeNumber] = useState('Room 402, Turing Science Hall');
  const [preferredLanguage, setPreferredLanguage] = useState('English (US)');

  const handleSave = () => {
    alert('Faculty profile and teaching preferences saved successfully!');
  };

  return (
    <div className={styles.container}>
      <Link href="/teacher" className={styles.backLink}>
        ← Back to Faculty Dashboard
      </Link>

      <div className={styles.header}>
        <div className={styles.titleArea}>
          <h1><span>⚙️</span> Faculty Settings & Preferences</h1>
          <p className={styles.subtitle}>
            Manage academic grading defaults, notification triggers, office locations, and security keys.
          </p>
        </div>
      </div>

      <div className={styles.settingsGrid}>
        <div className={`${styles.sectionCard} glass`}>
          <h3 style={{ color: 'var(--accent-primary)', fontSize: '18px' }}>
            Academic & Course Defaults
          </h3>

          <div className={styles.settingRow}>
            <div className={styles.settingInfo}>
              <span className={styles.settingTitle}>Automated Curve Grading</span>
              <span className={styles.settingDesc}>
                Auto-calculate standard deviation and normalize borderline marks
              </span>
            </div>
            <div
              className={`${styles.toggleSwitch} ${
                autoCurveGrading ? styles.toggleSwitchActive : ''
              }`}
              onClick={() => setAutoCurveGrading(!autoCurveGrading)}
            >
              <div
                className={`${styles.toggleKnob} ${
                  autoCurveGrading ? styles.toggleKnobActive : ''
                }`}
              />
            </div>
          </div>

          <div className={styles.settingRow}>
            <div className={styles.settingInfo}>
              <span className={styles.settingTitle}>New Submission Alerts</span>
              <span className={styles.settingDesc}>
                Push alerts when students upload assignments past 10 PM
              </span>
            </div>
            <div
              className={`${styles.toggleSwitch} ${
                submissionNotifs ? styles.toggleSwitchActive : ''
              }`}
              onClick={() => setSubmissionNotifs(!submissionNotifs)}
            >
              <div
                className={`${styles.toggleKnob} ${
                  submissionNotifs ? styles.toggleKnobActive : ''
                }`}
              />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '8px' }}>
            <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)' }}>
              Faculty Office Location
            </label>
            <input
              type="text"
              value={officeNumber}
              onChange={(e) => setOfficeNumber(e.target.value)}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--glass-border)',
                borderRadius: '8px',
                padding: '10px 14px',
                color: 'var(--text-primary)',
                fontSize: '14px',
              }}
            />
          </div>
        </div>

        <div className={`${styles.sectionCard} glass`}>
          <h3 style={{ color: 'var(--accent-primary)', fontSize: '18px' }}>
            Security & Authentication
          </h3>

          <div className={styles.settingRow}>
            <div className={styles.settingInfo}>
              <span className={styles.settingTitle}>Two-Factor Authentication (2FA)</span>
              <span className={styles.settingDesc}>
                Hardware security key / authenticator required for grade entry
              </span>
            </div>
            <div
              className={`${styles.toggleSwitch} ${
                twoFactorAuth ? styles.toggleSwitchActive : ''
              }`}
              onClick={() => setTwoFactorAuth(!twoFactorAuth)}
            >
              <div
                className={`${styles.toggleKnob} ${
                  twoFactorAuth ? styles.toggleKnobActive : ''
                }`}
              />
            </div>
          </div>

          <div className={styles.settingRow}>
            <div className={styles.settingInfo}>
              <span className={styles.settingTitle}>Email Digests</span>
              <span className={styles.settingDesc}>
                Daily morning roll call and student intervention summary
              </span>
            </div>
            <div
              className={`${styles.toggleSwitch} ${
                emailAlerts ? styles.toggleSwitchActive : ''
              }`}
              onClick={() => setEmailAlerts(!emailAlerts)}
            >
              <div
                className={`${styles.toggleKnob} ${
                  emailAlerts ? styles.toggleKnobActive : ''
                }`}
              />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '8px' }}>
            <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)' }}>
              Primary Interface Language
            </label>
            <select
              value={preferredLanguage}
              onChange={(e) => setPreferredLanguage(e.target.value)}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--glass-border)',
                borderRadius: '8px',
                padding: '10px 14px',
                color: 'var(--text-primary)',
                fontSize: '14px',
              }}
            >
              <option value="English (US)">English (US)</option>
              <option value="Spanish (ES)">Spanish (ES)</option>
              <option value="French (FR)">French (FR)</option>
            </select>
          </div>

          <button onClick={handleSave} className={styles.saveBtn}>
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
}
