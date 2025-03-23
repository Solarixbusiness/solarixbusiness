'use client';

import { useState } from 'react';
import styles from './FAQbus.module.css';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Quali incentivi sono disponibili per le aziende?",
    answer: "Le aziende possono accedere a incentivi come il Piano Transizione 5.0, Nuova Sabatini Green, Decreto FER2, Reverse Charge, Bandi Regionali, CSR Piemonte, Bando Agrisolare, Comunità Energetiche Rinnovabili (CER) e Conto Termico 3.0. Ogni incentivo ha requisiti specifici: contattaci per scoprire la soluzione migliore per la tua azienda!"
  },
  {
    question: "Quanto tempo serve per ammortizzare un impianto fotovoltaico?",
    answer: "Grazie agli incentivi e ai risparmi energetici, un impianto aziendale può ripagarsi in meno di 2 anni. Richiedi un'analisi gratuita per il tuo business!"
  },
  {
    question: "Le aziende possono accedere alle Comunità Energetiche?",
    answer: "Sì, le aziende possono partecipare alle CER per vendere energia in eccesso e ottenere una rendita stabile per 20 anni. Scopri come entrare in una Comunità Energetica oggi stesso!"
  },
  {
    question: "Quali soluzioni esistono per le aziende energivore?",
    answer: "Le imprese energivore possono accedere a tariffe agevolate con l'Energy Release 2.0 e sfruttare incentivi sugli oneri di sistema per abbattere i costi operativi. Contattaci per una consulenza su misura!"
  },
  {
    question: "Come posso ridurre i costi energetici della mia azienda?",
    answer: "Oltre al fotovoltaico, puoi installare sistemi di storage, ottimizzare i consumi e partecipare a programmi di autoconsumo collettivo. Parla con i nostri esperti e scopri la strategia migliore!"
  },
  {
    question: "Cosa sono i Contratti di Rendimento Energetico (EPC)?",
    answer: "Gli EPC consentono di realizzare interventi di efficientamento senza investimenti iniziali, ripagando i costi con i risparmi generati. Scopri se la tua azienda può accedere a questa opportunità!"
  },
  {
    question: "Qual è la durata media di un impianto fotovoltaico industriale?",
    answer: "Gli impianti hanno una durata media di 25-30 anni, con garanzie fino a 25 anni su pannelli e inverter. Richiedi una consulenza per scegliere la soluzione più affidabile!"
  },
  {
    question: "Le aziende possono beneficiare del Conto Termico?",
    answer: "Sì, le aziende possono ricevere incentivi per impianti ad alta efficienza energetica e la sostituzione di vecchi sistemi di climatizzazione. Scopri come ottenere questi incentivi ora!"
  },
  {
    question: "Quali vantaggi fiscali sono disponibili per le aziende?",
    answer: "Sono disponibili agevolazioni fiscali come la Nuova Sabatini Green e l'IVA agevolata al 10% per le forniture di energia rinnovabile. Approfitta dei vantaggi fiscali, contattaci subito!"
  },
  {
    question: "Posso ottenere un finanziamento per il mio impianto?",
    answer: "Sì, esistono soluzioni come leasing operativo, noleggio a lungo termine e accesso ai fondi regionali per le energie rinnovabili. Scopri la formula di finanziamento più vantaggiosa per te!"
  }
];

export default function FAQbus() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  return (
    <section className={styles.faqSection}>
      <h2 className={styles.title}>FAQ - Domande Frequenti per Aziende</h2>
      <div className={styles.faqGrid}>
        {faqData.map((faq, index) => (
          <div 
            key={index}
            className={styles.faqItem}
            onMouseEnter={() => setOpenIndex(index)}
            onMouseLeave={() => setOpenIndex(null)}
          >
            <h3 className={styles.question}>{faq.question}</h3>
            <div className={`${styles.answer} ${openIndex === index ? styles.open : ''}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
