'use client';

interface StrategyContentProps {
  openSections: Record<string, boolean>;
  toggleSectionAction: (section: string) => void;
}

export default function StrategyContent({ openSections, toggleSectionAction }: StrategyContentProps) {
  return (
    <>
      {/* Analisi Costi-Benefici */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div 
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleSectionAction('analisi-costi')}
        >
          <h2 className="text-2xl font-bold text-green-700">Analisi Costi-Benefici per Voi</h2>
          <span className="text-2xl text-green-600">
            {openSections['analisi-costi'] ? '−' : '+'}
          </span>
        </div>
        
        {openSections['analisi-costi'] && (
          <div className="mt-6">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-green-100">
                    <th className="border border-gray-300 p-3 text-left font-bold">Vostro Investimento</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Contributi a Fondo Perduto Immediati</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Benefici a Lungo Termine</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Tempistica</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-blue-50">
                    <td className="border border-gray-300 p-3">Tempo preparazione 3-6 mesi consulenza</td>
                    <td className="border border-gray-300 p-3"><strong className="text-green-600">1.2-1.8 milioni € a fondo perduto</strong></td>
                    <td className="border border-gray-300 p-3">Crescita aziendale</td>
                    <td className="border border-gray-300 p-3">Immediato alla firma</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">Co-finanziamento 40% 600.000-1.200.000 €</td>
                    <td className="border border-gray-300 p-3"><strong className="text-green-600">Progetti da 1.5-3 milioni € (60% a fondo perduto)</strong></td>
                    <td className="border border-gray-300 p-3">Competitività europea</td>
                    <td className="border border-gray-300 p-3">2-3 anni</td>
                  </tr>
                  <tr className="bg-yellow-50">
                    <td className="border border-gray-300 p-3">Competenze sviluppate</td>
                    <td className="border border-gray-300 p-3"><strong className="text-green-600">Specializzazione UE a fondo perduto</strong></td>
                    <td className="border border-gray-300 p-3">Credibilità consulenza</td>
                    <td className="border border-gray-300 p-3">Permanente</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">Network partners</td>
                    <td className="border border-gray-300 p-3"><strong className="text-green-600">Relazioni europee a fondo perduto</strong></td>
                    <td className="border border-gray-300 p-3">Progetti futuri</td>
                    <td className="border border-gray-300 p-3">5+ anni</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Posizionamento Competitivo */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div 
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleSectionAction('posizionamento')}
        >
          <h2 className="text-2xl font-bold text-green-700">Il Nostro Posizionamento Competitivo per Voi</h2>
          <span className="text-2xl text-green-600">
            {openSections['posizionamento'] ? '−' : '+'}
          </span>
        </div>
        
        {openSections['posizionamento'] && (
          <div className="mt-6">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="border border-gray-300 p-3 text-left font-bold">Competitor</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Loro Punti Forti</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Loro Debolezze</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Vantaggio Solarix</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-red-50">
                    <td className="border border-gray-300 p-3 font-semibold">Grandi Consulting</td>
                    <td className="border border-gray-300 p-3">Esperienza EU</td>
                    <td className="border border-gray-300 p-3">Costi alti, rigidità</td>
                    <td className="border border-gray-300 p-3"><strong className="text-green-600">Agilità + specializzazione</strong></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">PMI Locali</td>
                    <td className="border border-gray-300 p-3">Costi contenuti</td>
                    <td className="border border-gray-300 p-3">Mancanza expertise EU</td>
                    <td className="border border-gray-300 p-3"><strong className="text-green-600">Competenze LIFE specifiche</strong></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-semibold">Università</td>
                    <td className="border border-gray-300 p-3">Credibilità scientifica</td>
                    <td className="border border-gray-300 p-3">Lentezza esecuzione</td>
                    <td className="border border-gray-300 p-3"><strong className="text-green-600">Business orientation</strong></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">Associazioni</td>
                    <td className="border border-gray-300 p-3">Network territoriale</td>
                    <td className="border border-gray-300 p-3">Limiti commerciali</td>
                    <td className="border border-gray-300 p-3"><strong className="text-green-600">Approccio profit oriented</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Strategia di Crescita */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div 
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleSectionAction('strategia-crescita')}
        >
          <h2 className="text-2xl font-bold text-green-700">La Nostra Strategia di Crescita con Voi</h2>
          <span className="text-2xl text-green-600">
            {openSections['strategia-crescita'] ? '−' : '+'}
          </span>
        </div>
        
        {openSections['strategia-crescita'] && (
          <div className="mt-6">
            <h3 className="text-xl font-bold text-blue-700 mb-4">Roadmap Solarix Business per i Vostri Progetti</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-purple-100">
                    <th className="border border-gray-300 p-3 text-left font-bold">Anno</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Obiettivo</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Progetto Target</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Budget</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Vostro Vantaggio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-green-50">
                    <td className="border border-gray-300 p-3 font-semibold">2025</td>
                    <td className="border border-gray-300 p-3">Prima candidatura</td>
                    <td className="border border-gray-300 p-3">Preparazione proposta CER</td>
                    <td className="border border-gray-300 p-3"><strong>1.8 milioni €</strong></td>
                    <td className="border border-gray-300 p-3">Esperienza + network</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">2026</td>
                    <td className="border border-gray-300 p-3">Secondo progetto</td>
                    <td className="border border-gray-300 p-3">Efficienza industriale</td>
                    <td className="border border-gray-300 p-3"><strong>2.5 milioni €</strong></td>
                    <td className="border border-gray-300 p-3">Specializzazione</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="border border-gray-300 p-3 font-semibold">2027</td>
                    <td className="border border-gray-300 p-3">Portfolio completo</td>
                    <td className="border border-gray-300 p-3">2-3 progetti paralleli</td>
                    <td className="border border-gray-300 p-3"><strong>5+ milioni €</strong></td>
                    <td className="border border-gray-300 p-3">Leadership mercato</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">2028+</td>
                    <td className="border border-gray-300 p-3">Consulenza premium</td>
                    <td className="border border-gray-300 p-3">Supporto altri clienti</td>
                    <td className="border border-gray-300 p-3">Variabile</td>
                    <td className="border border-gray-300 p-3">Revenue ricorrente</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Matrice Rischio-Opportunità */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div 
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleSectionAction('rischio-opportunita')}
        >
          <h2 className="text-2xl font-bold text-green-700">Matrice Rischio-Opportunità per le Vostre Decisioni</h2>
          <span className="text-2xl text-green-600">
            {openSections['rischio-opportunita'] ? '−' : '+'}
          </span>
        </div>
        
        {openSections['rischio-opportunita'] && (
          <div className="mt-6">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-yellow-100">
                    <th className="border border-gray-300 p-3 text-left font-bold">Scenario</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Opportunità</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Rischi</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Gestione Rischi</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Raccomandazione</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-green-50">
                    <td className="border border-gray-300 p-3 font-semibold">Budget 1-2M€</td>
                    <td className="border border-gray-300 p-3">Gestione semplice</td>
                    <td className="border border-gray-300 p-3">Controlli standard</td>
                    <td className="border border-gray-300 p-3">Audit UE</td>
                    <td className="border border-gray-300 p-3"><strong className="text-green-600">Primi progetti</strong></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">Budget 3-4M€</td>
                    <td className="border border-gray-300 p-3">Impatto significativo</td>
                    <td className="border border-gray-300 p-3">Complessità partner</td>
                    <td className="border border-gray-300 p-3">Governance complessa</td>
                    <td className="border border-gray-300 p-3"><strong className="text-blue-600">Leadership settore</strong></td>
                  </tr>
                  <tr className="bg-orange-50">
                    <td className="border border-gray-300 p-3 font-semibold">Multi-progetto</td>
                    <td className="border border-gray-300 p-3">Portfolio diversificato</td>
                    <td className="border border-gray-300 p-3">Sovraccarico team</td>
                    <td className="border border-gray-300 p-3">Dispersione focus</td>
                    <td className="border border-gray-300 p-3"><strong className="text-purple-600">Economia scala</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
