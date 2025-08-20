export default function Section02() {
  return (
    <section id="sezione-2" className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
      <div className="mb-8">
        <span className="text-green-600 font-bold text-lg">PARTE 2</span>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">Soggetti Beneficiari e Categorie Catastali</h2>
        <div className="w-16 h-1 bg-green-600 mt-3"></div>
      </div>
      
      <div className="prose max-w-none space-y-8">
        {/* Sezione 13 - Soggetti Beneficiari */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">13. Soggetti Beneficiari: Chi Può Accedere agli Incentivi</h3>
          
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">13.1 Amministrazioni Pubbliche: Il Cuore del Sistema Incentivante</h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              Le amministrazioni pubbliche rappresentano il soggetto privilegiato del nuovo Conto Termico, beneficiando di condizioni particolarmente favorevoli che riconoscono il loro ruolo strategico nella transizione energetica.
            </p>

            <div className="mb-6">
              <h5 className="text-lg font-medium text-gray-800 mb-4">13.1.1 Perimetro delle Amministrazioni Pubbliche</h5>
              <p className="text-gray-700 leading-relaxed mb-4">
                Il decreto adotta una definizione estremamente ampia di amministrazione pubblica, includendo:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h6 className="font-bold text-blue-800 mb-3">Amministrazioni Centrali e Territoriali</h6>
                  <ul className="space-y-1 text-blue-700 text-sm">
                    <li><strong>Amministrazioni dello Stato:</strong> Ministeri, agenzie fiscali, enti pubblici non economici</li>
                    <li><strong>Regioni e Province Autonome:</strong> Con relativi enti e agenzie regionali</li>
                    <li><strong>Province e Città Metropolitane:</strong> Inclusi gli enti del sistema provinciale</li>
                    <li><strong>Comuni:</strong> Di qualsiasi dimensione demografica</li>
                    <li><strong>Unioni di Comuni e Comunità Montane:</strong> Forme associative territoriali</li>
                    <li><strong>Camere di Commercio:</strong> E relativi enti del sistema camerale</li>
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h6 className="font-bold text-green-800 mb-3">Enti Specializzati e Autorità</h6>
                  <ul className="space-y-1 text-green-700 text-sm">
                    <li><strong>Enti Pubblici Economici:</strong> Nonostante svolgano attività economiche</li>
                    <li><strong>Autorità di Sistema Portuale:</strong> Per il loro ruolo nelle infrastrutture</li>
                    <li><strong>Ex IACP trasformati:</strong> Istituti autonomi case popolari comunque denominati</li>
                  </ul>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 md:col-span-2">
                  <h6 className="font-bold text-orange-800 mb-3">Soggetti Assimilati</h6>
                  <ul className="space-y-1 text-orange-700 text-sm">
                    <li><strong>Cooperative di Abitanti:</strong> Iscritte all'Albo nazionale ex art. 13 L. 59/1992</li>
                    <li><strong>Enti dell'Elenco ISTAT:</strong> Secondo art. 1, c.3, L. 196/2009</li>
                    <li><strong>Società In House:</strong> Che realizzano interventi su immobili controllanti</li>
                    <li><strong>Concessionari:</strong> Che gestiscono servizi pubblici su immobili di enti territoriali</li>
                    <li><strong>Cooperative Sociali:</strong> Ex L. 381/1991 iscritte agli albi regionali</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h5 className="text-lg font-medium text-gray-800 mb-4">13.1.2 Facilitazioni per Piccoli Comuni (≤15.000 abitanti)</h5>
              <p className="text-gray-700 leading-relaxed mb-4">
                I piccoli comuni beneficiano di un regime particolarmente favorevole:
              </p>

              <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-4">
                <h6 className="font-bold text-green-800 mb-3">Incentivo al 100%</h6>
                <ul className="space-y-2 text-green-700 text-sm">
                  <li>Copertura totale delle spese ammissibili (vs 65% per altri soggetti)</li>
                  <li>Applicabile a tutti gli interventi incentivabili</li>
                  <li>Valido anche per edifici ex art. 48-ter DL 104/2020</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h6 className="font-bold text-blue-800 mb-2">Procedure Semplificate</h6>
                  <ul className="space-y-1 text-blue-700 text-sm">
                    <li>Modulistica ridotta e tempi accelerati</li>
                    <li>Supporto tecnico GSE per progettazione</li>
                    <li>Priorità nell'assegnazione risorse</li>
                  </ul>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h6 className="font-bold text-purple-800 mb-2">Modalità di Erogazione Speciali</h6>
                  <ul className="space-y-1 text-purple-700 text-sm">
                    <li>Anticipo maggiorato: Fino al 100%</li>
                    <li>Flessibilità procedurale adattata</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">13.2 Soggetti Privati: Focus su Terziario e Imprese</h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              I soggetti privati mantengono un ruolo importante ma con perimetro più focalizzato rispetto al passato.
            </p>

            <div className="mb-6">
              <h5 className="text-lg font-medium text-gray-800 mb-4">13.2.1 Ambiti di Intervento per Privati</h5>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h6 className="font-bold text-red-800 mb-2">Efficienza Energetica</h6>
                  <ul className="space-y-1 text-red-700 text-sm">
                    <li><strong>Solo edifici terziario:</strong> Categoria catastale A/10, gruppi B, C, D, E (con esclusioni)</li>
                    <li><strong>Esclusione ambito residenziale:</strong> Per concentrare risorse su maggiore impatto</li>
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h6 className="font-bold text-green-800 mb-2">Produzione Energia Termica</h6>
                  <ul className="space-y-1 text-green-700 text-sm">
                    <li><strong>Edifici terziario E residenziale:</strong> Ambito più ampio per le rinnovabili termiche</li>
                    <li><strong>Incentivazione trasversale:</strong> Su tutte le tipologie di edifici privati</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h5 className="text-lg font-medium text-gray-800 mb-4">13.2.2 Definizione di Impresa</h5>
              <p className="text-gray-700 leading-relaxed mb-4">
                Il decreto adotta la definizione europea di impresa: <em>"qualsiasi entità che eserciti un'attività economica, indipendentemente dalla forma giuridica"</em>
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h6 className="font-bold text-blue-800 mb-3">Tipologie Incluse</h6>
                  <ul className="space-y-1 text-blue-700 text-sm">
                    <li><strong>Imprese Individuali:</strong> Incluse attività familiari</li>
                    <li><strong>Società di Persone:</strong> Che esercitano attività economica</li>
                    <li><strong>Forme Aggregate:</strong> ATI, RTI, società di scopo, consorzi</li>
                    <li><strong>Qualsiasi Forma Giuridica:</strong> Purché svolgano attività economica</li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h6 className="font-bold text-red-800 mb-3">Esclusioni Specifiche</h6>
                  <ul className="space-y-1 text-red-700 text-sm">
                    <li><strong>Imprese in Difficoltà:</strong> Secondo definizione Commissione UE</li>
                    <li><strong>Imprese con Ordini di Recupero:</strong> Da precedenti decisioni della Commissione</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h5 className="text-lg font-medium text-gray-800 mb-4">13.2.3 Settori Specializzati</h5>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h6 className="font-bold text-green-800 mb-3">Aziende Agricole</h6>
                  <ul className="space-y-1 text-green-700 text-sm">
                    <li><strong>Definizione:</strong> Titolari di qualifica IAP ex D.Lgs. 99/2004</li>
                    <li><strong>Facilitazioni:</strong> Installazione ex-novo per biomassa su serre e fabbricati rurali</li>
                    <li><strong>Zone non metanizzate:</strong> Sostituzione GPL con biomassa ammessa</li>
                  </ul>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h6 className="font-bold text-orange-800 mb-3">Imprese Forestali</h6>
                  <ul className="space-y-1 text-orange-700 text-sm">
                    <li><strong>Codici ATECO:</strong> 02.10.00 (silvicoltura) e 02.20.00 (utilizzo aree forestali)</li>
                    <li><strong>Stesso regime:</strong> Delle aziende agricole</li>
                    <li><strong>Focus sostenibilità:</strong> Gestione responsabile risorse forestali</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">13.3 Enti del Terzo Settore: Il Ponte tra Pubblico e Privato</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              Gli enti del terzo settore ex D.Lgs. 117/2017 sono assimilati alle amministrazioni pubbliche se:
            </p>
            
            <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
              <ul className="space-y-1 text-purple-700 text-sm">
                <li>Non svolgono attività economica</li>
                <li>Iscritti al Registro Unico Nazionale del Terzo Settore</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h5 className="font-bold text-gray-800 mb-3">Vantaggi dell'Assimilazione</h5>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li><strong>Regime PA:</strong> Incentivi maggiorati e procedure semplificate</li>
                <li><strong>Accesso prenotazione:</strong> Per interventi programmati</li>
                <li><strong>Esenzione aiuti di Stato:</strong> Non applicazione normativa UE</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sezione 14 - Categorie Catastali */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">14. Categorie Catastali Ammissibili: La Mappa degli Edifici Incentivabili</h3>
          
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">14.1 Ambito Residenziale: Perimetro Tradizionale</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              Gli edifici ammessi nell'ambito residenziale appartengono al <strong>Gruppo A (escluse classi A/8, A/9, A/10)</strong>
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <h5 className="font-bold text-blue-800 mb-3">14.1.1 Categorie Incluse</h5>
              <div className="grid md:grid-cols-2 gap-2 text-blue-700 text-sm">
                <div>
                  <ul className="space-y-1">
                    <li><strong>A/1:</strong> Abitazioni di tipo signorile</li>
                    <li><strong>A/2:</strong> Abitazioni di tipo civile</li>
                    <li><strong>A/3:</strong> Abitazioni di tipo economico</li>
                    <li><strong>A/4:</strong> Abitazioni di tipo popolare</li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-1">
                    <li><strong>A/5:</strong> Abitazioni di tipo ultrapopolare</li>
                    <li><strong>A/6:</strong> Abitazioni di tipo rurale</li>
                    <li><strong>A/7:</strong> Abitazioni in villini</li>
                    <li><strong>A/11:</strong> Abitazioni e alloggi tipici dei luoghi</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">14.2 Ambito Terziario: Il Cuore del Nuovo Conto Termico</h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              Il settore terziario rappresenta il focus principale del decreto, con un perimetro molto ampio che include:
            </p>

            <div className="space-y-4">
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h5 className="font-bold text-orange-800 mb-2">Gruppo A - Uffici</h5>
                <p className="text-orange-700 text-sm"><strong>A/10:</strong> Uffici e studi privati</p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h5 className="font-bold text-green-800 mb-3">Gruppo B - Edifici Collettivi e Istituzionali</h5>
                <div className="text-green-700 text-sm">
                  <p><strong>B/1:</strong> Collegi, convitti, educandati, ricoveri, orfanotrofi, ospizi, conventi, seminari</p>
                  <p><strong>B/2:</strong> Case di cura e ospedali senza fine di lucro</p>
                  <p><strong>B/3:</strong> Prigioni e riformatori</p>
                  <p><strong>B/4:</strong> Uffici pubblici</p>
                  <p><strong>B/5:</strong> Scuole e laboratori scientifici</p>
                  <p><strong>B/6:</strong> Biblioteche, musei, gallerie, accademie senza fine di lucro</p>
                  <p><strong>B/7:</strong> Cappelle ed oratori non destinati al culto pubblico</p>
                  <p><strong>B/8:</strong> Magazzini sotterranei per depositi di derrate</p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h5 className="font-bold text-blue-800 mb-3">Gruppo C - Attività Commerciali e Artigianali (esclusi C/6, C/7)</h5>
                <div className="text-blue-700 text-sm">
                  <p><strong>C/1:</strong> Negozi e botteghe</p>
                  <p><strong>C/2:</strong> Magazzini e locali di deposito</p>
                  <p><strong>C/3:</strong> Laboratori per arti e mestieri</p>
                  <p><strong>C/4:</strong> Fabbricati e locali per esercizi sportivi senza fine di lucro</p>
                  <p><strong>C/5:</strong> Stabilimenti balneari e di acque curative</p>
                  <p><strong>C/8:</strong> Fabbricati e locali per spettacoli e trattenimenti</p>
                </div>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h5 className="font-bold text-purple-800 mb-3">Gruppo D - Attività Economiche (escluso D/9)</h5>
                <div className="text-purple-700 text-sm">
                  <p><strong>D/1:</strong> Opifici | <strong>D/2:</strong> Alberghi e pensioni con fine di lucro</p>
                  <p><strong>D/3:</strong> Teatri, cinema, sale per concerti e spettacoli</p>
                  <p><strong>D/4:</strong> Case di cura e ospedali con fine di lucro</p>
                  <p><strong>D/5:</strong> Istituti di credito, cambio e assicurazione</p>
                  <p><strong>D/6:</strong> Fabbricati e locali per esercizi sportivi con fine di lucro</p>
                  <p><strong>D/7:</strong> Fabbricati per attività industriali</p>
                  <p><strong>D/8:</strong> Fabbricati per attività commerciali</p>
                  <p><strong>D/10:</strong> Fabbricati per funzioni produttive connesse ad attività agricole</p>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h5 className="font-bold text-gray-800 mb-3">Gruppo E - Servizi Pubblici (esclusi E/2, E/4, E/6)</h5>
                <div className="text-gray-700 text-sm">
                  <p><strong>E/1:</strong> Stazioni per servizi di trasporto</p>
                  <p><strong>E/3:</strong> Costruzioni per speciali esigenze pubbliche</p>
                  <p><strong>E/5:</strong> Fortificazioni e dipendenze</p>
                  <p><strong>E/7:</strong> Fabbricati destinati all'esercizio pubblico dei culti</p>
                  <p><strong>E/8:</strong> Fabbricati e costruzioni nei cimiteri</p>
                  <p><strong>E/9:</strong> Edifici a destinazione particolare non classificati altrove</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">14.3 Categorie Esplicitamente Escluse</h4>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="grid md:grid-cols-3 gap-4 text-red-700 text-sm">
                <div>
                  <h5 className="font-bold text-red-800 mb-2">Gruppo C</h5>
                  <p><strong>C/6:</strong> Stalle, scuderie, rimesse, autorimesse</p>
                  <p><strong>C/7:</strong> Tettoie chiuse o aperte</p>
                </div>
                <div>
                  <h5 className="font-bold text-red-800 mb-2">Gruppo D</h5>
                  <p><strong>D/9:</strong> Edifici galleggianti o sospesi ancorati a punti fissi</p>
                </div>
                <div>
                  <h5 className="font-bold text-red-800 mb-2">Gruppo E</h5>
                  <p><strong>E/2:</strong> Ponti comunali e provinciali soggetti a pedaggio</p>
                  <p><strong>E/4:</strong> Recinti chiusi per speciali esigenze pubbliche</p>
                  <p><strong>E/6:</strong> Fari, semafori, torri per servizi pubblici</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">14.4 Edifici con Categorie Catastali Miste</h4>
            
            <div className="mb-4">
              <h5 className="text-lg font-medium text-gray-800 mb-3">14.4.1 Criterio di Prevalenza</h5>
              <p className="text-gray-700 leading-relaxed mb-4">
                Per edifici caratterizzati da categorie catastali miste (residenziale + terziario):
              </p>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <ul className="space-y-1 text-yellow-800 text-sm">
                  <li><strong>Calcolo in base ai millesimi:</strong> L'ambito è determinato dalla categoria prevalente</li>
                  <li><strong>Interventi su parti comuni:</strong> Seguono l'ambito prevalente dell'edificio</li>
                  <li><strong>Interventi su singole unità:</strong> Seguono la categoria specifica dell'unità</li>
                </ul>
              </div>
            </div>

            <div>
              <h5 className="text-lg font-medium text-gray-800 mb-3">14.4.2 Gestione Operativa</h5>
              <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                <li><strong>Documentazione catastale:</strong> Necessaria per determinare la prevalenza</li>
                <li><strong>Asseverazione tecnica:</strong> Per interventi complessi su edifici misti</li>
                <li><strong>Calcolo degli incentivi:</strong> Differenziato per ambito di appartenenza</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sezione 15 - Requisiti Generali */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">15. Requisiti Generali di Ammissibilità</h3>
          
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="text-xl font-semibold text-blue-800 mb-3">15.1 Esistenza dell'Edificio</h4>
              <ul className="space-y-1 text-blue-700 text-sm">
                <li><strong>Edifici esistenti:</strong> Iscritti al catasto edilizio urbano</li>
                <li><strong>Esclusione categoria F:</strong> Edifici in costruzione non ammessi</li>
                <li><strong>Data di iscrizione:</strong> Antecedente alla richiesta di incentivo</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="text-xl font-semibold text-green-800 mb-3">15.2 Impianto di Climatizzazione</h4>
              <ul className="space-y-1 text-green-700 text-sm">
                <li><strong>Presenza obbligatoria:</strong> Impianto di climatizzazione invernale esistente</li>
                <li><strong>Registrazione catasti regionali:</strong> Ove presenti</li>
                <li><strong>Compatibilità tecnica:</strong> Con interventi di sostituzione previsti</li>
              </ul>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="text-xl font-semibold text-orange-800 mb-3">15.3 Disponibilità Giuridica</h4>
              <ul className="space-y-1 text-orange-700 text-sm">
                <li><strong>Titolo di disponibilità:</strong> Proprietà o diritto reale/personale di godimento</li>
                <li><strong>Documentazione:</strong> Contratti, atti notarili, autorizzazioni</li>
                <li><strong>Soggetto responsabile:</strong> Deve avere piena disponibilità dell'edificio</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
