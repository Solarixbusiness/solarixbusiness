import { Metadata } from 'next'
import ContactSection from '@/components/ContactSection/ContactSection'
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'
import SeoManager from '@/components/SeoManager/SeoManager'
import { SEO_CONSTANTS } from '@/utils/seoConstants'

export const metadata: Metadata = {
  title: 'Contatti | solariXbusiness',
  description: 'Contatta solariXbusiness per una consulenza gratuita sulle soluzioni fotovoltaiche per la tua azienda. Siamo a tua disposizione per trovare la soluzione energetica più adatta alle tue esigenze.',
  keywords: 'contatti solariXbusiness, preventivo fotovoltaico, consulenza energia solare, contatta esperto fotovoltaico',
  openGraph: {
    title: 'Contatta solariXbusiness | Richiedi una Consulenza Gratuita',
    description: 'Contatta il nostro team di esperti per una consulenza gratuita sulle soluzioni fotovoltaiche per la tua azienda. Siamo a tua disposizione per trovare la soluzione energetica più adatta alle tue esigenze.',
    url: 'https://www.solarixbusiness.it/contatti',
    siteName: SEO_CONSTANTS.SITE_NAME,
    images: [
      {
        url: '/images/og-contatti.jpg',
        width: 1200,
        height: 630,
        alt: 'Contatta solariXbusiness',
      },
    ],
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contatta solariXbusiness | Richiedi una Consulenza Gratuita',
    description: 'Contatta il nostro team di esperti per una consulenza gratuita sulle soluzioni fotovoltaiche per la tua azienda. Siamo a tua disposizione per trovare la soluzione energetica più adatta alle tue esigenze.',
    images: ['/images/og-contatti.jpg'],
  },
}

export default function ContattiPage() {
  return (
    <>
      <SeoManager 
        canonicalPath="/contatti"
        localBusinessData={{
          name: SEO_CONSTANTS.COMPANY_NAME,
          description: 'Soluzioni fotovoltaiche personalizzate per aziende in tutta Italia',
          url: SEO_CONSTANTS.SITE_URL,
          telephone: SEO_CONSTANTS.COMPANY_PHONE,
          email: SEO_CONSTANTS.COMPANY_EMAIL,
          address: {
            '@type': 'PostalAddress',
            streetAddress: SEO_CONSTANTS.ADDRESS.STREET,
            addressLocality: SEO_CONSTANTS.ADDRESS.CITY,
            postalCode: SEO_CONSTANTS.ADDRESS.POSTAL_CODE,
            addressRegion: SEO_CONSTANTS.ADDRESS.REGION,
            addressCountry: SEO_CONSTANTS.ADDRESS.COUNTRY
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: SEO_CONSTANTS.GEO.LATITUDE,
            longitude: SEO_CONSTANTS.GEO.LONGITUDE
          },
          openingHours: ['Mo-Fr 09:00-18:00']
        }}
        socialData={{
          title: 'Contatta solariXbusiness | Richiedi una Consulenza Gratuita',
          description: 'Contatta il nostro team di esperti per una consulenza gratuita sulle soluzioni fotovoltaiche per la tua azienda. Siamo a tua disposizione per trovare la soluzione energetica più adatta alle tue esigenze.',
          ogImage: '/images/og-contatti.jpg',
          ogType: 'website',
          twitterCard: 'summary_large_image'
        }}
      />
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs />
        <ContactSection />
      </div>
    </>
  )
}
