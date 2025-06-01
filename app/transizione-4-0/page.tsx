'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Transizione40Page() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (sectionId: string) => {
    if (activeSection === sectionId) {
      setActiveSection(null);
    } else {
      setActiveSection(sectionId);
    }
  };

  const handleIndexClick = (sectionId: string, event: React.MouseEvent) => {
    event.preventDefault();
    setActiveSection(sectionId);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  // Schema.org structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Transizione 4.0: Guida Completa 2025',
    description: 'Guida completa alla Transizione 4.0 2025: requisiti, benefici, crediti d\'imposta e procedure per le imprese italiane.',
    author: {
      '@type': 'Organization',
      name: 'SolariX Business',
      url: 'https://www.solarixbusiness.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'SolariX Business',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.solarixbusiness.com/logo.png'
      }
    },
    datePublished: '2025-05-31',
    dateModified: '2025-05-31'
  };

  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Transizione 4.0: Guida Completa 2025 | SolariX Business</title>
        <meta name="description" content="Guida completa alla Transizione 4.0 2025: requisiti, benefici, crediti d'imposta e procedure per le imprese italiane." />
        <meta name="keywords" content="Transizione 4.0, credito d'imposta, digitalizzazione, innovazione, industria 4.0, beni strumentali" />
        <link rel="canonical" href="https://www.solarixbusiness.it/transizione-4-0" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-700">Transizione 4.0: Guida Completa 2025</h1>

        {/* Immagine Guida Transizione 4.0 */}
        <div className="mb-12 w-full">
          <Image
            src="/images/strumenti/trans-4.0.jpg"
            alt="Guida Transizione 4.0"
            width={1200}
            height={450}
            className="w-full h-auto object-cover rounded-lg shadow-md max-h-72 sm:max-h-80 md:max-h-96 lg:max-h-[450px]"
            priority
            sizes="100vw"
          />
        </div>
        
        <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Indice dei contenuti</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-medium mb-3 text-blue-600">Parte 1: Quadro Normativo e Beneficiari</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#introduzione" onClick={(e) => handleIndexClick('introduzione', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">1</span>
                    Introduzione alla Transizione 4.0
                  </a>
                </li>
                <li>
                  <a href="#quadro-normativo" onClick={(e) => handleIndexClick('quadro-normativo', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">2</span>
                    Quadro Normativo
                  </a>
                </li>
                <li>
                  <a href="#beneficiari" onClick={(e) => handleIndexClick('beneficiari', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">3</span>
                    Soggetti Beneficiari
                  </a>
                </li>
                <li>
                  <a href="#novita-2025" onClick={(e) => handleIndexClick('novita-2025', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">4</span>
                    Novità 2025
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3 text-blue-600">Parte 2: Beni Ammissibili e Crediti</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#beni-ammissibili" onClick={(e) => handleIndexClick('beni-ammissibili', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">5</span>
                    Beni Ammissibili
                  </a>
                </li>
                <li>
                  <a href="#aliquote-calcolo" onClick={(e) => handleIndexClick('aliquote-calcolo', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">6</span>
                    Aliquote e Calcolo del Credito
                  </a>
                </li>
                <li>
                  <a href="#utilizzo-credito" onClick={(e) => handleIndexClick('utilizzo-credito', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">7</span>
                    Utilizzo del Credito d'Imposta
                  </a>
                </li>
                <li>
                  <a href="#comunicazioni" onClick={(e) => handleIndexClick('comunicazioni', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">8</span>
                    Comunicazioni Obbligatorie
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-medium mb-3 text-blue-600">Parte 3: Documentazione e Controlli</h3>
            <ul className="space-y-2 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
              <li>
                <a href="#documentazione" onClick={(e) => handleIndexClick('documentazione', e)} className="text-blue-600 hover:underline flex items-center">
                  <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">9</span>
                  Documentazione Necessaria
                </a>
              </li>
              <li>
                <a href="#controlli" onClick={(e) => handleIndexClick('controlli', e)} className="text-blue-600 hover:underline flex items-center">
                  <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">10</span>
                  Controlli e Verifiche
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => handleIndexClick('faq', e)} className="text-blue-600 hover:underline flex items-center">
                  <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">11</span>
                  FAQ - Domande Frequenti
                </a>
              </li>
              <li>
                <a href="#checklist" onClick={(e) => handleIndexClick('checklist', e)} className="text-blue-600 hover:underline flex items-center">
                  <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">12</span>
                  Checklist Finale
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Sezione 1: Introduzione */}
        <div className="mb-10">
          <div className="flex items-center justify-between bg-blue-100 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('introduzione')}>
            <h2 id="introduzione" className="text-2xl font-semibold text-blue-700">1. Introduzione alla Transizione 4.0</h2>
            <span className="text-blue-700">{activeSection === 'introduzione' ? '−' : '+'}</span>
          </div>
          {activeSection === 'introduzione' && (
            <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-100">
              <p className="mb-4">La Transizione 4.0 rappresenta l'evoluzione del Piano Industria 4.0, introdotto per la prima volta nel 2017 e progressivamente modificato fino alla versione attuale. Si tratta del principale strumento di politica industriale italiana per sostenere la trasformazione digitale delle imprese.</p>
              
              <p className="mb-4">Questo incentivo fiscale consente alle aziende di ottenere un credito d'imposta per investimenti in beni strumentali tecnologicamente avanzati, con caratteristiche che li rendono conformi al paradigma 4.0.</p>
              
              <p className="mb-4">La misura ha subito diverse evoluzioni nel tempo, con modifiche alle aliquote, alle modalità di fruizione e alle procedure di accesso. L'ultima versione, in vigore per il 2025, introduce importanti novità che richiedono particolare attenzione da parte delle imprese.</p>
              
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-6">
                <p className="font-semibold text-yellow-800">Attenzione</p>
                <p className="mt-2">Per il 2025, la Transizione 4.0 prevede un budget limitato di €2,2 miliardi e un sistema di prenotazione obbligatorio. Solo i beni materiali dell'Allegato A sono ammissibili, con esclusione totale dei beni immateriali.</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Sezione 2: Quadro Normativo */}
        <div className="mb-10">
          <div className="flex items-center justify-between bg-blue-100 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('quadro-normativo')}>
            <h2 id="quadro-normativo" className="text-2xl font-semibold text-blue-700">2. Quadro Normativo</h2>
            <span className="text-blue-700">{activeSection === 'quadro-normativo' ? '−' : '+'}</span>
          </div>
          {activeSection === 'quadro-normativo' && (
            <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-100">
              <h3 className="text-xl font-medium mb-4 text-blue-600">2.1 Evoluzione Normativa</h3>
              
              <p className="mb-4">La Transizione 4.0 ha subito diverse modifiche normative dal suo esordio come "Industria 4.0" nel 2017:</p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Legge 11 dicembre 2016, n. 232 (Bilancio 2017): Introduzione del Piano Industria 4.0 con super e iper-ammortamento</li>
                <li>Legge 27 dicembre 2019, n. 160 (Bilancio 2020): Trasformazione in credito d'imposta</li>
                <li>Legge 30 dicembre 2020, n. 178 (Bilancio 2021): Potenziamento aliquote e estensione temporale</li>
                <li>Decreto Legge 29 marzo 2024, n. 39: Modifiche per il 2024</li>
                <li>Decreto direttoriale 24 aprile 2024: Disciplina comunicazioni 2024</li>
                <li>Decreto direttoriale 15 maggio 2025: Nuovo sistema di prenotazione 2025</li>
              </ul>
              
              <h3 className="text-xl font-medium mb-4 text-blue-600">2.2 Riferimenti Tecnici</h3>
              
              <p className="mb-4">I beni agevolabili sono definiti in specifici allegati alla Legge 232/2016:</p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Allegato A</strong>: Beni materiali 4.0 (macchinari, apparecchiature, ecc.)</li>
                <li><strong>Allegato B</strong>: Beni immateriali 4.0 (software, sistemi, piattaforme, ecc.)</li>
              </ul>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-6">
                <p className="font-semibold text-blue-800">Nota importante</p>
                <p className="mt-2">Per il 2025, sono agevolabili esclusivamente i beni materiali dell'Allegato A, con esclusione totale dei beni immateriali dell'Allegato B.</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Sezione 3: Soggetti Beneficiari */}
        <div className="mb-10">
          <div className="flex items-center justify-between bg-blue-100 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('beneficiari')}>
            <h2 id="beneficiari" className="text-2xl font-semibold text-blue-700">3. Soggetti Beneficiari</h2>
            <span className="text-blue-700">{activeSection === 'beneficiari' ? '−' : '+'}</span>
          </div>
          {activeSection === 'beneficiari' && (
            <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-100">
              <h3 className="text-xl font-medium mb-4 text-blue-600">3.1 Chi Può Accedere</h3>
              
              <p className="mb-4">Possono beneficiare del credito d'imposta Transizione 4.0:</p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Tutte le imprese residenti in Italia, indipendentemente dalla forma giuridica</li>
                <li>Imprese italiane con stabile organizzazione nel territorio</li>
                <li>Esercenti arti e professioni (solo per beni non 4.0)</li>
                <li>Enti non commerciali per attività commerciali esercitate</li>
              </ul>
              
              <h3 className="text-xl font-medium mb-4 text-blue-600">3.2 Soggetti Esclusi</h3>
              
              <p className="mb-4">Sono esclusi dall'agevolazione:</p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Imprese in stato di liquidazione o fallimento</li>
                <li>Imprese destinatarie di sanzioni interdittive</li>
                <li>Imprese che non rispettano normative sulla sicurezza</li>
                <li>Imprese che non sono in regola con contributi previdenziali</li>
              </ul>
              
              <h3 className="text-xl font-medium mb-4 text-blue-600">3.3 Condizioni Specifiche</h3>
              
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 border-b border-gray-200 bg-blue-50 text-left">Requisito</th>
                      <th className="py-2 px-4 border-b border-gray-200 bg-blue-50 text-left">Descrizione</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 font-medium">Regolarità contributiva</td>
                      <td className="py-2 px-4 border-b border-gray-200">DURC regolare al momento della fruizione</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 font-medium">Sicurezza sul lavoro</td>
                      <td className="py-2 px-4 border-b border-gray-200">Rispetto normative sulla sicurezza nei luoghi di lavoro</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 font-medium">Sede dell'investimento</td>
                      <td className="py-2 px-4 border-b border-gray-200">Strutture produttive situate in Italia</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 font-medium">Mantenimento beni</td>
                      <td className="py-2 px-4 border-b border-gray-200">Beni conservati in struttura per almeno 5 anni (o vita utile)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg border border-red-200 mt-6">
                <p className="font-semibold text-red-800">Attenzione</p>
                <p className="mt-2">Per il 2025, la verifica dei requisiti soggettivi sarà particolarmente rigorosa, con controlli incrociati automatici tra MISE e Agenzia delle Entrate prima dell'autorizzazione all'utilizzo del credito.</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Sezione 4: Novità 2025 */}
        <div className="mb-10">
          <div className="flex items-center justify-between bg-blue-100 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('novita-2025')}>
            <h2 id="novita-2025" className="text-2xl font-semibold text-blue-700">4. Novità 2025</h2>
            <span className="text-blue-700">{activeSection === 'novita-2025' ? '−' : '+'}</span>
          </div>
          {activeSection === 'novita-2025' && (
            <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-100">
              <h3 className="text-xl font-medium mb-4 text-blue-600">4.1 Principali Cambiamenti</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-blue-700 mb-2">Budget Limitato</h4>
                  <p>Stanziamento di €2,2 miliardi per il 2025, con accesso subordinato alla disponibilità di risorse.</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-blue-700 mb-2">Sistema di Prenotazione</h4>
                  <p>Introduzione di un sistema di prenotazione obbligatorio con priorità in base all'ordine cronologico.</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-blue-700 mb-2">Solo Beni Materiali</h4>
                  <p>Esclusione totale dei beni immateriali (Allegato B), agevolabili solo i beni materiali dell'Allegato A.</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-blue-700 mb-2">Comunicazioni Multiple</h4>
                  <p>Obbligo di comunicazioni preventive e consuntive, con scadenze precise e vincolanti.</p>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mb-4 text-blue-600">4.2 Timeline Critica</h3>
              
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 border-b border-gray-200 bg-blue-50 text-left">Scadenza</th>
                      <th className="py-2 px-4 border-b border-gray-200 bg-blue-50 text-left">Adempimento</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 font-medium">31 gennaio 2026</td>
                      <td className="py-2 px-4 border-b border-gray-200">Comunicazione preventiva per tutti gli investimenti 2025/2026</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 font-medium">Entro 30 giorni dalla preventiva</td>
                      <td className="py-2 px-4 border-b border-gray-200">Comunicazione pagamento 20% del costo investimento</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 font-medium">31 gennaio 2026</td>
                      <td className="py-2 px-4 border-b border-gray-200">Comunicazione completamento per investimenti ultimati 2025</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 font-medium">31 luglio 2026</td>
                      <td className="py-2 px-4 border-b border-gray-200">Comunicazione completamento per investimenti ultimati I sem. 2026</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-6">
                <p className="font-semibold text-yellow-800">Importante</p>
                <p className="mt-2">L'ordine cronologico di invio delle comunicazioni determina la priorità nell'accesso alle risorse limitate. Una volta esaurito il budget di €2,2 miliardi, le comunicazioni tardive saranno acquisite ma non finanziate, salvo recupero di risorse da rinunce o revoche.</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Sezione 5: Beni Ammissibili */}
        <div className="mb-10">
          <div className="flex items-center justify-between bg-blue-100 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('beni-ammissibili')}>
            <h2 id="beni-ammissibili" className="text-2xl font-semibold text-blue-700">5. Beni Ammissibili</h2>
            <span className="text-blue-700">{activeSection === 'beni-ammissibili' ? '−' : '+'}</span>
          </div>
          {activeSection === 'beni-ammissibili' && (
            <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-100">
              <h3 className="text-xl font-medium mb-4 text-blue-600">5.1 Categorie di Beni Agevolabili</h3>
              
              <p className="mb-4">Per il 2025, sono agevolabili esclusivamente i beni materiali dell'Allegato A della Legge 232/2016, suddivisi in tre categorie:</p>
              
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 border-b border-gray-200 bg-blue-50 text-left">Categoria</th>
                      <th className="py-2 px-4 border-b border-gray-200 bg-blue-50 text-left">Descrizione</th>
                      <th className="py-2 px-4 border-b border-gray-200 bg-blue-50 text-left">Esempi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 font-medium">A1</td>
                      <td className="py-2 px-4 border-b border-gray-200">Beni strumentali con controllo per mezzo di CNC e/o PLC</td>
                      <td className="py-2 px-4 border-b border-gray-200">Robot, macchine utensili, sistemi per l'assemblaggio</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 font-medium">A2</td>
                      <td className="py-2 px-4 border-b border-gray-200">Sistemi per l'assicurazione della qualità e sostenibilità</td>
                      <td className="py-2 px-4 border-b border-gray-200">Sistemi di monitoraggio, dispositivi per l'interazione uomo-macchina</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 font-medium">A3</td>
                      <td className="py-2 px-4 border-b border-gray-200">Dispositivi per l'interazione uomo-macchina e per il miglioramento ergonomico</td>
                      <td className="py-2 px-4 border-b border-gray-200">Banchi e postazioni, interfacce uomo-macchina intelligenti</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h3 className="text-xl font-medium mb-4 text-blue-600">5.2 Caratteristiche Tecniche Obbligatorie</h3>
              
              <p className="mb-4">Per i beni della categoria A1, sono richieste obbligatoriamente tutte le seguenti 5 caratteristiche:</p>
              
              <ol className="list-decimal pl-6 mb-6 space-y-2">
                <li><strong>Controllo per mezzo di CNC e/o PLC</strong>: Il bene deve essere controllato da sistemi computerizzati</li>
                <li><strong>Interconnessione ai sistemi informatici di fabbrica</strong>: Capacità di scambiare informazioni con sistemi interni</li>
                <li><strong>Integrazione automatizzata con il sistema logistico</strong>: Collegamento con sistemi logistici della fabbrica</li>
                <li><strong>Interfacce uomo-macchina semplici e intuitive</strong>: Sistemi di interazione avanzati</li>
                <li><strong>Rispondenza ai più recenti standard di sicurezza</strong>: Conformità alle norme di sicurezza</li>
              </ol>
              
              <p className="mb-4">Inoltre, devono essere soddisfatte almeno 2 delle seguenti 3 caratteristiche aggiuntive:</p>
              
              <ol className="list-decimal pl-6 mb-6 space-y-2">
                <li><strong>Sistemi di telemanutenzione e/o telediagnosi</strong>: Possibilità di monitoraggio e manutenzione da remoto</li>
                <li><strong>Monitoraggio continuo delle condizioni di lavoro</strong>: Sensori che monitorano parametri di processo</li>
                <li><strong>Caratteristiche di integrazione tra macchine</strong>: Capacità di integrazione con altre macchine del ciclo produttivo</li>
              </ol>
              
              <div className="bg-red-50 p-4 rounded-lg border border-red-200 mt-6">
                <p className="font-semibold text-red-800">Attenzione</p>
                <p className="mt-2">L'interconnessione è un requisito imprescindibile per accedere al beneficio. Il bene deve essere in grado di scambiare informazioni con sistemi interni (es: sistema gestionale, sistemi di pianificazione, sistemi di progettazione, ecc.) e/o esterni (es: clienti, fornitori, partner, ecc.) per mezzo di un collegamento basato su specifiche documentate.</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Sezione 6: Aliquote e Calcolo del Credito */}
        <div className="mb-10">
          <div className="flex items-center justify-between bg-blue-100 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('aliquote-calcolo')}>
            <h2 id="aliquote-calcolo" className="text-2xl font-semibold text-blue-700">6. Aliquote e Calcolo del Credito</h2>
            <span className="text-blue-700">{activeSection === 'aliquote-calcolo' ? '−' : '+'}</span>
          </div>
          {activeSection === 'aliquote-calcolo' && (
            <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-100">
              <h3 className="text-xl font-medium mb-4 text-blue-600">6.1 Aliquote per Beni Materiali 4.0</h3>
              
              <p className="mb-4">Il credito d'imposta per i beni materiali 4.0 (Allegato A) è calcolato secondo un sistema a scaglioni progressivi:</p>
              
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 border-b border-gray-200 bg-blue-50 text-left">Fascia di Investimento</th>
                      <th className="py-2 px-4 border-b border-gray-200 bg-blue-50 text-left">Aliquota</th>
                      <th className="py-2 px-4 border-b border-gray-200 bg-blue-50 text-left">Credito Massimo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 font-medium">Fino a 2,5 milioni €</td>
                      <td className="py-2 px-4 border-b border-gray-200">50%</td>
                      <td className="py-2 px-4 border-b border-gray-200">€1.250.000</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 font-medium">Da 2,5 a 10 milioni €</td>
                      <td className="py-2 px-4 border-b border-gray-200">30%</td>
                      <td className="py-2 px-4 border-b border-gray-200">€2.250.000</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 font-medium">Da 10 a 20 milioni €</td>
                      <td className="py-2 px-4 border-b border-gray-200">10%</td>
                      <td className="py-2 px-4 border-b border-gray-200">€1.000.000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="mb-6">Il credito d'imposta massimo ottenibile è di €4.500.000 per un investimento di 20 milioni di euro.</p>
              
              <h3 className="text-xl font-medium mb-4 text-blue-600">6.2 Base di Calcolo</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-blue-700 mb-2">Per Acquisto Diretto</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Costo di acquisizione del bene</li>
                    <li>Prezzo netto fatturato</li>
                    <li>IVA esclusa (se detraibile)</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-blue-700 mb-2">Per Leasing Finanziario</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Costo sostenuto dal locatore per l'acquisto</li>
                    <li>Non i canoni di leasing</li>
                    <li>Documentazione dal locatore necessaria</li>
                  </ul>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mb-4 text-blue-600">6.3 Esempi di Calcolo</h3>
              
              <div className="mb-6">
                <h4 className="font-medium text-blue-700 mb-2">Esempio 1: Investimento €1.500.000</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Unica fascia: 1.500.000 × 50% = €750.000</li>
                  <li>3 quote annuali: €250.000/anno</li>
                  <li>Decorrenza: Anno interconnessione</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium text-blue-700 mb-2">Esempio 2: Investimento €12.000.000</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Prima fascia: 2.500.000 × 50% = €1.250.000</li>
                  <li>Seconda fascia: 7.500.000 × 30% = €2.250.000</li>
                  <li>Terza fascia: 2.000.000 × 10% = €200.000</li>
                  <li>Totale: €3.700.000 in 3 quote da €1.233.333</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-6">
                <p className="font-semibold text-yellow-800">Importante</p>
                <p className="mt-2">Il calcolo del credito avviene sempre per scaglioni progressivi. Anche per investimenti che superano i 2,5 milioni di euro, la prima parte dell'investimento beneficia dell'aliquota maggiore del 50%.</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Sezione 7: Utilizzo del Credito d'Imposta */}
        <div className="mb-10">
          <div className="flex items-center justify-between bg-blue-100 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('utilizzo-credito')}>
            <h2 id="utilizzo-credito" className="text-2xl font-semibold text-blue-700">7. Utilizzo del Credito d'Imposta</h2>
            <span className="text-blue-700">{activeSection === 'utilizzo-credito' ? '−' : '+'}</span>
          </div>
          {activeSection === 'utilizzo-credito' && (
            <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-100">
              <h3 className="text-xl font-medium mb-4 text-blue-600">7.1 Modalità di Utilizzo</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-blue-700 mb-2">Compensazione in F24</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Utilizzo esclusivamente in compensazione orizzontale</li>
                    <li>Modello F24 tramite servizi telematici dell'Agenzia delle Entrate</li>
                    <li>Non è rimborsabile</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-blue-700 mb-2">Trasferimento Limitato</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Trasferibile solo con cessione d'azienda</li>
                    <li>Possibile in caso di fusioni e scissioni</li>
                    <li>Non cedibile a terzi</li>
                  </ul>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mb-4 text-blue-600">7.2 Quote Annuali</h3>
              
              <p className="mb-4">Il credito d'imposta è utilizzabile in 3 quote annuali di pari importo:</p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Per beni materiali non 4.0</strong>: A partire dall'anno di entrata in funzione del bene</li>
                <li><strong>Per beni materiali 4.0</strong>: A partire dall'anno dell'interconnessione (non dell'acquisto)</li>
              </ul>
              
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-6">
                <p className="font-semibold text-yellow-800">Importante</p>
                <p className="mt-2">In caso di interconnessione tardiva, il credito d'imposta può essere utilizzato solo a partire dall'anno in cui avviene l'interconnessione, con conseguente slittamento del termine finale (3 anni dall'interconnessione).</p>
              </div>
              
              <h3 className="text-xl font-medium mb-4 text-blue-600">7.3 Limitazioni alla Compensazione</h3>
              
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 border-b border-gray-200 bg-blue-50 text-left">Aspetto</th>
                      <th className="py-2 px-4 border-b border-gray-200 bg-blue-50 text-left">Dettaglio</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 font-medium">Soglia dei €5.000</td>
                      <td className="py-2 px-4 border-b border-gray-200">Compensazione dopo 10 giorni dalla presentazione dichiarazione per importi superiori a €5.000</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 font-medium">Visto di Conformità</td>
                      <td className="py-2 px-4 border-b border-gray-200">Non necessario per crediti agevolativi, esclusione esplicita dall'obbligo</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 font-medium">Autorizzazione 2025</td>
                      <td className="py-2 px-4 border-b border-gray-200">F24 accettati solo se impresa presente nell'elenco autorizzato dall'Agenzia delle Entrate</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h3 className="text-xl font-medium mb-4 text-blue-600">7.4 Trasferimento del Credito</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-medium text-blue-700 mb-2">Operazioni Consentite</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Cessione d'azienda: credito trasferisce all'acquirente</li>
                    <li>Fusioni e scissioni: successione nei rapporti</li>
                    <li>Successione per decesso: eredi possono continuare la fruizione</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-blue-700 mb-2">Operazioni Non Consentite</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Trasferimento a soci di società di persone</li>
                    <li>Trasferimento a partecipanti di enti trasparenti</li>
                    <li>Trasferimento a collaboratori dell'impresa familiare</li>
                    <li>Trasferimento a soci di cooperative (soggetti IRES)</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg border border-red-200 mt-6">
                <p className="font-semibold text-red-800">Attenzione</p>
                <p className="mt-2">Per il 2025, l'utilizzo del credito d'imposta è subordinato all'autorizzazione dell'Agenzia delle Entrate, che verifica la presenza dell'impresa nell'elenco trasmesso mensilmente dal MISE. I modelli F24 presentati da imprese non autorizzate saranno automaticamente scartati.</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Sezione 8: Comunicazioni Obbligatorie */}
        <div className="mb-10">
          <div className="flex items-center justify-between bg-blue-100 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('comunicazioni')}>
            <h2 id="comunicazioni" className="text-2xl font-semibold text-blue-700">8. Comunicazioni Obbligatorie</h2>
            <span className="text-blue-700">{activeSection === 'comunicazioni' ? '−' : '+'}</span>
          </div>
          {activeSection === 'comunicazioni' && (
            <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-100">
              <h3 className="text-xl font-medium mb-4 text-blue-600">8.1 Sistema di Prenotazione 2025</h3>
              
              <p className="mb-4">Per il 2025, è stato introdotto un nuovo sistema di prenotazione con le seguenti caratteristiche:</p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Budget limitato</strong>: €2,2 miliardi totali per il 2025</li>
                <li><strong>Prenotazione obbligatoria</strong>: Prima dell'investimento</li>
                <li><strong>Ordine cronologico</strong>: Determina priorità nell'accesso</li>
                <li><strong>Controllo risorse</strong>: Verifica disponibilità in tempo reale</li>
              </ul>
              
              <h3 className="text-xl font-medium mb-4 text-blue-600">8.2 Procedure di Comunicazione</h3>
              
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 border-b border-gray-200 bg-blue-50 text-left">Fase</th>
                      <th className="py-2 px-4 border-b border-gray-200 bg-blue-50 text-left">Tempistica</th>
                      <th className="py-2 px-4 border-b border-gray-200 bg-blue-50 text-left">Contenuto</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 font-medium">Comunicazione Preventiva</td>
                      <td className="py-2 px-4 border-b border-gray-200">Entro 31 gennaio 2026</td>
                      <td className="py-2 px-4 border-b border-gray-200">Descrizione investimenti previsti, credito stimato, timeline</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 font-medium">Comunicazione di Pagamento</td>
                      <td className="py-2 px-4 border-b border-gray-200">Entro 30 giorni dalla preventiva</td>
                      <td className="py-2 px-4 border-b border-gray-200">Attestazione pagamento almeno 20% del costo investimento</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 font-medium">Comunicazione di Completamento (2025)</td>
                      <td className="py-2 px-4 border-b border-gray-200">Entro 31 gennaio 2026</td>
                      <td className="py-2 px-4 border-b border-gray-200">Documentazione completa: fatture, collaudi, interconnessione</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 font-medium">Comunicazione di Completamento (I sem. 2026)</td>
                      <td className="py-2 px-4 border-b border-gray-200">Entro 31 luglio 2026</td>
                      <td className="py-2 px-4 border-b border-gray-200">Stessa documentazione richiesta per completamento 2025</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h3 className="text-xl font-medium mb-4 text-blue-600">8.3 Piattaforma Telematica GSE</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-blue-700 mb-2">Accesso</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Area Clienti GSE: Registrazione obbligatoria</li>
                    <li>Applicazione dedicata: "Transizione 4.0 – Accedi ai questionari"</li>
                    <li>Credenziali: Rilasciate da GSE</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-blue-700 mb-2">Funzionalità</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Compilazione modelli: Guidata step-by-step</li>
                    <li>Upload documenti: Allegati tecnici e amministrativi</li>
                    <li>Monitoraggio stato: Pratica in tempo reale</li>
                    <li>Comunicazioni: Bidirezionali con MISE</li>
                  </ul>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mb-4 text-blue-600">8.4 Gestione Esaurimento Risorse</h3>
              
              <p className="mb-4">In caso di esaurimento del budget di €2,2 miliardi:</p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Le comunicazioni tardive saranno acquisite ma non finanziate</li>
                <li>Verrà creata una lista d'attesa automatica per nuove disponibilità</li>
                <li>Eventuali recuperi di risorse (da rinunce o revoche) saranno riassegnati rispettando l'ordine cronologico</li>
              </ul>
              
              <div className="bg-red-50 p-4 rounded-lg border border-red-200 mt-6">
                <p className="font-semibold text-red-800">Attenzione</p>
                <p className="mt-2">La mancata comunicazione nei termini previsti comporta l'impossibilità di utilizzare il credito d'imposta. I modelli F24 saranno automaticamente scartati se l'impresa non è presente nell'elenco trasmesso dal MISE all'Agenzia delle Entrate.</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Sezione 9: Documentazione Necessaria */}
        <div className="mb-10">
          <div className="flex items-center justify-between bg-blue-100 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('documentazione')}>
            <h2 id="documentazione" className="text-2xl font-semibold text-blue-700">9. Documentazione Necessaria</h2>
            <span className="text-blue-700">{activeSection === 'documentazione' ? '−' : '+'}</span>
          </div>
          {activeSection === 'documentazione' && (
            <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-100">
              <h3 className="text-xl font-medium mb-4 text-blue-600">9.1 Documentazione Amministrativa</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-blue-700 mb-2">Documentazione Contabile</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Fatture e documenti di acquisto</li>
                    <li>Documenti di trasporto</li>
                    <li>Registri IVA</li>
                    <li>Libro cespiti con indicazione del bene</li>
                    <li>Evidenze di pagamento (bonifici, estratti conto)</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-blue-700 mb-2">Documentazione Contrattuale</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Contratti di acquisto</li>
                    <li>Contratti di leasing (se applicabile)</li>
                    <li>Verbali di consegna e collaudo</li>
                    <li>Dichiarazione del legale rappresentante</li>
                    <li>Comunicazioni al MISE</li>
                  </ul>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mb-4 text-blue-600">9.2 Perizia Tecnica</h3>
              
              <p className="mb-4">Per investimenti superiori a €300.000, è obbligatoria una perizia tecnica giurata rilasciata da un ingegnere o perito industriale iscritto all'albo, o un attestato di conformità rilasciato da un ente di certificazione accreditato, che attesti:</p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Caratteristiche tecniche dei beni</li>
                <li>Rispetto dei requisiti dell'Allegato A</li>
                <li>Interconnessione al sistema aziendale</li>
                <li>Identificazione univoca dei beni (matricola, codice, ecc.)</li>
              </ul>
              
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-6">
                <p className="font-semibold text-yellow-800">Importante</p>
                <p className="mt-2">Per investimenti fino a €300.000, in alternativa alla perizia, è possibile produrre una dichiarazione sostitutiva di atto notorio del legale rappresentante (autocertificazione). Si consiglia comunque la perizia anche per importi inferiori.</p>
              </div>
              
              <h3 className="text-xl font-medium mb-4 text-blue-600">9.3 Documentazione Tecnica</h3>
              
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 border-b border-gray-200 bg-blue-50 text-left">Tipologia</th>
                      <th className="py-2 px-4 border-b border-gray-200 bg-blue-50 text-left">Documenti Richiesti</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 font-medium">Schede Tecniche</td>
                      <td className="py-2 px-4 border-b border-gray-200">Manuali d'uso, schede tecniche del produttore, brochure tecniche</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 font-medium">Interconnessione</td>
                      <td className="py-2 px-4 border-b border-gray-200">Layout di rete, schema di collegamento, documentazione protocolli di comunicazione</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 font-medium">Integrazione</td>
                      <td className="py-2 px-4 border-b border-gray-200">Documentazione software, screenshot interfacce, log di sistema</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 font-medium">Sicurezza</td>
                      <td className="py-2 px-4 border-b border-gray-200">Certificazioni CE, documentazione conformità normative sicurezza</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h3 className="text-xl font-medium mb-4 text-blue-600">9.4 Relazione Tecnica di Interconnessione</h3>
              
              <p className="mb-4">La relazione di interconnessione deve contenere:</p>
              
              <ol className="list-decimal pl-6 mb-6 space-y-2">
                <li><strong>Descrizione del bene</strong>: Caratteristiche tecniche, funzionalità, componenti</li>
                <li><strong>Analisi dei requisiti</strong>: Verifica puntuale di ciascuna caratteristica obbligatoria</li>
                <li><strong>Schema di interconnessione</strong>: Diagramma di rete e flussi di informazioni</li>
                <li><strong>Verifica dell'integrazione</strong>: Test effettuati e risultati ottenuti</li>
                <li><strong>Evidenze fotografiche</strong>: Foto del bene installato e delle connessioni</li>
              </ol>
              
              <div className="bg-red-50 p-4 rounded-lg border border-red-200 mt-6">
                <p className="font-semibold text-red-800">Attenzione</p>
                <p className="mt-2">Tutta la documentazione deve essere conservata per l'intero periodo di fruizione del beneficio e per i 5 anni successivi. L'Agenzia delle Entrate può richiedere l'esibizione della documentazione in qualsiasi momento durante i controlli.</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Sezione 10: Controlli e Verifiche */}
        <div className="mb-10">
          <div className="flex items-center justify-between bg-blue-100 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('controlli')}>
            <h2 id="controlli" className="text-2xl font-semibold text-blue-700">10. Controlli e Verifiche</h2>
            <span className="text-blue-700">{activeSection === 'controlli' ? '−' : '+'}</span>
          </div>
          {activeSection === 'controlli' && (
            <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-100">
              <h3 className="text-xl font-medium mb-4 text-blue-600">10.1 Soggetti Preposti ai Controlli</h3>
              
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-blue-700 mb-2">Agenzia delle Entrate</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Verifica requisiti formali</li>
                    <li>Controllo compensazioni</li>
                    <li>Verifica dichiarazioni</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-blue-700 mb-2">MISE</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Verifica tecnica requisiti</li>
                    <li>Controllo interconnessione</li>
                    <li>Monitoraggio investimenti</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-blue-700 mb-2">Guardia di Finanza</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Controlli antifrode</li>
                    <li>Verifiche incrociate</li>
                    <li>Ispezioni in loco</li>
                  </ul>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mb-4 text-blue-600">10.2 Tempistiche dei Controlli</h3>
              
              <p className="mb-4">I controlli possono essere effettuati:</p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Ex ante</strong>: Prima dell'utilizzo del credito (verifica preventiva)</li>
                <li><strong>In itinere</strong>: Durante il periodo di fruizione del credito</li>
                <li><strong>Ex post</strong>: Fino a 8 anni dopo l'utilizzo del credito (termine ordinario accertamento + 2 anni)</li>
              </ul>
              
              <h3 className="text-xl font-medium mb-4 text-blue-600">10.3 Oggetto dei Controlli</h3>
              
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 border-b border-gray-200 bg-blue-50 text-left">Aspetto</th>
                      <th className="py-2 px-4 border-b border-gray-200 bg-blue-50 text-left">Elementi Verificati</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 font-medium">Requisiti Soggettivi</td>
                      <td className="py-2 px-4 border-b border-gray-200">Presenza stabile organizzazione, regolarità contributiva, assenza procedure concorsuali</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 font-medium">Requisiti Oggettivi</td>
                      <td className="py-2 px-4 border-b border-gray-200">Conformità beni agli allegati, caratteristiche tecniche, effettiva interconnessione</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 font-medium">Aspetti Temporali</td>
                      <td className="py-2 px-4 border-b border-gray-200">Rispetto tempistiche ordine, consegna, interconnessione, comunicazioni</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 font-medium">Aspetti Documentali</td>
                      <td className="py-2 px-4 border-b border-gray-200">Completezza e validità perizia, fatture, pagamenti, registrazioni contabili</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h3 className="text-xl font-medium mb-4 text-blue-600">10.4 Conseguenze di Irregolarità</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-medium text-blue-700 mb-2">Sanzioni Amministrative</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Recupero del credito indebitamente utilizzato</li>
                    <li>Interessi legali dal giorno di utilizzo</li>
                    <li>Sanzioni dal 100% al 200% del credito</li>
                    <li>Sanzioni ridotte con ravvedimento operoso</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-blue-700 mb-2">Conseguenze Penali</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Dichiarazione infedele (se superata soglia)</li>
                    <li>Indebita compensazione (se superata soglia)</li>
                    <li>Truffa aggravata per conseguimento erogazioni pubbliche</li>
                    <li>Falso in perizia (per il perito)</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg border border-red-200 mt-6">
                <p className="font-semibold text-red-800">Attenzione</p>
                <p className="mt-2">Con il nuovo sistema di prenotazione 2025, i controlli saranno intensificati e automatizzati. L'incrocio delle banche dati tra MISE e Agenzia delle Entrate permetterà verifiche immediate sulla corrispondenza tra quanto comunicato e quanto effettivamente realizzato.</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Sezione 11: FAQ */}
        <div className="mb-10">
          <div className="flex items-center justify-between bg-blue-100 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('faq')}>
            <h2 id="faq" className="text-2xl font-semibold text-blue-700">11. FAQ - Domande Frequenti</h2>
            <span className="text-blue-700">{activeSection === 'faq' ? '−' : '+'}</span>
          </div>
          {activeSection === 'faq' && (
            <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-100">
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-xl font-medium mb-2 text-blue-600">Quali sono le principali novità per il 2025?</h3>
                  <p>Le principali novità sono: limitazione ai soli beni materiali 4.0 (Allegato A), introduzione del sistema di prenotazione con budget limitato di €2,2 miliardi, necessità di autorizzazione preventiva, comunicazioni obbligatorie al MISE e controlli intensificati tramite piattaforma GSE.</p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-xl font-medium mb-2 text-blue-600">Posso fruire del credito anche se non ho ancora interconnesso il bene?</h3>
                  <p>No, l'interconnessione è un requisito imprescindibile per i beni 4.0. Senza interconnessione, non è possibile accedere al credito d'imposta Transizione 4.0. Il credito può essere utilizzato solo a partire dall'anno in cui avviene l'interconnessione.</p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-xl font-medium mb-2 text-blue-600">Come funziona il sistema di prenotazione?</h3>
                  <p>Il sistema di prenotazione prevede l'invio di una comunicazione preventiva al MISE tramite la piattaforma GSE, seguita da una comunicazione di pagamento entro 30 giorni che attesti il versamento di almeno il 20% del costo dell'investimento. Le risorse sono assegnate in ordine cronologico fino ad esaurimento del budget di €2,2 miliardi.</p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-xl font-medium mb-2 text-blue-600">È possibile cedere il credito d'imposta?</h3>
                  <p>No, il credito d'imposta Transizione 4.0 non è cedibile a terzi. Può essere trasferito solo in caso di operazioni straordinarie come cessione d'azienda, fusioni o scissioni. Non è possibile trasferirlo a soci di società di persone, partecipanti di enti trasparenti o collaboratori dell'impresa familiare.</p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-xl font-medium mb-2 text-blue-600">Quando devo presentare la perizia tecnica?</h3>
                  <p>La perizia tecnica deve essere redatta entro la data di invio della comunicazione di completamento dell'investimento. Per investimenti effettuati nel 2025, la comunicazione deve essere inviata entro il 31 gennaio 2026. Per investimenti completati nel primo semestre 2026, entro il 31 luglio 2026. La perizia è obbligatoria per investimenti superiori a €300.000.</p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-xl font-medium mb-2 text-blue-600">Come si calcola il credito per investimenti che superano i 2,5 milioni di euro?</h3>
                  <p>Il calcolo avviene per scaglioni progressivi: 50% fino a 2,5 milioni, 30% da 2,5 a 10 milioni, 10% da 10 a 20 milioni. Ad esempio, per un investimento di 12 milioni: (2,5 × 50%) + (7,5 × 30%) + (2 × 10%) = 1,25 + 2,25 + 0,2 = 3,7 milioni di credito, da utilizzare in 3 quote annuali di pari importo.</p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-xl font-medium mb-2 text-blue-600">Cosa succede se termino l'investimento dopo il 31 dicembre 2025?</h3>
                  <p>È possibile completare l'investimento entro il 30 giugno 2026, a condizione che entro il 31 dicembre 2025 sia stato effettuato l'ordine e pagato un acconto di almeno il 20%. In questo caso, la comunicazione di completamento dovrà essere inviata entro il 31 luglio 2026.</p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-xl font-medium mb-2 text-blue-600">Cosa succede se esaurisco il budget disponibile?</h3>
                  <p>In caso di esaurimento del budget di €2,2 miliardi, le comunicazioni tardive saranno acquisite ma non finanziate. Verrà creata una lista d'attesa automatica per eventuali nuove disponibilità derivanti da rinunce o revoche. Le risorse recuperate saranno riassegnate rispettando l'ordine cronologico delle richieste in lista d'attesa.</p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-xl font-medium mb-2 text-blue-600">Posso utilizzare il credito anche se ho perdite fiscali?</h3>
                  <p>Sì, il credito d'imposta è utilizzabile in compensazione indipendentemente dal risultato fiscale dell'impresa. Essendo un credito d'imposta e non una deduzione, può essere utilizzato anche in presenza di perdite fiscali o incapienza d'imposta.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-2 text-blue-600">Quali sono i controlli più frequenti?</h3>
                  <p>I controlli più frequenti riguardano: l'effettiva interconnessione dei beni, la corrispondenza tra quanto dichiarato e quanto realizzato, la regolarità delle comunicazioni inviate, la completezza della documentazione tecnica e amministrativa, e il rispetto delle tempistiche previste per ordine, pagamento e interconnessione.</p>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Sezione 12: Checklist Operativa */}
        <div className="mb-10">
          <div className="flex items-center justify-between bg-blue-100 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('checklist')}>
            <h2 id="checklist" className="text-2xl font-semibold text-blue-700">12. Checklist Operativa</h2>
            <span className="text-blue-700">{activeSection === 'checklist' ? '−' : '+'}</span>
          </div>
          {activeSection === 'checklist' && (
            <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-100">
              <h3 className="text-xl font-medium mb-4 text-blue-600">12.1 Fase di Pianificazione</h3>
              
              <div className="mb-6">
                <ul className="list-none pl-0 space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded border border-blue-400 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-blue-600 text-lg">☐</span>
                    </div>
                    <span>Verificare i requisiti soggettivi dell'impresa (sede stabile, regolarità contributiva)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded border border-blue-400 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-blue-600 text-lg">☐</span>
                    </div>
                    <span>Analizzare il fabbisogno tecnologico e identificare i beni 4.0 necessari</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded border border-blue-400 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-blue-600 text-lg">☐</span>
                    </div>
                    <span>Verificare che i beni rientrino nell'Allegato A della Legge 232/2016</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded border border-blue-400 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-blue-600 text-lg">☐</span>
                    </div>
                    <span>Stimare il costo complessivo dell'investimento e il credito d'imposta ottenibile</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded border border-blue-400 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-blue-600 text-lg">☐</span>
                    </div>
                    <span>Pianificare le tempistiche di ordine, consegna e interconnessione</span>
                  </li>
                </ul>
              </div>
              
              <h3 className="text-xl font-medium mb-4 text-blue-600">12.2 Fase di Prenotazione</h3>
              
              <div className="mb-6">
                <ul className="list-none pl-0 space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded border border-blue-400 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-blue-600 text-lg">☐</span>
                    </div>
                    <span>Registrarsi alla piattaforma GSE nell'Area Clienti</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded border border-blue-400 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-blue-600 text-lg">☐</span>
                    </div>
                    <span>Compilare la comunicazione preventiva con descrizione investimenti e credito stimato</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded border border-blue-400 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-blue-600 text-lg">☐</span>
                    </div>
                    <span>Inviare la comunicazione preventiva entro il 31 gennaio 2026</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded border border-blue-400 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-blue-600 text-lg">☐</span>
                    </div>
                    <span>Effettuare l'ordine e versare almeno il 20% del costo dell'investimento</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded border border-blue-400 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-blue-600 text-lg">☐</span>
                    </div>
                    <span>Inviare la comunicazione di pagamento entro 30 giorni dalla preventiva</span>
                  </li>
                </ul>
              </div>
              
              <h3 className="text-xl font-medium mb-4 text-blue-600">12.3 Fase di Implementazione</h3>
              
              <div className="mb-6">
                <ul className="list-none pl-0 space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded border border-blue-400 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-blue-600 text-lg">☐</span>
                    </div>
                    <span>Ricevere e installare i beni acquistati</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded border border-blue-400 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-blue-600 text-lg">☐</span>
                    </div>
                    <span>Realizzare l'interconnessione con i sistemi aziendali</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded border border-blue-400 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-blue-600 text-lg">☐</span>
                    </div>
                    <span>Documentare l'interconnessione con screenshot, log e schemi</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded border border-blue-400 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-blue-600 text-lg">☐</span>
                    </div>
                    <span>Richiedere la perizia tecnica (obbligatoria per investimenti {'>'} €300.000)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded border border-blue-400 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-blue-600 text-lg">☐</span>
                    </div>
                    <span>Completare l'investimento entro il 31 dicembre 2025 (o 30 giugno 2026)</span>
                  </li>
                </ul>
              </div>
              
              <h3 className="text-xl font-medium mb-4 text-blue-600">12.4 Fase di Completamento</h3>
              
              <div className="mb-6">
                <ul className="list-none pl-0 space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded border border-blue-400 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-blue-600 text-lg">☐</span>
                    </div>
                    <span>Raccogliere tutta la documentazione tecnica e amministrativa</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded border border-blue-400 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-blue-600 text-lg">☐</span>
                    </div>
                    <span>Inviare la comunicazione di completamento entro il 31 gennaio 2026 (o 31 luglio 2026)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded border border-blue-400 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-blue-600 text-lg">☐</span>
                    </div>
                    <span>Attendere l'autorizzazione dell'Agenzia delle Entrate</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded border border-blue-400 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-blue-600 text-lg">☐</span>
                    </div>
                    <span>Calcolare il credito d'imposta spettante per scaglioni progressivi</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded border border-blue-400 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-blue-600 text-lg">☐</span>
                    </div>
                    <span>Suddividere il credito in 3 quote annuali di pari importo</span>
                  </li>
                </ul>
              </div>
              
              <h3 className="text-xl font-medium mb-4 text-blue-600">12.5 Fase di Utilizzo</h3>
              
              <div className="mb-6">
                <ul className="list-none pl-0 space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded border border-blue-400 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-blue-600 text-lg">☐</span>
                    </div>
                    <span>Utilizzare il credito in compensazione tramite modello F24</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded border border-blue-400 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-blue-600 text-lg">☐</span>
                    </div>
                    <span>Presentare il modello F24 tramite i servizi telematici dell'Agenzia delle Entrate</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded border border-blue-400 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-blue-600 text-lg">☐</span>
                    </div>
                    <span>Indicare il credito nella dichiarazione dei redditi relativa al periodo d'imposta</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded border border-blue-400 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-blue-600 text-lg">☐</span>
                    </div>
                    <span>Conservare tutta la documentazione per eventuali controlli</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded border border-blue-400 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-blue-600 text-lg">☐</span>
                    </div>
                    <span>Mantenere i beni nell'attivo per almeno 2 anni dall'interconnessione</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-6">
                <p className="font-semibold text-blue-800">Nota</p>
                <p className="mt-2">Questa checklist è fornita a scopo informativo e non sostituisce la consulenza professionale. È consigliabile rivolgersi a un consulente specializzato per assistenza specifica sul proprio caso.</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Sezione Contatti */}
        <div className="mb-10">
          <div className="flex items-center justify-between bg-blue-700 p-4 rounded-lg cursor-pointer" onClick={() => toggleSection('contatti')}>
            <h2 id="contatti" className="text-2xl font-semibold text-white">Contattaci per Assistenza</h2>
            <span className="text-white">{activeSection === 'contatti' ? '−' : '+'}</span>
          </div>
          {activeSection === 'contatti' && (
            <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
              <p className="mb-4">Per ricevere assistenza personalizzata sulla Transizione 4.0 o per una consulenza specifica sul tuo caso, contatta i nostri esperti:</p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-blue-700 mb-2">Consulenza Tecnica</h4>
                  <ul className="list-none space-y-2">
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>Tel: 02 1234 5678</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>Email: tecnico@solarixbusiness.com</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-blue-700 mb-2">Consulenza Fiscale</h4>
                  <ul className="list-none space-y-2">
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>Tel: 02 8765 4321</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>Email: fiscale@solarixbusiness.com</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center mt-6">
                <a href="/contatti" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300">Richiedi una Consulenza Gratuita</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
