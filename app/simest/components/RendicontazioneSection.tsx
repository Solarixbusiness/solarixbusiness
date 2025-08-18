'use client';

import React from 'react';
import Link from 'next/link';

const RendicontazioneSection: React.FC = () => {
  return (
    <div className="mb-12">
      <div className="bg-white p-6 border border-green-100 rounded-lg shadow-lg">
        <h2 id="rendicontazione" className="text-2xl font-semibold text-green-700 mb-6">12. RENDICONTAZIONE</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">12.1 Tempistiche e Scadenze</h3>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Periodo di Rendicontazione</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Inizio: dalla data di ricezione del CUP</li>
              <li>Fine: 29 mesi dalla Data di Stipula (24 + 5 mesi)</li>
              <li>In caso di proroga: 35 mesi dalla Data di Stipula (30 + 5 mesi)</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Scadenze Intermedie</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Prima rendicontazione: entro 13 mesi dalla Data di Stipula</li>
              <li>Seconda rendicontazione: entro 29 mesi dalla Data di Stipula</li>
              <li>Importo minimo prima rendicontazione: 50% delle spese ammesse</li>
              <li>Mancato rispetto: possibile revoca del finanziamento</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">12.2 Contenuti e Modalità</h3>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Documentazione Obbligatoria</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Relazione finale sull'utilizzo del finanziamento</li>
              <li>Rendiconto analitico delle spese sostenute</li>
              <li>Documentazione di spesa (fatture, contratti, ecc.)</li>
              <li>Estratti conto del Conto Corrente Dedicato</li>
              <li>Asseverazione di un revisore legale</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Modalità di Presentazione</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Esclusivamente tramite il Portale SIMEST</li>
              <li>Firma digitale dei documenti obbligatoria</li>
              <li>Upload di tutta la documentazione in formato digitale</li>
              <li>Conservazione degli originali per 10 anni</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">12.3 Documentazione Specifica</h3>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Per Immobilizzazioni Materiali e Immateriali</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Fatture di acquisto</li>
              <li>Contratti di acquisto</li>
              <li>Documenti di trasporto (se applicabili)</li>
              <li>Documentazione fotografica dei beni</li>
              <li>Libro cespiti aggiornato</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Per Immobilizzazioni Finanziarie</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Contratti di finanziamento soci</li>
              <li>Verbali di assemblea per aumenti di capitale</li>
              <li>Estratti conto con evidenza dei trasferimenti</li>
              <li>Bilanci aggiornati delle società controllate</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Per Consulenze</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Contratto di consulenza</li>
              <li>Fatture con dettaglio delle attività svolte</li>
              <li>Relazione finale del consulente</li>
              <li>Dichiarazione di indipendenza del consulente</li>
              <li>Evidenza dei risultati ottenuti</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
          <h4 className="font-semibold text-green-600 mb-2">Hai bisogno di supporto?</h4>
          <p className="mb-4">La rendicontazione è una fase critica del finanziamento SIMEST. I nostri consulenti possono assisterti nella preparazione di tutta la documentazione necessaria e nella gestione delle scadenze per garantire il rispetto degli obblighi contrattuali.</p>
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

export default RendicontazioneSection;
