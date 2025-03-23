'use client'

import React from 'react'
import styles from './GuaranteeWidget.module.css'
import OptimizedImage from '@/components/OptimizedImage/OptimizedImage'

export default function GuaranteeWidget() {
  return (
    <div className={styles.guarantee_container}>
      <div className={styles.guarantee_wrapper}>
        <h2 className={styles.guarantee_title}>Cosa ti garantiamo, oltre l'impianto</h2>
        <p className={styles.guarantee_subtitle}>
          solariXbusiness offre soluzioni fotovoltaiche di alta qualità con garanzie concrete per la tranquillità della tua azienda
        </p>
        
        <div className={styles.guarantees_grid}>
          <div className={styles.guarantee_card}>
            <div className={styles.guarantee_icon}>
              <OptimizedImage 
                src="/icons/shield.svg" 
                alt="Garanzia di Qualità" 
                width={35} 
                height={35}
                className={styles.icon}
                priority={true}
              />
            </div>
            <h3 className={styles.guarantee_card_title}>Garanzia di Qualità</h3>
            <p className={styles.guarantee_description}>
              Utilizziamo esclusivamente componenti di alta qualità certificati secondo gli standard europei più rigorosi per garantire prestazioni ottimali e durature.
            </p>
            <span className={styles.guarantee_badge}>25 anni sui pannelli</span>
          </div>
          
          <div className={styles.guarantee_card}>
            <div className={styles.guarantee_icon}>
              <OptimizedImage 
                src="/icons/tools.svg" 
                alt="Assistenza Tecnica" 
                width={35} 
                height={35}
                className={styles.icon}
                priority={true}
              />
            </div>
            <h3 className={styles.guarantee_card_title}>Assistenza Tecnica</h3>
            <p className={styles.guarantee_description}>
              Il nostro team di tecnici specializzati è sempre a disposizione per interventi rapidi e risolutivi, garantendo la continuità operativa del tuo impianto.
            </p>
            <span className={styles.guarantee_badge}>Supporto 7 giorni su 7</span>
          </div>
          
          <div className={styles.guarantee_card}>
            <div className={styles.guarantee_icon}>
              <OptimizedImage 
                src="/icons/certificate.svg" 
                alt="Certificazioni" 
                width={35} 
                height={35}
                className={styles.icon}
                priority={true}
              />
            </div>
            <h3 className={styles.guarantee_card_title}>Certificazioni</h3>
            <p className={styles.guarantee_description}>
              Tutti i nostri impianti sono conformi alle normative vigenti e certificati per l'accesso agli incentivi statali e alle detrazioni fiscali disponibili.
            </p>
            <span className={styles.guarantee_badge}>100% a norma</span>
          </div>
          
          <div className={styles.guarantee_card}>
            <div className={styles.guarantee_icon}>
              <OptimizedImage 
                src="/icons/performance.svg" 
                alt="Garanzia di Rendimento" 
                width={35} 
                height={35}
                className={styles.icon}
                priority={true}
              />
            </div>
            <h3 className={styles.guarantee_card_title}>Garanzia di Rendimento</h3>
            <p className={styles.guarantee_description}>
              Garantiamo le prestazioni del tuo impianto fotovoltaico con un monitoraggio continuo e interventi tempestivi per mantenere la massima efficienza energetica.
            </p>
            <span className={styles.guarantee_badge}>Monitoraggio continuo</span>
          </div>
        </div>
      </div>
    </div>
  )
}
