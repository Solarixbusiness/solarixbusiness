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

  const { submitLead, loading, error } = useLeadForm({
    formType: 'contatto'
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
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
                  <p className={styles.info_text}>Via Bertolotti 7 | 10121 Torino (TO) | Italy</p>
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
                ></textarea>
              </div>
              
              <div className={styles.form_group}>
                <div className={styles.checkbox_container}>
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    checked={formData.privacy}
                    onChange={(e) => setFormData({...formData, privacy: e.target.checked})}
                    required
                    className={styles.form_checkbox}
                  />
                  <label htmlFor="privacy" className={styles.checkbox_label}>
                    Accetto la privacy policy*
                  </label>
                </div>
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
