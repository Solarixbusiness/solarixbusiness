'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './landing.module.css';
import Script from 'next/script';
import CookieConsent from '@/components/CookieConsent/CookieConsent';

export default function LandingPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    azienda: '',
    messaggio: '',
    privacy: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showPrivacyAlert, setShowPrivacyAlert] = useState(false);

  useEffect(() => {
    // Disabilita le interazioni con navbar e footer
    const navbar = document.querySelector('body > div > div > nav');
    const footer = document.querySelector('body > div > div > footer');
    
    if (navbar) {
      (navbar as HTMLElement).style.pointerEvents = 'none';
    }
    
    if (footer) {
      (footer as HTMLElement).style.pointerEvents = 'none';
    }
    
    return () => {
      // Ripristina le interazioni quando la pagina viene smontata
      if (navbar) {
        (navbar as HTMLElement).style.pointerEvents = '';
      }
      
      if (footer) {
        (footer as HTMLElement).style.pointerEvents = '';
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.privacy) {
      setShowPrivacyAlert(true);
      // Scroll al checkbox della privacy
      const privacyCheckbox = document.getElementById('privacy');
      privacyCheckbox?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    
    setShowPrivacyAlert(false);
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email-landing', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        // Redirect to WhatsApp
        const whatsappMessage = `Ciao, sono ${formData.nome} dell'azienda ${formData.azienda}. Vorrei maggiori informazioni sulla finanza agevolata per il fotovoltaico.`;
        const whatsappUrl = `https://wa.me/+393792591471?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');
      } else {
        throw new Error('Errore nell\'invio del form');
      }
    } catch (error) {
      console.error('Errore:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : null;
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });

    if (type === 'checkbox' && checked) {
      setShowPrivacyAlert(false);
    }
  };

  return (
    <>
      {/* Google Tag Manager */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TV8D8Q7C');
        `}
      </Script>
      {/* Google Analytics 4 */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-MB624KV3DS');
        `}
      </Script>
      
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe 
          src="https://www.googletagmanager.com/ns.html?id=GTM-TV8D8Q7C"
          height="0" 
          width="0" 
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    
      {/* Contenitore principale con z-index elevato */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 2000,
        overflow: 'auto',
        background: 'white',
        scrollbarWidth: 'none', /* Firefox */
        msOverflowStyle: 'none', /* IE e Edge */
      }}>
        <style jsx global>{`
          /* Chrome, Safari e Opera */
          ::-webkit-scrollbar {
            display: none;
          }
          body {
            overflow: auto;
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none; /* IE e Edge */
          }
          body::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        <div className={styles.container}>
          <div className={styles.heroSection}>
            {/* Overlay azzurro-grigio */}
            <div 
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(176, 196, 222, 0.45)', // Aumentato a 0.45 per maggiore opacità
                zIndex: 1
              }}
            />
            <Image
              src="/images/landing/sfondo landing.png"
              alt="Business Professional"
              width={2560}
              height={800}
              priority
              quality={100}
              style={{ position: 'relative', zIndex: 0 }}
            />
          </div>

          <div className={styles.contentSection} style={{ position: 'relative', zIndex: 2 }}>
            <div className={styles.formContainer}>
              <h1>Trasforma il tuo impianto fotovoltaico in un asset finanziario</h1>
              <h2>Massimizza il ritorno del tuo investimento con la finanza agevolata</h2>

              {!submitted ? (
                <form onSubmit={handleSubmit} className={styles.form} aria-label="Form richiesta informazioni finanza agevolata">
                  <div className={styles.formGroup}>
                    <label htmlFor="nome" className="sr-only">Nome e Cognome</label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      placeholder="Nome e Cognome"
                      required
                      value={formData.nome}
                      onChange={handleChange}
                      autoComplete="name"
                      aria-required="true"
                      aria-label="Il tuo nome e cognome"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      aria-required="true"
                      aria-label="Il tuo indirizzo email"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="telefono" className="sr-only">Telefono</label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      placeholder="Telefono"
                      required
                      value={formData.telefono}
                      onChange={handleChange}
                      autoComplete="tel"
                      aria-required="true"
                      aria-label="Il tuo numero di telefono"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="azienda" className="sr-only">Nome Azienda</label>
                    <input
                      type="text"
                      id="azienda"
                      name="azienda"
                      placeholder="Nome Azienda"
                      required
                      value={formData.azienda}
                      onChange={handleChange}
                      autoComplete="organization"
                      aria-required="true"
                      aria-label="Il nome della tua azienda"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="messaggio" className="sr-only">Messaggio (opzionale)</label>
                    <textarea
                      id="messaggio"
                      name="messaggio"
                      placeholder="Messaggio (opzionale)"
                      value={formData.messaggio}
                      onChange={handleChange}
                      autoComplete="off"
                      aria-label="Messaggio aggiuntivo (opzionale)"
                      rows={4}
                    ></textarea>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          type="checkbox"
                          id="privacy"
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
                        <label htmlFor="privacy" className="text-sm text-gray-700">
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
                    className={styles.submitButton}
                    disabled={isSubmitting}
                    aria-label={isSubmitting ? 'Invio in corso...' : 'Invia richiesta'}
                  >
                    {isSubmitting ? 'Invio in corso...' : 'Richiedi Informazioni'}
                  </button>
                </form>
              ) : (
                <div className={styles.successMessage}>
                  <h3>Grazie per averci contattato!</h3>
                  <p>Sarai reindirizzato a WhatsApp, altrimenti clicca <a href={`https://wa.me/+393792591471?text=${encodeURIComponent(`Ciao, sono ${formData.nome} dell'azienda ${formData.azienda}. Vorrei maggiori informazioni sulla finanza agevolata per il fotovoltaico.`)}`} target="_blank" rel="noopener noreferrer">qui</a>.</p>
                </div>
              )}
            </div>

            <div className={styles.trustBadges}>
              <div className={styles.badgeItem}>
                <div className={styles.badge}>✓</div>
                <p>Consulenza specializzata nel settore fotovoltaico</p>
              </div>
              <div className={styles.badgeItem}>
                <div className={styles.badge}>✓</div>
                <p>Esperti in finanza agevolata per le imprese</p>
              </div>
              <div className={styles.badgeItem}>
                <div className={styles.badge}>✓</div>
                <p>Supporto continuo e personalizzato</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cookie Consent */}
        <CookieConsent />
      </div>
    </>
  );
}