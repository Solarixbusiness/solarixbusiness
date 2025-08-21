import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'
import SeoManager from '@/components/SeoManager/SeoManager'
import { SEO_CONSTANTS, getOrganizationSchema } from '@/utils/seoConstants'
import IndexSection from './components/IndexSection'
import IntroductionSection from './components/IntroductionSection'
import RequirementsSection from './components/RequirementsSection'
import BenefitsSection from './components/BenefitsSection'
import BanksSection from './components/BanksSection'
import ApplicationSection from './components/ApplicationSection'
import EvaluationSection from './components/EvaluationSection'
import DisbursementSection from './components/DisbursementSection'
import ObligationsSection from './components/ObligationsSection'
import FAQSection from './components/FAQSection'

export const dynamic = 'force-static'
export const revalidate = false
export const runtime = 'nodejs'

export const metadata: Metadata = {
  title: 'Nuova Sabatini Green 2025 | Finanziamenti Agevolati per Investimenti Sostenibili | SolarixBusiness',
  description: 'Scopri la Nuova Sabatini Green: finanziamenti agevolati fino a 4 milioni di euro per investimenti in tecnologie sostenibili e digitalizzazione. Contributi ministeriali e tassi vantaggiosi.',
  keywords: 'nuova sabatini green, finanziamenti agevolati, investimenti sostenibili, digitalizzazione, contributi ministeriali, PMI, tecnologie green, beni strumentali',
  openGraph: {
    title: 'Nuova Sabatini Green 2025 | Finanziamenti Agevolati per Investimenti Sostenibili | SolarixBusiness',
    description: 'Finanziamenti agevolati fino a 4 milioni di euro per investimenti in tecnologie sostenibili e digitalizzazione con contributi ministeriali.',
    url: 'https://www.solarixbusiness.it/bandi-incentivi-nazionali/sabatini-green',
    siteName: SEO_CONSTANTS.SITE_NAME,
    images: [
      {
        url: '/images/sabatini-green-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Nuova Sabatini Green - Finanziamenti Agevolati per Investimenti Sostenibili',
      },
    ],
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nuova Sabatini Green 2025 | Finanziamenti Agevolati per Investimenti Sostenibili | SolarixBusiness',
    description: 'Finanziamenti agevolati fino a 4 milioni di euro per investimenti in tecnologie sostenibili e digitalizzazione con contributi ministeriali.',
    images: ['/images/sabatini-green-og.jpg'],
  },
}

