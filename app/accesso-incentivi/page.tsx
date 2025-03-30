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
  'name': 'Accesso Incentivi e Bandi',
  'provider': {
    '@type': 'Organization',
    'name': 'SolarixBusiness',
    'url': 'https://www.solarixbusiness.it'
  },
  'serviceType': 'Consulenza incentivi energetici',
  'areaServed': {
    '@type': 'Country',
    'name': 'Italia'
  },
  'description': 'Servizio di consulenza per l\'accesso a incentivi e bandi nel settore energetico.'
};

export default function AccessoIncentiviPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="py-16 px-6 md:px-20 bg-white text-gray-900">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-green-700">Accesso Incentivi e Bandi</h1>
          <p className="text-lg text-gray-700 mb-10">Gli incentivi non sono un'opzione, sono parte integrante della tua strategia energetica. Per questo SolarixBusiness, in partnership con uno studio specializzato in finanza agevolata, ti accompagna nella selezione, richiesta e gestione dei contributi disponibili. E non solo una volta: ti affianchiamo nel tempo, con una visione continua e proattiva.</p>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-600 mb-3">Non esiste un solo incentivo: il vero valore sta nella sinergia</h2>
            <p className="mb-4">Ogni impresa ha accesso a una combinazione diversa di contributi: locali, regionali, nazionali, europei. Il nostro ruolo è individuare quelli più adatti al tuo profilo aziendale, progettare un impianto coerente con i requisiti dei bandi, e gestire tutte le pratiche necessarie per ottenere il massimo, in modo sicuro e senza sprechi di tempo.</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Comunità Energetiche Rinnovabili (CER)</li>
              <li>Transizione 5.0 e 4.0</li>
              <li>Bandi regionali per l'autoconsumo</li>
              <li>Conto Termico</li>
              <li>PNRR e misure straordinarie</li>
              <li>Sabatini Green</li>
              <li>Contributi agricoli, industria, PMI</li>
            </ul>
            <p className="mt-4">Tutto questo richiede competenze aggiornate, relazioni con enti erogatori e una visione strategica. Noi ce ne occupiamo, per conto tuo.</p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-600 mb-3">Finanza agevolata: non un bonus, ma un servizio strutturale</h2>
            <p className="mb-4">La finanza agevolata non dovrebbe essere considerata un extra, ma parte integrante della gestione aziendale. Il nostro team non si limita a "fare una pratica": ti affianchiamo con veri professionisti della pianificazione fiscale, con cui instauriamo un rapporto continuativo, che si evolve nel tempo.</p>
            <p className="mb-4">Insieme monitoriamo bandi in apertura, progetti possibili, cumulabilità legale e strategica. Questo significa che ogni scelta energetica che farai sarà <strong>sostenuta e guidata da chi conosce il bilancio, il credito, la normativa</strong>.</p>
            <p>Il nostro approccio è sartoriale, non automatico. Non ti offriamo un bando a catalogo. Costruiamo <strong>un piano intelligente, finanziato e scalabile</strong>.</p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-600 mb-3">Assistenza completa e continua</h2>
            <p className="mb-4">Dalla candidatura al bando fino alla rendicontazione finale. SolarixBusiness segue ogni fase in modo diretto o tramite i propri professionisti certificati. E non ci fermiamo al primo progetto: se la tua azienda cresce, noi cresciamo con te. Monitoriamo ogni opportunità per aiutarti a ottenere nuove agevolazioni in futuro, mantenendo costante la performance fiscale ed energetica del tuo impianto.</p>
          </div>

          <div className="bg-gray-50 py-14 px-6 md:px-16 rounded-xl shadow mt-20">
            <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">Dicono di noi</h2>
            <blockquote className="text-lg italic text-gray-700 max-w-3xl mx-auto text-center">
              "Pensavamo di accedere solo alla CER, invece ci hanno costruito un piano su tre bandi cumulabili. La consulenza è stata precisa, lungimirante e soprattutto utile anche per altri investimenti aziendali. Non è una pratica: è un rapporto di valore."
            </blockquote>
            <p className="mt-4 text-center font-semibold text-green-800">Giorgio M., Impresa logistica (RA)</p>
          </div>

          <div className="text-center mt-20">
            <h2 className="text-2xl font-semibold text-green-600 mb-3">Vuoi scoprire gli incentivi disponibili?</h2>
            <p className="mb-6">Richiedi una consulenza gratuita. Ti aiuteremo a identificare e accedere alle migliori opportunità.</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link 
                href="/contatti#contact-section" 
                className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded"
              >
                Parla con un consulente
              </Link>
              <Link 
                href="/analisi-incentivi" 
                className="bg-white hover:bg-gray-100 border border-green-700 text-green-700 font-semibold py-2 px-4 rounded"
              >
                Richiedi analisi incentivi
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
