'use client';

import { useState } from 'react';
import styles from './IncentiveForm.module.css';

const companySizes = [
  { id: 'micro', label: 'Micro impresa (< 10 dipendenti)' },
  { id: 'small', label: 'Piccola impresa (< 50 dipendenti)' },
  { id: 'medium', label: 'Media impresa (< 250 dipendenti)' },
  { id: 'large', label: 'Grande impresa (≥ 250 dipendenti)' }
];

export default function IncentiveForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companySize: '',
    interests: [],
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Qui implementeremo la logica di invio
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulazione
      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        companySize: '',
        interests: [],
        message: ''
      });
    } catch (error) {
      console.error('Errore durante l\'invio:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>
        <h3>Scopri gli Incentivi Disponibili</h3>
        <p>Compila il form per ricevere una consulenza gratuita personalizzata</p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGrid}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Nome e Cognome*</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
              placeholder="Es. Mario Rossi"
              autoComplete="name"
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email">Email Aziendale*</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
              placeholder="Es. mario.rossi@azienda.it"
              autoComplete="email"
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="phone">Telefono*</label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              required
              placeholder="Es. 333 1234567"
              autoComplete="tel"
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="companySize">Dimensione Azienda*</label>
            <select
              id="companySize"
              value={formData.companySize}
              onChange={(e) => setFormData({...formData, companySize: e.target.value})}
              required
              autoComplete="organization"
            >
              <option value="">Seleziona dimensione</option>
              {companySizes.map(size => (
                <option key={size.id} value={size.id}>{size.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.messageGroup}>
          <label htmlFor="message">Note Aggiuntive (opzionale)</label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            placeholder="Inserisci eventuali dettagli o richieste specifiche..."
            rows={4}
            autoComplete="off"
          />
        </div>

        <div className={styles.formActions}>
          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Invio in corso...' : 'Richiedi Consulenza Gratuita'}
          </button>
          
          <a href="https://wa.me/+393470087833" className={styles.whatsappButton} target="_blank" rel="noopener noreferrer">
            Contattaci su WhatsApp
          </a>
        </div>

        {showSuccess && (
          <div className={styles.successMessage}>
            Richiesta inviata con successo! Ti contatteremo al più presto.
          </div>
        )}

        <div className={styles.privacyNote}>
          I dati saranno trattati nel rispetto della normativa sulla privacy (GDPR)
        </div>
      </form>
    </div>
  );
} 