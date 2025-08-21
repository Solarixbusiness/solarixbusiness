import React from 'react';

export default function EvaluationSection() {
  return (
    <div id="sezione-6" className="mb-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">6. Valutazione e Criteri</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold mb-3 text-gray-800">6.1 Processo di Valutazione</h3>
        <p>Dopo l'invio della domanda, si avvia un processo di valutazione articolato in diverse fasi:</p>
        
        <p className="mt-4 font-medium">1. Verifica Formale della Banca:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>La banca/intermediario verifica la completezza della documentazione</li>
          <li>Controlla la regolarità formale della domanda</li>
          <li>Valuta il merito creditizio dell'impresa secondo i propri modelli</li>
          <li>Delibera il finanziamento o lo rifiuta</li>
        </ul>
        
        <p className="mt-4 font-medium">2. Comunicazione al MIMIT:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>La banca/intermediario trasmette al Ministero: delibera di finanziamento, copia della domanda di agevolazione, dichiarazione sostitutiva dell'impresa</li>
          <li>Termine: entro 30 giorni dalla ricezione della domanda</li>
          <li>Modalità: tramite piattaforma informatica</li>
        </ul>
        
        <p className="mt-4 font-medium">3. Istruttoria Ministeriale:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Il MIMIT verifica: disponibilità delle risorse finanziarie, possesso dei requisiti di ammissibilità, conformità dell'investimento alle normative</li>
          <li>Può richiedere integrazioni documentali</li>
        </ul>
        
        <h3 className="text-lg font-semibold mb-3 mt-6 text-gray-800">6.2 Concessione del Contributo</h3>
        
        <p className="mt-4 font-medium">Decreto di Concessione:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Il MIMIT adotta il provvedimento di concessione del contributo</li>
          <li>Indica l'ammontare dell'agevolazione concessa</li>
          <li>Specifica il piano di erogazione</li>
          <li>Riporta gli obblighi e i vincoli a carico dell'impresa</li>
        </ul>
        
        <p className="mt-4 font-medium">Comunicazione all'Impresa:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Il decreto viene trasmesso all'impresa e alla banca/intermediario</li>
          <li>Contiene tutte le informazioni necessarie per: stipula del contratto di finanziamento, realizzazione dell'investimento, richiesta di erogazione del contributo</li>
        </ul>
        
        <h3 className="text-lg font-semibold mb-3 mt-6 text-gray-800">6.3 Tempistiche del Processo</h3>
        
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full bg-white border border-gray-300 rounded">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border-b text-left">Fase</th>
                <th className="py-2 px-4 border-b text-left">Soggetto Responsabile</th>
                <th className="py-2 px-4 border-b text-left">Tempistica</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">Valutazione domanda</td>
                <td className="py-2 px-4 border-b">Banca/Intermediario</td>
                <td className="py-2 px-4 border-b">Variabile (max 30 giorni)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="py-2 px-4 border-b">Comunicazione delibera al MIMIT</td>
                <td className="py-2 px-4 border-b">Banca/Intermediario</td>
                <td className="py-2 px-4 border-b">Entro 30 giorni dalla domanda</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Concessione contributo</td>
                <td className="py-2 px-4 border-b">MIMIT</td>
                <td className="py-2 px-4 border-b">Entro 30 giorni dalla delibera</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="py-2 px-4 border-b">Stipula contratto finanziamento</td>
                <td className="py-2 px-4 border-b">Banca e Impresa</td>
                <td className="py-2 px-4 border-b">Entro 30 giorni dal decreto</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-400 mt-6">
          <p className="text-sm"><strong>Possibili Cause di Rigetto:</strong> Mancanza dei requisiti di ammissibilità, documentazione incompleta o irregolare, beni non conformi alle categorie ammissibili, esaurimento delle risorse disponibili.</p>
        </div>
      </div>
    </div>
  );
}
