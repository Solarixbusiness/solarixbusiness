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
  'name': 'Strategia Energetica Aziendale',
  'provider': {
    '@type': 'Organization',
    'name': 'SolarixBusiness',
    'url': 'https://www.solarixbusiness.it'
  },
  'serviceType': 'Consulenza strategica energetica',
  'areaServed': {
    '@type': 'Country',
    'name': 'Italia'
  },
  'description': 'Servizio di consulenza per lo sviluppo di strategie energetiche aziendali efficienti e sostenibili.'
};

export default function StrategiaEnergeticaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="py-16 px-6 md:px-20 bg-white text-gray-900">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-green-700">Strategia Energetica Aziendale</h1>
          <p className="text-lg text-gray-700 mb-10">Il fotovoltaico non è più solo una scelta sostenibile: oggi è una mossa strategica per migliorare la solidità finanziaria della tua impresa. Con SolarixBusiness, ogni impianto viene progettato come un vero asset patrimoniale, inserito in un piano tecnico e fiscale su misura, ottimizzato per ottenere il massimo ritorno.</p>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-600 mb-3">Dalla spesa all'investimento: cambia paradigma</h2>
            <p className="mb-4">Molte aziende ancora oggi vedono l'impianto fotovoltaico come un semplice strumento per abbattere il costo della bolletta. In realtà, l'approccio giusto è radicalmente diverso: il fotovoltaico è un'operazione di bilancio, un acceleratore di ritorno economico, una leva fiscale e ambientale.</p>
            <p>La nostra consulenza parte da questo: aiutarti a vedere il tuo tetto come un generatore di capitale.</p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-600 mb-3">Analisi tecnica + analisi fiscale = ritorno misurabile</h2>
            <p className="mb-4">Ogni azienda ha consumi diversi, una posizione geografica unica, un bilancio distinto. Per questo il nostro approccio parte sempre da un'analisi congiunta: tecnica (consumi, tetto, struttura) e fiscale (incentivi, detrazioni, cumulabilità).</p>
            <p className="mb-4">L'obiettivo non è venderti un impianto. È costruire per te un piano con ritorni stimati chiari e una roadmap di recupero dell'investimento: tra bandi, risparmio energetico e flussi incentivati.</p>
            <p>Ti mostriamo, nero su bianco, quanto il tuo impianto può farti risparmiare e quanto può generare in termini di flusso economico.</p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-600 mb-3">Incentivi e contributi: non uno, ma tutti</h2>
            <p className="mb-4">Il punto di forza del nostro modello è la capacità di integrare più incentivi contemporaneamente. Collaboriamo con uno studio di finanza agevolata che ci permette di combinare:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>CER - Comunità Energetiche Rinnovabili</li>
              <li>Transizione 5.0</li>
              <li>Conto Termico</li>
              <li>Bandi regionali e settoriali</li>
              <li>Agevolazioni per agricoltura, PMI e industria</li>
            </ul>
            <p className="mt-4">Costruiamo un progetto che tiene conto delle tempistiche, delle compatibilità normative e del ritorno fiscale massimo possibile. Tutto ciò, gestito con precisione e riservatezza.</p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-600 mb-3">Strategia ESG e valore d'impresa</h2>
            <p className="mb-4">Investire in un impianto fotovoltaico con SolarixBusiness non è solo un vantaggio economico. È anche una scelta che migliora il tuo posizionamento sul mercato. Le imprese con alto rating ESG ottengono punteggi più alti nei bandi, sono più apprezzate da clienti e fornitori e accedono più facilmente a finanziamenti bancari e agevolati.</p>
            <p className="mb-4">Inoltre, valorizziamo ogni chilowattora prodotto anche sotto il profilo ambientale, accompagnandoti nella generazione di crediti di carbonio e nella costruzione di una vera strategia di sostenibilità.</p>
          </div>

          <div className="bg-gray-50 py-14 px-6 md:px-16 rounded-xl shadow mt-20">
            <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">Cosa dice chi ha scelto la nostra strategia</h2>
            <blockquote className="text-lg italic text-gray-700 max-w-3xl mx-auto text-center">
              "Avevamo già valutato l'installazione di un impianto, ma nessuno ci aveva mai presentato un progetto così completo. Abbiamo ricevuto un piano con R.O.I. previsto, accesso a tre bandi cumulati e una simulazione fiscale chiara. Il tutto è stato seguito con cura, senza sorprese."
            </blockquote>
            <p className="mt-4 text-center font-semibold text-green-800">Claudia S., Responsabile Finanziario - Produzione industriale (TO)</p>
          </div>

          <div className="text-center mt-20">
            <h2 className="text-2xl font-semibold text-green-600 mb-3">Vuoi ottimizzare la gestione energetica della tua azienda?</h2>
            <p className="mb-6">Richiedi una consulenza gratuita. Ti aiuteremo a sviluppare la strategia più efficace per le tue esigenze.</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link 
                href="/contatti#contact-section" 
                className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded"
              >
                Parla con un consulente
              </Link>
              <Link 
                href="/analisi-personalizzata" 
                className="bg-white hover:bg-gray-100 border border-green-700 text-green-700 font-semibold py-2 px-4 rounded"
              >
                Richiedi analisi personalizzata
              </Link>
            </div>
          </div>

          <div className="mt-12">
            <ServiceForm 
              title="Richiedi consulenza strategica" 
              formType="strategia-energetica"
            />
          </div>

        </div>
      </section>
    </>
  );
} 