'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import styles from './FAQ.module.css'
import FaqSchema, { FaqItem } from '@/components/FaqSchema/FaqSchema'
import SeoImage from '@/components/SeoImage/SeoImage'

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems: FaqItem[] = [
    {
      question: "Quali sono i vantaggi di un impianto fotovoltaico per la mia azienda?",
      answer: "Un impianto fotovoltaico offre numerosi vantaggi per le aziende: riduzione significativa dei costi energetici, indipendenza dalle fluttuazioni dei prezzi dell'energia, miglioramento dell'immagine aziendale grazie all'impegno per la sostenibilità, accesso a incentivi fiscali e contributi statali, e un rapido ritorno dell'investimento (generalmente tra i 3 e i 7 anni)."
    },
    {
      question: "Quanto costa un impianto fotovoltaico per un'azienda?",
      answer: "Il costo di un impianto fotovoltaico per un'azienda dipende da diversi fattori: dimensione dell'impianto, tipo di installazione (a terra, su tetto piano o inclinato), qualità dei componenti scelti e complessità dell'installazione. In media, per impianti industriali, il costo può variare da 800€ a 1.200€ per kWp installato. Offriamo preventivi personalizzati gratuiti per valutare il caso specifico della tua azienda."
    },
    {
      question: "Quali incentivi sono disponibili per le aziende che installano impianti fotovoltaici?",
      answer: "Le aziende che installano impianti fotovoltaici possono beneficiare di diversi incentivi: detrazioni fiscali, ammortamento accelerato, credito d'imposta per investimenti in beni strumentali, e in alcuni casi contributi regionali o locali. Inoltre, è possibile accedere a meccanismi come lo Scambio sul Posto o il ritiro dedicato dell'energia prodotta in eccesso."
    },
    {
      question: "Quanto tempo è necessario per installare un impianto fotovoltaico aziendale?",
      answer: "I tempi di installazione variano in base alla dimensione e alla complessità dell'impianto. Per un impianto aziendale di medie dimensioni (50-100 kWp), l'installazione fisica richiede generalmente da 2 a 4 settimane. Tuttavia, l'intero processo, compresi permessi, progettazione e allacciamento alla rete, può richiedere da 2 a 4 mesi. Il nostro team gestisce l'intero processo per minimizzare i disagi alla tua attività."
    },
    {
      question: "È possibile installare un impianto fotovoltaico su qualsiasi tipo di tetto aziendale?",
      answer: "La maggior parte dei tetti aziendali è adatta all'installazione di impianti fotovoltaici, ma ci sono alcuni fattori da considerare: l'orientamento e l'inclinazione del tetto, la presenza di ombreggiamenti, la capacità portante della struttura e lo stato di conservazione della copertura. Effettuiamo sempre un sopralluogo tecnico preliminare per valutare la fattibilità dell'installazione e proporre la soluzione più adatta."
    }
  ];

  return (
    <section className={styles.faq_section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Domande Frequenti</h2>
        <p className={styles.subtitle}>Tutto quello che devi sapere sul fotovoltaico per la tua azienda</p>
        
        <div className={styles.faq_container}>
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className={`${styles.faq_item} ${activeIndex === index ? styles.active : ''}`}
            >
              <button 
                className={styles.faq_question}
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                {item.question}
                <span className={styles.icon_container}>
                  <SeoImage 
                    src={activeIndex === index ? "/icons/minus.svg" : "/icons/plus.svg"}
                    alt={activeIndex === index ? "Chiudi risposta" : "Apri risposta"}
                    width={16}
                    height={16}
                    className={styles.icon}
                    useOptimized={false}
                  />
                </span>
              </button>
              <div 
                className={styles.faq_answer}
                style={{ 
                  maxHeight: activeIndex === index ? '1000px' : '0',
                  opacity: activeIndex === index ? 1 : 0
                }}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
