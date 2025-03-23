import { Metadata } from 'next'
import Image from 'next/image'
import FAQbus from '@/fotovoltaico-aziende/FAQbus/FAQbus'
import BusCTA from '@/fotovoltaico-aziende/BusCTA/BusCTA'
import SolarBenefitsWidgetbus from '@/fotovoltaico-aziende/Widgetbus/SolarBenefitsWidgetbus'
import GuaranteeWidgetbus from '@/fotovoltaico-aziende/Widgetbus/GuaranteeWidgetbus'
import IntroSection from '@/fotovoltaico-aziende/IntroSection/IntroSection'
import IncentiveSection from '@/fotovoltaico-aziende/components/IncentiveSection/IncentiveSection'
import SeoManager from '@/components/SeoManager/SeoManager'
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'
import { FaqItem } from '@/components/FaqSchema/FaqSchema'
import { SEO_CONSTANTS } from '@/utils/seoConstants'

import styles from '@/fotovoltaico-aziende/page.module.css'

export const metadata: Metadata = {
  title: 'Fotovoltaico per Aziende | solariXbusiness',
  description: 'Soluzioni fotovoltaiche personalizzate per aziende in tutta Italia. Massimizza il risparmio energetico e riduci i costi operativi con i nostri impianti industriali.',
  keywords: [
    'fotovoltaico aziendale',
    'impianti industriali',
    'energia solare business',
    'fotovoltaico aziende',
    'solariXbusiness'
  ],
  openGraph: {
    title: 'Fotovoltaico per Aziende | Soluzioni Energetiche Personalizzate',
    description: 'Soluzioni fotovoltaiche personalizzate per aziende in tutta Italia. Massimizza il risparmio energetico e riduci i costi operativi con i nostri impianti industriali.',
    url: 'https://www.solarixbusiness.it/fotovoltaico-aziende',
    siteName: SEO_CONSTANTS.SITE_NAME,
    images: [
      {
        url: '/images/og-fotovoltaico-aziende.jpg',
        width: 1200,
        height: 630,
        alt: 'Impianto fotovoltaico industriale solariXbusiness',
      },
    ],
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fotovoltaico per Aziende | Soluzioni Energetiche Personalizzate',
    description: 'Soluzioni fotovoltaiche personalizzate per aziende in tutta Italia. Massimizza il risparmio energetico e riduci i costi operativi con i nostri impianti industriali.',
    images: ['/images/og-fotovoltaico-aziende.jpg'],
  },
}

// Dati FAQ per il componente FaqSchema
const faqData: FaqItem[] = [
  {
    question: "Quali sono i vantaggi del fotovoltaico per le aziende?",
    answer: "I principali vantaggi includono: riduzione dei costi energetici, indipendenza dalle fluttuazioni del mercato energetico, miglioramento dell'immagine aziendale, riduzione dell'impatto ambientale e accesso a incentivi fiscali."
  },
  {
    question: "Quanto tempo ci vuole per ammortizzare un impianto fotovoltaico aziendale?",
    answer: "Il tempo di ammortamento varia in base alla dimensione dell'impianto e al consumo energetico, ma generalmente si aggira tra i 5 e i 7 anni, con un ritorno sull'investimento che può superare il 10% annuo."
  },
  {
    question: "Quali incentivi sono disponibili per le aziende che installano impianti fotovoltaici?",
    answer: "Le aziende possono accedere a diverse agevolazioni come il credito d'imposta per investimenti in beni strumentali, detrazioni fiscali, tariffe incentivanti e la possibilità di vendere l'energia in eccesso alla rete."
  }
];

export default function FotovoltaicoAziendePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Componente SeoManager centralizzato */}
      <SeoManager 
        canonicalPath="/fotovoltaico-aziende"
        organizationData={{
          name: SEO_CONSTANTS.COMPANY_NAME,
          url: SEO_CONSTANTS.SITE_URL
        }}
        localBusinessData={{
          name: SEO_CONSTANTS.COMPANY_NAME,
          description: 'Specialisti in impianti fotovoltaici per aziende e industrie',
          url: SEO_CONSTANTS.SITE_URL,
          telephone: SEO_CONSTANTS.COMPANY_PHONE,
          email: SEO_CONSTANTS.COMPANY_EMAIL,
          logo: SEO_CONSTANTS.COMPANY_LOGO
        }}
        faqItems={faqData}
        socialData={{
          title: 'Fotovoltaico per Aziende | Soluzioni Energetiche Personalizzate',
          description: 'Soluzioni fotovoltaiche personalizzate per aziende in tutta Italia. Massimizza il risparmio energetico e riduci i costi operativi con i nostri impianti industriali.',
          ogImage: '/images/og-fotovoltaico-aziende.jpg',
          ogType: 'website',
          twitterCard: 'summary_large_image'
        }}
      />
      
      {/* Breadcrumbs */}
      <Breadcrumbs 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Fotovoltaico per Aziende', path: '/fotovoltaico-aziende', isCurrentPage: true }
        ]}
      />
      
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
    </div>
  )
}
