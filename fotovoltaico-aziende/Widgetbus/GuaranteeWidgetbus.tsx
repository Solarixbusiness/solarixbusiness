'use client';

import styles from './GuaranteeWidgetbus.module.css';

const benefits = [
  {
    icon: '⚡',
    title: 'Risparmio Energetico Garantito',
    description: 'Riduci i costi fino al 70% con soluzioni fotovoltaiche su misura per la tua azienda.'
  },
  {
    icon: '💰',
    title: 'Incentivi e Detrazioni',
    description: 'Accedi agli incentivi del Piano Transizione 5.0 e Bando Agrisolare per massimizzare il ROI.'
  },
  {
    icon: '🔧',
    title: 'Assistenza Specializzata',
    description: 'Manutenzione programmata e supporto 24/7 per garantire massima efficienza e sicurezza.'
  },
  {
    icon: '📈',
    title: 'Autoconsumo e CER',
    description: 'Monetizza l’energia in eccesso e partecipa a Comunità Energetiche Rinnovabili per guadagni stabili.'
  }
];

export default function GuaranteeWidgetbus() {
  return (
    <section className={styles.serviceSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Le Nostre Garanzie per le Aziende</h2>
        <p className={styles.subtitle}>Affidabilità, Incentivi e Risparmio Garantito</p>
        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.benefitItem}>
              <h3>
                <span className={styles.icon}>{benefit.icon}</span>
                {benefit.title}
              </h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
