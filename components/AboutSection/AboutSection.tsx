'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './AboutSection.module.css'

export default function AboutSection() {
  return (
    <section className={styles.about_section}>
      <div className={styles.container}>
        <h1 className={styles.main_title}>Chi Siamo</h1>
        
        <div className={styles.intro_container}>
          <p className={styles.intro_text}>
            <strong>SolariX Business</strong> nasce come una rete di imprese specializzate nell'energia solare e nella finanza agevolata, 
            con un unico obiettivo: aiutare le aziende italiane a realizzare impianti fotovoltaici in modo strategico, efficace e su misura.
          </p>
          
          <p className={styles.intro_text}>
            Crediamo in un futuro dove l'energia rinnovabile diventa non solo una scelta sostenibile, ma un vantaggio economico reale per le imprese. 
            Per questo motivo, la nostra missione va oltre la semplice installazione di pannelli solari: analizziamo attentamente le caratteristiche 
            e le esigenze specifiche di ogni azienda, studiando le migliori opportunità offerte dagli incentivi, dai bandi nazionali ed europei e dai finanziamenti agevolati.
          </p>
        </div>
        
        <div className={styles.section}>
          <h2 className={styles.section_title}>Cosa ci rende unici</h2>
          <p className={styles.section_text}>
            Non siamo semplici installatori: siamo una squadra multidisciplinare composta da esperti tecnici, consulenti finanziari e specialisti della finanza agevolata. 
            Lavorando insieme, creiamo progetti fotovoltaici personalizzati che massimizzano i benefici finanziari e riducono al minimo i costi iniziali per l'azienda cliente.
          </p>
        </div>
        
        <div className={styles.section}>
          <h2 className={styles.section_title}>Il nostro metodo</h2>
          <ul className={styles.method_list}>
            <li className={styles.method_item}>
              <strong>Analisi Strategica:</strong> Studiamo le opportunità migliori in base alla tua tipologia di attività e al tuo territorio.
            </li>
            <li className={styles.method_item}>
              <strong>Finanza Agevolata:</strong> Identifichiamo e gestiamo per te l'accesso a bandi e incentivi specifici per ridurre al massimo l'investimento iniziale.
            </li>
            <li className={styles.method_item}>
              <strong>Progettazione Personalizzata:</strong> Realizziamo un progetto tecnico su misura che valorizzi le specificità del tuo business.
            </li>
            <li className={styles.method_item}>
              <strong>Installazione e Supporto:</strong> Ci occupiamo di tutto, dalla burocrazia all'installazione finale, garantendo qualità e tranquillità.
            </li>
          </ul>
        </div>
        
        <div className={styles.section}>
          <h2 className={styles.section_title}>La nostra promessa</h2>
          <p className={styles.section_text}>
            Con <strong>SolariX Business</strong>, scegli di trasformare il fotovoltaico in una leva strategica per la crescita della tua azienda. 
            Affidati a chi conosce profondamente non solo l'energia rinnovabile, ma anche come sfruttare al meglio la finanza agevolata per generare vantaggi concreti e duraturi nel tempo.
          </p>
        </div>
        
        <div className={styles.section}>
          <h2 className={styles.section_title}>La nostra visione</h2>
          <p className={styles.section_text}>
            Crediamo in un futuro in cui ogni azienda, indipendentemente dalle sue dimensioni o dal settore in cui opera, possa beneficiare della transizione energetica in modo concreto e vantaggioso. 
            La sostenibilità non è soltanto un obbligo morale, ma anche una straordinaria opportunità economica e competitiva. 
            Per questo, lavoriamo con passione e determinazione per facilitare e accelerare l'adozione dell'energia fotovoltaica, offrendo soluzioni complete e personalizzate.
          </p>
        </div>
        
        <div className={styles.section}>
          <h2 className={styles.section_title}>Perché scegliere SolariX Business</h2>
          <p className={styles.section_text}>
            Scegliere SolariX Business significa affidarsi a una rete di imprese con competenze complementari, che mette al centro il cliente e la sua crescita. 
            Il nostro impegno è garantire che ogni progetto realizzato porti efficienza, risparmio e vantaggi finanziari tangibili, contribuendo al tempo stesso a un mondo più sostenibile. 
            Con noi hai un partner affidabile e competente che ti guida passo dopo passo verso la transizione energetica del tuo business.
          </p>
        </div>
        
        <div className={styles.section}>
          <h2 className={styles.section_title}>Il nostro team</h2>
          <p className={styles.section_text}>
            Il cuore pulsante di SolariX Business è un team altamente qualificato composto da tecnici esperti nel settore fotovoltaico, 
            consulenti finanziari specializzati nella finanza agevolata e professionisti esperti di normative e incentivi. 
            Questa sinergia unica ci permette di gestire in modo efficiente ogni fase del progetto, garantendo risultati eccellenti e soddisfazione completa del cliente.
          </p>
        </div>
        
        <div className={styles.section}>
          <h2 className={styles.section_title}>Impegno per la qualità</h2>
          <p className={styles.section_text}>
            La qualità per noi è una promessa imprescindibile. Ogni progetto che realizziamo rispetta i più alti standard tecnologici e normativi del settore. 
            Collaboriamo esclusivamente con partner e fornitori selezionati che condividono il nostro impegno per la qualità e l'innovazione, 
            assicurando così affidabilità e performance durature nel tempo.
          </p>
        </div>
        
        <div className={styles.section}>
          <h2 className={styles.section_title}>Vicini alle imprese, vicini al territorio</h2>
          <p className={styles.section_text}>
            Siamo consapevoli dell'importanza di essere vicini alle realtà locali. Per questo, manteniamo una presenza capillare sul territorio italiano, 
            così da poter offrire supporto diretto e tempestivo ad ogni azienda. La nostra conoscenza approfondita delle peculiarità regionali e locali 
            ci consente di individuare rapidamente le migliori opportunità economiche e di incentivazione per ogni singolo progetto.
          </p>
        </div>
        
        <div className={styles.cta_container}>
          <Link href="/contatti" className={styles.cta_button}>
            Contattaci per una consulenza
          </Link>
        </div>
      </div>
    </section>
  )
}
