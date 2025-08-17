import React from 'react';

interface IntroductionSectionProps {
  activeSection: string | null;
  toggleSection: (sectionId: string) => void;
}

const IntroductionSection: React.FC<IntroductionSectionProps> = ({ activeSection, toggleSection }) => {
  return (
    <div id="introduzione" className="mb-10">
      <button 
        onClick={() => toggleSection('introduzione')} 
        className="w-full flex justify-between items-center bg-green-600 text-white p-4 rounded-lg shadow hover:bg-green-700 transition duration-300"
      >
        <h2 className="text-xl md:text-2xl font-semibold">1. Introduzione alla Nuova Sabatini Green</h2>
        <span>{activeSection === 'introduzione' ? '−' : '+'}</span>
      </button>
      
      {activeSection === 'introduzione' && (
        <div className="bg-white p-6 rounded-b-lg shadow-md border-l-2 border-r-2 border-b-2 border-green-200">
          <h3 className="text-xl font-semibold mb-3 text-green-700">Cos'è la Nuova Sabatini Green</h3>
          <p>La <strong>Nuova Sabatini Green</strong> è una misura di incentivazione introdotta per sostenere gli investimenti delle piccole e medie imprese (PMI) in beni strumentali nuovi a basso impatto ambientale. Questa agevolazione rappresenta un'evoluzione della tradizionale Nuova Sabatini, con un focus specifico sulla sostenibilità ambientale e la transizione ecologica delle imprese italiane.</p>
          
          <h3 className="text-xl font-semibold mb-3 mt-8 text-green-700">Obiettivi della Misura</h3>
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="text-lg font-medium mb-2 text-green-600">Sostenibilità Ambientale</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Promuovere investimenti in tecnologie eco-sostenibili</li>
                <li>Ridurre l'impatto ambientale delle attività produttive</li>
                <li>Favorire l'efficienza energetica e l'uso di energie rinnovabili</li>
                <li>Supportare la transizione verso un'economia circolare</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="text-lg font-medium mb-2 text-green-600">Competitività delle PMI</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Facilitare l'accesso al credito per investimenti green</li>
                <li>Ridurre i costi di finanziamento attraverso contributi pubblici</li>
                <li>Migliorare la competitività sul mercato nazionale e internazionale</li>
                <li>Preparare le imprese alle sfide della transizione ecologica</li>
              </ul>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 mt-8 text-green-700">Vantaggi Principali</h3>
          <div className="mt-4">
            <div className="flex items-start mb-4">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="font-bold">1</span>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium mb-1 text-green-600">Contributo Maggiorato</h4>
                <p>Tasso di contributo del 3,575% annuo per 5 anni, superiore al 2,75% della Sabatini ordinaria</p>
              </div>
            </div>
            
            <div className="flex items-start mb-4">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="font-bold">2</span>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium mb-1 text-green-600">Priorità nell'Accesso</h4>
                <p>Precedenza nella valutazione delle domande rispetto alle richieste ordinarie</p>
              </div>
            </div>
            
            <div className="flex items-start mb-4">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="font-bold">3</span>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium mb-1 text-green-600">Cumulabilità</h4>
                <p>Possibilità di cumulo con altre agevolazioni pubbliche e crediti d'imposta</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="font-bold">4</span>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium mb-1 text-green-600">Procedure Semplificate</h4>
                <p>Iter di valutazione ottimizzato e tempi di risposta più rapidi</p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-6">
            <p className="font-semibold text-blue-800">Perché Scegliere SolariX Business</p>
            <p className="mt-2">SolariX Business è il partner ideale per guidarti nell'accesso alla Nuova Sabatini Green. Il nostro team di esperti ti supporta dall'analisi della fattibilità fino all'ottenimento del contributo, garantendo il massimo successo della tua richiesta con un approccio personalizzato e professionale.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default IntroductionSection;
