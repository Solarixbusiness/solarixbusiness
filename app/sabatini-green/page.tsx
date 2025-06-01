'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function SabatiniGreenPage() {
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
    headline: 'Nuova Sabatini Green: Guida Completa 2025',
    description: 'Guida completa alla Nuova Sabatini Green 2025: requisiti, vantaggi, procedura di richiesta e supporto per le PMI italiane.',
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
        <title>Nuova Sabatini Green: Guida Completa 2025 | SolariX Business</title>
        <meta name="description" content="Guida completa alla Nuova Sabatini Green 2025: requisiti, vantaggi, procedura di richiesta e supporto per le PMI italiane." />
        <meta name="keywords" content="Sabatini Green, PMI, finanziamenti, agevolazioni, investimenti green, sostenibilità, transizione ecologica" />
        <link rel="canonical" href="https://www.solarixbusiness.it/sabatini-green" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-green-700">Nuova Sabatini Green: Guida Completa 2025</h1>

        {/* Immagine Guida Sabatini Green */}
        <div className="mb-12 w-full">
          <Image
            src="/images/strumenti/SABATINI.jpg"
            alt="Guida Nuova Sabatini Green"
            width={1200}
            height={450}
            className="w-full h-auto object-cover rounded-lg shadow-md max-h-72 sm:max-h-80 md:max-h-96 lg:max-h-[450px]"
            priority
            sizes="100vw"
          />
        </div>
        
        <div className="bg-green-50 p-6 rounded-lg shadow-md mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-green-700">Indice dei contenuti</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-medium mb-3 text-green-600">Parte 1: Introduzione e Requisiti</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#introduzione" onClick={(e) => handleIndexClick('introduzione', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-green-100 text-green-700 rounded-full text-center mr-2">1</span>
                    Introduzione alla Sabatini Green
                  </a>
                </li>
                <li>
                  <a href="#beneficiari" onClick={(e) => handleIndexClick('beneficiari', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-green-100 text-green-700 rounded-full text-center mr-2">2</span>
                    Soggetti Beneficiari
                  </a>
                </li>
                <li>
                  <a href="#investimenti" onClick={(e) => handleIndexClick('investimenti', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-green-100 text-green-700 rounded-full text-center mr-2">3</span>
                    Investimenti Ammissibili
                  </a>
                </li>
                <li>
                  <a href="#agevolazioni" onClick={(e) => handleIndexClick('agevolazioni', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-green-100 text-green-700 rounded-full text-center mr-2">4</span>
                    Agevolazioni Previste
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3 text-green-600">Parte 2: Procedura e Aspetti Operativi</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#domanda" onClick={(e) => handleIndexClick('domanda', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-green-100 text-green-700 rounded-full text-center mr-2">5</span>
                    Presentazione della Domanda
                  </a>
                </li>
                <li>
                  <a href="#valutazione" onClick={(e) => handleIndexClick('valutazione', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-green-100 text-green-700 rounded-full text-center mr-2">6</span>
                    Valutazione e Concessione
                  </a>
                </li>
                <li>
                  <a href="#erogazione" onClick={(e) => handleIndexClick('erogazione', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-green-100 text-green-700 rounded-full text-center mr-2">7</span>
                    Erogazione del Contributo
                  </a>
                </li>
                <li>
                  <a 
                    href="#obblighi" 
                    onClick={(e) => handleIndexClick('obblighi', e)} 
                    className="text-blue-600 hover:underline flex items-center"
                  >
                    <span className="inline-block w-6 h-6 bg-green-100 text-green-700 rounded-full text-center mr-2">8</span>
                    Obblighi e Controlli
                  </a>
                </li>
                <li>
                  <a 
                    href="#faq" 
                    onClick={(e) => handleIndexClick('faq', e)} 
                    className="text-blue-600 hover:underline flex items-center"
                  >
                    <span className="inline-block w-6 h-6 bg-green-100 text-green-700 rounded-full text-center mr-2">9</span>
                    FAQ - Domande Frequenti
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-gray-600">Seleziona una sezione per visualizzarne il contenuto dettagliato. Ogni sezione può essere espansa o compressa cliccando sul titolo.</p>
        </div>

        {/* Sezione 1: Introduzione alla Sabatini Green */}
        <div id="introduzione" className="mb-10">
          <button 
            onClick={() => toggleSection('introduzione')} 
            className="w-full flex justify-between items-center bg-green-600 text-white p-4 rounded-lg shadow hover:bg-green-700 transition duration-300"
          >
            <h2 className="text-xl md:text-2xl font-semibold">1. Introduzione alla Sabatini Green</h2>
            <span>{activeSection === 'introduzione' ? '−' : '+'}</span>
          </button>
          
          {activeSection === 'introduzione' && (
            <div className="bg-white p-6 rounded-b-lg shadow-md border-l-2 border-r-2 border-b-2 border-green-200">
              <h3 className="text-xl font-semibold mb-3 text-green-700">Che cos'è la Nuova Sabatini</h3>
              <p>La misura "Beni strumentali", conosciuta come "Nuova Sabatini", è un'agevolazione istituita dal Ministero delle Imprese e del Made in Italy con l'obiettivo di:</p>
              <ul className="list-disc pl-6 mt-2 mb-4 space-y-1">
                <li>Facilitare l'accesso al credito per le imprese</li>
                <li>Incrementare la competitività del sistema produttivo nazionale</li>
                <li>Sostenere gli investimenti per l'acquisto o acquisizione in leasing di beni strumentali specifici</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-3 mt-5 text-green-700">Varianti della Misura</h3>
              <p>Esistono due versioni principali:</p>
              <div className="mt-2 mb-4">
                <p className="font-semibold">Nuova Sabatini Ordinaria</p>
                <p className="pl-4">La versione standard della misura per investimenti in beni strumentali.</p>
                <p className="font-semibold mt-2">Nuova Sabatini Capitalizzazione</p>
                <p className="pl-4">Versione specifica che incentiva i processi di capitalizzazione delle PMI che intendono realizzare programmi di investimento negli stessi tipi di beni. È disciplinata dal decreto interministeriale 19 gennaio 2024, n. 43 e dalle istruzioni della circolare direttoriale 22 luglio 2024, n. 1115.</p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border border-green-200 mt-4">
                <p className="font-semibold text-green-800">Punti Chiave da Ricordare:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Solo PMI possono accedere alla misura</li>
                  <li>La dimensione viene calcolata sull'ultimo bilancio approvato</li>
                  <li>Quasi tutti i settori sono ammessi (escluso solo finanziario/assicurativo)</li>
                  <li>L'impresa deve essere in situazione regolare (contributiva, fiscale, non in liquidazione)</li>
                  <li>Una sola domanda per gli stessi beni</li>
                  <li>Per importi elevati servono verifiche antimafia</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Sezione 2: Soggetti Beneficiari */}
        <div id="beneficiari" className="mb-10">
          <button 
            onClick={() => toggleSection('beneficiari')} 
            className="w-full flex justify-between items-center bg-green-600 text-white p-4 rounded-lg shadow hover:bg-green-700 transition duration-300"
          >
            <h2 className="text-xl md:text-2xl font-semibold">2. Soggetti Beneficiari</h2>
            <span>{activeSection === 'beneficiari' ? '−' : '+'}</span>
          </button>
          
          {activeSection === 'beneficiari' && (
            <div className="bg-white p-6 rounded-b-lg shadow-md border-l-2 border-r-2 border-b-2 border-green-200">
              <h3 className="text-xl font-semibold mb-3 text-green-700">Chi Può Accedere alla Misura</h3>
              
              <h4 className="text-lg font-medium mb-2 text-green-600">Tipologia di Imprese Ammesse</h4>
              <p>La Nuova Sabatini si rivolge <span className="font-semibold">esclusivamente alle Micro, Piccole e Medie Imprese (PMI)</span>.</p>
              
              <h4 className="text-lg font-medium mb-2 mt-4 text-green-600">Determinazione della Dimensione d'Impresa</h4>
              <p>La classificazione viene determinata:</p>
              <ul className="list-disc pl-6 mt-2 mb-4 space-y-1">
                <li>Sulla base dell'ultimo esercizio contabile chiuso e approvato prima della sottoscrizione della domanda</li>
                <li>Applicando i parametri dimensionali dell'appendice al decreto ministeriale 18 aprile 2005</li>
              </ul>
              
              <p>Per imprese esonerate dalla contabilità ordinaria:</p>
              <ul className="list-disc pl-6 mt-2 mb-4 space-y-1">
                <li>Fatturato: ultima dichiarazione dei redditi presentata</li>
                <li>Attivo patrimoniale: prospetto con attività e passività</li>
              </ul>
              
              <p className="italic">Tolleranza: Se si superano le soglie dimensionali, questo non deve verificarsi per due esercizi consecutivi</p>
              
              <h4 className="text-lg font-medium mb-2 mt-4 text-green-600">Settori Ammessi</h4>
              <ul className="list-disc pl-6 mt-2 mb-4 space-y-1">
                <li>Tutti i settori produttivi, inclusi agricoltura e pesca</li>
                <li>Unica eccezione: settore attività finanziarie e assicurative</li>
              </ul>
              
              <h4 className="text-lg font-medium mb-2 mt-4 text-green-600">Requisiti Specifici per il Settore Agricolo</h4>
              <p>L'investimento deve:</p>
              <ul className="list-disc pl-6 mt-2 mb-4 space-y-1">
                <li>Rispettare limiti e condizioni del regolamento ABER</li>
                <li>Perseguire obiettivi dell'articolo 14 (investimenti nelle aziende agricole per produzione primaria) o articolo 17 (investimenti nella trasformazione/commercializzazione prodotti agricoli) del regolamento</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-3 mt-5 text-green-700">Requisiti dell'Impresa Richiedente</h3>
              
              <h4 className="text-lg font-medium mb-2 text-green-600">Situazione Aziendale</h4>
              <p>L'impresa deve attestare:</p>
              <ul className="list-disc pl-6 mt-2 mb-4 space-y-1">
                <li>Non essere sottoposta a procedure concorsuali con finalità liquidatoria</li>
                <li>Non essere in liquidazione volontaria</li>
                <li>Avere posizione contributiva vigente regolare</li>
              </ul>
              
              <h4 className="text-lg font-medium mb-2 text-green-600">Posizione Debitoria</h4>
              <ul className="list-disc pl-6 mt-2 mb-4 space-y-1">
                <li>Nessuna posizione debitoria presso Agenzia delle Entrate – Riscossione per importi superiori a €5.000,00 (se la quota di erogazione richiesta supera tale importo)</li>
                <li>Per contributi superiori a €150.000,00: necessarie informazioni antimafia</li>
              </ul>
              
              <h4 className="text-lg font-medium mb-2 text-green-600">Vincolo di Esclusività</h4>
              <p>Un'impresa non può presentare un'altra domanda per la Nuova Sabatini (ordinaria o Capitalizzazione) per gli stessi beni oggetto della domanda attuale.</p>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-6">
                <p className="font-semibold text-blue-800">Supporto e Consulenza</p>
                <p className="mt-2">Per verificare se la tua azienda rientra nei parametri dimensionali delle PMI o per assistenza nella determinazione del settore di appartenenza, contattaci all'indirizzo <a href="mailto:info@solarixbusiness.com" className="text-blue-600 hover:underline">info@solarixbusiness.com</a> o al numero <span className="font-medium">06 1234567</span>.</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Sezione 3: Investimenti Ammissibili */}
        <div id="investimenti" className="mb-10">
          <button 
            onClick={() => toggleSection('investimenti')} 
            className="w-full flex justify-between items-center bg-green-600 text-white p-4 rounded-lg shadow hover:bg-green-700 transition duration-300"
          >
            <h2 className="text-xl md:text-2xl font-semibold">3. Investimenti Ammissibili</h2>
            <span>{activeSection === 'investimenti' ? '−' : '+'}</span>
          </button>
          
          {activeSection === 'investimenti' && (
            <div className="bg-white p-6 rounded-b-lg shadow-md border-l-2 border-r-2 border-b-2 border-green-200">
              <h3 className="text-xl font-semibold mb-3 text-green-700">Cosa Finanzia la Nuova Sabatini</h3>
              <p>L'agevolazione copre investimenti per acquisto o acquisizione in leasing di:</p>
              
              <h4 className="text-lg font-medium mb-2 mt-3 text-green-600">Beni Materiali</h4>
              <ul className="list-disc pl-6 mt-2 mb-4 space-y-1">
                <li>Macchinari</li>
                <li>Attrezzature</li>
                <li>Impianti</li>
                <li>Beni strumentali ad uso produttivo</li>
                <li>Hardware</li>
              </ul>
              
              <h4 className="text-lg font-medium mb-2 text-green-600">Beni Immateriali</h4>
              <ul className="list-disc pl-6 mt-2 mb-4 space-y-1">
                <li>Software</li>
                <li>Tecnologie digitali</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-3 mt-5 text-green-700">Classificazione Contabile dei Beni</h3>
              <p>I beni devono essere:</p>
              <ul className="list-disc pl-6 mt-2 mb-4 space-y-1">
                <li><span className="font-semibold">Nuovi</span> (requisito fondamentale)</li>
                <li>Riferiti alle immobilizzazioni materiali classificabili nell'attivo dello stato patrimoniale alle voci:
                  <ul className="list-disc pl-6 mt-2 mb-2 space-y-1">
                    <li>B.II.2 - "Impianti e macchinari"</li>
                    <li>B.II.3 - "Attrezzature industriali e commerciali"</li>
                    <li>B.II.4 - "Altri beni"</li>
                  </ul>
                </li>
              </ul>
              <p>Secondo l'articolo 2424 del codice civile e principio contabile n.16 dell'OIC</p>
              
              <h3 className="text-xl font-semibold mb-3 mt-5 text-green-700">Investimenti Ammessi con Moduli Aggiuntivi</h3>
              <p>Sono ammissibili anche investimenti in:</p>
              <ul className="list-disc pl-6 mt-2 mb-4 space-y-1">
                <li>Beni strumentali che integrano con nuovi moduli un impianto o macchinario preesistente</li>
                <li>Devono introdurre una nuova funzionalità nel ciclo produttivo</li>
                <li>Nel rispetto del principio dell'autonomia funzionale</li>
              </ul>
              
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-4 mb-6">
                <p className="font-semibold text-yellow-800">⚠️ Raccomandazione:</p>
                <p>Evitare di frazionare il programma d'investimento su più domande per prevenire comportamenti elusivi.</p>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-green-700">Cosa NON È Ammissibile</h3>
              <h4 className="text-lg font-medium mb-2 text-green-600">Beni Esclusi</h4>
              <ul className="list-disc pl-6 mt-2 mb-4 space-y-1">
                <li>Terreni e fabbricati</li>
                <li>Beni usati o rigenerati</li>
                <li>"Immobilizzazioni in corso e acconti"</li>
                <li>Componenti o parti di macchinari che non soddisfano il requisito dell'autonomia funzionale</li>
              </ul>
              
              <h4 className="text-lg font-medium mb-2 text-green-600">Eccezioni per Beni "Usati"</h4>
              <p>Sono ammessi beni:</p>
              <ul className="list-disc pl-6 mt-2 mb-4 space-y-1">
                <li>"Ad uso mostra" (utilizzati dal rivenditore solo per scopi dimostrativi)</li>
                <li>Venduti "con riserva di gradimento"</li>
                <li>Venduti "a prova"</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-3 mt-5 text-green-700">Beni Industria 4.0</h3>
              <p>Per i beni nell'ottica "4.0" sono richiesti:</p>
              
              <h4 className="text-lg font-medium mb-2 text-green-600">Esempi di Beni 4.0</h4>
              <ul className="list-disc pl-6 mt-2 mb-4 space-y-1">
                <li>Sistemi di misura coordinati e non coordinati per verifica e tracciabilità qualità</li>
                <li>Filtri e sistemi di trattamento e recupero (acqua, aria, olio) integrati con sistema di fabbrica</li>
                <li>Dispositivi per interazione uomo-macchina e miglioramento ergonomia/sicurezza</li>
              </ul>
              
              <h4 className="text-lg font-medium mb-2 text-green-600">Requisiti Tecnici Specifici</h4>
              <ul className="list-disc pl-6 mt-2 mb-4 space-y-1">
                <li>Interconnessione al sistema aziendale di gestione della produzione o alla rete di fornitura</li>
                <li>Analisi tecnica o attestato di conformità necessari</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-3 mt-5 text-green-700">Investimenti Green</h3>
              <p>Per investimenti in beni "a basso impatto ambientale":</p>
              <ul className="list-disc pl-6 mt-2 mb-4 space-y-1">
                <li>I beni devono soddisfare specifiche condizioni ambientali</li>
                <li>Necessaria attestazione da parte dei fornitori</li>
                <li>Dichiarazioni liberatorie specifiche richieste</li>
              </ul>
              
              <div className="bg-green-50 p-4 rounded-lg border border-green-200 mt-6">
                <p className="font-semibold text-green-800">Checklist Beni Ammissibili</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Verificare che il bene sia:
                    <ul className="list-disc pl-6 mt-1 mb-2 space-y-1">
                      <li>Nuovo di fabbrica</li>
                      <li>Classificabile nelle categorie B.II.2, B.II.3, B.II.4</li>
                      <li>Dotato di autonomia funzionale</li>
                      <li>Non sia terreno, fabbricato o bene usato</li>
                    </ul>
                  </li>
                  <li>Per beni 4.0 verificare:
                    <ul className="list-disc pl-6 mt-1 mb-2 space-y-1">
                      <li>Interconnessione al sistema aziendale</li>
                      <li>Disponibilità analisi tecnica/attestato conformità</li>
                    </ul>
                  </li>
                  <li>Per beni Green verificare:
                    <ul className="list-disc pl-6 mt-1 mb-2 space-y-1">
                      <li>Conformità ai requisiti ambientali</li>
                      <li>Disponibilità dichiarazioni fornitori</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
        
        {/* Sezione 4: Agevolazioni Previste */}
        <div id="agevolazioni" className="mb-10">
          <button 
            onClick={() => toggleSection('agevolazioni')} 
            className="w-full flex justify-between items-center bg-green-600 text-white p-4 rounded-lg shadow hover:bg-green-700 transition duration-300"
          >
            <h2 className="text-xl md:text-2xl font-semibold">4. Agevolazioni Previste</h2>
            <span>{activeSection === 'agevolazioni' ? '−' : '+'}</span>
          </button>
          
          {activeSection === 'agevolazioni' && (
            <div className="bg-white p-6 rounded-b-lg shadow-md border-l-2 border-r-2 border-b-2 border-green-200">
              <h3 className="text-xl font-semibold mb-3 text-green-700">Tipologie di Agevolazioni</h3>
              <p>La Nuova Sabatini prevede due tipi principali di agevolazioni:</p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="text-lg font-medium mb-2 text-green-700">1. Finanziamento Agevolato</h4>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Erogato da banche e intermediari finanziari aderenti</li>
                    <li>Durata massima: 5 anni</li>
                    <li>Importo: da €20.000 a €4 milioni</li>
                    <li>Copertura: fino al 100% dell'investimento</li>
                    <li>Garanzia: possibilità di accesso al Fondo di Garanzia PMI</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="text-lg font-medium mb-2 text-green-700">2. Contributo Ministeriale</h4>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Erogato dal Ministero delle Imprese e del Made in Italy</li>
                    <li>Calcolato su un piano di ammortamento convenzionale</li>
                    <li>Durata: 5 anni</li>
                    <li>Tasso d'interesse annuo: 2,75% per investimenti ordinari</li>
                    <li>Maggiorazione per investimenti 4.0 e Green</li>
                  </ul>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 mt-6 text-green-700">Contributi Maggiorati</h3>
              <p>Sono previste maggiorazioni del contributo per specifiche tipologie di investimenti:</p>
              
              <div className="overflow-x-auto mt-4">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                  <thead>
                    <tr className="bg-green-100">
                      <th className="py-2 px-4 border-b text-left">Tipologia Investimento</th>
                      <th className="py-2 px-4 border-b text-left">Maggiorazione</th>
                      <th className="py-2 px-4 border-b text-left">Tasso Applicato</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b">Investimenti ordinari</td>
                      <td className="py-2 px-4 border-b">-</td>
                      <td className="py-2 px-4 border-b">2,75%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-2 px-4 border-b">Investimenti 4.0</td>
                      <td className="py-2 px-4 border-b">30%</td>
                      <td className="py-2 px-4 border-b">3,575%</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">Investimenti Green</td>
                      <td className="py-2 px-4 border-b">30%</td>
                      <td className="py-2 px-4 border-b">3,575%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-2 px-4 border-b">Investimenti Sud Italia*</td>
                      <td className="py-2 px-4 border-b">Ulteriore 30%</td>
                      <td className="py-2 px-4 border-b">4,648%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm italic mt-2">* Per investimenti in Abruzzo, Basilicata, Calabria, Campania, Molise, Puglia, Sardegna e Sicilia</p>
              
              <h3 className="text-xl font-semibold mb-3 mt-6 text-green-700">Modalità di Erogazione</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div>
                  <h4 className="text-lg font-medium mb-2 text-green-600">Erogazione in Unica Soluzione</h4>
                  <p>Per finanziamenti fino a €200.000, il contributo viene erogato in un'unica soluzione.</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2 text-green-600">Erogazione in Più Quote</h4>
                  <p>Per finanziamenti superiori a €200.000, il contributo viene erogato in più quote annuali.</p>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 mt-6 text-green-700">Cumulabilità con Altri Incentivi</h3>
              <p>Le agevolazioni della Nuova Sabatini sono cumulabili con altri aiuti di Stato relativi agli stessi costi ammissibili, ma:</p>
              <ul className="list-disc pl-6 mt-2 mb-4 space-y-1">
                <li>Non devono superare l'intensità di aiuto o l'importo più elevato applicabile</li>
                <li>Secondo i regolamenti di esenzione UE in base all'attività dell'impresa</li>
              </ul>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-6">
                <p className="font-semibold text-blue-800">Supporto per il Calcolo delle Agevolazioni</p>
                <p className="mt-2">Per una valutazione personalizzata delle agevolazioni ottenibili per il tuo progetto di investimento, contattaci all'indirizzo <a href="mailto:info@solarixbusiness.com" className="text-blue-600 hover:underline">info@solarixbusiness.com</a>. Il nostro team di esperti può aiutarti a massimizzare i benefici combinando la Nuova Sabatini con altri incentivi disponibili.</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Sezione 5: Presentazione della Domanda */}
        <div id="domanda" className="mb-10">
          <button 
            onClick={() => toggleSection('domanda')} 
            className="w-full flex justify-between items-center bg-green-600 text-white p-4 rounded-lg shadow hover:bg-green-700 transition duration-300"
          >
            <h2 className="text-xl md:text-2xl font-semibold">5. Presentazione della Domanda</h2>
            <span>{activeSection === 'domanda' ? '−' : '+'}</span>
          </button>
          
          {activeSection === 'domanda' && (
            <div className="bg-white p-6 rounded-b-lg shadow-md border-l-2 border-r-2 border-b-2 border-green-200">
              <h3 className="text-xl font-semibold mb-3 text-green-700">Iter di Presentazione della Domanda</h3>
              <p>La procedura per accedere alle agevolazioni della Nuova Sabatini Green si articola in diverse fasi:</p>
              
              <div className="mt-6">
                <div className="flex items-start mb-6">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold">1</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium mb-2 text-green-600">Verifica Preliminare</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Verificare il possesso dei requisiti di ammissibilità</li>
                      <li>Controllare che l'investimento rientri nelle categorie ammesse</li>
                      <li>Assicurarsi che l'impresa non abbia già beneficiato di agevolazioni per gli stessi beni</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold">2</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium mb-2 text-green-600">Scelta della Banca/Intermediario</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Selezionare una banca o intermediario finanziario aderente all'iniziativa</li>
                      <li>Consultare l'elenco aggiornato sul sito del MIMIT</li>
                      <li>Verificare condizioni e tassi offerti (possono variare tra gli istituti)</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold">3</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium mb-2 text-green-600">Compilazione Domanda</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Accedere alla piattaforma dedicata sul sito del MIMIT</li>
                      <li>Compilare il modulo di domanda con i dati dell'impresa e dell'investimento</li>
                      <li>Per investimenti Green: allegare dichiarazioni specifiche dei fornitori</li>
                      <li>Generare il modulo compilato in formato PDF</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold">4</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium mb-2 text-green-600">Firma e Invio</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Firmare digitalmente il modulo di domanda (formato p7m)</li>
                      <li>Inviare la domanda via PEC alla banca/intermediario prescelto</li>
                      <li>Rispettare i termini di apertura dello sportello (verificare date sul sito MIMIT)</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold">5</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium mb-2 text-green-600">Delibera del Finanziamento</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>La banca/intermediario valuta la richiesta di finanziamento</li>
                      <li>In caso di esito positivo, delibera il finanziamento</li>
                      <li>Comunica al MIMIT la delibera entro 30 giorni dalla data di trasmissione della domanda</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold">6</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium mb-2 text-green-600">Concessione del Contributo</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Il MIMIT adotta il provvedimento di concessione del contributo</li>
                      <li>Lo comunica all'impresa e alla banca/intermediario</li>
                      <li>Indica l'ammontare del contributo concesso</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold">7</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium mb-2 text-green-600">Stipula del Contratto e Realizzazione</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Stipulare il contratto di finanziamento con la banca/intermediario</li>
                      <li>Realizzare l'investimento entro 12 mesi dalla stipula</li>
                      <li>Conservare tutta la documentazione relativa all'investimento</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 mt-8 text-green-700">Documentazione Richiesta</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="text-lg font-medium mb-2 text-green-600">Per la Domanda</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Modulo di domanda compilato e firmato digitalmente</li>
                    <li>Dichiarazione sostitutiva di atto notorio</li>
                    <li>Eventuale procura in caso di firma da parte di procuratore</li>
                    <li>Per investimenti Green: dichiarazioni specifiche dei fornitori</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="text-lg font-medium mb-2 text-green-600">Per l'Erogazione</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Dichiarazione ultimazione investimento</li>
                    <li>Richiesta di erogazione contributo</li>
                    <li>Dichiarazione liberatoria fornitori</li>
                    <li>Fatture d'acquisto dei beni</li>
                    <li>Documentazione attestante il pagamento</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-6">
                <p className="font-semibold text-yellow-800">⚠️ Attenzione ai Termini</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>La domanda deve essere inviata entro i termini di apertura dello sportello</li>
                  <li>L'investimento deve essere concluso entro 12 mesi dalla stipula del contratto</li>
                  <li>La richiesta di erogazione deve essere inviata entro 120 giorni dal termine dell'investimento</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-6">
                <p className="font-semibold text-blue-800">Assistenza Specializzata</p>
                <p className="mt-2">SolariX Business offre un servizio di assistenza completa per la presentazione della domanda Sabatini Green, dalla verifica dei requisiti fino alla richiesta di erogazione. Contattaci per una consulenza personalizzata e massimizzare le possibilità di successo della tua richiesta.</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Sezione 6: Valutazione e Concessione */}
        <div id="valutazione" className="mb-10">
          <button 
            onClick={() => toggleSection('valutazione')} 
            className="w-full flex justify-between items-center bg-green-600 text-white p-4 rounded-lg shadow hover:bg-green-700 transition duration-300"
          >
            <h2 className="text-xl md:text-2xl font-semibold">6. Valutazione e Concessione</h2>
            <span>{activeSection === 'valutazione' ? '−' : '+'}</span>
          </button>
          
          {activeSection === 'valutazione' && (
            <div className="bg-white p-6 rounded-b-lg shadow-md border-l-2 border-r-2 border-b-2 border-green-200">
              <h3 className="text-xl font-semibold mb-3 text-green-700">Processo di Valutazione</h3>
              <p>Dopo l'invio della domanda, si avvia un processo di valutazione articolato in diverse fasi:</p>
              
              <div className="mt-6 space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h4 className="text-lg font-medium mb-2 text-green-600">1. Verifica Formale della Banca</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>La banca/intermediario verifica la completezza della documentazione</li>
                    <li>Controlla la regolarità formale della domanda</li>
                    <li>Valuta il merito creditizio dell'impresa secondo i propri modelli</li>
                    <li>Delibera il finanziamento o lo rifiuta</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h4 className="text-lg font-medium mb-2 text-green-600">2. Comunicazione al MIMIT</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>La banca/intermediario trasmette al Ministero:</li>
                    <ul className="list-disc pl-6 mt-1 mb-2 space-y-1">
                      <li>Delibera di finanziamento</li>
                      <li>Copia della domanda di agevolazione</li>
                      <li>Dichiarazione sostitutiva dell'impresa</li>
                    </ul>
                    <li>Termine: entro 30 giorni dalla ricezione della domanda</li>
                    <li>Modalità: tramite piattaforma informatica</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h4 className="text-lg font-medium mb-2 text-green-600">3. Istruttoria Ministeriale</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Il MIMIT verifica:</li>
                    <ul className="list-disc pl-6 mt-1 mb-2 space-y-1">
                      <li>Disponibilità delle risorse finanziarie</li>
                      <li>Possesso dei requisiti di ammissibilità</li>
                      <li>Conformità dell'investimento alle normative</li>
                    </ul>
                    <li>Può richiedere integrazioni documentali</li>
                  </ul>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 mt-8 text-green-700">Concessione del Contributo</h3>
              
              <div className="mt-4 space-y-6">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="text-lg font-medium mb-2 text-green-600">Decreto di Concessione</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Il MIMIT adotta il provvedimento di concessione del contributo</li>
                    <li>Indica l'ammontare dell'agevolazione concessa</li>
                    <li>Specifica il piano di erogazione</li>
                    <li>Riporta gli obblighi e i vincoli a carico dell'impresa</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="text-lg font-medium mb-2 text-green-600">Comunicazione all'Impresa</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Il decreto viene trasmesso all'impresa e alla banca/intermediario</li>
                    <li>Contiene tutte le informazioni necessarie per procedere con:</li>
                    <ul className="list-disc pl-6 mt-1 mb-2 space-y-1">
                      <li>Stipula del contratto di finanziamento</li>
                      <li>Realizzazione dell'investimento</li>
                      <li>Richiesta di erogazione del contributo</li>
                    </ul>
                  </ul>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 mt-8 text-green-700">Tempistiche del Processo</h3>
              
              <div className="overflow-x-auto mt-4">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                  <thead>
                    <tr className="bg-green-100">
                      <th className="py-2 px-4 border-b text-left">Fase</th>
                      <th className="py-2 px-4 border-b text-left">Soggetto Responsabile</th>
                      <th className="py-2 px-4 border-b text-left">Tempistica</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b">Valutazione domanda</td>
                      <td className="py-2 px-4 border-b">Banca/Intermediario</td>
                      <td className="py-2 px-4 border-b">Variabile (max 30 giorni)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-2 px-4 border-b">Comunicazione delibera al MIMIT</td>
                      <td className="py-2 px-4 border-b">Banca/Intermediario</td>
                      <td className="py-2 px-4 border-b">Entro 30 giorni dalla domanda</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">Concessione contributo</td>
                      <td className="py-2 px-4 border-b">MIMIT</td>
                      <td className="py-2 px-4 border-b">Entro 30 giorni dalla delibera</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-2 px-4 border-b">Stipula contratto finanziamento</td>
                      <td className="py-2 px-4 border-b">Banca e Impresa</td>
                      <td className="py-2 px-4 border-b">Entro 30 giorni dal decreto</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-6">
                <p className="font-semibold text-yellow-800">⚠️ Possibili Cause di Rigetto</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Mancanza dei requisiti di ammissibilità</li>
                  <li>Documentazione incompleta o irregolare</li>
                  <li>Beni non conformi alle categorie ammissibili</li>
                  <li>Esaurimento delle risorse disponibili</li>
                  <li>Mancato rispetto dei termini procedurali</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-6">
                <p className="font-semibold text-blue-800">Monitoraggio della Pratica</p>
                <p className="mt-2">SolariX Business offre un servizio di monitoraggio continuo della pratica durante tutto l'iter di valutazione e concessione. Ti terremo costantemente aggiornato sullo stato di avanzamento e interverremo prontamente in caso di richieste di integrazioni o chiarimenti da parte degli enti coinvolti.</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Sezione 7: Erogazione del Contributo */}
        <div id="erogazione" className="mb-10">
          <button 
            onClick={() => toggleSection('erogazione')} 
            className="w-full flex justify-between items-center bg-green-600 text-white p-4 rounded-lg shadow hover:bg-green-700 transition duration-300"
          >
            <h2 className="text-xl md:text-2xl font-semibold">7. Erogazione del Contributo</h2>
            <span>{activeSection === 'erogazione' ? '−' : '+'}</span>
          </button>
          
          {activeSection === 'erogazione' && (
            <div className="bg-white p-6 rounded-b-lg shadow-md border-l-2 border-r-2 border-b-2 border-green-200">
              <h3 className="text-xl font-semibold mb-3 text-green-700">Modalità di Erogazione del Contributo</h3>
              <p>Una volta completato l'investimento, l'impresa può richiedere l'erogazione del contributo seguendo un processo specifico:</p>
              
              <div className="mt-6">
                <div className="flex items-start mb-6">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold">1</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium mb-2 text-green-600">Completamento dell'Investimento</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Realizzare l'investimento entro 12 mesi dalla stipula del contratto di finanziamento</li>
                      <li>Assicurarsi che tutti i beni siano stati consegnati, installati e messi in funzione</li>
                      <li>Per beni 4.0: verificare l'interconnessione al sistema aziendale</li>
                      <li>Per beni Green: verificare la conformità ai requisiti ambientali</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold">2</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium mb-2 text-green-600">Preparazione della Documentazione</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Raccogliere tutte le fatture relative all'investimento</li>
                      <li>Ottenere le dichiarazioni liberatorie dei fornitori</li>
                      <li>Preparare la documentazione di pagamento (bonifici, estratti conto)</li>
                      <li>Per beni 4.0: perizia tecnica o attestato di conformità</li>
                      <li>Per beni Green: dichiarazioni specifiche dei fornitori</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold">3</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium mb-2 text-green-600">Compilazione della Richiesta</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Accedere alla piattaforma dedicata sul sito del MIMIT</li>
                      <li>Compilare il modulo di richiesta di erogazione</li>
                      <li>Dichiarare l'avvenuta realizzazione dell'investimento</li>
                      <li>Generare il modulo compilato in formato PDF</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold">4</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium mb-2 text-green-600">Invio della Richiesta</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Firmare digitalmente il modulo di richiesta (formato p7m)</li>
                      <li>Inviare la richiesta via PEC al MIMIT</li>
                      <li>Allegare tutta la documentazione richiesta</li>
                      <li>Rispettare il termine di 120 giorni dal completamento dell'investimento</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold">5</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium mb-2 text-green-600">Ricezione del Contributo</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Il MIMIT verifica la documentazione presentata</li>
                      <li>In caso di esito positivo, eroga il contributo</li>
                      <li>L'accredito avviene sul conto corrente indicato dall'impresa</li>
                      <li>Per contributi superiori a €200.000, l'erogazione avviene in più quote annuali</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 mt-8 text-green-700">Tempistiche di Erogazione</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="text-lg font-medium mb-2 text-green-600">Contributo in Unica Soluzione</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Per finanziamenti fino a €200.000</li>
                    <li>Erogazione entro 30 giorni dalla ricezione della richiesta completa</li>
                    <li>Accredito diretto sul conto corrente dell'impresa</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="text-lg font-medium mb-2 text-green-600">Contributo in Più Quote</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Per finanziamenti superiori a €200.000</li>
                    <li>Prima quota entro 30 giorni dalla ricezione della richiesta</li>
                    <li>Quote successive a cadenza annuale</li>
                    <li>Erogazione automatica senza ulteriori richieste</li>
                  </ul>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 mt-8 text-green-700">Documentazione Necessaria</h3>
              
              <div className="overflow-x-auto mt-4">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                  <thead>
                    <tr className="bg-green-100">
                      <th className="py-2 px-4 border-b text-left">Documento</th>
                      <th className="py-2 px-4 border-b text-left">Descrizione</th>
                      <th className="py-2 px-4 border-b text-left">Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b">Dichiarazione ultimazione investimento</td>
                      <td className="py-2 px-4 border-b">Attesta il completamento dell'investimento</td>
                      <td className="py-2 px-4 border-b">Firmata digitalmente dal legale rappresentante</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-2 px-4 border-b">Fatture d'acquisto</td>
                      <td className="py-2 px-4 border-b">Documentazione fiscale dei beni acquistati</td>
                      <td className="py-2 px-4 border-b">Con dicitura "Bene acquistato con il concorso delle provvidenze previste dalla legge 160/2019"</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">Dichiarazioni liberatorie</td>
                      <td className="py-2 px-4 border-b">Attestano l'avvenuto pagamento integrale</td>
                      <td className="py-2 px-4 border-b">Rilasciate dai fornitori</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-2 px-4 border-b">Documentazione di pagamento</td>
                      <td className="py-2 px-4 border-b">Bonifici, estratti conto, ricevute</td>
                      <td className="py-2 px-4 border-b">Deve dimostrare la tracciabilità dei pagamenti</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">Perizia tecnica (per beni 4.0)</td>
                      <td className="py-2 px-4 border-b">Attesta le caratteristiche 4.0 dei beni</td>
                      <td className="py-2 px-4 border-b">Rilasciata da ingegnere o perito industriale</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-6">
                <p className="font-semibold text-yellow-800">⚠️ Attenzione</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>La richiesta di erogazione deve essere inviata entro 120 giorni dal termine dell'investimento</li>
                  <li>La documentazione deve essere completa e conforme alle specifiche richieste</li>
                  <li>I pagamenti devono essere tracciabili e riferibili ai beni oggetto dell'agevolazione</li>
                  <li>Le fatture devono riportare la dicitura specifica prevista dalla normativa</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-6">
                <p className="font-semibold text-blue-800">Assistenza per l'Erogazione</p>
                <p className="mt-2">SolariX Business ti supporta nella fase di richiesta di erogazione del contributo, garantendo la corretta preparazione della documentazione e il rispetto di tutti i requisiti formali. Contattaci per un supporto personalizzato e massimizzare le possibilità di successo della tua richiesta.</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Sezione 8: Obblighi e Controlli */}
        <div id="obblighi" className="mb-10">
          <button 
            onClick={() => toggleSection('obblighi')} 
            className="w-full flex justify-between items-center bg-green-600 text-white p-4 rounded-lg shadow hover:bg-green-700 transition duration-300"
          >
            <h2 className="text-xl md:text-2xl font-semibold">8. Obblighi e Controlli</h2>
            <span>{activeSection === 'obblighi' ? '−' : '+'}</span>
          </button>
          
          {activeSection === 'obblighi' && (
            <div className="bg-white p-6 rounded-b-lg shadow-md border-l-2 border-r-2 border-b-2 border-green-200">
              <h3 className="text-xl font-semibold mb-3 text-green-700">Obblighi delle Imprese Beneficiarie</h3>
              <p>Le imprese che beneficiano delle agevolazioni della Nuova Sabatini Green sono tenute a rispettare una serie di obblighi:</p>
              
              <div className="mt-6 space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h4 className="text-lg font-medium mb-2 text-green-600">Obblighi di Mantenimento</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Mantenere l'unità produttiva in cui è stato realizzato l'investimento per almeno 3 anni dalla data di completamento</li>
                    <li>Conservare i beni agevolati nell'unità produttiva per almeno 3 anni</li>
                    <li>Non alienare, cedere o distrarre i beni oggetto dell'agevolazione</li>
                    <li>Mantenere i requisiti di PMI per tutta la durata del finanziamento</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h4 className="text-lg font-medium mb-2 text-green-600">Obblighi Documentali</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Conservare tutta la documentazione relativa all'investimento per 10 anni dalla data di concessione</li>
                    <li>Tenere a disposizione la documentazione per eventuali controlli</li>
                    <li>Riportare sulle fatture la dicitura specifica prevista dalla normativa</li>
                    <li>Conservare le dichiarazioni dei fornitori per beni Green e 4.0</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h4 className="text-lg font-medium mb-2 text-green-600">Obblighi di Comunicazione</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Comunicare tempestivamente eventuali variazioni o modifiche nei requisiti di ammissibilità</li>
                    <li>Segnalare eventuali variazioni relative all'investimento</li>
                    <li>Comunicare eventuali operazioni straordinarie (fusioni, scissioni, ecc.)</li>
                    <li>Fornire informazioni e documentazione su richiesta degli enti preposti ai controlli</li>
                  </ul>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 mt-8 text-green-700">Controlli e Verifiche</h3>
              <p>Le imprese beneficiarie sono soggette a controlli e verifiche da parte di diversi soggetti:</p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="text-lg font-medium mb-2 text-green-600">Controlli del MIMIT</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Verifiche documentali sulla richiesta di erogazione</li>
                    <li>Controlli a campione sulla veridicità delle dichiarazioni</li>
                    <li>Ispezioni presso la sede dell'impresa</li>
                    <li>Verifiche sull'effettivo mantenimento dei beni</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="text-lg font-medium mb-2 text-green-600">Controlli della Banca/Intermediario</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Verifiche sul corretto utilizzo del finanziamento</li>
                    <li>Controlli sul rispetto del piano di ammortamento</li>
                    <li>Monitoraggio della situazione finanziaria dell'impresa</li>
                    <li>Segnalazioni di eventuali anomalie al MIMIT</li>
                  </ul>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 mt-8 text-green-700">Revoca delle Agevolazioni</h3>
              <p>Le agevolazioni possono essere revocate, in tutto o in parte, nei seguenti casi:</p>
              
              <div className="mt-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Mancato rispetto degli obblighi di mantenimento dei beni e dell'unità produttiva</li>
                  <li>Perdita dei requisiti di ammissibilità durante il periodo di fruizione</li>
                  <li>Irregolarità riscontrate durante i controlli</li>
                  <li>Dichiarazioni mendaci o documentazione non veritiera</li>
                  <li>Risoluzione anticipata del contratto di finanziamento</li>
                  <li>Apertura di procedure concorsuali a carico dell'impresa</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-6">
                <p className="font-semibold text-yellow-800">⚠️ Conseguenze della Revoca</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Restituzione dell'intero contributo ricevuto</li>
                  <li>Applicazione di interessi al tasso di riferimento vigente</li>
                  <li>Possibili sanzioni amministrative</li>
                  <li>Impossibilità di accedere ad altre agevolazioni per un periodo determinato</li>
                </ul>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 mt-8 text-green-700">Variazioni e Modifiche</h3>
              
              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="text-lg font-medium mb-2 text-green-600">Variazioni Ammissibili</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Variazioni dei beni acquistati con caratteristiche tecniche e funzionalità analoghe o superiori</li>
                    <li>Modifiche della tempistica di realizzazione (entro i limiti massimi)</li>
                    <li>Operazioni straordinarie che non comportano la perdita dei requisiti</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2 text-green-600">Procedura di Comunicazione</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Comunicare tempestivamente al MIMIT e alla banca/intermediario</li>
                    <li>Fornire documentazione a supporto della variazione</li>
                    <li>Attendere l'autorizzazione prima di procedere (quando richiesto)</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-6">
                <p className="font-semibold text-blue-800">Supporto per la Compliance</p>
                <p className="mt-2">SolariX Business offre un servizio di assistenza continuativa per garantire il rispetto di tutti gli obblighi previsti dalla Nuova Sabatini Green. Il nostro team ti supporta nella gestione della documentazione, nelle comunicazioni con gli enti preposti e nell'implementazione di procedure interne per il monitoraggio degli obblighi. Contattaci per una consulenza personalizzata.</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Sezione 9: FAQ - Domande Frequenti */}
        <div id="faq" className="mb-10">
          <button 
            onClick={() => toggleSection('faq')} 
            className="w-full flex justify-between items-center bg-green-600 text-white p-4 rounded-lg shadow hover:bg-green-700 transition duration-300"
          >
            <h2 className="text-xl md:text-2xl font-semibold">9. FAQ - Domande Frequenti</h2>
            <span>{activeSection === 'faq' ? '−' : '+'}</span>
          </button>
          
          {activeSection === 'faq' && (
            <div className="bg-white p-6 rounded-b-lg shadow-md border-l-2 border-r-2 border-b-2 border-green-200">
              <h3 className="text-xl font-semibold mb-6 text-green-700">Domande Frequenti sulla Nuova Sabatini Green</h3>
              
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="text-lg font-medium mb-2 text-green-600">Quali sono i vantaggi della Sabatini Green rispetto alla Sabatini ordinaria?</h4>
                  <p>La Sabatini Green offre un contributo maggiorato (3,575% contro il 2,75% standard) per investimenti in beni strumentali a basso impatto ambientale. Inoltre, garantisce una priorità nell'accesso ai fondi e procedure di valutazione più rapide.</p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="text-lg font-medium mb-2 text-green-600">È possibile cumulare la Sabatini Green con altre agevolazioni?</h4>
                  <p>Sì, è possibile cumulare la Sabatini Green con altre agevolazioni pubbliche, inclusi i crediti d'imposta, purché il totale delle agevolazioni non superi il costo dell'investimento. È importante verificare le specifiche regole di cumulabilità per ogni incentivo.</p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="text-lg font-medium mb-2 text-green-600">Quali documenti servono per attestare la natura "green" dell'investimento?</h4>
                  <p>È necessaria una dichiarazione del fornitore che attesti le caratteristiche ambientali del bene, specificando il risparmio energetico o la riduzione dell'impatto ambientale. Per alcune categorie di beni, possono essere richieste certificazioni specifiche o perizie tecniche.</p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="text-lg font-medium mb-2 text-green-600">Cosa succede se l'investimento viene completato in ritardo?</h4>
                  <p>L'investimento deve essere completato entro 12 mesi dalla stipula del contratto di finanziamento. In caso di ritardo, è possibile richiedere una proroga motivata, che deve essere approvata. Se il ritardo non è giustificato o la proroga non viene concessa, si rischia la revoca dell'agevolazione.</p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="text-lg font-medium mb-2 text-green-600">È possibile sostituire i beni acquistati durante il periodo vincolato?</h4>
                  <p>I beni acquistati devono essere mantenuti nell'unità produttiva per almeno 3 anni. È possibile sostituirli solo in caso di guasto irreparabile, previa comunicazione al MIMIT, e solo con beni con caratteristiche tecniche uguali o superiori.</p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="text-lg font-medium mb-2 text-green-600">Come viene erogato il contributo per importi elevati?</h4>
                  <p>Per finanziamenti fino a €200.000, il contributo viene erogato in un'unica soluzione. Per importi superiori, viene erogato in più quote annuali. La prima quota viene erogata entro 30 giorni dalla richiesta completa, le successive a cadenza annuale senza necessità di ulteriori richieste.</p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="text-lg font-medium mb-2 text-green-600">Cosa succede in caso di estinzione anticipata del finanziamento?</h4>
                  <p>In caso di estinzione anticipata del finanziamento, il contributo viene ricalcolato in base all'effettiva durata del finanziamento. L'impresa deve comunicare l'estinzione anticipata al MIMIT, che provvederà a ricalcolare l'importo del contributo spettante.</p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="text-lg font-medium mb-2 text-green-600">È possibile richiedere la Sabatini Green per beni usati?</h4>
                  <p>No, la Sabatini Green è riservata esclusivamente all'acquisto di beni nuovi di fabbrica. I beni usati, anche se ricondizionati o rigenerati, non sono ammissibili all'agevolazione.</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2 text-green-600">Quali sono i tempi medi di approvazione della domanda?</h4>
                  <p>I tempi medi di approvazione variano in base al volume di domande e alla completezza della documentazione presentata. Indicativamente, dalla presentazione della domanda alla delibera della banca possono trascorrere 30-60 giorni, mentre per la concessione del contributo da parte del MIMIT possono essere necessari ulteriori 30-60 giorni.</p>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-8">
                <p className="font-semibold text-blue-800">Hai altre domande?</p>
                <p className="mt-2">Il team di SolariX Business è a tua disposizione per chiarire qualsiasi dubbio sulla Nuova Sabatini Green e per supportarti in tutte le fasi della richiesta. Contattaci per una consulenza personalizzata e scopri come possiamo aiutarti a ottimizzare il tuo investimento.</p>
              </div>
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
}
