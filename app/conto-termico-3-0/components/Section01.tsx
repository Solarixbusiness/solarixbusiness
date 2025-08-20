export default function Section01() {
  return (
    <section id="sezione-1" className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
      <div className="mb-8">
        <span className="text-green-600 font-bold text-lg">PARTE 1</span>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">Introduzione e Quadro Generale</h2>
        <div className="w-16 h-1 bg-green-600 mt-3"></div>
      </div>
      
      <div className="prose max-w-none space-y-8">
        {/* Sezione 8 - Introduzione */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">8. Introduzione: L'Evoluzione Strategica del Conto Termico</h3>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            Il Conto Termico 3.0 rappresenta una svolta epocale nel panorama degli incentivi per l'efficienza energetica in Italia, distinguendosi per un approccio più maturo e strategicamente orientato verso le esigenze del mondo produttivo e della pubblica amministrazione. Questa nuova disciplina testimonia l'impegno dell'Italia nel raggiungimento degli ambiziosi obiettivi europei di transizione energetica, con un'attenzione particolare verso i soggetti che possono generare il maggiore impatto sistemico.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            La genesi di questo strumento affonda le radici nel Piano Nazionale Integrato per l'Energia e il Clima 2024, che stabilisce l'obiettivo di conseguire un risparmio energetico cumulativo pari a 73,4 Mtep nel periodo 2021-2030. Un traguardo che richiede una mobilitazione senza precedenti di risorse, competenze e tecnologie.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <p className="text-blue-800 font-medium mb-2">Obiettivo PNIEC 2024:</p>
            <p className="text-blue-700 text-lg font-bold">73,4 Mtep di risparmio energetico cumulativo (2021-2030)</p>
            <p className="text-blue-600 text-sm mt-2">Equivalente al consumo energetico annuale di circa 15 milioni di abitazioni</p>
          </div>
        </div>

        {/* Sezione 9 - Contesto Normativo */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">9. Il Contesto Normativo e gli Obiettivi Strategici</h3>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            Il nuovo decreto si inserisce nel quadro delle più recenti direttive europee, in particolare la Direttiva (UE) 2023/1791 sull'efficienza energetica e la Direttiva (UE) 2024/1275 sulla prestazione energetica nell'edilizia. Queste normative hanno ridefinito i parametri di riferimento per le politiche nazionali, innalzando significativamente l'asticella degli obiettivi.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            La sfida principale che il decreto affronta riguarda la specializzazione del meccanismo incentivante per il settore non residenziale, riconoscendo che la riqualificazione energetica degli edifici del terziario e della pubblica amministrazione presenta caratteristiche tecniche, economiche e procedurali sostanzialmente diverse rispetto agli interventi in ambito residenziale.
          </p>

          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">9.1 Obiettivi Strategici del Piano Nazionale</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              Il Conto Termico 3.0 contribuisce agli obiettivi del PNIEC 2024:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h5 className="font-bold text-green-800 mb-2">Efficienza Energetica</h5>
                <p className="text-green-700 text-sm">Riduzione del <span className="font-bold text-lg">43,7%</span> dei consumi di energia primaria rispetto al 1990</p>
              </div>
              
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h5 className="font-bold text-orange-800 mb-2">Fonti Rinnovabili</h5>
                <p className="text-orange-700 text-sm"><span className="font-bold text-lg">40%</span> di energia da fonti rinnovabili sui consumi finali lordi</p>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h5 className="font-bold text-red-800 mb-2">Riduzione Emissioni</h5>
                <p className="text-red-700 text-sm">Riduzione del <span className="font-bold text-lg">55%</span> delle emissioni di gas serra rispetto al 1990</p>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h5 className="font-bold text-blue-800 mb-2">Riqualificazione Pubblica</h5>
                <p className="text-blue-700 text-sm">Almeno <span className="font-bold text-lg">3%</span> annuo di riqualificazione energetica degli edifici pubblici</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sezione 10 - Attenzione Strategica */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">10. L'Attenzione Strategica per Imprese e Pubblica Amministrazione</h3>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Una delle caratteristiche più distintive del nuovo decreto è l'attenzione particolare riservata al mondo produttivo e alla pubblica amministrazione. Questa scelta deriva da una precisa analisi degli impatti potenziali:
          </p>

          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">10.1 Effetto Moltiplicatore Economico</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                Le imprese, in particolare quelle di medie e grandi dimensioni, dispongono di capacità di investimento e know-how tecnico che consentono di realizzare interventi di ampia portata, generando effetti moltiplicatori sull'intera filiera produttiva.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">10.2 Ruolo di Leadership Territoriale</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                Le pubbliche amministrazioni, soprattutto i comuni, svolgono una funzione di leadership territoriale nella transizione energetica. Gli interventi sul patrimonio pubblico fungono da catalizzatori per iniziative analoghe da parte di privati e imprese locali.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">10.3 Capacità di Innovazione Tecnologica</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                Il settore terziario e quello pubblico sono spesso early adopter di tecnologie innovative, accelerando il processo di maturazione tecnologica e la riduzione dei costi.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">10.4 Impatto sulla Qualità dei Servizi</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                La riqualificazione energetica non produce solo benefici ambientali ed economici, ma si traduce in un miglioramento qualitativo dei servizi erogati.
              </p>
            </div>
          </div>
        </div>

        {/* Sezione 11 - Principi Fondamentali */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">11. I Principi Fondamentali della Nuova Disciplina</h3>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Il Conto Termico 3.0 si fonda su quattro pilastri strategici:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 className="text-xl font-bold text-blue-800 mb-4">11.1 Semplificazione</h4>
              <ul className="space-y-2 text-blue-700 text-sm">
                <li><strong>Digitalizzazione Integrale:</strong> Il nuovo Portaltermico diventa il punto di accesso unico</li>
                <li><strong>Catalogo Apparecchi:</strong> Per interventi di piccola taglia con procedure precompilate</li>
                <li><strong>Procedure Differenziate:</strong> Percorsi specifici per tipologia di soggetto</li>
                <li><strong>Integrazione Sistemi:</strong> Connessione con banche dati esistenti (Agenzia Entrate, INVITALIA)</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h4 className="text-xl font-bold text-green-800 mb-4">11.2 Efficacia</h4>
              <ul className="space-y-2 text-green-700 text-sm">
                <li><strong>Requisiti Prestazionali Stringenti:</strong> Innalzamento dei requisiti minimi di prestazione</li>
                <li><strong>Coefficienti di Premialità:</strong> Sistema che premia le tecnologie più avanzate</li>
                <li><strong>Monitoraggio Sistematico:</strong> Obblighi di reportistica per valutazione continua</li>
                <li><strong>Building Automation:</strong> Integrazione con sistemi di gestione energetica</li>
              </ul>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h4 className="text-xl font-bold text-orange-800 mb-4">11.3 Diversificazione</h4>
              <ul className="space-y-2 text-orange-700 text-sm">
                <li><strong>Tecnologie Emergenti:</strong> Sistemi di accumulo, pompe di calore ad alta temperatura, sistemi ibridi</li>
                <li><strong>Approccio Multi-Tecnologico:</strong> Incentivazione di interventi combinati</li>
                <li><strong>Flessibilità Territoriale:</strong> Adattamento alle specifiche caratteristiche locali</li>
                <li><strong>Economia Circolare:</strong> Possibilità di utilizzare componenti ricondizionati certificati</li>
              </ul>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h4 className="text-xl font-bold text-purple-800 mb-4">11.4 Innovazione Tecnologica</h4>
              <ul className="space-y-2 text-purple-700 text-sm">
                <li><strong>R&D:</strong> Maggiorazioni per tecnologie innovative e componenti UE</li>
                <li><strong>Building Automation:</strong> Promozione sistemi di controllo intelligente</li>
                <li><strong>Mobilità Elettrica:</strong> Incentivi per infrastrutture di ricarica integrate</li>
                <li><strong>Sistemi di Accumulo:</strong> Promozione accumulo termico ed elettrico</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sezione 12 - Budget */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">12. Budget e Dotazione Finanziaria</h3>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Il Conto Termico 3.0 dispone di una dotazione annuale di 900 milioni di euro, così ripartita:
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
            <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Ripartizione Budget Annuale</h4>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-blue-100 rounded-lg">
                <span className="font-semibold text-blue-800">Amministrazioni Pubbliche</span>
                <span className="font-bold text-blue-900 text-lg">400 milioni €/anno</span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-green-100 rounded-lg">
                <span className="font-semibold text-green-800">Soggetti Privati</span>
                <span className="font-bold text-green-900 text-lg">500 milioni €/anno</span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-orange-100 rounded-lg">
                <span className="font-semibold text-orange-800">Diagnosi Energetiche</span>
                <span className="font-bold text-orange-900 text-lg">20 milioni €/anno</span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-purple-100 rounded-lg">
                <span className="font-semibold text-purple-800">Imprese (limite specifico)</span>
                <span className="font-bold text-purple-900 text-lg">150 milioni €/anno</span>
              </div>
              
              <div className="border-t-2 border-gray-300 pt-3 mt-4">
                <div className="flex justify-between items-center p-3 bg-gray-200 rounded-lg">
                  <span className="font-bold text-gray-800 text-lg">TOTALE ANNUALE</span>
                  <span className="font-bold text-gray-900 text-xl">900 milioni €</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-4">12.1 Meccanismo di Aggiornamento</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              Il decreto prevede aggiornamenti periodici con decreto ministeriale, previa intesa con la Conferenza Unificata, per:
            </p>
            
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Adeguare i valori degli incentivi all'evoluzione del mercato</li>
              <li>Introdurre nuove tecnologie</li>
              <li>Modificare i requisiti tecnici in base all'esperienza applicativa</li>
              <li>Ottimizzare l'efficacia dello strumento</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
