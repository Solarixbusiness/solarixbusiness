import React from 'react';

export default function ObligationsSection() {
  return (
    <div id="sezione-8" className="mb-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">8. Obblighi e Adempimenti</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold mb-3 text-gray-800">8.1 Obblighi delle Imprese Beneficiarie</h3>
        <p>Le imprese che beneficiano delle agevolazioni della Nuova Sabatini Green sono tenute a rispettare una serie di obblighi:</p>
        
        <p className="mt-4 font-medium">Obblighi di Mantenimento:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Mantenere l'unità produttiva in cui è stato realizzato l'investimento per almeno 3 anni dalla data di completamento</li>
          <li>Conservare i beni agevolati nell'unità produttiva per almeno 3 anni</li>
          <li>Non alienare, cedere o distrarre i beni oggetto dell'agevolazione</li>
          <li>Mantenere i requisiti di PMI per tutta la durata del finanziamento</li>
        </ul>
        
        <p className="mt-4 font-medium">Obblighi Documentali:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Conservare tutta la documentazione relativa all'investimento per 10 anni dalla data di concessione</li>
          <li>Tenere a disposizione la documentazione per eventuali controlli</li>
          <li>Riportare sulle fatture la dicitura specifica prevista dalla normativa</li>
          <li>Conservare le dichiarazioni dei fornitori per beni Green e 4.0</li>
        </ul>
        
        <p className="mt-4 font-medium">Obblighi di Comunicazione:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Comunicare tempestivamente eventuali variazioni o modifiche nei requisiti di ammissibilità</li>
          <li>Segnalare eventuali variazioni relative all'investimento</li>
          <li>Comunicare eventuali operazioni straordinarie (fusioni, scissioni, ecc.)</li>
          <li>Fornire informazioni e documentazione su richiesta degli enti preposti ai controlli</li>
        </ul>
        
        <h3 className="text-lg font-semibold mb-3 mt-6 text-gray-800">8.2 Controlli e Verifiche</h3>
        <p>Le imprese beneficiarie sono soggette a controlli e verifiche da parte di diversi soggetti:</p>
        
        <p className="mt-4 font-medium">Controlli del MIMIT:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Verifiche documentali sulla richiesta di erogazione</li>
          <li>Controlli a campione sulla veridicità delle dichiarazioni</li>
          <li>Ispezioni presso la sede dell'impresa</li>
          <li>Verifiche sull'effettivo mantenimento dei beni</li>
        </ul>
        
        <p className="mt-4 font-medium">Controlli della Banca/Intermediario:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Verifiche sul corretto utilizzo del finanziamento</li>
          <li>Controlli sul rispetto del piano di ammortamento</li>
          <li>Monitoraggio della situazione finanziaria dell'impresa</li>
          <li>Segnalazioni di eventuali anomalie al MIMIT</li>
        </ul>
        
        <h3 className="text-lg font-semibold mb-3 mt-6 text-gray-800">8.3 Revoca delle Agevolazioni</h3>
        <p>Le agevolazioni possono essere revocate, in tutto o in parte, nei seguenti casi:</p>
        
        <ul className="list-disc pl-6 mt-4 space-y-1">
          <li>Mancato rispetto degli obblighi di mantenimento dei beni e dell'unità produttiva</li>
          <li>Perdita dei requisiti di ammissibilità durante il periodo di fruizione</li>
          <li>Irregolarità riscontrate durante i controlli</li>
          <li>Dichiarazioni mendaci o documentazione non veritiera</li>
          <li>Risoluzione anticipata del contratto di finanziamento</li>
          <li>Apertura di procedure concorsuali a carico dell'impresa</li>
        </ul>
        
        <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-400 mt-6">
          <p className="text-sm"><strong>Conseguenze della Revoca:</strong> Restituzione dell'intero contributo ricevuto, applicazione di interessi al tasso di riferimento vigente, possibili sanzioni amministrative.</p>
        </div>
        
        <h3 className="text-lg font-semibold mb-3 mt-6 text-gray-800">8.4 Variazioni e Modifiche</h3>
        
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div className="bg-gray-50 p-4 rounded border border-gray-200">
            <p className="font-medium mb-2">Variazioni Ammissibili:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Variazioni dei beni acquistati con caratteristiche tecniche e funzionalità analoghe o superiori</li>
              <li>Modifiche della tempistica di realizzazione (entro i limiti massimi)</li>
              <li>Operazioni straordinarie che non comportano la perdita dei requisiti</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded border border-gray-200">
            <p className="font-medium mb-2">Procedura di Comunicazione:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Comunicare tempestivamente al MIMIT e alla banca/intermediario</li>
              <li>Fornire documentazione a supporto della variazione</li>
              <li>Attendere l'autorizzazione prima di procedere (quando richiesto)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
