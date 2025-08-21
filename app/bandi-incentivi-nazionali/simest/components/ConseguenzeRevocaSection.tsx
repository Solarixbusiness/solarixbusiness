import React from 'react';
import Link from 'next/link';

const ConseguenzeRevocaSection: React.FC = () => {
  return (
    <div className="mb-12">
      <div className="bg-white p-6 border border-gray-100 rounded-lg shadow-lg">
        <h2 id="conseguenze-revoca" className="text-2xl font-semibold text-gray-800 mb-6">18. CONSEGUENZE DELLA REVOCA</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-3">18.1 Obblighi di Restituzione</h3>
          
          <div className="mb-5">
            <h4 className="font-semibold text-gray-700 mb-2">Restituzione del Capitale</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Restituzione immediata di tutte le somme erogate a titolo di finanziamento</li>
              <li>Restituzione integrale dei contributi a fondo perduto percepiti</li>
              <li>Calcolo degli importi alla data di comunicazione della revoca</li>
              <li>Possibilità di rateizzazione solo in casi eccezionali</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-gray-700 mb-2">Interessi e Penali</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Applicazione di interessi legali dalla data di erogazione</li>
              <li>Interessi di mora in caso di ritardato pagamento</li>
              <li>Eventuali penali contrattuali previste</li>
              <li>Spese legali e amministrative per il recupero</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-3">18.2 Conseguenze Amministrative</h3>
          
          <div className="mb-5">
            <h4 className="font-semibold text-gray-700 mb-2">Esclusioni Future</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Esclusione da futuri finanziamenti SIMEST per un periodo determinato</li>
              <li>Inserimento in banche dati negative</li>
              <li>Segnalazione ad altri enti erogatori di incentivi</li>
              <li>Possibile esclusione da gare pubbliche</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-gray-700 mb-2">Comunicazioni Obbligatorie</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Comunicazione alla Guardia di Finanza per controlli fiscali</li>
              <li>Segnalazione alla Corte dei Conti per danno erariale</li>
              <li>Comunicazione ad altri enti pubblici coinvolti</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-3">18.3 Procedure di Recupero</h3>
          
          <div className="mb-5">
            <h4 className="font-semibold text-gray-700 mb-2">Recupero Amministrativo</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Emissione di decreto di recupero</li>
              <li>Termine per il pagamento volontario (di norma 60 giorni)</li>
              <li>Possibilità di rateizzazione in casi particolari</li>
              <li>Applicazione di garanzie eventualmente prestate</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-gray-700 mb-2">Recupero Coattivo</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Iscrizione a ruolo per riscossione coattiva</li>
              <li>Pignoramenti di beni mobili e immobili</li>
              <li>Fermo amministrativo di veicoli aziendali</li>
              <li>Ipoteca su beni immobili</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-3">18.4 Impatti sulla Continuità Aziendale</h3>
          
          <div className="mb-5">
            <h4 className="font-semibold text-gray-700 mb-2">Effetti Finanziari</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Impatto negativo sui flussi di cassa aziendali</li>
              <li>Possibili difficoltà nell'accesso al credito bancario</li>
              <li>Deterioramento del rating creditizio</li>
              <li>Necessità di reperire risorse alternative</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-gray-700 mb-2">Effetti Reputazionali</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Danno all'immagine aziendale</li>
              <li>Possibili ripercussioni sui rapporti commerciali</li>
              <li>Difficoltà nelle relazioni con partner e fornitori</li>
              <li>Impatto negativo sulla valutazione aziendale</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-3">18.5 Strategie di Prevenzione</h3>
          
          <div className="mb-5">
            <h4 className="font-semibold text-gray-700 mb-2">Monitoraggio Continuo</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Controllo periodico del rispetto degli obblighi contrattuali</li>
              <li>Monitoraggio delle scadenze di rendicontazione</li>
              <li>Verifica continua dei requisiti di ammissibilità</li>
              <li>Comunicazione proattiva con SIMEST</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h4 className="font-semibold text-blue-700 mb-2">Hai bisogno di supporto?</h4>
          <p className="mb-4">La prevenzione della revoca è sempre preferibile alla gestione delle sue conseguenze. I nostri consulenti possono aiutarti a implementare sistemi di controllo e monitoraggio per evitare situazioni che potrebbero portare alla revoca del finanziamento.</p>
          <div className="flex items-center">
            <Link href="/contatti" className="text-blue-600 hover:underline mr-6">Contattaci per una consulenza</Link>
            <a href="/contatti" className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
              Richiedi Consulenza
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConseguenzeRevocaSection;
