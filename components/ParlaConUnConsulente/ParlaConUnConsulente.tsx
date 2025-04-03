'use client'

import React from 'react'
import styles from './ParlaConUnConsulente.module.css'

export default function ParlaConUnConsulente() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Hai domande? Parliamone con calma.
        </h1>
        <p className={styles.text}>
          Forse hai già sentito parlare di impianti fotovoltaici, incentivi, comunità energetiche.
          Oppure no, e ti sembra tutto un casino di numeri, sigle e sigilli.
          Quello che ti proponiamo qui <strong>non è una consulenza commerciale</strong>, ma <strong>un momento di chiarezza</strong>.
        </p>
        <p className={styles.text}>
          Nessuna pressione. Solo risposte. Parli con un esperto che ti ascolta, ti fa 2 domande, e ti spiega
          <strong> se e dove </strong> ci sono opportunità per te.
        </p>
        <ul className={styles.list}>
          <li>✅ Senza impegno</li>
          <li>✅ Senza appuntamenti forzati</li>
          <li>✅ Senza venderti nulla che non serva davvero</li>
        </ul>
        <p className={styles.text}>
          📩 La consulenza è gratuita. Il valore che può generare, invece, <strong>è tutto tuo</strong>.
        </p>

        <div className="flex justify-center mb-8">
          <a href="https://wa.me/393470087833" target="_blank" rel="noopener noreferrer" className={styles.whatsappButton}>
            <img src="/icons/WhatsApp.svg" alt="WhatsApp" className={styles.whatsappIcon} />
            Contattaci su WhatsApp o chiama: <strong>347 008 7833</strong>
          </a>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>📇 Info Rapide</h3>
          <p className={styles.cardText}><strong>Nome:</strong> SolarixBusiness</p>
          <p className={styles.cardText}><strong>Telefono:</strong> 347 008 7833</p>
          <p className={styles.cardText}><strong>Email:</strong> info@solarixbusiness.it</p>
          <p className={styles.cardText}><strong>Sede:</strong> Via Bertolotti 7 | 10121 Torino (TO) | Italy</p>
        </div>
      </div>
    </section>
  );
}
