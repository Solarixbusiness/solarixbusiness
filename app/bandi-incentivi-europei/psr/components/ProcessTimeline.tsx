'use client';

interface ProcessTimelineProps {
  openSections: { [key: string]: boolean };
  toggleSectionAction: (sectionId: string) => void;
}

export default function ProcessTimeline({ openSections, toggleSectionAction }: ProcessTimelineProps) {
  return (
    <>
      {/* Tempi di Processo */}
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
        <button
          onClick={() => toggleSectionAction('tempi')}
          className="w-full flex justify-between items-center text-left"
        >
          <h2 className="text-3xl font-bold text-green-800">⏱️ Tempi di Processo che Monitoriamo</h2>
          <span className="text-3xl text-green-600">{openSections['tempi'] ? '−' : '+'}</span>
        </button>
        
        {openSections['tempi'] && (
          <div className="mt-6">
            <div className="bg-orange-50 p-6 rounded-xl mb-6">
              <h3 className="text-2xl font-bold text-orange-800 mb-4">Il Nostro Processo Completo per i PSR</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-orange-300">
                  <thead>
                    <tr className="bg-orange-600 text-white">
                      <th className="border border-orange-300 p-3 text-left">Fase</th>
                      <th className="border border-orange-300 p-3 text-left">Durata</th>
                      <th className="border border-orange-300 p-3 text-left">Attività</th>
                      <th className="border border-orange-300 p-3 text-left">Nostro Supporto</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="border border-orange-300 p-3 font-bold text-orange-700">Preparazione</td>
                      <td className="border border-orange-300 p-3">2-4 settimane</td>
                      <td className="border border-orange-300 p-3">Valutazione eleggibilità</td>
                      <td className="border border-orange-300 p-3 text-green-600">Analisi strategica completa</td>
                    </tr>
                    <tr className="bg-orange-50">
                      <td className="border border-orange-300 p-3 font-bold text-orange-700">Progettazione</td>
                      <td className="border border-orange-300 p-3">4-6 settimane</td>
                      <td className="border border-orange-300 p-3">Sviluppo progetto tecnico</td>
                      <td className="border border-orange-300 p-3 text-green-600">Progettazione professionale</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-orange-300 p-3 font-bold text-orange-700">Presentazione</td>
                      <td className="border border-orange-300 p-3">2-3 settimane</td>
                      <td className="border border-orange-300 p-3">Submission domanda</td>
                      <td className="border border-orange-300 p-3 text-green-600">Gestione documentazione</td>
                    </tr>
                    <tr className="bg-orange-50">
                      <td className="border border-orange-300 p-3 font-bold text-orange-700">Valutazione</td>
                      <td className="border border-orange-300 p-3">60-120 giorni</td>
                      <td className="border border-orange-300 p-3">Istruttoria tecnico-amministrativa</td>
                      <td className="border border-orange-300 p-3 text-green-600">Monitoraggio e supporto</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-orange-300 p-3 font-bold text-orange-700">Realizzazione</td>
                      <td className="border border-orange-300 p-3">6-24 mesi</td>
                      <td className="border border-orange-300 p-3">Implementazione progetto</td>
                      <td className="border border-orange-300 p-3 text-green-600">Coordinamento completo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Errori che Vi Evitiamo */}
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
        <button
          onClick={() => toggleSectionAction('errori')}
          className="w-full flex justify-between items-center text-left"
        >
          <h2 className="text-3xl font-bold text-green-800">⚠️ Errori che Vi Evitiamo</h2>
          <span className="text-3xl text-green-600">{openSections['errori'] ? '−' : '+'}</span>
        </button>
        
        {openSections['errori'] && (
          <div className="mt-6">
            <div className="bg-red-50 p-6 rounded-xl mb-6">
              <h3 className="text-2xl font-bold text-red-800 mb-4">Come SolariX Business Previene i Problemi Comuni</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-red-300">
                  <thead>
                    <tr className="bg-red-600 text-white">
                      <th className="border border-red-300 p-3 text-left">Errore Critico</th>
                      <th className="border border-red-300 p-3 text-left">Impatto</th>
                      <th className="border border-red-300 p-3 text-left">Nostra Soluzione</th>
                      <th className="border border-red-300 p-3 text-left">Successo %</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="border border-red-300 p-3 font-bold text-red-700">Domanda incompleta</td>
                      <td className="border border-red-300 p-3">Esclusione automatica</td>
                      <td className="border border-red-300 p-3 text-green-600">Checklist pre-invio completa</td>
                      <td className="border border-red-300 p-3 font-bold text-green-600">75%</td>
                    </tr>
                    <tr className="bg-red-50">
                      <td className="border border-red-300 p-3 font-bold text-red-700">Budget sovrastimato</td>
                      <td className="border border-red-300 p-3">Riduzione contributo</td>
                      <td className="border border-red-300 p-3 text-green-600">Preventivi realistici multipli</td>
                      <td className="border border-red-300 p-3 font-bold text-green-600">80%</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-red-300 p-3 font-bold text-red-700">Mancato rispetto tempi</td>
                      <td className="border border-red-300 p-3">Revoca finanziamento</td>
                      <td className="border border-red-300 p-3 text-green-600">Pianificazione realistica</td>
                      <td className="border border-red-300 p-3 font-bold text-green-600">85%</td>
                    </tr>
                    <tr className="bg-red-50">
                      <td className="border border-red-300 p-3 font-bold text-red-700">Variazioni non autorizzate</td>
                      <td className="border border-red-300 p-3">Recupero contributi</td>
                      <td className="border border-red-300 p-3 text-green-600">Comunicazione preventiva</td>
                      <td className="border border-red-300 p-3 font-bold text-green-600">88%</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-red-300 p-3 font-bold text-red-700">Documentazione inadeguata</td>
                      <td className="border border-red-300 p-3">Ritardi o esclusione</td>
                      <td className="border border-red-300 p-3 text-green-600">Consulenza specializzata</td>
                      <td className="border border-red-300 p-3 font-bold text-green-600">82%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
