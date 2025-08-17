'use client';

import React from 'react';

export default function BandoInvitaliaPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              CONTRIBUTI A FONDO PERDUTO FINO AL 40%
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">
              Bando Invitalia 2025 per l'Autoproduzione di Energia da Fonti Rinnovabili nelle PMI
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Solarix Business vi accompagna passo dopo passo per ottenere i finanziamenti
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Opportunità Unica */}
        <div className="bg-green-50 p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-6">🚀 OPPORTUNITÀ UNICA PER LA VOSTRA AZIENDA</h2>
          <p className="text-lg text-gray-700 mb-4">
            Noi di Solarix Business siamo specialisti in soluzioni energetiche per aziende e vi offriamo un servizio completo per accedere agli incentivi statali del Bando Invitalia 2025. Il nostro team di esperti vi guiderà in ogni fase del processo, dalla progettazione alla rendicontazione finale.
          </p>
          <p className="text-lg text-gray-700">
            Il bando, disciplinato dal Decreto Ministeriale 13 novembre 2024 del Ministero delle Imprese e del Made in Italy, rappresenta un'opportunità straordinaria per le PMI italiane che vogliono investire in energia rinnovabile con il supporto di contributi a fondo perduto.
          </p>
        </div>

        {/* Obiettivi del Programma */}
        <div className="bg-blue-50 p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">🎯 Obiettivi del Programma Statale</h2>
          <p className="text-lg text-gray-700 mb-4">La misura statale ha come finalità principali:</p>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>Riduzione della dipendenza dalle importazioni di combustibili fossili</li>
            <li>Transizione verso l'energia verde e sostenibile</li>
            <li>Incentivazione degli investimenti privati nell'autoproduzione energetica</li>
            <li>Miglioramento dell'accesso ai finanziamenti per le PMI nel settore energetico rinnovabile</li>
          </ul>
        </div>

        {/* Chi può beneficiare */}
        <div className="bg-yellow-50 p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-yellow-800 mb-6">👥 CHI PUÒ BENEFICIARE DEI NOSTRI SERVIZI</h2>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">✅ Le Vostre Aziende Possono Accedere se</h3>
            <p className="text-lg text-gray-700 mb-4">
              Solarix Business può assistere tutte le Piccole e Medie Imprese (PMI) operanti sul territorio nazionale che possiedono i seguenti requisiti:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>✅ Regolare costituzione ed iscrizione attiva nel Registro delle Imprese</li>
              <li>✅ Dimensione aziendale conforme alla definizione PMI (Raccomandazione 2003/361/CE)</li>
              <li>✅ Sede operativa sul territorio nazionale</li>
              <li>✅ Assenza di procedure concorsuali in corso</li>
              <li>✅ Regolarità contributiva e fiscale</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-red-700 mb-4">❌ Aziende Escluse dal Bando</h3>
            <p className="text-lg text-gray-700 mb-4">
              Il nostro team vi informerà preventivamente se la vostra azienda rientra nelle esclusioni:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>Imprese del settore carbonifero</li>
              <li>Imprese della produzione primaria agricola</li>
              <li>Imprese del settore pesca e acquacoltura</li>
              <li>Imprese ad alta intensità energetica CSEA</li>
              <li>Imprese che non rispettano il principio DNSH (Do No Significant Harm)</li>
            </ul>
          </div>
        </div>

        {/* Risorse Disponibili */}
        <div className="bg-purple-50 p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-purple-800 mb-6">💰 RISORSE DISPONIBILI: 320 MILIONI DI EURO</h2>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">📊 Investimento Statale Significativo</h3>
            <p className="text-lg text-gray-700 mb-4">
              Il governo ha stanziato 320 milioni di euro attraverso il PNRR per sostenere le vostre aziende nell'autoproduzione energetica.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">🗺️ Come Sono Distribuite le Risorse</h3>
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
            <h3 className="text-xl font-semibold text-orange-800 mb-2">🔄 Secondo Sportello 2025</h3>
            <p className="text-gray-700">
              Per il secondo sportello (luglio-settembre 2025) sono disponibili 178.668.093 euro dopo l'esaurimento del primo bando.
            </p>
          </div>
        </div>

        {/* Soluzioni Energetiche */}
        <div className="bg-indigo-50 p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-indigo-800 mb-6">⚡ SOLUZIONI ENERGETICHE CHE FINANZIAMO</h2>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-indigo-700 mb-4">🔋 I Nostri Progetti Fotovoltaici ed Eolici</h3>
            <p className="text-lg text-gray-700 mb-4">Solarix Business progetta e realizza per voi:</p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>🔋 Impianti solari fotovoltaici per autoconsumo immediato</li>
              <li>🌪️ Impianti mini eolici per autoconsumo immediato</li>
              <li>⚡ Sistemi di accumulo/stoccaggio energia per autoconsumo differito</li>
              <li>💻 Tecnologie digitali avanzate per gestione energetica</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-indigo-700 mb-4">📏 Tabella Dimensionamenti Standard Solarix Business</h3>
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
            <h3 className="text-2xl font-semibold text-indigo-700 mb-4">🔋 Tipologie di Sistemi di Accumulo</h3>
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

        {/* Range Investimenti */}
        <div className="bg-green-50 p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-6">💼 Range di Investimenti che Seguiamo</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border-2 border-green-200">
              <h3 className="text-xl font-semibold text-green-700 mb-2">💰 Investimento minimo</h3>
              <p className="text-3xl font-bold text-green-600">30.000 euro</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-green-200">
              <h3 className="text-xl font-semibold text-green-700 mb-2">💰 Investimento massimo</h3>
              <p className="text-3xl font-bold text-green-600">1.000.000 euro</p>
            </div>
          </div>
        </div>

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

        {/* Note Legali e Disclaimer */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">⚖️ NOTE LEGALI E DISCLAIMER</h2>
          
          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">📋 Informazioni Generali</h3>
              <p className="mb-2">Le informazioni contenute in questa pagina sono basate sul Bando Invitalia per il sostegno alle PMI per investimenti in efficienza energetica e sono aggiornate alla data di pubblicazione.</p>
              <p>Solarix Business si impegna a fornire informazioni accurate, tuttavia si raccomanda di verificare sempre i dettagli più aggiornati direttamente sul sito ufficiale di Invitalia.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">⚠️ Disclaimer</h3>
              <ul className="space-y-2">
                <li>• I contributi indicati sono soggetti a disponibilità delle risorse del bando</li>
                <li>• L'approvazione delle domande dipende dalla valutazione di Invitalia secondo i criteri del bando</li>
                <li>• I tempi di erogazione possono variare in base alle procedure amministrative</li>
                <li>• Tutti i prezzi sono indicativi e soggetti a preventivo personalizzato</li>
                <li>• Le performance degli impianti possono variare in base alle condizioni specifiche</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">📞 Contatti per Informazioni</h3>
              <p className="mb-2">Per informazioni dettagliate e aggiornamenti sul bando, contattare direttamente:</p>
              <ul className="space-y-1">
                <li>• <strong>Invitalia:</strong> www.invitalia.it</li>
                <li>• <strong>Solarix Business:</strong> info@solarixbusiness.it</li>
                <li>• <strong>Telefono:</strong> +39 02 1234 5678</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-orange-600 text-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-bold mb-4">🚀 NON PERDERE QUESTA OPPORTUNITÀ UNICA!</h2>
          <p className="text-xl mb-6">
            Solarix Business ti accompagna in ogni fase del progetto con la massima professionalità
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-orange-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">📞 Contatti Diretti</h3>
              <p className="mb-2"><strong>Telefono:</strong> 011 1883 7752</p>
              <p className="mb-2"><strong>Cellulare:</strong> 347 008 7833</p>
              <p className="mb-2"><strong>Email:</strong> info@solarixbusiness.it</p>
              <p><strong>Consulenza:</strong> Gratuita e senza impegno</p>
            </div>
            <div className="bg-orange-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">⏰ Tempi di Risposta</h3>
              <p className="mb-2"><strong>Prima valutazione:</strong> 24 ore</p>
              <p className="mb-2"><strong>Preventivo completo:</strong> 48 ore</p>
              <p><strong>Supporto:</strong> Sempre disponibile</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-colors">
              RICHIEDI CONSULENZA GRATUITA ORA
            </button>
            <a 
              href="https://wa.me/+393470087833"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-xl font-bold transition-colors"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.14 4.486c-3.868 0-7.015 3.147-7.015 7.015 0 1.513.469 2.919 1.27 4.075l-1.665 4.975 5.095-1.635a6.979 6.979 0 004.315 1.485c3.868 0 7.015-3.147 7.015-7.015s-3.147-7.015-7.015-7.015h-.005z"/>
              </svg>
              CONTATTACI SU WHATSAPP
            </a>
          </div>
        </div>

        {/* Scadenze */}
        <div className="bg-red-50 p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-red-800 mb-6">⏰ SCADENZE CRUCIALI - NON PERDETE L'OPPORTUNITÀ</h2>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-red-700 mb-4">📅 Calendario Secondo Sportello 2025</h3>
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

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg shadow-lg mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">🚀 INIZIATE SUBITO IL VOSTRO PROGETTO</h2>
            <p className="text-xl mb-8">
              Non perdete l'opportunità di trasformare la vostra azienda in un esempio di sostenibilità energetica con il supporto dei contributi statali fino al 40%.
            </p>
            <p className="text-lg mb-8">
              📞 I nostri esperti vi aspettano per una consulenza gratuita!
            </p>
            <div className="space-y-4">
              <p className="text-lg">🌐 www.solarixbusiness.it</p>
              <p className="text-lg">📧 info@solarixbusiness.it</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
