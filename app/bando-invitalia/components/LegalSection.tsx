'use client';

import React from 'react';

export default function LegalSection() {
  return (
    <>
      {/* Note Legali e Disclaimer */}
      <div className="bg-gray-50 p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">⚖️ NOTE LEGALI E DISCLAIMER</h2>
        
        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">📋 Informazioni Generali</h3>
            <p className="mb-2">Le informazioni contenute in questa pagina sono basate sul Bando Invitalia per il sostegno alle PMI per investimenti in efficienza energetica e sono aggiornate alla data di pubblicazione.</p>
            <p>Solarix Business si impegna a fornire informazioni accurate, tuttavia si raccomanda di verificare sempre i dettagli più aggiornati direttamente sul sito ufficiale di Invitalia.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">⚠️ Disclaimer</h3>
            <ul className="space-y-2">
              <li>• I contributi indicati sono soggetti a disponibilità delle risorse del bando</li>
              <li>• L'approvazione delle domande dipende dalla valutazione di Invitalia secondo i criteri del bando</li>
              <li>• I tempi di erogazione possono variare in base alle procedure amministrative</li>
              <li>• Tutti i prezzi sono indicativi e soggetti a preventivo personalizzato</li>
              <li>• Le performance degli impianti possono variare in base alle condizioni specifiche</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">📞 Contatti per Informazioni</h3>
            <p className="mb-2">Per informazioni dettagliate e aggiornamenti sul bando, contattare direttamente:</p>
            <ul className="space-y-1">
              <li>• <strong>Invitalia:</strong> www.invitalia.it</li>
              <li>• <strong>Solarix Business:</strong> info@solarixbusiness.it</li>
              <li>• <strong>Telefono:</strong> +39 02 1234 5678</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Scadenze */}
      <div className="bg-red-50 p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-3xl font-bold text-red-800 mb-6">⏰ SCADENZE CRUCIALI - NON PERDETE L'OPPORTUNITÀ</h2>
        
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-red-700 mb-4">📅 Calendario Secondo Sportello 2025</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border-2 border-red-200">
              <h4 className="text-xl font-semibold text-red-700 mb-2">⏰ Apertura domande</h4>
              <p className="text-lg font-bold text-red-600">8 luglio 2025, ore 12:00</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-red-200">
              <h4 className="text-xl font-semibold text-red-700 mb-2">⏰ Chiusura domande</h4>
              <p className="text-lg font-bold text-red-600">30 settembre 2025, ore 12:00</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-red-200">
              <h4 className="text-xl font-semibold text-red-700 mb-2">⏰ Modalità</h4>
              <p className="text-lg font-bold text-red-600">Esclusivamente online tramite piattaforma Invitalia</p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-yellow-800 mb-4">🏆 Come Gestiamo la Vostra Candidatura</h3>
          <p className="text-gray-700 mb-2">Solarix Business coordina tutto per voi:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>📊 Graduatoria basata su criteri valutativi rigorosi</li>
            <li>🎯 Assegnazione fino ad esaurimento risorse</li>
            <li>📋 Pubblicazione risultati entro 60 giorni dalla chiusura</li>
          </ul>
        </div>
      </div>
    </>
  );
}
