'use client';

import { useState, lazy, Suspense } from 'react'

const MainContent = lazy(() => import('./components/MainContent'));
const ServicesContent = lazy(() => import('./components/ServicesContent'));

export default function HorizonEuropePage() {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({})

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            HORIZON EUROPE
          </h1>
          <p className="text-xl md:text-2xl text-center opacity-90 max-w-4xl mx-auto">
            La Nostra Guida Completa ai 6 Gruppi Tematici per le Vostre Opportunità di Crescita
          </p>
          <p className="text-lg text-center mt-4 opacity-80">
            Noi di Solarix Business vi accompagniamo nell'evoluzione del vostro business attraverso i fondi europei
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Contenuto Principale */}
          <Suspense fallback={<div className="bg-white rounded-lg shadow-lg p-8 mb-8 animate-pulse"><div className="h-8 bg-gray-200 rounded mb-4"></div><div className="h-4 bg-gray-200 rounded"></div></div>}>
            <MainContent openSections={openSections} toggleSectionAction={toggleSection} />
          </Suspense>

          {/* Servizi e Supporto */}
          <Suspense fallback={<div className="bg-white rounded-lg shadow-lg p-8 mb-8 animate-pulse"><div className="h-8 bg-gray-200 rounded mb-4"></div><div className="h-4 bg-gray-200 rounded"></div></div>}>
            <ServicesContent openSections={openSections} toggleSectionAction={toggleSection} />
          </Suspense>

          {/* CTA */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Solarix Business - Il Vostro Partner Strategico per i Fondi Europei</h2>
            <p className="text-xl mb-6">
              Dalla candidatura alla rendicontazione finale, vi accompagniamo per massimizzare i fondi europei e far crescere il vostro business
            </p>
            <div className="flex justify-center mb-6">
              <a 
                href="https://wa.me/393470087833" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg flex items-center space-x-3 transition-colors duration-300 text-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span>Contattaci su WhatsApp: 347 008 7833</span>
              </a>
            </div>
            <p className="text-lg mb-4">
              Per una consulenza personalizzata sui fondi europei Horizon Europe
            </p>
            <div className="text-sm opacity-90">
              Documento preparato dal team Solarix Business - Aggiornato con le ultime informazioni ufficiali da Horizon Europe 2025
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
