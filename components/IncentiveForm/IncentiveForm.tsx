'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import styles from './IncentiveForm.module.css';
import { useLeadForm } from '@/hooks/useLeadForm';

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
  privacy: boolean;
}

interface FormStatus {
  submitted: boolean;
  loading: boolean;
  success: boolean;
  message: string;
}

const sendEmail = async (formData: any) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error('Errore nell\'invio dell\'email');
  }

  return response.json();
};

export default function IncentiveForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    companySize: '',
    interests: [],
    message: '',
    privacy: false
  });

  const [formStatus, setFormStatus] = useState<FormStatus>({
    submitted: false,
    loading: false,
    success: false,
    message: ''
  });

  const [showPrivacyAlert, setShowPrivacyAlert] = useState(false);

  const { submitLead, loading, error } = useLeadForm({
    formType: 'incentivi_home',
    onSuccess: () => {
      setFormStatus({
        submitted: true,
        loading: false,
        success: true,
        message: 'Grazie! Ti contatteremo presto.'
      });
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        companySize: '',
        interests: [],
        message: '',
        privacy: false
      });
    }
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
    
    if (!formData.privacy) {
      setShowPrivacyAlert(true);
      // Scroll al checkbox della privacy
      const privacyCheckbox = document.getElementById('incentive-privacy');
      privacyCheckbox?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    
    setShowPrivacyAlert(false);
    setFormStatus({
      submitted: true,
      loading: true,
      success: false,
      message: 'Invio in corso...'
    });
    
    try {
      // Prima invia l'email
      await sendEmail(formData);
      
      // Poi salva il lead direttamente qui
      await submitLead({
        nome: formData.name,
        cognome: '',
        telefono: formData.phone,
        email: formData.email,
        note: formData.message,
        form_type: 'incentive_home',
        additional_data: {
          dimensione_azienda: formData.companySize,
          interests: formData.interests,
          fonte: 'Homepage'
        }
      });

    } catch (error) {
      console.error('Errore:', error);
      setFormStatus({
        submitted: true,
        loading: false,
        success: false,
        message: 'Si è verificato un errore. Riprova più tardi.'
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

      <form onSubmit={handleSubmit} className={styles.form} aria-label="Form richiesta incentivi">
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
              autoComplete="name"
              aria-label="Nome e cognome completo"
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
              autoComplete="email"
              aria-label="Indirizzo email aziendale"
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
              autoComplete="tel"
              aria-label="Numero di telefono"
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
              autoComplete="organization"
              aria-label="Dimensione dell'azienda"
            >
              <option value="">Seleziona dimensione</option>
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
          <label htmlFor="message" id="message-label">Messaggio</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            disabled={formStatus.loading}
            aria-labelledby="message-label"
            autoComplete="off"
            aria-label="Dettagli aggiuntivi o domande"
            rows={4}
          ></textarea>
        </div>

        <div className={styles.formGroup}>
          <div className="flex flex-col space-y-2">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  id="incentive-privacy"
                  name="privacy"
                  checked={formData.privacy}
                  onChange={(e) => {
                    setFormData({...formData, privacy: e.target.checked});
                    if (e.target.checked) {
                      setShowPrivacyAlert(false);
                    }
                  }}
                  className="w-4 h-4 border-gray-300 rounded focus:ring-2 focus:ring-green-500"
                  required
                  aria-required="true"
                  aria-label="Accetto la privacy policy"
                />
              </div>
              <div className="ml-3">
                <label htmlFor="incentive-privacy" className="text-sm text-gray-700">
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
        </div>

        <button
          type="submit"
          className={styles.submitButton}
          disabled={formStatus.loading}
          aria-label={formStatus.loading ? 'Invio in corso...' : 'Invia richiesta'}
        >
          {formStatus.loading ? 'Invio in corso...' : 'Richiedi Analisi'}
        </button>
      </form>
    </div>
  );
}
