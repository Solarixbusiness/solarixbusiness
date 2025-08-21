export default function ProcessTimeline() {
  return (
    <>
      {/* Timeline del Processo */}
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-green-800">Timeline del Processo: Dalla Candidatura al Finanziamento</h2>
        </div>
        
        <div className="mt-6">
          <div className="bg-green-50 p-6 rounded-xl mb-6">
            <h3 className="text-2xl font-bold text-green-800 mb-4">Processo Completo: Tempi e Attività</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-green-300">
                <thead>
                  <tr className="bg-green-600 text-white">
                    <th className="border border-green-300 p-3 text-left">Fase</th>
                    <th className="border border-green-300 p-3 text-left">Durata</th>
                    <th className="border border-green-300 p-3 text-left">Attività Principali</th>
                    <th className="border border-green-300 p-3 text-left">Supporto Solarix</th>
                    <th className="border border-green-300 p-3 text-left">Risultato</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-green-300 p-3 font-bold text-green-700">1. Analisi Preliminare</td>
                    <td className="border border-green-300 p-3">1-2 settimane</td>
                    <td className="border border-green-300 p-3">Audit energetico, valutazione tecnica</td>
                    <td className="border border-green-300 p-3 font-bold text-blue-600">Consulenza gratuita</td>
                    <td className="border border-green-300 p-3">Piano di fattibilità</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="border border-green-300 p-3 font-bold text-green-700">2. Preparazione Domanda</td>
                    <td className="border border-green-300 p-3">2-4 settimane</td>
                    <td className="border border-green-300 p-3">Documentazione, business plan, preventivi</td>
                    <td className="border border-green-300 p-3 font-bold text-blue-600">Gestione completa</td>
                    <td className="border border-green-300 p-3">Domanda completa</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-green-300 p-3 font-bold text-green-700">3. Valutazione Regionale</td>
                    <td className="border border-green-300 p-3">3-6 mesi</td>
                    <td className="border border-green-300 p-3">Istruttoria tecnica, graduatoria</td>
                    <td className="border border-green-300 p-3 font-bold text-blue-600">Monitoraggio continuo</td>
                    <td className="border border-green-300 p-3">Decreto di concessione</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="border border-green-300 p-3 font-bold text-green-700">4. Realizzazione</td>
                    <td className="border border-green-300 p-3">6-18 mesi</td>
                    <td className="border border-green-300 p-3">Implementazione, collaudi, rendicontazione</td>
                    <td className="border border-green-300 p-3 font-bold text-blue-600">Project management</td>
                    <td className="border border-green-300 p-3">Progetto completato</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-green-300 p-3 font-bold text-green-700">5. Erogazione</td>
                    <td className="border border-green-300 p-3">1-3 mesi</td>
                    <td className="border border-green-300 p-3">Controlli finali, liquidazione</td>
                    <td className="border border-green-300 p-3 font-bold text-blue-600">Assistenza finale</td>
                    <td className="border border-green-300 p-3">Contributo erogato</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Errori che Vi Evitiamo */}
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-green-800">Errori che Vi Evitiamo</h2>
        </div>
        
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
      </div>
    </>
  );
}
