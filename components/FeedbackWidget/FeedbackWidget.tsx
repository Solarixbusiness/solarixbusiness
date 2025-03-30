'use client';

import React from 'react';
import styles from './FeedbackWidget.module.css';

export default function FeedbackWidget() {
  return (
    <a 
      href="/crm/login"
      className={styles.feedbackButton}
      aria-label="Accedi al CRM"
    >
      TEAM
    </a>
  );
}
