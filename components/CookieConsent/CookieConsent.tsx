'use client';

// Tipizzazione per dataLayer
interface WindowWithDataLayer {
  dataLayer: any[];
}

// Estendiamo l'oggetto Window globale
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (command: string, action: string, params?: any) => void;
    addConsentListener: (callback: (consent: any) => void) => void;
    consentListeners: ((consent: any) => void)[];
    __tcfapi?: (command: string, version: number, callback: (response: any) => void, parameter?: any) => void;
  }
}

import { useState, useEffect } from 'react';
import styles from './CookieConsent.module.css';

// Interfaccia per le preferenze di consenso
interface ConsentPreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
  // Aggiungiamo campi per IAB TCF
  iabTcfAccepted?: boolean;
  // Aggiungiamo campi per CCPA
  ccpaOptOut?: boolean;
}

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    necessary: true, // Sempre attivo
    analytics: false,
    marketing: false,
    preferences: false,
    iabTcfAccepted: false,
    ccpaOptOut: false
  });
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    try {
      // Controlla se il consenso è già stato dato
      if (typeof window !== 'undefined' && localStorage) {
        const storedConsent = localStorage.getItem('cookie-consent');
        
        if (storedConsent) {
          try {
            const parsedConsent = JSON.parse(storedConsent);
            setPreferences(parsedConsent);
            setShowConsent(false);
            
            // Attiva gli script di analytics se consentito
            if (parsedConsent.analytics) {
              enableAnalytics();
            }
          } catch (error) {
            console.error('Errore durante il parsing del consenso memorizzato:', error);
            setShowConsent(true);
          }
        } else {
          setShowConsent(true);
        }
        
        // Aggiungi la funzione addConsentListener all'oggetto window
        // Questa funzione verrà chiamata dal modello GTM per ricevere gli aggiornamenti del consenso
        window.addConsentListener = function(callback) {
          // Memorizza il callback per chiamarlo quando cambia il consenso
          window.consentListeners = window.consentListeners || [];
          window.consentListeners.push(callback);
          
          // Se abbiamo già un consenso memorizzato, chiama immediatamente il callback
          if (storedConsent) {
            try {
              const parsedConsent = JSON.parse(storedConsent);
              callback(parsedConsent);
            } catch (error) {
              console.error('Errore durante il callback del consenso:', error);
            }
          }
        };
      }
    } catch (error) {
      console.error('Errore durante il controllo del consenso:', error);
    }
  }, []);

  const handleAcceptAll = () => {
    if (typeof window === 'undefined' || !localStorage) return;
    
    try {
      const allAccepted: ConsentPreferences = {
        necessary: true,
        analytics: true,
        marketing: true,
        preferences: true,
        iabTcfAccepted: true,
        ccpaOptOut: false
      };
      
      localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
      setPreferences(allAccepted);
      setShowConsent(false);
      
      // Aggiorna il consenso per Google
      if (typeof window.gtag === 'function') {
        window.gtag('consent', 'update', {
          'ad_storage': 'granted',
          'analytics_storage': 'granted',
          'ad_user_data': 'granted',
          'ad_personalization': 'granted'
        });
        console.log('Consenso aggiornato: tutti i cookie accettati');
      }
      
      // Emetti un evento custom per segnalare che i cookie sono stati accettati
      const cookieEvent = new CustomEvent('cookieConsentAccepted');
      window.dispatchEvent(cookieEvent);
      
      // Attiva gli script di analytics se consentito
      if (allAccepted.analytics) {
        enableAnalytics();
      }
      
      // Chiama i callback di aggiornamento del consenso
      if (window.consentListeners) {
        window.consentListeners.forEach(callback => callback(allAccepted));
      }
    } catch (error) {
      console.error('Errore durante l\'accettazione di tutti i cookie:', error);
    }
  };

  const handleAcceptNecessary = () => {
    if (typeof window === 'undefined' || !localStorage) return;
    
    try {
      const necessaryOnly: ConsentPreferences = {
        necessary: true,
        analytics: false,
        marketing: false,
        preferences: false,
        iabTcfAccepted: false,
        ccpaOptOut: true
      };
      
      localStorage.setItem('cookie-consent', JSON.stringify(necessaryOnly));
      setPreferences(necessaryOnly);
      setShowConsent(false);
      
      // Aggiorna il consenso per Google - mantieni tutto denied
      if (typeof window.gtag === 'function') {
        window.gtag('consent', 'update', {
          'ad_storage': 'denied',
          'analytics_storage': 'denied',
          'ad_user_data': 'denied',
          'ad_personalization': 'denied'
        });
        console.log('Consenso aggiornato: solo cookie necessari');
      }
      
      // Emetti un evento custom per segnalare che i cookie sono stati accettati
      const cookieEvent = new CustomEvent('cookieConsentAccepted');
      window.dispatchEvent(cookieEvent);
      
      // Chiama i callback di aggiornamento del consenso
      if (window.consentListeners) {
        window.consentListeners.forEach(callback => callback(necessaryOnly));
      }
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
      
      // Aggiorna il consenso per Google in base alle preferenze selezionate
      if (typeof window.gtag === 'function') {
        window.gtag('consent', 'update', {
          // analytics_storage controlla i cookie di analisi
          'analytics_storage': preferences.analytics ? 'granted' : 'denied',
          // ad_storage controlla i cookie pubblicitari
          'ad_storage': preferences.marketing ? 'granted' : 'denied',
          // ad_user_data e ad_personalization per la personalizzazione degli annunci
          'ad_user_data': preferences.marketing ? 'granted' : 'denied',
          'ad_personalization': preferences.marketing ? 'granted' : 'denied'
        });
        console.log('Consenso aggiornato in base alle preferenze utente');
      }
      
      // Emetti un evento custom per segnalare che i cookie sono stati accettati
      const cookieEvent = new CustomEvent('cookieConsentAccepted');
      window.dispatchEvent(cookieEvent);
      
      // Attiva gli script di analytics se consentito
      if (preferences.analytics) {
        enableAnalytics();
      }
      
      // Chiama i callback di aggiornamento del consenso
      if (window.consentListeners) {
        window.consentListeners.forEach(callback => callback(preferences));
      }
    } catch (error) {
      console.error('Errore durante il salvataggio delle preferenze cookie:', error);
    }
  };

  const handlePreferenceChange = (key: keyof ConsentPreferences) => {
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
          
          // Inizializza Google Analytics
          window.gtag('consent', 'default', {
            'ad_storage': 'denied',
            'analytics_storage': 'denied',
            'wait_for_update': 1000,
          });
          window.gtag('js', new Date() as any);
          window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
            page_path: window.location.pathname,
            cookie_flags: 'SameSite=None;Secure;Partitioned',
            cookie_domain: 'auto',
            cookie_update: false,
            cookie_prefix: 'ga_',
            cookie_expires: 2592000, // 30 giorni
            anonymize_ip: true,
          });
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
              <br />
              <a href="/privacy-policy" className={styles.privacyLink}>
                Leggi la nostra Privacy Policy
              </a>
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
              
              <div className={styles.preferenceItem}>
                <label className={styles.switch}>
                  <input 
                    type="checkbox" 
                    checked={preferences.iabTcfAccepted} 
                    onChange={() => handlePreferenceChange('iabTcfAccepted')}
                    aria-label="Accetta IAB TCF"
                  />
                  <span className={styles.slider}></span>
                </label>
                <div>
                  <h3>IAB TCF</h3>
                  <p>Accetta le condizioni di IAB TCF per la gestione dei cookie.</p>
                </div>
              </div>
              
              <div className={styles.preferenceItem}>
                <label className={styles.switch}>
                  <input 
                    type="checkbox" 
                    checked={!preferences.ccpaOptOut} 
                    onChange={() => handlePreferenceChange('ccpaOptOut')}
                    aria-label="Accetta CCPA"
                  />
                  <span className={styles.slider}></span>
                </label>
                <div>
                  <h3>CCPA</h3>
                  <p>Accetta le condizioni di CCPA per la gestione dei dati personali.</p>
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
