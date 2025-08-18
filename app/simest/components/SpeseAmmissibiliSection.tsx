'use client';

import React from 'react';
import Link from 'next/link';

const SpeseAmmissibiliSection: React.FC = () => {
  return (
    <div className="mb-12">
      <div className="bg-white p-6 border border-green-100 rounded-lg shadow-lg">
        <h2 id="spese-ammissibili" className="text-2xl font-semibold text-green-700 mb-6">9. SPESE AMMISSIBILI</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">9.1 Categorie di Spese Finanziabili</h3>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">A) Investimenti per Sostenibilità Ambientale e Sociale</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Efficientamento energetico (anche in Italia)</li>
              <li>Efficientamento idrico (anche in Italia)</li>
              <li>Mitigazione impatti climatici (anche in Italia)</li>
              <li>Altri investimenti sostenibili ambientali e sociali</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">B) Certificazioni Ambientali</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Ottenimento certificazioni ambientali connesse agli investimenti</li>
              <li>Mantenimento certificazioni già ottenute</li>
              <li>Certificazioni riconosciute: ISO 45001, ISO 14001, SA8000 (per punteggio aggiuntivo)</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">C) Investimenti per Rafforzamento Patrimoniale</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Immobilizzazioni materiali (anche in Italia)</li>
              <li>Immobilizzazioni immateriali (escluso avviamento, anche in Italia)</li>
              <li>Immobilizzazioni finanziarie per:
                <ul className="list-circle list-inside ml-6 mt-1">
                  <li>Incrementi capitale sociale a controllate</li>
                  <li>Finanziamenti soci a controllate</li>
                </ul>
              </li>
              <li className="mt-2">Devono risultare nell'attivo patrimoniale o essere asseverate da revisore</li>
              <li>Altre immobilizzazioni finanziarie sono escluse</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">D) Consulenze Specialistiche</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Presentazione e gestione della richiesta</li>
              <li>Asseverazioni del Revisore</li>
              <li>Limite: fino al 5% dell'importo deliberato, comunque non superiori a €100.000</li>
              <li>Richiedono: contratto e dichiarazione di indipendenza del consulente</li>
              <li>Eccezione temporale: consulenze per la sola presentazione ammissibili anche se svolte prima della domanda, purché pagate dopo il CUP e nel Periodo di Realizzazione</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">E) Spese Specifiche per E-commerce (per intervento dedicato)</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Creazione/miglioramento piattaforma propria</li>
              <li>Accesso a piattaforme di terzi/marketplace</li>
              <li>Non è possibile destinare l'intero finanziamento ad attività di consulenza</li>
              <li>Almeno una spesa deve riguardare la piattaforma stessa</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">F) Spese per Transizione Digitale (PNRR)</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Macchinari e impianti per digitalizzazione</li>
              <li>Software e licenze per processi digitali</li>
              <li>Consulenza specialistica con contratto, durata e corrispettivo definiti</li>
              <li>Formazione Industria 4.0 (solo se erogata da fornitore terzo con fattura)</li>
              <li>Verifica DNSH obbligatoria per macchinari/impianti</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">9.2 Spese Non Ammissibili</h3>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Spese Commerciali Escluse</h4>
            <p className="mb-2">Spese direttamente connesse all'attività commerciale:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Assistenza post-vendita</li>
              <li>Trasporto merci</li>
              <li>Stoccaggio merci</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Spese Correnti Escluse</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Personale dell'Impresa Richiedente o soggetti ad essa riferibili</li>
              <li>Attività correnti non connesse agli investimenti</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Altre Esclusioni</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Spese non conformi al cumulo (Reg. UE n. 2831/2023)</li>
              <li>Costituzione o potenziamento di reti di distribuzione</li>
              <li>Spese promozionali o social media (per Transizione Digitale)</li>
              <li>Spese già sostenute prima del rilascio del CUP</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
          <h4 className="font-semibold text-green-600 mb-2">Hai bisogno di supporto?</h4>
          <p className="mb-4">I nostri consulenti possono aiutarti a identificare correttamente le spese ammissibili per il tuo progetto, massimizzando l'efficacia del finanziamento SIMEST e garantendo la conformità alle normative.</p>
          <div className="flex items-center">
            <Link href="/contatti" className="text-blue-600 hover:underline mr-6">Contattaci per una consulenza</Link>
            <a href="https://wa.me/+393470087833" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-lg">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.14 4.486c-3.868 0-7.015 3.147-7.015 7.015 0 1.513.469 2.919 1.27 4.075l-1.665 4.975 5.095-1.635a6.979 6.979 0 004.315 1.485c3.868 0 7.015-3.147 7.015-7.015s-3.147-7.015-7.015-7.015h-.005z"/>
              </svg>
              Contattaci su WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeseAmmissibiliSection;
