'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './landing.module.css';
import Script from 'next/script';
import CookieConsent from '@/components/CookieConsent/CookieConsent';
import { motion } from 'framer-motion';

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
  const [socialProofIndex, setSocialProofIndex] = useState(0);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  
  const socialProofItems = [
    { 
      image: '/landing/carosel/1c.jpg', 
      title: 'SIMEST+Transizione 5.0', 
      percentage: '-64%', 
      text: '',
      testimonial: {
        name: 'Mario L. – Alessandria',
        quote: '"Ottimizzato l\'investimento con due bandi combinati. Tempistiche rispettate."',
        sector: 'Settore: stampaggio materie plastiche'
      }
    },
    { 
      image: '/landing/carosel/2c.jpg', 
      title: 'Fondo Perduto CER+MIMIT', 
      percentage: '-64%', 
      text: '',
      testimonial: {
        name: 'Valentina P. – Castellero (AT)',
        quote: '"In un comune piccolo come il nostro, i fondi CER hanno fatto la differenza."',
        sector: 'Settore: produzione conserve alimentari'
      }
    },
    { 
      image: '/landing/carosel/3c.jpg', 
      title: 'Fondo Perduto CER + Transizione 5.0', 
      percentage: '-76%', 
      text: '',
      testimonial: {
        name: 'Luca B. – Caravino (TO)',
        quote: '"Oltre i due terzi del progetto coperti da contributi. Un\'occasione concreta."',
        sector: 'Settore: officina meccanica di precisione'
      }
    },
    { 
      image: '/landing/carosel/4c.jpg', 
      title: 'Sabatini GREEN + MIMIT', 
      percentage: '-40%', 
      text: '',
      testimonial: {
        name: 'Francesco D. – Biella',
        quote: '"Abbiamo investito in tecnologia pulita con copertura finanziaria sicura."',
        sector: 'Settore: produzione tessuti industriali'
      }
    },
    { 
      image: '/landing/carosel/5c.jpg', 
      title: 'SIMEST + Fondo Perduto CER', 
      percentage: '-46%', 
      text: '',
      testimonial: {
        name: 'Anna G. – Cavaglio d\'Agogna (NO)',
        quote: '"Non pensavamo di rientrare nei fondi. Invece l\'impianto è quasi a metà prezzo."',
        sector: 'Settore: torneria automatica'
      }
    },
    { 
      image: '/landing/carosel/6c.jpg', 
      title: 'Fondo Perduto CER + Transizione 5.0', 
      percentage: '-67%', 
      text: '',
      testimonial: {
        name: 'Marco T. – Piasco (CN)',
        quote: '"Progetto su misura e contributi gestiti da A a Z."',
        sector: 'Settore: falegnameria industriale'
      }
    },
    { 
      image: '/landing/carosel/7c.jpg', 
      title: 'SIMEST + MIMIT', 
      percentage: '-46%', 
      text: '',
      testimonial: {
        name: 'Cliente soddisfatto',
        quote: '"Soluzione personalizzata per le nostre esigenze aziendali."',
        sector: 'Settore: manifatturiero'
      }
    },
    { 
      image: '/landing/carosel/8c.jpg', 
      title: 'Transizione 5.0', 
      percentage: '-60%', 
      text: '',
      testimonial: {
        name: 'Cliente soddisfatto',
        quote: '"Abbiamo modernizzato l\'azienda con un investimento sostenibile."',
        sector: 'Settore: automazione industriale'
      }
    },
    { 
      image: '/landing/carosel/9c.jpg', 
      title: 'transizione 5.0', 
      percentage: '-67,5%', 
      text: '',
      testimonial: {
        name: 'Cliente soddisfatto',
        quote: '"Risultati superiori alle aspettative con un supporto costante."',
        sector: 'Settore: lavorazione metalli'
      }
    },
    { 
      image: '/landing/carosel/10c.jpg', 
      title: 'rating ESG Ecomate', 
      percentage: '', 
      text: '',
      testimonial: {
        name: 'Cliente soddisfatto',
        quote: '"Migliorato il nostro rating ESG con un approccio strutturato."',
        sector: 'Settore: servizi alle imprese'
      }
    }
  ];
  
  const visibleItems = 5; // Numero di elementi visibili contemporaneamente
  
  const handlePrev = () => {
    setSocialProofIndex(prev => 
      prev === 0 ? socialProofItems.length - visibleItems : prev - 1
    );
  };
  
  const handleNext = () => {
    setSocialProofIndex(prev => 
      prev === socialProofItems.length - visibleItems ? 0 : prev + 1
    );
  };

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

  // Gestione della responsività
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Imposta lo stato iniziale
    handleResize();
    
    // Aggiungi event listener per il resize
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
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
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'conversion', {
            'send_to': 'AW-16979483829/3Ga0CJ27rrQaELW5uaA_'
          });
          console.log('Conversione tracciata su Google Ads');
        }
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
        <div className={styles.container} style={{ 
          width: '100vw', 
          maxWidth: '100%', 
          margin: 0, 
          padding: 0, 
          overflow: 'hidden',
          marginTop: '-40px' // Aumentato il margine negativo per eliminare completamente lo spazio superiore
        }}>
          {/* Hero section con sfondo e overlay scuro */}
          <div className={styles.heroSection} style={{ 
            position: 'relative', 
            width: '100%', 
            height: '100vh',
            minHeight: '600px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}>
            {/* Immagine di sfondo */}
            <div style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%', 
              zIndex: 0 
            }}>
              <Image
                src="/landing/sfondohero landing.jpg"
                alt="Pannelli solari"
                fill
                style={{ 
                  objectFit: 'cover',
                  transform: 'scale(1.3)', // Ingrandisco l'immagine del 30%
                  transformOrigin: 'center' 
                }}
                priority
                quality={100}
              />
              {/* Overlay scuro al 60% per garantire contrasto AA */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                zIndex: 1
              }} />
            </div>
            
            {/* Logo e testo SOLARIXBUSINESS in alto */}
            <div style={{
              position: 'absolute',
              top: '40px',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 2,
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: isMobile ? '5px' : '15px',
              width: isMobile ? 'auto' : 'auto'
            }}>
              <Image
                src="/landing/logoqr-removebg-preview.png"
                alt="Logo SolariX"
                width={isMobile ? 25 : 80}
                height={isMobile ? 25 : 80}
                priority
                quality={100}
              />
              <h2 style={{
                margin: 0,
                fontSize: isMobile ? '0.6rem' : 'clamp(1.5rem, 4vw, 2.5rem)',
                fontWeight: 'bold',
                color: '#FF6600',
                textTransform: 'uppercase',
                textAlign: 'center'
              }}>
                SOLARIXBUSINESS
              </h2>
            </div>
            
            {/* Contenuto hero */}
            <div style={{ 
              position: 'relative', 
              zIndex: 2, 
              textAlign: 'center',
              color: 'white',
              padding: '0 20px',
              maxWidth: '1200px',
              width: '100%'
            }}>
              <h1 style={{ 
                fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
                fontWeight: 'bold',
                marginBottom: '1rem',
                lineHeight: 1.2
              }}>
                Ottieni fino al 70% di contributo pubblico per il tuo impianto oltre 100 kWp
              </h1>
              
              <p style={{ 
                fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                marginBottom: '2rem',
                maxWidth: '800px',
                margin: '0 auto 2rem',
                lineHeight: '1.8', // Aumentato lo spazio tra le righe
                whiteSpace: 'pre-line' // Mantiene gli a capo
              }}>
                {'Riduci i costi energetici:\ngestiamo bandi, installazione e collaudo.\nNessun anticipo.'}
              </p>
              
              <button 
                onClick={() => {
                  const formElement = document.getElementById('contact-form');
                  formElement?.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                  backgroundColor: '#FF6600',
                  color: 'white',
                  border: 'none',
                  padding: '1rem 2rem',
                  fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                  fontWeight: 'bold',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.2s ease'
                }}
              >
                SCOPRI I TUOI CONTRIBUTI
              </button>
              
              <p style={{ 
                fontSize: 'clamp(0.8rem, 1.2vw, 1rem)',
                marginTop: '2rem',
                opacity: 0.9
              }}>
                147 domande finanziate - ROI medio 2,8 anni
              </p>
            </div>
          </div>
          
          {/* Social Proof Section */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: isMobile ? '15px 0' : '20px 0',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              maxWidth: '1200px',
              margin: '0 auto',
              position: 'relative',
              width: '100%'
            }}>
              {/* Pulsante Precedente */}
              <button 
                onClick={handlePrev}
                style={{
                  background: '#FF6600',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  width: isMobile ? '30px' : '40px',
                  height: isMobile ? '30px' : '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 2,
                  marginRight: isMobile ? '5px' : '10px',
                  fontSize: isMobile ? '16px' : '18px'
                }}
              >
                &#8249;
              </button>
              
              {/* Container delle miniature */}
              <div style={{
                display: 'flex',
                gap: isMobile ? '5px' : '35px',
                transition: 'transform 0.3s ease',
                padding: '10px 0',
                width: isMobile ? 'calc(100% - 70px)' : 'auto',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: isMobile ? 'auto' : 'auto',
                minHeight: isMobile ? '80px' : 'auto'
              }}>
                {socialProofItems.slice(socialProofIndex, socialProofIndex + (isMobile ? 2 : visibleItems)).map((item, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: isMobile ? '156px' : '120px', 
                    textAlign: 'center',
                    position: 'relative',
                    cursor: 'pointer',
                    padding: isMobile ? '0' : '0'
                  }}
                  onMouseEnter={() => setHoveredItem(socialProofIndex + index)}
                  onMouseLeave={() => setHoveredItem(null)}
                  >
                    {/* Testimonial overlay */}
                    {hoveredItem === socialProofIndex + index && (
                      <div 
                        style={{
                          position: 'absolute',
                          top: isMobile ? '-5px' : '-20px',
                          left: isMobile ? '-20px' : '-50px',
                          width: isMobile ? '160px' : '220px',
                          minHeight: isMobile ? '100px' : '180px',
                          backgroundColor: 'rgba(255, 102, 0, 0.95)',
                          borderRadius: '8px',
                          padding: isMobile ? '6px' : '15px',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                          zIndex: 10,
                          color: 'white',
                          fontSize: isMobile ? '7px' : '12px',
                          fontStyle: 'italic',
                          textAlign: 'center',
                          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        <p style={{ 
                          margin: '0 0 4px', 
                          fontWeight: 'bold', 
                          fontSize: isMobile ? '8px' : '13px' 
                        }}>
                          {item.testimonial?.name}
                        </p>
                        <p style={{ 
                          margin: '0 0 4px',
                          lineHeight: isMobile ? '1.1' : '1.4'
                        }}>
                          {item.testimonial?.quote}
                        </p>
                        <p style={{ 
                          margin: 0, 
                          fontSize: isMobile ? '6px' : '11px',
                          fontWeight: 'bold'
                        }}>
                          {item.testimonial?.sector}
                        </p>
                      </div>
                    )}
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={isMobile ? 65 : 128} 
                      height={isMobile ? 65 : 128} 
                      style={{ 
                        borderRadius: '8px',
                        objectFit: 'cover'
                      }}
                    />
                    <div style={{
                      height: 'auto',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: '5px'
                    }}>
                      <p style={{ 
                        fontSize: '7px',
                        margin: '0 0 2px',
                        color: '#333',
                        lineHeight: '1',
                        textAlign: 'center',
                        maxWidth: '100%'
                      }}>
                        {item.title}
                      </p>
                      {item.percentage && (
                        <p style={{ 
                          fontSize: '12px',
                          fontWeight: 'bold',
                          margin: 0,
                          color: '#FF6600',
                          lineHeight: '1'
                        }}>
                          {item.percentage}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Pulsante Successivo */}
              <button 
                onClick={handleNext}
                style={{
                  background: '#FF6600',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  width: isMobile ? '30px' : '40px',
                  height: isMobile ? '30px' : '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 2,
                  marginLeft: isMobile ? '5px' : '10px',
                  fontSize: isMobile ? '16px' : '18px'
                }}
              >
                &#8250;
              </button>
            </div>
          </div>

          <div className={styles.contentSection} style={{ position: 'relative', zIndex: 2, backgroundColor: 'white', padding: '3rem 1rem' }}>
            <div id="contact-form" className={styles.formContainer} style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h2 style={{ 
                fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', 
                fontWeight: 'bold',
                marginBottom: '1rem',
                textAlign: 'center',
                color: '#333'
              }}>
                Richiedi una consulenza gratuita
              </h2>
              
              <p style={{ 
                fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                marginBottom: '2rem',
                textAlign: 'center',
                color: '#555',
                maxWidth: '600px',
                margin: '0 auto 2rem'
              }}>
                Compila il form per scoprire gli incentivi disponibili per la tua azienda
              </p>
              
              {!submitted ? (
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        placeholder="Nome e Cognome *"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        aria-required="true"
                        aria-label="Nome e Cognome"
                      />
                    </div>
                    
                    <div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email *"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        aria-required="true"
                        aria-label="Email"
                      />
                    </div>
                    
                    <div>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        placeholder="Telefono *"
                        value={formData.telefono}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        aria-required="true"
                        aria-label="Telefono"
                      />
                    </div>
                    
                    <div>
                      <input
                        type="text"
                        id="azienda"
                        name="azienda"
                        placeholder="Nome Azienda *"
                        value={formData.azienda}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        aria-required="true"
                        aria-label="Nome Azienda"
                      />
                    </div>
                    
                    <div>
                      <textarea
                        id="messaggio"
                        name="messaggio"
                        placeholder="Messaggio (opzionale)"
                        value={formData.messaggio}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        rows={4}
                        aria-label="Messaggio (opzionale)"
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
                            className="w-4 h-4 border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
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
                      style={{
                        backgroundColor: '#FF6600',
                        color: 'white',
                        border: 'none',
                        padding: '1rem 2rem',
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        width: '100%',
                        marginTop: '1rem',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        transition: 'all 0.2s ease'
                      }}
                      disabled={isSubmitting}
                      aria-label={isSubmitting ? 'Invio in corso...' : 'Invia richiesta'}
                    >
                      {isSubmitting ? 'Invio in corso...' : 'Richiedi Informazioni'}
                    </button>
                  </div>
                </form>
              ) : (
                <div className={styles.successMessage} style={{
                  textAlign: 'center',
                  padding: '2rem',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#2c3e50' }}>Grazie per averci contattato!</h3>
                  <p style={{ fontSize: '1.1rem', color: '#34495e' }}>
                    La tua richiesta è stata inviata con successo. Ti contatteremo presto per fornirti tutte le informazioni sui contributi disponibili per la tua azienda.
                  </p>
                </div>
              )}
            </div>

            <div style={{ 
              maxWidth: '800px', 
              margin: '3rem auto 0',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem'
            }}>
              <div style={{
                backgroundColor: '#f8f9fa',
                padding: '1.5rem',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div style={{
                  backgroundColor: '#FF6600',
                  color: 'white',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '1.2rem'
                }}>✓</div>
                <p style={{ margin: 0, color: '#2c3e50', fontSize: '0.95rem' }}>Consulenza specializzata nel settore fotovoltaico</p>
              </div>
              
              <div style={{
                backgroundColor: '#f8f9fa',
                padding: '1.5rem',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div style={{
                  backgroundColor: '#FF6600',
                  color: 'white',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '1.2rem'
                }}>✓</div>
                <p style={{ margin: 0, color: '#2c3e50', fontSize: '0.95rem' }}>Esperti in finanza agevolata per le imprese</p>
              </div>
              
              <div style={{
                backgroundColor: '#f8f9fa',
                padding: '1.5rem',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div style={{
                  backgroundColor: '#FF6600',
                  color: 'white',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '1.2rem'
                }}>✓</div>
                <p style={{ margin: 0, color: '#2c3e50', fontSize: '0.95rem' }}>Supporto continuo e personalizzato</p>
              </div>
            </div>
          </div>

          {/* Cookie Consent */}
          <CookieConsent />
        </div>
      </div>
    </>
  );
}