import React from 'react';
import Link from 'next/link';

const ImportiLimitiSection: React.FC = () => {
  return (
    <div className="mb-12">
      <div className="bg-white p-6 border border-green-100 rounded-lg shadow-lg">
        <h2 id="importi-limiti" className="text-2xl font-semibold text-green-700 mb-6">6. IMPORTI E LIMITI DELL'INTERVENTO</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">6.1 Struttura Finanziaria dell'Intervento</h3>
          <p className="mb-4">L'intervento agevolativo del Fondo 394/81 si compone di:</p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-600 mb-2">Finanziamento Agevolato</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Tasso agevolato (attualmente 0,50% annuo)</li>
                <li>Durata: fino a 6 anni, incluso periodo di preammortamento</li>
                <li>Preammortamento: fino a 2 anni dalla data di stipula</li>
                <li>Rimborso: rate semestrali posticipate a capitale costante</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-600 mb-2">Quota a Fondo Perduto</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Percentuale variabile in base alla tipologia di impresa</li>
                <li>Maggiore per PMI del Mezzogiorno</li>
                <li>Soggetta a disponibilità di risorse PNRR</li>
                <li>Non soggetta a restituzione se rispettati i termini</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">6.2 Limiti di Importo per Tipologia di Intervento</h3>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-green-50">
                  <th className="py-2 px-4 border-b border-r text-left">Tipologia di Intervento</th>
                  <th className="py-2 px-4 border-b border-r text-left">Importo Minimo</th>
                  <th className="py-2 px-4 border-b border-r text-left">Importo Massimo</th>
                  <th className="py-2 px-4 border-b text-left">% Fondo Perduto (max)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b border-r">Partecipazione a Fiere/Mostre</td>
                  <td className="py-2 px-4 border-b border-r">€ 10.000</td>
                  <td className="py-2 px-4 border-b border-r">€ 150.000</td>
                  <td className="py-2 px-4 border-b">Fino al 40%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border-b border-r">Inserimento Mercati Esteri</td>
                  <td className="py-2 px-4 border-b border-r">€ 50.000</td>
                  <td className="py-2 px-4 border-b border-r">€ 4.000.000</td>
                  <td className="py-2 px-4 border-b">Fino al 40%</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-r">Temporary Export Manager</td>
                  <td className="py-2 px-4 border-b border-r">€ 25.000</td>
                  <td className="py-2 px-4 border-b border-r">€ 150.000</td>
                  <td className="py-2 px-4 border-b">Fino al 40%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border-b border-r">E-Commerce</td>
                  <td className="py-2 px-4 border-b border-r">€ 10.000</td>
                  <td className="py-2 px-4 border-b border-r">€ 300.000</td>
                  <td className="py-2 px-4 border-b">Fino al 40%</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-sm italic text-gray-600">* Gli importi massimi possono variare in base alla disponibilità di risorse e alle circolari operative vigenti.</p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">6.3 Limiti di Cumulo</h3>
          <p className="mb-3">Gli interventi agevolativi del Fondo 394/81 sono soggetti ai seguenti limiti di cumulo:</p>
          
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Limite massimo complessivo di € 200.000 per gli aiuti "de minimis" nell'arco di tre esercizi finanziari</li>
            <li>Divieto di cumulo con altri contributi pubblici per le stesse spese ammissibili</li>
            <li>Rispetto del principio di assenza del "doppio finanziamento" per le risorse PNRR</li>
            <li>Limite massimo di esposizione complessiva dell'impresa verso il Fondo 394/81 pari a € 50.000.000</li>
          </ul>
        </div>
        
        <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
          <h4 className="font-semibold text-green-600 mb-2">Hai bisogno di supporto?</h4>
          <p className="mb-4">Se hai dubbi sugli importi finanziabili per il tuo progetto o sui limiti di cumulo applicabili alla tua impresa, il nostro team di consulenti è a tua disposizione per un'analisi personalizzata.</p>
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

export default ImportiLimitiSection;
