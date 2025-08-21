import React from 'react';

export default function Parte5Cumulabilita() {
  return (
    <div className="space-y-8">
      {/* Sezione 33: Cumulabilità con Altri Incentivi */}
      <div id="cumulabilita-incentivi" className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">33. Cumulabilità con Altri Incentivi</h2>
        <div className="prose max-w-none">
          
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
            <h4 className="text-green-800 font-semibold mb-2">🆕 Ampliamento Cumulabilità 2025</h4>
            <p className="text-green-700">Estensione ai settori agricoltura, pesca e acquacoltura. Nuove regole per Certificati Bianchi (riduzione 50% per progetti post-17/11/2023). Semplificazione procedure ESCo certificate e verifiche automatizzate GSE-Agenzia Entrate.</p>
          </div>
          
          {/* Sottosezione 33.1 */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">33.1 Principi Generali di Cumulabilità</h3>
            <p className="text-gray-600 mb-6">
              Il credito d'imposta Transizione 5.0 può essere cumulato con altre agevolazioni, purché siano rispettate le condizioni previste dalla normativa europea e nazionale:
            </p>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-300">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">Tipologia Incentivo</th>
                    <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">Cumulabilità</th>
                    <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">Condizioni</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-800 font-medium">Crediti d'imposta R&S</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">✅ Cumulabile</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Su investimenti diversi o quote diverse dello stesso investimento</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-800 font-medium">Incentivi regionali</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">✅ Cumulabile (2025)</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Verifica compatibilità semplificata, limite intensità aiuto rispettato</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-800 font-medium">Fondi UE (PNRR, Horizon)</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">✅ Cumulabile (2025)</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Rispetto limiti de minimis e intensità aiuto, documentazione semplificata</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-800 font-medium">Agevolazioni settoriali</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">✅ Cumulabile (2025)</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Agricoltura, pesca, acquacoltura, ESCo certificate</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-800 font-medium">Certificati Bianchi</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">⚠️ Riduzione 50%</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Solo per progetti avviati dopo 17/11/2023</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-800 font-medium">Superbonus/Ecobonus</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">❌ Non cumulabile</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Stesso investimento, scelta alternativa obbligatoria</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-yellow-800 mb-3">⚠️ Limiti e Verifiche</h4>
              <ul className="list-disc pl-6 text-yellow-700 space-y-2">
                <li>Intensità massima aiuto: 50% per grandi imprese, 60% per medie, 70% per piccole</li>
                <li>Verifica automatica compatibilità tramite piattaforma GSE (2025)</li>
                <li>Documentazione semplificata per cumuli sotto €200.000</li>
                <li>Controlli ex-post su campione statistico</li>
              </ul>
            </div>
            
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">33.2 Cumulabilità Estesa 2025</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h4 className="text-lg font-semibold text-green-800 mb-3">Certificati Bianchi</h4>
                <ul className="list-disc pl-6 text-green-700 space-y-1 text-sm">
                  <li>✅ Cumulabile con riduzione 50%</li>
                  <li>Per progetti post-17 novembre 2023</li>
                  <li>Verifica automatica GSE</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h4 className="text-lg font-semibold text-blue-800 mb-3">Conto Termico & ZES/ZLS</h4>
                <ul className="list-disc pl-6 text-blue-700 space-y-1 text-sm">
                  <li>✅ Cumulabile su quote diverse</li>
                  <li>Limite 100% costo investimento</li>
                  <li>Documentazione semplificata</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Sottosezione 33.2 */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">33.2 Reportistica e Documentazione</h3>
            <p className="text-gray-600 mb-6">
              La corretta documentazione dei risparmi energetici è fondamentale per la validazione del credito d'imposta. Di seguito i principali report richiesti:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h4 className="text-lg font-semibold text-green-800 mb-3">Report Baseline Energetica</h4>
                <p className="text-green-700 text-sm">
                  Documento che attesta i consumi energetici specifici nell'anno precedente l'investimento, con dettaglio mensile e per vettore energetico.
                </p>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <h4 className="text-lg font-semibold text-yellow-800 mb-3">Report di Monitoraggio Periodico</h4>
                <p className="text-yellow-700 text-sm">
                  Report mensili o trimestrali che documentano i consumi energetici e la produzione, con calcolo del consumo specifico.
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                <h4 className="text-lg font-semibold text-purple-800 mb-3">Report di Risparmio Energetico</h4>
                <p className="text-purple-700 text-sm">
                  Documento annuale che calcola il risparmio energetico conseguito rispetto alla baseline, con evidenza della metodologia di calcolo utilizzata.
                </p>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <h4 className="text-lg font-semibold text-red-800 mb-3">Relazione Tecnica di Conformità</h4>
                <p className="text-red-700 text-sm">
                  Documento redatto da un tecnico abilitato che attesta la conformità dell'investimento ai requisiti del Piano Transizione 5.0 e il raggiungimento degli obiettivi di risparmio energetico.
                </p>
              </div>
            </div>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mt-6">
              <p className="text-red-700"><strong>Attenzione:</strong> La documentazione deve essere conservata per almeno 5 anni dalla data di completamento dell'investimento e deve essere resa disponibile in caso di controlli da parte del GSE o dell'Agenzia delle Entrate.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sezione 34: Innovazione e Sostenibilità */}
      <div id="innovazione-sostenibilita" className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">34. Innovazione e Sostenibilità</h2>
        <div className="prose max-w-none">
          
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
            <h4 className="text-green-800 font-semibold mb-2">🆕 Principio DNSH 2025</h4>
            <p className="text-green-700">Integrazione del principio "Do No Significant Harm" per garantire che gli investimenti non arrechino danni significativi agli obiettivi ambientali UE. Esclusioni specifiche per rifiuti pericolosi e attività estrattive non sostenibili.</p>
          </div>

          {/* Sottosezione 34.1 */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">34.1 Tecnologie Innovative Prioritarie 2025</h3>
            <p className="text-gray-600 mb-6">
              La Transizione 5.0 integra tecnologie all'avanguardia che combinano efficienza energetica, sostenibilità ambientale e competitività industriale, con focus su economia circolare e neutralità carbonica:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-800 mb-3">Energie Rinnovabili Avanzate</h4>
                <ul className="list-disc pl-6 text-blue-700 space-y-2">
                  <li><strong>Agrivoltaico:</strong> Sistemi integrati agricoltura-energia</li>
                  <li><strong>Fotovoltaico galleggiante:</strong> Per bacini idrici e marine</li>
                  <li><strong>Eolico offshore:</strong> Tecnologie marine avanzate</li>
                  <li><strong>Perovskiti:</strong> Celle solari di nuova generazione</li>
                  <li><strong>Idrogeno verde:</strong> Elettrolisi ad alta efficienza</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-green-800 mb-3">Efficienza Energetica 4.0</h4>
                <ul className="list-disc pl-6 text-green-700 space-y-2">
                  <li><strong>Heat pumps AI-driven:</strong> Pompe di calore con IA integrata</li>
                  <li><strong>Cogenerazione ibrida:</strong> Sistemi multi-fonte ottimizzati</li>
                  <li><strong>Waste heat recovery:</strong> Recupero calore di processo avanzato</li>
                  <li><strong>Smart building systems:</strong> Gestione predittiva degli edifici</li>
                  <li><strong>Thermal energy storage:</strong> Accumulo termico innovativo</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-purple-800 mb-3">Economia Circolare Digitale</h4>
                <ul className="list-disc pl-6 text-purple-700 space-y-2">
                  <li><strong>Chemical recycling:</strong> Riciclo chimico avanzato</li>
                  <li><strong>Urban mining:</strong> Estrazione da rifiuti urbani</li>
                  <li><strong>Bio-based materials:</strong> Materiali da fonti biologiche</li>
                  <li><strong>Digital product passport:</strong> Tracciabilità digitale completa</li>
                  <li><strong>Industrial symbiosis:</strong> Piattaforme di scambio automatizzate</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Sottosezione 34.2 */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">34.2 Principio DNSH e Sostenibilità Integrata</h3>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg border-2 border-green-200 mb-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Do No Significant Harm - Implementazione 2025</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-green-700 mb-3">Obiettivi Ambientali UE:</h5>
                  <ul className="list-disc pl-6 text-green-700 space-y-2">
                    <li>Mitigazione dei cambiamenti climatici</li>
                    <li>Adattamento ai cambiamenti climatici</li>
                    <li>Uso sostenibile e protezione delle risorse idriche</li>
                    <li>Transizione verso un'economia circolare</li>
                    <li>Prevenzione e riduzione dell'inquinamento</li>
                    <li>Protezione e ripristino della biodiversità</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-blue-700 mb-3">Esclusioni e Limitazioni:</h5>
                  <ul className="list-disc pl-6 text-blue-700 space-y-2">
                    <li><strong>Rifiuti pericolosi:</strong> Esclusi dalla gestione circolare</li>
                    <li><strong>Combustibili fossili:</strong> Non ammissibili per nuovi impianti</li>
                    <li><strong>Attività estrattive:</strong> Solo se con recupero ambientale</li>
                    <li><strong>Processi inquinanti:</strong> Richiesta valutazione impatto</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-300">
                <thead className="bg-green-50">
                  <tr>
                    <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">Ambito</th>
                    <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">Soluzioni Tecnologiche</th>
                    <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">Benefici</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-800 font-medium">Riduzione dei rifiuti</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Sistemi di ottimizzazione dei processi produttivi, tecnologie di riutilizzo degli scarti</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Minori costi di smaltimento, riduzione dell'impatto ambientale, conformità normativa</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-800 font-medium">Uso efficiente delle risorse</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Sistemi di monitoraggio dei consumi di materie prime, tecnologie per il riutilizzo dell'acqua</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Riduzione dei costi operativi, minore pressione sulle risorse naturali</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-800 font-medium">Eco-design</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Software di progettazione per l'ottimizzazione del ciclo di vita dei prodotti</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Prodotti più durevoli, facilmente riparabili e riciclabili</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-800 font-medium">Logistica sostenibile</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Sistemi di ottimizzazione dei percorsi, veicoli elettrici per la movimentazione interna</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Riduzione delle emissioni, efficienza operativa</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-cyan-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-cyan-800 mb-3">Valore Aggiunto della Sostenibilità</h4>
              <p className="text-cyan-700 mb-3">L'integrazione di principi di sostenibilità nei progetti Transizione 5.0 genera molteplici vantaggi:</p>
              <ul className="list-disc pl-6 text-cyan-700 space-y-2">
                <li><strong>Vantaggio competitivo:</strong> Differenziazione sul mercato e accesso a clienti sensibili ai temi ambientali</li>
                <li><strong>Conformità anticipata:</strong> Preparazione alle future normative ambientali sempre più stringenti</li>
                <li><strong>Accesso a finanziamenti verdi:</strong> Maggiori opportunità di accesso a strumenti finanziari dedicati alla sostenibilità</li>
                <li><strong>Miglioramento reputazionale:</strong> Rafforzamento dell'immagine aziendale verso stakeholder e consumatori</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Sezione 35: Analisi Costi-Benefici */}
      <div id="analisi-costi-benefici" className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">35. Analisi Costi-Benefici</h2>
        <div className="prose max-w-none">
          
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 mb-6">
            <h4 className="text-indigo-800 font-semibold mb-2">🆕 Metodologia Standardizzata 2025</h4>
            <p className="text-indigo-700">Nuovi parametri di valutazione integrati: impatto ambientale quantificato, benefici sociali, resilienza climatica. Strumenti digitali per analisi automatizzata e benchmarking settoriale.</p>
          </div>

          {/* Sottosezione 35.1 */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">35.1 Metodologia di Analisi Integrata</h3>
            <p className="text-gray-600 mb-6">
              L'analisi costi-benefici 2025 integra valutazioni economiche, ambientali e sociali per una valutazione olistica degli investimenti Transizione 5.0, considerando anche i benefici intangibili e la resilienza a lungo termine.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <h4 className="text-lg font-semibold text-red-800 mb-3">Costi da Considerare</h4>
                <ul className="list-disc pl-6 text-red-700 space-y-2">
                  <li>Costi di investimento iniziale: acquisto macchinari, software, hardware</li>
                  <li>Costi di installazione: manodopera, adeguamenti strutturali</li>
                  <li>Costi di formazione: training del personale</li>
                  <li>Costi di manutenzione: ordinaria e straordinaria</li>
                  <li>Costi operativi: energia, materiali di consumo</li>
                  <li>Costi di consulenza: progettazione, certificazione</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h4 className="text-lg font-semibold text-green-800 mb-3">Benefici da Quantificare</h4>
                <ul className="list-disc pl-6 text-green-700 space-y-2">
                  <li>Risparmio energetico: riduzione dei consumi e dei costi energetici</li>
                  <li>Credito d'imposta: agevolazioni fiscali del Piano Transizione 5.0</li>
                  <li>Aumento produttività: maggiore efficienza dei processi</li>
                  <li>Riduzione scarti: ottimizzazione dell'uso delle risorse</li>
                  <li>Riduzione costi di manutenzione: grazie a manutenzione predittiva</li>
                  <li>Valore reputazionale: miglioramento dell'immagine aziendale</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Sottosezione 35.2 */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">35.2 Indicatori Chiave di Performance</h3>
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <h4 className="text-lg font-semibold text-blue-800 mb-2">ROI</h4>
                <p className="text-2xl font-bold text-blue-600">15-25%</p>
                <p className="text-sm text-blue-700">Return on Investment</p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <h4 className="text-lg font-semibold text-green-800 mb-2">Payback</h4>
                <p className="text-2xl font-bold text-green-600">3-6 anni</p>
                <p className="text-sm text-green-700">Periodo di recupero</p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <h4 className="text-lg font-semibold text-purple-800 mb-2">NPV</h4>
                <p className="text-2xl font-bold text-purple-600">Positivo</p>
                <p className="text-sm text-purple-700">Valore Attuale Netto</p>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <h4 className="text-lg font-semibold text-orange-800 mb-2">IRR</h4>
                <p className="text-2xl font-bold text-orange-600">18-30%</p>
                <p className="text-sm text-orange-700">Tasso Interno di Rendimento</p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6">
              Metodologia standardizzata per calcolo degli indicatori economici con integrazione di fattori ambientali e sociali:
            </p>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-300">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">Indicatore</th>
                    <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">Descrizione</th>
                    <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">Interpretazione</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-800 font-medium">ROI (Return on Investment)</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Rapporto tra benefici netti e costo dell'investimento</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Un ROI {'>'} 0 indica che l'investimento genera un ritorno positivo</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-800 font-medium">Payback Period</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Tempo necessario per recuperare l'investimento iniziale</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Un periodo più breve indica un investimento più conveniente</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-800 font-medium">VAN (Valore Attuale Netto)</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Valore attuale dei flussi di cassa futuri meno l'investimento iniziale</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Un VAN {'>'} 0 indica che l'investimento crea valore</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-800 font-medium">TIR (Tasso Interno di Rendimento)</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Tasso di sconto che rende il VAN pari a zero</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Un TIR superiore al costo del capitale indica convenienza</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-800 font-medium">LCOE (Levelized Cost of Energy)</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Costo medio dell'energia prodotta o risparmiata durante la vita dell'investimento</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Utile per confrontare diverse soluzioni energetiche</td>
                  </tr>
                </tbody>
              </table>
            </div>
          {/* Sottosezione 35.3 */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">35.3 Esempio Pratico di Analisi</h3>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg border-2 border-blue-200">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Caso Studio: Azienda Manifatturiera Media</h4>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg">
                  <h5 className="font-semibold text-gray-700 mb-3">Investimento:</h5>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Totale:</strong> €2.000.000</li>
                    <li>• <strong>Efficienza energetica:</strong> €1.200.000</li>
                    <li>• <strong>Digitalizzazione:</strong> €800.000</li>
                    <li>• <strong>Credito d'imposta:</strong> €800.000 (40%)</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h5 className="font-semibold text-gray-700 mb-3">Benefici Annuali:</h5>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Risparmio energetico:</strong> €180.000</li>
                    <li>• <strong>Aumento produttività:</strong> €120.000</li>
                    <li>• <strong>Riduzione manutenzione:</strong> €50.000</li>
                    <li>• <strong>Benefici ambientali:</strong> €30.000</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-semibold text-green-800 mb-2">Risultati Analisi:</h5>
                <p className="text-green-700">
                  <strong>Payback Period:</strong> 3.2 anni | <strong>ROI:</strong> 23% | <strong>NPV (10 anni):</strong> €1.2M | <strong>IRR:</strong> 28%
                </p>
              </div>
            </div>  
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h5 className="font-semibold text-gray-700 mb-2">Dati di Input:</h5>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1">
                    <li>Investimento iniziale: €250.000 per sistema di monitoraggio energetico e ottimizzazione processi</li>
                    <li>Credito d'imposta Transizione 5.0: 35% = €87.500</li>
                    <li>Risparmio energetico annuo: 20% sui consumi attuali = €45.000/anno</li>
                    <li>Costi di manutenzione: €5.000/anno</li>
                    <li>Vita utile dell'investimento: 10 anni</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-semibold text-gray-700 mb-2">Calcolo indicatori:</h5>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1">
                    <li>Investimento netto: €250.000 - €87.500 = €162.500</li>
                    <li>Flusso di cassa annuo: €45.000 - €5.000 = €40.000/anno</li>
                    <li>Payback Period: €162.500 / €40.000 = 4,06 anni</li>
                    <li>ROI a 10 anni: (€400.000 - €162.500) / €162.500 = 146%</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <p className="text-blue-700 text-sm"><strong>Nota:</strong> L'esempio sopra riportato è semplificato a scopo illustrativo. Un'analisi completa dovrebbe considerare anche il valore temporale del denaro, l'inflazione, l'evoluzione dei prezzi dell'energia e altri fattori specifici dell'azienda.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sezione 36: Internazionalizzazione e Transizione 5.0 */}
      <div id="internazionalizzazione-transizione" className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">36. Internazionalizzazione e Transizione 5.0</h2>
        <div className="prose max-w-none">
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
            <h4 className="text-blue-800 font-semibold mb-2">🆕 Competitività Globale 2025</h4>
            <p className="text-blue-700">Nuove sinergie con strumenti internazionali: Green Deal europeo, Carbon Border Adjustment, certificazioni ESG. Supporto per export di tecnologie sostenibili e accesso a mercati regolamentati.</p>
          </div>

          {/* Sottosezione 36.1 */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">36.1 Competitività Internazionale e Sostenibilità</h3>
            <p className="text-gray-600 mb-6">
              La Transizione 5.0 posiziona le aziende italiane come leader nella sostenibilità industriale, creando vantaggi competitivi decisivi sui mercati globali sempre più orientati verso la neutralità carbonica:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-800 mb-3">Vantaggi Competitivi</h4>
                <ul className="list-disc pl-6 text-blue-700 space-y-2">
                  <li><strong>Carbon Border Adjustment:</strong> Vantaggio competitivo vs importazioni ad alta intensità carbonica</li>
                  <li><strong>Certificazioni ESG:</strong> Accesso preferenziale a catene di fornitura sostenibili</li>
                  <li><strong>Green premium:</strong> Maggiorazione prezzi per prodotti a basso impatto</li>
                  <li><strong>Compliance anticipata:</strong> Preparazione a normative ambientali future</li>
                  <li><strong>Supply chain resilience:</strong> Diversificazione e localizzazione sostenibile</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-green-800 mb-3">Mercati Esteri Strategici</h4>
                <ul className="list-disc pl-6 text-green-700 space-y-2">
                  <li><strong>UE Green Deal:</strong> Allineamento con European Green Deal e Fit for 55</li>
                  <li><strong>USA IRA:</strong> Sinergie con Inflation Reduction Act americano</li>
                  <li><strong>Mercati asiatici:</strong> Crescente domanda di tecnologie clean-tech</li>
                  <li><strong>Certificazioni internazionali:</strong> ISO 14001, LEED, BREEAM</li>
                  <li><strong>Export credit:</strong> Agevolazioni per tecnologie sostenibili italiane</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Sottosezione 36.2 */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">36.2 Sinergie con Strumenti per l'Internazionalizzazione</h3>
            <p className="text-gray-600 mb-6">
              Gli investimenti in Transizione 5.0 possono essere integrati con altri strumenti di supporto all'internazionalizzazione, creando importanti sinergie:
            </p>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-300">
                <thead className="bg-purple-50">
                  <tr>
                    <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">Strumento</th>
                    <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">Ente Gestore</th>
                    <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">Sinergie con Transizione 5.0</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-800 font-medium">Fondo 394/81 - SIMEST</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">SIMEST</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Finanziamenti agevolati per progetti di internazionalizzazione che possono includere tecnologie 5.0</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-800 font-medium">Voucher TEM (Temporary Export Manager)</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">MISE / Invitalia</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Supporto per l'inserimento in azienda di figure specializzate nella promozione internazionale di prodotti sostenibili</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-800 font-medium">Bandi regionali per l'internazionalizzazione</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Regioni / Camere di Commercio</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Contributi per la partecipazione a fiere internazionali con focus su innovazione e sostenibilità</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-800 font-medium">Garanzia SACE per l'internazionalizzazione</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">SACE</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Copertura dei rischi di mancato pagamento per esportazioni di tecnologie green e digitali</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Sottosezione 36.3 */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">36.3 Certificazioni e Standard Internazionali</h3>
            <p className="text-gray-600 mb-6">
              L'adozione di tecnologie Transizione 5.0 facilita l'ottenimento di certificazioni internazionali sempre più richieste sui mercati esteri:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <h4 className="text-lg font-semibold text-yellow-800 mb-3">ISO 50001 - Gestione dell'Energia</h4>
                <p className="text-yellow-700 text-sm">
                  Certificazione internazionale per i sistemi di gestione dell'energia. Gli investimenti in monitoraggio energetico e efficienza previsti dalla Transizione 5.0 sono perfettamente allineati con i requisiti di questa norma.
                </p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h4 className="text-lg font-semibold text-green-800 mb-3">ISO 14001 - Gestione Ambientale</h4>
                <p className="text-green-700 text-sm">
                  Standard per la gestione ambientale. Le tecnologie per la riduzione dell'impatto ambientale e l'economia circolare supportate dalla Transizione 5.0 facilitano la conformità a questo standard.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h4 className="text-lg font-semibold text-blue-800 mb-3">Certificazioni di Prodotto Ecologiche</h4>
                <p className="text-blue-700 text-sm">
                  Ecolabel UE, EPD (Environmental Product Declaration), Carbon Footprint. L'ottimizzazione dei processi produttivi e la riduzione dei consumi energetici migliorano il profilo ambientale dei prodotti.
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                <h4 className="text-lg font-semibold text-purple-800 mb-3">Standard ESG (Environmental, Social, Governance)</h4>
                <p className="text-purple-700 text-sm">
                  Criteri sempre più rilevanti per investitori e partner commerciali internazionali. La Transizione 5.0 contribuisce significativamente alla componente ambientale (E) dei criteri ESG.
                </p>
              </div>
            </div>
            
            <div className="bg-cyan-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-cyan-800 mb-3">Strategie di Comunicazione Internazionale</h4>
              <p className="text-cyan-700 mb-3">Per valorizzare gli investimenti in Transizione 5.0 sui mercati esteri, è importante:</p>
              <ul className="list-disc pl-6 text-cyan-700 space-y-2">
                <li>Integrare i risultati di sostenibilità e innovazione nel materiale promozionale internazionale</li>
                <li>Quantificare e comunicare i benefici ambientali ottenuti (es. riduzione CO2, risparmio energetico)</li>
                <li>Partecipare a fiere internazionali specializzate in tecnologie green e digitali</li>
                <li>Aderire a network e piattaforme internazionali dedicate all'innovazione sostenibile</li>
                <li>Sviluppare case study e success stories da condividere con potenziali clienti e partner esteri</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Sezione 37: Transizione 5.0 e Finanza Sostenibile */}
      <div id="finanza-sostenibile" className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">37. Transizione 5.0 e Finanza Sostenibile</h2>
        <div className="prose max-w-none">
          
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
            <h4 className="text-green-800 font-semibold mb-2">🆕 Tassonomia UE e CSRD 2025</h4>
            <p className="text-green-700">Integrazione completa con Tassonomia UE per attività sostenibili. Nuovi strumenti: EPC contracts, sustainability-linked bonds, carbon credits. Reportistica ESG obbligatoria per aziende {'>'}250 dipendenti.</p>
          </div>

          {/* Sottosezione 37.1 */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">37.1 Strumenti di Finanza Sostenibile Integrati</h3>
            <p className="text-gray-600 mb-6">
              La Transizione 5.0 si allinea perfettamente con la Tassonomia UE e gli strumenti di finanza sostenibile, creando opportunità di finanziamento innovative e vantaggiose per le aziende:
            </p>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-300">
                <thead className="bg-green-50">
                  <tr>
                    <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">Strumento</th>
                    <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">Descrizione</th>
                    <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">Vantaggi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-800 font-medium">Green Bond</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Obbligazioni emesse per finanziare progetti con benefici ambientali, inclusi quelli di efficienza energetica e digitalizzazione sostenibile</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Accesso a investitori sensibili ai temi ESG, potenziali tassi più vantaggiosi, miglioramento reputazionale</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-800 font-medium">Sustainability-Linked Loan</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Finanziamenti con condizioni economiche legate al raggiungimento di obiettivi di sostenibilità, come la riduzione dei consumi energetici</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Riduzione del tasso di interesse al raggiungimento degli obiettivi, incentivo al miglioramento continuo</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-800 font-medium">Energy Efficiency Loan</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Finanziamenti specifici per progetti di efficienza energetica, spesso offerti da banche in collaborazione con istituzioni europee (BEI, BERS)</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Tassi agevolati, assistenza tecnica, periodi di rimborso allineati ai risparmi energetici</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-800 font-medium">Fondi di Private Equity Green</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Investimenti di capitale da parte di fondi specializzati in aziende con progetti di transizione energetica e digitale</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Apporto di capitale senza indebitamento, competenze specialistiche, network internazionale</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Sottosezione 37.2 */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">37.2 Tassonomia UE e Reportistica ESG</h3>
            <p className="text-gray-600 mb-6">
              Gli investimenti in Transizione 5.0 possono contribuire significativamente alla conformità con la Tassonomia UE e migliorare il profilo ESG dell'azienda:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h4 className="text-lg font-semibold text-blue-800 mb-3">Tassonomia UE</h4>
                <p className="text-blue-700 text-sm mb-3">Sistema di classificazione delle attività economiche sostenibili che:</p>
                <ul className="list-disc pl-6 text-blue-700 text-sm space-y-1">
                  <li>Definisce criteri tecnici per identificare attività che contribuiscono alla mitigazione e all'adattamento ai cambiamenti climatici</li>
                  <li>Richiede alle aziende di dichiarare la percentuale di attività allineate alla tassonomia</li>
                  <li>Influenza l'accesso a finanziamenti sostenibili</li>
                </ul>
                <p className="text-blue-700 text-sm mt-3">Gli investimenti in Transizione 5.0 contribuiscono all'obiettivo di mitigazione dei cambiamenti climatici attraverso la riduzione dei consumi energetici.</p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h4 className="text-lg font-semibold text-green-800 mb-3">Reportistica ESG</h4>
                <p className="text-green-700 text-sm mb-3">Gli investimenti in Transizione 5.0 migliorano i principali indicatori ESG:</p>
                <ul className="list-disc pl-6 text-green-700 text-sm space-y-1">
                  <li><strong>Ambientali (E):</strong> riduzione emissioni CO2, efficienza energetica, economia circolare</li>
                  <li><strong>Sociali (S):</strong> miglioramento condizioni di lavoro, formazione avanzata, sviluppo competenze</li>
                  <li><strong>Governance (G):</strong> sistemi di monitoraggio e controllo, trasparenza, gestione rischi</li>
                </ul>
                <p className="text-green-700 text-sm mt-3">La Corporate Sustainability Reporting Directive (CSRD) richiederà a un numero crescente di aziende di rendicontare questi aspetti.</p>
              </div>
            </div>
          </div>
          
          {/* Sottosezione 37.3 */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">37.3 Energy Performance Contract (EPC)</h3>
            <p className="text-gray-600 mb-6">
              Gli Energy Performance Contract rappresentano una modalità innovativa per finanziare progetti di efficienza energetica nell'ambito della Transizione 5.0:
            </p>
            
            <div className="bg-yellow-50 p-6 rounded-lg mb-6">
              <h4 className="text-lg font-semibold text-yellow-800 mb-3">Funzionamento degli EPC</h4>
              <p className="text-yellow-700 mb-3"><strong>Principio base:</strong> Una ESCo (Energy Service Company) realizza l'investimento in efficienza energetica e viene remunerata attraverso i risparmi energetici ottenuti.</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-yellow-800 mb-2">Fasi principali:</h5>
                  <ol className="list-decimal pl-6 text-yellow-700 text-sm space-y-1">
                    <li>Diagnosi energetica e definizione baseline</li>
                    <li>Progettazione e implementazione degli interventi</li>
                    <li>Monitoraggio e verifica dei risparmi</li>
                    <li>Ripartizione dei benefici economici tra azienda e ESCo</li>
                  </ol>
                </div>
                
                <div>
                  <h5 className="font-semibold text-yellow-800 mb-2">Vantaggi per l'azienda:</h5>
                  <ul className="list-disc pl-6 text-yellow-700 text-sm space-y-1">
                    <li>Nessun investimento iniziale o investimento ridotto</li>
                    <li>Trasferimento del rischio tecnico alla ESCo</li>
                    <li>Garanzia contrattuale sui risultati di risparmio</li>
                    <li>Possibilità di combinare l'EPC con il credito d'imposta Transizione 5.0</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-cyan-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-cyan-800 mb-3">Integrazione con Transizione 5.0</h4>
              <p className="text-cyan-700 mb-3">Per massimizzare i benefici della finanza sostenibile nell'ambito della Transizione 5.0:</p>
              <ul className="list-disc pl-6 text-cyan-700 space-y-2">
                <li>Progettare gli investimenti considerando sia i requisiti del credito d'imposta sia i criteri della tassonomia UE</li>
                <li>Implementare sistemi di monitoraggio che soddisfino sia le esigenze di rendicontazione per il GSE sia per la reportistica ESG</li>
                <li>Valutare la possibilità di certificare i risparmi energetici ottenuti attraverso protocolli riconosciuti (es. IPMVP)</li>
                <li>Considerare l'emissione di strumenti di finanza sostenibile per progetti di ampia scala</li>
                <li>Comunicare efficacemente i risultati ottenuti a stakeholder finanziari e non finanziari</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Sezione 38: Transizione 5.0 e PNRR */}
      <div id="transizione-pnrr" className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">38. Transizione 5.0 e PNRR</h2>
        <div className="prose max-w-none">
          
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-6">
            <h4 className="text-purple-800 font-semibold mb-2">🆕 Sinergie PNRR 2025</h4>
            <p className="text-purple-700">Integrazione strategica con Piano Nazionale di Ripresa e Resilienza. Nuove call tematiche: transizione digitale-verde, competitività industriale, ricerca applicata. Cumulabilità piena con misure PNRR complementari.</p>
          </div>

          {/* Sottosezione 38.1 */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">38.1 Sinergie Strategiche con il PNRR</h3>
            <p className="text-gray-600 mb-6">
              La Transizione 5.0 si integra perfettamente con le misure del Piano Nazionale di Ripresa e Resilienza, creando un ecosistema coordinato di incentivi per la modernizzazione industriale:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-800 mb-3">Missioni PNRR Complementari</h4>
                <ul className="list-disc pl-6 text-blue-700 space-y-2">
                  <li><strong>Missione 1:</strong> Digitalizzazione PA e competitività sistema produttivo</li>
                  <li><strong>Missione 2:</strong> Rivoluzione verde e transizione ecologica</li>
                  <li><strong>Missione 4:</strong> Istruzione e ricerca per l'innovazione</li>
                  <li><strong>Investimenti complementari:</strong> Infrastrutture digitali e energetiche</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-green-800 mb-3">Call Tematiche Rilevanti</h4>
                <ul className="list-disc pl-6 text-green-700 space-y-2">
                  <li><strong>Transizione 4.0 Plus:</strong> Digitalizzazione avanzata PMI</li>
                  <li><strong>Green Transition:</strong> Tecnologie per economia circolare</li>
                  <li><strong>Innovation Ecosystem:</strong> Centri di competenza territoriali</li>
                  <li><strong>Skills Development:</strong> Formazione competenze digitali-verdi</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Sottosezione 38.2 */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">38.2 Strategie di Integrazione</h3>
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-lg border-2 border-purple-200">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Approccio Integrato PNRR-Transizione 5.0</h4>
              
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg text-center">
                  <h5 className="font-semibold text-purple-700 mb-2">Fase 1</h5>
                  <p className="text-sm text-gray-600">Analisi sinergie e mappatura opportunità</p>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <h5 className="font-semibold text-blue-700 mb-2">Fase 2</h5>
                  <p className="text-sm text-gray-600">Progettazione integrata e cronoprogramma</p>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <h5 className="font-semibold text-green-700 mb-2">Fase 3</h5>
                  <p className="text-sm text-gray-600">Implementazione coordinata e monitoraggio</p>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h5 className="font-semibold text-yellow-800 mb-2">Benefici dell'Integrazione:</h5>
                <p className="text-yellow-700 text-sm">
                  Massimizzazione risorse disponibili, riduzione tempi implementazione, sinergie tecnologiche, compliance coordinata con obiettivi UE
                </p>
              </div>
            </div>
          </div>
          
          {/* Sottosezione 38.1 */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">38.1 Sinergie con il Piano Nazionale di Ripresa e Resilienza</h3>
            <p className="text-gray-600 mb-6">
              Il Piano Transizione 5.0 si inserisce nel più ampio contesto del Piano Nazionale di Ripresa e Resilienza (PNRR), condividendone obiettivi strategici e complementando diverse misure. È importante comprendere queste sinergie per massimizzare le opportunità di finanziamento e supporto:
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h4 className="text-lg font-semibold text-blue-800 mb-3">Allineamento con le Missioni del PNRR</h4>
              <p className="text-blue-700 mb-3">La Transizione 5.0 è particolarmente allineata con:</p>
              <ul className="list-disc pl-6 text-blue-700 space-y-1">
                <li>Missione 1: Digitalizzazione, innovazione, competitività, cultura e turismo</li>
                <li>Missione 2: Rivoluzione verde e transizione ecologica</li>
                <li>Missione 4: Istruzione e ricerca</li>
              </ul>
            </div>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-300">
                <thead className="bg-purple-50">
                  <tr>
                    <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">Misura PNRR</th>
                    <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">Sinergie con Transizione 5.0</th>
                    <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">Opportunità di Integrazione</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-800 font-medium">Transizione 4.0</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Complementare alla Transizione 5.0, con focus su digitalizzazione</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Combinare investimenti in digitalizzazione (4.0) con quelli in sostenibilità (5.0)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-800 font-medium">Competence Center e Digital Innovation Hub</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Supporto tecnico e formativo per l'implementazione di tecnologie 5.0</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Accedere a servizi di consulenza e formazione per ottimizzare gli investimenti</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-800 font-medium">Fondo per l'economia circolare</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Progetti di riconversione produttiva verso modelli circolari</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Integrare tecnologie 5.0 con progetti di economia circolare</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-800 font-medium">Progetti flagship Rinnovabili e Batterie</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Sviluppo di tecnologie per energia rinnovabile e accumulo</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Combinare autoproduzione energetica con efficientamento dei processi</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Sottosezione 38.2 */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">38.2 Bandi PNRR Rilevanti per la Transizione 5.0</h3>
            <p className="text-gray-600 mb-6">
              Diversi bandi emanati nell'ambito del PNRR possono essere complementari agli investimenti in Transizione 5.0:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h4 className="text-lg font-semibold text-green-800 mb-3">Bandi per la Ricerca e Sviluppo</h4>
                <p className="text-green-700 text-sm">
                  Finanziamenti per progetti di R&S in ambito di tecnologie green e digitali, che possono includere lo sviluppo di soluzioni innovative per l'efficienza energetica e la digitalizzazione sostenibile.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h4 className="text-lg font-semibold text-blue-800 mb-3">Bandi per le Filiere Produttive</h4>
                <p className="text-blue-700 text-sm">
                  Supporto alla creazione e al rafforzamento di filiere produttive strategiche nazionali, con particolare attenzione alla sostenibilità e all'innovazione tecnologica.
                </p>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <h4 className="text-lg font-semibold text-yellow-800 mb-3">Bandi per la Formazione e le Competenze</h4>
                <p className="text-yellow-700 text-sm">
                  Finanziamenti per lo sviluppo di competenze specialistiche in ambito digitale e green, fondamentali per implementare con successo progetti di Transizione 5.0.
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                <h4 className="text-lg font-semibold text-purple-800 mb-3">Bandi per le Comunità Energetiche</h4>
                <p className="text-purple-700 text-sm">
                  Supporto alla creazione di comunità energetiche rinnovabili, che possono integrare progetti di efficienza energetica industriale in una logica di sistema territoriale.
                </p>
              </div>
            </div>
          </div>
          
          {/* Sottosezione 38.3 */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">38.3 Strategie di Integrazione</h3>
            <p className="text-gray-600 mb-6">
              Per massimizzare le opportunità offerte dalla combinazione di Transizione 5.0 e PNRR, le aziende possono adottare le seguenti strategie:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-cyan-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-cyan-800 mb-3">Approccio Integrato agli Investimenti</h4>
                <ul className="list-disc pl-6 text-cyan-700 space-y-2">
                  <li>Pianificare investimenti che soddisfino contemporaneamente i requisiti di più misure</li>
                  <li>Sviluppare progetti modulari che possano accedere a diverse fonti di finanziamento</li>
                  <li>Considerare l'intero ciclo di vita degli investimenti, dalla R&S all'implementazione</li>
                  <li>Valutare le complementarità tra crediti d'imposta e contributi a fondo perduto</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-orange-800 mb-3">Governance e Monitoraggio</h4>
                <ul className="list-disc pl-6 text-orange-700 space-y-2">
                  <li>Creare un team dedicato alla gestione integrata dei progetti</li>
                  <li>Implementare sistemi di monitoraggio che soddisfino i requisiti di rendicontazione di diverse misure</li>
                  <li>Mantenere una documentazione dettagliata e conforme alle diverse normative</li>
                  <li>Sviluppare KPI che integrino aspetti di digitalizzazione e sostenibilità</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <p className="text-red-700"><strong>Attenzione:</strong> È importante verificare le regole di cumulo tra diverse misure di incentivazione. In alcuni casi, l'accesso a contributi a fondo perduto del PNRR potrebbe limitare la possibilità di beneficiare del credito d'imposta Transizione 5.0 sullo stesso investimento. Consultare sempre un esperto per valutare la strategia ottimale.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sezione 39: Transizione 5.0 e Intelligenza Artificiale */}
      <div id="transizione-intelligenza-artificiale" className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">39. Transizione 5.0 e Intelligenza Artificiale</h2>
        <div className="prose max-w-none">
          
          <div className="bg-cyan-50 border-l-4 border-cyan-500 p-4 mb-6">
            <h4 className="text-cyan-800 font-semibold mb-2">🆕 AI Act UE e Implementazione 2025</h4>
            <p className="text-cyan-700">Allineamento con AI Act europeo per IA affidabile. Nuove applicazioni: edge AI, quantum computing, digital twin avanzati. Supporto per implementazione responsabile e conforme alle normative UE.</p>
          </div>

          {/* Sottosezione 39.1 */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">39.1 Ruolo dell'IA nella Transizione 5.0</h3>
            <p className="text-gray-600 mb-6">
              L'Intelligenza Artificiale rappresenta il motore tecnologico della Transizione 5.0, abilitando ottimizzazioni in tempo reale, manutenzione predittiva e gestione intelligente dell'energia:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-800 mb-3">IA per Efficienza Energetica</h4>
                <ul className="list-disc pl-6 text-blue-700 space-y-2">
                  <li><strong>Ottimizzazione consumi:</strong> Algoritmi predittivi per riduzione sprechi</li>
                  <li><strong>Load forecasting:</strong> Previsione carichi energetici</li>
                  <li><strong>Smart grid management:</strong> Gestione intelligente reti</li>
                  <li><strong>Energy trading:</strong> Ottimizzazione acquisti energia</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-green-800 mb-3">IA per Produzione</h4>
                <ul className="list-disc pl-6 text-green-700 space-y-2">
                  <li><strong>Quality control:</strong> Controllo qualità automatizzato</li>
                  <li><strong>Predictive maintenance:</strong> Manutenzione predittiva avanzata</li>
                  <li><strong>Process optimization:</strong> Ottimizzazione parametri produttivi</li>
                  <li><strong>Supply chain:</strong> Gestione intelligente fornitori</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-purple-800 mb-3">IA per Sostenibilità</h4>
                <ul className="list-disc pl-6 text-purple-700 space-y-2">
                  <li><strong>Carbon tracking:</strong> Monitoraggio emissioni real-time</li>
                  <li><strong>Circular economy:</strong> Ottimizzazione flussi materiali</li>
                  <li><strong>Environmental monitoring:</strong> Controllo impatto ambientale</li>
                  <li><strong>Compliance automation:</strong> Verifica automatica normative</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Sottosezione 39.2 */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">39.2 Applicazioni Pratiche e Implementazione</h3>
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-8 rounded-lg border-2 border-cyan-200">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Roadmap Implementazione IA</h4>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg">
                  <h5 className="font-semibold text-gray-700 mb-3">Tecnologie Emergenti:</h5>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li><strong>Edge AI:</strong> IA distribuita per ottimizzazione locale</li>
                    <li><strong>Quantum ML:</strong> Machine learning quantistico</li>
                    <li><strong>Federated learning:</strong> Apprendimento distribuito sicuro</li>
                    <li><strong>Explainable AI:</strong> IA interpretabile per compliance</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h5 className="font-semibold text-gray-700 mb-3">Settori di Applicazione:</h5>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li><strong>Manufacturing:</strong> Produzione intelligente e flessibile</li>
                    <li><strong>Energy:</strong> Gestione ottimizzata sistemi energetici</li>
                    <li><strong>Logistics:</strong> Supply chain sostenibile</li>
                    <li><strong>Agriculture:</strong> Agricoltura di precisione</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sottosezione 39.1 */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">39.1 Ruolo dell'IA nella Transizione 5.0</h3>
            <p className="text-gray-600 mb-6">
              L'Intelligenza Artificiale rappresenta una tecnologia abilitante fondamentale per la Transizione 5.0, in grado di integrare e potenziare sia la componente digitale che quella sostenibile:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h4 className="text-lg font-semibold text-blue-800 mb-3">IA per l'Efficienza Energetica</h4>
                <ul className="list-disc pl-6 text-blue-700 space-y-2">
                  <li>Ottimizzazione predittiva dei consumi energetici</li>
                  <li>Manutenzione predittiva per prevenire sprechi e inefficienze</li>
                  <li>Bilanciamento automatico dei carichi energetici</li>
                  <li>Gestione intelligente di sistemi di autoproduzione energetica</li>
                  <li>Ottimizzazione dei processi produttivi per ridurre l'impatto ambientale</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h4 className="text-lg font-semibold text-green-800 mb-3">IA per la Digitalizzazione Sostenibile</h4>
                <ul className="list-disc pl-6 text-green-700 space-y-2">
                  <li>Automazione avanzata dei processi con riduzione degli scarti</li>
                  <li>Analisi dei dati per identificare opportunità di efficientamento</li>
                  <li>Ottimizzazione della supply chain con riduzione dell'impronta carbonica</li>
                  <li>Personalizzazione della produzione con riduzione delle risorse impiegate</li>
                  <li>Simulazioni e digital twin per testare soluzioni senza impatto ambientale</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Sottosezione 39.2 */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">39.2 Applicazioni Pratiche dell'IA nella Transizione 5.0</h3>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-300">
                <thead className="bg-purple-50">
                  <tr>
                    <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">Ambito</th>
                    <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">Applicazione IA</th>
                    <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">Benefici per Transizione 5.0</th>
                    <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">Tecnologie</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-800 font-medium">Gestione Energetica</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Sistemi di Energy Management con IA predittiva</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Riduzione 15-30% dei consumi energetici, ottimizzazione automatica in tempo reale</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Machine Learning, Deep Learning, IoT</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-800 font-medium">Produzione</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Ottimizzazione parametri di processo con IA</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Riduzione scarti 20-40%, efficienza energetica migliorata, qualità superiore</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Reinforcement Learning, Computer Vision</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-800 font-medium">Manutenzione</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Manutenzione predittiva basata su IA</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Riduzione fermi macchina 30-50%, estensione vita utile, risparmio energetico</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Analisi predittiva, Digital Twin, Edge AI</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-800 font-medium">Supply Chain</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Ottimizzazione logistica e approvvigionamenti</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Riduzione emissioni CO2 15-25%, minori scorte, efficienza trasporti</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Algoritmi di ottimizzazione, Big Data Analytics</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-800 font-medium">Progettazione</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Design generativo e simulazione avanzata</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Prodotti più efficienti, riduzione materiali 20-30%, ottimizzazione prestazioni</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Generative AI, Simulazione numerica, Cloud Computing</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Sottosezione 39.3 */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">39.3 Implementazione dell'IA nei Progetti Transizione 5.0</h3>
            <p className="text-gray-600 mb-6">
              Per integrare efficacemente l'Intelligenza Artificiale nei progetti di Transizione 5.0, è consigliabile seguire un approccio strutturato:
            </p>
            
            <div className="grid md:grid-cols-1 gap-6 mb-6">
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-yellow-800 mb-4">Fasi di Implementazione</h4>
                <div className="grid md:grid-cols-5 gap-4">
                  <div className="text-center">
                    <div className="bg-yellow-200 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                      <span className="text-yellow-800 font-bold">1</span>
                    </div>
                    <h5 className="font-semibold text-yellow-800 mb-2">Assessment e Definizione Obiettivi</h5>
                    <p className="text-yellow-700 text-sm">Valutare i processi esistenti, identificare le aree con maggiore potenziale di miglioramento in termini di efficienza energetica e sostenibilità, definire KPI misurabili.</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-yellow-200 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                      <span className="text-yellow-800 font-bold">2</span>
                    </div>
                    <h5 className="font-semibold text-yellow-800 mb-2">Infrastruttura Dati</h5>
                    <p className="text-yellow-700 text-sm">Implementare sistemi di raccolta dati (sensori IoT, sistemi SCADA, MES) e creare un'architettura dati adeguata per alimentare i modelli di IA.</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-yellow-200 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                      <span className="text-yellow-800 font-bold">3</span>
                    </div>
                    <h5 className="font-semibold text-yellow-800 mb-2">Selezione e Sviluppo Modelli IA</h5>
                    <p className="text-yellow-700 text-sm">Scegliere le tecnologie IA più adatte agli obiettivi (machine learning, deep learning, reinforcement learning) e sviluppare modelli personalizzati o adattare soluzioni esistenti.</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-yellow-200 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                      <span className="text-yellow-800 font-bold">4</span>
                    </div>
                    <h5 className="font-semibold text-yellow-800 mb-2">Integrazione con Sistemi Esistenti</h5>
                    <p className="text-yellow-700 text-sm">Integrare le soluzioni IA con i sistemi di gestione energetica, controllo di processo e automazione esistenti, garantendo interoperabilità.</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-yellow-200 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                      <span className="text-yellow-800 font-bold">5</span>
                    </div>
                    <h5 className="font-semibold text-yellow-800 mb-2">Monitoraggio e Miglioramento Continuo</h5>
                    <p className="text-yellow-700 text-sm">Implementare sistemi di monitoraggio delle performance, valutare i risultati rispetto ai KPI definiti e migliorare continuamente i modelli IA.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-cyan-50 p-6 rounded-lg mb-6">
              <h4 className="text-lg font-semibold text-cyan-800 mb-3">Considerazioni sull'Ammissibilità al Credito d'Imposta</h4>
              <p className="text-cyan-700 mb-3">Per essere ammissibili al credito d'imposta Transizione 5.0, le soluzioni IA devono:</p>
              <ul className="list-disc pl-6 text-cyan-700 space-y-2">
                <li>Essere direttamente correlate al miglioramento dell'efficienza energetica o alla riduzione dell'impatto ambientale</li>
                <li>Generare benefici misurabili e quantificabili in termini di risparmio energetico o riduzione delle emissioni</li>
                <li>Essere parte integrante di un progetto più ampio che soddisfi i requisiti minimi di riduzione dei consumi energetici</li>
                <li>Essere adeguatamente documentate sia in fase progettuale che in fase di rendicontazione</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <p className="text-blue-700 text-sm"><strong>Nota importante:</strong> L'implementazione di soluzioni IA richiede competenze specialistiche. È consigliabile collaborare con partner tecnologici esperti, università o centri di ricerca per massimizzare l'efficacia dei progetti. Inoltre, considerare gli aspetti etici e di privacy nell'utilizzo dell'IA, adottando un approccio di "IA responsabile" che consideri anche l'impatto sociale delle tecnologie implementate.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sezione 40: Prospettive Future della Transizione 5.0 */}
      <div id="prospettive-future" className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">40. Prospettive Future della Transizione 5.0</h2>
        <div className="prose max-w-none">
          
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-4 mb-6">
            <h4 className="text-purple-800 font-semibold mb-2">🆕 Evoluzione Normativa 2025-2030</h4>
            <p className="text-purple-700">Roadmap verso Transizione 6.0: integrazione cyber-fisica completa, economia circolare by design, neutralità carbonica standard. Nuovi modelli business: Energy-as-a-Service, Industrial Symbiosis automatizzata.</p>
          </div>

          {/* Sottosezione 40.1 */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">40.1 Evoluzione del Quadro Normativo</h3>
            <p className="text-gray-600 mb-6">
              Il panorama normativo della Transizione 5.0 è in continua evoluzione, con aggiornamenti che riflettono i progressi tecnologici e le nuove sfide ambientali:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-800 mb-3">Sviluppi Normativi Attesi</h4>
                <ul className="list-disc pl-6 text-blue-700 space-y-2">
                  <li><strong>Green Deal 2.0:</strong> Nuovi target climatici UE al 2035</li>
                  <li><strong>AI Act implementation:</strong> Regolamentazione IA industriale</li>
                  <li><strong>Circular Economy Action Plan:</strong> Normative economia circolare</li>
                  <li><strong>Carbon Border Adjustment:</strong> Estensione settori coperti</li>
                  <li><strong>Taxonomy expansion:</strong> Nuove attività sostenibili</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-green-800 mb-3">Tecnologie Emergenti</h4>
                <ul className="list-disc pl-6 text-green-700 space-y-2">
                  <li><strong>Quantum computing:</strong> Simulazioni complesse efficienza</li>
                  <li><strong>6G networks:</strong> Comunicazioni ultra-efficienti</li>
                  <li><strong>Advanced materials:</strong> Materiali auto-riparanti</li>
                  <li><strong>Fusion energy:</strong> Energia pulita illimitata</li>
                  <li><strong>Space-based solar:</strong> Energia solare spaziale</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Sottosezione 40.2 */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">40.2 Nuovi Modelli di Business</h3>
            <p className="text-gray-600 mb-6">
              La Transizione 5.0 catalizza l'emergere di nuovi modelli di business che integrano sostenibilità e digitalizzazione:
            </p>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-300">
                <thead className="bg-indigo-50">
                  <tr>
                    <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">Modello di Business</th>
                    <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">Descrizione</th>
                    <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">Impatto sulla Transizione 5.0</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-800 font-medium">Energy-as-a-Service (EaaS)</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Fornitura di soluzioni energetiche complete con pagamento basato sui risultati</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Accelerazione investimenti senza impegno capitale iniziale</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-800 font-medium">Product-as-a-Service</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Vendita dell'uso invece del prodotto, incentivando durabilità</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Riduzione impatto ambientale e ottimizzazione ciclo vita</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-800 font-medium">Industrial Symbiosis</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Ecosistemi dove scarti di un'azienda diventano risorse per altre</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Ottimizzazione risorse sistemica e riduzione impatto</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-800 font-medium">Virtual Power Plants</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Aggregazione risorse energetiche distribuite</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-600">Valorizzazione flessibilità e integrazione rinnovabili</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Sottosezione 40.3 */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">40.3 Verso una Transizione 6.0</h3>
            <p className="text-gray-600 mb-6">
              Guardando oltre l'orizzonte attuale, possiamo intravedere i contorni di una futura "Transizione 6.0":
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200">
                <ul className="list-disc pl-6 text-purple-700 space-y-3">
                  <li><strong>Integrazione completa</strong> tra mondo fisico e digitale, con sistemi cyber-fisici autonomi</li>
                  <li><strong>Economia circolare by design</strong>, dove ogni prodotto è progettato per riutilizzo completo</li>
                  <li><strong>Neutralità carbonica come standard</strong>, non più come obiettivo</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200">
                <ul className="list-disc pl-6 text-blue-700 space-y-3">
                  <li><strong>Simbiosi industriale automatizzata</strong>, con piattaforme digitali per scambio risorse</li>
                  <li><strong>Personalizzazione sostenibile di massa</strong>, con minimo impatto ambientale</li>
                  <li><strong>Resilienza integrata</strong>, con adattamento rapido a shock esterni</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg border-2 border-green-200">
              <h4 className="text-xl font-bold text-gray-800 mb-4">Considerazioni Finali</h4>
              <p className="text-gray-700 mb-4">
                La Transizione 5.0 rappresenta un cambio di paradigma fondamentale per il sistema industriale italiano ed europeo. Le aziende che sapranno cogliere questa opportunità si posizioneranno strategicamente per un futuro sostenibile e competitivo.
              </p>
              <p className="text-gray-700 mb-4">
                Il percorso verso un'industria pienamente sostenibile e digitale richiede impegno continuo in innovazione, formazione e collaborazione tra tutti gli attori dell'ecosistema.
              </p>
              <p className="text-gray-700 font-semibold">
                Le aziende che oggi investono nella Transizione 5.0 stanno costruendo le fondamenta per prosperare in un'economia del futuro più sostenibile, efficiente e resiliente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
