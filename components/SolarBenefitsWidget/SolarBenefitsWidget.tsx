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
                alt="Ottimizzazione dei costi energetici" 
                width={30} 
                height={30}
                className={styles.icon}
              />
            </div>
            <h3 className={styles.benefit_title}>Ottimizzazione dei costi energetici</h3>
            <p className={styles.benefit_description}>
              Con l'energia autoprodotta dal tuo impianto fotovoltaico, riduci drasticamente i costi energetici fissi, proteggendo la tua azienda da aumenti imprevedibili. Grazie alla fiscalità agevolata, non solo spendi meno: ottieni vantaggi anche a livello di bilancio e tassazione. È una manovra strutturale, non solo un risparmio.
            </p>
          </div>
          
          <div className={styles.benefit_card}>
            <div className={styles.benefit_icon}>
              <Image 
                src="/icons/money-saving.svg" 
                alt="Incentivi cumulabili fino all'80%" 
                width={30} 
                height={30}
                className={styles.icon}
              />
            </div>
            <h3 className={styles.benefit_title}>Incentivi cumulabili fino all'80%</h3>
            <p className={styles.benefit_description}>
              Un solo impianto, più bandi insieme: CER, Transizione 5.0, fondo perduto per l'autoconsumo, Sabatini Green e altri.
              SolarixBusiness e il suo partner in finanza agevolata costruiscono il tuo piano su misura, ottimizzando ogni euro disponibile.
              Il risultato? Un impianto che ti costa meno della metà — e rende di più.
            </p>
          </div>
          
          <div className={styles.benefit_card}>
            <div className={styles.benefit_icon}>
              <Image 
                src="/icons/leaf.svg" 
                alt="Strategia ESG e immagine aziendale" 
                width={30} 
                height={30}
                className={styles.icon}
              />
            </div>
            <h3 className={styles.benefit_title}>Strategia ESG e immagine aziendale</h3>
            <p className={styles.benefit_description}>
              Le aziende che adottano politiche ESG (ambientali, sociali e di governance) oggi valgono di più, ottengono punteggi migliori nei bandi pubblici e migliorano la propria reputazione sul mercato.
              Il tuo impianto fotovoltaico non è solo un risparmio: è un biglietto da visita che parla di sostenibilità reale, utile per accedere a fondi, certificazioni e nuovi clienti.
            </p>
          </div>
          
          <div className={styles.benefit_card}>
            <div className={styles.benefit_icon}>
              <Image 
                src="/icons/chart.svg" 
                alt="Autonomia dalla rete + reddito aggiuntivo" 
                width={30} 
                height={30}
                className={styles.icon}
              />
            </div>
            <h3 className={styles.benefit_title}>Autonomia dalla rete + reddito aggiuntivo</h3>
            <p className={styles.benefit_description}>
              Un impianto ben progettato ti rende meno dipendente dai fornitori di energia, protegge i tuoi margini e — con una CER attiva — ti permette anche di guadagnare vendendo l'energia in eccesso.
              Attiviamo per te ritiro dedicato + tariffa incentivante e ti inseriamo in circuiti di ritorno economico a lungo termine, compresi i carbon credits.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
