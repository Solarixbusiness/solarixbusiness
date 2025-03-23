'use client'

import React from 'react'
import Image from 'next/image'
import styles from './SolarBenefitsWidget.module.css'

export default function SolarBenefitsWidget() {
  return (
    <div className={styles.benefits_container}>
      <div className={styles.benefits_wrapper}>
        <h2 className={styles.benefits_title}>Vantaggi del Fotovoltaico per la tua Azienda</h2>
        
        <div className={styles.benefits_grid}>
          <div className={styles.benefit_card}>
            <div className={styles.benefit_icon}>
              <Image 
                src="/icons/sun.svg" 
                alt="Risparmio Energetico" 
                width={30} 
                height={30}
                className={styles.icon}
              />
            </div>
            <h3 className={styles.benefit_title}>Risparmio Energetico</h3>
            <p className={styles.benefit_description}>
              Riduci drasticamente i costi energetici della tua azienda con l'energia autoprodotta dal tuo impianto fotovoltaico.
            </p>
          </div>
          
          <div className={styles.benefit_card}>
            <div className={styles.benefit_icon}>
              <Image 
                src="/icons/money-saving.svg" 
                alt="Incentivi Fiscali" 
                width={30} 
                height={30}
                className={styles.icon}
              />
            </div>
            <h3 className={styles.benefit_title}>Incentivi Fiscali</h3>
            <p className={styles.benefit_description}>
              Approfitta degli incentivi statali e delle detrazioni fiscali disponibili per le imprese che investono in energia rinnovabile.
            </p>
          </div>
          
          <div className={styles.benefit_card}>
            <div className={styles.benefit_icon}>
              <Image 
                src="/icons/leaf.svg" 
                alt="Sostenibilità Ambientale" 
                width={30} 
                height={30}
                className={styles.icon}
              />
            </div>
            <h3 className={styles.benefit_title}>Sostenibilità Ambientale</h3>
            <p className={styles.benefit_description}>
              Riduci l'impronta ecologica della tua azienda e migliora la tua immagine aziendale con un impegno concreto verso la sostenibilità.
            </p>
          </div>
          
          <div className={styles.benefit_card}>
            <div className={styles.benefit_icon}>
              <Image 
                src="/icons/chart.svg" 
                alt="Indipendenza Energetica" 
                width={30} 
                height={30}
                className={styles.icon}
              />
            </div>
            <h3 className={styles.benefit_title}>Indipendenza Energetica</h3>
            <p className={styles.benefit_description}>
              Proteggi la tua azienda dalle fluttuazioni dei prezzi dell'energia e garantisci una maggiore stabilità dei costi operativi.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
