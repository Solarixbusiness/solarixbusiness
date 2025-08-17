'use client';

interface ServicesContentProps {
  openSections: Record<string, boolean>;
  toggleSectionAction: (section: string) => void;
}

export default function ServicesContent({ openSections, toggleSectionAction }: ServicesContentProps) {
  return (
    <>
      {/* Servizio Completo */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div 
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleSectionAction('servizio-completo')}
        >
          <h2 className="text-2xl font-bold text-green-700">Il Nostro Servizio Completo per i Vostri Progetti LIFE</h2>
          <span className="text-2xl text-green-600">
            {openSections['servizio-completo'] ? '−' : '+'}
          </span>
        </div>
        
        {openSections['servizio-completo'] && (
          <div className="mt-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-700 mb-3">📋 Fase di Preparazione</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Analisi di fattibilità tecnica</li>
                  <li>Identificazione partner strategici</li>
                  <li>Sviluppo concept progettuale</li>
                  <li>Budget dettagliato e timeline</li>
                  <li>Valutazione impatto ambientale</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-green-700 mb-3">✍️ Redazione Proposta</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Scrittura tecnica professionale</li>
                  <li>Allineamento criteri UE</li>
                  <li>Documentazione scientifica</li>
                  <li>Piano di comunicazione</li>
                  <li>Strategia di disseminazione</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-purple-700 mb-3">🎯 Gestione Progetto</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Project management completo</li>
                  <li>Coordinamento partner</li>
                  <li>Monitoraggio milestone</li>
                  <li>Reporting periodico UE</li>
                  <li>Rendicontazione finale</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Metodologia */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div 
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleSectionAction('metodologia')}
        >
          <h2 className="text-2xl font-bold text-green-700">La Nostra Metodologia Vincente</h2>
          <span className="text-2xl text-green-600">
            {openSections['metodologia'] ? '−' : '+'}
          </span>
        </div>
        
        {openSections['metodologia'] && (
          <div className="mt-6">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-green-100">
                    <th className="border border-gray-300 p-3 text-left font-bold">Fase</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Durata</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Attività Principali</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Deliverable</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Vostro Coinvolgimento</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-blue-50">
                    <td className="border border-gray-300 p-3 font-semibold">Analisi Preliminare</td>
                    <td className="border border-gray-300 p-3">2-4 settimane</td>
                    <td className="border border-gray-300 p-3">Studio fattibilità, benchmark, analisi mercato</td>
                    <td className="border border-gray-300 p-3">Report fattibilità</td>
                    <td className="border border-gray-300 p-3">Briefing iniziale</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">Sviluppo Concept</td>
                    <td className="border border-gray-300 p-3">4-6 settimane</td>
                    <td className="border border-gray-300 p-3">Definizione obiettivi, metodologia, innovazione</td>
                    <td className="border border-gray-300 p-3">Concept document</td>
                    <td className="border border-gray-300 p-3">Workshop creativi</td>
                  </tr>
                  <tr className="bg-yellow-50">
                    <td className="border border-gray-300 p-3 font-semibold">Partnership Building</td>
                    <td className="border border-gray-300 p-3">6-8 settimane</td>
                    <td className="border border-gray-300 p-3">Identificazione e selezione partner strategici</td>
                    <td className="border border-gray-300 p-3">Consortium agreement</td>
                    <td className="border border-gray-300 p-3">Negoziazioni partner</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">Redazione Proposta</td>
                    <td className="border border-gray-300 p-3">8-12 settimane</td>
                    <td className="border border-gray-300 p-3">Scrittura tecnica, budget, documentazione</td>
                    <td className="border border-gray-300 p-3">Proposta completa</td>
                    <td className="border border-gray-300 p-3">Review e approvazioni</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="border border-gray-300 p-3 font-semibold">Submission & Follow-up</td>
                    <td className="border border-gray-300 p-3">2-4 settimane</td>
                    <td className="border border-gray-300 p-3">Invio, chiarimenti, negoziazioni</td>
                    <td className="border border-gray-300 p-3">Grant agreement</td>
                    <td className="border border-gray-300 p-3">Supporto decisionale</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Esempi di Successo */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div 
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleSectionAction('esempi-successo')}
        >
          <h2 className="text-2xl font-bold text-green-700">Esempi di Progetti LIFE di Successo</h2>
          <span className="text-2xl text-green-600">
            {openSections['esempi-successo'] ? '−' : '+'}
          </span>
        </div>
        
        {openSections['esempi-successo'] && (
          <div className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-green-700 mb-3">🏭 LIFE-ECODIGESTION</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Budget:</strong> 2,1 milioni € (60% UE)</p>
                  <p><strong>Settore:</strong> Economia circolare</p>
                  <p><strong>Obiettivo:</strong> Digestione anaerobica rifiuti organici</p>
                  <p><strong>Risultati:</strong> -40% emissioni CO2, +35% efficienza energetica</p>
                  <p><strong>Replicabilità:</strong> 15 impianti in 8 paesi UE</p>
                </div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-700 mb-3">🌊 LIFE-AQUA-SMART</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Budget:</strong> 1,8 milioni € (60% UE)</p>
                  <p><strong>Settore:</strong> Gestione risorse idriche</p>
                  <p><strong>Obiettivo:</strong> Tecnologie smart per depurazione</p>
                  <p><strong>Risultati:</strong> -50% consumo energetico, +90% qualità acqua</p>
                  <p><strong>Impatto:</strong> 500.000 abitanti serviti</p>
                </div>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-purple-700 mb-3">🌱 LIFE-CARBON-FARMING</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Budget:</strong> 2,5 milioni € (75% UE)</p>
                  <p><strong>Settore:</strong> Agricoltura sostenibile</p>
                  <p><strong>Obiettivo:</strong> Sequestro carbonio nei suoli</p>
                  <p><strong>Risultati:</strong> +25% carbonio organico, -30% fertilizzanti</p>
                  <p><strong>Scalabilità:</strong> 10.000 ettari coinvolti</p>
                </div>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-orange-700 mb-3">🏢 LIFE-GREEN-BUILDING</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Budget:</strong> 1,6 milioni € (60% UE)</p>
                  <p><strong>Settore:</strong> Edilizia sostenibile</p>
                  <p><strong>Obiettivo:</strong> Materiali bio-based innovativi</p>
                  <p><strong>Risultati:</strong> -60% impatto ambientale, +40% isolamento</p>
                  <p><strong>Commercializzazione:</strong> 3 brevetti depositati</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Analisi Errori Comuni */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div 
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleSectionAction('errori-comuni')}
        >
          <h2 className="text-2xl font-bold text-green-700">Analisi Errori Comuni e Come Evitarli</h2>
          <span className="text-2xl text-green-600">
            {openSections['errori-comuni'] ? '−' : '+'}
          </span>
        </div>
        
        {openSections['errori-comuni'] && (
          <div className="mt-6">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-red-100">
                    <th className="border border-gray-300 p-3 text-left font-bold">Errore Comune</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Impatto</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Nostra Soluzione</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Successo %</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-green-50">
                    <td className="border border-gray-300 p-3 font-semibold">Budget non dettagliato</td>
                    <td className="border border-gray-300 p-3">Rifiuto immediato</td>
                    <td className="border border-gray-300 p-3"><strong className="text-green-600">Template UE professionale</strong></td>
                    <td className="border border-gray-300 p-3"><strong className="text-green-600">100%</strong></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">Mancato allineamento Green Deal</td>
                    <td className="border border-gray-300 p-3">Basso punteggio</td>
                    <td className="border border-gray-300 p-3"><strong className="text-green-600">Studio politiche UE</strong></td>
                    <td className="border border-gray-300 p-3"><strong className="text-orange-600">80%</strong></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-semibold">Partner inadeguati</td>
                    <td className="border border-gray-300 p-3">Scarsa credibilità</td>
                    <td className="border border-gray-300 p-3"><strong className="text-green-600">Selezione strategica</strong></td>
                    <td className="border border-gray-300 p-3"><strong className="text-blue-600">60%</strong></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">Obiettivi non misurabili</td>
                    <td className="border border-gray-300 p-3">Impatto non verificabile</td>
                    <td className="border border-gray-300 p-3"><strong className="text-green-600">KPI quantificati</strong></td>
                    <td className="border border-gray-300 p-3"><strong className="text-green-600">70%</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
