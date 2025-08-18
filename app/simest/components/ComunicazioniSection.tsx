'use client';

import React from 'react';
import Link from 'next/link';

const ComunicazioniSection: React.FC = () => {
  return (
    <div className="mb-12">
      <div className="bg-white p-6 border border-green-100 rounded-lg shadow-lg">
        <h2 id="comunicazioni" className="text-2xl font-semibold text-green-700 mb-6">21. COMUNICAZIONI CON SIMEST</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">21.1 Canali di Comunicazione</h3>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Portale SIMEST</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Canale principale per tutte le comunicazioni ufficiali</li>
              <li>Accesso con credenziali aziendali</li>
              <li>Messaggistica integrata per comunicazioni bidirezionali</li>
              <li>Notifiche automatiche per scadenze e aggiornamenti</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">PEC (Posta Elettronica Certificata)</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Per comunicazioni formali e ufficiali</li>
              <li>Valore legale equivalente alla raccomandata</li>
              <li>Obbligatoria per alcune tipologie di comunicazioni</li>
              <li>Conservazione automatica delle ricevute</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Altri Canali</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Email ordinaria per comunicazioni informali</li>
              <li>Telefono per chiarimenti urgenti</li>
              <li>Fax per documentazione di supporto</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">21.2 Tipologie di Comunicazioni</h3>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Comunicazioni Obbligatorie</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Variazioni societarie significative</li>
              <li>Cambio del legale rappresentante</li>
              <li>Trasferimento di sede</li>
              <li>Avvio di procedure concorsuali</li>
              <li>Perdita dei requisiti di ammissibilità</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Comunicazioni Periodiche</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Rendicontazioni intermedie e finali</li>
              <li>Relazioni di avanzamento progetto</li>
              <li>Bilanci annuali post-consolidamento</li>
              <li>Aggiornamenti sullo stato del progetto</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Richieste di Autorizzazione</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Modifiche al progetto approvato</li>
              <li>Proroghe dei termini</li>
              <li>Variazioni del conto corrente dedicato</li>
              <li>Cessione di beni finanziati</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">21.3 Tempistiche e Scadenze</h3>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Comunicazioni Urgenti</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Entro 10 giorni per situazioni di emergenza</li>
              <li>Immediate per procedure concorsuali</li>
              <li>Tempestive per eventi che compromettono il progetto</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Comunicazioni Ordinarie</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Entro 30 giorni per variazioni societarie</li>
              <li>Secondo le scadenze contrattuali per rendicontazioni</li>
              <li>Entro i termini specificati per richieste di autorizzazione</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">21.4 Buone Pratiche</h3>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Gestione delle Comunicazioni</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Designare un referente aziendale per i rapporti con SIMEST</li>
              <li>Mantenere aggiornati i contatti aziendali</li>
              <li>Conservare copia di tutte le comunicazioni inviate e ricevute</li>
              <li>Rispondere tempestivamente alle richieste di chiarimenti</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Qualità delle Comunicazioni</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Utilizzare un linguaggio chiaro e professionale</li>
              <li>Fornire informazioni complete e accurate</li>
              <li>Allegare tutta la documentazione richiesta</li>
              <li>Verificare la correttezza dei dati prima dell'invio</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
          <h4 className="font-semibold text-green-600 mb-2">Hai bisogno di supporto?</h4>
          <p className="mb-4">Una comunicazione efficace con SIMEST è fondamentale per il successo del progetto. I nostri consulenti possono aiutarti a gestire tutte le comunicazioni e a rispettare le scadenze previste.</p>
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

export default ComunicazioniSection;
