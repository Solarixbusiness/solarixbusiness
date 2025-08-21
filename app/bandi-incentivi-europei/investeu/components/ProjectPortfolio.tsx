export default function ProjectPortfolio() {
  return (
    <>
      {/* Esempi di Progetti */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-purple-800">Esempi di Progetti che Realizziamo con InvestEU</h2>
        </div>
        
        <div className="space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 font-bold text-xl">1</div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">Industrial Solar Plus</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Budget:</strong> €15 milioni</p>
                <p><strong>Settore:</strong> Manifatturiero</p>
                <p><strong>Tecnologia:</strong> Fotovoltaico + Storage</p>
                <p><strong>ROI:</strong> 18% annuo</p>
                <p><strong>Garanzia InvestEU:</strong> 75%</p>
              </div>
              <div className="mt-4 bg-white p-3 rounded-lg">
                <p className="text-xs text-gray-600">
                  <strong>Impatto:</strong> -60% costi energia, 450 posti lavoro creati
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 font-bold text-xl">2</div>
              <h3 className="text-xl font-bold text-green-800 mb-3">Community Energy Networks</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Budget:</strong> €25 milioni</p>
                <p><strong>Settore:</strong> Comunità Energetiche</p>
                <p><strong>Tecnologia:</strong> Smart Grid + Rinnovabili</p>
                <p><strong>ROI:</strong> 22% annuo</p>
                <p><strong>Garanzia InvestEU:</strong> 80%</p>
              </div>
              <div className="mt-4 bg-white p-3 rounded-lg">
                <p className="text-xs text-gray-600">
                  <strong>Impatto:</strong> 15.000 famiglie servite, -40% bollette
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
              <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 font-bold text-xl">3</div>
              <h3 className="text-xl font-bold text-purple-800 mb-3">Smart Efficiency Platform</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Budget:</strong> €40 milioni</p>
                <p><strong>Settore:</strong> Industria 4.0</p>
                <p><strong>Tecnologia:</strong> AI + IoT + Blockchain</p>
                <p><strong>ROI:</strong> 25% annuo</p>
                <p><strong>Garanzia InvestEU:</strong> 70%</p>
              </div>
              <div className="mt-4 bg-white p-3 rounded-lg">
                <p className="text-xs text-gray-600">
                  <strong>Impatto:</strong> 200 aziende digitalizzate, +30% efficienza
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border border-orange-200">
            <h3 className="text-2xl font-bold text-orange-800 mb-4">Portfolio Completo dei Nostri Progetti InvestEU</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-orange-300">
                <thead>
                  <tr className="bg-orange-600 text-white">
                    <th className="border border-orange-300 p-3 text-left">Progetto</th>
                    <th className="border border-orange-300 p-3 text-left">Settore</th>
                    <th className="border border-orange-300 p-3 text-left">Budget</th>
                    <th className="border border-orange-300 p-3 text-left">Garanzia</th>
                    <th className="border border-orange-300 p-3 text-left">Tasso</th>
                    <th className="border border-orange-300 p-3 text-left">ROI</th>
                    <th className="border border-orange-300 p-3 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-orange-300 p-3 font-bold">Industrial Solar Plus</td>
                    <td className="border border-orange-300 p-3">Manifatturiero</td>
                    <td className="border border-orange-300 p-3 font-bold">€15M</td>
                    <td className="border border-orange-300 p-3 text-green-600">75%</td>
                    <td className="border border-orange-300 p-3 text-green-600">2.8%</td>
                    <td className="border border-orange-300 p-3 text-green-600">18%</td>
                    <td className="border border-orange-300 p-3 text-blue-600">In corso</td>
                  </tr>
                  <tr className="bg-orange-50">
                    <td className="border border-orange-300 p-3 font-bold">Community Energy Networks</td>
                    <td className="border border-orange-300 p-3">Energia</td>
                    <td className="border border-orange-300 p-3 font-bold">€25M</td>
                    <td className="border border-orange-300 p-3 text-green-600">80%</td>
                    <td className="border border-orange-300 p-3 text-green-600">2.5%</td>
                    <td className="border border-orange-300 p-3 text-green-600">22%</td>
                    <td className="border border-orange-300 p-3 text-green-600">Approvato</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-orange-300 p-3 font-bold">Smart Efficiency Platform</td>
                    <td className="border border-orange-300 p-3">Industria 4.0</td>
                    <td className="border border-orange-300 p-3 font-bold">€40M</td>
                    <td className="border border-orange-300 p-3 text-green-600">70%</td>
                    <td className="border border-orange-300 p-3 text-green-600">3.2%</td>
                    <td className="border border-orange-300 p-3 text-green-600">25%</td>
                    <td className="border border-orange-300 p-3 text-yellow-600">Valutazione</td>
                  </tr>
                  <tr className="bg-orange-50">
                    <td className="border border-orange-300 p-3 font-bold">Green Logistics Hub</td>
                    <td className="border border-orange-300 p-3">Trasporti</td>
                    <td className="border border-orange-300 p-3 font-bold">€30M</td>
                    <td className="border border-orange-300 p-3 text-green-600">75%</td>
                    <td className="border border-orange-300 p-3 text-green-600">2.9%</td>
                    <td className="border border-orange-300 p-3 text-green-600">20%</td>
                    <td className="border border-orange-300 p-3 text-blue-600">Pianificazione</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-orange-300 p-3 font-bold">Circular Economy Platform</td>
                    <td className="border border-orange-300 p-3">Economia Circolare</td>
                    <td className="border border-orange-300 p-3 font-bold">€20M</td>
                    <td className="border border-orange-300 p-3 text-green-600">80%</td>
                    <td className="border border-orange-300 p-3 text-green-600">2.6%</td>
                    <td className="border border-orange-300 p-3 text-green-600">19%</td>
                    <td className="border border-orange-300 p-3 text-green-600">Finanziato</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Completa */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-purple-800">Timeline Completa InvestEU 2025-2030</h2>
        </div>
        
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-purple-800 mb-4">Calendario Strategico per Massimizzare i Finanziamenti</h3>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border-l-4 border-green-500">
                <h4 className="text-xl font-bold text-green-800 mb-3">2025 - Anno di Lancio</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-bold text-gray-800 mb-2">Q1 2025 (Gennaio-Marzo)</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Apertura bandi Pilastro Sostenibilità</li>
                      <li>• Prima call per PMI innovative</li>
                      <li>• Lancio garanzie per progetti verdi</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800 mb-2">Q2-Q4 2025</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Valutazione progetti presentati</li>
                      <li>• Prime erogazioni finanziamenti</li>
                      <li>• Monitoraggio e supporto tecnico</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
                <h4 className="text-xl font-bold text-blue-800 mb-3">2026-2027 - Fase di Espansione</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-bold text-gray-800 mb-2">Nuovi Strumenti</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Equity financing per scale-up</li>
                      <li>• Fondi per infrastrutture digitali</li>
                      <li>• Programmi di accelerazione</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800 mb-2">Budget Incrementato</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• +40% risorse disponibili</li>
                      <li>• Garanzie fino al 90%</li>
                      <li>• Tassi ancora più competitivi</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-purple-500">
                <h4 className="text-xl font-bold text-purple-800 mb-3">2028-2030 - Consolidamento</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-bold text-gray-800 mb-2">Focus Strategico</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Progetti di grande scala</li>
                      <li>• Partnership internazionali</li>
                      <li>• Leadership tecnologica europea</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800 mb-2">Risultati Attesi</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• €75 miliardi mobilitati</li>
                      <li>• 1.5 milioni posti lavoro</li>
                      <li>• Leadership green europea</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
