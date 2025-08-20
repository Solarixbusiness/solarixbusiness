export default function Section05() {
  return (
    <section id="sezione-5" className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
      <div className="mb-6">
        <span className="text-green-600 font-bold text-lg">PARTE 5</span>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">Metodologie di Calcolo e Valorizzazione</h2>
        <div className="w-16 h-1 bg-green-600 mt-3"></div>
      </div>
      
      <div className="prose max-w-none">
        {/* Sezione 31: Architettura del Sistema di Calcolo */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-800 mb-6">31. ARCHITETTURA DEL SISTEMA DI CALCOLO</h3>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="text-xl font-semibold text-blue-800 mb-4">31.1 Principi Fondamentali delle Metodologie</h4>
            
            <p className="text-gray-700 mb-6">
              Il Conto Termico 3.0 introduce un sistema di calcolo degli incentivi completamente rinnovato, 
              basato su due approcci metodologici distinti ma complementari:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-blue-200 rounded-lg p-4">
                <div className="font-semibold text-blue-800 mb-2">Metodo a Costi Sostenuti</div>
                <p className="text-sm text-blue-700">Per interventi di efficienza energetica</p>
              </div>
              
              <div className="bg-white border border-blue-200 rounded-lg p-4">
                <div className="font-semibold text-blue-800 mb-2">Metodo a Produzione Energetica</div>
                <p className="text-sm text-blue-700">Per impianti di energia rinnovabile</p>
              </div>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded p-4 mt-4">
              <p className="text-sm text-gray-700">
                <strong>Razionale:</strong> Questa dualità riflette la natura diversa degli interventi: 
                da un lato il miglioramento delle prestazioni dell'involucro e degli impianti esistenti, 
                dall'altro la produzione attiva di energia da fonti rinnovabili.
              </p>
            </div>
          </div>
        </div>

        {/* Sezione 32: Metodologie per Efficienza Energetica */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-800 mb-6">32. METODOLOGIE PER EFFICIENZA ENERGETICA (ARTICOLO 5)</h3>
          
          <div className="space-y-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-green-800 mb-4">32.1 Formula Base per Interventi su Superficie</h4>
              
              <div className="bg-white border-2 border-green-300 rounded-lg p-4 mb-4 text-center">
                <div className="text-2xl font-bold text-green-900 mb-2">
                  I<sub>tot</sub> = %spesa × C × S<sub>int</sub>
                </div>
                <div className="text-sm text-green-700">con vincolo: I<sub>tot</sub> ≤ I<sub>max</sub></div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <div className="font-semibold text-gray-800 mb-3">Spiegazione Parametri della Formula:</div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><strong>I<sub>tot</sub>:</strong> Incentivo totale cumulato [€] - importo complessivo erogato</li>
                  <li><strong>%spesa:</strong> Percentuale incentivata [%] - quota della spesa ammissibile coperta</li>
                  <li><strong>C:</strong> Costo specifico effettivo [€/m²] - costo unitario per superficie</li>
                  <li><strong>S<sub>int</sub>:</strong> Superficie di intervento [m²] - area effettivamente interessata</li>
                  <li><strong>I<sub>max</sub>:</strong> Limite massimo erogabile [€] - tetto assoluto per intervento</li>
                </ul>
              </div>
              
              <div className="bg-green-100 border border-green-300 rounded p-4 mt-4">
                <div className="font-semibold text-green-800 mb-2">Esempio Pratico:</div>
                <p className="text-green-700 text-sm">
                  <strong>Isolamento esterno pareti 100 m²:</strong><br/>
                  • Costo: 180 €/m² × 100 m² = 18.000 €<br/>
                  • Percentuale: 40%<br/>
                  • <strong>Incentivo = 40% × 180 €/m² × 100 m² = 7.200 €</strong>
                </p>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-orange-800 mb-4">32.2 Formula per Interventi a Edificio</h4>
              
              <div className="bg-white border-2 border-orange-300 rounded-lg p-4 mb-4 text-center">
                <div className="text-2xl font-bold text-orange-900 mb-2">
                  I<sub>tot</sub> = %spesa × C × S<sub>ed</sub>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <div className="font-semibold text-gray-800 mb-3">Parametri Specifici:</div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><strong>S<sub>ed</sub>:</strong> Superficie utile edificio [m²] - superficie calpestabile totale</li>
                  <li><strong>C:</strong> Costo specifico per superficie utile [€/m²] - costo per m² di edificio</li>
                </ul>
              </div>
              
              <div className="bg-orange-100 border border-orange-300 rounded p-4 mt-4">
                <div className="font-semibold text-orange-800 mb-2">Esempio NZEB:</div>
                <p className="text-orange-700 text-sm">
                  <strong>Trasformazione NZEB edificio 200 m²:</strong><br/>
                  • Costo: 1.000 €/m² × 200 m² = 200.000 €<br/>
                  • Percentuale: 65%<br/>
                  • <strong>Incentivo = 65% × 1.000 €/m² × 200 m² = 130.000 €</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sezione 32.3: Tabella Coefficienti */}
        <div className="mb-12">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">32.3 Tabella Coefficienti Efficienza Energetica</h4>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
              <thead className="bg-blue-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider border-b">Intervento</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider border-b">%spesa</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider border-b">C<sub>max</sub> [€/m²]</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider border-b">I<sub>max</sub> [€]</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-900">Isolamento Esterno Coperture</td>
                  <td className="px-4 py-3 text-sm text-gray-900">40%*</td>
                  <td className="px-4 py-3 text-sm text-gray-900">300</td>
                  <td className="px-4 py-3 text-sm text-gray-900">1.000.000</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-900">Isolamento Interno Coperture</td>
                  <td className="px-4 py-3 text-sm text-gray-900">40%*</td>
                  <td className="px-4 py-3 text-sm text-gray-900">150</td>
                  <td className="px-4 py-3 text-sm text-gray-900">1.000.000</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-900">Isolamento Esterno Pareti</td>
                  <td className="px-4 py-3 text-sm text-gray-900">40%*</td>
                  <td className="px-4 py-3 text-sm text-gray-900">200</td>
                  <td className="px-4 py-3 text-sm text-gray-900">1.000.000</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-900">Isolamento Interno Pareti</td>
                  <td className="px-4 py-3 text-sm text-gray-900">40%*</td>
                  <td className="px-4 py-3 text-sm text-gray-900">100</td>
                  <td className="px-4 py-3 text-sm text-gray-900">1.000.000</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-900">Isolamento Esterno Pavimenti</td>
                  <td className="px-4 py-3 text-sm text-gray-900">40%*</td>
                  <td className="px-4 py-3 text-sm text-gray-900">170</td>
                  <td className="px-4 py-3 text-sm text-gray-900">1.000.000</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-900">Infissi Zone A-C</td>
                  <td className="px-4 py-3 text-sm text-gray-900">40%**</td>
                  <td className="px-4 py-3 text-sm text-gray-900">700</td>
                  <td className="px-4 py-3 text-sm text-gray-900">500.000</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-900">Infissi Zone D-F</td>
                  <td className="px-4 py-3 text-sm text-gray-900">40%**</td>
                  <td className="px-4 py-3 text-sm text-gray-900">800</td>
                  <td className="px-4 py-3 text-sm text-gray-900">500.000</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-900">Schermature Solari</td>
                  <td className="px-4 py-3 text-sm text-gray-900">40%**</td>
                  <td className="px-4 py-3 text-sm text-gray-900">250</td>
                  <td className="px-4 py-3 text-sm text-gray-900">90.000</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-900">NZEB Zone A-C</td>
                  <td className="px-4 py-3 text-sm text-gray-900">65%**</td>
                  <td className="px-4 py-3 text-sm text-gray-900">1.000</td>
                  <td className="px-4 py-3 text-sm text-gray-900">2.500.000</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-900">NZEB Zone D-F</td>
                  <td className="px-4 py-3 text-sm text-gray-900">65%**</td>
                  <td className="px-4 py-3 text-sm text-gray-900">1.300</td>
                  <td className="px-4 py-3 text-sm text-gray-900">3.000.000</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-900">Illuminazione LED</td>
                  <td className="px-4 py-3 text-sm text-gray-900">40%**</td>
                  <td className="px-4 py-3 text-sm text-gray-900">15-35</td>
                  <td className="px-4 py-3 text-sm text-gray-900">50.000-140.000</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-900">Building Automation</td>
                  <td className="px-4 py-3 text-sm text-gray-900">40%**</td>
                  <td className="px-4 py-3 text-sm text-gray-900">60</td>
                  <td className="px-4 py-3 text-sm text-gray-900">100.000</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded p-4 mt-4">
            <div className="font-semibold text-yellow-800 mb-2">Note Maggiorazioni:</div>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li><strong>*Maggiorato al 50%</strong> per zone climatiche E-F</li>
              <li><strong>**Maggiorato al 100%</strong> per edifici pubblici piccoli comuni</li>
            </ul>
          </div>
        </div>

        {/* Sezione 32.4: Maggiorazioni Strategiche */}
        <div className="mb-12">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">32.4 Maggiorazioni Strategiche</h4>
          
          <div className="space-y-6">
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h5 className="text-lg font-medium text-purple-800 mb-4">32.4.1 Componenti UE (+10%)</h5>
              
              <div className="space-y-3">
                <div className="bg-white border border-purple-200 rounded p-4">
                  <div className="font-semibold text-purple-800 mb-2">Applicabile a:</div>
                  <p className="text-sm text-purple-700">isolanti, infissi, schermature, tecnologie NZEB, illuminazione</p>
                </div>
                
                <div className="bg-white border border-purple-200 rounded p-4">
                  <div className="font-semibold text-purple-800 mb-2">Obiettivo:</div>
                  <p className="text-sm text-purple-700">Sostegno filiera produttiva europea</p>
                </div>
                
                <div className="bg-white border border-purple-200 rounded p-4">
                  <div className="font-semibold text-purple-800 mb-2">Certificazione:</div>
                  <p className="text-sm text-purple-700">Documentazione origine obbligatoria</p>
                </div>
              </div>
            </div>

            <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
              <h5 className="text-lg font-medium text-teal-800 mb-4">32.4.2 Interventi Combinati (+15%)</h5>
              
              <div className="space-y-3">
                <div className="bg-white border border-teal-200 rounded p-4">
                  <div className="font-semibold text-teal-800 mb-2">Combinazione:</div>
                  <p className="text-sm text-teal-700">Isolamento + impianti rinnovabili: %spesa elevata al 55%</p>
                </div>
                
                <div className="bg-white border border-teal-200 rounded p-4">
                  <div className="font-semibold text-teal-800 mb-2">Approccio sistemico incentivato</div>
                  <p className="text-sm text-teal-700">Maggiore impatto energetico complessivo</p>
                </div>
              </div>
              
              <div className="bg-teal-100 border border-teal-300 rounded p-4 mt-4">
                <div className="font-semibold text-teal-800 mb-2">Esempio Combinato:</div>
                <p className="text-teal-700 text-sm">
                  <strong>Isolamento + Pompa di Calore:</strong><br/>
                  • Isolamento: da 40% a 55% (+15%)<br/>
                  • Maggiore convenienza per approccio integrato
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sezione 33: Metodologie per Energia Rinnovabile */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-800 mb-6">33. METODOLOGIE PER ENERGIA RINNOVABILE (ARTICOLO 8)</h3>
          
          <div className="space-y-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-blue-800 mb-4">33.1 Pompe di Calore - Calcolo Energia Incentivata</h4>
              
              <div className="space-y-4">
                <div className="bg-white border-2 border-blue-300 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-900 mb-2">I<sub>a</sub> = E<sub>i</sub> × C<sub>i</sub></div>
                  <div className="text-sm text-blue-700">Formula Base</div>
                </div>
                
                <div className="bg-white border-2 border-blue-300 rounded-lg p-4 text-center">
                  <div className="text-xl font-bold text-blue-900 mb-2">E<sub>i</sub> = Q<sub>u</sub> × [1 - 1/SCOP] × k<sub>p</sub></div>
                  <div className="text-sm text-blue-700">Energia Incentivata</div>
                </div>
                
                <div className="bg-white border-2 border-blue-300 rounded-lg p-4 text-center">
                  <div className="text-xl font-bold text-blue-900 mb-2">Q<sub>u</sub> = P<sub>rated</sub> × Q<sub>uf</sub></div>
                  <div className="text-sm text-blue-700">Calore Prodotto</div>
                </div>
                
                <div className="bg-white border-2 border-blue-300 rounded-lg p-4 text-center">
                  <div className="text-xl font-bold text-blue-900 mb-2">k<sub>p</sub> = η<sub>s</sub> / η<sub>s,min</sub> Ecodesign</div>
                  <div className="text-sm text-blue-700">Coefficiente di Premialità</div>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-4">
                <div className="font-semibold text-gray-800 mb-3">Spiegazione Dettagliata delle Formule:</div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><strong>I<sub>a</sub>:</strong> Incentivo annuale [€] - importo erogato ogni anno</li>
                  <li><strong>E<sub>i</sub>:</strong> Energia incentivata [kWht] - energia termica "gratuita" dalla pompa di calore</li>
                  <li><strong>C<sub>i</sub>:</strong> Coefficiente incentivo [€/kWht] - valore economico per unità energia</li>
                  <li><strong>Q<sub>u</sub>:</strong> Calore prodotto totale [kWht] - energia termica annua generata</li>
                  <li><strong>SCOP:</strong> Seasonal Coefficient of Performance - efficienza stagionale</li>
                  <li><strong>P<sub>rated</sub>:</strong> Potenza nominale [kW] - potenza dichiarata dal costruttore</li>
                  <li><strong>Q<sub>uf</sub>:</strong> Ore equivalenti funzionamento [h] - dipende da zona climatica</li>
                  <li><strong>k<sub>p</sub>:</strong> Premialità prestazioni - maggiorazione per alte efficienze</li>
                  <li><strong>η<sub>s</sub>:</strong> Efficienza stagionale effettiva della pompa di calore</li>
                </ul>
              </div>
              
              <div className="bg-blue-100 border border-blue-300 rounded p-4 mt-4">
                <div className="font-semibold text-blue-800 mb-2">Esempio Pratico Completo:</div>
                <p className="text-blue-700 text-sm">
                  <strong>Pompa di calore aria-acqua 12 kW, zona D:</strong><br/>
                  • P<sub>rated</sub> = 12 kW, Q<sub>uf</sub> = 1.400 h → Q<sub>u</sub> = 16.800 kWht<br/>
                  • SCOP = 4,5 → [1 - 1/4,5] = 0,78<br/>
                  • k<sub>p</sub> = 1,1 (alta efficienza)<br/>
                  • E<sub>i</sub> = 16.800 × 0,78 × 1,1 = 14.414 kWht<br/>
                  • C<sub>i</sub> = 0,150 €/kWht<br/>
                  • <strong>Incentivo = 14.414 × 0,150 = 2.162 €/anno</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sezione 33.2: Tabella Coefficienti Pompe di Calore */}
        <div className="mb-12">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">33.2 Tabella Coefficienti Pompe di Calore</h4>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
              <thead className="bg-blue-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider border-b">Tipologia</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider border-b">Potenza</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider border-b">C<sub>i</sub> [€/kWht]</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-900">Split/Multisplit</td>
                  <td className="px-4 py-3 text-sm text-gray-900">≤12 kW</td>
                  <td className="px-4 py-3 text-sm text-gray-900">0,070</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-900">Fixed Double Duct</td>
                  <td className="px-4 py-3 text-sm text-gray-900">≤12 kW</td>
                  <td className="px-4 py-3 text-sm text-gray-900">0,200</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-900">VRF/VRV</td>
                  <td className="px-4 py-3 text-sm text-gray-900">13-35 kW</td>
                  <td className="px-4 py-3 text-sm text-gray-900">0,150</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-900">VRF/VRV</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{'>'}35 kW</td>
                  <td className="px-4 py-3 text-sm text-gray-900">0,055</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-900">Aria/Acqua</td>
                  <td className="px-4 py-3 text-sm text-gray-900">≤35 kW</td>
                  <td className="px-4 py-3 text-sm text-gray-900">0,150</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-900">Aria/Acqua</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{'>'}35 kW</td>
                  <td className="px-4 py-3 text-sm text-gray-900">0,060</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-900">Acqua/Acqua</td>
                  <td className="px-4 py-3 text-sm text-gray-900">≤35 kW</td>
                  <td className="px-4 py-3 text-sm text-gray-900">0,160</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-900">Acqua/Acqua</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{'>'}35 kW</td>
                  <td className="px-4 py-3 text-sm text-gray-900">0,060</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-900">Geotermica</td>
                  <td className="px-4 py-3 text-sm text-gray-900">≤35 kW</td>
                  <td className="px-4 py-3 text-sm text-gray-900">0,160</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-900">Geotermica</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{'>'}35 kW</td>
                  <td className="px-4 py-3 text-sm text-gray-900">0,060</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded p-4 mt-4">
            <div className="font-semibold text-blue-800 mb-2">Spiegazione Sigle Tecnologie:</div>
            <ul className="text-sm text-blue-700 space-y-1">
              <li><strong>VRF/VRV:</strong> Variable Refrigerant Flow/Volume - sistemi a portata variabile refrigerante</li>
              <li><strong>Fixed Double Duct:</strong> Sistema canalizzato a doppio condotto fisso</li>
              <li><strong>Split/Multisplit:</strong> Unità interna/esterna separate, mono o multi-zona</li>
            </ul>
          </div>
        </div>

        {/* Sezione 33.3: Coefficienti di Utilizzo per Zona Climatica */}
        <div className="mb-12">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">33.3 Coefficienti di Utilizzo per Zona Climatica</h4>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-yellow-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-yellow-800 uppercase tracking-wider border-b">Zona</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-yellow-800 uppercase tracking-wider border-b">Q<sub>uf</sub> [ore]</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900 font-semibold">A</td>
                    <td className="px-4 py-3 text-sm text-gray-900">600</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900 font-semibold">B</td>
                    <td className="px-4 py-3 text-sm text-gray-900">850</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900 font-semibold">C</td>
                    <td className="px-4 py-3 text-sm text-gray-900">1.100</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900 font-semibold">D</td>
                    <td className="px-4 py-3 text-sm text-gray-900">1.400</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900 font-semibold">E</td>
                    <td className="px-4 py-3 text-sm text-gray-900">1.700</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900 font-semibold">F</td>
                    <td className="px-4 py-3 text-sm text-gray-900">1.800</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded p-4 mt-4">
              <div className="font-semibold text-gray-800 mb-2">Significato Q<sub>uf</sub>:</div>
              <p className="text-sm text-gray-700">
                <strong>Q<sub>uf</sub>:</strong> Ore equivalenti di funzionamento annuo della pompa di calore. 
                Rappresenta le ore teoriche a potenza nominale per produrre la stessa energia termica annua. 
                Varia da 600 ore (zona A - clima caldo) a 1.800 ore (zona F - clima molto freddo).
              </p>
            </div>
          </div>
        </div>

        {/* Sezione 34: Generatori a Biomassa */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-800 mb-6">34. GENERATORI A BIOMASSA - METODOLOGIE SPECIFICHE</h3>
          
          <div className="space-y-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-green-800 mb-4">34.1-34.2 Formule per Tipologie</h4>
              
              <div className="space-y-4">
                <div className="bg-white border-2 border-green-300 rounded-lg p-4 text-center">
                  <div className="text-xl font-bold text-green-900 mb-2">
                    Caldaie: I<sub>a</sub> = P<sub>n</sub> × h<sub>r</sub> × C<sub>i</sub> × C<sub>e</sub>
                  </div>
                </div>
                
                <div className="bg-white border-2 border-green-300 rounded-lg p-4 text-center">
                  <div className="text-xl font-bold text-green-900 mb-2">
                    Stufe/Termocamini: I<sub>a</sub> = 3,35 × ln(P<sub>n</sub>) × h<sub>r</sub> × C<sub>i</sub> × C<sub>e</sub>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-4">
                <div className="font-semibold text-gray-800 mb-3">Spiegazione Parametri Biomassa:</div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><strong>I<sub>a</sub>:</strong> Incentivo annuale [€] - importo erogato ogni anno</li>
                  <li><strong>P<sub>n</sub>:</strong> Potenza nominale [kW] - potenza termica dichiarata</li>
                  <li><strong>h<sub>r</sub>:</strong> Ore funzionamento [h] - ore operative per zona climatica (600-1800 h)</li>
                  <li><strong>C<sub>i</sub>:</strong> Coefficiente incentivo [€/kWht] - valore base per tecnologia</li>
                  <li><strong>C<sub>e</sub>:</strong> Coefficiente emissioni - premialità per basse emissioni (1,0-1,5)</li>
                  <li><strong>ln(P<sub>n</sub>):</strong> Logaritmo naturale potenza - per stufe/termocamini</li>
                  <li><strong>3,35:</strong> Coefficiente fisso per stufe - fattore di conversione specifico</li>
                </ul>
              </div>
              
              <div className="bg-green-100 border border-green-300 rounded p-4 mt-4">
                <div className="font-semibold text-green-800 mb-2">Esempi Pratici:</div>
                <div className="space-y-2 text-green-700 text-sm">
                  <p><strong>Caldaia 30 kW, zona D:</strong><br/>
                  I<sub>a</sub> = 30 × 1400 × 0,060 × 1,2 = 3.024 €/anno</p>
                  
                  <p><strong>Stufa pellet 12 kW, zona D:</strong><br/>
                  I<sub>a</sub> = 3,35 × ln(12) × 1400 × 0,055 × 1,0 = 676 €/anno</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sezione 34.3-34.4: Tabelle Coefficienti Biomassa */}
        <div className="mb-12">
          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">34.3 Tabella Coefficienti Biomassa</h4>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                  <thead className="bg-green-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider border-b">Tipologia</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider border-b">≤35 kW</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider border-b">35-500 kW</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider border-b">{'>'}500 kW</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-900">Caldaie</td>
                      <td className="px-4 py-3 text-sm text-gray-900">0,060</td>
                      <td className="px-4 py-3 text-sm text-gray-900">0,025</td>
                      <td className="px-4 py-3 text-sm text-gray-900">0,020</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-900">Stufe Legna</td>
                      <td className="px-4 py-3 text-sm text-gray-900">0,045</td>
                      <td className="px-4 py-3 text-sm text-gray-900">-</td>
                      <td className="px-4 py-3 text-sm text-gray-900">-</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-900">Stufe Pellet</td>
                      <td className="px-4 py-3 text-sm text-gray-900">0,055</td>
                      <td className="px-4 py-3 text-sm text-gray-900">-</td>
                      <td className="px-4 py-3 text-sm text-gray-900">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">34.4 Coefficienti Premianti Emissioni (C<sub>e</sub>)</h4>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                    <thead className="bg-red-100">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-red-800 uppercase tracking-wider border-b">Riduzione Particolato</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-red-800 uppercase tracking-wider border-b">≤500 kW</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-red-800 uppercase tracking-wider border-b">{'>'}500 kW</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-900">Fino al 20%</td>
                        <td className="px-4 py-3 text-sm text-gray-900">1,0</td>
                        <td className="px-4 py-3 text-sm text-gray-900">1,0</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-900">20-50%</td>
                        <td className="px-4 py-3 text-sm text-gray-900">1,2</td>
                        <td className="px-4 py-3 text-sm text-gray-900">1,2</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-900">Oltre 50%</td>
                        <td className="px-4 py-3 text-sm text-gray-900">1,5</td>
                        <td className="px-4 py-3 text-sm text-gray-900">1,5</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="bg-gray-50 border border-gray-200 rounded p-4 mt-4">
                  <div className="font-semibold text-gray-800 mb-2">Spiegazione C<sub>e</sub>:</div>
                  <p className="text-sm text-gray-700">
                    Il coefficiente C<sub>e</sub> premia i generatori a biomassa con basse emissioni di particolato. 
                    Maggiore è la riduzione delle emissioni rispetto ai limiti standard, maggiore è la premialità 
                    (fino al +50% dell'incentivo con C<sub>e</sub> = 1,5).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sezione 35: Solare Termico - Valorizzazione per Superficie */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-800 mb-6">35. SOLARE TERMICO - VALORIZZAZIONE PER SUPERFICIE</h3>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h4 className="text-xl font-semibold text-yellow-800 mb-4">35.1 Formula di Calcolo</h4>
            
            <div className="bg-white border-2 border-yellow-300 rounded-lg p-4 mb-4 text-center">
              <div className="text-2xl font-bold text-yellow-900 mb-2">I<sub>a</sub> = C<sub>i</sub> × Q<sub>u</sub> × S<sub>l</sub></div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
              <div className="font-semibold text-gray-800 mb-3">Spiegazione Formula Solare Termico:</div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><strong>I<sub>a</sub>:</strong> Incentivo annuale [€] - importo erogato ogni anno</li>
                <li><strong>C<sub>i</sub>:</strong> Coefficiente incentivo [€/kWht] - varia per applicazione e superficie</li>
                <li><strong>Q<sub>u</sub>:</strong> Energia specifica producibile [kWht/m²·anno] - dipende da tecnologia e zona</li>
                <li><strong>S<sub>l</sub>:</strong> Superficie lorda collettori [m²] - area totale dei pannelli solari</li>
              </ul>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-yellow-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-yellow-800 uppercase tracking-wider border-b">Applicazione</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-yellow-800 uppercase tracking-wider border-b">&lt;12 m²</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-yellow-800 uppercase tracking-wider border-b">12-50 m²</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-yellow-800 uppercase tracking-wider border-b">50-200 m²</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-yellow-800 uppercase tracking-wider border-b">200-500 m²</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-yellow-800 uppercase tracking-wider border-b">{'>'}500 m²</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900 font-semibold">A.C.S.</td>
                    <td className="px-4 py-3 text-sm text-gray-900">0,35</td>
                    <td className="px-4 py-3 text-sm text-gray-900">0,32</td>
                    <td className="px-4 py-3 text-sm text-gray-900">0,13</td>
                    <td className="px-4 py-3 text-sm text-gray-900">0,12</td>
                    <td className="px-4 py-3 text-sm text-gray-900">0,11</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900 font-semibold">Riscaldamento</td>
                    <td className="px-4 py-3 text-sm text-gray-900">0,36</td>
                    <td className="px-4 py-3 text-sm text-gray-900">0,33</td>
                    <td className="px-4 py-3 text-sm text-gray-900">0,13</td>
                    <td className="px-4 py-3 text-sm text-gray-900">0,12</td>
                    <td className="px-4 py-3 text-sm text-gray-900">0,11</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900 font-semibold">Concentrazione</td>
                    <td className="px-4 py-3 text-sm text-gray-900">0,38</td>
                    <td className="px-4 py-3 text-sm text-gray-900">0,35</td>
                    <td className="px-4 py-3 text-sm text-gray-900">0,13</td>
                    <td className="px-4 py-3 text-sm text-gray-900">0,12</td>
                    <td className="px-4 py-3 text-sm text-gray-900">0,11</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900 font-semibold">Solar Cooling</td>
                    <td className="px-4 py-3 text-sm text-gray-900">0,43</td>
                    <td className="px-4 py-3 text-sm text-gray-900">0,40</td>
                    <td className="px-4 py-3 text-sm text-gray-900">0,17</td>
                    <td className="px-4 py-3 text-sm text-gray-900">0,15</td>
                    <td className="px-4 py-3 text-sm text-gray-900">0,14</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-100 border border-yellow-300 rounded p-4 mt-4">
              <div className="font-semibold text-yellow-800 mb-2">Spiegazione Applicazioni:</div>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li><strong>A.C.S.:</strong> Acqua Calda Sanitaria - produzione acqua calda per usi domestici</li>
                <li><strong>Riscaldamento:</strong> Supporto al riscaldamento degli ambienti</li>
                <li><strong>Concentrazione:</strong> Collettori a concentrazione per alte temperature</li>
                <li><strong>Solar Cooling:</strong> Raffrescamento solare tramite assorbimento/adsorbimento</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sezione 35.3: Calcolo Energia Specifica */}
        <div className="mb-12">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">35.3 Calcolo Energia Specifica (Q<sub>u</sub>)</h4>
          
          <div className="space-y-6">
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h5 className="text-lg font-medium text-orange-800 mb-4">35.3.1 Collettori Standard</h5>
              
              <div className="bg-white border-2 border-orange-300 rounded-lg p-4 text-center mb-4">
                <div className="text-xl font-bold text-orange-900">Q<sub>u</sub> = Q<sub>col</sub> / A<sub>G</sub></div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded p-4">
                <div className="font-semibold text-gray-800 mb-2">Parametri:</div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li><strong>Q<sub>col</sub>:</strong> Energia termica annua prodotta dal collettore [kWht]</li>
                  <li><strong>A<sub>G</sub>:</strong> Area lorda del collettore [m²]</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h5 className="text-lg font-medium text-blue-800 mb-4">35.3.2 Sistemi Factory Made</h5>
              
              <div className="bg-white border-2 border-blue-300 rounded-lg p-4 text-center mb-4">
                <div className="text-xl font-bold text-blue-900">Q<sub>u</sub> = Q<sub>L</sub> / (3,6 × A<sub>G</sub>)</div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded p-4">
                <div className="font-semibold text-gray-800 mb-2">Parametri:</div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li><strong>Q<sub>L</sub>:</strong> Energia termica utile annua [MJ] - da test factory made</li>
                  <li><strong>3,6:</strong> Fattore conversione MJ → kWht</li>
                  <li><strong>A<sub>G</sub>:</strong> Area lorda collettore [m²]</li>
                </ul>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h5 className="text-lg font-medium text-purple-800 mb-4">35.3.3 Collettori a Concentrazione</h5>
              
              <div className="bg-white border-2 border-purple-300 rounded-lg p-4 text-center mb-4">
                <div className="text-xl font-bold text-purple-900">Q<sub>u</sub> = Q<sub>sol</sub> / A<sub>G</sub></div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded p-4">
                <div className="font-semibold text-gray-800 mb-2">Parametri:</div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li><strong>Q<sub>sol</sub>:</strong> Energia solare concentrata utilizzabile [kWht]</li>
                  <li><strong>A<sub>G</sub>:</strong> Area apertura collettore [m²]</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-yellow-100 border border-yellow-300 rounded p-4 mt-6">
            <div className="font-semibold text-yellow-800 mb-2">Esempio Pratico Solare Termico:</div>
            <p className="text-yellow-700 text-sm">
              <strong>Impianto ACS 30 m², Q<sub>u</sub> = 450 kWht/m²·anno:</strong><br/>
              • Superficie: 30 m² (fascia 12-50 m²)<br/>
              • Coefficiente: C<sub>i</sub> = 0,32 €/kWht<br/>
              • <strong>Incentivo = 0,32 × 450 × 30 = 4.320 €/anno</strong>
            </p>
          </div>
        </div>

        {/* Sezione 36: Sistemi Ibridi e Bivalenti */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-800 mb-6">36. SISTEMI IBRIDI E BIVALENTI</h3>
          
          <div className="space-y-6">
            <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-teal-800 mb-4">36.1 Coefficienti di Sistema</h4>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                  <thead className="bg-teal-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-teal-800 uppercase tracking-wider border-b">Tipologia</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-teal-800 uppercase tracking-wider border-b">P<sub>n</sub> ≤35 kW</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-teal-800 uppercase tracking-wider border-b">P<sub>n</sub> {'>'}35 kW</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-900">Ibrido Factory Made</td>
                      <td className="px-4 py-3 text-sm text-gray-900">1,25</td>
                      <td className="px-4 py-3 text-sm text-gray-900">1,25</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-900">Sistema Bivalente</td>
                      <td className="px-4 py-3 text-sm text-gray-900">1,0</td>
                      <td className="px-4 py-3 text-sm text-gray-900">1,1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-indigo-800 mb-4">36.2 Formula Sistemi Ibridi</h4>
              
              <div className="bg-white border-2 border-indigo-300 rounded-lg p-4 text-center mb-4">
                <div className="text-2xl font-bold text-indigo-900">I<sub>a</sub> = k × E<sub>i</sub> × C<sub>i</sub></div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <div className="font-semibold text-gray-800 mb-3">Il coefficiente k considera:</div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><strong>Grado di integrazione funzionale:</strong> Livello coordinamento tra generatori</li>
                  <li><strong>Ottimizzazione del controllo:</strong> Efficacia sistema di regolazione</li>
                  <li><strong>Sinergie tra generatori:</strong> Benefici dalla combinazione tecnologie</li>
                </ul>
              </div>

              <div className="bg-indigo-100 border border-indigo-300 rounded p-4 mt-4">
                <div className="font-semibold text-indigo-800 mb-2">Spiegazione Coefficienti:</div>
                <ul className="text-sm text-indigo-700 space-y-1">
                  <li><strong>k = 1,25:</strong> Sistemi factory made - maggiorazione 25% per integrazione ottimale</li>
                  <li><strong>k = 1,0-1,1:</strong> Sistemi bivalenti - leggera premialità per potenze elevate</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Sezione 37: Infrastrutture Ricarica e Fotovoltaico */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-800 mb-6">37. INFRASTRUTTURE RICARICA E FOTOVOLTAICO</h3>
          
          <div className="space-y-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-green-800 mb-4">37.1 Ricarica Veicoli Elettrici (30% spesa)</h4>
              
              <div className="space-y-4">
                <div className="bg-white border border-green-200 rounded p-4">
                  <div className="font-semibold text-green-800 mb-2">37.1.1 Potenza Standard (7,4-22 kW)</div>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li><strong>Monofase:</strong> 2.400 €/punto</li>
                    <li><strong>Trifase:</strong> 8.400 €/punto</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-green-200 rounded p-4">
                  <div className="font-semibold text-green-800 mb-2">37.1.2 Potenza Elevata</div>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li><strong>22-50 kW:</strong> 1.200 €/kW</li>
                    <li><strong>50-100 kW:</strong> 60.000 €/infrastruttura</li>
                    <li><strong>{'>'}100 kW:</strong> 110.000 €/infrastruttura</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-green-100 border border-green-300 rounded p-4 mt-4">
                <div className="font-semibold text-green-800 mb-2">Spiegazione Tecnica:</div>
                <ul className="text-sm text-green-700 space-y-1">
                  <li><strong>Monofase:</strong> Alimentazione 230V, potenze fino 7,4 kW</li>
                  <li><strong>Trifase:</strong> Alimentazione 400V, potenze fino 22 kW</li>
                  <li><strong>Fast Charging:</strong> Ricarica rapida DC per potenze elevate</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-blue-800 mb-4">37.2 Fotovoltaico + Accumulo (20% spesa)</h4>
              
              <div className="space-y-4">
                <div className="bg-white border border-blue-200 rounded p-4">
                  <div className="font-semibold text-blue-800 mb-2">37.2.1 Impianto Fotovoltaico</div>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li><strong>Fino 20 kW:</strong> 1.500 €/kW</li>
                    <li><strong>20-200 kW:</strong> 1.200 €/kW</li>
                    <li><strong>200-600 kW:</strong> 1.100 €/kW</li>
                    <li><strong>600-1000 kW:</strong> 1.050 €/kW</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-blue-200 rounded p-4">
                  <div className="font-semibold text-blue-800 mb-2">37.2.2 Sistema di Accumulo</div>
                  <p className="text-sm text-blue-700"><strong>Tutte le taglie:</strong> 1.000 €/kWh</p>
                </div>
                
                <div className="bg-white border border-blue-200 rounded p-4">
                  <div className="font-semibold text-blue-800 mb-2">37.2.3 Premialità Moduli Nazionali</div>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li><strong>Tipo a):</strong> +5 punti percentuali</li>
                    <li><strong>Tipo b):</strong> +10 punti percentuali</li>
                    <li><strong>Tipo c):</strong> +15 punti percentuali</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-100 border border-blue-300 rounded p-4 mt-4">
                <div className="font-semibold text-blue-800 mb-2">Esempio Fotovoltaico:</div>
                <p className="text-blue-700 text-sm">
                  <strong>Impianto 50 kW + accumulo 100 kWh:</strong><br/>
                  • FV: (20×1.500 + 30×1.200) = 66.000 €<br/>
                  • Accumulo: 100×1.000 = 100.000 €<br/>
                  • <strong>Incentivo 20% = 33.200 €</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sezione 38-39: Teleriscaldamento, Microcogenerazione, Scaldacqua */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-800 mb-6">38-39. TELERISCALDAMENTO, MICROCOGENERAZIONE E SCALDACQUA</h3>
          
          <div className="space-y-6">
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-purple-800 mb-4">38.1 Teleriscaldamento Efficiente (65% spesa)</h4>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                  <thead className="bg-purple-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-purple-800 uppercase tracking-wider border-b">Potenza Sottostazione</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-purple-800 uppercase tracking-wider border-b">C<sub>max</sub> [€/kW]</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-purple-800 uppercase tracking-wider border-b">I<sub>max</sub> [€]</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-900">≤50 kW</td>
                      <td className="px-4 py-3 text-sm text-gray-900">200</td>
                      <td className="px-4 py-3 text-sm text-gray-900">6.500</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-900">50-150 kW</td>
                      <td className="px-4 py-3 text-sm text-gray-900">160</td>
                      <td className="px-4 py-3 text-sm text-gray-900">15.000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-900">{'>'}150 kW</td>
                      <td className="px-4 py-3 text-sm text-gray-900">130</td>
                      <td className="px-4 py-3 text-sm text-gray-900">30.000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-red-800 mb-4">38.2 Microcogenerazione (65% spesa)</h4>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white border border-red-200 rounded p-4">
                  <div className="font-semibold text-red-800 mb-2">Costo massimo</div>
                  <p className="text-sm text-red-700">5.000 €/kWe</p>
                </div>
                
                <div className="bg-white border border-red-200 rounded p-4">
                  <div className="font-semibold text-red-800 mb-2">Incentivo massimo</div>
                  <p className="text-sm text-red-700">100.000 €</p>
                </div>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded p-4 mt-4">
                <div className="font-semibold text-gray-800 mb-2">Spiegazione kWe:</div>
                <p className="text-sm text-gray-700">
                  <strong>kWe:</strong> Kilowatt elettrici - potenza elettrica prodotta dal cogeneratore. 
                  Il limite di costo è riferito alla potenza elettrica, non termica.
                </p>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-orange-800 mb-4">39. Scaldacqua a Pompa di Calore (40% spesa)</h4>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                  <thead className="bg-orange-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-orange-800 uppercase tracking-wider border-b">Classe Energetica</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-orange-800 uppercase tracking-wider border-b">≤150 litri</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-orange-800 uppercase tracking-wider border-b">{'>'}150 litri</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-900">Classe A</td>
                      <td className="px-4 py-3 text-sm text-gray-900">500 €</td>
                      <td className="px-4 py-3 text-sm text-gray-900">1.100 €</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-900">Classe A+</td>
                      <td className="px-4 py-3 text-sm text-gray-900">700 €</td>
                      <td className="px-4 py-3 text-sm text-gray-900">1.500 €</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Sezione 40: Diagnosi Energetica e Certificazione */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-800 mb-6">40. DIAGNOSI ENERGETICA E CERTIFICAZIONE</h3>
          
          <div className="space-y-6">
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-indigo-800 mb-4">40.1 Costi Massimi Ammissibili</h4>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                  <thead className="bg-indigo-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-indigo-800 uppercase tracking-wider border-b">Destinazione d'uso</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-indigo-800 uppercase tracking-wider border-b">Superficie</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-indigo-800 uppercase tracking-wider border-b">€/m²</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-indigo-800 uppercase tracking-wider border-b">Max [€]</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-900">Residenziale E1</td>
                      <td className="px-4 py-3 text-sm text-gray-900">≤1.600 m²</td>
                      <td className="px-4 py-3 text-sm text-gray-900">1,50</td>
                      <td className="px-4 py-3 text-sm text-gray-900">10.000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-900">Residenziale E1</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{'>'}1.600 m²</td>
                      <td className="px-4 py-3 text-sm text-gray-900">1,00</td>
                      <td className="px-4 py-3 text-sm text-gray-900">10.000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-900">Ospedali E3</td>
                      <td className="px-4 py-3 text-sm text-gray-900">Qualsiasi</td>
                      <td className="px-4 py-3 text-sm text-gray-900">3,50</td>
                      <td className="px-4 py-3 text-sm text-gray-900">18.000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-900">Altri edifici</td>
                      <td className="px-4 py-3 text-sm text-gray-900">≤2.500 m²</td>
                      <td className="px-4 py-3 text-sm text-gray-900">2,50</td>
                      <td className="px-4 py-3 text-sm text-gray-900">13.000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-900">Altri edifici</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{'>'}2.500 m²</td>
                      <td className="px-4 py-3 text-sm text-gray-900">2,00</td>
                      <td className="px-4 py-3 text-sm text-gray-900">13.000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-indigo-100 border border-indigo-300 rounded p-4 mt-4">
                <div className="font-semibold text-indigo-800 mb-2">Spiegazione Categorie:</div>
                <ul className="text-sm text-indigo-700 space-y-1">
                  <li><strong>E1:</strong> Edifici residenziali - abitazioni private e condomini</li>
                  <li><strong>E3:</strong> Edifici ospedalieri - strutture sanitarie con alta complessità impiantistica</li>
                  <li><strong>Altri edifici:</strong> Uffici, scuole, commerciali - destinazioni d'uso miste</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-yellow-800 mb-4">40.2 Intensità di Aiuto</h4>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white border border-yellow-200 rounded p-4">
                  <div className="font-semibold text-yellow-800 mb-2">PA (Pubbliche Amministrazioni)</div>
                  <p className="text-sm text-yellow-700"><strong>100%</strong> (50% anticipato per diagnosi)</p>
                </div>
                
                <div className="bg-white border border-yellow-200 rounded p-4">
                  <div className="font-semibold text-yellow-800 mb-2">Privati</div>
                  <p className="text-sm text-yellow-700"><strong>50%</strong></p>
                </div>
              </div>
              
              <div className="bg-yellow-100 border border-yellow-300 rounded p-4 mt-4">
                <div className="font-semibold text-yellow-800 mb-2">Modalità PA:</div>
                <p className="text-sm text-yellow-700">
                  Le PA ricevono il 50% come anticipo all'avvio della diagnosi energetica, 
                  il restante 50% a completamento e approvazione della diagnosi.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sezione 41: Durata degli Incentivi */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-800 mb-6">41. DURATA DEGLI INCENTIVI</h3>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">41.1 Tabella Durate per Tecnologia</h4>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider border-b">Intervento</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider border-b">Durata [anni]</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900">Efficienza Energetica</td>
                    <td className="px-4 py-3 text-sm text-gray-900 font-semibold">5</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900">Pompe di Calore ≤35 kW</td>
                    <td className="px-4 py-3 text-sm text-gray-900 font-semibold">2</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900">Pompe di Calore {'>'}35 kW</td>
                    <td className="px-4 py-3 text-sm text-gray-900 font-semibold">5</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900">Biomassa ≤35 kW</td>
                    <td className="px-4 py-3 text-sm text-gray-900 font-semibold">2</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900">Biomassa {'>'}35 kW</td>
                    <td className="px-4 py-3 text-sm text-gray-900 font-semibold">5</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900">Solare Termico ≤50 m²</td>
                    <td className="px-4 py-3 text-sm text-gray-900 font-semibold">2</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900">Solare Termico {'>'}50 m²</td>
                    <td className="px-4 py-3 text-sm text-gray-900 font-semibold">5</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900">Scaldacqua PdC</td>
                    <td className="px-4 py-3 text-sm text-gray-900 font-semibold">2</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900">Teleriscaldamento</td>
                    <td className="px-4 py-3 text-sm text-gray-900 font-semibold">5</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900">Microcogenerazione</td>
                    <td className="px-4 py-3 text-sm text-gray-900 font-semibold">5</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded p-4 mt-4">
              <div className="font-semibold text-blue-800 mb-2">Logica delle Durate:</div>
              <ul className="text-sm text-blue-700 space-y-1">
                <li><strong>2 anni:</strong> Impianti piccoli con ROI rapido</li>
                <li><strong>5 anni:</strong> Impianti grandi, efficienza energetica, sistemi complessi</li>
                <li><strong>Efficienza energetica:</strong> Sempre 5 anni per ammortizzare investimenti involucro</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sezione 42: Gestione Finanziaria e Limiti */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-800 mb-6">42. GESTIONE FINANZIARIA E LIMITI</h3>
          
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-green-800 mb-4">42.1 Budget Annuale (900 M€)</h4>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white border border-green-200 rounded p-4">
                  <div className="font-semibold text-green-800 mb-2">Amministrazioni Pubbliche</div>
                  <p className="text-lg font-bold text-green-700">400 M€</p>
                </div>
                
                <div className="bg-white border border-green-200 rounded p-4">
                  <div className="font-semibold text-green-800 mb-2">Soggetti Privati</div>
                  <p className="text-lg font-bold text-green-700">500 M€</p>
                </div>
                
                <div className="bg-white border border-green-200 rounded p-4">
                  <div className="font-semibold text-green-800 mb-2">Diagnosi Energetiche</div>
                  <p className="text-lg font-bold text-green-700">20 M€</p>
                </div>
                
                <div className="bg-white border border-green-200 rounded p-4">
                  <div className="font-semibold text-green-800 mb-2">Imprese (limite specifico)</div>
                  <p className="text-lg font-bold text-green-700">150 M€</p>
                </div>
              </div>
              
              <div className="bg-green-100 border border-green-300 rounded p-4 mt-4">
                <div className="font-semibold text-green-800 mb-2">Ripartizione Budget:</div>
                <p className="text-sm text-green-700">
                  Il budget totale di 900 M€/anno è suddiviso per garantire accesso equo tra PA e privati, 
                  con riserva specifica per diagnosi energetiche e limite per singole imprese.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-blue-800 mb-4">42.2 Modalità di Erogazione</h4>
              
              <div className="space-y-4">
                <div className="bg-white border border-blue-200 rounded p-4">
                  <div className="font-semibold text-blue-800 mb-2">42.2.1 Soggetti Privati</div>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li><strong>≤15.000 €:</strong> Unica soluzione</li>
                    <li><strong>{'>'}15.000 €:</strong> Rate annuali</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-blue-200 rounded p-4">
                  <div className="font-semibold text-blue-800 mb-2">42.2.2 Amministrazioni Pubbliche</div>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li><strong>Accesso diretto:</strong> Unica soluzione</li>
                    <li><strong>Prenotazione:</strong> Acconto + rate intermedie + saldo</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-100 border border-blue-300 rounded p-4 mt-4">
                <div className="font-semibold text-blue-800 mb-2">Spiegazione Modalità:</div>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li><strong>Unica soluzione:</strong> Pagamento integrale alla fine dei lavori</li>
                  <li><strong>Rate annuali:</strong> Incentivo suddiviso negli anni di durata</li>
                  <li><strong>Prenotazione PA:</strong> Sistema con acconto per grandi progetti</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Sezione 43: Controlli e Verifiche */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-800 mb-6">43. CONTROLLI E VERIFICHE</h3>
          
          <div className="space-y-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-red-800 mb-4">43.1 Corrispettivo GSE (1% incentivo)</h4>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white border border-red-200 rounded p-4">
                  <div className="font-semibold text-red-800 mb-2">Percentuale</div>
                  <p className="text-lg font-bold text-red-700">1% incentivo</p>
                </div>
                
                <div className="bg-white border border-red-200 rounded p-4">
                  <div className="font-semibold text-red-800 mb-2">Massimo</div>
                  <p className="text-lg font-bold text-red-700">250 € per soggetto</p>
                </div>
                
                <div className="bg-white border border-red-200 rounded p-4">
                  <div className="font-semibold text-red-800 mb-2">Trattenuta</div>
                  <p className="text-sm text-red-700">Su rate annuali</p>
                </div>
              </div>
              
              <div className="bg-red-100 border border-red-300 rounded p-4 mt-4">
                <div className="font-semibold text-red-800 mb-2">Finalità:</div>
                <p className="text-sm text-red-700">
                  Copertura costi amministrativi, controlli e verifiche da parte del GSE. 
                  Il corrispettivo è trattenuto automaticamente dalle rate di incentivo.
                </p>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-orange-800 mb-4">43.2 Programma Controlli</h4>
              
              <div className="space-y-4">
                <div className="bg-white border border-orange-200 rounded p-4">
                  <div className="font-semibold text-orange-800 mb-2">Campione minimo</div>
                  <p className="text-sm text-orange-700"><strong>1% richieste ammesse/anno</strong></p>
                </div>
                
                <div className="bg-white border border-orange-200 rounded p-4">
                  <div className="font-semibold text-orange-800 mb-2">Tempistica</div>
                  <p className="text-sm text-orange-700"><strong>Entro 5 anni dall'ultima rata</strong></p>
                </div>
                
                <div className="bg-white border border-orange-200 rounded p-4">
                  <div className="font-semibold text-orange-800 mb-2">Modalità</div>
                  <p className="text-sm text-orange-700"><strong>Documentale + sopralluoghi</strong></p>
                </div>
                
                <div className="bg-white border border-orange-200 rounded p-4">
                  <div className="font-semibold text-orange-800 mb-2">Sanzioni</div>
                  <p className="text-sm text-orange-700"><strong>Decadenza + recupero somme</strong></p>
                </div>
              </div>
              
              <div className="bg-orange-100 border border-orange-300 rounded p-4 mt-4">
                <div className="font-semibold text-orange-800 mb-2">Sistema di Controllo:</div>
                <p className="text-sm text-orange-700">
                  Il GSE effettua controlli su almeno l'1% delle richieste ammesse ogni anno, 
                  combinando verifiche documentali e sopralluoghi tecnici. In caso di irregolarità, 
                  si applica la decadenza dal beneficio con recupero delle somme già erogate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
