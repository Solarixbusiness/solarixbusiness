'use client';

import React from 'react';
import Link from 'next/link';

const ContoCorrenteSection: React.FC = () => {
  return (
    <div className="mb-12">
      <div className="bg-white p-6 border border-green-100 rounded-lg shadow-lg">
        <h2 id="conto-corrente" className="text-2xl font-semibold text-green-700 mb-6">11. CONTO CORRENTE DEDICATO</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">11.1 Caratteristiche e Requisiti</h3>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Obbligatorietà e Tempistiche</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Obbligatorio per tutte le operazioni relative al finanziamento</li>
              <li>Da attivare <strong>entro 30 giorni</strong> dalla Data di Stipula</li>
              <li>Deve essere intestato all'Impresa Richiedente</li>
              <li>Deve essere un conto corrente bancario o postale</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Utilizzo Esclusivo</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Dedicato <strong>esclusivamente</strong> all'operazione finanziata</li>
              <li>Deve transitare l'intero importo del finanziamento</li>
              <li>Devono transitare tutti i pagamenti delle spese rendicontate</li>
              <li>Devono transitare tutti gli accrediti dei contributi a fondo perduto</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">11.2 Modifiche e Comunicazioni</h3>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Procedura di Modifica</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Possibile modificare il conto corrente dedicato</li>
              <li>Necessaria comunicazione preventiva a SIMEST</li>
              <li>Richiesta tramite Portale SIMEST</li>
              <li>Deve essere effettuata <strong>prima</strong> di utilizzare il nuovo conto</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Documentazione Richiesta</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Comunicazione formale del cambio</li>
              <li>Coordinate bancarie complete del nuovo conto</li>
              <li>Documentazione attestante l'intestazione all'Impresa Richiedente</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">11.3 Anomalie e Deroghe</h3>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Gestione delle Anomalie</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Pagamenti da conti diversi: <strong>non ammissibili</strong></li>
              <li>Pagamenti ricevuti su conti diversi: richiedono sanatoria</li>
              <li>Sanatoria: trasferimento immediato sul conto dedicato</li>
              <li>Documentazione della sanatoria: estratti conto di entrambi i conti</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Deroghe Possibili</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Pagamenti in valuta estera: possibile utilizzo di conti in valuta</li>
              <li>Condizione: trasferimento immediato da/verso il conto dedicato</li>
              <li>Documentazione: estratti conto di entrambi i conti</li>
              <li>Pagamenti con carta di credito aziendale: ammessi con addebito sul conto dedicato</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">11.4 Conseguenze di Non Conformità</h3>
          
          <div className="mb-5">
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Mancata attivazione: possibile revoca del finanziamento</li>
              <li>Utilizzo improprio: non ammissibilità delle spese</li>
              <li>Mancata sanatoria: esclusione delle spese dalla rendicontazione</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
          <h4 className="font-semibold text-green-600 mb-2">Hai bisogno di supporto?</h4>
          <p className="mb-4">La corretta gestione del conto corrente dedicato è fondamentale per evitare problemi con il finanziamento SIMEST. I nostri consulenti possono aiutarti a impostare correttamente le procedure amministrative e bancarie necessarie.</p>
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

export default ContoCorrenteSection;
