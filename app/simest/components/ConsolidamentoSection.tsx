'use client';

import React from 'react';
import Link from 'next/link';

const ConsolidamentoSection: React.FC = () => {
  return (
    <div className="mb-12">
      <div className="bg-white p-6 border border-green-100 rounded-lg shadow-lg">
        <h2 id="consolidamento" className="text-2xl font-semibold text-green-700 mb-6">14. CONSOLIDAMENTO</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">14.1 Definizione e Finalità</h3>
          
          <div className="mb-5">
            <p className="mb-3">
              Il consolidamento rappresenta la fase finale del finanziamento SIMEST, durante la quale viene verificato il corretto utilizzo delle risorse erogate e l'effettivo raggiungimento degli obiettivi del progetto di internazionalizzazione.
            </p>
            
            <h4 className="font-semibold text-green-600 mb-2">Obiettivi del Consolidamento</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Verifica del completamento del progetto secondo le modalità previste</li>
              <li>Controllo della conformità delle spese sostenute</li>
              <li>Valutazione dei risultati ottenuti in termini di internazionalizzazione</li>
              <li>Definizione degli obblighi post-consolidamento</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">14.2 Procedure di Consolidamento</h3>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Tempistiche</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Avvio: dopo la presentazione della rendicontazione finale</li>
              <li>Durata: generalmente 30-60 giorni dalla rendicontazione completa</li>
              <li>Comunicazione esito: entro 30 giorni dalla conclusione dell'istruttoria</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Attività di Verifica</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Controllo documentale della rendicontazione presentata</li>
              <li>Verifica della coerenza tra spese sostenute e progetto approvato</li>
              <li>Controllo del rispetto delle tempistiche contrattuali</li>
              <li>Eventuale sopralluogo presso la sede dell'impresa</li>
              <li>Verifica del mantenimento dei requisiti di ammissibilità</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">14.3 Esiti del Consolidamento</h3>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Consolidamento Positivo</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Riconoscimento della corretta esecuzione del progetto</li>
              <li>Conferma dell'ammissibilità di tutte le spese rendicontate</li>
              <li>Erogazione dell'eventuale saldo del contributo a fondo perduto</li>
              <li>Definizione del piano di rimborso del finanziamento agevolato</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Consolidamento con Riserve</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Riconoscimento parziale delle spese sostenute</li>
              <li>Esclusione di spese non conformi alle condizioni contrattuali</li>
              <li>Riduzione proporzionale del contributo a fondo perduto</li>
              <li>Possibile richiesta di restituzione di somme già erogate</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Consolidamento Negativo</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Mancato riconoscimento del progetto</li>
              <li>Revoca totale del finanziamento</li>
              <li>Restituzione integrale delle somme erogate</li>
              <li>Applicazione di interessi di mora</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">14.4 Obblighi Post-Consolidamento</h3>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Vincoli di Destinazione</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Mantenimento della destinazione d'uso dei beni finanziati per almeno 5 anni</li>
              <li>Divieto di cessione dei beni senza autorizzazione SIMEST</li>
              <li>Comunicazione di eventuali variazioni societarie significative</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Obblighi di Comunicazione</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Invio del bilancio annuale per i 3 anni successivi al consolidamento</li>
              <li>Comunicazione di eventuali crisi aziendali o procedure concorsuali</li>
              <li>Disponibilità per eventuali controlli successivi</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
          <h4 className="font-semibold text-green-600 mb-2">Hai bisogno di supporto?</h4>
          <p className="mb-4">La fase di consolidamento è cruciale per il successo del progetto SIMEST. I nostri consulenti possono assisterti nella preparazione della documentazione e nel rispetto di tutti gli obblighi post-consolidamento.</p>
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

export default ConsolidamentoSection;
