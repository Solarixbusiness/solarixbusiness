
import React from 'react';

export default function ResourcesSection() {
  return (
    <>
      {/* Risorse Disponibili */}
      <div className="bg-purple-50 p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-3xl font-bold text-purple-800 mb-6">RISORSE DISPONIBILI: 320 MILIONI DI EURO</h2>
        
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-purple-700 mb-4">Investimento Statale Significativo</h3>
          <p className="text-lg text-gray-700 mb-4">
            Il governo ha stanziato 320 milioni di euro attraverso il PNRR per sostenere le vostre aziende nell'autoproduzione energetica.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-purple-700 mb-4">Come Sono Distribuite le Risorse</h3>
          <p className="text-lg text-gray-700 mb-6">Solarix Business vi aiuta a comprendere le vostre possibilità di successo:</p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg">
              <thead>
                <tr className="bg-purple-100">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Categoria</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">% Riservata</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Importo</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Regioni/Beneficiari</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Mezzogiorno</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-purple-600 font-bold">40%</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">€128 milioni</td>
                  <td className="border border-gray-300 px-4 py-3">Abruzzo, Basilicata, Calabria, Campania, Molise, Puglia, Sardegna, Sicilia</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Micro e Piccole Imprese</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-purple-600 font-bold">40%</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">€128 milioni</td>
                  <td className="border border-gray-300 px-4 py-3">&lt; 50 dipendenti su tutto territorio</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Altre PMI</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-purple-600 font-bold">20%</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">€64 milioni</td>
                  <td className="border border-gray-300 px-4 py-3">Medie imprese rimanenti</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-orange-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-orange-800 mb-2">Secondo Sportello 2025</h3>
          <p className="text-gray-700">
            Per il secondo sportello (luglio-settembre 2025) sono disponibili 178.668.093 euro dopo l'esaurimento del primo bando.
          </p>
        </div>
      </div>

      {/* Range Investimenti */}
      <div className="bg-green-50 p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-3xl font-bold text-green-800 mb-6">Range di Investimenti che Seguiamo</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border-2 border-green-200">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Investimento minimo</h3>
            <p className="text-3xl font-bold text-green-600">30.000 euro</p>
          </div>
          <div className="bg-white p-6 rounded-lg border-2 border-green-200">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Investimento massimo</h3>
            <p className="text-3xl font-bold text-green-600">1.000.000 euro</p>
          </div>
        </div>
      </div>
    </>
  );
}
