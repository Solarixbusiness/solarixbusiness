'use client';

import React from 'react';
import Link from 'next/link';

const ObbrighiSection: React.FC = () => {
  return (
    <div className="mb-12">
      <div className="bg-white p-6 border border-green-100 rounded-lg shadow-lg">
        <h2 id="obblighi" className="text-2xl font-semibold text-green-700 mb-6">15. OBBLIGHI DELL'IMPRESA</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">15.1 Obblighi Durante l'Esecuzione del Progetto</h3>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Gestione Amministrativa</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Utilizzo esclusivo del conto corrente dedicato per tutte le operazioni</li>
              <li>Apposizione del CUP su tutte le fatture e bonifici</li>
              <li>Conservazione di tutta la documentazione per almeno 10 anni</li>
              <li>Comunicazione tempestiva di eventuali variazioni societarie</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Rispetto delle Tempistiche</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Completamento del progetto entro il Periodo di Realizzazione</li>
              <li>Rispetto delle scadenze di rendicontazione intermedia e finale</li>
              <li>Comunicazione preventiva di eventuali ritardi o difficoltà</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Conformità Normativa</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Mantenimento dei requisiti di ammissibilità per tutta la durata del progetto</li>
              <li>Rispetto della normativa fiscale e contributiva</li>
              <li>Conformità alle normative ambientali e di sicurezza</li>
              <li>Rispetto dei principi DNSH per progetti PNRR</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">15.2 Obblighi di Comunicazione</h3>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Comunicazioni Obbligatorie</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Variazioni dell'assetto societario superiori al 25%</li>
              <li>Cambio del legale rappresentante</li>
              <li>Trasferimento della sede legale o operativa</li>
              <li>Avvio di procedure concorsuali o di liquidazione</li>
              <li>Perdita dei requisiti di ammissibilità</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Tempistiche di Comunicazione</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Entro 30 giorni dal verificarsi dell'evento</li>
              <li>Tramite il Portale SIMEST con documentazione di supporto</li>
              <li>Eventuale richiesta di autorizzazione preventiva per alcune variazioni</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">15.3 Obblighi Post-Consolidamento</h3>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Vincoli di Destinazione</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Mantenimento della destinazione d'uso dei beni per almeno 5 anni</li>
              <li>Divieto di cessione senza autorizzazione SIMEST</li>
              <li>Mantenimento dell'attività di internazionalizzazione</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Monitoraggio Periodico</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Invio del bilancio annuale per 3 anni successivi</li>
              <li>Relazione annuale sui risultati dell'internazionalizzazione</li>
              <li>Disponibilità per controlli e verifiche successive</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">15.4 Conseguenze dell'Inadempimento</h3>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Sanzioni Amministrative</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Sospensione delle erogazioni</li>
              <li>Riduzione del contributo a fondo perduto</li>
              <li>Revoca parziale o totale del finanziamento</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Obblighi di Restituzione</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Restituzione delle somme indebitamente percepite</li>
              <li>Applicazione di interessi legali e di mora</li>
              <li>Esclusione da futuri finanziamenti SIMEST</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
          <h4 className="font-semibold text-green-600 mb-2">Hai bisogno di supporto?</h4>
          <p className="mb-4">Il rispetto degli obblighi è fondamentale per mantenere i benefici del finanziamento SIMEST. I nostri consulenti possono aiutarti a gestire tutti gli adempimenti e a evitare inadempimenti che potrebbero compromettere il progetto.</p>
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

export default ObbrighiSection;
