'use client';

import { useState, useEffect } from 'react';
import styles from './OfflineDetector.module.css';

export default function OfflineDetector() {
  const [isOffline, setIsOffline] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Funzione per gestire il cambiamento dello stato della connessione
    const handleOnlineStatusChange = () => {
      const offline = !navigator.onLine;
      setIsOffline(offline);
      
      if (offline) {
        setShowBanner(true);
      } else {
        // Se torniamo online, mostriamo un messaggio di conferma per qualche secondo
        setShowBanner(true);
        // Usa scheduler.yield() per non bloccare il thread principale
        const hideBanner = async () => {
          // Yield per permettere altre operazioni
          if (typeof window !== 'undefined' && 'scheduler' in window && 
              typeof (window as any).scheduler?.yield === 'function') {
            await (window as any).scheduler.yield();
          }
          setShowBanner(false);
        };
        
        setTimeout(hideBanner, 3000);
      }
    };

    // Verifica lo stato iniziale
    setIsOffline(!navigator.onLine);
    if (!navigator.onLine) {
      setShowBanner(true);
    }

    // Aggiungi gli event listener
    window.addEventListener('online', handleOnlineStatusChange);
    window.addEventListener('offline', handleOnlineStatusChange);

    // Rimuovi gli event listener quando il componente viene smontato
    return () => {
      window.removeEventListener('online', handleOnlineStatusChange);
      window.removeEventListener('offline', handleOnlineStatusChange);
    };
  }, []);

  // Se siamo online e non dobbiamo mostrare il banner, non renderizziamo nulla
  if (!isOffline && !showBanner) {
    return null;
  }

  return (
    <div 
      className={`${styles.banner} ${isOffline ? styles.offline : styles.online}`}
      role="alert"
      aria-live="assertive"
    >
      <div className={styles.content}>
        <div className={styles.icon}>
          {isOffline ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="1" y1="1" x2="23" y2="23"></line>
              <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path>
              <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path>
              <path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path>
              <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path>
              <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
              <line x1="12" y1="20" x2="12.01" y2="20"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
              <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
              <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
              <line x1="12" y1="20" x2="12.01" y2="20"></line>
            </svg>
          )}
        </div>
        <div className={styles.message}>
          {isOffline ? (
            <>
              <strong>Sei offline.</strong> Alcune funzionalità potrebbero non essere disponibili.
            </>
          ) : (
            <>
              <strong>Sei tornato online!</strong> Tutte le funzionalità sono nuovamente disponibili.
            </>
          )}
        </div>
        <button 
          className={styles.closeButton}
          onClick={() => setShowBanner(false)}
          aria-label="Chiudi notifica"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  );
}
