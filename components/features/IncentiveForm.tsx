'use client';

import React, { useState } from 'react';
import styles from './IncentiveForm.module.css';

export function IncentiveForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    privacy: false
  });

  const [showPrivacyAlert, setShowPrivacyAlert] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.privacy) {
      setShowPrivacyAlert(true);
      // Scroll al checkbox della privacy
      const privacyCheckbox = document.getElementById('features-privacy');
      privacyCheckbox?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    
    setShowPrivacyAlert(false);
    
    // Tracciamento conversione Google Ads
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-16979483829/8kRVCPDUkJQZEOXdvv4p'
      });
      console.log('Conversione tracciata su Google Ads');
    }
    
    // Implementa qui la logica di invio del form
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : null;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (type === 'checkbox' && checked) {
      setShowPrivacyAlert(false);
    }
  };

  return (
    <section className={styles.formSection}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Nome completo</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="company">Azienda</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Il tuo messaggio..."
            rows={4}
          />
        </div>

        <div className="flex flex-col space-y-2">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                type="checkbox"
                id="features-privacy"
                name="privacy"
                checked={formData.privacy}
                onChange={handleChange}
                className="w-4 h-4 border-gray-300 rounded focus:ring-2 focus:ring-green-500"
                required
                aria-required="true"
                aria-label="Accetto la privacy policy"
              />
            </div>
            <div className="ml-3">
              <label htmlFor="features-privacy" className="text-sm text-gray-700">
                Accetto la privacy policy *
              </label>
            </div>
          </div>

          {showPrivacyAlert && (
            <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-md" role="alert">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-orange-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-orange-700">
                    Per favore accetta la privacy policy prima di inviare il form
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <button type="submit" className={styles.submitButton}>
          Invia richiesta
        </button>
      </form>
    </section>
  );
} 