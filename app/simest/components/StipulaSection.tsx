'use client';

import React from 'react';
import Link from 'next/link';

const StipulaSection: React.FC = () => {
  return (
    <div className="mb-12">
      <div className="bg-white p-6 border border-green-100 rounded-lg shadow-lg">
        <h2 id="stipula-contratto" className="text-2xl font-semibold text-green-700 mb-6">22. STIPULA DEL CONTRATTO</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">22.1 Procedura di Stipula</h3>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Documentazione Richiesta</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Visura camerale aggiornata (non oltre 30 giorni)</li>
              <li>Documento d'identità del legale rappresentante</li>
              <li>Codice fiscale dell'impresa</li>
              <li>Coordinate bancarie del conto corrente dedicato</li>
              <li>Eventuale documentazione integrativa richiesta</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Modalità di Sottoscrizione</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Firma digitale del contratto tramite il Portale SIMEST</li>
              <li>Utilizzo di certificato di firma digitale valido</li>
              <li>Verifica dell'identità del sottoscrittore</li>
              <li>Conservazione digitale del contratto sottoscritto</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">22.2 Contenuti del Contratto</h3>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Elementi Essenziali</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Importo del finanziamento agevolato</li>
              <li>Quota del contributo a fondo perduto</li>
              <li>Tasso di interesse applicato</li>
              <li>Durata del finanziamento e modalità di rimborso</li>
              <li>Periodo di realizzazione del progetto</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Obblighi dell'Impresa</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Utilizzo delle risorse secondo il progetto approvato</li>
              <li>Rispetto delle scadenze di rendicontazione</li>
              <li>Mantenimento dei requisiti di ammissibilità</li>
              <li>Comunicazione di variazioni significative</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Condizioni Risolutive</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Cause di risoluzione anticipata del contratto</li>
              <li>Conseguenze dell'inadempimento</li>
              <li>Modalità di recupero delle somme erogate</li>
              <li>Clausole di salvaguardia per SIMEST</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">22.3 Tempistiche</h3>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Scadenze per la Stipula</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Termine massimo: 60 giorni dalla comunicazione di delibera positiva</li>
              <li>Possibile proroga di 30 giorni per giustificati motivi</li>
              <li>Decadenza automatica in caso di mancata stipula nei termini</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Effetti della Stipula</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Perfezionamento del rapporto contrattuale</li>
              <li>Inizio del periodo di realizzazione del progetto</li>
              <li>Attivazione delle procedure di erogazione</li>
              <li>Decorrenza degli obblighi contrattuali</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">22.4 Aspetti Legali</h3>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Natura Giuridica</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Contratto di diritto pubblico</li>
              <li>Sottoposto alla giurisdizione amministrativa</li>
              <li>Applicazione delle norme sui contratti pubblici</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Modifiche Contrattuali</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Possibili solo con accordo scritto delle parti</li>
              <li>Necessaria autorizzazione preventiva di SIMEST</li>
              <li>Rispetto dei vincoli normativi vigenti</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
          <h4 className="font-semibold text-green-600 mb-2">Hai bisogno di supporto?</h4>
          <p className="mb-4">La stipula del contratto è un momento cruciale che richiede attenzione ai dettagli. I nostri consulenti possono assisterti nella preparazione della documentazione e nella comprensione degli obblighi contrattuali.</p>
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

export default StipulaSection;
