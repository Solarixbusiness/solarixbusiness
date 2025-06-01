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
  'name': 'Comunità Energetiche Rinnovabili',
  'provider': {
    '@type': 'Organization',
    'name': 'SolarixBusiness',
    'url': 'https://www.solarixbusiness.it'
  },
  'serviceType': 'Consulenza CER',
  'areaServed': {
    '@type': 'Country',
    'name': 'Italia'
  },
  'description': 'Servizio di consulenza per lo sviluppo e la partecipazione a comunità energetiche rinnovabili.'
};

export default function ComunitaEnergetichePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="py-16 px-6 md:px-20 bg-white text-gray-900">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-green-700">Comunità Energetiche Rinnovabili</h1>
          <p className="text-lg text-gray-700 mb-10">La transizione energetica non è più una scelta per il futuro. È una leva concreta per la competitività di oggi. Le Comunità Energetiche Rinnovabili (CER) rappresentano l'evoluzione dell'autoconsumo: non solo risparmi, ma guadagni condivisi, incentivi statali e impatto sociale positivo.</p>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-600 mb-3">Cosa sono le CER e perché convengono</h2>
            <p className="mb-4">Una CER è un'alleanza tra più soggetti (aziende, famiglie, enti pubblici) che condividono l'energia prodotta da impianti rinnovabili. L'energia può essere utilizzata in tempo reale dai membri della comunità, e quella non autoconsumata viene comunque remunerata grazie a una <strong>tariffa incentivante garantita per 20 anni</strong>.</p>
            <p className="mb-4">Partecipare a una CER significa abbattere le bollette, generare reddito passivo, ottenere punteggio nei bandi e migliorare la reputazione aziendale sotto il profilo ambientale e sociale.</p>
            <p>SolarixBusiness ti aiuta a diventare produttore e attivatore della tua comunità energetica, oppure ad entrare come consumatore incentivato.</p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-600 mb-3">Autoconsumo incentivato: il futuro della tua impresa</h2>
            <p className="mb-4">Non tutto l'autoconsumo è uguale. Esistono incentivi specifici che premiano chi consuma direttamente l'energia prodotta dal proprio impianto, o da impianti a cui è connesso in una logica di CER. Questo significa abbattere il prezzo dell'energia e ottenere rientri extra, calcolabili nel piano economico dell'investimento.</p>
            <p className="mb-4">Inoltre, se sei in un comune sotto i 50.000 abitanti, puoi accedere a un contributo a fondo perduto del 40% sul costo dell'impianto, con la possibilità di richiederne il 30% come anticipo, rendendo il progetto ancora più sostenibile e redditizio.</p>
            <p>Con SolarixBusiness analizziamo la tua posizione, verifichiamo la rete, i consumi e costruiamo un piano CER adatto alla tua impresa, integrato con altri incentivi come la Transizione 5.0 o i bandi regionali.</p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-600 mb-3">Perché conviene fare una CER con noi</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Ti seguiamo nella fase di costituzione e avvio della comunità</li>
              <li>Ti aiutiamo a scegliere i partner giusti (aziende, PA, famiglie)</li>
              <li>Gestiamo l'interfaccia con il GSE e l'accesso alla tariffa incentivante</li>
              <li>Ti integriamo nel nostro ecosistema energetico-finanziario</li>
              <li>Monitoriamo e ottimizziamo nel tempo i flussi energetici ed economici</li>
            </ul>
            <p className="mt-4">Entrare in una CER oggi significa <strong>attivare un modello win-win</strong>: più produci, più consumi, più condividi = più guadagni.</p>
          </div>

          <div className="bg-gray-50 py-14 px-6 md:px-16 rounded-xl shadow mt-20">
            <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">Casi reali</h2>
            <blockquote className="text-lg italic text-gray-700 max-w-3xl mx-auto text-center">
              "Abbiamo costituito una CER in un comune sotto i 5.000 abitanti con aziende agricole e artigiane locali. I risultati sono stati immediati: accesso agli incentivi, riduzione della spesa elettrica, e un'immagine aziendale potenziata. Non è un'idea futuristica. È già realtà."
            </blockquote>
            <p className="mt-4 text-center font-semibold text-green-800">Valerio C., Impresa metalmeccanica (AL)</p>
          </div>

          <div className="text-center mt-20">
            <h2 className="text-2xl font-semibold text-green-600 mb-3">Vuoi partecipare a una comunità energetica?</h2>
            <p className="mb-6">Richiedi una consulenza gratuita. Ti aiuteremo a valutare le opportunità per la tua realtà.</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link 
                href="/contatti#contact-section" 
                className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded"
              >
                Parla con un consulente
              </Link>
              <Link 
                href="/analisi-cer" 
                className="bg-white hover:bg-gray-100 border border-green-700 text-green-700 font-semibold py-2 px-4 rounded"
              >
                Richiedi analisi CER
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