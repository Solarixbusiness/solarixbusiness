'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import styles from './ContactSection.module.css'
import { SEO_CONSTANTS } from '../../utils/seoConstants'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    privacy: false
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setErrorMessage('');
    
    try {
      // Invio reale del form utilizzando l'API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType: 'contact' // Specifichiamo che è il form di contatto
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Si è verificato un errore durante l\'invio del messaggio');
      }
      
      // Se l'invio è andato a buon fine
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        privacy: false
      });
    } catch (error) {
      console.error('Errore durante l\'invio del form:', error);
      setFormStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Si è verificato un errore durante l\'invio del messaggio');
    }
  };
  
  return (
    <section className={styles.contact_section}>
      <div className={styles.container}>
        <div className={styles.contact_grid}>
          <div className={styles.contact_info}>
            <h2 className={styles.title}>Contattaci</h2>
            <p className={styles.subtitle}>
              Siamo qui per aiutarti a trovare la soluzione energetica più adatta alla tua azienda.
              Compila il form o contattaci direttamente.
            </p>
            
            <div className={styles.info_items}>
              <div className={styles.info_item}>
                <div className={styles.icon_container}>
                  <Image 
                    src="/icons/phone.svg" 
                    alt="Telefono" 
                    width={20} 
                    height={20}
                    className={styles.icon}
                  />
                </div>
                <div>
                  <h3 className={styles.info_title}>Telefono</h3>
                  <p className={styles.info_text}>{SEO_CONSTANTS.COMPANY_PHONE.replace('-', ' ')}</p>
                </div>
              </div>
              
              <div className={styles.info_item}>
                <div className={styles.icon_container}>
                  <Image 
                    src="/icons/mail.svg" 
                    alt="Email" 
                    width={20} 
                    height={20}
                    className={styles.icon}
                  />
                </div>
                <div>
                  <h3 className={styles.info_title}>Email</h3>
                  <p className={styles.info_text}>info@solarixbusiness.it</p>
                </div>
              </div>
              
              <div className={styles.info_item}>
                <div className={styles.icon_container}>
                  <Image 
                    src="/icons/building.svg" 
                    alt="Indirizzo" 
                    width={20} 
                    height={20}
                    className={styles.icon}
                  />
                </div>
                <div>
                  <h3 className={styles.info_title}>Sede</h3>
                  <p className={styles.info_text}>Via Esempio, 123<br />10100 Torino (TO)</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.contact_form_container}>
            <form className={styles.contact_form} onSubmit={handleSubmit}>
              <div className={styles.form_group}>
                <label htmlFor="name" className={styles.form_label}>Nome e Cognome*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.form_input}
                  required
                />
              </div>
              
              <div className={styles.form_group}>
                <label htmlFor="email" className={styles.form_label}>Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.form_input}
                  required
                />
              </div>
              
              <div className={styles.form_group}>
                <label htmlFor="phone" className={styles.form_label}>Telefono</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={styles.form_input}
                />
              </div>
              
              <div className={styles.form_group}>
                <label htmlFor="company" className={styles.form_label}>Azienda*</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={styles.form_input}
                  required
                />
              </div>
              
              <div className={styles.form_group}>
                <label htmlFor="message" className={styles.form_label}>Messaggio*</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.form_textarea}
                  rows={5}
                  required
                ></textarea>
              </div>
              
              <div className={styles.form_group_checkbox}>
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  checked={formData.privacy}
                  onChange={handleCheckboxChange}
                  className={styles.form_checkbox}
                  required
                />
                <label htmlFor="privacy" className={styles.form_checkbox_label}>
                  Acconsento al trattamento dei dati personali secondo la <a href="/privacy-policy" className={styles.privacy_link}>Privacy Policy</a>*
                </label>
              </div>
              
              <button 
                type="submit" 
                className={styles.submit_button}
                disabled={formStatus === 'submitting'}
              >
                {formStatus === 'submitting' ? 'Invio in corso...' : 'Invia Richiesta'}
              </button>
              
              {formStatus === 'success' && (
                <div className={styles.success_message}>
                  Grazie per averci contattato! Ti risponderemo al più presto.
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className={styles.error_message}>
                  {errorMessage || 'Si è verificato un errore. Riprova più tardi o contattaci direttamente.'}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
