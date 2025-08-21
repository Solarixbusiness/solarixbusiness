import { Metadata } from 'next'
import ContactSection from '@/components/ContactSection/ContactSection'
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'
import SeoManager from '@/components/SeoManager/SeoManager'
import { SEO_CONSTANTS } from '@/utils/seoConstants'

export const revalidate = 86400;
export const runtime = 'nodejs';

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
    <section className="bg-white py-2 px-3 md:py-16 md:px-6 font-roboto">
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
            addressCountry: SEO_CONSTANTS.ADDRESS.COUNTRY_CODE
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
      <div className="container mx-auto px-2 pt-0 pb-2 md:px-4 md:py-8">
        <Breadcrumbs />
        <ContactSection />
        <div className="flex items-center space-x-4">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <div>
            <p className="text-gray-600">Cellulare</p>
            <a href="tel:3470087833" className="text-blue-600 hover:text-blue-800">347 008 7833</a>
          </div>
          <div>
            <p className="text-gray-600">Fisso</p>
            <a href="tel:01118837752" className="text-blue-600 hover:text-blue-800">011 1883 7752</a>
          </div>
        </div>
      </div>
    </section>
  );
}
