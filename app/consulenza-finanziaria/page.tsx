'use client';

import React from 'react';
import Link from 'next/link';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'Consulenza Finanziaria Integrata',
  'provider': {
    '@type': 'Organization',
    'name': 'SolarixBusiness',
    'url': 'https://www.solarixbusiness.it'
  },
  'serviceType': 'Consulenza finanziaria per investimenti energetici',
  'areaServed': {
    '@type': 'Country',
    'name': 'Italia'
  },
  'description': 'Servizio di consulenza finanziaria integrata per ottimizzare gli investimenti in energia rinnovabile.',
  'offers': {
    '@type': 'Offer',
    'priceCurrency': 'EUR',
    'availability': 'https://schema.org/InStock'
  }
};

export default function ConsulenzaFinanziariaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="py-16 px-6 md:px-20 bg-white text-gray-900">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-green-700">Consulenza Finanziaria Integrata</h1>
          <p className="text-lg text-gray-700 mb-10">La transizione energetica non è solo una questione tecnica. È una leva fiscale, finanziaria e strategica che va gestita con precisione e competenza. Per questo, SolarixBusiness integra in ogni progetto un supporto di <strong>finanza agevolata professionale</strong>, continuo, aggiornato e cucito su misura per l'impresa.</p>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-600 mb-3">Perché serve un consulente finanziario nel tuo impianto</h2>
            <p className="mb-4">Un impianto fotovoltaico ben progettato ti fa risparmiare. Ma un impianto <strong>progettato con la finanza agevolata integrata</strong> può arrivare a costare la metà, generare crediti fiscali, contributi a fondo perduto e ridurre il tempo di ritorno dell'investimento anche a meno di 2 anni.</p>
            <p>La differenza è tutta nella strategia. E nella capacità di sapere, ogni mese, quali strumenti sono disponibili e compatibili per la tua realtà aziendale.</p>
          </div>

          {/* Esempi di casi studio */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-600 mb-3">Esempio 1 – Azienda manifatturiera, Veneto</h2>
            <p className="mb-4">Una PMI con alti consumi energetici ha installato un impianto fotovoltaico da 400 kWp. Inizialmente l'investimento previsto era di circa 500.000 €. Dopo il nostro intervento integrato con i consulenti fiscali e di finanza agevolata:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Accesso alla Transizione 5.0 (63% su 300.000 €)</li>
              <li>Bando regionale per l'autoconsumo (40% su 150.000 €)</li>
              <li>Integrazione in una CER con tariffa incentivante</li>
            </ul>
            <p className="mt-4">Risultato: l'investimento netto è sceso sotto i 100.000 €. L'azienda ha recuperato quasi l'80% grazie a contributi non cumulati ma sapientemente distribuiti. Il ritorno economico stimato: 18 mesi.</p>
          </div>

          {/* Altri esempi... */}
          {/* Esempio 2, 3, e 4 seguono lo stesso pattern */}

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-600 mb-3">Un partner a lungo termine, non una pratica</h2>
            <p className="mb-4">SolarixBusiness lavora con studi di consulenza specializzati in bandi, crediti d'imposta, PNRR e strumenti regionali, con un aggiornamento costante su ogni novità normativa. Ma la vera differenza è il rapporto: non ti seguiamo per una pratica, ti accompagniamo ogni anno, con un piano di monitoraggio delle opportunità per la tua crescita.</p>
            <p className="mb-4">Quando cambi un macchinario, quando ampli una linea produttiva, quando attivi una nuova sede... ci siamo. Non serve ripartire ogni volta da zero. La consulenza è integrata, e già sintonizzata con i tuoi obiettivi.</p>
            <p>Questo significa meno costi, più ritorni, più velocità. E soprattutto: meno stress per te.</p>
          </div>

          <div className="bg-gray-50 py-14 px-6 md:px-16 rounded-xl shadow mt-20">
            <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">Non solo impianti. Valore continuativo.</h2>
            <blockquote className="text-lg italic text-gray-700 max-w-3xl mx-auto text-center">
              "Chi installa con SolarixBusiness entra in un sistema dove ogni investimento energetico viene valutato fiscalmente e finanziato al massimo delle possibilità. La differenza è nel metodo, non nel modulo."
            </blockquote>
            <p className="mt-4 text-center font-semibold text-green-800">Ufficio tecnico SolarixBusiness</p>
          </div>

          <div className="text-center mt-20">
            <h2 className="text-2xl font-semibold text-green-600 mb-3">Vuoi ottimizzare i tuoi investimenti energetici?</h2>
            <p className="mb-6">Richiedi una consulenza gratuita. Ti aiuteremo a costruire la strategia finanziaria più efficace per il tuo progetto.</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link 
                href="/contatti#contact-section" 
                className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded"
              >
                Parla con un consulente
              </Link>
              <Link 
                href="/simulazione-recupero" 
                className="bg-white hover:bg-gray-100 border border-green-700 text-green-700 font-semibold py-2 px-4 rounded"
              >
                Richiedi simulazione di recupero
              </Link>
            </div>
          </div>

          <div className="mt-12">
            <div className="bg-white py-16 px-6 md:px-16">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-green-700 mb-6">Hai bisogno di supporto?</h2>
                <p className="text-gray-700 mb-8">
                  Contattaci direttamente su WhatsApp per una consulenza immediata
                </p>
                <a 
                  href="https://wa.me/+393470087833"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
                  </svg>
                  Contattaci su WhatsApp
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
} 