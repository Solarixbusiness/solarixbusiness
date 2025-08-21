import React from 'react';

export default function Parte2CosaFinanziare() {
  return (
    <div className="space-y-8">
      {/* Sezione 4 - Linee di Intervento */}
      <section id="linee-intervento" className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-blue-500 pb-4">
          4. LINEE DI INTERVENTO DISPONIBILI
        </h2>

        {/* 4.1 Transizione Digitale o Ecologica */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-blue-700 mb-6 flex items-center">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3">4.1</span>
            Transizione Digitale o Ecologica (Focus Principale)
          </h3>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Destinatari:</h4>
            <p className="text-gray-700 leading-relaxed">
              Imprese energivore o imprese che hanno intrapreso percorsi certificati di efficientamento energetico con un fatturato export del 3%, che potranno destinare tale importo, o quota parte dello stesso, anche alla realizzazione di incrementi di capitale sociale delle proprie controllate e all'erogazione del finanziamento soci.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h4 className="text-lg font-semibold text-green-800 mb-4">Minimo 50% per investimenti digitali/ecologici:</h4>
              <ul className="space-y-2 text-green-700">
                <li>• Macchinari e impianti 4.0</li>
                <li>• Software, hardware, cybersecurity</li>
                <li>• Efficientamento energetico e idrico</li>
                <li>• Fotovoltaico e rinnovabili</li>
                <li>• Certificazioni ambientali</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
              <h4 className="text-lg font-semibold text-orange-800 mb-4">Fino al 50% per rafforzamento patrimoniale:</h4>
              <ul className="space-y-2 text-orange-700">
                <li>• Immobilizzazioni materiali e immateriali</li>
                <li>• Incrementi capitale sociale controllate (max €600.000)</li>
                <li>• Finanziamenti soci</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Strategia Vincente */}
        <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold mb-4 text-center">
            LA STRATEGIA VINCENTE: SIMEST COME MOLTIPLICATORE DI INCENTIVI
          </h3>
          <p className="text-lg text-center mb-6 opacity-90">
            SIMEST non è solo un finanziamento agevolato: è la chiave di volta per accedere a una strategia di incentivi multipli che può ridurre il costo effettivo del vostro investimento fino all'80%.
          </p>
          
          <div className="bg-white/10 rounded-lg p-6">
            <h4 className="text-xl font-semibold mb-4">Come Funziona il Sistema Integrato SIMEST + Altri Incentivi</h4>
            <p className="mb-4">Il finanziamento SIMEST può essere utilizzato strategicamente per:</p>
            <ul className="space-y-2">
              <li>• Anticipare la liquidità necessaria per investimenti che beneficeranno di altri incentivi</li>
              <li>• Coprire la quota non agevolata di altri bandi (es. la parte non coperta dal credito d'imposta)</li>
              <li>• Finanziare progetti complessi che integrano più linee di incentivo</li>
            </ul>
          </div>
        </div>

        {/* Combo 1 */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-8 border border-blue-200">
          <h4 className="text-xl font-bold text-blue-800 mb-6">COMBO 1: SIMEST + Piano Industria 4.0/5.0</h4>
          <div className="bg-white rounded-lg p-6 mb-6">
            <p className="text-lg font-semibold text-gray-800 mb-4">INVESTIMENTO TOTALE: €1.000.000 in macchinari 4.0</p>
            <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
              <div className="text-gray-800">STRUTTURA FINANZIARIA OTTIMIZZATA:</div>
              <div className="mt-2 space-y-1">
                <div>├─ SIMEST Finanziamento: €900.000 (tasso 0,371%)</div>
                <div>├─ SIMEST Fondo Perduto: €100.000 (10% base)</div>
                <div>├─ Credito Imposta 4.0: €400.000 (40% in compensazione)</div>
                <div>└─ Credito Imposta 5.0: fino a €200.000 (20% aggiuntivo per efficienza)</div>
              </div>
            </div>
            <div className="mt-4 bg-green-100 border border-green-300 rounded-lg p-4">
              <p className="text-xl font-bold text-green-800">COSTO EFFETTIVO: €300.000 (70% di risparmio!)</p>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-4">
            <h5 className="font-semibold text-blue-800 mb-2">Vantaggi della combinazione:</h5>
            <ul className="text-blue-700 space-y-1 text-sm">
              <li>• SIMEST fornisce la liquidità immediata per l'acquisto</li>
              <li>• Il credito d'imposta riduce il debito fiscale nei 3 anni successivi</li>
              <li>• Possibilità di cedere il credito d'imposta per liquidità immediata</li>
              <li>• I macchinari 4.0 rientrano perfettamente nelle spese ammissibili SIMEST</li>
            </ul>
          </div>
        </div>

        {/* Combo 2 */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 mb-8 border border-green-200">
          <h4 className="text-xl font-bold text-green-800 mb-6">COMBO 2: SIMEST + Invitalia (Contratti di Sviluppo)</h4>
          <div className="bg-white rounded-lg p-6 mb-6">
            <p className="text-lg font-semibold text-gray-800 mb-4">PROGETTO DA €20.000.000</p>
            <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
              <div className="text-gray-800">ARCHITETTURA FINANZIARIA:</div>
              <div className="mt-2 space-y-1">
                <div>├─ SIMEST: €5.000.000 (max per grandi imprese)</div>
                <div>│   └─ Copre le spese di internazionalizzazione</div>
                <div>├─ Invitalia: €10.000.000</div>
                <div>│   └─ Copre investimenti produttivi in Italia</div>
                <div>├─ Finanziamento bancario: €3.000.000</div>
                <div>└─ Mezzi propri: €2.000.000</div>
              </div>
            </div>
            <div className="mt-4 bg-green-100 border border-green-300 rounded-lg p-4">
              <h5 className="font-semibold text-green-800 mb-2">BENEFICI COMBINATI:</h5>
              <ul className="text-green-700 space-y-1">
                <li>- Fondo perduto SIMEST: fino a €500.000</li>
                <li>- Fondo perduto Invitalia: fino a 30% (€3.000.000)</li>
                <li>- Tasso agevolato su €15.000.000</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-green-50 rounded-lg p-4">
            <h5 className="font-semibold text-green-800 mb-2">Sinergie operative:</h5>
            <ul className="text-green-700 space-y-1 text-sm">
              <li>• SIMEST copre la componente export e digitalizzazione</li>
              <li>• Invitalia finanzia l'ampliamento produttivo</li>
              <li>• Perfetta complementarietà senza sovrapposizioni</li>
            </ul>
          </div>
        </div>

        {/* Combo 3 */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8 mb-8 border border-yellow-200">
          <h4 className="text-xl font-bold text-orange-800 mb-6">COMBO 3: SIMEST + Conto Termico/Certificati Bianchi</h4>
          <div className="bg-white rounded-lg p-6 mb-6">
            <p className="text-lg font-semibold text-gray-800 mb-4">INVESTIMENTO EFFICIENTAMENTO: €2.000.000</p>
            <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
              <div className="text-gray-800">STACK DI INCENTIVI:</div>
              <div className="mt-2 space-y-1">
                <div>├─ SIMEST Finanziamento: €1.600.000</div>
                <div>├─ SIMEST Fondo Perduto (20% energivore): €400.000</div>
                <div>├─ Conto Termico GSE: fino a 65% (€1.300.000)</div>
                <div>└─ Certificati Bianchi: valore 5 anni €500.000</div>
              </div>
            </div>
            <div className="mt-4 bg-yellow-100 border border-yellow-300 rounded-lg p-4">
              <p className="text-xl font-bold text-orange-800">RECUPERO TOTALE: Oltre il 100% dell'investimento!</p>
            </div>
          </div>
          
          <div className="bg-orange-50 rounded-lg p-4">
            <h5 className="font-semibold text-orange-800 mb-2">Meccanismo virtuoso:</h5>
            <ul className="text-orange-700 space-y-1 text-sm">
              <li>• SIMEST finanzia l'intervento iniziale</li>
              <li>• Conto Termico eroga in 2-5 anni</li>
              <li>• Certificati Bianchi generano ricavi per 5-7 anni</li>
              <li>• L'azienda può addirittura generare un profitto dall'efficientamento</li>
            </ul>
          </div>
        </div>

        {/* Combo 4 */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 mb-8 border border-purple-200">
          <h4 className="text-xl font-bold text-purple-800 mb-6">COMBO 4: SIMEST + Bandi Regionali/FESR</h4>
          <div className="bg-white rounded-lg p-6 mb-6">
            <p className="text-lg font-semibold text-gray-800 mb-4">PMI INNOVATIVA - PROGETTO €500.000</p>
            <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
              <div className="text-gray-800">COSTRUZIONE FINANZIARIA:</div>
              <div className="mt-2 space-y-1">
                <div>├─ SIMEST: €350.000 (70% del progetto)</div>
                <div>├─ Bando Regionale FESR: €150.000 (30% fondo perduto)</div>
                <div>├─ SIMEST Fondo Perduto: €50.000 (10% + premialità)</div>
                <div>└─ Bando Regionale contributo: €150.000</div>
              </div>
            </div>
            <div className="mt-4 bg-purple-100 border border-purple-300 rounded-lg p-4">
              <p className="text-xl font-bold text-purple-800">INVESTIMENTO NETTO: €150.000 (70% coperto da contributi)</p>
            </div>
          </div>
        </div>

        {/* Complessità come Opportunità */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-center">
            La Complessità Come Opportunità: Il Ruolo di SolariX Business
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-semibold mb-3 text-yellow-300">🎯 Competenze Multidisciplinari:</h4>
              <ul className="text-sm space-y-1 opacity-90">
                <li>• Conoscenza approfondita di ogni normativa</li>
                <li>• Capacità di coordinamento temporale</li>
                <li>• Gestione documentale complessa</li>
                <li>• Rendicontazioni multiple e differenziate</li>
              </ul>
            </div>
            
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-semibold mb-3 text-red-300">⚠️ Criticità da Gestire:</h4>
              <ul className="text-sm space-y-1 opacity-90">
                <li>• Evitare il doppio finanziamento</li>
                <li>• Rispettare i limiti de minimis</li>
                <li>• Sincronizzare le tempistiche</li>
                <li>• Garantire la tracciabilità dei flussi</li>
              </ul>
            </div>
            
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-semibold mb-3 text-green-300">✅ Il Valore Aggiunto di SolariX Business:</h4>
              <p className="text-sm opacity-90">
                Con SolariX Business, la complessità diventa un vantaggio competitivo. Il nostro team:
              </p>
            </div>
          </div>
          
          <div className="bg-white/5 rounded-lg p-6 mb-6">
            <ul className="space-y-2 text-sm">
              <li>• Analizza il progetto identificando TUTTE le opportunità di finanziamento</li>
              <li>• Progetta l'architettura finanziaria ottimale evitando incompatibilità</li>
              <li>• Gestisce simultaneamente tutte le pratiche con cronoprogramma integrato</li>
              <li>• Monitora l'evoluzione garantendo il rispetto di tutti i vincoli</li>
              <li>• Rendiconta secondo le specifiche di ogni ente finanziatore</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-6">
            <h4 className="font-bold mb-3">Casi di Successo SolariX Business:</h4>
            <ul className="space-y-2 text-sm">
              <li>• PMI manifatturiera: SIMEST + 4.0 + FESR = 75% investimento coperto</li>
              <li>• Azienda energivora: SIMEST + Conto Termico + Certificati Bianchi = ROI in 2 anni</li>
              <li>• Start-up innovativa: SIMEST + Smart&Start + Brevetti+ = 85% capitale agevolato</li>
            </ul>
            <p className="mt-4 text-center font-semibold italic">
              Il nostro approccio "Incentive Stacking" massimizza il ritorno su ogni euro investito, trasformando un semplice finanziamento SIMEST in una leva strategica per la crescita aziendale.
            </p>
          </div>
        </div>

        {/* 4.2 Inserimento Mercati Esteri */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-blue-700 mb-6 flex items-center">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3">4.2</span>
            Inserimento Mercati Esteri
          </h3>
          
          <div className="bg-blue-50 rounded-lg p-6 mb-4">
            <p className="text-gray-800 mb-4">
              <strong>Importi:</strong> €50.000 - €4.000.000 <br/>
              <strong>Fondo perduto:</strong> 10-20% (con premialità geografiche)
            </p>
            
            <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-r-lg">
              <h4 className="font-semibold text-yellow-800 mb-3">Novità 2025 - Focus geografici strategici:</h4>
              <ul className="text-yellow-700 space-y-1">
                <li>• <strong>Africa:</strong> +10% fondo perduto, esenzione garanzie</li>
                <li>• <strong>America Latina:</strong> +10% fondo perduto, esenzione garanzie</li>
                <li>• <strong>India:</strong> +10% fondo perduto, condizioni dedicate</li>
                <li>• <strong>Balcani Occidentali:</strong> condizioni agevolate</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-800 mb-2">Sinergie con Altri Strumenti:</h4>
            <p className="text-green-700 text-sm mb-2">Questa linea può essere combinata con:</p>
            <ul className="text-green-700 text-sm space-y-1">
              <li>• <strong>ICE Export:</strong> voucher per fiere e temporary manager</li>
              <li>• <strong>SACE:</strong> garanzie export complementari</li>
              <li>• <strong>Bandi Regionali Internazionalizzazione:</strong> contributi aggiuntivi per specifici mercati</li>
            </ul>
          </div>
        </div>

        {/* 4.3 Partecipazione a Fiere/Mostre */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-blue-700 mb-6 flex items-center">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3">4.3</span>
            Partecipazione a Fiere/Mostre
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-50 rounded-lg p-6">
              <p className="text-gray-800 mb-4">
                <strong>Importi:</strong> €10.000 - €150.000<br/>
                <strong>Fondo perduto:</strong> fino al 40% con premialità<br/>
                <strong>Finalità:</strong> Partecipazione a fiere internazionali, anche in Italia se di rilevanza internazionale
              </p>
            </div>
            
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
              <h4 className="font-semibold text-indigo-800 mb-3">Ottimizzazione con Altri Incentivi:</h4>
              <ul className="text-indigo-700 text-sm space-y-1">
                <li>• <strong>Voucher Fiere Regionali:</strong> copertura costi stand e allestimento</li>
                <li>• <strong>ICE Agenzia:</strong> missioni di sistema con costi ridotti</li>
                <li>• <strong>Credito d'imposta pubblicità:</strong> per materiale promozionale</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 4.4 E-Commerce */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-blue-700 mb-6 flex items-center">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3">4.4</span>
            E-Commerce
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-cyan-50 rounded-lg p-6">
              <p className="text-gray-800 mb-4">
                <strong>Importi:</strong> €10.000 - €300.000<br/>
                <strong>Fondo perduto:</strong> fino al 40% con premialità<br/>
                <strong>Finalità:</strong> Sviluppo piattaforme proprie o accesso a marketplace
              </p>
            </div>
            
            <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
              <h4 className="font-semibold text-teal-800 mb-3">Stack Tecnologico Finanziabile:</h4>
              <ul className="text-teal-700 text-sm space-y-1">
                <li>• <strong>SIMEST:</strong> piattaforma e-commerce e integrazione</li>
                <li>• <strong>Voucher Digitali:</strong> consulenza e formazione digitale</li>
                <li>• <strong>Patent Box:</strong> ottimizzazione fiscale su software proprietario</li>
                <li>• <strong>Credito R&S:</strong> per sviluppo software innovativo</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 4.5 Temporary Export Manager */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-blue-700 mb-6 flex items-center">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3">4.5</span>
            Temporary Export Manager
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-rose-50 rounded-lg p-6">
              <p className="text-gray-800 mb-4">
                <strong>Importi:</strong> €25.000 - €150.000<br/>
                <strong>Fondo perduto:</strong> fino al 40% con premialità<br/>
                <strong>Finalità:</strong> Inserimento temporaneo figure specializzate export
              </p>
            </div>
            
            <div className="bg-pink-50 border border-pink-200 rounded-lg p-6">
              <h4 className="font-semibold text-pink-800 mb-3">Combinazioni Strategiche:</h4>
              <ul className="text-pink-700 text-sm space-y-1">
                <li>• <strong>Voucher TEM Regionali:</strong> copertura aggiuntiva costi consulenza</li>
                <li>• <strong>Formazione 4.0:</strong> per upskilling del personale interno</li>
                <li>• <strong>Garanzia Giovani:</strong> se il TEM è under 35</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione 5 - Spese Ammissibili */}
      <section id="spese-ammissibili" className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-green-500 pb-4">
          5. SPESE AMMISSIBILI: DETTAGLIO COMPLETO
        </h2>

        {/* 5.1 Categorie di Spese Finanziabili */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-green-700 mb-6 flex items-center">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-3">5.1</span>
            Categorie di Spese Finanziabili
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Categoria A */}
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h4 className="text-lg font-semibold text-green-800 mb-4">A) Investimenti per Sostenibilità (anche in Italia)</h4>
              <ul className="space-y-2 text-green-700 text-sm">
                <li>• Efficientamento energetico</li>
                <li>• Efficientamento idrico</li>
                <li>• Mitigazione impatti climatici</li>
                <li>• Installazione impianti fotovoltaici</li>
                <li>• Sistemi di accumulo energia</li>
                <li>• Isolamento termico edifici</li>
              </ul>
            </div>

            {/* Categoria B */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h4 className="text-lg font-semibold text-blue-800 mb-4">B) Certificazioni Ambientali</h4>
              <ul className="space-y-2 text-blue-700 text-sm">
                <li>• ISO 45001 (Sicurezza sul lavoro)</li>
                <li>• ISO 14001 (Gestione ambientale)</li>
                <li>• ISO 50001 (Gestione energia)</li>
                <li>• ISO 14064 (Gas serra)</li>
                <li>• SA8000 (Responsabilità sociale)</li>
              </ul>
            </div>

            {/* Categoria C */}
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <h4 className="text-lg font-semibold text-purple-800 mb-4">C) Investimenti per Rafforzamento Patrimoniale</h4>
              <ul className="space-y-2 text-purple-700 text-sm">
                <li>• Immobilizzazioni materiali (macchinari, impianti)</li>
                <li>• Immobilizzazioni immateriali (software, brevetti)</li>
                <li>• Incrementi capitale sociale controllate (max €600.000)</li>
                <li>• Finanziamenti soci a controllate</li>
              </ul>
            </div>

            {/* Categoria D */}
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
              <h4 className="text-lg font-semibold text-orange-800 mb-4">D) Consulenze Specialistiche</h4>
              <ul className="space-y-2 text-orange-700 text-sm">
                <li>• Presentazione e gestione richiesta</li>
                <li>• Asseverazioni del Revisore</li>
                <li>• Consulenze digitali e ambientali</li>
              </ul>
              <div className="mt-3 bg-orange-100 rounded p-2">
                <p className="text-orange-800 font-medium text-sm">Limite: 5% dell'importo (max €100.000)</p>
              </div>
            </div>
          </div>
        </div>

        {/* 5.2 Spese NON Ammissibili */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-red-700 mb-6 flex items-center">
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mr-3">5.2</span>
            Spese NON Ammissibili
          </h3>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center text-red-700">
                  <span className="text-red-500 mr-2">❌</span>
                  <span className="text-sm">Spese sostenute prima del CUP</span>
                </div>
                <div className="flex items-center text-red-700">
                  <span className="text-red-500 mr-2">❌</span>
                  <span className="text-sm">Personale dell'impresa richiedente</span>
                </div>
                <div className="flex items-center text-red-700">
                  <span className="text-red-500 mr-2">❌</span>
                  <span className="text-sm">Attività correnti non connesse agli investimenti</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-red-700">
                  <span className="text-red-500 mr-2">❌</span>
                  <span className="text-sm">Assistenza post-vendita, trasporto e stoccaggio merci</span>
                </div>
                <div className="flex items-center text-red-700">
                  <span className="text-red-500 mr-2">❌</span>
                  <span className="text-sm">Spese promozionali o social media (per Transizione Digitale)</span>
                </div>
                <div className="flex items-center text-red-700">
                  <span className="text-red-500 mr-2">❌</span>
                  <span className="text-sm">Pagamenti per compensazione</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
