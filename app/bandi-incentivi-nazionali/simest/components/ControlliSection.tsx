import React from 'react';
import Link from 'next/link';

const ControlliSection: React.FC = () => {
  return (
    <div className="mb-12">
      <div className="bg-white p-6 border border-gray-100 rounded-lg shadow-lg">
        <h2 id="controlli" className="text-2xl font-semibold text-gray-800 mb-6">16. CONTROLLI E VERIFICHE</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-3">16.1 Tipologie di Controllo</h3>
          
          <div className="mb-5">
            <h4 className="font-semibold text-gray-700 mb-2">Verifica della Documentazione</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Verifica della documentazione presentata in fase di domanda</li>
              <li>Controllo delle rendicontazioni periodiche</li>
              <li>Verifica della conformità delle spese sostenute</li>
              <li>Controllo della regolarità fiscale e contributiva</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-3">16.2 Tempistiche dei Controlli</h3>
          
          <div className="mb-5">
            <h4 className="font-semibold text-gray-700 mb-2">Controlli Ex-Ante</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Durante la fase istruttoria della domanda</li>
              <li>Prima dell'erogazione del primo anticipo</li>
              <li>Verifica dei requisiti di ammissibilità</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-gray-700 mb-2">Verifica delle Spese</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Guardia di Finanza per controlli fiscali</li>
              <li>Corte dei Conti per controlli di legittimità</li>
              <li>Commissione Europea per progetti PNRR</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-3">16.3 Oggetto dei Controlli</h3>
          
          <div className="mb-5">
            <h4 className="font-semibold text-gray-700 mb-2">Esito Positivo</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Conferma della regolarità del progetto</li>
              <li>Nessuna conseguenza negativa</li>
              <li>Prosecuzione normale del finanziamento</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-gray-700 mb-2">Esito Negativo</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Avvio di procedimento di revoca</li>
              <li>Sospensione delle erogazioni</li>
              <li>Richiesta di restituzione delle somme</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h4 className="font-semibold text-blue-700 mb-2">Hai bisogno di supporto?</h4>
          <p className="mb-4">Una corretta preparazione ai controlli è essenziale per evitare problemi. I nostri consulenti possono aiutarti a organizzare la documentazione e a implementare procedure interne per gestire al meglio eventuali verifiche.</p>
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

export default ControlliSection;
