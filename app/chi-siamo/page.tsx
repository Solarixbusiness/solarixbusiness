import { Metadata } from 'next'
import AboutSection from '@/components/AboutSection/AboutSection'
import SolarBenefitsWidget from '@/components/SolarBenefitsWidget/SolarBenefitsWidget'
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'
import SeoManager from '@/components/SeoManager/SeoManager'
import { SEO_CONSTANTS, getOrganizationSchema } from '@/utils/seoConstants'

export const metadata: Metadata = {
  title: 'Chi Siamo | solariXbusiness',
  description: 'Scopri chi siamo e la nostra missione di rendere le aziende più competitive attraverso l\'indipendenza energetica e soluzioni fotovoltaiche personalizzate.',
  keywords: 'solariXbusiness, chi siamo, azienda fotovoltaico, storia solariX, team energia solare',
  openGraph: {
    title: 'Chi Siamo | solariXbusiness - La Nostra Storia e Missione',
    description: 'Scopri la storia di solariXbusiness e la nostra missione di rendere le aziende più competitive attraverso l\'indipendenza energetica e soluzioni fotovoltaiche personalizzate.',
    url: 'https://www.solarixbusiness.it/chi-siamo',
    siteName: SEO_CONSTANTS.SITE_NAME,
    images: [
      {
        url: '/images/og-chi-siamo.jpg',
        width: 1200,
        height: 630,
        alt: 'Il team di solariXbusiness',
      },
    ],
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chi Siamo | solariXbusiness - La Nostra Storia e Missione',
    description: 'Scopri la storia di solariXbusiness e la nostra missione di rendere le aziende più competitive attraverso l\'indipendenza energetica e soluzioni fotovoltaiche personalizzate.',
    images: ['/images/og-chi-siamo.jpg'],
  },
}

export default function ChiSiamoPage() {
  return (
    <>
      <SeoManager 
        canonicalPath="/chi-siamo"
        organizationData={getOrganizationSchema()}
        socialData={{
          title: 'Chi Siamo | solariXbusiness - La Nostra Storia e Missione',
          description: 'Scopri la storia di solariXbusiness e la nostra missione di rendere le aziende più competitive attraverso l\'indipendenza energetica e soluzioni fotovoltaiche personalizzate.',
          ogImage: '/images/og-chi-siamo.jpg',
          ogType: 'website',
          twitterCard: 'summary_large_image'
        }}
      />
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs />
        <AboutSection />
        <SolarBenefitsWidget />
      </div>
    </>
  )
}
