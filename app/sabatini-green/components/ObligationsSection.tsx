import React from 'react';

interface ObligationsSectionProps {
  activeSection: string | null;
  toggleSection: (sectionId: string) => void;
}

const ObligationsSection: React.FC<ObligationsSectionProps> = ({ activeSection, toggleSection }) => {
  return (
    <div id="obblighi" className="mb-10">
      <button 
        onClick={() => toggleSection('obblighi')} 
        className="w-full flex justify-between items-center bg-green-600 text-white p-4 rounded-lg shadow hover:bg-green-700 transition duration-300"
      >
        <h2 className="text-xl md:text-2xl font-semibold">8. Obblighi e Controlli</h2>
        <span>{activeSection === 'obblighi' ? '−' : '+'}</span>
      </button>
      
      {activeSection === 'obblighi' && (
        <div className="bg-white p-6 rounded-b-lg shadow-md border-l-2 border-r-2 border-b-2 border-green-200">
          <h3 className="text-xl font-semibold mb-3 text-green-700">Obblighi delle Imprese Beneficiarie</h3>
          <p>Le imprese che beneficiano delle agevolazioni della Nuova Sabatini Green sono tenute a rispettare una serie di obblighi:</p>
          
          <div className="mt-6 space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="text-lg font-medium mb-2 text-green-600">Obblighi di Mantenimento</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Mantenere l'unità produttiva in cui è stato realizzato l'investimento per almeno 3 anni dalla data di completamento</li>
                <li>Conservare i beni agevolati nell'unità produttiva per almeno 3 anni</li>
                <li>Non alienare, cedere o distrarre i beni oggetto dell'agevolazione</li>
                <li>Mantenere i requisiti di PMI per tutta la durata del finanziamento</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="text-lg font-medium mb-2 text-green-600">Obblighi Documentali</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Conservare tutta la documentazione relativa all'investimento per 10 anni dalla data di concessione</li>
                <li>Tenere a disposizione la documentazione per eventuali controlli</li>
                <li>Riportare sulle fatture la dicitura specifica prevista dalla normativa</li>
                <li>Conservare le dichiarazioni dei fornitori per beni Green e 4.0</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="text-lg font-medium mb-2 text-green-600">Obblighi di Comunicazione</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Comunicare tempestivamente eventuali variazioni o modifiche nei requisiti di ammissibilità</li>
                <li>Segnalare eventuali variazioni relative all'investimento</li>
                <li>Comunicare eventuali operazioni straordinarie (fusioni, scissioni, ecc.)</li>
                <li>Fornire informazioni e documentazione su richiesta degli enti preposti ai controlli</li>
              </ul>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 mt-8 text-green-700">Controlli e Verifiche</h3>
          <p>Le imprese beneficiarie sono soggette a controlli e verifiche da parte di diversi soggetti:</p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="text-lg font-medium mb-2 text-green-600">Controlli del MIMIT</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Verifiche documentali sulla richiesta di erogazione</li>
                <li>Controlli a campione sulla veridicità delle dichiarazioni</li>
                <li>Ispezioni presso la sede dell'impresa</li>
                <li>Verifiche sull'effettivo mantenimento dei beni</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="text-lg font-medium mb-2 text-green-600">Controlli della Banca/Intermediario</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Verifiche sul corretto utilizzo del finanziamento</li>
                <li>Controlli sul rispetto del piano di ammortamento</li>
                <li>Monitoraggio della situazione finanziaria dell'impresa</li>
                <li>Segnalazioni di eventuali anomalie al MIMIT</li>
              </ul>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 mt-8 text-green-700">Revoca delle Agevolazioni</h3>
          <p>Le agevolazioni possono essere revocate, in tutto o in parte, nei seguenti casi:</p>
          
          <div className="mt-4">
            <ul className="list-disc pl-6 space-y-2">
              <li>Mancato rispetto degli obblighi di mantenimento dei beni e dell'unità produttiva</li>
              <li>Perdita dei requisiti di ammissibilità durante il periodo di fruizione</li>
              <li>Irregolarità riscontrate durante i controlli</li>
              <li>Dichiarazioni mendaci o documentazione non veritiera</li>
              <li>Risoluzione anticipata del contratto di finanziamento</li>
              <li>Apertura di procedure concorsuali a carico dell'impresa</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-6">
            <p className="font-semibold text-yellow-800">⚠️ Conseguenze della Revoca</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Restituzione dell'intero contributo ricevuto</li>
              <li>Applicazione di interessi al tasso di riferimento vigente</li>
              <li>Possibili sanzioni amministrative</li>
              <li>Impossibilità di accedere ad altre agevolazioni per un periodo determinato</li>
            </ul>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 mt-8 text-green-700">Variazioni e Modifiche</h3>
          
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="text-lg font-medium mb-2 text-green-600">Variazioni Ammissibili</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Variazioni dei beni acquistati con caratteristiche tecniche e funzionalità analoghe o superiori</li>
                <li>Modifiche della tempistica di realizzazione (entro i limiti massimi)</li>
                <li>Operazioni straordinarie che non comportano la perdita dei requisiti</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-2 text-green-600">Procedura di Comunicazione</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Comunicare tempestivamente al MIMIT e alla banca/intermediario</li>
                <li>Fornire documentazione a supporto della variazione</li>
                <li>Attendere l'autorizzazione prima di procedere (quando richiesto)</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-6">
            <p className="font-semibold text-blue-800">Supporto per la Compliance</p>
            <p className="mt-2">SolariX Business offre un servizio di assistenza continuativa per garantire il rispetto di tutti gli obblighi previsti dalla Nuova Sabatini Green. Il nostro team ti supporta nella gestione della documentazione, nelle comunicazioni con gli enti preposti e nell'implementazione di procedure interne per il monitoraggio degli obblighi. Contattaci per una consulenza personalizzata.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ObligationsSection;
