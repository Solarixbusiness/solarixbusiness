import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import IndiceSection from './components/IndiceSection';
import Parte1FondamentiGenerali from './components/Parte1FondamentiGenerali';
import Parte2SistemaIncentivante from './components/Parte2SistemaIncentivante';
import Parte3FasiCostituzione from './components/Parte3FasiCostituzione';
import Parte4StatutoGovernance from './components/Parte4StatutoGovernance';
import Parte5CasiPraticiConclusioniCER from './components/Parte5CasiPraticiConclusioniCER';
import CTA from './components/CTA';

export const revalidate = 86400;
export const runtime = 'nodejs';

export const metadata: Metadata = {
  title: 'Fondo Perduto CER e Tariffa Incentivante: Guida Completa 2025 | SolariX Business',
  description: 'Guida completa al Fondo Perduto per Comunità Energetiche Rinnovabili e Tariffa Incentivante: requisiti, benefici, procedure e incentivi.',
  keywords: 'fondo perduto CER, comunità energetiche rinnovabili, tariffa incentivante, PNRR, incentivi energia rinnovabile',
  openGraph: {
    title: 'Fondo Perduto CER e Tariffa Incentivante: Guida Completa 2025',
    description: 'Guida completa al Fondo Perduto per Comunità Energetiche Rinnovabili e Tariffa Incentivante: requisiti, benefici, procedure e incentivi.',
    type: 'article',
    url: 'https://www.solarixbusiness.com/bandi-incentivi-nazionali/fondo-perduto-cer',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fondo Perduto CER e Tariffa Incentivante: Guida Completa 2025',
    description: 'Guida completa al Fondo Perduto per Comunità Energetiche Rinnovabili e Tariffa Incentivante: requisiti, benefici, procedure e incentivi.',
  },
};

export default function FondoPerdutoCERPage() {
  // Schema.org structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Fondo Perduto CER e Tariffa Incentivante: Guida Completa 2025',
    description: 'Guida completa al Fondo Perduto per Comunità Energetiche Rinnovabili e Tariffa Incentivante: requisiti, benefici, procedure e incentivi.',
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
    datePublished: '2025-08-20',
    dateModified: '2025-08-20'
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image 
              src="/images/strumenti/CER..webp" 
              alt="Fondo Perduto CER e Tariffa Incentivante - Comunità Energetiche Rinnovabili" 
              fill 
              className="object-cover opacity-60" 
              priority 
              sizes="100vw" 
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/40 to-emerald-900/40"></div>
          <div className="relative container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Fondo Perduto CER
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Guida completa al Fondo Perduto per Comunità Energetiche Rinnovabili e Tariffa Incentivante: tutto quello che devi sapere per accedere agli incentivi
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <span className="text-green-100 font-medium">Contributo PNRR fino al 40%</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <span className="text-green-100 font-medium">Tariffa incentivante 20 anni</span>
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
          
          {/* Parte 1: Fondamenti Generali */}
          <Parte1FondamentiGenerali />
          
          {/* Parte 2: Sistema Incentivante */}
          <Parte2SistemaIncentivante />
          
          {/* Parte 3: Fasi Costituzione */}
          <Parte3FasiCostituzione />
          
          {/* Parte 4: Statuto e Governance */}
          <Parte4StatutoGovernance />
          
          {/* Parte 5: Casi Pratici e Conclusioni */}
          <Parte5CasiPraticiConclusioniCER />

        </div>

        {/* CTA Section */}
        <CTA />
      </div>
    </>
  );
}
