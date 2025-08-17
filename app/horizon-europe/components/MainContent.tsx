'use client';

import React from 'react';
import HorizonTable from './HorizonTable';

interface MainContentProps {
  openSections: { [key: string]: boolean };
  toggleSectionAction: (sectionId: string) => void;
}

export default function MainContent({ openSections, toggleSectionAction }: MainContentProps) {
  return (
    <>
      {/* Introduzione */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div 
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleSectionAction('introduzione')}
        >
          <h2 className="text-2xl font-bold text-green-700">Introduzione</h2>
          <span className="text-2xl text-green-600">
            {openSections['introduzione'] ? '−' : '+'}
          </span>
        </div>
        
        {openSections['introduzione'] && (
          <div className="mt-6 space-y-4 text-gray-700">
            <p>
              Noi di Solarix Business abbiamo sviluppato questa guida completa su Horizon Europe come strumento strategico per accompagnare i nostri clienti nell'evoluzione del loro business. Partiamo dalla nostra expertise consolidata in energia ed efficientamento per guidarvi verso nuovi campi di crescita, costruendo insieme percorsi di sviluppo ambiziosi e duraturi.
            </p>
            <p>
              Horizon Europe rappresenta il più grande piano dell'Unione Europea per finanziare idee innovative, con un <strong>budget totale di circa 95,5 miliardi di euro dal 2021 al 2027</strong>, e una proposta per estenderlo fino al 2034 con <strong>175 miliardi extra</strong>. I 6 gruppi tematici (chiamati "cluster") sono il cuore del programma, ispirati a sfide globali come il cambiamento climatico, la salute pubblica, la competitività economica e la sostenibilità sociale.
            </p>
            <p>
              In questa guida, noi di Solarix Business descriviamo in dettaglio gli obiettivi che hanno ispirato la loro creazione, i requisiti di partecipazione (almeno 3 attori da 3 paesi europei diversi), i minimi e massimi finanziabili, le date di scadenza per il 2025, eventuali deroghe o rinnovi, e come si struttura una domanda. Tutto spiegato in modo semplice e accessibile - pensiamo a questo come a un ponte per differenziare la vostra azienda e attrarre nuove opportunità di business.
            </p>
          </div>
        )}
      </div>

      {/* Obiettivi */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div 
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleSectionAction('obiettivi')}
        >
          <h2 className="text-2xl font-bold text-green-700">Obiettivi di Horizon Europe</h2>
          <span className="text-2xl text-green-600">
            {openSections['obiettivi'] ? '−' : '+'}
          </span>
        </div>
        
        {openSections['obiettivi'] && (
          <div className="mt-6 space-y-4 text-gray-700">
            <p className="text-lg font-semibold text-green-700">
              Noi di Solarix Business vi aiutiamo a comprendere e sfruttare i 3 pilastri fondamentali di Horizon Europe:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-700 mb-3">1. Scienza di Eccellenza</h3>
                <p><strong>Budget:</strong> €25.8 miliardi</p>
                <ul className="mt-3 space-y-1 text-sm">
                  <li>• European Research Council (ERC)</li>
                  <li>• Marie Skłodowska-Curie Actions</li>
                  <li>• Infrastrutture di ricerca</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-green-700 mb-3">2. Sfide Globali</h3>
                <p><strong>Budget:</strong> €53.5 miliardi</p>
                <ul className="mt-3 space-y-1 text-sm">
                  <li>• 6 cluster tematici</li>
                  <li>• Missioni europee</li>
                  <li>• Centro Comune di Ricerca</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-purple-700 mb-3">3. Europa Innovativa</h3>
                <p><strong>Budget:</strong> €13.6 miliardi</p>
                <ul className="mt-3 space-y-1 text-sm">
                  <li>• European Innovation Council</li>
                  <li>• Ecosistemi europei di innovazione</li>
                  <li>• European Institute of Innovation</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Requisiti di Partecipazione */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div 
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleSectionAction('requisiti')}
        >
          <h2 className="text-2xl font-bold text-green-700">Requisiti di Partecipazione</h2>
          <span className="text-2xl text-green-600">
            {openSections['requisiti'] ? '−' : '+'}
          </span>
        </div>
        
        {openSections['requisiti'] && (
          <div className="mt-6 space-y-4 text-gray-700">
            <p className="text-lg font-semibold text-green-700">
              Noi di Solarix Business vi guidiamo attraverso i requisiti fondamentali:
            </p>
            
            <div className="bg-red-100 p-4 rounded-lg border-l-4 border-red-500">
              <h3 className="text-lg font-bold text-red-700 mb-2">Requisito Minimo Obbligatorio:</h3>
              <p><strong>Almeno 3 entità legali da 3 paesi membri UE diversi</strong></p>
              <p className="mt-2 text-sm">Questo è il requisito base per tutti i progetti Horizon Europe. Noi di Solarix Business vi aiutiamo a costruire questi consorzi.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-green-700 mb-2">Paesi Ammissibili:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• 27 Stati membri UE</li>
                  <li>• Paesi associati (Norvegia, Svizzera, Regno Unito, etc.)</li>
                  <li>• Paesi terzi in casi specifici</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-700 mb-2">Tipologie di Entità:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Imprese (PMI e grandi aziende)</li>
                  <li>• Università e centri di ricerca</li>
                  <li>• Enti pubblici</li>
                  <li>• Organizzazioni non-profit</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Tabella Gruppi Tematici */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div 
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleSectionAction('gruppi-tabella')}
        >
          <h2 className="text-2xl font-bold text-green-700">I 6 Gruppi Tematici di Horizon Europe</h2>
          <span className="text-2xl text-green-600">
            {openSections['gruppi-tabella'] ? '−' : '+'}
          </span>
        </div>
        
        {openSections['gruppi-tabella'] && (
          <div className="mt-6">
            <p className="mb-4 text-gray-700">
              Noi di Solarix Business vi accompagniamo nella scelta del gruppo più adatto al vostro business:
            </p>
            <HorizonTable openSections={openSections} />
          </div>
        )}
      </div>

      {/* Budget e Finanziamenti */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div 
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleSectionAction('budget')}
        >
          <h2 className="text-2xl font-bold text-green-700">Budget e Finanziamenti Disponibili</h2>
          <span className="text-2xl text-green-600">
            {openSections['budget'] ? '−' : '+'}
          </span>
        </div>
        
        {openSections['budget'] && (
          <div className="mt-6 space-y-4 text-gray-700">
            <p>Noi di Solarix Business vi orientiamo sui finanziamenti che variano per call specifica, ma in generale per i progetti collaborativi nei 6 gruppi:</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-green-700 mb-3">Range Finanziamenti Tipici:</h3>
                <ul className="space-y-2">
                  <li>• <strong>Progetti piccoli:</strong> €1-3 milioni (3-4 partner)</li>
                  <li>• <strong>Progetti medi:</strong> €3-8 milioni (5-8 partner)</li>
                  <li>• <strong>Progetti grandi:</strong> €8-15 milioni (8+ partner)</li>
                  <li>• <strong>Flagship projects:</strong> €15-50 milioni (consorzi ampi)</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-700 mb-3">Percentuali di Finanziamento:</h3>
                <ul className="space-y-2">
                  <li>• <strong>Ricerca e innovazione:</strong> 100% dei costi eleggibili</li>
                  <li>• <strong>Attività dimostrative:</strong> 70% dei costi</li>
                  <li>• <strong>Enti non-profit:</strong> 100% dei costi</li>
                  <li>• <strong>Costi indiretti:</strong> 25% fisso sui costi diretti</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-yellow-100 p-4 rounded-lg">
              <p className="font-semibold text-yellow-800">
                Il nostro supporto: Vi aiutiamo a dimensionare correttamente il budget e a massimizzare il finanziamento ottenibile per il vostro progetto.
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
