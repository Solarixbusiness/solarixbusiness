'use client';

import React from 'react';
import Link from 'next/link';

const RevocaSection: React.FC = () => {
  return (
    <div className="mb-12">
      <div className="bg-white p-6 border border-green-100 rounded-lg shadow-lg">
        <h2 id="revoca" className="text-2xl font-semibold text-green-700 mb-6">17. REVOCA DELL'INTERVENTO</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">17.1 Cause di Revoca</h3>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Inadempimenti Contrattuali</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Mancato rispetto delle scadenze di rendicontazione</li>
              <li>Utilizzo improprio delle risorse erogate</li>
              <li>Mancata apertura del conto corrente dedicato</li>
              <li>Violazione degli obblighi di comunicazione</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Perdita dei Requisiti</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Perdita dei requisiti soggettivi di ammissibilità</li>
              <li>Deterioramento della situazione finanziaria</li>
              <li>Avvio di procedure concorsuali</li>
              <li>Cessazione dell'attività aziendale</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Violazioni Normative</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Dichiarazioni false o mendaci</li>
              <li>Documentazione contraffatta o alterata</li>
              <li>Violazione delle norme "de minimis"</li>
              <li>Doppio finanziamento non autorizzato</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">17.2 Tipologie di Revoca</h3>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Revoca Totale</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Annullamento completo del finanziamento</li>
              <li>Restituzione integrale delle somme erogate</li>
              <li>Applicazione di interessi legali e di mora</li>
              <li>Esclusione da futuri finanziamenti SIMEST</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Revoca Parziale</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Riduzione dell'importo del finanziamento</li>
              <li>Esclusione di specifiche spese dalla rendicontazione</li>
              <li>Restituzione parziale delle somme erogate</li>
              <li>Mantenimento del finanziamento per la parte conforme</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">17.3 Procedure di Revoca</h3>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Avvio del Procedimento</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Comunicazione di avvio del procedimento di revoca</li>
              <li>Indicazione delle cause e dei fatti contestati</li>
              <li>Termine per le controdeduzioni (di norma 30 giorni)</li>
              <li>Possibilità di richiedere audizione</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Istruttoria</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Valutazione delle controdeduzioni presentate</li>
              <li>Eventuale audizione dell'impresa</li>
              <li>Acquisizione di ulteriore documentazione</li>
              <li>Deliberazione finale del provvedimento</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">17.4 Rimedi e Ricorsi</h3>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Ricorso Amministrativo</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Ricorso al Comitato Agevolazioni entro 60 giorni</li>
              <li>Sospensione degli effetti del provvedimento</li>
              <li>Possibilità di presentare nuova documentazione</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Ricorso Giurisdizionale</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Ricorso al TAR entro 60 giorni dalla comunicazione</li>
              <li>Eventuale richiesta di sospensiva</li>
              <li>Possibilità di appello al Consiglio di Stato</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
          <h4 className="font-semibold text-green-600 mb-2">Hai bisogno di supporto?</h4>
          <p className="mb-4">La prevenzione della revoca è fondamentale per il successo del progetto. I nostri consulenti possono aiutarti a rispettare tutti gli obblighi contrattuali e a gestire eventuali situazioni critiche per evitare la revoca del finanziamento.</p>
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

export default RevocaSection;
