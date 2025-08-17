import React from 'react';

interface EvaluationSectionProps {
  activeSection: string | null;
  toggleSection: (sectionId: string) => void;
}

const EvaluationSection: React.FC<EvaluationSectionProps> = ({ activeSection, toggleSection }) => {
  return (
    <div id="valutazione" className="mb-10">
      <button 
        onClick={() => toggleSection('valutazione')} 
        className="w-full flex justify-between items-center bg-green-600 text-white p-4 rounded-lg shadow hover:bg-green-700 transition duration-300"
      >
        <h2 className="text-xl md:text-2xl font-semibold">6. Valutazione e Concessione</h2>
        <span>{activeSection === 'valutazione' ? '−' : '+'}</span>
      </button>
      
      {activeSection === 'valutazione' && (
        <div className="bg-white p-6 rounded-b-lg shadow-md border-l-2 border-r-2 border-b-2 border-green-200">
          <h3 className="text-xl font-semibold mb-3 text-green-700">Processo di Valutazione</h3>
          <p>Dopo l'invio della domanda, si avvia un processo di valutazione articolato in diverse fasi:</p>
          
          <div className="mt-6 space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="text-lg font-medium mb-2 text-green-600">1. Verifica Formale della Banca</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>La banca/intermediario verifica la completezza della documentazione</li>
                <li>Controlla la regolarità formale della domanda</li>
                <li>Valuta il merito creditizio dell'impresa secondo i propri modelli</li>
                <li>Delibera il finanziamento o lo rifiuta</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="text-lg font-medium mb-2 text-green-600">2. Comunicazione al MIMIT</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>La banca/intermediario trasmette al Ministero:</li>
                <ul className="list-disc pl-6 mt-1 mb-2 space-y-1">
                  <li>Delibera di finanziamento</li>
                  <li>Copia della domanda di agevolazione</li>
                  <li>Dichiarazione sostitutiva dell'impresa</li>
                </ul>
                <li>Termine: entro 30 giorni dalla ricezione della domanda</li>
                <li>Modalità: tramite piattaforma informatica</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="text-lg font-medium mb-2 text-green-600">3. Istruttoria Ministeriale</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Il MIMIT verifica:</li>
                <ul className="list-disc pl-6 mt-1 mb-2 space-y-1">
                  <li>Disponibilità delle risorse finanziarie</li>
                  <li>Possesso dei requisiti di ammissibilità</li>
                  <li>Conformità dell'investimento alle normative</li>
                </ul>
                <li>Può richiedere integrazioni documentali</li>
              </ul>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 mt-8 text-green-700">Concessione del Contributo</h3>
          
          <div className="mt-4 space-y-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="text-lg font-medium mb-2 text-green-600">Decreto di Concessione</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Il MIMIT adotta il provvedimento di concessione del contributo</li>
                <li>Indica l'ammontare dell'agevolazione concessa</li>
                <li>Specifica il piano di erogazione</li>
                <li>Riporta gli obblighi e i vincoli a carico dell'impresa</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="text-lg font-medium mb-2 text-green-600">Comunicazione all'Impresa</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Il decreto viene trasmesso all'impresa e alla banca/intermediario</li>
                <li>Contiene tutte le informazioni necessarie per procedere con:</li>
                <ul className="list-disc pl-6 mt-1 mb-2 space-y-1">
                  <li>Stipula del contratto di finanziamento</li>
                  <li>Realizzazione dell'investimento</li>
                  <li>Richiesta di erogazione del contributo</li>
                </ul>
              </ul>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 mt-8 text-green-700">Tempistiche del Processo</h3>
          
          <div className="overflow-x-auto mt-4">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
              <thead>
                <tr className="bg-green-100">
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
          
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-6">
            <p className="font-semibold text-yellow-800">⚠️ Possibili Cause di Rigetto</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Mancanza dei requisiti di ammissibilità</li>
              <li>Documentazione incompleta o irregolare</li>
              <li>Beni non conformi alle categorie ammissibili</li>
              <li>Esaurimento delle risorse disponibili</li>
              <li>Mancato rispetto dei termini procedurali</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-6">
            <p className="font-semibold text-blue-800">Monitoraggio della Pratica</p>
            <p className="mt-2">SolariX Business offre un servizio di monitoraggio continuo della pratica durante tutto l'iter di valutazione e concessione. Ti terremo costantemente aggiornato sullo stato di avanzamento e interverremo prontamente in caso di richieste di integrazioni o chiarimenti da parte degli enti coinvolti.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EvaluationSection;
