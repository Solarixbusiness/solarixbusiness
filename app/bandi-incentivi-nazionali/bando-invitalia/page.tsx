import React from 'react';
import Image from 'next/image';
import IntroductionSection from './components/IntroductionSection';
import ResourcesSection from './components/ResourcesSection';
import SolutionsSection from './components/SolutionsSection';
import ContributionsSection from './components/ContributionsSection';
import ServicesSection from './components/ServicesSection';
import LegalSection from './components/LegalSection';

export const revalidate = 86400; // ISR ogni 24h
export const runtime = 'nodejs';

export default function BandoInvitaliaPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/images/strumenti/INVITALIA.webp" 
            alt="Bando Invitalia 2025 - Contributi a fondo perduto per autoproduzione energia da fonti rinnovabili" 
            fill 
            className="object-cover opacity-80" 
            priority 
            sizes="100vw"
            quality={85}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-indigo-900/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              CONTRIBUTI A FONDO PERDUTO FINO AL 40%
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">
              Bando Invitalia 2025 per l'Autoproduzione di Energia da Fonti Rinnovabili nelle PMI
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Solarix Business vi accompagna passo dopo passo per ottenere i finanziamenti
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Introduction and Eligibility */}
        <IntroductionSection />

        {/* Resources and Investment Range */}
        <ResourcesSection />

        {/* Energy Solutions */}
        <SolutionsSection />

        {/* Contributions and Examples */}
        <ContributionsSection />

        {/* Services and ROI */}
        <ServicesSection />

        {/* Legal and Deadlines */}
        <LegalSection />

        {/* Call to Action */}
        <div className="bg-orange-600 text-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-bold mb-4">NON PERDERE QUESTA OPPORTUNITÀ UNICA!</h2>
          <p className="text-xl mb-6">
            Solarix Business ti accompagna in ogni fase del progetto con la massima professionalità
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-orange-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Contatti Diretti</h3>
              <p className="mb-2"><strong>Telefono:</strong> 011 1883 7752</p>
              <p className="mb-2"><strong>Cellulare:</strong> 347 008 7833</p>
              <p className="mb-2"><strong>Email:</strong> info@solarixbusiness.it</p>
              <p><strong>Consulenza:</strong> Gratuita e senza impegno</p>
            </div>
            <div className="bg-orange-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Tempi di Risposta</h3>
              <p className="mb-2"><strong>Prima valutazione:</strong> 24 ore</p>
              <p className="mb-2"><strong>Preventivo completo:</strong> 48 ore</p>
              <p><strong>Supporto:</strong> Sempre disponibile</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-colors">
              RICHIEDI CONSULENZA GRATUITA ORA
            </button>
            <a 
              href="https://wa.me/+393470087833"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-xl font-bold transition-colors"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.14 4.486c-3.868 0-7.015 3.147-7.015 7.015 0 1.513.469 2.919 1.27 4.075l-1.665 4.975 5.095-1.635a6.979 6.979 0 004.315 1.485c3.868 0 7.015-3.147 7.015-7.015s-3.147-7.015-7.015-7.015h-.005z"/>
              </svg>
              CONTATTACI SU WHATSAPP
            </a>
          </div>
        </div>

        {/* Final Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg shadow-lg mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">INIZIATE SUBITO IL VOSTRO PROGETTO</h2>
            <p className="text-xl mb-8">
              Non perdete l'opportunità di trasformare la vostra azienda in un esempio di sostenibilità energetica con il supporto dei contributi statali fino al 40%.
            </p>
            <p className="text-lg mb-8">
              I nostri esperti vi aspettano per una consulenza gratuita!
            </p>
            <div className="space-y-4">
              <p className="text-lg">www.solarixbusiness.it</p>
              <p className="text-lg">info@solarixbusiness.it</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
