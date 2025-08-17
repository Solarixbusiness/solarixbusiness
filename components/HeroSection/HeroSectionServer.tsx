import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './HeroSection.module.css'

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

export default function HeroSectionServer({ title, subtitle }: HeroSectionProps) {
  return (
    <div className={`${styles.hero} ${styles.loaded}`}>
      <Image
        src="/images/hero/heroweb.webp"
        alt="Pannelli solari per aziende - SolariX Business"
        fill
        priority
        sizes="100vw"
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
          zIndex: -1
        }}
        quality={60}
      />
      <div className={styles.hero_overlay}></div>
      <div className={styles.hero_content}>
        <h1 className={`${styles.title} ${styles.title_animate}`}>{title.toUpperCase()}</h1>
        <h2 className={`${styles.subtitle} ${styles.subtitle_animate}`}>{subtitle}</h2>
        <div className={styles.cta_container}>
          <Link href="/parla-con-un-consulente" className={`${styles.main_cta_button} ${styles.cta_animate} ${styles.cta_button_animate}`}>
            CONTATTACI ORA!
          </Link>
        </div>
      </div>
    </div>
  )
}
