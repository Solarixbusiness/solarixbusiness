'use client';

import React, { useState } from 'react';
import styles from './FeedbackWidget.module.css';

type FeedbackType = 'suggestion' | 'bug' | 'compliment';

export default function FeedbackWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const toggleWidget = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      resetForm();
    }
  };

  const resetForm = () => {
    setFeedbackType(null);
    setMessage('');
    setEmail('');
    setIsSubmitted(false);
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!feedbackType) {
      setError('Seleziona un tipo di feedback');
      return;
    }
    
    if (!message.trim()) {
      setError('Inserisci un messaggio');
      return;
    }
    
    setIsSubmitting(true);
    setError('');
    
    try {
      // Qui potresti inviare il feedback a un endpoint API
      // Per ora simuliamo un invio con successo dopo 1 secondo
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Tracciamo l'evento in Google Analytics
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('event', 'feedback_submitted', {
          event_category: 'Feedback',
          event_label: feedbackType
        });
      }
      
      setIsSubmitted(true);
      setIsSubmitting(false);
      
      // Chiudi il widget dopo 3 secondi
      setTimeout(() => {
        toggleWidget();
      }, 3000);
    } catch (err) {
      setError('Si è verificato un errore. Riprova più tardi.');
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <button 
        className={styles.feedbackButton}
        onClick={toggleWidget}
        aria-label="Invia feedback"
      >
        {isOpen ? 'Chiudi' : 'Feedback'}
      </button>
      
      {isOpen && (
        <div className={styles.feedbackContainer}>
          <div className={styles.feedbackHeader}>
            <h3>Invia il tuo feedback</h3>
            <button 
              className={styles.closeButton}
              onClick={toggleWidget}
              aria-label="Chiudi"
            >
              ×
            </button>
          </div>
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className={styles.feedbackForm}>
              <div className={styles.feedbackTypeContainer}>
                <p>Che tipo di feedback vuoi inviarci?</p>
                <div className={styles.feedbackTypes}>
                  <button
                    type="button"
                    className={`${styles.feedbackTypeButton} ${feedbackType === 'suggestion' ? styles.active : ''}`}
                    onClick={() => setFeedbackType('suggestion')}
                  >
                    Suggerimento
                  </button>
                  <button
                    type="button"
                    className={`${styles.feedbackTypeButton} ${feedbackType === 'bug' ? styles.active : ''}`}
                    onClick={() => setFeedbackType('bug')}
                  >
                    Problema
                  </button>
                  <button
                    type="button"
                    className={`${styles.feedbackTypeButton} ${feedbackType === 'compliment' ? styles.active : ''}`}
                    onClick={() => setFeedbackType('compliment')}
                  >
                    Complimento
                  </button>
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="feedback-message">Il tuo messaggio</label>
                <textarea
                  id="feedback-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Scrivi qui il tuo feedback..."
                  rows={4}
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="feedback-email">Email (opzionale)</label>
                <input
                  id="feedback-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="La tua email per ricevere una risposta"
                />
              </div>
              
              {error && <p className={styles.errorMessage}>{error}</p>}
              
              <button 
                type="submit" 
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Invio in corso...' : 'Invia feedback'}
              </button>
            </form>
          ) : (
            <div className={styles.successMessage}>
              <p>Grazie per il tuo feedback!</p>
              <p>Lo utilizzeremo per migliorare il nostro sito.</p>
            </div>
          )}
        </div>
      )}
    </>
  );
}
