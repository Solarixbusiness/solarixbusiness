import { Metadata } from 'next'
import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'
import SeoManager from '@/components/SeoManager/SeoManager'
import { SEO_CONSTANTS, getOrganizationSchema } from '@/utils/seoConstants'
import IndexSection from './components/IndexSection'
import Section00 from './components/Section00'
import Section01 from './components/Section01'
import Section02 from './components/Section02'
import Section03 from './components/Section03'
import Section04 from './components/Section04'
import Section05 from './components/Section05'
import Section06 from './components/Section06'
import Section07 from './components/Section07'
import CTASection from './components/CTASection'

export const revalidate = 86400
export const runtime = 'nodejs'

export const metadata: Metadata = {
  title: 'Conto Termico 3.0 | Incentivi per Efficienza Energetica | SolarixBusiness',
  description: 'Scopri il Conto Termico 3.0: incentivi fino al 65% per pompe di calore, caldaie a biomassa, sistemi ibridi e interventi di efficienza energetica. Massimizza i tuoi risparmi con SolarixBusiness.',
  keywords: 'conto termico 3.0, incentivi efficienza energetica, pompe di calore, caldaie biomassa, sistemi ibridi, GSE, riqualificazione energetica',
  openGraph: {
    title: 'Conto Termico 3.0 | Incentivi per Efficienza Energetica | SolarixBusiness',
    description: 'Scopri il Conto Termico 3.0: incentivi fino al 65% per pompe di calore, caldaie a biomassa, sistemi ibridi e interventi di efficienza energetica.',
    url: 'https://www.solarixbusiness.it/conto-termico-3-0',
    siteName: SEO_CONSTANTS.SITE_NAME,
    images: [
      {
        url: '/images/conto-termico-3-0-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Conto Termico 3.0 - Incentivi per Efficienza Energetica',
      },
    ],
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conto Termico 3.0 | Incentivi per Efficienza Energetica | SolarixBusiness',
    description: 'Scopri il Conto Termico 3.0: incentivi fino al 65% per pompe di calore, caldaie a biomassa, sistemi ibridi e interventi di efficienza energetica.',
    images: ['/images/conto-termico-3-0-og.jpg'],
  },
}

export default function ContoTermico30Page() {
  return (
    <>
      <SeoManager 
        canonicalPath="/conto-termico-3-0"
        organizationData={getOrganizationSchema()}
        socialData={{
          title: 'Conto Termico 3.0 | Incentivi per Efficienza Energetica | SolarixBusiness',
          description: 'Scopri il Conto Termico 3.0: incentivi fino al 65% per pompe di calore, caldaie a biomassa, sistemi ibridi e interventi di efficienza energetica.',
          ogImage: '/images/conto-termico-3-0-og.jpg',
          ogType: 'website',
          twitterCard: 'summary_large_image'
        }}
      />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image 
              src="/images/strumenti/contotermico.webp" 
              alt="Conto Termico 3.0 - Efficienza energetica e fonti rinnovabili" 
              fill 
              className="object-cover opacity-60" 
              priority 
              sizes="100vw" 
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/40 to-emerald-900/40"></div>
          <div className="relative container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Il Conto Termico 3.0
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Una Nuova Era per l'Efficienza Energetica: Conto Termico 3.0 l'incentivo esempio per la Comunità Europea
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <span className="text-green-100 font-medium">Incentivi fino al 100%</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <span className="text-green-100 font-medium">€900 milioni disponibili</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs />
          <IndexSection />
          
          <div className="space-y-12">
            <Section00 />
            <Section01 />
            <Section02 />
            <Section03 />
            <Section04 />
            <Section05 />
            <Section06 />
            <Section07 />
            <CTASection />
          </div>
        </div>
      </div>
    </>
  )
}
