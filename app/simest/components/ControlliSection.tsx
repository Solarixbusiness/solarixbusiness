'use client';

import React from 'react';
import Link from 'next/link';

const ControlliSection: React.FC = () => {
  return (
    <div className="mb-12">
      <div className="bg-white p-6 border border-green-100 rounded-lg shadow-lg">
        <h2 id="controlli" className="text-2xl font-semibold text-green-700 mb-6">20. CONTROLLI E VERIFICHE</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">20.1 Tipologie di Controlli</h3>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Controlli Documentali</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Verifica della documentazione presentata in fase di domanda</li>
              <li>Controllo delle rendicontazioni periodiche</li>
              <li>Verifica della conformità delle spese sostenute</li>
              <li>Controllo della regolarità fiscale e contributiva</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Controlli in Loco</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Sopralluoghi presso la sede dell'impresa</li>
              <li>Verifica fisica dei beni acquistati</li>
              <li>Controllo dell'effettiva realizzazione del progetto</li>
              <li>Verifica del mantenimento dei requisiti</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Controlli a Campione</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Selezione casuale di progetti da verificare</li>
              <li>Controlli approfonditi su specifiche tipologie</li>
              <li>Verifiche incrociate con altre banche dati</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">20.2 Tempistiche dei Controlli</h3>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Controlli Ex-Ante</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Durante la fase istruttoria della domanda</li>
              <li>Prima dell'erogazione del primo anticipo</li>
              <li>Verifica dei requisiti di ammissibilità</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Controlli in Itinere</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Durante l'esecuzione del progetto</li>
              <li>In occasione delle rendicontazioni intermedie</li>
              <li>Monitoraggio continuo dello stato di avanzamento</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Controlli Ex-Post</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Dopo il consolidamento del progetto</li>
              <li>Controlli periodici nei 5 anni successivi</li>
              <li>Verifiche del mantenimento dei vincoli</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">20.3 Soggetti Controllori</h3>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">SIMEST</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Controlli ordinari sui progetti finanziati</li>
              <li>Verifiche tecniche e amministrative</li>
              <li>Monitoraggio del rispetto degli obblighi contrattuali</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Ministero degli Affari Esteri</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Controlli di secondo livello</li>
              <li>Verifiche sulla coerenza con le politiche di internazionalizzazione</li>
              <li>Controlli su progetti di particolare rilevanza</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Altri Organismi</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Guardia di Finanza per controlli fiscali</li>
              <li>Corte dei Conti per controlli di legittimità</li>
              <li>Commissione Europea per progetti PNRR</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">20.4 Preparazione ai Controlli</h3>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Documentazione da Tenere Disponibile</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Tutta la documentazione amministrativa e contabile</li>
              <li>Contratti, fatture e documenti di pagamento</li>
              <li>Estratti conto del conto corrente dedicato</li>
              <li>Documentazione fotografica dei beni acquistati</li>
              <li>Relazioni tecniche e di avanzamento</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Organizzazione Aziendale</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Designazione di un referente per i controlli</li>
              <li>Archiviazione ordinata della documentazione</li>
              <li>Sistema di tracciabilità delle spese</li>
              <li>Procedure interne di controllo</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">20.5 Esiti dei Controlli</h3>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Controllo Positivo</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Conferma della regolarità del progetto</li>
              <li>Nessuna conseguenza negativa</li>
              <li>Prosecuzione normale del finanziamento</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Controllo con Rilievi</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Richiesta di chiarimenti o integrazioni</li>
              <li>Possibili riduzioni del finanziamento</li>
              <li>Prescrizioni per il futuro</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Controllo Negativo</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Avvio di procedimento di revoca</li>
              <li>Sospensione delle erogazioni</li>
              <li>Richiesta di restituzione delle somme</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
          <h4 className="font-semibold text-green-600 mb-2">Hai bisogno di supporto?</h4>
          <p className="mb-4">Una corretta preparazione ai controlli è essenziale per evitare problemi. I nostri consulenti possono aiutarti a organizzare la documentazione e a implementare procedure interne per gestire al meglio eventuali verifiche.</p>
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

export default ControlliSection;
