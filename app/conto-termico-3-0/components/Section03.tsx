export default function Section03() {
  return (
    <section id="sezione-3" className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
      <div className="mb-8">
        <span className="text-green-600 font-bold text-lg">PARTE 3</span>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">Tipologie di Intervento Incentivabili</h2>
        <div className="w-16 h-1 bg-green-600 mt-3"></div>
      </div>
      
      <div className="prose max-w-none space-y-8">
        {/* Sezione 16 - Panoramica */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">16. Tipologie di Intervento Incentivabili</h3>
          
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">16.1 Panoramica degli Interventi di Efficienza Energetica</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              Il Conto Termico 3.0 introduce un portafoglio ampio e innovativo di interventi di efficienza energetica, caratterizzato da requisiti tecnici più stringenti e da una maggiore attenzione alle tecnologie all'avanguardia. Gli interventi sono classificati in otto categorie principali, ciascuna con specifici criteri di ammissibilità e parametri prestazionali.
            </p>
          </div>
        </div>

        {/* Sezione 17 - Articolo 5 */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">17. Articolo 5 - Interventi di Incremento dell'Efficienza Energetica</h3>
          
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">17.1 a) Isolamento Termico dell'Involucro Edilizio</h4>
            
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h5 className="text-lg font-medium text-blue-800 mb-3">17.1.1 Strutture Opache Orizzontali - Coperture</h5>
                <p className="text-blue-700 text-sm mb-3">Requisiti prestazionali: Valori di trasmittanza differenziati per zona climatica</p>
                <div className="grid md:grid-cols-2 gap-3 text-blue-700 text-sm">
                  <div>
                    <p><strong>Zone A-C:</strong> ≤ 0,27 W/m²K</p>
                    <p><strong>Zona D:</strong> ≤ 0,22 W/m²K</p>
                  </div>
                  <div>
                    <p><strong>Zona E:</strong> ≤ 0,20 W/m²K</p>
                    <p><strong>Zona F:</strong> ≤ 0,19 W/m²K</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h5 className="text-lg font-medium text-green-800 mb-3">17.1.2 Strutture Opache Orizzontali - Pavimenti</h5>
                <div className="grid md:grid-cols-2 gap-3 text-green-700 text-sm">
                  <div>
                    <p><strong>Zone A-B:</strong> ≤ 0,40 W/m²K</p>
                    <p><strong>Zona C:</strong> ≤ 0,30 W/m²K</p>
                    <p><strong>Zona D:</strong> ≤ 0,28 W/m²K</p>
                  </div>
                  <div>
                    <p><strong>Zona E:</strong> ≤ 0,25 W/m²K</p>
                    <p><strong>Zona F:</strong> ≤ 0,23 W/m²K</p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h5 className="text-lg font-medium text-orange-800 mb-3">17.1.3 Strutture Opache Verticali - Pareti Perimetrali</h5>
                <div className="grid md:grid-cols-2 gap-3 text-orange-700 text-sm">
                  <div>
                    <p><strong>Zone A-B:</strong> ≤ 0,38 W/m²K</p>
                    <p><strong>Zona C:</strong> ≤ 0,30 W/m²K</p>
                    <p><strong>Zona D:</strong> ≤ 0,26 W/m²K</p>
                  </div>
                  <div>
                    <p><strong>Zona E:</strong> ≤ 0,23 W/m²K</p>
                    <p><strong>Zona F:</strong> ≤ 0,22 W/m²K</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                <h5 className="text-lg font-medium text-purple-800 mb-2">17.1.4 Flessibilità per Edifici Storici</h5>
                <p className="text-purple-700 text-sm">
                  Per edifici con fine lavori anteriore al 29 ottobre 1993, è ammesso un approccio alternativo basato sul miglioramento dell'indice di prestazione energetica di almeno il <strong>50%</strong>.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">17.2 b) Sostituzione di Chiusure Trasparenti</h4>
            
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h5 className="text-lg font-medium text-blue-800 mb-3">17.2.1 Requisiti Prestazionali per Infissi</h5>
                <div className="grid md:grid-cols-2 gap-3 text-blue-700 text-sm">
                  <div>
                    <p><strong>Zone A-B:</strong> ≤ 2,60 W/m²K</p>
                    <p><strong>Zona C:</strong> ≤ 1,75 W/m²K</p>
                    <p><strong>Zona D:</strong> ≤ 1,67 W/m²K</p>
                  </div>
                  <div>
                    <p><strong>Zona E:</strong> ≤ 1,30 W/m²K</p>
                    <p><strong>Zona F:</strong> ≤ 1,00 W/m²K</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h5 className="text-lg font-medium text-gray-800 mb-3">17.2.2 Requisiti Aggiuntivi</h5>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>Installazione congiunta a sistemi di termoregolazione o valvole termostatiche</li>
                  <li>Conformità ai criteri del DM 26 giugno 2015</li>
                  <li>Certificazione delle prestazioni secondo UNI EN ISO 10077-1</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">17.3 c) Sistemi di Schermatura e Controllo Solare</h4>
            
            <div className="space-y-4">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h5 className="text-lg font-medium text-yellow-800 mb-3">17.3.1 Prestazione di Schermatura</h5>
                <ul className="space-y-1 text-yellow-700 text-sm">
                  <li><strong>Requisito minimo:</strong> Classe 3 o superiore secondo UNI EN 14501</li>
                  <li><strong>Meccanismi automatici:</strong> Controllo basato su rilevazione radiazione solare (UNI EN 15232)</li>
                  <li><strong>Sistemi di filtrazione:</strong> Fattore solare gtot in range classe 3-4 (UNI 14501)</li>
                </ul>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <h5 className="text-lg font-medium text-red-800 mb-2">17.3.2 Integrazione Obbligatoria</h5>
                <p className="text-red-700 text-sm">
                  L'intervento è incentivato esclusivamente se abbinato alla sostituzione di chiusure trasparenti sullo stesso edificio.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">17.4 d) Trasformazione in Edifici a Energia Quasi Zero (NZEB)</h4>
            
            <div className="space-y-4">
              <div className="bg-green-50 border-l-4 border-green-400 p-4">
                <h5 className="text-lg font-medium text-green-800 mb-2">17.4.1 Obiettivo Strategico</h5>
                <p className="text-green-700 text-sm">
                  La trasformazione NZEB rappresenta l'intervento più ambizioso, finalizzato al raggiungimento dei più elevati standard di prestazione energetica.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h5 className="text-lg font-medium text-blue-800 mb-3">17.4.2 Requisiti di Qualificazione</h5>
                <ul className="space-y-1 text-blue-700 text-sm">
                  <li><strong>Certificazione post-intervento:</strong> Attestato di prestazione energetica con classificazione NZEB</li>
                  <li><strong>Conformità normativa:</strong> Rispetto dei requisiti del DM 26 giugno 2015, modificato dal D.Lgs. 199/2021</li>
                  <li><strong>Ampliamento consentito:</strong> Fino al 25% della volumetria esistente</li>
                  <li><strong>Demolizione e ricostruzione:</strong> Ammessa per amministrazioni pubbliche nell'ambito di "progetti integrati"</li>
                </ul>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h5 className="text-lg font-medium text-orange-800 mb-2">17.4.3 Certificazioni Alternative</h5>
                <p className="text-orange-700 text-sm">
                  Nelle zone con validità delle certificazioni Casaclima, è ammessa la classe "Casaclima A" o "Gold" con specifica dicitura NZEB.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">17.5 e) Sostituzione di Sistemi di Illuminazione</h4>
            
            <div className="space-y-4">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h5 className="text-lg font-medium text-purple-800 mb-3">17.5.1 Tecnologie Ammesse</h5>
                <ul className="space-y-1 text-purple-700 text-sm">
                  <li><strong>Lampade LED:</strong> Efficienza luminosa minima 80 lm/W</li>
                  <li><strong>Indice resa cromatica:</strong> &gt;80 per interni, &gt;60 per esterni</li>
                  <li><strong>Certificazione:</strong> Marcatura CE e conformità ai criteri di sicurezza</li>
                </ul>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h5 className="text-lg font-medium text-gray-800 mb-3">17.5.2 Criteri di Dimensionamento</h5>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li><strong>Limite potenza:</strong> Massimo 50% della potenza sostituita</li>
                  <li><strong>Conformità normativa:</strong> Rispetto UNI EN 12464-1 per ambienti lavorativi</li>
                  <li><strong>Illuminazione esterna:</strong> Conformità normative antinquinamento luminoso</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">17.6 f) Building Automation e Controllo Intelligente</h4>
            
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h5 className="text-lg font-medium text-blue-800 mb-3">17.6.1 Classificazione Minima</h5>
                <ul className="space-y-1 text-blue-700 text-sm">
                  <li><strong>Requisito obbligatorio:</strong> Classe B secondo UNI EN ISO 52120-1</li>
                  <li><strong>Integrazione sistemi:</strong> Controllo impianti termici ed elettrici</li>
                  <li><strong>Funzionalità avanzate:</strong> Diagnostica, rilevamento consumi, ottimizzazione energetica</li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h5 className="text-lg font-medium text-green-800 mb-3">17.6.2 Servizi Controllati</h5>
                <ul className="space-y-1 text-green-700 text-sm">
                  <li>Riscaldamento, raffrescamento, ventilazione</li>
                  <li>Produzione acqua calda sanitaria</li>
                  <li>Illuminazione e schermature solari</li>
                  <li>Sistemi di ricarica veicoli elettrici (ove presenti)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">17.7 g) Infrastrutture di Ricarica per Veicoli Elettrici</h4>
            
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h5 className="text-lg font-medium text-green-800 mb-3">17.7.1 Requisiti Tecnici Obbligatori</h5>
                <ul className="space-y-1 text-green-700 text-sm">
                  <li><strong>Potenza minima:</strong> 7,4 kW per punto di ricarica</li>
                  <li><strong>Tipologia smart:</strong> Capacità di misurazione e controllo remoto</li>
                  <li><strong>Modalità di ricarica:</strong> Modo 3 o Modo 4 (CEI EN 61851)</li>
                  <li><strong>Dichiarazione di conformità:</strong> DM 37/2008</li>
                </ul>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                <h5 className="text-lg font-medium text-orange-800 mb-3">17.7.2 Condizioni di Ammissibilità</h5>
                <ul className="space-y-1 text-orange-700 text-sm">
                  <li><strong>Intervento combinato:</strong> Realizzazione congiunta con sostituzione impianti climatizzazione dotati di pompe di calore elettriche</li>
                  <li><strong>Infrastruttura pubblica:</strong> Registrazione obbligatoria alla Piattaforma Unica Nazionale (PUN)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">17.8 h) Impianti Fotovoltaici e Sistemi di Accumulo</h4>
            
            <div className="space-y-4">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h5 className="text-lg font-medium text-yellow-800 mb-3">17.8.1 Parametri Dimensionali</h5>
                <ul className="space-y-1 text-yellow-700 text-sm">
                  <li><strong>Potenza minima:</strong> 2 kW</li>
                  <li><strong>Potenza massima:</strong> 1 MW (limitata dalla potenza disponibile sul punto di prelievo)</li>
                  <li><strong>Configurazione:</strong> Autoconsumo con cessione parziale</li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h5 className="text-lg font-medium text-blue-800 mb-3">17.8.2 Requisiti Qualitativi</h5>
                <ul className="space-y-1 text-blue-700 text-sm">
                  <li><strong>Moduli:</strong> Nuova costruzione, marcatura CE, tolleranza solo positiva</li>
                  <li><strong>Resistenza al carico:</strong> Minimo 5.400 Pa</li>
                  <li><strong>Coefficiente di temperatura:</strong> Non inferiore a -0,37%/°C</li>
                  <li><strong>Garanzia prodotto:</strong> Almeno 10 anni</li>
                </ul>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h5 className="text-lg font-medium text-purple-800 mb-3">17.8.3 Sistemi di Accumulo</h5>
                <ul className="space-y-1 text-purple-700 text-sm">
                  <li><strong>Tecnologia:</strong> Elettrochimica o altre tecnologie certificate</li>
                  <li><strong>Integrazione:</strong> Possibile integrazione con impianto fotovoltaico</li>
                  <li><strong>Controllo:</strong> Sistema di gestione intelligente dell'energia</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Sezione 18 - Innovazioni */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">18. Innovazioni Tecnologiche e Premialità</h3>
          
          <div className="space-y-6">
            <div className="bg-green-50 border-l-4 border-green-400 p-6">
              <h4 className="text-xl font-semibold text-green-800 mb-4">18.1 Componenti Ricondizionati ed Economia Circolare</h4>
              <p className="text-green-700 leading-relaxed mb-4">
                Il decreto introduce per la prima volta la possibilità di utilizzare componenti ricondizionati certificati, promuovendo principi di economia circolare:
              </p>
              <ul className="space-y-1 text-green-700 text-sm">
                <li><strong>Definizione rigorosa:</strong> Prodotti sottoposti ad azioni di pulizia, manutenzione e ripristino funzionalità</li>
                <li><strong>Responsabilità del ricondizionatore:</strong> Verifica conformità alle specifiche normative</li>
                <li><strong>Tracciabilità:</strong> Certificazione del processo di ricondizionamento</li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
              <h4 className="text-xl font-semibold text-blue-800 mb-4">18.2 Maggiorazioni per Produzione Europea</h4>
              <ul className="space-y-1 text-blue-700 text-sm">
                <li><strong>Incentivo maggiorato:</strong> +10% per componenti prodotti nell'Unione Europea</li>
                <li><strong>Settori interessati:</strong> Isolanti, infissi, sistemi di schermatura, tecnologie NZEB, illuminazione</li>
                <li><strong>Obiettivo strategico:</strong> Sostegno alla filiera produttiva europea e riduzione dipendenza da paesi terzi</li>
              </ul>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-400 p-6">
              <h4 className="text-xl font-semibold text-orange-800 mb-4">18.3 Integrazione con Mobilità Elettrica</h4>
              <p className="text-orange-700 leading-relaxed mb-4">
                L'integrazione tra efficienza energetica e mobilità sostenibile rappresenta una delle innovazioni più significative:
              </p>
              <ul className="space-y-1 text-orange-700 text-sm">
                <li><strong>Approccio sistemico:</strong> Ricarica elettrica combinata con pompe di calore</li>
                <li><strong>Ottimizzazione energetica:</strong> Sfruttamento dell'energia rinnovabile autoprodotta</li>
                <li><strong>Smart charging:</strong> Sistemi intelligenti di gestione della ricarica</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sezione 19: Metodologie di Calcolo degli Incentivi */}
        <div className="mb-12">
  <h3 className="text-2xl font-bold text-blue-800 mb-6">19. METODOLOGIE DI CALCOLO DEGLI INCENTIVI</h3>
  
  <div className="mb-8">
    <h4 className="text-xl font-semibold text-gray-800 mb-4">19.1 Struttura degli Incentivi</h4>
    <p className="text-gray-700 mb-4">
      Gli incentivi per l'efficienza energetica seguono due metodologie principali:
    </p>

    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h5 className="text-lg font-medium text-blue-800 mb-4">19.1.1 Formula Base per Interventi a Superficie</h5>
        
        <div className="bg-white border-2 border-blue-300 rounded-lg p-4 mb-4 text-center">
          <div className="text-2xl font-bold text-blue-900 mb-2">
            I<sub>tot</sub> = %spesa × C × S<sub>int</sub>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
          <h6 className="font-semibold text-gray-800 mb-2">Parametri della Formula:</h6>
          <ul className="space-y-1 text-gray-700 text-sm">
            <li><strong>S<sub>int</sub>:</strong> Superficie oggetto dell'intervento (m²)</li>
            <li><strong>C:</strong> Costo specifico per unità di superficie (€/m²)</li>
            <li><strong>%spesa:</strong> Percentuale incentivata (variabile per tecnologia)</li>
          </ul>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h6 className="font-semibold text-green-800 mb-2">Esempio Pratico:</h6>
          <p className="text-green-700 text-sm mb-2">
            <strong>Isolamento termico parete esterna:</strong>
          </p>
          <ul className="space-y-1 text-green-700 text-sm">
            <li>• Superficie: 100 m²</li>
            <li>• Costo specifico: 200 €/m²</li>
            <li>• Percentuale incentivata: 65%</li>
            <li><strong>Incentivo = 65% × 200 €/m² × 100 m² = 13.000 €</strong></li>
          </ul>
        </div>
      </div>

      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
        <h5 className="text-lg font-medium text-purple-800 mb-4">19.1.2 Formula per Interventi a Edificio</h5>
        
        <div className="bg-white border-2 border-purple-300 rounded-lg p-4 mb-4 text-center">
          <div className="text-2xl font-bold text-purple-900 mb-2">
            I<sub>tot</sub> = %spesa × C × S<sub>ed</sub>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
          <h6 className="font-semibold text-gray-800 mb-2">Parametri della Formula:</h6>
          <ul className="space-y-1 text-gray-700 text-sm">
            <li><strong>S<sub>ed</sub>:</strong> Superficie utile dell'edificio (m²)</li>
            <li><strong>C:</strong> Costo specifico per unità di superficie utile (€/m²)</li>
          </ul>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h6 className="font-semibold text-green-800 mb-2">Esempio Pratico - Trasformazione NZEB:</h6>
          <p className="text-green-700 text-sm mb-2">
            <strong>Edificio zona climatica E:</strong>
          </p>
          <ul className="space-y-1 text-green-700 text-sm">
            <li>• Superficie utile: 500 m²</li>
            <li>• Costo specifico: 1.300 €/m²</li>
            <li>• Percentuale incentivata: 65%</li>
            <li><strong>Incentivo = 65% × 1.300 €/m² × 500 m² = 422.500 €</strong></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div className="mb-8">
    <h4 className="text-xl font-semibold text-gray-800 mb-4">19.2 Limiti e Massimali</h4>
    
    <div className="space-y-6">
      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
        <h5 className="text-lg font-medium text-orange-800 mb-3">19.2.1 Isolamento Termico</h5>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white border border-orange-200 rounded p-3">
            <h6 className="font-semibold text-orange-800 mb-2">Esterno</h6>
            <ul className="space-y-1 text-orange-700 text-sm">
              <li>• Coperture: <strong>300 €/m²</strong></li>
              <li>• Pareti: <strong>200 €/m²</strong></li>
              <li>• Pavimenti: <strong>170 €/m²</strong></li>
            </ul>
          </div>
          
          <div className="bg-white border border-orange-200 rounded p-3">
            <h6 className="font-semibold text-orange-800 mb-2">Interno</h6>
            <ul className="space-y-1 text-orange-700 text-sm">
              <li>• Coperture: <strong>150 €/m²</strong></li>
              <li>• Pavimenti: <strong>150 €/m²</strong></li>
              <li>• Pareti: <strong>100 €/m²</strong></li>
            </ul>
          </div>
          
          <div className="bg-white border border-orange-200 rounded p-3">
            <h6 className="font-semibold text-orange-800 mb-2">Sistemi Ventilati</h6>
            <ul className="space-y-1 text-orange-700 text-sm">
              <li>• Coperture: <strong>350 €/m²</strong></li>
              <li>• Pareti: <strong>250 €/m²</strong></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
        <h5 className="text-lg font-medium text-teal-800 mb-3">19.2.2 Infissi e Schermature</h5>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white border border-teal-200 rounded p-3">
            <h6 className="font-semibold text-teal-800 mb-2">Infissi per Zone Climatiche</h6>
            <ul className="space-y-1 text-teal-700 text-sm">
              <li>• Zone A-C: <strong>700 €/m²</strong></li>
              <li>• Zone D-F: <strong>800 €/m²</strong></li>
            </ul>
          </div>
          
          <div className="bg-white border border-teal-200 rounded p-3">
            <h6 className="font-semibold text-teal-800 mb-2">Schermature Solari</h6>
            <ul className="space-y-1 text-teal-700 text-sm">
              <li>• Base: <strong>250 €/m²</strong></li>
              <li>• + Automatismi: <strong>+50 €/m²</strong></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
        <h5 className="text-lg font-medium text-indigo-800 mb-3">19.2.3 Trasformazione NZEB</h5>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white border border-indigo-200 rounded p-3">
            <h6 className="font-semibold text-indigo-800 mb-2">Massimali per Zone</h6>
            <ul className="space-y-1 text-indigo-700 text-sm">
              <li>• Zone A-C: <strong>1.000 €/m²</strong> (superficie utile)</li>
              <li>• Zone D-F: <strong>1.300 €/m²</strong> (superficie utile)</li>
            </ul>
          </div>
          
          <div className="bg-white border border-indigo-200 rounded p-3">
            <h6 className="font-semibold text-indigo-800 mb-2">Percentuale Incentivata</h6>
            <p className="text-indigo-700 text-sm">
              <strong>65%</strong> della spesa ammissibile
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Sezione 20: Procedure e Documentazione */}
<div className="mb-12">
  <h3 className="text-2xl font-bold text-blue-800 mb-6">20. PROCEDURE E DOCUMENTAZIONE</h3>
  
  <div className="mb-8">
    <h4 className="text-xl font-semibold text-gray-800 mb-4">20.1 Diagnosi Energetica e Certificazione</h4>
    
    <div className="space-y-6">
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <h5 className="text-lg font-medium text-red-800 mb-3">20.1.1 Obbligatorietà</h5>
        
        <div className="space-y-4">
          <div className="bg-white border border-red-200 rounded p-3">
            <h6 className="font-semibold text-red-800 mb-2">Interventi con Obbligo Completo</h6>
            <p className="text-red-700 text-sm mb-2">
              <strong>Isolamento e NZEB:</strong> Diagnosi preliminare + APE successivo obbligatori
            </p>
          </div>
          
          <div className="bg-white border border-red-200 rounded p-3">
            <h6 className="font-semibold text-red-800 mb-2">Altri Interventi</h6>
            <p className="text-red-700 text-sm mb-2">
              <strong>APE solo per edifici &gt;200 kW</strong> di potenza nominale
            </p>
          </div>
          
          <div className="bg-white border border-red-200 rounded p-3">
            <h6 className="font-semibold text-red-800 mb-2">Esclusioni</h6>
            <p className="text-red-700 text-sm">
              Impianti di processo e reti di teleriscaldamento
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <h5 className="text-lg font-medium text-green-800 mb-3">20.1.2 Qualificazione Tecnica</h5>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white border border-green-200 rounded p-3">
            <h6 className="font-semibold text-green-800 mb-2">Diagnosi Energetica</h6>
            <ul className="space-y-1 text-green-700 text-sm">
              <li>• <strong>EGE certificato</strong> UNI CEI 11339</li>
              <li>• <strong>ESCO certificata</strong> UNI CEI 11352</li>
            </ul>
          </div>
          
          <div className="bg-white border border-green-200 rounded p-3">
            <h6 className="font-semibold text-green-800 mb-2">Attestato di Prestazione Energetica</h6>
            <p className="text-green-700 text-sm">
              <strong>Tecnico abilitato</strong> secondo normativa vigente
            </p>
          </div>
        </div>
        
        <div className="bg-white border border-green-200 rounded p-3 mt-4">
          <h6 className="font-semibold text-green-800 mb-2">Conformità</h6>
          <p className="text-green-700 text-sm">
            Criteri minimi <strong>D.Lgs. 102/2014, allegato 2</strong>
          </p>
        </div>
      </div>
    </div>
  </div>

  <div className="mb-8">
    <h4 className="text-xl font-semibold text-gray-800 mb-4">20.2 Asseverazioni e Controlli</h4>
    
    <div className="space-y-6">
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h5 className="text-lg font-medium text-yellow-800 mb-3">20.2.1 Responsabilità Tecnica</h5>
        
        <div className="space-y-3">
          <div className="bg-white border border-yellow-200 rounded p-3">
            <h6 className="font-semibold text-yellow-800 mb-1">Dimensionamento</h6>
            <p className="text-yellow-700 text-sm">
              Asseverazione tecnica per corretto dimensionamento
            </p>
          </div>
          
          <div className="bg-white border border-yellow-200 rounded p-3">
            <h6 className="font-semibold text-yellow-800 mb-1">Prestazioni</h6>
            <p className="text-yellow-700 text-sm">
              Dichiarazione conformità ai requisiti minimi
            </p>
          </div>
          
          <div className="bg-white border border-yellow-200 rounded p-3">
            <h6 className="font-semibold text-yellow-800 mb-1">Sicurezza</h6>
            <p className="text-yellow-700 text-sm">
              Rispetto normative di sicurezza e compatibilità elettromagnetica
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h5 className="text-lg font-medium text-blue-800 mb-3">20.2.2 Sistema di Controlli</h5>
        
        <div className="space-y-3">
          <div className="bg-white border border-blue-200 rounded p-3">
            <h6 className="font-semibold text-blue-800 mb-1">Verifica Automatica</h6>
            <p className="text-blue-700 text-sm">
              Controllo requisiti minimi via sistema informatico
            </p>
          </div>
          
          <div className="bg-white border border-blue-200 rounded p-3">
            <h6 className="font-semibold text-blue-800 mb-1">Sopralluoghi</h6>
            <p className="text-blue-700 text-sm">
              Programma annuale di verifiche in loco <strong>(minimo 1%)</strong>
            </p>
          </div>
          
          <div className="bg-white border border-blue-200 rounded p-3">
            <h6 className="font-semibold text-blue-800 mb-1">Documentazione</h6>
            <p className="text-blue-700 text-sm">
              Conservazione obbligatoria per <strong>5 anni post-incentivo</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
        </div>
      </div>
    </section>
  );
}
