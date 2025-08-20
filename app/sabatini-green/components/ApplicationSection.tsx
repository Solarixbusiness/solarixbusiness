import React from 'react';

export default function ApplicationSection() {
  return (
    <div id="sezione-5" className="mb-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">5. Procedura di Domanda</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold mb-3 text-gray-800">5.1 Iter Completo della Domanda</h3>
        <p>La procedura per accedere alla Nuova Sabatini Green segue un iter ben definito che coinvolge l'impresa, la banca convenzionata e il MIMIT. Ecco tutti i passaggi nel dettaglio:</p>
        
        <p className="mt-4 font-medium">1. Verifica Preliminare dei Requisiti:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Verificare il possesso dei requisiti soggettivi (PMI, forma giuridica, situazione finanziaria)</li>
          <li>Controllare l'ammissibilità dei beni da acquistare</li>
          <li>Valutare la sostenibilità finanziaria dell'operazione</li>
          <li>Identificare le banche convenzionate disponibili</li>
        </ul>
        
        <p className="mt-4 font-medium">2. Preparazione della Documentazione:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Raccogliere i documenti aziendali (visure, bilanci, certificazioni)</li>
          <li>Ottenere preventivi dettagliati dai fornitori</li>
          <li>Preparare il business plan dell'investimento</li>
          <li>Acquisire le dichiarazioni specifiche per beni Green</li>
        </ul>
        
        <p className="mt-4 font-medium">3. Contatto con la Banca:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Presentare la richiesta di finanziamento alla banca scelta</li>
          <li>Fornire tutta la documentazione richiesta</li>
          <li>Compilare il modulo di domanda per l'agevolazione</li>
          <li>Sottoscrivere la richiesta con firma digitale</li>
        </ul>
        
        <p className="mt-4 font-medium">4. Valutazione della Banca:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>La banca verifica la completezza della documentazione</li>
          <li>Valuta il merito creditizio secondo i propri parametri</li>
          <li>Verifica la conformità dell'investimento ai requisiti Sabatini Green</li>
          <li>In caso di esito positivo, delibera il finanziamento</li>
          <li>Comunica al MIMIT la delibera entro 30 giorni dalla data di trasmissione della domanda</li>
        </ul>
        
        <p className="mt-4 font-medium">5. Istruttoria del MIMIT:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Il MIMIT riceve la documentazione dalla banca</li>
          <li>Verifica la disponibilità delle risorse finanziarie</li>
          <li>Controlla il possesso dei requisiti di ammissibilità</li>
          <li>Valuta la conformità dell'investimento alle normative Green</li>
          <li>In caso di esito positivo, delibera il finanziamento</li>
          <li>Comunica al MIMIT la delibera entro 30 giorni dalla data di trasmissione della domanda</li>
        </ul>
        
        <p className="mt-4 font-medium">6. Concessione del Contributo:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Il MIMIT adotta il provvedimento di concessione del contributo</li>
          <li>Lo comunica all'impresa e alla banca/intermediario</li>
          <li>Indica l'ammontare del contributo concesso</li>
        </ul>
        
        <p className="mt-4 font-medium">7. Stipula del Contratto e Realizzazione:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Stipulare il contratto di finanziamento con la banca/intermediario</li>
          <li>Realizzare l'investimento entro 12 mesi dalla stipula</li>
          <li>Conservare tutta la documentazione relativa all'investimento</li>
        </ul>
        
        <h3 className="text-lg font-semibold mb-3 mt-6 text-gray-800">5.2 Documentazione Richiesta</h3>
        
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div className="bg-gray-50 p-4 rounded border border-gray-200">
            <p className="font-medium mb-2">Per la Domanda:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Modulo di domanda compilato e firmato digitalmente</li>
              <li>Dichiarazione sostitutiva di atto notorio</li>
              <li>Eventuale procura in caso di firma da parte di procuratore</li>
              <li>Per investimenti Green: dichiarazioni specifiche dei fornitori</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded border border-gray-200">
            <p className="font-medium mb-2">Per l'Erogazione:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Dichiarazione ultimazione investimento</li>
              <li>Richiesta di erogazione contributo</li>
              <li>Dichiarazione liberatoria fornitori</li>
              <li>Fatture d'acquisto dei beni</li>
              <li>Documentazione attestante il pagamento</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-400 mt-6">
          <p className="text-sm"><strong>Attenzione ai Termini:</strong> La domanda deve essere inviata entro i termini di apertura dello sportello. L'investimento deve essere concluso entro 12 mesi dalla stipula del contratto.</p>
        </div>
      </div>
    </div>
  );
}
