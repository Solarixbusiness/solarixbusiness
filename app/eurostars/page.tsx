'use client';

import { useState, Suspense, lazy } from 'react';
import SeoHead from '../../components/SeoHead/SeoHead';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

// Lazy load components
const ProgrammeInfo = lazy(() => import('./components/ProgrammeInfo'));
const OpportunityMapping = lazy(() => import('./components/OpportunityMapping'));
const ErrorPrevention = lazy(() => import('./components/ErrorPrevention'));

export default function EurostarsPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <>
      <SeoHead 
        title="Eurostars - Innovazione Tecnologica Europea Collaborativa | SolariX Business"
        description="Eurostars: finanziamenti fino al 60% a fondo perduto per PMI innovative. Collaborazioni internazionali, tecnologie avanzate, mercati europei. Budget 2-3 milioni €."
        keywords="Eurostars, innovazione tecnologica, collaborazione internazionale, PMI innovative, finanziamenti europei, ricerca sviluppo"
        canonicalUrl="https://www.solarixbusiness.it/eurostars"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs 
            items={[
              { label: 'Home', path: '/' },
              { label: 'Bandi Europei', path: '/bandi-europei' },
              { label: 'Eurostars', path: '/eurostars' }
            ]}
          />

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-indigo-800 mb-6">
              🚀 Eurostars - Innovazione Tecnologica Europea
            </h1>
            <p className="text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
              La Nostra Guida all'Innovazione Tecnologica Europea Collaborativa
            </p>
            
          </div>

          {/* Programme Info Component */}
          <Suspense fallback={
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 animate-pulse">
              <div className="h-8 bg-gray-200 rounded mb-4"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
            </div>
          }>
            <ProgrammeInfo 
              expandedSection={expandedSection} 
              toggleSectionAction={toggleSection} 
            />
          </Suspense>

          {/* Opportunity Mapping Component */}
          <Suspense fallback={
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 animate-pulse">
              <div className="h-8 bg-gray-200 rounded mb-4"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
            </div>
          }>
            <OpportunityMapping 
              expandedSection={expandedSection} 
              toggleSectionAction={toggleSection} 
            />
          </Suspense>

          {/* Error Prevention Component */}
          <Suspense fallback={
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 animate-pulse">
              <div className="h-8 bg-gray-200 rounded mb-4"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
            </div>
          }>
            <ErrorPrevention 
              expandedSection={expandedSection} 
              toggleSectionAction={toggleSection} 
            />
          </Suspense>

          {/* WhatsApp CTA */}
          <div className="text-center mt-12">
            <div className="bg-blue-50 p-8 rounded-2xl border-2 border-blue-200">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">
                🚀 Trasforma la Tua Azienda in Innovatore Europeo
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Contattaci per una <strong>consulenza personalizzata gratuita</strong> su Eurostars. 
                Ti aiutiamo a ottenere <strong>finanziamenti fino al 60% a fondo perduto</strong> per sviluppare tecnologie innovative con partner europei.
              </p>
              <a
                href="https://wa.me/393470087833?text=Ciao%20SolariX%20Business%2C%20sono%20interessato%20al%20programma%20Eurostars%20per%20sviluppare%20tecnologie%20innovative%20con%20collaborazioni%20internazionali.%20Vorrei%20una%20consulenza%20personalizzata."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Consulenza Gratuita WhatsApp
              </a>
              <p className="text-sm text-gray-600 mt-4">
                📱 <strong>347 008 7833</strong> - Rispondiamo entro 2 ore lavorative
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
