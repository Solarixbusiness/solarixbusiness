'use client';

import styles from './IntroSection.module.css';

const strengthPoints = [
  {
    icon: '📊',
    title: 'Accesso ai migliori incentivi statali',
    description: 'Sfruttiamo la nostra esperienza per individuare e gestire l\'incentivo più adatto alla tua azienda, ottimizzando il ritorno sull\'investimento.'
  },
  {
    icon: '⚡',
    title: 'Impianti su misura per ogni esigenza',
    description: 'Ogni azienda è unica: per questo progettiamo soluzioni fotovoltaiche personalizzate, garantendo efficienza e massima resa.'
  },
  {
    icon: '📈',
    title: 'Analisi gratuita del profilo aziendale',
    description: 'Valutiamo il fabbisogno energetico e le opportunità di incentivo, fornendo un piano dettagliato senza impegno.'
  },
  {
    icon: '💹',
    title: 'Massima efficienza e risparmio energetico',
    description: 'Grazie alla nostra expertise, le aziende riducono i consumi e ottimizzano i costi, ottenendo un vantaggio competitivo sostenibile.'
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
            La transizione energetica è un'opportunità unica per le aziende italiane, ma navigare tra incentivi, 
            normative e soluzioni impiantistiche può essere complesso. solariXbusiness semplifica il processo, 
            offrendo consulenza personalizzata e impianti su misura per ogni esigenza aziendale.
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
