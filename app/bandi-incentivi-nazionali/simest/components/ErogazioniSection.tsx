import React from 'react';
import Link from 'next/link';

const ErogazioniSection: React.FC = () => {
  return (
    <div className="mb-12">
      <div className="bg-white p-6 border border-gray-100 rounded-lg shadow-lg">
        <h2 id="erogazioni" className="text-2xl font-semibold text-gray-800 mb-6">18. EROGAZIONI</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-3">18.1 Modalità di Erogazione</h3>
          
          <div className="mb-5">
            <h4 className="font-semibold text-gray-700 mb-2">Prima Erogazione (Anticipo)</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Importo: fino al 50% del finanziamento deliberato</li>
              <li>Tempistica: entro 30 giorni dalla stipula del contratto</li>
              <li>Condizioni: apertura conto corrente dedicato e rispetto condizioni contrattuali</li>
              <li>Non richiede rendicontazione preventiva</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-gray-700 mb-2">Erogazioni Intermedie</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Legate agli stati di avanzamento del progetto</li>
              <li>Richiedono rendicontazione delle spese sostenute</li>
              <li>Verifica della conformità delle spese alle condizioni contrattuali</li>
              <li>Possibile erogazione fino al 100% del finanziamento deliberato</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-3">18.2 Tempistiche Contributi a Fondo Perduto</h3>
          
          <div className="mb-5">
            <h4 className="font-semibold text-gray-700 mb-2">Tempistiche</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Prima erogazione: contestuale al primo anticipo del finanziamento</li>
              <li>Erogazioni successive: proporzionali alle rendicontazioni approvate</li>
              <li>Erogazione finale: a completamento del progetto e approvazione rendicontazione finale</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-gray-700 mb-2">Condizioni</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Rispetto delle scadenze di rendicontazione</li>
              <li>Conformità delle spese rendicontate</li>
              <li>Mantenimento dei requisiti di ammissibilità</li>
              <li>Assenza di cause di revoca</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-3">18.3 Sospensione delle Erogazioni</h3>
          
          <div className="mb-5">
            <h4 className="font-semibold text-gray-700 mb-2">Cause di Sospensione</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Mancato rispetto delle scadenze di rendicontazione</li>
              <li>Irregolarità nella documentazione presentata</li>
              <li>Perdita dei requisiti di ammissibilità</li>
              <li>Inadempimenti contrattuali</li>
              <li>Avvio di procedure concorsuali</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-gray-700 mb-2">Ripristino delle Erogazioni</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Rimozione delle cause di sospensione</li>
              <li>Presentazione di documentazione integrativa</li>
              <li>Rispetto di eventuali nuove condizioni imposte da SIMEST</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h4 className="font-semibold text-blue-700 mb-2">Hai bisogno di supporto?</h4>
          <p className="mb-4">La gestione delle erogazioni richiede attenzione alle tempistiche e alle procedure. I nostri consulenti possono assisterti nel monitorare lo stato delle erogazioni e garantire il rispetto di tutti gli adempimenti necessari.</p>
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

export default ErogazioniSection;
