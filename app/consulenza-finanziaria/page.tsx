'use client';

import React from 'react';
import Link from 'next/link';
import ServiceForm from '@/components/ServiceForm'
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
            <ServiceForm 
              title="Richiedi consulenza finanziaria" 
              formType="consulenza-finanziaria"
            />
          </div>

        </div>
      </section>
    </>
  );
} 