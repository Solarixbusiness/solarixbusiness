import React from 'react';

export default function RequirementsSection() {
  return (
    <div id="sezione-2" className="mb-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">2. Requisiti e Soggetti Beneficiari</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">2.1 Requisiti Soggettivi</h3>
          <p>Per accedere alla Nuova Sabatini Green, l'impresa deve possedere i seguenti requisiti:</p>
          
          <p className="mt-4 font-medium">Dimensione dell'Impresa:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Piccole e medie imprese (PMI) secondo la definizione UE</li>
            <li>Meno di 250 dipendenti</li>
            <li>Fatturato annuo non superiore a 50 milioni di euro OPPURE</li>
            <li>Totale di bilancio annuo non superiore a 43 milioni di euro</li>
          </ul>
          
          <p className="mt-4 font-medium">Forma Giuridica Ammessa:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Società di capitali (S.p.A., S.r.l., S.r.l.s.)</li>
            <li>Società di persone (S.n.c., S.a.s.)</li>
            <li>Società cooperative</li>
            <li>Ditte individuali</li>
            <li>Liberi professionisti con partita IVA</li>
          </ul>
          
          <p className="mt-4 font-medium">Settori di Attività:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Industria manifatturiera</li>
            <li>Servizi alle imprese</li>
            <li>Commercio</li>
            <li>Turismo</li>
            <li>Agricoltura (limitatamente alla trasformazione e commercializzazione)</li>
          </ul>
          
          <h3 className="text-lg font-semibold mb-3 mt-6 text-gray-800">2.2 Requisiti Oggettivi</h3>
          
          <p className="font-medium">Tipologia di Beni Ammissibili:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Macchinari, impianti e attrezzature nuovi di fabbrica</li>
            <li>Beni strumentali a basso impatto ambientale</li>
            <li>Tecnologie per l'efficienza energetica</li>
            <li>Impianti per la produzione di energia da fonti rinnovabili</li>
            <li>Software e tecnologie digitali per la sostenibilità</li>
          </ul>
          
          <p className="mt-4 font-medium">Importi dell'Investimento:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Importo minimo:</strong> 20.000 euro</li>
            <li><strong>Importo massimo:</strong> 4.000.000 euro</li>
            <li>L'investimento deve essere realizzato in Italia</li>
            <li>I beni devono rimanere in Italia per almeno 3 anni</li>
          </ul>
          
          <p className="mt-4 font-medium">Criteri di Sostenibilità:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Conformità agli standard ambientali europei</li>
            <li>Certificazioni di efficienza energetica</li>
            <li>Riduzione delle emissioni di CO2</li>
            <li>Utilizzo di materiali riciclabili o a basso impatto</li>
            <li>Tecnologie per l'economia circolare</li>
          </ul>
          
          <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-400 mt-6">
            <p className="text-sm"><strong>Attenzione:</strong> È fondamentale verificare attentamente tutti i requisiti prima di presentare la domanda. La mancanza anche di un solo requisito può comportare il rigetto della richiesta.</p>
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
    </div>
  );
}
