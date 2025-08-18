import React from 'react';

export default function Parte2BeniCrediti() {
  return (
    <div className="space-y-8">
      {/* Sezione 5: Beni Ammissibili */}
      <div id="beni-ammissibili" className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">5. Beni Ammissibili</h2>
        <div className="prose max-w-none">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">5.1 Categorie di Beni Agevolabili</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Per il 2025, sono agevolabili esclusivamente i beni materiali dell'Allegato A della Legge 232/2016, suddivisi in tre categorie:
          </p>
          
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Categoria</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Descrizione</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Esempi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-900 bg-blue-50">A1</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Beni strumentali con controllo per mezzo di CNC e/o PLC</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Robot, macchine utensili, sistemi per l'assemblaggio</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-900 bg-green-50">A2</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Sistemi per l'assicurazione della qualità e sostenibilità</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Sistemi di monitoraggio, dispositivi per l'interazione uomo-macchina</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-purple-900 bg-purple-50">A3</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Dispositivi per l'interazione uomo-macchina e per il miglioramento ergonomico</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Banchi e postazioni, interfacce uomo-macchina intelligenti</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">5.2 Caratteristiche Tecniche Obbligatorie</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Per i beni della categoria A1, sono richieste <strong>obbligatoriamente tutte</strong> le seguenti 5 caratteristiche:
          </p>
          
          <div className="space-y-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3">1</span>
                Controllo per mezzo di CNC e/o PLC
              </h4>
              <p className="text-blue-800 text-sm">Il bene deve essere controllato da sistemi computerizzati</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3">2</span>
                Interconnessione ai sistemi informatici di fabbrica
              </h4>
              <p className="text-blue-800 text-sm">Capacità di scambiare informazioni con sistemi interni</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3">3</span>
                Integrazione automatizzata con il sistema logistico
              </h4>
              <p className="text-blue-800 text-sm">Collegamento con sistemi logistici della fabbrica</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3">4</span>
                Interfacce uomo-macchina semplici e intuitive
              </h4>
              <p className="text-blue-800 text-sm">Sistemi di interazione avanzati</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3">5</span>
                Rispondenza ai più recenti standard di sicurezza
              </h4>
              <p className="text-blue-800 text-sm">Conformità alle norme di sicurezza</p>
            </div>
          </div>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Inoltre, devono essere soddisfatte <strong>almeno 2</strong> delle seguenti 3 caratteristiche aggiuntive:
          </p>
          
          <div className="space-y-4 mb-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-900 mb-2 flex items-center">
                <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3">+</span>
                Sistemi di telemanutenzione e/o telediagnosi
              </h4>
              <p className="text-green-800 text-sm">Possibilità di monitoraggio e manutenzione da remoto</p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-900 mb-2 flex items-center">
                <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3">+</span>
                Monitoraggio continuo delle condizioni di lavoro
              </h4>
              <p className="text-green-800 text-sm">Sensori che monitorano parametri di processo</p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-900 mb-2 flex items-center">
                <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3">+</span>
                Caratteristiche di integrazione tra macchine
              </h4>
              <p className="text-green-800 text-sm">Capacità di integrazione con altre macchine del ciclo produttivo</p>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-6 my-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">Attenzione</h3>
                <div className="mt-2 text-sm text-red-700">
                  <p>L'interconnessione è un requisito imprescindibile per accedere al beneficio. Il bene deve essere in grado di scambiare informazioni con sistemi interni (es: sistema gestionale, sistemi di pianificazione, sistemi di progettazione, ecc.) e/o esterni (es: clienti, fornitori, partner, ecc.) per mezzo di un collegamento basato su specifiche documentate con protocolli specifici e verificabile ex post.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sezione 6: Aliquote e Calcolo del Credito */}
      <div id="aliquote-calcolo-credito" className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">6. Aliquote e Calcolo del Credito</h2>
        <div className="prose max-w-none">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">6.1 Aliquote per Beni Materiali 4.0</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Il credito d'imposta per i beni materiali 4.0 (Allegato A) è calcolato secondo un sistema a scaglioni progressivi:
          </p>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Fascia di Investimento</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Aliquota</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Credito Massimo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-green-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Fino a 2,5 milioni €</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-green-700">20%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">€500.000</td>
                </tr>
                <tr className="bg-yellow-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Da 2,5 a 10 milioni €</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-yellow-700">10%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">€750.000</td>
                </tr>
                <tr className="bg-orange-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Da 10 a 20 milioni €</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-orange-700">5%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">€500.000</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-8">
            <p className="text-blue-800 text-sm font-medium">
              Il credito d'imposta massimo ottenibile è di <strong>€1.750.000</strong> per un investimento di 20 milioni di euro.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">6.2 Base di Calcolo</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-900 mb-3">Per Acquisto Diretto</h4>
              <ul className="space-y-2 text-green-800 text-sm">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Costo di acquisizione del bene
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Prezzo netto fatturato
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  IVA esclusa (se detraibile)
                </li>
              </ul>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-900 mb-3">Per Leasing Finanziario</h4>
              <ul className="space-y-2 text-orange-800 text-sm">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Costo sostenuto dal locatore per l'acquisto
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Non i canoni di leasing
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Documentazione dal locatore necessaria
                </li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">6.3 Esempi di Calcolo</h3>
          
          <div className="space-y-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">1</span>
                Esempio 1: Investimento €1.500.000
              </h4>
              <div className="space-y-2 text-sm">
                <p className="text-gray-700"><strong>Unica fascia:</strong> 1.500.000 × 20% = <span className="font-bold text-green-700">€300.000</span></p>
                <p className="text-gray-700"><strong>3 quote annuali:</strong> €100.000/anno</p>
                <p className="text-gray-700"><strong>Decorrenza:</strong> Anno interconnessione</p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">2</span>
                Esempio 2: Investimento €12.000.000
              </h4>
              <div className="space-y-2 text-sm">
                <p className="text-gray-700"><strong>Prima fascia:</strong> 2.500.000 × 20% = €500.000</p>
                <p className="text-gray-700"><strong>Seconda fascia:</strong> 7.500.000 × 10% = €750.000</p>
                <p className="text-gray-700"><strong>Terza fascia:</strong> 2.000.000 × 5% = €100.000</p>
                <p className="text-gray-700"><strong>Totale:</strong> <span className="font-bold text-blue-700">€1.350.000</span> in 3 quote da €450.000</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">Importante</h3>
                <div className="mt-2 text-sm text-blue-700">
                  <p>Il calcolo del credito avviene sempre per scaglioni progressivi. Anche per investimenti che superano i 2,5 milioni di euro, la prima parte dell'investimento beneficia dell'aliquota maggiore del 20%.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sezione 7: Utilizzo del Credito d'Imposta */}
      <div id="utilizzo-credito-imposta" className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">7. Utilizzo del Credito d'Imposta</h2>
        <div className="prose max-w-none">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">7.1 Modalità di Utilizzo</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-3">Compensazione in F24</h4>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Utilizzo esclusivamente in compensazione orizzontale
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Modello F24 tramite servizi telematici dell'Agenzia delle Entrate
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Non è rimborsabile
                </li>
              </ul>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-900 mb-3">Trasferimento Limitato</h4>
              <ul className="space-y-2 text-orange-800 text-sm">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Trasferibile solo con cessione d'azienda
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Possibile in caso di fusioni e scissioni
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Non cedibile a terzi
                </li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">7.2 Quote Annuali</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Il credito d'imposta è utilizzabile in 3 quote annuali di pari importo:
          </p>
          
          <div className="space-y-4 mb-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-green-800 text-sm">
                <strong>Per beni materiali non 4.0:</strong> A partire dall'anno di entrata in funzione del bene
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-blue-800 text-sm">
                <strong>Per beni materiali 4.0:</strong> A partire dall'anno dell'interconnessione (non dell'acquisto)
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">Importante</h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <p>In caso di interconnessione tardiva, il credito d'imposta può essere utilizzato solo a partire dall'anno in cui avviene l'interconnessione, con conseguente slittamento del termine finale (3 anni dall'interconnessione).</p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">7.3 Limitazioni alla Compensazione</h3>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Aspetto</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Dettaglio</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Soglia dei €5.000</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Compensazione dopo 10 giorni dalla presentazione dichiarazione per importi superiori a €5.000</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Visto di Conformità</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Non necessario per crediti agevolativi, esclusione esplicita dall'obbligo</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Autorizzazione 2025</td>
                  <td className="px-6 py-4 text-sm text-gray-700">F24 accettati solo se impresa presente nell'elenco autorizzato dall'Agenzia delle Entrate</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">7.4 Trasferimento del Credito</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-900 mb-3">Operazioni Consentite</h4>
              <ul className="space-y-2 text-green-800 text-sm">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <strong>Cessione d'azienda:</strong> credito trasferisce all'acquirente
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <strong>Fusioni e scissioni:</strong> successione nei rapporti
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <strong>Successione per decesso:</strong> eredi possono continuare la fruizione
                </li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-900 mb-3">Operazioni Non Consentite</h4>
              <ul className="space-y-2 text-red-800 text-sm">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Trasferimento a soci di società di persone
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Trasferimento a partecipanti di enti trasparenti
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Trasferimento a collaboratori dell'impresa familiare
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Trasferimento a soci di cooperative (soggetti IRES)
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-6 my-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">Attenzione</h3>
                <div className="mt-2 text-sm text-red-700">
                  <p>Per il 2025, l'utilizzo del credito d'imposta è subordinato all'autorizzazione dell'Agenzia delle Entrate, che verifica la presenza dell'impresa nell'elenco trasmesso mensilmente dal MIMIT. I modelli F24 presentati da imprese non autorizzate saranno automaticamente scartati. Il credito non è cedibile a terzi, trasferibile solo in caso di cessione d'azienda.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sezione 8: Comunicazioni Obbligatorie */}
      <div id="comunicazioni-obbligatorie" className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">8. Comunicazioni Obbligatorie</h2>
        <div className="prose max-w-none">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">8.1 Sistema di Prenotazione 2025</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Per il 2025, è stato introdotto un nuovo sistema di prenotazione con le seguenti caratteristiche:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-900 mb-3 flex items-center">
                <svg className="h-5 w-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Budget limitato
              </h4>
              <p className="text-red-800 text-sm">€2,2 miliardi totali per il 2025</p>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-900 mb-3 flex items-center">
                <svg className="h-5 w-5 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                Prenotazione obbligatoria
              </h4>
              <p className="text-orange-800 text-sm">Prima dell'investimento</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                <svg className="h-5 w-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                Ordine cronologico
              </h4>
              <p className="text-blue-800 text-sm">Determina priorità nell'accesso</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-900 mb-3 flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Controllo risorse
              </h4>
              <p className="text-green-800 text-sm">Verifica disponibilità in tempo reale</p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">8.2 Procedure di Comunicazione</h3>
          
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Fase</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Tempistica</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Contenuto</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-indigo-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-indigo-900">Accesso Piattaforma GSE</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Dal 17 giugno 2025</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Apertura piattaforma per prenotazioni e comunicazioni</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-900">Comunicazione Preventiva</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Entro 31 gennaio 2026</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Descrizione investimenti previsti, credito stimato, timeline</td>
                </tr>
                <tr className="bg-yellow-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-yellow-900">Comunicazione di Pagamento</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Entro 30 giorni dalla preventiva</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Attestazione pagamento almeno 20% del costo investimento</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-900">Comunicazione di Completamento (2025)</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Entro 31 gennaio 2026</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Documentazione completa: fatture, collaudi, interconnessione</td>
                </tr>
                <tr className="bg-purple-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-purple-900">Comunicazione di Completamento (I sem. 2026)</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Entro 31 luglio 2026</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Stessa documentazione richiesta per completamento 2025</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">8.3 Piattaforma Telematica GSE</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
              <h4 className="font-semibold text-indigo-900 mb-3">Accesso</h4>
              <ul className="space-y-2 text-indigo-800 text-sm">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <strong>Area Clienti GSE:</strong> Registrazione obbligatoria
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <strong>Applicazione dedicata:</strong> "Transizione 4.0 – Accedi ai questionari"
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <strong>Credenziali:</strong> Rilasciate da GSE
                </li>
              </ul>
            </div>
            
            <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
              <h4 className="font-semibold text-teal-900 mb-3">Funzionalità</h4>
              <ul className="space-y-2 text-teal-800 text-sm">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <strong>Compilazione modelli:</strong> Guidata step-by-step
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <strong>Upload documenti:</strong> Allegati tecnici e amministrativi
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <strong>Monitoraggio stato:</strong> Pratica in tempo reale
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <strong>Comunicazioni:</strong> Bidirezionali con MIMIT
                </li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">8.4 Gestione Esaurimento Risorse</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            In caso di esaurimento del budget di €2,2 miliardi:
          </p>
          
          <div className="space-y-4 mb-6">
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <p className="text-red-800 text-sm">
                Le comunicazioni tardive saranno acquisite ma non finanziate
              </p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="text-yellow-800 text-sm">
                Verrà creata una lista d'attesa automatica per nuove disponibilità
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-blue-800 text-sm">
                Eventuali recuperi di risorse (da rinunce o revoche) saranno riassegnati rispettando l'ordine cronologico
              </p>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-6 my-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">Attenzione</h3>
                <div className="mt-2 text-sm text-red-700">
                  <p>La mancata comunicazione nei termini previsti comporta l'impossibilità di utilizzare il credito d'imposta. I modelli F24 saranno automaticamente scartati se l'impresa non è presente nell'elenco trasmesso dal MIMIT all'Agenzia delle Entrate.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
