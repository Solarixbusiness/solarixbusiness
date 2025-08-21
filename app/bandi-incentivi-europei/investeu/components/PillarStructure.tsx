'use client';

interface PillarStructureProps {
  openSections: { [key: string]: boolean };
  toggleSectionAction: (sectionId: string) => void;
}

export default function PillarStructure({ openSections, toggleSectionAction }: PillarStructureProps) {
  return (
    <>
      {/* 4 Pilastri Strategici */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div 
          onClick={() => toggleSectionAction('pilastri')}
          className="cursor-pointer flex justify-between items-center mb-6"
        >
          <h2 className="text-3xl font-bold text-purple-800">🏛️ I 4 Pilastri Strategici di InvestEU</h2>
          <span className="text-2xl font-bold text-purple-600">
            {openSections['pilastri'] ? '−' : '+'}
          </span>
        </div>
        
        {openSections['pilastri'] && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-blue-800 mb-3">🌱 Infrastrutture Sostenibili</h3>
                <p className="text-gray-700 mb-4">
                  Finanziamenti per progetti di energia rinnovabile, efficienza energetica e mobilità sostenibile.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-blue-700 mb-2">Progetti Finanziabili:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Impianti fotovoltaici e eolici</li>
                    <li>• Sistemi di accumulo energetico</li>
                    <li>• Reti di ricarica elettrica</li>
                    <li>• Efficientamento edifici</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-green-800 mb-3">🏭 Ricerca e Innovazione</h3>
                <p className="text-gray-700 mb-4">
                  Supporto per progetti di R&S in tecnologie pulite e digitalizzazione industriale.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-green-700 mb-2">Settori Prioritari:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Tecnologie cleantech</li>
                    <li>• Industria 4.0</li>
                    <li>• Biotecnologie verdi</li>
                    <li>• Materiali avanzati</li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500">
                <h3 className="text-xl font-bold text-purple-800 mb-3">🏢 PMI e Mid-Cap</h3>
                <p className="text-gray-700 mb-4">
                  Strumenti finanziari dedicati alle piccole e medie imprese innovative.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-purple-700 mb-2">Vantaggi Specifici:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Garanzie fino all'80%</li>
                    <li>• Tassi agevolati</li>
                    <li>• Procedure semplificate</li>
                    <li>• Supporto tecnico</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
                <h3 className="text-xl font-bold text-orange-800 mb-3">🎯 Competenze Digitali</h3>
                <p className="text-gray-700 mb-4">
                  Investimenti in formazione digitale e sviluppo delle competenze tecnologiche.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-orange-700 mb-2">Aree di Intervento:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Formazione digitale</li>
                    <li>• Upskilling tecnico</li>
                    <li>• Certificazioni IT</li>
                    <li>• Piattaforme e-learning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Confronto Tassi */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div 
          onClick={() => toggleSectionAction('confronto-tassi')}
          className="cursor-pointer flex justify-between items-center mb-6"
        >
          <h2 className="text-3xl font-bold text-purple-800">📊 Confronto Tassi: InvestEU vs Mercato</h2>
          <span className="text-2xl font-bold text-purple-600">
            {openSections['confronto-tassi'] ? '−' : '+'}
          </span>
        </div>
        
        {openSections['confronto-tassi'] && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-red-50 to-green-50 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                💰 Risparmio Garantito con InvestEU
              </h3>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-purple-600 text-white">
                      <th className="border border-gray-300 p-3 text-left">Tipo Finanziamento</th>
                      <th className="border border-gray-300 p-3 text-left">Tasso Mercato</th>
                      <th className="border border-gray-300 p-3 text-left">Tasso InvestEU</th>
                      <th className="border border-gray-300 p-3 text-left">Risparmio</th>
                      <th className="border border-gray-300 p-3 text-left">Su 1M€ in 10 anni</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="border border-gray-300 p-3 font-bold">Prestito PMI Tradizionale</td>
                      <td className="border border-gray-300 p-3 text-red-600 font-bold">5.5% - 7.0%</td>
                      <td className="border border-gray-300 p-3 text-green-600 font-bold">2.5% - 3.5%</td>
                      <td className="border border-gray-300 p-3 text-green-600 font-bold">3.0% - 3.5%</td>
                      <td className="border border-gray-300 p-3 text-green-600 font-bold">€300.000 - €350.000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-bold">Finanziamento Innovazione</td>
                      <td className="border border-gray-300 p-3 text-red-600 font-bold">6.0% - 8.0%</td>
                      <td className="border border-gray-300 p-3 text-green-600 font-bold">3.0% - 4.0%</td>
                      <td className="border border-gray-300 p-3 text-green-600 font-bold">3.0% - 4.0%</td>
                      <td className="border border-gray-300 p-3 text-green-600 font-bold">€300.000 - €400.000</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 p-3 font-bold">Progetto Sostenibilità</td>
                      <td className="border border-gray-300 p-3 text-red-600 font-bold">4.5% - 6.5%</td>
                      <td className="border border-gray-300 p-3 text-green-600 font-bold">2.0% - 3.0%</td>
                      <td className="border border-gray-300 p-3 text-green-600 font-bold">2.5% - 3.5%</td>
                      <td className="border border-gray-300 p-3 text-green-600 font-bold">€250.000 - €350.000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-bold">Infrastrutture Digitali</td>
                      <td className="border border-gray-300 p-3 text-red-600 font-bold">5.0% - 7.5%</td>
                      <td className="border border-gray-300 p-3 text-green-600 font-bold">2.5% - 3.5%</td>
                      <td className="border border-gray-300 p-3 text-green-600 font-bold">2.5% - 4.0%</td>
                      <td className="border border-gray-300 p-3 text-green-600 font-bold">€250.000 - €400.000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 bg-green-100 p-4 rounded-lg border-l-4 border-green-500">
                <h4 className="font-bold text-green-800 mb-2">🎯 Vantaggi Aggiuntivi InvestEU:</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-green-700">
                  <div>
                    <p><strong>• Garanzie UE:</strong> Fino all'80% dell'importo</p>
                    <p><strong>• Durata:</strong> Fino a 20 anni</p>
                  </div>
                  <div>
                    <p><strong>• Procedure:</strong> Semplificate e veloci</p>
                    <p><strong>• Supporto:</strong> Consulenza tecnica inclusa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
