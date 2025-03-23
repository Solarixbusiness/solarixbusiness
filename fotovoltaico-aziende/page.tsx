import { Metadata } from 'next'

import BusCTA from './BusCTA/BusCTA'
import FAQbus from './FAQbus/FAQbus'
import GuaranteeWidgetbus from './Widgetbus/GuaranteeWidgetbus'
import SolarBenefitsWidgetbus from './Widgetbus/SolarBenefitsWidgetbus'
import IntroSection from './IntroSection/IntroSection'
import IncentiveSection from './components/IncentiveSection/IncentiveSection'

import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Fotovoltaico per Aziende nel Nord Ovest Italia',
  description: 'Soluzioni fotovoltaiche personalizzate per aziende in Piemonte, Lombardia, Liguria e Valle d\'Aosta. Massimizza il risparmio energetico e riduci i costi operativi con i nostri impianti industriali.',
  keywords: [
    'fotovoltaico aziendale nord ovest',
    'impianti industriali Piemonte',
    'energia solare business Lombardia',
    'fotovoltaico aziende Liguria',
    'impianti fotovoltaici Valle d\'Aosta'
  ]
}

export default function FotovoltaicoAziendePage() {
  return (
    <>
      {/* Hero Section con CTA */}
      <div className={styles.pageContainer}>
        <div className={styles.content}>
          <h1 className={styles.mainTitle}>L'energia per il tuo business</h1>
          <h2 className={styles.subTitle}>L'incentivo più adatto al tuo settore</h2>
          <BusCTA />
        </div>
      </div>

      {/* Widget dei benefici solari - overview generale */}
      <SolarBenefitsWidgetbus />

      {/* Prefazione e Punti Chiave */}
      <IntroSection />

      {/* Sezione Incentivi */}
      <IncentiveSection />

      {/* Contenuti Specifici */}
      <div className={styles.fullWidthContent}>        
        {/* Widget delle garanzie - dettagli specifici */}
        <GuaranteeWidgetbus />
        
        {/* FAQ - supporto informativo */}
        <FAQbus />
      </div>
    </>
  )
}