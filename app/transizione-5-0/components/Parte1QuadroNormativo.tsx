import React from 'react';

export default function Parte1QuadroNormativo() {
  return (
    <div className="space-y-8">
      {/* Sezione 1: Che cos'è il Piano Transizione 5.0 */}
      <div id="che-cose-piano" className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">1. Che cos'è il Piano Transizione 5.0</h2>
        <div className="prose max-w-none">
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
            <h4 className="text-green-800 font-semibold mb-2">🆕 Aggiornamenti Normativi al 19 Agosto 2025</h4>
            <p className="text-green-700">La Legge di Bilancio 2025 (L. 207/2024, commi 427-429) ha introdotto semplificazioni, ampliamenti e correttivi significativi con risorse residue elevate (circa €5,4 miliardi ad agosto 2025). Nessuna proroga confermata oltre il 31 dicembre 2025, ma completamento parziale fino aprile 2026 per investimenti avviati entro 2025.</p>
          </div>
          
          <p className="text-gray-700 mb-4">
            Il Piano Transizione 5.0 è una misura innovativa che mira a sostenere la trasformazione digitale ed energetica delle imprese italiane. L'obiettivo specifico è guidare il sistema produttivo verso un modello più:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Efficiente dal punto di vista energetico</li>
            <li>Sostenibile ambientalmente</li>
            <li>Basato sulle fonti rinnovabili</li>
            <li><strong>Nuovo 2025:</strong> Integrato con sistemi di storage energetico e smart grid</li>
            <li><strong>Nuovo 2025:</strong> Potenziato con AI e machine learning per efficienza</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Integrazione con Altri Piani</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Si inserisce come complemento al Piano Transizione 4.0 <span className="text-green-600 font-medium">(ora cumulabile su progetti distinti - Novità 2025)</span></li>
            <li>È allineato con le azioni previste dal piano REPowerEU</li>
            <li>Fa parte della strategia nazionale di transizione ecologica</li>
            <li><strong>Nuovo 2025:</strong> Cumulabile con PNRR, ZES e altri incentivi</li>
          </ul>
          
          <p className="text-gray-700 mb-4">
            Il Piano Transizione 5.0 rappresenta un'evoluzione significativa rispetto al precedente Piano 4.0, aggiungendo alla digitalizzazione l'obiettivo fondamentale dell'efficienza energetica e della sostenibilità ambientale. Le novità 2025 ampliano significativamente le possibilità di accesso e utilizzo.
          </p>
        </div>
      </div>

      {/* Sezione 2: Quadro Normativo di Riferimento */}
      <div id="quadro-normativo" className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">2. Quadro Normativo di Riferimento</h2>
        <div className="prose max-w-none">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">2.1 Normativa Principale</h3>
          <p className="text-gray-700 mb-4">Fondamento legislativo:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Art. 38 del decreto-legge 2 marzo 2024, n. 19 (Decreto PNRR-quater)</li>
            <li>Conversione: Legge 29 aprile 2024, n. 56</li>
          </ul>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
            <h4 className="text-yellow-800 font-semibold mb-2">📋 Modifiche Legge di Bilancio 2025</h4>
            <p className="text-yellow-700 mb-2">Commi 427-429 della Legge 30 dicembre 2024, n. 207:</p>
            <ul className="list-disc pl-6 text-yellow-700 text-sm">
              <li>Semplificazione scaglioni: eliminato doppio scaglione, ora unico fino 10M€</li>
              <li>Ampliamento cumulabilità con Transizione 4.0, PNRR, ZES</li>
              <li>Estensione a settore agricolo, pesca e acquacoltura</li>
              <li>Inclusione storage energetico e sistemi intelligenti</li>
              <li>Procedure semplificate per investimenti &lt;300K€</li>
            </ul>
          </div>
          
          <p className="text-gray-700 mb-4">Modifiche significative:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Commi 427-429 della Legge 30 dicembre 2024, n. 207 (Legge di Bilancio 2025)</li>
            <li>Ampliamento dell'ambito di applicazione</li>
            <li>Semplificazione delle procedure di accesso</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4">2.2 Decreti Attuativi</h3>
          <p className="text-gray-700 mb-4">Decreto Ministeriale 24 luglio 2024:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Del Ministro delle Imprese e del Made in Italy</li>
            <li>Di concerto con il Ministro dell'Economia e delle Finanze</li>
            <li>Denominato DM "Transizione 5.0"</li>
          </ul>
          
          <p className="text-gray-700 mb-4">Circolare MIMIT 16 agosto 2024:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Del Ministero delle Imprese e del Made in Italy</li>
            <li>Chiarimenti operativi su certificazione e scenari controfattuali</li>
            <li>Istruzioni tecniche per energy manager e enti accreditati</li>
            <li>Metodologie per imprese nuove e calcoli TEP</li>
          </ul>
        </div>
      </div>

      {/* Sezione 3: Natura dell'Agevolazione */}
      <div id="natura-agevolazione" className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">3. Natura dell'Agevolazione</h2>
        <div className="prose max-w-none">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">3.1 Tipologia di Incentivo</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Credito d'imposta per progetti di innovazione</li>
            <li>Non è aiuto di Stato (misura generale e non selettiva)</li>
            <li>Utilizzabile in compensazione tramite modello F24</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4">3.2 Dotazione Finanziaria</h3>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <h4 className="text-blue-800 font-semibold mb-2">💰 Situazione Risorse Agosto 2025</h4>
            <p className="text-blue-700">Dotazione totale: €6,3 miliardi | Risorse residue: circa €5,4 miliardi (ad agosto 2025, basso utilizzo incentivato da semplificazioni)</p>
          </div>
          
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>€6,3 miliardi per il biennio 2024-2025</li>
            <li>Budget significativo per sostenere la transizione</li>
            <li><strong>Aggiornamento 2025:</strong> Elevate risorse residue disponibili (circa €5,4 miliardi)</li>
            <li><strong>Nuovo codice tributo:</strong> Aggiornato da Agenzia Entrate (febbraio 2025)</li>
          </ul>
          
          <p className="text-gray-700 mb-4">
            Il credito d'imposta Transizione 5.0 si configura come una misura generale e non selettiva, pertanto non rientra nella disciplina degli aiuti di Stato. Questo aspetto è particolarmente vantaggioso in quanto consente una maggiore flessibilità nell'applicazione e nella cumulabilità con altre agevolazioni. Le semplificazioni 2025 hanno reso l'accesso più agevole, con ampie risorse ancora disponibili.
          </p>
        </div>
      </div>

      {/* Sezione 4: Ambito Temporale */}
      <div id="ambito-temporale" className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">4. Ambito Temporale</h2>
        <div className="prose max-w-none">
          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-4">
            <h4 className="text-orange-800 font-semibold mb-2">⚠️ Proroga e Completamento Parziale 2025</h4>
            <p className="text-orange-700">Nessuna proroga confermata oltre il 31 dicembre 2025, ma completamento parziale fino 30 aprile 2026 per investimenti con ordine vincolante entro 31/12/2025.</p>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4">4.1 Periodo di Ammissibilità</h3>
          <p className="text-gray-700 mb-4">Investimenti ammissibili:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Avviati dal 1° gennaio 2024</li>
            <li>Completati entro il 31 dicembre 2025</li>
            <li><strong>Novità 2025:</strong> Completamento parziale fino 30 aprile 2026 (con ordine vincolante entro 2025)</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4">4.2 Definizione di "Avvio"</h3>
          <p className="text-gray-700 mb-4">L'investimento si considera avviato alla data del:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Primo impegno giuridicamente vincolante ad ordinare i beni (es. ordine o acconto ≥20%)</li>
            <li>Qualsiasi altro impegno che renda l'investimento irreversibile</li>
            <li><strong>Esempi di "avvio":</strong> Ordine confermato, acconto significativo, contratto vincolante</li>
          </ul>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
            <p className="text-red-700 font-semibold">ATTENZIONE: Investimenti ordinati o prenotati nel 2023 o anni precedenti NON sono ammissibili, anche se consegna e messa in funzione avvengono nel 2024-2025.</p>
          </div>
          
          <p className="text-gray-700 mb-4">
            È fondamentale prestare particolare attenzione alla data di avvio dell'investimento, in quanto rappresenta un criterio discriminante per l'ammissibilità al Piano Transizione 5.0. La documentazione relativa agli ordini e agli impegni deve essere conservata con cura per eventuali controlli.
          </p>
        </div>
      </div>

      {/* Sezione 5: Requisito Fondamentale: Riduzione Consumi Energetici */}
      <div id="requisito-fondamentale" className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">5. Requisito Fondamentale: Riduzione Consumi Energetici</h2>
        <div className="prose max-w-none">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">5.1 Condizione Essenziale</h3>
          <p className="text-gray-700 mb-4">
            Per accedere al credito d'imposta Transizione 5.0, è indispensabile che l'investimento comporti una riduzione dei consumi energetici dell'unità produttiva interessata.
          </p>
          
          <h4 className="text-lg font-semibold text-gray-800 mb-3">Soglie Minime di Riduzione</h4>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
            <h5 className="text-yellow-800 font-semibold mb-2">📊 Soglie Duali per Struttura e Processo</h5>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-yellow-700 font-medium mb-2">Struttura Produttiva:</p>
                <ul className="list-disc pl-4 text-yellow-700 text-sm">
                  <li>≥3% (aliquota base)</li>
                  <li>≥6% (aliquota media)</li>
                  <li>≥10% (aliquota massima)</li>
                </ul>
              </div>
              <div>
                <p className="text-yellow-700 font-medium mb-2">Area di Processo:</p>
                <ul className="list-disc pl-4 text-yellow-700 text-sm">
                  <li>≥5% (aliquota base)</li>
                  <li>≥10% (aliquota media)</li>
                  <li>≥15% (aliquota massima)</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
            <h4 className="text-green-800 font-semibold mb-2">🆕 Nuova Metodologia 2025 - Imprese Nuove</h4>
            <p className="text-green-700">Per imprese di nuova costituzione: scenario controfattuale con almeno 3 beni alternativi UE. Certificazione ora possibile da energy manager interno (semplificazione).</p>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4">5.2 Modalità di Misurazione</h3>
          <p className="text-gray-700 mb-4">La riduzione dei consumi energetici deve essere:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Misurata in termini di energia primaria totale (TEP)</li>
            <li>Calcolata rispetto alla media dei consumi dei due anni precedenti l'investimento</li>
            <li>Normalizzata su bollette e dati documentati degli ultimi 2 anni</li>
            <li>Certificata da un tecnico abilitato o da un ente accreditato</li>
            <li><strong>Novità 2025:</strong> Energy manager interno ora abilitato alla certificazione</li>
            <li><strong>Imprese nuove:</strong> Scenario controfattuale con almeno 3 beni alternativi UE</li>
            <li><strong>Impianti preesistenti:</strong> Calcolo fabbisogno netto riducendo potenza installabile</li>
          </ul>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
            <p className="text-red-700 font-semibold">IMPORTANTE: Il mancato raggiungimento della soglia minima di riduzione dei consumi energetici comporta la decadenza totale dal beneficio, con obbligo di restituzione dell'intero credito eventualmente già utilizzato.</p>
          </div>
        </div>
      </div>

      {/* Sezione 6: Soggetti Beneficiari */}
      <div id="soggetti-beneficiari" className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">6. Soggetti Beneficiari</h2>
        <div className="prose max-w-none">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">6.1 Imprese Ammesse</h3>
          <p className="text-gray-700 mb-4">Possono beneficiare dell'agevolazione:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Tutte le imprese residenti nel territorio dello Stato</li>
            <li>Stabili organizzazioni di soggetti non residenti</li>
            <li>Indipendentemente dalla forma giuridica, dimensione, regime fiscale o settore economico</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4">6.2 Requisiti Generali</h3>
          <p className="text-gray-700 mb-4">Le imprese devono rispettare le seguenti condizioni:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Essere in regola con le normative sulla sicurezza nei luoghi di lavoro</li>
            <li>Essere in regola con gli obblighi di versamento dei contributi previdenziali e assistenziali</li>
            <li>Non essere in stato di liquidazione volontaria, fallimento, liquidazione coatta amministrativa, concordato preventivo senza continuità aziendale</li>
          </ul>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
            <h4 className="text-green-800 font-semibold mb-2">🆕 Ampliamenti 2025</h4>
            <p className="text-green-700 mb-2">Con la Legge di Bilancio 2025, l'accesso è stato esteso a:</p>
            <ul className="list-disc pl-6 text-green-700 text-sm">
              <li>Settori agricolo, pesca e acquacoltura</li>
              <li>ESCo certificate per progetti EPC</li>
              <li>Concessioni energia/acqua non devolvibili gratuitamente</li>
              <li>Rimozione esclusioni parziali per servizi pubblici</li>
            </ul>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4">6.3 Esclusioni</h3>
          <p className="text-gray-700 mb-4">Sono escluse dal beneficio:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Imprese in difficoltà ai sensi della normativa europea</li>
            <li>Imprese destinatarie di sanzioni interdittive</li>
          </ul>
        </div>
      </div>

      {/* Sezione 7: Obiettivi Strategici del Piano */}
      <div id="obiettivi-strategici" className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">7. Obiettivi Strategici del Piano</h2>
        <div className="prose max-w-none">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">7.1 Obiettivi Principali</h3>
          <p className="text-gray-700 mb-4">Il Piano Transizione 5.0 persegue i seguenti obiettivi strategici:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Sostenere e incentivare le imprese che investono in beni strumentali nuovi, materiali e immateriali, funzionali alla trasformazione tecnologica e digitale dei processi produttivi</li>
            <li>Promuovere la riduzione dei consumi energetici e l'efficientamento dei processi produttivi</li>
            <li>Favorire la transizione verso fonti energetiche rinnovabili</li>
            <li>Sostenere la competitività delle imprese italiane nel contesto internazionale</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4">7.2 Impatto Atteso</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Ambito</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Obiettivo Quantitativo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Riduzione consumi energetici</td>
                  <td className="border border-gray-300 px-4 py-2">-15-20% entro il 2030</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Incremento energia da fonti rinnovabili</td>
                  <td className="border border-gray-300 px-4 py-2">+35% entro il 2030</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Riduzione emissioni CO₂</td>
                  <td className="border border-gray-300 px-4 py-2">-40% entro il 2030</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Digitalizzazione processi produttivi</td>
                  <td className="border border-gray-300 px-4 py-2">+50% entro il 2030</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-gray-700 mb-4">
            Il Piano Transizione 5.0 si inserisce nel contesto degli obiettivi europei di decarbonizzazione e nella strategia italiana di transizione ecologica, contribuendo al raggiungimento degli obiettivi climatici fissati dall'Unione Europea per il 2030 e il 2050. Gli obiettivi sono allineati a PNRR e REPowerEU targets (-55% emissioni UE 2030).
          </p>
        </div>
      </div>

      {/* Sezione 8: Tipologie di Investimenti Agevolabili */}
      <div id="tipologie-investimenti" className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">8. Tipologie di Investimenti Agevolabili</h2>
        <div className="prose max-w-none">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">8.1 Categorie Principali</h3>
          <p className="text-gray-700 mb-4">Gli investimenti agevolabili si suddividono in:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Beni materiali 4.0 - Allegato A alla legge n. 232/2016</li>
            <li>Beni immateriali 4.0 - Allegato B alla legge n. 232/2016</li>
            <li>Investimenti in efficienza energetica - Nuova categoria specifica</li>
            <li>Investimenti in autoproduzione da fonti rinnovabili - Nuova categoria specifica</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4">8.2 Requisiti Generali</h3>
          <p className="text-gray-700 mb-4">Per essere agevolabili, gli investimenti devono:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Essere nuovi</li>
            <li>Essere strumentali all'attività d'impresa</li>
            <li>Essere destinati a strutture produttive situate nel territorio italiano</li>
            <li>Contribuire alla riduzione dei consumi energetici</li>
          </ul>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
            <h4 className="text-blue-800 font-semibold mb-2">Novità Rispetto a Transizione 4.0</h4>
            <p className="text-blue-700">A differenza del precedente Piano Transizione 4.0, il nuovo Piano 5.0 non prevede agevolazioni per i beni materiali e immateriali "ordinari" (non 4.0), concentrando le risorse esclusivamente sugli investimenti ad alto contenuto tecnologico e con impatto positivo sul risparmio energetico.</p>
          </div>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <h4 className="text-blue-800 font-semibold mb-2">🆕 Semplificazione Scaglioni 2025</h4>
            <p className="text-blue-700">Scaglione unico fino 10M€ per investimento. Aliquote unificate per tutte le categorie (immateriali solo se collegati a materiali 4.0).</p>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">8.3 Aliquote del Credito d'Imposta</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Tipologia di Investimento</th>
                  <th className="border border-gray-300 px-4 py-2 text-center">≥3%/5% (base)</th>
                  <th className="border border-gray-300 px-4 py-2 text-center">≥6%/10% (media)</th>
                  <th className="border border-gray-300 px-4 py-2 text-center">≥10%/15% (max)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Beni materiali 4.0</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">35%</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">40%</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">45%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Beni immateriali 4.0*</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">35%</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">40%</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">45%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Efficienza energetica</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">35%</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">40%</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">45%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Autoproduzione rinnovabili</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">35%</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">40%</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">45%</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
            <p className="text-yellow-700 text-sm"><strong>*Nota:</strong> Beni immateriali agevolabili solo se collegati a materiali 4.0. Scaglione unico fino 10M€ per investimento (semplificazione 2025).</p>
          </div>
        </div>
      </div>
    </div>
  );
}
