export default function Section04() {
  return (
    <section id="sezione-4" className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
      <div className="mb-8">
        <span className="text-green-600 font-bold text-lg">PARTE 4</span>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">Produzione di Energia Termica da Fonti Rinnovabili</h2>
        <div className="w-16 h-1 bg-green-600 mt-3"></div>
      </div>
      
      <div className="prose max-w-none space-y-8">
        {/* Sezione 21: Panoramica delle Tecnologie Incentivate */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-800 mb-6">21. PANORAMICA DELLE TECNOLOGIE INCENTIVATE</h3>
          
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">21.1 Articolo 8 - Tipologie di Intervento per Energia Termica Rinnovabile</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              Il Conto Termico 3.0 rivoluziona l'approccio alla produzione di energia termica rinnovabile, introducendo requisiti prestazionali più stringenti, nuove tecnologie e un sistema di premialità che favorisce l'innovazione e la qualità degli impianti.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Le tecnologie incentivate spaziano dalle consolidate pompe di calore ai sistemi ibridi più avanzati, dai generatori a biomassa di ultima generazione agli impianti solari termici ad alta efficienza, fino alle innovative soluzioni di microcogenerazione alimentate da fonti rinnovabili.
            </p>
          </div>
        </div>

        {/* Sezione 22: Pompe di Calore */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-800 mb-6">22. POMPE DI CALORE: IL CUORE DELLA TRANSIZIONE</h3>
          
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">22.1 Pompe di Calore Elettriche - Requisiti Prestazionali</h4>
            
            <div className="mb-6">
              <h5 className="text-lg font-medium text-gray-800 mb-4">22.1.1 Sistema di Classificazione Ecodesign</h5>
              <p className="text-gray-700 mb-4">
                Il decreto adotta integralmente i requisiti minimi dei Regolamenti Ecodesign europei, garantendo che solo le tecnologie più efficienti accedano agli incentivi:
              </p>

              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h6 className="text-lg font-medium text-blue-800 mb-4">Regolamento 206/2012 - Sistemi Aria/Aria ≤12 kW</h6>
                  
                  <div className="space-y-4">
                    <div className="bg-white border border-blue-200 rounded p-4">
                      <div className="font-semibold text-blue-800 mb-2">Split/Multisplit</div>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p><strong>ηs ≥ 149%</strong> (134% per refrigeranti a basso GWP)</p>
                        </div>
                        <div>
                          <p><strong>SCOP ≥ 3,8</strong> (3,42)</p>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 border border-gray-200 rounded p-3 mt-3">
                        <div className="font-medium text-gray-800 mb-2">Spiegazione Sigle:</div>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li><strong>ηs:</strong> Efficienza stagionale di riscaldamento (%)</li>
                          <li><strong>SCOP:</strong> Seasonal Coefficient of Performance - Coefficiente di prestazione stagionale</li>
                          <li><strong>GWP:</strong> Global Warming Potential - Potenziale di riscaldamento globale del refrigerante</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">22.2 Pompe di Calore a Gas - Tecnologie Avanzate</h4>
            
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h5 className="text-lg font-medium text-orange-800 mb-4">22.2.1 Prestazioni Minime Richieste</h5>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white border border-orange-200 rounded p-4">
                  <div className="font-semibold text-orange-800 mb-2">Assorbimento</div>
                  <p className="text-sm mb-1"><strong>ηs ≥ 110-130%</strong></p>
                  <p className="text-sm mb-1"><strong>SPER ≥ 1,13-1,33</strong></p>
                  <p className="text-sm"><strong>Emissioni NOx: &lt;120 mg/kWh</strong></p>
                </div>
                
                <div className="bg-white border border-orange-200 rounded p-4">
                  <div className="font-semibold text-orange-800 mb-2">Motore endotermico</div>
                  <p className="text-sm mb-1"><strong>ηs ≥ 130%</strong></p>
                  <p className="text-sm mb-1"><strong>SPER ≥ 1,33</strong></p>
                  <p className="text-sm"><strong>Emissioni NOx: &lt;240 mg/kWh</strong></p>
                </div>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded p-4 mt-4">
                <div className="font-semibold text-gray-800 mb-2">Spiegazione Sigle:</div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li><strong>SPER:</strong> Seasonal Primary Energy Ratio - Rapporto stagionale di energia primaria</li>
                  <li><strong>Assorbimento:</strong> Tecnologia che utilizza calore per azionare il ciclo frigorifero</li>
                  <li><strong>Motore endotermico:</strong> Pompa di calore azionata da motore a combustione interna</li>
                  <li><strong>NOx:</strong> Ossidi di azoto - Inquinanti atmosferici da limitare</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">22.3 Sistemi Geotermici - Efficienza Superiore</h4>
            
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
              <h5 className="text-lg font-medium text-indigo-800 mb-4">22.3.1 Salamoia/Aria e Salamoia/Acqua</h5>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white border border-indigo-200 rounded p-4">
                  <div className="font-semibold text-indigo-800 mb-2">≤12 kW</div>
                  <p className="text-sm mb-1"><strong>ηs ≥ 149%</strong> (134%)</p>
                  <p className="text-sm"><strong>SCOP ≥ 3,8</strong> (3,42)</p>
                </div>
                
                <div className="bg-white border border-indigo-200 rounded p-4">
                  <div className="font-semibold text-indigo-800 mb-2">&gt;12 kW</div>
                  <p className="text-sm mb-1"><strong>ηs ≥ 137%</strong></p>
                  <p className="text-sm"><strong>SCOP ≥ 3,625</strong></p>
                </div>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded p-4 mt-4">
                <div className="font-semibold text-gray-800 mb-2">Spiegazione Tecnologia:</div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li><strong>Salamoia:</strong> Fluido termovettore (acqua + glicole) nel circuito geotermico</li>
                  <li><strong>Sistemi Geotermici:</strong> Sfruttano calore del sottosuolo (~10-15°C costanti)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Sezione 23: Generatori a Biomassa */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-800 mb-6">23. GENERATORI A BIOMASSA: QUALITÀ E SOSTENIBILITÀ</h3>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="text-xl font-semibold text-green-800 mb-4">23.1 Caldaie a Biomassa ≤500 kW</h4>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white border border-green-200 rounded p-4">
                <div className="font-semibold text-green-800 mb-2">Rendimento</div>
                <div className="bg-white border-2 border-green-300 rounded p-3 text-center">
                  <p className="text-lg font-bold text-green-900">≥87% + log(Pn)</p>
                </div>
              </div>
              
              <div className="bg-white border border-green-200 rounded p-4">
                <div className="font-semibold text-green-800 mb-2">Accumulo termico</div>
                <div className="bg-white border-2 border-green-300 rounded p-3 text-center">
                  <p className="text-lg font-bold text-green-900">≥20 dm³/kWt</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded p-4 mt-4">
              <div className="font-semibold text-gray-800 mb-2">Spiegazione Formule:</div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li><strong>87% + log(Pn):</strong> Formula rendimento dove Pn = potenza nominale kW</li>
                <li><strong>Esempio:</strong> Caldaia 100 kW → 87% + log(100) = 87% + 2 = 89%</li>
                <li><strong>dm³/kWt:</strong> Decimetri cubi per kW termico (volume accumulo/potenza)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sezione 24: Solare Termico */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-800 mb-6">24. SOLARE TERMICO: EFFICIENZA E INNOVAZIONE</h3>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h4 className="text-xl font-semibold text-yellow-800 mb-4">24.1 Producibilità Specifica Minima</h4>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white border border-yellow-200 rounded p-4">
                <div className="font-semibold text-yellow-800 mb-2">Collettori piani</div>
                <div className="bg-white border-2 border-yellow-300 rounded p-3 text-center">
                  <p className="text-lg font-bold text-yellow-900">&gt;300 kWht/m²·anno</p>
                </div>
              </div>
              
              <div className="bg-white border border-yellow-200 rounded p-4">
                <div className="font-semibold text-yellow-800 mb-2">Sottovuoto</div>
                <div className="bg-white border-2 border-yellow-300 rounded p-3 text-center">
                  <p className="text-lg font-bold text-yellow-900">&gt;400 kWht/m²·anno</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded p-4 mt-4">
              <div className="font-semibold text-gray-800 mb-2">Spiegazione Sigle:</div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li><strong>kWht/m²·anno:</strong> Kilowattora termici per metro quadro all'anno</li>
                <li><strong>Solar Keymark:</strong> Certificazione europea per qualità solare termica</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sezione 25: Sistemi Ibridi e Bivalenti */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-800 mb-6">25. SISTEMI IBRIDI E BIVALENTI: FLESSIBILITÀ ENERGETICA</h3>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h4 className="text-xl font-semibold text-purple-800 mb-4">25.1 Sistemi Ibridi Factory Made</h4>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white border border-purple-200 rounded p-4">
                <div className="font-semibold text-purple-800 mb-2">Rapporto potenze</div>
                <div className="bg-white border-2 border-purple-300 rounded p-3 text-center">
                  <p className="text-lg font-bold text-purple-900">Pdc/Caldaia ≤ 0,5</p>
                </div>
              </div>
              
              <div className="bg-white border border-purple-200 rounded p-4">
                <div className="font-semibold text-purple-800 mb-2">Età caldaia Add On</div>
                <p className="text-sm"><strong>Massimo 5 anni</strong></p>
              </div>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded p-3 mt-4">
              <div className="font-medium text-gray-800 mb-2">Spiegazione:</div>
              <p className="text-xs text-gray-700">
                <strong>Pdc/Caldaia ≤ 0,5:</strong> Potenza pompa di calore massimo metà della caldaia
              </p>
            </div>
          </div>
        </div>

        {/* Sezione 26-27: Scaldacqua e Teleriscaldamento */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-800 mb-6">26-27. SCALDACQUA E TELERISCALDAMENTO</h3>
          
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-green-800 mb-4">26. Scaldacqua a Pompa di Calore</h4>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white border border-green-200 rounded p-4">
                  <div className="font-semibold text-green-800 mb-2">Classe A</div>
                  <p className="text-sm">€500 (≤150L), €1.100 ({'>'}150L)</p>
                </div>
                
                <div className="bg-white border border-green-200 rounded p-4">
                  <div className="font-semibold text-green-800 mb-2">Classe A+</div>
                  <p className="text-sm">€700 (≤150L), €1.500 ({'>'}150L)</p>
                </div>
              </div>
              
              <div className="bg-white border border-green-200 rounded p-4 mt-4 text-center">
                <p className="text-lg font-bold text-green-900">40% della spesa sostenuta</p>
              </div>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-indigo-800 mb-4">27. Teleriscaldamento</h4>
              
              <div className="bg-white border-2 border-indigo-300 rounded p-3 text-center mb-4">
                <p className="text-lg font-bold text-indigo-900">I<sub>tot</sub> = 65% × C × P<sub>nsc</sub></p>
              </div>
              
              <div className="bg-white border border-indigo-200 rounded p-4">
                <div className="font-semibold text-indigo-800 mb-2">Costi Specifici (C)</div>
                <ul className="text-sm text-indigo-700 space-y-1">
                  <li>• ≤50kW: 200 €/kW</li>
                  <li>• 50-150kW: 160 €/kW</li>
                  <li>• {'>'}150kW: 130 €/kW</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Sezione 28-30: Microcogenerazione, Calcoli, Controlli */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-800 mb-6">28-30. MICROCOGENERAZIONE, CALCOLI E CONTROLLI</h3>
          
          <div className="space-y-6">
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-purple-800 mb-4">28. Microcogenerazione</h4>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white border border-purple-200 rounded p-4">
                  <div className="font-semibold text-purple-800 mb-2">PES minimo</div>
                  <p className="text-sm"><strong>10%</strong></p>
                </div>
                
                <div className="bg-white border border-purple-200 rounded p-4">
                  <div className="font-semibold text-purple-800 mb-2">Potenza</div>
                  <p className="text-sm"><strong>&lt;50 kWe</strong></p>
                </div>
                
                <div className="bg-white border border-purple-200 rounded p-4">
                  <div className="font-semibold text-purple-800 mb-2">Utilizzo termico</div>
                  <p className="text-sm"><strong>100%</strong></p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-blue-800 mb-4">29. Formule di Calcolo Principali</h4>
              
              <div className="space-y-4">
                <div className="bg-white border border-blue-200 rounded p-4">
                  <div className="font-semibold text-blue-800 mb-2">Pompe di Calore</div>
                  <div className="bg-white border-2 border-blue-300 rounded p-3 text-center">
                    <p className="text-lg font-bold text-blue-900">I<sub>a</sub> = E<sub>i</sub> × C<sub>i</sub></p>
                  </div>
                </div>
                
                <div className="bg-white border border-blue-200 rounded p-4">
                  <div className="font-semibold text-blue-800 mb-2">Biomassa Caldaie</div>
                  <div className="bg-white border-2 border-blue-300 rounded p-3 text-center">
                    <p className="text-lg font-bold text-blue-900">I<sub>a</sub> = P<sub>n</sub> × h<sub>r</sub> × C<sub>i</sub> × C<sub>e</sub></p>
                  </div>
                </div>
                
                <div className="bg-white border border-blue-200 rounded p-4">
                  <div className="font-semibold text-blue-800 mb-2">Solare Termico</div>
                  <div className="bg-white border-2 border-blue-300 rounded p-3 text-center">
                    <p className="text-lg font-bold text-blue-900">I<sub>a</sub> = C<sub>i</sub> × Q<sub>u</sub> × S<sub>l</sub></p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded p-4 mt-4">
                <div className="font-medium text-gray-800 mb-3">Spiegazione Dettagliata delle Formule:</div>
                
                <div className="space-y-4">
                  <div className="bg-white border border-blue-200 rounded p-3">
                    <div className="font-semibold text-blue-800 mb-2">Formula Pompe di Calore: I<sub>a</sub> = E<sub>i</sub> × C<sub>i</sub></div>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li><strong>I<sub>a</sub>:</strong> Incentivo annuale in euro</li>
                      <li><strong>E<sub>i</sub>:</strong> Energia incentivata (kWht) = energia termica prodotta dalla pompa di calore</li>
                      <li><strong>C<sub>i</sub>:</strong> Coefficiente incentivo (€/kWht) = valore economico per unità di energia</li>
                      <li><strong>Esempio:</strong> PdC produce 10.000 kWht/anno, Ci = 0,12 €/kWht → Incentivo = 1.200 €/anno</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white border border-orange-200 rounded p-3">
                    <div className="font-semibold text-orange-800 mb-2">Formula Biomassa: I<sub>a</sub> = P<sub>n</sub> × h<sub>r</sub> × C<sub>i</sub> × C<sub>e</sub></div>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li><strong>I<sub>a</sub>:</strong> Incentivo annuale in euro</li>
                      <li><strong>P<sub>n</sub>:</strong> Potenza nominale caldaia (kW)</li>
                      <li><strong>h<sub>r</sub>:</strong> Ore funzionamento per zona climatica (600-1800 h/anno)</li>
                      <li><strong>C<sub>i</sub>:</strong> Coefficiente incentivo base (0,020-0,060 €/kWht)</li>
                      <li><strong>C<sub>e</sub>:</strong> Coefficiente premialità emissioni (1,0-1,5 per basse emissioni)</li>
                      <li><strong>Esempio:</strong> Caldaia 25 kW, 1200 h/anno, Ci=0,040, Ce=1,3 → Incentivo = 1.560 €/anno</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white border border-yellow-200 rounded p-3">
                    <div className="font-semibold text-yellow-800 mb-2">Formula Solare Termico: I<sub>a</sub> = C<sub>i</sub> × Q<sub>u</sub> × S<sub>l</sub></div>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li><strong>I<sub>a</sub>:</strong> Incentivo annuale in euro</li>
                      <li><strong>C<sub>i</sub>:</strong> Coefficiente incentivo per fascia superficie (0,11-0,43 €/kWht)</li>
                      <li><strong>Q<sub>u</sub>:</strong> Energia termica producibile (kWht/m²·anno) - dipende da zona e tecnologia</li>
                      <li><strong>S<sub>l</sub>:</strong> Superficie lorda collettori solari (m²)</li>
                      <li><strong>Esempio:</strong> 20 m² collettori, Qu=450 kWht/m²·anno, Ci=0,35 → Incentivo = 3.150 €/anno</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-red-800 mb-4">30. Controlli e Monitoraggio</h4>
              
              <div className="space-y-4">
                <div className="bg-white border border-red-200 rounded p-4">
                  <div className="font-semibold text-red-800 mb-2">Contabilizzazione Obbligatoria</div>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Pompe di calore {'>'}200 kW</li>
                    <li>• Biomassa {'>'}200 kW</li>
                    <li>• Solare termico {'>'}100 m²</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-red-200 rounded p-4">
                  <div className="font-semibold text-red-800 mb-2">Documentazione</div>
                  <p className="text-sm"><strong>Conservazione 5 anni post-ultima rata</strong></p>
                </div>
                
                <div className="bg-white border border-red-200 rounded p-4">
                  <div className="font-semibold text-red-800 mb-2">Trasmissione Dati</div>
                  <p className="text-sm">Annuale tramite Portaltermico</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
