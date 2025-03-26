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
  'name': 'Monetizzazione Ambientale',
  'provider': {
    '@type': 'Organization',
    'name': 'SolarixBusiness',
    'url': 'https://www.solarixbusiness.it'
  },
  'serviceType': 'Consulenza per monetizzazione crediti ambientali',
  'areaServed': {
    '@type': 'Country',
    'name': 'Italia'
  },
  'description': 'Servizio di consulenza per la monetizzazione dei crediti ambientali e l\'accesso agli incentivi green.',
  'offers': {
    '@type': 'Offer',
    'priceCurrency': 'EUR',
    'availability': 'https://schema.org/InStock'
  }
};

export default function MonetizzazioneAmbientalePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="py-16 px-6 md:px-20 bg-white text-gray-900">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-green-700">Monetizzazione Ambientale</h1>
          <p className="text-lg text-gray-700 mb-10">Installare un impianto fotovoltaico oggi significa molto di più che risparmiare in bolletta. Con SolarixBusiness, ogni impianto viene trasformato in una fonte di <strong>redditività ambientale</strong>, grazie a un sistema integrato che include incentivi, crediti e strumenti di finanza sostenibile.</p>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-600 mb-3">Cos'è la Monetizzazione Ambientale?</h2>
            <p className="mb-4">È la capacità di generare reddito dalla tua scelta sostenibile. Non solo risparmio energetico, ma <strong>compensazione di CO₂, accesso ai crediti di carbonio</strong>, e partecipazione a Comunità Energetiche che generano ritorni concreti.</p>
            <p>SolarixBusiness ti accompagna in ogni fase: dalla progettazione dell'impianto alla registrazione nei registri ambientali, fino alla distribuzione economica dei benefici generati.</p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-600 mb-3">Un valore in più per la tua azienda</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>ROI accelerato:</strong> abbatti i tempi di ritorno dell'investimento grazie a entrate parallele.</li>
              <li><strong>Immagine aziendale rafforzata:</strong> migliora il tuo rating ESG e la partecipazione a bandi.</li>
              <li><strong>Sinergia con incentivi:</strong> la monetizzazione ambientale si affianca perfettamente a CER, Transizione 5.0 e Conto Termico.</li>
              <li><strong>Zero pensieri:</strong> gestiamo noi la burocrazia, i conti e i rapporti con enti certificatori.</li>
            </ul>
          </div>

          {/* SEZIONE FAQ */}
          <div className="mb-16 mt-20">
            <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">Domande Frequenti</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-green-600">Quanto posso guadagnare dalla monetizzazione ambientale?</h3>
                <p>Dipende dalla potenza del tuo impianto, dalla produzione reale e dalla tipologia di progetto. Alcuni clienti ricevono ritorni annuali superiori a quanto risparmiato con la sola bolletta energetica.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-600">Serve una burocrazia dedicata da parte mia?</h3>
                <p>No. La gestione è completamente a carico nostro. Tu ricevi semplicemente i rendiconti e gli accrediti.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-600">È compatibile con altri incentivi o bandi?</h3>
                <p>Assolutamente sì. La monetizzazione ambientale si affianca a CER, Transizione 5.0, Conto Termico e altre agevolazioni. È un valore in più, non alternativo.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-600">Come faccio a sapere se il mio impianto è idoneo?</h3>
                <p>È sufficiente richiedere una <strong>consulenza gratuita</strong>. Analizzeremo le caratteristiche del tuo impianto, la localizzazione e il tipo di attività per capire se puoi rientrare nel nostro programma.</p>
              </div>
            </div>
          </div>

          {/* SEZIONE TESTIMONIANZA */}
          <div className="bg-gray-50 py-14 px-6 md:px-16 rounded-xl shadow mt-20">
            <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">Cosa dice chi ha già scelto SolarixBusiness</h2>
            <blockquote className="text-lg italic text-gray-700 max-w-3xl mx-auto text-center">
              "Abbiamo installato un impianto da 80 kWp con SolarixBusiness e, oltre agli incentivi CER, ci hanno attivato un sistema di monetizzazione ambientale che mai avevamo sentito nominare. A fine anno, abbiamo ricevuto un accredito inatteso che ha migliorato il nostro bilancio. È un vantaggio reale e silenzioso."
            </blockquote>
            <p className="mt-4 text-center font-semibold text-green-800">Michele D., Titolare di azienda alimentare (CN)</p>
          </div>

          {/* CTA Finale */}
          <div className="text-center mt-20">
            <h2 className="text-2xl font-semibold text-green-600 mb-3">Vuoi scoprire il valore dei tuoi crediti ambientali?</h2>
            <p className="mb-6">Richiedi una valutazione gratuita. Ti aiuteremo a capire come monetizzare il tuo impegno ambientale.</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link 
                href="/contatti#contact-section" 
                className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded"
              >
                Parla con un esperto
              </Link>
              <Link 
                href="/valutazione-crediti" 
                className="bg-white hover:bg-gray-100 border border-green-700 text-green-700 font-semibold py-2 px-4 rounded"
              >
                Richiedi valutazione crediti
              </Link>
            </div>
          </div>

          <div className="mt-12">
            <ServiceForm 
              title="Richiedi valutazione crediti" 
              formType="valutazione-crediti"
            />
          </div>
        </div>
      </section>
    </>
  );
}
