import React from 'react';

interface BenefitsSectionProps {
  activeSection: string | null;
  toggleSection: (sectionId: string) => void;
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({ activeSection, toggleSection }) => {
  return (
    <div id="agevolazioni" className="mb-10">
      <button 
        onClick={() => toggleSection('agevolazioni')} 
        className="w-full flex justify-between items-center bg-green-600 text-white p-4 rounded-lg shadow hover:bg-green-700 transition duration-300"
      >
        <h2 className="text-xl md:text-2xl font-semibold">3. Agevolazioni e Benefici</h2>
        <span>{activeSection === 'agevolazioni' ? '−' : '+'}</span>
      </button>
      
      {activeSection === 'agevolazioni' && (
        <div className="bg-white p-6 rounded-b-lg shadow-md border-l-2 border-r-2 border-b-2 border-green-200">
          <h3 className="text-xl font-semibold mb-3 text-green-700">Tipologia di Agevolazione</h3>
          <p>La Nuova Sabatini Green prevede un <strong>contributo in conto interessi</strong> che riduce significativamente il costo del finanziamento per l'acquisto di beni strumentali green.</p>
          
          <div className="mt-6">
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h4 className="text-2xl font-bold mb-2 text-green-600">3,575% annuo</h4>
              <p className="text-lg">Tasso di contributo per investimenti Green</p>
              <p className="text-sm text-gray-600 mt-1">Superiore al 2,75% della Sabatini ordinaria</p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 mt-8 text-green-700">Calcolo del Contributo</h3>
          <p>Il contributo viene calcolato applicando il tasso del 3,575% annuo all'importo del finanziamento, per una durata massima di 5 anni.</p>
          
          <div className="mt-6">
            <h4 className="text-lg font-medium mb-3 text-green-600">Esempio Pratico di Calcolo</h4>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Investimento:</strong> €100.000</p>
                  <p><strong>Finanziamento:</strong> €80.000 (80%)</p>
                  <p><strong>Durata:</strong> 5 anni</p>
                  <p><strong>Tasso contributo:</strong> 3,575% annuo</p>
                </div>
                <div>
                  <p><strong>Contributo annuo:</strong> €2.860</p>
                  <p><strong>Contributo totale:</strong> €14.300</p>
                  <p><strong>Risparmio effettivo:</strong> €14.300</p>
                  <p className="text-green-600 font-semibold">Costo finanziamento ridotto del 17,9%</p>
                </div>
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 mt-8 text-green-700">Limiti e Parametri</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="text-lg font-medium mb-2 text-green-600">Limiti di Finanziamento</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Importo minimo: €20.000</li>
                <li>Importo massimo: €4.000.000</li>
                <li>Percentuale max finanziabile: 100% dell'investimento</li>
                <li>Durata: da 2 a 6 anni</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="text-lg font-medium mb-2 text-green-600">Parametri del Contributo</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Tasso: 3,575% annuo</li>
                <li>Durata massima contributo: 5 anni</li>
                <li>Erogazione: in quote annuali</li>
                <li>Contributo massimo: €143.000 per operazione</li>
              </ul>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 mt-8 text-green-700">Modalità di Erogazione</h3>
          
          <div className="mt-4 space-y-6">
            <div className="flex items-start">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="font-bold">1</span>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium mb-1 text-green-600">Finanziamenti fino a €200.000</h4>
                <p>Il contributo viene erogato in un'unica soluzione dopo la realizzazione dell'investimento</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="font-bold">2</span>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium mb-1 text-green-600">Finanziamenti superiori a €200.000</h4>
                <p>Il contributo viene erogato in più quote annuali, con la prima quota dopo la realizzazione dell'investimento</p>
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 mt-8 text-green-700">Cumulabilità con Altri Incentivi</h3>
          <p>La Nuova Sabatini Green può essere cumulata con altre agevolazioni pubbliche, purché il totale non superi il costo dell'investimento:</p>
          
          <div className="mt-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="text-lg font-medium mb-2 text-green-600">✅ Cumulabile con:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Credito d'imposta Industria 4.0</li>
                  <li>Credito d'imposta per investimenti nel Mezzogiorno</li>
                  <li>Incentivi regionali e locali</li>
                  <li>Fondi europei (con limitazioni)</li>
                  <li>Altre agevolazioni in conto capitale</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h4 className="text-lg font-medium mb-2 text-red-600">❌ Non cumulabile con:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Altri contributi in conto interessi</li>
                  <li>Agevolazioni che superano il 100% del costo</li>
                  <li>Incentivi con divieto espresso di cumulo</li>
                  <li>Misure incompatibili per normativa UE</li>
                </ul>
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 mt-8 text-green-700">Vantaggi Competitivi</h3>
          
          <div className="mt-4 space-y-4">
            <div className="flex items-center bg-green-50 p-3 rounded-lg">
              <div className="text-green-600 mr-3">💰</div>
              <div>
                <h4 className="font-medium text-green-600">Riduzione Significativa dei Costi</h4>
                <p className="text-sm">Il contributo può ridurre il costo effettivo del finanziamento fino al 20%</p>
              </div>
            </div>
            
            <div className="flex items-center bg-green-50 p-3 rounded-lg">
              <div className="text-green-600 mr-3">⚡</div>
              <div>
                <h4 className="font-medium text-green-600">Accesso Prioritario</h4>
                <p className="text-sm">Le domande Green hanno precedenza nella valutazione rispetto alla Sabatini ordinaria</p>
              </div>
            </div>
            
            <div className="flex items-center bg-green-50 p-3 rounded-lg">
              <div className="text-green-600 mr-3">🌱</div>
              <div>
                <h4 className="font-medium text-green-600">Sostenibilità Ambientale</h4>
                <p className="text-sm">Investimenti che migliorano l'impronta ambientale e la reputazione aziendale</p>
              </div>
            </div>
            
            <div className="flex items-center bg-green-50 p-3 rounded-lg">
              <div className="text-green-600 mr-3">📈</div>
              <div>
                <h4 className="font-medium text-green-600">Competitività Futura</h4>
                <p className="text-sm">Preparazione alle normative ambientali sempre più stringenti</p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-6">
            <p className="font-semibold text-blue-800">Simulazione Personalizzata</p>
            <p className="mt-2">SolariX Business offre un servizio di simulazione gratuita per calcolare il contributo spettante al tuo investimento. Contattaci per una valutazione personalizzata e scopri quanto puoi risparmiare con la Nuova Sabatini Green.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BenefitsSection;
