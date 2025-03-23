import { Metadata } from 'next'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection/HeroSection'
import SolarBenefitsWidget from '@/components/SolarBenefitsWidget/SolarBenefitsWidget'
import IntroSection from '@/components/IntroSection/IntroSection'
import IncentiveSection from '@/components/IncentiveSection/IncentiveSection'
import GuaranteeWidget from '@/components/GuaranteeWidget/GuaranteeWidget'
import FAQ from '@/components/FAQ/FAQ'
import SeoManager from '@/components/SeoManager/SeoManager'
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'
import { FaqItem } from '@/components/FaqSchema/FaqSchema'
import { SEO_CONSTANTS } from '@/utils/seoConstants'

export const metadata: Metadata = {
  title: 'solariXbusiness - Soluzioni energetiche per aziende',
  description: 'Soluzioni fotovoltaiche personalizzate per aziende in tutta Italia. Massimizza il risparmio energetico e riduci i costi operativi con i nostri impianti industriali.',
  openGraph: {
    title: 'solariXbusiness - Soluzioni energetiche per aziende',
    description: 'Soluzioni fotovoltaiche personalizzate per aziende in tutta Italia. Massimizza il risparmio energetico e riduci i costi operativi con i nostri impianti industriali.',
    url: 'https://www.solarixbusiness.it',
    siteName: 'solariXbusiness',
    images: [
      {
        url: 'https://www.solarixbusiness.it/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'solariXbusiness - Soluzioni energetiche per aziende',
      },
    ],
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'solariXbusiness - Soluzioni energetiche per aziende',
    description: 'Soluzioni fotovoltaiche personalizzate per aziende in tutta Italia. Massimizza il risparmio energetico e riduci i costi operativi con i nostri impianti industriali.',
    images: ['https://www.solarixbusiness.it/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.solarixbusiness.it',
    languages: {
      'it-IT': 'https://www.solarixbusiness.it',
      'en-US': 'https://www.solarixbusiness.it/en',
    },
  },
}

// FAQ per la pagina home
const homeFaq: FaqItem[] = [
  {
    question: "Quali sono i vantaggi del fotovoltaico per le aziende?",
    answer: "I principali vantaggi includono: riduzione dei costi energetici, indipendenza energetica, valorizzazione dell'immobile, miglioramento dell'immagine aziendale e accesso a incentivi fiscali e contributi statali."
  },
  {
    question: "Quali incentivi sono disponibili per le aziende?",
    answer: "Le aziende possono accedere a diverse forme di incentivi: detrazioni fiscali, contributi in conto capitale, finanziamenti agevolati, e il meccanismo del Superbonus per specifici interventi di efficientamento energetico."
  },
  {
    question: "Quanto tempo è necessario per l'installazione di un impianto fotovoltaico aziendale?",
    answer: "I tempi di installazione variano in base alla dimensione dell'impianto. Mediamente, per un impianto aziendale di medie dimensioni, sono necessarie 2-4 settimane per l'installazione completa, a cui si aggiungono i tempi per le pratiche autorizzative."
  }
];

export default function HomePage() {
  return (
    <>
      {/* SEO Manager - gestisce tutti i componenti SEO in modo centralizzato */}
      <SeoManager 
        organizationData={{
          name: SEO_CONSTANTS.COMPANY_NAME,
          description: SEO_CONSTANTS.DEFAULT_DESCRIPTION,
          url: SEO_CONSTANTS.SITE_URL,
          logo: SEO_CONSTANTS.COMPANY_LOGO,
          telephone: SEO_CONSTANTS.COMPANY_PHONE,
          address: {
            streetAddress: SEO_CONSTANTS.ADDRESS.STREET,
            addressLocality: SEO_CONSTANTS.ADDRESS.CITY,
            postalCode: SEO_CONSTANTS.ADDRESS.POSTAL_CODE,
            addressCountry: "IT"
          }
        }}
        localBusinessData={{
          name: SEO_CONSTANTS.COMPANY_NAME,
          description: SEO_CONSTANTS.DEFAULT_DESCRIPTION,
          url: SEO_CONSTANTS.SITE_URL,
          telephone: SEO_CONSTANTS.COMPANY_PHONE,
          email: SEO_CONSTANTS.COMPANY_EMAIL,
          logo: SEO_CONSTANTS.COMPANY_LOGO,
          priceRange: '€€',
          openingHours: ['Mo-Fr 09:00-18:00'],
          address: {
            '@type': 'PostalAddress',
            streetAddress: SEO_CONSTANTS.ADDRESS.STREET,
            addressLocality: SEO_CONSTANTS.ADDRESS.CITY,
            postalCode: SEO_CONSTANTS.ADDRESS.POSTAL_CODE,
            addressRegion: SEO_CONSTANTS.ADDRESS.REGION,
            addressCountry: SEO_CONSTANTS.ADDRESS.COUNTRY,
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: SEO_CONSTANTS.GEO.LATITUDE,
            longitude: SEO_CONSTANTS.GEO.LONGITUDE,
          },
          sameAs: [
            SEO_CONSTANTS.SOCIAL_FACEBOOK,
            SEO_CONSTANTS.SOCIAL_INSTAGRAM,
            SEO_CONSTANTS.SOCIAL_LINKEDIN,
          ],
        }}
        faqItems={homeFaq}
        socialData={{
          title: 'solariXbusiness - Soluzioni energetiche per aziende',
          description: 'Soluzioni fotovoltaiche personalizzate per aziende in tutta Italia. Massimizza il risparmio energetico e riduci i costi operativi con i nostri impianti industriali.',
          ogImage: '/images/og-image.jpg',
          ogType: 'website',
          twitterCard: 'summary_large_image'
        }}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs 
        items={[
          { label: 'Home', path: '/', isCurrentPage: true }
        ]}
      />

      {/* Hero Section con CTA */}
      <HeroSection 
        title="Il fotovoltaico non è una spesa. È la tua leva finanziaria"
        subtitle="Accedi a incentivi cumulabili, ritorno immediato entra nel mercato dei carbon credits, Il tuo impianto inizia a guadagnare da subito"
      />

      {/* Widget dei benefici solari - overview generale */}
      <SolarBenefitsWidget />

      {/* Prefazione e Punti Chiave */}
      <IntroSection />

      {/* Sezione Incentivi */}
      <IncentiveSection />

      {/* Widget delle garanzie - dettagli specifici */}
      <GuaranteeWidget />
      
      {/* FAQ - supporto informativo */}
      <FAQ />
    </>
  )
}
