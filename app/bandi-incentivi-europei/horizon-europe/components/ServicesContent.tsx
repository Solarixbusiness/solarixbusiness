'use client';

import React from 'react';

interface ServicesContentProps {
  openSections: { [key: string]: boolean };
  toggleSectionAction: (sectionId: string) => void;
}

export default function ServicesContent({ openSections, toggleSectionAction }: ServicesContentProps) {
  return (
    <>
      {/* Calendario 2025-2026 */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div 
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleSectionAction('calendario')}
        >
          <h2 className="text-2xl font-bold text-green-700">Calendario 2025-2026: Scadenze e Opportunità</h2>
          <span className="text-2xl text-green-600">
            {openSections['calendario'] ? '−' : '+'}
          </span>
        </div>
        
        {openSections['calendario'] && (
          <div className="mt-6 space-y-6 text-gray-700">
            <p>Noi di Solarix Business monitoriamo costantemente tutte le finestre di opportunità per voi:</p>
            
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-red-700 mb-3">⚠️ Scadenze Immediate (Settembre-Novembre 2025):</h3>
              <ul className="space-y-2">
                <li>• <strong>Gruppo 5</strong> (la nostra specialità): Call chiudono tra il 17-22 settembre 2025</li>
                <li>• <strong>Gruppi 4 e 6:</strong> Scadenze concentrate settembre-ottobre 2025</li>
                <li>• <strong>Two-stage calls:</strong> Prima fase 19 settembre 2025</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-green-700 mb-3">🚀 Finestre Future 2026:</h3>
              <ul className="space-y-2">
                <li>• <strong>Febbraio 2026:</strong> Second-stage per call two-phase</li>
                <li>• <strong>Aprile-Maggio 2026:</strong> Work Programme 2026 - nuove call</li>
                <li>• <strong>Settembre 2026:</strong> Concentrazione scadenze principali</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Come Strutturiamo le Vostre Domande */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div 
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleSectionAction('candidature')}
        >
          <h2 className="text-2xl font-bold text-green-700">Come Strutturiamo le Vostre Candidature</h2>
          <span className="text-2xl text-green-600">
            {openSections['candidature'] ? '−' : '+'}
          </span>
        </div>
        
        {openSections['candidature'] && (
          <div className="mt-6 space-y-4 text-gray-700">
            <p>Noi di Solarix Business vi accompagniamo in tutto il processo di candidatura:</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-700 mb-2">Fase 1: Preparazione</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Analisi call e requisiti</li>
                  <li>• Costruzione consorzio</li>
                  <li>• Sviluppo idea progettuale</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-green-700 mb-2">Fase 2: Redazione</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Stesura proposta tecnica</li>
                  <li>• Budget dettagliato</li>
                  <li>• Documentazione amministrativa</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* I Nostri Servizi di Consulenza */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div 
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleSectionAction('servizi')}
        >
          <h2 className="text-2xl font-bold text-green-700">I Nostri Servizi di Consulenza</h2>
          <span className="text-2xl text-green-600">
            {openSections['servizi'] ? '−' : '+'}
          </span>
        </div>
        
        {openSections['servizi'] && (
          <div className="mt-6 space-y-4 text-gray-700">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-700 mb-3">Consulenza Strategica</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Identificazione opportunità</li>
                  <li>• Analisi competitiva</li>
                  <li>• Posizionamento strategico</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-green-700 mb-3">Sviluppo Progetti</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Costruzione consorzi</li>
                  <li>• Redazione proposte</li>
                  <li>• Gestione amministrativa</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-purple-700 mb-3">Supporto Post-Award</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Project management</li>
                  <li>• Rendicontazione</li>
                  <li>• Audit e compliance</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Strategia di Crescita */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div 
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleSectionAction('strategia')}
        >
          <h2 className="text-2xl font-bold text-green-700">La Nostra Strategia di Crescita per Voi</h2>
          <span className="text-2xl text-green-600">
            {openSections['strategia'] ? '−' : '+'}
          </span>
        </div>
        
        {openSections['strategia'] && (
          <div className="mt-6 space-y-4 text-gray-700">
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-700 mb-2">Fase 1: Ingresso (Primi 6 mesi)</h4>
                <p className="text-sm">Identificazione opportunità immediate e costruzione network europeo</p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-green-700 mb-2">Fase 2: Consolidamento (6-18 mesi)</h4>
                <p className="text-sm">Sviluppo competenze e partecipazione a primi progetti</p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-bold text-purple-700 mb-2">Fase 3: Leadership (18+ mesi)</h4>
                <p className="text-sm">Coordinamento progetti e posizionamento come leader settoriale</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Errori da Evitare */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div 
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleSectionAction('errori')}
        >
          <h2 className="text-2xl font-bold text-green-700">Errori che Vi Aiutiamo a Evitare</h2>
          <span className="text-2xl text-green-600">
            {openSections['errori'] ? '−' : '+'}
          </span>
        </div>
        
        {openSections['errori'] && (
          <div className="mt-6 space-y-4 text-gray-700">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p><strong className="text-red-700">❌ Consorzio mal costruito</strong></p>
                <p className="mt-2"><strong className="text-green-700">✅ Noi costruiamo relazioni solide prima del bando</strong></p>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p><strong className="text-red-700">❌ Budget irrealistico</strong></p>
                <p className="mt-2"><strong className="text-green-700">✅ I nostri budget includono margini di sicurezza</strong></p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Primi Passi Operativi */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div 
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleSectionAction('primi-passi')}
        >
          <h2 className="text-2xl font-bold text-green-700">I Nostri Primi Passi Operativi</h2>
          <span className="text-2xl text-green-600">
            {openSections['primi-passi'] ? '−' : '+'}
          </span>
        </div>
        
        {openSections['primi-passi'] && (
          <div className="mt-6 space-y-6 text-gray-700">
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="text-lg font-bold text-green-700 mb-3">Per Finestre 2026 (Approccio Strategico):</h4>
              <ul className="space-y-2">
                <li>• Registrazione su funding-tenders.ec.europa.eu</li>
                <li>• Identificazione call più promettenti del Work Programme 2026</li>
                <li>• Costruzione network di partner europei</li>
                <li>• Sviluppo idee innovative con 6+ mesi di preparazione</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Tempistiche di Erogazione */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div 
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleSectionAction('tempistiche')}
        >
          <h2 className="text-2xl font-bold text-green-700">Tempistiche di Erogazione Fondi</h2>
          <span className="text-2xl text-green-600">
            {openSections['tempistiche'] ? '−' : '+'}
          </span>
        </div>
        
        {openSections['tempistiche'] && (
          <div className="mt-6 space-y-4 text-gray-700">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Il Nostro Calendario per Voi:</h3>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <p><strong>Mesi 1-6:</strong> Valutazione progetto (monitoriamo per voi)</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <p><strong>Mese 15:</strong> Primi fondi sul vostro conto (20-30% del totale)</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <p><strong>Fine progetto:</strong> Saldo finale (vi supportiamo nella rendicontazione)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Chi Può Partecipare */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div 
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleSectionAction('partecipanti')}
        >
          <h2 className="text-2xl font-bold text-green-700">Chi Può Partecipare ai Nostri Progetti</h2>
          <span className="text-2xl text-green-600">
            {openSections['partecipanti'] ? '−' : '+'}
          </span>
        </div>
        
        {openSections['partecipanti'] && (
          <div className="mt-6 space-y-4 text-gray-700">
            <p className="text-lg font-semibold text-green-700">
              Horizon Europe non è limitato alle PMI! Noi di Solarix Business possiamo supportare:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-700 mb-3">I Nostri Clienti Ammissibili:</h3>
                <ul className="space-y-2">
                  <li>• <strong>PMI e imprese private</strong> (la nostra base clienti principale)</li>
                  <li>• <strong>Enti pubblici</strong> - amministrazioni, comuni, regioni</li>
                  <li>• <strong>Università e centri ricerca</strong> (nostri partner abituali)</li>
                  <li>• <strong>Grandi imprese</strong> (collaborazioni strategiche)</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-green-700 mb-3">I Nostri Requisiti per Voi:</h3>
                <ul className="space-y-2">
                  <li>• Essere in Italia (o paesi UE/associati)</li>
                  <li>• Capacità operativa e finanziaria (vi aiutiamo a dimostrarla)</li>
                  <li>• Il nostro supporto per documentazione e compliance</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
