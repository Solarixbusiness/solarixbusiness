'use client';

import React from 'react';
import Link from 'next/link';

const TimingSection: React.FC = () => {
  return (
    <div className="mb-12">
      <div className="bg-white p-6 border border-green-100 rounded-lg shadow-lg">
        <h2 id="timing-sostenibilita" className="text-2xl font-semibold text-green-700 mb-6">10. TIMING E SOSTENIBILITÀ DELLE SPESE</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">10.1 Regole Temporali Fondamentali</h3>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Data di Sostenimento</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Le spese sono ammissibili solo se sostenute <strong>DOPO</strong> la data di presentazione della domanda</li>
              <li>Eccezione: diversa data stabilita da circolare operativa</li>
              <li>Per PNRR: spese sostenibili dalla data di ricezione del CUP</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Periodo di Realizzazione</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Inizio: dalla ricezione del CUP</li>
              <li>Fine: 24 mesi dopo la Data di Stipula</li>
              <li>Proroga possibile: 6 mesi aggiuntivi</li>
              <li>Tutte le attività devono essere svolte in questo periodo</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">10.2 Definizione di "Spesa Sostenuta"</h3>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Criteri di Sostenimento</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Si considera sostenuta alla data dell'effettivo pagamento</li>
              <li>Tramite il Conto Corrente Dedicato</li>
              <li>Pagamenti per compensazione <strong>NON</strong> ammissibili</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Eccezione per Consulenze Pre-Domanda</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Attività svolta prima della domanda: ammissibile</li>
              <li>Condizioni: pagamento dopo il CUP e nel Periodo di Realizzazione</li>
              <li>Solo per consulenze relative alla presentazione della domanda</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">10.3 Gestione degli Acconti</h3>
          
          <div className="mb-5">
            <h4 className="font-semibold text-green-600 mb-2">Acconti Versati</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Acconti versati possono essere integrati</li>
              <li>Condizione: restante fattura emessa nel Periodo di Realizzazione</li>
              <li>Coerenza temporale richiesta tra acconto e saldo</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
          <h4 className="font-semibold text-green-600 mb-2">Hai bisogno di supporto?</h4>
          <p className="mb-4">La corretta gestione temporale delle spese è cruciale per l'ammissibilità al finanziamento. I nostri esperti possono aiutarti a pianificare correttamente le tempistiche del tuo progetto per massimizzare l'accesso ai fondi.</p>
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

export default TimingSection;
