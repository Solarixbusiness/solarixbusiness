'use client';

import React from 'react';

export default function ContributionsSection() {
  return (
    <>
      {/* Contributi che aiutiamo ad ottenere */}
      <div className="bg-orange-50 p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-3xl font-bold text-orange-800 mb-6">💸 CONTRIBUTI CHE VI AIUTIAMO AD OTTENERE</h2>
        
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-orange-700 mb-4">🎁 I Vostri Vantaggi Economici</h3>
          <p className="text-lg text-gray-700 mb-6">
            Solarix Business vi supporta per ottenere contributi a fondo perduto senza rimborso
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-orange-700 mb-4">📊 Tabella Dettagliata Percentuali di Finanziamento</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg">
              <thead>
                <tr className="bg-orange-100">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Tipologia Impresa</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Impianti Produzione</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Sistemi Accumulo</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Diagnosi Energetica</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Micro Impresa (&lt; 10 dipendenti)</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-orange-600 font-bold">40%</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-orange-600 font-bold">30%</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-orange-600 font-bold">50%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Piccola Impresa (&lt; 50 dipendenti)</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-orange-600 font-bold">40%</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-orange-600 font-bold">30%</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-orange-600 font-bold">50%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Media Impresa (&lt; 250 dipendenti)</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-orange-600 font-bold">30%</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-orange-600 font-bold">30%</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-orange-600 font-bold">50%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-orange-700 mb-4">💡 Esempi Pratici di Finanziamento Solarix Business</h3>
          
          {/* Esempio 1 */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-orange-600 mb-4">Esempio 1: Piccola Azienda Manifatturiera</h4>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg">
                <thead>
                  <tr className="bg-orange-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Voce di Spesa</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Costo Totale</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">% Contributo</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Contributo Ottenuto</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Costo Finale</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Impianto Fotovoltaico 100 kW</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">€80.000</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-orange-600 font-bold">40%</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-green-600 font-bold">€32.000</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">€48.000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Sistema di Accumulo 50 kWh</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">€25.000</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-orange-600 font-bold">30%</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-green-600 font-bold">€7.500</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">€17.500</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Diagnosi Energetica</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">€3.000</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-orange-600 font-bold">50%</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-green-600 font-bold">€1.500</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">€1.500</td>
                  </tr>
                  <tr className="bg-blue-100">
                    <td className="border border-gray-300 px-4 py-3 font-bold">TOTALE PROGETTO</td>
                    <td className="border border-gray-300 px-4 py-3 text-center font-bold">€108.000</td>
                    <td className="border border-gray-300 px-4 py-3 text-center font-bold">38%</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-green-600 font-bold">€41.000</td>
                    <td className="border border-gray-300 px-4 py-3 text-center font-bold">€67.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Esempio 2 */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-orange-600 mb-4">Esempio 2: Media Azienda Commerciale</h4>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg">
                <thead>
                  <tr className="bg-orange-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Voce di Spesa</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Costo Totale</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">% Contributo</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Contributo Ottenuto</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Costo Finale</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Impianto Fotovoltaico 200 kW</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">€150.000</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-orange-600 font-bold">30%</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-green-600 font-bold">€45.000</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">€105.000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Sistema di Accumulo 100 kWh</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">€45.000</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-orange-600 font-bold">30%</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-green-600 font-bold">€13.500</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">€31.500</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Tecnologie Digitali</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">€15.000</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-orange-600 font-bold">30%</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-green-600 font-bold">€4.500</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">€10.500</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Diagnosi Energetica</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">€4.000</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-orange-600 font-bold">50%</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-green-600 font-bold">€2.000</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">€2.000</td>
                  </tr>
                  <tr className="bg-blue-100">
                    <td className="border border-gray-300 px-4 py-3 font-bold">TOTALE PROGETTO</td>
                    <td className="border border-gray-300 px-4 py-3 text-center font-bold">€214.000</td>
                    <td className="border border-gray-300 px-4 py-3 text-center font-bold">30%</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-green-600 font-bold">€65.000</td>
                    <td className="border border-gray-300 px-4 py-3 text-center font-bold">€149.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-orange-700 mb-4">🔄 Cumulo con Altri Incentivi</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg">
              <thead>
                <tr className="bg-orange-100">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Incentivo</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Compatibile</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Note Solarix Business</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Credito d'Imposta Transizione 5.0</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">✅ Sì</span>
                  </td>
                  <td className="border border-gray-300 px-4 py-3">Verifiche caso per caso</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Nuova Sabatini</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">✅ Sì</span>
                  </td>
                  <td className="border border-gray-300 px-4 py-3">Nel rispetto massimali UE</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Credito d'Imposta Ricerca</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">✅ Sì</span>
                  </td>
                  <td className="border border-gray-300 px-4 py-3">Per componenti innovative</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Superammortamento</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">❌ No</span>
                  </td>
                  <td className="border border-gray-300 px-4 py-3">Sostituito da Transizione 5.0</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Incentivi Regionali</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">✅ Sì</span>
                  </td>
                  <td className="border border-gray-300 px-4 py-3">Valutazione specifica</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-orange-700 mb-4">📅 Calendario Secondo Sportello 2025</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border-2 border-red-200">
              <h4 className="text-xl font-semibold text-red-700 mb-2">⏰ Apertura domande</h4>
              <p className="text-lg font-bold text-red-600">8 luglio 2025, ore 12:00</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-red-200">
              <h4 className="text-xl font-semibold text-red-700 mb-2">⏰ Chiusura domande</h4>
              <p className="text-lg font-bold text-red-600">30 settembre 2025, ore 12:00</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-red-200">
              <h4 className="text-xl font-semibold text-red-700 mb-2">⏰ Modalità</h4>
              <p className="text-lg font-bold text-red-600">Esclusivamente online tramite piattaforma Invitalia</p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-yellow-800 mb-4">🏆 Come Gestiamo la Vostra Candidatura</h3>
          <p className="text-gray-700 mb-2">Solarix Business coordina tutto per voi:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>📊 Graduatoria basata su criteri valutativi rigorosi</li>
            <li>🎯 Assegnazione fino ad esaurimento risorse</li>
            <li>📋 Pubblicazione risultati entro 60 giorni dalla chiusura</li>
          </ul>
        </div>
      </div>
    </>
  );
}
