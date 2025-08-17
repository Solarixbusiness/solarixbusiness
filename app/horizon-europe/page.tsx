'use client';

import { useState } from 'react'

export default function HorizonEuropePage() {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({})

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            HORIZON EUROPE
          </h1>
          <p className="text-xl md:text-2xl text-center opacity-90 max-w-4xl mx-auto">
            La Nostra Guida Completa ai 6 Gruppi Tematici per le Vostre Opportunità di Crescita
          </p>
          <p className="text-lg text-center mt-4 opacity-80">
            Noi di Solarix Business vi accompagniamo nell'evoluzione del vostro business attraverso i fondi europei
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Introduzione */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection('introduzione')}
            >
              <h2 className="text-2xl font-bold text-green-700">Introduzione</h2>
              <span className="text-2xl text-green-600">
                {openSections['introduzione'] ? '−' : '+'}
              </span>
            </div>
            
            {openSections['introduzione'] && (
              <div className="mt-6 space-y-4 text-gray-700">
                <p>
                  Noi di Solarix Business abbiamo sviluppato questa guida completa su Horizon Europe come strumento strategico per accompagnare i nostri clienti nell'evoluzione del loro business. Partiamo dalla nostra expertise consolidata in energia ed efficientamento per guidarvi verso nuovi campi di crescita, costruendo insieme percorsi di sviluppo ambiziosi e duraturi.
                </p>
                <p>
                  Horizon Europe rappresenta il più grande piano dell'Unione Europea per finanziare idee innovative, con un <strong>budget totale di circa 95,5 miliardi di euro dal 2021 al 2027</strong>, e una proposta per estenderlo fino al 2034 con <strong>175 miliardi extra</strong>. I 6 gruppi tematici (chiamati "cluster") sono il cuore del programma, ispirati a sfide globali come il cambiamento climatico, la salute pubblica, la competitività economica e la sostenibilità sociale.
                </p>
                <p>
                  In questa guida, noi di Solarix Business descriviamo in dettaglio gli obiettivi che hanno ispirato la loro creazione, i requisiti di partecipazione (almeno 3 attori da 3 paesi europei diversi), i minimi e massimi finanziabili, le date di scadenza per il 2025, eventuali deroghe o rinnovi, e come si struttura una domanda. Tutto spiegato in modo semplice e accessibile - pensiamo a questo come a un ponte per differenziare la vostra azienda e attrarre nuove opportunità di business.
                </p>
              </div>
            )}
          </div>

          {/* Gli Obiettivi che Hanno Ispirato la Creazione dei 6 Gruppi */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection('obiettivi')}
            >
              <h2 className="text-2xl font-bold text-green-700">Gli Obiettivi che Hanno Ispirato la Creazione dei 6 Gruppi</h2>
              <span className="text-2xl text-green-600">
                {openSections['obiettivi'] ? '−' : '+'}
              </span>
            </div>
            
            {openSections['obiettivi'] && (
              <div className="mt-6 space-y-6 text-gray-700">
                <p>
                  Noi di Solarix Business vi spieghiamo come i 6 gruppi sono nati per rispondere alle grandi sfide dell'Europa: il Green Deal (piano per un continente verde e sostenibile), la transizione digitale (uso di tecnologia per migliorare la vita), la competitività economica (rendere l'Europa leader mondiale) e l'inclusione sociale (nessuno lasciato indietro). L'ispirazione viene da problemi reali: inquinamento, malattie, disuguaglianze, e la necessità di innovare per un futuro migliore. Ogni gruppo bilancia obiettivi ambientali, sociali ed economici, promuovendo collaborazione tra paesi per soluzioni che funzionino ovunque.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-red-700 mb-3">Gruppo 1: Salute</h3>
                    <p><strong>Ispirazione:</strong> Necessità di prevenire malattie, affrontare epidemie e promuovere un invecchiamento sano, soprattutto dopo la pandemia COVID.</p>
                    <p className="mt-2"><strong>Obiettivo:</strong> Migliorare la salute per tutti, usando tecnologia per cure personalizzate e ambienti sani, riducendo costi sanitari e aumentando la qualità della vita.</p>
                  </div>
                  
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-purple-700 mb-3">Gruppo 2: Cultura, Creatività e Società Inclusiva</h3>
                    <p><strong>Ispirazione:</strong> Rafforzare la democrazia e l'identità europea, combattendo discriminazioni e stimolando creatività.</p>
                    <p className="mt-2"><strong>Obiettivo:</strong> Creare una società unita, dove cultura e arte aiutino l'inclusione, educando le persone e proteggendo tradizioni per un'Europa più giusta.</p>
                  </div>
                  
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-orange-700 mb-3">Gruppo 3: Sicurezza Civile per la Società</h3>
                    <p><strong>Ispirazione:</strong> Minacce come crimini, disastri naturali e attacchi online, per proteggere cittadini e comunità.</p>
                    <p className="mt-2"><strong>Obiettivo:</strong> Sviluppare strumenti per prevenire rischi, gestire emergenze e costruire resilienza (capacità di riprendersi), rendendo l'Europa più sicura senza limitare libertà.</p>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-blue-700 mb-3">Gruppo 4: Digitale, Industria e Spazio</h3>
                    <p><strong>Ispirazione:</strong> Spinta per una transizione digitale e industriale, usando lo spazio per benefici terrestri.</p>
                    <p className="mt-2"><strong>Obiettivo:</strong> Innovare tecnologia e produzione per competitività, creando posti di lavoro e soluzioni come app o satelliti che migliorino vita quotidiana e economia.</p>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-green-700 mb-3">Gruppo 5: Clima, Energia e Mobilità</h3>
                    <p><strong>Ispirazione:</strong> Green Deal e lotta al riscaldamento globale, per transizione verde.</p>
                    <p className="mt-2"><strong>Obiettivo:</strong> Ridurre emissioni, promuovere energia pulita e trasporti sostenibili, adattando società e natura ai cambiamenti per un'Europa climate-neutral (senza impatto sul clima) entro il 2050.</p>
                  </div>
                  
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-yellow-700 mb-3">Gruppo 6: Alimentazione, Bioeconomia, Risorse Naturali, Agricoltura e Ambiente</h3>
                    <p><strong>Ispirazione:</strong> Necessità di cibo sano, risorse sostenibili e protezione biodiversità.</p>
                    <p className="mt-2"><strong>Obiettivo:</strong> Accelerare una bioeconomia (economia basata su natura), riducendo sprechi, invertendo declino ambientale e bilanciando bisogni umani con ecologia per sistemi alimentari duraturi.</p>
                  </div>
                </div>
                
                <div className="bg-green-100 p-4 rounded-lg">
                  <p className="font-semibold text-green-800">
                    Come vi guidiamo noi di Solarix Business: Questi obiettivi sono interconnessi e noi vi aiutiamo a identificare le sinergie - ad esempio, un progetto su energia pulita (Gruppo 5) può beneficiare la salute (Gruppo 1) riducendo inquinamento.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Requisiti di Partecipazione */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection('requisiti')}
            >
              <h2 className="text-2xl font-bold text-green-700">Requisiti di Partecipazione: Almeno 3 Attori da 3 Paesi Europei</h2>
              <span className="text-2xl text-green-600">
                {openSections['requisiti'] ? '−' : '+'}
              </span>
            </div>
            
            {openSections['requisiti'] && (
              <div className="mt-6 space-y-4 text-gray-700">
                <p>
                  Sì, per la maggior parte delle azioni principali (come Ricerca e Innovazione o Azioni di Innovazione), tutti i 6 gruppi richiedono <strong>almeno 3 entità indipendenti da 3 paesi diversi</strong> dell'Unione Europea o associati (come Norvegia). Noi di Solarix Business vi supportiamo nella costruzione di questi consorzi internazionali, garantendo collaborazione transnazionale e impatto ampio.
                </p>
                
                <h3 className="text-xl font-bold text-green-700 mt-6">Esempi Pratici che Noi di Solarix Business Possiamo Realizzare:</h3>
                
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <strong className="text-red-700">Gruppo 1 (Salute):</strong> Con la nostra consulenza, una vostra azienda italiana può collaborare con un'università tedesca (ricerca su malattie) e un ospedale francese (test cure) per sviluppare un'app che monitora inquinanti e previene allergie.
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <strong className="text-purple-700">Gruppo 2 (Cultura):</strong> Vi aiutiamo a creare partnership tra la vostra associazione italiana, un museo spagnolo e un gruppo creativo olandese per una piattaforma digitale di storie inclusive.
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <strong className="text-green-700">Gruppo 5 (Energia):</strong> La nostra specialty - guidiamo la vostra impresa italiana con operatori danesi e ricercatori austriaci per reti di mobilità verde.
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Tabella Gruppi Tematici */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection('gruppi-tabella')}
            >
              <h2 className="text-2xl font-bold text-green-700">I 6 Gruppi Tematici - La Nostra Matrice di Priorità</h2>
              <span className="text-2xl text-green-600">
                {openSections['gruppi-tabella'] ? '−' : '+'}
              </span>
            </div>
            
            {openSections['gruppi-tabella'] && (
              <div className="mt-6">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-green-100">
                        <th className="border border-gray-300 p-3 text-left font-bold">Gruppo</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Facilità di Accesso</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Le Vostre Competenze Utilizzabili</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Budget Tipico</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Il Nostro Consiglio</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-green-50">
                        <td className="border border-gray-300 p-3 font-semibold">
                          <strong>Gruppo 5:</strong><br />Energia
                        </td>
                        <td className="border border-gray-300 p-3">
                          <div className="flex items-center">
                            <span className="text-yellow-500 text-lg">⭐⭐⭐⭐⭐</span>
                            <span className="ml-2 font-bold text-green-600">FACILISSIMO</span>
                          </div>
                        </td>
                        <td className="border border-gray-300 p-3">
                          Energia, efficienza<br />(già consolidate)
                        </td>
                        <td className="border border-gray-300 p-3">
                          3-10<br />milioni
                        </td>
                        <td className="border border-gray-300 p-3">
                          <strong className="text-green-700">INIZIATE QUI</strong> - La nostra specialità
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-semibold">
                          <strong>Gruppo 4:</strong><br />Digitale
                        </td>
                        <td className="border border-gray-300 p-3">
                          <div className="flex items-center">
                            <span className="text-yellow-500 text-lg">⭐⭐⭐⭐</span>
                            <span className="ml-2 font-bold text-blue-600">FACILE</span>
                          </div>
                        </td>
                        <td className="border border-gray-300 p-3">
                          Software,<br />certificazioni
                        </td>
                        <td className="border border-gray-300 p-3">
                          3-8<br />milioni
                        </td>
                        <td className="border border-gray-300 p-3">
                          <strong>SECONDO PASSO</strong> - Sfruttiamo competenze digitali
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-3 font-semibold">
                          <strong>Gruppo 6:</strong><br />Bioeconomia
                        </td>
                        <td className="border border-gray-300 p-3">
                          <div className="flex items-center">
                            <span className="text-yellow-500 text-lg">⭐⭐⭐</span>
                            <span className="ml-2 font-bold text-orange-600">MEDIO</span>
                          </div>
                        </td>
                        <td className="border border-gray-300 p-3">
                          Certificazioni qualità
                        </td>
                        <td className="border border-gray-300 p-3">
                          2-7<br />milioni
                        </td>
                        <td className="border border-gray-300 p-3">
                          <strong>TERZO PASSO</strong> - Ambiente e agricoltura
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* Budget e Finanziamenti */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection('budget')}
            >
              <h2 className="text-2xl font-bold text-green-700">Budget e Finanziamenti Disponibili</h2>
              <span className="text-2xl text-green-600">
                {openSections['budget'] ? '−' : '+'}
              </span>
            </div>
            
            {openSections['budget'] && (
              <div className="mt-6 space-y-4 text-gray-700">
                <p>Noi di Solarix Business vi orientiamo sui finanziamenti che variano per call specifica, ma in generale per i progetti collaborativi nei 6 gruppi:</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-blue-700 mb-3">Budget di Progetto:</h3>
                    <ul className="space-y-2">
                      <li><strong>Minimo:</strong> Tipicamente 1-3 milioni di euro per progetto (azioni pilota)</li>
                      <li><strong>Massimo:</strong> Fino a 10-45 milioni di euro per progetto (azioni infrastrutturali)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-green-700 mb-3">Percentuali di Contributo UE che Vi Possiamo Ottenere:</h3>
                    <ul className="space-y-2">
                      <li><strong>Per le vostre imprese:</strong> Fino al 70% dei costi a fondo perduto</li>
                      <li><strong>Per ricerca non-profit:</strong> Fino al 100% dei costi</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-yellow-100 p-4 rounded-lg mt-4">
                  <p className="font-semibold text-yellow-800">
                    La nostra consulenza include la verifica delle cifre esatte per ogni call specifica.
                  </p>
                </div>
                
                <h3 className="text-xl font-bold text-green-700 mt-6">Come Distribuiamo i Fondi nel Consorzio:</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-2">Il nostro metodo trasparente:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Ogni partner dichiara i propri costi</li>
                    <li>• L'UE applica la percentuale di contributo</li>
                    <li>• Pagamento diretto UE a ciascun attore</li>
                  </ul>
                </div>
                
                <h3 className="text-xl font-bold text-green-700 mt-6">Esempio Pratico di Distribuzione:</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>Progetto da 3 milioni di euro:</strong></p>
                  <ul className="mt-2 space-y-1">
                    <li>• La vostra azienda (Italia): 1 milione di costi → ricevete 700.000 euro</li>
                    <li>• Partner Germania: 1 milione di costi → riceve 700.000 euro</li>
                    <li>• Partner Francia: 1 milione di costi → riceve 700.000 euro</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Calendario 2025-2026 */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection('calendario')}
            >
              <h2 className="text-2xl font-bold text-green-700">Calendario 2025-2026: Scadenze Immediate e Finestre Future</h2>
              <span className="text-2xl text-green-600">
                {openSections['calendario'] ? '−' : '+'}
              </span>
            </div>
            
            {openSections['calendario'] && (
              <div className="mt-6 space-y-6 text-gray-700">
                <p>Noi di Solarix Business monitoriamo costantemente tutte le finestre di opportunità per voi:</p>
                
                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-xl font-bold text-red-700 mb-3">⚠️ Scadenze Immediate (Settembre-Novembre 2025):</h3>
                  <ul className="space-y-2">
                    <li>• <strong>Gruppo 5</strong> (la nostra specialità): Call chiudono tra il 17-22 settembre 2025</li>
                    <li>• <strong>Gruppi 4 e 6:</strong> Scadenze concentrate settembre-ottobre 2025</li>
                    <li>• <strong>Two-stage calls:</strong> Prima fase 19 settembre 2025</li>
                    <li>• <strong>Alcune call salute:</strong> Fino a novembre 2025</li>
                  </ul>
                  <div className="bg-red-100 p-3 rounded mt-4">
                    <p className="font-semibold text-red-800">
                      ⚠️ Importante: Con solo poche settimane alle scadenze di settembre, il nostro supporto immediato è cruciale per chi vuole partecipare a questa finestra.
                    </p>
                  </div>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-green-700 mb-3">🚀 Finestre Future 2026 (Maggiori Opportunità):</h3>
                  <p className="mb-4">Il nostro planning strategico per voi:</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-green-600">Primo Trimestre 2026:</h4>
                      <ul className="ml-4 space-y-1">
                        <li>• Febbraio 2026: Scadenze second-stage per call two-phase aperte a settembre 2025</li>
                        <li>• Marzo 2026: Nuove call Gruppo 1 (Salute) e Gruppo 3 (Sicurezza)</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-green-600">Secondo Trimestre 2026:</h4>
                      <ul className="ml-4 space-y-1">
                        <li>• Aprile-Maggio 2026: Apertura Work Programme 2026 - nuove call per tutti i gruppi</li>
                        <li>• Maggio 2026: Call specifiche per Gruppo 5 (Energia) - la nostra area di eccellenza</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-green-600">Terzo Trimestre 2026:</h4>
                      <ul className="ml-4 space-y-1">
                        <li>• Settembre 2026: Concentrazione scadenze principali (pattern ricorrente)</li>
                        <li>• Ottobre 2026: Call per progetti infrastrutturali (budget elevati)</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-green-600">Quarto Trimestre 2026:</h4>
                      <ul className="ml-4 space-y-1">
                        <li>• Novembre 2026: Ultime call del programma corrente</li>
                        <li>• Dicembre 2026: Preparazione transizione verso Horizon Europe 2028-2034</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-700 mb-3">Prospettive 2027 e Oltre:</h3>
                  <p className="mb-4">La nostra visione strategica per il vostro business:</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-blue-600">2027 - Ultimo Anno Programma Corrente:</h4>
                      <ul className="ml-4 space-y-1">
                        <li>• Gennaio-Marzo 2027: Call finali con budget residui</li>
                        <li>• Maggio 2027: Ultime opportunità prima della transizione</li>
                        <li>• Settembre 2027: Chiusura definitiva Horizon Europe 2021-2027</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-blue-600">2028-2034 - Nuovo Programma (175 Miliardi):</h4>
                      <ul className="ml-4 space-y-1">
                        <li>• <strong>Budget raddoppiato:</strong> Da 95,5 a 175 miliardi euro</li>
                        <li>• <strong>Struttura semplificata:</strong> Quattro pilastri invece di sei gruppi</li>
                        <li>• <strong>Focus rafforzato:</strong> "Moonshot projects" in settori strategici</li>
                        <li>• <strong>Integrazione:</strong> Con nuovo Fondo Europeo per la Competitività</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-purple-700 mb-3">Il Nostro Supporto Temporale Strategico:</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-purple-600">Per Scadenze Immediate (2025):</h4>
                      <ul className="ml-4 space-y-1">
                        <li>• Settembre 2025: Supporto intensivo per candidature last-minute</li>
                        <li>• Preparazione immediata per chi ha già partner e idee definite</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-purple-600">Per Finestre Future (2026-2027):</h4>
                      <ul className="ml-4 space-y-1">
                        <li>• Planning anticipato: Costruzione consorzi da settembre 2025</li>
                        <li>• Sviluppo idee innovative per call 2026 con 6-8 mesi di preparazione</li>
                        <li>• Network building: Eventi e contatti internazionali durante l'autunno 2025</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-purple-600">Per Nuovo Programma (2028+):</h4>
                      <ul className="ml-4 space-y-1">
                        <li>• Strategia di lungo termine: Posizionamento per budget raddoppiato</li>
                        <li>• Aggiornamento competenze: Allineamento ai nuovi pilastri</li>
                        <li>• Partnership strategiche: Preparazione per "moonshot projects"</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-100 p-4 rounded-lg">
                  <h3 className="text-lg font-bold text-yellow-800 mb-2">La Nostra Raccomandazione Temporale:</h3>
                  <ul className="space-y-2">
                    <li><strong>🚀 Se avete già partner e progetti definiti:</strong> Puntate alle scadenze settembre 2025</li>
                    <li><strong>📋 Se state esplorando possibilità:</strong> Iniziamo a pianificare per le call 2026</li>
                    <li><strong>🎯 Se pensate strategicamente:</strong> Prepariamoci insieme per il nuovo programma 2028-2034</li>
                  </ul>
                  <p className="mt-3 font-semibold">Il vantaggio di Solarix Business: Gestiamo per voi il timing ottimale, dalla preparazione immediata alla strategia pluriennale.</p>
                </div>
              </div>
            )}
          </div>

          {/* Come Strutturiamo le Vostre Domande */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection('domande')}
            >
              <h2 className="text-2xl font-bold text-green-700">Come Strutturiamo le Vostre Domande</h2>
              <span className="text-2xl text-green-600">
                {openSections['domande'] ? '−' : '+'}
              </span>
            </div>
            
            {openSections['domande'] && (
              <div className="mt-6 space-y-4 text-gray-700">
                <p>Noi di Solarix Business vi accompagniamo in tutto il processo di candidatura online sul portale Funding & Tenders dell'UE:</p>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-700 mb-3">Il Nostro Processo per Voi:</h3>
                  <ol className="space-y-2 list-decimal list-inside">
                    <li>Creazione profilo aziendale</li>
                    <li>Selezione call più adatte</li>
                    <li>Supporto nella compilazione entro scadenza</li>
                  </ol>
                </div>
                
                <h3 className="text-xl font-bold text-green-700 mt-6">Struttura delle Proposte che Prepariamo:</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-bold text-gray-700 mb-3">Parte A: Amministrativa</h4>
                    <p>• Gestiamo noi: Dati aziendali, budget, ruoli del consorzio</p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-bold text-gray-700 mb-3">Parte B: Tecnica</h4>
                    <p>• Scriviamo insieme: Documento 45-70 pagine con:</p>
                    <ul className="ml-4 mt-2 space-y-1">
                      <li>◦ Eccellenza: La vostra idea innovativa</li>
                      <li>◦ Impatto: Benefici per l'Europa</li>
                      <li>◦ Implementazione: Piano lavoro e gestione rischi</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* I Nostri Servizi di Consulenza per Ogni Gruppo */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection('servizi-consulenza')}
            >
              <h2 className="text-2xl font-bold text-green-700">I Nostri Servizi di Consulenza per Ogni Gruppo</h2>
              <span className="text-2xl text-green-600">
                {openSections['servizi-consulenza'] ? '−' : '+'}
              </span>
            </div>
            
            {openSections['servizi-consulenza'] && (
              <div className="mt-6 space-y-6 text-gray-700">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-red-700 mb-3">Come Solarix Business Vi Supporta nel Gruppo 1: Salute</h3>
                  <p className="mb-4">La nostra proposta per voi: Dopo avervi assistito in un progetto nazionale (come Transizione 5.0), vi proponiamo progetti europei sulla salute per costruire rapporti duraturi. Evolviamo insieme aggiungendo servizi su "salute aziendale", come certificazioni per ambienti sani, attraendo clienti nel settore medico o benessere.</p>
                  
                  <h4 className="font-bold text-red-600 mb-2">Campi dove Vi Possiamo Assistere:</h4>
                  <ul className="space-y-1 ml-4">
                    <li>• Prevenzione malattie attraverso monitoraggio ambientale</li>
                    <li>• Tecnologia sanitaria per controllo quotidiano</li>
                    <li>• Salute e ambiente collegati all'efficienza energetica</li>
                  </ul>
                  
                  <div className="bg-red-100 p-4 rounded-lg mt-4">
                    <h4 className="font-bold text-red-800 mb-2">Esempio di Progetto che Realizziamo per Voi:</h4>
                    <p><strong>Progetto Salute-Energia (la nostra specialty):</strong> Se siete una fabbrica che abbiamo già supportato con impianti solari, vi proponiamo un sistema per misurare aria interna con filtri alimentati da energia efficiente. Risultato: 70% coperto da fondi UE, prevenzione allergie operai, rapporto continuativo con noi.</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-700 mb-3">Come Solarix Business Vi Supporta nel Gruppo 4: Digitale e Industria</h3>
                  <p className="mb-4">La nostra evoluzione per voi: Dopo progetti energetici base, vi proponiamo digitalizzazione e automazione per far crescere la vostra competitività. Aggiungiamo servizi su "tecnologia integrata" usando le nostre certificazioni.</p>
                  
                  <div className="bg-blue-100 p-4 rounded-lg mt-4">
                    <h4 className="font-bold text-blue-800 mb-2">Esempio di Progetto Digitale che Creiamo:</h4>
                    <p><strong>Progetto Industria 4.0:</strong> Se siete nell'automazione, vi aiutiamo a sviluppare software per controllare macchine industriali in tempo reale. Beneficio: 70% finanziamento UE, produzione più veloce, consulenza continuativa.</p>
                  </div>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-green-700 mb-3">Come Solarix Business Vi Supporta nel Gruppo 5: Clima ed Energia</h3>
                  <p className="mb-4">Il nostro punto di forza per voi: Questo è il gruppo dove Solarix Business eccelle - consolidiamo i nostri rapporti dopo progetti nazionali proponendovi innovazioni europee su clima e mobilità verde.</p>
                  
                  <h4 className="font-bold text-green-600 mb-2">La Nostra Expertise al Vostro Servizio:</h4>
                  <ul className="space-y-1 ml-4">
                    <li>• Reti energia pulita condivisa</li>
                    <li>• Trasporti sostenibili integrati</li>
                    <li>• Adattamento climatico per aziende</li>
                  </ul>
                  
                  <div className="bg-green-100 p-4 rounded-lg mt-4">
                    <h4 className="font-bold text-green-800 mb-2">Progetto Energia che Realizziamo:</h4>
                    <p><strong>Rete Energetica Condivisa:</strong> Vi guidiamo nella creazione di reti per condividere energia pulita tra fabbriche. Vantaggio: 70% finanziamento UE, riduzione emissioni, partnership duratura.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* La Nostra Strategia di Crescita per Voi */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection('strategia-crescita')}
            >
              <h2 className="text-2xl font-bold text-green-700">La Nostra Strategia di Crescita per Voi</h2>
              <span className="text-2xl text-green-600">
                {openSections['strategia-crescita'] ? '−' : '+'}
              </span>
            </div>
            
            {openSections['strategia-crescita'] && (
              <div className="mt-6 space-y-6 text-gray-700">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-red-700 mb-3">🚀 FASE 1 (Settembre 2025 - Immediata)</h3>
                    <p>Vi guidiamo nel Gruppo 5 per scadenze imminenti se avete già partner</p>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-blue-700 mb-3">📋 FASE 2 (Primo Semestre 2026)</h3>
                    <p>Prepariamo insieme candidature Gruppo 4 (digitale/industria) per call primaverili</p>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-green-700 mb-3">🎯 FASE 3 (2026-2027)</h3>
                    <p>Costruiamo portfolio diversificato su più gruppi con pianificazione anticipata</p>
                  </div>
                  
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-purple-700 mb-3">🌟 FASE 4 (2028-2034)</h3>
                    <p>Vi posizioniamo strategicamente per il nuovo programma da 175 miliardi</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Errori che Noi di Solarix Business Vi Aiutiamo a Evitare */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection('errori')}
            >
              <h2 className="text-2xl font-bold text-green-700">Errori che Noi di Solarix Business Vi Aiutiamo a Evitare</h2>
              <span className="text-2xl text-green-600">
                {openSections['errori'] ? '−' : '+'}
              </span>
            </div>
            
            {openSections['errori'] && (
              <div className="mt-6 space-y-4 text-gray-700">
                <h3 className="text-xl font-bold text-green-700 mb-4">Il Nostro Metodo Anti-Errore:</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                    <p><strong className="text-red-700">❌ Consorzio mal costruito</strong></p>
                    <p className="mt-2"><strong className="text-green-700">✅ Noi costruiamo relazioni solide prima del bando</strong></p>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                    <p><strong className="text-red-700">❌ Innovazione poco convincente</strong></p>
                    <p className="mt-2"><strong className="text-green-700">✅ La nostra ricerca approfondisce stato dell'arte e differenziazione</strong></p>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                    <p><strong className="text-red-700">❌ Budget irrealistico</strong></p>
                    <p className="mt-2"><strong className="text-green-700">✅ I nostri budget includono margini di sicurezza del 15-20%</strong></p>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                    <p><strong className="text-red-700">❌ Scadenze sottovalutate</strong></p>
                    <p className="mt-2"><strong className="text-green-700">✅ Iniziamo insieme 6-8 settimane prima della scadenza</strong></p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* I Nostri Primi Passi Operativi per Voi */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection('primi-passi')}
            >
              <h2 className="text-2xl font-bold text-green-700">I Nostri Primi Passi Operativi per Voi</h2>
              <span className="text-2xl text-green-600">
                {openSections['primi-passi'] ? '−' : '+'}
              </span>
            </div>
            
            {openSections['primi-passi'] && (
              <div className="mt-6 space-y-6 text-gray-700">
                <h3 className="text-xl font-bold text-green-700 mb-4">Come Solarix Business Vi Accompagna:</h3>
                
                <div className="space-y-6">
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h4 className="text-lg font-bold text-red-700 mb-3">Per Scadenze Immediate (Settembre 2025):</h4>
                    <ul className="space-y-2">
                      <li>• Verifica rapida eligibilità e disponibilità partner esistenti</li>
                      <li>• Supporto intensivo per candidature con tempi stretti</li>
                      <li>• Solo se avete già idee definite e consorzi pronti</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="text-lg font-bold text-green-700 mb-3">Per Finestre 2026 (Approccio Strategico):</h4>
                    <ul className="space-y-2">
                      <li>• Registriamo insieme la vostra azienda su funding-tenders.ec.europa.eu</li>
                      <li>• Identifichiamo call più promettenti del Work Programme 2026</li>
                      <li>• Costruiamo network di partner europei durante l'autunno 2025</li>
                      <li>• Sviluppiamo idee innovative con 6+ mesi di preparazione</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="text-lg font-bold text-blue-700 mb-3">Per Nuovo Programma 2028-2034:</h4>
                    <ul className="space-y-2">
                      <li>• Analisi strategica dei nuovi pilastri e moonshot projects</li>
                      <li>• Posizionamento competenze aziendali per budget raddoppiato</li>
                      <li>• Partnership di lungo termine per progetti ambiziosi</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-yellow-700 mb-4">Il Nostro Investimento nel Vostro Successo:</h3>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-bold text-red-600 mb-2">Per Candidature 2025 (Immediate):</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Tempo Solarix Business: 30 ore intensive in 2-3 settimane</li>
                        <li>• Vostro impegno: 15 ore per informazioni tecniche urgenti</li>
                        <li>• Risultato: Candidatura professionale last-minute</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-bold text-green-600 mb-2">Per Progetti 2026 (Strategici):</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Tempo Solarix Business: 40 ore distribuite su 3-4 mesi</li>
                        <li>• Vostro impegno: 20 ore per sviluppo strategico</li>
                        <li>• Risultato: Proposta eccellente con network solido</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-bold text-blue-600 mb-2">Per Visione 2028-2034:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Consulenza continuativa di posizionamento strategico</li>
                        <li>• Partnership development per moonshot projects</li>
                        <li>• ROI stimato: Accesso a budget raddoppiato (175 miliardi)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Tempistiche di Erogazione Fondi */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection('tempistiche')}
            >
              <h2 className="text-2xl font-bold text-green-700">Tempistiche di Erogazione Fondi con il Nostro Supporto</h2>
              <span className="text-2xl text-green-600">
                {openSections['tempistiche'] ? '−' : '+'}
              </span>
            </div>
            
            {openSections['tempistiche'] && (
              <div className="mt-6 space-y-4 text-gray-700">
                <p>Noi di Solarix Business vi seguiamo in tutto il processo post-approvazione:</p>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-700 mb-4">Il Nostro Calendario per Voi:</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                      <div>
                        <p><strong>Mesi 1-6:</strong> Valutazione progetto (monitoriamo per voi)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                      <div>
                        <p><strong>Mesi 6-14:</strong> Negoziazione accordo (vi assistiamo legalmente)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                      <div>
                        <p><strong>Mese 15:</strong> Primi fondi sul vostro conto (20-30% del totale)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</div>
                      <div>
                        <p><strong>Ogni 12-18 mesi:</strong> Pagamenti intermedi (gestiamo report per voi)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">5</div>
                      <div>
                        <p><strong>Fine progetto:</strong> Saldo finale (vi supportiamo nella rendicontazione)</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-100 p-4 rounded-lg">
                  <p className="font-semibold text-green-800">
                    Il nostro valore aggiunto: Dalla candidatura alla rendicontazione finale, Solarix Business è il vostro partner strategico per massimizzare i fondi europei e far crescere il vostro business.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Chi Può Partecipare ai Nostri Progetti */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection('partecipanti')}
            >
              <h2 className="text-2xl font-bold text-green-700">Chi Può Partecipare ai Nostri Progetti</h2>
              <span className="text-2xl text-green-600">
                {openSections['partecipanti'] ? '−' : '+'}
              </span>
            </div>
            
            {openSections['partecipanti'] && (
              <div className="mt-6 space-y-4 text-gray-700">
                <p className="text-lg font-semibold text-green-700">
                  La buona notizia che vi diamo: Horizon Europe non è limitato alle PMI! Noi di Solarix Business possiamo supportare:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-blue-700 mb-3">I Nostri Clienti Ammissibili:</h3>
                    <ul className="space-y-2">
                      <li>• <strong>PMI e imprese private</strong> (la nostra base clienti principale)</li>
                      <li>• <strong>Enti pubblici</strong> - amministrazioni, comuni, regioni, ministeri</li>
                      <li>• <strong>Università e centri ricerca</strong> (nostri partner abituali)</li>
                      <li>• <strong>Associazioni e non-profit</strong> (emergente nel nostro portfolio)</li>
                      <li>• <strong>Grandi imprese</strong> (collaborazioni strategiche)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-green-700 mb-3">I Nostri Requisiti per Voi:</h3>
                    <ul className="space-y-2">
                      <li>• Essere in Italia (o paesi UE/associati)</li>
                      <li>• Capacità operativa e finanziaria (vi aiutiamo a dimostrarla)</li>
                      <li>• Il nostro supporto per documentazione e compliance</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-yellow-100 p-4 rounded-lg">
                  <p className="font-semibold text-yellow-800">
                    Il nostro vantaggio: Possiamo proporvi progetti con clienti diversi - dalle PMI private agli enti comunali, creando rapporti duraturi e diversificati.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Solarix Business - Il Vostro Partner Strategico per i Fondi Europei</h2>
            <p className="text-xl mb-6">
              Dalla candidatura alla rendicontazione finale, vi accompagniamo per massimizzare i fondi europei e far crescere il vostro business
            </p>
            <div className="flex justify-center mb-6">
              <a 
                href="https://wa.me/393470087833" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg flex items-center space-x-3 transition-colors duration-300 text-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span>Contattaci su WhatsApp: 347 008 7833</span>
              </a>
            </div>
            <p className="text-lg mb-4">
              Per una consulenza personalizzata sui fondi europei Horizon Europe
            </p>
            <div className="text-sm opacity-90">
              Documento preparato dal team Solarix Business - Aggiornato con le ultime informazioni ufficiali da Horizon Europe 2025
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
