'use client';

interface FundingStructureProps {
  openSections: { [key: string]: boolean };
  toggleSectionAction: (sectionId: string) => void;
}

export default function FundingStructure({ openSections, toggleSectionAction }: FundingStructureProps) {
  return (
    <>
      {/* Introduzione */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div 
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleSectionAction('introduzione')}
        >
          <h2 className="text-2xl font-bold text-blue-700">Introduzione all'Innovation Fund</h2>
          <span className="text-2xl text-blue-600">
            {openSections['introduzione'] ? '−' : '+'}
          </span>
        </div>
        
        {openSections['introduzione'] && (
          <div className="mt-6 space-y-4 text-gray-700">
            <p>
              L'Innovation Fund è il programma dell'Unione Europea progettato per finanziare progetti su larga scala che riducono drasticamente le emissioni di carbonio e promuovono tecnologie pulite rivoluzionarie. Noi di Solarix Business vi guidiamo in questo programma d'élite che finanzia impianti innovativi per l'energia rinnovabile e processi industriali a basso impatto ambientale.
            </p>
            <p>
              Per la vostra azienda, rappresenta l'opportunità di realizzare progetti di efficientamento energetico, termico o comunità energetiche di scala industriale, permettendovi di passare da iniziative locali a strategie complete per la crescita sostenibile europea.
            </p>
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg border-l-4 border-blue-500">
              <h4 className="text-lg font-bold text-blue-800 mb-3">🚀 MEGA-PROGETTI EUROPEI - SCALA INDUSTRIALE!</h4>
              <p className="mb-3"><strong>📅 Finestre Continue:</strong> Bandi annuali garantiti fino al 2030 con budget crescenti</p>
              <p className="mb-3"><strong>💰 FONDO PERDUTO GARANTITO:</strong> <span className="bg-blue-200 px-2 py-1 rounded font-bold text-blue-800">Fino al 60% del budget totale NON si restituisce mai</span></p>
              <p><strong>🎯 La nostra strategia:</strong> Vi trasformiamo da azienda locale a leader europeo nei mega-progetti!</p>
            </div>
          </div>
        )}
      </div>

      {/* Struttura dei Finanziamenti */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div 
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleSectionAction('struttura-finanziamenti')}
        >
          <h2 className="text-2xl font-bold text-blue-700">💰 Struttura dei Finanziamenti a Fondo Perduto</h2>
          <span className="text-2xl text-blue-600">
            {openSections['struttura-finanziamenti'] ? '−' : '+'}
          </span>
        </div>
        
        {openSections['struttura-finanziamenti'] && (
          <div className="mt-6">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="border border-gray-300 p-3 text-left font-bold">Tipologia Progetto</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Contributo a Fondo Perduto</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Budget Minimo</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Durata</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Budget Tipico</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Settori</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-green-50">
                    <td className="border border-gray-300 p-3 font-semibold">Progetti Standard</td>
                    <td className="border border-gray-300 p-3"><strong className="text-green-600">40-50% a fondo perduto</strong></td>
                    <td className="border border-gray-300 p-3"><strong>7,5 milioni €</strong></td>
                    <td className="border border-gray-300 p-3">5-10 anni</td>
                    <td className="border border-gray-300 p-3"><strong className="text-blue-600">10-50 milioni €</strong></td>
                    <td className="border border-gray-300 p-3">Industria, energia, mobilità</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">Progetti Innovativi</td>
                    <td className="border border-gray-300 p-3"><strong className="text-green-600">50-55% a fondo perduto</strong></td>
                    <td className="border border-gray-300 p-3"><strong>7,5 milioni €</strong></td>
                    <td className="border border-gray-300 p-3">5-10 anni</td>
                    <td className="border border-gray-300 p-3"><strong className="text-blue-600">20-100 milioni €</strong></td>
                    <td className="border border-gray-300 p-3">Tecnologie avanzate</td>
                  </tr>
                  <tr className="bg-purple-50">
                    <td className="border border-gray-300 p-3 font-semibold">Progetti Pionieri</td>
                    <td className="border border-gray-300 p-3"><strong className="text-purple-600">60% a fondo perduto</strong></td>
                    <td className="border border-gray-300 p-3"><strong>7,5 milioni €</strong></td>
                    <td className="border border-gray-300 p-3">5-10 anni</td>
                    <td className="border border-gray-300 p-3"><strong className="text-blue-600">50-500 milioni €</strong></td>
                    <td className="border border-gray-300 p-3">Tecnologie rivoluzionarie</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-gradient-to-r from-yellow-100 to-blue-100 p-8 rounded-lg mt-6 border-2 border-blue-400">
              <h3 className="text-2xl font-bold text-blue-800 mb-4 text-center">🎯 FINO AL 60% A FONDO PERDUTO = MEGA-FINANZIAMENTI EUROPEI!</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-blue-700 mb-2">💶 ESEMPIO MEGA-PROGETTO:</h4>
                  <p>Progetto da <strong>30.000.000 €</strong></p>
                  <p className="text-blue-600 font-bold text-lg">✅ Europa paga: 18.000.000 € GRATIS</p>
                  <p>Voi investite: 12.000.000 €</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-purple-700 mb-2">🔒 CARATTERISTICHE:</h4>
                  <p>✅ 100% a fondo perduto - nessun rimborso</p>
                  <p>✅ Copertura costi capitali e operativi</p>
                  <p>✅ Nessun prestito agevolato</p>
                  <p className="text-blue-600 font-bold">✅ Solo contributi diretti!</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
