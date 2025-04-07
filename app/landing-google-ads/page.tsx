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
        // Google Ads Conversion Tracking
        if (typeof window.gtag !== 'undefined') {
          window.gtag('event', 'conversion', {
            'send_to': 'AW-16979483829/3Ga0CJ27rrQaELW5uaA_',
            'value': 1.0,
            'currency': 'EUR'
          });
        }
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
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-11466621392"
        strategy="afterInteractive"
      />
      <Script id="google-analytics-ads" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-11466621392');
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
          <div className={styles.brandHeader}>
            <h1>SOLARIXBUSINESS</h1>
          </div>
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
              <h1>Fotovoltaico B2B: tecnologie avanzate e incentivi cumulabili</h1>
              <h2>Impianti all'avanguardia con consulenza fiscale e finanziamento agevolato</h2>
              
              {/* NUOVA SEZIONE: Soluzioni Finanziarie */}
              <div className={styles.incentivesSection}>
                <h3 className={styles.sectionTitle}>Soluzioni Finanziarie</h3>
                <p className={styles.sectionSubtitle}>Opzioni flessibili per ottimizzare l'investimento e accelerare il ROI</p>
                <div className={styles.incentivesGrid}>
                  <div className={styles.incentiveCard}>
                    <h4>Leasing & Noleggio</h4>
                    <div className={styles.incentiveValue}>Zero Anticipo</div>
                    <p>Soluzioni finanziarie con canone che si ripaga con il risparmio energetico</p>
                  </div>
                  
                  <div className={styles.incentiveCard}>
                    <h4>PPA</h4>
                    <div className={styles.incentiveValue}>Power Purchase Agreement</div>
                    <p>Acquisto energia a prezzo fisso con stabilità dei costi energetici</p>
                  </div>
                  
                  <div className={styles.incentiveCard}>
                    <h4>Finanziamenti Agevolati</h4>
                    <div className={styles.incentiveValue}>Tassi ridotti</div>
                    <p>Accesso a linee di credito dedicate per investimenti green</p>
                  </div>
                  
                  <div className={styles.incentiveCard}>
                    <h4>Reportistica ESG</h4>
                    <div className={styles.incentiveValue}>CSRD/SFDR Compliance</div>
                    <p>Calcolo carbon footprint (Scope 1-2-3) e strategie di decarbonizzazione</p>
                  </div>
                </div>
              </div>
              
              {/* NUOVA SEZIONE: Incentivi e Consulenza */}
              <div className={styles.incentivesSection}>
                <h3 className={styles.sectionTitle}>Incentivi Cumulabili e Consulenza Specializzata</h3>
                <p className={styles.sectionSubtitle}>Massimizzazione degli incentivi e supporto completo per l'intero progetto</p>
                <div className={styles.incentivesGrid}>
                  <div className={styles.incentiveCard}>
                    <h4>Transizione 5.0</h4>
                    <div className={styles.incentiveValue}>Fino al 63%</div>
                    <p>Credito d'imposta per investimenti in tecnologie sostenibili</p>
                  </div>
                  
                  <div className={styles.incentiveCard}>
                    <h4>SIMEST 4/394</h4>
                    <div className={styles.incentiveValue}>Tasso agevolato</div>
                    <p>Finanziamenti per progetti green e internazionalizzazione</p>
                  </div>
                  
                  <div className={styles.incentiveCard}>
                    <h4>Sabatini Green</h4>
                    <div className={styles.incentiveValue}>Contributo in conto interessi</div>
                    <p>Finanziamenti agevolati per investimenti in tecnologie sostenibili</p>
                  </div>
                  
                  <div className={styles.incentiveCard}>
                    <h4>CER</h4>
                    <div className={styles.incentiveValue}>Incentivi dedicati</div>
                    <p>Comunità Energetiche Rinnovabili con analisi di fattibilità e ottimizzazione</p>
                  </div>
                </div>
              </div>
              
              {/* NUOVA SEZIONE: Sostenibilità e Carbon Credits */}
              <div className={styles.benefitsSection}>
                <h3 className={styles.sectionTitle}>Sostenibilità e Carbon Credits</h3>
                <div className={styles.benefitsGrid}>
                  <div className={styles.benefitCard}>
                    <div className={styles.benefitIcon}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                        <path d="M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83"></path>
                      </svg>
                    </div>
                    <h4>Certificazione impianto</h4>
                    <p>Implementazione meccanismo UNFCCC per certificazione e commercializzazione carbon credits</p>
                  </div>
                  
                  <div className={styles.benefitCard}>
                    <div className={styles.benefitIcon}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="1" y="3" width="15" height="13"></rect>
                        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                        <circle cx="5.5" cy="18.5" r="2.5"></circle>
                        <circle cx="18.5" cy="18.5" r="2.5"></circle>
                      </svg>
                    </div>
                    <h4>Blockchain</h4>
                    <p>Soluzioni blockchain per tracciabilità e trasparenza delle riduzioni di emissioni</p>
                  </div>
                  
                  <div className={styles.benefitCard}>
                    <div className={styles.benefitIcon}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                    <h4>Carbon Insetting</h4>
                    <p>Strategie di carbon insetting per integrare riduzione emissioni nella catena del valore</p>
                  </div>
                  
                  <div className={styles.benefitCard}>
                    <div className={styles.benefitIcon}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <h4>EU Taxonomy & CBAM</h4>
                    <p>Supporto per allineamento con EU Taxonomy e Carbon Border Adjustment Mechanism</p>
                  </div>
                </div>
              </div>
              
              {/* NUOVA SEZIONE: Testimonianza Cliente */}
            </div>
          </div>
        </div>
        
        {/* NUOVA SEZIONE: Testimonianza Cliente */}
        <div className={styles.testimonialSection}>
          <h3 className={styles.sectionTitle}>La storia di successo di Tornerie Piemontesi</h3>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialContent}>
              <div className={styles.testimonialQuote}>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="#FF6600" opacity="0.2">
                  <path d="M10 11l-2.8-2.8a4.005 4.005 0 0 1 5.6-5.7l.2.1L18 7.6a4.025 4.025 0 0 1-5.6 5.7l-.2-.1L10 11zm-3.5 3c.4.3.8.8 1.2 1.2l4-4c.4-.4.9-.8 1.3-1.2L9 6c-.4.4-.9.8-1.3 1.2l-4 4c.5.4.9.8 1.3 1.3zM21 12v10H3V2h10v2H5v16h14v-8h2z"/>
                </svg>
              </div>
              <div className={styles.testimonialTextContainer}>
                <p className={styles.testimonialText}>
                  Quest'anno abbiamo installato un impianto fotovoltaico da 300kW con SolariX Business, usufruendo del credito d'imposta al 63% della Transizione 5.0. Ma il vero valore è emerso nella consulenza continuativa. Il team di SolariX ci ha permesso di accedere a incentivi che non conoscevamo: abbiamo ottenuto fondi SIMEST per l'internazionalizzazione green. A fine anno avremo completamente azzerato i costi energetici con un piccolo guadagno extra sulle eccedenze. Inoltre, ci hanno guidato nella valorizzazione dei carbon credits generati, aprendo un flusso di ricavi completamente inaspettato. In pochi mesi, oltre al risparmio energetico immediato, abbiamo già recuperato oltre 220.000€ tra incentivi e monetizzazione ambientale, senza contare i futuri ricavi dai crediti carbonici.
                </p>
              </div>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorImage}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FF6600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className={styles.authorInfo}>
                  <h4>Franco S.</h4>
                  <p>Direttore Operativo, Tornerie Piemontesi</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contenitore principale con z-index elevato */}
        <div className={styles.container} style={{ marginTop: '-20px' }}>
          <div className={styles.contentSection} style={{ position: 'relative', zIndex: 2 }}>
            <div className={styles.formContainer}>
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
                              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"></path>
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