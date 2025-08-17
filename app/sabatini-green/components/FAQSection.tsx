import React from 'react';

interface FAQSectionProps {
  activeSection: string | null;
  toggleSection: (sectionId: string) => void;
}

const FAQSection: React.FC<FAQSectionProps> = ({ activeSection, toggleSection }) => {
  return (
    <div id="faq" className="mb-10">
      <button 
        onClick={() => toggleSection('faq')} 
        className="w-full flex justify-between items-center bg-green-600 text-white p-4 rounded-lg shadow hover:bg-green-700 transition duration-300"
      >
        <h2 className="text-xl md:text-2xl font-semibold">9. FAQ - Domande Frequenti</h2>
        <span>{activeSection === 'faq' ? '−' : '+'}</span>
      </button>
      
      {activeSection === 'faq' && (
        <div className="bg-white p-6 rounded-b-lg shadow-md border-l-2 border-r-2 border-b-2 border-green-200">
          <h3 className="text-xl font-semibold mb-6 text-green-700">Domande Frequenti sulla Nuova Sabatini Green</h3>
          
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <h4 className="text-lg font-medium mb-2 text-green-600">Quali sono i vantaggi della Sabatini Green rispetto alla Sabatini ordinaria?</h4>
              <p>La Sabatini Green offre un contributo maggiorato (3,575% contro il 2,75% standard) per investimenti in beni strumentali a basso impatto ambientale. Inoltre, garantisce una priorità nell'accesso ai fondi e procedure di valutazione più rapide.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h4 className="text-lg font-medium mb-2 text-green-600">È possibile cumulare la Sabatini Green con altre agevolazioni?</h4>
              <p>Sì, è possibile cumulare la Sabatini Green con altre agevolazioni pubbliche, inclusi i crediti d'imposta, purché il totale delle agevolazioni non superi il costo dell'investimento. È importante verificare le specifiche regole di cumulabilità per ogni incentivo.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h4 className="text-lg font-medium mb-2 text-green-600">Quali documenti servono per attestare la natura "green" dell'investimento?</h4>
              <p>È necessaria una dichiarazione del fornitore che attesti le caratteristiche ambientali del bene, specificando il risparmio energetico o la riduzione dell'impatto ambientale. Per alcune categorie di beni, possono essere richieste certificazioni specifiche o perizie tecniche.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h4 className="text-lg font-medium mb-2 text-green-600">Cosa succede se l'investimento viene completato in ritardo?</h4>
              <p>L'investimento deve essere completato entro 12 mesi dalla stipula del contratto di finanziamento. In caso di ritardo, è possibile richiedere una proroga motivata, che deve essere approvata. Se il ritardo non è giustificato o la proroga non viene concessa, si rischia la revoca dell'agevolazione.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h4 className="text-lg font-medium mb-2 text-green-600">È possibile sostituire i beni acquistati durante il periodo vincolato?</h4>
              <p>I beni acquistati devono essere mantenuti nell'unità produttiva per almeno 3 anni. È possibile sostituirli solo in caso di guasto irreparabile, previa comunicazione al MIMIT, e solo con beni con caratteristiche tecniche uguali o superiori.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h4 className="text-lg font-medium mb-2 text-green-600">Come viene erogato il contributo per importi elevati?</h4>
              <p>Per finanziamenti fino a €200.000, il contributo viene erogato in un'unica soluzione. Per importi superiori, viene erogato in più quote annuali. La prima quota viene erogata entro 30 giorni dalla richiesta completa, le successive a cadenza annuale senza necessità di ulteriori richieste.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h4 className="text-lg font-medium mb-2 text-green-600">Cosa succede in caso di estinzione anticipata del finanziamento?</h4>
              <p>In caso di estinzione anticipata del finanziamento, il contributo viene ricalcolato in base all'effettiva durata del finanziamento. L'impresa deve comunicare l'estinzione anticipata al MIMIT, che provvederà a ricalcolare l'importo del contributo spettante.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h4 className="text-lg font-medium mb-2 text-green-600">È possibile richiedere la Sabatini Green per beni usati?</h4>
              <p>No, la Sabatini Green è riservata esclusivamente all'acquisto di beni nuovi di fabbrica. I beni usati, anche se ricondizionati o rigenerati, non sono ammissibili all'agevolazione.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-2 text-green-600">Quali sono i tempi medi di approvazione della domanda?</h4>
              <p>I tempi medi di approvazione variano in base al volume di domande e alla completezza della documentazione presentata. Indicativamente, dalla presentazione della domanda alla delibera della banca possono trascorrere 30-60 giorni, mentre per la concessione del contributo da parte del MIMIT possono essere necessari ulteriori 30-60 giorni.</p>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-8">
            <p className="font-semibold text-blue-800">Hai altre domande?</p>
            <p className="mt-2">Il team di SolariX Business è a tua disposizione per chiarire qualsiasi dubbio sulla Nuova Sabatini Green e per supportarti in tutte le fasi della richiesta. Contattaci per una consulenza personalizzata e scopri come possiamo aiutarti a ottimizzare il tuo investimento.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQSection;
