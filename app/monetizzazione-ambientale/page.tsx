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
