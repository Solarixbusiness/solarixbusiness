import React from 'react';

export default function DisbursementSection() {
  return (
    <div id="sezione-7" className="mb-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">7. Erogazione e Tempi</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold mb-3 text-gray-800">7.1 Modalità di Erogazione del Contributo</h3>
        <p>Una volta completato l'investimento, l'impresa può richiedere l'erogazione del contributo seguendo un processo specifico:</p>
        
        <p className="mt-4 font-medium">1. Completamento dell'Investimento:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Realizzare l'investimento entro 12 mesi dalla stipula del contratto di finanziamento</li>
          <li>Assicurarsi che tutti i beni siano stati consegnati, installati e messi in funzione</li>
          <li>Per beni 4.0: verificare l'interconnessione al sistema aziendale</li>
          <li>Per beni Green: verificare la conformità ai requisiti ambientali</li>
        </ul>
        
        <p className="mt-4 font-medium">2. Preparazione della Documentazione:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Raccogliere tutte le fatture relative all'investimento</li>
          <li>Ottenere le dichiarazioni liberatorie dei fornitori</li>
          <li>Preparare la documentazione di pagamento (bonifici, estratti conto)</li>
          <li>Per beni 4.0: perizia tecnica o attestato di conformità</li>
          <li>Per beni Green: dichiarazioni specifiche dei fornitori</li>
        </ul>
        
        <p className="mt-4 font-medium">3. Compilazione della Richiesta:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Accedere alla piattaforma dedicata sul sito del MIMIT</li>
          <li>Compilare il modulo di richiesta di erogazione</li>
          <li>Dichiarare l'avvenuta realizzazione dell'investimento</li>
          <li>Generare il modulo compilato in formato PDF</li>
        </ul>
        
        <p className="mt-4 font-medium">4. Invio della Richiesta:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Firmare digitalmente il modulo di richiesta (formato p7m)</li>
          <li>Inviare la richiesta via PEC al MIMIT</li>
          <li>Allegare tutta la documentazione richiesta</li>
          <li>Rispettare il termine di 120 giorni dal completamento dell'investimento</li>
        </ul>
        
        <p className="mt-4 font-medium">5. Ricezione del Contributo:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Il MIMIT verifica la documentazione presentata</li>
          <li>In caso di esito positivo, eroga il contributo</li>
          <li>L'accredito avviene sul conto corrente indicato dall'impresa</li>
          <li>Per contributi superiori a €200.000, l'erogazione avviene in più quote annuali</li>
        </ul>
        
        <h3 className="text-lg font-semibold mb-3 mt-6 text-gray-800">7.2 Tempistiche di Erogazione</h3>
        
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div className="bg-gray-50 p-4 rounded border border-gray-200">
            <p className="font-medium mb-2">Contributo in Unica Soluzione:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Per finanziamenti fino a €200.000</li>
              <li>Erogazione entro 30 giorni dalla ricezione della richiesta completa</li>
              <li>Accredito diretto sul conto corrente dell'impresa</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded border border-gray-200">
            <p className="font-medium mb-2">Contributo in Più Quote:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Per finanziamenti superiori a €200.000</li>
              <li>Prima quota entro 30 giorni dalla ricezione della richiesta</li>
              <li>Quote successive a cadenza annuale</li>
              <li>Erogazione automatica senza ulteriori richieste</li>
            </ul>
          </div>
        </div>
        
        <h3 className="text-lg font-semibold mb-3 mt-6 text-gray-800">7.3 Documentazione Necessaria</h3>
        
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full bg-white border border-gray-300 rounded">
            <thead>
              <tr className="bg-gray-100">
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
                <td className="py-2 px-4 border-b">Con dicitura specifica prevista dalla normativa</td>
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
        
        <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-400 mt-6">
          <p className="text-sm"><strong>Attenzione:</strong> La richiesta di erogazione deve essere inviata entro 120 giorni dal termine dell'investimento. La documentazione deve essere completa e conforme alle specifiche richieste.</p>
        </div>
      </div>
    </div>
  );
}
