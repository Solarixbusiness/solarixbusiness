'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
    // Rimuovo il preload manuale, Next.js Image lo gestisce automaticamente
    setIsLoaded(true);
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
      <Image
        src="/images/hero/hero.png"
        alt="Pannelli solari per aziende - SolariX Business"
        fill
        priority
        sizes="100vw"
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
          zIndex: -1
        }}
        quality={85}
      />
      <div className={styles.hero_overlay}></div>
      <div className={styles.hero_content}>
        <h1 className={`${styles.title} ${animationsStarted ? styles.title_animate : ''}`}>{title.toUpperCase()}</h1>
        <h2 className={`${styles.subtitle} ${animationsStarted ? styles.subtitle_animate : ''}`}>{subtitle}</h2>
        <div className={styles.cta_container}>
          <Link href="/parla-con-un-consulente" className={`${styles.main_cta_button} ${animationsStarted ? styles.cta_animate : ''} ${styles.cta_button_animate}`}>
            CONTATTACI ORA!
          </Link>
        </div>
      </div>
    </div>
  )
}
