'use client';

import React from 'react';
import Link from 'next/link';

const BeneficiAggiuntiviSection: React.FC = () => {
  return (
    <div className="mb-12">
      <div className="bg-white p-6 border border-green-100 rounded-lg shadow-lg">
        <h2 id="benefici-aggiuntivi" className="text-2xl font-semibold text-green-700 mb-6">7. BENEFICI AGGIUNTIVI</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">7.1 Premialità e Maggiorazioni</h3>
          <p className="mb-4">Il Fondo 394/81 prevede diverse premialità che possono incrementare i benefici dell'intervento agevolativo:</p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-600 mb-2">Premialità Territoriale</h4>
              <div className="border-l-4 border-green-500 pl-3 mb-3">
                <p className="font-semibold">+10% di fondo perduto</p>
              </div>
              <p className="mb-2">Per imprese con sede operativa in:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Abruzzo</li>
                <li>Basilicata</li>
                <li>Calabria</li>
                <li>Campania</li>
                <li>Molise</li>
                <li>Puglia</li>
                <li>Sardegna</li>
                <li>Sicilia</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-600 mb-2">Premialità Dimensionale</h4>
              <div className="border-l-4 border-green-500 pl-3 mb-3">
                <p className="font-semibold">+5% di fondo perduto</p>
              </div>
              <p className="mb-2">Per imprese classificate come:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Micro impresa</li>
                <li>Piccola impresa</li>
                <li>Media impresa</li>
              </ul>
              <p className="mt-2 text-sm italic">Non applicabile alle Grandi Imprese</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-600 mb-2">Premialità Femminile/Giovanile</h4>
              <div className="border-l-4 border-green-500 pl-3 mb-3">
                <p className="font-semibold">+5% di fondo perduto</p>
              </div>
              <p className="mb-2">Per imprese a prevalente:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Partecipazione femminile</li>
                <li>Partecipazione giovanile (under 35)</li>
              </ul>
              <p className="mt-2 text-sm">Secondo i criteri definiti dalla normativa vigente</p>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">7.2 Benefici per Imprese Innovative</h3>
          
          <div className="bg-green-50 p-5 rounded-lg mb-6">
            <h4 className="font-semibold text-green-700 mb-3">Vantaggi per Start-up Innovative e PMI Innovative</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-green-600 mb-2">Deroghe ai Requisiti Finanziari</h5>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Esenzione dal requisito di patrimonio netto minimo</li>
                  <li>Esenzione dai limiti di rapporto tra fatturato e finanziamento</li>
                  <li>Valutazione semplificata del merito di credito</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-green-600 mb-2">Premialità Aggiuntive</h5>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Priorità nell'istruttoria delle domande</li>
                  <li>Possibile incremento della quota di fondo perduto</li>
                  <li>Assistenza tecnica dedicata da parte di SIMEST</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">7.3 Cumulabilità con Altri Incentivi</h3>
          <p className="mb-3">Gli interventi del Fondo 394/81, nel rispetto dei limiti di cumulo, possono essere combinati con:</p>
          
          <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
            <li>Credito d'imposta per investimenti in beni strumentali (ex Super/Iper ammortamento)</li>
            <li>Credito d'imposta per attività di ricerca e sviluppo</li>
            <li>Incentivi per l'assunzione di personale qualificato</li>
            <li>Garanzie pubbliche su finanziamenti complementari</li>
            <li>Incentivi regionali non riferiti alle stesse spese ammissibili</li>
          </ul>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p className="font-semibold">Attenzione:</p>
            <p>La cumulabilità è soggetta a verifiche specifiche e deve rispettare il principio di assenza del "doppio finanziamento" previsto dal PNRR. È necessaria una valutazione caso per caso.</p>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
          <h4 className="font-semibold text-green-600 mb-2">Hai bisogno di supporto?</h4>
          <p className="mb-4">Il nostro team di consulenti può aiutarti a identificare tutte le premialità applicabili al tuo caso e a massimizzare i benefici ottenibili, anche attraverso la combinazione con altri incentivi compatibili.</p>
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

export default BeneficiAggiuntiviSection;
