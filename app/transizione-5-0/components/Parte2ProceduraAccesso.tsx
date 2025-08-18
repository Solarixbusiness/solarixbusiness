import React from 'react';

export default function Parte2ProceduraAccesso() {
  return (
    <div className="space-y-8">
      {/* Sezione 9: Panoramica del Processo */}
      <div id="panoramica-processo" className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">9. Panoramica del Processo</h2>
        <div className="prose max-w-none">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <h4 className="text-blue-800 font-semibold mb-2">🆕 Semplificazioni Procedurali 2025</h4>
            <p className="text-blue-700">Riduzione documentazione richiesta, comunicazioni semplificate, tempi di risposta GSE ottimizzati. Nuova procedura per imprese di nuova costituzione e sostituzioni beni obsoleti (≥24 mesi ammortizzati).</p>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4">9.1 Fasi Principali</h3>
          <p className="text-gray-700 mb-4">Il processo di accesso al credito d'imposta Transizione 5.0 si articola nelle seguenti fasi principali, con semplificazioni introdotte per il 2025:</p>
          
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Fase</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Descrizione</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Tempistica</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">1. Comunicazione preventiva</td>
                  <td className="border border-gray-300 px-4 py-2">Invio della comunicazione preventiva al GSE</td>
                  <td className="border border-gray-300 px-4 py-2">Prima dell'avvio dell'investimento</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">2. Prenotazione delle risorse</td>
                  <td className="border border-gray-300 px-4 py-2">Conferma della prenotazione da parte del GSE</td>
                  <td className="border border-gray-300 px-4 py-2">Entro 30 giorni dalla comunicazione</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">3. Conferma ordini</td>
                  <td className="border border-gray-300 px-4 py-2">Conferma dell'effettuazione degli ordini</td>
                  <td className="border border-gray-300 px-4 py-2">Entro 60 giorni dalla prenotazione</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">4. Completamento progetto</td>
                  <td className="border border-gray-300 px-4 py-2">Realizzazione dell'investimento</td>
                  <td className="border border-gray-300 px-4 py-2">Entro il 31 dicembre 2025 (o 30 aprile 2026 per ordini vincolanti entro 2025)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">5. Comunicazione di completamento</td>
                  <td className="border border-gray-300 px-4 py-2">Invio della comunicazione di completamento al GSE</td>
                  <td className="border border-gray-300 px-4 py-2">Entro 60 giorni dal completamento</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">6. Utilizzo del credito</td>
                  <td className="border border-gray-300 px-4 py-2">Utilizzo in compensazione del credito d'imposta</td>
                  <td className="border border-gray-300 px-4 py-2">A partire dall'anno successivo</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
            <h4 className="text-blue-800 font-semibold mb-2">📅 Piattaforma GSE - Timeline 2024-2025</h4>
            <p className="text-blue-700 mb-2">Tutte le comunicazioni devono essere effettuate tramite l'apposita piattaforma informatica GSE:</p>
            <ul className="list-disc pl-6 text-blue-700 text-sm">
              <li>Aperta dal 7 agosto 2024 per comunicazioni preventive</li>
              <li>Dal 12 settembre 2024 per comunicazioni di completamento</li>
              <li>Aggiornamenti evolutivi periodici (chiusure temporanee programmate)</li>
              <li><strong>2025:</strong> Possibile saltare conferma ordini 20% se progetto già completato</li>
              <li><strong>2025:</strong> Interfaccia semplificata per sostituzioni beni obsoleti</li>
            </ul>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4">9.2 Documentazione Richiesta - Semplificazioni 2025</h3>
          <p className="text-gray-700 mb-4">Per ciascuna fase del processo è necessario predisporre specifica documentazione, con riduzioni per il 2025:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Progetto di investimento con descrizione dettagliata dei beni</li>
            <li>Preventivi e ordini di acquisto</li>
            <li>Documentazione tecnica dei beni (standard UE/ISO accettati per sostituzioni)</li>
            <li>Relazione tecnica sul risparmio energetico atteso</li>
            <li>Fatture e documenti di trasporto</li>
            <li>Attestazioni e certificazioni tecniche</li>
            <li><strong>Novità 2025:</strong> Per imprese nuove: metodologia semplificata calcolo baseline</li>
            <li><strong>Novità 2025:</strong> Per sostituzioni ≥24 mesi: accesso automatico soglia base senza calcoli specifici</li>
          </ul>
        </div>
      </div>

      {/* Sezione 10: Comunicazione Preventiva (Ex-Ante) */}
      <div id="comunicazione-preventiva" className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">10. Comunicazione Preventiva (Ex-Ante)</h2>
        <div className="prose max-w-none">
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
            <h4 className="text-green-800 font-semibold mb-2">🆕 Semplificazioni Sostituzioni 2025</h4>
            <p className="text-green-700">Per sostituzioni beni obsoleti (ammortizzati ≥24 mesi): accesso automatico soglia base 3%/5% senza calcoli specifici. Documentazione standard UE/ISO sufficiente. Dismissione obbligatoria bene vecchio.</p>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4">10.1 Contenuto della Comunicazione</h3>
          <p className="text-gray-700 mb-4">La comunicazione preventiva deve contenere:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Dati identificativi dell'impresa</li>
            <li>Descrizione del progetto di investimento</li>
            <li>Elenco dei beni che si intende acquistare</li>
            <li>Importo complessivo dell'investimento previsto</li>
            <li>Stima del risparmio energetico atteso</li>
            <li>Metodologia di calcolo utilizzata</li>
            <li>Cronoprogramma dell'investimento</li>
            <li><strong>2025:</strong> Per sostituzioni: documentazione dismissione bene obsoleto</li>
            <li><strong>2025:</strong> ESCo certificate: verifica semplificata via EPC</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4">10.2 Modalità di Presentazione</h3>
          <p className="text-gray-700 mb-4">La comunicazione deve essere presentata:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Esclusivamente in via telematica</li>
            <li>Tramite la piattaforma informatica del GSE</li>
            <li>Prima dell'avvio dell'investimento</li>
            <li>Utilizzando i moduli predisposti dal GSE</li>
          </ul>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
            <p className="text-red-700 font-semibold">ATTENZIONE: La comunicazione preventiva è obbligatoria e deve essere presentata prima dell'avvio dell'investimento. La mancata presentazione comporta l'inammissibilità dell'investimento al beneficio.</p>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4">10.3 Finestre Temporali - Aggiornamento 2025</h3>
          <p className="text-gray-700 mb-4">Le finestre temporali per la presentazione delle comunicazioni preventive sono state aggiornate:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Prima finestra: dal 1° maggio 2024 al 31 luglio 2024 (chiusa)</li>
            <li>Seconda finestra: dal 1° settembre 2024 al 30 novembre 2024 (chiusa)</li>
            <li>Terza finestra: dal 1° gennaio 2025 al 31 marzo 2025 (chiusa)</li>
            <li>Quarta finestra: dal 1° maggio 2025 al 31 luglio 2025 (chiusa)</li>
            <li><strong>Quinta finestra:</strong> dal 1° settembre 2025 al 30 novembre 2025</li>
            <li><strong>Sesta finestra:</strong> dal 1° gennaio 2026 al 31 marzo 2026 (solo per completamenti parziali)</li>
          </ul>
          
          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-4">
            <h4 className="text-orange-800 font-semibold mb-2">⚠️ Scadenze Critiche 2025-2026</h4>
            <p className="text-orange-700">Investimenti con ordini vincolanti entro 31/12/2025 possono essere completati entro 30/04/2026. Comunicazioni preventive accettate fino ad esaurimento risorse residue (~€5.4 miliardi ad agosto 2025).</p>
          </div>
          
          <p className="text-gray-700 mb-4">
            Il GSE procederà all'istruttoria delle comunicazioni preventive secondo l'ordine cronologico di presentazione, fino ad esaurimento delle risorse disponibili per ciascuna finestra temporale.
          </p>
        </div>
      </div>

      {/* Sezione 11: Esito della Prenotazione */}
      <div id="esito-prenotazione" className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">11. Esito della Prenotazione</h2>
        <div className="prose max-w-none">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">11.1 Istruttoria GSE</h3>
          <p className="text-gray-700 mb-4">Il GSE effettua l'istruttoria delle comunicazioni preventive verificando:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>La completezza della documentazione</li>
            <li>La coerenza del progetto con le finalità della misura</li>
            <li>L'ammissibilità dei beni oggetto dell'investimento</li>
            <li>La congruenza della metodologia di calcolo del risparmio energetico</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4">11.2 Tempistiche di Risposta - Ottimizzazioni 2025</h3>
          <p className="text-gray-700 mb-4">Il GSE comunica l'esito dell'istruttoria con tempi ottimizzati:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Entro 30 giorni dalla presentazione della comunicazione preventiva (target 20 giorni per 2025)</li>
            <li>Tramite PEC e attraverso il portale informatico GSE</li>
            <li>Con indicazione dell'importo massimo del credito d'imposta prenotato</li>
            <li><strong>2025:</strong> Notifiche push automatiche su piattaforma per aggiornamenti stato pratica</li>
          </ul>
          
          <h4 className="text-lg font-semibold text-gray-800 mb-3">Possibili Esiti</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Accoglimento: prenotazione confermata con indicazione dell'importo massimo del credito d'imposta</li>
            <li>Accoglimento parziale: prenotazione confermata solo per alcuni beni o con importo ridotto</li>
            <li>Rigetto: prenotazione non confermata con indicazione delle motivazioni</li>
            <li>Sospensione: richiesta di integrazioni documentali</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4">11.3 Validità della Prenotazione</h3>
          <p className="text-gray-700 mb-4">La prenotazione del credito d'imposta:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Ha validità di 60 giorni dalla data di comunicazione dell'esito positivo</li>
            <li>Decade automaticamente se entro tale termine non viene confermata con l'effettuazione degli ordini</li>
            <li>Non è cedibile o trasferibile ad altri soggetti</li>
          </ul>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
            <h4 className="text-yellow-800 font-semibold mb-2">📊 Gestione Risorse Residue 2025</h4>
            <p className="text-yellow-700">Con circa €5.4 miliardi residui ad agosto 2025, le comunicazioni preventive eccedenti una finestra vengono automaticamente inserite nella successiva, mantenendo l'ordine cronologico. Priorità per sostituzioni beni obsoleti e imprese nuove.</p>
          </div>
        </div>
      </div>

      {/* Sezione 12: Conferma Ordini (20%) */}
      <div id="conferma-ordini" className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">12. Conferma Ordini (20%)</h2>
        <div className="prose max-w-none">
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-4">
            <h4 className="text-purple-800 font-semibold mb-2">🆕 Novità 2025: Salto Conferma Ordini</h4>
            <p className="text-purple-700">Se il progetto è già completato al momento della prenotazione, è possibile saltare la fase di conferma ordini 20% e procedere direttamente alla comunicazione di completamento.</p>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4">12.1 Obbligo di Conferma</h3>
          <p className="text-gray-700 mb-4">
            Entro 60 giorni dalla comunicazione dell'esito positivo della prenotazione, l'impresa deve confermare l'effettuazione degli ordini per almeno il 20% del valore complessivo dei beni oggetto dell'investimento, salvo progetti già completati.
          </p>
          
          <h4 className="text-lg font-semibold text-gray-800 mb-3">Documentazione Richiesta</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Ordini di acquisto firmati da entrambe le parti</li>
            <li>Contratti di acquisto</li>
            <li>Conferme d'ordine accettate dal fornitore</li>
            <li>Eventuali acconti versati (se previsti)</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4">12.2 Modalità di Comunicazione</h3>
          <p className="text-gray-700 mb-4">La conferma degli ordini deve essere comunicata:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Tramite la piattaforma informatica del GSE</li>
            <li>Allegando la documentazione comprovante l'effettuazione degli ordini</li>
            <li>Specificando l'importo complessivo degli ordini effettuati</li>
            <li>Indicando la percentuale rispetto al valore totale dell'investimento</li>
          </ul>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
            <p className="text-red-700 font-semibold">IMPORTANTE: La mancata comunicazione della conferma degli ordini entro il termine di 60 giorni comporta la decadenza automatica della prenotazione e la perdita del diritto al credito d'imposta.</p>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4">12.3 Verifiche GSE</h3>
          <p className="text-gray-700 mb-4">Il GSE verifica:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>La tempestività della comunicazione</li>
            <li>La validità della documentazione presentata</li>
            <li>Il raggiungimento della soglia minima del 20%</li>
            <li>La coerenza degli ordini con il progetto di investimento</li>
          </ul>
          
          <p className="text-gray-700 mb-4">
            In caso di esito positivo delle verifiche, la prenotazione del credito d'imposta viene confermata fino al completamento dell'investimento, che deve avvenire entro il 31 dicembre 2025 (o 30 aprile 2026 per ordini vincolanti entro 2025).
          </p>
        </div>
      </div>

      {/* Sezione 13: Completamento del Progetto */}
      <div id="completamento-progetto" className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">13. Completamento del Progetto</h2>
        <div className="prose max-w-none">
          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-4">
            <h4 className="text-orange-800 font-semibold mb-2">📅 Proroga Completamento Parziale 2026</h4>
            <p className="text-orange-700">Investimenti con ordini vincolanti entro 31/12/2025 possono essere completati entro 30/04/2026. Nessuna proroga generale confermata oltre il 2025.</p>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4">13.1 Termine di Completamento</h3>
          <p className="text-gray-700 mb-4">L'investimento deve essere completato entro il 31 dicembre 2025 (o 30 aprile 2026 per ordini vincolanti). Per completamento si intende:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>L'installazione e messa in funzione di tutti i beni oggetto dell'investimento</li>
            <li>Il pagamento integrale dei beni (salvo eventuali ritenute di garanzia)</li>
            <li>La realizzazione di tutti gli interventi previsti nel progetto</li>
            <li>Il raggiungimento degli obiettivi di risparmio energetico dichiarati</li>
          </ul>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
            <p className="text-red-700 font-semibold">⚠️ ATTENZIONE: Il mancato completamento dell'investimento entro il termine previsto comporta la decadenza dal beneficio per la parte non completata. Per il 2025, particolare attenzione alle scadenze 31/12/2025 e 30/04/2026.</p>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4">13.2 Gestione Variazioni - Semplificazioni 2025</h3>
          <p className="text-gray-700 mb-4">Eventuali variazioni al progetto originario devono essere comunicate al GSE con procedure semplificate:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Tempestivamente e comunque prima del completamento dell'investimento</li>
            <li>Tramite la piattaforma informatica dedicata (interfaccia semplificata 2025)</li>
            <li>Allegando la documentazione tecnica aggiornata</li>
            <li>Indicando le motivazioni delle variazioni</li>
            <li><strong>2025:</strong> Variazioni minori (&lt;10% valore) con procedura accelerata</li>
            <li><strong>2025:</strong> Sostituzioni tecnologiche equivalenti pre-approvate</li>
          </ul>
          
          <h4 className="text-lg font-semibold text-gray-800 mb-3">Tipologie di Variazioni Ammissibili</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Sostituzione di beni con altri tecnologicamente più avanzati</li>
            <li>Modifiche tecniche che migliorano l'efficienza energetica</li>
            <li>Variazioni non sostanziali che non alterano la natura del progetto</li>
          </ul>
          
          <p className="text-gray-700 mb-4">
            Il GSE valuta l'ammissibilità delle variazioni e, in caso di esito positivo, aggiorna la prenotazione del credito d'imposta. In caso di variazioni che comportano una riduzione dell'investimento, l'importo del credito d'imposta viene proporzionalmente ridotto.
          </p>
        </div>
      </div>

      {/* Sezione 14: Comunicazione di Completamento */}
      <div id="comunicazione-completamento" className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">14. Comunicazione di Completamento</h2>
        <div className="prose max-w-none">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">14.1 Contenuto della Comunicazione</h3>
          <p className="text-gray-700 mb-4">Entro 60 giorni dal completamento dell'investimento, l'impresa deve inviare al GSE la comunicazione di completamento contenente:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Relazione tecnica finale dettagliata</li>
            <li>Elenco dei beni acquisiti e installati</li>
            <li>Fatture di acquisto e documenti di trasporto</li>
            <li>Documentazione attestante i pagamenti effettuati</li>
            <li>Certificazioni tecniche dei beni</li>
            <li>Perizia tecnica asseverata</li>
            <li>Documentazione fotografica dell'installazione</li>
            <li>Misurazione del risparmio energetico effettivamente conseguito</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4">14.2 Perizia Tecnica Asseverata - Novità 2025</h3>
          <p className="text-gray-700 mb-4">La perizia tecnica asseverata deve essere redatta da un tecnico abilitato e deve attestare:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>La conformità dell'investimento al progetto presentato</li>
            <li>L'effettiva installazione e funzionalità dei beni</li>
            <li>Il rispetto dei requisiti tecnici previsti</li>
            <li>Il risparmio energetico effettivamente conseguito</li>
            <li>La metodologia di calcolo utilizzata</li>
            <li>La corrispondenza delle spese sostenute con quelle ammissibili</li>
            <li><strong>2025:</strong> Energy manager interno abilitato per certificazioni aziendali</li>
            <li><strong>2025:</strong> ESCo certificate: verifica semplificata tramite EPC esistenti</li>
          </ul>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
            <h4 className="text-blue-800 font-semibold mb-2">Requisiti del Tecnico Abilitato - Aggiornamenti 2025</h4>
            <p className="text-blue-700">Il tecnico deve essere iscritto al relativo albo professionale e deve essere indipendente rispetto all'impresa beneficiaria. Non deve avere vincoli di dipendenza o di collaborazione continuativa con l'impresa.</p>
            <p className="text-blue-700 mt-2"><strong>Novità 2025:</strong> Energy manager interno certificato può rilasciare attestazioni per la propria azienda. ESCo certificate possono utilizzare EPC preesistenti come base per verifiche semplificate.</p>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4">14.3 Verifiche GSE - Procedure 2025</h3>
          <p className="text-gray-700 mb-4">Il GSE effettua le seguenti verifiche con procedure ottimizzate:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Completezza e correttezza della documentazione (controlli formali prioritari)</li>
            <li>Conformità dell'investimento realizzato rispetto a quello prenotato</li>
            <li>Effettivo conseguimento del risparmio energetico dichiarato</li>
            <li>Rispetto dei requisiti tecnici e normativi</li>
            <li>Congruità delle spese sostenute</li>
            <li><strong>2025:</strong> Verifiche a campione ridotte per sostituzioni beni obsoleti</li>
            <li><strong>2025:</strong> Comunicazione automatica ad Agenzia delle Entrate per crediti approvati</li>
          </ul>
          
          <p className="text-gray-700 mb-4">
            Il GSE può effettuare verifiche e controlli, anche mediante sopralluoghi presso l'impresa, per accertare la veridicità delle dichiarazioni e la conformità degli investimenti.
          </p>
        </div>
      </div>

      {/* Sezione 15: Determinazione del Credito d'Imposta */}
      <div id="gestione-variazioni" className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">15. Determinazione del Credito d'Imposta</h2>
        <div className="prose max-w-none">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">15.1 Calcolo dell'Importo</h3>
          <p className="text-gray-700 mb-4">
            Il credito d'imposta è determinato applicando le aliquote previste alle spese ammissibili effettivamente sostenute, in base alla tipologia di investimento e alla percentuale di risparmio energetico conseguita.
          </p>
          
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Tipologia di Investimento</th>
                  <th className="border border-gray-300 px-4 py-2 text-center">Risparmio 3-6%</th>
                  <th className="border border-gray-300 px-4 py-2 text-center">Risparmio 6-10%</th>
                  <th className="border border-gray-300 px-4 py-2 text-center">Risparmio &gt;10%</th>
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
                  <td className="border border-gray-300 px-4 py-2">Beni immateriali 4.0</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">20%</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">20%</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">20%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Beni strumentali materiali</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">10%</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">15%</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">20%</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4">15.2 Limiti Massimi - Scaglione Unico 2025</h3>
          <p className="text-gray-700 mb-4">Il credito d'imposta è soggetto ai seguenti limiti massimi unificati per il 2025:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Scaglione unico:</strong> 10 milioni di euro per investimento complessivo</li>
            <li>Beni materiali 4.0: fino a 10 milioni di euro</li>
            <li>Beni immateriali 4.0: fino a 1 milione di euro (se collegati a materiali 4.0)</li>
            <li>Beni strumentali materiali: fino a 2 milioni di euro</li>
            <li><strong>2025:</strong> Maggiorazioni fotovoltaici: 130-150% per sistemi integrati</li>
          </ul>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
            <h4 className="text-green-800 font-semibold mb-2">Esempio di Calcolo</h4>
            <p className="text-green-700">Investimento in beni materiali 4.0: 1.000.000 €</p>
            <p className="text-green-700">Risparmio energetico conseguito: 12%</p>
            <p className="text-green-700">Aliquota applicabile: 45%</p>
            <p className="text-green-700 font-semibold">Credito d'imposta: 1.000.000 € × 45% = 450.000 €</p>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4">15.3 Comunicazione dell'Importo</h3>
          <p className="text-gray-700 mb-4">Il GSE, a seguito delle verifiche sulla comunicazione di completamento, comunica all'impresa:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>L'importo definitivo del credito d'imposta spettante</li>
            <li>Le modalità di utilizzo in compensazione</li>
            <li>Gli eventuali adempimenti residui</li>
          </ul>
          
          <p className="text-gray-700 mb-4">
            La comunicazione dell'importo definitivo viene effettuata entro 90 giorni dalla ricezione della comunicazione di completamento, salvo sospensioni per richieste di integrazioni documentali.
          </p>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
            <h4 className="text-green-800 font-semibold mb-2">📊 Comunicazione Automatica Agenzia delle Entrate</h4>
            <p className="text-green-700">Dal 2025, il GSE comunica automaticamente all'Agenzia delle Entrate i crediti d'imposta approvati per facilitare l'utilizzo in compensazione F24.</p>
          </div>
        </div>
      </div>

      {/* Sezione 16: Utilizzo del Credito d'Imposta */}
      <div id="utilizzo-credito" className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">16. Utilizzo del Credito d'Imposta</h2>
        <div className="prose max-w-none">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">16.1 Modalità di Utilizzo</h3>
          <p className="text-gray-700 mb-4">Il credito d'imposta può essere utilizzato:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Esclusivamente in compensazione mediante modello F24</li>
            <li>A partire dall'anno successivo a quello di avvenuta interconnessione dei beni</li>
            <li>In 3 quote annuali di pari importo</li>
            <li>Tramite i servizi telematici dell'Agenzia delle Entrate</li>
          </ul>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
            <h4 className="text-blue-800 font-semibold mb-2">Codice Tributo</h4>
            <p className="text-blue-700">Per l'utilizzo in compensazione del credito d'imposta deve essere utilizzato l'apposito codice tributo istituito dall'Agenzia delle Entrate.</p>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4">16.2 Limiti e Divieti - Aggiornamenti 2025</h3>
          <p className="text-gray-700 mb-4">L'utilizzo del credito d'imposta è soggetto ai seguenti limiti e divieti:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Non è soggetto al limite annuale di 250.000 euro per i crediti da indicare nel quadro RU</li>
            <li>Non è soggetto al limite generale di compensazione di 2 milioni di euro</li>
            <li>Non può essere ceduto o trasferito a terzi (confermato per 2025)</li>
            <li>Non può essere richiesto a rimborso</li>
            <li>Non concorre alla formazione del reddito ai fini IRES/IRPEF</li>
            <li>Non concorre alla formazione della base imponibile IRAP</li>
            <li><strong>2025:</strong> Comunicazione automatica GSE-Agenzia Entrate per utilizzo semplificato</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4">16.3 Cumulabilità Estesa - Novità 2025</h3>
          <p className="text-gray-700 mb-4">Il credito d'imposta Transizione 5.0 presenta cumulabilità estesa per il 2025:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>È cumulabile con altre agevolazioni che abbiano ad oggetto i medesimi costi, a condizione che tale cumulo non porti al superamento del costo sostenuto</li>
            <li>È cumulabile con gli incentivi per la produzione di energia da fonti rinnovabili</li>
            <li>È cumulabile con i finanziamenti previsti dal PNRR e programmi UE (Horizon, LIFE)</li>
            <li><strong>2025:</strong> Cumulabile con Certificati Bianchi (riduzione 50% per progetti post-17/11/2023)</li>
            <li><strong>2025:</strong> Cumulabile con Conto Termico GSE</li>
            <li><strong>2025:</strong> Cumulabile con incentivi regionali e ZES/ZLS</li>
            <li><strong>2025:</strong> Cumulabile con agevolazioni settoriali (agricoltura, pesca, acquacoltura)</li>
            <li>Non è cumulabile con il credito d'imposta per investimenti in beni strumentali previsto dalla Legge di Bilancio 2021</li>
          </ul>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
            <p className="text-red-700 font-semibold">IMPORTANTE: In caso di cumulo di agevolazioni, l'impresa deve tenere una contabilità separata che permetta di distinguere i costi agevolati con le diverse misure e di verificare il rispetto del limite del 100% del costo sostenuto.</p>
          </div>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <h4 className="text-blue-800 font-semibold mb-2">📋 Contabilità Separata e Tracciabilità 2025</h4>
            <p className="text-blue-700">Dal 2025, obbligo di utilizzo di sistemi di tracciabilità digitale per investimenti cumulati con altri incentivi. Comunicazione automatica tra GSE e Agenzia delle Entrate per verifiche incrociate.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
