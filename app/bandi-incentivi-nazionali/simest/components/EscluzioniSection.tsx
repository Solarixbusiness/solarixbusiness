import React from 'react';
import Link from 'next/link';

const EscluzioniSection: React.FC = () => {
  return (
    <div className="mb-12">
      <div className="bg-white p-6 border border-green-100 rounded-lg shadow-lg">
        <h2 id="esclusioni" className="text-2xl font-semibold text-green-700 mb-6">4. ESCLUSIONI SETTORIALI E SOGGETTIVE</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">4.1 Esclusioni Settoriali</h3>
          <p className="mb-3">Non sono ammissibili agli interventi agevolativi le imprese operanti nei seguenti settori:</p>
          
          <div className="mb-4">
            <h4 className="font-semibold text-green-600">Settori Esclusi</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Produzione, commercio o altra attività illecita secondo la legislazione italiana</li>
              <li>Produzione o commercio di tabacco e bevande alcoliche distillate</li>
              <li>Produzione o commercio di armi e munizioni</li>
              <li>Casinò, scommesse e imprese equivalenti</li>
              <li>Ricerca, sviluppo o applicazioni tecniche relativi a programmi elettronici specificamente finalizzati a:</li>
              <ul className="list-disc list-inside ml-8">
                <li>Sostenere attività escluse</li>
                <li>Giochi d'azzardo su Internet e casinò online</li>
                <li>Pornografia</li>
              </ul>
              <li>Settore IT che supporta:</li>
              <ul className="list-disc list-inside ml-8">
                <li>Accesso a reti elettroniche di dati per attività illecite</li>
                <li>Download di dati elettronici illegali</li>
              </ul>
            </ul>
          </div>
          
          <div className="mb-4">
            <h4 className="font-semibold text-green-600">Settori con Limitazioni</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Settore finanziario (solo per specifiche attività)</li>
              <li>Trasporto di merci su strada (con limitazioni per acquisto di veicoli)</li>
              <li>Attività immobiliari (con specifiche esclusioni)</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">4.2 Esclusioni Soggettive</h3>
          <p className="mb-3">Sono esclusi dagli interventi agevolativi i soggetti che:</p>
          
          <div className="mb-4">
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Risultano inadempienti o insolventi per operazioni di qualsiasi natura con SIMEST</li>
              <li>Sono sottoposti a procedura concorsuale o si trovano in stato di fallimento</li>
              <li>Sono soggetti a sanzioni finanziarie o misure restrittive imposte dall'UE</li>
              <li>Hanno ricevuto e non rimborsato aiuti dichiarati illegali o incompatibili dalla Commissione Europea</li>
              <li>Sono in condizioni tali da risultare "impresa in difficoltà" secondo la normativa UE</li>
              <li>Non rispettano i requisiti di regolarità contributiva e fiscale</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">4.3 Esclusioni Specifiche per Risorse PNRR</h3>
          <p className="mb-3">Per gli interventi finanziati con risorse PNRR, sono previste ulteriori esclusioni:</p>
          
          <div className="mb-4">
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Attività che non garantiscono il principio DNSH (Do No Significant Harm)</li>
              <li>Attività che non rispettano la normativa ambientale nazionale ed europea</li>
              <li>Attività che violano i principi di non discriminazione e parità di genere</li>
              <li>Progetti che comportano l'uso di combustibili fossili, incluso l'uso a valle</li>
              <li>Attività nell'ambito del sistema di scambio di quote di emissione dell'UE (ETS) che generano emissioni di gas a effetto serra</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
          <h4 className="font-semibold text-green-600 mb-2">Hai bisogno di supporto?</h4>
          <p className="mb-4">Se hai dubbi sulla possibilità di accedere ai finanziamenti in base al tuo settore di attività o alla tua situazione aziendale, il nostro team di consulenti è a tua disposizione per una valutazione preliminare.</p>
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

export default EscluzioniSection;
