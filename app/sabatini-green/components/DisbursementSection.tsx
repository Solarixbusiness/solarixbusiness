import React from 'react';

interface DisbursementSectionProps {
  activeSection: string | null;
  toggleSection: (sectionId: string) => void;
}

const DisbursementSection: React.FC<DisbursementSectionProps> = ({ activeSection, toggleSection }) => {
  return (
    <div id="erogazione" className="mb-10">
      <button 
        onClick={() => toggleSection('erogazione')} 
        className="w-full flex justify-between items-center bg-green-600 text-white p-4 rounded-lg shadow hover:bg-green-700 transition duration-300"
      >
        <h2 className="text-xl md:text-2xl font-semibold">7. Erogazione del Contributo</h2>
        <span>{activeSection === 'erogazione' ? '−' : '+'}</span>
      </button>
      
      {activeSection === 'erogazione' && (
        <div className="bg-white p-6 rounded-b-lg shadow-md border-l-2 border-r-2 border-b-2 border-green-200">
          <h3 className="text-xl font-semibold mb-3 text-green-700">Modalità di Erogazione del Contributo</h3>
          <p>Una volta completato l'investimento, l'impresa può richiedere l'erogazione del contributo seguendo un processo specifico:</p>
          
          <div className="mt-6">
            <div className="flex items-start mb-6">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="font-bold">1</span>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium mb-2 text-green-600">Completamento dell'Investimento</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Realizzare l'investimento entro 12 mesi dalla stipula del contratto di finanziamento</li>
                  <li>Assicurarsi che tutti i beni siano stati consegnati, installati e messi in funzione</li>
                  <li>Per beni 4.0: verificare l'interconnessione al sistema aziendale</li>
                  <li>Per beni Green: verificare la conformità ai requisiti ambientali</li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-start mb-6">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="font-bold">2</span>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium mb-2 text-green-600">Preparazione della Documentazione</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Raccogliere tutte le fatture relative all'investimento</li>
                  <li>Ottenere le dichiarazioni liberatorie dei fornitori</li>
                  <li>Preparare la documentazione di pagamento (bonifici, estratti conto)</li>
                  <li>Per beni 4.0: perizia tecnica o attestato di conformità</li>
                  <li>Per beni Green: dichiarazioni specifiche dei fornitori</li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-start mb-6">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="font-bold">3</span>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium mb-2 text-green-600">Compilazione della Richiesta</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Accedere alla piattaforma dedicata sul sito del MIMIT</li>
                  <li>Compilare il modulo di richiesta di erogazione</li>
                  <li>Dichiarare l'avvenuta realizzazione dell'investimento</li>
                  <li>Generare il modulo compilato in formato PDF</li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-start mb-6">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="font-bold">4</span>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium mb-2 text-green-600">Invio della Richiesta</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Firmare digitalmente il modulo di richiesta (formato p7m)</li>
                  <li>Inviare la richiesta via PEC al MIMIT</li>
                  <li>Allegare tutta la documentazione richiesta</li>
                  <li>Rispettare il termine di 120 giorni dal completamento dell'investimento</li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="font-bold">5</span>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium mb-2 text-green-600">Ricezione del Contributo</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Il MIMIT verifica la documentazione presentata</li>
                  <li>In caso di esito positivo, eroga il contributo</li>
                  <li>L'accredito avviene sul conto corrente indicato dall'impresa</li>
                  <li>Per contributi superiori a €200.000, l'erogazione avviene in più quote annuali</li>
                </ul>
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 mt-8 text-green-700">Tempistiche di Erogazione</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="text-lg font-medium mb-2 text-green-600">Contributo in Unica Soluzione</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Per finanziamenti fino a €200.000</li>
                <li>Erogazione entro 30 giorni dalla ricezione della richiesta completa</li>
                <li>Accredito diretto sul conto corrente dell'impresa</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="text-lg font-medium mb-2 text-green-600">Contributo in Più Quote</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Per finanziamenti superiori a €200.000</li>
                <li>Prima quota entro 30 giorni dalla ricezione della richiesta</li>
                <li>Quote successive a cadenza annuale</li>
                <li>Erogazione automatica senza ulteriori richieste</li>
              </ul>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 mt-8 text-green-700">Documentazione Necessaria</h3>
          
          <div className="overflow-x-auto mt-4">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
              <thead>
                <tr className="bg-green-100">
                  <th className="py-2 px-4 border-b text-left">Documento</th>
                  <th className="py-2 px-4 border-b text-left">Descrizione</th>
                  <th className="py-2 px-4 border-b text-left">Note</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">Dichiarazione ultimazione investimento</td>
                  <td className="py-2 px-4 border-b">Attesta il completamento dell'investimento</td>
                  <td className="py-2 px-4 border-b">Firmata digitalmente dal legale rappresentante</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border-b">Fatture d'acquisto</td>
                  <td className="py-2 px-4 border-b">Documentazione fiscale dei beni acquistati</td>
                  <td className="py-2 px-4 border-b">Con dicitura "Bene acquistato con il concorso delle provvidenze previste dalla legge 160/2019"</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Dichiarazioni liberatorie</td>
                  <td className="py-2 px-4 border-b">Attestano l'avvenuto pagamento integrale</td>
                  <td className="py-2 px-4 border-b">Rilasciate dai fornitori</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border-b">Documentazione di pagamento</td>
                  <td className="py-2 px-4 border-b">Bonifici, estratti conto, ricevute</td>
                  <td className="py-2 px-4 border-b">Deve dimostrare la tracciabilità dei pagamenti</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Perizia tecnica (per beni 4.0)</td>
                  <td className="py-2 px-4 border-b">Attesta le caratteristiche 4.0 dei beni</td>
                  <td className="py-2 px-4 border-b">Rilasciata da ingegnere o perito industriale</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-6">
            <p className="font-semibold text-yellow-800">⚠️ Attenzione</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>La richiesta di erogazione deve essere inviata entro 120 giorni dal termine dell'investimento</li>
              <li>La documentazione deve essere completa e conforme alle specifiche richieste</li>
              <li>I pagamenti devono essere tracciabili e riferibili ai beni oggetto dell'agevolazione</li>
              <li>Le fatture devono riportare la dicitura specifica prevista dalla normativa</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-6">
            <p className="font-semibold text-blue-800">Assistenza per l'Erogazione</p>
            <p className="mt-2">SolariX Business ti supporta nella fase di richiesta di erogazione del contributo, garantendo la corretta preparazione della documentazione e il rispetto di tutti i requisiti formali. Contattaci per un supporto personalizzato e massimizzare le possibilità di successo della tua richiesta.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisbursementSection;
