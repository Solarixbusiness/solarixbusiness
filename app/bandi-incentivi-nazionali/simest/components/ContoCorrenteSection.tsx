import React from 'react';
import Link from 'next/link';

const ContoCorrenteSection: React.FC = () => {
  return (
    <div className="mb-12">
      <div className="bg-white p-6 border border-gray-100 rounded-lg shadow-lg">
        <h2 id="conto-corrente" className="text-2xl font-semibold text-gray-800 mb-6">15. CONTO CORRENTE DEDICATO</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-3">15.1 Caratteristiche e Requisiti</h3>
          
          <div className="mb-5">
            <h4 className="font-semibold text-gray-700 mb-2">Obbligatorietà e Tempistiche</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Obbligatorio per tutte le operazioni relative al finanziamento</li>
              <li>Da attivare <strong>entro 30 giorni</strong> dalla Data di Stipula</li>
              <li>Deve essere intestato all'Impresa Richiedente</li>
              <li>Deve essere un conto corrente bancario o postale</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-gray-700 mb-2">Operazioni Vietate</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Dedicato <strong>esclusivamente</strong> all'operazione finanziata</li>
              <li>Deve transitare l'intero importo del finanziamento</li>
              <li>Devono transitare tutti i pagamenti delle spese rendicontate</li>
              <li>Devono transitare tutti gli accrediti dei contributi a fondo perduto</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-3">15.1 Obbligo di Apertura</h3>
          
          <div className="mb-5">
            <h4 className="font-semibold text-gray-700 mb-2">Caratteristiche del Conto</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Pagamenti da conti diversi: <strong>non ammissibili</strong></li>
              <li>Pagamenti ricevuti su conti diversi: richiedono sanatoria</li>
              <li>Sanatoria: trasferimento immediato sul conto dedicato</li>
              <li>Documentazione della sanatoria: estratti conto di entrambi i conti</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-gray-700 mb-2">Operazioni Consentite</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Pagamenti in valuta estera: possibile utilizzo di conti in valuta</li>
              <li>Condizione: trasferimento immediato da/verso il conto dedicato</li>
              <li>Documentazione: estratti conto di entrambi i conti</li>
              <li>Pagamenti con carta di credito aziendale: ammessi con addebito sul conto dedicato</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h4 className="font-semibold text-blue-700 mb-2">Hai bisogno di supporto?</h4>
          <p className="mb-4">La corretta gestione del conto corrente dedicato è fondamentale per evitare problemi con il finanziamento SIMEST. I nostri consulenti possono aiutarti a impostare correttamente le procedure amministrative e bancarie necessarie.</p>
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

export default ContoCorrenteSection;
