import React from 'react';
import IndiceSection from './components/index';
import Parte1Scenario from './components/parte1scenario';
import Parte2CosaFinanziare from './components/parte2cosafinanziare';
import Parte3Procedura from './components/parte3procedura';
import Parte4Strategia from './components/parte4strategia';
import Parte5Conclusioni from './components/parte5conclusioni';
import CTA from './components/CTA';

export const revalidate = 86400;
export const runtime = 'nodejs';

export default function SimestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header principale con hero image */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-green-800 text-white py-16 overflow-hidden">
        {/* Background hero image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/strumenti/SIMEST_11zon.webp"
            alt="SIMEST 2025 - Finanziamenti agevolati per l'internazionalizzazione"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/80 to-green-800/80"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            GUIDA COMPLETA SIMEST 2025
          </h1>
          <p className="text-xl text-blue-100 mb-4">
            Finanziamenti agevolati per l'internazionalizzazione delle imprese
          </p>
          <p className="text-lg text-green-200">
            Fino a €5 milioni al tasso 0,371% - Condizioni esclusive per energivore e filiere
          </p>
        </div>
      </div>

      {/* Container principale */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Indice navigabile */}
        <div className="mb-12">
          <IndiceSection />
        </div>

        {/* Contenuto principale */}
        <div className="space-y-12">
          
          {/* Parte 1: Scenario e Fondamenti */}
          <section>
            <Parte1Scenario />
          </section>

          {/* Parte 2: Cosa Finanziare */}
          <section>
            <Parte2CosaFinanziare />
          </section>

          {/* Parte 3: Procedura di Accesso */}
          <section>
            <Parte3Procedura />
          </section>

          {/* Parte 4: Strategia e Ottimizzazione */}
          <section>
            <Parte4Strategia />
          </section>

          {/* Parte 5: Conclusioni e Appendici */}
          <section>
            <Parte5Conclusioni />
          </section>

          {/* Call to Action finale */}
          <section className="mt-16">
            <CTA />
          </section>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Informazioni guida */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-300">
                Guida SIMEST 2025
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Guida completa e aggiornata per accedere ai finanziamenti SIMEST 2025. 
                Tutte le informazioni, procedure e strategie per massimizzare i benefici 
                per la tua impresa.
              </p>
            </div>

            {/* Contatti */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-green-300">
                Contatti
              </h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p>
                  <span className="font-semibold">Telefono:</span> 011 1883 7752
                </p>
                <p>
                  <span className="font-semibold">Cellulare:</span> 347 008 7833
                </p>
                <p>
                  <span className="font-semibold">Email:</span> info@solarixbusiness.it
                </p>
              </div>
            </div>

            {/* Servizi */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-purple-300">
                I Nostri Servizi
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Consulenza finanziamenti agevolati</li>
                <li>• Analisi requisiti e fattibilità</li>
                <li>• Preparazione domande di accesso</li>
                <li>• Gestione iter burocratico</li>
                <li>• Ottimizzazione strategie fiscali</li>
              </ul>
            </div>

          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © 2025 SolariX Business - Consulenza strategica per i finanziamenti agevolati. 
              Tutti i diritti riservati.
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Guida aggiornata a gennaio 2025 - Le informazioni possono variare. 
              Consultare sempre le fonti ufficiali SIMEST.
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
}
