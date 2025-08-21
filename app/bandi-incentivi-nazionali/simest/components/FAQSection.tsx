import React from 'react';
import Link from 'next/link';

const FAQSection: React.FC = () => {
  return (
    <div className="mb-12">
      <div className="bg-white p-6 border border-green-100 rounded-lg shadow-lg">
        <h2 id="faq" className="text-2xl font-semibold text-green-700 mb-6">23. FAQ - DOMANDE FREQUENTI</h2>
        <div className="space-y-6">
          <div className="border-b border-gray-200 pb-4">
            <h4 className="font-semibold text-green-600 mb-2">1. Posso presentare più domande contemporaneamente?</h4>
            <p>Sì, è possibile presentare più domande per diverse tipologie di intervento, purché ogni progetto sia distinto e non ci sia sovrapposizione di spese. Ogni domanda sarà valutata separatamente.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h4 className="font-semibold text-green-600 mb-2">2. Quanto tempo ho per utilizzare il finanziamento?</h4>
            <p>Il periodo di realizzazione è di 24 mesi dalla data di stipula del contratto, con possibilità di proroga di ulteriori 6 mesi. Tutte le spese devono essere sostenute entro questo periodo.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h4 className="font-semibold text-green-600 mb-2">3. Il CUP è obbligatorio su tutte le fatture?</h4>
            <p>Sì, il CUP (Codice Unico di Progetto) deve essere riportato su tutte le fatture e bonifici relativi alle spese ammissibili. L'assenza del CUP comporta l'inammissibilità della spesa.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h4 className="font-semibold text-green-600 mb-2">4. Posso modificare il progetto dopo l'approvazione?</h4>
            <p>Modifiche sostanziali al progetto richiedono autorizzazione preventiva da parte di SIMEST. Modifiche minori possono essere accettate in fase di rendicontazione, purché coerenti con gli obiettivi originali.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h4 className="font-semibold text-green-600 mb-2">5. Cosa succede se non rispetto le scadenze di rendicontazione?</h4>
            <p>Il mancato rispetto delle scadenze di rendicontazione può comportare la revoca del finanziamento. È importante comunicare tempestivamente eventuali difficoltà a SIMEST per valutare soluzioni alternative.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h4 className="font-semibold text-green-600 mb-2">6. Il finanziamento è cumulabile con altri incentivi?</h4>
            <p>Sì, nel rispetto dei limiti "de minimis" e purché non ci sia doppio finanziamento per le stesse spese. È necessaria una valutazione caso per caso della compatibilità con altri incentivi.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h4 className="font-semibold text-green-600 mb-2">7. Posso utilizzare fornitori esteri?</h4>
            <p>Sì, è possibile utilizzare fornitori esteri per le spese ammissibili, purché siano rispettate tutte le procedure di pagamento tramite il conto corrente dedicato e la documentazione sia conforme.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h4 className="font-semibold text-green-600 mb-2">8. Cosa succede in caso di revoca del finanziamento?</h4>
            <p>In caso di revoca, l'impresa deve restituire tutte le somme erogate maggiorate di interessi legali. È possibile presentare ricorso entro 60 giorni dalla comunicazione di revoca.</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-green-600 mb-2">9. Come posso monitorare lo stato della mia pratica?</h4>
            <p>È possibile monitorare lo stato della pratica accedendo al portale SIMEST con le proprie credenziali. Il sistema fornisce aggiornamenti in tempo reale su tutte le fasi del processo.</p>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
          <h4 className="font-semibold text-green-600 mb-2">Hai altre domande?</h4>
          <p className="mb-4">Se hai domande specifiche non coperte in questa sezione, il nostro team di esperti è a tua disposizione per fornirti risposte personalizzate e dettagliate.</p>
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

export default FAQSection;
