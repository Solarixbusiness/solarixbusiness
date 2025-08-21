'use client';

interface FundingStructureProps {
  openSections: { [key: string]: boolean };
  toggleSectionAction: (sectionId: string) => void;
}

export default function FundingStructure({ openSections, toggleSectionAction }: FundingStructureProps) {
  return (
    <>
      {/* Struttura Finanziamenti */}
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
        <button
          onClick={() => toggleSectionAction('struttura')}
          className="w-full flex justify-between items-center text-left"
        >
          <h2 className="text-3xl font-bold text-green-800">💰 Struttura dei Finanziamenti a Fondo Perduto</h2>
          <span className="text-3xl text-green-600">{openSections['struttura'] ? '−' : '+'}</span>
        </button>
        
        {openSections['struttura'] && (
          <div className="mt-6">
            <div className="bg-green-50 p-6 rounded-xl mb-6">
              <h3 className="text-2xl font-bold text-green-800 mb-4">L'Europa finanzia dal 40% al 60% dei vostri investimenti agricoli a fondo perduto</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-green-300">
                  <thead>
                    <tr className="bg-green-600 text-white">
                      <th className="border border-green-300 p-3 text-left">Tipo Intervento</th>
                      <th className="border border-green-300 p-3 text-left">Contributo a Fondo Perduto</th>
                      <th className="border border-green-300 p-3 text-left">Budget Tipico</th>
                      <th className="border border-green-300 p-3 text-left">Durata</th>
                      <th className="border border-green-300 p-3 text-left">Chi Può Accedere</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="border border-green-300 p-3 font-bold text-green-700">Efficientamento Energetico</td>
                      <td className="border border-green-300 p-3 font-bold text-blue-600">40-60% a fondo perduto</td>
                      <td className="border border-green-300 p-3">20.000-200.000€</td>
                      <td className="border border-green-300 p-3">2-3 anni</td>
                      <td className="border border-green-300 p-3">Aziende agricole, allevamenti</td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="border border-green-300 p-3 font-bold text-green-700">Energie Rinnovabili</td>
                      <td className="border border-green-300 p-3 font-bold text-blue-600">40-50% a fondo perduto</td>
                      <td className="border border-green-300 p-3">50.000-500.000€</td>
                      <td className="border border-green-300 p-3">3-5 anni</td>
                      <td className="border border-green-300 p-3">Imprese agricole, cooperative</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-green-300 p-3 font-bold text-green-700">Automazione e Digitale</td>
                      <td className="border border-green-300 p-3 font-bold text-blue-600">50-60% a fondo perduto</td>
                      <td className="border border-green-300 p-3">30.000-300.000€</td>
                      <td className="border border-green-300 p-3">2-4 anni</td>
                      <td className="border border-green-300 p-3">Aziende innovative</td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="border border-green-300 p-3 font-bold text-green-700">Edilizia Rurale</td>
                      <td className="border border-green-300 p-3 font-bold text-blue-600">40-50% a fondo perduto</td>
                      <td className="border border-green-300 p-3">100.000-1.000.000€</td>
                      <td className="border border-green-300 p-3">3-7 anni</td>
                      <td className="border border-green-300 p-3">Imprese agricole, agriturismi</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div className="bg-green-100 p-4 rounded-lg">
                  <h4 className="font-bold text-green-800 mb-2">Caratteristiche dei contributi:</h4>
                  <ul className="text-green-700">
                    <li>• 100% a fondo perduto - nessun rimborso richiesto</li>
                    <li>• Gestione regionale con criteri territoriali specifici</li>
                    <li>• Maggiorazioni per giovani agricoltori, aree svantaggiate</li>
                    <li>• Accesso continuo con bandi periodici durante l'anno</li>
                  </ul>
                </div>
                <div className="bg-emerald-100 p-4 rounded-lg">
                  <h4 className="font-bold text-emerald-800 mb-2">Budget e Portata:</h4>
                  <ul className="text-emerald-700">
                    <li>• Budget totale italiano 2023-2027: 8 miliardi di euro</li>
                    <li>• Range progetti: Da 10.000€ a diversi milioni</li>
                    <li>• Settori: Efficientamento, rinnovabili, automazione</li>
                    <li>• Gestione: Regionale autonoma con priorità territoriali</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Settori di Intervento */}
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
        <button
          onClick={() => toggleSectionAction('settori')}
          className="w-full flex justify-between items-center text-left"
        >
          <h2 className="text-3xl font-bold text-green-800">🎯 Settori di Intervento: Le Vostre Opportunità di Modernizzazione</h2>
          <span className="text-3xl text-green-600">{openSections['settori'] ? '−' : '+'}</span>
        </button>
        
        {openSections['settori'] && (
          <div className="mt-6">
            <div className="bg-blue-50 p-6 rounded-xl mb-6">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Mappatura Completa delle Opportunità</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-blue-300">
                  <thead>
                    <tr className="bg-blue-600 text-white">
                      <th className="border border-blue-300 p-3 text-left">Settore</th>
                      <th className="border border-blue-300 p-3 text-left">Soluzioni Solarix</th>
                      <th className="border border-blue-300 p-3 text-left">Budget Tipico</th>
                      <th className="border border-blue-300 p-3 text-left">Contributo</th>
                      <th className="border border-blue-300 p-3 text-left">Durata</th>
                      <th className="border border-blue-300 p-3 text-left">Priorità</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="border border-blue-300 p-3 font-bold text-blue-700">Efficientamento Energetico</td>
                      <td className="border border-blue-300 p-3">Isolamento, pompe di calore, controlli</td>
                      <td className="border border-blue-300 p-3">20.000-200.000€</td>
                      <td className="border border-blue-300 p-3 font-bold text-green-600">40-60% a fondo perduto</td>
                      <td className="border border-blue-300 p-3">2-3 anni</td>
                      <td className="border border-blue-300 p-3 font-bold text-red-600">MOLTO ALTA</td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-blue-300 p-3 font-bold text-blue-700">Energie Rinnovabili</td>
                      <td className="border border-blue-300 p-3">Fotovoltaico, biomasse, geotermico</td>
                      <td className="border border-blue-300 p-3">50.000-500.000€</td>
                      <td className="border border-blue-300 p-3 font-bold text-green-600">40-50% a fondo perduto</td>
                      <td className="border border-blue-300 p-3">3-5 anni</td>
                      <td className="border border-blue-300 p-3 font-bold text-red-600">MOLTO ALTA</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-blue-300 p-3 font-bold text-blue-700">Automazione e Digitale</td>
                      <td className="border border-blue-300 p-3">Sensori IoT, robot, sistemi gestione</td>
                      <td className="border border-blue-300 p-3">30.000-300.000€</td>
                      <td className="border border-blue-300 p-3 font-bold text-green-600">50-60% a fondo perduto</td>
                      <td className="border border-blue-300 p-3">2-4 anni</td>
                      <td className="border border-blue-300 p-3 font-bold text-orange-600">ALTA</td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-blue-300 p-3 font-bold text-blue-700">Infrastrutture Irrigue</td>
                      <td className="border border-blue-300 p-3">Sistemi irrigazione efficiente</td>
                      <td className="border border-blue-300 p-3">40.000-400.000€</td>
                      <td className="border border-blue-300 p-3 font-bold text-green-600">50-60% a fondo perduto</td>
                      <td className="border border-blue-300 p-3">3-5 anni</td>
                      <td className="border border-blue-300 p-3 font-bold text-yellow-600">MEDIA</td>
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
