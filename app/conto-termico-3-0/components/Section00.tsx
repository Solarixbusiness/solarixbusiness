export default function Section00() {
  return (
    <section id="sezione-0" className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
      <div className="mb-8">
        <span className="text-blue-600 font-bold text-lg">INTRODUZIONE</span>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">Introduzione al Conto Termico 3.0</h2>
        <div className="w-16 h-1 bg-blue-600 mt-3"></div>
      </div>
      
      <div className="prose max-w-none space-y-8">
        {/* Sezione 1 - Panoramica Generale */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Panoramica Generale e Contesto Normativo</h3>
          
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">1.1 Storia e Sviluppo del Conto Termico</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              Il Conto Termico costituisce un elemento fondamentale nelle strategie nazionali italiane volte a promuovere l'efficienza energetica e l'impiego di fonti rinnovabili. Istituito nel 2012 e rivisto attraverso il decreto ministeriale del 16 febbraio 2016 (versione 2.0), questo meccanismo ha sostenuto interventi su scala ridotta finalizzati alla diminuzione dei consumi energetici e all'adozione di tecnologie eco-compatibili.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">1.2 L'Evoluzione verso il Conto Termico 3.0</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              Con l'introduzione del Conto Termico 3.0, in programma per il 2025, vengono apportate modifiche sostanziali che rendono il sistema più accessibile, adattabile e centrato sulla qualità delle soluzioni adottate. Tali aggiornamenti si armonizzano con gli obiettivi delineati nel Piano Nazionale Integrato per l'Energia e il Clima, estendendo il raggio d'azione degli incentivi e privilegiando il settore pubblico e il terziario privato, pur mantenendo un'attenzione costante all'innovazione tecnologica.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">1.3 Obiettivi e Finalità delle Novità Introdotte</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nelle sezioni seguenti, esamineremo le differenze principali e i progressi introdotti, ponendo enfasi sulle novità che premiano le tecnologie ad elevate prestazioni. L'obiettivo principale è quello di supportare concretamente la decarbonizzazione, rendendo questo strumento essenziale per imprese e amministrazioni pubbliche orientate alla sostenibilità e al risparmio a lungo termine.
            </p>
          </div>
        </div>

        {/* Sezione 2 - Beneficiari */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Beneficiari e Ambiti di Applicazione</h3>
          
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">2.1 Confronto tra i Beneficiari: Dal 2.0 al 3.0</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              Una delle trasformazioni più importanti concerne l'allargamento del novero dei soggetti che possono accedere agli incentivi. Nella versione 2.0, i beneficiari erano prevalentemente le amministrazioni pubbliche, le imprese e i privati cittadini, con la possibilità di avvalersi di società specializzate in servizi energetici (note come ESCO).
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">2.2 Nuove Categorie di Beneficiari nel 3.0</h4>
            <p className="text-gray-700 leading-relaxed mb-3">Il 3.0 integra nuove categorie, quali:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Le comunità energetiche rinnovabili</li>
              <li>Le configurazioni per l'autoconsumo collettivo</li>
              <li>Gli enti del terzo settore (associazioni sportive, culturali o residenze sanitarie assistenziali)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Questi soggetti vengono equiparati alle amministrazioni pubbliche purché non esercitino attività commerciali. Questo ampliamento favorisce forme di collaborazione collettiva, incoraggiando modelli di condivisione energetica che coinvolgono comunità intere.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">2.3 Estensione degli Interventi per Settore</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              Inoltre, mentre il 2.0 restringeva gli interventi per l'efficienza energetica (come l'isolamento termico o la sostituzione di infissi) alle sole strutture pubbliche, il 3.0 li estende anche agli edifici privati del settore terziario non residenziale, quali uffici, negozi, alberghi o impianti produttivi.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Per i privati, gli interventi su immobili residenziali continuano a limitarsi alla produzione di energia termica da fonti rinnovabili, con un maggiore accento sulla riduzione delle emissioni di anidride carbonica.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">2.4 Copertura Finanziaria Potenziata per Piccoli Comuni</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              Un'innovazione particolarmente utile è la copertura fino al 100% delle spese ammissibili per i comuni con meno di 15.000 abitanti e per le strutture sanitarie pubbliche: ciò tiene conto delle risorse limitate di questi enti, facilitando un'accelerazione della transizione verso pratiche più sostenibili a livello locale.
            </p>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 my-4">
              <p className="text-green-800 font-medium">Esempio pratico di applicazione:</p>
              <p className="text-green-700 mt-2">
                Immaginate un piccolo comune che desidera rinnovare la scuola locale. Prima, le risorse potevano essere insufficienti; ora, l'incentivo completo rende l'intervento fattibile, beneficiando sia l'ambiente sia la comunità.
              </p>
            </div>
          </div>
        </div>

        {/* Sezione 3 - Interventi Ammissibili */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Interventi Ammissibili e Innovazioni Tecnologiche</h3>
          
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">3.1 Panoramica delle Nuove Tecnologie Incentivate</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              Il Conto Termico 3.0 arricchisce e diversifica l'elenco degli interventi incentivabili, incorporando opzioni che coniugano l'efficienza energetica con aspetti come la mobilità sostenibile e lo stoccaggio di energia.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">3.2 Impianti Fotovoltaici e Sistemi di Accumulo</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ad esempio, diventano ammissibili l'installazione di impianti fotovoltaici (con potenze comprese tra 2 kW e 1 MW) abbinati a sistemi di accumulo. Questi elementi, non presenti nel 2.0, promuovono un approccio olistico: massimizzano l'autoconsumo energetico e contribuiscono a una riduzione complessiva delle emissioni.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Un ulteriore incentivo è previsto per i moduli fotovoltaici fabbricati nell'Unione Europea, coprendo fino al 20% dei costi, favorendo la produzione europea e riducendo la dipendenza da fornitori extraeuropei.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">3.3 Mobilità Elettrica e Infrastrutture di Ricarica</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              Diventano ammissibili le colonnine per la ricarica di veicoli elettrici (con potenza minima di 7,4 kW, intelligenti e conformi ai modi 3 o 4), a condizione che siano integrati con pompe di calore elettriche. Questa integrazione rappresenta un passo importante verso l'elettrificazione dei trasporti abbinata alla decarbonizzazione del riscaldamento.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">3.4 Sistemi Ibridi e Microcogenerazione</h4>
            <p className="text-gray-700 leading-relaxed mb-3">Tra le altre novità figurano:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>I sistemi ibridi o bivalenti (che combinano pompe di calore con caldaie a condensazione o a biomassa)</li>
              <li>La microcogenerazione da fonti rinnovabili (fino a 50 kWe)</li>
              <li>I collegamenti a reti di teleriscaldamento efficiente</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">3.5 Building Automation e Automazione degli Edifici</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              Per quanto riguarda l'automazione degli edifici (building automation), il 3.0 impone una classe minima B secondo la norma UNI EN ISO 52120-1, innalzando gli standard rispetto alla versione precedente. Questo requisito garantisce sistemi di controllo più sofisticati e performanti per l'ottimizzazione energetica degli edifici.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">3.6 Requisiti Specifici per le Imprese</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              Per le imprese, inoltre, è introdotto l'obbligo di un risparmio energetico primario minimo del 10% (o del 20% in caso di interventi multipli), con l'esclusione di tecnologie basate su combustibili fossili, salvo deroghe per la biomassa in ambiti agricoli o forestali.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">3.7 Sinergie Tecnologiche e Approccio Integrato</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              L'aspetto innovativo di queste integrazioni risiede nella capacità di creare sinergie: ad esempio, un impianto fotovoltaico con accumulo non solo genera energia pulita, ma la conserva per usi serali, riducendo la dipendenza dalla rete elettrica.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
              <p className="text-blue-800 font-medium">Procedura step-by-step per l'implementazione di sistemi integrati:</p>
              <ol className="list-decimal pl-6 text-blue-700 mt-2 space-y-1">
                <li>Valutate la potenza necessaria per il vostro edificio analizzando i consumi storici</li>
                <li>Abbinate l'impianto fotovoltaico a una pompa di calore per massimizzare l'autoconsumo</li>
                <li>Calcolate l'incentivo considerando i massimali specifici (fino a 1.500 € per kW di fotovoltaico e 1.000 € per kWh di accumulo)</li>
                <li>Verificate se i moduli sono di produzione europea per ottenere il bonus aggiuntivo del 20%</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Sezione 4 - Requisiti Tecnici */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Requisiti Tecnici e Standard Ambientali</h3>
          
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">4.1 Filosofia della Qualità nel Conto Termico 3.0</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              La versione 3.0 accentua l'attenzione sulla qualità delle tecnologie e sulla tutela ambientale, introducendo criteri più rigorosi che valorizzano le soluzioni superiori e premiano l'eccellenza tecnologica rispetto alla semplice conformità minima.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">4.2 Generatori a Biomassa: Standard Elevati per Prestazioni Superiori</h4>
            
            <h5 className="text-lg font-medium text-gray-800 mb-2">4.2.1 Requisiti di Rendimento</h5>
            <p className="text-gray-700 leading-relaxed mb-4">
              Per i generatori a biomassa (come stufe o caldaie a legna o pellet), il rendimento minimo è innalzato all'87% più un fattore logaritmico legato alla potenza nominale. Questo calcolo più sofisticato tiene conto delle diverse taglie di impianto e garantisce prestazioni ottimali per ogni categoria di potenza.
            </p>

            <h5 className="text-lg font-medium text-gray-800 mb-2">4.2.2 Controllo delle Emissioni</h5>
            <p className="text-gray-700 leading-relaxed mb-4">
              Le emissioni devono aderire a limiti tabellari stringenti, con soglie specifiche per diversi inquinanti. Diventa obbligatoria la certificazione ambientale di classe 5 stelle (ai sensi del decreto ministeriale 7 novembre 2017, n. 186), rispetto alle 4 stelle richieste nel 2.0 solo in aree con problemi di qualità dell'aria.
            </p>

            <h5 className="text-lg font-medium text-gray-800 mb-2">4.2.3 Impatti sulla Qualità dell'Aria</h5>
            <p className="text-gray-700 leading-relaxed mb-4">
              Questo approccio stimola la sostituzione di vecchie caldaie a gas, gasolio o olio combustibile con sistemi più puliti, diminuendo l'impatto su particolati e ossidi di azoto, e allineandosi agli obiettivi del Piano d'Azione per la Qualità dell'Aria.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">4.3 Pompe di Calore: La Rivoluzione del Rendimento Stagionale</h4>
            
            <h5 className="text-lg font-medium text-gray-800 mb-2">4.3.1 Dal COP allo SCOP: Un Cambio di Paradigma</h5>
            <p className="text-gray-700 leading-relaxed mb-4">
              Per le pompe di calore (PDC), un'innovazione chiave è il passaggio dal Coefficiente di Prestazione (COP), che misura l'efficienza in condizioni ideali, allo Seasonal Coefficient of Performance (SCOP, o ηs, rendimento stagionale).
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nel 2.0, il calcolo si basava sul COP; nel 3.0, si adotta lo SCOP, che valuta le prestazioni medie annuali considerando carichi reali e variazioni climatiche, come definito dal regolamento Ecodesign.
            </p>

            <h5 className="text-lg font-medium text-gray-800 mb-2">4.3.2 Valori Minimi di Efficienza Stagionale</h5>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ciò premia apparecchi di alta qualità, con un ηs minimo del 125% per PDC elettriche aria-acqua, fino al 160% per quelle geotermiche, incoraggiando investimenti in tecnologie durature ed efficienti.
            </p>

            <h5 className="text-lg font-medium text-gray-800 mb-2">4.3.3 Scaldacqua a Pompa di Calore</h5>
            <p className="text-gray-700 leading-relaxed mb-4">
              Analogamente, per gli scaldacqua a PDC, è richiesta almeno la classe energetica A+, garantendo standard elevati anche per la produzione di acqua calda sanitaria.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
              <p className="text-yellow-800 font-medium">Analogia esplicativa per comprendere il cambiamento:</p>
              <p className="text-yellow-700 mt-2">
                Il COP è come misurare la velocità di un'auto in un test controllato su un circuito perfetto; lo SCOP considera invece il consumo reale su strade diverse durante tutto l'anno, in condizioni di traffico variabile. Questo cambiamento garantisce un risparmio maggiore, spesso del 20-30%, premiando chi sceglie prodotti realmente affidabili nelle condizioni d'uso quotidiano.
              </p>
            </div>
          </div>
        </div>

        {/* Sezione 5 - Calcolo Incentivi */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">5. Calcolo e Erogazione degli Incentivi</h3>
          
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">5.1 Metodologie di Calcolo Avanzate</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              Il metodo di calcolo nel 3.0 è affinato per rispecchiare meglio le prestazioni effettive e gli impatti ambientali, superando le semplificazioni della versione precedente per abbracciare una valutazione più realistica e precisa.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">5.2 Calcolo per Pompe di Calore</h4>
            
            <h5 className="text-lg font-medium text-gray-800 mb-2">5.2.1 Formula e Parametri</h5>
            <p className="text-gray-700 leading-relaxed mb-3">
              Per le PDC, l'incentivo totale (Ia tot) è dato dalla formula:
            </p>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
              <div className="text-center mb-3">
                <span className="text-xl font-bold text-gray-900">Ia tot = Ei × Ci</span>
              </div>
              <div className="text-sm text-gray-600">
                <p className="mb-2"><strong>Dove:</strong></p>
                <ul className="space-y-2">
                  <li><strong>Ia tot</strong> = Incentivo totale annuo in euro</li>
                  <li><strong>Ei</strong> = Energia incentivata annua (kWh), calcolata come: Potenza termica × SCOP × ore equivalenti di funzionamento</li>
                  <li><strong>Ci</strong> = Coefficiente di valorizzazione zonale (€/kWh), varia da 0,12 a 2,5 €/kWh in base alla zona climatica e al tipo di pompa di calore</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
              <p className="text-blue-800 font-medium mb-2">Esempio pratico di calcolo:</p>
              <div className="text-blue-700 text-sm space-y-1">
                <p>• Pompa di calore aria-acqua da 10 kW termici</p>
                <p>• SCOP = 4,0 (efficienza stagionale)</p>
                <p>• Zona climatica E: 2.000 ore equivalenti/anno</p>
                <p>• Coefficiente Ci = 0,16 €/kWh per zona E</p>
                <p className="font-medium pt-2">Calcolo: Ei = 10 kW × 4,0 × 2.000 h = 80.000 kWh/anno</p>
                <p className="font-medium">Incentivo: 80.000 × 0,16 = <span className="text-blue-900">12.800 €/anno</span></p>
              </div>
            </div>

            <h5 className="text-lg font-medium text-gray-800 mb-2">5.2.2 Vantaggi del Nuovo Sistema</h5>
            <p className="text-gray-700 leading-relaxed mb-4">
              Rispetto al COP del 2.0, questo valorizza l'efficienza stagionale, aumentando mediamente l'incentivo del 20-30% per sistemi performanti, creando un circolo virtuoso che premia la qualità tecnologica.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">5.3 Calcolo per Sistemi a Biomassa</h4>
            <p className="text-gray-700 leading-relaxed mb-3">
              Per la biomassa, l'incentivo è calcolato con la formula:
            </p>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
              <div className="text-center mb-3">
                <span className="text-xl font-bold text-gray-900">Ia tot = Pn × hr × Ci × Ce</span>
              </div>
              <div className="text-sm text-gray-600">
                <p className="mb-2"><strong>Dove:</strong></p>
                <ul className="space-y-2">
                  <li><strong>Ia tot</strong> = Incentivo totale annuo in euro</li>
                  <li><strong>Pn</strong> = Potenza nominale del generatore (kW termici)</li>
                  <li><strong>hr</strong> = Ore equivalenti di funzionamento annue (varia da 1.000 a 2.200 ore/anno per zona climatica)</li>
                  <li><strong>Ci</strong> = Coefficiente di valorizzazione zonale (€/kWh), da 0,030 a 0,045 €/kWh</li>
                  <li><strong>Ce</strong> = Coefficiente premiante per emissioni ridotte (da 1,0 a 1,5 per prestazioni superiori)</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
              <p className="text-green-800 font-medium mb-2">Esempio pratico di calcolo:</p>
              <div className="text-green-700 text-sm space-y-1">
                <p>• Caldaia a pellet da 25 kW termici</p>
                <p>• Zona climatica E: 1.800 ore equivalenti/anno</p>
                <p>• Coefficiente Ci = 0,040 €/kWh per zona E</p>
                <p>• Coefficiente Ce = 1,3 (emissioni ridotte del 30%)</p>
                <p className="font-medium pt-2">Calcolo: 25 kW × 1.800 h × 0,040 €/kWh × 1,3</p>
                <p className="font-medium">Incentivo: <span className="text-green-900">2.340 €/anno</span></p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Questo sistema favorisce riduzioni di inquinanti del 50-70% rispetto a impianti obsoleti a gasolio, incentivando il passaggio a tecnologie più pulite.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">5.4 Sistemi Solari Termici e Bonus per Tecnologie Ibride</h4>
            <div className="space-y-4">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <p className="font-medium text-gray-800 mb-2">Formula per Sistemi Solari Termici:</p>
                <div className="text-center mb-3">
                  <span className="text-lg font-bold text-gray-900">Ia tot = S × Qu × Ci</span>
                </div>
                <div className="text-sm text-gray-600">
                  <p className="mb-2"><strong>Dove:</strong></p>
                  <ul className="space-y-1">
                    <li><strong>S</strong> = Superficie lorda dei collettori solari (m²)</li>
                    <li><strong>Qu</strong> = Producibilità annua specifica (fino a 550 kWht/m²/anno)</li>
                    <li><strong>Ci</strong> = Coefficiente di valorizzazione (fino a 255 €/m²)</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                <p className="text-orange-800 font-medium mb-2">Bonus per Tecnologie Ibride:</p>
                <div className="text-orange-700 text-sm">
                  <p className="mb-2">Per sistemi ibridi (es. solare termico + pompa di calore):</p>
                  <div className="text-center mb-2">
                    <span className="font-bold">Incentivo finale = Incentivo base × k</span>
                  </div>
                  <p>Dove <strong>k = 1,25</strong> (incremento del 25% per integrazione tecnologica)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">5.5 Massimali e Modalità di Erogazione</h4>
            
            <h5 className="text-lg font-medium text-gray-800 mb-2">5.5.1 Nuovi Massimali di Spesa</h5>
            <p className="text-gray-700 leading-relaxed mb-3">I massimali di spesa sono elevati per supportare investimenti significativi:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Fino a 1.500 €/kW per fotovoltaico</li>
              <li>Fino a 1.000 €/kWh per accumulo</li>
              <li>Coefficienti premianti per tecnologie europee</li>
            </ul>

            <h5 className="text-lg font-medium text-gray-800 mb-2">5.5.2 Accelerazione dell'Erogazione</h5>
            <p className="text-gray-700 leading-relaxed mb-3">L'erogazione è accelerata con criteri più favorevoli:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Rata unica per importi inferiori a 15.000 € (contro i 5.000 € del 2.0)</li>
              <li>Rate annue da 2 a 5 anni per importi maggiori</li>
              <li>Per le amministrazioni pubbliche, acconti fino al 50% con prenotazione semplificata</li>
            </ul>

            <div className="bg-purple-50 border-l-4 border-purple-400 p-4 my-4">
              <p className="text-purple-800 font-medium">Guida al calcolo pratico per incentivo PDC:</p>
              <ol className="list-decimal pl-6 text-purple-700 mt-2 space-y-1">
                <li>Determinate la potenza termica dell'impianto (in kW) consultando la scheda tecnica</li>
                <li>Ottenete il valore SCOP dal certificato del produttore o dalla dichiarazione di prestazione</li>
                <li>Moltiplicate per le ore equivalenti di funzionamento (basate sulla zona climatica di installazione)</li>
                <li>Applicate il coefficiente zonale Ci specifico per la vostra area geografica per ottenere l'importo totale dell'incentivo</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Sezione 6 - Procedure */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">6. Procedure Amministrative e Gestione Operativa</h3>
          
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">6.1 Semplificazione delle Procedure di Accesso</h4>
            <p className="text-gray-700 leading-relaxed mb-3">Il 3.0 introduce procedure più fluide e user-friendly:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Accesso diretto entro 90 giorni dalla conclusione dei lavori (con possibilità di proroga)</li>
              <li>Prenotazione per le Pubbliche Amministrazioni mediante diagnosi energetica o contratti con ESCO</li>
              <li>Riduzione dei tempi burocratici e maggiore flessibilità operativa</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">6.2 Ruolo Ottimizzato delle ESCO</h4>
            <p className="text-gray-700 leading-relaxed mb-3">
              Le Società di Servizi Energetici (ESCO), che nella versione 2.0 erano ammesse a tutti gli interventi, sono ora riservate a quelli di scala maggiore:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Oltre 70 kW per pompe di calore</li>
              <li>Oltre 2.500 m² per solare termico</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Questa specializzazione ottimizza il ruolo delle ESCO su progetti di maggiore complessità e impatto, dove le loro competenze specialistiche risultano più decisive.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">6.3 Obblighi di Mantenimento e Controlli</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              Persiste l'obbligo di mantenere i requisiti per la durata dell'incentivo più 5 anni aggiuntivi, con verifiche rafforzate da parte del GSE per garantire il rispetto degli standard nel tempo e prevenire possibili abusi o degrado prestazionale.
            </p>
          </div>
        </div>

        {/* Sezione 7 - Impatti */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">7. Impatti e Prospettive del Sistema</h3>
          
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">7.1 Budget e Ottimizzazione delle Risorse</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              Il Conto Termico 3.0 mantiene un budget annuo di 900 milioni di euro, ma lo ottimizza per tecnologie avanzate e minori impatti ambientali, concentrando le risorse su soluzioni ad alto rendimento e basso impatto ambientale.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">7.2 Tempi di Ritorno dell'Investimento</h4>
            <p className="text-gray-700 leading-relaxed mb-3">
              Queste migliorie non solo riducono i tempi di ritorno sull'investimento – che si attestano tipicamente tra 3-5 anni – ma creano anche valore aggiunto in termini di:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Riduzione delle emissioni di CO2</li>
              <li>Miglioramento del comfort abitativo</li>
              <li>Incremento del valore immobiliare</li>
              <li>Indipendenza energetica crescente</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">7.3 Contributo alla Decarbonizzazione Nazionale</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              Il sistema supporta concretamente la decarbonizzazione del paese, allineandosi con gli obiettivi europei di neutralità climatica e rappresentando uno strumento essenziale per imprese e amministrazioni pubbliche orientate alla sostenibilità e al risparmio a lungo termine.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">7.4 Raccomandazioni per l'Approfondimento</h4>
            <p className="text-gray-700 leading-relaxed mb-3">
              Per approfondimenti pratici, consulenze specifiche e aggiornamenti normativi, si consiglia di:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Consultare regolarmente il sito ufficiale del GSE (Gestore Servizi Energetici)</li>
              <li>Rivolgersi a esperti qualificati e certificati nel settore</li>
              <li>Monitorare gli aggiornamenti delle guide operative e dei bandi</li>
              <li>Partecipare a eventi formativi e webinar specialistici per rimanere aggiornati sulle evoluzioni normative e tecnologiche</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
