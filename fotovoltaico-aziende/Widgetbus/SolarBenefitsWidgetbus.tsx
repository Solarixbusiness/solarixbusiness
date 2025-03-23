'use client';

import styles from './SolarBenefitsWidgetbus.module.css';

const solarBenefits = [
  {
    icon: '☀️',
    title: 'Energia Rinnovabile per Aziende',
    description: 'Riduci i costi operativi sfruttando energia solare e accedi agli incentivi disponibili.'
  },
  {
    icon: '💶',
    title: 'ROI Veloce',
    description: 'Recupera l\'investimento in meno di 2 anni e goditi margini di profitto migliorati.'
  },
  {
    icon: '🏭',
    title: 'Ottimizzazione della Produzione',
    description: 'Garantisci continuità operativa riducendo i rischi legati ai rincari dell\'energia.'
  },
  {
    icon: '📊',
    title: 'Sostenibilità e Reputazione',
    description: 'Migliora l\'immagine della tua azienda adottando soluzioni green e innovative.'
  }
];

export interface SolarBenefitsWidgetbusProps {
  className?: string;
}

export default function SolarBenefitsWidgetbus({ className }: SolarBenefitsWidgetbusProps) {
  return (
    <section className={`${styles.serviceSection} ${className || ''}`}>
      <div className={styles.container}>
        <h2 className={styles.title}>Vantaggi del Fotovoltaico per Aziende</h2>
        <p className={styles.subtitle}>Scopri Perché Investire nell'Energia Solare per il Tuo Business</p>
        
        <div className={styles.benefitsGrid}>
          {solarBenefits.map((benefit, index) => (
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
