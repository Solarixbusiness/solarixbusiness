import React from 'react';
import Link from 'next/link';

const ProceduraRevocaSection: React.FC = () => {
  return (
    <div className="mb-12">
      <div className="bg-white p-6 border border-green-100 rounded-lg shadow-lg">
        <h2 id="procedura-revoca" className="text-2xl font-semibold text-green-700 mb-6">19. PROCEDURA DI REVOCA</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">19.1 Fasi del Procedimento</h3>
          
          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-red-200"></div>
            
            <div className="relative pl-12 pb-8">
              <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white font-bold">1</div>
              <h4 className="font-semibold text-green-600 mb-2">Rilevazione dell'Inadempimento</h4>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Controlli interni di SIMEST</li>
                  <li>Segnalazioni esterne</li>
                  <li>Verifiche periodiche sui progetti</li>
                  <li>Mancato rispetto delle scadenze</li>
                </ul>
              </div>
            </div>
            
            <div className="relative pl-12 pb-8">
              <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white font-bold">2</div>
              <h4 className="font-semibold text-green-600 mb-2">Avvio del Procedimento</h4>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Comunicazione formale di avvio</li>
                  <li>Indicazione specifica delle violazioni</li>
                  <li>Assegnazione di un termine per le controdeduzioni</li>
                  <li>Nomina del responsabile del procedimento</li>
                </ul>
              </div>
            </div>
            
            <div className="relative pl-12 pb-8">
              <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white font-bold">3</div>
              <h4 className="font-semibold text-green-600 mb-2">Fase delle Controdeduzioni</h4>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Termine di 30 giorni per le controdeduzioni</li>
                  <li>Possibilità di richiedere audizione</li>
                  <li>Presentazione di documentazione a discarico</li>
                  <li>Eventuale richiesta di proroga motivata</li>
                </ul>
              </div>
            </div>
            
            <div className="relative pl-12 pb-8">
              <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white font-bold">4</div>
              <h4 className="font-semibold text-green-600 mb-2">Istruttoria</h4>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Valutazione delle controdeduzioni</li>
                  <li>Eventuale audizione dell'impresa</li>
                  <li>Acquisizione di ulteriori elementi</li>
                  <li>Relazione istruttoria conclusiva</li>
                </ul>
              </div>
            </div>
            
            <div className="relative pl-12">
              <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white font-bold">5</div>
              <h4 className="font-semibold text-green-600 mb-2">Decisione Finale</h4>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Deliberazione del provvedimento</li>
                  <li>Comunicazione della decisione</li>
                  <li>Indicazione dei termini per il ricorso</li>
                  <li>Avvio delle procedure di recupero</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">19.2 Diritti dell'Impresa</h3>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Diritto di Difesa</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Accesso agli atti del procedimento</li>
              <li>Presentazione di controdeduzioni scritte</li>
              <li>Richiesta di audizione personale</li>
              <li>Assistenza legale durante tutto il procedimento</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Garanzie Procedurali</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Rispetto del contraddittorio</li>
              <li>Congruità dei termini assegnati</li>
              <li>Motivazione analitica del provvedimento</li>
              <li>Indicazione dei mezzi di impugnazione</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">19.3 Strategie Difensive</h3>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Preparazione delle Controdeduzioni</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Analisi dettagliata delle contestazioni</li>
              <li>Raccolta di documentazione probatoria</li>
              <li>Dimostrazione della buona fede</li>
              <li>Evidenziazione di circostanze attenuanti</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Possibili Argomentazioni</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Cause di forza maggiore</li>
              <li>Interpretazione delle norme contrattuali</li>
              <li>Buona fede nell'esecuzione del contratto</li>
              <li>Proporzionalità della sanzione</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
          <h4 className="font-semibold text-green-600 mb-2">Hai bisogno di supporto?</h4>
          <p className="mb-4">La gestione di un procedimento di revoca richiede competenze specialistiche e tempestività. I nostri consulenti legali possono assisterti nella preparazione delle controdeduzioni e nella difesa dei tuoi diritti durante tutto il procedimento.</p>
          <div className="flex items-center">
            <Link href="/contatti" className="text-blue-600 hover:underline mr-6">Contattaci per una consulenza</Link>
            <a href="https://wa.me/+393470087833" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-lg">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.14 4.486c-3.868 0-7.015 3.147-7.015 7.015 0 1.513.469 2.919 1.27 4.075l-1.665 4.975 5.095-1.635a6.979 6.979 0 004.315 1.485c3.868 0 7.015-3.147 7.015-7.015s-3.147-7.015-7.015-7.015h-.005z"/>
            </svg>
            Contattaci su WhatsApp
          </a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProceduraRevocaSection;
