'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './HeroSection.module.css'

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

export default function HeroSection({ title, subtitle }: HeroSectionProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [animationsStarted, setAnimationsStarted] = useState(false);
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  useEffect(() => {
    // Verifica se i cookie sono già stati accettati
    if (typeof window !== 'undefined' && localStorage) {
      const cookieConsent = localStorage.getItem('cookie-consent');
      if (cookieConsent) {
        setCookiesAccepted(true);
      }
    }

    // Ascolta l'evento di accettazione dei cookie
    const handleCookieAccepted = () => {
      setCookiesAccepted(true);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('cookieConsentAccepted', handleCookieAccepted);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('cookieConsentAccepted', handleCookieAccepted);
      }
    };
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = '/images/hero/hero.png';
    img.onload = () => {
      setIsLoaded(true);
    };

    // Fallback se l'immagine non si carica entro 3 secondi
    const timeout = setTimeout(() => {
      if (!isLoaded) {
        setIsLoaded(true);
      }
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  // Controlla quando avviare le animazioni
  useEffect(() => {
    if (isLoaded && cookiesAccepted) {
      // Se l'immagine è caricata e i cookie sono stati accettati (o erano già accettati)
      // avvia le animazioni con un breve ritardo
      const animationTimeout = setTimeout(() => {
        setAnimationsStarted(true);
      }, 200);
      
      return () => clearTimeout(animationTimeout);
    }
  }, [isLoaded, cookiesAccepted]);

  return (
    <div className={`${styles.hero} ${isLoaded ? styles.loaded : ''}`}>
      <div className={styles.hero_content}>
        <h1 className={`${styles.title} ${animationsStarted ? styles.title_animate : ''}`}>{title}</h1>
        <h2 className={`${styles.subtitle} ${animationsStarted ? styles.subtitle_animate : ''}`}>{subtitle}</h2>
        <div className={styles.cta_container}>
          <Link href="/parla-con-un-consulente" className={`${styles.main_cta_button} ${animationsStarted ? styles.cta_animate : ''}`}>
            CONTATTACI ORA!
          </Link>
        </div>
      </div>
    </div>
  )
}
