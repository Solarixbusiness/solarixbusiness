import React from 'react';

interface RequirementsSectionProps {
  activeSection: string | null;
  toggleSection: (sectionId: string) => void;
}

const RequirementsSection: React.FC<RequirementsSectionProps> = ({ activeSection, toggleSection }) => {
  return (
    <div id="requisiti" className="mb-10">
      <button 
        onClick={() => toggleSection('requisiti')} 
        className="w-full flex justify-between items-center bg-green-600 text-white p-4 rounded-lg shadow hover:bg-green-700 transition duration-300"
      >
        <h2 className="text-xl md:text-2xl font-semibold">2. Requisiti di Accesso</h2>
        <span>{activeSection === 'requisiti' ? '−' : '+'}</span>
      </button>
      
      {activeSection === 'requisiti' && (
        <div className="bg-white p-6 rounded-b-lg shadow-md border-l-2 border-r-2 border-b-2 border-green-200">
          <h3 className="text-xl font-semibold mb-3 text-green-700">Requisiti Soggettivi</h3>
          <p>Per accedere alla Nuova Sabatini Green, l'impresa deve possedere specifici requisiti soggettivi:</p>
          
          <div className="mt-6 space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="text-lg font-medium mb-2 text-green-600">Dimensione dell'Impresa</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Piccole e medie imprese (PMI) secondo la definizione UE</li>
                <li>Meno di 250 dipendenti</li>
                <li>Fatturato annuo non superiore a 50 milioni di euro OPPURE</li>
                <li>Totale di bilancio annuo non superiore a 43 milioni di euro</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="text-lg font-medium mb-2 text-green-600">Forma Giuridica</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Società di capitali (S.p.A., S.r.l., S.r.l.s.)</li>
                <li>Società di persone (S.n.c., S.a.s.)</li>
                <li>Società cooperative</li>
                <li>Ditte individuali</li>
                <li>Professionisti con partita IVA (limitatamente ad alcuni settori)</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="text-lg font-medium mb-2 text-green-600">Situazione Economico-Finanziaria</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Non essere in stato di difficoltà secondo la normativa UE</li>
                <li>Non essere soggette a procedure concorsuali</li>
                <li>Essere in regola con i versamenti contributivi e fiscali</li>
                <li>Avere un rating creditizio compatibile con l'operazione</li>
              </ul>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 mt-8 text-green-700">Requisiti Oggettivi</h3>
          <p>L'investimento deve rispettare specifici requisiti oggettivi per essere ammissibile:</p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="text-lg font-medium mb-2 text-green-600">Caratteristiche dell'Investimento</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Importo minimo: €20.000</li>
                <li>Importo massimo: €4.000.000</li>
                <li>Beni strumentali nuovi di fabbrica</li>
                <li>Destinazione produttiva nell'unità locale</li>
                <li>Durata del finanziamento: da 2 a 6 anni</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="text-lg font-medium mb-2 text-green-600">Caratteristiche "Green"</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Beni a basso impatto ambientale</li>
                <li>Tecnologie per l'efficienza energetica</li>
                <li>Sistemi per l'utilizzo di energie rinnovabili</li>
                <li>Attrezzature per la riduzione delle emissioni</li>
                <li>Macchinari per l'economia circolare</li>
              </ul>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 mt-8 text-green-700">Beni Ammissibili</h3>
          
          <div className="mt-4">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-green-100">
                    <th className="py-2 px-4 border-b text-left">Categoria</th>
                    <th className="py-2 px-4 border-b text-left">Esempi</th>
                    <th className="py-2 px-4 border-b text-left">Requisiti Specifici</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">Macchinari per l'efficienza energetica</td>
                    <td className="py-2 px-4 border-b">Caldaie ad alta efficienza, sistemi di cogenerazione</td>
                    <td className="py-2 px-4 border-b">Classe energetica A+ o superiore</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2 px-4 border-b">Impianti per energie rinnovabili</td>
                    <td className="py-2 px-4 border-b">Pannelli solari, impianti eolici, biomasse</td>
                    <td className="py-2 px-4 border-b">Certificazione di conformità</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Sistemi di illuminazione</td>
                    <td className="py-2 px-4 border-b">Illuminazione LED, sistemi intelligenti</td>
                    <td className="py-2 px-4 border-b">Risparmio energetico min. 50%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2 px-4 border-b">Veicoli elettrici/ibridi</td>
                    <td className="py-2 px-4 border-b">Furgoni, auto aziendali, mezzi da lavoro</td>
                    <td className="py-2 px-4 border-b">Emissioni CO2 &lt; 60 g/km</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Macchinari per riciclaggio</td>
                    <td className="py-2 px-4 border-b">Trituratori, separatori, compattatori</td>
                    <td className="py-2 px-4 border-b">Destinazione economia circolare</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 mt-8 text-green-700">Beni Non Ammissibili</h3>
          
          <div className="bg-red-50 p-4 rounded-lg border border-red-200 mt-4">
            <ul className="list-disc pl-6 space-y-1">
              <li>Beni usati o ricondizionati</li>
              <li>Beni immobili (terreni, fabbricati)</li>
              <li>Veicoli per trasporto persone (salvo specifiche eccezioni)</li>
              <li>Beni non destinati all'attività produttiva</li>
              <li>Software e beni immateriali</li>
              <li>Scorte e materie prime</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-6">
            <p className="font-semibold text-yellow-800">⚠️ Verifica dei Requisiti</p>
            <p className="mt-2">È fondamentale verificare attentamente tutti i requisiti prima di presentare la domanda. La mancanza anche di un solo requisito può comportare il rigetto della richiesta.</p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-6">
            <p className="font-semibold text-blue-800">Valutazione Personalizzata</p>
            <p className="mt-2">SolariX Business offre un servizio di valutazione gratuito dei requisiti per verificare l'ammissibilità della tua impresa e del tuo progetto di investimento. Contattaci per una consulenza personalizzata e scopri se puoi accedere alla Nuova Sabatini Green.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RequirementsSection;
