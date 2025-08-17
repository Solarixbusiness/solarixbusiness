'use client';

import React from 'react';

export default function ServicesSection() {
  return (
    <>
      {/* Servizio Completo Solarix Business */}
      <div className="bg-blue-50 p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">🏢 SERVIZIO COMPLETO SOLARIX BUSINESS</h2>
        
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">🎯 Il Nostro Approccio Vincente</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border-2 border-blue-200">
              <h4 className="text-xl font-semibold text-blue-600 mb-3">📋 Analisi Preliminare</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Valutazione tecnica completa</li>
                <li>• Analisi dei consumi energetici</li>
                <li>• Studio di fattibilità economica</li>
                <li>• Verifica requisiti di ammissibilità</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-blue-200">
              <h4 className="text-xl font-semibold text-blue-600 mb-3">📄 Preparazione Domanda</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Compilazione modulistica completa</li>
                <li>• Raccolta documentazione tecnica</li>
                <li>• Redazione business plan</li>
                <li>• Presentazione telematica</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-blue-200">
              <h4 className="text-xl font-semibold text-blue-600 mb-3">🔧 Realizzazione Progetto</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Progettazione esecutiva</li>
                <li>• Installazione chiavi in mano</li>
                <li>• Collaudo e messa in servizio</li>
                <li>• Formazione del personale</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-blue-200">
              <h4 className="text-xl font-semibold text-blue-600 mb-3">📊 Monitoraggio e Supporto</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Rendicontazione spese</li>
                <li>• Assistenza post-installazione</li>
                <li>• Monitoraggio performance</li>
                <li>• Manutenzione programmata</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">🏆 Metodologia per Graduatorie Vincenti</h3>
          <div className="bg-white p-6 rounded-lg border-2 border-blue-200">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h4 className="font-semibold text-blue-600 mb-2">Analisi Criteri</h4>
                <p className="text-sm text-gray-600">Studio approfondito dei criteri di valutazione e ottimizzazione del punteggio</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h4 className="font-semibold text-blue-600 mb-2">Strategia Personalizzata</h4>
                <p className="text-sm text-gray-600">Sviluppo di una strategia su misura per massimizzare le possibilità di successo</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h4 className="font-semibold text-blue-600 mb-2">Presentazione Ottimale</h4>
                <p className="text-sm text-gray-600">Preparazione e presentazione della domanda con il massimo punteggio possibile</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">📈 Casi Studio di Successo</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg">
              <thead>
                <tr className="bg-blue-100">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Settore</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Potenza</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Investimento</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Contributo</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Risparmio Annuo</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">ROI</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Manifatturiero</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">150 kW</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">€120.000</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-green-600 font-bold">€48.000</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">€18.000</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-blue-600 font-bold">4.2 anni</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Commerciale</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">200 kW</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">€160.000</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-green-600 font-bold">€48.000</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">€24.000</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-blue-600 font-bold">4.7 anni</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Agricolo</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">100 kW</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">€80.000</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-green-600 font-bold">€32.000</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">€12.000</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-blue-600 font-bold">4.0 anni</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Servizi</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">75 kW</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">€60.000</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-green-600 font-bold">€24.000</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">€9.000</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-blue-600 font-bold">4.0 anni</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">⏱️ Timeline Completa del Progetto</h3>
          <div className="space-y-4">
            <div className="flex items-center bg-white p-4 rounded-lg border-l-4 border-blue-500">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <span className="font-bold text-blue-600">1</span>
              </div>
              <div>
                <h4 className="font-semibold text-blue-600">Settimana 1-2: Analisi e Valutazione</h4>
                <p className="text-gray-600">Sopralluogo, analisi consumi, verifica requisiti</p>
              </div>
            </div>
            <div className="flex items-center bg-white p-4 rounded-lg border-l-4 border-blue-500">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <span className="font-bold text-blue-600">2</span>
              </div>
              <div>
                <h4 className="font-semibold text-blue-600">Settimana 3-4: Preparazione Domanda</h4>
                <p className="text-gray-600">Raccolta documentazione, business plan, modulistica</p>
              </div>
            </div>
            <div className="flex items-center bg-white p-4 rounded-lg border-l-4 border-blue-500">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <span className="font-bold text-blue-600">3</span>
              </div>
              <div>
                <h4 className="font-semibold text-blue-600">Settimana 5: Presentazione</h4>
                <p className="text-gray-600">Invio telematico domanda e monitoraggio</p>
              </div>
            </div>
            <div className="flex items-center bg-white p-4 rounded-lg border-l-4 border-green-500">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <span className="font-bold text-green-600">4</span>
              </div>
              <div>
                <h4 className="font-semibold text-green-600">Post-Approvazione: Realizzazione</h4>
                <p className="text-gray-600">Progettazione, installazione, collaudo (8-12 settimane)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simulatore ROI e Calcolatore Risparmi */}
      <div className="bg-green-50 p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-3xl font-bold text-green-800 mb-6">💰 SIMULATORE ROI E CALCOLATORE RISPARMI</h2>
        
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">📊 Esempi di Risparmio per Settore</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg">
              <thead>
                <tr className="bg-green-100">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Settore</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Consumo Annuo</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Costo Energia/Anno</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Risparmio/Anno</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Risparmio 25 Anni</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Piccola Manifattura</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">120.000 kWh</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">€24.000</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-green-600 font-bold">€18.000</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-green-600 font-bold">€450.000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Media Azienda</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">200.000 kWh</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">€40.000</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-green-600 font-bold">€30.000</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-green-600 font-bold">€750.000</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Grande Commerciale</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">300.000 kWh</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">€60.000</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-green-600 font-bold">€45.000</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-green-600 font-bold">€1.125.000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">🎯 Vantaggi Competitivi Solarix Business</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border-2 border-green-200">
              <h4 className="text-xl font-semibold text-green-600 mb-3">🏆 Esperienza Comprovata</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Oltre 500 progetti finanziati con successo</li>
                <li>• 95% di tasso di approvazione domande</li>
                <li>• Team di esperti certificati</li>
                <li>• Partnership con i migliori fornitori</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-green-200">
              <h4 className="text-xl font-semibold text-green-600 mb-3">🔧 Servizio Chiavi in Mano</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Gestione completa del processo</li>
                <li>• Installazione certificata</li>
                <li>• Garanzia estesa sui componenti</li>
                <li>• Monitoraggio performance 24/7</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-green-200">
              <h4 className="text-xl font-semibold text-green-600 mb-3">💡 Tecnologie Innovative</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Pannelli fotovoltaici ad alta efficienza</li>
                <li>• Sistemi di accumulo intelligenti</li>
                <li>• Inverter di ultima generazione</li>
                <li>• Piattaforme di monitoraggio avanzate</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-green-200">
              <h4 className="text-xl font-semibold text-green-600 mb-3">📜 Certificazioni e Garanzie</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Certificazione ISO 9001:2015</li>
                <li>• Qualifica SOA per opere pubbliche</li>
                <li>• Garanzia prodotto fino a 25 anni</li>
                <li>• Assicurazione all risks inclusa</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">📦 Pacchetti Servizio Solarix Business</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border-2 border-green-200">
              <h4 className="text-xl font-semibold text-green-600 mb-3">🥉 PACCHETTO BASE</h4>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>• Consulenza preliminare</li>
                <li>• Preparazione domanda</li>
                <li>• Supporto documentale</li>
                <li>• Assistenza post-approvazione</li>
              </ul>
              <p className="text-lg font-bold text-green-600">€2.500 + IVA</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-green-400">
              <h4 className="text-xl font-semibold text-green-600 mb-3">🥈 PACCHETTO COMPLETO</h4>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>• Tutto del pacchetto Base</li>
                <li>• Progettazione esecutiva</li>
                <li>• Installazione chiavi in mano</li>
                <li>• Collaudo e messa in servizio</li>
              </ul>
              <p className="text-lg font-bold text-green-600">€4.500 + IVA</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-green-600">
              <h4 className="text-xl font-semibold text-green-600 mb-3">🥇 PACCHETTO PREMIUM</h4>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>• Tutto del pacchetto Completo</li>
                <li>• Monitoraggio 24/7</li>
                <li>• Manutenzione 5 anni</li>
                <li>• Garanzia performance estesa</li>
              </ul>
              <p className="text-lg font-bold text-green-600">€6.500 + IVA</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
