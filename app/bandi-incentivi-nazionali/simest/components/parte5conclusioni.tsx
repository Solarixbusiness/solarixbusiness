import React from 'react';

export default function Parte5Conclusioni() {
  return (
    <div className="space-y-8">
      {/* Conclusioni */}
      <section id="conclusioni" className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-green-500 pb-4">
          CONCLUSIONI
        </h2>

        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-8 mb-8">
          <p className="text-lg text-gray-800 mb-6 leading-relaxed">
            Il Fondo 394/81 nel 2025 rappresenta un'opportunità straordinaria per le imprese italiane, con particolare vantaggio per:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 border border-green-200">
              <h4 className="text-lg font-semibold text-green-800 mb-3">🏭 Imprese Energivore:</h4>
              <p className="text-green-700 text-sm">possono accedere a condizioni uniche con fondo perduto al 20% ed esenzione garanzie</p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-blue-200">
              <h4 className="text-lg font-semibold text-blue-800 mb-3">🔗 PMI in Filiera:</h4>
              <p className="text-blue-700 text-sm">finalmente possono accedere ai finanziamenti anche senza export diretto, aprendo il fondo a migliaia di nuove imprese</p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-orange-200">
              <h4 className="text-lg font-semibold text-orange-800 mb-3">🌅 Imprese del Mezzogiorno:</h4>
              <p className="text-orange-700 text-sm">cumulo di premialità che può portare a contributi fino al 30%</p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-purple-200">
              <h4 className="text-lg font-semibold text-purple-800 mb-3">🌍 Progetti in Aree Strategiche:</h4>
              <p className="text-purple-700 text-sm">Africa, America Latina e India offrono condizioni particolarmente vantaggiose</p>
            </div>
          </div>

          <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-yellow-800 mb-4">La chiave del successo sta nella:</h4>
            <ul className="space-y-2 text-yellow-700">
              <li>• Preparazione accurata della documentazione</li>
              <li>• Strutturazione ottimale del progetto (mix digitale/green)</li>
              <li>• Combinazione intelligente con altri incentivi</li>
              <li>• Tempestività nella presentazione (fondi limitati)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contatti e Assistenza */}
      <section id="contatti-assistenza" className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-blue-500 pb-4">
          CONTATTI E ASSISTENZA
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contatti SIMEST */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Contatti SIMEST</h3>
            <div className="space-y-3 text-blue-700">
              <div>
                <strong>Portale:</strong> www.simest.it
              </div>
              <div>
                <strong>Customer Care:</strong> info@simest.it
              </div>
              <div>
                <strong>PEC:</strong> simest@legalmail.it
              </div>
            </div>
          </div>

          {/* Date Importanti */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-yellow-800 mb-4">Date Importanti 2025</h3>
            <div className="space-y-3 text-yellow-700 text-sm">
              <div>
                <strong>Sempre aperto:</strong> Portale per domande (salvo esaurimento fondi)
              </div>
              <div>
                <strong>Fino al 31/12/2026:</strong> Condizioni speciali energivore
              </div>
              <div>
                <strong>Monitorare:</strong> Disponibilità fondi sul portale
              </div>
            </div>
          </div>

          {/* Supporto Professionale */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Supporto Professionale Consigliato</h3>
            <p className="text-green-700 text-sm mb-3">
              Vista la complessità della normativa e l'importanza di massimizzare i benefici, si consiglia di affidarsi a consulenti specializzati per:
            </p>
            <ul className="space-y-1 text-green-700 text-sm">
              <li>• Analisi preliminare di fattibilità</li>
              <li>• Ottimizzazione della struttura finanziaria</li>
              <li>• Gestione completa della pratica</li>
              <li>• Assistenza in fase di rendicontazione</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Appendice A - Esempi Pratici */}
      <section id="esempi-pratici" className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-purple-500 pb-4">
          APPENDICE A: ESEMPI PRATICI DI CALCOLO
        </h2>

        {/* Caso 1 */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-purple-700 mb-6">
            Caso 1: PMI Manifatturiera Energivora del Mezzogiorno
          </h3>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 mb-6">
            <h4 className="text-lg font-semibold text-purple-800 mb-4">Dati azienda:</h4>
            <div className="grid md:grid-cols-2 gap-4 text-purple-700">
              <div>• Fatturato medio: €8.000.000</div>
              <div>• Export: 5% (€400.000)</div>
              <div>• Sede: Napoli</div>
              <div>• Consumo energetico: 1,5 GWh/anno</div>
              <div>• Certificazione ISO 50001</div>
            </div>
          </div>

          <div className="bg-white border border-purple-200 rounded-lg p-6 mb-6">
            <h4 className="text-lg font-semibold text-purple-800 mb-4">Progetto: Investimento €1.500.000 in:</h4>
            <ul className="space-y-2 text-purple-700">
              <li>• 60% efficientamento energetico (€900.000)</li>
              <li>• 40% digitalizzazione processi (€600.000)</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Calcolo finanziamento:</h4>
            <div className="font-mono text-sm space-y-1 text-gray-700">
              <div>Importo massimo finanziabile: 35% × €8.000.000 = €2.800.000</div>
              <div>Limite PMI: €2.500.000</div>
              <div>Importo richiesto: €1.500.000 ✓ AMMISSIBILE</div>
            </div>
          </div>

          <div className="bg-green-100 border border-green-300 rounded-lg p-6 mb-6">
            <h4 className="text-lg font-semibold text-green-800 mb-4">STRUTTURA FINANZIAMENTO:</h4>
            <div className="font-mono text-sm space-y-1 text-green-700">
              <div>- Finanziamento agevolato: €1.200.000 (tasso 0,371%)</div>
              <div>- Fondo perduto base (20% energivora): €300.000</div>
              <div>- Limitato a: €200.000</div>
              <div>- Premialità Mezzogiorno: già inclusa nel 20%</div>
            </div>
            <div className="mt-4 bg-green-200 rounded p-3">
              <div className="font-bold text-green-800">TOTALE BENEFICIO: €1.400.000</div>
              <div className="text-green-700">Di cui a fondo perduto: €200.000 (13,3% del progetto)</div>
            </div>
          </div>

          <div className="bg-blue-100 border border-blue-300 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-blue-800 mb-4">RISPARMIO SU 6 ANNI:</h4>
            <div className="space-y-2 text-blue-700">
              <div>- Interessi risparmiati vs mercato (5%): circa €180.000</div>
              <div>- Fondo perduto: €200.000</div>
              <div className="font-bold text-blue-800">- RISPARMIO TOTALE: €380.000 (25% del progetto)</div>
            </div>
          </div>
        </div>

        {/* Caso 2 */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-blue-700 mb-6">
            Caso 2: Micro Impresa in Filiera Automotive
          </h3>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 mb-6">
            <h4 className="text-lg font-semibold text-blue-800 mb-4">Dati azienda:</h4>
            <div className="grid md:grid-cols-2 gap-4 text-blue-700">
              <div>• Fatturato medio: €800.000</div>
              <div>• Export diretto: 0%</div>
              <div>• Export tramite filiera: 3,5% (€28.000)</div>
              <div>• Clienti principali: 3 aziende che esportano 30-40%</div>
              <div>• Sede: Milano</div>
            </div>
          </div>

          <div className="bg-white border border-blue-200 rounded-lg p-6 mb-6">
            <h4 className="text-lg font-semibold text-blue-800 mb-4">Progetto: Investimento €200.000 in:</h4>
            <ul className="space-y-2 text-blue-700">
              <li>• 50% software gestionale 4.0 (€100.000)</li>
              <li>• 50% macchinari CNC (€100.000)</li>
            </ul>
          </div>

          <div className="bg-cyan-100 border border-cyan-300 rounded-lg p-6 mb-6">
            <h4 className="text-lg font-semibold text-cyan-800 mb-4">STRUTTURA FINANZIAMENTO:</h4>
            <div className="space-y-2 text-cyan-700">
              <div>- Finanziamento agevolato: €180.000 (tasso 0,371%)</div>
              <div>- Fondo perduto (10% base): €20.000</div>
            </div>
            <div className="mt-4 bg-cyan-200 rounded p-3">
              <div className="font-bold text-cyan-800">TOTALE BENEFICIO: €200.000</div>
              <div className="text-cyan-700">Di cui a fondo perduto: €20.000 (10% del progetto)</div>
            </div>
          </div>
        </div>

        {/* Caso 3 */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-orange-700 mb-6">
            Caso 3: Grande Impresa con Progetto Africa
          </h3>

          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-6 mb-6">
            <h4 className="text-lg font-semibold text-orange-800 mb-4">Dati azienda:</h4>
            <div className="grid md:grid-cols-2 gap-4 text-orange-700">
              <div>• Fatturato medio: €50.000.000</div>
              <div>• Export: 25% (€12.500.000)</div>
              <div>• Progetto: Apertura filiale in Kenya</div>
            </div>
          </div>

          <div className="bg-white border border-orange-200 rounded-lg p-6 mb-6">
            <h4 className="text-lg font-semibold text-orange-800 mb-4">Progetto: Investimento €3.000.000 in:</h4>
            <ul className="space-y-2 text-orange-700">
              <li>• Struttura commerciale Nairobi</li>
              <li>• Formazione personale locale</li>
              <li>• Sistemi informativi</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Calcolo finanziamento:</h4>
            <div className="font-mono text-sm space-y-1 text-gray-700">
              <div>Importo massimo: 35% × €50.000.000 = €17.500.000</div>
              <div>Limite Grandi Imprese: €5.000.000</div>
              <div>Importo richiesto: €3.000.000 ✓ AMMISSIBILE</div>
            </div>
          </div>

          <div className="bg-red-100 border border-red-300 rounded-lg p-6 mb-6">
            <h4 className="text-lg font-semibold text-red-800 mb-4">STRUTTURA FINANZIAMENTO:</h4>
            <div className="font-mono text-sm space-y-1 text-red-700">
              <div>- Finanziamento agevolato: €2.700.000 (tasso 0,371%)</div>
              <div>- Fondo perduto (10% Africa): €300.000</div>
              <div>- Limitato a: €100.000</div>
              <div>- ESENZIONE GARANZIE (vantaggio Africa)</div>
            </div>
          </div>

          <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-yellow-800 mb-4">VALORE ESENZIONE GARANZIE:</h4>
            <div className="space-y-2 text-yellow-700">
              <div>- Risparmio fideiussione (2% annuo): €60.000/anno</div>
              <div>- Su 6 anni: €360.000</div>
            </div>
            <div className="mt-4 bg-yellow-200 rounded p-3">
              <div className="font-bold text-yellow-800">VALORE TOTALE BENEFICIO: €460.000</div>
              <div className="text-yellow-700">(€100.000 fondo perduto + €360.000 risparmio garanzie)</div>
            </div>
          </div>

          <div className="bg-indigo-100 border border-indigo-300 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-indigo-800 mb-4">COMBINAZIONE CON INDUSTRIA 4.0:</h4>
            <div className="space-y-2 text-indigo-700">
              <div>- Credito d'imposta 40% su €100.000: €40.000</div>
              <div>- Totale agevolazioni: €60.000 (30% del progetto)</div>
            </div>
            <div className="mt-4 bg-indigo-200 rounded p-3">
              <div className="font-bold text-indigo-800">COSTO EFFETTIVO PROGETTO:</div>
              <div className="text-indigo-700">€200.000 - €20.000 (fondo perduto) - €40.000 (credito imposta) = €140.000</div>
              <div className="font-bold text-indigo-800">RISPARMIO: 30% immediato + interessi agevolati</div>
            </div>
          </div>
        </div>

        {/* Caso 3 */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-orange-700 mb-6">
            Caso 3: Grande Impresa con Progetto Africa
          </h3>

          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-6 mb-6">
            <h4 className="text-lg font-semibold text-orange-800 mb-4">Dati azienda:</h4>
            <div className="grid md:grid-cols-2 gap-4 text-orange-700">
              <div>• Fatturato medio: €50.000.000</div>
              <div>• Export: 25% (€12.500.000)</div>
              <div>• Progetto: Apertura filiale in Kenya</div>
            </div>
          </div>

          <div className="bg-white border border-orange-200 rounded-lg p-6 mb-6">
            <h4 className="text-lg font-semibold text-orange-800 mb-4">Progetto: Investimento €3.000.000 in:</h4>
            <ul className="space-y-2 text-orange-700">
              <li>• Struttura commerciale Nairobi</li>
              <li>• Formazione personale locale</li>
              <li>• Sistemi informativi</li>
            </ul>
          </div>

          <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-yellow-800 mb-4">BENEFICIO TOTALE:</h4>
            <div className="space-y-2 text-yellow-700">
              <div>€100.000 (fondo perduto) + €360.000 (no garanzie) = €460.000</div>
            </div>
            <div className="mt-4 bg-yellow-200 rounded p-3">
              <div className="font-bold text-yellow-800">VALORE ESENZIONE GARANZIE:</div>
              <div className="text-yellow-700">- Risparmio fideiussione (2% annuo): €60.000/anno</div>
              <div className="text-yellow-700">- Su 6 anni: €360.000</div>
            </div>
          </div>
        </div>
      </section>

      {/* Appendice B - Glossario Tecnico */}
      <section id="glossario-tecnico" className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-indigo-500 pb-4">
          APPENDICE B: GLOSSARIO TECNICO
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg">
              <h4 className="font-semibold text-indigo-800 mb-2">CUP (Codice Unico di Progetto):</h4>
              <p className="text-indigo-700 text-sm">Codice alfanumerico rilasciato da SIMEST che identifica univocamente il progetto. Obbligatorio su tutte le fatture e bonifici.</p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <h4 className="font-semibold text-blue-800 mb-2">De Minimis:</h4>
              <p className="text-blue-700 text-sm">Regime di aiuti di importo limitato (€200.000 in 3 anni) che non richiede notifica alla Commissione Europea.</p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
              <h4 className="font-semibold text-green-800 mb-2">DNSH (Do No Significant Harm):</h4>
              <p className="text-green-700 text-sm">Principio del "non arrecare danno significativo" all'ambiente, obbligatorio per progetti PNRR.</p>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
              <h4 className="font-semibold text-orange-800 mb-2">Impresa Energivora:</h4>
              <p className="text-orange-700 text-sm">Impresa con consumo energetico annuo &ge; 1 GWh o con intensità elettrica &ge; 20% sui costi.</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
              <h4 className="font-semibold text-purple-800 mb-2">Intensità Elettrica (IIE):</h4>
              <p className="text-purple-700 text-sm">Rapporto tra costi energetici e fatturato o valore aggiunto.</p>
            </div>

            <div className="bg-pink-50 border-l-4 border-pink-500 p-4 rounded-r-lg">
              <h4 className="font-semibold text-pink-800 mb-2">Periodo di Realizzazione:</h4>
              <p className="text-pink-700 text-sm">Arco temporale (24+6 mesi) entro cui realizzare il progetto e sostenere le spese.</p>
            </div>

            <div className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded-r-lg">
              <h4 className="font-semibold text-teal-800 mb-2">Credit Scoring Fondo di Garanzia:</h4>
              <p className="text-teal-700 text-sm">Sistema di valutazione del merito creditizio (scala 1-9, ammissibili 1-9).</p>
            </div>

            <div className="bg-cyan-50 border-l-4 border-cyan-500 p-4 rounded-r-lg">
              <h4 className="font-semibold text-cyan-800 mb-2">Asseverazione:</h4>
              <p className="text-cyan-700 text-sm">Attestazione di un revisore legale sulla correttezza delle spese rendicontate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Appendice C - Template */}
      <section id="template-modelli" className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-red-500 pb-4">
          APPENDICE C: MODELLI E TEMPLATE
        </h2>

        {/* Template 1 */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-red-700 mb-6">
            Template 1: Dichiarazione Appartenenza Filiera
          </h3>

          <div className="bg-gray-50 border border-gray-300 rounded-lg p-6">
            <div className="bg-white rounded p-4 font-mono text-sm">
              <div className="text-center font-bold mb-4">DICHIARAZIONE SOSTITUTIVA DI ATTO NOTORIO</div>
              <div className="text-center mb-4">(Art. 47 D.P.R. 445/2000)</div>
              
              <div className="mb-4">
                Il sottoscritto [Nome Cognome], in qualità di legale rappresentante<br/>
                della società [Ragione Sociale], P.IVA [Numero],
              </div>

              <div className="text-center font-bold mb-4">DICHIARA</div>

              <div className="mb-4">che l'impresa fa parte di una filiera produttiva composta da:</div>

              <div className="space-y-3 mb-4">
                <div>
                  1. Cliente: [Ragione Sociale Cliente 1]<br/>
                  &nbsp;&nbsp;&nbsp;- Fatturato export: [%] del fatturato totale<br/>
                  &nbsp;&nbsp;&nbsp;- Contratto fornitura dal: [Data]<br/>
                  &nbsp;&nbsp;&nbsp;- Fatturato verso cliente: € [Importo] ([%] del nostro fatturato)
                </div>
                <div>
                  2. Cliente: [Ragione Sociale Cliente 2]<br/>
                  &nbsp;&nbsp;&nbsp;- Fatturato export: [%] del fatturato totale<br/>
                  &nbsp;&nbsp;&nbsp;- Contratto fornitura dal: [Data]<br/>
                  &nbsp;&nbsp;&nbsp;- Fatturato verso cliente: € [Importo] ([%] del nostro fatturato)
                </div>
                <div>
                  3. Cliente: [Ragione Sociale Cliente 3]<br/>
                  &nbsp;&nbsp;&nbsp;- Fatturato export: [%] del fatturato totale<br/>
                  &nbsp;&nbsp;&nbsp;- Contratto fornitura dal: [Data]<br/>
                  &nbsp;&nbsp;&nbsp;- Fatturato verso cliente: € [Importo] ([%] del nostro fatturato)
                </div>
              </div>

              <div className="font-bold mb-4">FATTURATO EXPORT INDIRETTO TOTALE: € [Importo] ([%] del fatturato)</div>

              <div className="mb-4">
                Si allegano:<br/>
                - Contratti di fornitura<br/>
                - Dichiarazioni IVA clienti<br/>
                - Partitario clienti
              </div>

              <div className="text-right">Data e Firma</div>
            </div>
          </div>
        </div>

        {/* Template 2 */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-red-700 mb-6">
            Template 2: Check-list Documentale Pre-Invio
          </h3>

          <div className="bg-gray-50 border border-gray-300 rounded-lg p-6">
            <div className="bg-white rounded p-4">
              <div className="text-center font-bold mb-4">CHECK-LIST DOCUMENTAZIONE SIMEST</div>
              <div className="mb-4 text-sm">□ = Da preparare &nbsp;&nbsp; ✓ = Pronto &nbsp;&nbsp; ⊗ = Non applicabile</div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-blue-800">DOCUMENTI BASE:</h4>
                  <div className="space-y-1 text-sm">
                    <div>□ Visura camerale (&lt; 30 giorni)</div>
                    <div>□ Bilanci ultimi 2 esercizi</div>
                    <div>□ Situazione patrimoniale infrannuale</div>
                    <div>□ Documento identità LR</div>
                    <div>□ Codice fiscale/P.IVA</div>
                    <div>□ Dichiarazione De Minimis compilata</div>
                    <div>□ DURC in corso di validità</div>
                    <div>□ Statuto e atto costitutivo</div>
                  </div>

                  <h4 className="font-semibold mb-3 mt-6 text-green-800">DOCUMENTI PROGETTO:</h4>
                  <div className="space-y-1 text-sm">
                    <div>□ Business plan dettagliato</div>
                    <div>□ Preventivi fornitori (con dettaglio voci)</div>
                    <div>□ Cronoprogramma investimenti</div>
                    <div>□ Analisi mercato target</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-orange-800">PER ENERGIVORE:</h4>
                  <div className="space-y-1 text-sm">
                    <div>□ Diagnosi energetica O</div>
                    <div>□ Certificazione ISO 50001/14064/14068</div>
                    <div>□ Bollette energetiche ultimo anno</div>
                    <div>□ Dichiarazione consumi energetici</div>
                  </div>

                  <h4 className="font-semibold mb-3 mt-6 text-purple-800">PER FILIERA:</h4>
                  <div className="space-y-1 text-sm">
                    <div>□ Contratti fornitura (min. 2, &gt; 12 mesi)</div>
                    <div>□ Dichiarazioni IVA clienti</div>
                    <div>□ Partitario clienti con fatturati</div>
                    <div>□ Dichiarazione intento clienti</div>
                  </div>

                  <h4 className="font-semibold mb-3 mt-6 text-red-800">PER AREE STRATEGICHE:</h4>
                  <div className="space-y-1 text-sm">
                    <div>□ Analisi mercato paese target</div>
                    <div>□ Eventuale pre-contratto locale</div>
                    <div>□ Piano formazione personale</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t pt-4">
                <div className="text-sm">
                  <div>NOTE: _________________________________</div>
                  <div>DATA VERIFICA: ________________________</div>
                  <div>RESPONSABILE: _________________________</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Note Finali */}
      <section id="note-finali" className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-8 border-b-4 border-yellow-500 pb-4">
          NOTE FINALI E DISCLAIMER
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="bg-white/10 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-yellow-300 mb-4">Ultimo aggiornamento:</h3>
              <p className="text-gray-300">Novembre 2024</p>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-300 mb-4">Avvertenze importanti:</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• I fondi sono limitati e assegnati in ordine cronologico</li>
                <li>• Le condizioni possono variare con nuove circolari</li>
                <li>• L'approvazione non è automatica ma soggetta a valutazione</li>
                <li>• Il mancato rispetto degli obblighi comporta la revoca</li>
                <li>• Verificare sempre la capienza de minimis prima della domanda</li>
              </ul>
            </div>
          </div>

          <div>
            <div className="bg-white/10 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-blue-300 mb-4">Disclaimer:</h3>
              <p className="text-gray-300 text-sm">
                Questo documento ha carattere informativo e non sostituisce la consulenza professionale. 
                Le informazioni sono basate sulla normativa vigente alla data di pubblicazione. 
                Si raccomanda di verificare sempre le ultime circolari operative sul portale SIMEST 
                e di consultare professionisti qualificati per l'applicazione al caso specifico.
              </p>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-300 mb-4">Per restare aggiornati:</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Iscriversi alla newsletter SIMEST</li>
                <li>• Monitorare il portale per aperture bandi</li>
                <li>• Seguire gli aggiornamenti normativi</li>
                <li>• Partecipare ai webinar informativi</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400 text-sm border-t border-gray-600 pt-6">
          © 2024 - Guida completa al Fondo 394/81 SIMEST. Tutti i diritti riservati. 
          La riproduzione, anche parziale, è consentita citando la fonte.
        </div>
      </section>
    </div>
  );
}
