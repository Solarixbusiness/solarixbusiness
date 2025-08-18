'use client';

import React from 'react';
import Link from 'next/link';

const DefinizioniSection: React.FC = () => {
  return (
    <div className="mb-12">
      <div className="bg-white p-6 border border-green-100 rounded-lg shadow-lg">
        <h2 id="definizioni" className="text-2xl font-semibold text-green-700 mb-6">2. DEFINIZIONI FONDAMENTALI</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">2.1 Tipologie di Imprese</h3>
          
          <div className="mb-4">
            <h4 className="font-semibold text-green-600">PMI (Piccole e Medie Imprese)</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Dipendenti: &lt; 250</li>
              <li>Fatturato annuo: &lt; €50 milioni OPPURE totale bilancio: &lt; €43 milioni</li>
            </ul>
          </div>
          
          <div className="mb-4">
            <h4 className="font-semibold text-green-600">Micro Impresa</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>PMI con fatturato/totale bilancio ≤ €2 milioni</li>
              <li>Dipendenti: &lt; 10</li>
            </ul>
          </div>
          
          <div className="mb-4">
            <h4 className="font-semibold text-green-600">PMI Innovativa</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>PMI costituita come società di capitali</li>
              <li>Rispetta parametri di innovazione tecnologica</li>
              <li>Iscritta in sezione speciale del registro imprese</li>
            </ul>
          </div>
          
          <div className="mb-4">
            <h4 className="font-semibold text-green-600">Start Up Innovativa</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Società di capitali non quotata</li>
              <li>Possiede requisiti specifici di innovazione</li>
              <li>Iscritta in sezione speciale del registro imprese</li>
            </ul>
          </div>
          
          <div className="mb-4">
            <h4 className="font-semibold text-green-600">Altra Impresa</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Qualsiasi impresa non qualificabile come PMI</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">2.2 Elementi Operativi Chiave</h3>
          
          <div className="mb-4">
            <h4 className="font-semibold text-green-600">CUP (Codice Unico di Progetto)</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Codice comunicato da SIMEST</li>
              <li><strong>OBBLIGATORIO</strong> su tutte le fatture e bonifici relativi alle spese ammissibili</li>
              <li>L'assenza del CUP comporta l'inammissibilità della spesa</li>
            </ul>
          </div>
          
          <div className="mb-4">
            <h4 className="font-semibold text-green-600">Conto Corrente Dedicato</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Conto bancario da aprire prima di sostenere le spese ammissibili</li>
              <li>Utilizzo esclusivo per spese ammissibili ed erogazioni SIMEST</li>
              <li>Può essere condiviso con altri Interventi Agevolativi SIMEST</li>
              <li>Contratto deve essere caricato sul Portale</li>
            </ul>
          </div>
          
          <div className="mb-4">
            <h4 className="font-semibold text-green-600">Periodo di Realizzazione</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Decorre dalla ricezione del CUP</li>
              <li>Termina 24 mesi dopo la Data di Stipula</li>
              <li>Possibile proroga di 6 mesi</li>
              <li>Tutte le spese devono essere sostenute in questo periodo</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
          <h4 className="font-semibold text-green-600 mb-2">Hai bisogno di supporto?</h4>
          <p className="mb-4">Se hai dubbi sulla classificazione della tua impresa o sui requisiti operativi, il nostro team di consulenti è a tua disposizione.</p>
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

export default DefinizioniSection;
