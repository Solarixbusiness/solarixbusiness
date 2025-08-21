export default function ComparisonStrategy() {
  return (
    <>
      {/* Confronto Strumenti */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-purple-800">InvestEU vs Altri Strumenti UE</h2>
        </div>
        
        <div className="space-y-6">
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                Perché InvestEU è la Scelta Migliore
              </h3>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-purple-600 text-white">
                      <th className="border border-gray-300 p-3 text-left">Criterio</th>
                      <th className="border border-gray-300 p-3 text-left">InvestEU</th>
                      <th className="border border-gray-300 p-3 text-left">Horizon Europe</th>
                      <th className="border border-gray-300 p-3 text-left">LIFE Programme</th>
                      <th className="border border-gray-300 p-3 text-left">Innovation Fund</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="border border-gray-300 p-3 font-bold">Budget Disponibile</td>
                      <td className="border border-gray-300 p-3 text-green-600 font-bold">€372 miliardi</td>
                      <td className="border border-gray-300 p-3">€95 miliardi</td>
                      <td className="border border-gray-300 p-3">€5.4 miliardi</td>
                      <td className="border border-gray-300 p-3">€10 miliardi</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-bold">Tipo Supporto</td>
                      <td className="border border-gray-300 p-3 text-green-600 font-bold">Prestiti + Garanzie</td>
                      <td className="border border-gray-300 p-3">Grants</td>
                      <td className="border border-gray-300 p-3">Grants</td>
                      <td className="border border-gray-300 p-3">Grants</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 p-3 font-bold">Tasso di Successo</td>
                      <td className="border border-gray-300 p-3 text-green-600 font-bold">85%</td>
                      <td className="border border-gray-300 p-3 text-orange-600">12%</td>
                      <td className="border border-gray-300 p-3 text-orange-600">25%</td>
                      <td className="border border-gray-300 p-3 text-orange-600">8%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-bold">Tempi di Approvazione</td>
                      <td className="border border-gray-300 p-3 text-green-600 font-bold">3-6 mesi</td>
                      <td className="border border-gray-300 p-3 text-red-600">12-18 mesi</td>
                      <td className="border border-gray-300 p-3 text-red-600">8-12 mesi</td>
                      <td className="border border-gray-300 p-3 text-red-600">18-24 mesi</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 p-3 font-bold">Importo Massimo</td>
                      <td className="border border-gray-300 p-3 text-green-600 font-bold">€1 miliardo</td>
                      <td className="border border-gray-300 p-3">€15 milioni</td>
                      <td className="border border-gray-300 p-3">€10 milioni</td>
                      <td className="border border-gray-300 p-3">€100 milioni</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-bold">Settori Coperti</td>
                      <td className="border border-gray-300 p-3 text-green-600 font-bold">Tutti i settori</td>
                      <td className="border border-gray-300 p-3">R&S</td>
                      <td className="border border-gray-300 p-3">Ambiente</td>
                      <td className="border border-gray-300 p-3">Cleantech</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Errori da Evitare */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-purple-800">Errori che Vi Evitiamo con InvestEU</h2>
        </div>
        
        <div className="space-y-6">
          <div className="space-y-6">
            <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
              <h3 className="text-2xl font-bold text-red-800 mb-4">Errori Fatali da Evitare</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-red-700 mb-3">Errori di Strategia</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• <strong>Progetto troppo piccolo:</strong> Budget sotto €5M non competitivo</li>
                    <li>• <strong>Settore sbagliato:</strong> Focus su aree non prioritarie UE</li>
                    <li>• <strong>Partnership deboli:</strong> Mancanza di partner strategici</li>
                    <li>• <strong>Timeline irrealistica:</strong> Tempi di implementazione sottostimati</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-red-700 mb-3">Errori Tecnici</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• <strong>Documentazione incompleta:</strong> Business plan non dettagliato</li>
                    <li>• <strong>Analisi finanziaria debole:</strong> Proiezioni non credibili</li>
                    <li>• <strong>Compliance mancante:</strong> Normative UE non rispettate</li>
                    <li>• <strong>Due diligence insufficiente:</strong> Rischi non identificati</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
              <h3 className="text-2xl font-bold text-green-800 mb-4">La Nostra Metodologia di Successo</h3>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-green-700 mb-2">Fase 1: Strategia</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Analisi di fattibilità</li>
                    <li>• Selezione pilastro ottimale</li>
                    <li>• Dimensionamento progetto</li>
                    <li>• Partnership strategiche</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-green-700 mb-2">Fase 2: Preparazione</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Business plan dettagliato</li>
                    <li>• Analisi finanziaria completa</li>
                    <li>• Due diligence approfondita</li>
                    <li>• Compliance normativa</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-green-700 mb-2">Fase 3: Esecuzione</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Presentazione ottimizzata</li>
                    <li>• Gestione iter approvativo</li>
                    <li>• Negoziazione termini</li>
                    <li>• Monitoraggio continuo</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Strategia 2025-2027 */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-purple-800">La Nostra Strategia InvestEU 2025-2027</h2>
        </div>
        
        <div className="space-y-6">
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-purple-800 mb-4">Roadmap SolariX Business per InvestEU</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-purple-300">
                  <thead>
                    <tr className="bg-purple-600 text-white">
                      <th className="border border-purple-300 p-3 text-left">Anno</th>
                      <th className="border border-purple-300 p-3 text-left">Obiettivo</th>
                      <th className="border border-purple-300 p-3 text-left">Progetto Target</th>
                      <th className="border border-purple-300 p-3 text-left">Budget</th>
                      <th className="border border-purple-300 p-3 text-left">Vostro Vantaggio</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="border border-purple-300 p-3 font-bold text-purple-700">2025</td>
                      <td className="border border-purple-300 p-3">Preparazione e primo progetto</td>
                      <td className="border border-purple-300 p-3 font-bold">Industrial Solar Plus</td>
                      <td className="border border-purple-300 p-3 font-bold">15 milioni €</td>
                      <td className="border border-purple-300 p-3 text-green-600">Tassi agevolati</td>
                    </tr>
                    <tr className="bg-purple-50">
                      <td className="border border-purple-300 p-3 font-bold text-purple-700">2026</td>
                      <td className="border border-purple-300 p-3">Scaling e diversificazione</td>
                      <td className="border border-purple-300 p-3 font-bold">Community Energy Networks</td>
                      <td className="border border-purple-300 p-3 font-bold">25 milioni €</td>
                      <td className="border border-purple-300 p-3 text-green-600">Portfolio progetti</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-purple-300 p-3 font-bold text-purple-700">2027</td>
                      <td className="border border-purple-300 p-3">Leadership e innovazione</td>
                      <td className="border border-purple-300 p-3 font-bold">Smart Efficiency Platform</td>
                      <td className="border border-purple-300 p-3 font-bold">40 milioni €</td>
                      <td className="border border-purple-300 p-3 text-green-600">Leader settore</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
