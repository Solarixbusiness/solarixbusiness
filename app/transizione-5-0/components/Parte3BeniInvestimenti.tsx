import React from 'react';

export default function Parte3BeniInvestimenti() {
  return (
    <div className="space-y-8">
      {/* Sezione 17: Investimenti Principali: Beni Materiali e Immateriali */}
      <div id="investimenti-principali" className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">17. Investimenti Principali: Beni Materiali e Immateriali</h2>
        <div className="prose max-w-none">
          <p className="text-gray-700 mb-6">
            Il Piano Transizione 5.0 incentiva investimenti in beni strumentali nuovi, materiali e immateriali, funzionali alla trasformazione tecnologica e digitale dei processi produttivi e alla riduzione dei consumi energetici.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4">17.1 Categorie di Investimenti Agevolabili</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h4 className="text-lg font-semibold text-blue-800 mb-3">Beni Materiali 4.0</h4>
              <p className="text-blue-700 mb-3">Allegato A alla legge n. 232/2016</p>
              <ul className="list-disc pl-6 text-blue-700 space-y-1 text-sm">
                <li>Macchine utensili per asportazione, deformazione, saldatura</li>
                <li>Sistemi di movimentazione e sollevamento</li>
                <li>Macchine per additive manufacturing</li>
                <li>Macchine, anche motrici e operatrici, strumenti e dispositivi per il carico e scarico</li>
                <li>Robot, robot collaborativi e sistemi multi-robot</li>
                <li>Macchine per il confezionamento e l'imballaggio</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h4 className="text-lg font-semibold text-green-800 mb-3">Beni Immateriali 4.0</h4>
              <p className="text-green-700 mb-3">Allegato B alla legge n. 232/2016</p>
              <ul className="list-disc pl-6 text-green-700 space-y-1 text-sm">
                <li>Software, sistemi, system integration, piattaforme e applicazioni</li>
                <li>Sistemi di cyber security e business continuity</li>
                <li>Sistemi di monitoraggio e controllo</li>
                <li>Software di simulazione e progettazione</li>
                <li>Sistemi di comunicazione rete e apparati di comunicazione</li>
                <li>Interfaccia uomo macchina</li>
                <li><strong>Software per Energy Dashboarding e monitoraggio energetico</strong> (se collegati a beni materiali 4.0)</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-4">
            <h4 className="text-purple-800 font-semibold mb-2">🆕 Nuove Categorie 2025</h4>
            <p className="text-purple-700">Estensione investimenti ammissibili: tecnologie verdi, sistemi ibridi, infrastrutture digitali sostenibili, automazione energetica avanzata. Semplificazioni per sostituzioni beni ammortizzati ≥24 mesi con accesso automatico soglia base senza calcoli specifici.</p>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4">17.2 Nuove Categorie Transizione 5.0</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
              <h4 className="text-lg font-semibold text-orange-800 mb-3">Investimenti in Efficienza Energetica</h4>
              <ul className="list-disc pl-6 text-orange-700 space-y-1 text-sm">
                <li>Sistemi di gestione dell'energia (ISO 50001)</li>
                <li>Tecnologie per l'efficientamento energetico</li>
                <li>Sistemi di monitoraggio dei consumi</li>
                <li><strong>2025:</strong> Tecnologie verdi certificate</li>
                <li><strong>2025:</strong> Sistemi ibridi rinnovabili-tradizionali</li>
                <li>Apparecchiature per il recupero di calore</li>
                <li>Sistemi di illuminazione ad alta efficienza</li>
                <li>Motori elettrici ad alta efficienza</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
              <h4 className="text-lg font-semibold text-purple-800 mb-3">Autoproduzione da Fonti Rinnovabili</h4>
              <ul className="list-disc pl-6 text-purple-700 space-y-1 text-sm">
                <li>Impianti fotovoltaici (cumulabili CACER ≤1MW, TIAD; maggiorazioni 130-150% se iscritti registro art. 12 DL 181/2023)</li>
                <li>Impianti eolici</li>
                <li>Impianti idroelettrici</li>
                <li>Impianti a biomasse</li>
                <li>Sistemi di accumulo energetico</li>
                <li>Sistemi di gestione intelligente dell'energia</li>
                <li><strong>2025:</strong> Autoconsumo a distanza ≤10km o rete esistente</li>
                <li><strong>2025:</strong> Localizzazione: stessa zona mercato (Nord/Centro/Sud), coincidenza produttore-cliente (stesso CF, salvo ESCo)</li>
              </ul>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4">17.3 Requisiti Generali</h3>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
            <h4 className="text-yellow-800 font-semibold mb-3">Condizioni di Ammissibilità</h4>
            <ul className="list-disc pl-6 text-yellow-700 space-y-2">
              <li><strong>Beni nuovi</strong>: non possono essere stati utilizzati in precedenza</li>
              <li><strong>Strumentalità</strong>: devono essere funzionali all'attività d'impresa</li>
              <li><strong>Localizzazione</strong>: destinati a strutture produttive situate nel territorio italiano</li>
              <li><strong>Interconnessione</strong>: i beni 4.0 devono essere interconnessi al sistema aziendale di gestione della produzione o alla rete aziendale</li>
              <li><strong>Controllo continuo</strong>: capacità di interfacciarsi con il sistema informativo di fabbrica</li>
              <li><strong>Sicurezza</strong>: caratteristiche di sicurezza, salute e igiene del lavoro</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
            <h4 className="text-yellow-800 font-semibold mb-2">🆕 Scaglione Unico 2025</h4>
            <p className="text-yellow-700">Confermato scaglione unico fino a 10M€ (eliminati sub-scaglioni precedenti). Maggiorazione fotovoltaici: 130-150% base calcolo se iscritto registro art. 12 DL 181/2023. Limite complessivo 50M€/anno per impresa.</p>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4">17.4 Aliquote del Credito d'Imposta</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Tipologia di Investimento</th>
                  <th className="border border-gray-300 px-4 py-2 text-center">Riduzione Base (≥3% struttura / ≥5% processo)</th>
                  <th className="border border-gray-300 px-4 py-2 text-center">Riduzione Media (≥6% struttura / ≥10% processo)</th>
                  <th className="border border-gray-300 px-4 py-2 text-center">Riduzione Max (≥10% struttura / ≥15% processo)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Beni materiali 4.0</td>
                  <td className="border border-gray-300 px-4 py-2 text-center bg-blue-50">35%</td>
                  <td className="border border-gray-300 px-4 py-2 text-center bg-blue-100">40%</td>
                  <td className="border border-gray-300 px-4 py-2 text-center bg-blue-200">45%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Beni immateriali 4.0</td>
                  <td className="border border-gray-300 px-4 py-2 text-center bg-green-50">35%</td>
                  <td className="border border-gray-300 px-4 py-2 text-center bg-green-100">40%</td>
                  <td className="border border-gray-300 px-4 py-2 text-center bg-green-200">45%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Efficienza energetica</td>
                  <td className="border border-gray-300 px-4 py-2 text-center bg-orange-50">35%</td>
                  <td className="border border-gray-300 px-4 py-2 text-center bg-orange-100">40%</td>
                  <td className="border border-gray-300 px-4 py-2 text-center bg-orange-200">45%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Autoproduzione rinnovabili</td>
                  <td className="border border-gray-300 px-4 py-2 text-center bg-purple-50">35%</td>
                  <td className="border border-gray-300 px-4 py-2 text-center bg-purple-100">40%</td>
                  <td className="border border-gray-300 px-4 py-2 text-center bg-purple-200">45%</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-gray-700 mb-4">Per investimenti &gt;10M€: 5%, 10%, 15% rispettivamente.</p>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
            <h4 className="text-red-800 font-semibold mb-2">Condizione Fondamentale</h4>
            <p className="text-red-700">
              Per accedere al credito d'imposta, è indispensabile che l'investimento comporti una riduzione dei consumi energetici dell'unità produttiva interessata. Il mancato raggiungimento della soglia minima comporta la decadenza totale dal beneficio.
            </p>
          </div>
        </div>
      </div>

      {/* Sezione 18: Principio DNSH (Do No Significant Harm) */}
      <div id="principio-dnsh" className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">18. Principio DNSH (Do No Significant Harm)</h2>
        <div className="prose max-w-none">
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
            <h4 className="text-red-800 font-semibold mb-2">🚫 Esclusioni DNSH 2025</h4>
            <p className="text-red-700">Esclusi progetti che generano rifiuti pericolosi non destinati a R1-R12 o D1-D12, o siti con &gt;50% rifiuti pericolosi oltre soglia PRTR per &gt;2 anni. Verifica ex ante/ex post con dichiarazione sostitutiva e checklist settoriali.</p>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4">18.1 Criteri di Esclusione</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Progetti che generano rifiuti pericolosi destinati a smaltimento non R1-R12/D1-D12</li>
            <li>Siti che producono &gt;50% rifiuti pericolosi superando soglia PRTR per oltre 2 anni</li>
            <li>Veicoli a combustibili fossili (salvo eccezioni specifiche)</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4">18.2 Investimenti Ammissibili</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Software per ottimizzazione logistica</li>
            <li>Tecnologie per economia circolare</li>
            <li>Sistemi di gestione rifiuti conformi R1-R12</li>
          </ul>
        </div>
      </div>

      {/* Sezione 19: Revoca e Recupero */}
      <div id="revoca-recupero" className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">19. Revoca e Recupero</h2>
        <div className="prose max-w-none">
          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-4">
            <h4 className="text-orange-800 font-semibold mb-2">🆕 Controlli GSE 2025</h4>
            <p className="text-orange-700">GSE verifica correttezza formale certificazioni e requisiti certificatori. Possibili ispezioni in situ. In caso di indebito, comunicazione ad Agenzia Entrate per recupero.</p>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4">19.1 Cause di Revoca</h3>
          <p className="text-gray-700 mb-4">Il credito d'imposta è revocato nei seguenti casi:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Mancato rispetto delle condizioni previste per l'accesso al beneficio</li>
            <li>Mancato conseguimento del risparmio energetico minimo dichiarato</li>
            <li>Documentazione incompleta o non veritiera</li>
            <li>Cessione dei beni o trasferimento all'estero prima del termine del periodo di fruizione</li>
            <li>Mancato rispetto degli obblighi di conservazione documentale</li>
            <li>Utilizzo del credito in modo difforme rispetto a quanto previsto</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4">19.2 Procedura di Revoca</h3>
          <p className="text-gray-700 mb-4">In caso di accertamento di irregolarità:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Il GSE comunica all'impresa l'avvio del procedimento di revoca</li>
            <li>L'impresa ha 30 giorni per presentare controdeduzioni</li>
            <li>Il GSE, valutate le controdeduzioni, adotta il provvedimento finale</li>
            <li>In caso di revoca, il GSE ne dà comunicazione all'Agenzia delle Entrate</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4">19.3 Recupero del Credito</h3>
          <p className="text-gray-700 mb-4">In caso di revoca:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>L'Agenzia delle Entrate provvede al recupero del credito indebitamente utilizzato</li>
            <li>Si applicano interessi e sanzioni (dal 100% al 200% del credito indebitamente utilizzato)</li>
            <li>Il recupero avviene mediante iscrizione a ruolo</li>
            <li>Non è ammessa la compensazione con altri crediti</li>
          </ul>
          
          <p className="text-gray-700 mb-4">
            La revoca può essere totale o parziale, a seconda della gravità delle violazioni accertate. In caso di revoca parziale, il credito d'imposta è rideterminato in proporzione alla parte ammissibile.
          </p>
        </div>
      </div>

      {/* Sezione 20: Formazione del Personale */}
      <div id="formazione-personale" className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">20. Formazione del Personale</h2>
        <div className="prose max-w-none">
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
            <h4 className="text-green-800 font-semibold mb-2">🆕 Enti Accreditati 2025</h4>
            <p className="text-green-700">Formazione ammissibile se commissionata a enti accreditati: regionali, università, fondi interprofessionali, ISO 9001 EA37, Competence Centers, EDIH, ITS Academy. Spese fino al 10% degli investimenti, max 300.000€, completate entro 31/12/2025.</p>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4">20.1 Enti Abilitati alla Formazione</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Enti di formazione accreditati a livello regionale</li>
            <li>Università e istituti di ricerca</li>
            <li>Fondi interprofessionali per la formazione continua</li>
            <li>Organismi certificati ISO 9001 settore EA37</li>
            <li>Competence Centers Industria 4.0</li>
            <li>European Digital Innovation Hubs (EDIH)</li>
            <li>Istituti Tecnici Superiori (ITS Academy)</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4">20.2 Tipologie di Formazione Ammissibili</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Formazione su tecnologie 4.0 e digitalizzazione</li>
            <li>Efficienza energetica e sostenibilità</li>
            <li>Gestione sistemi di monitoraggio energetico</li>
            <li>Competenze per la transizione digitale</li>
          </ul>
        </div>
      </div>

      {/* Sezione 21: Documentazione e Certificazioni */}
      <div id="documentazione-certificazioni" className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">21. Documentazione e Certificazioni</h2>
        <div className="prose max-w-none">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">21.1 Interconnessione Beni 4.0</h3>
          <p className="text-gray-700 mb-4">
            Per i beni 4.0, l'interconnessione al sistema aziendale di gestione della produzione o alla rete di fornitura è un requisito obbligatorio per accedere alle aliquote maggiorate del credito d'imposta.
          </p>
          
          <h4 className="text-lg font-semibold text-gray-800 mb-3">Requisiti di Interconnessione</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Scambio di informazioni con sistemi interni (es. sistema gestionale, sistemi di pianificazione, sistemi di progettazione, ecc.)</li>
            <li>Identificazione univoca del bene</li>
            <li>Integrazione con il sistema logistico o con la rete di fornitura</li>
            <li>Interfaccia uomo-macchina semplice e intuitiva</li>
            <li>Rispondenza ai più recenti standard di sicurezza e cybersecurity</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4">19.2 Perizia Tecnica</h3>
          <p className="text-gray-700 mb-4">
            Per i beni con costo unitario superiore a 300.000 euro è richiesta una perizia tecnica asseverata rilasciata da un ingegnere o da un perito industriale iscritti nei rispettivi albi professionali. La perizia deve attestare:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Le caratteristiche tecniche del bene</li>
            <li>L'interconnessione al sistema aziendale</li>
            <li>Il rispetto dei requisiti tecnici previsti</li>
            <li>Il risparmio energetico conseguito</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4">19.3 Attestazione di Conformità</h3>
          <p className="text-gray-700 mb-4">
            Per i beni con costo unitario non superiore a 300.000 euro, in alternativa alla perizia, è possibile presentare un'attestazione di conformità rilasciata dal produttore o da un ente certificatore accreditato.
          </p>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
            <p className="text-yellow-700 font-semibold">ATTENZIONE: La perizia tecnica o l'attestazione di conformità devono essere acquisite entro la data di presentazione della comunicazione di completamento dell'investimento.</p>
          </div>
        </div>
      </div>

      {/* Sezione 20: Imprese Nuova Costituzione */}
      <div id="imprese-nuova-costituzione" className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">20. Imprese Nuova Costituzione</h2>
        <div className="prose max-w-none">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">20.1 Calcolo Consumi Anno Precedente</h3>
          <p className="text-gray-700 mb-4">
            Per le imprese di nuova costituzione, che non dispongono di uno storico dei consumi energetici, il calcolo del risparmio energetico deve essere effettuato utilizzando uno scenario controfattuale.
          </p>
          
          <h4 className="text-lg font-semibold text-gray-800 mb-3">Scenario Controfattuale</h4>
          <p className="text-gray-700 mb-4">Lo scenario controfattuale deve basarsi su:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Almeno 3 beni alternativi disponibili sul mercato UE/SEE</li>
            <li>Beni immessi sul mercato nei 5 anni precedenti all'avvio del progetto</li>
            <li>Comparazione con standard di mercato per la stessa tipologia di beni</li>
            <li>Documentazione tecnica dei produttori</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4">20.2 Metodologia di Calcolo</h3>
          <p className="text-gray-700 mb-4">Il risparmio energetico deve essere calcolato come differenza percentuale tra:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Il consumo energetico stimato dei beni acquistati</li>
            <li>Il consumo energetico medio dei beni alternativi individuati nello scenario controfattuale</li>
          </ul>
          
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Fase</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Descrizione</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">1. Individuazione beni alternativi</td>
                  <td className="border border-gray-300 px-4 py-2">Identificare almeno 3 beni comparabili sul mercato</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">2. Raccolta dati tecnici</td>
                  <td className="border border-gray-300 px-4 py-2">Acquisire documentazione sui consumi energetici dei beni alternativi</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">3. Calcolo consumo medio</td>
                  <td className="border border-gray-300 px-4 py-2">Determinare il consumo energetico medio dei beni alternativi</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">4. Stima risparmio</td>
                  <td className="border border-gray-300 px-4 py-2">Calcolare la differenza percentuale tra consumo stimato e consumo medio</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-gray-700 mb-4">
            La metodologia di calcolo dello scenario controfattuale deve essere dettagliatamente descritta nella relazione tecnica e nella perizia asseverata, con indicazione delle fonti dei dati utilizzati.
          </p>
        </div>
      </div>

      {/* Sezione 21: Limitazioni e Vincoli */}
      <div id="limitazioni-vincoli" className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">21. Limitazioni e Vincoli</h2>
        <div className="prose max-w-none">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">21.1 Concessioni e Servizi Pubblici</h3>
          <p className="text-gray-700 mb-4">Sono esclusi dall'agevolazione i beni gratuitamente devolvibili delle imprese operanti in concessione e a tariffa nei seguenti settori:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Energia</li>
            <li>Acqua</li>
            <li>Trasporti</li>
            <li>Infrastrutture</li>
            <li>Poste</li>
            <li>Telecomunicazioni</li>
            <li>Raccolta e depurazione delle acque di scarico</li>
            <li>Raccolta e smaltimento rifiuti</li>
          </ul>
          
          <h4 className="text-lg font-semibold text-gray-800 mb-3">Condizioni di Esclusione</h4>
          <p className="text-gray-700 mb-4">L'esclusione si applica quando l'investimento:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Rappresenta un adempimento di obblighi contrattuali verso l'ente concedente</li>
            <li>È soggetto a meccanismi che neutralizzano il rischio economico a carico dell'impresa</li>
            <li>Rientra tra i beni che, al termine della concessione, devono essere ceduti gratuitamente all'ente concedente</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4">21.2 Vincoli di Mantenimento</h3>
          <p className="text-gray-700 mb-4">I beni agevolati sono soggetti ai seguenti vincoli:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Devono essere mantenuti nel patrimonio dell'impresa per almeno 3 anni</li>
            <li>Non possono essere ceduti a terzi</li>
            <li>Non possono essere trasferiti in strutture produttive situate all'estero</li>
            <li>Devono essere destinati a strutture produttive situate nel territorio dello Stato</li>
          </ul>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
            <p className="text-red-700 font-semibold">IMPORTANTE: La violazione dei vincoli di mantenimento comporta la revoca del beneficio e il recupero del credito d'imposta indebitamente fruito, maggiorato di interessi e sanzioni.</p>
          </div>
        </div>
      </div>

      {/* Sezione 22: Aspetti Contabili e Fiscali */}
      <div id="aspetti-contabili-fiscali" className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">22. Aspetti Contabili e Fiscali</h2>
        <div className="prose max-w-none">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">22.1 Rilevazione Contabile</h3>
          <p className="text-gray-700 mb-4">Il credito d'imposta Transizione 5.0 deve essere rilevato in contabilità secondo le seguenti modalità:</p>
          
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Operazione</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Scrittura Contabile</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Rilevazione del credito</td>
                  <td className="border border-gray-300 px-4 py-2">Crediti tributari a Contributi in conto impianti</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Utilizzo in compensazione</td>
                  <td className="border border-gray-300 px-4 py-2">Debiti tributari a Crediti tributari</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h4 className="text-lg font-semibold text-gray-800 mb-3">Trattamento Fiscale</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Il credito d'imposta non concorre alla formazione del reddito ai fini IRES/IRPEF</li>
            <li>Non concorre alla formazione della base imponibile IRAP</li>
            <li>Non rileva ai fini del rapporto di deducibilità degli interessi passivi</li>
            <li>Non rileva ai fini del rapporto di deducibilità dei componenti negativi</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4">22.2 Dichiarazione dei Redditi</h3>
          <p className="text-gray-700 mb-4">Il credito d'imposta deve essere indicato:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Nella dichiarazione dei redditi relativa al periodo d'imposta di riconoscimento del credito</li>
            <li>Nelle dichiarazioni dei redditi relative ai periodi d'imposta di utilizzo in compensazione</li>
            <li>Nel quadro RU della dichiarazione dei redditi</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4">22.3 Superammortamento vs Credito d'Imposta</h3>
          <p className="text-gray-700 mb-4">Rispetto al precedente regime del superammortamento, il credito d'imposta presenta i seguenti vantaggi:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Beneficio immediato (non diluito nel tempo in base all'ammortamento)</li>
            <li>Utilizzabile anche in presenza di perdite fiscali</li>
            <li>Non influenzato dall'aliquota IRES/IRPEF applicabile</li>
            <li>Utilizzabile anche da soggetti forfetari o in regime di vantaggio</li>
          </ul>
          
          <p className="text-gray-700 mb-4">
            Il credito d'imposta Transizione 5.0 prevede una maggiorazione del 150% del costo per la base di calcolo del credito, rispetto al precedente 140% della Transizione 4.0, garantendo così un beneficio fiscale più elevato.
          </p>
        </div>
      </div>

      {/* Sezione 23: FAQ - Domande Frequenti */}
      <div id="faq-domande" className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">23. FAQ - Domande Frequenti</h2>
        <div className="prose max-w-none">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">23.1 Requisiti e Accesso</h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Quali imprese possono accedere al credito d'imposta Transizione 5.0?</h4>
            <p className="text-gray-700 mb-4">
              Tutte le imprese residenti nel territorio dello Stato, incluse le stabili organizzazioni di soggetti non residenti, indipendentemente dalla forma giuridica, dal settore economico di appartenenza, dalla dimensione e dal regime fiscale.
            </p>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Come si calcola il risparmio energetico del 3%?</h4>
            <p className="text-gray-700 mb-4">
              Il risparmio energetico del 3% deve essere calcolato come riduzione dell'energia consumata per unità di prodotto rispetto alla media dei consumi delle medesime unità produttive nell'anno precedente. La metodologia di calcolo deve essere dettagliata nella perizia tecnica.
            </p>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Quando si considera avviato un investimento?</h4>
            <p className="text-gray-700 mb-4">
              Un investimento si considera avviato alla data del primo impegno giuridicamente vincolante (ordine, contratto, acconto) che renda irreversibile l'investimento. La semplice richiesta di preventivi non costituisce avvio dell'investimento.
            </p>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Il credito d'imposta è cedibile?</h4>
            <p className="text-gray-700 mb-4">
              No, il credito d'imposta Transizione 5.0 non è cedibile a terzi. Può essere utilizzato esclusivamente in compensazione dal soggetto beneficiario.
            </p>
          </div>
        </div>
      </div>

      {/* Sezione 24: Contatti e Assistenza */}
      <div id="contatti-assistenza" className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">24. Contatti e Assistenza</h2>
        <div className="prose max-w-none">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">24.1 Supporto GSE</h3>
          
          <h4 className="text-lg font-semibold text-gray-800 mb-3">Contatti GSE</h4>
          <p className="text-gray-700 mb-4">Per informazioni e assistenza sulla procedura di accesso al credito d'imposta Transizione 5.0:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Portale web</strong>: www.gse.it - sezione Transizione 5.0</li>
            <li><strong>Email</strong>: transizione5.0@gse.it</li>
            <li><strong>Numero verde</strong>: 800 000 555</li>
            <li><strong>Orari</strong>: dal lunedì al venerdì, dalle 9:00 alle 18:00</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4">24.2 Supporto Agenzia delle Entrate</h3>
          
          <h4 className="text-lg font-semibold text-gray-800 mb-3">Contatti Agenzia delle Entrate</h4>
          <p className="text-gray-700 mb-4">Per informazioni sugli aspetti fiscali e sull'utilizzo in compensazione del credito d'imposta:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Portale web</strong>: www.agenziaentrate.gov.it</li>
            <li><strong>Numero verde</strong>: 800 909 696</li>
            <li><strong>Email</strong>: dc.piccolemedieimprese@agenziaentrate.it</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4">24.3 Supporto SolariX Business</h3>
          
          <h4 className="text-lg font-semibold text-gray-800 mb-3">I Nostri Servizi di Consulenza</h4>
          <p className="text-gray-700 mb-4">SolariX Business offre servizi di consulenza specializzata per l'accesso al credito d'imposta Transizione 5.0:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Valutazione preliminare di ammissibilità</li>
            <li>Supporto nella predisposizione della documentazione</li>
            <li>Assistenza nella comunicazione con GSE e Agenzia delle Entrate</li>
            <li>Perizie tecniche asseverate</li>
            <li>Consulenza fiscale e contabile</li>
          </ul>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
            <h4 className="text-blue-800 font-semibold mb-2">Per maggiori informazioni sui nostri servizi:</h4>
            <p className="text-blue-700"><strong>Email</strong>: info@solarixbusiness.it</p>
            <p className="text-blue-700"><strong>Tel</strong>: 011 1883 7752</p>
          </div>
        </div>
      </div>
    </div>
  );
}
