import React from 'react';

interface BanksSectionProps {
  activeSection: string | null;
  toggleSection: (sectionId: string) => void;
}

const BanksSection: React.FC<BanksSectionProps> = ({ activeSection, toggleSection }) => {
  return (
    <div id="banche" className="mb-10">
      <button 
        onClick={() => toggleSection('banche')} 
        className="w-full flex justify-between items-center bg-green-600 text-white p-4 rounded-lg shadow hover:bg-green-700 transition duration-300"
      >
        <h2 className="text-xl md:text-2xl font-semibold">4. Banche e Intermediari Convenzionati</h2>
        <span>{activeSection === 'banche' ? '−' : '+'}</span>
      </button>
      
      {activeSection === 'banche' && (
        <div className="bg-white p-6 rounded-b-lg shadow-md border-l-2 border-r-2 border-b-2 border-green-200">
          <h3 className="text-xl font-semibold mb-3 text-green-700">Ruolo delle Banche Convenzionate</h3>
          <p>Per accedere alla Nuova Sabatini Green è necessario rivolgersi esclusivamente a banche e intermediari finanziari convenzionati con il Ministero delle Imprese e del Made in Italy (MIMIT). Questi soggetti svolgono un ruolo fondamentale nell'intero processo di erogazione dell'agevolazione.</p>
          
          <div className="mt-6 space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="text-lg font-medium mb-2 text-green-600">Funzioni delle Banche Convenzionate</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Raccolta e verifica delle domande di agevolazione</li>
                <li>Valutazione del merito creditizio dell'impresa</li>
                <li>Erogazione del finanziamento agevolato</li>
                <li>Trasmissione della documentazione al MIMIT</li>
                <li>Gestione del rapporto creditizio con l'impresa</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="text-lg font-medium mb-2 text-green-600">Vantaggi per l'Impresa</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Sportello unico per finanziamento e agevolazione</li>
                <li>Procedure standardizzate e semplificate</li>
                <li>Assistenza specializzata nella compilazione</li>
                <li>Tempi di risposta più rapidi</li>
                <li>Condizioni di finanziamento competitive</li>
              </ul>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 mt-8 text-green-700">Principali Banche Convenzionate</h3>
          <p>L'elenco completo delle banche convenzionate è disponibile sul sito del MIMIT e viene periodicamente aggiornato. Tra le principali:</p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="text-lg font-medium mb-2 text-green-600">Grandi Istituti</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Intesa Sanpaolo</li>
                <li>UniCredit</li>
                <li>Banco BPM</li>
                <li>BPER Banca</li>
                <li>Monte dei Paschi di Siena</li>
                <li>BNL Gruppo BNP Paribas</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="text-lg font-medium mb-2 text-green-600">Banche Regionali e Locali</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Banca Popolare di Sondrio</li>
                <li>Credito Emiliano</li>
                <li>Banca Mediolanum</li>
                <li>Banche di Credito Cooperativo (BCC)</li>
                <li>Istituti regionali convenzionati</li>
                <li>Confidi e intermediari specializzati</li>
              </ul>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 mt-8 text-green-700">Criteri di Scelta della Banca</h3>
          <p>La scelta della banca convenzionata è strategica per il successo dell'operazione. Ecco i principali fattori da considerare:</p>
          
          <div className="mt-6">
            <div className="flex items-start mb-6">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="font-bold">1</span>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium mb-2 text-green-600">Esperienza con la Sabatini</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Numero di pratiche gestite negli anni precedenti</li>
                  <li>Tasso di successo delle domande presentate</li>
                  <li>Competenza specifica sui beni Green</li>
                  <li>Presenza di desk specializzati</li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-start mb-6">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="font-bold">2</span>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium mb-2 text-green-600">Condizioni Economiche</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Tasso di interesse applicato</li>
                  <li>Commissioni e spese accessorie</li>
                  <li>Garanzie richieste</li>
                  <li>Flessibilità nelle condizioni contrattuali</li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-start mb-6">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="font-bold">3</span>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium mb-2 text-green-600">Servizi di Supporto</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Assistenza nella compilazione della domanda</li>
                  <li>Consulenza sulla scelta dei beni ammissibili</li>
                  <li>Supporto nella fase di erogazione</li>
                  <li>Servizi digitali e online</li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="font-bold">4</span>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium mb-2 text-green-600">Tempi di Risposta</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Velocità di valutazione della domanda</li>
                  <li>Tempi di delibera del finanziamento</li>
                  <li>Rapidità nella trasmissione al MIMIT</li>
                  <li>Efficienza nella gestione delle pratiche</li>
                </ul>
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 mt-8 text-green-700">Processo di Selezione</h3>
          
          <div className="overflow-x-auto mt-4">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
              <thead>
                <tr className="bg-green-100">
                  <th className="py-2 px-4 border-b text-left">Fase</th>
                  <th className="py-2 px-4 border-b text-left">Attività</th>
                  <th className="py-2 px-4 border-b text-left">Suggerimenti</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">Ricerca</td>
                  <td className="py-2 px-4 border-b">Identificare banche convenzionate nella zona</td>
                  <td className="py-2 px-4 border-b">Consultare l'elenco ufficiale MIMIT</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border-b">Contatto</td>
                  <td className="py-2 px-4 border-b">Richiedere informazioni e preventivi</td>
                  <td className="py-2 px-4 border-b">Contattare almeno 3-4 istituti</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Valutazione</td>
                  <td className="py-2 px-4 border-b">Confrontare condizioni e servizi</td>
                  <td className="py-2 px-4 border-b">Non considerare solo il tasso</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border-b">Scelta</td>
                  <td className="py-2 px-4 border-b">Selezionare la banca più adatta</td>
                  <td className="py-2 px-4 border-b">Privilegiare esperienza e affidabilità</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-6">
            <p className="font-semibold text-yellow-800">⚠️ Attenzione</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Solo le banche convenzionate possono gestire le domande Sabatini Green</li>
              <li>L'elenco delle banche convenzionate può variare nel tempo</li>
              <li>Verificare sempre l'aggiornamento dell'elenco sul sito MIMIT</li>
              <li>La scelta della banca influenza significativamente l'esito dell'operazione</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-6">
            <p className="font-semibold text-blue-800">Supporto nella Scelta</p>
            <p className="mt-2">SolariX Business ha sviluppato partnership con le principali banche convenzionate e può guidarti nella scelta dell'istituto più adatto alle tue esigenze. Ti supportiamo nella valutazione delle condizioni, nella negoziazione dei termini e nell'ottimizzazione dell'intera operazione finanziaria.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BanksSection;
