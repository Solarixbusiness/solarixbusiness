import React from 'react';

export default function Parte4RisparmioEnergetico() {
  return (
    <div className="space-y-8">
      {/* Sezione 25: Casi di Studio */}
      <div id="casi-studio" className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">25. Casi di Studio</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">25.1 Caso Studio: Piccola Impresa Manifatturiera</h3>
          
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h4 className="text-lg font-semibold text-blue-800 mb-3">Profilo Azienda</h4>
            <ul className="text-blue-700 space-y-1">
              <li><strong>Settore:</strong> Manifatturiero (lavorazione metalli)</li>
              <li><strong>Dipendenti:</strong> 18</li>
              <li><strong>Fatturato annuo:</strong> 2,5 milioni di euro</li>
              <li><strong>Consumi energetici:</strong> 450.000 kWh/anno</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Investimento Realizzato</h4>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Acquisto di un nuovo macchinario a controllo numerico con tecnologie 4.0 (interconnesso)</li>
              <li>Installazione di un sistema di monitoraggio energetico</li>
              <li>Implementazione software MES per ottimizzazione produzione</li>
              <li>Installazione impianto fotovoltaico da 80 kWp</li>
            </ul>
            <p className="text-gray-700 mt-3"><strong>Costo totale dell'investimento:</strong> 320.000€</p>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Risultati Ottenuti</h4>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Riduzione consumi energetici: 5,2% per unità di prodotto (soglia base processo)</li>
              <li>Aumento produttività: +15%</li>
              <li>Riduzione scarti di produzione: -8%</li>
            </ul>
          </div>
          
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Componente</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Investimento</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Credito d'imposta</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Macchinario 4.0</td>
                  <td className="border border-gray-300 px-4 py-2">180.000€</td>
                  <td className="border border-gray-300 px-4 py-2">63.000€ (35%)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Sistema monitoraggio</td>
                  <td className="border border-gray-300 px-4 py-2">25.000€</td>
                  <td className="border border-gray-300 px-4 py-2">8.750€ (35%)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Software MES</td>
                  <td className="border border-gray-300 px-4 py-2">35.000€</td>
                  <td className="border border-gray-300 px-4 py-2">12.250€ (35%)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Impianto fotovoltaico</td>
                  <td className="border border-gray-300 px-4 py-2">80.000€</td>
                  <td className="border border-gray-300 px-4 py-2">28.000€ (35%)</td>
                </tr>
                <tr className="bg-gray-100 font-semibold">
                  <td className="border border-gray-300 px-4 py-2">TOTALE</td>
                  <td className="border border-gray-300 px-4 py-2">320.000€</td>
                  <td className="border border-gray-300 px-4 py-2">112.000€</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">25.2 Caso Studio: Media Impresa Settore Alimentare</h3>
          
          <div className="bg-green-50 p-6 rounded-lg mb-6">
            <h4 className="text-lg font-semibold text-green-800 mb-3">Profilo Azienda</h4>
            <ul className="text-green-700 space-y-1">
              <li><strong>Settore:</strong> Alimentare (produzione conserve)</li>
              <li><strong>Dipendenti:</strong> 85</li>
              <li><strong>Fatturato annuo:</strong> 12 milioni di euro</li>
              <li><strong>Consumi energetici:</strong> 1.800.000 kWh/anno</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Investimento Realizzato</h4>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Rinnovamento linea di produzione con macchinari 4.0</li>
              <li>Sistema di recupero calore dai processi produttivi</li>
              <li>Sistema di gestione intelligente dell'energia</li>
              <li>Software di pianificazione produzione integrato</li>
            </ul>
            <p className="text-gray-700 mt-3"><strong>Costo totale dell'investimento:</strong> 1.450.000€</p>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Risultati Ottenuti</h4>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Riduzione consumi energetici: 7,8% per unità di prodotto (soglia media struttura)</li>
              <li>Aumento capacità produttiva: +22%</li>
              <li>Riduzione tempi di fermo macchina: -35%</li>
              <li>Riduzione emissioni CO2: 120 tonnellate/anno</li>
            </ul>
          </div>
          
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Componente</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Investimento</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Credito d'imposta</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Linea produzione 4.0</td>
                  <td className="border border-gray-300 px-4 py-2">1.000.000€</td>
                  <td className="border border-gray-300 px-4 py-2">400.000€ (40%)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Sistema recupero calore</td>
                  <td className="border border-gray-300 px-4 py-2">200.000€</td>
                  <td className="border border-gray-300 px-4 py-2">80.000€ (40%)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Sistema gestione energia</td>
                  <td className="border border-gray-300 px-4 py-2">150.000€</td>
                  <td className="border border-gray-300 px-4 py-2">60.000€ (40%)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Software pianificazione</td>
                  <td className="border border-gray-300 px-4 py-2">100.000€</td>
                  <td className="border border-gray-300 px-4 py-2">40.000€ (40%)</td>
                </tr>
                <tr className="bg-gray-100 font-semibold">
                  <td className="border border-gray-300 px-4 py-2">TOTALE</td>
                  <td className="border border-gray-300 px-4 py-2">1.450.000€</td>
                  <td className="border border-gray-300 px-4 py-2">580.000€</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <p className="text-yellow-700"><strong>Nota:</strong> I casi di studio presentati sono esempi indicativi. I risultati possono variare in base alle specifiche condizioni aziendali, al tipo di investimento e alle modalità di implementazione. Le aliquote sono aggiornate alla Legge di Bilancio 2025 (35-45% con scaglioni progressivi).</p>
          </div>
        </div>
      </div>

      {/* Sezione 26: Confronto con Transizione 4.0 */}
      <div id="confronto-transizione-4-0" className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">26. Confronto con Transizione 4.0</h2>
        <div className="prose max-w-none">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">26.1 Principali Differenze</h3>
          
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Caratteristica</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Transizione 4.0</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Transizione 5.0</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">Focus principale</td>
                  <td className="border border-gray-300 px-4 py-2">Digitalizzazione e automazione</td>
                  <td className="border border-gray-300 px-4 py-2">Sostenibilità energetica + digitalizzazione</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">Requisito energetico</td>
                  <td className="border border-gray-300 px-4 py-2">Non richiesto</td>
                  <td className="border border-gray-300 px-4 py-2">Riduzione consumi energetici ≥3%/≥5% minimo (struttura/processo)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">Aliquote credito d'imposta</td>
                  <td className="border border-gray-300 px-4 py-2">20% fino 2,5M€, 10% 2,5-10M€, 5% 10-20M€</td>
                  <td className="border border-gray-300 px-4 py-2">35% fino 2,5M€, 15% 2,5-10M€, 5% 10-50M€ (maggiorazioni 40-45% per risparmi superiori)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">Maggiorazione base di calcolo</td>
                  <td className="border border-gray-300 px-4 py-2">140% del costo</td>
                  <td className="border border-gray-300 px-4 py-2">140% del costo (150% per fotovoltaici iscritti registro art. 12 DL 181/2023)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">Procedura di accesso</td>
                  <td className="border border-gray-300 px-4 py-2">Diretta (autocertificazione, prenotazione per 2025)</td>
                  <td className="border border-gray-300 px-4 py-2">Prenotazione tramite GSE con certificazioni ex ante/ex post</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">Cumulabilità</td>
                  <td className="border border-gray-300 px-4 py-2">Limitata (no sovrapposizioni con 5.0)</td>
                  <td className="border border-gray-300 px-4 py-2">Estesa (con ZES, PNRR, incentivi energetici, Transizione 4.0 su costi distinti)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">Periodo di validità</td>
                  <td className="border border-gray-300 px-4 py-2">Fino 2025 (con prenotazione obbligatoria)</td>
                  <td className="border border-gray-300 px-4 py-2">2024-2025 (completamento entro 30/06/2026 se avviato entro 2025)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">26.2 Vantaggi di Transizione 5.0</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-green-800 mb-3">Aspetti Migliorativi</h4>
              <ul className="list-disc pl-6 text-green-700 space-y-1">
                <li>Maggiore focus sulla sostenibilità ambientale</li>
                <li>Incentivazione diretta dell'efficienza energetica</li>
                <li>Maggiorazione della base di calcolo (fino 150% per rinnovabili)</li>
                <li>Migliore cumulabilità con altri incentivi (novità 2025 con ZES e PNRR)</li>
                <li>Inclusione esplicita di investimenti in energie rinnovabili</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-orange-800 mb-3">Aspetti Più Complessi</h4>
              <ul className="list-disc pl-6 text-orange-700 space-y-1">
                <li>Procedura di prenotazione preventiva</li>
                <li>Necessità di dimostrare il risparmio energetico</li>
                <li>Maggiori requisiti documentali</li>
                <li>Sistema di controlli più strutturato</li>
                <li>Aliquote base leggermente inferiori</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-blue-800 mb-3">Strategia di Transizione</h4>
            <p className="text-blue-700 mb-3">Per le aziende che hanno già beneficiato di Transizione 4.0, il passaggio a Transizione 5.0 rappresenta un'evoluzione naturale che consente di:</p>
            <ul className="list-disc pl-6 text-blue-700 space-y-1">
              <li>Completare il percorso di digitalizzazione con un focus sulla sostenibilità</li>
              <li>Ottimizzare i costi energetici riducendo l'impatto ambientale</li>
              <li>Integrare i sistemi 4.0 già implementati con soluzioni di efficientamento energetico</li>
              <li>Migliorare la competitività attraverso la riduzione dei costi operativi</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sezione 27: Strumenti di Calcolo */}
      <div id="strumenti-calcolo" className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">27. Strumenti di Calcolo</h2>
        <div className="prose max-w-none">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">27.1 Simulatore Credito d'Imposta</h3>
          <p className="text-gray-700 mb-4">
            Per facilitare la valutazione preliminare del potenziale beneficio fiscale, è disponibile un simulatore che permette di stimare il credito d'imposta ottenibile in base alle caratteristiche dell'investimento previsto (disponibile su piattaforma GSE o MIMIT).
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Istruzioni per l'Utilizzo del Simulatore</h4>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2">
              <li>Inserire la dimensione dell'impresa (piccola, media o grande)</li>
              <li>Specificare l'importo totale dell'investimento previsto</li>
              <li>Selezionare la tipologia di beni (materiali 4.0, immateriali 4.0, efficienza, rinnovabili)</li>
              <li>Indicare la percentuale stimata di risparmio energetico (struttura o processo)</li>
            </ol>
            
            <div className="mt-4">
              <h5 className="font-semibold text-gray-800 mb-2">Il simulatore calcolerà automaticamente:</h5>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>La base di calcolo maggiorata (140-150% del costo)</li>
                <li>L'aliquota applicabile in base al risparmio (35-45%)</li>
                <li>Il credito d'imposta stimato</li>
                <li>Il risparmio fiscale effettivo</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
            <p className="text-yellow-700"><strong>Nota:</strong> Il simulatore fornisce una stima indicativa. Il calcolo definitivo del credito d'imposta dipenderà dalla valutazione ufficiale del GSE e dall'effettivo risparmio energetico conseguito.</p>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">27.2 Metodologia di Calcolo del Risparmio Energetico</h3>
          <p className="text-gray-700 mb-4">
            Per il calcolo del risparmio energetico, è necessario seguire una metodologia standardizzata che confronti i consumi energetici prima e dopo l'investimento:
          </p>
          
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Fase</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Descrizione</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Documentazione</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">1. Misurazione ex-ante</td>
                  <td className="border border-gray-300 px-4 py-2">Rilevazione dei consumi energetici per unità di prodotto nell'anno precedente</td>
                  <td className="border border-gray-300 px-4 py-2">Bollette, report di consumo, registri di produzione</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">2. Implementazione</td>
                  <td className="border border-gray-300 px-4 py-2">Realizzazione dell'investimento con installazione di sistemi di monitoraggio</td>
                  <td className="border border-gray-300 px-4 py-2">Fatture, documenti di trasporto, certificati di installazione</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">3. Misurazione ex-post</td>
                  <td className="border border-gray-300 px-4 py-2">Rilevazione dei consumi energetici per unità di prodotto dopo l'investimento</td>
                  <td className="border border-gray-300 px-4 py-2">Report dei sistemi di monitoraggio, registri di produzione</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">4. Calcolo risparmio</td>
                  <td className="border border-gray-300 px-4 py-2">Determinazione della percentuale di riduzione dei consumi per unità di prodotto</td>
                  <td className="border border-gray-300 px-4 py-2">Perizia tecnica asseverata</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-blue-800 mb-3">Formula di Calcolo</h4>
            <p className="text-blue-700 mb-3">La percentuale di risparmio energetico si calcola con la seguente formula:</p>
            <div className="bg-white p-4 rounded border font-mono text-sm">
              % Risparmio = [(Consumo Ante / Unità Prodotto Ante) - (Consumo Post / Unità Prodotto Post)] / (Consumo Ante / Unità Prodotto Ante) x 100
            </div>
            <div className="mt-4 text-blue-700 text-sm">
              <p><strong>Dove:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Consumo Ante: consumo energetico totale nell'anno precedente l'investimento (in TEP o kWh)</li>
                <li>Unità Prodotto Ante: quantità di prodotto realizzata nell'anno precedente</li>
                <li>Consumo Post: consumo energetico dopo l'implementazione dell'investimento (in TEP o kWh)</li>
                <li>Unità Prodotto Post: quantità di prodotto realizzata dopo l'investimento</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Sezione 28: Integrazione con PNRR */}
      <div id="integrazione-pnrr" className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">28. Integrazione con PNRR</h2>
        <div className="prose max-w-none">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">28.1 Sinergie con il Piano Nazionale di Ripresa e Resilienza</h3>
          <p className="text-gray-700 mb-4">
            Il Piano Transizione 5.0 si inserisce in modo complementare all'interno del quadro più ampio del PNRR (Piano Nazionale di Ripresa e Resilienza), contribuendo agli obiettivi di:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>Transizione ecologica e digitale del sistema produttivo italiano</li>
            <li>Raggiungimento degli obiettivi climatici dell'UE per il 2030 (riduzione 55% emissioni)</li>
            <li>Incremento della competitività del sistema industriale nazionale</li>
            <li>Riduzione della dipendenza energetica da fonti fossili (obiettivo 0,4 Mtep risparmio entro 2026)</li>
          </ul>
          
          <div className="bg-purple-50 p-6 rounded-lg mb-6">
            <h4 className="text-lg font-semibold text-purple-800 mb-3">Missioni PNRR Correlate</h4>
            <ul className="list-disc pl-6 text-purple-700 space-y-1">
              <li><strong>Missione 1:</strong> Digitalizzazione, innovazione, competitività, cultura e turismo</li>
              <li><strong>Missione 2:</strong> Rivoluzione verde e transizione ecologica (allineato REPowerEU)</li>
              <li><strong>Missione 4:</strong> Istruzione e ricerca</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">28.2 Opportunità di Finanziamento Complementari</h3>
          <p className="text-gray-700 mb-4">
            Oltre al credito d'imposta Transizione 5.0, le imprese possono accedere a ulteriori strumenti di supporto finanziario previsti dal PNRR:
          </p>
          
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Strumento</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Descrizione</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Cumulabilità</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Fondo Innovazione</td>
                  <td className="border border-gray-300 px-4 py-2">Contributi a fondo perduto per progetti di ricerca e sviluppo</td>
                  <td className="border border-gray-300 px-4 py-2">Parziale, nei limiti del costo sostenuto</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Fondo Competenze</td>
                  <td className="border border-gray-300 px-4 py-2">Finanziamenti per formazione e aggiornamento del personale</td>
                  <td className="border border-gray-300 px-4 py-2">Totale (spese diverse)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Fondo Garanzia PMI</td>
                  <td className="border border-gray-300 px-4 py-2">Garanzie pubbliche su finanziamenti per investimenti</td>
                  <td className="border border-gray-300 px-4 py-2">Totale</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Bandi Energia PNRR</td>
                  <td className="border border-gray-300 px-4 py-2">Contributi per progetti di efficientamento energetico</td>
                  <td className="border border-gray-300 px-4 py-2">Parziale, con limitazioni specifiche</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <p className="text-red-700"><strong>Attenzione:</strong> La cumulabilità tra Transizione 5.0 e altri strumenti del PNRR deve essere verificata caso per caso, in quanto soggetta a limitazioni specifiche e al rispetto del principio di non doppio finanziamento della stessa spesa. Novità 2025: Cumulo esteso con ZES.</p>
          </div>
        </div>
      </div>

      {/* Sezione 29: Normativa di Riferimento */}
      <div id="normativa-riferimento" className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">29. Normativa di Riferimento</h2>
        <div className="prose max-w-none">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">29.1 Quadro Normativo</h3>
          
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Riferimento</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Descrizione</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Ambito</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Legge n. 213/2023</td>
                  <td className="border border-gray-300 px-4 py-2">Legge di Bilancio 2024 - Istituzione del Piano Transizione 5.0</td>
                  <td className="border border-gray-300 px-4 py-2">Normativa primaria</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Decreto MIMIT-MEF del 06/03/2024</td>
                  <td className="border border-gray-300 px-4 py-2">Disposizioni applicative del credito d'imposta Transizione 5.0</td>
                  <td className="border border-gray-300 px-4 py-2">Decreto attuativo</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Circolare GSE n. 2/2024</td>
                  <td className="border border-gray-300 px-4 py-2">Procedura operativa per l'accesso al credito d'imposta</td>
                  <td className="border border-gray-300 px-4 py-2">Procedura operativa</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Circolare Agenzia Entrate n. 11/E/2024</td>
                  <td className="border border-gray-300 px-4 py-2">Chiarimenti fiscali sull'utilizzo del credito d'imposta</td>
                  <td className="border border-gray-300 px-4 py-2">Interpretazione fiscale</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Risoluzione Agenzia Entrate n. 45/E/2024</td>
                  <td className="border border-gray-300 px-4 py-2">Istituzione codici tributo per l'utilizzo in compensazione</td>
                  <td className="border border-gray-300 px-4 py-2">Aspetti operativi</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Decreto MIMIT del 15/04/2024</td>
                  <td className="border border-gray-300 px-4 py-2">Metodologia standardizzata per il calcolo del risparmio energetico</td>
                  <td className="border border-gray-300 px-4 py-2">Aspetti tecnici</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Circolare operativa MIMIT 16/08/2024</td>
                  <td className="border border-gray-300 px-4 py-2">Chiarimenti su certificazioni e scenari controfattuali</td>
                  <td className="border border-gray-300 px-4 py-2">Procedura operativa</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Legge n. 207/2024</td>
                  <td className="border border-gray-300 px-4 py-2">Legge di Bilancio 2025 - Semplificazioni aliquote e cumulabilità</td>
                  <td className="border border-gray-300 px-4 py-2">Normativa primaria</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">29.2 Evoluzione Normativa</h3>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Cronologia dei Principali Interventi Legislativi</h4>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Dicembre 2023:</strong> Introduzione del Piano Transizione 5.0 nella Legge di Bilancio 2024</li>
              <li><strong>Marzo 2024:</strong> Pubblicazione del decreto attuativo con le disposizioni operative</li>
              <li><strong>Aprile 2024:</strong> Attivazione della piattaforma GSE per la prenotazione del credito</li>
              <li><strong>Maggio 2024:</strong> Pubblicazione delle linee guida tecniche per la misurazione del risparmio energetico</li>
              <li><strong>Giugno 2024:</strong> Chiarimenti dell'Agenzia delle Entrate sugli aspetti fiscali</li>
              <li><strong>Agosto 2024:</strong> Circolare operativa su procedure GSE</li>
              <li><strong>Dicembre 2024:</strong> Legge di Bilancio 2025 con semplificazioni (aliquote, cumulabilità)</li>
              <li><strong>Aprile 2025:</strong> Aggiornamento FAQ GSE</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p className="text-blue-700"><strong>Nota:</strong> Il quadro normativo è in costante evoluzione. Si consiglia di verificare sempre gli aggiornamenti sul sito del Ministero delle Imprese e del Made in Italy (MIMIT) e del GSE.</p>
          </div>
        </div>
      </div>

      {/* Sezione 30: Glossario */}
      <div id="glossario" className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">30. Glossario</h2>
        <div className="prose max-w-none">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">30.1 Terminologia Tecnica</h3>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-gray-800">Beni strumentali 4.0</h4>
              <p className="text-gray-700">Macchinari, impianti e attrezzature dotati di tecnologie avanzate di automazione, interconnessione e intelligenza artificiale, conformi ai requisiti dell'Allegato A della legge 232/2016.</p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-gray-800">Interconnessione</h4>
              <p className="text-gray-700">Capacità del bene di scambiare informazioni con sistemi interni (es. sistema gestionale, sistemi di pianificazione, sistemi di progettazione, ecc.) e/o esterni (es. clienti, fornitori, partner, ecc.) attraverso un collegamento basato su specifiche documentate e disponibili pubblicamente.</p>
            </div>
            
            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-semibold text-gray-800">Risparmio energetico specifico</h4>
              <p className="text-gray-700">Riduzione del consumo energetico per unità di prodotto o servizio, calcolata confrontando il consumo energetico specifico prima e dopo l'implementazione dell'investimento.</p>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold text-gray-800">GSE</h4>
              <p className="text-gray-700">Gestore dei Servizi Energetici, società pubblica incaricata della gestione delle procedure di accesso al credito d'imposta Transizione 5.0.</p>
            </div>
            
            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-semibold text-gray-800">Perizia tecnica asseverata</h4>
              <p className="text-gray-700">Documento redatto da un tecnico abilitato che attesta la conformità dei beni ai requisiti tecnici e il raggiungimento degli obiettivi di risparmio energetico, con assunzione di responsabilità civile e penale da parte del perito.</p>
            </div>
            
            <div className="border-l-4 border-yellow-500 pl-4">
              <h4 className="font-semibold text-gray-800">Comunicazione ex-ante</h4>
              <p className="text-gray-700">Comunicazione preventiva al GSE per la prenotazione del credito d'imposta, da effettuare prima dell'avvio dell'investimento, con certificazione del risparmio atteso.</p>
            </div>
            
            <div className="border-l-4 border-indigo-500 pl-4">
              <h4 className="font-semibold text-gray-800">Comunicazione di completamento</h4>
              <p className="text-gray-700">Comunicazione finale al GSE che attesta l'effettiva realizzazione dell'investimento e il conseguimento degli obiettivi di risparmio energetico, con certificazione ex post.</p>
            </div>
            
            <div className="border-l-4 border-teal-500 pl-4">
              <h4 className="font-semibold text-gray-800">Baseline energetica</h4>
              <p className="text-gray-700">Riferimento iniziale dei consumi energetici dell'impresa, calcolato sulla base dei consumi dell'anno precedente l'investimento, utilizzato come termine di paragone per la misurazione del risparmio energetico (in TEP - Tonnellate Equivalenti di Petrolio).</p>
            </div>
            
            <div className="border-l-4 border-pink-500 pl-4">
              <h4 className="font-semibold text-gray-800">Scenario controfattuale</h4>
              <p className="text-gray-700">Scenario ipotetico che rappresenta l'evoluzione dei consumi energetici in assenza dell'investimento agevolato, utilizzato come riferimento per le imprese di nuova costituzione o in caso di modifiche significative del processo produttivo.</p>
            </div>
            
            <div className="border-l-4 border-gray-500 pl-4">
              <h4 className="font-semibold text-gray-800">Credito d'imposta</h4>
              <p className="text-gray-700">Beneficio fiscale che consente di compensare debiti tributari e contributivi con un credito riconosciuto dallo Stato in relazione a specifiche spese sostenute dall'impresa.</p>
            </div>
            
            <div className="border-l-4 border-cyan-500 pl-4">
              <h4 className="font-semibold text-gray-800">TEP (Tonnellate Equivalenti di Petrolio)</h4>
              <p className="text-gray-700">Unità di misura standard per i consumi energetici, utilizzata per il calcolo del risparmio.</p>
            </div>
            
            <div className="border-l-4 border-emerald-500 pl-4">
              <h4 className="font-semibold text-gray-800">ESP (Energy Service Provider)</h4>
              <p className="text-gray-700">Fornitore di servizi energetici accreditato per certificazioni ex ante/ex post.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sezione 31: Casi di Studio Avanzati */}
      <div id="casi-studio-avanzati" className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">31. Casi di Studio Avanzati</h2>
        <div className="prose max-w-none">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">31.1 Settore Manifatturiero Avanzato</h3>
          
          <div className="bg-indigo-50 p-6 rounded-lg mb-6">
            <h4 className="text-lg font-semibold text-indigo-800 mb-3">Caso Studio: Automazione Integrata con Efficienza Energetica</h4>
            <p className="text-indigo-700 mb-3"><strong>Azienda:</strong> MetalTech S.p.A. - Media impresa del settore metallurgico</p>
          </div>
          
          <div className="mb-6">
            <h5 className="font-semibold text-gray-800 mb-3">Situazione iniziale:</h5>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Macchinari obsoleti con elevati consumi energetici</li>
              <li>Processo produttivo frammentato e scarsamente digitalizzato</li>
              <li>Costi energetici che rappresentavano il 28% dei costi operativi</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h5 className="font-semibold text-gray-800 mb-3">Investimento realizzato:</h5>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Sostituzione di 5 linee produttive con macchinari 4.0 ad alta efficienza energetica</li>
              <li>Implementazione di un sistema MES (Manufacturing Execution System) integrato</li>
              <li>Installazione di un sistema di monitoraggio energetico in tempo reale</li>
              <li>Impianto fotovoltaico da 450 kW per autoconsumo</li>
            </ul>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="font-semibold text-gray-800 mb-3">Valore dell'investimento:</h5>
              <ul className="text-gray-700 space-y-1">
                <li><strong>Totale:</strong> €3.800.000</li>
                <li><strong>Beni materiali 4.0:</strong> €2.900.000</li>
                <li><strong>Beni immateriali 4.0:</strong> €400.000</li>
                <li><strong>Impianto fotovoltaico:</strong> €500.000</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h5 className="font-semibold text-green-800 mb-3">Risultati ottenuti:</h5>
              <ul className="text-green-700 space-y-1">
                <li>Riduzione del consumo energetico specifico: 32% (soglia max processo)</li>
                <li>Aumento della produttività: 25%</li>
                <li>Credito d'imposta ottenuto: €1.710.000 (45%)</li>
                <li>Tempo di ritorno dell'investimento: 2,8 anni</li>
                <li>Riduzione delle emissioni di CO₂: 420 tonnellate/anno</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">31.2 Settore Agroalimentare</h3>
          
          <div className="bg-emerald-50 p-6 rounded-lg mb-6">
            <h4 className="text-lg font-semibold text-emerald-800 mb-3">Caso Studio: Trasformazione Digitale e Sostenibile</h4>
            <p className="text-emerald-700 mb-3"><strong>Azienda:</strong> BioFood S.r.l. - Piccola impresa di trasformazione alimentare</p>
          </div>
          
          <div className="mb-6">
            <h5 className="font-semibold text-gray-800 mb-3">Situazione iniziale:</h5>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Processi di lavorazione ad alto consumo termico</li>
              <li>Assenza di sistemi di recupero del calore</li>
              <li>Limitata digitalizzazione della catena produttiva</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h5 className="font-semibold text-gray-800 mb-3">Investimento realizzato:</h5>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Nuova linea di lavorazione con recupero termico integrato</li>
              <li>Sistema di tracciabilità digitale della filiera</li>
              <li>Pompe di calore industriali per la climatizzazione</li>
              <li>Software di ottimizzazione energetica dei processi</li>
            </ul>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="font-semibold text-gray-800 mb-3">Valore dell'investimento:</h5>
              <ul className="text-gray-700 space-y-1">
                <li><strong>Totale:</strong> €950.000</li>
                <li><strong>Beni materiali 4.0:</strong> €750.000</li>
                <li><strong>Beni immateriali 4.0:</strong> €200.000</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h5 className="font-semibold text-green-800 mb-3">Risultati ottenuti:</h5>
              <ul className="text-green-700 space-y-1">
                <li>Riduzione del consumo energetico specifico: 41% (soglia max struttura)</li>
                <li>Miglioramento della qualità del prodotto</li>
                <li>Credito d'imposta ottenuto: €427.500 (45%)</li>
                <li>Tempo di ritorno dell'investimento: 2,2 anni</li>
                <li>Riduzione dei costi operativi: 22%</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
            <p className="text-amber-700"><strong>Nota importante:</strong> I casi di studio presentati sono esempi reali ma con dati adattati per ragioni di riservatezza. I risultati possono variare in base alle specifiche condizioni operative e alle caratteristiche dell'impresa.</p>
          </div>
        </div>
      </div>

      {/* Sezione 32: Formazione e Competenze */}
      <div id="formazione-competenze" className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">32. Formazione e Competenze</h2>
        <div className="prose max-w-none">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">32.1 Competenze Necessarie</h3>
          <p className="text-gray-700 mb-4">
            L'implementazione efficace di progetti Transizione 5.0 richiede un mix di competenze tecniche e gestionali. Di seguito le principali aree di competenza necessarie:
          </p>
          
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Area di Competenza</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Conoscenze Specifiche</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Ruoli Aziendali</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Tecnologie 4.0</td>
                  <td className="border border-gray-300 px-4 py-2">IoT, Big Data, Cloud Computing, AI/ML, Robotica</td>
                  <td className="border border-gray-300 px-4 py-2">CTO, IT Manager, Ingegneri di processo</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Efficienza Energetica</td>
                  <td className="border border-gray-300 px-4 py-2">Audit energetici, Sistemi di monitoraggio, KPI energetici</td>
                  <td className="border border-gray-300 px-4 py-2">Energy Manager, Tecnici specializzati</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Sostenibilità</td>
                  <td className="border border-gray-300 px-4 py-2">LCA, Carbon footprint, Economia circolare</td>
                  <td className="border border-gray-300 px-4 py-2">Sustainability Manager, ESG Specialist</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Gestione Progetti</td>
                  <td className="border border-gray-300 px-4 py-2">Project management, Change management</td>
                  <td className="border border-gray-300 px-4 py-2">Project Manager, Operations Manager</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Aspetti Finanziari</td>
                  <td className="border border-gray-300 px-4 py-2">ROI, TCO, Analisi costi-benefici</td>
                  <td className="border border-gray-300 px-4 py-2">CFO, Controller, Finance Manager</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">32.2 Percorsi Formativi</h3>
          <p className="text-gray-700 mb-4">
            Per sviluppare le competenze necessarie, le imprese possono accedere a diversi percorsi formativi (spese ammissibili fino al 10% degli investimenti, max 300.000€, per formazione su transizione digitale/energetica, completata entro 31/12/2025):
          </p>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-gray-800">Formazione Finanziata</h4>
              <p className="text-gray-700">Corsi di formazione per il personale finanziati attraverso fondi interprofessionali (es. Fondimpresa, Fondirigenti) o FSE.</p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-gray-800">ITS Academy</h4>
              <p className="text-gray-700">Percorsi biennali post-diploma altamente specializzati nelle tecnologie 4.0 e nell'efficienza energetica.</p>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold text-gray-800">Competence Center</h4>
              <p className="text-gray-700">Centri di competenza ad alta specializzazione che offrono formazione, consulenza e supporto alle imprese sui temi di Industria 4.0 e Transizione 5.0.</p>
            </div>
            
            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-semibold text-gray-800">Digital Innovation Hub</h4>
              <p className="text-gray-700">Sportelli territoriali che offrono servizi di formazione e orientamento alle PMI sui temi della trasformazione digitale e sostenibile.</p>
            </div>
            
            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-semibold text-gray-800">Master e Corsi Universitari</h4>
              <p className="text-gray-700">Percorsi di alta formazione su temi specifici come Energy Management, Digital Transformation, Sostenibilità Industriale.</p>
            </div>
          </div>
          
          <div className="bg-cyan-50 p-6 rounded-lg mt-6">
            <h4 className="text-lg font-semibold text-cyan-800 mb-3">Credito d'Imposta Formazione 4.0</h4>
            <p className="text-cyan-700 mb-3">Le imprese possono beneficiare anche del credito d'imposta per la formazione 4.0, che copre parte del costo del personale impegnato in attività formative su tecnologie abilitanti per la transizione digitale ed energetica.</p>
            <ul className="list-disc pl-6 text-cyan-700 space-y-1">
              <li>Aliquota del 50% per le piccole imprese (max €300.000)</li>
              <li>Aliquota del 40% per le medie imprese (max €250.000)</li>
              <li>Aliquota del 30% per le grandi imprese (max €200.000)</li>
            </ul>
          </div>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mt-6">
            <p className="text-red-700"><strong>Importante:</strong> La formazione del personale è un elemento cruciale per il successo dei progetti Transizione 5.0. Senza adeguate competenze interne, anche i migliori investimenti tecnologici rischiano di non generare i risultati attesi in termini di efficienza e risparmio energetico.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
