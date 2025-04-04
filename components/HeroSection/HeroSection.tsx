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

  useEffect(() => {
    const img = new Image();
    img.src = '/images/hero/hero.png';
    img.onload = () => setIsLoaded(true);

    // Fallback se l'immagine non si carica entro 3 secondi
    const timeout = setTimeout(() => {
      if (!isLoaded) setIsLoaded(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`${styles.hero} ${isLoaded ? styles.loaded : ''}`}>
      <div className={styles.hero_content}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <div className={styles.cta_container}>
          <Link href="/contatti" className={styles.cta_button}>
            Calcola il tuo ritorno
          </Link>
          <Link href="/parla-con-un-consulente" className={styles.secondary_button}>
            Parla con un consulente
          </Link>
        </div>
      </div>
    </div>
  )
}
