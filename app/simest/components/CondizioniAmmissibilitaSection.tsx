'use client';

import React from 'react';
import Link from 'next/link';

const CondizioniAmmissibilitaSection: React.FC = () => {
  return (
    <div className="mb-12">
      <div className="bg-white p-6 border border-green-100 rounded-lg shadow-lg">
        <h2 id="condizioni-ammissibilita" className="text-2xl font-semibold text-green-700 mb-6">3. CONDIZIONI DI AMMISSIBILITÀ</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">3.1 Requisiti Soggettivi</h3>
          <p className="mb-3">Per accedere agli interventi agevolativi del Fondo 394/81, le imprese devono soddisfare i seguenti requisiti:</p>
          
          <div className="mb-4">
            <h4 className="font-semibold text-green-600">Requisiti Base</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Essere regolarmente costituite e iscritte nel Registro delle Imprese</li>
              <li>Essere in normale attività (non in liquidazione o procedura concorsuale)</li>
              <li>Avere sede legale in Italia</li>
              <li>Non essere in situazione di difficoltà ai sensi della normativa UE</li>
            </ul>
          </div>
          
          <div className="mb-4">
            <h4 className="font-semibold text-green-600">Requisiti Finanziari</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Avere un patrimonio netto non negativo</li>
              <li>Avere un rapporto tra patrimonio netto e totale dell'attivo non inferiore al 5%</li>
              <li>Avere un rapporto tra indebitamento finanziario netto e fatturato non superiore a:</li>
              <ul className="list-disc list-inside ml-8">
                <li>6,0 per PMI</li>
                <li>5,0 per Mid Cap e Grandi Imprese</li>
              </ul>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">3.2 Deroghe ai Requisiti Finanziari</h3>
          <p className="mb-3">Sono previste deroghe specifiche per:</p>
          
          <div className="mb-4">
            <h4 className="font-semibold text-green-600">Start-up Innovative</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Esonero dal requisito del patrimonio netto non negativo</li>
              <li>Esonero dal requisito del rapporto tra patrimonio netto e attivo</li>
              <li>Esonero dal requisito del rapporto tra indebitamento e fatturato</li>
            </ul>
          </div>
          
          <div className="mb-4">
            <h4 className="font-semibold text-green-600">PMI Innovative</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Esonero dal requisito del rapporto tra indebitamento e fatturato</li>
            </ul>
          </div>
          
          <div className="mb-4">
            <h4 className="font-semibold text-green-600">Imprese a prevalente partecipazione femminile o giovanile</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Esonero dal requisito del rapporto tra indebitamento e fatturato</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">3.3 Requisiti Specifici per Tipologia di Intervento</h3>
          <p className="mb-3">Oltre ai requisiti generali, ogni linea di intervento prevede requisiti specifici:</p>
          
          <div className="mb-4">
            <h4 className="font-semibold text-green-600">Partecipazione a Fiere/Mostre</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Partecipazione a una o più fiere/mostre di carattere internazionale</li>
              <li>Possibilità di svolgimento in Italia se di rilevanza internazionale</li>
            </ul>
          </div>
          
          <div className="mb-4">
            <h4 className="font-semibold text-green-600">Inserimento Mercati Esteri</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Realizzazione di strutture commerciali in paesi esteri</li>
              <li>Sviluppo di attività promozionali e di comunicazione</li>
            </ul>
          </div>
          
          <div className="mb-4">
            <h4 className="font-semibold text-green-600">Temporary Export Manager (TEM)</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Inserimento temporaneo di figure professionali specializzate</li>
              <li>Sviluppo di competenze interne attraverso attività di affiancamento</li>
            </ul>
          </div>
          
          <div className="mb-4">
            <h4 className="font-semibold text-green-600">E-Commerce</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Sviluppo di soluzioni di e-commerce attraverso l'utilizzo di un market place o la realizzazione di una piattaforma informatica propria</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
          <h4 className="font-semibold text-green-600 mb-2">Hai bisogno di supporto?</h4>
          <p className="mb-4">Se hai dubbi sulla tua ammissibilità o sui requisiti specifici per la tua impresa, il nostro team di consulenti è a tua disposizione per un'analisi personalizzata.</p>
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

export default CondizioniAmmissibilitaSection;
