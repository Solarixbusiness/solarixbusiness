'use client';

import React from 'react';
import Link from 'next/link';

const FormaAssociataSection: React.FC = () => {
  return (
    <div className="mb-12">
      <div className="bg-white p-6 border border-green-100 rounded-lg shadow-lg">
        <h2 id="forma-associata" className="text-2xl font-semibold text-green-700 mb-6">5. FORMA SINGOLA O ASSOCIATA</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">5.1 Modalità di Presentazione</h3>
          <p className="mb-3">Le imprese possono presentare domanda di intervento agevolativo in:</p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-600 mb-2">Forma Singola</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Domanda presentata da una singola impresa</li>
                <li>Valutazione dei requisiti sulla singola entità</li>
                <li>Procedura semplificata</li>
                <li>Adatta a progetti di internazionalizzazione individuali</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-600 mb-2">Forma Aggregata</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Domanda presentata da più imprese in forma congiunta</li>
                <li>Necessaria la presenza di un'impresa capofila</li>
                <li>Valutazione dei requisiti su tutte le imprese partecipanti</li>
                <li>Adatta a progetti di internazionalizzazione complessi</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">5.2 Forme Aggregate Ammissibili</h3>
          
          <div className="mb-4">
            <h4 className="font-semibold text-green-600">Rete Soggetto</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Rete con soggettività giuridica (iscritta al Registro Imprese)</li>
              <li>Dotata di fondo patrimoniale comune</li>
              <li>Organo comune con potere di rappresentanza</li>
              <li>Presenta domanda come soggetto unico</li>
            </ul>
          </div>
          
          <div className="mb-4">
            <h4 className="font-semibold text-green-600">Rete Contratto</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Aggregazione di imprese basata su un contratto</li>
              <li>Priva di soggettività giuridica</li>
              <li>Richiede designazione di un'impresa capofila</li>
              <li>Ogni impresa partecipante deve possedere i requisiti di ammissibilità</li>
            </ul>
          </div>
          
          <div className="mb-4">
            <h4 className="font-semibold text-green-600">ATI/RTI (Associazione/Raggruppamento Temporaneo di Imprese)</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Aggregazione temporanea finalizzata alla realizzazione del progetto</li>
              <li>Richiede un mandato collettivo con rappresentanza ad una capofila</li>
              <li>Necessaria la costituzione formale prima della stipula del contratto</li>
              <li>Responsabilità solidale di tutti i partecipanti</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">5.3 Ruolo dell'Impresa Capofila</h3>
          <p className="mb-3">L'impresa capofila, nelle forme aggregate, svolge le seguenti funzioni:</p>
          
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Presentazione della domanda di intervento agevolativo</li>
            <li>Coordinamento delle attività progettuali</li>
            <li>Interfaccia unica con SIMEST per tutte le comunicazioni</li>
            <li>Raccolta e trasmissione della documentazione richiesta</li>
            <li>Gestione finanziaria e rendicontazione delle spese</li>
            <li>Responsabilità della corretta esecuzione del progetto</li>
          </ul>
        </div>
        
        <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
          <h4 className="font-semibold text-green-600 mb-2">Hai bisogno di supporto?</h4>
          <p className="mb-4">Se hai dubbi sulla forma più adatta per la tua impresa o necessiti di assistenza nella costituzione di una rete o aggregazione, il nostro team di consulenti è a tua disposizione.</p>
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

export default FormaAssociataSection;
