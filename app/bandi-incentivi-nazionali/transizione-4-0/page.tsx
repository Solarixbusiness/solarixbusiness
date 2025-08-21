import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';

// Static imports per performance ottimali - Server Components
import IndiceSection from './components/IndiceSection';
import Parte1QuadroNormativo from './components/Parte1QuadroNormativo';
import Parte2BeniCrediti from './components/Parte2BeniCrediti';
import Parte3DocumentazioneControlli from './components/Parte3DocumentazioneControlli';

export const metadata: Metadata = {
  title: 'Transizione 4.0 - Guida Completa | SolarixBusiness',
  description: 'Guida completa al Piano Transizione 4.0: crediti d\'imposta, beni ammissibili, procedure e documentazione necessaria per le imprese.',
  keywords: 'Transizione 4.0, credito imposta, beni strumentali, industria 4.0, digitalizzazione, incentivi imprese',
  openGraph: {
    title: 'Transizione 4.0 - Guida Completa',
    description: 'Tutto quello che devi sapere sul Piano Transizione 4.0: crediti d\'imposta, beni ammissibili e procedure.',
    type: 'article',
  },
};

// Static generation per performance ottimali
export const revalidate = 86400; // ISR ogni 24h
export const runtime = 'nodejs';

export default function Transizione40Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/images/strumenti/trans-4.0.webp" 
            alt="Transizione 4.0 - Piano per la digitalizzazione e innovazione tecnologica delle imprese" 
            fill 
            className="object-cover opacity-60" 
            priority 
            sizes="100vw"
            quality={85}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Transizione 4.0
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Guida completa al Piano Transizione 4.0: crediti d'imposta per la digitalizzazione e l'innovazione tecnologica delle imprese
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <span className="text-blue-100 font-medium">Crediti d'Imposta</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <span className="text-blue-100 font-medium">Beni Strumentali 4.0</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <span className="text-blue-100 font-medium">Digitalizzazione</span>
            </div>
          </div>
        </div>
      </div>

      {/* Indice */}
      <IndiceSection />

      {/* Contenuto principale */}
      <div className="container mx-auto px-4 py-8">
        <Parte1QuadroNormativo />
        <Parte2BeniCrediti />
        <Parte3DocumentazioneControlli />
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Hai bisogno di assistenza?</h3>
            <p className="text-gray-300 mb-6">
              I nostri esperti sono a disposizione per supportarti nell'accesso ai crediti d'imposta Transizione 4.0
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contatti" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors">
                Contattaci
              </a>
              <a href="/consulenza" className="border border-gray-600 hover:border-gray-500 px-6 py-3 rounded-lg font-medium transition-colors">
                Richiedi Consulenza
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
