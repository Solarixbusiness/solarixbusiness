import React from 'react';

interface ApplicationSectionProps {
  activeSection: string | null;
  toggleSection: (sectionId: string) => void;
}

const ApplicationSection: React.FC<ApplicationSectionProps> = ({ activeSection, toggleSection }) => {
  return (
    <div id="domanda" className="mb-10">
      <button 
        onClick={() => toggleSection('domanda')} 
        className="w-full flex justify-between items-center bg-green-600 text-white p-4 rounded-lg shadow hover:bg-green-700 transition duration-300"
      >
        <h2 className="text-xl md:text-2xl font-semibold">5. Procedura di Domanda</h2>
        <span>{activeSection === 'domanda' ? '−' : '+'}</span>
      </button>
      
      {activeSection === 'domanda' && (
        <div className="bg-white p-6 rounded-b-lg shadow-md border-l-2 border-r-2 border-b-2 border-green-200">
          <h3 className="text-xl font-semibold mb-3 text-green-700">Iter Completo della Domanda</h3>
          <p>La procedura per accedere alla Nuova Sabatini Green segue un iter ben definito che coinvolge l'impresa, la banca convenzionata e il MIMIT. Ecco tutti i passaggi nel dettaglio:</p>
          
          <div className="mt-6">
            <div className="flex items-start mb-6">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="font-bold">1</span>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium mb-2 text-green-600">Verifica Preliminare dei Requisiti</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Verificare il possesso dei requisiti soggettivi (PMI, forma giuridica, situazione finanziaria)</li>
                  <li>Controllare l'ammissibilità dei beni da acquistare</li>
                  <li>Valutare la sostenibilità finanziaria dell'operazione</li>
                  <li>Identificare le banche convenzionate disponibili</li>
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
                  <li>Raccogliere i documenti aziendali (visure, bilanci, certificazioni)</li>
                  <li>Ottenere preventivi dettagliati dai fornitori</li>
                  <li>Preparare il business plan dell'investimento</li>
                  <li>Acquisire le dichiarazioni specifiche per beni Green</li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-start mb-6">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="font-bold">3</span>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium mb-2 text-green-600">Contatto con la Banca</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Presentare la richiesta di finanziamento alla banca scelta</li>
                  <li>Fornire tutta la documentazione richiesta</li>
                  <li>Compilare il modulo di domanda per l'agevolazione</li>
                  <li>Sottoscrivere la richiesta con firma digitale</li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-start mb-6">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="font-bold">4</span>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium mb-2 text-green-600">Valutazione della Banca</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>La banca verifica la completezza della documentazione</li>
                  <li>Valuta il merito creditizio secondo i propri parametri</li>
                  <li>Verifica la conformità dell'investimento ai requisiti Sabatini Green</li>
                  <li>In caso di esito positivo, delibera il finanziamento</li>
                  <li>Comunica al MIMIT la delibera entro 30 giorni dalla data di trasmissione della domanda</li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-start mb-6">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="font-bold">5</span>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium mb-2 text-green-600">Istruttoria del MIMIT</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Il MIMIT riceve la documentazione dalla banca</li>
                  <li>Verifica la disponibilità delle risorse finanziarie</li>
                  <li>Controlla il possesso dei requisiti di ammissibilità</li>
                  <li>Valuta la conformità dell'investimento alle normative Green</li>
                  <li>In caso di esito positivo, delibera il finanziamento</li>
                  <li>Comunica al MIMIT la delibera entro 30 giorni dalla data di trasmissione della domanda</li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-start mb-6">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="font-bold">6</span>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium mb-2 text-green-600">Concessione del Contributo</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Il MIMIT adotta il provvedimento di concessione del contributo</li>
                  <li>Lo comunica all'impresa e alla banca/intermediario</li>
                  <li>Indica l'ammontare del contributo concesso</li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="font-bold">7</span>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium mb-2 text-green-600">Stipula del Contratto e Realizzazione</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Stipulare il contratto di finanziamento con la banca/intermediario</li>
                  <li>Realizzare l'investimento entro 12 mesi dalla stipula</li>
                  <li>Conservare tutta la documentazione relativa all'investimento</li>
                </ul>
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 mt-8 text-green-700">Documentazione Richiesta</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h4 className="text-lg font-medium mb-2 text-green-600">Per la Domanda</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Modulo di domanda compilato e firmato digitalmente</li>
                <li>Dichiarazione sostitutiva di atto notorio</li>
                <li>Eventuale procura in caso di firma da parte di procuratore</li>
                <li>Per investimenti Green: dichiarazioni specifiche dei fornitori</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h4 className="text-lg font-medium mb-2 text-green-600">Per l'Erogazione</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Dichiarazione ultimazione investimento</li>
                <li>Richiesta di erogazione contributo</li>
                <li>Dichiarazione liberatoria fornitori</li>
                <li>Fatture d'acquisto dei beni</li>
                <li>Documentazione attestante il pagamento</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-6">
            <p className="font-semibold text-yellow-800">⚠️ Attenzione ai Termini</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>La domanda deve essere inviata entro i termini di apertura dello sportello</li>
              <li>L'investimento deve essere concluso entro 12 mesi dalla stipula del contratto</li>
              <li>La richiesta di erogazione deve essere inviata entro 120 giorni dal termine dell'investimento</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-6">
            <p className="font-semibold text-blue-800">Assistenza Specializzata</p>
            <p className="mt-2">SolariX Business offre un servizio di assistenza completa per la presentazione della domanda Sabatini Green, dalla verifica dei requisiti fino alla richiesta di erogazione. Contattaci per una consulenza personalizzata e massimizzare le possibilità di successo della tua richiesta.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicationSection;
