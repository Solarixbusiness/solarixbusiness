export default function Section06() {
  return (
    <section id="sezione-6" className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
      <div className="mb-6">
        <span className="text-green-600 font-bold text-lg">PARTE 6</span>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">Procedure di Accesso e Gestione Contrattuale</h2>
        <div className="w-16 h-1 bg-green-600 mt-3"></div>
      </div>
      
      <div className="prose max-w-none">
        {/* Sezione 44: Architettura delle Procedure di Accesso */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-800 mb-6">44. ARCHITETTURA DELLE PROCEDURE DI ACCESSO</h3>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h4 className="text-xl font-semibold text-blue-800 mb-4">44.1 Due Modalità Alternative di Accesso</h4>
            
            <p className="text-gray-700 mb-4">
              Il Conto Termico 3.0 introduce un sistema duale di accesso agli incentivi, progettato per soddisfare 
              le diverse esigenze operative dei soggetti beneficiari:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white border border-blue-200 rounded p-4">
                <div className="font-semibold text-blue-800 mb-2">Accesso Diretto</div>
                <p className="text-sm text-blue-700">Per interventi già realizzati</p>
              </div>
              
              <div className="bg-white border border-blue-200 rounded p-4">
                <div className="font-semibold text-blue-800 mb-2">Accesso tramite Prenotazione</div>
                <p className="text-sm text-blue-700">Per interventi da realizzare</p>
              </div>
            </div>
            
            <div className="bg-blue-100 border border-blue-300 rounded p-4">
              <div className="font-semibold text-blue-800 mb-2">Vantaggio Strategico:</div>
              <p className="text-sm text-blue-700">
                Questa dualità garantisce flessibilità operativa massima, consentendo sia la valorizzazione 
                di investimenti già effettuati sia la programmazione strategica di interventi futuri con certezza finanziaria.
              </p>
            </div>
          </div>
        </div>

        {/* Sezione 45: Accesso Diretto */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-800 mb-6">45. ACCESSO DIRETTO: SEMPLICITÀ E VELOCITÀ</h3>
          
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-green-800 mb-4">45.1 Caratteristiche Generali</h4>
              
              <div className="space-y-4">
                <div className="bg-white border border-green-200 rounded p-4">
                  <div className="font-semibold text-green-800 mb-2">45.1.1 Tempistica di Presentazione</div>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li><strong>Termine:</strong> 90 giorni dalla conclusione dell'intervento</li>
                    <li><strong>Sanzione:</strong> Non ammissibilità oltre il termine</li>
                    <li><strong>Calcolo:</strong> Dalla data di collaudo (PA) o ultimazione lavori</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-green-200 rounded p-4">
                  <div className="font-semibold text-green-800 mb-2">45.1.2 Dilazione Pagamenti</div>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li><strong>Standard:</strong> Massimo 120 giorni</li>
                    <li><strong>Esclusioni:</strong> Prestazioni professionali (diagnosi, APE)</li>
                    <li><strong>Privati - deroga:</strong> Dilazione superiore se ultima quota {'>'} 10% spesa totale</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-green-100 border border-green-300 rounded p-4 mt-4">
                <div className="font-semibold text-green-800 mb-2">Spiegazione Tempistiche:</div>
                <ul className="text-sm text-green-700 space-y-1">
                  <li><strong>90 giorni:</strong> Termine perentorio per presentazione domanda</li>
                  <li><strong>120 giorni:</strong> Massima dilazione consentita per pagamenti</li>
                  <li><strong>Deroga privati:</strong> Se ultima rata supera 10% del totale, dilazione estendibile</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-yellow-800 mb-4">45.2 Procedura Operativa</h4>
              
              <div className="space-y-4">
                <div className="bg-white border border-yellow-200 rounded p-4">
                  <div className="font-semibold text-yellow-800 mb-2">45.2.1 Step 1: Preparazione Documentazione</div>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Raccolta fatture e documentazione tecnica</li>
                    <li>• Redazione diagnosi/APE (se obbligatori)</li>
                    <li>• Asseverazioni tecniche</li>
                    <li>• Dichiarazioni di conformità</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-yellow-200 rounded p-4">
                  <div className="font-semibold text-yellow-800 mb-2">45.2.2 Step 2: Compilazione Scheda-Domanda</div>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Accesso esclusivo tramite Portaltermico</li>
                    <li>• Caricamento documenti allegati</li>
                    <li>• Verifica automatica requisiti minimi</li>
                    <li>• Sottoscrizione digitale</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-yellow-200 rounded p-4">
                  <div className="font-semibold text-yellow-800 mb-2">45.2.3 Step 3: Istruttoria GSE</div>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Controllo completezza formale</li>
                    <li>• Verifica automatica requisiti</li>
                    <li>• Eventuale richiesta integrazioni</li>
                    <li>• Emissione provvedimento di ammissione</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-yellow-200 rounded p-4">
                  <div className="font-semibold text-yellow-800 mb-2">45.2.4 Step 4: Erogazione</div>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li><strong>Privati ≤15.000€:</strong> Unica soluzione</li>
                    <li><strong>Privati {'>'} 15.000€:</strong> Rate annuali</li>
                    <li><strong>PA:</strong> Unica soluzione</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-yellow-100 border border-yellow-300 rounded p-4 mt-4">
                <div className="font-semibold text-yellow-800 mb-2">Portaltermico:</div>
                <p className="text-sm text-yellow-700">
                  Piattaforma digitale GSE dedicata esclusivamente alle pratiche Conto Termico. 
                  Garantisce tracciabilità completa e verifica automatica dei requisiti.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sezione 46: Accesso tramite Prenotazione */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-800 mb-6">46. ACCESSO TRAMITE PRENOTAZIONE: PROGRAMMAZIONE STRATEGICA</h3>
          
          <div className="space-y-6">
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-purple-800 mb-4">46.1 Soggetti Ammessi alla Prenotazione</h4>
              
              <div className="bg-white border border-purple-200 rounded p-4 mb-4">
                <div className="font-semibold text-purple-800 mb-2">46.1.1 Limitazione Soggettiva</div>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li><strong>Esclusivamente:</strong> Amministrazioni Pubbliche (art. 4, lett. a)</li>
                  <li><strong>Tramite ESCO:</strong> ESCO qualificata UNI CEI 11352 come Soggetto Responsabile</li>
                  <li><strong>Obiettivo:</strong> Sicurezza finanziaria per investimenti programmati</li>
                </ul>
              </div>
              
              <div className="bg-purple-100 border border-purple-300 rounded p-4">
                <div className="font-semibold text-purple-800 mb-2">Spiegazione Limitazione:</div>
                <p className="text-sm text-purple-700">
                  Solo le PA possono prenotare incentivi per garantire stabilità degli investimenti pubblici. 
                  Le ESCO qualificate UNI CEI 11352 possono operare come Soggetto Responsabile per conto delle PA.
                </p>
              </div>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-indigo-800 mb-4">46.2 Condizioni di Accesso alla Prenotazione</h4>
              
              <div className="space-y-4">
                <div className="bg-white border border-indigo-200 rounded p-4">
                  <div className="font-semibold text-indigo-800 mb-2">46.2.1 Opzione 1: Diagnosi + Atto Amministrativo</div>
                  <ul className="text-sm text-indigo-700 space-y-1">
                    <li><strong>Diagnosi energetica:</strong> Conforme UNI CEI EN 16247</li>
                    <li><strong>Atto amministrativo:</strong> Impegno esecuzione interventi</li>
                    <li><strong>Schema contratto:</strong> ESCO (se previsto)</li>
                    <li><strong>Deroga calamità:</strong> Progetto esecutivo in sostituzione diagnosi</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-indigo-200 rounded p-4">
                  <div className="font-semibold text-indigo-800 mb-2">46.2.2 Opzione 2: Contratto ESCO Attivo</div>
                  <ul className="text-sm text-indigo-700 space-y-1">
                    <li><strong>ESCO Soggetto Responsabile:</strong> Contratto prestazione energetica stipulato</li>
                    <li><strong>Qualificazione:</strong> UNI CEI 11352 in corso validità</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-indigo-200 rounded p-4">
                  <div className="font-semibold text-indigo-800 mb-2">46.2.3 Opzione 3: Contratto Integrato</div>
                  <ul className="text-sm text-indigo-700 space-y-1">
                    <li><strong>PA Soggetto Responsabile:</strong> Contratto fornitura integrata firmato</li>
                    <li><strong>Efficacia immediata:</strong> Dalla data riconoscimento prenotazione GSE</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-indigo-200 rounded p-4">
                  <div className="font-semibold text-indigo-800 mb-2">46.2.4 Opzione 4: Lavori Assegnati</div>
                  <ul className="text-sm text-indigo-700 space-y-1">
                    <li><strong>Aggiudicazione:</strong> Provvedimento assegnazione lavori</li>
                    <li><strong>Verbale consegna:</strong> Redatto secondo D.Lgs. 36/2023</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-indigo-100 border border-indigo-300 rounded p-4 mt-4">
                <div className="font-semibold text-indigo-800 mb-2">Spiegazione Opzioni:</div>
                <ul className="text-sm text-indigo-700 space-y-1">
                  <li><strong>UNI CEI EN 16247:</strong> Standard europeo per diagnosi energetiche</li>
                  <li><strong>UNI CEI 11352:</strong> Norma italiana per qualificazione ESCO</li>
                  <li><strong>D.Lgs. 36/2023:</strong> Codice dei contratti pubblici</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-red-800 mb-4">46.3 Contingente Riservato Prenotazioni</h4>
              
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-white border border-red-200 rounded p-4">
                  <div className="font-semibold text-red-800 mb-2">Limite Finanziario</div>
                  <p className="text-lg font-bold text-red-700">50% budget PA</p>
                  <p className="text-sm text-red-700">Massimo 200 M€/anno</p>
                </div>
                
                <div className="bg-white border border-red-200 rounded p-4">
                  <div className="font-semibold text-red-800 mb-2">Gestione Code</div>
                  <p className="text-sm text-red-700">Accettazione fino al 60° giorno successivo raggiungimento soglia</p>
                </div>
                
                <div className="bg-white border border-red-200 rounded p-4">
                  <div className="font-semibold text-red-800 mb-2">Monitoraggio</div>
                  <p className="text-sm text-red-700">Aggiornamento continuo su sito GSE</p>
                </div>
              </div>
              
              <div className="bg-red-100 border border-red-300 rounded p-4">
                <div className="font-semibold text-red-800 mb-2">Meccanismo Contingente:</div>
                <p className="text-sm text-red-700">
                  Il 50% del budget PA (200 M€) è riservato alle prenotazioni. Una volta raggiunta la soglia, 
                  le domande vengono accettate per altri 60 giorni per gestire eventuali code.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sezione 47: Gestione Temporale delle Prenotazioni */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-800 mb-6">47. GESTIONE TEMPORALE DELLE PRENOTAZIONI</h3>
          
          <div className="space-y-6">
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-orange-800 mb-4">47.1 Tempistiche Realizzazione - Standard</h4>
              
              <div className="space-y-4">
                <div className="bg-white border border-orange-200 rounded p-4">
                  <div className="font-semibold text-orange-800 mb-2">47.1.1 Diagnosi + Atto Amministrativo:</div>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li><strong>Avvio lavori:</strong> 18 mesi da accettazione prenotazione</li>
                    <li><strong>Conclusione:</strong> 12 mesi da comunicazione avvio (36 mesi per NZEB)</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-orange-200 rounded p-4">
                  <div className="font-semibold text-orange-800 mb-2">47.1.2 Altri casi:</div>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li><strong>Avvio lavori:</strong> 90 giorni da accettazione prenotazione</li>
                    <li><strong>Conclusione:</strong> 12 mesi da comunicazione avvio (36 mesi per NZEB)</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-orange-100 border border-orange-300 rounded p-4 mt-4">
                <div className="font-semibold text-orange-800 mb-2">Spiegazione NZEB:</div>
                <p className="text-sm text-orange-700">
                  <strong>NZEB (Nearly Zero Energy Building):</strong> Edifici ad energia quasi zero. 
                  Richiedono tempi più lunghi (36 mesi) per la complessità degli interventi di riqualificazione profonda.
                </p>
              </div>
            </div>

            <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-teal-800 mb-4">47.2 Tempistiche Speciali - Uffici Ricostruzione</h4>
              
              <div className="bg-white border border-teal-200 rounded p-4 mb-4">
                <ul className="text-sm text-teal-700 space-y-1">
                  <li><strong>Avvio lavori:</strong> 18 mesi da accettazione</li>
                  <li><strong>Conclusione:</strong> 48 mesi da comunicazione avvio</li>
                  <li><strong>Normativa:</strong> Art. 4-quinquies DL 181/2023</li>
                </ul>
              </div>
              
              <div className="bg-teal-100 border border-teal-300 rounded p-4">
                <div className="font-semibold text-teal-800 mb-2">Uffici Ricostruzione:</div>
                <p className="text-sm text-teal-700">
                  Uffici speciali per la ricostruzione post-sisma. Tempi estesi (48 mesi) per la complessità 
                  degli interventi in zone colpite da eventi sismici.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">47.3 Conseguenze Mancato Rispetto</h4>
              
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-white border border-gray-200 rounded p-4">
                  <div className="font-semibold text-gray-800 mb-2">Decadenza automatica</div>
                  <p className="text-sm text-gray-700">Dal diritto alla prenotazione</p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded p-4">
                  <div className="font-semibold text-gray-800 mb-2">Recupero acconti</div>
                  <p className="text-sm text-gray-700">Somme già erogate</p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded p-4">
                  <div className="font-semibold text-gray-800 mb-2">Esclusione forza maggiore</div>
                  <p className="text-sm text-gray-700">Eventi calamitosi attestati</p>
                </div>
              </div>
              
              <div className="bg-gray-100 border border-gray-300 rounded p-4">
                <div className="font-semibold text-gray-800 mb-2">Sistema Sanzionatorio:</div>
                <p className="text-sm text-gray-700">
                  Il mancato rispetto delle tempistiche comporta decadenza automatica e recupero degli acconti, 
                  salvo eventi di forza maggiore debitamente attestati.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sezione 48: Catalogo Apparecchi Domestici */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-800 mb-6">48. CATALOGO APPARECCHI DOMESTICI: SEMPLIFICAZIONE OPERATIVA</h3>
          
          <div className="space-y-6">
            <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-cyan-800 mb-4">48.1 Ambito di Applicazione</h4>
              
              <div className="space-y-4">
                <div className="bg-white border border-cyan-200 rounded p-4">
                  <div className="font-semibold text-cyan-800 mb-2">48.1.1 Interventi Eligible</div>
                  <ul className="text-sm text-cyan-700 space-y-1">
                    <li><strong>Generatori:</strong> Fino a 35 kW</li>
                    <li><strong>Solare termico:</strong> Fino a 50 m²</li>
                    <li><strong>Microcogenerazione:</strong> Fino a 50 kWe</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-cyan-200 rounded p-4">
                  <div className="font-semibold text-cyan-800 mb-2">48.1.2 Vantaggi Operativi</div>
                  <ul className="text-sm text-cyan-700 space-y-1">
                    <li><strong>Precompilazione automatica:</strong> Scheda-domanda con dati tecnici</li>
                    <li><strong>Verifica automatica:</strong> Requisiti minimi prevalidati</li>
                    <li><strong>Tempi ridotti:</strong> Istruttoria accelerata</li>
                    <li><strong>Errori minimizzati:</strong> Dati certificati dal produttore</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-cyan-100 border border-cyan-300 rounded p-4 mt-4">
                <div className="font-semibold text-cyan-800 mb-2">Logica del Catalogo:</div>
                <p className="text-sm text-cyan-700">
                  Il catalogo contiene apparecchi pre-qualificati con dati tecnici certificati. 
                  Questo consente precompilazione automatica delle domande e verifica immediata dei requisiti.
                </p>
              </div>
            </div>

            <div className="bg-lime-50 border border-lime-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-lime-800 mb-4">48.2 Processo di Iscrizione al Catalogo</h4>
              
              <div className="bg-white border border-lime-200 rounded p-4 mb-4">
                <div className="font-semibold text-lime-800 mb-2">48.2.1 Responsabilità Produttori</div>
                <ul className="text-sm text-lime-700 space-y-1">
                  <li><strong>Richiesta volontaria:</strong> Iscrizione prodotti al GSE</li>
                  <li><strong>Documentazione:</strong> Certificazioni e test report</li>
                  <li><strong>Aggiornamenti:</strong> Nuovi prodotti e modifiche tecniche</li>
                  <li><strong>Valore:</strong> Esemplificativo, non esaustivo del mercato</li>
                </ul>
              </div>
              
              <div className="bg-lime-100 border border-lime-300 rounded p-4">
                <div className="font-semibold text-lime-800 mb-2">Carattere del Catalogo:</div>
                <p className="text-sm text-lime-700">
                  Il catalogo ha valore esemplificativo e non esaustivo del mercato. 
                  I produttori possono richiedere volontariamente l'iscrizione per semplificare le pratiche dei clienti.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sezione 49: Gestione tramite ESCO e Terzi */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-800 mb-6">49. GESTIONE TRAMITE ESCO E TERZI</h3>
          
          <div className="space-y-6">
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-emerald-800 mb-4">49.1 ESCO: Ruolo e Qualificazione</h4>
              
              <div className="bg-white border border-emerald-200 rounded p-4 mb-4">
                <div className="font-semibold text-emerald-800 mb-2">49.1.1 Requisiti di Qualificazione</div>
                <ul className="text-sm text-emerald-700 space-y-1">
                  <li><strong>Certificazione obbligatoria:</strong> UNI CEI 11352 in corso validità</li>
                  <li><strong>Ruolo duale:</strong> Soggetto Responsabile o Soggetto Delegato</li>
                  <li><strong>Tipologie contrattuali:</strong> Prestazione energetica o Servizio energia</li>
                </ul>
              </div>
              
              <div className="bg-emerald-100 border border-emerald-300 rounded p-4">
                <div className="font-semibold text-emerald-800 mb-2">Spiegazione UNI CEI 11352:</div>
                <p className="text-sm text-emerald-700">
                  Norma italiana che definisce i requisiti per la qualificazione delle ESCO (Energy Service Company). 
                  Garantisce competenze tecniche, economiche e organizzative per servizi di efficienza energetica.
                </p>
              </div>
            </div>

            <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-teal-800 mb-4">49.2 Modalità Operative per ESCO</h4>
              
              <div className="space-y-4">
                <div className="bg-white border border-teal-200 rounded p-4">
                  <div className="font-semibold text-teal-800 mb-2">49.2.1 Amministrazioni Pubbliche + ESCO</div>
                  <ul className="text-sm text-teal-700 space-y-1">
                    <li><strong>Garanzia solidale:</strong> Obbligazione solidale per acconti</li>
                    <li><strong>Erogazione diretta:</strong> Possibile erogazione diretta a ESCO</li>
                    <li><strong>Responsabilità PA:</strong> Sulla corretta esecuzione lavori</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-teal-200 rounded p-4">
                  <div className="font-semibold text-teal-800 mb-2">49.2.2 Soggetti Privati + ESCO</div>
                  <ul className="text-sm text-teal-700 space-y-1">
                    <li><strong>Soglie minime:</strong> {'>'} 70 kW (climatizzazione), {'>'} 20 m² (solare termico)</li>
                    <li><strong>Contratti specializzati:</strong> Prestazione energetica o Servizio energia</li>
                    <li><strong>Deroghe:</strong> Definite nelle Regole Applicative GSE</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-violet-50 border border-violet-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-violet-800 mb-4">49.3 Forme Aggregate e Partenariati</h4>
              
              <div className="space-y-4">
                <div className="bg-white border border-violet-200 rounded p-4">
                  <div className="font-semibold text-violet-800 mb-2">49.3.1 ATI/RTI</div>
                  <ul className="text-sm text-violet-700 space-y-1">
                    <li><strong>ESCO mandataria:</strong> Certificata UNI CEI 11352</li>
                    <li><strong>Mandato collettivo:</strong> Rappresentanza per Conto Termico</li>
                    <li><strong>Responsabilità solidale:</strong> Tra tutti i membri</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-violet-200 rounded p-4">
                  <div className="font-semibold text-violet-800 mb-2">49.3.2 Consorzi Stabili</div>
                  <ul className="text-sm text-violet-700 space-y-1">
                    <li><strong>ESCO consorziata:</strong> Certificazione richiesta</li>
                    <li><strong>Contratto consortile:</strong> Disciplina attività Conto Termico</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-violet-200 rounded p-4">
                  <div className="font-semibold text-violet-800 mb-2">49.3.3 Partenariato Pubblico-Privato</div>
                  <ul className="text-sm text-violet-700 space-y-1">
                    <li><strong>Esclusione sociale:</strong> Solo PPP economico ammesso</li>
                    <li><strong>Limiti di spesa:</strong> Riferiti alla quota PA</li>
                    <li><strong>Contratti long-term:</strong> Compatibili con durata incentivi</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-violet-100 border border-violet-300 rounded p-4 mt-4">
                <div className="font-semibold text-violet-800 mb-2">Spiegazione Sigle:</div>
                <ul className="text-sm text-violet-700 space-y-1">
                  <li><strong>ATI:</strong> Associazione Temporanea di Imprese</li>
                  <li><strong>RTI:</strong> Raggruppamento Temporaneo di Imprese</li>
                  <li><strong>PPP:</strong> Partenariato Pubblico-Privato (solo economico, non sociale)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Sezione 50: Sistema di Controlli e Verifiche */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-800 mb-6">50. SISTEMA DI CONTROLLI E VERIFICHE</h3>
          
          <div className="space-y-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-red-800 mb-4">50.1 Architettura del Sistema di Controllo</h4>
              
              <div className="space-y-4">
                <div className="bg-white border border-red-200 rounded p-4">
                  <div className="font-semibold text-red-800 mb-2">50.1.1 Controlli Preventivi</div>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li><strong>Verifica automatica:</strong> Requisiti minimi via sistema informatico</li>
                    <li><strong>Catalogo apparecchi:</strong> Pre-validazione tecnologie certificate</li>
                    <li><strong>Integrazione banche dati:</strong> Collegamento sistemi esistenti</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-red-200 rounded p-4">
                  <div className="font-semibold text-red-800 mb-2">50.1.2 Controlli Successivi</div>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li><strong>Campione minimo:</strong> 1% richieste ammesse annualmente</li>
                    <li><strong>Doppia modalità:</strong> Documentale + sopralluoghi in loco</li>
                    <li><strong>Tempistica:</strong> Entro 5 anni dall'ultima rata incentivo</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-orange-800 mb-4">50.2 Programma Annuale di Controlli</h4>
              
              <div className="space-y-4">
                <div className="bg-white border border-orange-200 rounded p-4">
                  <div className="font-semibold text-orange-800 mb-2">50.2.1 Criteri di Selezione</div>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li><strong>Campionamento stratificato:</strong> Per tecnologia, soggetto, importo</li>
                    <li><strong>Risk-based approach:</strong> Priorità su rischi rilevati</li>
                    <li><strong>Rotazione territoriale:</strong> Copertura omogenea nazionale</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-orange-200 rounded p-4">
                  <div className="font-semibold text-orange-800 mb-2">50.2.2 Comunicazione e Preavviso</div>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li><strong>Controlli programmati:</strong> Preavviso minimo 2 settimane</li>
                    <li><strong>Controlli senza preavviso:</strong> Per casi specifici</li>
                    <li><strong>Modalità:</strong> Raccomandata A/R o PEC</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-yellow-800 mb-4">50.3 Processo di Controllo</h4>
              
              <div className="space-y-4">
                <div className="bg-white border border-yellow-200 rounded p-4">
                  <div className="font-semibold text-yellow-800 mb-2">50.3.1 Fase Preparatoria</div>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li><strong>Richiesta documentazione:</strong> Elenco specifico per intervento</li>
                    <li><strong>Preparazione sopralluogo:</strong> Coordinamento con Soggetto Responsabile</li>
                    <li><strong>Valutazione rischi:</strong> Sicurezza operatori</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-yellow-200 rounded p-4">
                  <div className="font-semibold text-yellow-800 mb-2">50.3.2 Fase Esecutiva</div>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li><strong>Accesso impianti:</strong> Diritto/dovere di verifica</li>
                    <li><strong>Qualifica operatori:</strong> Pubblici ufficiali con riservatezza</li>
                    <li><strong>Strumentazione:</strong> Adeguata per verifiche tecniche</li>
                    <li><strong>Contraddittorio:</strong> Con Soggetto Responsabile presente</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-yellow-200 rounded p-4">
                  <div className="font-semibold text-yellow-800 mb-2">50.3.3 Documentazione Controllo</div>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li><strong>Processo verbale:</strong> Operazioni effettuate e risultanze</li>
                    <li><strong>Rilievi fotografici:</strong> Se necessari per documentazione</li>
                    <li><strong>Copia al controllato:</strong> Rilascio immediato</li>
                    <li><strong>Archiviazione:</strong> Sistema documentale GSE</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-blue-800 mb-4">50.4 Diritti del Soggetto Controllato</h4>
              
              <div className="space-y-4">
                <div className="bg-white border border-blue-200 rounded p-4">
                  <div className="font-semibold text-blue-800 mb-2">50.4.1 Diritto al Contraddittorio</div>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li><strong>Presenza obbligatoria:</strong> Durante operazioni controllo</li>
                    <li><strong>Assistenza tecnica:</strong> Possibilità consulenti specializzati</li>
                    <li><strong>Osservazioni scritte:</strong> Art. 10 L. 241/1990</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-blue-200 rounded p-4">
                  <div className="font-semibold text-blue-800 mb-2">50.4.2 Diritto di Difesa</div>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li><strong>Memorie difensive:</strong> Entro termini procedimento</li>
                    <li><strong>Documenti aggiuntivi:</strong> Se pertinenti al controllo</li>
                    <li><strong>Valutazione GSE:</strong> Obbligo valutazione elementi difensivi</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-100 border border-blue-300 rounded p-4 mt-4">
                <div className="font-semibold text-blue-800 mb-2">Art. 10 L. 241/1990:</div>
                <p className="text-sm text-blue-700">
                  Legge sul procedimento amministrativo che garantisce il diritto di partecipazione 
                  e contraddittorio nei procedimenti che possano arrecare pregiudizio.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sezione 51: Violazioni e Sanzioni */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-800 mb-6">51. VIOLAZIONI E SANZIONI</h3>
          
          <div className="space-y-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-red-800 mb-4">51.1 Categorie di Violazioni</h4>
              
              <div className="space-y-4">
                <div className="bg-white border border-red-200 rounded p-4">
                  <div className="font-semibold text-red-800 mb-2">51.1.1 Violazioni Rilevanti (art. 42 D.Lgs. 28/2011)</div>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li><strong>Dati non veritieri:</strong> Informazioni false o mendaci</li>
                    <li><strong>Documenti falsi:</strong> Contraffazione documentazione</li>
                    <li><strong>Comportamento ostativo:</strong> Diniego accesso o documentazione</li>
                    <li><strong>Componenti irregolari:</strong> Contraffatti o rubati</li>
                    <li><strong>Insussistenza requisiti:</strong> Perdita durante periodo incentivo</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-red-200 rounded p-4">
                  <div className="font-semibold text-red-800 mb-2">51.1.2 Violazioni Non Rilevanti</div>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li><strong>Errori formali:</strong> Senza impatto su quantificazione incentivi</li>
                    <li><strong>Difformità minori:</strong> Che non alterano sostanza intervento</li>
                    <li><strong>Ritardi documentali:</strong> Senza pregiudizio per controlli</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-red-100 border border-red-300 rounded p-4 mt-4">
                <div className="font-semibold text-red-800 mb-2">D.Lgs. 28/2011:</div>
                <p className="text-sm text-red-700">
                  Decreto legislativo di recepimento Direttiva 2009/28/CE sulle energie rinnovabili. 
                  L'art. 42 disciplina le sanzioni per violazioni negli schemi di incentivazione.
                </p>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-orange-800 mb-4">51.2 Misure Sanzionatorie</h4>
              
              <div className="space-y-4">
                <div className="bg-white border border-orange-200 rounded p-4">
                  <div className="font-semibold text-orange-800 mb-2">51.2.1 Violazioni Rilevanti</div>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li><strong>Rigetto istanza:</strong> Per richieste in corso</li>
                    <li><strong>Decadenza incentivi:</strong> Con recupero somme erogate</li>
                    <li><strong>Segnalazione ARERA:</strong> Per irrogazione sanzioni aggiuntive</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-orange-200 rounded p-4">
                  <div className="font-semibold text-orange-800 mb-2">51.2.2 Violazioni Non Rilevanti</div>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li><strong>Rideterminazione incentivo:</strong> In base a caratteristiche reali</li>
                    <li><strong>Recupero differenziale:</strong> Somme indebitamente erogate</li>
                    <li><strong>Diffida:</strong> Per future conformità</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-orange-100 border border-orange-300 rounded p-4 mt-4">
                <div className="font-semibold text-orange-800 mb-2">ARERA:</div>
                <p className="text-sm text-orange-700">
                  Autorità di Regolazione per Energia Reti e Ambiente. Competente per sanzioni amministrative 
                  pecuniarie aggiuntive rispetto alle misure GSE.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">51.3 Procedimento Sanzionatorio</h4>
              
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded p-4">
                  <div className="font-semibold text-gray-800 mb-2">51.3.1 Tempistiche</div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li><strong>Durata massima:</strong> 180 giorni</li>
                    <li><strong>Estensione:</strong> Per casi maggiore complessità</li>
                    <li><strong>Interruzioni:</strong> Sospensioni per forza maggiore</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-gray-200 rounded p-4">
                  <div className="font-semibold text-gray-800 mb-2">51.3.2 Atto Finale</div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li><strong>Motivazione:</strong> Specifica e dettagliata</li>
                    <li><strong>Considerazione difese:</strong> Valutazione controdeduzioni</li>
                    <li><strong>Notificazione:</strong> Modalità garantite di comunicazione</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sezione 52: Conservazione Documentale e Obblighi */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-800 mb-6">52. CONSERVAZIONE DOCUMENTALE E OBBLIGHI</h3>
          
          <div className="space-y-6">
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-indigo-800 mb-4">52.1 Durata Conservazione</h4>
              
              <div className="bg-white border border-indigo-200 rounded p-4 mb-4">
                <div className="font-semibold text-indigo-800 mb-2">52.1.1 Periodo Standard</div>
                <ul className="text-sm text-indigo-700 space-y-1">
                  <li><strong>5 anni:</strong> Dalla data ultima rata incentivo</li>
                  <li><strong>Estensione:</strong> Per procedimenti in corso</li>
                  <li><strong>Documenti originali:</strong> Fatture, ricevute, certificazioni</li>
                </ul>
              </div>
              
              <div className="bg-indigo-100 border border-indigo-300 rounded p-4">
                <div className="font-semibold text-indigo-800 mb-2">Logica Temporale:</div>
                <p className="text-sm text-indigo-700">
                  I 5 anni decorrono dall'ultima rata per coprire l'intero periodo di controlli successivi. 
                  Estensione automatica se procedimenti sanzionatori in corso.
                </p>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-purple-800 mb-4">52.2 Tipologie Documentali</h4>
              
              <div className="space-y-4">
                <div className="bg-white border border-purple-200 rounded p-4">
                  <div className="font-semibold text-purple-800 mb-2">52.2.1 Documentazione Tecnica</div>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li><strong>Certificazioni prodotto:</strong> Marcature CE, test report</li>
                    <li><strong>Asseverazioni:</strong> Professionisti qualificati</li>
                    <li><strong>Dichiarazioni conformità:</strong> Installatori abilitati</li>
                    <li><strong>Manuali tecnici:</strong> Installazione e manutenzione</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-purple-200 rounded p-4">
                  <div className="font-semibold text-purple-800 mb-2">52.2.2 Documentazione Economica</div>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li><strong>Fatture:</strong> Fornitori e installatori</li>
                    <li><strong>Ricevute pagamento:</strong> Bonifici e altre modalità</li>
                    <li><strong>Contratti:</strong> ESCO, fornitori, installatori</li>
                    <li><strong>Polizze assicurative:</strong> Se applicabili</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-purple-200 rounded p-4">
                  <div className="font-semibold text-purple-800 mb-2">52.2.3 Documentazione Specialistica</div>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li><strong>Diagnosi energetiche:</strong> Con certificazione redattore</li>
                    <li><strong>APE:</strong> Pre e post intervento</li>
                    <li><strong>Certificati manutenzione:</strong> Per impianti a biomassa</li>
                    <li><strong>Analisi combustibili:</strong> Tracciabilità qualità</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-purple-100 border border-purple-300 rounded p-4 mt-4">
                <div className="font-semibold text-purple-800 mb-2">APE:</div>
                <p className="text-sm text-purple-700">
                  <strong>Attestato di Prestazione Energetica.</strong> Documento che certifica la prestazione 
                  energetica di un edificio. Richiesto pre e post intervento per dimostrare il miglioramento.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sezione 53: Integrazione Sistemi Informativi */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-800 mb-6">53. INTEGRAZIONE SISTEMI INFORMATIVI</h3>
          
          <div className="space-y-6">
            <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-cyan-800 mb-4">53.1 Portaltermico: Hub Centrale</h4>
              
              <div className="space-y-4">
                <div className="bg-white border border-cyan-200 rounded p-4">
                  <div className="font-semibold text-cyan-800 mb-2">53.1.1 Funzionalità Integrate</div>
                  <ul className="text-sm text-cyan-700 space-y-1">
                    <li><strong>Accesso unico:</strong> Tutte le procedure tramite portale</li>
                    <li><strong>Gestione pratiche:</strong> Dalla richiesta all'erogazione</li>
                    <li><strong>Monitoraggio real-time:</strong> Stato avanzamento</li>
                    <li><strong>Comunicazioni:</strong> Bidirezionali GSE-utenti</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-cyan-200 rounded p-4">
                  <div className="font-semibold text-cyan-800 mb-2">53.1.2 Integrazioni Esterne</div>
                  <ul className="text-sm text-cyan-700 space-y-1">
                    <li><strong>Agenzia Entrate:</strong> Verifica dati catastali</li>
                    <li><strong>Istituti bancari:</strong> Validazione IBAN</li>
                    <li><strong>INVITALIA:</strong> Progetti integrati PA</li>
                    <li><strong>Anagrafica ARERA:</strong> Teleriscaldamento efficiente</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-cyan-100 border border-cyan-300 rounded p-4 mt-4">
                <div className="font-semibold text-cyan-800 mb-2">INVITALIA:</div>
                <p className="text-sm text-cyan-700">
                  Agenzia nazionale per l'attrazione degli investimenti e lo sviluppo d'impresa. 
                  Integrazione per progetti PA con finanziamenti combinati.
                </p>
              </div>
            </div>

            <div className="bg-lime-50 border border-lime-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-lime-800 mb-4">53.2 Digitalizzazione Completa</h4>
              
              <div className="space-y-4">
                <div className="bg-white border border-lime-200 rounded p-4">
                  <div className="font-semibold text-lime-800 mb-2">53.2.1 Firma Digitale</div>
                  <ul className="text-sm text-lime-700 space-y-1">
                    <li><strong>Obbligatorietà:</strong> Tutte le comunicazioni formali</li>
                    <li><strong>Standard:</strong> Conformità normativa italiana/europea</li>
                    <li><strong>Validazione:</strong> Automatica tramite portale</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-lime-200 rounded p-4">
                  <div className="font-semibold text-lime-800 mb-2">53.2.2 Conservazione Sostitutiva</div>
                  <ul className="text-sm text-lime-700 space-y-1">
                    <li><strong>Dematerializzazione:</strong> Processo completamente digitale</li>
                    <li><strong>Valore legale:</strong> Documenti informatici equiparati</li>
                    <li><strong>Sicurezza:</strong> Crittografia e marcature temporali</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-lime-100 border border-lime-300 rounded p-4 mt-4">
                <div className="font-semibold text-lime-800 mb-2">Conservazione Sostitutiva:</div>
                <p className="text-sm text-lime-700">
                  Procedura informatica disciplinata dal CAD (Codice Amministrazione Digitale) 
                  che conferisce ai documenti informatici lo stesso valore legale degli originali cartacei.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
