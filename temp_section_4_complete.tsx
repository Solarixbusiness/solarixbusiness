{/* Sezione 4: FASE 3: Identificazione Componenti */}
<div id="section-p3-4" className="mb-8">
  <button
    onClick={() => toggleSection('section-p3-4')}
    className="flex justify-between items-center w-full p-4 bg-green-100 hover:bg-green-200 rounded-lg transition-colors duration-200"
  >
    <h2 className="text-xl font-bold text-green-800">4. FASE 3: Identificazione Componenti</h2>
    <svg
      className={`w-6 h-6 transform transition-transform duration-200 ${activeSection === 'section-p3-4' ? 'rotate-180' : ''}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  </button>

  {activeSection === 'section-p3-4' && (
    <div className="mt-4 space-y-6 p-4 bg-white rounded-lg border border-gray-200">
      {/* 4.1 Profilazione Membri */}
      <div>
        <h3 className="text-lg font-semibold text-green-700 mb-3">4.1 Profilazione Membri</h3>
        <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 shadow-sm">
          <p className="text-gray-700 mb-4">La corretta categorizzazione dei partecipanti è fondamentale per definire ruoli, responsabilità e benefici all'interno della CER:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h5 className="font-medium text-gray-800">Prosumer</h5>
              </div>
              <p className="text-gray-600 text-sm">Membri con potenziali siti produttivi (impianti FER).</p>
              <div className="mt-3 p-3 bg-green-50 rounded-lg">
                <p className="text-xs text-green-700">Caratteristiche principali:</p>
                <ul className="list-disc text-xs text-green-700 pl-4 mt-1">
                  <li>Producono energia per autoconsumo</li>
                  <li>Condividono l'eccedenza con la CER</li>
                  <li>Beneficiano sia degli incentivi che dei risparmi in bolletta</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h5 className="font-medium text-gray-800">Consumer</h5>
              </div>
              <p className="text-gray-600 text-sm">Membri che partecipano solo come consumatori di energia.</p>
              <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                <p className="text-xs text-blue-700">Caratteristiche principali:</p>
                <ul className="list-disc text-xs text-blue-700 pl-4 mt-1">
                  <li>Non dispongono di impianti propri</li>
                  <li>Consumano l'energia condivisa</li>
                  <li>Beneficiano della ripartizione degli incentivi</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
                <h5 className="font-medium text-gray-800">Enti pubblici</h5>
              </div>
              <p className="text-gray-600 text-sm">Amministrazioni locali, scuole, enti religiosi e altre organizzazioni pubbliche.</p>
              <div className="mt-3 p-3 bg-purple-50 rounded-lg">
                <p className="text-xs text-purple-700">Caratteristiche principali:</p>
                <ul className="list-disc text-xs text-purple-700 pl-4 mt-1">
                  <li>Possono agire come promotori della CER</li>
                  <li>Spesso dispongono di ampie superfici per impianti</li>
                  <li>Possono facilitare l'accesso a finanziamenti pubblici</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-300 rounded-r-lg">
            <div className="flex">
              <div className="flex-shrink-0 text-amber-500 mr-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <p className="text-sm text-amber-700">
                <span className="font-semibold">Nota:</span> Una CER può essere costituita anche da soli consumer, purché vi siano impianti di produzione di proprietà della CER stessa. È importante che la composizione dei membri sia bilanciata per massimizzare i benefici collettivi.  
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4.2 Analisi Profili di Consumo */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-green-700 mb-3">4.2 Analisi Profili di Consumo</h3>
        <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 shadow-sm">
          <p className="text-gray-700 mb-4">La valutazione dettagliata dei consumi energetici dei membri è essenziale per ottimizzare il dimensionamento degli impianti e massimizzare i benefici della CER:</p>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800">Curve di carico orarie/stagionali</h5>
                  <p className="text-gray-600 text-sm mt-1">Analisi della distribuzione temporale dei consumi per identificare pattern ricorrenti e variazioni stagionali.</p>
                  <div className="mt-2 p-2 bg-gray-50 rounded border border-gray-200">
                    <p className="text-xs text-gray-500">Utilizzare i dati storici di consumo (almeno 12 mesi) per costruire profili di carico rappresentativi per ciascuna categoria di utente.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800">Picchi di domanda</h5>
                  <p className="text-gray-600 text-sm mt-1">Identificazione dei momenti di massimo prelievo energetico per valutare la capacità della CER di coprire i fabbisogni nei periodi critici.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800">Compatibilità con produzione rinnovabile</h5>
                  <p className="text-gray-600 text-sm mt-1">Valutazione della sovrapposizione temporale tra produzione rinnovabile (es. fotovoltaico) e consumi degli utenti.</p>
                  <div className="mt-2 p-2 bg-gray-50 rounded border border-gray-200">
                    <p className="text-xs text-gray-500">Maggiore è la contemporaneità tra produzione e consumo, maggiori saranno i benefici economici per la CER.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                  </svg>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800">Potenziale autoconsumo virtuale</h5>
                  <p className="text-gray-600 text-sm mt-1">Stima della quota di energia prodotta che può essere teoricamente autoconsumata all'interno della CER.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 bg-blue-100 p-4 rounded-lg">
            <div className="flex">
              <div className="flex-shrink-0 text-blue-700 mr-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <div>
                <h5 className="font-medium text-blue-800 mb-1">Strumenti di analisi consigliati</h5>
                <p className="text-sm text-blue-700">Per un'analisi accurata dei profili di consumo, è consigliabile utilizzare software specializzati che consentano la simulazione di diversi scenari di produzione e consumo, tenendo conto della variabilità stagionale e delle caratteristiche specifiche degli impianti previsti.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}
</div>
