import React from 'react';
import Link from 'next/link';

const ConclusioniSection: React.FC = () => {
  return (
    <div className="mb-12">
      <div className="bg-white p-6 border border-gray-100 rounded-lg shadow-lg">
        <h2 id="conclusioni" className="text-2xl font-semibold text-gray-800 mb-6">24. CONCLUSIONI E CONTATTI</h2>
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Il Fondo 394/81: La Tua Porta d'Accesso ai Mercati Internazionali</h3>
          
          <p className="mb-4">
            Il Fondo 394/81 rappresenta una delle opportunità più significative per le imprese italiane che desiderano espandere la propria presenza sui mercati internazionali. Con le sue diverse linee di intervento e le premialità previste, offre un supporto concreto e mirato per accompagnare le aziende nel loro percorso di crescita globale.
          </p>
          
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h4 className="font-semibold text-blue-700 mb-3">Perché Scegliere SolariX Business per il Tuo Progetto SIMEST</h4>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-gray-700 mb-2">Esperienza Consolidata</h5>
                <ul className="list-disc list-inside space-y-1 ml-2 text-sm">
                  <li>Oltre 200 progetti SIMEST gestiti con successo</li>
                  <li>Tasso di approvazione superiore al 85%</li>
                  <li>Esperienza in tutti i settori produttivi</li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold text-gray-700 mb-2">Servizio Completo</h5>
                <ul className="list-disc list-inside space-y-1 ml-2 text-sm">
                  <li>Analisi preliminare di fattibilità</li>
                  <li>Preparazione e presentazione domanda</li>
                  <li>Gestione dell'iter istruttorio</li>
                  <li>Supporto nella rendicontazione</li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold text-gray-700 mb-2">Efficienza e Rapidità</h5>
                <ul className="list-disc list-inside space-y-1 ml-2 text-sm">
                  <li>Tempi di risposta entro 24 ore</li>
                  <li>Procedure digitalizzate e ottimizzate</li>
                  <li>Monitoraggio costante delle pratiche</li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold text-gray-700 mb-2">Massimizzazione dei Benefici</h5>
                <ul className="list-disc list-inside space-y-1 ml-2 text-sm">
                  <li>Identificazione di tutte le premialità applicabili</li>
                  <li>Ottimizzazione della struttura finanziaria</li>
                  <li>Combinazione con altri incentivi compatibili</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
            <h4 className="font-semibold text-blue-700 mb-3">Inizia Subito il Tuo Progetto di Internazionalizzazione</h4>
            <p className="mb-4">
              Non perdere l'opportunità di accedere ai finanziamenti SIMEST per la tua crescita internazionale. 
              Il nostro team di esperti è pronto ad accompagnarti in ogni fase del processo, dalla valutazione iniziale 
              fino alla rendicontazione finale.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <h5 className="font-semibold text-blue-600 mb-2">📞 Consulenza Telefonica Gratuita</h5>
                <p className="text-sm mb-2">Parla direttamente con i nostri esperti</p>
                <p className="font-semibold text-blue-700">+39 347 008 7833</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg">
                <h5 className="font-semibold text-blue-600 mb-2">📧 Analisi Preliminare via Email</h5>
                <p className="text-sm mb-2">Invia la tua richiesta dettagliata</p>
                <p className="font-semibold text-blue-700">info@solarixbusiness.it</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6">
          <div className="text-center">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Pronto a Trasformare la Tua Visione in Realtà?</h4>
            <p className="text-gray-600 mb-6">
              Contattaci oggi stesso per una consulenza gratuita e scopri come il Fondo 394/81 
              può accelerare la crescita internazionale della tua impresa.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/contatti" 
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Richiedi Consulenza Gratuita
              </Link>
              
              <a 
                href="/contatti" 
                className="inline-flex items-center justify-center bg-gray-600 hover:bg-gray-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Richiedi Informazioni
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConclusioniSection;
