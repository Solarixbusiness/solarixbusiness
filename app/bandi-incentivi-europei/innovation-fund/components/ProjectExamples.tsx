export default function ProjectExamples() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">Esempi di Mega-Progetti che Realizziamo</h2>
      
      <div className="mt-6">
        <div className="mt-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-purple-100">
                  <th className="border border-gray-300 p-3 text-left font-bold">Progetto</th>
                  <th className="border border-gray-300 p-3 text-left font-bold">Budget Totale</th>
                  <th className="border border-gray-300 p-3 text-left font-bold">Contributo UE a Fondo Perduto</th>
                  <th className="border border-gray-300 p-3 text-left font-bold">Vostro Investimento</th>
                  <th className="border border-gray-300 p-3 text-left font-bold">Durata</th>
                  <th className="border border-gray-300 p-3 text-left font-bold">CO2 Evitata</th>
                  <th className="border border-gray-300 p-3 text-left font-bold">Settore</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-red-50">
                  <td className="border border-gray-300 p-3 font-semibold">ThermoCobot Industrial</td>
                  <td className="border border-gray-300 p-3"><strong>15.000.000 €</strong></td>
                  <td className="border border-gray-300 p-3"><strong className="text-green-600">9.000.000 € a fondo perduto (60%)</strong></td>
                  <td className="border border-gray-300 p-3">6.000.000 €</td>
                  <td className="border border-gray-300 p-3">6 anni</td>
                  <td className="border border-gray-300 p-3">2.000 ton/anno</td>
                  <td className="border border-gray-300 p-3">Industria + Robot</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">MegaSolar Community</td>
                  <td className="border border-gray-300 p-3"><strong>25.000.000 €</strong></td>
                  <td className="border border-gray-300 p-3"><strong className="text-green-600">12.500.000 € a fondo perduto (50%)</strong></td>
                  <td className="border border-gray-300 p-3">12.500.000 €</td>
                  <td className="border border-gray-300 p-3">8 anni</td>
                  <td className="border border-gray-300 p-3">5.000 ton/anno</td>
                  <td className="border border-gray-300 p-3">Fotovoltaico + CER</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="border border-gray-300 p-3 font-semibold">SmartAccumulo Hub</td>
                  <td className="border border-gray-300 p-3"><strong>20.000.000 €</strong></td>
                  <td className="border border-gray-300 p-3"><strong className="text-green-600">11.000.000 € a fondo perduto (55%)</strong></td>
                  <td className="border border-gray-300 p-3">9.000.000 €</td>
                  <td className="border border-gray-300 p-3">7 anni</td>
                  <td className="border border-gray-300 p-3">3.500 ton/anno</td>
                  <td className="border border-gray-300 p-3">Accumulo + Digitale</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">GreenFactory AI</td>
                  <td className="border border-gray-300 p-3"><strong>30.000.000 €</strong></td>
                  <td className="border border-gray-300 p-3"><strong className="text-green-600">18.000.000 € a fondo perduto (60%)</strong></td>
                  <td className="border border-gray-300 p-3">12.000.000 €</td>
                  <td className="border border-gray-300 p-3">9 anni</td>
                  <td className="border border-gray-300 p-3">8.000 ton/anno</td>
                  <td className="border border-gray-300 p-3">AI + Efficienza</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
