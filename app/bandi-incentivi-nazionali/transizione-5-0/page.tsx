import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';
import IndiceSection from './components/IndiceSection';
import Parte1QuadroNormativo from './components/Parte1QuadroNormativo';
import Parte2ProceduraAccesso from './components/Parte2ProceduraAccesso';
import Parte3BeniInvestimenti from './components/Parte3BeniInvestimenti';
import Parte4RisparmioEnergetico from './components/Parte4RisparmioEnergetico';
import Parte5Cumulabilita from './components/Parte5Cumulabilita';
import Parte6ControlliAspettiFinali from './components/Parte6ControlliAspettiFinali';
import Parte7ContattieAssistenza from './components/Parte7ContattieAssistenza';
import Parte8ApprofondimentiTematici from './components/Parte8ApprofondimentiTematici';

export const revalidate = 86400;
export const runtime = 'nodejs';

export const metadata: Metadata = {
  title: 'Transizione 5.0: Guida Completa 2025 | SolariX Business',
  description: 'Guida completa alla Transizione 5.0 2025: requisiti, benefici, crediti d\'imposta e procedure per le imprese italiane.',
  keywords: 'transizione 5.0, credito d\'imposta, efficienza energetica, digitalizzazione, industria 4.0, sostenibilità',
  openGraph: {
    title: 'Transizione 5.0: Guida Completa 2025',
    description: 'Guida completa alla Transizione 5.0 2025: requisiti, benefici, crediti d\'imposta e procedure per le imprese italiane.',
    type: 'article',
    url: 'https://www.solarixbusiness.com/bandi-incentivi-nazionali/transizione-5-0',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transizione 5.0: Guida Completa 2025',
    description: 'Guida completa alla Transizione 5.0 2025: requisiti, benefici, crediti d\'imposta e procedure per le imprese italiane.',
  },
};

export default function Transizione50Page() {
  // Schema.org structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Transizione 5.0: Guida Completa 2025',
    description: 'Guida completa alla Transizione 5.0 2025: requisiti, benefici, crediti d\'imposta e procedure per le imprese italiane.',
    author: {
      '@type': 'Organization',
      name: 'SolariX Business',
      url: 'https://www.solarixbusiness.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'SolariX Business',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.solarixbusiness.com/logo.png'
      }
    },
    datePublished: '2025-05-31',
    dateModified: '2025-05-31'
  };

  return (
    <>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image 
              src="/images/strumenti/trans-5.0.webp" 
              alt="Transizione 5.0 - Digitalizzazione e sostenibilità energetica" 
              fill 
              className="object-cover opacity-60" 
              priority 
              sizes="100vw" 
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-indigo-900/40"></div>
          <div className="relative container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Transizione 5.0
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Guida completa al Piano Transizione 5.0: crediti d'imposta, requisiti e procedure per la digitalizzazione e l'efficienza energetica delle imprese
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <span className="text-blue-100 font-medium">Crediti d'imposta fino al 45%/67,5%</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <span className="text-blue-100 font-medium">€6,3 miliardi disponibili</span>
              </div>
            </div>
          </div>
        </div>

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Main Content */}
        <div className="container mx-auto px-6 py-12">
          
          {/* Indice */}
          <IndiceSection />
          
          {/* Parte 1: Quadro Normativo */}
          <Parte1QuadroNormativo />
          
          {/* Parte 2: Procedura di Accesso */}
          <Parte2ProceduraAccesso />
          
          {/* Parte 3: Beni e Investimenti */}
          <Parte3BeniInvestimenti />
          
          {/* Parte 4: Risparmio Energetico */}
          <Parte4RisparmioEnergetico />
          
          {/* Parte 5: Cumulabilità */}
          <Parte5Cumulabilita />
          
          {/* Parte 6: Controlli e Aspetti Finali */}
          <Parte6ControlliAspettiFinali />
          
          {/* Parte 7: Contatti e Assistenza */}
          <Parte7ContattieAssistenza />
          
          {/* Parte 8: Approfondimenti Tematici */}
          <Parte8ApprofondimentiTematici />

        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Hai bisogno di supporto per il Piano Transizione 5.0?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              I nostri esperti ti aiutano a valutare l'ammissibilità, calcolare i benefici e gestire l'intero processo di accesso al credito d'imposta.
            </p>
            <Link 
              href="/contatti" 
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-300"
            >
              Richiedi Consulenza Gratuita
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
