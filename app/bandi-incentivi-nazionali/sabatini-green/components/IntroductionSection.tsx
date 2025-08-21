import React from 'react';

export default function IntroductionSection() {
  return (
    <div id="sezione-1" className="mb-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">1. Introduzione alla Nuova Sabatini Green</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold mb-3 text-gray-800">1.1 Definizione</h3>
        <p>La <strong>Nuova Sabatini Green</strong> è una misura di incentivazione introdotta per sostenere gli investimenti delle piccole e medie imprese (PMI) in beni strumentali nuovi a basso impatto ambientale, con un focus specifico sulla sostenibilità ambientale e la transizione ecologica delle imprese italiane.</p>
        
        <h3 className="text-lg font-semibold mb-3 mt-6 text-gray-800">1.2 Obiettivi della Misura</h3>
        <p>La misura si propone di:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Promuovere investimenti in tecnologie eco-sostenibili</li>
          <li>Ridurre l'impatto ambientale delle attività produttive</li>
          <li>Favorire l'efficienza energetica e l'uso di energie rinnovabili</li>
          <li>Facilitare l'accesso al credito per investimenti green</li>
          <li>Migliorare la competitività delle PMI sul mercato nazionale e internazionale</li>
        </ul>
        
        <h3 className="text-lg font-semibold mb-3 mt-6 text-gray-800">1.3 Vantaggi Rispetto alla Sabatini Ordinaria</h3>
        <p>La versione Green della Nuova Sabatini offre condizioni più vantaggiose:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li><strong>Contributo maggiorato:</strong> 3,575% annuo per 5 anni (contro il 2,75% standard)</li>
          <li><strong>Priorità nell'accesso:</strong> precedenza nella valutazione delle domande</li>
          <li><strong>Cumulabilità:</strong> possibilità di cumulo con altre agevolazioni pubbliche</li>
          <li><strong>Procedure semplificate:</strong> iter di valutazione ottimizzato</li>
        </ul>
        
        <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-400 mt-6">
          <p className="text-sm"><strong>Importante:</strong> La Nuova Sabatini Green rappresenta un'evoluzione della misura tradizionale, specificamente orientata agli investimenti sostenibili e alla transizione ecologica delle imprese.</p>
        </div>
      </div>
    </div>
  );
}
