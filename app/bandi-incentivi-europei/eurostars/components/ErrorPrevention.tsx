'use client';

interface ErrorPreventionProps {
  expandedSection: string | null;
  toggleSectionAction: (section: string) => void;
}

export default function ErrorPrevention({ expandedSection, toggleSectionAction }: ErrorPreventionProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
      <button
        onClick={() => toggleSectionAction('errori')}
        className="w-full flex justify-between items-center text-left"
      >
        <h2 className="text-3xl font-bold text-indigo-800">⚠️ Errori che Vi Evitiamo</h2>
        <span className="text-3xl text-indigo-600">{expandedSection === 'errori' ? '−' : '+'}</span>
      </button>
      
      {expandedSection === 'errori' && (
        <div className="mt-6">
          <div className="bg-red-50 p-6 rounded-xl mb-6">
            <h3 className="text-2xl font-bold text-red-800 mb-4">Come SolariX Business Previene i Problemi Critici</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-red-300">
                <thead>
                  <tr className="bg-red-600 text-white">
                    <th className="border border-red-300 p-3 text-left">Errore Fatale</th>
                    <th className="border border-red-300 p-3 text-left">Frequenza</th>
                    <th className="border border-red-300 p-3 text-left">Impatto</th>
                    <th className="border border-red-300 p-3 text-left">Nostra Soluzione</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-red-300 p-3 font-bold text-red-700">Partner inadeguato</td>
                    <td className="border border-red-300 p-3 font-bold">35%</td>
                    <td className="border border-red-300 p-3">Esclusione automatica</td>
                    <td className="border border-red-300 p-3 text-green-600">Due diligence approfondita partner</td>
                  </tr>
                  <tr className="bg-red-50">
                    <td className="border border-red-300 p-3 font-bold text-red-700">Innovazione insufficiente</td>
                    <td className="border border-red-300 p-3 font-bold">28%</td>
                    <td className="border border-red-300 p-3">Punteggio basso</td>
                    <td className="border border-red-300 p-3 text-green-600">Analisi stato dell'arte rigorosa</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-red-300 p-3 font-bold text-red-700">Business case debole</td>
                    <td className="border border-red-300 p-3 font-bold">25%</td>
                    <td className="border border-red-300 p-3">Rigetto commerciale</td>
                    <td className="border border-red-300 p-3 text-green-600">Market research professionale</td>
                  </tr>
                  <tr className="bg-red-50">
                    <td className="border border-red-300 p-3 font-bold text-red-700">Budget irrealistico</td>
                    <td className="border border-red-300 p-3 font-bold">20%</td>
                    <td className="border border-red-300 p-3">Riduzione finanziamento</td>
                    <td className="border border-red-300 p-3 text-green-600">Benchmarking costi industria</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-red-300 p-3 font-bold text-red-700">Timeline non credibile</td>
                    <td className="border border-red-300 p-3 font-bold">18%</td>
                    <td className="border border-red-300 p-3">Dubbi su feasibility</td>
                    <td className="border border-red-300 p-3 text-green-600">Pianificazione bottom-up dettagliata</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 bg-green-100 p-4 rounded-lg">
              <h4 className="font-bold text-green-800 mb-2">Best Practices che Applichiamo:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="text-green-700">
                  <li>• <strong>Start early:</strong> Iniziamo preparazione 6 mesi prima deadline</li>
                  <li>• <strong>Multiple partners:</strong> Valutiamo 5-7 partner prima di scegliere</li>
                  <li>• <strong>Technology validation:</strong> Proof-of-concept preliminare</li>
                </ul>
                <ul className="text-green-700">
                  <li>• <strong>Market research:</strong> Analisi quantitativa mercato e competitori</li>
                  <li>• <strong>Storytelling compelling:</strong> Narrativa chiara problema e soluzione</li>
                  <li>• <strong>European dimension:</strong> Valore aggiunto collaborazione transnazionale</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
