import React from 'react';

export default function BenefitsSection() {
  return (
    <div id="sezione-3" className="mb-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">3. Benefici e Vantaggi</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">3.1 Tipologia di Agevolazione</h3>
          <p>La Nuova Sabatini Green prevede un <strong>contributo in conto interessi</strong> che riduce il costo del finanziamento per l'acquisto di beni strumentali green.</p>
          
          <p className="mt-4"><strong>Tasso di contributo:</strong> 3,575% annuo per 5 anni (superiore al 2,75% della Sabatini ordinaria)</p>
          
          <h3 className="text-lg font-semibold mb-3 mt-6 text-gray-800">3.2 Modalità di Calcolo</h3>
          <p>Il contributo viene calcolato applicando il tasso agevolato all'importo del finanziamento:</p>
          
          <p className="mt-2 font-mono text-sm bg-gray-100 p-2 rounded">
            Contributo Annuo = Importo Finanziamento × 3,575%
          </p>
          
          <p className="mt-4 font-medium">Esempio Pratico:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Investimento:</strong> 100.000 €</li>
            <li><strong>Finanziamento:</strong> 80.000 €</li>
            <li><strong>Contributo annuo:</strong> 2.860 €</li>
            <li><strong>Contributo totale (5 anni):</strong> 14.300 €</li>
          </ul>
          
          <h3 className="text-lg font-semibold mb-3 mt-6 text-gray-800">3.3 Durata e Modalità di Erogazione</h3>
          
          <p className="font-medium">Caratteristiche del Contributo:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Durata:</strong> massimo 5 anni dalla stipula del contratto</li>
            <li><strong>Modalità:</strong> versamento diretto alla banca in rate semestrali posticipate</li>
            <li><strong>Beneficio:</strong> riduzione del tasso di interesse per l'impresa</li>
          </ul>
          
          <h3 className="text-lg font-semibold mb-3 mt-6 text-gray-800">3.4 Cumulabilità con Altri Incentivi</h3>
          
          <p className="font-medium">Cumulabile con:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Credito d'imposta Industria 4.0</li>
            <li>Credito d'imposta R&S</li>
            <li>Fondi europei (FESR, FSE+)</li>
            <li>Incentivi regionali</li>
            <li>Garanzie pubbliche (Fondo di Garanzia PMI)</li>
          </ul>
          
          <p className="mt-4 font-medium">Non cumulabile con:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Nuova Sabatini ordinaria</li>
            <li>Altri contributi in conto interessi statali</li>
            <li>Finanziamenti agevolati a tasso zero</li>
            <li>Contributi a fondo perduto per gli stessi beni</li>
          </ul>
          
          <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-400 mt-6">
            <p className="text-sm"><strong>Nota:</strong> La cumulabilità è soggetta al rispetto dei limiti previsti dalla normativa europea sugli aiuti di Stato.</p>
          </div>
        </div>
    </div>
  );
}