export default function SabatiniGreenPage() {
  return (
    <>
      <SeoManager 
        canonicalPath="/bandi-incentivi-nazionali/sabatini-green"
        organizationData={getOrganizationSchema()}
        socialData={{
          title: 'Nuova Sabatini Green 2025 | Finanziamenti Agevolati per Investimenti Sostenibili | SolarixBusiness',
          description: 'Finanziamenti agevolati fino a 4 milioni di euro per investimenti in tecnologie sostenibili e digitalizzazione con contributi ministeriali.',
          ogImage: '/images/sabatini-green-og.jpg',
          ogType: 'website',
          twitterCard: 'summary_large_image'
        }}
      />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image 
              src="/images/strumenti/SABATINI.webp" 
              alt="Nuova Sabatini Green - Finanziamenti agevolati per investimenti sostenibili" 
              fill 
              className="object-cover opacity-60" 
              priority 
              sizes="100vw"
              quality={85}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/40 to-slate-900/40"></div>
          <div className="relative container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Nuova Sabatini Green
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Finanziamenti agevolati per investimenti sostenibili: la tua azienda verso il futuro green
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <span className="text-gray-100 font-medium">Fino a €4 milioni</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <span className="text-gray-100 font-medium">Contributi fino al 4,648%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs />
          <IndexSection />
          
          <div className="space-y-12">
            <IntroductionSection />
            <RequirementsSection />
            <BenefitsSection />
            <BanksSection />
            <ApplicationSection />
            <EvaluationSection />
            <DisbursementSection />
            <ObligationsSection />
            <FAQSection />
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16 px-8 rounded-2xl shadow-2xl mt-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                SABATINI GREEN - LA TUA OPPORTUNITÀ VERDE È QUI!
              </h2>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl mb-8">
                <h3 className="text-2xl font-bold mb-4 text-yellow-300">
                  HAI SCOPERTO TUTTI I VANTAGGI DELLA NUOVA SABATINI GREEN?
                </h3>
                <p className="text-xl mb-4">
                  TRASFORMA I TUOI INVESTIMENTI IN SOSTENIBILITÀ E RISPARMIO!
                </p>
                <p className="text-lg">
                  Non perdere l'occasione di modernizzare la tua azienda con il massimo supporto finanziario disponibile. La Nuova Sabatini Green è l'evoluzione più vantaggiosa degli incentivi per le PMI!
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <h4 className="text-xl font-bold mb-4 text-green-300">PERCHÉ SCEGLIERE SOLARIXBUSINESS?</h4>
                  <ul className="text-left space-y-2">
                    <li>ESPERIENZA CONSOLIDATA - Conosciamo ogni dettaglio della nuova normativa</li>
                    <li>NETWORK BANCARIO - Rapporti privilegiati con tutte le banche convenzionate</li>
                    <li>CONTRIBUTO MASSIMO - Ti guidiamo per ottenere il 3,575% di contributo annuo</li>
                    <li>ITER COMPLETO - Dalla verifica requisiti all'erogazione finale</li>
                    <li>ZERO RISCHI - Gestiamo ogni aspetto burocratico e normativo</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <h4 className="text-xl font-bold mb-4 text-yellow-300">QUANTO PUOI OTTENERE:</h4>
                  <ul className="text-left space-y-2">
                    <li>INVESTIMENTI: Da 20.000€ a 4.000.000€</li>
                    <li>CONTRIBUTO MAGGIORATO: 3,575% annuo per 5 anni (vs 2,75% ordinaria)</li>
                    <li>BENI AMMESSI: Impianti fotovoltaici, cogenerazione, efficienza energetica</li>
                    <li>ESEMPIO CONCRETO: Su 100.000€ → 14.300€ di contributo totale</li>
                    <li>CUMULABILE: Con Industria 4.0, crediti R&S, fondi regionali</li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-600/20 border border-red-400 p-6 rounded-xl mb-8">
                <h4 className="text-2xl font-bold mb-4 text-red-300">ATTENZIONE: AGISCI SUBITO!</h4>
                <p className="text-lg mb-4">FONDI LIMITATI - PROCEDURA A SPORTELLO</p>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <div>
                    <p>Documenti complessi - Servono esperti certificati</p>
                    <p>Solo banche convenzionate - Devi scegliere quella giusta</p>
                  </div>
                  <div>
                    <p>Termini rigorosi - 12 mesi per completare l'investimento</p>
                    <p>Controlli severi - Zero margine d'errore nella documentazione</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-600/20 border border-green-400 p-8 rounded-xl mb-8">
                <h4 className="text-2xl font-bold mb-4 text-green-300">CONSULENZA SPECIALIZZATA</h4>
                <p className="text-xl mb-6">VALUTAZIONE GRATUITA - ANALISI AMMISSIBILITÀ INCLUSA</p>
                
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-6">
                  <a 
                    href="mailto:info@solarixbusiness.it" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
                  >
                    Email: info@solarixbusiness.it
                  </a>
                  <a 
                    href="tel:+390111883752" 
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
                  >
                    Telefono: 011 1883 7752
                  </a>
                  <a 
                    href="https://wa.me/393470087833" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors flex items-center gap-2"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl mb-8">
                <h4 className="text-xl font-bold mb-4 text-blue-300">IL NOSTRO SERVIZIO COMPLETO:</h4>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <div>
                    <p>VERIFICA GRATUITA requisiti azienda e investimenti</p>
                    <p>SELEZIONE BANCA convenzionata più vantaggiosa</p>
                    <p>PREPARAZIONE DOSSIER completo e conforme</p>
                  </div>
                  <div>
                    <p>ASSISTENZA ISTRUTTORIA fino all'approvazione</p>
                    <p>GESTIONE EROGAZIONE e adempimenti finali</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-600/20 border border-yellow-400 p-6 rounded-xl mb-8">
                <h4 className="text-xl font-bold mb-4 text-yellow-300">ESEMPI DI SUCCESSO:</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-white/10 p-4 rounded-lg">
                    <p className="font-bold">CASO 1:</p>
                    <p>Azienda manifatturiera</p>
                    <p>Investimento 200.000€ → 28.600€ di contributo</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <p className="font-bold">CASO 2:</p>
                    <p>Impresa agricola</p>
                    <p>Fotovoltaico 150.000€ → 21.450€ di contributo</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <p className="font-bold">CASO 3:</p>
                    <p>Officina meccanica</p>
                    <p>LED + compressori 80.000€ → 11.440€ di contributo</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-2xl font-bold mb-4 text-green-300">
                  INVESTI VERDE, GUADAGNA VERDE
                </p>
                <p className="text-xl mb-2">SolarixBusiness - Il tuo partner per la Transizione Ecologica</p>
                <p className="text-lg">Trasforma la sostenibilità in vantaggio competitivo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}