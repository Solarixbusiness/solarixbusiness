'use client'

import React from 'react'
import Image from 'next/image'
import styles from './SolarBenefitsWidget.module.css'

export default function SolarBenefitsWidget() {
  return (
    <div className={styles.benefits_container}>
      <div className={styles.benefits_wrapper}>
        <h2 className={styles.benefits_title}>Perché le aziende scelgono SolarixBusiness</h2>
        
        <div className={styles.benefits_grid}>
          <div className={styles.benefit_card}>
            <div className={styles.benefit_icon}>
              <Image 
                src="/icons/building.svg" 
                alt="Trasformazione industriale completa" 
                width={30} 
                height={30}
                className={styles.icon}
              />
            </div>
            <h3 className={styles.benefit_title}>Trasformazione industriale completa</h3>
            <p className={styles.benefit_description}>
              Non implementiamo singole tecnologie ma progettiamo ecosistemi completi che integrano efficientamento energetico, automazione intelligente e digitalizzazione. Ogni intervento è progettato per potenziarsi reciprocamente e costruire un vantaggio competitivo duraturo nel vostro settore.
            </p>
          </div>
          
          <div className={styles.benefit_card}>
            <div className={styles.benefit_icon}>
              <Image 
                src="/icons/money-saving.svg" 
                alt="Massimizzazione finanziamenti e incentivi" 
                width={30} 
                height={30}
                className={styles.icon}
              />
            </div>
            <h3 className={styles.benefit_title}>Massimizzazione finanziamenti e incentivi</h3>
            <p className={styles.benefit_description}>
              Combinazione strategica di bandi nazionali, europei e regionali per ridurre l'investimento fino all'80%. Monitoriamo costantemente Transizione 5.0, PNRR, Horizon Europe e bandi settoriali, strutturando progetti consortili e partnership per massimizzare le opportunità di finanziamento.
            </p>
          </div>
          
          <div className={styles.benefit_card}>
            <div className={styles.benefit_icon}>
              <Image 
                src="/icons/certificate.svg" 
                alt="Competitività e posizionamento strategico" 
                width={30} 
                height={30}
                className={styles.icon}
              />
            </div>
            <h3 className={styles.benefit_title}>Competitività e posizionamento strategico</h3>
            <p className={styles.benefit_description}>
              Strutturiamo il vostro profilo aziendale per renderlo più attrattivo: certificazioni ISO strategiche, compliance ESG, documentazione per bandi e costruzione di un posizionamento che vi rende leader nel vostro settore e più competitivi nell'accesso a nuove opportunità.
            </p>
          </div>
          
          <div className={styles.benefit_card}>
            <div className={styles.benefit_icon}>
              <Image 
                src="/icons/chart.svg" 
                alt="ROI verificabile e partnership duratura" 
                width={30} 
                height={30}
                className={styles.icon}
              />
            </div>
            <h3 className={styles.benefit_title}>ROI verificabile e partnership duratura</h3>
            <p className={styles.benefit_description}>
              Ogni investimento è pianificato con ROI verificabile, tempi certi e milestone controllabili. Vi accompagniamo oltre l'implementazione con monitoraggio continuo, aggiornamenti tecnologici e supporto per nuove opportunità di crescita. Non promettiamo, dimostriamo con numeri concreti.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
