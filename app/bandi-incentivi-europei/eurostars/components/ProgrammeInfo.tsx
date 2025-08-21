'use client';

interface ProgrammeInfoProps {
  expandedSection: string | null;
  toggleSectionAction: (section: string) => void;
}

export default function ProgrammeInfo({ expandedSection, toggleSectionAction }: ProgrammeInfoProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
      <button
        onClick={() => toggleSectionAction('caratteristiche')}
        className="w-full flex justify-between items-center text-left"
      >
        <h2 className="text-3xl font-bold text-indigo-800">🎯 Caratteristiche Distintive del Programma</h2>
        <span className="text-3xl text-indigo-600">{expandedSection === 'caratteristiche' ? '−' : '+'}</span>
      </button>
      
      {expandedSection === 'caratteristiche' && (
        <div className="mt-6">
          <div className="bg-blue-50 p-6 rounded-xl mb-6">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Progettato specificamente per PMI innovative come la vostra</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-blue-300">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="border border-blue-300 p-3 text-left">Caratteristica</th>
                    <th className="border border-blue-300 p-3 text-left">Vantaggio per Voi</th>
                    <th className="border border-blue-300 p-3 text-left">Dettagli</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-blue-300 p-3 font-bold text-blue-700">Focus PMI innovative</td>
                    <td className="border border-blue-300 p-3">Progettato per aziende come la vostra</td>
                    <td className="border border-blue-300 p-3 font-bold text-green-600">&lt;250 dipendenti, orientamento commerciale</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="border border-blue-300 p-3 font-bold text-blue-700">Collaborazione internazionale</td>
                    <td className="border border-blue-300 p-3">Accesso a competenze europee</td>
                    <td className="border border-blue-300 p-3">Minimo 2 partner da 2 paesi diversi</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-blue-300 p-3 font-bold text-blue-700">Orientamento al mercato</td>
                    <td className="border border-blue-300 p-3">Prodotti commercializzabili</td>
                    <td className="border border-blue-300 p-3">Progetti devono portare a soluzioni vendibili</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="border border-blue-300 p-3 font-bold text-blue-700">Finanziamento sostanziale</td>
                    <td className="border border-blue-300 p-3">Contributi a fondo perduto fino al 60%</td>
                    <td className="border border-blue-300 p-3 font-bold text-green-600">Massimo 2-3 milioni € per progetto</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-blue-300 p-3 font-bold text-blue-700">Network di 37 paesi</td>
                    <td className="border border-blue-300 p-3">Mercati europei accessibili</td>
                    <td className="border border-blue-300 p-3">Competenze e clienti in tutta Europa</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="bg-blue-100 p-4 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-2">Finanziamento nazionale italiano:</h4>
                <ul className="text-blue-700">
                  <li>• Contributo a fondo perduto: Fino al 60% dei costi ammissibili</li>
                  <li>• Cofinanziamento aziendale: Minimo 40% con vostre risorse</li>
                  <li>• Range di investimento: Da 500.000€ a 2-3 milioni €</li>
                  <li>• Durata tipica: 24-36 mesi di sviluppo</li>
                </ul>
              </div>
              <div className="bg-indigo-100 p-4 rounded-lg">
                <h4 className="font-bold text-indigo-800 mb-2">Gestione finanziaria:</h4>
                <ul className="text-indigo-700">
                  <li>• Erogazione diretta dal Ministero Università e Ricerca (MUR)</li>
                  <li>• Distribuzione proporzionale nel consorzio internazionale</li>
                  <li>• Partner italiano può ricevere 40-70% del budget totale</li>
                  <li>• Nessun prestito agevolato - solo contributi a fondo perduto</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
