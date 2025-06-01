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
