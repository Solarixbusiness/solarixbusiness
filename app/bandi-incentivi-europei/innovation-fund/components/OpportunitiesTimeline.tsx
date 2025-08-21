export default function OpportunitiesTimeline() {
  return (
    <>
      {/* Finestre Future */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-blue-700 mb-6">📅 Finestre Immediate e Future 2025-2030</h2>
        
        <div className="mt-6">
          <div className="mt-6">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-purple-100">
                    <th className="border border-gray-300 p-3 text-left font-bold">Call</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Apertura</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Scadenza</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Budget</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Focus Settoriale</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-yellow-50">
                    <td className="border border-gray-300 p-3 font-semibold">IF24</td>
                    <td className="border border-gray-300 p-3">Apr 2024</td>
                    <td className="border border-gray-300 p-3">Apr 2024</td>
                    <td className="border border-gray-300 p-3"><strong>4,8 miliardi €</strong></td>
                    <td className="border border-gray-300 p-3">Industria pesante</td>
                    <td className="border border-gray-300 p-3 text-orange-600">Valutazione in corso</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="border border-gray-300 p-3 font-semibold">IF25</td>
                    <td className="border border-gray-300 p-3"><strong className="text-green-600">Dic 2025</strong></td>
                    <td className="border border-gray-300 p-3"><strong className="text-red-600">Apr 2026</strong></td>
                    <td className="border border-gray-300 p-3"><strong>1 miliardo €</strong></td>
                    <td className="border border-gray-300 p-3">Batterie, rinnovabili</td>
                    <td className="border border-gray-300 p-3 text-green-600">Preparazione</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="border border-gray-300 p-3 font-semibold">IF26</td>
                    <td className="border border-gray-300 p-3">Apr 2026</td>
                    <td className="border border-gray-300 p-3">Set 2026</td>
                    <td className="border border-gray-300 p-3"><strong className="text-blue-600">5+ miliardi €</strong></td>
                    <td className="border border-gray-300 p-3">Da definire</td>
                    <td className="border border-gray-300 p-3 text-blue-600">Pianificazione</td>
                  </tr>
                  <tr className="bg-purple-50">
                    <td className="border border-gray-300 p-3 font-semibold">IF27-30</td>
                    <td className="border border-gray-300 p-3">Annuale</td>
                    <td className="border border-gray-300 p-3">Annuale</td>
                    <td className="border border-gray-300 p-3"><strong className="text-purple-600">6+ miliardi €/anno</strong></td>
                    <td className="border border-gray-300 p-3">Evoluzione tecnologie</td>
                    <td className="border border-gray-300 p-3 text-purple-600">Programmate</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Settori */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-blue-700 mb-6">I Settori dove Vi Possiamo Supportare</h2>
        
        <div className="mt-6">
          <div className="mt-6">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="border border-gray-300 p-3 text-left font-bold">Settore</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Soluzioni Solarix</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Budget Tipico</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Durata</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Riduzione CO2</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Opportunità</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-red-50">
                    <td className="border border-gray-300 p-3 font-semibold">Decarbonizzazione Industriale</td>
                    <td className="border border-gray-300 p-3">Processi termici efficienti con cobot</td>
                    <td className="border border-gray-300 p-3"><strong>10-50 milioni €</strong></td>
                    <td className="border border-gray-300 p-3">5-8 anni</td>
                    <td className="border border-gray-300 p-3"><strong className="text-green-600">&gt;50%</strong></td>
                    <td className="border border-gray-300 p-3">Alta - efficientamento + robot</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">Energia Rinnovabile</td>
                    <td className="border border-gray-300 p-3">Fotovoltaico + accumulo + comunità</td>
                    <td className="border border-gray-300 p-3"><strong>7,5-100 milioni €</strong></td>
                    <td className="border border-gray-300 p-3">5-10 anni</td>
                    <td className="border border-gray-300 p-3"><strong className="text-green-600">&gt;60%</strong></td>
                    <td className="border border-gray-300 p-3">Molto alta - core business</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-semibold">Mobilità Elettrica</td>
                    <td className="border border-gray-300 p-3">Sistemi ricarica + efficientamento</td>
                    <td className="border border-gray-300 p-3"><strong>15-80 milioni €</strong></td>
                    <td className="border border-gray-300 p-3">5-7 anni</td>
                    <td className="border border-gray-300 p-3"><strong className="text-green-600">&gt;50%</strong></td>
                    <td className="border border-gray-300 p-3">Media - integrazione digitale</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">Idrogeno Verde</td>
                    <td className="border border-gray-300 p-3">Produzione e uso energetico</td>
                    <td className="border border-gray-300 p-3"><strong>25-150 milioni €</strong></td>
                    <td className="border border-gray-300 p-3">5-10 anni</td>
                    <td className="border border-gray-300 p-3"><strong className="text-green-600">&gt;60%</strong></td>
                    <td className="border border-gray-300 p-3">Alta - integrazione rinnovabili</td>
                  </tr>
                  <tr className="bg-yellow-50">
                    <td className="border border-gray-300 p-3 font-semibold">Materiali Sostenibili</td>
                    <td className="border border-gray-300 p-3">Innovazioni costruzione + automazione</td>
                    <td className="border border-gray-300 p-3"><strong>10-60 milioni €</strong></td>
                    <td className="border border-gray-300 p-3">5-8 anni</td>
                    <td className="border border-gray-300 p-3"><strong className="text-green-600">&gt;50%</strong></td>
                    <td className="border border-gray-300 p-3">Alta - cobot + efficienza</td>
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
