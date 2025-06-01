'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'SIMEST Fondo 394/81',
  'provider': {
    '@type': 'Organization',
    'name': 'SolarixBusiness',
    'url': 'https://www.solarixbusiness.it'
  },
  'serviceType': 'Consulenza Finanziaria',
  'areaServed': {
    '@type': 'Country',
    'name': 'Italia'
  },
  'description': 'Servizio di consulenza per l\'accesso ai finanziamenti SIMEST Fondo 394/81 per l\'internazionalizzazione delle imprese.'
};

export default function SimestPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (sectionId: string) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };
  
  // Funzione per gestire il click sui link dell'indice
  const handleIndexClick = (sectionId: string, event: React.MouseEvent) => {
    event.preventDefault(); // Previene il comportamento predefinito del link
    setActiveSection(sectionId); // Apre la sezione
    
    // Scorre alla sezione dopo un breve ritardo per permettere alla sezione di aprirsi
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <>
      <Head>
        <title>SIMEST Fondo 394/81: Guida e Consulenza | SolariX Business</title>
        <meta name="description" content="Guida completa ai finanziamenti SIMEST Fondo 394/81 per l'internazionalizzazione. SolariX Business offre consulenza per PMI." />
        <meta name="keywords" content="SIMEST, Fondo 394/81, internazionalizzazione, finanziamenti agevolati, PMI, export, consulenza" />
        <link rel="canonical" href="https://www.solarixbusiness.it/simest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      
      <section className="py-16 px-6 md:px-20 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-10 text-green-800">SIMEST - Fondo 394/81</h1>

          {/* Immagine Guida SIMEST */}
          <div className="mb-12 w-full">
            <Image
              src="/images/strumenti/SIMEST.jpg"
              alt="Guida SIMEST Fondo 394/81"
              width={1200}
              height={450}
              className="w-full h-auto object-cover rounded-lg shadow-md max-h-72 sm:max-h-80 md:max-h-96 lg:max-h-[450px]"
              priority
              sizes="100vw"
            />
          </div>

          {/* Indice completo */}
          <section className="mb-10 bg-white rounded-lg shadow-md p-6">
            <div className="container mx-auto">
              <h2 className="text-2xl font-semibold mb-4 text-green-700">Indice dei contenuti</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-medium mb-3 text-green-600">Parte 1: Quadro Normativo e Condizioni di Ammissibilità</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#quadro" onClick={(e) => handleIndexClick('quadro', e)} className="text-blue-600 hover:underline flex items-center">
                        <span className="inline-block w-6 h-6 bg-green-100 text-green-700 rounded-full text-center mr-2">1</span>
                        Quadro Normativo
                      </a>
                    </li>
                    <li>
                      <a href="#definizioni" onClick={(e) => handleIndexClick('definizioni', e)} className="text-blue-600 hover:underline flex items-center">
                        <span className="inline-block w-6 h-6 bg-green-100 text-green-700 rounded-full text-center mr-2">2</span>
                        Definizioni
                      </a>
                    </li>
                    <li>
                      <a href="#condizioni" onClick={(e) => handleIndexClick('condizioni', e)} className="text-blue-600 hover:underline flex items-center">
                        <span className="inline-block w-6 h-6 bg-green-100 text-green-700 rounded-full text-center mr-2">3</span>
                        Condizioni di Ammissibilità
                      </a>
                    </li>
                    <li>
                      <a href="#esclusioni" onClick={(e) => handleIndexClick('esclusioni', e)} className="text-blue-600 hover:underline flex items-center">
                        <span className="inline-block w-6 h-6 bg-green-100 text-green-700 rounded-full text-center mr-2">4</span>
                        Esclusioni Settoriali e Soggettive
                      </a>
                    </li>
                    <li>
                      <a href="#forma" onClick={(e) => handleIndexClick('forma', e)} className="text-blue-600 hover:underline flex items-center">
                        <span className="inline-block w-6 h-6 bg-green-100 text-green-700 rounded-full text-center mr-2">5</span>
                        Forma Singola o Associata
                      </a>
                    </li>
                    <li>
                      <a href="#importi" onClick={(e) => handleIndexClick('importi', e)} className="text-blue-600 hover:underline flex items-center">
                        <span className="inline-block w-6 h-6 bg-green-100 text-green-700 rounded-full text-center mr-2">6</span>
                        Importi e Limiti dell'Intervento
                      </a>
                    </li>
                    <li>
                      <a href="#benefici" onClick={(e) => handleIndexClick('benefici', e)} className="text-blue-600 hover:underline flex items-center">
                        <span className="inline-block w-6 h-6 bg-green-100 text-green-700 rounded-full text-center mr-2">7</span>
                        Benefici Aggiuntivi
                      </a>
                    </li>
                    <li>
                      <a href="#procedure" onClick={(e) => handleIndexClick('procedure', e)} className="text-blue-600 hover:underline flex items-center">
                        <span className="inline-block w-6 h-6 bg-green-100 text-green-700 rounded-full text-center mr-2">8</span>
                        Procedure di Accesso
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3 text-green-600">Parte 2: Spese Ammissibili, Rendicontazione ed Erogazioni</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#spese" onClick={(e) => handleIndexClick('spese', e)} className="text-blue-600 hover:underline flex items-center">
                        <span className="inline-block w-6 h-6 bg-green-100 text-green-700 rounded-full text-center mr-2">9</span>
                        Spese Ammissibili
                      </a>
                    </li>
                    <li>
                      <a href="#timing" onClick={(e) => handleIndexClick('timing', e)} className="text-blue-600 hover:underline flex items-center">
                        <span className="inline-block w-6 h-6 bg-green-100 text-green-700 rounded-full text-center mr-2">10</span>
                        Timing e Sostenibilità delle Spese
                      </a>
                    </li>
                    <li>
                      <a href="#conto" onClick={(e) => handleIndexClick('conto', e)} className="text-blue-600 hover:underline flex items-center">
                        <span className="inline-block w-6 h-6 bg-green-100 text-green-700 rounded-full text-center mr-2">11</span>
                        Conto Corrente Dedicato
                      </a>
                    </li>
                    <li>
                      <a href="#rendicontazione" onClick={(e) => handleIndexClick('rendicontazione', e)} className="text-blue-600 hover:underline flex items-center">
                        <span className="inline-block w-6 h-6 bg-green-100 text-green-700 rounded-full text-center mr-2">12</span>
                        Rendicontazione
                      </a>
                    </li>
                    <li>
                      <a href="#erogazioni" onClick={(e) => handleIndexClick('erogazioni', e)} className="text-blue-600 hover:underline flex items-center">
                        <span className="inline-block w-6 h-6 bg-green-100 text-green-700 rounded-full text-center mr-2">13</span>
                        Erogazioni
                      </a>
                    </li>
                    <li>
                      <a href="#consolidamento" onClick={(e) => handleIndexClick('consolidamento', e)} className="text-blue-600 hover:underline flex items-center">
                        <span className="inline-block w-6 h-6 bg-green-100 text-green-700 rounded-full text-center mr-2">14</span>
                        Consolidamento
                      </a>
                    </li>
                    <li>
                      <a href="#obblighi" onClick={(e) => handleIndexClick('obblighi', e)} className="text-blue-600 hover:underline flex items-center">
                        <span className="inline-block w-6 h-6 bg-green-100 text-green-700 rounded-full text-center mr-2">15</span>
                        Obblighi dell'Impresa
                      </a>
                    </li>
                    <li>
                      <a href="#cumulabilita" onClick={(e) => handleIndexClick('cumulabilita', e)} className="text-blue-600 hover:underline flex items-center">
                        <span className="inline-block w-6 h-6 bg-green-100 text-green-700 rounded-full text-center mr-2">16</span>
                        Cumulabilità con Altri Aiuti
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div>
                  <h3 className="text-xl font-medium mb-3 text-green-600">Parte 3: Revoca, Restituzione e Aspetti Procedurali</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#revoca" onClick={(e) => handleIndexClick('revoca', e)} className="text-blue-600 hover:underline flex items-center">
                        <span className="inline-block w-6 h-6 bg-green-100 text-green-700 rounded-full text-center mr-2">17</span>
                        Revoca dell'Intervento
                      </a>
                    </li>
                    <li>
                      <a href="#conseguenze" onClick={(e) => handleIndexClick('conseguenze', e)} className="text-blue-600 hover:underline flex items-center">
                        <span className="inline-block w-6 h-6 bg-green-100 text-green-700 rounded-full text-center mr-2">18</span>
                        Conseguenze della Revoca
                      </a>
                    </li>
                    <li>
                      <a href="#procedura" onClick={(e) => handleIndexClick('procedura', e)} className="text-blue-600 hover:underline flex items-center">
                        <span className="inline-block w-6 h-6 bg-green-100 text-green-700 rounded-full text-center mr-2">19</span>
                        Procedura di Revoca
                      </a>
                    </li>
                    <li>
                      <a href="#controlli" onClick={(e) => handleIndexClick('controlli', e)} className="text-blue-600 hover:underline flex items-center">
                        <span className="inline-block w-6 h-6 bg-green-100 text-green-700 rounded-full text-center mr-2">20</span>
                        Controlli e Verifiche
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li>
                      <a href="#comunicazioni" onClick={(e) => handleIndexClick('comunicazioni', e)} className="text-blue-600 hover:underline flex items-center">
                        <span className="inline-block w-6 h-6 bg-green-100 text-green-700 rounded-full text-center mr-2">21</span>
                        Comunicazioni con SIMEST
                      </a>
                    </li>
                    <li>
                      <a href="#stipula" onClick={(e) => handleIndexClick('stipula', e)} className="text-blue-600 hover:underline flex items-center">
                        <span className="inline-block w-6 h-6 bg-green-100 text-green-700 rounded-full text-center mr-2">22</span>
                        Stipula del Contratto
                      </a>
                    </li>
                    <li>
                      <a href="#faq" onClick={(e) => handleIndexClick('faq', e)} className="text-blue-600 hover:underline flex items-center">
                        <span className="inline-block w-6 h-6 bg-green-100 text-green-700 rounded-full text-center mr-2">23</span>
                        FAQ - Domande Frequenti
                      </a>
                    </li>
                    <li>
                      <a href="#conclusioni" onClick={(e) => handleIndexClick('conclusioni', e)} className="text-blue-600 hover:underline flex items-center">
                        <span className="inline-block w-6 h-6 bg-green-100 text-green-700 rounded-full text-center mr-2">24</span>
                        Conclusioni e Contatti
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-gray-600">Seleziona una sezione per visualizzarne il contenuto dettagliato. Ogni sezione può essere espansa o compressa cliccando sul titolo.</p>
              </div>
            </div>
          </section>

          {/* Introduzione al quadro normativo */}
          <div className="mb-12">
            <div className="flex items-center bg-green-50 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('introduzione')}>
              <h2 id="introduzione" className="text-2xl font-semibold text-green-700">1. INTRODUZIONE AL QUADRO NORMATIVO</h2>
              <span className="ml-auto text-2xl">{activeSection === 'introduzione' ? '−' : '+'}</span>
            </div>
            <div className={`bg-white p-6 border border-green-100 rounded-b-lg ${activeSection === 'introduzione' ? 'block' : 'hidden'}`}>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">1.1 Base Normativa e Riferimenti Legislativi</h3>
                <p className="mb-3">
                  Il Fondo 394/81 rappresenta uno strumento strategico per l'internazionalizzazione delle imprese italiane, disciplinato da un quadro normativo complesso che include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li><strong>Decreto del 1° giugno 2023:</strong> Disciplina principale del Fondo 394/81</li>
                  <li><strong>Circolare 4/394/2023-DE-28.02.2025:</strong> Documento operativo dettagliato</li>
                  <li><strong>Regolamento UE n. 2831/2023:</strong> Normativa "de minimis" (sostituisce il precedente n. 1407/2013)</li>
                  <li><strong>Regolamento UE n. 651/2014:</strong> GBER (General Block Exemption Regulation)</li>
                  <li><strong>Regolamento UE 2021/523:</strong> InvestEU (con relative esclusioni nell'Allegato V - Lettera B)</li>
                  <li><strong>Operatività PNRR:</strong> Circolari specifiche per Transizione Digitale ed Ecologica</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">1.2 Quadro degli Aiuti di Stato</h3>
                <p className="mb-3">
                  Gli interventi sono concessi esclusivamente:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li>Nei limiti della normativa europea sugli aiuti "de minimis"</li>
                  <li>In conformità con la normativa europea sugli aiuti di Stato</li>
                  <li>Rispettando il principio di assenza del "doppio finanziamento" (per risorse PNRR)</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">1.3 Gestione del Fondo</h3>
                <p className="mb-3">
                  SIMEST opera come gestore del Fondo 394/81 con le seguenti caratteristiche:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Patrimonio autonomo e distinto da quello di SIMEST</li>
                  <li>Contabilità separata con rendiconto annuale sottoposto al Comitato Agevolazioni</li>
                  <li>Risorse derivanti da: versamenti al Fondo, entrate imputate al medesimo, stanziamenti normativi</li>
                </ul>
              </div>
              
              <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-semibold text-green-600 mb-2">Hai bisogno di supporto?</h4>
                <p className="mb-4">Se hai dubbi sul quadro normativo o necessiti di assistenza per comprendere meglio le normative applicabili, il nostro team di consulenti è a tua disposizione.</p>
                <div className="flex items-center">
                  <Link href="/contatti" className="text-blue-600 hover:underline mr-6">Contattaci per una consulenza</Link>
                  <a href="https://wa.me/+393470087833" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-lg">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.14 4.486c-3.868 0-7.015 3.147-7.015 7.015 0 1.513.469 2.919 1.27 4.075l-1.665 4.975 5.095-1.635a6.979 6.979 0 004.315 1.485c3.868 0 7.015-3.147 7.015-7.015s-3.147-7.015-7.015-7.015h-.005z"/>
                    </svg>
                    Contattaci su WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Definizioni fondamentali */}
          <div className="mb-12">
            <div className="flex items-center bg-green-50 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('definizioni')}>
              <h2 id="definizioni" className="text-2xl font-semibold text-green-700">2. DEFINIZIONI FONDAMENTALI</h2>
              <span className="ml-auto text-2xl">{activeSection === 'definizioni' ? '−' : '+'}</span>
            </div>
            <div className={`bg-white p-6 border border-green-100 rounded-b-lg ${activeSection === 'definizioni' ? 'block' : 'hidden'}`}>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">2.1 Tipologie di Imprese</h3>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-green-600">PMI (Piccole e Medie Imprese)</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Dipendenti: &lt; 250</li>
                    <li>Fatturato annuo: &lt; €50 milioni OPPURE totale bilancio: &lt; €43 milioni</li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-green-600">Micro Impresa</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>PMI con fatturato/totale bilancio ≤ €2 milioni</li>
                    <li>Dipendenti: &lt; 10</li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-green-600">PMI Innovativa</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>PMI costituita come società di capitali</li>
                    <li>Rispetta parametri di innovazione tecnologica</li>
                    <li>Iscritta in sezione speciale del registro imprese</li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-green-600">Start Up Innovativa</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Società di capitali non quotata</li>
                    <li>Possiede requisiti specifici di innovazione</li>
                    <li>Iscritta in sezione speciale del registro imprese</li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-green-600">Altra Impresa</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Qualsiasi impresa non qualificabile come PMI</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">2.2 Elementi Operativi Chiave</h3>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-green-600">CUP (Codice Unico di Progetto)</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Codice comunicato da SIMEST</li>
                    <li><strong>OBBLIGATORIO</strong> su tutte le fatture e bonifici relativi alle spese ammissibili</li>
                    <li>L'assenza del CUP comporta l'inammissibilità della spesa</li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-green-600">Conto Corrente Dedicato</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Conto bancario da aprire prima di sostenere le spese ammissibili</li>
                    <li>Utilizzo esclusivo per spese ammissibili ed erogazioni SIMEST</li>
                    <li>Può essere condiviso con altri Interventi Agevolativi SIMEST</li>
                    <li>Contratto deve essere caricato sul Portale</li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-green-600">Periodo di Realizzazione</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Decorre dalla ricezione del CUP</li>
                    <li>Termina 24 mesi dopo la Data di Stipula</li>
                    <li>Possibile proroga di 6 mesi</li>
                    <li>Tutte le spese devono essere sostenute in questo periodo</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-semibold text-green-600 mb-2">Hai bisogno di supporto?</h4>
                <p className="mb-4">Se hai dubbi sulla classificazione della tua impresa o sui requisiti operativi, il nostro team di consulenti è a tua disposizione.</p>
                <div className="flex items-center">
                  <Link href="/contatti" className="text-blue-600 hover:underline mr-6">Contattaci per una consulenza</Link>
                  <a href="https://wa.me/+393470087833" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-lg">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.14 4.486c-3.868 0-7.015 3.147-7.015 7.015 0 1.513.469 2.919 1.27 4.075l-1.665 4.975 5.095-1.635a6.979 6.979 0 004.315 1.485c3.868 0 7.015-3.147 7.015-7.015s-3.147-7.015-7.015-7.015h-.005z"/>
                    </svg>
                    Contattaci su WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Condizioni di ammissibilità */}
          <div className="mb-12">
            <div className="flex items-center bg-green-50 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('condizioni')}>
              <h2 id="condizioni" className="text-2xl font-semibold text-green-700">3. CONDIZIONI DI AMMISSIBILITÀ</h2>
              <span className="ml-auto text-2xl">{activeSection === 'condizioni' ? '−' : '+'}</span>
            </div>
            <div className={`bg-white p-6 border border-green-100 rounded-b-lg ${activeSection === 'condizioni' ? 'block' : 'hidden'}`}>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">3.1 Requisiti Soggettivi</h3>
                <p className="mb-3">Per accedere agli interventi agevolativi del Fondo 394/81, le imprese devono soddisfare i seguenti requisiti:</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-green-600">Requisiti Base</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Essere regolarmente costituite e iscritte nel Registro delle Imprese</li>
                    <li>Essere in normale attività (non in liquidazione o procedura concorsuale)</li>
                    <li>Avere sede legale in Italia</li>
                    <li>Non essere in situazione di difficoltà ai sensi della normativa UE</li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-green-600">Requisiti Finanziari</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Avere un patrimonio netto non negativo</li>
                    <li>Avere un rapporto tra patrimonio netto e totale dell'attivo non inferiore al 5%</li>
                    <li>Avere un rapporto tra indebitamento finanziario netto e fatturato non superiore a:</li>
                    <ul className="list-disc list-inside ml-8">
                      <li>6,0 per PMI</li>
                      <li>5,0 per Mid Cap e Grandi Imprese</li>
                    </ul>
                  </ul>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">3.2 Deroghe ai Requisiti Finanziari</h3>
                <p className="mb-3">Sono previste deroghe specifiche per:</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-green-600">Start-up Innovative</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Esonero dal requisito del patrimonio netto non negativo</li>
                    <li>Esonero dal requisito del rapporto tra patrimonio netto e attivo</li>
                    <li>Esonero dal requisito del rapporto tra indebitamento e fatturato</li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-green-600">PMI Innovative</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Esonero dal requisito del rapporto tra indebitamento e fatturato</li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-green-600">Imprese a prevalente partecipazione femminile o giovanile</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Esonero dal requisito del rapporto tra indebitamento e fatturato</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">3.3 Requisiti Specifici per Tipologia di Intervento</h3>
                <p className="mb-3">Oltre ai requisiti generali, ogni linea di intervento prevede requisiti specifici:</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-green-600">Partecipazione a Fiere/Mostre</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Partecipazione a una o più fiere/mostre di carattere internazionale</li>
                    <li>Possibilità di svolgimento in Italia se di rilevanza internazionale</li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-green-600">Inserimento Mercati Esteri</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Realizzazione di strutture commerciali in paesi esteri</li>
                    <li>Sviluppo di attività promozionali e di comunicazione</li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-green-600">Temporary Export Manager (TEM)</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Inserimento temporaneo di figure professionali specializzate</li>
                    <li>Sviluppo di competenze interne attraverso attività di affiancamento</li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-green-600">E-Commerce</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Sviluppo di soluzioni di e-commerce attraverso l'utilizzo di un market place o la realizzazione di una piattaforma informatica propria</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-semibold text-green-600 mb-2">Hai bisogno di supporto?</h4>
                <p className="mb-4">Se hai dubbi sulla tua ammissibilità o sui requisiti specifici per la tua impresa, il nostro team di consulenti è a tua disposizione per un'analisi personalizzata.</p>
                <div className="flex items-center">
                  <Link href="/contatti" className="text-blue-600 hover:underline mr-6">Contattaci per una consulenza</Link>
                  <a href="https://wa.me/+393470087833" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-lg">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.14 4.486c-3.868 0-7.015 3.147-7.015 7.015 0 1.513.469 2.919 1.27 4.075l-1.665 4.975 5.095-1.635a6.979 6.979 0 004.315 1.485c3.868 0 7.015-3.147 7.015-7.015s-3.147-7.015-7.015-7.015h-.005z"/>
                    </svg>
                    Contattaci su WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Esclusioni settoriali e soggettive */}
          <div className="mb-12">
            <div className="flex items-center bg-green-50 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('esclusioni')}>
              <h2 id="esclusioni" className="text-2xl font-semibold text-green-700">4. ESCLUSIONI SETTORIALI E SOGGETTIVE</h2>
              <span className="ml-auto text-2xl">{activeSection === 'esclusioni' ? '−' : '+'}</span>
            </div>
            <div className={`bg-white p-6 border border-green-100 rounded-b-lg ${activeSection === 'esclusioni' ? 'block' : 'hidden'}`}>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">4.1 Esclusioni Settoriali</h3>
                <p className="mb-3">Non sono ammissibili agli interventi agevolativi le imprese operanti nei seguenti settori:</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-green-600">Settori Esclusi</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Produzione, commercio o altra attività illecita secondo la legislazione italiana</li>
                    <li>Produzione o commercio di tabacco e bevande alcoliche distillate</li>
                    <li>Produzione o commercio di armi e munizioni</li>
                    <li>Casinò, scommesse e imprese equivalenti</li>
                    <li>Ricerca, sviluppo o applicazioni tecniche relativi a programmi elettronici specificamente finalizzati a:</li>
                    <ul className="list-disc list-inside ml-8">
                      <li>Sostenere attività escluse</li>
                      <li>Giochi d'azzardo su Internet e casinò online</li>
                      <li>Pornografia</li>
                    </ul>
                    <li>Settore IT che supporta:</li>
                    <ul className="list-disc list-inside ml-8">
                      <li>Accesso a reti elettroniche di dati per attività illecite</li>
                      <li>Download di dati elettronici illegali</li>
                    </ul>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-green-600">Settori con Limitazioni</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Settore finanziario (solo per specifiche attività)</li>
                    <li>Trasporto di merci su strada (con limitazioni per acquisto di veicoli)</li>
                    <li>Attività immobiliari (con specifiche esclusioni)</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">4.2 Esclusioni Soggettive</h3>
                <p className="mb-3">Sono esclusi dagli interventi agevolativi i soggetti che:</p>
                
                <div className="mb-4">
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Risultano inadempienti o insolventi per operazioni di qualsiasi natura con SIMEST</li>
                    <li>Sono sottoposti a procedura concorsuale o si trovano in stato di fallimento</li>
                    <li>Sono soggetti a sanzioni finanziarie o misure restrittive imposte dall'UE</li>
                    <li>Hanno ricevuto e non rimborsato aiuti dichiarati illegali o incompatibili dalla Commissione Europea</li>
                    <li>Sono in condizioni tali da risultare "impresa in difficoltà" secondo la normativa UE</li>
                    <li>Non rispettano i requisiti di regolarità contributiva e fiscale</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">4.3 Esclusioni Specifiche per Risorse PNRR</h3>
                <p className="mb-3">Per gli interventi finanziati con risorse PNRR, sono previste ulteriori esclusioni:</p>
                
                <div className="mb-4">
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Attività che non garantiscono il principio DNSH (Do No Significant Harm)</li>
                    <li>Attività che non rispettano la normativa ambientale nazionale ed europea</li>
                    <li>Attività che violano i principi di non discriminazione e parità di genere</li>
                    <li>Progetti che comportano l'uso di combustibili fossili, incluso l'uso a valle</li>
                    <li>Attività nell'ambito del sistema di scambio di quote di emissione dell'UE (ETS) che generano emissioni di gas a effetto serra</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-semibold text-green-600 mb-2">Hai bisogno di supporto?</h4>
                <p className="mb-4">Se hai dubbi sulla possibilità di accedere ai finanziamenti in base al tuo settore di attività o alla tua situazione aziendale, il nostro team di consulenti è a tua disposizione per una valutazione preliminare.</p>
                <div className="flex items-center">
                  <Link href="/contatti" className="text-blue-600 hover:underline mr-6">Contattaci per una consulenza</Link>
                  <a href="https://wa.me/+393470087833" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-lg">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.14 4.486c-3.868 0-7.015 3.147-7.015 7.015 0 1.513.469 2.919 1.27 4.075l-1.665 4.975 5.095-1.635a6.979 6.979 0 004.315 1.485c3.868 0 7.015-3.147 7.015-7.015s-3.147-7.015-7.015-7.015h-.005z"/>
                    </svg>
                    Contattaci su WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Forma singola o associata */}
          <div className="mb-12">
            <div className="flex items-center bg-green-50 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('forma')}>
              <h2 id="forma" className="text-2xl font-semibold text-green-700">5. FORMA SINGOLA O ASSOCIATA</h2>
              <span className="ml-auto text-2xl">{activeSection === 'forma' ? '−' : '+'}</span>
            </div>
            <div className={`bg-white p-6 border border-green-100 rounded-b-lg ${activeSection === 'forma' ? 'block' : 'hidden'}`}>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">5.1 Modalità di Presentazione</h3>
                <p className="mb-3">Le imprese possono presentare domanda di intervento agevolativo in:</p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-600 mb-2">Forma Singola</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Domanda presentata da una singola impresa</li>
                      <li>Valutazione dei requisiti sulla singola entità</li>
                      <li>Procedura semplificata</li>
                      <li>Adatta a progetti di internazionalizzazione individuali</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-600 mb-2">Forma Aggregata</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Domanda presentata da più imprese in forma congiunta</li>
                      <li>Necessaria la presenza di un'impresa capofila</li>
                      <li>Valutazione dei requisiti su tutte le imprese partecipanti</li>
                      <li>Adatta a progetti di internazionalizzazione complessi</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">5.2 Forme Aggregate Ammissibili</h3>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-green-600">Rete Soggetto</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Rete con soggettività giuridica (iscritta al Registro Imprese)</li>
                    <li>Dotata di fondo patrimoniale comune</li>
                    <li>Organo comune con potere di rappresentanza</li>
                    <li>Presenta domanda come soggetto unico</li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-green-600">Rete Contratto</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Aggregazione di imprese basata su un contratto</li>
                    <li>Priva di soggettività giuridica</li>
                    <li>Richiede designazione di un'impresa capofila</li>
                    <li>Ogni impresa partecipante deve possedere i requisiti di ammissibilità</li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-green-600">ATI/RTI (Associazione/Raggruppamento Temporaneo di Imprese)</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Aggregazione temporanea finalizzata alla realizzazione del progetto</li>
                    <li>Richiede un mandato collettivo con rappresentanza ad una capofila</li>
                    <li>Necessaria la costituzione formale prima della stipula del contratto</li>
                    <li>Responsabilità solidale di tutti i partecipanti</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">5.3 Ruolo dell'Impresa Capofila</h3>
                <p className="mb-3">L'impresa capofila, nelle forme aggregate, svolge le seguenti funzioni:</p>
                
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Presentazione della domanda di intervento agevolativo</li>
                  <li>Coordinamento delle attività progettuali</li>
                  <li>Interfaccia unica con SIMEST per tutte le comunicazioni</li>
                  <li>Raccolta e trasmissione della documentazione richiesta</li>
                  <li>Gestione finanziaria e rendicontazione delle spese</li>
                  <li>Responsabilità della corretta esecuzione del progetto</li>
                </ul>
              </div>
              
              <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-semibold text-green-600 mb-2">Hai bisogno di supporto?</h4>
                <p className="mb-4">Se hai dubbi sulla forma più adatta per la tua impresa o necessiti di assistenza nella costituzione di una rete o aggregazione, il nostro team di consulenti è a tua disposizione.</p>
                <div className="flex items-center">
                  <Link href="/contatti" className="text-blue-600 hover:underline mr-6">Contattaci per una consulenza</Link>
                  <a href="https://wa.me/+393470087833" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-lg">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.14 4.486c-3.868 0-7.015 3.147-7.015 7.015 0 1.513.469 2.919 1.27 4.075l-1.665 4.975 5.095-1.635a6.979 6.979 0 004.315 1.485c3.868 0 7.015-3.147 7.015-7.015s-3.147-7.015-7.015-7.015h-.005z"/>
                    </svg>
                    Contattaci su WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Importi e limiti dell'intervento */}
          <div className="mb-12">
            <div className="flex items-center bg-green-50 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('importi')}>
              <h2 id="importi" className="text-2xl font-semibold text-green-700">6. IMPORTI E LIMITI DELL'INTERVENTO</h2>
              <span className="ml-auto text-2xl">{activeSection === 'importi' ? '−' : '+'}</span>
            </div>
            <div className={`bg-white p-6 border border-green-100 rounded-b-lg ${activeSection === 'importi' ? 'block' : 'hidden'}`}>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">6.1 Struttura Finanziaria dell'Intervento</h3>
                <p className="mb-4">L'intervento agevolativo del Fondo 394/81 si compone di:</p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-600 mb-2">Finanziamento Agevolato</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Tasso agevolato (attualmente 0,50% annuo)</li>
                      <li>Durata: fino a 6 anni, incluso periodo di preammortamento</li>
                      <li>Preammortamento: fino a 2 anni dalla data di stipula</li>
                      <li>Rimborso: rate semestrali posticipate a capitale costante</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-600 mb-2">Quota a Fondo Perduto</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Percentuale variabile in base alla tipologia di impresa</li>
                      <li>Maggiore per PMI del Mezzogiorno</li>
                      <li>Soggetta a disponibilità di risorse PNRR</li>
                      <li>Non soggetta a restituzione se rispettati i termini</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">6.2 Limiti di Importo per Tipologia di Intervento</h3>
                
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                      <tr className="bg-green-50">
                        <th className="py-2 px-4 border-b border-r text-left">Tipologia di Intervento</th>
                        <th className="py-2 px-4 border-b border-r text-left">Importo Minimo</th>
                        <th className="py-2 px-4 border-b border-r text-left">Importo Massimo</th>
                        <th className="py-2 px-4 border-b text-left">% Fondo Perduto (max)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-4 border-b border-r">Partecipazione a Fiere/Mostre</td>
                        <td className="py-2 px-4 border-b border-r">€ 10.000</td>
                        <td className="py-2 px-4 border-b border-r">€ 150.000</td>
                        <td className="py-2 px-4 border-b">Fino al 40%</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-2 px-4 border-b border-r">Inserimento Mercati Esteri</td>
                        <td className="py-2 px-4 border-b border-r">€ 50.000</td>
                        <td className="py-2 px-4 border-b border-r">€ 4.000.000</td>
                        <td className="py-2 px-4 border-b">Fino al 40%</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b border-r">Temporary Export Manager</td>
                        <td className="py-2 px-4 border-b border-r">€ 25.000</td>
                        <td className="py-2 px-4 border-b border-r">€ 150.000</td>
                        <td className="py-2 px-4 border-b">Fino al 40%</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-2 px-4 border-b border-r">E-Commerce</td>
                        <td className="py-2 px-4 border-b border-r">€ 10.000</td>
                        <td className="py-2 px-4 border-b border-r">€ 300.000</td>
                        <td className="py-2 px-4 border-b">Fino al 40%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <p className="text-sm italic text-gray-600">* Gli importi massimi possono variare in base alla disponibilità di risorse e alle circolari operative vigenti.</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">6.3 Limiti di Cumulo</h3>
                <p className="mb-3">Gli interventi agevolativi del Fondo 394/81 sono soggetti ai seguenti limiti di cumulo:</p>
                
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Limite massimo complessivo di € 200.000 per gli aiuti "de minimis" nell'arco di tre esercizi finanziari</li>
                  <li>Divieto di cumulo con altri contributi pubblici per le stesse spese ammissibili</li>
                  <li>Rispetto del principio di assenza del "doppio finanziamento" per le risorse PNRR</li>
                  <li>Limite massimo di esposizione complessiva dell'impresa verso il Fondo 394/81 pari a € 50.000.000</li>
                </ul>
              </div>
              
              <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-semibold text-green-600 mb-2">Hai bisogno di supporto?</h4>
                <p className="mb-4">Se hai dubbi sugli importi finanziabili per il tuo progetto o sui limiti di cumulo applicabili alla tua impresa, il nostro team di consulenti è a tua disposizione per un'analisi personalizzata.</p>
                <div className="flex items-center">
                  <Link href="/contatti" className="text-blue-600 hover:underline mr-6">Contattaci per una consulenza</Link>
                  <a href="https://wa.me/+393470087833" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-lg">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.14 4.486c-3.868 0-7.015 3.147-7.015 7.015 0 1.513.469 2.919 1.27 4.075l-1.665 4.975 5.095-1.635a6.979 6.979 0 004.315 1.485c3.868 0 7.015-3.147 7.015-7.015s-3.147-7.015-7.015-7.015h-.005z"/>
                    </svg>
                    Contattaci su WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Benefici aggiuntivi */}
          <div className="mb-12">
            <div className="flex items-center bg-green-50 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('benefici')}>
              <h2 id="benefici" className="text-2xl font-semibold text-green-700">7. BENEFICI AGGIUNTIVI</h2>
              <span className="ml-auto text-2xl">{activeSection === 'benefici' ? '−' : '+'}</span>
            </div>
            <div className={`bg-white p-6 border border-green-100 rounded-b-lg ${activeSection === 'benefici' ? 'block' : 'hidden'}`}>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">7.1 Premialità e Maggiorazioni</h3>
                <p className="mb-4">Il Fondo 394/81 prevede diverse premialità che possono incrementare i benefici dell'intervento agevolativo:</p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-600 mb-2">Premialità Territoriale</h4>
                    <div className="border-l-4 border-green-500 pl-3 mb-3">
                      <p className="font-semibold">+10% di fondo perduto</p>
                    </div>
                    <p className="mb-2">Per imprese con sede operativa in:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Abruzzo</li>
                      <li>Basilicata</li>
                      <li>Calabria</li>
                      <li>Campania</li>
                      <li>Molise</li>
                      <li>Puglia</li>
                      <li>Sardegna</li>
                      <li>Sicilia</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-600 mb-2">Premialità Dimensionale</h4>
                    <div className="border-l-4 border-green-500 pl-3 mb-3">
                      <p className="font-semibold">+5% di fondo perduto</p>
                    </div>
                    <p className="mb-2">Per imprese classificate come:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Micro impresa</li>
                      <li>Piccola impresa</li>
                      <li>Media impresa</li>
                    </ul>
                    <p className="mt-2 text-sm italic">Non applicabile alle Grandi Imprese</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-600 mb-2">Premialità Femminile/Giovanile</h4>
                    <div className="border-l-4 border-green-500 pl-3 mb-3">
                      <p className="font-semibold">+5% di fondo perduto</p>
                    </div>
                    <p className="mb-2">Per imprese a prevalente:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Partecipazione femminile</li>
                      <li>Partecipazione giovanile (under 35)</li>
                    </ul>
                    <p className="mt-2 text-sm">Secondo i criteri definiti dalla normativa vigente</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">7.2 Benefici per Imprese Innovative</h3>
                
                <div className="bg-green-50 p-5 rounded-lg mb-6">
                  <h4 className="font-semibold text-green-700 mb-3">Vantaggi per Start-up Innovative e PMI Innovative</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-green-600 mb-2">Deroghe ai Requisiti Finanziari</h5>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Esenzione dal requisito di patrimonio netto minimo</li>
                        <li>Esenzione dai limiti di rapporto tra fatturato e finanziamento</li>
                        <li>Valutazione semplificata del merito di credito</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-green-600 mb-2">Premialità Aggiuntive</h5>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Priorità nell'istruttoria delle domande</li>
                        <li>Possibile incremento della quota di fondo perduto</li>
                        <li>Assistenza tecnica dedicata da parte di SIMEST</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">7.3 Cumulabilità con Altri Incentivi</h3>
                <p className="mb-3">Gli interventi del Fondo 394/81, nel rispetto dei limiti di cumulo, possono essere combinati con:</p>
                
                <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
                  <li>Credito d'imposta per investimenti in beni strumentali (ex Super/Iper ammortamento)</li>
                  <li>Credito d'imposta per attività di ricerca e sviluppo</li>
                  <li>Incentivi per l'assunzione di personale qualificato</li>
                  <li>Garanzie pubbliche su finanziamenti complementari</li>
                  <li>Incentivi regionali non riferiti alle stesse spese ammissibili</li>
                </ul>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <p className="font-semibold">Attenzione:</p>
                  <p>La cumulabilità è soggetta a verifiche specifiche e deve rispettare il principio di assenza del "doppio finanziamento" previsto dal PNRR. È necessaria una valutazione caso per caso.</p>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-semibold text-green-600 mb-2">Hai bisogno di supporto?</h4>
                <p className="mb-4">Il nostro team di consulenti può aiutarti a identificare tutte le premialità applicabili al tuo caso e a massimizzare i benefici ottenibili, anche attraverso la combinazione con altri incentivi compatibili.</p>
                <div className="flex items-center">
                  <Link href="/contatti" className="text-blue-600 hover:underline mr-6">Contattaci per una consulenza</Link>
                  <a href="https://wa.me/+393470087833" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-lg">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.14 4.486c-3.868 0-7.015 3.147-7.015 7.015 0 1.513.469 2.919 1.27 4.075l-1.665 4.975 5.095-1.635a6.979 6.979 0 004.315 1.485c3.868 0 7.015-3.147 7.015-7.015s-3.147-7.015-7.015-7.015h-.005z"/>
                    </svg>
                    Contattaci su WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Procedure di accesso */}
          <div className="mb-12">
            <div className="flex items-center bg-green-50 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('procedure')}>
              <h2 id="procedure" className="text-2xl font-semibold text-green-700">8. PROCEDURE DI ACCESSO</h2>
              <span className="ml-auto text-2xl">{activeSection === 'procedure' ? '−' : '+'}</span>
            </div>
            <div className={`bg-white p-6 border border-green-100 rounded-b-lg ${activeSection === 'procedure' ? 'block' : 'hidden'}`}>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">8.1 Fasi della Procedura</h3>
                
                <div className="relative">
                  {/* Timeline verticale */}
                  <div className="absolute left-4 top-0 h-full w-0.5 bg-green-200"></div>
                  
                  {/* Fase 1: Registrazione */}
                  <div className="relative pl-12 pb-8">
                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">1</div>
                    <h4 className="font-semibold text-green-600 mb-2">Registrazione al Portale SIMEST</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <ul className="list-disc list-inside space-y-2 ml-2">
                        <li>Accedere al <a href="https://www.simest.it" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">portale SIMEST</a></li>
                        <li>Registrare l'azienda e creare un account</li>
                        <li>Ottenere le credenziali di accesso</li>
                        <li>Completare il profilo aziendale con i dati richiesti</li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Fase 2: Compilazione */}
                  <div className="relative pl-12 pb-8">
                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">2</div>
                    <h4 className="font-semibold text-green-600 mb-2">Compilazione della Domanda</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <ul className="list-disc list-inside space-y-2 ml-2">
                        <li>Selezionare la tipologia di intervento desiderato</li>
                        <li>Compilare il formulario online con i dati del progetto</li>
                        <li>Caricare la documentazione richiesta (business plan, bilanci, ecc.)</li>
                        <li>Verificare la completezza delle informazioni inserite</li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Fase 3: Presentazione */}
                  <div className="relative pl-12 pb-8">
                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">3</div>
                    <h4 className="font-semibold text-green-600 mb-2">Presentazione della Domanda</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <ul className="list-disc list-inside space-y-2 ml-2">
                        <li>Firmare digitalmente la domanda compilata</li>
                        <li>Inviare la domanda tramite il portale</li>
                        <li>Ricevere la conferma di avvenuta presentazione</li>
                        <li>Conservare il numero di protocollo assegnato</li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Fase 4: Istruttoria */}
                  <div className="relative pl-12 pb-8">
                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">4</div>
                    <h4 className="font-semibold text-green-600 mb-2">Istruttoria</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <ul className="list-disc list-inside space-y-2 ml-2">
                        <li>Verifica formale dei requisiti di ammissibilità</li>
                        <li>Valutazione del merito di credito</li>
                        <li>Analisi tecnica del progetto</li>
                        <li>Eventuale richiesta di integrazioni documentali</li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Fase 5: Delibera */}
                  <div className="relative pl-12 pb-8">
                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">5</div>
                    <h4 className="font-semibold text-green-600 mb-2">Delibera</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <ul className="list-disc list-inside space-y-2 ml-2">
                        <li>Comunicazione dell'esito (positivo o negativo)</li>
                        <li>In caso positivo, invio della lettera di delibera</li>
                        <li>Indicazione delle condizioni contrattuali</li>
                        <li>Richiesta di documentazione per la stipula</li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Fase 6: Stipula */}
                  <div className="relative pl-12">
                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">6</div>
                    <h4 className="font-semibold text-green-600 mb-2">Stipula e Erogazione</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <ul className="list-disc list-inside space-y-2 ml-2">
                        <li>Firma del contratto di finanziamento</li>
                        <li>Apertura del conto corrente dedicato (se richiesto)</li>
                        <li>Erogazione dell'anticipo (di norma il 50%)</li>
                        <li>Erogazioni successive legate agli stati di avanzamento</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">8.2 Documentazione Richiesta</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Documentazione Amministrativa</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Visura camerale aggiornata</li>
                      <li>Ultimi due bilanci approvati</li>
                      <li>Situazione economico-patrimoniale infrannuale</li>
                      <li>Documento d'identità del legale rappresentante</li>
                      <li>Statuto e atto costitutivo</li>
                      <li>Dichiarazione De Minimis</li>
                      <li>DURC in corso di validità</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Documentazione Tecnica</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Business plan del progetto</li>
                      <li>Preventivi di spesa dettagliati</li>
                      <li>Contratti preliminari (se disponibili)</li>
                      <li>Documentazione attestante i requisiti specifici</li>
                      <li>Certificazioni aziendali (se presenti)</li>
                      <li>Referenze bancarie</li>
                      <li>Eventuali garanzie (se richieste)</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
                  <p className="font-semibold">Nota:</p>
                  <p>La documentazione specifica può variare in base alla tipologia di intervento richiesto e alle caratteristiche dell'impresa richiedente. È consigliabile verificare sul portale SIMEST l'elenco aggiornato dei documenti necessari.</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">8.3 Tempistiche</h3>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                      <tr className="bg-green-50">
                        <th className="py-2 px-4 border-b border-r text-left">Fase</th>
                        <th className="py-2 px-4 border-b border-r text-left">Tempistica Media</th>
                        <th className="py-2 px-4 border-b text-left">Note</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-4 border-b border-r">Dalla presentazione alla delibera</td>
                        <td className="py-2 px-4 border-b border-r">30-60 giorni</td>
                        <td className="py-2 px-4 border-b">Variabile in base alla complessità del progetto</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-2 px-4 border-b border-r">Dalla delibera alla stipula</td>
                        <td className="py-2 px-4 border-b border-r">15-30 giorni</td>
                        <td className="py-2 px-4 border-b">Dipende dalla tempestività nel fornire la documentazione richiesta</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b border-r">Dalla stipula alla prima erogazione</td>
                        <td className="py-2 px-4 border-b border-r">10-20 giorni</td>
                        <td className="py-2 px-4 border-b">Previa verifica delle condizioni contrattuali</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-2 px-4 border-b border-r">Durata complessiva del processo</td>
                        <td className="py-2 px-4 border-b border-r">60-90 giorni</td>
                        <td className="py-2 px-4 border-b">Dal primo accesso al portale all'erogazione dell'anticipo</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-semibold text-green-600 mb-2">Hai bisogno di supporto?</h4>
                <p className="mb-4">Il nostro team di consulenti può assisterti in tutte le fasi della procedura di accesso al Fondo 394/81, dalla registrazione al portale fino all'erogazione del finanziamento, garantendo una gestione efficiente e priva di errori.</p>
                <div className="flex items-center">
                  <Link href="/contatti" className="text-blue-600 hover:underline mr-6">Contattaci per una consulenza</Link>
                  <a href="https://wa.me/+393470087833" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-lg">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.14 4.486c-3.868 0-7.015 3.147-7.015 7.015 0 1.513.469 2.919 1.27 4.075l-1.665 4.975 5.095-1.635a6.979 6.979 0 004.315 1.485c3.868 0 7.015-3.147 7.015-7.015s-3.147-7.015-7.015-7.015h-.005z"/>
                    </svg>
                    Contattaci su WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* PARTE 2: SPESE AMMISSIBILI, RENDICONTAZIONE ED EROGAZIONI */}
          {/* Sezione 9: Spese Ammissibili */}
          <div className="mb-12">
            <div className="flex items-center bg-green-50 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('spese')}>
              <h2 id="spese" className="text-2xl font-semibold text-green-700">9. SPESE AMMISSIBILI</h2>
              <span className="ml-auto text-2xl">{activeSection === 'spese' ? '−' : '+'}</span>
            </div>
            <div className={`bg-white p-6 border border-green-100 rounded-b-lg ${activeSection === 'spese' ? 'block' : 'hidden'}`}>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">9.1 Categorie di Spese Finanziabili</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">A) Investimenti per Sostenibilità Ambientale e Sociale</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Efficientamento energetico (anche in Italia)</li>
                    <li>Efficientamento idrico (anche in Italia)</li>
                    <li>Mitigazione impatti climatici (anche in Italia)</li>
                    <li>Altri investimenti sostenibili ambientali e sociali</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">B) Certificazioni Ambientali</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Ottenimento certificazioni ambientali connesse agli investimenti</li>
                    <li>Mantenimento certificazioni già ottenute</li>
                    <li>Certificazioni riconosciute: ISO 45001, ISO 14001, SA8000 (per punteggio aggiuntivo)</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">C) Investimenti per Rafforzamento Patrimoniale</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Immobilizzazioni materiali (anche in Italia)</li>
                    <li>Immobilizzazioni immateriali (escluso avviamento, anche in Italia)</li>
                    <li>Immobilizzazioni finanziarie per:
                      <ul className="list-circle list-inside ml-6 mt-1">
                        <li>Incrementi capitale sociale a controllate</li>
                        <li>Finanziamenti soci a controllate</li>
                      </ul>
                    </li>
                    <li className="mt-2">Devono risultare nell'attivo patrimoniale o essere asseverate da revisore</li>
                    <li>Altre immobilizzazioni finanziarie sono escluse</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">D) Consulenze Specialistiche</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Presentazione e gestione della richiesta</li>
                    <li>Asseverazioni del Revisore</li>
                    <li>Limite: fino al 5% dell'importo deliberato, comunque non superiori a €100.000</li>
                    <li>Richiedono: contratto e dichiarazione di indipendenza del consulente</li>
                    <li>Eccezione temporale: consulenze per la sola presentazione ammissibili anche se svolte prima della domanda, purché pagate dopo il CUP e nel Periodo di Realizzazione</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">E) Spese Specifiche per E-commerce (per intervento dedicato)</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Creazione/miglioramento piattaforma propria</li>
                    <li>Accesso a piattaforme di terzi/marketplace</li>
                    <li>Non è possibile destinare l'intero finanziamento ad attività di consulenza</li>
                    <li>Almeno una spesa deve riguardare la piattaforma stessa</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">F) Spese per Transizione Digitale (PNRR)</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Macchinari e impianti per digitalizzazione</li>
                    <li>Software e licenze per processi digitali</li>
                    <li>Consulenza specialistica con contratto, durata e corrispettivo definiti</li>
                    <li>Formazione Industria 4.0 (solo se erogata da fornitore terzo con fattura)</li>
                    <li>Verifica DNSH obbligatoria per macchinari/impianti</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">9.2 Spese Non Ammissibili</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Spese Commerciali Escluse</h4>
                  <p className="mb-2">Spese direttamente connesse all'attività commerciale:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Assistenza post-vendita</li>
                    <li>Trasporto merci</li>
                    <li>Stoccaggio merci</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Spese Correnti Escluse</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Personale dell'Impresa Richiedente o soggetti ad essa riferibili</li>
                    <li>Attività correnti non connesse agli investimenti</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Altre Esclusioni</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Spese non conformi al cumulo (Reg. UE n. 2831/2023)</li>
                    <li>Costituzione o potenziamento di reti di distribuzione</li>
                    <li>Spese promozionali o social media (per Transizione Digitale)</li>
                    <li>Spese già sostenute prima del rilascio del CUP</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-semibold text-green-600 mb-2">Hai bisogno di supporto?</h4>
                <p className="mb-4">I nostri consulenti possono aiutarti a identificare correttamente le spese ammissibili per il tuo progetto, massimizzando l'efficacia del finanziamento SIMEST e garantendo la conformità alle normative.</p>
                <div className="flex items-center">
                  <Link href="/contatti" className="text-blue-600 hover:underline mr-6">Contattaci per una consulenza</Link>
                  <a href="https://wa.me/+393470087833" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-lg">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.14 4.486c-3.868 0-7.015 3.147-7.015 7.015 0 1.513.469 2.919 1.27 4.075l-1.665 4.975 5.095-1.635a6.979 6.979 0 004.315 1.485c3.868 0 7.015-3.147 7.015-7.015s-3.147-7.015-7.015-7.015h-.005z"/>
                    </svg>
                    Contattaci su WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sezione 10: Timing e Sostenibilità delle Spese */}
          <div className="mb-12">
            <div className="flex items-center bg-green-50 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('timing')}>
              <h2 id="timing" className="text-2xl font-semibold text-green-700">10. TIMING E SOSTENIBILITÀ DELLE SPESE</h2>
              <span className="ml-auto text-2xl">{activeSection === 'timing' ? '−' : '+'}</span>
            </div>
            <div className={`bg-white p-6 border border-green-100 rounded-b-lg ${activeSection === 'timing' ? 'block' : 'hidden'}`}>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">10.1 Regole Temporali Fondamentali</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Data di Sostenimento</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Le spese sono ammissibili solo se sostenute <strong>DOPO</strong> la data di presentazione della domanda</li>
                    <li>Eccezione: diversa data stabilita da circolare operativa</li>
                    <li>Per PNRR: spese sostenibili dalla data di ricezione del CUP</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Periodo di Realizzazione</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Inizio: dalla ricezione del CUP</li>
                    <li>Fine: 24 mesi dopo la Data di Stipula</li>
                    <li>Proroga possibile: 6 mesi aggiuntivi</li>
                    <li>Tutte le attività devono essere svolte in questo periodo</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">10.2 Definizione di "Spesa Sostenuta"</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Criteri di Sostenimento</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Si considera sostenuta alla data dell'effettivo pagamento</li>
                    <li>Tramite il Conto Corrente Dedicato</li>
                    <li>Pagamenti per compensazione <strong>NON</strong> ammissibili</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Eccezione per Consulenze Pre-Domanda</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Attività svolta prima della domanda: ammissibile</li>
                    <li>Condizioni: pagamento dopo il CUP e nel Periodo di Realizzazione</li>
                    <li>Solo per consulenze relative alla presentazione della domanda</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">10.3 Gestione degli Acconti</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Acconti Versati</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Acconti versati possono essere integrati</li>
                    <li>Condizione: restante fattura emessa nel Periodo di Realizzazione</li>
                    <li>Coerenza temporale richiesta tra acconto e saldo</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-semibold text-green-600 mb-2">Hai bisogno di supporto?</h4>
                <p className="mb-4">La corretta gestione temporale delle spese è cruciale per l'ammissibilità al finanziamento. I nostri esperti possono aiutarti a pianificare correttamente le tempistiche del tuo progetto per massimizzare l'accesso ai fondi.</p>
                <div className="flex items-center">
                  <Link href="/contatti" className="text-blue-600 hover:underline mr-6">Contattaci per una consulenza</Link>
                  <a href="https://wa.me/+393470087833" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-lg">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.14 4.486c-3.868 0-7.015 3.147-7.015 7.015 0 1.513.469 2.919 1.27 4.075l-1.665 4.975 5.095-1.635a6.979 6.979 0 004.315 1.485c3.868 0 7.015-3.147 7.015-7.015s-3.147-7.015-7.015-7.015h-.005z"/>
                    </svg>
                    Contattaci su WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sezione 11: Conto Corrente Dedicato */}
          <div className="mb-12">
            <div className="flex items-center bg-green-50 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('conto')}>
              <h2 id="conto" className="text-2xl font-semibold text-green-700">11. CONTO CORRENTE DEDICATO</h2>
              <span className="ml-auto text-2xl">{activeSection === 'conto' ? '−' : '+'}</span>
            </div>
            <div className={`bg-white p-6 border border-green-100 rounded-b-lg ${activeSection === 'conto' ? 'block' : 'hidden'}`}>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">11.1 Caratteristiche e Requisiti</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Obbligatorietà e Tempistiche</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Obbligatorio per tutte le operazioni relative al finanziamento</li>
                    <li>Da attivare <strong>entro 30 giorni</strong> dalla Data di Stipula</li>
                    <li>Deve essere intestato all'Impresa Richiedente</li>
                    <li>Deve essere un conto corrente bancario o postale</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Utilizzo Esclusivo</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Dedicato <strong>esclusivamente</strong> all'operazione finanziata</li>
                    <li>Deve transitare l'intero importo del finanziamento</li>
                    <li>Devono transitare tutti i pagamenti delle spese rendicontate</li>
                    <li>Devono transitare tutti gli accrediti dei contributi a fondo perduto</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">11.2 Modifiche e Comunicazioni</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Procedura di Modifica</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Possibile modificare il conto corrente dedicato</li>
                    <li>Necessaria comunicazione preventiva a SIMEST</li>
                    <li>Richiesta tramite Portale SIMEST</li>
                    <li>Deve essere effettuata <strong>prima</strong> di utilizzare il nuovo conto</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Documentazione Richiesta</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Comunicazione formale del cambio</li>
                    <li>Coordinate bancarie complete del nuovo conto</li>
                    <li>Documentazione attestante l'intestazione all'Impresa Richiedente</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">11.3 Anomalie e Deroghe</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Gestione delle Anomalie</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Pagamenti da conti diversi: <strong>non ammissibili</strong></li>
                    <li>Pagamenti ricevuti su conti diversi: richiedono sanatoria</li>
                    <li>Sanatoria: trasferimento immediato sul conto dedicato</li>
                    <li>Documentazione della sanatoria: estratti conto di entrambi i conti</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Deroghe Possibili</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Pagamenti in valuta estera: possibile utilizzo di conti in valuta</li>
                    <li>Condizione: trasferimento immediato da/verso il conto dedicato</li>
                    <li>Documentazione: estratti conto di entrambi i conti</li>
                    <li>Pagamenti con carta di credito aziendale: ammessi con addebito sul conto dedicato</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">11.4 Conseguenze di Non Conformità</h3>
                
                <div className="mb-5">
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Mancata attivazione: possibile revoca del finanziamento</li>
                    <li>Utilizzo improprio: non ammissibilità delle spese</li>
                    <li>Mancata sanatoria: esclusione delle spese dalla rendicontazione</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-semibold text-green-600 mb-2">Hai bisogno di supporto?</h4>
                <p className="mb-4">La corretta gestione del conto corrente dedicato è fondamentale per evitare problemi con il finanziamento SIMEST. I nostri consulenti possono aiutarti a impostare correttamente le procedure amministrative e bancarie necessarie.</p>
                <div className="flex items-center">
                  <Link href="/contatti" className="text-blue-600 hover:underline mr-6">Contattaci per una consulenza</Link>
                  <a href="https://wa.me/+393470087833" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-lg">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.14 4.486c-3.868 0-7.015 3.147-7.015 7.015 0 1.513.469 2.919 1.27 4.075l-1.665 4.975 5.095-1.635a6.979 6.979 0 004.315 1.485c3.868 0 7.015-3.147 7.015-7.015s-3.147-7.015-7.015-7.015h-.005z"/>
                    </svg>
                    Contattaci su WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sezione 12: Rendicontazione */}
          <div className="mb-12">
            <div className="flex items-center bg-green-50 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('rendicontazione')}>
              <h2 id="rendicontazione" className="text-2xl font-semibold text-green-700">12. RENDICONTAZIONE</h2>
              <span className="ml-auto text-2xl">{activeSection === 'rendicontazione' ? '−' : '+'}</span>
            </div>
            <div className={`bg-white p-6 border border-green-100 rounded-b-lg ${activeSection === 'rendicontazione' ? 'block' : 'hidden'}`}>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">12.1 Tempistiche e Scadenze</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Periodo di Rendicontazione</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Inizio: dalla data di ricezione del CUP</li>
                    <li>Fine: 29 mesi dalla Data di Stipula (24 + 5 mesi)</li>
                    <li>In caso di proroga: 35 mesi dalla Data di Stipula (30 + 5 mesi)</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Scadenze Intermedie</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Prima rendicontazione: entro 13 mesi dalla Data di Stipula</li>
                    <li>Seconda rendicontazione: entro 29 mesi dalla Data di Stipula</li>
                    <li>Importo minimo prima rendicontazione: 50% delle spese ammesse</li>
                    <li>Mancato rispetto: possibile revoca del finanziamento</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">12.2 Contenuti e Modalità</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Documentazione Obbligatoria</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Relazione finale sull'utilizzo del finanziamento</li>
                    <li>Rendiconto analitico delle spese sostenute</li>
                    <li>Documentazione di spesa (fatture, contratti, ecc.)</li>
                    <li>Estratti conto del Conto Corrente Dedicato</li>
                    <li>Asseverazione di un revisore legale</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Modalità di Presentazione</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Esclusivamente tramite il Portale SIMEST</li>
                    <li>Firma digitale dei documenti obbligatoria</li>
                    <li>Upload di tutta la documentazione in formato digitale</li>
                    <li>Conservazione degli originali per 10 anni</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">12.3 Documentazione Specifica</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Per Immobilizzazioni Materiali e Immateriali</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Fatture di acquisto</li>
                    <li>Contratti di acquisto</li>
                    <li>Documenti di trasporto (se applicabili)</li>
                    <li>Documentazione fotografica dei beni</li>
                    <li>Libro cespiti aggiornato</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Per Immobilizzazioni Finanziarie</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Contratti di finanziamento soci</li>
                    <li>Verbali di assemblea per aumenti di capitale</li>
                    <li>Estratti conto con evidenza dei trasferimenti</li>
                    <li>Bilanci aggiornati delle società controllate</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Per Consulenze</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Contratto di consulenza</li>
                    <li>Fatture con dettaglio delle attività svolte</li>
                    <li>Relazione finale del consulente</li>
                    <li>Dichiarazione di indipendenza del consulente</li>
                    <li>Evidenza dei risultati ottenuti</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-semibold text-green-600 mb-2">Hai bisogno di supporto?</h4>
                <p className="mb-4">La rendicontazione è una fase cruciale e complessa del finanziamento SIMEST. I nostri esperti possono assisterti nella preparazione della documentazione, nella verifica della conformità e nella gestione del portale SIMEST.</p>
                <div className="flex items-center">
                  <Link href="/contatti" className="text-blue-600 hover:underline mr-6">Contattaci per una consulenza</Link>
                  <a href="https://wa.me/+393470087833" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-lg">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.14 4.486c-3.868 0-7.015 3.147-7.015 7.015 0 1.513.469 2.919 1.27 4.075l-1.665 4.975 5.095-1.635a6.979 6.979 0 004.315 1.485c3.868 0 7.015-3.147 7.015-7.015s-3.147-7.015-7.015-7.015h-.005z"/>
                    </svg>
                    Contattaci su WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sezione 13: Erogazioni */}
          <div className="mb-12">
            <div className="flex items-center bg-green-50 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('erogazioni')}>
              <h2 id="erogazioni" className="text-2xl font-semibold text-green-700">13. EROGAZIONI</h2>
              <span className="ml-auto text-2xl">{activeSection === 'erogazioni' ? '−' : '+'}</span>
            </div>
            <div className={`bg-white p-6 border border-green-100 rounded-b-lg ${activeSection === 'erogazioni' ? 'block' : 'hidden'}`}>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">13.1 Modalità di Erogazione</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Erogazione in Due Tranche</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Prima tranche: anticipo fino al 50% dell'importo deliberato</li>
                    <li>Seconda tranche: a saldo, dopo la rendicontazione finale</li>
                    <li>Richiesta di erogazione tramite Portale SIMEST</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Condizioni per l'Anticipo</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Stipula del contratto di finanziamento</li>
                    <li>Costituzione e perfezionamento delle garanzie (se previste)</li>
                    <li>Attivazione del Conto Corrente Dedicato</li>
                    <li>Assenza di condizioni ostative o anomalie</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Condizioni per il Saldo</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Completamento della rendicontazione finale</li>
                    <li>Verifica positiva della documentazione</li>
                    <li>Raggiungimento degli obiettivi minimi previsti</li>
                    <li>Assenza di irregolarità o violazioni</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">13.2 Tempistiche</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Prima Erogazione (Anticipo)</h4>
                  <p className="mb-2">Dalla stipula del contratto:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Tempistica standard: 10-20 giorni lavorativi</li>
                    <li>Condizione: completamento di tutte le formalità richieste</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Seconda Erogazione (Saldo)</h4>
                  <p className="mb-2">Dalla rendicontazione finale:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Tempistica standard: 30-60 giorni lavorativi</li>
                    <li>Condizione: esito positivo delle verifiche sulla rendicontazione</li>
                    <li>Possibili ritardi in caso di richieste di integrazione documentale</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">13.3 Calcolo dell'Importo Erogabile</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Determinazione dell'Importo</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Basato sulle spese effettivamente sostenute e rendicontate</li>
                    <li>Limite massimo: importo deliberato in contratto</li>
                    <li>Riduzione proporzionale in caso di spese inferiori al previsto</li>
                    <li>Possibile revoca parziale o totale in caso di gravi irregolarità</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Quota Fondo Perduto (se applicabile)</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Erogata contestualmente alle quote di finanziamento</li>
                    <li>Proporzionale alle spese ammissibili rendicontate</li>
                    <li>Soggetta a revoca in caso di mancato rispetto degli impegni</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-semibold text-green-600 mb-2">Hai bisogno di supporto?</h4>
                <p className="mb-4">Gestire correttamente le erogazioni del finanziamento SIMEST richiede attenzione ai dettagli e rispetto delle tempistiche. I nostri consulenti possono assisterti in tutte le fasi, dalla richiesta dell'anticipo fino all'erogazione del saldo.</p>
                <div className="flex items-center">
                  <Link href="/contatti" className="text-blue-600 hover:underline mr-6">Contattaci per una consulenza</Link>
                  <a href="https://wa.me/+393470087833" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-lg">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.14 4.486c-3.868 0-7.015 3.147-7.015 7.015 0 1.513.469 2.919 1.27 4.075l-1.665 4.975 5.095-1.635a6.979 6.979 0 004.315 1.485c3.868 0 7.015-3.147 7.015-7.015s-3.147-7.015-7.015-7.015h-.005z"/>
                    </svg>
                    Contattaci su WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sezione 14: Consolidamento */}
          <div className="mb-12">
            <div className="flex items-center bg-green-50 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('consolidamento')}>
              <h2 id="consolidamento" className="text-2xl font-semibold text-green-700">14. CONSOLIDAMENTO</h2>
              <span className="ml-auto text-2xl">{activeSection === 'consolidamento' ? '−' : '+'}</span>
            </div>
            <div className={`bg-white p-6 border border-green-100 rounded-b-lg ${activeSection === 'consolidamento' ? 'block' : 'hidden'}`}>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">14.1 Definizione e Processo</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Cos'è il Consolidamento</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Processo di finalizzazione del finanziamento dopo la rendicontazione finale</li>
                    <li>Definizione dell'importo definitivo del finanziamento</li>
                    <li>Determinazione del piano di ammortamento definitivo</li>
                    <li>Avvio della fase di rimborso del finanziamento</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Fasi del Consolidamento</h4>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li>Verifica finale della rendicontazione</li>
                    <li>Determinazione dell'importo consolidato</li>
                    <li>Comunicazione all'Impresa Richiedente</li>
                    <li>Definizione del piano di rimborso</li>
                    <li>Attivazione delle procedure di rimborso</li>
                  </ol>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">14.2 Tempistiche</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Avvio del Consolidamento</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Dopo l'approvazione della rendicontazione finale</li>
                    <li>Generalmente entro 60 giorni dall'approvazione</li>
                    <li>Comunicazione formale all'Impresa Richiedente</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Inizio del Rimborso</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Dopo il periodo di preammortamento (se previsto)</li>
                    <li>Generalmente 24 mesi dopo la Data di Stipula</li>
                    <li>Secondo il piano di ammortamento definito</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">14.3 Effetti del Consolidamento</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Determinazione dell'Importo Definitivo</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Basato sulle spese effettivamente sostenute e approvate</li>
                    <li>Possibile riduzione rispetto all'importo deliberato</li>
                    <li>Non può superare l'importo deliberato originariamente</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Definizione delle Condizioni di Rimborso</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Durata del finanziamento confermata</li>
                    <li>Rate semestrali posticipate a capitale costante</li>
                    <li>Tasso agevolato come da contratto</li>
                    <li>Prima rata dopo il periodo di preammortamento</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Garanzie</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Conferma delle garanzie già costituite</li>
                    <li>Possibile riduzione proporzionale in caso di importo consolidato inferiore</li>
                    <li>Mantenimento fino all'estinzione del finanziamento</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-semibold text-green-600 mb-2">Hai bisogno di supporto?</h4>
                <p className="mb-4">La fase di consolidamento è un momento cruciale che determina le condizioni definitive del tuo finanziamento. I nostri esperti possono aiutarti a comprendere il processo e a prepararti adeguatamente per la fase di rimborso.</p>
                <div className="flex items-center">
                  <Link href="/contatti" className="text-blue-600 hover:underline mr-6">Contattaci per una consulenza</Link>
                  <a href="https://wa.me/+393470087833" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-lg">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.14 4.486c-3.868 0-7.015 3.147-7.015 7.015 0 1.513.469 2.919 1.27 4.075l-1.665 4.975 5.095-1.635a6.979 6.979 0 004.315 1.485c3.868 0 7.015-3.147 7.015-7.015s-3.147-7.015-7.015-7.015h-.005z"/>
                    </svg>
                    Contattaci su WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sezione 15: Obblighi dell'Impresa */}
          <div className="mb-12">
            <div className="flex items-center bg-green-50 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('obblighi')}>
              <h2 id="obblighi" className="text-2xl font-semibold text-green-700">15. OBBLIGHI DELL'IMPRESA</h2>
              <span className="ml-auto text-2xl">{activeSection === 'obblighi' ? '−' : '+'}</span>
            </div>
            <div className={`bg-white p-6 border border-green-100 rounded-b-lg ${activeSection === 'obblighi' ? 'block' : 'hidden'}`}>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">15.1 Obblighi di Conservazione</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Documentazione da Conservare</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Tutta la documentazione originale relativa al finanziamento</li>
                    <li>Fatture e documenti di spesa</li>
                    <li>Contratti con fornitori</li>
                    <li>Estratti conto del Conto Corrente Dedicato</li>
                    <li>Documentazione tecnica dei beni acquistati</li>
                    <li>Relazioni e output delle consulenze</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Durata della Conservazione</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Minimo 10 anni dalla data di erogazione del saldo</li>
                    <li>Per progetti PNRR: secondo le disposizioni specifiche</li>
                    <li>In formato cartaceo e/o digitale secondo normativa</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">15.2 Obblighi di Collaborazione</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Ispezioni e Controlli</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Consentire ispezioni e controlli da parte di SIMEST</li>
                    <li>Fornire accesso ai locali aziendali</li>
                    <li>Mettere a disposizione la documentazione richiesta</li>
                    <li>Collaborare durante le verifiche in loco</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Richieste di Informazioni</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Rispondere tempestivamente alle richieste di informazioni</li>
                    <li>Fornire chiarimenti su spese e attività svolte</li>
                    <li>Inviare documentazione integrativa se richiesta</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">15.3 Obblighi di Comunicazione</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Variazioni da Comunicare</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Modifiche dell'assetto societario</li>
                    <li>Variazioni nella compagine sociale</li>
                    <li>Cambi di sede legale o operativa</li>
                    <li>Modifiche significative al progetto finanziato</li>
                    <li>Procedure concorsuali o crisi d'impresa</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Modalità di Comunicazione</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Tramite Portale SIMEST</li>
                    <li>Entro 30 giorni dall'evento</li>
                    <li>Con documentazione di supporto</li>
                    <li>Firma digitale del legale rappresentante</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">15.4 Conseguenze dell'Inadempimento</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Possibili Sanzioni</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Revoca parziale o totale del finanziamento</li>
                    <li>Restituzione degli importi già erogati</li>
                    <li>Applicazione di interessi di mora</li>
                    <li>Esclusione da futuri finanziamenti</li>
                    <li>Segnalazione alle autorità competenti</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-semibold text-green-600 mb-2">Hai bisogno di supporto?</h4>
                <p className="mb-4">Rispettare gli obblighi previsti dal finanziamento SIMEST è fondamentale per evitare problemi e sanzioni. I nostri consulenti possono aiutarti a gestire correttamente tutti gli adempimenti richiesti durante l'intero ciclo di vita del finanziamento.</p>
                <div className="flex items-center">
                  <Link href="/contatti" className="text-blue-600 hover:underline mr-6">Contattaci per una consulenza</Link>
                  <a href="https://wa.me/+393470087833" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-lg">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.14 4.486c-3.868 0-7.015 3.147-7.015 7.015 0 1.513.469 2.919 1.27 4.075l-1.665 4.975 5.095-1.635a6.979 6.979 0 004.315 1.485c3.868 0 7.015-3.147 7.015-7.015s-3.147-7.015-7.015-7.015h-.005z"/>
                    </svg>
                    Contattaci su WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sezione 16: Cumulabilità con Altri Aiuti */}
          <div className="mb-12">
            <div className="flex items-center bg-green-50 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('cumulabilita')}>
              <h2 id="cumulabilita" className="text-2xl font-semibold text-green-700">16. CUMULABILITÀ CON ALTRI AIUTI</h2>
              <span className="ml-auto text-2xl">{activeSection === 'cumulabilita' ? '−' : '+'}</span>
            </div>
            <div className={`bg-white p-6 border border-green-100 rounded-b-lg ${activeSection === 'cumulabilita' ? 'block' : 'hidden'}`}>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">16.1 Principi Generali</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Regole di Cumulo</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Il finanziamento SIMEST è cumulabile con altri aiuti pubblici</li>
                    <li>Il cumulo è consentito fino al raggiungimento delle intensità massime di aiuto</li>
                    <li>Riferimento normativo: Regolamento UE n. 2831/2023</li>
                    <li>Obbligo di dichiarazione di tutti gli aiuti ricevuti</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Limiti di Cumulo</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Non è possibile cumulare aiuti per le stesse spese ammissibili</li>
                    <li>Divieto di doppio finanziamento delle medesime spese</li>
                    <li>Necessaria contabilità separata per progetti con diversi finanziamenti</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">16.2 Cumulabilità con Fondi PNRR</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Regole Specifiche</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Finanziamenti a valere su fondi PNRR seguono regole specifiche</li>
                    <li>Rispetto del principio DNSH (Do No Significant Harm)</li>
                    <li>Rispetto dei target e milestone del PNRR</li>
                    <li>Obblighi di comunicazione e pubblicità specifici</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Documentazione Aggiuntiva</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Dichiarazione di assenza di doppio finanziamento</li>
                    <li>Autodichiarazione relativa al rispetto dei principi PNRR</li>
                    <li>Documentazione specifica per il rispetto del DNSH</li>
                    <li>Conservazione documentazione secondo regole PNRR</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">16.3 Dichiarazioni e Verifiche</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Obblighi Dichiarativi</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Dichiarazione di tutti gli aiuti ricevuti negli ultimi 3 anni</li>
                    <li>Aggiornamento delle dichiarazioni in caso di nuovi aiuti</li>
                    <li>Indicazione delle misure di aiuto e degli importi</li>
                    <li>Dichiarazione specifica per aiuti de minimis</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Verifiche e Controlli</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>SIMEST può effettuare verifiche sul cumulo degli aiuti</li>
                    <li>Possibili controlli incrociati con il Registro Nazionale Aiuti</li>
                    <li>Richiesta di documentazione comprovante le dichiarazioni</li>
                    <li>Sanzioni in caso di dichiarazioni mendaci</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-semibold text-green-600 mb-2">Hai bisogno di supporto?</h4>
                <p className="mb-4">La gestione corretta del cumulo degli aiuti è un aspetto complesso che richiede competenze specifiche. I nostri consulenti possono aiutarti a massimizzare le opportunità di finanziamento nel rispetto delle normative vigenti.</p>
                <div className="flex items-center">
                  <Link href="/contatti" className="text-blue-600 hover:underline mr-6">Contattaci per una consulenza</Link>
                  <a href="https://wa.me/+393470087833" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-lg">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.14 4.486c-3.868 0-7.015 3.147-7.015 7.015 0 1.513.469 2.919 1.27 4.075l-1.665 4.975 5.095-1.635a6.979 6.979 0 004.315 1.485c3.868 0 7.015-3.147 7.015-7.015s-3.147-7.015-7.015-7.015h-.005z"/>
                    </svg>
                    Contattaci su WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sezione 17: Revoca dell'Intervento Agevolativo */}
          <div className="mb-12">
            <div className="flex items-center bg-green-50 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('revoca')}>
              <h2 id="revoca" className="text-2xl font-semibold text-green-700">17. REVOCA DELL'INTERVENTO AGEVOLATIVO</h2>
              <span className="ml-auto text-2xl">{activeSection === 'revoca' ? '−' : '+'}</span>
            </div>
            <div className={`bg-white p-6 border border-green-100 rounded-b-lg ${activeSection === 'revoca' ? 'block' : 'hidden'}`}>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">17.1 Tipologie di Revoca</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Revoca Totale</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Perdita completa del beneficio concesso</li>
                    <li>Restituzione integrale degli importi erogati</li>
                    <li>Applicazione di maggiorazioni e interessi</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Revoca Parziale</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Riduzione proporzionale del beneficio</li>
                    <li>Restituzione della quota revocata</li>
                    <li>Mantenimento della quota non revocata</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">17.2 Cause di Revoca - Requisiti Iniziali</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">A) Assenza Requisiti di Ammissibilità</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Verifica successiva dell'assenza di requisiti alla data di presentazione domanda</li>
                    <li>Dichiarazioni non veritiere sui requisiti posseduti</li>
                    <li>Documentazione falsificata o alterata</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">B) Perdita Requisiti Fondamentali</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Perdita della sede legale in Italia</li>
                    <li>Perdita delle condizioni di ammissibilità specifiche</li>
                    <li>Ricorrenza di una delle Esclusioni durante il rapporto</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">17.3 Cause di Revoca - Realizzazione del Progetto</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">A) Mancata Realizzazione</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Mancato avvio del progetto nei tempi previsti</li>
                    <li>Interruzione del progetto senza giustificato motivo</li>
                    <li>Mancato raggiungimento degli obiettivi minimi</li>
                    <li>Realizzazione di attività sostanzialmente diverse da quelle approvate</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">B) Spese Non Ammissibili</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Utilizzo dei fondi per spese non ammissibili</li>
                    <li>Mancato rispetto delle soglie minime di spesa</li>
                    <li>Irregolarità nella documentazione di spesa</li>
                    <li>Mancato utilizzo del conto corrente dedicato</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">17.4 Cause di Revoca - Obblighi Contrattuali</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">A) Violazione degli Obblighi</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Mancato rispetto degli obblighi di comunicazione</li>
                    <li>Ostacolo alle attività di controllo e verifica</li>
                    <li>Mancata conservazione della documentazione</li>
                    <li>Mancato rispetto delle tempistiche di rendicontazione</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">B) Inadempimenti Finanziari</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Mancato pagamento di tre rate consecutive del finanziamento</li>
                    <li>Procedure concorsuali a carico dell'impresa</li>
                    <li>Cessazione dell'attività dell'impresa</li>
                    <li>Significativo peggioramento della situazione finanziaria</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-semibold text-green-600 mb-2">Hai bisogno di supporto?</h4>
                <p className="mb-4">Prevenire situazioni che possano portare alla revoca del finanziamento è fondamentale. I nostri esperti possono aiutarti a gestire correttamente il progetto e rispettare tutti gli obblighi previsti dal contratto di finanziamento SIMEST.</p>
                <div className="flex items-center">
                  <Link href="/contatti" className="text-blue-600 hover:underline mr-6">Contattaci per una consulenza</Link>
                  <a href="https://wa.me/+393470087833" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-lg">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.14 4.486c-3.868 0-7.015 3.147-7.015 7.015 0 1.513.469 2.919 1.27 4.075l-1.665 4.975 5.095-1.635a6.979 6.979 0 004.315 1.485c3.868 0 7.015-3.147 7.015-7.015s-3.147-7.015-7.015-7.015h-.005z"/>
                    </svg>
                    Contattaci su WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sezione 18: Conseguenze della Revoca */}
          <div className="mb-12">
            <div className="flex items-center bg-green-50 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('conseguenze')}>
              <h2 id="conseguenze" className="text-2xl font-semibold text-green-700">18. CONSEGUENZE DELLA REVOCA</h2>
              <span className="ml-auto text-2xl">{activeSection === 'conseguenze' ? '−' : '+'}</span>
            </div>
            <div className={`bg-white p-6 border border-green-100 rounded-b-lg ${activeSection === 'conseguenze' ? 'block' : 'hidden'}`}>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">18.1 Restituzione del Finanziamento</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Importi da Restituire</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Capitale erogato e non ancora rimborsato</li>
                    <li>Eventuali quote a fondo perduto già erogate</li>
                    <li>Interessi maturati fino alla data di revoca</li>
                    <li>In caso di revoca parziale: solo la quota proporzionale oggetto di revoca</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Tempistiche di Restituzione</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Termine perentorio indicato nel provvedimento di revoca</li>
                    <li>Generalmente entro 60 giorni dalla notifica</li>
                    <li>Possibilità di richiedere rateizzazione in casi specifici</li>
                    <li>Pagamento in un'unica soluzione come regola generale</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">18.2 Interessi e Maggiorazioni</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Interessi Legali</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Applicati dal momento dell'erogazione fino alla data di restituzione</li>
                    <li>Calcolati al tasso legale vigente</li>
                    <li>Applicati anche in caso di revoca per cause non imputabili all'impresa</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Interessi di Mora</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Applicati in caso di mancata restituzione entro i termini</li>
                    <li>Calcolati al tasso di riferimento UE maggiorato di 300 punti base</li>
                    <li>Decorrono dalla scadenza del termine di restituzione</li>
                    <li>Applicati sull'intero importo dovuto</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Maggiorazioni Sanzionatorie</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Applicate in caso di revoca per cause imputabili all'impresa</li>
                    <li>Quantificate in percentuale sull'importo revocato (fino al 10%)</li>
                    <li>Maggiorazione più elevata in caso di comportamenti fraudolenti</li>
                    <li>Possibile riduzione in caso di collaborazione dell'impresa</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">18.3 Conseguenze Accessorie</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Esclusione da Futuri Finanziamenti</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Impossibilità di accedere a nuovi finanziamenti SIMEST</li>
                    <li>Periodo di esclusione fino a 5 anni</li>
                    <li>Segnalazione nel Registro Nazionale Aiuti</li>
                    <li>Possibili ripercussioni su altri finanziamenti pubblici</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Segnalazioni alle Autorità</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Comunicazione al Ministero degli Affari Esteri e della Cooperazione Internazionale</li>
                    <li>Possibile segnalazione alla Guardia di Finanza in caso di frode</li>
                    <li>Comunicazione ad altre amministrazioni pubbliche interessate</li>
                    <li>Possibili conseguenze penali in caso di dichiarazioni mendaci</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">18.4 Procedure di Recupero</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Recupero Bonario</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Solleciti di pagamento</li>
                    <li>Possibilità di concordare un piano di rientro</li>
                    <li>Eventuale transazione per importi ridotti</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Recupero Coattivo</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Iscrizione a ruolo e recupero tramite Agenzia delle Entrate-Riscossione</li>
                    <li>Escussione delle garanzie prestate</li>
                    <li>Azioni legali per il recupero del credito</li>
                    <li>Possibile pignoramento di beni aziendali</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-semibold text-green-600 mb-2">Hai bisogno di supporto?</h4>
                <p className="mb-4">Affrontare una procedura di revoca può essere complesso e oneroso. I nostri consulenti possono aiutarti a gestire la situazione, valutare le possibilità di ricorso o negoziare un piano di rientro sostenibile con SIMEST.</p>
                <div className="flex items-center">
                  <Link href="/contatti" className="text-blue-600 hover:underline mr-6">Contattaci per una consulenza</Link>
                  <a href="https://wa.me/+393470087833" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-lg">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.14 4.486c-3.868 0-7.015 3.147-7.015 7.015 0 1.513.469 2.919 1.27 4.075l-1.665 4.975 5.095-1.635a6.979 6.979 0 004.315 1.485c3.868 0 7.015-3.147 7.015-7.015s-3.147-7.015-7.015-7.015h-.005z"/>
                    </svg>
                    Contattaci su WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sezione 19: Procedura di Revoca */}
          <div className="mb-12">
            <div className="flex items-center bg-green-50 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('procedura')}>
              <h2 id="procedura" className="text-2xl font-semibold text-green-700">19. PROCEDURA DI REVOCA</h2>
              <span className="ml-auto text-2xl">{activeSection === 'procedura' ? '−' : '+'}</span>
            </div>
            <div className={`bg-white p-6 border border-green-100 rounded-b-lg ${activeSection === 'procedura' ? 'block' : 'hidden'}`}>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">19.1 Avvio del Procedimento</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Comunicazione di Avvio</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Notifica formale tramite PEC</li>
                    <li>Indicazione delle motivazioni alla base del procedimento</li>
                    <li>Riferimento alle violazioni riscontrate</li>
                    <li>Indicazione del responsabile del procedimento</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Termini del Procedimento</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Durata massima del procedimento: 90 giorni</li>
                    <li>Possibilità di sospensione in caso di richiesta di integrazioni</li>
                    <li>Indicazione della data di conclusione prevista</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">19.2 Diritto di Difesa</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Presentazione di Controdeduzioni</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Termine per presentare memorie difensive: 30 giorni dalla notifica</li>
                    <li>Possibilità di allegare documentazione a supporto</li>
                    <li>Invio tramite PEC all'indirizzo indicato nella comunicazione</li>
                    <li>Necessaria firma digitale del legale rappresentante</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Accesso agli Atti</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Diritto di accedere alla documentazione del procedimento</li>
                    <li>Richiesta formale di accesso agli atti</li>
                    <li>Possibilità di estrarre copia dei documenti</li>
                    <li>Tempi di risposta: entro 30 giorni dalla richiesta</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">19.3 Valutazione e Decisione</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Esame delle Controdeduzioni</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Analisi delle memorie difensive presentate</li>
                    <li>Valutazione della documentazione integrativa</li>
                    <li>Possibilità di richiedere ulteriori chiarimenti</li>
                    <li>Eventuale audizione dell'impresa su richiesta</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Esiti Possibili</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Archiviazione del procedimento</li>
                    <li>Revoca parziale del finanziamento</li>
                    <li>Revoca totale del finanziamento</li>
                    <li>Rimodulazione delle condizioni di finanziamento</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">19.4 Provvedimento Finale</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Contenuto del Provvedimento</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Motivazioni dettagliate della decisione</li>
                    <li>Importi da restituire (capitale, interessi, maggiorazioni)</li>
                    <li>Termini e modalità di restituzione</li>
                    <li>Indicazione delle conseguenze in caso di mancata restituzione</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Notifica e Impugnazione</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Notifica tramite PEC del provvedimento finale</li>
                    <li>Possibilità di ricorso al TAR entro 60 giorni</li>
                    <li>Ricorso straordinario al Presidente della Repubblica entro 120 giorni</li>
                    <li>Obbligo di indicare i termini di impugnazione nel provvedimento</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-semibold text-green-600 mb-2">Hai bisogno di supporto?</h4>
                <p className="mb-4">Ricevere una comunicazione di avvio del procedimento di revoca richiede un'azione immediata e competente. I nostri consulenti specializzati possono assisterti nella preparazione delle controdeduzioni e nella gestione dell'intero procedimento per tutelare al meglio i tuoi interessi.</p>
                <div className="flex items-center">
                  <Link href="/contatti" className="text-blue-600 hover:underline mr-6">Contattaci per una consulenza</Link>
                  <a href="https://wa.me/+393470087833" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-lg">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.14 4.486c-3.868 0-7.015 3.147-7.015 7.015 0 1.513.469 2.919 1.27 4.075l-1.665 4.975 5.095-1.635a6.979 6.979 0 004.315 1.485c3.868 0 7.015-3.147 7.015-7.015s-3.147-7.015-7.015-7.015h-.005z"/>
                    </svg>
                    Contattaci su WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sezione 20: Controlli e Verifiche */}
          <div className="mb-12">
            <div className="flex items-center bg-green-50 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('controlli')}>
              <h2 id="controlli" className="text-2xl font-semibold text-green-700">20. CONTROLLI E VERIFICHE</h2>
              <span className="ml-auto text-2xl">{activeSection === 'controlli' ? '−' : '+'}</span>
            </div>
            <div className={`bg-white p-6 border border-green-100 rounded-b-lg ${activeSection === 'controlli' ? 'block' : 'hidden'}`}>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">20.1 Tipologie di Controlli</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Controlli Documentali</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Verifica della documentazione di rendicontazione</li>
                    <li>Controllo della correttezza formale dei documenti</li>
                    <li>Verifica della conformità delle spese alle categorie ammissibili</li>
                    <li>Controllo della regolarità dei pagamenti</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Controlli in Loco</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Visite presso la sede dell'impresa beneficiaria</li>
                    <li>Verifica fisica dei beni acquistati</li>
                    <li>Controllo della reale implementazione del progetto</li>
                    <li>Interviste con il personale coinvolto nel progetto</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Controlli Ex Post</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Verifiche dopo la conclusione del progetto</li>
                    <li>Controllo del mantenimento degli investimenti</li>
                    <li>Verifica del rispetto degli obblighi di stabilità</li>
                    <li>Monitoraggio dei risultati conseguiti</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">20.2 Soggetti Preposti ai Controlli</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Controlli Interni</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Personale SIMEST dedicato alle verifiche</li>
                    <li>Team di controllo interno</li>
                    <li>Esperti tecnici per valutazioni specifiche</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Controlli Esterni</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Ministero degli Affari Esteri e della Cooperazione Internazionale</li>
                    <li>Corte dei Conti</li>
                    <li>Commissione Europea (per progetti con fondi UE)</li>
                    <li>Società di revisione indipendenti</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">20.3 Tempistiche e Modalità</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Pianificazione dei Controlli</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Controlli periodici durante la realizzazione del progetto</li>
                    <li>Verifiche in concomitanza con le richieste di erogazione</li>
                    <li>Controlli a campione su base annuale</li>
                    <li>Verifiche straordinarie in caso di sospetti di irregolarità</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Preavviso e Svolgimento</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Comunicazione preventiva per controlli ordinari (7-15 giorni)</li>
                    <li>Possibilità di controlli senza preavviso</li>
                    <li>Durata media delle verifiche: 1-3 giorni lavorativi</li>
                    <li>Rilascio di verbale al termine del controllo</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">20.4 Obblighi dell'Impresa</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Collaborazione</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Garantire l'accesso ai locali aziendali</li>
                    <li>Mettere a disposizione la documentazione richiesta</li>
                    <li>Assicurare la presenza del personale competente</li>
                    <li>Fornire chiarimenti e informazioni supplementari</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Conservazione Documentale</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Mantenere la documentazione originale per 10 anni</li>
                    <li>Garantire la tracciabilità delle operazioni finanziarie</li>
                    <li>Conservare i registri contabili separati per il progetto</li>
                    <li>Predisporre un sistema di archiviazione facilmente consultabile</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">20.5 Esiti dei Controlli</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Risultati Positivi</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Conferma della regolarità delle operazioni</li>
                    <li>Prosecuzione regolare del finanziamento</li>
                    <li>Rilascio di attestazione di conformità</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Risultati Negativi</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Richiesta di chiarimenti o integrazioni documentali</li>
                    <li>Sospensione temporanea delle erogazioni</li>
                    <li>Avvio di procedimento di revoca parziale o totale</li>
                    <li>Possibili segnalazioni alle autorità competenti</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-semibold text-green-600 mb-2">Hai bisogno di supporto?</h4>
                <p className="mb-4">Prepararsi adeguatamente ai controlli è fondamentale per evitare problemi con il finanziamento SIMEST. I nostri consulenti possono aiutarti a organizzare la documentazione, verificare preventivamente la conformità delle spese e assisterti durante le visite ispettive.</p>
                <div className="flex items-center">
                  <Link href="/contatti" className="text-blue-600 hover:underline mr-6">Contattaci per una consulenza</Link>
                  <a href="https://wa.me/+393470087833" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-lg">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.14 4.486c-3.868 0-7.015 3.147-7.015 7.015 0 1.513.469 2.919 1.27 4.075l-1.665 4.975 5.095-1.635a6.979 6.979 0 004.315 1.485c3.868 0 7.015-3.147 7.015-7.015s-3.147-7.015-7.015-7.015h-.005z"/>
                    </svg>
                    Contattaci su WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sezione 21: Comunicazioni con SIMEST */}
          <div className="mb-12">
            <div className="flex items-center bg-green-50 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('comunicazioni')}>
              <h2 id="comunicazioni" className="text-2xl font-semibold text-green-700">21. COMUNICAZIONI CON SIMEST</h2>
              <span className="ml-auto text-2xl">{activeSection === 'comunicazioni' ? '−' : '+'}</span>
            </div>
            <div className={`bg-white p-6 border border-green-100 rounded-b-lg ${activeSection === 'comunicazioni' ? 'block' : 'hidden'}`}>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">21.1 Canali di Comunicazione</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Comunicazioni Ufficiali</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Posta Elettronica Certificata (PEC): <span className="text-blue-600">simest@legalmail.it</span></li>
                    <li>Portale SIMEST: sezione "Comunicazioni" dell'area riservata</li>
                    <li>Posta Raccomandata A/R: SIMEST S.p.A., Corso Vittorio Emanuele II, 323 - 00186 Roma</li>
                    <li>Consegna a mano presso la sede SIMEST (previo appuntamento)</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Comunicazioni Informali</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Email ordinaria: <span className="text-blue-600">info@simest.it</span></li>
                    <li>Telefono: <span className="text-blue-600">+39 06 68635.1</span> (centralino)</li>
                    <li>Numero verde: <span className="text-blue-600">800.020.030</span> (solo da Italia)</li>
                    <li>Form di contatto sul sito web SIMEST</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">21.2 Tipologie di Comunicazioni</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Comunicazioni Obbligatorie</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Variazioni societarie (fusioni, scissioni, cambio denominazione)</li>
                    <li>Modifiche al progetto finanziato</li>
                    <li>Variazioni del piano di investimento</li>
                    <li>Richieste di proroga dei termini</li>
                    <li>Comunicazioni di eventi straordinari che impattano sul progetto</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Comunicazioni Procedurali</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Richieste di erogazione</li>
                    <li>Invio rendicontazioni</li>
                    <li>Risposte a richieste di chiarimenti</li>
                    <li>Comunicazioni relative ai controlli</li>
                    <li>Controdeduzioni in caso di procedimento di revoca</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">21.3 Requisiti Formali</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Formato e Sottoscrizione</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Comunicazioni ufficiali su carta intestata dell'azienda</li>
                    <li>Firma digitale del legale rappresentante</li>
                    <li>Riferimento al numero di pratica/contratto</li>
                    <li>Indicazione chiara dell'oggetto della comunicazione</li>
                    <li>Allegati in formato PDF (preferibilmente firmati digitalmente)</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Tempistiche</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Comunicazioni obbligatorie: entro 30 giorni dall'evento</li>
                    <li>Risposte a richieste di SIMEST: entro i termini indicati nella richiesta</li>
                    <li>Richieste di proroga: almeno 30 giorni prima della scadenza</li>
                    <li>Controdeduzioni: entro 30 giorni dalla notifica del procedimento</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">21.4 Gestione delle Comunicazioni</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Tracciabilità</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Conservazione delle ricevute di consegna PEC</li>
                    <li>Archiviazione sistematica delle comunicazioni inviate e ricevute</li>
                    <li>Registro delle comunicazioni con data, oggetto e riferimenti</li>
                    <li>Conservazione delle comunicazioni per almeno 10 anni</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Monitoraggio</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Verifica periodica delle comunicazioni in attesa di risposta</li>
                    <li>Controllo delle scadenze per l'invio di documentazione</li>
                    <li>Follow-up in caso di mancata risposta da parte di SIMEST</li>
                    <li>Aggiornamento del team di progetto sulle comunicazioni rilevanti</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-semibold text-green-600 mb-2">Hai bisogno di supporto?</h4>
                <p className="mb-4">Una comunicazione efficace con SIMEST è fondamentale per il successo del tuo progetto finanziato. I nostri consulenti possono aiutarti a predisporre comunicazioni formalmente corrette, gestire la corrispondenza con SIMEST e monitorare le scadenze per garantire il rispetto di tutti gli obblighi informativi.</p>
                <div className="flex items-center">
                  <Link href="/contatti" className="text-blue-600 hover:underline mr-6">Contattaci per una consulenza</Link>
                  <a href="https://wa.me/+393470087833" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-lg">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.14 4.486c-3.868 0-7.015 3.147-7.015 7.015 0 1.513.469 2.919 1.27 4.075l-1.665 4.975 5.095-1.635a6.979 6.979 0 004.315 1.485c3.868 0 7.015-3.147 7.015-7.015s-3.147-7.015-7.015-7.015h-.005z"/>
                    </svg>
                    Contattaci su WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sezione 22: Stipula del Contratto */}
          <div className="mb-12">
            <div className="flex items-center bg-green-50 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('stipula')}>
              <h2 id="stipula" className="text-2xl font-semibold text-green-700">22. STIPULA DEL CONTRATTO</h2>
              <span className="ml-auto text-2xl">{activeSection === 'stipula' ? '−' : '+'}</span>
            </div>
            <div className={`bg-white p-6 border border-green-100 rounded-b-lg ${activeSection === 'stipula' ? 'block' : 'hidden'}`}>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">22.1 Processo di Stipula</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Delibera di Approvazione</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Comunicazione dell'esito positivo dell'istruttoria</li>
                    <li>Delibera del Comitato Agevolazioni</li>
                    <li>Notifica tramite PEC dell'approvazione del finanziamento</li>
                    <li>Indicazione delle condizioni economiche e contrattuali</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Predisposizione Documentazione</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Invio del contratto in formato digitale</li>
                    <li>Richiesta di documentazione integrativa necessaria</li>
                    <li>Verifica dei poteri di firma del legale rappresentante</li>
                    <li>Predisposizione delle garanzie richieste</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Firma del Contratto</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Firma digitale del legale rappresentante dell'impresa</li>
                    <li>Invio tramite PEC del contratto firmato</li>
                    <li>Controfirma da parte di SIMEST</li>
                    <li>Restituzione all'impresa della copia controfirmata</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">22.2 Contenuti del Contratto</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Elementi Essenziali</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Identificazione delle parti contraenti</li>
                    <li>Oggetto del finanziamento e descrizione del progetto</li>
                    <li>Importo del finanziamento e modalità di erogazione</li>
                    <li>Durata del finanziamento e piano di ammortamento</li>
                    <li>Tasso di interesse e condizioni economiche</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Obblighi dell'Impresa</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Realizzazione del progetto secondo il piano approvato</li>
                    <li>Rispetto delle tempistiche di realizzazione</li>
                    <li>Obblighi di rendicontazione e reporting</li>
                    <li>Vincoli di destinazione dei beni finanziati</li>
                    <li>Comunicazioni obbligatorie a SIMEST</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Garanzie</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Tipologie di garanzie richieste</li>
                    <li>Modalità di costituzione delle garanzie</li>
                    <li>Durata e validità delle garanzie</li>
                    <li>Condizioni di escussione</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">22.3 Adempimenti Post-Stipula</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Perfezionamento delle Garanzie</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Costituzione delle garanzie previste dal contratto</li>
                    <li>Invio della documentazione attestante le garanzie</li>
                    <li>Verifica di conformità delle garanzie da parte di SIMEST</li>
                    <li>Eventuale integrazione o modifica delle garanzie</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Richiesta Prima Erogazione</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Presentazione della richiesta di erogazione dell'anticipo</li>
                    <li>Documentazione necessaria per l'erogazione</li>
                    <li>Tempistiche di erogazione dopo la stipula</li>
                    <li>Verifiche preliminari all'erogazione</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">22.4 Modifiche Contrattuali</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Casistiche di Modifica</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Variazioni del progetto finanziato</li>
                    <li>Modifiche societarie dell'impresa beneficiaria</li>
                    <li>Rimodulazione del piano di ammortamento</li>
                    <li>Modifica delle garanzie</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Procedura di Modifica</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Richiesta formale di modifica contrattuale</li>
                    <li>Valutazione della richiesta da parte di SIMEST</li>
                    <li>Delibera di approvazione delle modifiche</li>
                    <li>Sottoscrizione dell'atto modificativo</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-semibold text-green-600 mb-2">Hai bisogno di supporto?</h4>
                <p className="mb-4">La fase di stipula del contratto è un momento cruciale che richiede attenzione ai dettagli e competenze specifiche. I nostri consulenti possono assisterti nella revisione del contratto, nella predisposizione della documentazione necessaria e nella costituzione delle garanzie richieste, assicurando che tutto sia conforme alle richieste di SIMEST.</p>
                <div className="flex items-center">
                  <Link href="/contatti" className="text-blue-600 hover:underline mr-6">Contattaci per una consulenza</Link>
                  <a href="https://wa.me/+393470087833" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-lg">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.14 4.486c-3.868 0-7.015 3.147-7.015 7.015 0 1.513.469 2.919 1.27 4.075l-1.665 4.975 5.095-1.635a6.979 6.979 0 004.315 1.485c3.868 0 7.015-3.147 7.015-7.015s-3.147-7.015-7.015-7.015h-.005z"/>
                    </svg>
                    Contattaci su WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sezione 23: FAQ - Domande Frequenti */}
          <div className="mb-12">
            <div className="flex items-center bg-green-50 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('faq')}>
              <h2 id="faq" className="text-2xl font-semibold text-green-700">23. FAQ - DOMANDE FREQUENTI</h2>
              <span className="ml-auto text-2xl">{activeSection === 'faq' ? '−' : '+'}</span>
            </div>
            <div className={`bg-white p-6 border border-green-100 rounded-b-lg ${activeSection === 'faq' ? 'block' : 'hidden'}`}>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">23.1 Requisiti e Ammissibilità</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Quali imprese possono accedere al Fondo 394/81?</h4>
                  <p className="ml-4 mb-3">Possono accedere al Fondo 394/81 le PMI con sede legale in Italia, costituite in forma di società di capitali, che abbiano depositato almeno un bilancio relativo a un esercizio completo. Per alcune linee di finanziamento sono ammesse anche le imprese a media capitalizzazione (Mid Cap) con un numero di dipendenti fino a 1.500 unità.</p>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">La mia impresa è in difficoltà finanziaria. Posso comunque richiedere il finanziamento?</h4>
                  <p className="ml-4 mb-3">No, le imprese in difficoltà finanziaria secondo la definizione dell'Unione Europea non possono accedere ai finanziamenti SIMEST. Questo include imprese in stato di fallimento, liquidazione o concordato preventivo, o che presentano determinati parametri finanziari critici come la perdita di più della metà del capitale sociale sottoscritto.</p>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Quali settori sono esclusi dai finanziamenti SIMEST?</h4>
                  <p className="ml-4 mb-3">Sono generalmente esclusi i settori della produzione primaria di prodotti agricoli, della pesca e dell'acquacoltura. Inoltre, sono escluse le attività connesse all'esportazione verso paesi terzi o Stati membri e le attività subordinate all'impiego di prodotti nazionali rispetto a quelli importati.</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">23.2 Presentazione della Domanda</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Come si presenta la domanda di finanziamento?</h4>
                  <p className="ml-4 mb-3">La domanda di finanziamento deve essere presentata esclusivamente online attraverso il Portale SIMEST, previa registrazione e autenticazione. È necessario compilare il modulo di domanda, allegare la documentazione richiesta e apporre la firma digitale del legale rappresentante.</p>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Quali documenti sono necessari per presentare la domanda?</h4>
                  <p className="ml-4 mb-3">I principali documenti richiesti sono: bilanci degli ultimi due esercizi, documento di identità del legale rappresentante, descrizione dettagliata del progetto, preventivi di spesa, documentazione societaria (atto costitutivo, statuto, visura camerale), e dichiarazioni sostitutive relative ai requisiti di ammissibilità.</p>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Quanto tempo occorre per l'approvazione della domanda?</h4>
                  <p className="ml-4 mb-3">I tempi di valutazione variano in base alla complessità del progetto e al volume di domande in esame. Mediamente, il processo di valutazione richiede da 30 a 90 giorni dalla data di presentazione della domanda completa. SIMEST comunica l'esito tramite PEC.</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">23.3 Spese e Rendicontazione</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Quando posso iniziare a sostenere le spese per il progetto?</h4>
                  <p className="ml-4 mb-3">Le spese sono ammissibili dalla data di presentazione della domanda di finanziamento. In alcuni casi specifici, possono essere ammesse spese sostenute fino a 18 mesi prima della presentazione della domanda, se previsto dalla linea di finanziamento specifica.</p>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Come devo rendicontare le spese sostenute?</h4>
                  <p className="ml-4 mb-3">La rendicontazione deve essere effettuata tramite il Portale SIMEST, caricando i documenti giustificativi delle spese (fatture, contratti, bonifici) e compilando i moduli di rendicontazione. Ogni spesa deve essere tracciabile e coerente con il progetto approvato. È necessario conservare gli originali dei documenti per eventuali controlli.</p>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Posso modificare il piano di spesa durante la realizzazione del progetto?</h4>
                  <p className="ml-4 mb-3">Sì, è possibile richiedere modifiche al piano di spesa, purché siano adeguatamente motivate e non alterino gli obiettivi fondamentali del progetto. Le modifiche devono essere preventivamente autorizzate da SIMEST attraverso una richiesta formale. Variazioni non autorizzate potrebbero comportare la non ammissibilità delle relative spese.</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">23.4 Erogazioni e Rimborsi</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Come avviene l'erogazione del finanziamento?</h4>
                  <p className="ml-4 mb-3">L'erogazione avviene generalmente in più tranche: un anticipo dopo la stipula del contratto (solitamente il 50% dell'importo) e le successive tranche a seguito della rendicontazione delle spese sostenute. L'ultima tranche viene erogata a saldo dopo la verifica della rendicontazione finale.</p>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Quando inizia il rimborso del finanziamento?</h4>
                  <p className="ml-4 mb-3">Il rimborso del finanziamento inizia dopo il periodo di preammortamento, che generalmente va da 1 a 3 anni dalla data di erogazione, a seconda della linea di finanziamento. Il piano di ammortamento prevede rate semestrali a quota capitale costante.</p>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Cosa succede se non riesco a rispettare il piano di rimborso?</h4>
                  <p className="ml-4 mb-3">In caso di difficoltà nel rispettare il piano di rimborso, è consigliabile contattare tempestivamente SIMEST per valutare possibili soluzioni come la rimodulazione del piano di ammortamento. Il mancato pagamento delle rate comporta l'applicazione di interessi di mora e, nei casi più gravi, può portare alla revoca del finanziamento.</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">23.5 Controlli e Revoche</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Quali controlli effettua SIMEST durante e dopo il progetto?</h4>
                  <p className="ml-4 mb-3">SIMEST può effettuare controlli documentali sulla rendicontazione presentata, verifiche in loco presso la sede dell'impresa e controlli ex-post per verificare il mantenimento degli investimenti. I controlli possono essere programmati o a sorpresa e riguardano la conformità delle spese, la realizzazione del progetto e il rispetto degli obblighi contrattuali.</p>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Quali sono le principali cause di revoca del finanziamento?</h4>
                  <p className="ml-4 mb-3">Le principali cause di revoca includono: dichiarazioni false o mendaci, mancata realizzazione del progetto, utilizzo dei fondi per finalità diverse da quelle previste, perdita dei requisiti di ammissibilità, mancato rispetto degli obblighi di rendicontazione, cessazione dell'attività o trasferimento dell'investimento fuori dal territorio nazionale prima del periodo minimo richiesto.</p>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-semibold text-green-600 mb-2">Hai altre domande?</h4>
                <p className="mb-4">Se non hai trovato risposta alle tue domande in questa sezione, i nostri consulenti specializzati sono a tua disposizione per fornirti chiarimenti personalizzati e supportarti in ogni fase del processo di finanziamento SIMEST.</p>
                <div className="flex items-center">
                  <Link href="/contatti" className="text-blue-600 hover:underline mr-6">Contattaci per una consulenza</Link>
                  <a href="https://wa.me/+393470087833" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-lg">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.14 4.486c-3.868 0-7.015 3.147-7.015 7.015 0 1.513.469 2.919 1.27 4.075l-1.665 4.975 5.095-1.635a6.979 6.979 0 004.315 1.485c3.868 0 7.015-3.147 7.015-7.015s-3.147-7.015-7.015-7.015h-.005z"/>
                    </svg>
                    Contattaci su WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sezione 24: Conclusioni e Contatti */}
          <div className="mb-12">
            <div className="flex items-center bg-green-50 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('conclusioni')}>
              <h2 id="conclusioni" className="text-2xl font-semibold text-green-700">24. CONCLUSIONI E CONTATTI</h2>
              <span className="ml-auto text-2xl">{activeSection === 'conclusioni' ? '−' : '+'}</span>
            </div>
            <div className={`bg-white p-6 border border-green-100 rounded-b-lg ${activeSection === 'conclusioni' ? 'block' : 'hidden'}`}>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">24.1 Riepilogo del Fondo 394/81</h3>
                
                <div className="mb-5">
                  <p className="ml-4 mb-3">Il Fondo 394/81 gestito da SIMEST rappresenta uno strumento fondamentale per sostenere l'internazionalizzazione delle imprese italiane, offrendo finanziamenti agevolati e contributi a fondo perduto per progetti di espansione sui mercati esteri.</p>
                  
                  <p className="ml-4 mb-3">Attraverso questa guida abbiamo esplorato tutti gli aspetti rilevanti del Fondo, dalla normativa di riferimento alle condizioni di ammissibilità, dalle spese finanziabili alle procedure di rendicontazione, fino agli aspetti procedurali relativi a controlli, revoche e comunicazioni con SIMEST.</p>
                  
                  <p className="ml-4 mb-3">L'accesso a queste agevolazioni rappresenta un'opportunità strategica per le PMI italiane che intendono rafforzare la propria presenza internazionale, sviluppare nuovi mercati e migliorare la propria competitività globale.</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">24.2 Vantaggi Competitivi</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Benefici Finanziari</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Tassi di interesse agevolati rispetto al mercato</li>
                    <li>Possibilità di ottenere quote a fondo perduto</li>
                    <li>Lunghi periodi di preammortamento</li>
                    <li>Copertura fino all'85% delle spese ammissibili</li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Benefici Strategici</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Accelerazione dei processi di internazionalizzazione</li>
                    <li>Diversificazione dei mercati di sbocco</li>
                    <li>Rafforzamento della competitività internazionale</li>
                    <li>Sviluppo di nuove competenze e know-how</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">24.3 Contatti SIMEST</h3>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Sede Centrale</h4>
                  <ul className="list-none space-y-1 ml-4">
                    <li><span className="font-semibold">Indirizzo:</span> Corso Vittorio Emanuele II, 323 - 00186 Roma</li>
                    <li><span className="font-semibold">Telefono:</span> +39 06 68635.1</li>
                    <li><span className="font-semibold">Email:</span> <a href="mailto:info@simest.it" className="text-blue-600 hover:underline">info@simest.it</a></li>
                    <li><span className="font-semibold">PEC:</span> <a href="mailto:simest@legalmail.it" className="text-blue-600 hover:underline">simest@legalmail.it</a></li>
                    <li><span className="font-semibold">Sito web:</span> <a href="https://www.simest.it" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.simest.it</a></li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-green-600 mb-2">Assistenza</h4>
                  <ul className="list-none space-y-1 ml-4">
                    <li><span className="font-semibold">Numero Verde:</span> 800.020.030 (solo dall'Italia)</li>
                    <li><span className="font-semibold">Orari:</span> Dal lunedì al venerdì, 9:00-17:00</li>
                    <li><span className="font-semibold">Assistenza tecnica portale:</span> <a href="mailto:portalesimest@simest.it" className="text-blue-600 hover:underline">portalesimest@simest.it</a></li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">24.4 I Nostri Servizi di Consulenza</h3>
                
                <div className="mb-5">
                  <p className="ml-4 mb-3">La nostra società di consulenza offre un supporto completo e specializzato per l'accesso ai finanziamenti SIMEST, accompagnando le imprese in ogni fase del percorso:</p>
                  
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Analisi preliminare di fattibilità e verifica dei requisiti</li>
                    <li>Predisposizione della domanda di finanziamento</li>
                    <li>Elaborazione del business plan e della documentazione tecnica</li>
                    <li>Assistenza nella fase di stipula del contratto</li>
                    <li>Supporto nella rendicontazione delle spese</li>
                    <li>Gestione delle comunicazioni con SIMEST</li>
                    <li>Assistenza in caso di controlli o verifiche</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg text-center">
                <h4 className="text-2xl font-semibold text-green-700 mb-4">Pronto a internazionalizzare la tua impresa?</h4>
                <p className="mb-6 text-lg">Il nostro team di esperti è a tua disposizione per una consulenza personalizzata sui finanziamenti SIMEST e per supportarti in ogni fase del processo di internazionalizzazione.</p>
                <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
                  <Link href="/contatti" className="bg-green-700 hover:bg-green-800 text-white py-3 px-6 rounded-lg text-lg font-medium inline-flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                    </svg>
                    Richiedi una consulenza gratuita
                  </Link>
                  <a href="https://wa.me/+393470087833" target="_blank" rel="noopener noreferrer" className="bg-white border border-green-700 text-green-700 hover:bg-green-50 py-3 px-6 rounded-lg text-lg font-medium inline-flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.14 4.486c-3.868 0-7.015 3.147-7.015 7.015 0 1.513.469 2.919 1.27 4.075l-1.665 4.975 5.095-1.635a6.979 6.979 0 004.315 1.485c3.868 0 7.015-3.147 7.015-7.015s-3.147-7.015-7.015-7.015h-.005z"/>
                    </svg>
                    Contattaci su WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
