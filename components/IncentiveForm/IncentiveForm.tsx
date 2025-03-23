'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import styles from './IncentiveForm.module.css';

const companySizes = [
  { id: 'micro', label: 'Micro impresa (< 10 dipendenti)' },
  { id: 'small', label: 'Piccola impresa (< 50 dipendenti)' },
  { id: 'medium', label: 'Media impresa (< 250 dipendenti)' },
  { id: 'large', label: 'Grande impresa (≥ 250 dipendenti)' }
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  companySize: string;
  interests: string[];
  message: string;
}

interface FormStatus {
  submitted: boolean;
  loading: boolean;
  success: boolean;
  message: string;
}

export default function IncentiveForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    companySize: '',
    interests: [],
    message: ''
  });

  const [formStatus, setFormStatus] = useState<FormStatus>({
    submitted: false,
    loading: false,
    success: false,
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      if (checked) {
        return {
          ...prev,
          interests: [...prev.interests, value]
        };
      } else {
        return {
          ...prev,
          interests: prev.interests.filter(interest => interest !== value)
        };
      }
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validazione base
    if (!formData.name || !formData.email || !formData.phone || !formData.companySize) {
      setFormStatus({
        submitted: true,
        loading: false,
        success: false,
        message: 'Per favore, compila tutti i campi obbligatori.'
      });
      return;
    }

    try {
      setFormStatus({
        submitted: true,
        loading: true,
        success: false,
        message: 'Invio in corso...'
      });

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Si è verificato un errore durante l\'invio');
      }

      setFormStatus({
        submitted: true,
        loading: false,
        success: true,
        message: data.message || 'Grazie per la tua richiesta! Ti contatteremo al più presto per una consulenza personalizzata.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        companySize: '',
        interests: [],
        message: ''
      });
      
      // Reset status dopo 5 secondi
      setTimeout(() => {
        setFormStatus(prev => ({
          ...prev,
          submitted: false
        }));
      }, 5000);
    } catch (error: unknown) {
      console.error('Errore durante l\'invio del form:', error);
      setFormStatus({
        submitted: true,
        loading: false,
        success: false,
        message: error instanceof Error ? error.message : 'Si è verificato un errore durante l\'invio. Riprova più tardi.'
      });
    }
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>
        <h3>Scopri quanto può rendere il tuo impianto</h3>
        <p>Compila il form e ricevi un'analisi tecnica e finanziaria su misura.</p>
      </div>

      {formStatus.submitted && (
        <div 
          className={`${styles.formMessage} ${formStatus.success ? styles.success : styles.error}`}
          role="alert"
          aria-live="assertive"
        >
          {formStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className={styles.form} aria-label="Form di contatto">
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="name" id="name-label">Nome e Cognome *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={formStatus.loading}
              aria-labelledby="name-label"
              aria-required="true"
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="email" id="email-label">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={formStatus.loading}
              aria-labelledby="email-label"
              aria-required="true"
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="phone" id="phone-label">Telefono *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              disabled={formStatus.loading}
              aria-labelledby="phone-label"
              aria-required="true"
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="companySize" id="companySize-label">Dimensione Azienda *</label>
            <select
              id="companySize"
              name="companySize"
              value={formData.companySize}
              onChange={handleChange}
              required
              disabled={formStatus.loading}
              aria-labelledby="companySize-label"
              aria-required="true"
            >
              <option value="">Seleziona...</option>
              {companySizes.map(size => (
                <option key={size.id} value={size.id}>{size.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.formGroup}>
          <fieldset>
            <legend>Sono interessato a:</legend>
            <div className={styles.checkboxGroup} role="group" aria-labelledby="interests-group">
              <span id="interests-group" className="sr-only">Seleziona i tuoi interessi</span>
              <label className={styles.checkbox}>
                <input
                  type="checkbox"
                  name="interests"
                  value="incentivi-nazionali"
                  checked={formData.interests.includes('incentivi-nazionali')}
                  onChange={handleCheckboxChange}
                  disabled={formStatus.loading}
                />
                <span>Incentivi Nazionali</span>
              </label>
            
              <label className={styles.checkbox}>
                <input
                  type="checkbox"
                  name="interests"
                  value="incentivi-regionali"
                  checked={formData.interests.includes('incentivi-regionali')}
                  onChange={handleCheckboxChange}
                  disabled={formStatus.loading}
                />
                <span>Incentivi Regionali</span>
              </label>
            
              <label className={styles.checkbox}>
                <input
                  type="checkbox"
                  name="interests"
                  value="incentivi-settoriali"
                  checked={formData.interests.includes('incentivi-settoriali')}
                  onChange={handleCheckboxChange}
                  disabled={formStatus.loading}
                />
                <span>Incentivi Settoriali</span>
              </label>
            
              <label className={styles.checkbox}>
                <input
                  type="checkbox"
                  name="interests"
                  value="consulenza-personalizzata"
                  checked={formData.interests.includes('consulenza-personalizzata')}
                  onChange={handleCheckboxChange}
                  disabled={formStatus.loading}
                />
                <span>Consulenza Personalizzata</span>
              </label>
            </div>
          </fieldset>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Messaggio</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Scrivi qui eventuali dettagli o domande..."
            disabled={formStatus.loading}
          ></textarea>
        </div>

        <div className={styles.formFooter}>
          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={formStatus.loading}
          >
            {formStatus.loading ? 'Invio in corso...' : 'Richiedi Informazioni'}
          </button>
          <p className={styles.disclaimer}>
            * Campi obbligatori. I dati saranno trattati in conformità con la nostra politica sulla privacy.
          </p>
        </div>
      </form>
    </div>
  );
}
