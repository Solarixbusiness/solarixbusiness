
import React from 'react';

export default function SolutionsSection() {
  return (
    <>
      {/* Soluzioni Energetiche */}
      <div className="bg-indigo-50 p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-3xl font-bold text-indigo-800 mb-6">SOLUZIONI ENERGETICHE CHE FINANZIAMO</h2>
        
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-indigo-700 mb-4">I Nostri Progetti Fotovoltaici ed Eolici</h3>
          <p className="text-lg text-gray-700 mb-4">Solarix Business progetta e realizza per voi:</p>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>Impianti solari fotovoltaici per autoconsumo immediato</li>
            <li>Impianti mini eolici per autoconsumo immediato</li>
            <li>Sistemi di accumulo/stoccaggio energia per autoconsumo differito</li>
            <li>Tecnologie digitali avanzate per gestione energetica</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Tabella Dimensionamenti Standard Solarix Business</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg">
              <thead>
                <tr className="bg-indigo-100">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Potenza Impianto</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Produzione Annua</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Superficie Richiesta</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Investimento Tipico</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Contributo 40%</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">20 kW</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">26.000 kWh</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">120 m²</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">€35.000</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-green-600 font-bold">€14.000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">50 kW</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">65.000 kWh</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">300 m²</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">€75.000</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-green-600 font-bold">€30.000</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">100 kW</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">130.000 kWh</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">600 m²</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">€140.000</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-green-600 font-bold">€56.000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">200 kW</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">260.000 kWh</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">1.200 m²</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">€250.000</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-orange-600 font-bold">€75.000*</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">500 kW</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">650.000 kWh</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">3.000 m²</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">€550.000</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-orange-600 font-bold">€165.000*</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-2">*Per medie imprese contributo 30%</p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Tipologie di Sistemi di Accumulo</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg">
              <thead>
                <tr className="bg-indigo-100">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Capacità Batterie</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Autonomia Tipica</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Ideale per</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Costo Indicativo</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Contributo 30%</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">10 kWh</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">4-6 ore</td>
                  <td className="border border-gray-300 px-4 py-3">Piccoli uffici</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">€8.000</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-green-600 font-bold">€2.400</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">25 kWh</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">6-8 ore</td>
                  <td className="border border-gray-300 px-4 py-3">Aziende artigiane</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">€18.000</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-green-600 font-bold">€5.400</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">50 kWh</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">8-12 ore</td>
                  <td className="border border-gray-300 px-4 py-3">Piccole industrie</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">€32.000</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-green-600 font-bold">€9.600</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">100 kWh</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">12-16 ore</td>
                  <td className="border border-gray-300 px-4 py-3">Medie industrie</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">€55.000</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-green-600 font-bold">€16.500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-blue-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">⚙️ Specifiche Tecniche dei Nostri Impianti</h3>
          <p className="text-gray-700 mb-2">I nostri tecnici vi informano che:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Non combiniamo fotovoltaico e mini eolico nello stesso progetto</li>
            <li>Gli impianti mini eolici vengono installati su edifici esistenti</li>
            <li>Completiamo ogni progetto entro 18 mesi dalla concessione</li>
          </ul>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-indigo-700 mb-4">📋 Categorie di Spese Incluse nei Nostri Servizi</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg">
              <thead>
                <tr className="bg-indigo-100">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Categoria Spesa</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Dettaglio</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">% sul Totale Tipica</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Moduli Fotovoltaici</td>
                  <td className="border border-gray-300 px-4 py-3">Pannelli alta efficienza</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-indigo-600 font-bold">35-40%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Inverter e BOS</td>
                  <td className="border border-gray-300 px-4 py-3">Componenti elettrici</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-indigo-600 font-bold">15-20%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Strutture di Supporto</td>
                  <td className="border border-gray-300 px-4 py-3">Montaggio e fissaggi</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-indigo-600 font-bold">10-15%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Installazione</td>
                  <td className="border border-gray-300 px-4 py-3">Manodopera specializzata</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-indigo-600 font-bold">15-20%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Progettazione</td>
                  <td className="border border-gray-300 px-4 py-3">Ingegneria e permessi</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-indigo-600 font-bold">5-8%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Sistemi Digitali</td>
                  <td className="border border-gray-300 px-4 py-3">Monitoraggio e controllo</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-indigo-600 font-bold">3-5%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Diagnosi Energetica</td>
                  <td className="border border-gray-300 px-4 py-3">Analisi preliminare</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-indigo-600 font-bold">2-3%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
