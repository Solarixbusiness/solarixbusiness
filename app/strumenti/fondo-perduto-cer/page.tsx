'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function CERPage() {
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

  return (
    <>
      <Head>
        <title>Guida Comunità Energetiche Rinnovabili (CER) | SolariX Business</title>
        <meta name="description" content="Guida completa alle Comunità Energetiche Rinnovabili (CER): definizione, benefici, incentivi, e come costituirle. Supporto da SolariX Business." />
        <meta name="keywords" content="CER, Comunità Energetiche Rinnovabili, autoconsumo collettivo, incentivi energia, transizione energetica, GSE, fondo perduto" />
        <link rel="canonical" href="https://www.solarixbusiness.it/strumenti/fondo-perduto-cer" />
        {/* Se avessi uno script JSON-LD specifico per questa pagina, andrebbe qui */}
      </Head>
      <div className="bg-white p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-700 mb-4">
            Guida Completa alle Comunità Energetiche Rinnovabili (CER)
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tutto ciò che devi sapere sulle CER: definizione, benefici, incentivi e come costituirle
          </p>
        </div>

        {/* Immagine Guida CER */}
        <div className="mb-8 w-full">
          <Image
            src="/images/strumenti/CER..jpg"
            alt="Guida Comunità Energetiche Rinnovabili"
            width={1200}
            height={450}
            className="w-full h-auto object-cover rounded-lg shadow-md max-h-72 sm:max-h-80 md:max-h-96 lg:max-h-[450px]"
            priority
            sizes="100vw"
          />
        </div>

        {/* Main content container */}
        <div className="flex flex-col gap-8">
          {/* Sidebar with index */}
          <div className="w-full">
            <div className="bg-green-50 p-4 rounded-lg sticky top-24">
              <h2 className="text-xl font-bold text-green-800 mb-4 pb-2 border-b border-green-200">
                Indice dei Contenuti
              </h2>
              <div className="space-y-6 md:grid md:grid-cols-2 md:gap-x-8">
                {/* Colonna 1: Parte 1, 2, 3 */}
                <div className="space-y-6">
                  {/* Parte 1: Fondamenti e Caratteristiche Generali */}
                  <div>
                    <h3 className="text-lg font-semibold text-green-700 mb-2">Parte 1: Fondamenti e Caratteristiche</h3>
                    <ul className="space-y-1 text-sm">
                      <li>
                        <a href="#section-1" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-1', e)}>1. Definizione e Concetto Base</a>
                      </li>
                      <li>
                        <a href="#section-2" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-2', e)}>2. Obiettivi Fondamentali delle CER</a>
                      </li>
                      <li>
                        <a href="#section-3" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-3', e)}>3. Elementi Costitutivi di una CER</a>
                      </li>
                      <li>
                        <a href="#section-4" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-4', e)}>4. Il Concetto di Prosumer</a>
                      </li>
                      <li>
                        <a href="#section-5" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-5', e)}>5. Collegamento alla Cabina Primaria</a>
                      </li>
                      <li>
                        <a href="#section-6" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-6', e)}>6. Autoconsumo Virtuale e Energia Condivisa</a>
                      </li>
                      <li>
                        <a href="#section-7" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-7', e)}>7. Quadro Normativo di Riferimento</a>
                      </li>
                      <li>
                        <a href="#section-8" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-8', e)}>8. Vantaggi delle CER</a>
                      </li>
                      <li>
                        <a href="#section-9" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-9', e)}>9. Modelli Organizzativi</a>
                      </li>
                      <li>
                        <a href="#section-10" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-10', e)}>10. Differenze con Altri Modelli</a>
                      </li>
                      <li>
                        <a href="#section-11" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-11', e)}>11. Sfide e Considerazioni</a>
                      </li>
                      <li>
                        <a href="#section-12" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-12', e)}>12. Prospettive Future</a>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Parte 2: Incentivi e Contributi */}
                  <div>
                    <h3 className="text-lg font-semibold text-green-700 mb-2">Parte 2: Incentivi e Contributi</h3>
                    <ul className="space-y-1 text-sm">
                      <li>
                        <a href="#section-p2-1" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-p2-1', e)}>1. Tariffa Incentivante Base</a>
                      </li>
                      <li>
                        <a href="#section-p2-2" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-p2-2', e)}>2. Componenti della Tariffa</a>
                      </li>
                      <li>
                        <a href="#section-p2-3" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-p2-3', e)}>3. Contributo a Fondo Perduto PNRR (40%)</a>
                      </li>
                      <li>
                        <a href="#section-p2-4" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-p2-4', e)}>4. Requisiti di Ammissibilità</a>
                      </li>
                      <li>
                        <a href="#section-p2-5" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-p2-5', e)}>5. Modalità di Richiesta</a>
                      </li>
                      <li>
                        <a href="#section-p2-6" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-p2-6', e)}>6. Anticipazione del Contributo</a>
                      </li>
                      <li>
                        <a href="#section-p2-7" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-p2-7', e)}>7. Altre Agevolazioni Cumulabili</a>
                      </li>
                      <li>
                        <a href="#section-p2-8" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-p2-8', e)}>8. Gestione e Ripartizione Economica</a>
                      </li>
                      <li>
                        <a href="#section-p2-9" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-p2-9', e)}>9. Controlli e Verifiche</a>
                      </li>
                      <li>
                        <a href="#section-p2-10" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-p2-10', e)}>10. Best Practices Economiche</a>
                      </li>
                    </ul>
                  </div>

                  {/* Parte 3: Procedura di Costituzione e Accesso agli Incentivi */}
                  <div>
                    <h3 className="text-lg font-semibold text-green-700 mb-2">Parte 3: Procedura di Costituzione e Accesso agli Incentivi</h3>
                    <ul className="space-y-1 text-sm">
                      <li><a href="#section-p3-1" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-p3-1', e)}>1. Fasi di Costituzione di una CER</a></li>
                      <li><a href="#section-p3-2" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-p3-2', e)}>2. FASE 1: Analisi Preliminare</a></li>
                      <li><a href="#section-p3-3" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-p3-3', e)}>3. FASE 2: Pianificazione Impianti</a></li>
                      <li><a href="#section-p3-4" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-p3-4', e)}>4. FASE 3: Identificazione Componenti</a></li>
                      <li><a href="#section-p3-5" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-p3-5', e)}>5. FASE 4: Costituzione Soggetto Giuridico</a></li>
                      <li><a href="#section-p3-6" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-p3-6', e)}>6. FASE 5: Verifica Membri e POD</a></li>
                      <li><a href="#section-p3-7" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-p3-7', e)}>7. FASE 6: Mandati di Rappresentanza</a></li>
                      <li><a href="#section-p3-8" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-p3-8', e)}>8. FASE 7: Coinvolgimento Amministrazioni</a></li>
                      <li><a href="#section-p3-9" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-p3-9', e)}>9. FASE 8: Richiesta Incentivi GSE</a></li>
                      <li><a href="#section-p3-10" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-p3-10', e)}>10. FASE 9: Realizzazione Impianti</a></li>
                      <li><a href="#section-p3-11" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-p3-11', e)}>11. FASE 10: Richiesta Incentivo Finale</a></li>
                      <li><a href="#section-p3-12" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-p3-12', e)}>12. Istruttoria GSE e Tempistiche</a></li>
                      <li><a href="#section-p3-13" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-p3-13', e)}>13. Gestione Post-Costituzione</a></li>
                      <li><a href="#section-p3-14" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-p3-14', e)}>14. Modifiche alla Configurazione</a></li>
                      <li><a href="#section-p3-15" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-p3-15', e)}>15. Aspetti Critici da Evitare</a></li>
                      <li><a href="#section-p3-16" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-p3-16', e)}>16. Best Practices Procedurali</a></li>
                      <li><a href="#section-p3-17" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-p3-17', e)}>17. Supporto Professionale</a></li>
                      <li><a href="#section-p3-18" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-p3-18', e)}>18. Checklist Completa Procedura</a></li>
                      <li><a href="#section-p3-19" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-p3-19', e)}>19. Monitoraggio e KPI</a></li>
                    </ul>
                  </div>
                </div>

                {/* Colonna 2: Parte 4, 5 */}
                <div className="space-y-6">
                  {/* Parte 4: Statuti e Modelli di Governance */}
                  <div>
                    <h3 className="text-lg font-semibold text-green-700 mb-2">Parte 4: Statuti e Modelli di Governance</h3>
                    <ul className="space-y-1 text-sm">
                      <li><a href="#section-p4-1" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-p4-1', e)}>1. Importanza dello Statuto per le CER</a></li>
                      <li><a href="#section-p4-2" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-p4-2', e)}>2. Forme Giuridiche per CER</a></li>
                      <li><a href="#section-p4-3" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-p4-3', e)}>3. Struttura di uno Statuto CER</a></li>
                      <li><a href="#section-p4-4" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-p4-4', e)}>4. TITOLO I: Fondamenti della CER</a></li>
                      <li><a href="#section-p4-5" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-p4-5', e)}>5. TITOLO II: Membri della CER</a></li>
                      <li><a href="#section-p4-6" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-p4-6', e)}>6. TITOLO III: Patrimonio e Gestione Economica</a></li>
                      <li><a href="#section-p4-7" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-p4-7', e)}>7. TITOLO IV: Organi Sociali</a></li>
                      <li><a href="#section-p4-8" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-p4-8', e)}>8. Regolamento Interno Operativo</a></li>
                      <li><a href="#section-p4-9" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-p4-9', e)}>9. Clausole Specifiche per GSE</a></li>
                      <li><a href="#section-p4-10" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-p4-10', e)}>10. Disposizioni Finali</a></li>
                      <li><a href="#section-p4-11" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-p4-11', e)}>11. Checklist Statuto CER</a></li>
                      <li><a href="#section-p4-12" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-p4-12', e)}>12. Varianti per Diverse Forme Giuridiche</a></li>
                    </ul>
                  </div>

                  {/* Parte 5: Casi Pratici, Fiscalità e Best Practices */}
                  <div>
                    <h3 className="text-lg font-semibold text-green-700 mb-2">Parte 5: Casi Pratici, Fiscalità e Best Practices</h3>
                    <ul className="space-y-1 text-sm">
                      <li><a href="#section-p5-1" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-p5-1', e)}>1. Casi Pratici di CER</a></li>
                      <li><a href="#section-p5-2" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-p5-2', e)}>2. Aspetti Fiscali delle CER</a></li>
                      <li><a href="#section-p5-3" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-p5-3', e)}>3. Gestione Operativa Avanzata</a></li>
                      <li><a href="#section-p5-4" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-p5-4', e)}>4. Best Practices Gestionali</a></li>
                      <li><a href="#section-p5-5" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-p5-5', e)}>5. Gestione Rischi e Criticità</a></li>
                      <li><a href="#section-p5-6" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-p5-6', e)}>6. Innovazioni e Sviluppi Futuri</a></li>
                      <li><a href="#section-p5-7" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-p5-7', e)}>7. Valutazione dell'Impatto</a></li>
                      <li><a href="#section-p5-8" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-p5-8', e)}>8. Errori Comuni da Evitare</a></li>
                      <li><a href="#section-p5-9" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-p5-9', e)}>9. Fattori Critici di Successo</a></li>
                      <li><a href="#section-p5-10" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-p5-10', e)}>10. Checklist Finale per CER di Successo</a></li>
                      <li><a href="#section-p5-11" className="text-gray-700 hover:text-green-600" onClick={(e) => handleIndexClick('section-p5-11', e)}>11. Conclusioni della Guida CER Completa</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main content */}
          <div className="w-full">
            {/* Titolo Parte 1 */}
            <div className="mt-8 mb-6">
              <h2 className="text-2xl font-bold text-green-800 border-b-2 border-green-500 pb-2">Parte 1: Fondamenti e Caratteristiche</h2>
            </div>
            
            {/* Sezione 1: Definizione e Concetto Base */}
            <div id="section-1" className="scroll-mt-24 mt-8">
              <div 
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer"
                onClick={() => toggleSection('section-1')}
              >
                <h2 className="text-xl font-bold text-green-800">1. Definizione e Concetto Base</h2>
                <span className="text-green-600">
                  {activeSection === 'section-1' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              
              {activeSection === 'section-1' && (
                <div className="mt-4 space-y-4 p-4 bg-white rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-green-700 mb-3">1.1 Che cosa sono le CER</h3>
                  <p className="text-gray-700">
                    Le Comunità Energetiche Rinnovabili (CER) sono un insieme di soggetti che si uniscono per la produzione, condivisione e scambio di energia elettrica prodotta attraverso impianti a fonti rinnovabili.
                  </p>
                  
                  <h3 className="text-lg font-semibold text-green-700 mb-3 mt-6">1.2 Chi può partecipare</h3>
                  <p className="text-gray-700 mb-2">Soggetti ammessi:</p>
                  
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Cittadini (persone fisiche)</li>
                    <li>Attività commerciali e imprese (PMI)</li>
                    <li>Enti territoriali e autorità locali</li>
                    <li>Pubbliche amministrazioni</li>
                    <li>Associazioni e condomini</li>
                    <li>Terzo settore e cooperative</li>
                    <li>Enti religiosi</li>
                  </ul>
                  
                  <div className="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                    <p className="text-gray-700 font-medium">Condizione importante: Per le imprese, la partecipazione alla CER non deve costituire l'attività commerciale principale.</p>
                  </div>
                </div>
              )}
            </div>
            
            {/* Sezione 2: Obiettivi Fondamentali delle CER */}
            <div id="section-2" className="scroll-mt-24 mt-8">
              <div 
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer"
                onClick={() => toggleSection('section-2')}
              >
                <h2 className="text-xl font-bold text-green-800">2. Obiettivi Fondamentali delle CER</h2>
                <span className="text-green-600">
                  {activeSection === 'section-2' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              
              {activeSection === 'section-2' && (
                <div className="mt-4 space-y-4 p-4 bg-white rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-green-700 mb-3">2.1 Obiettivo Principale</h3>
                  <p className="text-gray-700 mb-2">
                    NON realizzare profitti finanziari, ma fornire:
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Benefici ambientali per la comunità</li>
                    <li>Benefici economici per i partecipanti</li>
                    <li>Benefici sociali a livello locale</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-green-700 mb-3 mt-6">2.2 Obiettivi Specifici</h3>
                  
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Massimizzazione dell'autoconsumo di energia rinnovabile locale</li>
                    <li>Riduzione della dipendenza da fonti fossili</li>
                    <li>Diminuzione della dipendenza dalla rete elettrica nazionale</li>
                    <li>Promozione di un modello decentralizzato e sostenibile</li>
                    <li>Valorizzazione delle risorse energetiche locali</li>
                    <li>Stimolo dell'economia circolare</li>
                  </ul>
                </div>
              )}
            </div>
            
            {/* Sezione 3: Elementi Costitutivi di una CER */}
            <div id="section-3" className="scroll-mt-24 mt-8">
              <div 
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer"
                onClick={() => toggleSection('section-3')}
              >
                <h2 className="text-xl font-bold text-green-800">3. Elementi Costitutivi di una CER</h2>
                <span className="text-green-600">
                  {activeSection === 'section-3' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              
              {activeSection === 'section-3' && (
                <div className="mt-4 space-y-4 p-4 bg-white rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-green-700 mb-3">3.1 I Membri</h3>
                  <p className="text-gray-700 mb-2">Tipologie di partecipanti:</p>
                  
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Prosumer: Producono e consumano energia</li>
                    <li>Consumer: Solo consumatori di energia condivisa</li>
                    <li>Enti pubblici: Amministrazioni locali, scuole, enti religiosi</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-green-700 mb-3 mt-6">3.2 Gli Impianti</h3>
                  <p className="text-gray-700 mb-2">Caratteristiche tecniche:</p>
                  
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Potenza massima incentivabile: 1 MW per impianto</li>
                    <li>Tipologie ammesse: Fotovoltaico, eolico, idroelettrico, biomasse</li>
                    <li>Impianti nuovi o esistenti e adeguati</li>
                    <li>Connessione obbligatoria: Alla stessa cabina primaria AT/MT</li>
                  </ul>
                  
                  <p className="text-gray-700 mb-2 mt-4">Gestione degli impianti:</p>
                  
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Proprietà diretta della CER</li>
                    <li>Gestione da parte di soggetto terzo (sotto controllo CER)</li>
                    <li>Impianti esistenti: Max 30% della potenza complessiva (se realizzati prima del 15.12.2021)</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-green-700 mb-3 mt-6">3.3 La Gestione Operativa</h3>
                  <p className="text-gray-700 mb-2">Fasi principali:</p>
                  
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Costituzione e avvio della comunità</li>
                    <li>Gestione operativa quotidiana</li>
                    <li>Sviluppo ed estensione della comunità</li>
                  </ul>
                </div>
              )}
            </div>
            
            {/* Sezione 4: Il Concetto di Prosumer */}
            <div id="section-4" className="scroll-mt-24 mt-8">
              <div 
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer"
                onClick={() => toggleSection('section-4')}
              >
                <h2 className="text-xl font-bold text-green-800">4. Il Concetto di Prosumer</h2>
                <span className="text-green-600">
                  {activeSection === 'section-4' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              
              {activeSection === 'section-4' && (
                <div className="mt-4 space-y-4 p-4 bg-white rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-green-700 mb-3">4.1 Definizione</h3>
                  <p className="text-gray-700 mb-2">
                    Il prosumer è un soggetto che:
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Produce energia con proprio impianto (producer)</li>
                    <li>Consuma parte dell'energia prodotta (consumer)</li>
                    <li>Partecipa attivamente alla gestione dei flussi energetici</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-green-700 mb-3 mt-6">4.2 Vantaggi del Prosumer</h3>
                  
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Autonomia energetica parziale o totale</li>
                    <li>Benefici economici dalla vendita energia eccedente</li>
                    <li>Controllo sui propri consumi energetici</li>
                    <li>Partecipazione agli incentivi della CER</li>
                  </ul>
                </div>
              )}
            </div>
            
            {/* Sezione 5: Collegamento alla Cabina Primaria */}
            <div id="section-5" className="scroll-mt-24 mt-8">
              <div 
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer"
                onClick={() => toggleSection('section-5')}
              >
                <h2 className="text-xl font-bold text-green-800">5. Collegamento alla Cabina Primaria</h2>
                <span className="text-green-600">
                  {activeSection === 'section-5' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              
              {activeSection === 'section-5' && (
                <div className="mt-4 space-y-4 p-4 bg-white rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-green-700 mb-3">5.1 Requisito Fondamentale</h3>
                  <p className="text-gray-700">
                    Per accedere agli incentivi, tutti i soggetti della CER devono essere connessi alla stessa cabina primaria AT/MT.
                  </p>
                  
                  <h3 className="text-lg font-semibold text-green-700 mb-3 mt-6">5.2 Cos'è la Cabina Primaria</h3>
                  
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Infrastruttura che trasforma energia da alta a media tensione</li>
                    <li>Punto di interconnessione tra rete nazionale e distribuzione locale</li>
                    <li>Definisce un'area geografica limitata per la CER</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-green-700 mb-3 mt-6">5.3 Estensione Geografica</h3>
                  
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Possibile costituire CER con perimetro più ampio</li>
                    <li>Limitazione: Energia fuori cabina primaria NON accede agli incentivi</li>
                    <li>Zona di mercato: Perimetro massimo senza incentivi</li>
                  </ul>
                </div>
              )}
            </div>
            
            {/* Sezione 6: Autoconsumo Virtuale e Energia Condivisa */}
            <div id="section-6" className="scroll-mt-24 mt-8">
              <div 
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer"
                onClick={() => toggleSection('section-6')}
              >
                <h2 className="text-xl font-bold text-green-800">6. Autoconsumo Virtuale e Energia Condivisa</h2>
                <span className="text-green-600">
                  {activeSection === 'section-6' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              
              {activeSection === 'section-6' && (
                <div className="mt-4 space-y-4 p-4 bg-white rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-green-700 mb-3">6.1 Schema Italiano</h3>
                  <p className="text-gray-700 mb-2">
                    L'Italia ha adottato il modello di autoconsumo virtuale:
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Utilizzo della rete di distribuzione pubblica esistente</li>
                    <li>NON necessarie reti private dedicate</li>
                    <li>Condivisione attraverso infrastruttura nazionale</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-green-700 mb-3 mt-6">6.2 Definizione di Energia Condivisa</h3>
                  <p className="text-gray-700 mb-2">
                    Formula: Energia condivisa = MIN(Energia prodotta e immessa, Energia prelevata)
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Calcolo orario per ogni periodo</li>
                    <li>Sotto la stessa cabina primaria</li>
                    <li>Solo da impianti a fonti rinnovabili</li>
                  </ul>
                </div>
              )}
            </div>
            
            {/* Sezione 7: Quadro Normativo di Riferimento */}
            <div id="section-7" className="scroll-mt-24 mt-8">
              <div 
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer"
                onClick={() => toggleSection('section-7')}
              >
                <h2 className="text-xl font-bold text-green-800">7. Quadro Normativo di Riferimento</h2>
                <span className="text-green-600">
                  {activeSection === 'section-7' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              
              {activeSection === 'section-7' && (
                <div className="mt-4 space-y-4 p-4 bg-white rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-green-700 mb-3">7.1 Normativa Europea</h3>
                  
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Direttiva RED II (Renewable Energy Directive)</li>
                    <li>Clean Energy Package</li>
                    <li>Regolamenti UE su energia rinnovabile</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-green-700 mb-3 mt-6">7.2 Normativa Nazionale</h3>
                  
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Decreto CACER (DM 7 dicembre 2023, n. 414)</li>
                    <li>TIAD (Allegato A delibera 727/2022/R/eel ARERA)</li>
                    <li>Regole Operative GSE per implementazione</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-green-700 mb-3 mt-6">7.3 Finanziamento PNRR</h3>
                  
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Missione 2, Componente 2, Investimento 1.2</li>
                    <li>Budget: €2,2 miliardi per contributi a fondo perduto</li>
                    <li>Obiettivo: Accelerare sviluppo CER in Italia</li>
                  </ul>
                </div>
              )}
            </div>
            
            {/* Sezione 8: Vantaggi delle CER */}
            <div id="section-8" className="scroll-mt-24 mt-8">
              <div 
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer"
                onClick={() => toggleSection('section-8')}
              >
                <h2 className="text-xl font-bold text-green-800">8. Vantaggi delle CER</h2>
                <span className="text-green-600">
                  {activeSection === 'section-8' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              
              {activeSection === 'section-8' && (
                <div className="mt-4 space-y-4 p-4 bg-white rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-green-700 mb-3">8.1 Benefici Economici</h3>
                  
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Risparmio in bolletta grazie all'autoconsumo</li>
                    <li>Incentivi GSE per energia condivisa</li>
                    <li>Remunerazione energia immessa in rete</li>
                    <li>Agevolazioni fiscali (detrazioni 50%, crediti d'imposta imprese)</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-green-700 mb-3 mt-6">8.2 Benefici Ambientali</h3>
                  
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Riduzione emissioni CO2</li>
                    <li>Aumento produzione energia rinnovabile</li>
                    <li>Diminuzione dipendenza da fonti fossili</li>
                    <li>Contributo agli obiettivi climatici nazionali/UE</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-green-700 mb-3 mt-6">8.3 Benefici Sociali</h3>
                  
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Coesione sociale tra membri comunità</li>
                    <li>Cooperazione e solidarietà locale</li>
                    <li>Sostegno a famiglie in povertà energetica</li>
                    <li>Opportunità economiche per territori</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-green-700 mb-3 mt-6">8.4 Benefici Tecnici</h3>
                  
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Riduzione perdite di rete (produzione locale)</li>
                    <li>Maggiore stabilità rete elettrica locale</li>
                    <li>Ottimizzazione infrastrutture esistenti</li>
                  </ul>
                </div>
              )}
            </div>
            
            {/* Sezione 9: Modelli Organizzativi */}
            <div id="section-9" className="scroll-mt-24 mt-8">
              <div 
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer"
                onClick={() => toggleSection('section-9')}
              >
                <h2 className="text-xl font-bold text-green-800">9. Modelli Organizzativi</h2>
                <span className="text-green-600">
                  {activeSection === 'section-9' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              
              {activeSection === 'section-9' && (
                <div className="mt-4 space-y-4 p-4 bg-white rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-green-700 mb-3">9.1 Forme Giuridiche Ammesse</h3>
                  <p className="text-gray-700 mb-2">
                    Principalmente:
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Associazione (riconosciuta o non riconosciuta)</li>
                    <li>Cooperativa</li>
                    <li>Altre forme compatibili con finalità non lucrative</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-green-700 mb-3 mt-6">9.2 Caratteristiche Organizzative</h3>
                  
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Soggetto giuridico autonomo obbligatorio</li>
                    <li>Partecipazione aperta e volontaria</li>
                    <li>Controllo democratico dei membri</li>
                    <li>Finalità non di profitto prevalente</li>
                  </ul>
                </div>
              )}
            </div>
            
            {/* Sezione 10: Differenze con Altri Modelli */}
            <div id="section-10" className="scroll-mt-24 mt-8">
              <div 
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer"
                onClick={() => toggleSection('section-10')}
              >
                <h2 className="text-xl font-bold text-green-800">10. Differenze con Altri Modelli</h2>
                <span className="text-green-600">
                  {activeSection === 'section-10' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              
              {activeSection === 'section-10' && (
                <div className="mt-4 space-y-4 p-4 bg-white rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-green-700 mb-3">10.1 vs Scambio Sul Posto</h3>
                  
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>CER: Condivisione virtuale tra più soggetti</li>
                    <li>SSP: Compensazione individuale produzione/consumo</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-green-700 mb-3 mt-6">10.2 vs Gruppi di Autoconsumo Collettivo</h3>
                  
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>CER: Soggetto giuridico autonomo, area più estesa</li>
                    <li>GAC: Stesso edificio/condominio, contratto privato</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-green-700 mb-3 mt-6">10.3 vs Sistemi di Distribuzione Chiusi</h3>
                  
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>CER: Rete pubblica, autoconsumo virtuale</li>
                    <li>SDC: Rete privata, autoconsumo fisico</li>
                  </ul>
                </div>
              )}
            </div>
            
            {/* Sezione 11: Sfide e Considerazioni */}
            <div id="section-11" className="scroll-mt-24 mt-8">
              <div 
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer"
                onClick={() => toggleSection('section-11')}
              >
                <h2 className="text-xl font-bold text-green-800">11. Sfide e Considerazioni</h2>
                <span className="text-green-600">
                  {activeSection === 'section-11' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              
              {activeSection === 'section-11' && (
                <div className="mt-4 space-y-4 p-4 bg-white rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-green-700 mb-3">11.1 Sfide Tecniche</h3>
                  
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Sincronizzazione produzione/consumo</li>
                    <li>Gestione sistemi di accumulo</li>
                    <li>Monitoraggio flussi energetici</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-green-700 mb-3 mt-6">11.2 Sfide Organizzative</h3>
                  
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Coordinamento tra membri diversi</li>
                    <li>Gestione conflitti interni</li>
                    <li>Sostenibilità economica nel tempo</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-green-700 mb-3 mt-6">11.3 Sfide Normative</h3>
                  
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Complessità procedure autorizzative</li>
                    <li>Evoluzione normativa continua</li>
                    <li>Coordinamento tra enti diversi</li>
                  </ul>
                </div>
              )}
            </div>
            
            {/* Sezione 12: Prospettive Future */}
            <div id="section-12" className="scroll-mt-24 mt-8">
              <div 
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer"
                onClick={() => toggleSection('section-12')}
              >
                <h2 className="text-xl font-bold text-green-800">12. Prospettive Future</h2>
                <span className="text-green-600">
                  {activeSection === 'section-12' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              
              {activeSection === 'section-12' && (
                <div className="mt-4 space-y-4 p-4 bg-white rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-green-700 mb-3">12.1 Sviluppo Tecnologico</h3>
                  
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Sistemi di accumulo più efficienti</li>
                    <li>Smart grid e digitalizzazione</li>
                    <li>Integrazione con mobilità elettrica</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-green-700 mb-3 mt-6">12.2 Evoluzione Normativa</h3>
                  
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Semplificazione procedure</li>
                    <li>Ampliamento aree geografiche ammesse</li>
                    <li>Nuovi modelli di incentivazione</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-green-700 mb-3 mt-6">12.3 Impatto sul Sistema Energetico</h3>
                  
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Decentralizzazione produzione energetica</li>
                    <li>Maggiore resilienza del sistema</li>
                    <li>Accelerazione transizione energetica</li>
                  </ul>
                </div>
              )}
            </div>
            
            {/* Titolo Parte 2 */}
            <div className="mt-16 mb-6">
              <h2 className="text-2xl font-bold text-green-800 border-b-2 border-green-500 pb-2">Parte 2: Sistema di Incentivi e Contributi</h2>
            </div>
            
            {/* Sezione 1: Panoramica del Sistema Incentivante */}
            <div id="section-p2-1" className="scroll-mt-24 mt-8">
              <div 
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
                onClick={() => toggleSection('section-p2-1')}
              >
                <h2 className="text-xl font-bold text-green-800">1. Panoramica del Sistema Incentivante</h2>
                <span className="text-green-600">
                  {activeSection === 'section-p2-1' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              
              {activeSection === 'section-p2-1' && (
                <div className="mt-4 space-y-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  {/* Box informativo principale */}
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-5 rounded-lg border border-green-100 mb-6">
                    <div className="flex items-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <h3 className="text-lg font-semibold text-green-800">Sistema di Incentivazione a Doppio Binario</h3>
                    </div>
                    <p className="text-gray-700 italic mb-2">Le CER beneficiano di un sistema di incentivazione innovativo che combina supporto operativo e contributi in conto capitale.</p>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-green-700 mb-3">1.1 Due Pilastri Principali</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {/* Primo pilastro */}
                    <div className="bg-white p-4 rounded-lg border-l-4 border-green-500 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <h4 className="font-medium text-green-700 mb-2">Tariffa Incentivante (TIP)</h4>
                      <p className="text-gray-600 text-sm">Contributo in conto esercizio</p>
                      <div className="mt-3 text-xs bg-green-50 p-2 rounded">
                        <span className="font-medium">Caratteristica:</span> Supporto continuativo per 20 anni
                      </div>
                    </div>
                    
                    {/* Secondo pilastro */}
                    <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <h4 className="font-medium text-blue-700 mb-2">Contributo a Fondo Perduto (40%)</h4>
                      <p className="text-gray-600 text-sm">Contributo in conto capitale PNRR</p>
                      <div className="mt-3 text-xs bg-blue-50 p-2 rounded">
                        <span className="font-medium">Caratteristica:</span> Finanziamento iniziale non rimborsabile
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 mt-4">
                    <p className="text-yellow-800"><span className="font-bold">Importante:</span> I due incentivi sono cumulabili e possono essere richiesti contemporaneamente, massimizzando il supporto economico per la CER.</p>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-green-700 mb-3 mt-6">1.2 Gestione GSE</h3>
                  
                  <div className="flex flex-col md:flex-row gap-4 items-start">
                    <div className="bg-white p-4 rounded-lg border border-gray-200 flex-1">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-gray-700">Erogazione tramite Gestore Servizi Energetici</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-gray-700">Piattaforma telematica dedicata</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-gray-700">Monitoraggio e controllo continuo</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 md:w-1/3">
                      <h4 className="font-medium text-gray-700 mb-2 text-center">Contatti GSE</h4>
                      <div className="text-sm text-gray-600 space-y-2">
                        <p className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          info@gse.it
                        </p>
                        <p className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          800.16.16.16
                        </p>
                        <p className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                          </svg>
                          www.gse.it
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Sezione 2: Tariffa Incentivante (TIP) */}
            <div id="section-p2-2" className="scroll-mt-24 mt-8">
              <div 
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
                onClick={() => toggleSection('section-p2-2')}
              >
                <h2 className="text-xl font-bold text-green-800">2. Tariffa Incentivante (TIP)</h2>
                <span className="text-green-600">
                  {activeSection === 'section-p2-2' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              
              {activeSection === 'section-p2-2' && (
                <div className="mt-4 space-y-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-semibold text-green-700 mb-3">2.1 Caratteristiche Generali</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    {/* Card 1 */}
                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex justify-center mb-3">
                        <div className="bg-green-100 p-2 rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                      <h4 className="font-medium text-gray-800 text-center mb-2">Durata</h4>
                      <p className="text-gray-600 text-sm text-center">20 anni dall'entrata in esercizio</p>
                    </div>
                    
                    {/* Card 2 */}
                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex justify-center mb-3">
                        <div className="bg-green-100 p-2 rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                      <h4 className="font-medium text-gray-800 text-center mb-2">Base di calcolo</h4>
                      <p className="text-gray-600 text-sm text-center">Energia elettrica condivisa</p>
                    </div>
                    
                    {/* Card 3 */}
                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex justify-center mb-3">
                        <div className="bg-green-100 p-2 rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                      <h4 className="font-medium text-gray-800 text-center mb-2">Erogazione</h4>
                      <p className="text-gray-600 text-sm text-center">Mensile tramite GSE</p>
                    </div>
                    
                    {/* Card 4 */}
                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex justify-center mb-3">
                        <div className="bg-green-100 p-2 rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                      </div>
                      <h4 className="font-medium text-gray-800 text-center mb-2">Destinatario</h4>
                      <p className="text-gray-600 text-sm text-center">Soggetto Referente della CER</p>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-green-700 mb-3">2.2 Struttura della Tariffa</h3>
                  
                  <p className="text-gray-700 mb-4">Componenti della TIP:</p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="bg-green-100 text-green-800 font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">1</div>
                        <div>
                          <span className="font-medium text-gray-800">Parte fissa:</span>
                          <p className="text-gray-600 text-sm">Determinata in base alla potenza dell'impianto</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 text-green-800 font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">2</div>
                        <div>
                          <span className="font-medium text-gray-800">Parte variabile:</span>
                          <p className="text-gray-600 text-sm">Basata sul prezzo zonale dell'energia (Pz)</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 text-green-800 font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">3</div>
                        <div>
                          <span className="font-medium text-gray-800">Fattore correttivo:</span>
                          <p className="text-gray-600 text-sm">Geografico per impianti fotovoltaici</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-green-700 mb-3">2.3 Calcolo della Tariffa per Potenza</h3>
                  
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                      <thead>
                        <tr className="bg-green-50">
                          <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Taglia Impianto</th>
                          <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Formula di Calcolo</th>
                          <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Valore Massimo</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="hover:bg-gray-50">
                          <td className="py-3 px-4 border-b border-gray-200 font-medium">Impianti &lt; 200 kW</td>
                          <td className="py-3 px-4 border-b border-gray-200 font-mono text-sm">TIP = 80 €/MWh + max(0; 180 €/MWh - Pz)</td>
                          <td className="py-3 px-4 border-b border-gray-200">120 €/MWh</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-3 px-4 border-b border-gray-200 font-medium">Impianti 200-600 kW</td>
                          <td className="py-3 px-4 border-b border-gray-200 font-mono text-sm">TIP = 70 €/MWh + max(0; 180 €/MWh - Pz)</td>
                          <td className="py-3 px-4 border-b border-gray-200">110 €/MWh</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-3 px-4 border-b border-gray-200 font-medium">Impianti &gt; 600 kW</td>
                          <td className="py-3 px-4 border-b border-gray-200 font-mono text-sm">TIP = 60 €/MWh + max(0; 180 €/MWh - Pz)</td>
                          <td className="py-3 px-4 border-b border-gray-200">100 €/MWh</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg mt-4 mb-6">
                    <p className="text-blue-800 text-sm"><span className="font-bold">Nota:</span> Pz rappresenta il prezzo zonale orario dell'energia elettrica. La formula garantisce un incentivo minimo anche quando i prezzi dell'energia sono elevati.</p>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-green-700 mb-3">2.4 Correzioni Geografiche (Solo Fotovoltaico)</h3>
                  
                  <p className="text-gray-700 mb-4">Maggiorazioni regionali:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {/* Nord Italia */}
                    <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                      <h4 className="font-medium text-green-800 mb-2 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                        Nord Italia: +10 €/MWh
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Emilia-Romagna, Friuli-Venezia Giulia, Liguria, Lombardia, Piemonte, Trentino-Alto Adige, Valle d'Aosta, Veneto
                      </p>
                    </div>
                    
                    {/* Centro Italia */}
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                      <h4 className="font-medium text-blue-800 mb-2 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                        </svg>
                        Centro Italia: +4 €/MWh
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Lazio, Marche, Toscana, Umbria, Abruzzo
                      </p>
                    </div>
                    
                    {/* Sud Italia */}
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                      <h4 className="font-medium text-yellow-800 mb-2 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                        Sud Italia: Nessuna maggiorazione
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Basilicata, Calabria, Campania, Molise, Puglia, Sardegna, Sicilia
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
                    <p className="text-yellow-800"><span className="font-bold">Importante:</span> Le maggiorazioni geografiche sono state introdotte per bilanciare la minore producibilità degli impianti fotovoltaici nelle regioni settentrionali e centrali rispetto a quelle meridionali.</p>
                  </div>
                </div>
              )}
            </div>
            
            {/* Sezione 3: Contributo a Fondo Perduto PNRR (40%) */}
            <div id="section-p2-3" className="scroll-mt-24 mt-8">
              <div 
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
                onClick={() => toggleSection('section-p2-3')}
              >
                <h2 className="text-xl font-bold text-green-800">3. Contributo a Fondo Perduto PNRR (40%)</h2>
                <span className="text-green-600">
                  {activeSection === 'section-p2-3' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              
              {activeSection === 'section-p2-3' && (
                <div className="mt-4 space-y-6 p-4 bg-white rounded-lg border border-gray-200">
                  {/* 3.1 Caratteristiche Generali */}
                  <div>
                    <h3 className="text-lg font-semibold text-green-700 mb-3">3.1 Caratteristiche Generali</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      {/* Percentuale */}
                      <div className="bg-green-50 p-4 rounded-lg border border-green-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center mb-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                          </svg>
                          <h4 className="font-semibold text-green-800">Percentuale</h4>
                        </div>
                        <p className="text-gray-700">Fino al 40% dei costi ammissibili</p>
                      </div>
                      
                      {/* Fonte */}
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center mb-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <h4 className="font-semibold text-blue-800">Fonte</h4>
                        </div>
                        <p className="text-gray-700">Finanziamento PNRR (€2,2 miliardi)</p>
                      </div>
                      
                      {/* Finalità */}
                      <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center mb-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          <h4 className="font-semibold text-purple-800">Finalità</h4>
                        </div>
                        <p className="text-gray-700">Realizzazione impianti FER e sistemi accumulo</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* 3.2 Beneficiari Ammessi */}
                  <div className="pt-4 border-t border-gray-100">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">3.2 Beneficiari Ammessi</h3>
                    
                    <div className="bg-white p-4 rounded-lg border border-gray-200 mb-4">
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-gray-700"><span className="font-medium">Inizialmente:</span> Comuni &lt; 5.000 abitanti</p>
                          <p className="text-gray-700"><span className="font-medium">Attualmente:</span> Comuni &lt; 50.000 abitanti <span className="text-sm text-green-600">(ampliamento in attesa pubblicazione)</span></p>
                        </div>
                      </div>
                      
                      <h4 className="font-medium text-gray-800 mb-2">Soggetti beneficiari:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">Comunità Energetiche Rinnovabili</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">Gruppi di Autoconsumatori Collettivi</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">Famiglie, imprese, associazioni, enti pubblici (tramite adesione CER)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* 3.3 Spese Ammissibili */}
                  <div className="pt-4 border-t border-gray-100">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">3.3 Spese Ammissibili</h3>
                    
                    <div className="bg-white p-5 rounded-lg border border-gray-200">
                      <h4 className="font-medium text-gray-800 mb-3">Investimenti coperti:</h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 text-green-500 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-700">Realizzazione impianti a fonti rinnovabili</span>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 text-green-500 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-700">Fornitura e posa sistemi di accumulo</span>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 text-green-500 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-700">Acquisto e installazione macchinari/hardware/software</span>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 text-green-500 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-700">Opere edili strettamente necessarie</span>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 text-green-500 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-700">Connessione alla rete elettrica</span>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 text-green-500 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-700">Studi di prefattibilità e attività preliminari</span>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 text-green-500 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-700">Progettazione e direzione lavori</span>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 text-green-500 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-700">Sicurezza e collaudi</span>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 text-green-500 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-700">Consulenze tecniche e amministrative</span>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 text-green-500 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-700">Spese costituzione configurazioni CER</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* 3.4 Tempistiche Critiche */}
                  <div className="pt-4 border-t border-gray-100">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">3.4 Tempistiche Critiche</h3>
                    
                    <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
                      <div className="flex flex-col space-y-4">
                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium text-amber-800">Scadenza domande</h4>
                            <p className="text-gray-700">31 marzo 2025 <span className="text-sm text-amber-600">(fino ad esaurimento fondi)</span></p>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium text-amber-800">Entrata in esercizio</h4>
                            <p className="text-gray-700">Entro 18 mesi dall'ammissione, max 30 giugno 2026</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium text-amber-800">Domanda rimborso saldo</h4>
                            <p className="text-gray-700">Entro 31 agosto 2026</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium text-amber-800">Richiesta tariffa incentivante</h4>
                            <p className="text-gray-700">Entro 31 agosto 2026</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-red-50 border-l-4 border-red-400 p-4 mt-6">
                      <p className="text-red-800"><span className="font-bold">Attenzione:</span> Il mancato rispetto delle scadenze PNRR comporta la perdita del diritto al contributo. Si consiglia di pianificare con ampio margine temporale.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Sezione 4: Cumulabilità e Riduzioni */}
            <div id="section-p2-4" className="scroll-mt-24 mt-8">
              <div 
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
                onClick={() => toggleSection('section-p2-4')}
              >
                <h2 className="text-xl font-bold text-green-800">4. Cumulabilità e Riduzioni</h2>
                <span className="text-green-600">
                  {activeSection === 'section-p2-4' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              
              {activeSection === 'section-p2-4' && (
                <div className="mt-4 space-y-6 p-4 bg-white rounded-lg border border-gray-200">
                  {/* 4.1 Cumulo tra Incentivi */}
                  <div>
                    <h3 className="text-lg font-semibold text-green-700 mb-3">4.1 Cumulo tra Incentivi</h3>
                    
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 p-5 rounded-lg border border-blue-100 shadow-sm">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium text-blue-800 text-lg">Tariffa Incentivante + Contributo PNRR</h4>
                          <p className="text-gray-700">Pienamente cumulabili</p>
                        </div>
                      </div>
                      
                      <div className="ml-16">
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <p className="text-gray-700"><span className="font-medium">Condizione:</span> Rispetto limiti normativi UE</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* 4.2 Riduzione Tariffa per Cumulo */}
                  <div className="pt-4 border-t border-gray-100">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">4.2 Riduzione Tariffa per Cumulo</h3>
                    
                    <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="font-medium text-gray-800 mb-3">Formula riduzione:</h4>
                      
                      <div className="bg-gray-50 p-4 rounded-lg mb-4">
                        <div className="flex flex-col space-y-2">
                          <p className="text-gray-800 font-mono text-lg">TIP Effettiva = TIP × (1 - F)</p>
                          <p className="text-gray-800 font-mono">F = 0,50 per contributo al 40%</p>
                          <p className="text-gray-700 font-medium">Risultato: TIP ridotta del 50% se si riceve contributo 40%</p>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <h4 className="font-medium text-gray-800 mb-2">Esempio pratico:</h4>
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                          <div className="space-y-2">
                            <p className="text-gray-700"><span className="font-medium">TIP standard:</span> 110 €/MWh</p>
                            <p className="text-gray-700"><span className="font-medium">Con contributo 40%:</span> 110 × (1 - 0,50) = 55 €/MWh</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* 4.3 Esclusioni dalla Riduzione */}
                  <div className="pt-4 border-t border-gray-100">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">4.3 Esclusioni dalla Riduzione</h3>
                    
                    <div className="bg-green-50 p-5 rounded-lg border border-green-100">
                      <p className="text-gray-700 mb-3 font-medium">NON si applica riduzione per energia condivisa da:</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                          <div className="flex-shrink-0 h-6 w-6 text-green-500 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                          <span className="text-gray-700">Enti territoriali e autorità locali</span>
                        </div>
                        
                        <div className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                          <div className="flex-shrink-0 h-6 w-6 text-green-500 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                          <span className="text-gray-700">Enti religiosi</span>
                        </div>
                        
                        <div className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                          <div className="flex-shrink-0 h-6 w-6 text-green-500 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                          <span className="text-gray-700">Enti del terzo settore</span>
                        </div>
                        
                        <div className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                          <div className="flex-shrink-0 h-6 w-6 text-green-500 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                          <span className="text-gray-700">Enti di protezione ambientale</span>
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
                        <p className="text-blue-800"><span className="font-bold">Nota:</span> Questa esenzione dalla riduzione rappresenta un'importante agevolazione per gli enti pubblici e del terzo settore che partecipano alle CER, incentivando il loro ruolo di promotori delle comunità energetiche.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Sezione 5: Procedura di Accesso agli Incentivi */}
            <div id="section-p2-5" className="scroll-mt-24 mt-8">
              <div 
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
                onClick={() => toggleSection('section-p2-5')}
              >
                <h2 className="text-xl font-bold text-green-800">5. Procedura di Accesso agli Incentivi</h2>
                <span className="text-green-600">
                  {activeSection === 'section-p2-5' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              
              {activeSection === 'section-p2-5' && (
                <div className="mt-4 space-y-6 p-4 bg-white rounded-lg border border-gray-200">
                  {/* 5.1 Requisiti Preliminari */}
                  <div>
                    <h3 className="text-lg font-semibold text-green-700 mb-3">5.1 Requisiti Preliminari</h3>
                    
                    <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 shadow-sm">
                      <h4 className="font-medium text-blue-800 mb-4">Prima della domanda:</h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow-sm flex items-start">
                          <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-gray-800 font-medium">CER costituita come soggetto giuridico</p>
                          </div>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg shadow-sm flex items-start">
                          <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-gray-800 font-medium">Impianti autorizzati (se previsto)</p>
                          </div>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg shadow-sm flex items-start">
                          <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-gray-800 font-medium">Preventivo connessione accettato definitivamente</p>
                          </div>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg shadow-sm flex items-start">
                          <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-gray-800 font-medium">Progetto definitivo dell'investimento</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* 5.2 Modalità di Richiesta */}
                  <div className="pt-4 border-t border-gray-100">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">5.2 Modalità di Richiesta</h3>
                    
                    <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="font-medium text-gray-800 mb-4">Accesso esclusivamente telematico:</h4>
                      
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-gray-800"><span className="font-medium">Portale GSE:</span> <a href="https://www.gse.it" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.gse.it</a></p>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-gray-800"><span className="font-medium">Applicazione:</span> "Sistemi di Produzione e Consumo – SPC"</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-gray-800"><span className="font-medium">Autenticazione:</span> SPID/CIE</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-gray-800"><span className="font-medium">Modalità:</span> Domande a sportello</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* 5.3 Regola Fondamentale PNRR */}
                  <div className="pt-4 border-t border-gray-100">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">5.3 Regola Fondamentale PNRR</h3>
                    
                    <div className="bg-amber-50 p-5 rounded-lg border border-amber-200 shadow-sm">
                      <div className="flex items-center mb-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                        </div>
                        <p className="text-amber-800 font-bold text-lg">CRITICO: L'avvio dei lavori deve essere successivo alla presentazione della domanda di contributo</p>
                      </div>
                      
                      <div className="space-y-3 ml-14">
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          <p className="text-gray-800"><span className="font-medium">Spese ante-domanda:</span> NON ammissibili</p>
                        </div>
                        
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <p className="text-gray-800"><span className="font-medium">Pagamenti:</span> Solo dopo approvazione GSE</p>
                        </div>
                        
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <p className="text-gray-800"><span className="font-medium">Tracciabilità:</span> Bonifici bancari obbligatori</p>
                        </div>
                      </div>
                      
                      <div className="bg-white border-l-4 border-amber-500 p-4 mt-6">
                        <p className="text-gray-700"><span className="font-bold">Attenzione:</span> Il mancato rispetto di queste regole comporta la perdita totale del contributo. È essenziale pianificare attentamente le tempistiche di presentazione della domanda e di avvio dei lavori.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Sezione 6: Anticipazione del Contributo */}
            <div id="section-p2-6" className="scroll-mt-24 mt-8">
              <div 
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
                onClick={() => toggleSection('section-p2-6')}
              >
                <h2 className="text-xl font-bold text-green-800">6. Anticipazione del Contributo</h2>
                <span className="text-green-600">
                  {activeSection === 'section-p2-6' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              
              {activeSection === 'section-p2-6' && (
                <div className="mt-4 space-y-6 p-4 bg-white rounded-lg border border-gray-200">
                  {/* 6.1 Possibilità di Anticipo */}
                  <div>
                    <h3 className="text-lg font-semibold text-green-700 mb-3">6.1 Possibilità di Anticipo</h3>
                    
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 p-5 rounded-lg border border-blue-100 shadow-sm">
                      <div className="flex flex-col md:flex-row md:items-center gap-6">
                        <div className="flex-shrink-0 w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto md:mx-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        
                        <div className="flex-1 space-y-4">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                              </svg>
                            </div>
                            <p className="text-gray-800"><span className="font-medium">Percentuale:</span> Fino al 10% del contributo massimo erogabile</p>
                          </div>
                          
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                            </div>
                            <p className="text-gray-800"><span className="font-medium">Destinatari:</span> Soggetti beneficiari di natura privata</p>
                          </div>
                          
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                              </svg>
                            </div>
                            <p className="text-gray-800"><span className="font-medium">Modalità:</span> Richiesta tramite portale GSE</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* 6.2 Garanzie Richieste */}
                  <div className="pt-4 border-t border-gray-100">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">6.2 Garanzie Richieste</h3>
                    
                    <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="font-medium text-gray-800 mb-4">Per ottenere l'anticipo:</h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
                          <div className="flex items-start">
                            <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                              </svg>
                            </div>
                            <div>
                              <p className="text-gray-800 font-medium mb-1">Fideiussione</p>
                              <p className="text-gray-700">100% dell'importo anticipato</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
                          <div className="flex items-start">
                            <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m-6-8h6M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" />
                              </svg>
                            </div>
                            <div>
                              <p className="text-gray-800 font-medium mb-1">Tipologie</p>
                              <p className="text-gray-700">Bancaria o assicurativa</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-medium text-gray-800 mb-2">Caratteristiche della fideiussione:</h5>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            <li>Autonoma</li>
                            <li>Irrevocabile</li>
                            <li>Incondizionata</li>
                            <li>Escutibile a prima richiesta</li>
                          </ul>
                        </div>
                        
                        <div className="flex items-center bg-blue-50 p-4 rounded-lg border border-blue-100">
                          <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-gray-800"><span className="font-medium">Conto dedicato:</span> Per tracciabilità pagamenti</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-6">
                        <p className="text-gray-700"><span className="font-bold">Suggerimento:</span> La possibilità di anticipo rappresenta un'importante opportunità di liquidità iniziale, particolarmente utile per le PMI e le realtà con minore capacità finanziaria. Valutate attentamente i costi della fideiussione rispetto al beneficio dell'anticipo.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Sezione 7: Altre Agevolazioni Cumulabili */}
            <div id="section-p2-7" className="scroll-mt-24 mt-8">
              <div 
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
                onClick={() => toggleSection('section-p2-7')}
              >
                <h2 className="text-xl font-bold text-green-800">7. Altre Agevolazioni Cumulabili</h2>
                <span className="text-green-600">
                  {activeSection === 'section-p2-7' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              
              {activeSection === 'section-p2-7' && (
                <div className="mt-4 space-y-6 p-4 bg-white rounded-lg border border-gray-200">
                  {/* 7.1 Agevolazioni Fiscali */}
                  <div>
                    <h3 className="text-lg font-semibold text-green-700 mb-3">7.1 Agevolazioni Fiscali</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Per persone fisiche */}
                      <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 shadow-sm">
                        <div className="flex items-center mb-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <h4 className="text-blue-800 font-medium text-lg">Per persone fisiche</h4>
                        </div>
                        
                        <div className="space-y-3 ml-14">
                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-gray-700"><span className="font-medium">Detrazione 50%:</span> Realizzazione impianti fotovoltaici</p>
                          </div>
                          
                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-gray-700"><span className="font-medium">Limite:</span> €96.000 per abitazione</p>
                          </div>
                          
                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <p className="text-gray-700"><span className="font-medium">Cumulabilità:</span> Con tariffa premio CER</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Per imprese */}
                      <div className="bg-green-50 p-5 rounded-lg border border-green-100 shadow-sm">
                        <div className="flex items-center mb-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                          </div>
                          <h4 className="text-green-800 font-medium text-lg">Per imprese</h4>
                        </div>
                        
                        <div className="space-y-3 ml-14">
                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-gray-700"><span className="font-medium">Credito d'imposta:</span> Secondo normative vigenti</p>
                          </div>
                          
                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-gray-700"><span className="font-medium">Transizione 4.0/5.0:</span> Se compatibili</p>
                          </div>
                        </div>
                        
                        <div className="bg-white border-l-4 border-green-500 p-4 mt-6">
                          <p className="text-gray-700"><span className="font-bold">Nota:</span> Gli incentivi Transizione 5.0 possono essere particolarmente vantaggiosi per le imprese che investono in impianti fotovoltaici nell'ambito di un progetto di efficientamento energetico complessivo.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* 7.2 Scambio Sul Posto */}
                  <div className="pt-4 border-t border-gray-100">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">7.2 Scambio Sul Posto</h3>
                    
                    <div className="bg-amber-50 p-5 rounded-lg border border-amber-200 shadow-sm">
                      <div className="flex items-center mb-5">
                        <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-amber-800 font-medium text-lg">Incompatibilità con CER</h4>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          <p className="text-gray-700"><span className="font-medium">NON cumulabile:</span> Con partecipazione CER per stessa utenza</p>
                        </div>
                        
                        <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                          </svg>
                          <p className="text-gray-700"><span className="font-medium">Scelta:</span> O SSP O CER per ogni POD</p>
                        </div>
                      </div>
                      
                      <div className="bg-white border-l-4 border-amber-500 p-4 mt-6">
                        <p className="text-gray-700"><span className="font-bold">Importante:</span> Prima di aderire a una CER, valutate attentamente la convenienza economica rispetto al regime di Scambio Sul Posto. La scelta dipende da diversi fattori, tra cui la dimensione dell'impianto, il profilo di consumo e la possibilità di condividere energia con altri membri della comunità.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Sezione 8: Gestione e Ripartizione Economica */}
            <div id="section-p2-8" className="scroll-mt-24 mt-8">
              <div 
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
                onClick={() => toggleSection('section-p2-8')}
              >
                <h2 className="text-xl font-bold text-green-800">8. Gestione e Ripartizione Economica</h2>
                <span className="text-green-600">
                  {activeSection === 'section-p2-8' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              
              {activeSection === 'section-p2-8' && (
                <div className="mt-4 space-y-6 p-4 bg-white rounded-lg border border-gray-200">
                  {/* 8.1 Erogazione GSE */}
                  <div>
                    <h3 className="text-lg font-semibold text-green-700 mb-3">8.1 Erogazione GSE</h3>
                    
                    <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 shadow-sm">
                      <div className="flex items-center mb-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <h4 className="text-blue-800 font-medium text-lg">Modalità di Erogazione</h4>
                      </div>
                      
                      <div className="space-y-4 ml-2">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-10 w-10 bg-white rounded-full flex items-center justify-center mr-3 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-gray-700"><span className="font-medium">Destinatario:</span> Soggetto Referente della CER</p>
                            <p className="text-gray-600 text-sm mt-1">Il GSE eroga tutti gli incentivi al Referente della CER, che poi li distribuisce ai membri</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-10 w-10 bg-white rounded-full flex items-center justify-center mr-3 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-gray-700"><span className="font-medium">Frequenza:</span> Mensile per tariffa incentivante</p>
                            <p className="text-gray-600 text-sm mt-1">Gli incentivi vengono calcolati ed erogati ogni mese in base all'energia condivisa</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-10 w-10 bg-white rounded-full flex items-center justify-center mr-3 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-gray-700"><span className="font-medium">Base:</span> Energia condivisa quantificata da GSE</p>
                            <p className="text-gray-600 text-sm mt-1">Il calcolo si basa sui dati di misura validati dai distributori locali</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* 8.2 Ripartizione Interna */}
                  <div className="pt-4 border-t border-gray-100">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">8.2 Ripartizione Interna</h3>
                    
                    <p className="text-gray-700 mb-4">Definita da statuto/regolamento CER:</p>
                    
                    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 border-b border-gray-200">
                        <h4 className="font-medium text-gray-800">Esempio di ripartizione (119 €/MWh totali)</h4>
                      </div>
                      
                      <div className="divide-y divide-gray-200">
                        <div className="flex items-center p-4 hover:bg-gray-50">
                          <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                          <div className="flex-grow">
                            <p className="text-gray-700"><span className="font-medium">Referente/Gestore:</span> 25 €/MWh (21%)</p>
                          </div>
                          <div className="text-gray-600">
                            <p>Costi amministrativi</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center p-4 hover:bg-gray-50">
                          <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <div className="flex-grow">
                            <p className="text-gray-700"><span className="font-medium">Prosumer:</span> 45 €/MWh (38%)</p>
                          </div>
                          <div className="text-gray-600">
                            <p>Chi produce energia</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center p-4 hover:bg-gray-50">
                          <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                          </div>
                          <div className="flex-grow">
                            <p className="text-gray-700"><span className="font-medium">Consumer:</span> 49 €/MWh (41%)</p>
                          </div>
                          <div className="text-gray-600">
                            <p>Chi consuma energia condivisa</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white border-l-4 border-blue-500 p-4 mt-6">
                      <p className="text-gray-700"><span className="font-bold">Nota:</span> La ripartizione è personalizzabile e deve essere definita nello statuto o nel regolamento interno della CER. L'esempio riportato è solo indicativo e può essere adattato alle specifiche esigenze della comunità.</p>
                    </div>
                  </div>
                  
                  {/* 8.3 Ulteriori Benefici Prosumer */}
                  <div className="pt-4 border-t border-gray-100">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">8.3 Ulteriori Benefici Prosumer</h3>
                    
                    <div className="bg-gradient-to-r from-green-50 to-green-100 p-5 rounded-lg border border-green-200 shadow-sm">
                      <h4 className="text-green-800 font-medium text-lg mb-4">Oltre quota incentivo CER:</h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex items-center mb-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <h5 className="font-medium text-gray-800">Remunerazione</h5>
                          </div>
                          <p className="text-gray-700 text-sm">Energia immessa a prezzo zonale orario</p>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex items-center mb-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                            </div>
                            <h5 className="font-medium text-gray-800">Risparmio</h5>
                          </div>
                          <p className="text-gray-700 text-sm">Autoconsumo diretto istantaneo</p>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex items-center mb-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            </div>
                            <h5 className="font-medium text-gray-800">Gestione</h5>
                          </div>
                          <p className="text-gray-700 text-sm">Tramite Ritiro Dedicato GSE</p>
                        </div>
                      </div>
                      
                      <div className="mt-6 bg-white p-4 rounded-lg border border-green-100">
                        <p className="text-gray-700"><span className="font-bold">Suggerimento:</span> I prosumer possono ottimizzare i ricavi combinando l'incentivo CER con la valorizzazione dell'energia immessa in rete. È consigliabile valutare attentamente il dimensionamento dell'impianto in base ai consumi della comunità per massimizzare i benefici economici.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Sezione 9: Controlli e Verifiche */}
            <div id="section-p2-9" className="scroll-mt-24 mt-8">
              <div 
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
                onClick={() => toggleSection('section-p2-9')}
              >
                <h2 className="text-xl font-bold text-green-800">9. Controlli e Verifiche</h2>
                <span className="text-green-600">
                  {activeSection === 'section-p2-9' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              
              {activeSection === 'section-p2-9' && (
                <div className="mt-4 space-y-6 p-4 bg-white rounded-lg border border-gray-200">
                  {/* 9.1 Monitoraggio GSE */}
                  <div>
                    <h3 className="text-lg font-semibold text-green-700 mb-3">9.1 Monitoraggio GSE</h3>
                    
                    <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 shadow-sm">
                      <div className="flex items-center mb-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                          </svg>
                        </div>
                        <h4 className="text-blue-800 font-medium text-lg">Attività di Controllo</h4>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex items-center mb-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </div>
                            <h5 className="font-medium text-gray-800">Verifiche documentali</h5>
                          </div>
                          <p className="text-gray-700 text-sm">Periodiche, sulla documentazione tecnica e amministrativa</p>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex items-center mb-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                              </svg>
                            </div>
                            <h5 className="font-medium text-gray-800">Sopralluoghi</h5>
                          </div>
                          <p className="text-gray-700 text-sm">Anche senza preavviso, per verificare la conformità degli impianti</p>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex items-center mb-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                              </svg>
                            </div>
                            <h5 className="font-medium text-gray-800">Controllo misure</h5>
                          </div>
                          <p className="text-gray-700 text-sm">Energia prodotta e condivisa, verifica dei contatori</p>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex items-center mb-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                              </svg>
                            </div>
                            <h5 className="font-medium text-gray-800">Audit PNRR</h5>
                          </div>
                          <p className="text-gray-700 text-sm">Controlli specifici per contributi a fondo perduto</p>
                        </div>
                      </div>
                      
                      <div className="bg-white border-l-4 border-blue-500 p-4 mt-6">
                        <p className="text-gray-700"><span className="font-bold">Importante:</span> Tutti i documenti relativi all'impianto e alla CER devono essere conservati per almeno 5 anni dalla data di erogazione dell'ultimo incentivo, per consentire eventuali verifiche da parte del GSE.</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* 9.2 Sanzioni e Decadenza */}
                  <div className="pt-4 border-t border-gray-100">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">9.2 Sanzioni e Decadenza</h3>
                    
                    <div className="bg-red-50 p-5 rounded-lg border border-red-100 shadow-sm">
                      <div className="flex items-center mb-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                        </div>
                        <h4 className="text-red-800 font-medium text-lg">Cause di decadenza</h4>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          <p className="text-gray-700">Perdita requisiti ammissibilità</p>
                        </div>
                        
                        <div className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          <p className="text-gray-700">Dichiarazioni mendaci</p>
                        </div>
                        
                        <div className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          <p className="text-gray-700">Manomissione strumenti misura</p>
                        </div>
                        
                        <div className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          <p className="text-gray-700">Violazione obblighi PNRR</p>
                        </div>
                        
                        <div className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          <p className="text-gray-700">Comportamento ostativo verso controlli</p>
                        </div>
                      </div>
                      
                      <div className="bg-white border-l-4 border-red-500 p-4 mt-6">
                        <p className="text-gray-700"><span className="font-bold">Attenzione:</span> La decadenza dal diritto agli incentivi comporta la restituzione di quanto percepito, maggiorato degli interessi legali. In caso di contributo PNRR, la decadenza può comportare anche ulteriori sanzioni previste dalla normativa europea.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Sezione 10: Best Practices Economiche */}
            <div id="section-p2-10" className="scroll-mt-24 mt-8">
              <div 
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
                onClick={() => toggleSection('section-p2-10')}
              >
                <h2 className="text-xl font-bold text-green-800">10. Best Practices Economiche</h2>
                <span className="text-green-600">
                  {activeSection === 'section-p2-10' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              
              {activeSection === 'section-p2-10' && (
                <div className="mt-4 space-y-6 p-4 bg-white rounded-lg border border-gray-200">
                  {/* 10.1 Ottimizzazione Incentivi */}
                  <div>
                    <h3 className="text-lg font-semibold text-green-700 mb-3">10.1 Ottimizzazione Incentivi</h3>
                    
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 p-5 rounded-lg border border-green-100 shadow-sm">
                      <div className="flex items-center mb-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        </div>
                        <h4 className="text-green-800 font-medium text-lg">Strategie di Massimizzazione</h4>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex items-center mb-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <h5 className="font-medium text-gray-800">Massimizzare energia condivisa</h5>
                          </div>
                          <p className="text-gray-700 text-sm">Aumentare il numero di membri consumer per assorbire l'energia prodotta e massimizzare l'energia condivisa all'interno della CER.</p>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex items-center mb-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                              </svg>
                            </div>
                            <h5 className="font-medium text-gray-800">Bilanciare produzione e consumo</h5>
                          </div>
                          <p className="text-gray-700 text-sm">Dimensionare correttamente gli impianti in base ai profili di consumo della comunità per ottimizzare l'autoconsumo collettivo.</p>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex items-center mb-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <h5 className="font-medium text-gray-800">Coordinare profili di utilizzo</h5>
                          </div>
                          <p className="text-gray-700 text-sm">Pianificare i consumi energetici dei membri in base alla disponibilità di energia prodotta dagli impianti della CER.</p>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex items-center mb-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                              </svg>
                            </div>
                            <h5 className="font-medium text-gray-800">Gestire sistemi di accumulo</h5>
                          </div>
                          <p className="text-gray-700 text-sm">Utilizzare batterie di accumulo per immagazzinare l'energia in eccesso e rilasciarla quando necessario, aumentando l'autoconsumo.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* 10.2 Gestione Finanziaria */}
                  <div className="pt-4 border-t border-gray-100">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">10.2 Gestione Finanziaria</h3>
                    
                    <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 shadow-sm">
                      <div className="flex items-center mb-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <h4 className="text-blue-800 font-medium text-lg">Principi di Buona Gestione</h4>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <p className="text-gray-700">Definire chiaramente ripartizione benefici</p>
                        </div>
                        
                        <div className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                          <p className="text-gray-700">Evitare percentuali eccessive per gestori esterni (&gt;10-15%)</p>
                          </div>
                        
                        <div className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          <p className="text-gray-700">Documentare tutti i flussi finanziari</p>
                        </div>
                        
                        <div className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          <p className="text-gray-700">Mantenere trasparenza verso membri</p>
                        </div>
                      </div>
                      
                      <div className="bg-white border-l-4 border-blue-500 p-4 mt-6">
                        <p className="text-gray-700"><span className="font-bold">Consiglio:</span> Predisporre un rendiconto periodico (almeno trimestrale) da condividere con tutti i membri della CER, che mostri chiaramente i flussi economici, gli incentivi ricevuti e la loro ripartizione.</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* 10.3 Conformità Normativa */}
                  <div className="pt-4 border-t border-gray-100">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">10.3 Conformità Normativa</h3>
                    
                    <div className="bg-amber-50 p-5 rounded-lg border border-amber-100 shadow-sm">
                      <div className="flex items-center mb-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <h4 className="text-amber-800 font-medium text-lg">Requisiti di Compliance</h4>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex items-center mb-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <h5 className="font-medium text-gray-800">Rispettare principio DNSH</h5>
                          </div>
                          <p className="text-gray-700 text-sm">Garantire che tutte le attività rispettino il principio "Do No Significant Harm" (non arrecare danno significativo all'ambiente).</p>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex items-center mb-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                              </svg>
                            </div>
                            <h5 className="font-medium text-gray-800">Utilizzare CIG e CUP per spese PNRR</h5>
                          </div>
                          <p className="text-gray-700 text-sm">Riportare i codici CIG (Codice Identificativo Gara) e CUP (Codice Unico di Progetto) su tutta la documentazione relativa alle spese finanziate dal PNRR.</p>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex items-center mb-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                              </svg>
                            </div>
                            <h5 className="font-medium text-gray-800">Tracciare tutti i pagamenti</h5>
                          </div>
                          <p className="text-gray-700 text-sm">Utilizzare strumenti di pagamento tracciabili (bonifici, carte) per tutte le transazioni relative alla CER.</p>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex items-center mb-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                              </svg>
                            </div>
                            <h5 className="font-medium text-gray-800">Conservare documentazione</h5>
                          </div>
                          <p className="text-gray-700 text-sm">Archiviare in modo ordinato tutta la documentazione tecnica, amministrativa e contabile per eventuali controlli.</p>
                        </div>
                      </div>
                      
                      <div className="bg-white border-l-4 border-amber-500 p-4 mt-6">
                        <p className="text-gray-700"><span className="font-bold">Attenzione:</span> La conformità normativa è particolarmente importante per le CER che beneficiano di contributi PNRR, in quanto soggette a controlli più rigorosi e frequenti da parte delle autorità nazionali ed europee.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Titolo Parte 3 */}
            <div className="mt-16 mb-6">
              <h2 className="text-2xl font-bold text-green-800 border-b-2 border-green-500 pb-2">Parte 3: Procedura di Costituzione e Accesso agli Incentivi</h2>
            </div>
            
            {/* Sezione 1: Fasi di Costituzione di una CER */}
            <div id="section-p3-1" className="scroll-mt-24 mt-8">
              <div 
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
                onClick={() => toggleSection('section-p3-1')}
              >
                <h2 className="text-xl font-bold text-green-800">1. Fasi di Costituzione di una CER</h2>
                <span className="text-green-600">
                  {activeSection === 'section-p3-1' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              
              {activeSection === 'section-p3-1' && (
                <div className="mt-4 space-y-6 p-4 bg-white rounded-lg border border-gray-200">
                  {/* 1.1 Panoramica del Processo */}
                  <div>
                    <h3 className="text-lg font-semibold text-green-700 mb-3">1.1 Panoramica del Processo</h3>
                    
                    <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 shadow-sm">
                      <p className="text-gray-700 mb-4">La costituzione di una CER richiede un approccio strutturato in 10 fasi principali, dalla valutazione preliminare alla richiesta degli incentivi.</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex items-center mb-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                              <span className="text-blue-600 font-bold">1</span>
                            </div>
                            <h5 className="font-medium text-gray-800">Analisi preliminare</h5>
                          </div>
                          <p className="text-gray-600 text-sm">Valutazione del territorio e dei potenziali membri</p>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex items-center mb-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                              <span className="text-blue-600 font-bold">2</span>
                            </div>
                            <h5 className="font-medium text-gray-800">Coinvolgimento stakeholder</h5>
                          </div>
                          <p className="text-gray-600 text-sm">Incontri informativi e raccolta adesioni</p>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex items-center mb-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                              <span className="text-blue-600 font-bold">3</span>
                            </div>
                            <h5 className="font-medium text-gray-800">Studio di fattibilità</h5>
                          </div>
                          <p className="text-gray-600 text-sm">Analisi tecnico-economica degli impianti</p>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex items-center mb-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                              <span className="text-blue-600 font-bold">4</span>
                            </div>
                            <h5 className="font-medium text-gray-800">Costituzione formale</h5>
                          </div>
                          <p className="text-gray-600 text-sm">Redazione statuto e atto costitutivo</p>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex items-center mb-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                              <span className="text-blue-600 font-bold">5</span>
                            </div>
                            <h5 className="font-medium text-gray-800">Progettazione impianti</h5>
                          </div>
                          <p className="text-gray-600 text-sm">Dimensionamento e localizzazione</p>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex items-center mb-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                              <span className="text-blue-600 font-bold">6</span>
                            </div>
                            <h5 className="font-medium text-gray-800">Autorizzazioni</h5>
                          </div>
                          <p className="text-gray-600 text-sm">Permessi edilizi e connessione alla rete</p>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex items-center mb-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                              <span className="text-blue-600 font-bold">7</span>
                            </div>
                            <h5 className="font-medium text-gray-800">Finanziamento</h5>
                          </div>
                          <p className="text-gray-600 text-sm">Reperimento risorse e richiesta contributi</p>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex items-center mb-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                              <span className="text-blue-600 font-bold">8</span>
                            </div>
                            <h5 className="font-medium text-gray-800">Realizzazione</h5>
                          </div>
                          <p className="text-gray-600 text-sm">Costruzione e collaudo degli impianti</p>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex items-center mb-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                              <span className="text-blue-600 font-bold">9</span>
                            </div>
                            <h5 className="font-medium text-gray-800">Qualifica GSE</h5>
                          </div>
                          <p className="text-gray-600 text-sm">Registrazione e qualifica della CER</p>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex items-center mb-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                              <span className="text-blue-600 font-bold">10</span>
                            </div>
                            <h5 className="font-medium text-gray-800">Operatività</h5>
                          </div>
                          <p className="text-gray-600 text-sm">Gestione e monitoraggio continuo</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* 1.2 Timeline Generale */}
                  <div className="pt-4 border-t border-gray-100">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">1.2 Timeline Generale</h3>
                    
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 p-5 rounded-lg border border-green-100 shadow-sm">
                      <div className="flex items-center mb-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <h4 className="text-green-800 font-medium text-lg">Tempistiche Indicative</h4>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex-shrink-0 w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-800 text-lg">Fase preparatoria</h5>
                            <p className="text-gray-600">2-6 mesi</p>
                            <p className="text-gray-500 text-sm mt-1">Analisi, coinvolgimento, studio di fattibilità</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-800 text-lg">Costituzione</h5>
                            <p className="text-gray-600">1-2 mesi</p>
                            <p className="text-gray-500 text-sm mt-1">Redazione statuto, atto costitutivo, registrazione</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex-shrink-0 w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-800 text-lg">Autorizzazioni</h5>
                            <p className="text-gray-600">3-12 mesi</p>
                            <p className="text-gray-500 text-sm mt-1">Permessi edilizi, ambientali, connessione rete</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-800 text-lg">Realizzazione</h5>
                            <p className="text-gray-600">6-18 mesi</p>
                            <p className="text-gray-500 text-sm mt-1">Costruzione impianti, installazione, collaudo</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex-shrink-0 w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-800 text-lg">Accesso incentivi</h5>
                            <p className="text-gray-600">2-3 mesi</p>
                            <p className="text-gray-500 text-sm mt-1">Qualifica GSE, richiesta tariffa e contributi</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white border-l-4 border-green-500 p-4 mt-6">
                        <p className="text-gray-700"><span className="font-bold">Nota:</span> Le tempistiche possono variare significativamente in base alla complessità del progetto, alla localizzazione geografica e alle procedure amministrative locali. È consigliabile prevedere margini di sicurezza nella pianificazione.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Sezione 2: FASE 1: Analisi Preliminare */}
            <div id="section-p3-2" className="scroll-mt-24 mt-8">
              <div 
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
                onClick={() => toggleSection('section-p3-2')}
              >
                <h2 className="text-xl font-bold text-green-800">2. FASE 1: Analisi Preliminare</h2>
                <span className="text-green-600">
                  {activeSection === 'section-p3-2' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              
              {activeSection === 'section-p3-2' && (
                <div className="mt-4 space-y-6 p-4 bg-white rounded-lg border border-gray-200">
                  {/* 2.1 Individuazione del Bacino di Utenti */}
                  <div>
                    <h3 className="text-lg font-semibold text-green-700 mb-3">2.1 Individuazione del Bacino di Utenti</h3>
                    
                    <div className="bg-amber-50 p-5 rounded-lg border border-amber-100 shadow-sm">
                      <div className="flex items-center mb-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <h4 className="text-amber-800 font-medium text-lg">Mappatura territoriale</h4>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex items-start">
                            <div className="bg-amber-100 text-amber-800 font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">1</div>
                            <div>
                              <h5 className="font-medium text-gray-800">Identificazione area geografica</h5>
                              <p className="text-gray-600 text-sm">Definizione dell'area servita dalla cabina primaria di riferimento</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex items-start">
                            <div className="bg-amber-100 text-amber-800 font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">2</div>
                            <div>
                              <h5 className="font-medium text-gray-800">Censimento potenziali membri</h5>
                              <p className="text-gray-600 text-sm">Individuazione di cittadini, imprese, enti pubblici e altri soggetti interessati</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex items-start">
                            <div className="bg-amber-100 text-amber-800 font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">3</div>
                            <div>
                              <h5 className="font-medium text-gray-800">Valutazione fabbisogni energetici</h5>
                              <p className="text-gray-600 text-sm">Raccolta dati sui consumi energetici annuali e stagionali</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex items-start">
                            <div className="bg-amber-100 text-amber-800 font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">4</div>
                            <div>
                              <h5 className="font-medium text-gray-800">Analisi profili di consumo</h5>
                              <p className="text-gray-600 text-sm">Studio delle curve di carico giornaliere e stagionali dei potenziali membri</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white border-l-4 border-amber-500 p-4 mt-6">
                        <p className="text-gray-700"><span className="font-bold">Suggerimento:</span> Utilizzare i dati di consumo storici disponibili nelle bollette elettriche o richiedere al distributore locale i profili di prelievo per un'analisi più accurata.</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* 2.2 Studio di Fattibilità */}
                  <div className="pt-4 border-t border-gray-100">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">2.2 Studio di Fattibilità</h3>
                    
                    <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 shadow-sm">
                      <div className="flex items-center mb-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <h4 className="text-blue-800 font-medium text-lg">Analisi tecnico-economica</h4>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <h5 className="font-medium text-gray-800 mb-2">Potenziale energetico rinnovabile locale</h5>
                          <div className="flex items-center space-x-2 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                            <p className="text-gray-600 text-sm">Valutazione dell'irraggiamento solare e disponibilità di superfici</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-gray-600 text-sm">Analisi di altre fonti rinnovabili disponibili (eolico, idroelettrico, biomasse)</p>
                          </div>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <h5 className="font-medium text-gray-800 mb-2">Bilancio produzione/consumo previsto</h5>
                          <div className="flex items-center space-x-2 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            <p className="text-gray-600 text-sm">Stima della produzione energetica annuale e stagionale</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                            </svg>
                            <p className="text-gray-600 text-sm">Confronto con i consumi previsti e calcolo dell'energia condivisa</p>
                          </div>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <h5 className="font-medium text-gray-800 mb-2">Valutazione economica investimenti</h5>
                          <div className="flex items-center space-x-2 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-gray-600 text-sm">Stima dei costi di investimento per gli impianti</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                            <p className="text-gray-600 text-sm">Analisi dei costi operativi e di gestione</p>
                          </div>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <h5 className="font-medium text-gray-800 mb-2">Stima benefici per partecipanti</h5>
                          <div className="flex items-center space-x-2 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                            </svg>
                            <p className="text-gray-600 text-sm">Calcolo degli incentivi attesi per l'energia condivisa</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <p className="text-gray-600 text-sm">Stima del risparmio in bolletta per i consumatori</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* 2.3 Verifica Cabina Primaria */}
                  <div className="pt-4 border-t border-gray-100">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">2.3 Verifica Cabina Primaria</h3>
                    
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                      <div className="flex items-center mb-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                          </svg>
                        </div>
                        <h4 className="text-gray-800 font-medium text-lg">Controllo infrastrutture</h4>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex">
                            <div className="flex-shrink-0">
                              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                                <span className="text-gray-600 font-bold">1</span>
                              </div>
                            </div>
                            <div className="ml-4">
                              <h5 className="font-medium text-gray-800">Identificazione cabina primaria di riferimento</h5>
                              <p className="text-gray-600 text-sm mt-1">Individuazione della cabina AT/MT che serve l'area geografica di interesse</p>
                              <div className="mt-2 p-2 bg-gray-50 rounded border border-gray-200">
                                <p className="text-xs text-gray-500">Consultare il gestore della rete di distribuzione locale per ottenere informazioni sulla cabina primaria</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex">
                            <div className="flex-shrink-0">
                              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                                <span className="text-gray-600 font-bold">2</span>
                              </div>
                            </div>
                            <div className="ml-4">
                              <h5 className="font-medium text-gray-800">Mappatura tutti i POD nell'area</h5>
                              <p className="text-gray-600 text-sm mt-1">Identificazione di tutti i punti di prelievo (POD) connessi alla cabina primaria</p>
                              <div className="mt-2 p-2 bg-gray-50 rounded border border-gray-200">
                                <p className="text-xs text-gray-500">Ogni membro della CER dovrà fornire il proprio codice POD per verificare l'appartenenza alla stessa cabina</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex">
                            <div className="flex-shrink-0">
                              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                                <span className="text-gray-600 font-bold">3</span>
                              </div>
                            </div>
                            <div className="ml-4">
                              <h5 className="font-medium text-gray-800">Verifica disponibilità connessione</h5>
                              <p className="text-gray-600 text-sm mt-1">Controllo della capacità della rete di accogliere nuovi impianti di produzione</p>
                              <div className="mt-2 p-2 bg-gray-50 rounded border border-gray-200">
                                <p className="text-xs text-gray-500">Richiedere al gestore della rete un preventivo di connessione per valutare costi e tempistiche</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex">
                            <div className="flex-shrink-0">
                              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                                <span className="text-gray-600 font-bold">4</span>
                              </div>
                            </div>
                            <div className="ml-4">
                              <h5 className="font-medium text-gray-800">Valutazione vincoli tecnici</h5>
                              <p className="text-gray-600 text-sm mt-1">Analisi di eventuali limitazioni tecniche alla connessione degli impianti</p>
                              <div className="mt-2 p-2 bg-gray-50 rounded border border-gray-200">
                                <p className="text-xs text-gray-500">Considerare potenziali upgrade della rete necessari e relativi costi aggiuntivi</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
                        <p className="text-yellow-800"><span className="font-bold">Importante:</span> La verifica dell'appartenenza alla stessa cabina primaria è un requisito fondamentale per la costituzione di una CER secondo la normativa vigente. Tutti i membri devono essere connessi alla stessa cabina primaria.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Sezione 3: FASE 2: Pianificazione Impianti */}
              <div id="section-p3-3" className="scroll-mt-24 mt-8">
                <div
                  onClick={() => toggleSection('section-p3-3')}
                  className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <h2 className="text-xl font-bold text-green-800">3. FASE 2: Pianificazione Impianti</h2>
                  <span className="text-green-600">
                    {activeSection === 'section-p3-3' ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </span>
                </div>

                {activeSection === 'section-p3-3' && (
                  <div className="mt-4 space-y-6 p-4 bg-white rounded-lg border border-gray-200">
                    {/* 3.1 Individuazione Siti Produttivi */}
                    <div>
                      <h3 className="text-lg font-semibold text-green-700 mb-3">3.1 Individuazione Siti Produttivi</h3>
                      <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 shadow-sm">
                        <p className="text-gray-700 mb-4">La scelta dei siti per l'installazione degli impianti di produzione è un passaggio cruciale che richiede un'attenta valutazione dei seguenti criteri:</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="flex items-center mb-2">
                              <div className="flex-shrink-0 text-blue-500 mr-3">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                                </svg>
                              </div>
                              <h5 className="font-medium text-gray-800">Disponibilità superfici adeguate</h5>
                            </div>
                            <p className="text-gray-600 text-sm ml-9">Valutazione delle aree disponibili in termini di dimensioni, proprietà e accessibilità per l'installazione degli impianti.</p>
                          </div>
                          
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="flex items-center mb-2">
                              <div className="flex-shrink-0 text-yellow-500 mr-3">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                                </svg>
                              </div>
                              <h5 className="font-medium text-gray-800">Esposizione ottimale (per fotovoltaico)</h5>
                            </div>
                            <p className="text-gray-600 text-sm ml-9">Analisi dell'orientamento, inclinazione e assenza di ombreggiamenti per massimizzare la produzione energetica.</p>
                          </div>
                          
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="flex items-center mb-2">
                              <div className="flex-shrink-0 text-green-500 mr-3">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                                </svg>
                              </div>
                              <h5 className="font-medium text-gray-800">Accessibilità per installazione e manutenzione</h5>
                            </div>
                            <p className="text-gray-600 text-sm ml-9">Verifica delle condizioni di accesso per mezzi e personale durante le fasi di installazione e manutenzione periodica.</p>
                          </div>
                          
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="flex items-center mb-2">
                              <div className="flex-shrink-0 text-purple-500 mr-3">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                                </svg>
                              </div>
                              <h5 className="font-medium text-gray-800">Compatibilità urbanistica e paesaggistica</h5>
                            </div>
                            <p className="text-gray-600 text-sm ml-9">Controllo dei vincoli urbanistici, paesaggistici e ambientali che potrebbero limitare o condizionare l'installazione.</p>
                          </div>
                        </div>
                        
                        <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-100">
                          <p className="text-sm text-green-800"><span className="font-semibold">Suggerimento:</span> Coinvolgere un tecnico specializzato nella fase di sopralluogo per una valutazione professionale dei siti potenziali.</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* 3.2 Dimensionamento Impianti */}
                    <div>
                      <h3 className="text-lg font-semibold text-green-700 mb-3">3.2 Dimensionamento Impianti</h3>
                      <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 shadow-sm">
                        <p className="text-gray-700 mb-4">Il corretto dimensionamento degli impianti di produzione è essenziale per ottimizzare i benefici della CER. I principali parametri da considerare sono:</p>
                        
                        <div className="space-y-4">
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="flex">
                              <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                              </div>
                              <div>
                                <h5 className="font-medium text-gray-800">Potenza massima 1 MW per impianto</h5>
                                <p className="text-gray-600 text-sm mt-1">Rispetto del limite normativo di 1 MW per singolo impianto per accedere agli incentivi previsti per le CER.</p>
                                <div className="mt-2 p-2 bg-gray-50 rounded border border-gray-200">
                                  <p className="text-xs text-gray-500">La potenza nominale di ciascun impianto non deve superare 1 MW per beneficiare degli incentivi specifici per le CER.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="flex">
                              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
                                </svg>
                              </div>
                              <div>
                                <h5 className="font-medium text-gray-800">Bilanciamento con fabbisogni membri</h5>
                                <p className="text-gray-600 text-sm mt-1">Dimensionamento in funzione dei consumi energetici dei membri della CER per massimizzare l'autoconsumo collettivo.</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="flex">
                              <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                </svg>
                              </div>
                              <div>
                                <h5 className="font-medium text-gray-800">Ottimizzazione energia condivisa</h5>
                                <p className="text-gray-600 text-sm mt-1">Progettazione mirata a massimizzare la quota di energia prodotta e consumata all'interno della CER.</p>
                                <div className="mt-2 p-2 bg-gray-50 rounded border border-gray-200">
                                  <p className="text-xs text-gray-500">L'energia condivisa è calcolata come il minimo, in ciascuna ora, tra l'energia elettrica prodotta e immessa in rete e l'energia elettrica prelevata dall'insieme dei clienti finali associati.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="flex">
                              <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                                </svg>
                              </div>
                              <div>
                                <h5 className="font-medium text-gray-800">Valutazione sistemi di accumulo</h5>
                                <p className="text-gray-600 text-sm mt-1">Analisi dell'opportunità di integrare sistemi di accumulo per incrementare l'autoconsumo e la flessibilità del sistema.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* 3.3 Valutazione Economica */}
                    <div>
                      <h3 className="text-lg font-semibold text-green-700 mb-3">3.3 Valutazione Economica</h3>
                      <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 shadow-sm">
                        <p className="text-gray-700 mb-4">L'analisi economica è fondamentale per valutare la sostenibilità del progetto e i benefici per tutti i membri della CER:</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="flex items-center mb-2">
                              <div className="flex-shrink-0 text-red-500 mr-3">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                              </div>
                              <h5 className="font-medium text-gray-800">Costi di investimento</h5>
                            </div>
                            <p className="text-gray-600 text-sm ml-9">Valutazione dei costi di acquisto, installazione, connessione degli impianti e costi amministrativi per la costituzione della CER.</p>
                          </div>
                          
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="flex items-center mb-2">
                              <div className="flex-shrink-0 text-green-500 mr-3">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                              </div>
                              <h5 className="font-medium text-gray-800">Ricavi da incentivi e vendita energia</h5>
                            </div>
                            <p className="text-gray-600 text-sm ml-9">Stima dei ricavi derivanti dagli incentivi sull'energia condivisa e dalla vendita dell'energia immessa in rete.</p>
                          </div>
                          
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="flex items-center mb-2">
                              <div className="flex-shrink-0 text-blue-500 mr-3">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                              </div>
                              <h5 className="font-medium text-gray-800">Benefici per membri CER</h5>
                            </div>
                            <p className="text-gray-600 text-sm ml-9">Quantificazione dei vantaggi economici per ciascuna categoria di membri (produttori, consumatori, prosumer).</p>
                          </div>
                          
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="flex items-center mb-2">
                              <div className="flex-shrink-0 text-yellow-500 mr-3">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                                </svg>
                              </div>
                              <h5 className="font-medium text-gray-800">Sostenibilità economica progetto</h5>
                            </div>
                            <p className="text-gray-600 text-sm ml-9">Calcolo di indicatori finanziari chiave come tempo di ritorno dell'investimento (PBT), Valore Attuale Netto (VAN) e Tasso Interno di Rendimento (TIR).</p>
                          </div>
                        </div>
                        
                        <div className="mt-6 p-4 bg-blue-100 rounded-lg">
                          <div className="flex">
                            <div className="flex-shrink-0 text-blue-700 mr-3">
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                            </div>
                            <div>
                              <h5 className="font-medium text-blue-800 mb-1">Nota sulla valutazione economica</h5>
                              <p className="text-sm text-blue-700">È consigliabile elaborare diversi scenari (ottimistico, realistico, pessimistico) per valutare la robustezza economica del progetto rispetto a variazioni dei parametri chiave come costi di installazione, prezzi dell'energia e livelli di incentivazione.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Sezione 4: FASE 3: Identificazione Componenti */}
              <div id="section-p3-4" className="scroll-mt-24 mt-8">
                <div
                  onClick={() => toggleSection('section-p3-4')}
                  className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <h2 className="text-xl font-bold text-green-800">4. FASE 3: Identificazione Componenti</h2>
                  <span className="text-green-600">
                    {activeSection === 'section-p3-4' ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </span>
                </div>

                {activeSection === 'section-p3-4' && (
                  <div className="mt-4 space-y-6 p-4 bg-white rounded-lg border border-gray-200">
                    {/* 4.1 Profilazione Membri */}
                    <div>
                      <h3 className="text-lg font-semibold text-green-700 mb-3">4.1 Profilazione Membri</h3>
                      <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 shadow-sm">
                        <p className="text-gray-700 mb-4">La corretta categorizzazione dei partecipanti è fondamentale per definire ruoli, responsabilità e benefici all'interno della CER:</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="bg-white p-5 rounded-lg shadow-sm">
                            <div className="flex items-center mb-3">
                              <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                </svg>
                              </div>
                              <h5 className="font-medium text-gray-800">Prosumer</h5>
                            </div>
                            <p className="text-gray-600 text-sm">Membri che dispongono di impianti di produzione e al contempo consumano energia.</p>
                            <div className="mt-3 p-3 bg-green-50 rounded-lg">
                              <p className="text-xs text-green-700">Caratteristiche principali:</p>
                              <ul className="list-disc text-xs text-green-700 pl-4 mt-1">
                                <li>Possiedono siti idonei all'installazione di impianti</li>
                                <li>Contribuiscono alla produzione energetica della CER</li>
                                <li>Beneficiano sia degli incentivi che dei risparmi</li>
                              </ul>
                            </div>
                          </div>
                          
                          <div className="bg-white p-5 rounded-lg shadow-sm">
                            <div className="flex items-center mb-3">
                              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                </svg>
                              </div>
                              <h5 className="font-medium text-gray-800">Consumer</h5>
                            </div>
                            <p className="text-gray-600 text-sm">Membri che partecipano alla CER esclusivamente come consumatori di energia.</p>
                            <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                              <p className="text-xs text-blue-700">Caratteristiche principali:</p>
                              <ul className="list-disc text-xs text-blue-700 pl-4 mt-1">
                                <li>Non dispongono di impianti di produzione propri</li>
                                <li>Contribuiscono con quote associative</li>
                                <li>Beneficiano di risparmi in bolletta e quota incentivi</li>
                              </ul>
                            </div>
                          </div>
                          
                          <div className="bg-white p-5 rounded-lg shadow-sm">
                            <div className="flex items-center mb-3">
                              <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                                </svg>
                              </div>
                              <h5 className="font-medium text-gray-800">Enti pubblici</h5>
                            </div>
                            <p className="text-gray-600 text-sm">Amministrazioni locali, scuole, enti religiosi e altre organizzazioni pubbliche.</p>
                            <div className="mt-3 p-3 bg-purple-50 rounded-lg">
                              <p className="text-xs text-purple-700">Caratteristiche principali:</p>
                              <ul className="list-disc text-xs text-purple-700 pl-4 mt-1">
                                <li>Possono agire come promotori della CER</li>
                                <li>Spesso dispongono di ampie superfici per impianti</li>
                                <li>Possono facilitare l'accesso a finanziamenti pubblici</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-300 rounded-r-lg">
                          <div className="flex">
                            <div className="flex-shrink-0 text-amber-500 mr-3">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                            </div>
                            <p className="text-sm text-amber-700">
                              <span className="font-semibold">Nota:</span> Una CER può essere costituita anche da soli consumer, purché vi siano impianti di produzione di proprietà della CER stessa. È importante che la composizione dei membri sia bilanciata per massimizzare i benefici collettivi.  
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 4.2 Analisi Profili di Consumo */}
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold text-green-700 mb-3">4.2 Analisi Profili di Consumo</h3>
                      <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 shadow-sm">
                        <p className="text-gray-700 mb-4">La valutazione dettagliata dei consumi energetici dei membri è essenziale per ottimizzare il dimensionamento degli impianti e massimizzare i benefici della CER:</p>
                        
                        <div className="space-y-4">
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="flex">
                              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                </svg>
                              </div>
                              <div>
                                <h5 className="font-medium text-gray-800">Curve di carico orarie/stagionali</h5>
                                <p className="text-gray-600 text-sm mt-1">Analisi della distribuzione temporale dei consumi per identificare pattern ricorrenti e variazioni stagionali.</p>
                                <div className="mt-2 p-2 bg-gray-50 rounded border border-gray-200">
                                  <p className="text-xs text-gray-500">Utilizzare i dati storici di consumo (almeno 12 mesi) per costruire profili di carico rappresentativi per ciascuna categoria di utente.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="flex">
                              <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                              </div>
                              <div>
                                <h5 className="font-medium text-gray-800">Picchi di domanda</h5>
                                <p className="text-gray-600 text-sm mt-1">Identificazione dei momenti di massimo prelievo energetico per valutare la capacità della CER di coprire i fabbisogni nei periodi critici.</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="flex">
                              <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                </svg>
                              </div>
                              <div>
                                <h5 className="font-medium text-gray-800">Compatibilità con produzione rinnovabile</h5>
                                <p className="text-gray-600 text-sm mt-1">Valutazione della sovrapposizione temporale tra produzione rinnovabile (es. fotovoltaico) e consumi degli utenti.</p>
                                <div className="mt-2 p-2 bg-gray-50 rounded border border-gray-200">
                                  <p className="text-xs text-gray-500">Maggiore è la contemporaneità tra produzione e consumo, maggiori saranno i benefici economici per la CER.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="flex">
                              <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                                </svg>
                              </div>
                              <div>
                                <h5 className="font-medium text-gray-800">Potenziale autoconsumo virtuale</h5>
                                <p className="text-gray-600 text-sm mt-1">Stima della quota di energia prodotta che può essere teoricamente autoconsumata all'interno della CER.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6 bg-blue-100 p-4 rounded-lg">
                          <div className="flex">
                            <div className="flex-shrink-0 text-blue-700 mr-3">
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                              </svg>
                            </div>
                            <div>
                              <h5 className="font-medium text-blue-800 mb-1">Strumenti di analisi consigliati</h5>
                              <p className="text-sm text-blue-700">Per un'analisi accurata dei profili di consumo, è consigliabile utilizzare software specializzati che consentano la simulazione di diversi scenari di produzione e consumo, tenendo conto della variabilità stagionale e delle caratteristiche specifiche degli impianti previsti.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 4.3 Stima Investimenti e Ricavi */}
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold text-green-700 mb-3">4.3 Stima Investimenti e Ricavi</h3>
                      <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 shadow-sm">
                        <p className="text-gray-700 mb-4">Per garantire la sostenibilità economica della CER e la corretta distribuzione dei benefici, è necessario elaborare una stima dettagliata degli investimenti e dei ricavi per ciascun membro:</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-white p-5 rounded-lg shadow-sm">
                            <div className="flex items-center mb-3">
                              <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                              </div>
                              <h5 className="font-medium text-gray-800">Contributi richiesti</h5>
                            </div>
                            <p className="text-gray-600 text-sm">Valutazione dei costi di partecipazione per ciascun membro, inclusi:</p>
                            <ul className="list-disc text-gray-600 text-sm pl-5 mt-2 space-y-1">
                              <li>Quote associative</li>
                              <li>Investimenti per nuovi impianti</li>
                              <li>Costi di adeguamento impianti esistenti</li>
                              <li>Spese amministrative e gestionali</li>
                            </ul>
                          </div>
                          
                          <div className="bg-white p-5 rounded-lg shadow-sm">
                            <div className="flex items-center mb-3">
                              <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                              </div>
                              <h5 className="font-medium text-gray-800">Benefici attesi dalla partecipazione</h5>
                            </div>
                            <p className="text-gray-600 text-sm">Analisi dei vantaggi economici e non economici, tra cui:</p>
                            <ul className="list-disc text-gray-600 text-sm pl-5 mt-2 space-y-1">
                              <li>Riduzione della dipendenza energetica</li>
                              <li>Stabilizzazione dei costi energetici</li>
                              <li>Contributo agli obiettivi di sostenibilità</li>
                              <li>Valorizzazione di asset immobiliari</li>
                            </ul>
                          </div>
                          
                          <div className="bg-white p-5 rounded-lg shadow-sm">
                            <div className="flex items-center mb-3">
                              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                                </svg>
                              </div>
                              <h5 className="font-medium text-gray-800">Risparmi in bolletta stimati</h5>
                            </div>
                            <p className="text-gray-600 text-sm">Calcolo della riduzione dei costi energetici basato su:</p>
                            <ul className="list-disc text-gray-600 text-sm pl-5 mt-2 space-y-1">
                              <li>Autoconsumo fisico (per i prosumer)</li>
                              <li>Autoconsumo virtuale (per tutti i membri)</li>
                              <li>Riduzione oneri di sistema</li>
                              <li>Riduzione costi di dispacciamento</li>
                            </ul>
                          </div>
                          
                          <div className="bg-white p-5 rounded-lg shadow-sm">
                            <div className="flex items-center mb-3">
                              <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                              </div>
                              <h5 className="font-medium text-gray-800">Quote incentivi spettanti</h5>
                            </div>
                            <p className="text-gray-600 text-sm">Stima della ripartizione degli incentivi GSE in base a:</p>
                            <ul className="list-disc text-gray-600 text-sm pl-5 mt-2 space-y-1">
                              <li>Criteri definiti nello statuto della CER</li>
                              <li>Quota di energia condivisa</li>
                              <li>Tipologia di membro (prosumer/consumer)</li>
                              <li>Contributo agli investimenti iniziali</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-300 rounded-r-lg">
                          <div className="flex">
                            <div className="flex-shrink-0 text-amber-500 mr-3">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                            </div>
                            <p className="text-sm text-amber-700">
                              <span className="font-semibold">Importante:</span> La trasparenza nella stima e distribuzione dei benefici economici è fondamentale per il successo della CER. È consigliabile elaborare diversi scenari (ottimistico, realistico, pessimistico) per fornire ai potenziali membri un quadro completo delle opportunità e dei rischi.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Sezione 5: FASE 4: Costituzione Soggetto Giuridico */}
              <div id="section-p3-5" className="scroll-mt-24 mt-8">
                <div
                  onClick={() => toggleSection('section-p3-5')}
                  className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <h2 className="text-xl font-bold text-green-800">5. FASE 4: Costituzione Soggetto Giuridico</h2>
                  <span className="text-green-600">
                    {activeSection === 'section-p3-5' ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </span>
                </div>

                {activeSection === 'section-p3-5' && (
                  <div className="mt-4 space-y-6 p-4 bg-white rounded-lg border border-gray-200">
                    {/* 5.1 Scelta Forma Giuridica */}
                    <div>
                      <h3 className="text-lg font-semibold text-green-700 mb-3">5.1 Scelta Forma Giuridica</h3>
                      <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 shadow-sm">
                        <p className="text-gray-700 mb-4">La scelta della forma giuridica è un passaggio fondamentale per la costituzione della CER, in quanto determina la struttura organizzativa, le responsabilità dei membri e le modalità di gestione:</p>
                        
                        <div className="space-y-5">
                          <div className="bg-white p-5 rounded-lg shadow-sm">
                            <div className="flex items-center mb-3">
                              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                              </div>
                              <h5 className="font-medium text-gray-800">Associazione (riconosciuta o non riconosciuta)</h5>
                            </div>
                            <div className="pl-12">
                              <p className="text-gray-600 text-sm mb-2">L'associazione è la forma più comune per le CER, soprattutto nelle fasi iniziali:</p>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                                <div className="bg-green-50 p-3 rounded-lg">
                                  <h6 className="text-sm font-medium text-green-700 mb-1">Vantaggi</h6>
                                  <ul className="list-disc text-xs text-green-700 pl-4 space-y-1">
                                    <li>Semplicità di costituzione</li>
                                    <li>Costi contenuti</li>
                                    <li>Flessibilità organizzativa</li>
                                    <li>Adatta a CER di piccole dimensioni</li>
                                  </ul>
                                </div>
                                <div className="bg-red-50 p-3 rounded-lg">
                                  <h6 className="text-sm font-medium text-red-700 mb-1">Limiti</h6>
                                  <ul className="list-disc text-xs text-red-700 pl-4 space-y-1">
                                    <li>Responsabilità degli amministratori (forma non riconosciuta)</li>
                                    <li>Minori possibilità di accesso al credito</li>
                                    <li>Limitazioni per attività commerciali</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-white p-5 rounded-lg shadow-sm">
                            <div className="flex items-center mb-3">
                              <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                                </svg>
                              </div>
                              <h5 className="font-medium text-gray-800">Cooperativa</h5>
                            </div>
                            <div className="pl-12">
                              <p className="text-gray-600 text-sm mb-2">La forma cooperativa è particolarmente adatta per CER di dimensioni medio-grandi:</p>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                                <div className="bg-green-50 p-3 rounded-lg">
                                  <h6 className="text-sm font-medium text-green-700 mb-1">Vantaggi</h6>
                                  <ul className="list-disc text-xs text-green-700 pl-4 space-y-1">
                                    <li>Responsabilità limitata dei soci</li>
                                    <li>Maggiore capacità di investimento</li>
                                    <li>Possibilità di svolgere attività commerciale</li>
                                    <li>Governance democratica (una testa, un voto)</li>
                                  </ul>
                                </div>
                                <div className="bg-red-50 p-3 rounded-lg">
                                  <h6 className="text-sm font-medium text-red-700 mb-1">Limiti</h6>
                                  <ul className="list-disc text-xs text-red-700 pl-4 space-y-1">
                                    <li>Maggiori costi di costituzione e gestione</li>
                                    <li>Complessità amministrativa</li>
                                    <li>Obblighi contabili più stringenti</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-white p-5 rounded-lg shadow-sm">
                            <div className="flex items-center mb-3">
                              <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                </svg>
                              </div>
                              <h5 className="font-medium text-gray-800">Altre forme compatibili con finalità</h5>
                            </div>
                            <div className="pl-12">
                              <p className="text-gray-600 text-sm mb-2">Esistono altre forme giuridiche che possono essere adottate in base alle specifiche esigenze della comunità:</p>
                              <ul className="list-disc text-gray-600 text-sm pl-5 space-y-1">
                                <li><span className="font-medium">Fondazione:</span> adatta quando si dispone di un patrimonio significativo da destinare allo scopo</li>
                                <li><span className="font-medium">Consorzio:</span> utile per aggregare soggetti giuridici diversi (imprese, enti pubblici)</li>
                                <li><span className="font-medium">Impresa sociale:</span> quando si vogliono coniugare finalità sociali con attività commerciali</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-300 rounded-r-lg">
                          <div className="flex">
                            <div className="flex-shrink-0 text-amber-500 mr-3">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                            </div>
                            <p className="text-sm text-amber-700">
                              <span className="font-semibold">Consiglio:</span> La scelta della forma giuridica dovrebbe essere basata su fattori quali il numero di partecipanti, la tipologia di membri (privati, imprese, enti pubblici), gli obiettivi di lungo periodo e le risorse disponibili. È consigliabile consultare un esperto legale per valutare la soluzione più adatta alle specifiche esigenze della comunità.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 5.2 Redazione Statuto */}
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold text-green-700 mb-3">5.2 Redazione Statuto</h3>
                      <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 shadow-sm">
                        <p className="text-gray-700 mb-4">Lo statuto è il documento fondamentale che regola la vita della CER, definendo gli aspetti organizzativi, operativi e le finalità. È essenziale che contenga tutti gli elementi richiesti dalla normativa:</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="flex items-center mb-3">
                              <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                              </div>
                              <h5 className="font-medium text-gray-800">Denominazione e sede</h5>
                            </div>
                            <ul className="text-gray-600 text-sm pl-12 space-y-1">
                              <li>Nome completo della CER</li>
                              <li>Indirizzo della sede legale</li>
                              <li>Eventuale logo e identità visiva</li>
                              <li>Durata dell'ente (determinata o indeterminata)</li>
                            </ul>
                          </div>
                          
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="flex items-center mb-3">
                              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                </svg>
                              </div>
                              <h5 className="font-medium text-gray-800">Oggetto sociale prevalente</h5>
                            </div>
                            <ul className="text-gray-600 text-sm pl-12 space-y-1">
                              <li>Benefici ambientali (riduzione emissioni CO₂)</li>
                              <li>Benefici economici (riduzione costi energia)</li>
                              <li>Benefici sociali (contrasto povertà energetica)</li>
                              <li>Promozione cultura sostenibilità energetica</li>
                            </ul>
                          </div>
                          
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="flex items-center mb-3">
                              <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                              </div>
                              <h5 className="font-medium text-gray-800">Modalità partecipazione</h5>
                            </div>
                            <ul className="text-gray-600 text-sm pl-12 space-y-1">
                              <li>Requisiti per l'adesione</li>
                              <li>Procedura di ammissione</li>
                              <li>Diritti e doveri dei membri</li>
                              <li>Procedure di recesso ed esclusione</li>
                            </ul>
                          </div>
                          
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="flex items-center mb-3">
                              <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                                </svg>
                              </div>
                              <h5 className="font-medium text-gray-800">Organi sociali e competenze</h5>
                            </div>
                            <ul className="text-gray-600 text-sm pl-12 space-y-1">
                              <li>Assemblea dei membri (ordinaria e straordinaria)</li>
                              <li>Consiglio direttivo/amministrativo</li>
                              <li>Presidente e rappresentanza legale</li>
                              <li>Eventuali organi di controllo</li>
                            </ul>
                          </div>
                          
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="flex items-center mb-3">
                              <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                              </div>
                              <h5 className="font-medium text-gray-800">Criteri ripartizione benefici</h5>
                            </div>
                            <ul className="text-gray-600 text-sm pl-12 space-y-1">
                              <li>Principi generali di distribuzione incentivi</li>
                              <li>Criteri di equità e proporzionalità</li>
                              <li>Fondi di riserva e reinvestimento</li>
                              <li>Gestione degli avanzi di gestione</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="mt-6 bg-blue-100 p-4 rounded-lg">
                          <div className="flex">
                            <div className="flex-shrink-0 text-blue-700 mr-3">
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                              </svg>
                            </div>
                            <div>
                              <h5 className="font-medium text-blue-800 mb-1">Elementi di conformità GSE</h5>
                              <p className="text-sm text-blue-700">Lo statuto deve essere conforme ai requisiti del GSE per l'accesso agli incentivi. In particolare, deve specificare chiaramente che la CER è un soggetto giuridico autonomo, che la partecipazione è aperta e volontaria, e che lo scopo principale è fornire benefici ambientali, economici o sociali ai membri o alle aree locali in cui opera, piuttosto che profitti finanziari.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 5.3 Redazione Regolamento Interno */}
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold text-green-700 mb-3">5.3 Redazione Regolamento Interno</h3>
                      <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 shadow-sm">
                        <p className="text-gray-700 mb-4">Oltre allo statuto, è fondamentale redigere un regolamento interno che disciplini in modo dettagliato gli aspetti operativi della CER:</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-white p-5 rounded-lg shadow-sm">
                            <div className="flex items-start mb-4">
                              <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-800 mb-2">Gestione impianti</h4>
                                <ul className="text-gray-600 text-sm space-y-2">
                                  <li><span className="font-medium">Manutenzione:</span> Procedure e responsabilità per la manutenzione ordinaria e straordinaria degli impianti</li>
                                  <li><span className="font-medium">Monitoraggio:</span> Sistemi di controllo delle performance e protocolli di intervento in caso di malfunzionamenti</li>
                                  <li><span className="font-medium">Assicurazione:</span> Coperture assicurative obbligatorie e facoltative</li>
                                  <li><span className="font-medium">Accesso:</span> Modalità di accesso agli impianti per ispezioni e manutenzione</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-white p-5 rounded-lg shadow-sm">
                            <div className="flex items-start mb-4">
                              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-800 mb-2">Ripartizione dettagliata incentivi</h4>
                                <ul className="text-gray-600 text-sm space-y-2">
                                  <li><span className="font-medium">Algoritmi di calcolo:</span> Formule precise per la ripartizione degli incentivi tra i membri</li>
                                  <li><span className="font-medium">Tempistiche:</span> Frequenza e modalità di erogazione dei benefici economici</li>
                                  <li><span className="font-medium">Rendicontazione:</span> Procedure di trasparenza e comunicazione dei risultati economici</li>
                                  <li><span className="font-medium">Casi speciali:</span> Gestione di situazioni particolari (nuovi ingressi, uscite, variazioni significative nei consumi)</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-white p-5 rounded-lg shadow-sm">
                            <div className="flex items-start mb-4">
                              <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-800 mb-2">Procedure ingresso/uscita membri</h4>
                                <ul className="text-gray-600 text-sm space-y-2">
                                  <li><span className="font-medium">Domanda di adesione:</span> Documentazione richiesta e processo di valutazione</li>
                                  <li><span className="font-medium">Quote associative:</span> Eventuali contributi iniziali o periodici</li>
                                  <li><span className="font-medium">Preavviso di recesso:</span> Tempistiche e modalità per l'uscita dalla comunità</li>
                                  <li><span className="font-medium">Effetti economici:</span> Calcolo dei conguagli in caso di ingresso/uscita durante l'anno solare</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-white p-5 rounded-lg shadow-sm">
                            <div className="flex items-start mb-4">
                              <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-800 mb-2">Gestione conflitti</h4>
                                <ul className="text-gray-600 text-sm space-y-2">
                                  <li><span className="font-medium">Organo di mediazione:</span> Comitato interno per la risoluzione delle controversie</li>
                                  <li><span className="font-medium">Procedura di reclamo:</span> Iter formale per la presentazione e gestione dei reclami</li>
                                  <li><span className="font-medium">Mediazione esterna:</span> Ricorso a mediatori esterni in caso di conflitti complessi</li>
                                  <li><span className="font-medium">Sanzioni:</span> Eventuali provvedimenti disciplinari in caso di violazioni gravi</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6 bg-amber-50 p-4 rounded-lg border border-amber-100">
                          <div className="flex">
                            <div className="flex-shrink-0 text-amber-700 mr-3">
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                              </svg>
                            </div>
                            <div>
                              <h5 className="font-medium text-amber-800 mb-1">Suggerimento pratico</h5>
                              <p className="text-sm text-amber-700">Il regolamento interno, a differenza dello statuto, può essere modificato con maggiore facilità, generalmente con una delibera dell'organo amministrativo. È quindi consigliabile inserire in questo documento tutti gli aspetti operativi che potrebbero richiedere aggiustamenti nel tempo, mantenendo lo statuto più snello e focalizzato sugli elementi fondamentali e permanenti della CER.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Sezione 6: FASE 5: Verifica Membri e POD */}
              <div id="section-p3-6" className="scroll-mt-24 mt-8">
                <div
                  onClick={() => toggleSection('section-p3-6')}
                  className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <h2 className="text-xl font-bold text-green-800">6. FASE 5: Verifica Membri e POD</h2>
                  <span className="text-green-600">
                    {activeSection === 'section-p3-6' ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </span>
                </div>
                {activeSection === 'section-p3-6' && (
                  <div className="mt-4 space-y-6 p-4 bg-white rounded-lg border border-gray-200">
                    {/* 6.1 Identificazione POD */}
                    <div>
                      <h3 className="text-lg font-semibold text-green-700 mb-3">6.1 Identificazione POD</h3>
                      <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 shadow-sm">
                        <p className="text-gray-700 mb-4">L'identificazione precisa dei Punti di Prelievo (POD) di ogni membro è un passaggio cruciale per la costituzione della CER. Questa fase richiede attenzione ai dettagli e verifica accurata:</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-white p-5 rounded-lg shadow-sm">
                            <div className="flex items-start mb-3">
                              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path>
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-800 mb-2">Codice POD di ogni membro</h4>
                                <p className="text-gray-600 text-sm">Il codice POD (Point of Delivery) è un codice alfanumerico che identifica univocamente il punto di consegna dell'energia elettrica. È riportato in bolletta e inizia con "IT" seguito da numeri e lettere. Ogni membro deve fornire il proprio codice POD per tutti i punti di prelievo che intende includere nella CER.</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-white p-5 rounded-lg shadow-sm">
                            <div className="flex items-start mb-3">
                              <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-800 mb-2">Verifica appartenenza cabina primaria</h4>
                                <p className="text-gray-600 text-sm">Tutti i membri della CER devono essere connessi alla stessa cabina primaria. È necessario verificare questo requisito per ogni POD attraverso una richiesta al distributore locale o consultando il portale del GSE. Questo è un requisito fondamentale per la costituzione della CER.</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-white p-5 rounded-lg shadow-sm">
                            <div className="flex items-start mb-3">
                              <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-800 mb-2">Controllo compatibilità con SSP</h4>
                                <p className="text-gray-600 text-sm">Verificare che i POD non siano già associati ad altri regimi incentivanti incompatibili con la partecipazione alla CER, come alcuni tipi di Scambio Sul Posto (SSP) o altri meccanismi di incentivazione che potrebbero creare conflitti normativi.</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-white p-5 rounded-lg shadow-sm">
                            <div className="flex items-start mb-3">
                              <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-800 mb-2">Validazione dati anagrafici</h4>
                                <p className="text-gray-600 text-sm">Verificare che i dati anagrafici associati a ciascun POD corrispondano esattamente a quelli del membro che lo dichiara. Eventuali discrepanze potrebbero causare problemi durante la fase di registrazione della CER presso il GSE.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6 bg-blue-100 p-4 rounded-lg">
                          <div className="flex">
                            <div className="flex-shrink-0 text-blue-700 mr-3">
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                            </div>
                            <div>
                              <h5 className="font-medium text-blue-800 mb-1">Nota importante</h5>
                              <p className="text-sm text-blue-700">La verifica dei POD è una fase tecnica che richiede competenze specifiche. È consigliabile farsi assistere da un tecnico o un consulente energetico che possa verificare la correttezza dei dati e la compatibilità con i requisiti della CER. Errori in questa fase potrebbero compromettere l'accesso agli incentivi.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* 6.2 Raccolta Documentazione */}
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold text-green-700 mb-3">6.2 Raccolta Documentazione</h3>
                      <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 shadow-sm">
                        <p className="text-gray-700 mb-4">Per completare la fase di verifica dei membri e dei POD, è necessario raccogliere una serie di documenti da ciascun partecipante alla CER:</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-white p-5 rounded-lg shadow-sm">
                            <div className="flex items-start mb-3">
                              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path>
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-800 mb-2">Documenti identità</h4>
                                <ul className="text-gray-600 text-sm space-y-1 pl-2">
                                  <li>• Copia di un documento d'identità valido (carta d'identità, passaporto, patente)</li>
                                  <li>• Per le persone giuridiche: documento d'identità del legale rappresentante</li>
                                  <li>• Eventuali deleghe in caso di rappresentanza</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-white p-5 rounded-lg shadow-sm">
                            <div className="flex items-start mb-3">
                              <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-800 mb-2">Codici fiscali</h4>
                                <ul className="text-gray-600 text-sm space-y-1 pl-2">
                                  <li>• Copia del codice fiscale o tessera sanitaria di ogni persona fisica</li>
                                  <li>• Per le imprese: copia del certificato di attribuzione della Partita IVA</li>
                                  <li>• Per gli enti: codice fiscale dell'ente e documentazione attestante i poteri di firma</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-white p-5 rounded-lg shadow-sm">
                            <div className="flex items-start mb-3">
                              <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-800 mb-2">Ultime bollette energetiche</h4>
                                <ul className="text-gray-600 text-sm space-y-1 pl-2">
                                  <li>• Copia delle ultime due bollette elettriche per ogni POD</li>
                                  <li>• Evidenza del codice POD e dell'intestatario della fornitura</li>
                                  <li>• Dati relativi alla potenza impegnata e disponibile</li>
                                  <li>• Informazioni sul distributore locale e sul venditore</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-white p-5 rounded-lg shadow-sm">
                            <div className="flex items-start mb-3">
                              <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-800 mb-2">Autorizzazioni necessarie</h4>
                                <ul className="text-gray-600 text-sm space-y-1 pl-2">
                                  <li>• Autorizzazione al trattamento dei dati personali</li>
                                  <li>• Mandato per l'accesso ai dati di consumo presso il distributore</li>
                                  <li>• Per i condomini: delibera assembleare di adesione alla CER</li>
                                  <li>• Per le imprese: delibera dell'organo amministrativo</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6 bg-amber-50 p-4 rounded-lg border border-amber-100">
                          <div className="flex">
                            <div className="flex-shrink-0 text-amber-700 mr-3">
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                              </svg>
                            </div>
                            <div>
                              <h5 className="font-medium text-amber-800 mb-1">Suggerimento pratico</h5>
                              <p className="text-sm text-amber-700">È consigliabile predisporre una checklist personalizzata per ogni tipologia di membro (persona fisica, impresa, ente pubblico, condominio) e utilizzarla per verificare la completezza della documentazione raccolta. Questo ridurrà il rischio di dover richiedere integrazioni in un secondo momento, accelerando il processo di costituzione della CER.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Sezione 7: FASE 6: Mandati di Rappresentanza */}
              <div id="section-p3-7" className="scroll-mt-24 mt-8">
                <div
                  onClick={() => toggleSection('section-p3-7')}
                  className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <h2 className="text-xl font-bold text-green-800">7. FASE 6: Mandati di Rappresentanza</h2>
                  <span className="text-green-600">
                    {activeSection === 'section-p3-7' ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </span>
                </div>
                {activeSection === 'section-p3-7' && (
                  <div className="mt-4 space-y-6 p-4 bg-white rounded-lg border border-gray-200">
                    {/* 7.1 Mandati Obbligatori */}
                    <div>
                      <h3 className="text-lg font-semibold text-green-700 mb-3">7.1 Mandati Obbligatori</h3>
                      <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 shadow-sm">
                        <p className="text-gray-700 mb-4">Per il corretto funzionamento della CER, è necessario che i membri conferiscano specifici mandati di rappresentanza al Referente designato. Questi mandati sono essenziali per la gestione operativa e amministrativa della comunità:</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-white p-5 rounded-lg shadow-sm">
                            <div className="flex items-start mb-3">
                              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-800 mb-2">Accesso agli incentivi per conto membri</h4>
                                <p className="text-gray-600 text-sm">Il Referente deve essere autorizzato a richiedere, ricevere e gestire gli incentivi economici erogati dal GSE per conto di tutti i membri della CER. Questo include la facoltà di aprire conti dedicati, emettere fatture collettive e distribuire i proventi secondo i criteri stabiliti nel regolamento interno.</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-white p-5 rounded-lg shadow-sm">
                            <div className="flex items-start mb-3">
                              <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-800 mb-2">Gestione rapporti con GSE</h4>
                                <p className="text-gray-600 text-sm">Il mandato deve includere l'autorizzazione a gestire tutte le comunicazioni e i rapporti con il Gestore dei Servizi Energetici (GSE), compresa la presentazione di documenti, la risposta a richieste di chiarimenti, l'invio di dati di produzione e consumo, e la gestione di eventuali verifiche o controlli.</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-white p-5 rounded-lg shadow-sm col-span-1 md:col-span-2">
                            <div className="flex items-start mb-3">
                              <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-800 mb-2">Rappresentanza negli adempimenti</h4>
                                <p className="text-gray-600 text-sm">Il Referente deve essere autorizzato a rappresentare la CER in tutti gli adempimenti amministrativi, fiscali e legali necessari per il suo funzionamento. Questo include la sottoscrizione di contratti di servizio, la gestione delle pratiche burocratiche, l'interazione con enti pubblici e privati, e l'adempimento degli obblighi di rendicontazione e trasparenza previsti dalla normativa.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6 bg-blue-100 p-4 rounded-lg">
                          <div className="flex">
                            <div className="flex-shrink-0 text-blue-700 mr-3">
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                            </div>
                            <div>
                              <h5 className="font-medium text-blue-800 mb-1">Nota importante</h5>
                              <p className="text-sm text-blue-700">I mandati devono essere chiari, dettagliati e conformi alla normativa vigente. È fondamentale che ogni membro comprenda pienamente l'estensione dei poteri conferiti al Referente prima di firmare. Si consiglia di far predisporre i mandati da un professionista legale con esperienza nel settore energetico.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* 7.2 Documentazione Legale */}
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold text-green-700 mb-3">7.2 Documentazione Legale</h3>
                      <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 shadow-sm">
                        <p className="text-gray-700 mb-4">La formalizzazione dei mandati di rappresentanza richiede una documentazione legale accurata e completa. Ecco gli elementi essenziali da considerare:</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-white p-5 rounded-lg shadow-sm">
                            <div className="flex items-start mb-3">
                              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-800 mb-2">Modelli standard GSE</h4>
                                <p className="text-gray-600 text-sm">Il GSE mette a disposizione modelli standard di mandato che possono essere utilizzati come base per la redazione dei documenti. Questi modelli contengono tutte le clausole essenziali richieste dalla normativa e sono periodicamente aggiornati per riflettere eventuali modifiche legislative. È consigliabile utilizzare questi modelli come punto di partenza, personalizzandoli in base alle specifiche esigenze della CER.</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-white p-5 rounded-lg shadow-sm">
                            <div className="flex items-start mb-3">
                              <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-800 mb-2">Firme autenticate membri</h4>
                                <p className="text-gray-600 text-sm">I mandati devono essere firmati da tutti i membri della CER. In molti casi, è richiesta l'autenticazione delle firme da parte di un notaio o di un pubblico ufficiale autorizzato. Questo requisito è particolarmente importante per i mandati che conferiscono poteri significativi, come la gestione degli incentivi economici. È consigliabile organizzare sessioni collettive di firma per semplificare il processo e ridurre i costi.</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-white p-5 rounded-lg shadow-sm">
                            <div className="flex items-start mb-3">
                              <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-800 mb-2">Durata e condizioni mandato</h4>
                                <p className="text-gray-600 text-sm">I mandati devono specificare chiaramente la loro durata temporale, che può essere a tempo determinato o indeterminato. È importante definire anche le condizioni di validità, le eventuali limitazioni ai poteri conferiti, e le circostanze in cui il mandato si considera automaticamente rinnovato o terminato. La chiarezza su questi aspetti previene future controversie e garantisce la continuità operativa della CER.</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-white p-5 rounded-lg shadow-sm">
                            <div className="flex items-start mb-3">
                              <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-800 mb-2">Revoca e modifiche</h4>
                                <p className="text-gray-600 text-sm">I mandati devono prevedere procedure chiare per la loro revoca o modifica. Questo include la definizione dei casi in cui un membro può revocare unilateralmente il mandato, le modalità di comunicazione della revoca, e gli effetti della revoca sui rapporti in corso. È importante anche stabilire come possono essere apportate modifiche al mandato e quali maggioranze sono necessarie per approvarle.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6 bg-amber-50 p-4 rounded-lg border border-amber-100">
                          <div className="flex">
                            <div className="flex-shrink-0 text-amber-700 mr-3">
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                              </svg>
                            </div>
                            <div>
                              <h5 className="font-medium text-amber-800 mb-1">Suggerimento pratico</h5>
                              <p className="text-sm text-amber-700">Conservate sempre copie originali di tutti i mandati in un archivio sicuro e facilmente accessibile. È consigliabile anche creare un registro digitale dei mandati, con date di scadenza e rinnovo, per monitorarne lo stato e garantire che siano sempre validi e aggiornati. Questo è particolarmente importante in caso di controlli da parte del GSE o di altre autorità.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Sezione 8: FASE 7: Coinvolgimento Amministrazioni */}
              <div id="section-p3-8" className="scroll-mt-24 mt-8">
                <div
                  onClick={() => toggleSection('section-p3-8')}
                  className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <h2 className="text-xl font-bold text-green-800">8. FASE 7: Coinvolgimento Amministrazioni</h2>
                  <span className="text-green-600">
                    {activeSection === 'section-p3-8' ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </span>
                </div>
                {activeSection === 'section-p3-8' && (
                  <div className="mt-4 space-y-6 p-4 bg-white rounded-lg border border-gray-200">
                    {/* 8.1 Delibere Comunali */}
                    <div>
                      <h3 className="text-lg font-semibold text-green-700 mb-3">8.1 Delibere Comunali</h3>
                      <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 shadow-sm">
                        <p className="text-gray-700 mb-4">Il coinvolgimento delle amministrazioni locali, in particolare dei comuni, rappresenta un fattore strategico per il successo di una CER. Il supporto istituzionale può manifestarsi in diverse forme:</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-white p-5 rounded-lg shadow-sm">
                            <div className="flex items-start mb-3">
                              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-800 mb-2">Patrocinio del comune</h4>
                                <p className="text-gray-600 text-sm">Il patrocinio formale da parte del comune conferisce alla CER una maggiore credibilità e visibilità. Si tratta di un riconoscimento ufficiale che può essere ottenuto attraverso una delibera comunale, in cui l'amministrazione dichiara il proprio sostegno all'iniziativa. Questo supporto può includere anche l'utilizzo del logo comunale nelle comunicazioni della CER e la partecipazione di rappresentanti del comune a eventi promozionali.</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-white p-5 rounded-lg shadow-sm">
                            <div className="flex items-start mb-3">
                              <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-800 mb-2">Bandi per partecipazione cittadini</h4>
                                <p className="text-gray-600 text-sm">I comuni possono pubblicare bandi specifici per incentivare la partecipazione dei cittadini alle CER. Questi bandi possono prevedere contributi economici, agevolazioni fiscali locali o altre forme di sostegno per chi decide di aderire alla comunità energetica. È importante monitorare regolarmente i siti istituzionali dei comuni per individuare queste opportunità e presentare domanda nei tempi previsti.</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-white p-5 rounded-lg shadow-sm">
                            <div className="flex items-start mb-3">
                              <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-800 mb-2">Semplificazioni autorizzative</h4>
                                <p className="text-gray-600 text-sm">Le amministrazioni comunali possono adottare delibere per semplificare i processi autorizzativi relativi all'installazione di impianti di energia rinnovabile nel contesto delle CER. Queste semplificazioni possono riguardare permessi edilizi, autorizzazioni paesaggistiche o altri adempimenti burocratici, riducendo significativamente i tempi e i costi di realizzazione degli impianti.</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-white p-5 rounded-lg shadow-sm">
                            <div className="flex items-start mb-3">
                              <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path>
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-800 mb-2">Promozione sul territorio</h4>
                                <p className="text-gray-600 text-sm">I comuni possono supportare la CER attraverso attività di promozione e sensibilizzazione sul territorio. Questo può includere l'organizzazione di eventi informativi, la pubblicazione di materiale divulgativo sui canali di comunicazione istituzionali, la messa a disposizione di spazi pubblici per incontri e assemblee, e il coinvolgimento delle scuole in progetti educativi sul tema delle energie rinnovabili.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6 bg-blue-100 p-4 rounded-lg">
                          <div className="flex">
                            <div className="flex-shrink-0 text-blue-700 mr-3">
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                            </div>
                            <div>
                              <h5 className="font-medium text-blue-800 mb-1">Suggerimento operativo</h5>
                              <p className="text-sm text-blue-700">Per ottenere il supporto dell'amministrazione comunale, è consigliabile presentare un progetto dettagliato che evidenzi i benefici per la comunità locale in termini ambientali, economici e sociali. Preparate una presentazione professionale e richiedete un incontro con il sindaco o con l'assessore competente in materia di energia o ambiente. Coinvolgete anche i consiglieri comunali che potrebbero essere sensibili alle tematiche ambientali.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* 8.2 Partnership Pubblico-Private */}
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold text-green-700 mb-3">8.2 Partnership Pubblico-Private</h3>
                      <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 shadow-sm">
                        <p className="text-gray-700 mb-4">Le partnership tra soggetti pubblici e privati rappresentano un modello particolarmente efficace per lo sviluppo delle CER. Queste collaborazioni permettono di combinare le risorse e le competenze di entrambi i settori, massimizzando i benefici per la comunità:</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-white p-5 rounded-lg shadow-sm">
                            <div className="flex items-start mb-3">
                              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-800 mb-2">Coinvolgimento enti locali come membri</h4>
                                <p className="text-gray-600 text-sm">Gli enti locali (comuni, province, regioni) possono partecipare direttamente alla CER in qualità di membri. Questa partecipazione può avvenire in diverse forme: come produttori di energia attraverso impianti installati su edifici pubblici, come consumatori per le utenze degli edifici comunali, o in entrambi i ruoli. La presenza di enti pubblici nella compagine sociale rafforza la credibilità della CER e può facilitare l'accesso a finanziamenti e agevolazioni.</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-white p-5 rounded-lg shadow-sm">
                            <div className="flex items-start mb-3">
                              <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-800 mb-2">Utilizzo edifici pubblici per impianti</h4>
                                <p className="text-gray-600 text-sm">Gli enti locali possono mettere a disposizione della CER le superfici di edifici pubblici (scuole, palestre, uffici comunali, biblioteche) per l'installazione di impianti fotovoltaici o altre tecnologie rinnovabili. Questa soluzione offre numerosi vantaggi: sfrutta spazi già esistenti senza consumo di suolo, riduce i costi energetici degli edifici pubblici, e genera energia rinnovabile a beneficio dell'intera comunità. Gli accordi possono prevedere diverse forme di compensazione per l'ente pubblico.</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-white p-5 rounded-lg shadow-sm col-span-1 md:col-span-2">
                            <div className="flex items-start mb-3">
                              <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-800 mb-2">Coordinamento con politiche energetiche locali</h4>
                                <p className="text-gray-600 text-sm">Le CER possono essere integrate nelle politiche energetiche locali, come i Piani d'Azione per l'Energia Sostenibile e il Clima (PAESC) o altri strumenti di pianificazione territoriale. Questo coordinamento garantisce coerenza tra gli obiettivi della CER e le strategie energetiche del territorio, massimizzando l'impatto positivo delle iniziative. La collaborazione può estendersi anche alla partecipazione congiunta a bandi regionali, nazionali o europei per l'ottenimento di finanziamenti dedicati alla transizione energetica.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6 bg-amber-50 p-4 rounded-lg border border-amber-100">
                          <div className="flex">
                            <div className="flex-shrink-0 text-amber-700 mr-3">
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                              </svg>
                            </div>
                            <div>
                              <h5 className="font-medium text-amber-800 mb-1">Considerazione importante</h5>
                              <p className="text-sm text-amber-700">Nelle partnership pubblico-private è fondamentale definire con chiarezza ruoli, responsabilità e meccanismi decisionali. Predisponete protocolli d'intesa o convenzioni dettagliate che regolino tutti gli aspetti della collaborazione, inclusi gli investimenti, la ripartizione dei benefici economici e la durata dell'accordo. Considerate anche di coinvolgere un consulente legale con esperienza in diritto amministrativo per garantire la conformità dell'accordo alla normativa vigente sulle collaborazioni tra enti pubblici e soggetti privati.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sezione 9: FASE 8: Richiesta Incentivi GSE */}
            <div id="section-p3-9" className="scroll-mt-24 mt-8">
                <div
                  onClick={() => toggleSection('section-p3-9')}
                  className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <h2 className="text-xl font-bold text-green-800">9. FASE 8: Richiesta Incentivi GSE</h2>
                  <span className="text-green-600">
                    {activeSection === 'section-p3-9' ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </span>
                </div>
              {activeSection === 'section-p3-9' && (
                <div className="mt-4 space-y-6 p-4 bg-white rounded-lg border border-gray-200">
                  {/* 9.1 Verifica Preliminare */}
                  <div>
                    <h3 className="text-lg font-semibold text-green-700 mb-3">9.1 Verifica Preliminare</h3>
                    <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 shadow-sm">
                      <p className="text-gray-700 mb-4">Prima di procedere con la richiesta ufficiale di incentivi al GSE, è possibile (e consigliabile) richiedere una verifica preliminare per assicurarsi che tutti i requisiti siano soddisfatti:</p>
                      
                      <div className="bg-white p-5 rounded-lg shadow-sm mb-6">
                        <h4 className="font-semibold text-blue-800 mb-3">Servizio GSE di verifica preliminare</h4>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="flex items-start">
                            <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-800 mb-1">Richiesta parere preliminare (facoltativa)</h5>
                              <p className="text-gray-600 text-sm">Il GSE offre un servizio di verifica preliminare che, sebbene facoltativo, è altamente consigliato. Questo servizio permette di ottenere un parere preventivo sulla conformità della CER ai requisiti normativi, riducendo il rischio di rigetto della domanda definitiva. La richiesta va presentata attraverso il portale GSE, allegando la documentazione disponibile al momento.</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-800 mb-1">Verifica ammissibilità soggetti</h5>
                              <p className="text-gray-600 text-sm">Il GSE verifica che tutti i soggetti che compongono la CER rispettino i requisiti di ammissibilità previsti dalla normativa. Questo include la verifica della natura giuridica dei membri, la loro posizione geografica (all'interno della stessa zona di mercato), e la compatibilità del loro ruolo (produttore, consumatore o prosumer) con quanto dichiarato.</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                              </svg>
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-800 mb-1">Controllo requisiti tecnici</h5>
                              <p className="text-gray-600 text-sm">Viene effettuata una verifica approfondita degli impianti di produzione, assicurandosi che rispettino tutti i requisiti tecnici previsti: potenza non superiore a 1 MW per singolo impianto, data di entrata in esercizio conforme alla normativa, tecnologia utilizzata (deve trattarsi di fonti rinnovabili), e corretta connessione alla rete elettrica.</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                              <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-800 mb-1">Tempo: 60 giorni per risposta GSE</h5>
                              <p className="text-gray-600 text-sm">Il GSE ha fino a 60 giorni di tempo per fornire una risposta alla richiesta di verifica preliminare. Durante questo periodo, potrebbe richiedere documentazione integrativa o chiarimenti. È importante tenere conto di questa tempistica nella pianificazione complessiva del progetto CER, prevedendo un margine adeguato prima della presentazione della domanda definitiva.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                        <div className="flex">
                          <div className="flex-shrink-0 text-green-700 mr-3">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                          </div>
                          <div>
                            <h5 className="font-medium text-green-800 mb-1">Vantaggi della verifica preliminare</h5>
                            <p className="text-sm text-green-700">Sebbene non obbligatoria, la verifica preliminare offre numerosi vantaggi: permette di identificare e correggere eventuali non conformità in anticipo, riduce il rischio di rigetto della domanda definitiva, e fornisce maggiore sicurezza nella pianificazione economica e temporale del progetto. Il costo in termini di tempo (60 giorni) è ampiamente compensato dalla maggiore probabilità di successo della domanda definitiva.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 9.2 Documentazione per GSE */}
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">9.2 Documentazione per GSE</h3>
                    <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 shadow-sm">
                      <p className="text-gray-700 mb-4">Per presentare la richiesta di incentivi al GSE è necessario predisporre una documentazione completa e accurata, come indicato nell'Allegato 3 del Decreto Ministeriale. Ecco i documenti principali richiesti:</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-white p-5 rounded-lg shadow-sm">
                          <div className="flex items-start mb-3">
                            <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800 mb-2">Atto costitutivo e statuto CER</h4>
                              <p className="text-gray-600 text-sm">L'atto costitutivo e lo statuto della CER devono essere presentati in copia conforme all'originale. Questi documenti devono rispettare tutti i requisiti previsti dalla normativa, inclusi gli elementi obbligatori come la finalità non lucrativa, le modalità di gestione degli incentivi, e le regole per l'ammissione dei membri. Lo statuto deve inoltre essere coerente con quanto dichiarato nella domanda di incentivi.</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white p-5 rounded-lg shadow-sm">
                          <div className="flex items-start mb-3">
                            <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800 mb-2">Preventivo connessione accettato</h4>
                              <p className="text-gray-600 text-sm">Per ogni impianto di produzione incluso nella CER, è necessario presentare il preventivo di connessione accettato e inviato al gestore di rete. Questo documento attesta che l'impianto è stato correttamente progettato per la connessione alla rete elettrica e che sono stati rispettati tutti i requisiti tecnici previsti. Il preventivo deve essere completo di tutti gli allegati tecnici richiesti dal gestore di rete.</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white p-5 rounded-lg shadow-sm">
                          <div className="flex items-start mb-3">
                            <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800 mb-2">Verbale attivazione contatori</h4>
                              <p className="text-gray-600 text-sm">Per ciascun punto di connessione (sia di produzione che di consumo) è necessario fornire il verbale di attivazione dei contatori rilasciato dal distributore locale. Questo documento certifica che i contatori sono stati correttamente installati e attivati, e che sono in grado di misurare l'energia prodotta, consumata o scambiata con la rete. I verbali devono essere completi di tutti i dati identificativi dei POD.</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white p-5 rounded-lg shadow-sm">
                          <div className="flex items-start mb-3">
                            <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                              <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800 mb-2">Dichiarazioni sostitutive varie</h4>
                              <p className="text-gray-600 text-sm">Sono richieste diverse dichiarazioni sostitutive di atto notorio, tra cui: dichiarazione di conformità dell'impianto alle normative vigenti, dichiarazione di possesso dei requisiti per l'accesso agli incentivi, dichiarazione di non cumulabilità con altri incentivi (ove applicabile), e dichiarazioni relative alla titolarità degli impianti. Queste dichiarazioni devono essere sottoscritte dal legale rappresentante della CER.</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white p-5 rounded-lg shadow-sm col-span-1 md:col-span-2">
                          <div className="flex items-start mb-3">
                            <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800 mb-2">Schemi elettrici (se sistemi accumulo)</h4>
                              <p className="text-gray-600 text-sm">Nel caso in cui la CER includa sistemi di accumulo dell'energia, è necessario fornire gli schemi elettrici dettagliati che illustrano come questi sistemi sono integrati nell'impianto. Gli schemi devono essere redatti da un tecnico abilitato e devono mostrare chiaramente la configurazione dell'impianto, il posizionamento dei sistemi di accumulo, e le modalità di connessione alla rete elettrica. Devono inoltre essere conformi alle specifiche tecniche richieste dal GSE per i sistemi di accumulo.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                        <div className="flex">
                          <div className="flex-shrink-0 text-amber-700 mr-3">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                            </svg>
                          </div>
                          <div>
                            <h5 className="font-medium text-amber-800 mb-1">Attenzione alla completezza documentale</h5>
                            <p className="text-sm text-amber-700">La mancanza o l'incompletezza anche di un solo documento può comportare il rigetto della domanda o significativi ritardi nel processo di approvazione. È fondamentale verificare attentamente la lista completa dei documenti richiesti nell'Allegato 3 del Decreto Ministeriale e assicurarsi che ogni documento sia conforme alle specifiche richieste dal GSE. Si consiglia di predisporre un indice dettagliato della documentazione e di effettuare un controllo incrociato prima dell'invio.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 9.3 Caricamento Domanda */}
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">9.3 Caricamento Domanda</h3>
                    <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 shadow-sm">
                      <p className="text-gray-700 mb-4">Una volta predisposta tutta la documentazione necessaria, è possibile procedere con il caricamento della domanda attraverso il portale informatico del GSE:</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-white p-5 rounded-lg shadow-sm">
                          <div className="flex items-start">
                            <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800 mb-2">Accesso con SPID/CIE</h4>
                              <p className="text-gray-600 text-sm">L'accesso al portale GSE avviene esclusivamente tramite identità digitale SPID (Sistema Pubblico di Identità Digitale) o CIE (Carta d'Identità Elettronica). È necessario che l'accesso sia effettuato dal legale rappresentante della CER o da un soggetto delegato formalmente. La delega, in quest'ultimo caso, deve essere caricata tra i documenti della domanda. Si consiglia di verificare preventivamente la validità e l'operatività delle credenziali SPID/CIE prima di iniziare la procedura.</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white p-5 rounded-lg shadow-sm">
                          <div className="flex items-start">
                            <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800 mb-2">Applicazione "SPC"</h4>
                              <p className="text-gray-600 text-sm">All'interno del portale GSE, è necessario selezionare l'applicazione "SPC" (Sistemi di Produzione e Consumo) dedicata alle Comunità Energetiche Rinnovabili. Questa sezione contiene tutti i moduli necessari per la presentazione della domanda di incentivi. L'interfaccia guida l'utente attraverso i vari passaggi della procedura, dalla registrazione della CER fino all'invio della documentazione completa. È importante seguire attentamente le istruzioni fornite dal sistema per ogni fase.</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white p-5 rounded-lg shadow-sm">
                          <div className="flex items-start">
                            <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800 mb-2">Upload documentazione completa</h4>
                              <p className="text-gray-600 text-sm">Il sistema richiede il caricamento di tutta la documentazione necessaria, come elencato nella sezione precedente. È importante assicurarsi che i file siano in formato PDF (o nei formati specificati dal GSE) e che non superino le dimensioni massime consentite. Si consiglia di nominare i file in modo chiaro e descrittivo per facilitare l'identificazione. Il portale permette di salvare la domanda in bozza e completarla in momenti successivi, funzionalità utile considerata la mole di documenti da caricare.</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white p-5 rounded-lg shadow-sm">
                          <div className="flex items-start">
                            <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                              <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800 mb-2">Protocollazione richiesta</h4>
                              <p className="text-gray-600 text-sm">Una volta completato il caricamento di tutti i documenti e compilati tutti i campi richiesti, è possibile procedere con l'invio definitivo della domanda. Il sistema genererà automaticamente un numero di protocollo che servirà come riferimento per tutte le comunicazioni future con il GSE. È fondamentale conservare questo numero e la ricevuta di avvenuta protocollazione, che viene inviata anche via email all'indirizzo registrato. Questa ricevuta costituisce la prova dell'avvenuta presentazione della domanda.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-blue-100 p-4 rounded-lg border border-blue-200">
                        <div className="flex">
                          <div className="flex-shrink-0 text-blue-700 mr-3">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                          </div>
                          <div>
                            <h5 className="font-medium text-blue-800 mb-1">Tempi di valutazione GSE</h5>
                            <p className="text-sm text-blue-700">Dopo l'invio della domanda, il GSE ha fino a 90 giorni di tempo per valutare la richiesta e comunicare l'esito. Durante questo periodo, potrebbe richiedere integrazioni o chiarimenti, che dovranno essere forniti entro i termini indicati. È importante monitorare regolarmente la casella email associata all'account e l'area riservata del portale GSE per eventuali comunicazioni. In caso di approvazione, il GSE comunicherà l'ammontare degli incentivi riconosciuti e le modalità di erogazione.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Sezione 10: FASE 9: Gestione Operativa */}
            <div id="section-p3-10" className="scroll-mt-24 mt-8">
                <div
                  onClick={() => toggleSection('section-p3-10')}
                  className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <h2 className="text-xl font-bold text-green-800">10. FASE 9: Realizzazione Impianti</h2>
                  <span className="text-green-600">
                    {activeSection === 'section-p3-10' ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </span>
                </div>
              {activeSection === 'section-p3-10' && (
                <div className="mt-4 space-y-6 p-4 bg-white rounded-lg border border-gray-200">
                  {/* 10.1 Autorizzazioni Necessarie */}
<div className="mt-0">
  <h3 className="text-lg font-semibold text-green-700 mb-3">10.1 Autorizzazioni Necessarie</h3>
  <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 shadow-sm">
    <p className="text-gray-700 mb-2">Procedure autorizzative:</p>
    <ul className="list-disc list-inside text-gray-600 space-y-1">
      <li>Titoli edilizi (se necessari)</li>
      <li>VIA/VAS (se richieste)</li>
      <li>Autorizzazione paesaggistica</li>
      <li>Connessione rete elettrica</li>
    </ul>
  </div>
</div>

{/* 10.2 Tempistiche Critiche */}
<div className="mt-6">
  <h3 className="text-lg font-semibold text-green-700 mb-3">10.2 Tempistiche Critiche</h3>
  <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 shadow-sm">
    <p className="text-gray-700 mb-2">Per contributo PNRR:</p>
    <ul className="list-disc list-inside text-gray-600 space-y-1">
      <li>Avvio lavori: DOPO presentazione domanda</li>
      <li>Allaccio: DOPO costituzione CER</li>
      <li>Entrata esercizio: Entro 18 mesi, max 30.06.2026</li>
    </ul>
  </div>
</div>

{/* 10.3 Gestione Cantiere */}
<div className="mt-6">
  <h3 className="text-lg font-semibold text-green-700 mb-3">10.3 Gestione Cantiere</h3>
  <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 shadow-sm">
    <p className="text-gray-700 mb-2">Aspetti operativi:</p>
    <ul className="list-disc list-inside text-gray-600 space-y-1">
      <li>Fornitori qualificati e certificati</li>
      <li>Materiali conformi alle normative</li>
      <li>Sicurezza sul lavoro</li>
      <li>Cronoprogramma rispetto scadenze PNRR</li>
    </ul>
  </div>
</div>

{/* 10.4 Collaudi e Test */}
<div className="mt-6">
  <h3 className="text-lg font-semibold text-green-700 mb-3">10.4 Collaudi e Test</h3>
  <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 shadow-sm">
    <ul className="list-disc list-inside text-gray-600 space-y-1">
      <li>Collaudo tecnico impianti</li>
      <li>Test funzionamento</li>
      <li>Verifiche sicurezza</li>
      <li>Connessione definitiva alla rete</li>
    </ul>
  </div>
</div>
                </div>
              )}
            </div>

            {/* Sezione 11: FASE 10: Richiesta Incentivo Finale */}
            <div id="section-p3-11" className="scroll-mt-24 mt-8 mb-8">
              <div 
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
                onClick={() => toggleSection('section-p3-11')}
              >
                <h2 className="text-xl font-bold text-green-800">11. FASE 10: Richiesta Incentivo Finale</h2>
                <span className="text-green-600">
                  {activeSection === 'section-p3-11' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              {activeSection === 'section-p3-11' && (
                <div className="mt-4 space-y-6 p-4 bg-white rounded-lg border border-gray-200">
                  
                  {/* 11.1 Tempistiche Post-Installazione */}
                  <div className="mt-0">
                    <h3 className="text-lg font-semibold text-indigo-700 mb-3">11.1 Tempistiche Post-Installazione</h3>
                    <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100 shadow-sm">
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Entro 90 giorni: Dalla messa in esercizio</li>
                        <li>Documentazione: Aggiornata e completa</li>
                        <li>Misure: Sistema di monitoraggio attivo</li>
                      </ul>
                    </div>
                  </div>

                  {/* 11.2 Documentazione Finale */}
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-indigo-700 mb-3">11.2 Documentazione Finale</h3>
                    <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100 shadow-sm">
                      <p className="text-gray-700 mb-2">Per GSE:</p>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Verbali messa in esercizio</li>
                        <li>Attestazioni conformità impianti</li>
                        <li>Misure energia prodotta</li>
                        <li>Aggiornamento dati GAUDÌ</li>
                      </ul>
                    </div>
                  </div>

                </div>
              )}
            </div>

            {/* Sezione 12: Istruttoria GSE e Tempistiche */}
            <div id="section-p3-12" className="scroll-mt-24 mt-8">
              <div
                onClick={() => toggleSection('section-p3-12')}
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h2 className="text-xl font-bold text-green-800">12. Istruttoria GSE e Tempistiche</h2>
                <span className="text-green-600">
                  {activeSection === 'section-p3-12' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              {activeSection === 'section-p3-12' && (
                <div className="mt-4 space-y-6 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  {/* 12.1 Processo di Valutazione */}
                  <div>
                    <h3 className="text-lg font-semibold text-green-700 mb-3">12.1 Processo di Valutazione</h3>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                      <p className="text-gray-700 mb-2">Fasi istruttoria:</p>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Comunicazione ricezione richiesta</li>
                        <li>Esame tecnico-amministrativo</li>
                        <li>Verifica dati SII e GAUDÌ</li>
                        <li>Controllo appartenenza cabina primaria</li>
                      </ul>
                    </div>
                  </div>

                  {/* 12.2 Tempistiche Standard */}
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">12.2 Tempistiche Standard</h3>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Tariffa incentivante: 3 mesi (esclusi tempi referente)</li>
                        <li>Contributo PNRR: 90 giorni (esclusi tempi beneficiario)</li>
                        <li>Integrazioni: 30 giorni per risposta</li>
                      </ul>
                    </div>
                  </div>

                  {/* 12.3 Possibili Esiti */}
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">12.3 Possibili Esiti</h3>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Ammissione: Con eventuale contratto incentivazione</li>
                        <li>Rigetto: Con motivazioni specifiche</li>
                        <li>Richiesta integrazioni: Sospensione termini</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sezione 13: Gestione Post-Costituzione */}
            <div id="section-p3-13" className="scroll-mt-24 mt-8">
              <div
                onClick={() => toggleSection('section-p3-13')}
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h2 className="text-xl font-bold text-green-800">13. Gestione Post-Costituzione</h2>
                <span className="text-green-600">
                  {activeSection === 'section-p3-13' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              {activeSection === 'section-p3-13' && (
                <div className="mt-4 space-y-6 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  {/* 13.1 Monitoraggio Continuo */}
                  <div>
                    <h3 className="text-lg font-semibold text-green-700 mb-3">13.1 Monitoraggio Continuo</h3>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                      <p className="text-gray-700 mb-2">Attività operative:</p>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Controllo produzione energia</li>
                        <li>Gestione sistemi accumulo</li>
                        <li>Ottimizzazione consumi membri</li>
                        <li>Manutenzione impianti</li>
                      </ul>
                    </div>
                  </div>

                  {/* 13.2 Reporting GSE */}
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">13.2 Reporting GSE</h3>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Dati mensili: Trasmessi automaticamente</li>
                        <li>Comunicazioni variazioni</li>
                        <li>Aggiornamenti anagrafiche</li>
                        <li>Rettifiche misure (se necessarie)</li>
                      </ul>
                    </div>
                  </div>

                  {/* 13.3 Gestione Finanziaria */}
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">13.3 Gestione Finanziaria</h3>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Incasso incentivi GSE</li>
                        <li>Ripartizione tra membri</li>
                        <li>Fatturazione e contabilità</li>
                        <li>Bilanci periodici</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sezione 14: Modifiche alla Configurazione */}
            <div id="section-p3-14" className="scroll-mt-24 mt-8">
              <div
                onClick={() => toggleSection('section-p3-14')}
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h2 className="text-xl font-bold text-green-800">14. Modifiche alla Configurazione</h2>
                <span className="text-green-600">
                  {activeSection === 'section-p3-14' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              {activeSection === 'section-p3-14' && (
                <div className="mt-4 space-y-6 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  {/* 14.1 Variazioni Ammesse */}
                  <div>
                    <h3 className="text-lg font-semibold text-green-700 mb-3">14.1 Variazioni Ammesse</h3>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                      <p className="text-gray-700 mb-2">Comunicazioni obbligatorie al GSE:</p>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Aggiunta/rimozione punti connessione</li>
                        <li>Nuovi impianti o potenziamenti</li>
                        <li>Modifiche anagrafiche membri</li>
                        <li>Variazioni titolarità</li>
                      </ul>
                    </div>
                  </div>

                  {/* 14.2 Termini per Comunicazioni */}
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">14.2 Termini per Comunicazioni</h3>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Entro 30 giorni: Per variazioni rilevanti</li>
                        <li>Aggiornamento continuo dati GAUDÌ</li>
                        <li>Documentazione: A supporto delle modifiche</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sezione 15: Aspetti Critici da Evitare */}
            <div id="section-p3-15" className="scroll-mt-24 mt-8">
              <div
                onClick={() => toggleSection('section-p3-15')}
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h2 className="text-xl font-bold text-green-800">15. Aspetti Critici da Evitare</h2>
                <span className="text-green-600">
                  {activeSection === 'section-p3-15' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              {activeSection === 'section-p3-15' && (
                <div className="mt-4 space-y-6 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  {/* 15.1 Errori Comuni */}
                  <div>
                    <h3 className="text-lg font-semibold text-green-700 mb-3">15.1 Errori Comuni</h3>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                      <p className="text-gray-700 mb-2">Problematiche frequenti:</p>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Pagamenti ante-domanda PNRR</li>
                        <li>POD fuori cabina primaria</li>
                        <li>Documentazione incompleta o errata</li>
                        <li>Tempistiche non rispettate</li>
                      </ul>
                    </div>
                  </div>

                  {/* 15.2 Vincoli Normativi */}
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">15.2 Vincoli Normativi</h3>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Divieto doppio finanziamento</li>
                        <li>Rispetto principio DNSH</li>
                        <li>Tracciabilità pagamenti obbligatoria</li>
                        <li>CIG/CUP per spese PNRR</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sezione 16: Best Practices Procedurali */}
            <div id="section-p3-16" className="scroll-mt-24 mt-8">
              <div
                onClick={() => toggleSection('section-p3-16')}
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h2 className="text-xl font-bold text-green-800">16. Best Practices Procedurali</h2>
                <span className="text-green-600">
                  {activeSection === 'section-p3-16' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              {activeSection === 'section-p3-16' && (
                <div className="mt-4 space-y-6 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  {/* 16.1 Pianificazione */}
                  <div>
                    <h3 className="text-lg font-semibold text-green-700 mb-3">16.1 Pianificazione</h3>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Coinvolgere esperti fin dall'inizio</li>
                        <li>Verificare tutti i requisiti preliminari</li>
                        <li>Creare cronoprogramma dettagliato</li>
                        <li>Identificare rischi e mitigazioni</li>
                      </ul>
                    </div>
                  </div>

                  {/* 16.2 Comunicazione */}
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">16.2 Comunicazione</h3>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Informare costantemente i membri</li>
                        <li>Mantenere trasparenza decisionale</li>
                        <li>Gestire aspettative realistiche</li>
                        <li>Documentare tutti i passaggi</li>
                      </ul>
                    </div>
                  </div>

                  {/* 16.3 Conformità */}
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">16.3 Conformità</h3>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Seguire scrupolosamente le regole GSE</li>
                        <li>Aggiornare costantemente la documentazione</li>
                        <li>Rispettare tutte le scadenze</li>
                        <li>Preparare controlli e verifiche</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sezione 17: Supporto Professionale */}
            <div id="section-p3-17" className="scroll-mt-24 mt-8">
              <div
                onClick={() => toggleSection('section-p3-17')}
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h2 className="text-xl font-bold text-green-800">17. Supporto Professionale</h2>
                <span className="text-green-600">
                  {activeSection === 'section-p3-17' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              {activeSection === 'section-p3-17' && (
                <div className="mt-4 space-y-6 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  {/* 17.1 Figure Coinvolte */}
                  <div>
                    <h3 className="text-lg font-semibold text-green-700 mb-3">17.1 Figure Coinvolte</h3>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                      <p className="text-gray-700 mb-2">Team multidisciplinare:</p>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Consulente energetico</li>
                        <li>Commercialista per aspetti fiscali</li>
                        <li>Avvocato per statuti e contratti</li>
                        <li>Ingegnere per progettazione impianti</li>
                      </ul>
                    </div>
                  </div>

                  {/* 17.2 Servizi di Supporto */}
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">17.2 Servizi di Supporto</h3>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>ESCo specializzate in CER</li>
                        <li>Società di consulenza energetica</li>
                        <li>Studi professionali integrati</li>
                        <li>Associazioni di categoria</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sezione 18: Checklist Completa Procedura */}
            <div id="section-p3-18" className="scroll-mt-24 mt-8">
              <div
                onClick={() => toggleSection('section-p3-18')}
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h2 className="text-xl font-bold text-green-800">18. Checklist Completa Procedura</h2>
                <span className="text-green-600">
                  {activeSection === 'section-p3-18' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              {activeSection === 'section-p3-18' && (
                <div className="mt-4 space-y-6 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div>
                    <h3 className="text-lg font-semibold text-green-700 mb-3">✅ Fase Preliminare:</h3>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Analisi fattibilità tecnico-economica completata</li>
                        <li>Cabina primaria identificata e verificata</li>
                        <li>Bacino utenti mappato e profilato</li>
                        <li>Studio investimenti e benefici realizzato</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">✅ Fase Costitutiva:</h3>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Forma giuridica scelta e motivata</li>
                        <li>Statuto redatto con tutti i contenuti obbligatori</li>
                        <li>Regolamento interno dettagliato</li>
                        <li>Atto costitutivo firmato</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">✅ Fase Autorizzativa:</h3>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Preventivi connessione richiesti e accettati</li>
                        <li>Autorizzazioni impianti ottenute</li>
                        <li>Documentazione GSE preparata</li>
                        <li>Verifica preliminare GSE richiesta (se opportuna)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">✅ Fase Realizzativa:</h3>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Domanda contributo PNRR presentata PRIMA avvio lavori</li>
                        <li>Fornitori selezionati e contrattualizzati</li>
                        <li>Cronoprogramma rispettato</li>
                        <li>Collaudi e test completati</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">✅ Fase Incentivante:</h3>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Richiesta incentivi presentata entro 90 giorni</li>
                        <li>Contratto GSE sottoscritto</li>
                        <li>Sistemi monitoraggio attivati</li>
                        <li>Ripartizione benefici operativa</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sezione 19: Monitoraggio e KPI */}
            <div id="section-p3-19" className="scroll-mt-24 mt-8">
              <div
                onClick={() => toggleSection('section-p3-19')}
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h2 className="text-xl font-bold text-green-800">19. Monitoraggio e KPI</h2>
                <span className="text-green-600">
                  {activeSection === 'section-p3-19' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              {activeSection === 'section-p3-19' && (
                <div className="mt-4 space-y-6 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div>
                    <h3 className="text-lg font-semibold text-green-700 mb-3">19.1 Indicatori Tecnici</h3>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Energia prodotta vs. prevista</li>
                        <li>Energia condivisa vs. potenziale</li>
                        <li>Efficienza impianti</li>
                        <li>Disponibilità sistemi</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">19.2 Indicatori Economici</h3>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Incentivi ricevuti vs. attesi</li>
                        <li>Risparmi membri vs. stimati</li>
                        <li>Costi gestione vs. budget</li>
                        <li>ROI progetto complessivo</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">19.3 Indicatori Sociali</h3>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Soddisfazione membri</li>
                        <li>Partecipazione attività CER</li>
                        <li>Benefici comunità locale</li>
                        <li>Sostenibilità organizzativa</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* PARTE 4: Statuti e Modelli di Governance */}
            <div className="mt-8 mb-6">
            <h2 className="text-2xl font-bold text-green-800 border-b-2 border-green-500 pb-2">
              Parte 4: Statuti e Modelli di Governance
            </h2>
            
            <div className="space-y-8">
              {/* Sezione 1: Importanza dello Statuto per le CER */}
              <div id="section-p4-1" className="scroll-mt-24 mt-8">
              <div
                onClick={() => toggleSection('section-p4-1')}
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h2 className="text-xl font-bold text-green-800">1. Importanza dello Statuto per le CER</h2>
                <span className="text-green-600">
                  {activeSection === 'section-p4-1' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              {activeSection === 'section-p4-1' && (
                <div className="mt-4 space-y-6 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div>
                    <h3 className="text-lg font-semibold text-green-700 mb-3">1.1 Ruolo Fondamentale</h3>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                      <p className="text-gray-700 mb-2">Lo statuto è il documento che:</p>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Definisce la struttura legale della CER</li>
                        <li>Stabilisce finalità e modalità operative</li>
                        <li>Regola diritti e doveri dei membri</li>
                        <li>Disciplina la governance interna</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">1.2 Requisiti Normativi GSE</h3>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                      <p className="text-gray-700 mb-2">Elementi obbligatori per accesso incentivi:</p>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Oggetto sociale prevalente: Benefici ambientali, economici o sociali</li>
                        <li>Divieto distribuzione utili come finalità principale</li>
                        <li>Partecipazione aperta e volontaria</li>
                        <li>Controllo democratico dei membri</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

              {/* Sezione 2: Forme Giuridiche per CER */}
              <div id="section-p4-2" className="scroll-mt-24 mt-8">
              <div
                onClick={() => toggleSection('section-p4-2')}
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h2 className="text-xl font-bold text-green-800">2. Forme Giuridiche per CER</h2>
                <span className="text-green-600">
                  {activeSection === 'section-p4-2' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              {activeSection === 'section-p4-2' && (
                <div className="mt-4 space-y-6 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div>
                    <h3 className="text-lg font-semibold text-green-700 mb-3">2.1 Associazione (Forma Prevalente)</h3>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                      <p className="text-gray-700 mb-2">Caratteristiche:</p>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Riconosciuta o non riconosciuta</li>
                        <li>Finalità ideali prevalenti</li>
                        <li>Struttura democratica</li>
                        <li>Responsabilità limitata (se riconosciuta)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">2.2 Cooperativa</h3>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                      <p className="text-gray-700 mb-2">Caratteristiche:</p>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Mutualità prevalente</li>
                        <li>Scopo mutualistico</li>
                        <li>Capitale sociale variabile</li>
                        <li>Vigilanza ministeriale</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">2.3 Altre Forme</h3>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Società benefit</li>
                        <li>Imprese sociali</li>
                        <li>Altre forme compatibili con finalità non lucrative</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

              {/* Sezione 3: Struttura di uno Statuto CER */}
              <div id="section-p4-3" className="scroll-mt-24 mt-8">
              <div
                onClick={() => toggleSection('section-p4-3')}
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h2 className="text-xl font-bold text-green-800">3. Struttura di uno Statuto CER</h2>
                <span className="text-green-600">
                  {activeSection === 'section-p4-3' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              {activeSection === 'section-p4-3' && (
                <div className="mt-4 space-y-6 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div>
                    <h3 className="text-lg font-semibold text-green-700 mb-3">3.1 Articolazione Generale</h3>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>TITOLO I: Denominazione, Sede, Durata e Scopo</li>
                        <li>TITOLO II: Associati/Membri</li>
                        <li>TITOLO III: Patrimonio e Mezzi Finanziari</li>
                        <li>TITOLO IV: Organi Sociali</li>
                        <li>TITOLO V: Disposizioni Varie e Finali</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

              {/* Sezione 4: TITOLO I: Fondamenti della CER */}
              <div id="section-p4-4" className="scroll-mt-24 mt-8">
              <div
                onClick={() => toggleSection('section-p4-4')}
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h2 className="text-xl font-bold text-green-800">4. TITOLO I: Fondamenti della CER</h2>
                <span className="text-green-600">
                  {activeSection === 'section-p4-4' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              {activeSection === 'section-p4-4' && (
                <div className="mt-4 space-y-6 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div>
                    <h3 className="text-lg font-semibold text-green-700 mb-3">4.1 Denominazione e Identificazione</h3>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="text-md font-semibold text-gray-700 mb-2">Art. 1 - Denominazione</h4>
                      <p className="text-gray-600">
                        È costituita l'Associazione denominata "Comunità Energetica Rinnovabile [Nome]" 
                        in forma abbreviata "CER [Nome]".
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">4.2 Sede Legale</h3>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="text-md font-semibold text-gray-700 mb-2">Art. 2 - Sede</h4>
                      <p className="text-gray-600 mb-2">
                        L'Associazione ha sede legale in [Comune], via [Indirizzo].
                      </p>
                      <p className="text-gray-600">
                        Il Consiglio Direttivo può istituire sedi operative sul territorio.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">4.3 Durata</h3>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="text-md font-semibold text-gray-700 mb-2">Art. 3 - Durata</h4>
                      <p className="text-gray-600">
                        L'Associazione è costituita a tempo indeterminato.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">4.4 Oggetto Sociale (CRUCIALE)</h3>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="text-md font-semibold text-gray-700 mb-2">Art. 4 - Oggetto Sociale</h4>
                      <p className="text-gray-600 mb-3">
                        L'Associazione ha come oggetto sociale prevalente il conseguimento di benefici 
                        ambientali, economici e sociali per i propri membri e per la comunità locale 
                        attraverso:
                      </p>
                      <ul className="list-disc list-inside text-gray-600 space-y-1 mb-3">
                        <li>a) La produzione, condivisione e scambio di energia elettrica da fonti rinnovabili</li>
                        <li>b) La promozione dell'autoconsumo energetico sostenibile</li>
                        <li>c) La riduzione della dipendenza energetica da fonti fossili</li>
                        <li>d) Lo sviluppo di progetti di efficienza energetica</li>
                        <li>e) La sensibilizzazione su temi energetici e ambientali</li>
                      </ul>
                      <p className="text-gray-600 mb-2">
                        L'Associazione non ha scopo di lucro. Non costituisce distribuzione di utili 
                        la corresponsione ai soci di:
                      </p>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Pagamenti relativi alle bollette energetiche</li>
                        <li>Rimborsi per investimenti in impianti energetici</li>
                        <li>Benefici derivanti dalla condivisione di energia rinnovabile</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

              {/* Sezione 5: TITOLO II: Membri della CER */}
              <div id="section-p4-5" className="scroll-mt-24 mt-8">
              <div
                onClick={() => toggleSection('section-p4-5')}
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h2 className="text-xl font-bold text-green-800">5. TITOLO II: Membri della CER</h2>
                <span className="text-green-600">
                  {activeSection === 'section-p4-5' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              {activeSection === 'section-p4-5' && (
                <div className="mt-4 space-y-6 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div>
                    <h3 className="text-lg font-semibold text-green-700 mb-3">5.1 Categorie di Associati</h3>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="text-md font-semibold text-gray-700 mb-2">Art. 5 - Associati</h4>
                      <p className="text-gray-600 mb-2">Possono far parte dell'Associazione:</p>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>a) SOCI FONDATORI: Sottoscrittori dell'atto costitutivo</li>
                        <li>b) SOCI ORDINARI: Ammessi successivamente alla costituzione</li>
                        <li>c) SOCI PRODUTTORI: Proprietari o gestori di impianti di produzione</li>
                        <li>d) SOCI CONSUMATORI: Utilizzatori di energia condivisa</li>
                      </ul>
                      <p className="text-gray-600 mt-2">Le categorie non determinano diversi diritti di voto, salvo specifiche previsioni.</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">5.2 Requisiti per l'Ammissione</h3>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="text-md font-semibold text-gray-700 mb-2">Art. 6 - Requisiti</h4>
                      <p className="text-gray-600 mb-2">Possono essere ammessi come associati:</p>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>a) Persone fisiche maggiorenni</li>
                        <li>b) Piccole e medie imprese (per cui la partecipazione non costituisce attività commerciale principale)</li>
                        <li>c) Enti territoriali e autorità locali</li>
                        <li>d) Amministrazioni pubbliche locali</li>
                        <li>e) Enti di ricerca e formazione</li>
                        <li>f) Enti religiosi, del terzo settore, di protezione ambientale</li>
                      </ul>
                      <p className="text-gray-600 mt-3 font-semibold">Requisito essenziale: <span className="font-normal">Ubicazione nell'area sottesa alla medesima cabina primaria AT/MT degli impianti della CER.</span></p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">5.3 Procedura di Ammissione</h3>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="text-md font-semibold text-gray-700 mb-2">Art. 7 - Ammissione</h4>
                      <p className="text-gray-600 mb-2">L'ammissione avviene su domanda scritta contenente:</p>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>- Dati anagrafici completi</li>
                        <li>- Codice POD del punto di prelievo</li>
                        <li>- Dichiarazione di accettazione dello statuto e regolamento</li>
                        <li>- Impegno al versamento della quota associativa</li>
                      </ul>
                      <p className="text-gray-600 mt-3">Il Consiglio Direttivo delibera entro 60 giorni dalla richiesta.</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">5.4 Diritti degli Associati</h3>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="text-md font-semibold text-gray-700 mb-2">Art. 8 - Diritti</h4>
                      <p className="text-gray-600 mb-2">Gli associati hanno diritto a:</p>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>- Partecipare alle assemblee con diritto di voto</li>
                        <li>- Esaminare i libri sociali</li>
                        <li>- Essere informati sull'attività dell'Associazione</li>
                        <li>- Beneficiare dei servizi e delle attività</li>
                        <li>- Mantenere la libertà di scelta del fornitore energetico</li>
                        <li>- Recedere liberamente dall'Associazione</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">5.5 Doveri degli Associati</h3>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="text-md font-semibold text-gray-700 mb-2">Art. 9 - Doveri</h4>
                      <p className="text-gray-600 mb-2">Gli associati hanno il dovere di:</p>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>- Versare le quote associative deliberate</li>
                        <li>- Rispettare lo statuto e i regolamenti</li>
                        <li>- Partecipare alle attività dell'Associazione</li>
                        <li>- Fornire i dati necessari per la gestione energetica</li>
                        <li>- Comunicare tempestivamente variazioni rilevanti</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

              {/* Sezione 6: TITOLO III: Patrimonio e Gestione Economica */}
              <div id="section-p4-6" className="scroll-mt-24 mt-8">
              <div
                onClick={() => toggleSection('section-p4-6')}
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h2 className="text-xl font-bold text-green-800">6. TITOLO III: Patrimonio e Gestione Economica</h2>
                <span className="text-green-600">
                  {activeSection === 'section-p4-6' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              {activeSection === 'section-p4-6' && (
                <div className="mt-4 space-y-6 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div>
                    <h3 className="text-lg font-semibold text-green-700 mb-3">6.1 Composizione del Patrimonio</h3>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="text-md font-semibold text-gray-700 mb-2">Art. 10 - Patrimonio</h4>
                      <p className="text-gray-600 mb-2">Il patrimonio dell'Associazione è costituito da:</p>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>- Quote associative e contributi dei soci</li>
                        <li>- Contributi volontari, donazioni e lasciti</li>
                        <li>- Proventi derivanti dalla gestione degli impianti</li>
                        <li>- Incentivi e contributi pubblici</li>
                        <li>- Beni mobili e immobili dell'Associazione</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">6.2 Gestione Incentivi (FONDAMENTALE)</h3>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="text-md font-semibold text-gray-700 mb-2">Art. 11 - Gestione Benefici Economici</h4>
                      <p className="text-gray-600 mb-2">I benefici economici derivanti dalla condivisione di energia rinnovabile (incentivi GSE) sono gestiti secondo il Regolamento interno.</p>
                      <p className="text-gray-600 mb-2">La ripartizione deve garantire:</p>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>- Copertura costi di gestione dell'Associazione</li>
                        <li>- Benefici equi per tutti i partecipanti</li>
                        <li>- Reinvestimenti per sviluppo della comunità</li>
                        <li>- Finalità sociali e ambientali</li>
                      </ul>
                      <p className="text-gray-600 mt-3">Non costituisce distribuzione di utili la corresponsione di benefici economici derivanti dalla condivisione energetica.</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">6.3 Bilancio</h3>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="text-md font-semibold text-gray-700 mb-2">Art. 12 - Bilancio</h4>
                      <p className="text-gray-600 mb-2">L'esercizio sociale coincide con l'anno solare.</p>
                      <p className="text-gray-600">Il Consiglio Direttivo redige annualmente il bilancio da sottoporre all'approvazione dell'Assemblea entro il 30 aprile.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

              {/* Sezione 7: TITOLO IV: Organi Sociali */}
              <div id="section-p4-7" className="scroll-mt-24 mt-8">
              <div
                onClick={() => toggleSection('section-p4-7')}
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h2 className="text-xl font-bold text-green-800">7. TITOLO IV: Organi Sociali</h2>
                <span className="text-green-600">
                  {activeSection === 'section-p4-7' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              {activeSection === 'section-p4-7' && (
                <div className="mt-4 space-y-6 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div>
                    <h3 className="text-lg font-semibold text-green-700 mb-3">7.1 Assemblea degli Associati</h3>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="text-md font-semibold text-gray-700 mb-2">Art. 13 - Assemblea</h4>
                      <p className="text-gray-600 mb-2">L'Assemblea è l'organo sovrano dell'Associazione.</p>
                      <p className="text-gray-600 mb-2">Competenze:</p>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>- Approvazione bilancio e programmi di attività</li>
                        <li>- Elezione e revoca del Consiglio Direttivo</li>
                        <li>- Modifiche statutarie</li>
                        <li>- Scioglimento dell'Associazione</li>
                        <li>- Determinazione quote associative</li>
                      </ul>
                      <p className="text-gray-600 mt-3">Convocazione: Almeno 15 giorni prima tramite comunicazione scritta.</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">7.2 Modalità di Voto</h3>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="text-md font-semibold text-gray-700 mb-2">Art. 14 - Diritto di voto</h4>
                      <p className="text-gray-600 mb-2">Ogni associato ha diritto a un voto.</p>
                      <p className="text-gray-600">Per deliberazioni relative a impianti di produzione, i soci produttori possono avere peso di voto proporzionale alla potenza conferita, nei limiti del regolamento interno.</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">7.3 Consiglio Direttivo</h3>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="text-md font-semibold text-gray-700 mb-2">Art. 15 - Consiglio Direttivo</h4>
                      <p className="text-gray-600 mb-2">L'Associazione è amministrata da un Consiglio Direttivo composto da [numero] membri eletti dall'Assemblea per [durata] anni.</p>
                      <p className="text-gray-600 mb-2">Competenze:</p>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>- Gestione ordinaria dell'Associazione</li>
                        <li>- Attuazione degli scopi sociali</li>
                        <li>- Redazione bilanci e regolamenti</li>
                        <li>- Ammissione nuovi soci</li>
                        <li>- Rappresentanza verso GSE e terzi</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">7.4 Presidente</h3>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="text-md font-semibold text-gray-700 mb-2">Art. 16 - Presidente</h4>
                      <p className="text-gray-600 mb-2">Il Presidente è eletto dal Consiglio Direttivo tra i suoi membri.</p>
                      <p className="text-gray-600 mb-2">Funzioni:</p>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>- Rappresentanza legale dell'Associazione</li>
                        <li>- Convocazione e presidenza organi collegiali</li>
                        <li>- Sottoscrizione atti e contratti</li>
                        <li>- Coordinamento attività</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

              {/* Sezione 8: Regolamento Interno Operativo */}
              <div id="section-p4-8" className="scroll-mt-24 mt-8">
              <div
                onClick={() => toggleSection('section-p4-8')}
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h2 className="text-xl font-bold text-green-800">8. Regolamento Interno Operativo</h2>
                <span className="text-green-600">
                  {activeSection === 'section-p4-8' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              {activeSection === 'section-p4-8' && (
                <div className="mt-4 space-y-6 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div>
                    <h3 className="text-lg font-semibold text-green-700 mb-3">8.1 Finalità del Regolamento</h3>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                      <p className="text-gray-600 mb-2">Il regolamento interno (allegato o separato dallo statuto) disciplina:</p>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Modalità operative dettagliate</li>
                        <li>Ripartizione precisa degli incentivi</li>
                        <li>Gestione tecnica degli impianti</li>
                        <li>Procedure amministrative</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">8.2 Esempio Ripartizione Incentivi</h3>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="text-md font-semibold text-gray-700 mb-2">REGOLAMENTO - Art. X - Ripartizione Benefici Economici</h4>
                      <p className="text-gray-600 mb-2">Gli incentivi GSE vengono ripartiti come segue:</p>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>- 10%: Costi di gestione e amministrazione CER</li>
                        <li>- 45%: Ai soci produttori (proporzionale all'energia immessa)</li>
                        <li>- 45%: Ai soci consumatori (proporzionale all'energia prelevata condivisa)</li>
                      </ul>
                      <p className="text-gray-600 mt-3">La ripartizione è calcolata mensilmente sull'energia effettivamente condivisa secondo le misure GSE.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

              {/* Sezione 9: Clausole Specifiche per GSE */}
              <div id="section-p4-9" className="scroll-mt-24 mt-8">
              <div
                onClick={() => toggleSection('section-p4-9')}
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h2 className="text-xl font-bold text-green-800">9. Clausole Specifiche per GSE</h2>
                <span className="text-green-600">
                  {activeSection === 'section-p4-9' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              {activeSection === 'section-p4-9' && (
                <div className="mt-4 space-y-6 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div>
                    <h3 className="text-lg font-semibold text-green-700 mb-3">9.1 Conformità Normativa</h3>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="text-md font-semibold text-gray-700 mb-2">Art. X - Conformità Normativa</h4>
                      <p className="text-gray-600 mb-2">L'Associazione si impegna al rispetto di:</p>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>- Decreto CACER (DM 414/2023)</li>
                        <li>- Regole Operative GSE</li>
                        <li>- Normativa PNRR per contributi</li>
                        <li>- Principio DNSH (Do No Significant Harm)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">9.2 Obblighi verso GSE</h3>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="text-md font-semibold text-gray-700 mb-2">Art. Y - Rapporti con GSE</h4>
                      <p className="text-gray-600 mb-2">L'Associazione, tramite il Referente designato:</p>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>- Fornisce tutti i dati richiesti per il monitoraggio</li>
                        <li>- Consente accesso per verifiche e controlli</li>
                        <li>- Comunica tempestivamente variazioni rilevanti</li>
                        <li>- Mantiene aggiornati i sistemi informativi (GAUDÌ, SII)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div> {/* Fine Sezione 9 */}

            {/* Sezione 10: Disposizioni Finali */}
            <div id="section-p4-10" className="scroll-mt-24 mt-8">
              <div
                onClick={() => toggleSection('section-p4-10')}
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h2 className="text-xl font-bold text-green-800">10. Disposizioni Finali</h2>
                <span className="text-green-600">
                  {activeSection === 'section-p4-10' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              {activeSection === 'section-p4-10' && (
                <div className="mt-4 space-y-6 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div>
                    <h3 className="text-lg font-semibold text-green-700 mb-3">10.1 Trattamento Dati</h3>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="text-md font-semibold text-gray-700 mb-2">Art. Z - Privacy</h4>
                      <p className="text-gray-600 mb-2">L'Associazione tratta i dati personali dei soci nel rispetto del GDPR.</p>
                      <p className="text-gray-600 mb-2">I soci autorizzano il trattamento dei propri dati per:</p>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>- Gestione rapporti associativi</li>
                        <li>- Adempimenti verso GSE</li>
                        <li>- Finalità connesse all'oggetto sociale</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">10.2 Scioglimento</h3>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="text-md font-semibold text-gray-700 mb-2">Art. W - Scioglimento</h4>
                      <p className="text-gray-600">In caso di scioglimento, il patrimonio residuo è devoluto ad enti con finalità analoghe, previa delibera dell'Assemblea e secondo le disposizioni di legge.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sezione 11: Checklist Statuto CER */}
            <div id="section-p4-11" className="scroll-mt-24 mt-8">
              <div
                onClick={() => toggleSection('section-p4-11')}
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h2 className="text-xl font-bold text-green-800">11. Checklist Statuto CER</h2>
                <span className="text-green-600">
                  {activeSection === 'section-p4-11' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              {activeSection === 'section-p4-11' && (
                <div className="mt-4 space-y-6 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div>
                    <h3 className="text-lg font-semibold text-green-700 mb-3">✅ Elementi obbligatori GSE:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                      <li>Oggetto sociale prevalente: benefici ambientali/economici/sociali</li>
                      <li>Divieto distribuzione utili come scopo principale</li>
                      <li>Partecipazione aperta e volontaria</li>
                      <li>Controllo democratico dei membri</li>
                    </ul>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">✅ Governance funzionale:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                      <li>Organi chiaramente definiti con competenze specifiche</li>
                      <li>Procedure decisionali democratiche</li>
                      <li>Meccanismi di controllo e trasparenza</li>
                      <li>Gestione conflitti e controversie</li>
                    </ul>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">✅ Aspetti operativi:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                      <li>Modalità gestione incentivi e benefici</li>
                      <li>Procedure ammissione/recesso membri</li>
                      <li>Regole tecniche per gestione impianti</li>
                      <li>Conformità normativa e rapporti GSE</li>
                    </ul>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">✅ Sostenibilità economica:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                      <li>Fonti di finanziamento chiaramente identificate</li>
                      <li>Ripartizione equa dei benefici</li>
                      <li>Copertura costi di gestione</li>
                      <li>Meccanismi di reinvestimento</li>
                    </ul>
                  </div>
                </div>
              )}
            </div> {/* Fine Sezione 11 */}

            {/* Sezione 12: Varianti per Diverse Forme Giuridiche */}
            <div id="section-p4-12" className="scroll-mt-24 mt-8">
              <div
                onClick={() => toggleSection('section-p4-12')}
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h2 className="text-xl font-bold text-green-800">12. Varianti per Diverse Forme Giuridiche</h2>
                <span className="text-green-600">
                  {activeSection === 'section-p4-12' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              {activeSection === 'section-p4-12' && (
                <div className="mt-4 space-y-6 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  {/* Sottosezione 12.1 Cooperativa */}
                  <div>
                    <h3 className="text-lg font-semibold text-green-700 mb-3">12.1 Cooperativa</h3>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="text-md font-semibold text-gray-700 mb-2">Adattamenti necessari:</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                        <li>Capitale sociale variabile</li>
                        <li>Quote di partecipazione</li>
                        <li>Ristorni mutualistici</li>
                        <li>Vigilanza delle associazioni di rappresentanza</li>
                      </ul>
                    </div>
                  </div>

                  {/* Sottosezione 12.2 Società Benefit */}
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">12.2 Società Benefit</h3>
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="text-md font-semibold text-gray-700 mb-2">Elementi aggiuntivi:</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                        <li>Benefit specifici statutari</li>
                        <li>Relazione annuale di impatto</li>
                        <li>Bilanciamento scopo lucro/beneficio comune</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* PARTE 5: Casi Pratici, Fiscalità e Best Practices */}
        <div className="mt-8 mb-6"> {/* Contenitore del titolo Parte 5, stile uniformato */}
          <h2 className="text-2xl font-bold text-green-800 border-b-2 border-green-500 pb-2">
            Parte 5: Casi Pratici, Fiscalità e Best Practices
          </h2>
          <div className="space-y-8"> {/* Contenitore per le sezioni della Parte 5 */}
            {/* Sezione 1: Casi Pratici di CER */}
            <div id="section-p5-1" className="scroll-mt-24 mt-8">
              <div
                onClick={() => toggleSection('section-p5-1')}
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h2 className="text-xl font-bold text-green-800">1. Casi Pratici di CER</h2>
                <span className="text-green-600">
                  {activeSection === 'section-p5-1' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              {activeSection === 'section-p5-1' && (
                <div className="mt-4 space-y-6 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  {/* Sottosezione 1.1 Caso A: CER Comunale Rurale */}
                  {/* Sottosezione 1.1 Caso A: CER Comunale Rurale */}
                  <div className="mb-8 p-6 bg-white rounded-xl shadow-lg border border-green-200 hover:shadow-green-100 transition-shadow duration-300">
                    <h3 className="text-xl font-semibold text-green-700 mb-4 border-b border-green-300 pb-2">1.1 Caso A: CER Comunale Rurale</h3>
                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                      <div>
                        <h4 className="text-lg font-medium text-gray-800 mb-2">Contesto:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4 mb-4">
                          <li>Comune: 3.000 abitanti</li>
                          <li>Membri: 150 famiglie + Comune + 2 PMI</li>
                          <li>Impianto: 800 kW fotovoltaico su edifici pubblici</li>
                          <li>Investimento: €600.000</li>
                        </ul>
                        <h4 className="text-lg font-medium text-gray-800 mb-2">Struttura Finanziaria:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                          <li>Contributo PNRR: €240.000 (40%)</li>
                          <li>Finanziamento: €360.000 (60%)</li>
                          <li>Energia condivisa: 450 MWh/anno</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-800 mb-2">Benefici Annuali (TIP ridotta 50%):</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4 mb-4">
                          <li>Incentivo GSE: 450 MWh × 55 €/MWh = <span className="font-semibold">€24.750</span></li>
                          <li>Valorizzazione componenti: 450 MWh × 9 €/MWh = <span className="font-semibold">€4.050</span></li>
                          <li><strong>Totale annuo: <span className="text-green-600 font-bold">€28.800</span></strong></li>
                        </ul>
                        <h4 className="text-lg font-medium text-gray-800 mb-2">Ripartizione Incentivi:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4 mb-4">
                          <li>Gestione CER: €2.880 (10%)</li>
                          <li>Prosumer (Comune): €12.960 (45%)</li>
                          <li>Consumer (cittadini): €12.960 (45%)</li>
                        </ul>
                        <h4 className="text-lg font-medium text-gray-800 mb-2">Risultati:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                          <li>Risparmio medio famiglia: <span className="font-semibold">€85/anno</span></li>
                          <li>ROI progetto: <span className="font-semibold">8 anni</span></li>
                          <li>Riduzione CO2: <span className="font-semibold">190 ton/anno</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Sottosezione 1.2 Caso B: CER Industriale */}
                  <div className="mb-8 p-6 bg-white rounded-xl shadow-lg border border-blue-200 hover:shadow-blue-100 transition-shadow duration-300">
                    <h3 className="text-xl font-semibold text-blue-700 mb-4 border-b border-blue-300 pb-2">1.2 Caso B: CER Industriale</h3>
                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                      <div>
                        <h4 className="text-lg font-medium text-gray-800 mb-2">Contesto:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4 mb-4">
                          <li>Area industriale: 12 aziende PMI</li>
                          <li>Impianto: 990 kW fotovoltaico + 200 kWh accumulo</li>
                          <li>Investimento: €850.000</li>
                          <li>Autofinanziamento: 100% (no PNRR)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-800 mb-2">Benefici Annuali (TIP piena):</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4 mb-4">
                          <li>Energia condivisa: 720 MWh/anno</li>
                          <li>Incentivo GSE: 720 MWh × 110 €/MWh = <span className="font-semibold">€79.200</span></li>
                          <li>Valorizzazione: 720 MWh × 9 €/MWh = <span className="font-semibold">€6.480</span></li>
                          <li><strong>Totale annuo: <span className="text-blue-600 font-bold">€85.680</span></strong></li>
                        </ul>
                        <h4 className="text-lg font-medium text-gray-800 mb-2">Vantaggi:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                          <li>ROI: <span className="font-semibold">6,5 anni</span></li>
                          <li>Maggiore flessibilità: Nessun vincolo PNRR</li>
                          <li>Controllo completo: Gestione autonoma</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Sottosezione 1.3 Caso C: CER Mista Urbana */}
                  <div className="p-6 bg-white rounded-xl shadow-lg border border-purple-200 hover:shadow-purple-100 transition-shadow duration-300">
                    <h3 className="text-xl font-semibold text-purple-700 mb-4 border-b border-purple-300 pb-2">1.3 Caso C: CER Mista Urbana</h3>
                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                      <div>
                        <h4 className="text-lg font-medium text-gray-800 mb-2">Contesto:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4 mb-4">
                          <li>Quartiere urbano: 250 famiglie + 5 condomini + scuola</li>
                          <li>Impianti: 600 kW distribuiti su più edifici</li>
                          <li>Forma giuridica: Associazione</li>
                          <li>Modello: Prosumer multipli</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-800 mb-2">Caratteristiche:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4 mb-4">
                          <li>Contributo PNRR: €180.000</li>
                          <li>Investimenti privati: €270.000</li>
                          <li>Gestione mista: ESCo + CER</li>
                        </ul>
                        <h4 className="text-lg font-medium text-gray-800 mb-2">Innovazioni:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                          <li>Sistemi accumulo: Condivisi</li>
                          <li>Smart grid: Controllo intelligente</li>
                          <li>App mobile: Monitoraggio membri</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* Sezione 2: Aspetti Fiscali delle CER */}
            <div id="section-p5-2" className="scroll-mt-24 mt-8">
              <div
                onClick={() => toggleSection('section-p5-2')}
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h2 className="text-xl font-bold text-green-800">2. Aspetti Fiscali delle CER</h2>
                <span className="text-green-600">
                  {activeSection === 'section-p5-2' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              {activeSection === 'section-p5-2' && (
                <div className="mt-4 space-y-6 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  {/* Sottosezione 2.1 Fiscalità per le CER (Associazioni) */}
                  <div className="mb-6 p-5 bg-white rounded-lg shadow-md border border-sky-100">
                    <h3 className="text-lg font-semibold text-sky-700 mb-3">2.1 Fiscalità per le CER (Associazioni)</h3>
                    <div className="grid md:grid-cols-2 gap-x-6">
                      <div>
                        <h4 className="text-md font-medium text-gray-700 mb-2">Imposte dirette:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                          <li>IRES: Solo su redditi commerciali (rare eccezioni)</li>
                          <li>IRAP: Generalmente non dovuta</li>
                          <li>Registro: Agevolazioni per atti costitutivi</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-md font-medium text-gray-700 mb-2 mt-4 md:mt-0">Documenti fiscali:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                          <li>Fatturazione: Verso GSE per incentivi</li>
                          <li>Regime fiscale: Generalmente forfettario</li>
                          <li>Dichiarazioni: Semplificate</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Sottosezione 2.2 Fiscalità per i Membri */}
                  <div className="mb-6 p-5 bg-white rounded-lg shadow-md border border-sky-100">
                    <h3 className="text-lg font-semibold text-sky-700 mb-3">2.2 Fiscalità per i Membri</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-md font-medium text-gray-700 mb-1">Persone fisiche (Consumer):</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                          <li>Incentivi ricevuti: Generalmente non tassabili</li>
                          <li>Risparmio bolletta: Non costituisce reddito</li>
                          <li>Natura: Rimborso spese/beneficio sociale</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-md font-medium text-gray-700 mb-1">Persone fisiche (Prosumer):</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                          <li>Vendita energia: Reddito diverso (se &gt; €10.000/anno)</li>
                          <li>Autoconsumo: Non tassabile</li>
                          <li>Detrazione 50%: Cumulabile con incentivi CER</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-md font-medium text-gray-700 mb-1">Imprese:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                          <li>Incentivi: Ricavi tassabili</li>
                          <li>Costi impianti: Ammortizzabili</li>
                          <li>Crediti d'imposta: Transizione 4.0/5.0 possibili</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Sottosezione 2.3 Agevolazioni Fiscali */}
                  <div className="p-5 bg-white rounded-lg shadow-md border border-sky-100">
                    <h3 className="text-lg font-semibold text-sky-700 mb-3">2.3 Agevolazioni Fiscali</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-md font-medium text-gray-700 mb-1">Detrazione 50% (Persone fisiche):</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                          <li>Limite: €96.000 per abitazione</li>
                          <li>Impianti: Fotovoltaici e accumulo</li>
                          <li>Cumulabilità: Con incentivi CER</li>
                          <li>Modalità: 10 quote annuali</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-md font-medium text-gray-700 mb-1">Credito d'imposta (Imprese):</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                          <li>Transizione 4.0: Per tecnologie avanzate</li>
                          <li>Transizione 5.0: Con risparmio energetico</li>
                          <li>Altre misure: Regionali e settoriali</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sezione 3: Gestione Operativa Avanzata */}
            <div id="section-p5-3" className="scroll-mt-24 mt-8">
              <div
                onClick={() => toggleSection('section-p5-3')}
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h2 className="text-xl font-bold text-green-800">3. Gestione Operativa Avanzata</h2>
                <span className="text-green-600">
                  {activeSection === 'section-p5-3' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              {activeSection === 'section-p5-3' && (
                <div className="mt-4 space-y-6 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  {/* Sottosezione 3.1 Monitoraggio e Controllo */}
                  <div className="mb-6 p-5 bg-white rounded-lg shadow-md border border-amber-100">
                    <h3 className="text-lg font-semibold text-amber-700 mb-3">3.1 Monitoraggio e Controllo</h3>
                    <div className="grid md:grid-cols-2 gap-x-6">
                      <div>
                        <h4 className="text-md font-medium text-gray-700 mb-2">Sistemi di monitoraggio:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                          <li>Produzione: Dati in tempo reale</li>
                          <li>Consumi: Profilazione membri</li>
                          <li>Accumulo: Gestione ottimizzata</li>
                          <li>Rete: Qualità e stabilità</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-md font-medium text-gray-700 mb-2 mt-4 md:mt-0">KPI operativi:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                          <li>Autoconsumo istantaneo: Target &gt;70%</li>
                          <li>Energia condivisa: Target &gt;60% produzione</li>
                          <li>Disponibilità impianti: Target &gt;98%</li>
                          <li>Efficienza complessiva: Benchmark settoriali</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Sottosezione 3.2 Ottimizzazione Energetica */}
                  <div className="mb-6 p-5 bg-white rounded-lg shadow-md border border-amber-100">
                    <h3 className="text-lg font-semibold text-amber-700 mb-3">3.2 Ottimizzazione Energetica</h3>
                    <div className="grid md:grid-cols-2 gap-x-6">
                      <div>
                        <h4 className="text-md font-medium text-gray-700 mb-2">Strategie di ottimizzazione:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                          <li>Demand Response: Spostamento carichi</li>
                          <li>Storage management: Accumulo intelligente</li>
                          <li>Previsioni meteo: Pianificazione produzione</li>
                          <li>Load balancing: Bilanciamento rete locale</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-md font-medium text-gray-700 mb-2 mt-4 md:mt-0">Tecnologie abilitanti:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                          <li>Smart meter: Misura intelligente</li>
                          <li>IoT sensors: Sensori diffusi</li>
                          <li>AI/ML: Algoritmi predittivi</li>
                          <li>Blockchain: Tracciabilità energia</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Sottosezione 3.3 Engagement dei Membri */}
                  <div className="p-5 bg-white rounded-lg shadow-md border border-amber-100">
                    <h3 className="text-lg font-semibold text-amber-700 mb-3">3.3 Engagement dei Membri</h3>
                    <div className="grid md:grid-cols-2 gap-x-6">
                      <div>
                        <h4 className="text-md font-medium text-gray-700 mb-2">Strumenti di coinvolgimento:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                          <li>App mobile: Monitoraggio personale</li>
                          <li>Portal web: Dashboard comunitaria</li>
                          <li>Newsletter: Aggiornamenti periodici</li>
                          <li>Eventi: Incontri e formazione</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-md font-medium text-gray-700 mb-2 mt-4 md:mt-0">Gamification:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                          <li>Classifiche: Membri più efficienti</li>
                          <li>Premi: Incentivi comportamentali</li>
                          <li>Sfide: Obiettivi collettivi</li>
                          <li>Badge: Riconoscimenti sostenibilità</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* Sezione 4: Best Practices Gestionali */}
            <div id="section-p5-4" className="scroll-mt-24 mt-8">
              <div
                onClick={() => toggleSection('section-p5-4')}
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h2 className="text-xl font-bold text-green-800">4. Best Practices Gestionali</h2>
                <span className="text-green-600">
                  {activeSection === 'section-p5-4' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              {activeSection === 'section-p5-4' && (
                <div className="mt-4 space-y-6 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  {/* Sottosezione 4.1 Governance Efficace */}
                  <div className="mb-6 p-5 bg-white rounded-lg shadow-md border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">4.1 Governance Efficace</h3>
                    <div className="grid md:grid-cols-2 gap-x-6">
                      <div>
                        <h4 className="text-md font-medium text-gray-600 mb-2">Principi chiave:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                          <li>Trasparenza: Tutte le decisioni documentate</li>
                          <li>Partecipazione: Coinvolgimento attivo membri</li>
                          <li>Professionalità: Competenze tecniche adeguate</li>
                          <li>Sostenibilità: Equilibrio economico-sociale</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-md font-medium text-gray-600 mb-2 mt-4 md:mt-0">Struttura organizzativa:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                          <li>Referente tecnico: Competenze energetiche</li>
                          <li>Amministratore: Gestione economico-finanziaria</li>
                          <li>Coordinatore: Relazioni con membri</li>
                          <li>Consulenti: Support specialistico</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Sottosezione 4.2 Gestione Finanziaria */}
                  <div className="mb-6 p-5 bg-white rounded-lg shadow-md border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">4.2 Gestione Finanziaria</h3>
                    <div className="grid md:grid-cols-2 gap-x-6">
                      <div>
                        <h4 className="text-md font-medium text-gray-600 mb-2">Controllo costi:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                          <li>Budget annuale: Pianificazione dettagliata</li>
                          <li>Monitoraggio: Scostamenti mensili</li>
                          <li>Reportistica: Rendiconti trimestrali</li>
                          <li>Audit: Verifiche esterne periodiche</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-md font-medium text-gray-600 mb-2 mt-4 md:mt-0">Ottimizzazione ricavi:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                          <li>Massimizzazione: Energia condivisa</li>
                          <li>Diversificazione: Servizi aggiuntivi</li>
                          <li>Efficienza: Riduzione costi gestione</li>
                          <li>Reinvestimenti: Sviluppo futuro</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Sottosezione 4.3 Comunicazione e Marketing */}
                  <div className="p-5 bg-white rounded-lg shadow-md border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">4.3 Comunicazione e Marketing</h3>
                    <div className="grid md:grid-cols-2 gap-x-6">
                      <div>
                        <h4 className="text-md font-medium text-gray-600 mb-2">Strategia comunicativa:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                          <li>Brand identity: Identità visiva CER</li>
                          <li>Storytelling: Narrativa coinvolgente</li>
                          <li>Social media: Presenza digitale</li>
                          <li>PR locali: Relazioni territorio</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-md font-medium text-gray-600 mb-2 mt-4 md:mt-0">Recruitment membri:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                          <li>Campagne: Sensibilizzazione mirata</li>
                          <li>Referral: Passaparola tra membri esistenti</li>
                          <li>Partnerships: Collaborazioni con enti locali</li>
                          <li>Incentivi: Bonus adesione per nuovi membri</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* Sezione 5: Gestione Rischi e Criticità */}
            <div id="section-p5-5" className="scroll-mt-24 mt-8">
              <div
                onClick={() => toggleSection('section-p5-5')}
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h2 className="text-xl font-bold text-green-800">5. Gestione Rischi e Criticità</h2>
                <span className="text-green-600">
                  {activeSection === 'section-p5-5' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              {activeSection === 'section-p5-5' && (
                <div className="mt-4 space-y-6 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  {/* Sottosezione 5.1 Rischi Tecnici */}
                  <div className="mb-6 p-5 bg-white rounded-lg shadow-md border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">5.1 Rischi Tecnici</h3>
                    <div className="grid md:grid-cols-2 gap-x-6">
                      <div>
                        <h4 className="text-md font-medium text-gray-600 mb-2">Problematiche comuni:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                          <li>Guasti impianti: Piano manutenzione preventiva necessario</li>
                          <li>Sottoperformance: Monitoraggio continuo prestazioni</li>
                          <li>Obsolescenza: Aggiornamenti tecnologici programmati</li>
                          <li>Cyber security: Protezione sistemi digitali</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-md font-medium text-gray-600 mb-2 mt-4 md:mt-0">Strategie di mitigazione:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                          <li>Assicurazioni: Copertura completa impianti</li>
                          <li>Contratti O&M: Manutenzione professionale</li>
                          <li>Ridondanza: Sistemi backup per componenti critici</li>
                          <li>Formazione: Aggiornamento competenze tecniche</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Sottosezione 5.2 Rischi Economici */}
                  <div className="mb-6 p-5 bg-white rounded-lg shadow-md border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">5.2 Rischi Economici</h3>
                    <div className="grid md:grid-cols-2 gap-x-6">
                      <div>
                        <h4 className="text-md font-medium text-gray-600 mb-2">Vulnerabilità finanziarie:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                          <li>Variazioni normative: Cambiamenti regolamentari</li>
                          <li>Prezzi energia: Volatilità mercato elettrico</li>
                          <li>Inflazione: Aumento costi gestione</li>
                          <li>Inadempimenti: Mancati pagamenti membri</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-md font-medium text-gray-600 mb-2 mt-4 md:mt-0">Strategie di protezione:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                          <li>Diversificazione: Fonti ricavo multiple</li>
                          <li>Riserve: Fondi emergenza accantonati</li>
                          <li>Contratti: Clausole di protezione</li>
                          <li>Stress test: Analisi scenari avversi</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Sottosezione 5.3 Rischi Sociali */}
                  <div className="p-5 bg-white rounded-lg shadow-md border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">5.3 Rischi Sociali</h3>
                    <div className="grid md:grid-cols-2 gap-x-6">
                      <div>
                        <h4 className="text-md font-medium text-gray-600 mb-2">Conflitti potenziali:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                          <li>Aspettative: Gestione aspettative realistiche</li>
                          <li>Equità: Distribuzione percepita dei benefici</li>
                          <li>Governance: Partecipazione nelle decisioni</li>
                          <li>Exit strategy: Procedure recesso chiare</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-md font-medium text-gray-600 mb-2 mt-4 md:mt-0">Strategie di prevenzione:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                          <li>Mediazione: Sistemi gestione conflitti</li>
                          <li>Comunicazione: Trasparenza continua</li>
                          <li>Feedback: Ascolto attivo membri</li>
                          <li>Flessibilità: Adattamento alle esigenze</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* Sezione 6: Innovazioni e Sviluppi Futuri */}
            <div id="section-p5-6" className="scroll-mt-24 mt-8">
              <div
                onClick={() => toggleSection('section-p5-6')}
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h2 className="text-xl font-bold text-green-800">6. Innovazioni e Sviluppi Futuri</h2>
                <span className="text-green-600">
                  {activeSection === 'section-p5-6' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              {activeSection === 'section-p5-6' && (
                <div className="mt-4 space-y-6 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  {/* Sottosezione 6.1 Tecnologie Emergenti */}
                  <div className="mb-6 p-5 bg-white rounded-lg shadow-md border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">6.1 Tecnologie Emergenti</h3>
                    <div className="grid md:grid-cols-2 gap-x-6">
                      <div>
                        <h4 className="text-md font-medium text-gray-600 mb-2">Sistemi di accumulo:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                          <li>Batterie: Lithium-ion, LFP, nuove chimiche</li>
                          <li>Power-to-X: Idrogeno verde, e-fuels</li>
                          <li>Accumulo termico: Integrazione con riscaldamento</li>
                          <li>Vehicle-to-Grid: Auto elettriche come storage</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-md font-medium text-gray-600 mb-2 mt-4 md:mt-0">Digitalizzazione avanzata:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                          <li>Digital twin: Gemelli digitali degli impianti</li>
                          <li>Predictive analytics: Manutenzione predittiva</li>
                          <li>Automated trading: Compravendita automatica energia</li>
                          <li>Virtual Power Plant: Aggregazione intelligente</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* Qui andranno le altre sottosezioni della Sezione 6, se presenti nel testo originale */}
                </div>
              )}
            </div>
            {/* Sezione 7: Valutazione dell'Impatto */}
            <div id="section-p5-7" className="scroll-mt-24 mt-8">
              <div
                onClick={() => toggleSection('section-p5-7')}
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h2 className="text-xl font-bold text-green-800">7. Valutazione dell'Impatto</h2>
                <span className="text-green-600">
                  {activeSection === 'section-p5-7' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              {activeSection === 'section-p5-7' && (
                <div className="mt-4 space-y-6 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  {/* Sottosezione 7.1 Impatto Ambientale */}
                  <div className="mb-6 p-5 bg-white rounded-lg shadow-md border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">7.1 Impatto Ambientale</h3>
                    <div className="grid md:grid-cols-2 gap-x-6">
                      <div>
                        <h4 className="text-md font-medium text-gray-600 mb-2">Benefici misurabili:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                          <li>Riduzione CO2: Tonnellate di emissioni evitate annualmente</li>
                          <li>Energia rinnovabile: MWh aggiuntivi prodotti da FER</li>
                          <li>Efficienza: Riduzione sprechi energetici complessivi</li>
                          <li>Biodiversità: Progetti correlati di tutela territorio</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-md font-medium text-gray-600 mb-2 mt-4 md:mt-0">Metodologie di valutazione:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                          <li>LCA: Life Cycle Assessment degli impianti</li>
                          <li>Carbon footprint: Impronta carbonica della CER</li>
                          <li>Indicatori: Standard internazionali riconosciuti</li>
                          <li>Certificazioni: Schemi di verifica terza parte</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Sottosezione 7.2 Impatto Sociale */}
                  <div className="mb-6 p-5 bg-white rounded-lg shadow-md border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">7.2 Impatto Sociale</h3>
                    <div className="grid md:grid-cols-2 gap-x-6">
                      <div>
                        <h4 className="text-md font-medium text-gray-600 mb-2">Dimensioni valutabili:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                          <li>Povertà energetica: Famiglie supportate nel territorio</li>
                          <li>Coesione: Rafforzamento legami comunitari</li>
                          <li>Competenze: Formazione e sensibilizzazione membri</li>
                          <li>Occupazione: Posti di lavoro creati/mantenuti</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-md font-medium text-gray-600 mb-2 mt-4 md:mt-0">Strumenti di misurazione:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                          <li>Survey: Questionari soddisfazione membri</li>
                          <li>Interviste: Focus group e interviste qualitative</li>
                          <li>Indicatori: SROI, Theory of Change</li>
                          <li>Reporting: Standard GRI/B-Corp per sostenibilità</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Sottosezione 7.3 Impatto Economico */}
                  <div className="p-5 bg-white rounded-lg shadow-md border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">7.3 Impatto Economico</h3>
                    <div>
                      <div>
                        <h4 className="text-md font-medium text-gray-600 mb-2">Benefici quantificabili:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                          <li>Risparmio bollette: Per famiglie e imprese membri</li>
                          <li>Investimenti: Capitali attivati sul territorio</li>
                          <li>Indotto: Stimolo economia locale</li>
                          <li>Innovazione: Sviluppo competenze locali</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* Sezione 8: Errori Comuni da Evitare */}
            <div id="section-p5-8" className="scroll-mt-24 mt-8">
              <div
                onClick={() => toggleSection('section-p5-8')}
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h2 className="text-xl font-bold text-green-800">8. Errori Comuni da Evitare</h2>
                <span className="text-green-600">
                  {activeSection === 'section-p5-8' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              {activeSection === 'section-p5-8' && (
                <div className="mt-4 space-y-6 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  {/* Sottosezione 8.1 Errori Fase di Progettazione */}
                  <div className="mb-6 p-5 bg-white rounded-lg shadow-md border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">8.1 Errori Fase di Progettazione</h3>
                    <div>
                      <h4 className="text-md font-medium text-gray-600 mb-2">Sottovalutazioni frequenti:</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                        <li>Dimensionamento: Sovra/sottostima dei fabbisogni energetici</li>
                        <li>Localizzazione: POD posizionati fuori cabina primaria</li>
                        <li>Tempistiche: Cronoprogramma irrealistico</li>
                        <li>Costi: Budget inadeguato per gestione operativa</li>
                      </ul>
                    </div>
                  </div>

                  {/* Sottosezione 8.2 Errori nella Costituzione */}
                  <div className="mb-6 p-5 bg-white rounded-lg shadow-md border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">8.2 Errori nella Costituzione</h3>
                    <div>
                      <h4 className="text-md font-medium text-gray-600 mb-2">Problematiche giuridiche:</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                        <li>Statuto: Mancanza elementi obbligatori GSE</li>
                        <li>Governance: Struttura decisionale inadeguata</li>
                        <li>Documentazione: Incompletezza documenti per GSE</li>
                        <li>Mandati: Autorizzazioni legali insufficienti</li>
                      </ul>
                    </div>
                  </div>

                  {/* Sottosezione 8.3 Errori nella Gestione Operativa */}
                  <div className="p-5 bg-white rounded-lg shadow-md border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">8.3 Errori nella Gestione Operativa</h3>
                    <div>
                      <h4 className="text-md font-medium text-gray-600 mb-2">Criticità gestionali:</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                        <li>Comunicazione: Scarsa trasparenza verso membri</li>
                        <li>Monitoraggio: Controlli prestazioni inadeguati</li>
                        <li>Ripartizione: Criteri benefici non chiari</li>
                        <li>Manutenzione: Piano manutenzione insufficiente</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* Sezione 9: Fattori Critici di Successo */}
            <div id="section-p5-9" className="scroll-mt-24 mt-8">
              <div
                onClick={() => toggleSection('section-p5-9')}
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h2 className="text-xl font-bold text-green-800">9. Fattori Critici di Successo</h2>
                <span className="text-green-600">
                  {activeSection === 'section-p5-9' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              {activeSection === 'section-p5-9' && (
                <div className="mt-4 space-y-6 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  {/* Sottosezione 9.1 Fattori Tecnici */}
                  <div className="mb-6 p-5 bg-white rounded-lg shadow-md border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">9.1 Fattori Tecnici</h3>
                    <div>
                      <h4 className="text-md font-medium text-gray-600 mb-2">Elementi critici per successo:</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                        <li>Qualità impianti: Componenti affidabili e certificati</li>
                        <li>Progettazione: Ottimizzazione energetica avanzata</li>
                        <li>Integrazione: Sistemi tecnologici complementari</li>
                        <li>Scalabilità: Possibilità di espansione futura</li>
                      </ul>
                    </div>
                  </div>

                  {/* Sottosezione 9.2 Fattori Organizzativi */}
                  <div className="mb-6 p-5 bg-white rounded-lg shadow-md border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">9.2 Fattori Organizzativi</h3>
                    <div>
                      <h4 className="text-md font-medium text-gray-600 mb-2">Competenze chiave necessarie:</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                        <li>Leadership: Guida competente e motivata</li>
                        <li>Competenze: Team multidisciplinare qualificato</li>
                        <li>Processi: Procedure operative standardizzate</li>
                        <li>Network: Relazioni istituzionali consolidate</li>
                      </ul>
                    </div>
                  </div>

                  {/* Sottosezione 9.3 Fattori Economici */}
                  <div className="p-5 bg-white rounded-lg shadow-md border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">9.3 Fattori Economici</h3>
                    <div>
                      <h4 className="text-md font-medium text-gray-600 mb-2">Sostenibilità finanziaria:</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                        <li>Business model: Modello economico robusto</li>
                        <li>Diversificazione: Multiple fonti di ricavo</li>
                        <li>Efficienza: Contenimento costi operativi</li>
                        <li>Crescita: Piano sviluppo sostenibile</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* Sezione 10: Checklist Finale per CER di Successo */}
            <div id="section-p5-10" className="scroll-mt-24 mt-8">
              <div
                onClick={() => toggleSection('section-p5-10')}
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h2 className="text-xl font-bold text-green-800">10. Checklist Finale per CER di Successo</h2>
                <span className="text-green-600">
                  {activeSection === 'section-p5-10' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              {activeSection === 'section-p5-10' && (
                <div className="mt-4 space-y-6 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  {/* Sottosezione Fase Pre-costituzione */}
                  <div className="mb-6 p-5 bg-white rounded-lg shadow-md border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">✅ Fase Pre-costituzione:</h3>
                    <ul className="list-none text-gray-600 space-y-1 ml-4">
                      <li>Analisi fattibilità tecnico-economica completa</li>
                      <li>Mappatura stakeholder e potenziali membri</li>
                      <li>Identificazione cabina primaria e verifica POD</li>
                      <li>Business plan dettagliato con analisi scenari</li>
                    </ul>
                  </div>

                  {/* Sottosezione Fase Costituzione */}
                  <div className="mb-6 p-5 bg-white rounded-lg shadow-md border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">✅ Fase Costituzione:</h3>
                    <ul className="list-none text-gray-600 space-y-1 ml-4">
                      <li>Forma giuridica appropriata selezionata</li>
                      <li>Statuto completo con tutti elementi richiesti GSE</li>
                      <li>Regolamento operativo interno dettagliato</li>
                      <li>Team di gestione competente identificato</li>
                    </ul>
                  </div>

                  {/* Sottosezione Fase Autorizzativa */}
                  <div className="mb-6 p-5 bg-white rounded-lg shadow-md border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">✅ Fase Autorizzativa:</h3>
                    <ul className="list-none text-gray-600 space-y-1 ml-4">
                      <li>Tutte le autorizzazioni necessarie ottenute</li>
                      <li>Preventivi connessione rete accettati</li>
                      <li>Documentazione GSE completa e verificata</li>
                      <li>Rispetto scadenze e tempistiche PNRR</li>
                    </ul>
                  </div>

                  {/* Sottosezione Fase Realizzazione */}
                  <div className="mb-6 p-5 bg-white rounded-lg shadow-md border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">✅ Fase Realizzazione:</h3>
                    <ul className="list-none text-gray-600 space-y-1 ml-4">
                      <li>Fornitori qualificati e certificati selezionati</li>
                      <li>Cronoprogramma lavori rispettato</li>
                      <li>Qualità impianti verificata e collaudata</li>
                      <li>Sistemi monitoraggio e controllo attivati</li>
                    </ul>
                  </div>

                  {/* Sottosezione Fase Operativa */}
                  <div className="mb-6 p-5 bg-white rounded-lg shadow-md border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">✅ Fase Operativa:</h3>
                    <ul className="list-none text-gray-600 space-y-1 ml-4">
                      <li>Contratti incentivazione GSE attivi</li>
                      <li>Sistema ripartizione benefici operativo</li>
                      <li>Comunicazione con membri efficace</li>
                      <li>Target di performance raggiunti</li>
                    </ul>
                  </div>

                  {/* Sottosezione Fase Consolidamento */}
                  <div className="p-5 bg-white rounded-lg shadow-md border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">✅ Fase Consolidamento:</h3>
                    <ul className="list-none text-gray-600 space-y-1 ml-4">
                      <li>Sostenibilità economica dimostrata nel tempo</li>
                      <li>Alto livello soddisfazione membri</li>
                      <li>Impatti positivi misurabili e documentati</li>
                      <li>Piano di sviluppo futuro definito</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
            {/* Sezione 11: Conclusioni della Guida CER Completa */}
            <div id="section-p5-11" className="scroll-mt-24 mt-8">
              <div
                onClick={() => toggleSection('section-p5-11')}
                className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h2 className="text-xl font-bold text-green-800">11. Conclusioni della Guida CER Completa</h2>
                <span className="text-green-600">
                  {activeSection === 'section-p5-11' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              {activeSection === 'section-p5-11' && (
                <div className="mt-4 space-y-6 p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <p className="text-gray-700 leading-relaxed">
                    Questa guida esaustiva ha fornito una panoramica completa delle Comunità Energetiche Rinnovabili, coprendo tutti gli aspetti dalla comprensione teorica fino alla gestione operativa avanzata.
                  </p>

                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Messaggi Chiave Finali:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                      <li><span className="font-medium text-gray-700">Opportunità Strategica:</span> Le CER rappresentano un'opportunità unica per cittadini, imprese e enti pubblici di partecipare attivamente alla transizione energetica nazionale.</li>
                      <li><span className="font-medium text-gray-700">Sistema Incentivante:</span> Il framework italiano con Tariffa Incentivante (20 anni) + Contributo PNRR (40%) offre significative opportunità economiche.</li>
                      <li><span className="font-medium text-gray-700">Importanza della Preparazione:</span> La corretta costituzione, documentazione e gestione sono fondamentali per il successo a lungo termine.</li>
                      <li><span className="font-medium text-gray-700">Dimensione Sociale:</span> Collaborazione, trasparenza e governance partecipata sono essenziali per sostenibilità sociale.</li>
                      <li><span className="font-medium text-gray-700">Innovazione Continua:</span> Tecnologie emergenti e nuovi modelli organizzativi continueranno a offrire opportunità di sviluppo.</li>
                    </ul>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Visione Futura:</h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      Le CER non rappresentano solo uno strumento di policy energetica, ma costituiscono un nuovo paradigma di cooperazione sociale che integra:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                      <li>Sostenibilità ambientale (riduzione emissioni)</li>
                      <li>Benefici economici (risparmi e ricavi)</li>
                      <li>Coesione comunitaria (partecipazione attiva)</li>
                    </ul>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Formula del Successo:</h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      Il successo di una CER dipende dall'equilibrio ottimale tra:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                      <li>Competenza tecnica (progettazione e gestione impianti)</li>
                      <li>Sostenibilità economica (modello di business robusto)</li>
                      <li>Governance partecipata (coinvolgimento democratico membri)</li>
                    </ul>
                  </div>

                  <p className="mt-6 text-gray-800 font-semibold leading-relaxed">
                    Con la giusta preparazione, competenze adeguate e gestione professionale, le CER possono diventare un pilastro fondamentale della transizione energetica italiana, contribuendo agli obiettivi nazionali di decarbonizzazione e sviluppo sostenibile.
                  </p>
                </div>
              )}
            </div>
          </div>

            {/* Call to Action Section */}
            <div className="mt-12 p-8 bg-green-50 rounded-lg shadow-lg text-center">
              <h2 className="text-3xl font-bold text-green-700 mb-4">
                Hai bisogno di supporto per la tua Comunità Energetica?
              </h2>
              <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
                SolariX Business è il partner ideale per accompagnarti in ogni fase del percorso verso la creazione e gestione della tua Comunità Energetica Rinnovabile. Il nostro team di esperti è a tua disposizione per una consulenza personalizzata.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <a
                  href="#" // Sostituire con il link corretto per la consulenza
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Richiedi una consulenza gratuita
                </a>
                <a
                  href="/content/cer/Statuto_CER_SolarixBusiness.pdf"
                  download
                  className="bg-white hover:bg-green-50 text-green-600 border border-green-600 font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Scarica lo Statuto SolariX Business in PDF
                </a>
              </div>
            </div>
        </div>
      </div>
        </div>
      </div>
    </div>
    </>
  );
}

// export const dynamic = 'force-dynamic';
