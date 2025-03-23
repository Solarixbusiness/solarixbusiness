'use client'

import React from 'react'
import Link from 'next/link'
import styles from './HeroSection.module.css'

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

export default function HeroSection({ title, subtitle }: HeroSectionProps) {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_content}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <div className={styles.cta_container}>
          <Link href="/contatti" className={styles.cta_button}>
            Calcola il tuo ritorno
          </Link>
          <Link href="/fotovoltaico-aziende" className={styles.secondary_button}>
            Parla con un consulente
          </Link>
        </div>
      </div>
    </div>
  )
}
