import React from 'react';
import Link from 'next/link';

const DefinizioniSection: React.FC = () => {
  return (
    <div className="mb-12">
      <div className="bg-white p-6 border border-gray-100 rounded-lg shadow-lg">
        <h2 id="definizioni" className="text-2xl font-semibold text-gray-800 mb-6">2. DEFINIZIONI FONDAMENTALI</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-3">2.1 Tipologie di Imprese</h3>
          
          <div className="mb-4">
            <h4 className="font-semibold text-gray-700">PMI (Piccole e Medie Imprese)</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li className="text-gray-600">Dipendenti: &lt; 250</li>
              <li className="text-gray-600">Fatturato annuo: &lt; €50 milioni OPPURE totale bilancio: &lt; €43 milioni</li>
            </ul>
          </div>
          
          <div className="mb-4">
            <h4 className="font-semibold text-gray-700">Micro Impresa</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li className="text-gray-600">PMI con fatturato/totale bilancio ≤ €2 milioni</li>
              <li className="text-gray-600">Dipendenti: &lt; 10</li>
            </ul>
          </div>
          
          <div className="mb-4">
            <h4 className="font-semibold text-gray-700">PMI Innovativa</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li className="text-gray-600">PMI costituita come società di capitali</li>
              <li className="text-gray-600">Rispetta parametri di innovazione tecnologica</li>
              <li className="text-gray-600">Iscritta in sezione speciale del registro imprese</li>
            </ul>
          </div>
          
          <div className="mb-4">
            <h4 className="font-semibold text-gray-700">Start Up Innovativa</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li className="text-gray-600">Società di capitali non quotata</li>
              <li className="text-gray-600">Possiede requisiti specifici di innovazione</li>
              <li className="text-gray-600">Iscritta in sezione speciale del registro imprese</li>
            </ul>
          </div>
          
          <div className="mb-4">
            <h4 className="font-semibold text-gray-700">Altra Impresa</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li className="text-gray-600">Qualsiasi impresa non qualificabile come PMI</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-3">2.2 Elementi Operativi Chiave</h3>
          
          <div className="mb-4">
            <h4 className="font-semibold text-gray-700">CUP (Codice Unico di Progetto)</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li className="text-gray-600">Codice comunicato da SIMEST</li>
              <li className="text-gray-600"><strong>OBBLIGATORIO</strong> su tutte le fatture e bonifici relativi alle spese ammissibili</li>
              <li className="text-gray-600">L'assenza del CUP comporta l'inammissibilità della spesa</li>
            </ul>
          </div>
          
          <div className="mb-4">
            <h4 className="font-semibold text-gray-700">Conto Corrente Dedicato</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li className="text-gray-600">Conto bancario da aprire prima di sostenere le spese ammissibili</li>
              <li className="text-gray-600">Utilizzo esclusivo per spese ammissibili ed erogazioni SIMEST</li>
              <li className="text-gray-600">Può essere condiviso con altri Interventi Agevolativi SIMEST</li>
              <li className="text-gray-600">Contratto deve essere caricato sul Portale</li>
            </ul>
          </div>
          
          <div className="mb-4">
            <h4 className="font-semibold text-gray-700">Periodo di Realizzazione</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li className="text-gray-600">Decorre dalla ricezione del CUP</li>
              <li className="text-gray-600">Termina 24 mesi dopo la Data di Stipula</li>
              <li className="text-gray-600">Possibile proroga di 6 mesi</li>
              <li className="text-gray-600">Tutte le spese devono essere sostenute in questo periodo</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h4 className="font-semibold text-blue-700 mb-2">Hai bisogno di supporto?</h4>
          <p className="mb-4">Se hai dubbi sulla classificazione della tua impresa o sui requisiti operativi, il nostro team di consulenti è a tua disposizione.</p>
          <div className="flex items-center">
            <Link href="/contatti" className="text-blue-600 hover:underline mr-6">Contattaci per una consulenza</Link>
            <a href="/contatti" className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
              Richiedi Consulenza
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefinizioniSection;
