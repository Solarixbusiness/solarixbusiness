import React from 'react';

export default function Parte3DocumentazioneControlli() {
  return (
    <div className="space-y-8">
      {/* Sezione 9: Documentazione Necessaria */}
      <div id="documentazione-necessaria" className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">9. Documentazione Necessaria</h2>
        <div className="prose max-w-none">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">9.1 Documentazione Amministrativa</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-4">Documentazione Contabile</h4>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Fatture e documenti di acquisto
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Documenti di trasporto
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Registri IVA
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Libro cespiti con indicazione del bene
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Evidenze di pagamento (bonifici, estratti conto)
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-900 mb-4">Documentazione Contrattuale</h4>
              <ul className="space-y-2 text-green-800 text-sm">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Contratti di acquisto
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Contratti di leasing (se applicabile)
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Verbali di consegna e collaudo
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Dichiarazione del legale rappresentante
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Comunicazioni al MIMIT
                </li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">9.2 Perizia Tecnica</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Per investimenti superiori a €300.000, è obbligatoria una perizia tecnica giurata rilasciata da un ingegnere o perito industriale iscritto all'albo, o un attestato di conformità rilasciato da un ente di certificazione accreditato, che attesti:
          </p>
          
          <div className="space-y-3 mb-6">
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <p className="text-purple-800 text-sm flex items-start">
                <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Caratteristiche tecniche dei beni
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <p className="text-purple-800 text-sm flex items-start">
                <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Rispetto dei requisiti dell'Allegato A
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <p className="text-purple-800 text-sm flex items-start">
                <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Interconnessione al sistema aziendale
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <p className="text-purple-800 text-sm flex items-start">
                <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Identificazione univoca dei beni (matricola, codice, ecc.)
              </p>
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
                  <p>Per investimenti fino a €300.000, in alternativa alla perizia, è possibile produrre una dichiarazione sostitutiva di atto notorio del legale rappresentante (autocertificazione). Si consiglia comunque la perizia anche per importi inferiori.</p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">9.3 Documentazione Tecnica</h3>
          
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Tipologia</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Documenti Richiesti</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-blue-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-900">Schede Tecniche</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Manuali d'uso, schede tecniche del produttore, brochure tecniche</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-900">Interconnessione</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Layout di rete, schema di collegamento, documentazione protocolli di comunicazione</td>
                </tr>
                <tr className="bg-yellow-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-yellow-900">Integrazione</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Documentazione software, screenshot interfacce, log di sistema</td>
                </tr>
                <tr className="bg-red-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-red-900">Sicurezza</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Certificazioni CE, documentazione conformità normative sicurezza</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">9.4 Relazione Tecnica di Interconnessione</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            La relazione di interconnessione deve contenere:
          </p>
          
          <div className="space-y-4 mb-6">
            <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
              <h4 className="font-semibold text-indigo-900 mb-2">Descrizione del bene</h4>
              <p className="text-indigo-800 text-sm">Caratteristiche tecniche, funzionalità, componenti</p>
            </div>
            <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
              <h4 className="font-semibold text-teal-900 mb-2">Analisi dei requisiti</h4>
              <p className="text-teal-800 text-sm">Verifica puntuale di ciascuna caratteristica obbligatoria</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-900 mb-2">Schema di interconnessione</h4>
              <p className="text-orange-800 text-sm">Diagramma di rete e flussi di informazioni</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-900 mb-2">Verifica dell'integrazione</h4>
              <p className="text-green-800 text-sm">Test effettuati e risultati ottenuti</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-900 mb-2">Evidenze fotografiche</h4>
              <p className="text-purple-800 text-sm">Foto del bene installato e delle connessioni</p>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">Attenzione</h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <p>Tutta la documentazione deve essere conservata per l'intero periodo di fruizione del beneficio e per i <strong>5 anni successivi</strong>. L'Agenzia delle Entrate può richiedere l'esibizione della documentazione in qualsiasi momento durante i controlli (fino a 8 anni post-fruizione).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sezione 10: Controlli e Verifiche */}
      <div id="controlli-verifiche" className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">10. Controlli e Verifiche</h2>
        <div className="prose max-w-none">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">10.1 Soggetti Preposti ai Controlli</h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                <svg className="h-5 w-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2v8h12V6H4z" clipRule="evenodd" />
                </svg>
                Agenzia delle Entrate
              </h4>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li>• Verifica requisiti formali</li>
                <li>• Controllo compensazioni</li>
                <li>• Verifica dichiarazioni</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-900 mb-3 flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                MIMIT
              </h4>
              <ul className="space-y-2 text-green-800 text-sm">
                <li>• Verifica tecnica requisiti</li>
                <li>• Controllo interconnessione</li>
                <li>• Monitoraggio investimenti</li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-900 mb-3 flex items-center">
                <svg className="h-5 w-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" clipRule="evenodd" />
                </svg>
                Guardia di Finanza
              </h4>
              <ul className="space-y-2 text-red-800 text-sm">
                <li>• Controlli antifrode</li>
                <li>• Verifiche incrociate</li>
                <li>• Ispezioni in loco</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">10.2 Tempistiche dei Controlli</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            I controlli possono essere effettuati:
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <h4 className="font-semibold text-yellow-900 mb-2">Ex ante</h4>
              <p className="text-yellow-800 text-sm">Prima dell'utilizzo del credito (verifica preventiva)</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">In itinere</h4>
              <p className="text-blue-800 text-sm">Durante il periodo di fruizione del credito</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-900 mb-2">Ex post</h4>
              <p className="text-red-800 text-sm">Fino a 8 anni dopo l'utilizzo del credito (termine ordinario accertamento + 2 anni)</p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">10.3 Oggetto dei Controlli</h3>
          
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Aspetto</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Elementi Verificati</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-blue-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-900">Requisiti Soggettivi</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Presenza stabile organizzazione, regolarità contributiva, assenza procedure concorsuali</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-900">Requisiti Oggettivi</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Conformità beni agli allegati, caratteristiche tecniche, effettiva interconnessione</td>
                </tr>
                <tr className="bg-yellow-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-yellow-900">Aspetti Temporali</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Rispetto tempistiche ordine, consegna, interconnessione, comunicazioni</td>
                </tr>
                <tr className="bg-purple-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-purple-900">Aspetti Documentali</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Completezza e validità perizia, fatture, pagamenti, registrazioni contabili</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">10.4 Conseguenze di Irregolarità</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-900 mb-4">Sanzioni Amministrative</h4>
              <ul className="space-y-2 text-orange-800 text-sm">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Recupero del credito indebitamente utilizzato
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Interessi legali dal giorno di utilizzo
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Sanzioni dal 100% al 200% del credito
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Sanzioni ridotte con ravvedimento operoso
                </li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-900 mb-4">Conseguenze Penali</h4>
              <ul className="space-y-2 text-red-800 text-sm">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Dichiarazione infedele (se superata soglia)
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Indebita compensazione (se superata soglia)
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Truffa aggravata per conseguimento erogazioni pubbliche
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Falso in perizia (per il perito)
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
                  <p>Con il nuovo sistema di prenotazione 2025, i controlli saranno intensificati e automatizzati. L'incrocio delle banche dati tra <strong>MIMIT</strong> e Agenzia delle Entrate permetterà verifiche immediate sulla corrispondenza tra quanto comunicato e quanto effettivamente realizzato.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sezione 11: FAQ - Domande Frequenti */}
      <div id="faq-domande-frequenti" className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">11. FAQ - Domande Frequenti</h2>
        <div className="prose max-w-none">
          <div className="space-y-6">
            
            {/* FAQ 1 */}
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
                <svg className="h-5 w-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                Posso fruire del credito Transizione 4.0 se ho già utilizzato quello 5.0?
              </h3>
              <p className="text-blue-800 text-sm leading-relaxed">
                <strong>Sì</strong>, i due crediti sono cumulabili purché si riferiscano a investimenti diversi e non ci sia sovrapposizione tra i beni agevolati. È necessario mantenere documentazione separata per ciascun credito.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-lg font-semibold text-green-900 mb-3 flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                Cosa succede se non riesco a interconnettere i beni entro i termini?
              </h3>
              <p className="text-green-800 text-sm leading-relaxed">
                L'interconnessione deve avvenire entro il 31 dicembre dell'anno di entrata in funzione. In caso di impossibilità tecnica documentata, è possibile richiedere una proroga motivata all'Agenzia delle Entrate.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h3 className="text-lg font-semibold text-yellow-900 mb-3 flex items-center">
                <svg className="h-5 w-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                È obbligatorio il perito per tutti gli investimenti?
              </h3>
              <p className="text-yellow-800 text-sm leading-relaxed">
                La perizia tecnica giurata è <strong>obbligatoria solo per investimenti superiori a €300.000</strong>. Per importi inferiori è sufficiente una <strong>dichiarazione sostitutiva di atto notorio</strong> del legale rappresentante (autocertificazione).
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-900 mb-3 flex items-center">
                <svg className="h-5 w-5 text-purple-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                Posso cedere il credito a terzi?
              </h3>
              <p className="text-purple-800 text-sm leading-relaxed">
                <strong>No</strong>, il credito d'imposta Transizione 4.0 non è cedibile a terzi e deve essere utilizzato esclusivamente dall'impresa beneficiaria in compensazione.
              </p>
            </div>

            {/* FAQ 5 */}
            <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
              <h3 className="text-lg font-semibold text-indigo-900 mb-3 flex items-center">
                <svg className="h-5 w-5 text-indigo-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                Come funziona il nuovo sistema di prenotazione 2025?
              </h3>
              <p className="text-indigo-800 text-sm leading-relaxed">
                Dal <strong>17 giugno 2025 ore 14:00</strong> è attivo il sistema di prenotazione tramite piattaforma GSE. Prima di effettuare l'investimento, è necessario prenotare il credito indicando l'importo previsto e i beni da acquistare.
              </p>
            </div>

            {/* FAQ 6 */}
            <div className="bg-pink-50 p-6 rounded-lg border border-pink-200">
              <h3 className="text-lg font-semibold text-pink-900 mb-3 flex items-center">
                <svg className="h-5 w-5 text-pink-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                Qual è la differenza tra beni materiali e immateriali?
              </h3>
              <p className="text-pink-800 text-sm leading-relaxed">
                I <strong>beni materiali</strong> sono macchinari, impianti e attrezzature fisiche. I <strong>beni immateriali</strong> sono software, licenze e tecnologie digitali. Entrambi devono essere nuovi e conformi agli allegati normativi.
              </p>
            </div>

            {/* FAQ 7 */}
            <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
              <h3 className="text-lg font-semibold text-teal-900 mb-3 flex items-center">
                <svg className="h-5 w-5 text-teal-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                Posso utilizzare il credito per beni usati o ricondizionati?
              </h3>
              <p className="text-teal-800 text-sm leading-relaxed">
                <strong>No</strong>, il credito spetta esclusivamente per beni nuovi di fabbrica. Non sono ammessi beni usati, ricondizionati, rigenerati o demo, anche se tecnologicamente avanzati.
              </p>
            </div>

            {/* FAQ 8 */}
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
              <h3 className="text-lg font-semibold text-orange-900 mb-3 flex items-center">
                <svg className="h-5 w-5 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                Cosa succede se supero il limite di compensazione annuale?
              </h3>
              <p className="text-orange-800 text-sm leading-relaxed">
                Il credito eccedente il limite di compensazione annuale (€700.000 per PMI, €1.000.000 per grandi imprese) può essere riportato agli anni successivi senza limiti temporali o ceduto a terzi.
              </p>
            </div>

            {/* FAQ 9 */}
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <h3 className="text-lg font-semibold text-red-900 mb-3 flex items-center">
                <svg className="h-5 w-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                Sono escluso se ho ricevuto aiuti de minimis?
              </h3>
              <p className="text-red-800 text-sm leading-relaxed">
                <strong>No</strong>, gli aiuti de minimis non precludono l'accesso al credito Transizione 4.0. Tuttavia, è necessario verificare il cumulo complessivo degli aiuti ricevuti per rispettare i massimali europei.
              </p>
            </div>

            {/* FAQ 10 */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <svg className="h-5 w-5 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                Come devo comportarmi se cambio la destinazione d'uso dei beni?
              </h3>
              <p className="text-gray-800 text-sm leading-relaxed">
                I beni agevolati devono mantenere la destinazione produttiva nell'unità locale per almeno <strong>3 anni</strong>. Il cambio di destinazione comporta la decadenza dal beneficio e il recupero del credito utilizzato.
              </p>
            </div>

            {/* FAQ 11 */}
            <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
              <h3 className="text-lg font-semibold text-emerald-900 mb-3 flex items-center">
                <svg className="h-5 w-5 text-emerald-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                Posso modificare l'investimento dopo aver effettuato la comunicazione?
              </h3>
              <p className="text-emerald-800 text-sm leading-relaxed">
                Sono possibili modifiche non sostanziali (variazioni di importo entro il 20%, sostituzione di beni equivalenti). Per modifiche sostanziali è necessaria una nuova comunicazione e valutazione della conformità.
              </p>
            </div>

            {/* FAQ 12 */}
            <div className="bg-violet-50 p-6 rounded-lg border border-violet-200">
              <h3 className="text-lg font-semibold text-violet-900 mb-3 flex items-center">
                <svg className="h-5 w-5 text-violet-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                Quanto tempo ho per utilizzare il credito?
              </h3>
              <p className="text-violet-800 text-sm leading-relaxed">
                Il credito può essere utilizzato in compensazione senza limiti temporali. Non esistono limiti annuali specifici per Transizione 4.0 oltre alle regole generali del modello F24.
              </p>
            </div>

            {/* FAQ 13 */}
            <div className="bg-cyan-50 p-6 rounded-lg border border-cyan-200">
              <h3 className="text-lg font-semibold text-cyan-900 mb-3 flex items-center">
                <svg className="h-5 w-5 text-cyan-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                Cosa fare in caso di controllo da parte dell'Agenzia delle Entrate?
              </h3>
              <p className="text-cyan-800 text-sm leading-relaxed">
                Collaborare fornendo tutta la documentazione richiesta nei termini indicati. Mantenere un atteggiamento trasparente e consultare un consulente fiscale esperto per gestire al meglio la procedura di controllo.
              </p>
            </div>

            {/* FAQ 14 */}
            <div className="bg-lime-50 p-6 rounded-lg border border-lime-200">
              <h3 className="text-lg font-semibold text-lime-900 mb-3 flex items-center">
                <svg className="h-5 w-5 text-lime-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                I costi di installazione e collaudo sono agevolabili?
              </h3>
              <p className="text-lime-800 text-sm leading-relaxed">
                <strong>Sì</strong>, sono agevolabili i costi accessori strettamente connessi all'investimento: installazione, montaggio, collaudo, formazione del personale, purché inclusi nel costo del bene e chiaramente identificabili.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Sezione 12: Checklist Finale */}
      <div id="checklist-finale" className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">12. Checklist Finale</h2>
        <div className="prose max-w-none">
          
          <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-green-800">Checklist Completa</h3>
                <div className="mt-2 text-sm text-green-700">
                  <p>Utilizza questa checklist per verificare di aver completato tutti i passaggi necessari per accedere al credito Transizione 4.0.</p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">12.1 Verifica Preliminare dei Requisiti</h3>
          
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
            <h4 className="font-semibold text-blue-900 mb-4">✓ Requisiti Soggettivi</h4>
            <div className="space-y-3">
              <label className="flex items-center space-x-3 text-blue-800">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                <span className="text-sm">Impresa residente in Italia con stabile organizzazione</span>
              </label>
              <label className="flex items-center space-x-3 text-blue-800">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                <span className="text-sm">Regolarità contributiva e fiscale</span>
              </label>
              <label className="flex items-center space-x-3 text-blue-800">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                <span className="text-sm">Assenza di procedure concorsuali in corso</span>
              </label>
              <label className="flex items-center space-x-3 text-blue-800">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                <span className="text-sm">Non in stato di difficoltà economico-finanziaria</span>
              </label>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">12.2 Pianificazione dell'Investimento</h3>
          
          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 mb-6">
            <h4 className="font-semibold text-yellow-900 mb-4">✓ Beni e Investimenti</h4>
            <div className="space-y-3">
              <label className="flex items-center space-x-3 text-yellow-800">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-yellow-600" />
                <span className="text-sm">Beni conformi all'Allegato A della normativa (Allegato B escluso per il 2025)</span>
              </label>
              <label className="flex items-center space-x-3 text-yellow-800">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-yellow-600" />
                <span className="text-sm">Beni nuovi di fabbrica (non usati/ricondizionati)</span>
              </label>
              <label className="flex items-center space-x-3 text-yellow-800">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-yellow-600" />
                <span className="text-sm">Caratteristiche tecniche di interconnessione verificate</span>
              </label>
              <label className="flex items-center space-x-3 text-yellow-800">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-yellow-600" />
                <span className="text-sm">Caratteristiche di interconnessione documentate e verificabili ex-post</span>
              </label>
              <label className="flex items-center space-x-3 text-yellow-800">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-yellow-600" />
                <span className="text-sm">Prenotazione effettuata (per investimenti dal 2025)</span>
              </label>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">12.3 Documentazione e Perizia</h3>
          
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 mb-6">
            <h4 className="font-semibold text-purple-900 mb-4">✓ Documentazione Obbligatoria</h4>
            <div className="space-y-3">
              <label className="flex items-center space-x-3 text-purple-800">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-purple-600" />
                <span className="text-sm">Perizia tecnica giurata (se {'>'}€300.000) o dichiarazione sostitutiva</span>
              </label>
              <label className="flex items-center space-x-3 text-purple-800">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-purple-600" />
                <span className="text-sm">Fatture di acquisto con descrizione dettagliata</span>
              </label>
              <label className="flex items-center space-x-3 text-purple-800">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-purple-600" />
                <span className="text-sm">Documenti di trasporto e consegna</span>
              </label>
              <label className="flex items-center space-x-3 text-purple-800">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-purple-600" />
                <span className="text-sm">Attestazioni di pagamento</span>
              </label>
              <label className="flex items-center space-x-3 text-purple-800">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-purple-600" />
                <span className="text-sm">Certificazione di interconnessione</span>
              </label>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">12.4 Adempimenti e Comunicazioni</h3>
          
          <div className="bg-red-50 p-6 rounded-lg border border-red-200 mb-6">
            <h4 className="font-semibold text-red-900 mb-4">✓ Comunicazioni Obbligatorie</h4>
            <div className="space-y-3">
              <label className="flex items-center space-x-3 text-red-800">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-red-600" />
                <span className="text-sm">Comunicazione investimenti effettuati (entro 31 gennaio 2026)</span>
              </label>
              <label className="flex items-center space-x-3 text-red-800">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-red-600" />
                <span className="text-sm">Comunicazione interconnessione (entro 30 giorni)</span>
              </label>
              <label className="flex items-center space-x-3 text-red-800">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-red-600" />
                <span className="text-sm">Prenotazione preventiva credito (per investimenti 2025)</span>
              </label>
              <label className="flex items-center space-x-3 text-red-800">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-red-600" />
                <span className="text-sm">Registrazione contabile corretta</span>
              </label>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">12.5 Utilizzo del Credito</h3>
          
          <div className="bg-green-50 p-6 rounded-lg border border-green-200 mb-6">
            <h4 className="font-semibold text-green-900 mb-4">✓ Modalità di Fruizione</h4>
            <div className="space-y-3">
              <label className="flex items-center space-x-3 text-green-800">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-green-600" />
                <span className="text-sm">Verifica limiti annuali di compensazione</span>
              </label>
              <label className="flex items-center space-x-3 text-green-800">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-green-600" />
                <span className="text-sm">Modello F24 compilato correttamente</span>
              </label>
              <label className="flex items-center space-x-3 text-green-800">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-green-600" />
                <span className="text-sm">Documentazione cessione preparata (se applicabile)</span>
              </label>
              <label className="flex items-center space-x-3 text-green-800">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-green-600" />
                <span className="text-sm">Sistema di monitoraggio crediti attivato</span>
              </label>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">12.6 Conservazione e Controlli</h3>
          
          <div className="bg-orange-50 p-6 rounded-lg border border-orange-200 mb-8">
            <h4 className="font-semibold text-orange-900 mb-4">✓ Gestione Post-Investimento</h4>
            <div className="space-y-3">
              <label className="flex items-center space-x-3 text-orange-800">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-600" />
                <span className="text-sm">Archiviazione documentazione per 10 anni</span>
              </label>
              <label className="flex items-center space-x-3 text-orange-800">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-600" />
                <span className="text-sm">Mantenimento destinazione produttiva per 3 anni</span>
              </label>
              <label className="flex items-center space-x-3 text-orange-800">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-600" />
                <span className="text-sm">Sistema di backup documentazione attivato</span>
              </label>
              <label className="flex items-center space-x-3 text-orange-800">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-600" />
                <span className="text-sm">Consulente fiscale informato e aggiornato</span>
              </label>
              <label className="flex items-center space-x-3 text-orange-800">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-600" />
                <span className="text-sm">Procedure interne per gestione controlli definite</span>
              </label>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}
