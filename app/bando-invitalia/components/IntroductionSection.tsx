import React from 'react';

export default function IntroductionSection() {
  return (
    <>
      {/* Opportunità Unica */}
      <div className="bg-green-50 p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-3xl font-bold text-green-800 mb-6">OPPORTUNITÀ UNICA PER LA VOSTRA AZIENDA</h2>
        <p className="text-lg text-gray-700 mb-4">
          Noi di Solarix Business siamo specialisti in soluzioni energetiche per aziende e vi offriamo un servizio completo per accedere agli incentivi statali del Bando Invitalia 2025. Il nostro team di esperti vi guiderà in ogni fase del processo, dalla progettazione alla rendicontazione finale.
        </p>
        <p className="text-lg text-gray-700">
          Il bando, disciplinato dal Decreto Ministeriale 13 novembre 2024 del Ministero delle Imprese e del Made in Italy, rappresenta un'opportunità straordinaria per le PMI italiane che vogliono investire in energia rinnovabile con il supporto di contributi a fondo perduto.
        </p>
      </div>

      {/* Obiettivi del Programma */}
      <div className="bg-blue-50 p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">Obiettivi del Programma Statale</h2>
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
        <h2 className="text-3xl font-bold text-yellow-800 mb-6">CHI PUÒ BENEFICIARE DEI NOSTRI SERVIZI</h2>
        
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Le Vostre Aziende Possono Accedere se</h3>
          <p className="text-lg text-gray-700 mb-4">
            Solarix Business può assistere tutte le Piccole e Medie Imprese (PMI) operanti sul territorio nazionale che possiedono i seguenti requisiti:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>Regolare costituzione ed iscrizione attiva nel Registro delle Imprese</li>
            <li>Dimensione aziendale conforme alla definizione PMI (Raccomandazione 2003/361/CE)</li>
            <li>Sede operativa sul territorio nazionale</li>
            <li>Assenza di procedure concorsuali in corso</li>
            <li>Regolarità contributiva e fiscale</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-red-700 mb-4">Aziende Escluse dal Bando</h3>
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
    </>
  );
}
