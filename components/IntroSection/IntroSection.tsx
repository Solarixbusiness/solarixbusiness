import styles from './IntroSection.module.css';

const strengthPoints = [
  {
    icon: '📊',
    title: 'Piano agevolato costruito su misura',
    description: 'Ogni azienda è diversa, e ogni impianto deve essere ottimizzato non solo tecnicamente, ma anche fiscalmente.\nCon SolarixBusiness ricevi un piano personalizzato che analizza consumi, investimenti e compatibilità con tutti i bandi disponibili (CER, Transizione 5.0, regionali, settore-specifici).\nIl nostro partner in finanza agevolata progetta con noi ogni operazione come se fosse un investimento, non una semplice spesa.'
  },
  {
    icon: '⚡',
    title: 'Impianto come asset strategico',
    description: 'Il tuo impianto non è un “tetto pieno di pannelli”. È un bene produttivo con ritorno misurabile, inserito in una strategia che coinvolge:\n\nComunità Energetica Rinnovabile (CER)\n\nRitiro dedicato\n\nVendita di energia\n\nIncentivi fiscali\n\nCarbon credits\n\nRisultato? Meno tasse, più energia, più valore nel tempo. Un asset a bilancio.'
  },
  {
    icon: '📈',
    title: 'ROI reale, subito visibile',
    description: 'Il rientro dell\'investimento non è fra 10 anni, è progettato per essere immediato, grazie alla sinergia tra:\n\nIncentivi a fondo perduto fino all\'80%\n\nDetassazione dell\'autoconsumo\n\nAccesso al mercato dei crediti di carbonio\n\nIn pratica: inizi a risparmiare e guadagnare dal primo anno. Non è marketing, è matematica.'
  },
  {
    icon: '💹',
    title: 'Un network, non un fornitore',
    description: 'Non sei seguito da un venditore o da un tecnico.\nSei affiancato da un team di progetto: consulenti energetici, fiscalisti, partner per la finanza agevolata.\nTi aggiorniamo costantemente su nuove opportunità, bandi in uscita, evoluzioni del mercato.\nSolarixBusiness è un ecosistema. Una rete che lavora per te, anche dopo l\'installazione.'
  }
];

const testimonials = [
  {
    quote: "Grazie a solariXbusiness, la nostra azienda ha ottenuto un impianto fotovoltaico con incentivi che ci hanno permesso di dimezzare i costi energetici. Competenza e trasparenza in ogni fase!",
    author: "Marco R.",
    role: "CEO di un'azienda manifatturiera"
  },
  {
    quote: "Non sapevo quali incentivi fossero disponibili per la mia attività. solariXbusiness ha gestito tutto per me, permettendomi di risparmiare tempo e denaro.",
    author: "Giulia T.",
    role: "Imprenditrice agricola"
  }
];

export default function IntroSection() {
  return (
    <section className={styles.introSection}>
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <h2 className={styles.title}>Perché Scegliere solariXbusiness</h2>
          <p className={styles.description}>
            Non siamo installatori.
            SolarixBusiness è un partner strategico che ti guida nella transizione energetica come operazione economica intelligente, con un team di consulenti tecnici e uno studio di finanza agevolata al tuo fianco.
            Progettiamo soluzioni, attiviamo bandi, calcoliamo ritorni e ti inseriamo nei circuiti dei crediti di carbonio.
            Un impianto? No. Un investimento strategico che inizia a rendere subito.
          </p>
        </div>

        <div className={styles.strengthSection}>
          <div className={styles.mainContent}>
            <h3 className={styles.subtitle}>I nostri punti di forza</h3>
            <div className={styles.strengthGrid}>
              {strengthPoints.map((point, index) => (
                <div key={index} className={styles.strengthItem}>
                  <div className={styles.strengthHeader}>
                    <span className={styles.icon}>{point.icon}</span>
                    <h4>{point.title}</h4>
                  </div>
                  <p>{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.testimonialSection}>
          <div className={styles.mainContent}>
            <h3 className={styles.subtitle}>Cosa dicono i nostri clienti</h3>
            <div className={styles.testimonialGrid}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className={styles.testimonialItem}>
                  <blockquote>
                    <p>{testimonial.quote}</p>
                    <footer>
                      <strong>{testimonial.author}</strong>
                      <span>{testimonial.role}</span>
                    </footer>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
