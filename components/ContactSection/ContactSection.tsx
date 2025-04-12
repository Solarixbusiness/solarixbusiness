'use client'

import React, { useState, FormEvent } from 'react'
import Image from 'next/image'
import styles from './ContactSection.module.css'
import { SEO_CONSTANTS } from '../../utils/seoConstants'
import { useLeadForm } from '@/hooks/useLeadForm'

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  privacy: boolean;
}

interface FormStatus {
  submitted: boolean;
  loading: boolean;
  success: boolean;
  message: string;
}

const sendEmail = async (formData: FormData) => {
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

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
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
    formType: 'contatto'
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.privacy) {
      setShowPrivacyAlert(true);
      // Scroll al checkbox della privacy
      const privacyCheckbox = document.getElementById('contact-privacy');
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
      await sendEmail(formData);
      
      await submitLead({
        nome: formData.name,
        cognome: '',
        telefono: formData.phone,
        email: formData.email,
        note: formData.message,
        form_type: 'contatto',
        additional_data: {
          fonte: 'Pagina Contatti',
          privacy_accepted: formData.privacy
        }
      });

      setFormStatus({
        submitted: true,
        loading: false,
        success: true,
        message: 'Grazie! Ti contatteremo presto.'
      });
      
      // Tracciamento conversione Google Ads
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'conversion', {
          'send_to': 'AW-16979483829/8kRVCPDUkJQZEOXdvv4p'
        });
        console.log('Conversione tracciata su Google Ads');
      }

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        privacy: false
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
                  <p className={styles.info_text}>
                    <a href="tel:3470087833" className={styles.contact_link}>+39 347 008 7833</a>
                    <br />
                    <a href="tel:01118837752" className={styles.contact_link}>011 1883 7752</a>
                  </p>
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
                  <p className={styles.info_text}>
                    Via Bertolotti 7<br />
                    10121 Torino (TO)<br />
                    Italy
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.contact_form_container}>
            <form className={styles.contact_form} onSubmit={handleSubmit}>
              {formStatus.submitted && (
                <div className={`${styles.message} ${formStatus.success ? styles.success : styles.error}`}>
                  {formStatus.message}
                </div>
              )}
              
              <div className={styles.form_group}>
                <label htmlFor="name" className={styles.form_label}>Nome*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className={styles.form_input}
                  required
                  autoComplete="name"
                  aria-required="true"
                  aria-label="Nome completo"
                />
              </div>
              
              <div className={styles.form_group}>
                <label htmlFor="email" className={styles.form_label}>Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className={styles.form_input}
                  required
                  autoComplete="email"
                  aria-required="true"
                  aria-label="Indirizzo email"
                />
              </div>
              
              <div className={styles.form_group}>
                <label htmlFor="phone" className={styles.form_label}>Telefono*</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className={styles.form_input}
                  required
                  autoComplete="tel"
                  aria-required="true"
                  aria-label="Numero di telefono"
                />
              </div>
              
              <div className={styles.form_group}>
                <label htmlFor="message" className={styles.form_label}>Messaggio*</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className={styles.form_textarea}
                  rows={5}
                  required
                  autoComplete="off"
                  aria-required="true"
                  aria-label="Il tuo messaggio"
                ></textarea>
              </div>
              
              <div className="flex flex-col space-y-2">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      id="contact-privacy"
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
                    <label htmlFor="contact-privacy" className="text-sm text-gray-700">
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
              
              <button 
                type="submit" 
                className={styles.submit_button}
                disabled={loading}
              >
                {loading ? 'Invio in corso...' : 'Invia'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
