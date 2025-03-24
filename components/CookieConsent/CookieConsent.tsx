'use client';

// Tipizzazione per dataLayer
interface WindowWithDataLayer {
  dataLayer: any[];
}

// Estendiamo l'oggetto Window globale
declare global {
  interface Window extends WindowWithDataLayer {
    dataLayer: any[];
  }
}

import { useState, useEffect } from 'react';
import styles from './CookieConsent.module.css';

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Sempre attivo
    analytics: false,
    marketing: false,
    preferences: false
  });
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    // Verifica se siamo in ambiente browser
    if (typeof window === 'undefined' || !localStorage) return;
    
    try {
      // Controlla se l'utente ha già dato il consenso
      const consent = localStorage.getItem('cookie-consent');
      if (!consent) {
        setShowConsent(true);
      } else {
        try {
          setPreferences(JSON.parse(consent));
        } catch (e) {
          // Se c'è un errore nel parsing, mostra di nuovo il consenso
          console.error('Errore nel parsing del consenso cookie:', e);
          setShowConsent(true);
        }
      }
    } catch (error) {
      console.error('Errore durante il controllo del consenso cookie:', error);
    }
  }, []);

  const handleAcceptAll = () => {
    if (typeof window === 'undefined' || !localStorage) return;
    
    try {
      const allAccepted = {
        necessary: true,
        analytics: true,
        marketing: true,
        preferences: true
      };
      
      localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
      setPreferences(allAccepted);
      setShowConsent(false);
      
      // Attiva gli script di analytics se consentito
      if (allAccepted.analytics) {
        enableAnalytics();
      }
    } catch (error) {
      console.error('Errore durante l\'accettazione di tutti i cookie:', error);
    }
  };

  const handleAcceptNecessary = () => {
    if (typeof window === 'undefined' || !localStorage) return;
    
    try {
      const necessaryOnly = {
        necessary: true,
        analytics: false,
        marketing: false,
        preferences: false
      };
      
      localStorage.setItem('cookie-consent', JSON.stringify(necessaryOnly));
      setPreferences(necessaryOnly);
      setShowConsent(false);
    } catch (error) {
      console.error('Errore durante l\'accettazione dei cookie necessari:', error);
    }
  };

  const handleSavePreferences = () => {
    if (typeof window === 'undefined' || !localStorage) return;
    
    try {
      localStorage.setItem('cookie-consent', JSON.stringify(preferences));
      setShowConsent(false);
      setShowPreferences(false);
      
      // Attiva gli script di analytics se consentito
      if (preferences.analytics) {
        enableAnalytics();
      }
    } catch (error) {
      console.error('Errore durante il salvataggio delle preferenze cookie:', error);
    }
  };

  const handlePreferenceChange = (key: keyof typeof preferences) => {
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const enableAnalytics = () => {
    // Verifica se siamo in ambiente browser
    if (typeof window === 'undefined' || !document) return;
    
    try {
      // Qui possiamo inizializzare Google Analytics o altri strumenti di tracciamento
      if (process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS) {
        const existingScript = document.getElementById('google-analytics');
        if (existingScript) {
          // Lo script esiste già, non è necessario aggiungerlo di nuovo
          return;
        }
        
        const script = document.createElement('script');
        script.id = 'google-analytics';
        script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`;
        script.async = true;
        
        // Verifica che document.head esista prima di appendere lo script
        if (document.head) {
          document.head.appendChild(script);
          
          // Inizializza dataLayer se non esiste
          window.dataLayer = window.dataLayer || [];
          
          const gtag = (...args: any[]) => {
            window.dataLayer.push(args);
          };
          
          // Inizializza Google Analytics
          gtag('js', new Date());
          gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
            page_path: window.location.pathname,
            cookie_flags: 'SameSite=None;Secure',
          });
          
          // Aggiungi gtag all'oggetto window
          (window as any).gtag = gtag;
        }
      }
    } catch (error) {
      console.error('Errore durante l\'abilitazione di Google Analytics:', error);
    }
  };

  if (!showConsent) return null;

  return (
    <div className={styles.cookieConsent} role="dialog" aria-labelledby="cookie-title">
      <div className={styles.cookieContent}>
        <h2 id="cookie-title" className={styles.cookieTitle}>Informativa sui Cookie</h2>
        
        {!showPreferences ? (
          <>
            <p>
              Utilizziamo i cookie per migliorare la tua esperienza sul nostro sito. 
              I cookie necessari sono essenziali per il funzionamento del sito. 
              Puoi scegliere di accettare anche i cookie di analytics, marketing e preferenze.
            </p>
            
            <div className={styles.cookieButtons}>
              <button 
                onClick={() => setShowPreferences(true)}
                className={styles.preferencesButton}
                aria-label="Personalizza preferenze cookie"
              >
                Personalizza
              </button>
              <button 
                onClick={handleAcceptNecessary}
                className={styles.necessaryButton}
                aria-label="Accetta solo cookie necessari"
              >
                Solo necessari
              </button>
              <button 
                onClick={handleAcceptAll}
                className={styles.acceptButton}
                aria-label="Accetta tutti i cookie"
              >
                Accetta tutti
              </button>
            </div>
          </>
        ) : (
          <>
            <div className={styles.preferences}>
              <div className={styles.preferenceItem}>
                <label className={styles.switch}>
                  <input 
                    type="checkbox" 
                    checked={preferences.necessary} 
                    disabled 
                    aria-label="Cookie necessari (sempre attivi)"
                  />
                  <span className={styles.slider}></span>
                </label>
                <div>
                  <h3>Cookie necessari</h3>
                  <p>Essenziali per il funzionamento del sito. Non possono essere disattivati.</p>
                </div>
              </div>
              
              <div className={styles.preferenceItem}>
                <label className={styles.switch}>
                  <input 
                    type="checkbox" 
                    checked={preferences.analytics} 
                    onChange={() => handlePreferenceChange('analytics')}
                    aria-label="Cookie di analytics"
                  />
                  <span className={styles.slider}></span>
                </label>
                <div>
                  <h3>Cookie di analytics</h3>
                  <p>Ci aiutano a capire come utilizzi il sito per migliorare la tua esperienza.</p>
                </div>
              </div>
              
              <div className={styles.preferenceItem}>
                <label className={styles.switch}>
                  <input 
                    type="checkbox" 
                    checked={preferences.marketing} 
                    onChange={() => handlePreferenceChange('marketing')}
                    aria-label="Cookie di marketing"
                  />
                  <span className={styles.slider}></span>
                </label>
                <div>
                  <h3>Cookie di marketing</h3>
                  <p>Utilizzati per mostrarti annunci pertinenti in base ai tuoi interessi.</p>
                </div>
              </div>
              
              <div className={styles.preferenceItem}>
                <label className={styles.switch}>
                  <input 
                    type="checkbox" 
                    checked={preferences.preferences} 
                    onChange={() => handlePreferenceChange('preferences')}
                    aria-label="Cookie per le preferenze"
                  />
                  <span className={styles.slider}></span>
                </label>
                <div>
                  <h3>Cookie per le preferenze</h3>
                  <p>Permettono al sito di ricordare le tue preferenze e personalizzazioni.</p>
                </div>
              </div>
            </div>
            
            <div className={styles.cookieButtons}>
              <button 
                onClick={() => setShowPreferences(false)}
                className={styles.backButton}
                aria-label="Torna al banner principale"
              >
                Indietro
              </button>
              <button 
                onClick={handleSavePreferences}
                className={styles.saveButton}
                aria-label="Salva preferenze cookie"
              >
                Salva preferenze
              </button>
            </div>
          </>
        )}
        
        <p className={styles.cookieInfo}>
          Per maggiori informazioni, consulta la nostra <a href="/privacy-policy">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}
