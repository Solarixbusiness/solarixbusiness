'use client';

import React from 'react';
import Link from 'next/link';

const ProcedureAccessoSection: React.FC = () => {
  return (
    <div className="mb-12">
      <div className="bg-white p-6 border border-green-100 rounded-lg shadow-lg">
        <h2 id="procedure-accesso" className="text-2xl font-semibold text-green-700 mb-6">8. PROCEDURE DI ACCESSO</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">8.1 Fasi della Procedura</h3>
          
          <div className="relative">
            {/* Timeline verticale */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-green-200"></div>
            
            {/* Fase 1: Registrazione */}
            <div className="relative pl-12 pb-8">
              <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">1</div>
              <h4 className="font-semibold text-green-600 mb-2">Registrazione al Portale SIMEST</h4>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Accedere al <a href="https://www.simest.it" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">portale SIMEST</a></li>
                  <li>Registrare l'azienda e creare un account</li>
                  <li>Ottenere le credenziali di accesso</li>
                  <li>Completare il profilo aziendale con i dati richiesti</li>
                </ul>
              </div>
            </div>
            
            {/* Fase 2: Compilazione */}
            <div className="relative pl-12 pb-8">
              <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">2</div>
              <h4 className="font-semibold text-green-600 mb-2">Compilazione della Domanda</h4>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Selezionare la tipologia di intervento desiderato</li>
                  <li>Compilare il formulario online con i dati del progetto</li>
                  <li>Caricare la documentazione richiesta (business plan, bilanci, ecc.)</li>
                  <li>Verificare la completezza delle informazioni inserite</li>
                </ul>
              </div>
            </div>
            
            {/* Fase 3: Presentazione */}
            <div className="relative pl-12 pb-8">
              <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">3</div>
              <h4 className="font-semibold text-green-600 mb-2">Presentazione della Domanda</h4>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Firmare digitalmente la domanda compilata</li>
                  <li>Inviare la domanda tramite il portale</li>
                  <li>Ricevere la conferma di avvenuta presentazione</li>
                  <li>Conservare il numero di protocollo assegnato</li>
                </ul>
              </div>
            </div>
            
            {/* Fase 4: Istruttoria */}
            <div className="relative pl-12 pb-8">
              <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">4</div>
              <h4 className="font-semibold text-green-600 mb-2">Istruttoria</h4>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Verifica formale dei requisiti di ammissibilità</li>
                  <li>Valutazione del merito di credito</li>
                  <li>Analisi tecnica del progetto</li>
                  <li>Eventuale richiesta di integrazioni documentali</li>
                </ul>
              </div>
            </div>
            
            {/* Fase 5: Delibera */}
            <div className="relative pl-12 pb-8">
              <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">5</div>
              <h4 className="font-semibold text-green-600 mb-2">Delibera</h4>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Comunicazione dell'esito (positivo o negativo)</li>
                  <li>In caso positivo, invio della lettera di delibera</li>
                  <li>Indicazione delle condizioni contrattuali</li>
                  <li>Richiesta di documentazione per la stipula</li>
                </ul>
              </div>
            </div>
            
            {/* Fase 6: Stipula */}
            <div className="relative pl-12">
              <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">6</div>
              <h4 className="font-semibold text-green-600 mb-2">Stipula e Erogazione</h4>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Firma del contratto di finanziamento</li>
                  <li>Apertura del conto corrente dedicato (se richiesto)</li>
                  <li>Erogazione dell'anticipo (di norma il 50%)</li>
                  <li>Erogazioni successive legate agli stati di avanzamento</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">8.2 Documentazione Richiesta</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-4">
            <div>
              <h4 className="font-semibold text-green-600 mb-2">Documentazione Amministrativa</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Visura camerale aggiornata</li>
                <li>Ultimi due bilanci approvati</li>
                <li>Situazione economico-patrimoniale infrannuale</li>
                <li>Documento d'identità del legale rappresentante</li>
                <li>Statuto e atto costitutivo</li>
                <li>Dichiarazione De Minimis</li>
                <li>DURC in corso di validità</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-600 mb-2">Documentazione Tecnica</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Business plan del progetto</li>
                <li>Preventivi di spesa dettagliati</li>
                <li>Contratti preliminari (se disponibili)</li>
                <li>Documentazione attestante i requisiti specifici</li>
                <li>Certificazioni aziendali (se presenti)</li>
                <li>Referenze bancarie</li>
                <li>Eventuali garanzie (se richieste)</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
            <p className="font-semibold">Nota:</p>
            <p>La documentazione specifica può variare in base alla tipologia di intervento richiesto e alle caratteristiche dell'impresa richiedente. È consigliabile verificare sul portale SIMEST l'elenco aggiornato dei documenti necessari.</p>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">8.3 Tempistiche</h3>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-green-50">
                  <th className="py-2 px-4 border-b border-r text-left">Fase</th>
                  <th className="py-2 px-4 border-b border-r text-left">Tempistica Media</th>
                  <th className="py-2 px-4 border-b text-left">Note</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b border-r">Dalla presentazione alla delibera</td>
                  <td className="py-2 px-4 border-b border-r">30-60 giorni</td>
                  <td className="py-2 px-4 border-b">Variabile in base alla complessità del progetto</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border-b border-r">Dalla delibera alla stipula</td>
                  <td className="py-2 px-4 border-b border-r">15-30 giorni</td>
                  <td className="py-2 px-4 border-b">Dipende dalla tempestività nel fornire la documentazione richiesta</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-r">Dalla stipula alla prima erogazione</td>
                  <td className="py-2 px-4 border-b border-r">10-20 giorni</td>
                  <td className="py-2 px-4 border-b">Previa verifica delle condizioni contrattuali</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border-b border-r">Durata complessiva del processo</td>
                  <td className="py-2 px-4 border-b border-r">60-90 giorni</td>
                  <td className="py-2 px-4 border-b">Dal primo accesso al portale all'erogazione dell'anticipo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
          <h4 className="font-semibold text-green-600 mb-2">Hai bisogno di supporto?</h4>
          <p className="mb-4">Il nostro team di consulenti può assisterti in tutte le fasi della procedura di accesso al Fondo 394/81, dalla registrazione al portale fino all'erogazione del finanziamento, garantendo una gestione efficiente e priva di errori.</p>
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

export default ProcedureAccessoSection;
