'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Transizione50Page() {
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
    headline: 'Transizione 5.0: Guida Completa 2025',
    description: 'Guida completa alla Transizione 5.0 2025: requisiti, benefici, crediti d\'imposta e procedure per le imprese italiane.',
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
        <title>Transizione 5.0: Guida Completa 2025 | SolariX Business</title>
        <meta name="description" content="Guida completa alla Transizione 5.0 2025: requisiti, benefici, crediti d'imposta e procedure per le imprese italiane." />
        <meta name="keywords" content="Transizione 5.0, credito d'imposta, digitalizzazione, efficienza energetica, innovazione, industria 5.0, beni strumentali" />
        <link rel="canonical" href="https://www.solarixbusiness.it/transizione-5-0" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-700">Transizione 5.0: Guida Completa 2025</h1>

        {/* Immagine Guida Transizione 5.0 */}
        <div className="mb-12 w-full">
          <Image
            src="/images/strumenti/trans-5.0.jpg"
            alt="Guida Transizione 5.0"
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
              <h3 className="text-xl font-medium mb-3 text-blue-600">Parte 1: Quadro Normativo e Caratteristiche Generali</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#piano-transizione" onClick={(e) => handleIndexClick('piano-transizione', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">1</span>
                    Che cos'è il Piano Transizione 5.0
                  </a>
                </li>
                <li>
                  <a href="#quadro-normativo" onClick={(e) => handleIndexClick('quadro-normativo', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">2</span>
                    Quadro Normativo di Riferimento
                  </a>
                </li>
                <li>
                  <a href="#natura-agevolazione" onClick={(e) => handleIndexClick('natura-agevolazione', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">3</span>
                    Natura dell'Agevolazione
                  </a>
                </li>
                <li>
                  <a href="#ambito-temporale" onClick={(e) => handleIndexClick('ambito-temporale', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">4</span>
                    Ambito Temporale
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3 text-blue-600">Parte 1: Requisiti e Soggetti</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#requisito-consumi" onClick={(e) => handleIndexClick('requisito-consumi', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">5</span>
                    Requisito Fondamentale: Riduzione Consumi Energetici
                  </a>
                </li>
                <li>
                  <a href="#soggetti-beneficiari" onClick={(e) => handleIndexClick('soggetti-beneficiari', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">6</span>
                    Soggetti Beneficiari
                  </a>
                </li>
                <li>
                  <a href="#obiettivi-strategici" onClick={(e) => handleIndexClick('obiettivi-strategici', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">7</span>
                    Obiettivi Strategici del Piano
                  </a>
                </li>
                <li>
                  <a href="#investimenti-agevolabili" onClick={(e) => handleIndexClick('investimenti-agevolabili', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">8</span>
                    Tipologie di Investimenti Agevolabili
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-xl font-medium mb-3 text-blue-600">Parte 2: Procedura di Accesso</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#panoramica-processo" onClick={(e) => handleIndexClick('panoramica-processo', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">9</span>
                    Panoramica del Processo
                  </a>
                </li>
                <li>
                  <a href="#comunicazione-preventiva" onClick={(e) => handleIndexClick('comunicazione-preventiva', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">10</span>
                    Comunicazione Preventiva (Ex-Ante)
                  </a>
                </li>
                <li>
                  <a href="#esito-prenotazione" onClick={(e) => handleIndexClick('esito-prenotazione', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">11</span>
                    Esito della Prenotazione
                  </a>
                </li>
                <li>
                  <a href="#conferma-ordini" onClick={(e) => handleIndexClick('conferma-ordini', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">12</span>
                    Conferma Ordini (20%)
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3 text-blue-600">Parte 2: Completamento e Utilizzo</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#completamento-progetto" onClick={(e) => handleIndexClick('completamento-progetto', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">13</span>
                    Completamento del Progetto
                  </a>
                </li>
                <li>
                  <a href="#comunicazione-completamento" onClick={(e) => handleIndexClick('comunicazione-completamento', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">14</span>
                    Comunicazione di Completamento
                  </a>
                </li>
                <li>
                  <a href="#gestione-variazioni" onClick={(e) => handleIndexClick('gestione-variazioni', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">15</span>
                    Gestione Variazioni e Ricalcoli
                  </a>
                </li>
                <li>
                  <a href="#utilizzo-credito" onClick={(e) => handleIndexClick('utilizzo-credito', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">16</span>
                    Utilizzo del Credito d'Imposta
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-xl font-medium mb-3 text-blue-600">Parte 3: Beni e Investimenti</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#beni-materiali-immateriali" onClick={(e) => handleIndexClick('beni-materiali-immateriali', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">17</span>
                    Investimenti Principali: Beni Materiali e Immateriali
                  </a>
                </li>
                <li>
                  <a href="#allegato-a" onClick={(e) => handleIndexClick('allegato-a', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">18</span>
                    Allegato A - Beni Materiali 4.0
                  </a>
                </li>
                <li>
                  <a href="#allegato-b" onClick={(e) => handleIndexClick('allegato-b', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">19</span>
                    Allegato B - Beni Immateriali 4.0
                  </a>
                </li>
                <li>
                  <a href="#esclusioni" onClick={(e) => handleIndexClick('esclusioni', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">20</span>
                    Esclusioni Generali
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3 text-blue-600">Parte 3: Casi Specifici</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#casi-specifici" onClick={(e) => handleIndexClick('casi-specifici', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">21</span>
                    Casi Specifici e Particolari
                  </a>
                </li>
                <li>
                  <a href="#investimenti-aggiuntivi" onClick={(e) => handleIndexClick('investimenti-aggiuntivi', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">22</span>
                    Investimenti Aggiuntivi Agevolabili
                  </a>
                </li>
                <li>
                  <a href="#maggiorazioni-fotovoltaici" onClick={(e) => handleIndexClick('maggiorazioni-fotovoltaici', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">23</span>
                    Maggiorazioni per Moduli Fotovoltaici
                  </a>
                </li>
                <li>
                  <a href="#limitazioni-vincoli" onClick={(e) => handleIndexClick('limitazioni-vincoli', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">24</span>
                    Limitazioni e Vincoli
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-xl font-medium mb-3 text-blue-600">Parte 4: Risparmio Energetico</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#fondamentali-risparmio" onClick={(e) => handleIndexClick('fondamentali-risparmio', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">25</span>
                    Fondamentali del Risparmio Energetico
                  </a>
                </li>
                <li>
                  <a href="#metodologia-calcolo" onClick={(e) => handleIndexClick('metodologia-calcolo', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">26</span>
                    Metodologia di Calcolo Standard
                  </a>
                </li>
                <li>
                  <a href="#procedura-semplificata" onClick={(e) => handleIndexClick('procedura-semplificata', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">27</span>
                    Procedura Semplificata (Novità 2025)
                  </a>
                </li>
                <li>
                  <a href="#documentazione-standardizzata" onClick={(e) => handleIndexClick('documentazione-standardizzata', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">28</span>
                    Documentazione Standardizzata Ammessa
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3 text-blue-600">Parte 4: Calcolo e Verifiche</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#meccanismo-calcolo" onClick={(e) => handleIndexClick('meccanismo-calcolo', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">29</span>
                    Meccanismo di Calcolo Semplificato
                  </a>
                </li>
                <li>
                  <a href="#gestione-beni-sostituiti" onClick={(e) => handleIndexClick('gestione-beni-sostituiti', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">30</span>
                    Gestione Beni Sostituiti
                  </a>
                </li>
                <li>
                  <a href="#casi-specifici-calcolo" onClick={(e) => handleIndexClick('casi-specifici-calcolo', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">31</span>
                    Casi Specifici di Calcolo
                  </a>
                </li>
                <li>
                  <a href="#certificazioni-attestazioni" onClick={(e) => handleIndexClick('certificazioni-attestazioni', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">32</span>
                    Certificazioni e Attestazioni
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-xl font-medium mb-3 text-blue-600">Parte 5: Cumulabilità</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#rivoluzione-cumulabilita" onClick={(e) => handleIndexClick('rivoluzione-cumulabilita', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">33</span>
                    Rivoluzione della Cumulabilità (Legge Bilancio 2025)
                  </a>
                </li>
                <li>
                  <a href="#cumulabilita-nazionali" onClick={(e) => handleIndexClick('cumulabilita-nazionali', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">34</span>
                    Cumulabilità con Agevolazioni Nazionali
                  </a>
                </li>
                <li>
                  <a href="#cumulabilita-europei" onClick={(e) => handleIndexClick('cumulabilita-europei', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">35</span>
                    Cumulabilità con Fondi Europei
                  </a>
                </li>
                <li>
                  <a href="#cumulabilita-energetici" onClick={(e) => handleIndexClick('cumulabilita-energetici', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">36</span>
                    Cumulabilità con Incentivi Energetici
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3 text-blue-600">Parte 5: Gestione Cumulo</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#esclusioni-divieti" onClick={(e) => handleIndexClick('esclusioni-divieti', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">37</span>
                    Esclusioni e Divieti Specifici
                  </a>
                </li>
                <li>
                  <a href="#meccanismo-calcolo-cumulo" onClick={(e) => handleIndexClick('meccanismo-calcolo-cumulo', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">38</span>
                    Meccanismo di Calcolo in Cumulo
                  </a>
                </li>
                <li>
                  <a href="#gestione-amministrativa" onClick={(e) => handleIndexClick('gestione-amministrativa', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">39</span>
                    Gestione Amministrativa del Cumulo
                  </a>
                </li>
                <li>
                  <a href="#strategie-ottimizzazione" onClick={(e) => handleIndexClick('strategie-ottimizzazione', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">40</span>
                    Strategie di Ottimizzazione del Cumulo
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-xl font-medium mb-3 text-blue-600">Parte 6: Controlli e Aspetti Finali</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#sistema-controlli" onClick={(e) => handleIndexClick('sistema-controlli', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">41</span>
                    Sistema di Controlli GSE
                  </a>
                </li>
                <li>
                  <a href="#certificatori" onClick={(e) => handleIndexClick('certificatori', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">42</span>
                    Certificatori e Soggetti Abilitati
                  </a>
                </li>
                <li>
                  <a href="#contatti" onClick={(e) => handleIndexClick('contatti', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">43</span>
                    Contattaci per Assistenza
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-xl font-medium mb-3 text-blue-600">Parte 7: Aspetti Pratici e Supporto</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#limitazioni-vincoli" onClick={(e) => handleIndexClick('limitazioni-vincoli', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">44</span>
                    Limitazioni e Vincoli
                  </a>
                </li>
                <li>
                  <a href="#aspetti-contabili-fiscali" onClick={(e) => handleIndexClick('aspetti-contabili-fiscali', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">45</span>
                    Aspetti Contabili e Fiscali
                  </a>
                </li>
                <li>
                  <a href="#faq" onClick={(e) => handleIndexClick('faq', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">46</span>
                    FAQ - Domande Frequenti
                  </a>
                </li>
                <li>
                  <a href="#contatti-assistenza" onClick={(e) => handleIndexClick('contatti-assistenza', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">47</span>
                    Contatti e Assistenza
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-xl font-medium mb-3 text-blue-600">Parte 8: Approfondimenti Tematici (1)</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#casi-studio-avanzati" onClick={(e) => handleIndexClick('casi-studio-avanzati', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">48</span>
                    Casi di Studio Avanzati
                  </a>
                </li>
                <li>
                  <a href="#formazione-personale" onClick={(e) => handleIndexClick('formazione-personale', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">49</span>
                    Transizione 5.0 e Formazione del Personale
                  </a>
                </li>
                <li>
                  <a href="#monitoraggio-performance" onClick={(e) => handleIndexClick('monitoraggio-performance', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">50</span>
                    Transizione 5.0 e Monitoraggio delle Performance
                  </a>
                </li>
                <li>
                  <a href="#finanza-sostenibile" onClick={(e) => handleIndexClick('finanza-sostenibile', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">51</span>
                    Transizione 5.0 e Finanza Sostenibile
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3 text-blue-600">Parte 8: Approfondimenti Tematici (2)</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#innovazione" onClick={(e) => handleIndexClick('innovazione', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">52</span>
                    Transizione 5.0 e Innovazione
                  </a>
                </li>
                <li>
                  <a href="#economia-circolare" onClick={(e) => handleIndexClick('economia-circolare', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">53</span>
                    Transizione 5.0 ed Economia Circolare
                  </a>
                </li>
                <li>
                  <a href="#cybersecurity" onClick={(e) => handleIndexClick('cybersecurity', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">54</span>
                    Transizione 5.0 e Cybersecurity
                  </a>
                </li>
                <li>
                  <a href="#gestione-dati" onClick={(e) => handleIndexClick('gestione-dati', e)} className="text-blue-600 hover:underline flex items-center">
                    <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-center mr-2">55</span>
                    Transizione 5.0 e Gestione dei Dati
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Sezione 1: Che cos'è il Piano Transizione 5.0 */}
        <div className="mb-10">
          <div className="flex items-center justify-between bg-blue-700 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('piano-transizione')}>
            <h2 id="piano-transizione" className="text-2xl font-semibold text-white">1. Che cos'è il Piano Transizione 5.0</h2>
            <span className="text-white">{activeSection === 'piano-transizione' ? '−' : '+'}</span>
          </div>
          {activeSection === 'piano-transizione' && (
            <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
              <p className="mb-4">Il Piano Transizione 5.0 è una misura innovativa che mira a sostenere la trasformazione digitale ed energetica delle imprese italiane. L'obiettivo specifico è guidare il sistema produttivo verso un modello più:</p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Efficiente dal punto di vista energetico</li>
                <li>Sostenibile ambientalmente</li>
                <li>Basato sulle fonti rinnovabili</li>
              </ul>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h4 className="font-medium text-blue-700 mb-2">Integrazione con Altri Piani</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Si inserisce come complemento al Piano Transizione 4.0</li>
                  <li>È allineato con le azioni previste dal piano REPowerEU</li>
                  <li>Fa parte della strategia nazionale di transizione ecologica</li>
                </ul>
              </div>
              
              <p>Il Piano Transizione 5.0 rappresenta un'evoluzione significativa rispetto al precedente Piano 4.0, aggiungendo alla digitalizzazione l'obiettivo fondamentale dell'efficienza energetica e della sostenibilità ambientale.</p>
            </div>
          )}
        </div>
        
        {/* Sezione 2: Quadro Normativo di Riferimento */}
        <div className="mb-10">
          <div className="flex items-center justify-between bg-blue-700 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('quadro-normativo')}>
            <h2 id="quadro-normativo" className="text-2xl font-semibold text-white">2. Quadro Normativo di Riferimento</h2>
            <span className="text-white">{activeSection === 'quadro-normativo' ? '−' : '+'}</span>
          </div>
          {activeSection === 'quadro-normativo' && (
            <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">2.1 Normativa Principale</h3>
              
              <p className="mb-3">Fondamento legislativo:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Art. 38 del decreto-legge 2 marzo 2024, n. 19 (Decreto PNRR-quater)</li>
                <li>Conversione: Legge 29 aprile 2024, n. 56</li>
              </ul>
              
              <p className="mb-3">Modifiche significative:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Commi 427-429 della Legge 30 dicembre 2024, n. 207 (Legge di Bilancio 2025)</li>
                <li>Ampliamento dell'ambito di applicazione</li>
                <li>Semplificazione delle procedure di accesso</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-blue-700 mb-4">2.2 Decreti Attuativi</h3>
              
              <p className="mb-3">Decreto Ministeriale 24 luglio 2024:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Del Ministro delle Imprese e del Made in Italy</li>
                <li>Di concerto con il Ministro dell'Economia e delle Finanze</li>
                <li>Denominato DM "Transizione 5.0"</li>
              </ul>
              
              <p className="mb-3">Circolare Operativa 16 agosto 2024:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Del Ministero delle Imprese e del Made in Italy</li>
                <li>Fornisce chiarimenti tecnici per l'applicazione</li>
                <li>Istruzioni operative su vari profili</li>
              </ul>
            </div>
          )}
        </div>
        
        {/* Sezione 3: Natura dell'Agevolazione */}
        <div className="mb-10">
          <div className="flex items-center justify-between bg-blue-700 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('natura-agevolazione')}>
            <h2 id="natura-agevolazione" className="text-2xl font-semibold text-white">3. Natura dell'Agevolazione</h2>
            <span className="text-white">{activeSection === 'natura-agevolazione' ? '−' : '+'}</span>
          </div>
          {activeSection === 'natura-agevolazione' && (
            <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">3.1 Tipologia di Incentivo</h3>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Credito d'imposta per progetti di innovazione</li>
                <li>Non è aiuto di Stato (misura generale e non selettiva)</li>
                <li>Utilizzabile in compensazione tramite modello F24</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-blue-700 mb-4">3.2 Dotazione Finanziaria</h3>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>€6,3 miliardi per il biennio 2024-2025</li>
                <li>Budget significativo per sostenere la transizione</li>
              </ul>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-medium">Il credito d'imposta Transizione 5.0 si configura come una misura generale e non selettiva, pertanto non rientra nella disciplina degli aiuti di Stato. Questo aspetto è particolarmente vantaggioso in quanto consente una maggiore flessibilità nell'applicazione e nella cumulabilità con altre agevolazioni.</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Sezione 4: Ambito Temporale */}
        <div className="mb-10">
          <div className="flex items-center justify-between bg-blue-700 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('ambito-temporale')}>
            <h2 id="ambito-temporale" className="text-2xl font-semibold text-white">4. Ambito Temporale</h2>
            <span className="text-white">{activeSection === 'ambito-temporale' ? '−' : '+'}</span>
          </div>
          {activeSection === 'ambito-temporale' && (
            <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">4.1 Periodo di Ammissibilità</h3>
              
              <p className="mb-3">Investimenti ammissibili:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Avviati dal 1° gennaio 2024</li>
                <li>Completati entro il 31 dicembre 2025</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-blue-700 mb-4">4.2 Definizione di "Avvio"</h3>
              
              <p className="mb-3">L'investimento si considera avviato alla data del:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Primo impegno giuridicamente vincolante ad ordinare i beni</li>
                <li>Qualsiasi altro impegno che renda l'investimento irreversibile</li>
              </ul>
              
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-4">
                <p className="flex items-start">
                  <span className="text-yellow-600 font-bold mr-2">⚠️</span>
                  <span><strong>ATTENZIONE:</strong> Investimenti ordinati o prenotati nel 2023 o anni precedenti NON sono ammissibili, anche se consegna e messa in funzione avvengono nel 2024-2025.</span>
                </p>
              </div>
              
              <p>È fondamentale prestare particolare attenzione alla data di avvio dell'investimento, in quanto rappresenta un criterio discriminante per l'ammissibilità al Piano Transizione 5.0. La documentazione relativa agli ordini e agli impegni deve essere conservata con cura per eventuali controlli.</p>
            </div>
          )}
        </div>
        
        {/* Sezione 5: Requisito Fondamentale: Riduzione Consumi Energetici */}
        <div className="mb-10">
          <div className="flex items-center justify-between bg-blue-700 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('requisito-consumi')}>
            <h2 id="requisito-consumi" className="text-2xl font-semibold text-white">5. Requisito Fondamentale: Riduzione Consumi Energetici</h2>
            <span className="text-white">{activeSection === 'requisito-consumi' ? '−' : '+'}</span>
          </div>
          {activeSection === 'requisito-consumi' && (
            <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">5.1 Condizione Essenziale</h3>
              
              <p className="mb-4">Per accedere al credito d'imposta Transizione 5.0, è <strong>indispensabile</strong> che l'investimento comporti una <strong>riduzione dei consumi energetici</strong> dell'unità produttiva interessata.</p>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h4 className="font-medium text-blue-700 mb-2">Soglie Minime di Riduzione</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Almeno 3%</strong> per accedere all'aliquota base del credito d'imposta</li>
                  <li><strong>Almeno 6%</strong> per accedere all'aliquota maggiorata</li>
                  <li><strong>Almeno 10%</strong> per accedere all'aliquota massima</li>
                </ul>
              </div>
              
              <h3 className="text-xl font-semibold text-blue-700 mb-4">5.2 Modalità di Misurazione</h3>
              
              <p className="mb-3">La riduzione dei consumi energetici deve essere:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Misurata in termini di energia primaria totale</li>
                <li>Calcolata rispetto alla media dei consumi dei due anni precedenti l'investimento</li>
                <li>Certificata da un tecnico abilitato o da un ente accreditato</li>
              </ul>
              
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-4">
                <p className="flex items-start">
                  <span className="text-yellow-600 font-bold mr-2">⚠️</span>
                  <span><strong>IMPORTANTE:</strong> Il mancato raggiungimento della soglia minima di riduzione dei consumi energetici comporta la <strong>decadenza totale</strong> dal beneficio, con obbligo di restituzione dell'intero credito eventualmente già utilizzato.</span>
                </p>
              </div>
            </div>
          )}
        </div>
        
        {/* Sezione 6: Soggetti Beneficiari */}
        <div className="mb-10">
          <div className="flex items-center justify-between bg-blue-700 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('soggetti-beneficiari')}>
            <h2 id="soggetti-beneficiari" className="text-2xl font-semibold text-white">6. Soggetti Beneficiari</h2>
            <span className="text-white">{activeSection === 'soggetti-beneficiari' ? '−' : '+'}</span>
          </div>
          {activeSection === 'soggetti-beneficiari' && (
            <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">6.1 Imprese Ammesse</h3>
              
              <p className="mb-3">Possono beneficiare dell'agevolazione:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Tutte le imprese residenti nel territorio dello Stato</li>
                <li>Stabili organizzazioni di soggetti non residenti</li>
                <li>Indipendentemente dalla forma giuridica, dimensione, regime fiscale o settore economico</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-blue-700 mb-4">6.2 Requisiti Generali</h3>
              
              <p className="mb-3">Le imprese devono rispettare le seguenti condizioni:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Essere in regola con le normative sulla sicurezza nei luoghi di lavoro</li>
                <li>Essere in regola con gli obblighi di versamento dei contributi previdenziali e assistenziali</li>
                <li>Non essere in stato di liquidazione volontaria, fallimento, liquidazione coatta amministrativa, concordato preventivo senza continuità aziendale</li>
              </ul>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h4 className="font-medium text-blue-700 mb-2">Novità 2025</h4>
                <p>Con la Legge di Bilancio 2025, l'accesso è stato esteso anche alle imprese del settore agricolo, della pesca e dell'acquacoltura, precedentemente escluse dalla misura originaria.</p>
              </div>
              
              <h3 className="text-xl font-semibold text-blue-700 mb-4">6.3 Esclusioni</h3>
              
              <p className="mb-3">Sono escluse dal beneficio:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Imprese in difficoltà ai sensi della normativa europea</li>
                <li>Imprese destinatarie di sanzioni interdittive</li>
              </ul>
            </div>
          )}
        </div>
        
        {/* Sezione 7: Obiettivi Strategici del Piano */}
        <div className="mb-10">
          <div className="flex items-center justify-between bg-blue-700 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('obiettivi-strategici')}>
            <h2 id="obiettivi-strategici" className="text-2xl font-semibold text-white">7. Obiettivi Strategici del Piano</h2>
            <span className="text-white">{activeSection === 'obiettivi-strategici' ? '−' : '+'}</span>
          </div>
          {activeSection === 'obiettivi-strategici' && (
            <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">7.1 Obiettivi Principali</h3>
              
              <p className="mb-3">Il Piano Transizione 5.0 persegue i seguenti obiettivi strategici:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Sostenere e incentivare le imprese che investono in beni strumentali nuovi, materiali e immateriali, funzionali alla trasformazione tecnologica e digitale dei processi produttivi</li>
                <li>Promuovere la riduzione dei consumi energetici e l'efficientamento dei processi produttivi</li>
                <li>Favorire la transizione verso fonti energetiche rinnovabili</li>
                <li>Sostenere la competitività delle imprese italiane nel contesto internazionale</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-blue-700 mb-4">7.2 Impatto Atteso</h3>
              
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="py-2 px-4 border-b border-gray-300 text-left">Ambito</th>
                      <th className="py-2 px-4 border-b border-gray-300 text-left">Obiettivo Quantitativo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-300">Riduzione consumi energetici</td>
                      <td className="py-2 px-4 border-b border-gray-300">-20% entro il 2030</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-300">Incremento energia da fonti rinnovabili</td>
                      <td className="py-2 px-4 border-b border-gray-300">+30% entro il 2030</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-300">Riduzione emissioni CO₂</td>
                      <td className="py-2 px-4 border-b border-gray-300">-25% entro il 2030</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-300">Digitalizzazione processi produttivi</td>
                      <td className="py-2 px-4 border-b border-gray-300">+40% entro il 2030</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <p>Il Piano Transizione 5.0 si inserisce nel contesto degli obiettivi europei di decarbonizzazione e nella strategia italiana di transizione ecologica, contribuendo al raggiungimento degli obiettivi climatici fissati dall'Unione Europea per il 2030 e il 2050.</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Sezione 8: Tipologie di Investimenti Agevolabili */}
        <div className="mb-10">
          <div className="flex items-center justify-between bg-blue-700 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('investimenti-agevolabili')}>
            <h2 id="investimenti-agevolabili" className="text-2xl font-semibold text-white">8. Tipologie di Investimenti Agevolabili</h2>
            <span className="text-white">{activeSection === 'investimenti-agevolabili' ? '−' : '+'}</span>
          </div>
          {activeSection === 'investimenti-agevolabili' && (
            <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">8.1 Categorie Principali</h3>
              
              <p className="mb-3">Gli investimenti agevolabili si suddividono in:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Beni materiali 4.0</strong> - Allegato A alla legge n. 232/2016</li>
                <li><strong>Beni immateriali 4.0</strong> - Allegato B alla legge n. 232/2016</li>
                <li><strong>Investimenti in efficienza energetica</strong> - Nuova categoria specifica</li>
                <li><strong>Investimenti in autoproduzione da fonti rinnovabili</strong> - Nuova categoria specifica</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-blue-700 mb-4">8.2 Requisiti Generali</h3>
              
              <p className="mb-3">Per essere agevolabili, gli investimenti devono:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Essere nuovi</li>
                <li>Essere strumentali all'attività d'impresa</li>
                <li>Essere destinati a strutture produttive situate nel territorio italiano</li>
                <li>Contribuire alla riduzione dei consumi energetici</li>
              </ul>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h4 className="font-medium text-blue-700 mb-2">Novità Rispetto a Transizione 4.0</h4>
                <p>A differenza del precedente Piano Transizione 4.0, il nuovo Piano 5.0 non prevede agevolazioni per i beni materiali e immateriali "ordinari" (non 4.0), concentrando le risorse esclusivamente sugli investimenti ad alto contenuto tecnologico e con impatto positivo sul risparmio energetico.</p>
              </div>
              
              <h3 className="text-xl font-semibold text-blue-700 mb-4">8.3 Aliquote del Credito d'Imposta</h3>
              
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="py-2 px-4 border-b border-gray-300 text-left">Tipologia di Investimento</th>
                      <th className="py-2 px-4 border-b border-gray-300 text-left">Riduzione 3-6%</th>
                      <th className="py-2 px-4 border-b border-gray-300 text-left">Riduzione 6-10%</th>
                      <th className="py-2 px-4 border-b border-gray-300 text-left">Riduzione &gt;10%</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-300">Beni materiali 4.0</td>
                      <td className="py-2 px-4 border-b border-gray-300">35%</td>
                      <td className="py-2 px-4 border-b border-gray-300">40%</td>
                      <td className="py-2 px-4 border-b border-gray-300">45%</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-300">Beni immateriali 4.0</td>
                      <td className="py-2 px-4 border-b border-gray-300">20%</td>
                      <td className="py-2 px-4 border-b border-gray-300">25%</td>
                      <td className="py-2 px-4 border-b border-gray-300">30%</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-300">Efficienza energetica</td>
                      <td className="py-2 px-4 border-b border-gray-300">35%</td>
                      <td className="py-2 px-4 border-b border-gray-300">40%</td>
                      <td className="py-2 px-4 border-b border-gray-300">45%</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-300">Autoproduzione rinnovabili</td>
                      <td className="py-2 px-4 border-b border-gray-300">35%</td>
                      <td className="py-2 px-4 border-b border-gray-300">40%</td>
                      <td className="py-2 px-4 border-b border-gray-300">45%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Sezione 9: Panoramica del Processo */}
      <div className="mb-10">
        <div className="flex items-center justify-between bg-blue-700 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('panoramica-processo')}>
          <h2 id="panoramica-processo" className="text-2xl font-semibold text-white">9. Panoramica del Processo</h2>
          <span className="text-white">{activeSection === 'panoramica-processo' ? '−' : '+'}</span>
        </div>
        {activeSection === 'panoramica-processo' && (
          <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">9.1 Fasi Principali</h3>
            
            <p className="mb-4">Il processo di accesso al credito d'imposta Transizione 5.0 si articola nelle seguenti fasi principali:</p>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Fase</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Descrizione</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Tempistica</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">1. Comunicazione preventiva</td>
                    <td className="py-2 px-4 border-b border-gray-300">Invio della comunicazione preventiva al GSE</td>
                    <td className="py-2 px-4 border-b border-gray-300">Prima dell'avvio dell'investimento</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">2. Prenotazione delle risorse</td>
                    <td className="py-2 px-4 border-b border-gray-300">Conferma della prenotazione da parte del GSE</td>
                    <td className="py-2 px-4 border-b border-gray-300">Entro 30 giorni dalla comunicazione</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">3. Conferma ordini</td>
                    <td className="py-2 px-4 border-b border-gray-300">Conferma dell'effettuazione degli ordini</td>
                    <td className="py-2 px-4 border-b border-gray-300">Entro 60 giorni dalla prenotazione</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">4. Completamento progetto</td>
                    <td className="py-2 px-4 border-b border-gray-300">Realizzazione dell'investimento</td>
                    <td className="py-2 px-4 border-b border-gray-300">Entro il 31 dicembre 2025</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">5. Comunicazione di completamento</td>
                    <td className="py-2 px-4 border-b border-gray-300">Invio della comunicazione di completamento al GSE</td>
                    <td className="py-2 px-4 border-b border-gray-300">Entro 60 giorni dal completamento</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">6. Utilizzo del credito</td>
                    <td className="py-2 px-4 border-b border-gray-300">Utilizzo in compensazione del credito d'imposta</td>
                    <td className="py-2 px-4 border-b border-gray-300">A partire dall'anno successivo</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h4 className="font-medium text-blue-700 mb-2">Piattaforma GSE</h4>
              <p>Tutte le comunicazioni devono essere effettuate tramite l'apposita piattaforma informatica messa a disposizione dal Gestore dei Servizi Energetici (GSE), accessibile dal portale ufficiale.</p>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">9.2 Documentazione Richiesta</h3>
            
            <p className="mb-3">Per ciascuna fase del processo è necessario predisporre specifica documentazione:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Progetto di investimento con descrizione dettagliata dei beni</li>
              <li>Preventivi e ordini di acquisto</li>
              <li>Documentazione tecnica dei beni</li>
              <li>Relazione tecnica sul risparmio energetico atteso</li>
              <li>Fatture e documenti di trasporto</li>
              <li>Attestazioni e certificazioni tecniche</li>
            </ul>
          </div>
        )}
      </div>
      
      {/* Sezione 10: Comunicazione Preventiva (Ex-Ante) */}
      <div className="mb-10">
        <div className="flex items-center justify-between bg-blue-700 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('comunicazione-preventiva')}>
          <h2 id="comunicazione-preventiva" className="text-2xl font-semibold text-white">10. Comunicazione Preventiva (Ex-Ante)</h2>
          <span className="text-white">{activeSection === 'comunicazione-preventiva' ? '−' : '+'}</span>
        </div>
        {activeSection === 'comunicazione-preventiva' && (
          <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">10.1 Contenuto della Comunicazione</h3>
            
            <p className="mb-3">La comunicazione preventiva deve contenere:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Dati identificativi dell'impresa</li>
              <li>Descrizione del progetto di investimento</li>
              <li>Elenco dei beni che si intende acquistare</li>
              <li>Importo complessivo dell'investimento previsto</li>
              <li>Stima del risparmio energetico atteso</li>
              <li>Metodologia di calcolo utilizzata</li>
              <li>Cronoprogramma dell'investimento</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">10.2 Modalità di Presentazione</h3>
            
            <p className="mb-3">La comunicazione deve essere presentata:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Esclusivamente in via telematica</li>
              <li>Tramite la piattaforma informatica del GSE</li>
              <li>Prima dell'avvio dell'investimento</li>
              <li>Utilizzando i moduli predisposti dal GSE</li>
            </ul>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-6">
              <p className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">⚠️</span>
                <span><strong>ATTENZIONE:</strong> La comunicazione preventiva è obbligatoria e deve essere presentata prima dell'avvio dell'investimento. La mancata presentazione comporta l'inammissibilità dell'investimento al beneficio.</span>
              </p>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">10.3 Finestre Temporali</h3>
            
            <p className="mb-3">Le finestre temporali per la presentazione delle comunicazioni preventive sono:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Prima finestra: dal 1° maggio 2024 al 31 luglio 2024</li>
              <li>Seconda finestra: dal 1° settembre 2024 al 30 novembre 2024</li>
              <li>Terza finestra: dal 1° gennaio 2025 al 31 marzo 2025</li>
              <li>Quarta finestra: dal 1° maggio 2025 al 31 luglio 2025</li>
            </ul>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <p>Il GSE procederà all'istruttoria delle comunicazioni preventive secondo l'ordine cronologico di presentazione, fino ad esaurimento delle risorse disponibili per ciascuna finestra temporale.</p>
            </div>
          </div>
        )}
      </div>
      
      {/* Sezione 11: Esito della Prenotazione */}
      <div className="mb-10">
        <div className="flex items-center justify-between bg-blue-700 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('esito-prenotazione')}>
          <h2 id="esito-prenotazione" className="text-2xl font-semibold text-white">11. Esito della Prenotazione</h2>
          <span className="text-white">{activeSection === 'esito-prenotazione' ? '−' : '+'}</span>
        </div>
        {activeSection === 'esito-prenotazione' && (
          <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">11.1 Istruttoria GSE</h3>
            
            <p className="mb-3">Il GSE effettua l'istruttoria delle comunicazioni preventive verificando:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>La completezza della documentazione</li>
              <li>La coerenza del progetto con le finalità della misura</li>
              <li>L'ammissibilità dei beni oggetto dell'investimento</li>
              <li>La congruenza della metodologia di calcolo del risparmio energetico</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">11.2 Tempistiche di Risposta</h3>
            
            <p className="mb-3">Il GSE comunica l'esito dell'istruttoria:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Entro 30 giorni dalla presentazione della comunicazione preventiva</li>
              <li>Tramite PEC e attraverso il portale informatico</li>
              <li>Con indicazione dell'importo massimo del credito d'imposta prenotato</li>
            </ul>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h4 className="font-medium text-blue-700 mb-2">Possibili Esiti</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Accoglimento</strong>: prenotazione confermata con indicazione dell'importo massimo del credito d'imposta</li>
                <li><strong>Accoglimento parziale</strong>: prenotazione confermata solo per alcuni beni o con importo ridotto</li>
                <li><strong>Rigetto</strong>: prenotazione non confermata con indicazione delle motivazioni</li>
                <li><strong>Sospensione</strong>: richiesta di integrazioni documentali</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">11.3 Validità della Prenotazione</h3>
            
            <p className="mb-3">La prenotazione del credito d'imposta:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Ha validità di 60 giorni dalla data di comunicazione dell'esito positivo</li>
              <li>Decade automaticamente se entro tale termine non viene confermata con l'effettuazione degli ordini</li>
              <li>Non è cedibile o trasferibile ad altri soggetti</li>
            </ul>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">⚠️</span>
                <span>In caso di esaurimento delle risorse disponibili per una specifica finestra temporale, le comunicazioni preventive eccedenti saranno automaticamente inserite nella finestra successiva, mantenendo l'ordine cronologico di presentazione.</span>
              </p>
            </div>
          </div>
        )}
      </div>
      
      {/* Sezione 12: Conferma Ordini (20%) */}
      <div className="mb-10">
        <div className="flex items-center justify-between bg-blue-700 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('conferma-ordini')}>
          <h2 id="conferma-ordini" className="text-2xl font-semibold text-white">12. Conferma Ordini (20%)</h2>
          <span className="text-white">{activeSection === 'conferma-ordini' ? '−' : '+'}</span>
        </div>
        {activeSection === 'conferma-ordini' && (
          <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">12.1 Obbligo di Conferma</h3>
            
            <p className="mb-4">Entro 60 giorni dalla comunicazione dell'esito positivo della prenotazione, l'impresa deve confermare l'effettuazione degli ordini per almeno il 20% del valore complessivo dei beni oggetto dell'investimento.</p>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h4 className="font-medium text-blue-700 mb-2">Documentazione Richiesta</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Ordini di acquisto firmati da entrambe le parti</li>
                <li>Contratti di acquisto</li>
                <li>Conferme d'ordine accettate dal fornitore</li>
                <li>Eventuali acconti versati (se previsti)</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">12.2 Modalità di Comunicazione</h3>
            
            <p className="mb-3">La conferma degli ordini deve essere comunicata:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Tramite la piattaforma informatica del GSE</li>
              <li>Allegando la documentazione comprovante l'effettuazione degli ordini</li>
              <li>Specificando l'importo complessivo degli ordini effettuati</li>
              <li>Indicando la percentuale rispetto al valore totale dell'investimento</li>
            </ul>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-6">
              <p className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">⚠️</span>
                <span><strong>IMPORTANTE:</strong> La mancata comunicazione della conferma degli ordini entro il termine di 60 giorni comporta la decadenza automatica della prenotazione e la perdita del diritto al credito d'imposta.</span>
              </p>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">12.3 Verifiche GSE</h3>
            
            <p className="mb-3">Il GSE verifica:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>La tempestività della comunicazione</li>
              <li>La validità della documentazione presentata</li>
              <li>Il raggiungimento della soglia minima del 20%</li>
              <li>La coerenza degli ordini con il progetto di investimento</li>
            </ul>
            
            <p>In caso di esito positivo delle verifiche, la prenotazione del credito d'imposta viene confermata fino al completamento dell'investimento, che deve avvenire entro il 31 dicembre 2025.</p>
          </div>
        )}
      </div>
      
      {/* Sezione 13: Completamento dell'Investimento */}
      <div className="mb-10">
        <div className="flex items-center justify-between bg-blue-700 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('completamento-investimento')}>
          <h2 id="completamento-investimento" className="text-2xl font-semibold text-white">13. Completamento dell'Investimento</h2>
          <span className="text-white">{activeSection === 'completamento-investimento' ? '−' : '+'}</span>
        </div>
        {activeSection === 'completamento-investimento' && (
          <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">13.1 Termine di Completamento</h3>
            
            <p className="mb-4">L'investimento deve essere completato entro il 31 dicembre 2025. Per completamento si intende:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>L'installazione e messa in funzione di tutti i beni oggetto dell'investimento</li>
              <li>Il pagamento integrale dei beni (salvo eventuali ritenute di garanzia)</li>
              <li>La realizzazione di tutti gli interventi previsti nel progetto</li>
              <li>Il raggiungimento degli obiettivi di risparmio energetico dichiarati</li>
            </ul>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-6">
              <p className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">⚠️</span>
                <span><strong>ATTENZIONE:</strong> Il mancato completamento dell'investimento entro il termine previsto comporta la decadenza dal beneficio per la parte non completata.</span>
              </p>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">13.2 Variazioni al Progetto</h3>
            
            <p className="mb-3">Eventuali variazioni al progetto originario devono essere comunicate al GSE:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Tempestivamente e comunque prima del completamento dell'investimento</li>
              <li>Tramite la piattaforma informatica dedicata</li>
              <li>Allegando la documentazione tecnica aggiornata</li>
              <li>Indicando le motivazioni delle variazioni</li>
            </ul>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h4 className="font-medium text-blue-700 mb-2">Tipologie di Variazioni Ammissibili</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Sostituzione di beni con altri tecnologicamente più avanzati</li>
                <li>Modifiche tecniche che migliorano l'efficienza energetica</li>
                <li>Variazioni non sostanziali che non alterano la natura del progetto</li>
              </ul>
            </div>
            
            <p>Il GSE valuta l'ammissibilità delle variazioni e, in caso di esito positivo, aggiorna la prenotazione del credito d'imposta. In caso di variazioni che comportano una riduzione dell'investimento, l'importo del credito d'imposta viene proporzionalmente ridotto.</p>
          </div>
        )}
      </div>
      
      {/* Sezione 14: Comunicazione di Completamento */}
      <div className="mb-10">
        <div className="flex items-center justify-between bg-blue-700 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('comunicazione-completamento')}>
          <h2 id="comunicazione-completamento" className="text-2xl font-semibold text-white">14. Comunicazione di Completamento</h2>
          <span className="text-white">{activeSection === 'comunicazione-completamento' ? '−' : '+'}</span>
        </div>
        {activeSection === 'comunicazione-completamento' && (
          <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">14.1 Contenuto della Comunicazione</h3>
            
            <p className="mb-3">Entro 60 giorni dal completamento dell'investimento, l'impresa deve inviare al GSE la comunicazione di completamento contenente:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Relazione tecnica finale dettagliata</li>
              <li>Elenco dei beni acquisiti e installati</li>
              <li>Fatture di acquisto e documenti di trasporto</li>
              <li>Documentazione attestante i pagamenti effettuati</li>
              <li>Certificazioni tecniche dei beni</li>
              <li>Perizia tecnica asseverata</li>
              <li>Documentazione fotografica dell'installazione</li>
              <li>Misurazione del risparmio energetico effettivamente conseguito</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">14.2 Perizia Tecnica Asseverata</h3>
            
            <p className="mb-3">La perizia tecnica asseverata deve essere redatta da un tecnico abilitato e deve attestare:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>La conformità dell'investimento al progetto presentato</li>
              <li>L'effettiva installazione e funzionalità dei beni</li>
              <li>Il rispetto dei requisiti tecnici previsti</li>
              <li>Il risparmio energetico effettivamente conseguito</li>
              <li>La metodologia di calcolo utilizzata</li>
              <li>La corrispondenza delle spese sostenute con quelle ammissibili</li>
            </ul>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h4 className="font-medium text-blue-700 mb-2">Requisiti del Tecnico Abilitato</h4>
              <p>Il tecnico deve essere iscritto al relativo albo professionale e deve essere indipendente rispetto all'impresa beneficiaria. Non deve avere vincoli di dipendenza o di collaborazione continuativa con l'impresa.</p>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">14.3 Verifiche GSE</h3>
            
            <p className="mb-3">Il GSE effettua le seguenti verifiche:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Completezza e correttezza della documentazione</li>
              <li>Conformità dell'investimento realizzato rispetto a quello prenotato</li>
              <li>Effettivo conseguimento del risparmio energetico dichiarato</li>
              <li>Rispetto dei requisiti tecnici e normativi</li>
              <li>Congruità delle spese sostenute</li>
            </ul>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">⚠️</span>
                <span>Il GSE può effettuare verifiche e controlli, anche mediante sopralluoghi presso l'impresa, per accertare la veridicità delle dichiarazioni e la conformità degli investimenti.</span>
              </p>
            </div>
          </div>
        )}
      </div>
      
      {/* Sezione 15: Determinazione del Credito d'Imposta */}
      <div className="mb-10">
        <div className="flex items-center justify-between bg-blue-700 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('determinazione-credito')}>
          <h2 id="determinazione-credito" className="text-2xl font-semibold text-white">15. Determinazione del Credito d'Imposta</h2>
          <span className="text-white">{activeSection === 'determinazione-credito' ? '−' : '+'}</span>
        </div>
        {activeSection === 'determinazione-credito' && (
          <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">15.1 Calcolo dell'Importo</h3>
            
            <p className="mb-4">Il credito d'imposta è determinato applicando le aliquote previste alle spese ammissibili effettivamente sostenute, in base alla tipologia di investimento e alla percentuale di risparmio energetico conseguita.</p>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Tipologia di Investimento</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Risparmio 3-6%</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Risparmio 6-10%</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Risparmio &gt;10%</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Beni materiali 4.0</td>
                    <td className="py-2 px-4 border-b border-gray-300">35%</td>
                    <td className="py-2 px-4 border-b border-gray-300">40%</td>
                    <td className="py-2 px-4 border-b border-gray-300">45%</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Beni immateriali 4.0</td>
                    <td className="py-2 px-4 border-b border-gray-300">20%</td>
                    <td className="py-2 px-4 border-b border-gray-300">20%</td>
                    <td className="py-2 px-4 border-b border-gray-300">20%</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Beni strumentali materiali</td>
                    <td className="py-2 px-4 border-b border-gray-300">10%</td>
                    <td className="py-2 px-4 border-b border-gray-300">15%</td>
                    <td className="py-2 px-4 border-b border-gray-300">20%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">15.2 Limiti Massimi</h3>
            
            <p className="mb-3">Il credito d'imposta è soggetto ai seguenti limiti massimi:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>20 milioni di euro per i beni materiali 4.0</li>
              <li>1 milione di euro per i beni immateriali 4.0</li>
              <li>2 milioni di euro per i beni strumentali materiali</li>
            </ul>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h4 className="font-medium text-blue-700 mb-2">Esempio di Calcolo</h4>
              <p className="mb-2">Investimento in beni materiali 4.0: 1.000.000 €</p>
              <p className="mb-2">Risparmio energetico conseguito: 12%</p>
              <p className="mb-2">Aliquota applicabile: 45%</p>
              <p className="mb-2">Credito d'imposta: 1.000.000 € × 45% = 450.000 €</p>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">15.3 Comunicazione dell'Importo</h3>
            
            <p className="mb-3">Il GSE, a seguito delle verifiche sulla comunicazione di completamento, comunica all'impresa:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>L'importo definitivo del credito d'imposta spettante</li>
              <li>Le modalità di utilizzo in compensazione</li>
              <li>Gli eventuali adempimenti residui</li>
            </ul>
            
            <p>La comunicazione dell'importo definitivo viene effettuata entro 90 giorni dalla ricezione della comunicazione di completamento, salvo sospensioni per richieste di integrazioni documentali.</p>
          </div>
        )}
      </div>
      
      {/* Sezione 16: Utilizzo del Credito d'Imposta */}
      <div className="mb-10">
        <div className="flex items-center justify-between bg-blue-700 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('utilizzo-credito')}>
          <h2 id="utilizzo-credito" className="text-2xl font-semibold text-white">16. Utilizzo del Credito d'Imposta</h2>
          <span className="text-white">{activeSection === 'utilizzo-credito' ? '−' : '+'}</span>
        </div>
        {activeSection === 'utilizzo-credito' && (
          <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">16.1 Modalità di Utilizzo</h3>
            
            <p className="mb-3">Il credito d'imposta può essere utilizzato:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Esclusivamente in compensazione mediante modello F24</li>
              <li>A partire dall'anno successivo a quello di avvenuta interconnessione dei beni</li>
              <li>In 3 quote annuali di pari importo</li>
              <li>Tramite i servizi telematici dell'Agenzia delle Entrate</li>
            </ul>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h4 className="font-medium text-blue-700 mb-2">Codice Tributo</h4>
              <p>Per l'utilizzo in compensazione del credito d'imposta deve essere utilizzato l'apposito codice tributo istituito dall'Agenzia delle Entrate.</p>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">16.2 Limiti e Divieti</h3>
            
            <p className="mb-3">L'utilizzo del credito d'imposta è soggetto ai seguenti limiti e divieti:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Non è soggetto al limite annuale di 250.000 euro per i crediti da indicare nel quadro RU</li>
              <li>Non è soggetto al limite generale di compensazione di 2 milioni di euro</li>
              <li>Non può essere ceduto o trasferito a terzi</li>
              <li>Non può essere richiesto a rimborso</li>
              <li>Non concorre alla formazione del reddito ai fini IRES/IRPEF</li>
              <li>Non concorre alla formazione della base imponibile IRAP</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">16.3 Cumulabilità con Altri Incentivi</h3>
            
            <p className="mb-3">Il credito d'imposta Transizione 5.0:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>È cumulabile con altre agevolazioni che abbiano ad oggetto i medesimi costi, a condizione che tale cumulo non porti al superamento del costo sostenuto</li>
              <li>È cumulabile con gli incentivi per la produzione di energia da fonti rinnovabili</li>
              <li>È cumulabile con i finanziamenti previsti dal PNRR</li>
              <li>Non è cumulabile con il credito d'imposta per investimenti in beni strumentali previsto dalla Legge di Bilancio 2021</li>
            </ul>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">⚠️</span>
                <span><strong>IMPORTANTE:</strong> In caso di cumulo di agevolazioni, l'impresa deve tenere una contabilità separata che permetta di distinguere i costi agevolati con le diverse misure e di verificare il rispetto del limite del 100% del costo sostenuto.</span>
              </p>
            </div>
          </div>
        )}
      </div>
      
      {/* Sezione 17: Controlli e Verifiche */}
      <div className="mb-10">
        <div className="flex items-center justify-between bg-blue-700 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('controlli-verifiche')}>
          <h2 id="controlli-verifiche" className="text-2xl font-semibold text-white">17. Controlli e Verifiche</h2>
          <span className="text-white">{activeSection === 'controlli-verifiche' ? '−' : '+'}</span>
        </div>
        {activeSection === 'controlli-verifiche' && (
          <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">17.1 Controlli GSE</h3>
            
            <p className="mb-4">Il GSE effettua controlli, anche a campione, per verificare la corretta fruizione del credito d'imposta. I controlli possono essere:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Documentali: analisi della documentazione presentata</li>
              <li>In loco: sopralluoghi presso la sede dell'impresa</li>
              <li>Ex post: verifiche successive all'utilizzo del credito d'imposta</li>
            </ul>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h4 className="font-medium text-blue-700 mb-2">Oggetto dei Controlli</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Veridicità delle dichiarazioni rese</li>
                <li>Effettiva installazione e funzionalità dei beni</li>
                <li>Rispetto dei requisiti tecnici</li>
                <li>Effettivo conseguimento del risparmio energetico</li>
                <li>Corretta contabilizzazione delle spese</li>
                <li>Corretto utilizzo del credito d'imposta</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">17.2 Controlli Agenzia delle Entrate</h3>
            
            <p className="mb-3">L'Agenzia delle Entrate, nell'ambito dell'ordinaria attività di controllo, può verificare:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>La corretta indicazione del credito d'imposta nella dichiarazione dei redditi</li>
              <li>Il corretto utilizzo in compensazione</li>
              <li>Il rispetto dei limiti di utilizzo</li>
              <li>La corretta applicazione della disciplina antielusiva</li>
            </ul>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">⚠️</span>
                <span><strong>IMPORTANTE:</strong> L'impresa è tenuta a conservare tutta la documentazione relativa all'investimento e all'utilizzo del credito d'imposta per almeno 5 anni successivi all'ultimo utilizzo in compensazione.</span>
              </p>
            </div>
          </div>
        )}
      </div>
      
      {/* Sezione 18: Revoca e Recupero */}
      <div className="mb-10">
        <div className="flex items-center justify-between bg-blue-700 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('revoca-recupero')}>
          <h2 id="revoca-recupero" className="text-2xl font-semibold text-white">18. Revoca e Recupero</h2>
          <span className="text-white">{activeSection === 'revoca-recupero' ? '−' : '+'}</span>
        </div>
        {activeSection === 'revoca-recupero' && (
          <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">18.1 Cause di Revoca</h3>
            
            <p className="mb-3">Il credito d'imposta è revocato nei seguenti casi:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Mancato rispetto delle condizioni previste per l'accesso al beneficio</li>
              <li>Mancato conseguimento del risparmio energetico minimo dichiarato</li>
              <li>Documentazione incompleta o non veritiera</li>
              <li>Cessione dei beni o trasferimento all'estero prima del termine del periodo di fruizione</li>
              <li>Mancato rispetto degli obblighi di conservazione documentale</li>
              <li>Utilizzo del credito in modo difforme rispetto a quanto previsto</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">18.2 Procedura di Revoca</h3>
            
            <p className="mb-3">In caso di accertamento di irregolarità:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Il GSE comunica all'impresa l'avvio del procedimento di revoca</li>
              <li>L'impresa ha 30 giorni per presentare controdeduzioni</li>
              <li>Il GSE, valutate le controdeduzioni, adotta il provvedimento finale</li>
              <li>In caso di revoca, il GSE ne dà comunicazione all'Agenzia delle Entrate</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">18.3 Recupero del Credito</h3>
            
            <p className="mb-3">In caso di revoca:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>L'Agenzia delle Entrate provvede al recupero del credito indebitamente utilizzato</li>
              <li>Si applicano interessi e sanzioni (dal 100% al 200% del credito indebitamente utilizzato)</li>
              <li>Il recupero avviene mediante iscrizione a ruolo</li>
              <li>Non è ammessa la compensazione con altri crediti</li>
            </ul>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">⚠️</span>
                <span>La revoca può essere totale o parziale, a seconda della gravità delle violazioni accertate. In caso di revoca parziale, il credito d'imposta è rideterminato in proporzione alla parte ammissibile.</span>
              </p>
            </div>
          </div>
        )}
      </div>
      
      {/* Sezione 19: Documentazione e Certificazioni */}
      <div className="mb-10">
        <div className="flex items-center justify-between bg-blue-700 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('documentazione-certificazioni')}>
          <h2 id="documentazione-certificazioni" className="text-2xl font-semibold text-white">19. Documentazione e Certificazioni</h2>
          <span className="text-white">{activeSection === 'documentazione-certificazioni' ? '−' : '+'}</span>
        </div>
        {activeSection === 'documentazione-certificazioni' && (
          <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">19.1 Interconnessione Beni 4.0</h3>
            
            <p className="mb-4">Per i beni 4.0, l'interconnessione al sistema aziendale di gestione della produzione o alla rete di fornitura è un requisito obbligatorio per accedere alle aliquote maggiorate del credito d'imposta.</p>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h4 className="font-medium text-blue-700 mb-2">Requisiti di Interconnessione</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Scambio di informazioni con sistemi interni (es. sistema gestionale, sistemi di pianificazione, sistemi di progettazione, ecc.)</li>
                <li>Identificazione univoca del bene</li>
                <li>Integrazione con il sistema logistico o con la rete di fornitura</li>
                <li>Interfaccia uomo-macchina semplice e intuitiva</li>
                <li>Rispondenza ai più recenti standard di sicurezza e cybersecurity</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">19.2 Perizia Tecnica</h3>
            
            <p className="mb-3">Per i beni con costo unitario superiore a 300.000 euro è richiesta una perizia tecnica asseverata rilasciata da un ingegnere o da un perito industriale iscritti nei rispettivi albi professionali. La perizia deve attestare:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Le caratteristiche tecniche del bene</li>
              <li>L'interconnessione al sistema aziendale</li>
              <li>Il rispetto dei requisiti tecnici previsti</li>
              <li>Il risparmio energetico conseguito</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">19.3 Attestazione di Conformità</h3>
            
            <p className="mb-3">Per i beni con costo unitario non superiore a 300.000 euro, in alternativa alla perizia, è possibile presentare un'attestazione di conformità rilasciata dal produttore o da un ente certificatore accreditato.</p>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">⚠️</span>
                <span><strong>ATTENZIONE:</strong> La perizia tecnica o l'attestazione di conformità devono essere acquisite entro la data di presentazione della comunicazione di completamento dell'investimento.</span>
              </p>
            </div>
          </div>
        )}
      </div>
      
      {/* Sezione 20: Imprese Nuova Costituzione */}
      <div className="mb-10">
        <div className="flex items-center justify-between bg-blue-700 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('imprese-nuova-costituzione')}>
          <h2 id="imprese-nuova-costituzione" className="text-2xl font-semibold text-white">20. Imprese Nuova Costituzione</h2>
          <span className="text-white">{activeSection === 'imprese-nuova-costituzione' ? '−' : '+'}</span>
        </div>
        {activeSection === 'imprese-nuova-costituzione' && (
          <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">20.1 Calcolo Consumi Anno Precedente</h3>
            
            <p className="mb-4">Per le imprese di nuova costituzione, che non dispongono di uno storico dei consumi energetici, il calcolo del risparmio energetico deve essere effettuato utilizzando uno scenario controfattuale.</p>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h4 className="font-medium text-blue-700 mb-2">Scenario Controfattuale</h4>
              <p>Lo scenario controfattuale deve basarsi su:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Almeno 3 beni alternativi disponibili sul mercato UE/SEE</li>
                <li>Beni immessi sul mercato nei 5 anni precedenti all'avvio del progetto</li>
                <li>Comparazione con standard di mercato per la stessa tipologia di beni</li>
                <li>Documentazione tecnica dei produttori</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">20.2 Metodologia di Calcolo</h3>
            
            <p className="mb-3">Il risparmio energetico deve essere calcolato come differenza percentuale tra:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Il consumo energetico stimato dei beni acquistati</li>
              <li>Il consumo energetico medio dei beni alternativi individuati nello scenario controfattuale</li>
            </ul>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Fase</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Descrizione</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">1. Individuazione beni alternativi</td>
                    <td className="py-2 px-4 border-b border-gray-300">Identificare almeno 3 beni comparabili sul mercato</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">2. Raccolta dati tecnici</td>
                    <td className="py-2 px-4 border-b border-gray-300">Acquisire documentazione sui consumi energetici dei beni alternativi</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">3. Calcolo consumo medio</td>
                    <td className="py-2 px-4 border-b border-gray-300">Determinare il consumo energetico medio dei beni alternativi</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">4. Stima risparmio</td>
                    <td className="py-2 px-4 border-b border-gray-300">Calcolare la differenza percentuale tra consumo stimato e consumo medio</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">⚠️</span>
                <span>La metodologia di calcolo dello scenario controfattuale deve essere dettagliatamente descritta nella relazione tecnica e nella perizia asseverata, con indicazione delle fonti dei dati utilizzati.</span>
              </p>
            </div>
          </div>
        )}
      </div>
      
      {/* Sezione 21: Limitazioni e Vincoli */}
      <div className="mb-10">
        <div className="flex items-center justify-between bg-blue-700 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('limitazioni-vincoli')}>
          <h2 id="limitazioni-vincoli" className="text-2xl font-semibold text-white">21. Limitazioni e Vincoli</h2>
          <span className="text-white">{activeSection === 'limitazioni-vincoli' ? '−' : '+'}</span>
        </div>
        {activeSection === 'limitazioni-vincoli' && (
          <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">21.1 Concessioni e Servizi Pubblici</h3>
            
            <p className="mb-4">Sono esclusi dall'agevolazione i beni gratuitamente devolvibili delle imprese operanti in concessione e a tariffa nei seguenti settori:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Energia</li>
              <li>Acqua</li>
              <li>Trasporti</li>
              <li>Infrastrutture</li>
              <li>Poste</li>
              <li>Telecomunicazioni</li>
              <li>Raccolta e depurazione delle acque di scarico</li>
              <li>Raccolta e smaltimento rifiuti</li>
            </ul>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h4 className="font-medium text-blue-700 mb-2">Condizioni di Esclusione</h4>
              <p>L'esclusione si applica quando l'investimento:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Rappresenta un adempimento di obblighi contrattuali verso l'ente concedente</li>
                <li>È soggetto a meccanismi che neutralizzano il rischio economico a carico dell'impresa</li>
                <li>Rientra tra i beni che, al termine della concessione, devono essere ceduti gratuitamente all'ente concedente</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">21.2 Vincoli di Mantenimento</h3>
            
            <p className="mb-3">I beni agevolati sono soggetti ai seguenti vincoli:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Devono essere mantenuti nel patrimonio dell'impresa per almeno 3 anni</li>
              <li>Non possono essere ceduti a terzi</li>
              <li>Non possono essere trasferiti in strutture produttive situate all'estero</li>
              <li>Devono essere destinati a strutture produttive situate nel territorio dello Stato</li>
            </ul>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">⚠️</span>
                <span><strong>IMPORTANTE:</strong> La violazione dei vincoli di mantenimento comporta la revoca del beneficio e il recupero del credito d'imposta indebitamente fruito, maggiorato di interessi e sanzioni.</span>
              </p>
            </div>
          </div>
        )}
      </div>
      
      {/* Sezione 22: Aspetti Contabili e Fiscali */}
      <div className="mb-10">
        <div className="flex items-center justify-between bg-blue-700 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('aspetti-contabili-fiscali')}>
          <h2 id="aspetti-contabili-fiscali" className="text-2xl font-semibold text-white">22. Aspetti Contabili e Fiscali</h2>
          <span className="text-white">{activeSection === 'aspetti-contabili-fiscali' ? '−' : '+'}</span>
        </div>
        {activeSection === 'aspetti-contabili-fiscali' && (
          <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">22.1 Rilevazione Contabile</h3>
            
            <p className="mb-4">Il credito d'imposta Transizione 5.0 deve essere rilevato in contabilità secondo le seguenti modalità:</p>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Operazione</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Scrittura Contabile</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Rilevazione del credito</td>
                    <td className="py-2 px-4 border-b border-gray-300">Crediti tributari a Contributi in conto impianti</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Utilizzo in compensazione</td>
                    <td className="py-2 px-4 border-b border-gray-300">Debiti tributari a Crediti tributari</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h4 className="font-medium text-blue-700 mb-2">Trattamento Fiscale</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Il credito d'imposta non concorre alla formazione del reddito ai fini IRES/IRPEF</li>
                <li>Non concorre alla formazione della base imponibile IRAP</li>
                <li>Non rileva ai fini del rapporto di deducibilità degli interessi passivi</li>
                <li>Non rileva ai fini del rapporto di deducibilità dei componenti negativi</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">22.2 Dichiarazione dei Redditi</h3>
            
            <p className="mb-3">Il credito d'imposta deve essere indicato:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Nella dichiarazione dei redditi relativa al periodo d'imposta di riconoscimento del credito</li>
              <li>Nelle dichiarazioni dei redditi relative ai periodi d'imposta di utilizzo in compensazione</li>
              <li>Nel quadro RU della dichiarazione dei redditi</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">22.3 Superammortamento vs Credito d'Imposta</h3>
            
            <p className="mb-3">Rispetto al precedente regime del superammortamento, il credito d'imposta presenta i seguenti vantaggi:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Beneficio immediato (non diluito nel tempo in base all'ammortamento)</li>
              <li>Utilizzabile anche in presenza di perdite fiscali</li>
              <li>Non influenzato dall'aliquota IRES/IRPEF applicabile</li>
              <li>Utilizzabile anche da soggetti forfetari o in regime di vantaggio</li>
            </ul>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">⚠️</span>
                <span>Il credito d'imposta Transizione 5.0 prevede una maggiorazione del 150% del costo per la base di calcolo del credito, rispetto al precedente 140% della Transizione 4.0, garantendo così un beneficio fiscale più elevato.</span>
              </p>
            </div>
          </div>
        )}
      </div>
      
      {/* Sezione 23: FAQ - Domande Frequenti */}
      <div className="mb-10">
        <div className="flex items-center justify-between bg-blue-700 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('faq')}>
          <h2 id="faq" className="text-2xl font-semibold text-white">23. FAQ - Domande Frequenti</h2>
          <span className="text-white">{activeSection === 'faq' ? '−' : '+'}</span>
        </div>
        {activeSection === 'faq' && (
          <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">23.1 Requisiti e Accesso</h3>
            
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h4 className="font-medium text-blue-700 mb-2">Quali imprese possono accedere al credito d'imposta Transizione 5.0?</h4>
                <p>Tutte le imprese residenti nel territorio dello Stato, incluse le stabili organizzazioni di soggetti non residenti, indipendentemente dalla forma giuridica, dal settore economico di appartenenza, dalla dimensione e dal regime fiscale.</p>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <h4 className="font-medium text-blue-700 mb-2">Come si calcola il risparmio energetico del 3%?</h4>
                <p>Il risparmio energetico del 3% deve essere calcolato come riduzione dell'energia consumata per unità di prodotto rispetto alla media dei consumi delle medesime unità produttive nell'anno precedente. La metodologia di calcolo deve essere dettagliata nella perizia tecnica.</p>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <h4 className="font-medium text-blue-700 mb-2">Quando si considera avviato un investimento?</h4>
                <p>Un investimento si considera avviato alla data del primo impegno giuridicamente vincolante (ordine, contratto, acconto) che renda irreversibile l'investimento. La semplice richiesta di preventivi non costituisce avvio dell'investimento.</p>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <h4 className="font-medium text-blue-700 mb-2">Cosa si intende per interconnessione?</h4>
                <p>Per interconnessione si intende la capacità del bene di scambiare informazioni con sistemi interni (es. sistema gestionale, sistemi di pianificazione, sistemi di progettazione, ecc.) e/o esterni (es. clienti, fornitori, partner, ecc.) attraverso un collegamento basato su specifiche documentate e disponibili pubblicamente.</p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 my-4">23.2 Aspetti Procedurali</h3>
            
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h4 className="font-medium text-blue-700 mb-2">Cosa succede se non riesco a completare l'investimento entro il 31 dicembre 2025?</h4>
                <p>Se l'investimento non viene completato entro il termine previsto, il credito d'imposta decade per la parte non completata. È possibile richiedere una proroga solo in casi eccezionali e documentati di forza maggiore, previa autorizzazione del GSE.</p>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <h4 className="font-medium text-blue-700 mb-2">Posso modificare il progetto dopo la prenotazione?</h4>
                <p>Sì, è possibile apportare modifiche al progetto, purché queste siano comunicate tempestivamente al GSE e non alterino la natura dell'investimento. Le modifiche devono essere approvate dal GSE prima del completamento dell'investimento.</p>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <h4 className="font-medium text-blue-700 mb-2">Come posso dimostrare il risparmio energetico?</h4>
                <p>Il risparmio energetico deve essere dimostrato attraverso misurazioni effettive dei consumi prima e dopo l'investimento, utilizzando strumenti di misura adeguati e certificati. I dati devono essere elaborati secondo metodologie riconosciute e documentati nella perizia tecnica asseverata.</p>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <h4 className="font-medium text-blue-700 mb-2">Il credito d'imposta è cedibile?</h4>
                <p>No, il credito d'imposta Transizione 5.0 non è cedibile a terzi. Può essere utilizzato esclusivamente in compensazione dal soggetto beneficiario.</p>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Sezione 24: Contatti e Assistenza */}
      <div className="mb-10">
        <div className="flex items-center justify-between bg-blue-700 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('contatti-assistenza')}>
          <h2 id="contatti-assistenza" className="text-2xl font-semibold text-white">24. Contatti e Assistenza</h2>
          <span className="text-white">{activeSection === 'contatti-assistenza' ? '−' : '+'}</span>
        </div>
        {activeSection === 'contatti-assistenza' && (
          <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">24.1 Supporto GSE</h3>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h4 className="font-medium text-blue-700 mb-2">Contatti GSE</h4>
              <p className="mb-2">Per informazioni e assistenza sulla procedura di accesso al credito d'imposta Transizione 5.0:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Portale web: <a href="https://www.gse.it" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.gse.it</a> - sezione Transizione 5.0</li>
                <li>Email: transizione5.0@gse.it</li>
                <li>Numero verde: 800 000 555</li>
                <li>Orari: dal lunedì al venerdì, dalle 9:00 alle 18:00</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">24.2 Supporto Agenzia delle Entrate</h3>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h4 className="font-medium text-blue-700 mb-2">Contatti Agenzia delle Entrate</h4>
              <p className="mb-2">Per informazioni sugli aspetti fiscali e sull'utilizzo in compensazione del credito d'imposta:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Portale web: <a href="https://www.agenziaentrate.gov.it" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.agenziaentrate.gov.it</a></li>
                <li>Numero verde: 800 909 696</li>
                <li>Email: dc.piccolemedieimprese@agenziaentrate.it</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">24.3 Supporto SolariX Business</h3>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700 mb-2">I Nostri Servizi di Consulenza</h4>
              <p className="mb-2">SolariX Business offre servizi di consulenza specializzata per l'accesso al credito d'imposta Transizione 5.0:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Valutazione preliminare di ammissibilità</li>
                <li>Supporto nella predisposizione della documentazione</li>
                <li>Assistenza nella comunicazione con GSE e Agenzia delle Entrate</li>
                <li>Perizie tecniche asseverate</li>
                <li>Consulenza fiscale e contabile</li>
              </ul>
              <p className="mt-4">Per maggiori informazioni sui nostri servizi:</p>
              <p className="font-medium">Email: info@solarixbusiness.it</p>
              <p className="font-medium">Tel: 02 1234567</p>
            </div>
          </div>
        )}
      </div>
      
      {/* Sezione 25: Casi di Studio */}
      <div className="mb-10">
        <div className="flex items-center justify-between bg-blue-700 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('casi-studio')}>
          <h2 id="casi-studio" className="text-2xl font-semibold text-white">25. Casi di Studio</h2>
          <span className="text-white">{activeSection === 'casi-studio' ? '−' : '+'}</span>
        </div>
        {activeSection === 'casi-studio' && (
          <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">25.1 Caso Studio: Piccola Impresa Manifatturiera</h3>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h4 className="font-medium text-blue-700 mb-2">Profilo Azienda</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Settore: Manifatturiero (lavorazione metalli)</li>
                <li>Dipendenti: 18</li>
                <li>Fatturato annuo: 2,5 milioni di euro</li>
                <li>Consumi energetici: 450.000 kWh/anno</li>
              </ul>
            </div>
            
            <h4 className="font-medium text-blue-700 mb-2">Investimento Realizzato</h4>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Acquisto di un nuovo macchinario a controllo numerico con tecnologie 4.0 (interconnesso)</li>
              <li>Installazione di un sistema di monitoraggio energetico</li>
              <li>Implementazione software MES per ottimizzazione produzione</li>
              <li>Installazione impianto fotovoltaico da 80 kWp</li>
              <li>Costo totale dell'investimento: 320.000€</li>
            </ul>
            
            <h4 className="font-medium text-blue-700 mb-2">Risultati Ottenuti</h4>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Riduzione consumi energetici: 5,2% per unità di prodotto</li>
              <li>Aumento produttività: +15%</li>
              <li>Riduzione scarti di produzione: -8%</li>
            </ul>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Componente</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Investimento</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Credito d'imposta</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Macchinario 4.0</td>
                    <td className="py-2 px-4 border-b border-gray-300">180.000€</td>
                    <td className="py-2 px-4 border-b border-gray-300">81.000€ (45%)</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Sistema monitoraggio</td>
                    <td className="py-2 px-4 border-b border-gray-300">25.000€</td>
                    <td className="py-2 px-4 border-b border-gray-300">11.250€ (45%)</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Software MES</td>
                    <td className="py-2 px-4 border-b border-gray-300">35.000€</td>
                    <td className="py-2 px-4 border-b border-gray-300">15.750€ (45%)</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Impianto fotovoltaico</td>
                    <td className="py-2 px-4 border-b border-gray-300">80.000€</td>
                    <td className="py-2 px-4 border-b border-gray-300">36.000€ (45%)</td>
                  </tr>
                  <tr className="bg-blue-50 font-medium">
                    <td className="py-2 px-4 border-b border-gray-300">TOTALE</td>
                    <td className="py-2 px-4 border-b border-gray-300">320.000€</td>
                    <td className="py-2 px-4 border-b border-gray-300">144.000€</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">25.2 Caso Studio: Media Impresa Settore Alimentare</h3>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h4 className="font-medium text-blue-700 mb-2">Profilo Azienda</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Settore: Alimentare (produzione conserve)</li>
                <li>Dipendenti: 85</li>
                <li>Fatturato annuo: 12 milioni di euro</li>
                <li>Consumi energetici: 1.800.000 kWh/anno</li>
              </ul>
            </div>
            
            <h4 className="font-medium text-blue-700 mb-2">Investimento Realizzato</h4>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Rinnovamento linea di produzione con macchinari 4.0</li>
              <li>Sistema di recupero calore dai processi produttivi</li>
              <li>Sistema di gestione intelligente dell'energia</li>
              <li>Software di pianificazione produzione integrato</li>
              <li>Costo totale dell'investimento: 1.450.000€</li>
            </ul>
            
            <h4 className="font-medium text-blue-700 mb-2">Risultati Ottenuti</h4>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Riduzione consumi energetici: 7,8% per unità di prodotto</li>
              <li>Aumento capacità produttiva: +22%</li>
              <li>Riduzione tempi di fermo macchina: -35%</li>
              <li>Riduzione emissioni CO2: 120 tonnellate/anno</li>
            </ul>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">⚠️</span>
                <span>Nota: I casi di studio presentati sono esempi indicativi. I risultati possono variare in base alle specifiche condizioni aziendali, al tipo di investimento e alle modalità di implementazione.</span>
              </p>
            </div>
          </div>
        )}
      </div>
      
      {/* Sezione 26: Confronto con Transizione 4.0 */}
      <div className="mb-10">
        <div className="flex items-center justify-between bg-blue-700 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('confronto-transizione-4-0')}>
          <h2 id="confronto-transizione-4-0" className="text-2xl font-semibold text-white">26. Confronto con Transizione 4.0</h2>
          <span className="text-white">{activeSection === 'confronto-transizione-4-0' ? '−' : '+'}</span>
        </div>
        {activeSection === 'confronto-transizione-4-0' && (
          <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">26.1 Principali Differenze</h3>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Caratteristica</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Transizione 4.0</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Transizione 5.0</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300 font-medium">Focus principale</td>
                    <td className="py-2 px-4 border-b border-gray-300">Digitalizzazione e automazione</td>
                    <td className="py-2 px-4 border-b border-gray-300">Sostenibilità energetica + digitalizzazione</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300 font-medium">Requisito energetico</td>
                    <td className="py-2 px-4 border-b border-gray-300">Non richiesto</td>
                    <td className="py-2 px-4 border-b border-gray-300">Riduzione consumi energetici del 3% minimo</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300 font-medium">Aliquote credito d'imposta</td>
                    <td className="py-2 px-4 border-b border-gray-300">40% (grandi), 50% (medie), 60% (piccole)</td>
                    <td className="py-2 px-4 border-b border-gray-300">35% (grandi), 40% (medie), 45% (piccole)</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300 font-medium">Maggiorazione base di calcolo</td>
                    <td className="py-2 px-4 border-b border-gray-300">140% del costo</td>
                    <td className="py-2 px-4 border-b border-gray-300">150% del costo</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300 font-medium">Procedura di accesso</td>
                    <td className="py-2 px-4 border-b border-gray-300">Diretta (autocertificazione)</td>
                    <td className="py-2 px-4 border-b border-gray-300">Prenotazione tramite GSE</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300 font-medium">Cumulabilità</td>
                    <td className="py-2 px-4 border-b border-gray-300">Limitata</td>
                    <td className="py-2 px-4 border-b border-gray-300">Estesa (anche con incentivi energetici)</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300 font-medium">Periodo di validità</td>
                    <td className="py-2 px-4 border-b border-gray-300">2020-2023</td>
                    <td className="py-2 px-4 border-b border-gray-300">2024-2025</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">26.2 Vantaggi di Transizione 5.0</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-blue-700 mb-2">Aspetti Migliorativi</h4>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Maggiore focus sulla sostenibilità ambientale</li>
                  <li>Incentivazione diretta dell'efficienza energetica</li>
                  <li>Maggiorazione della base di calcolo (150% vs 140%)</li>
                  <li>Migliore cumulabilità con altri incentivi</li>
                  <li>Inclusione esplicita di investimenti in energie rinnovabili</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-blue-700 mb-2">Aspetti Più Complessi</h4>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Procedura di prenotazione preventiva</li>
                  <li>Necessità di dimostrare il risparmio energetico</li>
                  <li>Maggiori requisiti documentali</li>
                  <li>Sistema di controlli più strutturato</li>
                  <li>Aliquote base leggermente inferiori</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg mt-4">
              <h4 className="font-medium text-blue-700 mb-2">Strategia di Transizione</h4>
              <p className="mb-2">Per le aziende che hanno già beneficiato di Transizione 4.0, il passaggio a Transizione 5.0 rappresenta un'evoluzione naturale che consente di:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Completare il percorso di digitalizzazione con un focus sulla sostenibilità</li>
                <li>Ottimizzare i costi energetici riducendo l'impatto ambientale</li>
                <li>Integrare i sistemi 4.0 già implementati con soluzioni di efficientamento energetico</li>
                <li>Migliorare la competitività attraverso la riduzione dei costi operativi</li>
              </ul>
            </div>
          </div>
        )}
      </div>
      
      {/* Sezione 27: Strumenti di Calcolo */}
      <div className="mb-10">
        <div className="flex items-center justify-between bg-blue-700 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('strumenti-calcolo')}>
          <h2 id="strumenti-calcolo" className="text-2xl font-semibold text-white">27. Strumenti di Calcolo</h2>
          <span className="text-white">{activeSection === 'strumenti-calcolo' ? '−' : '+'}</span>
        </div>
        {activeSection === 'strumenti-calcolo' && (
          <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">27.1 Simulatore Credito d'Imposta</h3>
            
            <p className="mb-4">Per facilitare la valutazione preliminare del potenziale beneficio fiscale, è disponibile un simulatore che permette di stimare il credito d'imposta ottenibile in base alle caratteristiche dell'investimento previsto.</p>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h4 className="font-medium text-blue-700 mb-2">Istruzioni per l'Utilizzo del Simulatore</h4>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Inserire la dimensione dell'impresa (piccola, media o grande)</li>
                <li>Specificare l'importo totale dell'investimento previsto</li>
                <li>Selezionare la tipologia di beni (materiali 4.0, immateriali 4.0, altro)</li>
                <li>Indicare la percentuale stimata di risparmio energetico</li>
                <li>Il simulatore calcolerà automaticamente:</li>
                <ul className="list-disc pl-6 mt-1">
                  <li>La base di calcolo maggiorata (150% del costo)</li>
                  <li>L'aliquota applicabile in base alla dimensione dell'impresa</li>
                  <li>Il credito d'imposta stimato</li>
                  <li>Il risparmio fiscale effettivo</li>
                </ul>
              </ol>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-6">
              <p className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">⚠️</span>
                <span><strong>Nota:</strong> Il simulatore fornisce una stima indicativa. Il calcolo definitivo del credito d'imposta dipenderà dalla valutazione ufficiale del GSE e dall'effettivo risparmio energetico conseguito.</span>
              </p>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">27.2 Metodologia di Calcolo del Risparmio Energetico</h3>
            
            <p className="mb-4">Per il calcolo del risparmio energetico, è necessario seguire una metodologia standardizzata che confronti i consumi energetici prima e dopo l'investimento:</p>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Fase</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Descrizione</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Documentazione</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">1. Misurazione ex-ante</td>
                    <td className="py-2 px-4 border-b border-gray-300">Rilevazione dei consumi energetici per unità di prodotto nell'anno precedente</td>
                    <td className="py-2 px-4 border-b border-gray-300">Bollette, report di consumo, registri di produzione</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">2. Implementazione</td>
                    <td className="py-2 px-4 border-b border-gray-300">Realizzazione dell'investimento con installazione di sistemi di monitoraggio</td>
                    <td className="py-2 px-4 border-b border-gray-300">Fatture, documenti di trasporto, certificati di installazione</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">3. Misurazione ex-post</td>
                    <td className="py-2 px-4 border-b border-gray-300">Rilevazione dei consumi energetici per unità di prodotto dopo l'investimento</td>
                    <td className="py-2 px-4 border-b border-gray-300">Report dei sistemi di monitoraggio, registri di produzione</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">4. Calcolo risparmio</td>
                    <td className="py-2 px-4 border-b border-gray-300">Determinazione della percentuale di riduzione dei consumi per unità di prodotto</td>
                    <td className="py-2 px-4 border-b border-gray-300">Perizia tecnica asseverata</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700 mb-2">Formula di Calcolo</h4>
              <p className="mb-2">La percentuale di risparmio energetico si calcola con la seguente formula:</p>
              <div className="p-2 bg-white rounded border border-blue-200 mb-2">
                <p className="font-medium text-center">% Risparmio = [(Consumo Ante / Unità Prodotto Ante) - (Consumo Post / Unità Prodotto Post)] / (Consumo Ante / Unità Prodotto Ante) x 100</p>
              </div>
              <p>Dove:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Consumo Ante: consumo energetico totale nell'anno precedente l'investimento</li>
                <li>Unità Prodotto Ante: quantità di prodotto realizzata nell'anno precedente</li>
                <li>Consumo Post: consumo energetico dopo l'implementazione dell'investimento</li>
                <li>Unità Prodotto Post: quantità di prodotto realizzata dopo l'investimento</li>
              </ul>
            </div>
          </div>
        )}
      </div>
      
      {/* Sezione 28: Integrazione con PNRR */}
      <div className="mb-10">
        <div className="flex items-center justify-between bg-blue-700 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('integrazione-pnrr')}>
          <h2 id="integrazione-pnrr" className="text-2xl font-semibold text-white">28. Integrazione con PNRR</h2>
          <span className="text-white">{activeSection === 'integrazione-pnrr' ? '−' : '+'}</span>
        </div>
        {activeSection === 'integrazione-pnrr' && (
          <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">28.1 Sinergie con il Piano Nazionale di Ripresa e Resilienza</h3>
            
            <p className="mb-4">Il Piano Transizione 5.0 si inserisce in modo complementare all'interno del quadro più ampio del PNRR (Piano Nazionale di Ripresa e Resilienza), contribuendo agli obiettivi di:</p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Transizione ecologica e digitale del sistema produttivo italiano</li>
              <li>Raggiungimento degli obiettivi climatici dell'UE per il 2030</li>
              <li>Incremento della competitività del sistema industriale nazionale</li>
              <li>Riduzione della dipendenza energetica da fonti fossili</li>
            </ul>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h4 className="font-medium text-blue-700 mb-2">Missioni PNRR Correlate</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Missione 1:</strong> Digitalizzazione, innovazione, competitività, cultura e turismo</li>
                <li><strong>Missione 2:</strong> Rivoluzione verde e transizione ecologica</li>
                <li><strong>Missione 4:</strong> Istruzione e ricerca</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">28.2 Opportunità di Finanziamento Complementari</h3>
            
            <p className="mb-4">Oltre al credito d'imposta Transizione 5.0, le imprese possono accedere a ulteriori strumenti di supporto finanziario previsti dal PNRR:</p>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Strumento</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Descrizione</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Cumulabilità</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Fondo Innovazione</td>
                    <td className="py-2 px-4 border-b border-gray-300">Contributi a fondo perduto per progetti di ricerca e sviluppo</td>
                    <td className="py-2 px-4 border-b border-gray-300">Parziale, nei limiti del costo sostenuto</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Fondo Competenze</td>
                    <td className="py-2 px-4 border-b border-gray-300">Finanziamenti per formazione e aggiornamento del personale</td>
                    <td className="py-2 px-4 border-b border-gray-300">Totale (spese diverse)</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Fondo Garanzia PMI</td>
                    <td className="py-2 px-4 border-b border-gray-300">Garanzie pubbliche su finanziamenti per investimenti</td>
                    <td className="py-2 px-4 border-b border-gray-300">Totale</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Bandi Energia PNRR</td>
                    <td className="py-2 px-4 border-b border-gray-300">Contributi per progetti di efficientamento energetico</td>
                    <td className="py-2 px-4 border-b border-gray-300">Parziale, con limitazioni specifiche</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">⚠️</span>
                <span><strong>Attenzione:</strong> La cumulabilità tra Transizione 5.0 e altri strumenti del PNRR deve essere verificata caso per caso, in quanto soggetta a limitazioni specifiche e al rispetto del principio di non doppio finanziamento della stessa spesa.</span>
              </p>
            </div>
          </div>
        )}
      </div>
      
      {/* Sezione 29: Normativa di Riferimento */}
      <div className="mb-10">
        <div className="flex items-center justify-between bg-blue-700 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('normativa-riferimento')}>
          <h2 id="normativa-riferimento" className="text-2xl font-semibold text-white">29. Normativa di Riferimento</h2>
          <span className="text-white">{activeSection === 'normativa-riferimento' ? '−' : '+'}</span>
        </div>
        {activeSection === 'normativa-riferimento' && (
          <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">29.1 Quadro Normativo</h3>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Riferimento</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Descrizione</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Ambito</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Legge n. 213/2023</td>
                    <td className="py-2 px-4 border-b border-gray-300">Legge di Bilancio 2024 - Istituzione del Piano Transizione 5.0</td>
                    <td className="py-2 px-4 border-b border-gray-300">Normativa primaria</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Decreto MIMIT-MEF del 06/03/2024</td>
                    <td className="py-2 px-4 border-b border-gray-300">Disposizioni applicative del credito d'imposta Transizione 5.0</td>
                    <td className="py-2 px-4 border-b border-gray-300">Decreto attuativo</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Circolare GSE n. 2/2024</td>
                    <td className="py-2 px-4 border-b border-gray-300">Procedura operativa per l'accesso al credito d'imposta</td>
                    <td className="py-2 px-4 border-b border-gray-300">Procedura operativa</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Circolare Agenzia Entrate n. 11/E/2024</td>
                    <td className="py-2 px-4 border-b border-gray-300">Chiarimenti fiscali sull'utilizzo del credito d'imposta</td>
                    <td className="py-2 px-4 border-b border-gray-300">Interpretazione fiscale</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Risoluzione Agenzia Entrate n. 45/E/2024</td>
                    <td className="py-2 px-4 border-b border-gray-300">Istituzione codici tributo per l'utilizzo in compensazione</td>
                    <td className="py-2 px-4 border-b border-gray-300">Aspetti operativi</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Decreto MIMIT del 15/04/2024</td>
                    <td className="py-2 px-4 border-b border-gray-300">Metodologia standardizzata per il calcolo del risparmio energetico</td>
                    <td className="py-2 px-4 border-b border-gray-300">Aspetti tecnici</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">29.2 Evoluzione Normativa</h3>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h4 className="font-medium text-blue-700 mb-2">Cronologia dei Principali Interventi Legislativi</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Dicembre 2023:</strong> Introduzione del Piano Transizione 5.0 nella Legge di Bilancio 2024</li>
                <li><strong>Marzo 2024:</strong> Pubblicazione del decreto attuativo con le disposizioni operative</li>
                <li><strong>Aprile 2024:</strong> Attivazione della piattaforma GSE per la prenotazione del credito</li>
                <li><strong>Maggio 2024:</strong> Pubblicazione delle linee guida tecniche per la misurazione del risparmio energetico</li>
                <li><strong>Giugno 2024:</strong> Chiarimenti dell'Agenzia delle Entrate sugli aspetti fiscali</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">⚠️</span>
                <span><strong>Nota:</strong> Il quadro normativo è in costante evoluzione. Si consiglia di verificare sempre gli aggiornamenti sul sito del Ministero delle Imprese e del Made in Italy (MIMIT) e del GSE.</span>
              </p>
            </div>
          </div>
        )}
      </div>
      
      {/* Sezione 30: Glossario */}
      <div className="mb-10">
        <div className="flex items-center justify-between bg-blue-700 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('glossario')}>
          <h2 id="glossario" className="text-2xl font-semibold text-white">30. Glossario</h2>
          <span className="text-white">{activeSection === 'glossario' ? '−' : '+'}</span>
        </div>
        {activeSection === 'glossario' && (
          <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">30.1 Terminologia Tecnica</h3>
            
            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-3">
                <h4 className="font-medium text-blue-700">Beni strumentali 4.0</h4>
                <p>Macchinari, impianti e attrezzature dotati di tecnologie avanzate di automazione, interconnessione e intelligenza artificiale, conformi ai requisiti dell'Allegato A della legge 232/2016.</p>
              </div>
              
              <div className="border-b border-gray-200 pb-3">
                <h4 className="font-medium text-blue-700">Interconnessione</h4>
                <p>Capacità del bene di scambiare informazioni con sistemi interni (es. sistema gestionale, sistemi di pianificazione, sistemi di progettazione, ecc.) e/o esterni (es. clienti, fornitori, partner, ecc.) attraverso un collegamento basato su specifiche documentate e disponibili pubblicamente.</p>
              </div>
              
              <div className="border-b border-gray-200 pb-3">
                <h4 className="font-medium text-blue-700">Risparmio energetico specifico</h4>
                <p>Riduzione del consumo energetico per unità di prodotto o servizio, calcolata confrontando il consumo energetico specifico prima e dopo l'implementazione dell'investimento.</p>
              </div>
              
              <div className="border-b border-gray-200 pb-3">
                <h4 className="font-medium text-blue-700">GSE</h4>
                <p>Gestore dei Servizi Energetici, società pubblica incaricata della gestione delle procedure di accesso al credito d'imposta Transizione 5.0.</p>
              </div>
              
              <div className="border-b border-gray-200 pb-3">
                <h4 className="font-medium text-blue-700">Perizia tecnica asseverata</h4>
                <p>Documento redatto da un tecnico abilitato che attesta la conformità dei beni ai requisiti tecnici e il raggiungimento degli obiettivi di risparmio energetico, con assunzione di responsabilità civile e penale da parte del perito.</p>
              </div>
              
              <div className="border-b border-gray-200 pb-3">
                <h4 className="font-medium text-blue-700">Comunicazione ex-ante</h4>
                <p>Comunicazione preventiva al GSE per la prenotazione del credito d'imposta, da effettuare prima dell'avvio dell'investimento.</p>
              </div>
              
              <div className="border-b border-gray-200 pb-3">
                <h4 className="font-medium text-blue-700">Comunicazione di completamento</h4>
                <p>Comunicazione finale al GSE che attesta l'effettiva realizzazione dell'investimento e il conseguimento degli obiettivi di risparmio energetico.</p>
              </div>
              
              <div className="border-b border-gray-200 pb-3">
                <h4 className="font-medium text-blue-700">Baseline energetica</h4>
                <p>Riferimento iniziale dei consumi energetici dell'impresa, calcolato sulla base dei consumi dell'anno precedente l'investimento, utilizzato come termine di paragone per la misurazione del risparmio energetico.</p>
              </div>
              
              <div className="border-b border-gray-200 pb-3">
                <h4 className="font-medium text-blue-700">Scenario controfattuale</h4>
                <p>Scenario ipotetico che rappresenta l'evoluzione dei consumi energetici in assenza dell'investimento agevolato, utilizzato come riferimento per le imprese di nuova costituzione o in caso di modifiche significative del processo produttivo.</p>
              </div>
              
              <div className="pb-3">
                <h4 className="font-medium text-blue-700">Credito d'imposta</h4>
                <p>Beneficio fiscale che consente di compensare debiti tributari e contributivi con un credito riconosciuto dallo Stato in relazione a specifiche spese sostenute dall'impresa.</p>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Sezione 31: Casi di Studio Avanzati */}
      <div className="mb-10">
        <div className="flex items-center justify-between bg-blue-700 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('casi-studio-avanzati')}>
          <h2 id="casi-studio-avanzati" className="text-2xl font-semibold text-white">31. Casi di Studio Avanzati</h2>
          <span className="text-white">{activeSection === 'casi-studio-avanzati' ? '−' : '+'}</span>
        </div>
        {activeSection === 'casi-studio-avanzati' && (
          <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">31.1 Settore Manifatturiero Avanzato</h3>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h4 className="font-medium text-blue-700 mb-2">Caso Studio: Automazione Integrata con Efficienza Energetica</h4>
              <p className="mb-3"><strong>Azienda:</strong> MetalTech S.p.A. - Media impresa del settore metallurgico</p>
              
              <div className="mb-3">
                <p className="font-medium">Situazione iniziale:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Macchinari obsoleti con elevati consumi energetici</li>
                  <li>Processo produttivo frammentato e scarsamente digitalizzato</li>
                  <li>Costi energetici che rappresentavano il 28% dei costi operativi</li>
                </ul>
              </div>
              
              <div className="mb-3">
                <p className="font-medium">Investimento realizzato:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Sostituzione di 5 linee produttive con macchinari 4.0 ad alta efficienza energetica</li>
                  <li>Implementazione di un sistema MES (Manufacturing Execution System) integrato</li>
                  <li>Installazione di un sistema di monitoraggio energetico in tempo reale</li>
                  <li>Impianto fotovoltaico da 450 kW per autoconsumo</li>
                </ul>
              </div>
              
              <div className="mb-3">
                <p className="font-medium">Valore dell'investimento:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Totale: €3.800.000</li>
                  <li>Beni materiali 4.0: €2.900.000</li>
                  <li>Beni immateriali 4.0: €400.000</li>
                  <li>Impianto fotovoltaico: €500.000</li>
                </ul>
              </div>
              
              <div>
                <p className="font-medium">Risultati ottenuti:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Riduzione del consumo energetico specifico: 32%</li>
                  <li>Aumento della produttività: 25%</li>
                  <li>Credito d'imposta ottenuto: €1.520.000</li>
                  <li>Tempo di ritorno dell'investimento: 2,8 anni</li>
                  <li>Riduzione delle emissioni di CO₂: 420 tonnellate/anno</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">31.2 Settore Agroalimentare</h3>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h4 className="font-medium text-blue-700 mb-2">Caso Studio: Trasformazione Digitale e Sostenibile</h4>
              <p className="mb-3"><strong>Azienda:</strong> BioFood S.r.l. - Piccola impresa di trasformazione alimentare</p>
              
              <div className="mb-3">
                <p className="font-medium">Situazione iniziale:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Processi di lavorazione ad alto consumo termico</li>
                  <li>Assenza di sistemi di recupero del calore</li>
                  <li>Limitata digitalizzazione della catena produttiva</li>
                </ul>
              </div>
              
              <div className="mb-3">
                <p className="font-medium">Investimento realizzato:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Nuova linea di lavorazione con recupero termico integrato</li>
                  <li>Sistema di tracciabilità digitale della filiera</li>
                  <li>Pompe di calore industriali per la climatizzazione</li>
                  <li>Software di ottimizzazione energetica dei processi</li>
                </ul>
              </div>
              
              <div className="mb-3">
                <p className="font-medium">Valore dell'investimento:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Totale: €950.000</li>
                  <li>Beni materiali 4.0: €750.000</li>
                  <li>Beni immateriali 4.0: €200.000</li>
                </ul>
              </div>
              
              <div>
                <p className="font-medium">Risultati ottenuti:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Riduzione del consumo energetico specifico: 41%</li>
                  <li>Miglioramento della qualità del prodotto</li>
                  <li>Credito d'imposta ottenuto: €427.500</li>
                  <li>Tempo di ritorno dell'investimento: 2,2 anni</li>
                  <li>Riduzione dei costi operativi: 22%</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">⚠️</span>
                <span><strong>Nota importante:</strong> I casi di studio presentati sono esempi reali ma con dati adattati per ragioni di riservatezza. I risultati possono variare in base alle specifiche condizioni operative e alle caratteristiche dell'impresa.</span>
              </p>
            </div>
          </div>
        )}
      </div>
      
      {/* Sezione 32: Formazione e Competenze */}
      <div className="mb-10">
        <div className="flex items-center justify-between bg-blue-700 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('formazione-competenze')}>
          <h2 id="formazione-competenze" className="text-2xl font-semibold text-white">32. Formazione e Competenze</h2>
          <span className="text-white">{activeSection === 'formazione-competenze' ? '−' : '+'}</span>
        </div>
        {activeSection === 'formazione-competenze' && (
          <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">32.1 Competenze Necessarie</h3>
            
            <p className="mb-4">L'implementazione efficace di progetti Transizione 5.0 richiede un mix di competenze tecniche e gestionali. Di seguito le principali aree di competenza necessarie:</p>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Area di Competenza</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Conoscenze Specifiche</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Ruoli Aziendali</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Tecnologie 4.0</td>
                    <td className="py-2 px-4 border-b border-gray-300">IoT, Big Data, Cloud Computing, AI/ML, Robotica</td>
                    <td className="py-2 px-4 border-b border-gray-300">CTO, IT Manager, Ingegneri di processo</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Efficienza Energetica</td>
                    <td className="py-2 px-4 border-b border-gray-300">Audit energetici, Sistemi di monitoraggio, KPI energetici</td>
                    <td className="py-2 px-4 border-b border-gray-300">Energy Manager, Tecnici specializzati</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Sostenibilità</td>
                    <td className="py-2 px-4 border-b border-gray-300">LCA, Carbon footprint, Economia circolare</td>
                    <td className="py-2 px-4 border-b border-gray-300">Sustainability Manager, ESG Specialist</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Gestione Progetti</td>
                    <td className="py-2 px-4 border-b border-gray-300">Project management, Change management</td>
                    <td className="py-2 px-4 border-b border-gray-300">Project Manager, Operations Manager</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Aspetti Finanziari</td>
                    <td className="py-2 px-4 border-b border-gray-300">ROI, TCO, Analisi costi-benefici</td>
                    <td className="py-2 px-4 border-b border-gray-300">CFO, Controller, Finance Manager</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">32.2 Percorsi Formativi</h3>
            
            <p className="mb-4">Per sviluppare le competenze necessarie, le imprese possono accedere a diversi percorsi formativi:</p>
            
            <div className="space-y-4 mb-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-medium text-blue-700">Formazione Finanziata</h4>
                <p>Corsi di formazione per il personale finanziati attraverso fondi interprofessionali (es. Fondimpresa, Fondirigenti) o FSE.</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-medium text-blue-700">ITS Academy</h4>
                <p>Percorsi biennali post-diploma altamente specializzati nelle tecnologie 4.0 e nell'efficienza energetica.</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-medium text-blue-700">Competence Center</h4>
                <p>Centri di competenza ad alta specializzazione che offrono formazione, consulenza e supporto alle imprese sui temi di Industria 4.0 e Transizione 5.0.</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-medium text-blue-700">Digital Innovation Hub</h4>
                <p>Sportelli territoriali che offrono servizi di formazione e orientamento alle PMI sui temi della trasformazione digitale e sostenibile.</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-medium text-blue-700">Master e Corsi Universitari</h4>
                <p>Percorsi di alta formazione su temi specifici come Energy Management, Digital Transformation, Sostenibilità Industriale.</p>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h4 className="font-medium text-blue-700 mb-2">Credito d'Imposta Formazione 4.0</h4>
              <p className="mb-2">Le imprese possono beneficiare anche del credito d'imposta per la formazione 4.0, che copre parte del costo del personale impegnato in attività formative su tecnologie abilitanti.</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Aliquota del 50% per le piccole imprese (max €300.000)</li>
                <li>Aliquota del 40% per le medie imprese (max €250.000)</li>
                <li>Aliquota del 30% per le grandi imprese (max €200.000)</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">⚠️</span>
                <span><strong>Importante:</strong> La formazione del personale è un elemento cruciale per il successo dei progetti Transizione 5.0. Senza adeguate competenze interne, anche i migliori investimenti tecnologici rischiano di non generare i risultati attesi in termini di efficienza e risparmio energetico.</span>
              </p>
            </div>
          </div>
        )}
      </div>
      
      {/* Sezione 33: Monitoraggio e Reportistica */}
      <div className="mb-10">
        <div className="flex items-center justify-between bg-blue-700 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('monitoraggio-reportistica')}>
          <h2 id="monitoraggio-reportistica" className="text-2xl font-semibold text-white">33. Monitoraggio e Reportistica</h2>
          <span className="text-white">{activeSection === 'monitoraggio-reportistica' ? '−' : '+'}</span>
        </div>
        {activeSection === 'monitoraggio-reportistica' && (
          <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">33.1 Sistemi di Monitoraggio Energetico</h3>
            
            <p className="mb-4">Per garantire il raggiungimento e il mantenimento degli obiettivi di risparmio energetico previsti dal Piano Transizione 5.0, è fondamentale implementare adeguati sistemi di monitoraggio energetico:</p>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Tipologia di Sistema</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Caratteristiche</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Vantaggi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">BEMS (Building Energy Management System)</td>
                    <td className="py-2 px-4 border-b border-gray-300">Sistema di gestione dell'energia negli edifici con controllo automatizzato di HVAC, illuminazione e altri sistemi</td>
                    <td className="py-2 px-4 border-b border-gray-300">Ottimizzazione in tempo reale, riduzione fino al 20% dei consumi energetici</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">EMS (Energy Management System)</td>
                    <td className="py-2 px-4 border-b border-gray-300">Piattaforma integrata per il monitoraggio e la gestione dei consumi energetici a livello di stabilimento</td>
                    <td className="py-2 px-4 border-b border-gray-300">Visione complessiva, identificazione di inefficienze, reportistica avanzata</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Sistemi IoT per il monitoraggio</td>
                    <td className="py-2 px-4 border-b border-gray-300">Rete di sensori wireless che raccolgono dati sui consumi energetici e li trasmettono a una piattaforma cloud</td>
                    <td className="py-2 px-4 border-b border-gray-300">Facilità di installazione, scalabilità, monitoraggio granulare</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Software di analisi predittiva</td>
                    <td className="py-2 px-4 border-b border-gray-300">Applicazioni che utilizzano algoritmi di machine learning per prevedere i consumi energetici e identificare anomalie</td>
                    <td className="py-2 px-4 border-b border-gray-300">Manutenzione predittiva, ottimizzazione continua, riduzione dei costi operativi</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h4 className="font-medium text-blue-700 mb-2">Requisiti Minimi dei Sistemi di Monitoraggio</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Capacità di misurare i consumi energetici per singola unità di prodotto</li>
                <li>Precisione della misurazione conforme agli standard di settore</li>
                <li>Frequenza di campionamento adeguata al processo produttivo</li>
                <li>Capacità di archiviazione dei dati per almeno 5 anni</li>
                <li>Generazione automatica di report conformi alle richieste del GSE</li>
                <li>Possibilità di esportare i dati in formati standard</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">33.2 Reportistica e Documentazione</h3>
            
            <p className="mb-4">La corretta documentazione dei risparmi energetici è fondamentale per la validazione del credito d'imposta. Di seguito i principali report richiesti:</p>
            
            <div className="space-y-4 mb-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-medium text-blue-700">Report Baseline Energetica</h4>
                <p>Documento che attesta i consumi energetici specifici nell'anno precedente l'investimento, con dettaglio mensile e per vettore energetico.</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-medium text-blue-700">Report di Monitoraggio Periodico</h4>
                <p>Report mensili o trimestrali che documentano i consumi energetici e la produzione, con calcolo del consumo specifico.</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-medium text-blue-700">Report di Risparmio Energetico</h4>
                <p>Documento annuale che calcola il risparmio energetico conseguito rispetto alla baseline, con evidenza della metodologia di calcolo utilizzata.</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-medium text-blue-700">Relazione Tecnica di Conformità</h4>
                <p>Documento redatto da un tecnico abilitato che attesta la conformità dell'investimento ai requisiti del Piano Transizione 5.0 e il raggiungimento degli obiettivi di risparmio energetico.</p>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">⚠️</span>
                <span><strong>Attenzione:</strong> La documentazione deve essere conservata per almeno 5 anni dalla data di completamento dell'investimento e deve essere resa disponibile in caso di controlli da parte del GSE o dell'Agenzia delle Entrate.</span>
              </p>
            </div>
          </div>
        )}
      </div>
      
      {/* Sezione 34: Innovazione e Sostenibilità */}
      <div className="mb-10">
        <div className="flex items-center justify-between bg-blue-700 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('innovazione-sostenibilita')}>
          <h2 id="innovazione-sostenibilita" className="text-2xl font-semibold text-white">34. Innovazione e Sostenibilità</h2>
          <span className="text-white">{activeSection === 'innovazione-sostenibilita' ? '−' : '+'}</span>
        </div>
        {activeSection === 'innovazione-sostenibilita' && (
          <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">34.1 Tecnologie Innovative per la Sostenibilità</h3>
            
            <p className="mb-4">Il Piano Transizione 5.0 promuove l'adozione di tecnologie innovative che coniugano digitalizzazione e sostenibilità ambientale. Ecco le principali soluzioni tecnologiche che possono essere integrate nei progetti:</p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-700 mb-2">Digital Twin per l'Efficienza Energetica</h4>
                <p className="mb-2">Replica virtuale di impianti e processi produttivi che consente di:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Simulare scenari di ottimizzazione energetica</li>
                  <li>Testare modifiche ai processi senza interrompere la produzione</li>
                  <li>Identificare inefficienze nascoste attraverso l'analisi dei dati</li>
                  <li>Prevedere il comportamento energetico in diverse condizioni operative</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-700 mb-2">Intelligenza Artificiale per l'Ottimizzazione</h4>
                <p className="mb-2">Algoritmi avanzati che permettono di:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Ottimizzare in tempo reale i parametri di processo</li>
                  <li>Prevedere guasti e pianificare la manutenzione predittiva</li>
                  <li>Bilanciare automaticamente i carichi energetici</li>
                  <li>Adattare la produzione in base alla disponibilità di energia rinnovabile</li>
                </ul>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-700 mb-2">Sistemi di Recupero Energetico Avanzati</h4>
                <p className="mb-2">Tecnologie che consentono di recuperare e riutilizzare l'energia di scarto:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Recuperatori di calore dai processi industriali</li>
                  <li>Sistemi ORC (Organic Rankine Cycle) per la generazione di elettricità dal calore di scarto</li>
                  <li>Scambiatori di calore avanzati con controllo digitale</li>
                  <li>Sistemi di accumulo termico intelligenti</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-700 mb-2">Integrazione di Fonti Rinnovabili</h4>
                <p className="mb-2">Soluzioni per l'autoproduzione e gestione intelligente dell'energia:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Impianti fotovoltaici con sistemi di tracciamento solare</li>
                  <li>Micro-cogenerazione da biomasse o biogas</li>
                  <li>Sistemi di accumulo elettrochimico con gestione smart</li>
                  <li>Microgrids con ottimizzazione automatica dei flussi energetici</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">34.2 Economia Circolare e Riduzione dell'Impatto Ambientale</h3>
            
            <p className="mb-4">Oltre all'efficienza energetica, il Piano Transizione 5.0 valorizza anche progetti che integrano principi di economia circolare e riduzione dell'impatto ambientale:</p>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Ambito</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Soluzioni Tecnologiche</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Benefici</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Riduzione dei rifiuti</td>
                    <td className="py-2 px-4 border-b border-gray-300">Sistemi di ottimizzazione dei processi produttivi, tecnologie di riutilizzo degli scarti</td>
                    <td className="py-2 px-4 border-b border-gray-300">Minori costi di smaltimento, riduzione dell'impatto ambientale, conformità normativa</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Uso efficiente delle risorse</td>
                    <td className="py-2 px-4 border-b border-gray-300">Sistemi di monitoraggio dei consumi di materie prime, tecnologie per il riutilizzo dell'acqua</td>
                    <td className="py-2 px-4 border-b border-gray-300">Riduzione dei costi operativi, minore pressione sulle risorse naturali</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Eco-design</td>
                    <td className="py-2 px-4 border-b border-gray-300">Software di progettazione per l'ottimizzazione del ciclo di vita dei prodotti</td>
                    <td className="py-2 px-4 border-b border-gray-300">Prodotti più durevoli, facilmente riparabili e riciclabili</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Logistica sostenibile</td>
                    <td className="py-2 px-4 border-b border-gray-300">Sistemi di ottimizzazione dei percorsi, veicoli elettrici per la movimentazione interna</td>
                    <td className="py-2 px-4 border-b border-gray-300">Riduzione delle emissioni, efficienza operativa</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700 mb-2">Valore Aggiunto della Sostenibilità</h4>
              <p className="mb-2">L'integrazione di principi di sostenibilità nei progetti Transizione 5.0 genera molteplici vantaggi:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Vantaggio competitivo:</strong> Differenziazione sul mercato e accesso a clienti sensibili ai temi ambientali</li>
                <li><strong>Conformità anticipata:</strong> Preparazione alle future normative ambientali sempre più stringenti</li>
                <li><strong>Accesso a finanziamenti verdi:</strong> Maggiori opportunità di accesso a strumenti finanziari dedicati alla sostenibilità</li>
                <li><strong>Miglioramento reputazionale:</strong> Rafforzamento dell'immagine aziendale verso stakeholder e consumatori</li>
              </ul>
            </div>
          </div>
        )}
      </div>
      
      {/* Sezione 35: Analisi Costi-Benefici */}
      <div className="mb-10">
        <div className="flex items-center justify-between bg-blue-700 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('analisi-costi-benefici')}>
          <h2 id="analisi-costi-benefici" className="text-2xl font-semibold text-white">35. Analisi Costi-Benefici</h2>
          <span className="text-white">{activeSection === 'analisi-costi-benefici' ? '−' : '+'}</span>
        </div>
        {activeSection === 'analisi-costi-benefici' && (
          <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">35.1 Metodologia di Analisi</h3>
            
            <p className="mb-4">L'analisi costi-benefici è uno strumento fondamentale per valutare la convenienza economica degli investimenti in Transizione 5.0. Una corretta analisi permette di prendere decisioni informate e massimizzare il ritorno sull'investimento.</p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-700 mb-2">Costi da Considerare</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Costi di investimento iniziale:</strong> acquisto macchinari, software, hardware</li>
                  <li><strong>Costi di installazione:</strong> manodopera, adeguamenti strutturali</li>
                  <li><strong>Costi di formazione:</strong> training del personale</li>
                  <li><strong>Costi di manutenzione:</strong> ordinaria e straordinaria</li>
                  <li><strong>Costi operativi:</strong> energia, materiali di consumo</li>
                  <li><strong>Costi di consulenza:</strong> progettazione, certificazione</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-700 mb-2">Benefici da Quantificare</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Risparmio energetico:</strong> riduzione dei consumi e dei costi energetici</li>
                  <li><strong>Credito d'imposta:</strong> agevolazioni fiscali del Piano Transizione 5.0</li>
                  <li><strong>Aumento produttività:</strong> maggiore efficienza dei processi</li>
                  <li><strong>Riduzione scarti:</strong> ottimizzazione dell'uso delle risorse</li>
                  <li><strong>Riduzione costi di manutenzione:</strong> grazie a manutenzione predittiva</li>
                  <li><strong>Valore reputazionale:</strong> miglioramento dell'immagine aziendale</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">35.2 Indicatori Economici Chiave</h3>
            
            <p className="mb-4">Per valutare correttamente la convenienza economica di un investimento in Transizione 5.0, è importante utilizzare i seguenti indicatori:</p>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Indicatore</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Descrizione</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Interpretazione</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">ROI (Return on Investment)</td>
                    <td className="py-2 px-4 border-b border-gray-300">Rapporto tra benefici netti e costo dell'investimento</td>
                    <td className="py-2 px-4 border-b border-gray-300">Un ROI {'>'}  0 indica che l'investimento genera un ritorno positivo</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Payback Period</td>
                    <td className="py-2 px-4 border-b border-gray-300">Tempo necessario per recuperare l'investimento iniziale</td>
                    <td className="py-2 px-4 border-b border-gray-300">Un periodo più breve indica un investimento più conveniente</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">VAN (Valore Attuale Netto)</td>
                    <td className="py-2 px-4 border-b border-gray-300">Valore attuale dei flussi di cassa futuri meno l'investimento iniziale</td>
                    <td className="py-2 px-4 border-b border-gray-300">Un VAN {'>'} 0 indica che l'investimento crea valore</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">TIR (Tasso Interno di Rendimento)</td>
                    <td className="py-2 px-4 border-b border-gray-300">Tasso di sconto che rende il VAN pari a zero</td>
                    <td className="py-2 px-4 border-b border-gray-300">Un TIR superiore al costo del capitale indica convenienza</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">LCOE (Levelized Cost of Energy)</td>
                    <td className="py-2 px-4 border-b border-gray-300">Costo medio dell'energia prodotta o risparmiata durante la vita dell'investimento</td>
                    <td className="py-2 px-4 border-b border-gray-300">Utile per confrontare diverse soluzioni energetiche</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">35.3 Esempio Pratico di Analisi</h3>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6 border border-gray-200">
              <h4 className="font-medium text-blue-700 mb-2">Caso: Investimento in Efficienza Energetica per PMI Manifatturiera</h4>
              
              <div className="space-y-3">
                <p><strong>Investimento iniziale:</strong> €250.000 per sistema di monitoraggio energetico e ottimizzazione processi</p>
                <p><strong>Credito d'imposta Transizione 5.0:</strong> 35% = €87.500</p>
                <p><strong>Risparmio energetico annuo:</strong> 20% sui consumi attuali = €45.000/anno</p>
                <p><strong>Costi di manutenzione:</strong> €5.000/anno</p>
                <p><strong>Vita utile dell'investimento:</strong> 10 anni</p>
                
                <div className="border-t border-gray-300 pt-3">
                  <p><strong>Calcolo indicatori:</strong></p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Investimento netto:</strong> €250.000 - €87.500 = €162.500</li>
                    <li><strong>Flusso di cassa annuo:</strong> €45.000 - €5.000 = €40.000/anno</li>
                    <li><strong>Payback Period:</strong> €162.500 / €40.000 = 4,06 anni</li>
                    <li><strong>ROI a 10 anni:</strong> (€400.000 - €162.500) / €162.500 = 146%</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">⚠️</span>
                <span><strong>Nota:</strong> L'esempio sopra riportato è semplificato a scopo illustrativo. Un'analisi completa dovrebbe considerare anche il valore temporale del denaro, l'inflazione, l'evoluzione dei prezzi dell'energia e altri fattori specifici dell'azienda.</span>
              </p>
            </div>
          </div>
        )}
      </div>
      
      {/* Sezione 36: Internazionalizzazione e Transizione 5.0 */}
      <div className="mb-10">
        <div className="flex items-center justify-between bg-blue-700 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('internazionalizzazione')}>
          <h2 id="internazionalizzazione" className="text-2xl font-semibold text-white">36. Internazionalizzazione e Transizione 5.0</h2>
          <span className="text-white">{activeSection === 'internazionalizzazione' ? '−' : '+'}</span>
        </div>
        {activeSection === 'internazionalizzazione' && (
          <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">36.1 Competitività Internazionale</h3>
            
            <p className="mb-4">Gli investimenti in Transizione 5.0 possono rappresentare un importante fattore di competitività sui mercati internazionali. Le aziende che adottano tecnologie avanzate per la sostenibilità e la digitalizzazione possono ottenere significativi vantaggi competitivi:</p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-700 mb-2">Vantaggi Competitivi</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Riduzione dei costi operativi:</strong> maggiore efficienza energetica e produttiva</li>
                  <li><strong>Miglioramento della qualità:</strong> processi più precisi e controllati</li>
                  <li><strong>Flessibilità produttiva:</strong> capacità di adattarsi rapidamente alle richieste del mercato</li>
                  <li><strong>Time-to-market ridotto:</strong> sviluppo e produzione più rapidi</li>
                  <li><strong>Sostenibilità come valore distintivo:</strong> accesso a mercati sensibili ai temi ambientali</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-700 mb-2">Mercati Esteri Strategici</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Unione Europea:</strong> forte attenzione alla sostenibilità e all'economia circolare</li>
                  <li><strong>Nord America:</strong> crescente domanda di prodotti a basso impatto ambientale</li>
                  <li><strong>Paesi Nordici:</strong> mercati con elevati standard di sostenibilità</li>
                  <li><strong>Economie emergenti:</strong> opportunità di trasferimento tecnologico e know-how</li>
                  <li><strong>Mercati regolamentati:</strong> vantaggio per chi anticipa standard ambientali stringenti</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">36.2 Sinergie con Strumenti per l'Internazionalizzazione</h3>
            
            <p className="mb-4">Gli investimenti in Transizione 5.0 possono essere integrati con altri strumenti di supporto all'internazionalizzazione, creando importanti sinergie:</p>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Strumento</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Ente Gestore</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Sinergie con Transizione 5.0</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Fondo 394/81 - SIMEST</td>
                    <td className="py-2 px-4 border-b border-gray-300">SIMEST</td>
                    <td className="py-2 px-4 border-b border-gray-300">Finanziamenti agevolati per progetti di internazionalizzazione che possono includere tecnologie 5.0</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Voucher TEM (Temporary Export Manager)</td>
                    <td className="py-2 px-4 border-b border-gray-300">MISE / Invitalia</td>
                    <td className="py-2 px-4 border-b border-gray-300">Supporto per l'inserimento in azienda di figure specializzate nella promozione internazionale di prodotti sostenibili</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Bandi regionali per l'internazionalizzazione</td>
                    <td className="py-2 px-4 border-b border-gray-300">Regioni / Camere di Commercio</td>
                    <td className="py-2 px-4 border-b border-gray-300">Contributi per la partecipazione a fiere internazionali con focus su innovazione e sostenibilità</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Garanzia SACE per l'internazionalizzazione</td>
                    <td className="py-2 px-4 border-b border-gray-300">SACE</td>
                    <td className="py-2 px-4 border-b border-gray-300">Copertura dei rischi di mancato pagamento per esportazioni di tecnologie green e digitali</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">36.3 Certificazioni e Standard Internazionali</h3>
            
            <p className="mb-4">L'adozione di tecnologie Transizione 5.0 facilita l'ottenimento di certificazioni internazionali sempre più richieste sui mercati esteri:</p>
            
            <div className="space-y-4 mb-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-medium text-blue-700">ISO 50001 - Gestione dell'Energia</h4>
                <p>Certificazione internazionale per i sistemi di gestione dell'energia. Gli investimenti in monitoraggio energetico e efficienza previsti dalla Transizione 5.0 sono perfettamente allineati con i requisiti di questa norma.</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-medium text-blue-700">ISO 14001 - Gestione Ambientale</h4>
                <p>Standard per la gestione ambientale. Le tecnologie per la riduzione dell'impatto ambientale e l'economia circolare supportate dalla Transizione 5.0 facilitano la conformità a questo standard.</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-medium text-blue-700">Certificazioni di Prodotto Ecologiche</h4>
                <p>Ecolabel UE, EPD (Environmental Product Declaration), Carbon Footprint. L'ottimizzazione dei processi produttivi e la riduzione dei consumi energetici migliorano il profilo ambientale dei prodotti.</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-medium text-blue-700">Standard ESG (Environmental, Social, Governance)</h4>
                <p>Criteri sempre più rilevanti per investitori e partner commerciali internazionali. La Transizione 5.0 contribuisce significativamente alla componente ambientale (E) dei criteri ESG.</p>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700 mb-2">Strategie di Comunicazione Internazionale</h4>
              <p className="mb-2">Per valorizzare gli investimenti in Transizione 5.0 sui mercati esteri, è importante:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Integrare i risultati di sostenibilità e innovazione nel materiale promozionale internazionale</li>
                <li>Quantificare e comunicare i benefici ambientali ottenuti (es. riduzione CO2, risparmio energetico)</li>
                <li>Partecipare a fiere internazionali specializzate in tecnologie green e digitali</li>
                <li>Aderire a network e piattaforme internazionali dedicate all'innovazione sostenibile</li>
                <li>Sviluppare case study e success stories da condividere con potenziali clienti e partner esteri</li>
              </ul>
            </div>
          </div>
        )}
      </div>
      
      {/* Sezione 37: Transizione 5.0 e Finanza Sostenibile */}
      <div className="mb-10">
        <div className="flex items-center justify-between bg-blue-700 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('finanza-sostenibile')}>
          <h2 id="finanza-sostenibile" className="text-2xl font-semibold text-white">37. Transizione 5.0 e Finanza Sostenibile</h2>
          <span className="text-white">{activeSection === 'finanza-sostenibile' ? '−' : '+'}</span>
        </div>
        {activeSection === 'finanza-sostenibile' && (
          <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">37.1 Strumenti di Finanza Sostenibile</h3>
            
            <p className="mb-4">La Transizione 5.0 si integra perfettamente con i nuovi strumenti di finanza sostenibile, che possono rappresentare un'importante fonte di finanziamento complementare agli incentivi fiscali. Ecco i principali strumenti disponibili:</p>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Strumento</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Descrizione</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Vantaggi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Green Bond</td>
                    <td className="py-2 px-4 border-b border-gray-300">Obbligazioni emesse per finanziare progetti con benefici ambientali, inclusi quelli di efficienza energetica e digitalizzazione sostenibile</td>
                    <td className="py-2 px-4 border-b border-gray-300">Accesso a investitori sensibili ai temi ESG, potenziali tassi più vantaggiosi, miglioramento reputazionale</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Sustainability-Linked Loan</td>
                    <td className="py-2 px-4 border-b border-gray-300">Finanziamenti con condizioni economiche legate al raggiungimento di obiettivi di sostenibilità, come la riduzione dei consumi energetici</td>
                    <td className="py-2 px-4 border-b border-gray-300">Riduzione del tasso di interesse al raggiungimento degli obiettivi, incentivo al miglioramento continuo</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Energy Efficiency Loan</td>
                    <td className="py-2 px-4 border-b border-gray-300">Finanziamenti specifici per progetti di efficienza energetica, spesso offerti da banche in collaborazione con istituzioni europee (BEI, BERS)</td>
                    <td className="py-2 px-4 border-b border-gray-300">Tassi agevolati, assistenza tecnica, periodi di rimborso allineati ai risparmi energetici</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Fondi di Private Equity Green</td>
                    <td className="py-2 px-4 border-b border-gray-300">Investimenti di capitale da parte di fondi specializzati in aziende con progetti di transizione energetica e digitale</td>
                    <td className="py-2 px-4 border-b border-gray-300">Apporto di capitale senza indebitamento, competenze specialistiche, network internazionale</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">37.2 Tassonomia UE e Reportistica ESG</h3>
            
            <p className="mb-4">Gli investimenti in Transizione 5.0 possono contribuire significativamente alla conformità con la Tassonomia UE e migliorare il profilo ESG dell'azienda:</p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-700 mb-2">Tassonomia UE</h4>
                <p className="mb-2">Sistema di classificazione delle attività economiche sostenibili che:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Definisce criteri tecnici per identificare attività che contribuiscono alla mitigazione e all'adattamento ai cambiamenti climatici</li>
                  <li>Richiede alle aziende di dichiarare la percentuale di attività allineate alla tassonomia</li>
                  <li>Influenza l'accesso a finanziamenti sostenibili</li>
                </ul>
                <p className="mt-2">Gli investimenti in Transizione 5.0 contribuiscono all'obiettivo di mitigazione dei cambiamenti climatici attraverso la riduzione dei consumi energetici.</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-700 mb-2">Reportistica ESG</h4>
                <p className="mb-2">Gli investimenti in Transizione 5.0 migliorano i principali indicatori ESG:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Ambientali (E):</strong> riduzione emissioni CO2, efficienza energetica, economia circolare</li>
                  <li><strong>Sociali (S):</strong> miglioramento condizioni di lavoro, formazione avanzata, sviluppo competenze</li>
                  <li><strong>Governance (G):</strong> sistemi di monitoraggio e controllo, trasparenza, gestione rischi</li>
                </ul>
                <p className="mt-2">La Corporate Sustainability Reporting Directive (CSRD) richiederà a un numero crescente di aziende di rendicontare questi aspetti.</p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">37.3 Energy Performance Contract (EPC)</h3>
            
            <p className="mb-4">Gli Energy Performance Contract rappresentano una modalità innovativa per finanziare progetti di efficienza energetica nell'ambito della Transizione 5.0:</p>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6 border border-gray-200">
              <h4 className="font-medium text-blue-700 mb-2">Funzionamento degli EPC</h4>
              
              <div className="space-y-3">
                <p><strong>Principio base:</strong> Una ESCo (Energy Service Company) realizza l'investimento in efficienza energetica e viene remunerata attraverso i risparmi energetici ottenuti.</p>
                
                <p><strong>Fasi principali:</strong></p>
                <ol className="list-decimal pl-6 space-y-1">
                  <li>Diagnosi energetica e definizione baseline</li>
                  <li>Progettazione e implementazione degli interventi</li>
                  <li>Monitoraggio e verifica dei risparmi</li>
                  <li>Ripartizione dei benefici economici tra azienda e ESCo</li>
                </ol>
                
                <p><strong>Vantaggi per l'azienda:</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Nessun investimento iniziale o investimento ridotto</li>
                  <li>Trasferimento del rischio tecnico alla ESCo</li>
                  <li>Garanzia contrattuale sui risultati di risparmio</li>
                  <li>Possibilità di combinare l'EPC con il credito d'imposta Transizione 5.0</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700 mb-2">Integrazione con Transizione 5.0</h4>
              <p className="mb-2">Per massimizzare i benefici della finanza sostenibile nell'ambito della Transizione 5.0:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Progettare gli investimenti considerando sia i requisiti del credito d'imposta sia i criteri della tassonomia UE</li>
                <li>Implementare sistemi di monitoraggio che soddisfino sia le esigenze di rendicontazione per il GSE sia per la reportistica ESG</li>
                <li>Valutare la possibilità di certificare i risparmi energetici ottenuti attraverso protocolli riconosciuti (es. IPMVP)</li>
                <li>Considerare l'emissione di strumenti di finanza sostenibile per progetti di ampia scala</li>
                <li>Comunicare efficacemente i risultati ottenuti a stakeholder finanziari e non finanziari</li>
              </ul>
            </div>
          </div>
        )}
      </div>
      
      {/* Sezione 38: Transizione 5.0 e PNRR */}
      <div className="mb-10">
        <div className="flex items-center justify-between bg-blue-700 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('transizione-pnrr')}>
          <h2 id="transizione-pnrr" className="text-2xl font-semibold text-white">38. Transizione 5.0 e PNRR</h2>
          <span className="text-white">{activeSection === 'transizione-pnrr' ? '−' : '+'}</span>
        </div>
        {activeSection === 'transizione-pnrr' && (
          <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">38.1 Sinergie con il Piano Nazionale di Ripresa e Resilienza</h3>
            
            <p className="mb-4">Il Piano Transizione 5.0 si inserisce nel più ampio contesto del Piano Nazionale di Ripresa e Resilienza (PNRR), condividendone obiettivi strategici e complementando diverse misure. È importante comprendere queste sinergie per massimizzare le opportunità di finanziamento e supporto:</p>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h4 className="font-medium text-blue-700 mb-2">Allineamento con le Missioni del PNRR</h4>
              <p className="mb-2">La Transizione 5.0 è particolarmente allineata con:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Missione 1:</strong> Digitalizzazione, innovazione, competitività, cultura e turismo</li>
                <li><strong>Missione 2:</strong> Rivoluzione verde e transizione ecologica</li>
                <li><strong>Missione 4:</strong> Istruzione e ricerca</li>
              </ul>
            </div>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Misura PNRR</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Sinergie con Transizione 5.0</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Opportunità di Integrazione</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Transizione 4.0</td>
                    <td className="py-2 px-4 border-b border-gray-300">Complementare alla Transizione 5.0, con focus su digitalizzazione</td>
                    <td className="py-2 px-4 border-b border-gray-300">Combinare investimenti in digitalizzazione (4.0) con quelli in sostenibilità (5.0)</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Competence Center e Digital Innovation Hub</td>
                    <td className="py-2 px-4 border-b border-gray-300">Supporto tecnico e formativo per l'implementazione di tecnologie 5.0</td>
                    <td className="py-2 px-4 border-b border-gray-300">Accedere a servizi di consulenza e formazione per ottimizzare gli investimenti</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Fondo per l'economia circolare</td>
                    <td className="py-2 px-4 border-b border-gray-300">Progetti di riconversione produttiva verso modelli circolari</td>
                    <td className="py-2 px-4 border-b border-gray-300">Integrare tecnologie 5.0 con progetti di economia circolare</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Progetti flagship Rinnovabili e Batterie</td>
                    <td className="py-2 px-4 border-b border-gray-300">Sviluppo di tecnologie per energia rinnovabile e accumulo</td>
                    <td className="py-2 px-4 border-b border-gray-300">Combinare autoproduzione energetica con efficientamento dei processi</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">38.2 Bandi PNRR Rilevanti per la Transizione 5.0</h3>
            
            <p className="mb-4">Diversi bandi emanati nell'ambito del PNRR possono essere complementari agli investimenti in Transizione 5.0:</p>
            
            <div className="space-y-4 mb-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-medium text-blue-700">Bandi per la Ricerca e Sviluppo</h4>
                <p>Finanziamenti per progetti di R&S in ambito di tecnologie green e digitali, che possono includere lo sviluppo di soluzioni innovative per l'efficienza energetica e la digitalizzazione sostenibile.</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-medium text-blue-700">Bandi per le Filiere Produttive</h4>
                <p>Supporto alla creazione e al rafforzamento di filiere produttive strategiche nazionali, con particolare attenzione alla sostenibilità e all'innovazione tecnologica.</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-medium text-blue-700">Bandi per la Formazione e le Competenze</h4>
                <p>Finanziamenti per lo sviluppo di competenze specialistiche in ambito digitale e green, fondamentali per implementare con successo progetti di Transizione 5.0.</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-medium text-blue-700">Bandi per le Comunità Energetiche</h4>
                <p>Supporto alla creazione di comunità energetiche rinnovabili, che possono integrare progetti di efficienza energetica industriale in una logica di sistema territoriale.</p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">38.3 Strategie di Integrazione</h3>
            
            <p className="mb-4">Per massimizzare le opportunità offerte dalla combinazione di Transizione 5.0 e PNRR, le aziende possono adottare le seguenti strategie:</p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-700 mb-2">Approccio Integrato agli Investimenti</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Pianificare investimenti che soddisfino contemporaneamente i requisiti di più misure</li>
                  <li>Sviluppare progetti modulari che possano accedere a diverse fonti di finanziamento</li>
                  <li>Considerare l'intero ciclo di vita degli investimenti, dalla R&S all'implementazione</li>
                  <li>Valutare le complementarità tra crediti d'imposta e contributi a fondo perduto</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-700 mb-2">Governance e Monitoraggio</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Creare un team dedicato alla gestione integrata dei progetti</li>
                  <li>Implementare sistemi di monitoraggio che soddisfino i requisiti di rendicontazione di diverse misure</li>
                  <li>Mantenere una documentazione dettagliata e conforme alle diverse normative</li>
                  <li>Sviluppare KPI che integrino aspetti di digitalizzazione e sostenibilità</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">⚠️</span>
                <span><strong>Attenzione:</strong> È importante verificare le regole di cumulo tra diverse misure di incentivazione. In alcuni casi, l'accesso a contributi a fondo perduto del PNRR potrebbe limitare la possibilità di beneficiare del credito d'imposta Transizione 5.0 sullo stesso investimento. Consultare sempre un esperto per valutare la strategia ottimale.</span>
              </p>
            </div>
          </div>
        )}
      </div>
      
      {/* Sezione 39: Transizione 5.0 e Intelligenza Artificiale */}
      <div className="mb-10">
        <div className="flex items-center justify-between bg-blue-700 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('ia-transizione')}>
          <h2 id="ia-transizione" className="text-2xl font-semibold text-white">39. Transizione 5.0 e Intelligenza Artificiale</h2>
          <span className="text-white">{activeSection === 'ia-transizione' ? '−' : '+'}</span>
        </div>
        {activeSection === 'ia-transizione' && (
          <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">39.1 Ruolo dell'IA nella Transizione 5.0</h3>
            
            <p className="mb-4">L'Intelligenza Artificiale rappresenta una tecnologia abilitante fondamentale per la Transizione 5.0, in grado di integrare e potenziare sia la componente digitale che quella sostenibile:</p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-700 mb-2">IA per l'Efficienza Energetica</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Ottimizzazione predittiva dei consumi energetici</li>
                  <li>Manutenzione predittiva per prevenire sprechi e inefficienze</li>
                  <li>Bilanciamento automatico dei carichi energetici</li>
                  <li>Gestione intelligente di sistemi di autoproduzione energetica</li>
                  <li>Ottimizzazione dei processi produttivi per ridurre l'impatto ambientale</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-700 mb-2">IA per la Digitalizzazione Sostenibile</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Automazione avanzata dei processi con riduzione degli scarti</li>
                  <li>Analisi dei dati per identificare opportunità di efficientamento</li>
                  <li>Ottimizzazione della supply chain con riduzione dell'impronta carbonica</li>
                  <li>Personalizzazione della produzione con riduzione delle risorse impiegate</li>
                  <li>Simulazioni e digital twin per testare soluzioni senza impatto ambientale</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">39.2 Applicazioni Pratiche dell'IA nella Transizione 5.0</h3>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Ambito</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Applicazione IA</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Benefici per Transizione 5.0</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Tecnologie</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Gestione Energetica</td>
                    <td className="py-2 px-4 border-b border-gray-300">Sistemi di Energy Management con IA predittiva</td>
                    <td className="py-2 px-4 border-b border-gray-300">Riduzione 15-30% dei consumi energetici, ottimizzazione automatica in tempo reale</td>
                    <td className="py-2 px-4 border-b border-gray-300">Machine Learning, Deep Learning, IoT</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Produzione</td>
                    <td className="py-2 px-4 border-b border-gray-300">Ottimizzazione parametri di processo con IA</td>
                    <td className="py-2 px-4 border-b border-gray-300">Riduzione scarti 20-40%, efficienza energetica migliorata, qualità superiore</td>
                    <td className="py-2 px-4 border-b border-gray-300">Reinforcement Learning, Computer Vision</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Manutenzione</td>
                    <td className="py-2 px-4 border-b border-gray-300">Manutenzione predittiva basata su IA</td>
                    <td className="py-2 px-4 border-b border-gray-300">Riduzione fermi macchina 30-50%, estensione vita utile, risparmio energetico</td>
                    <td className="py-2 px-4 border-b border-gray-300">Analisi predittiva, Digital Twin, Edge AI</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Supply Chain</td>
                    <td className="py-2 px-4 border-b border-gray-300">Ottimizzazione logistica e approvvigionamenti</td>
                    <td className="py-2 px-4 border-b border-gray-300">Riduzione emissioni CO2 15-25%, minori scorte, efficienza trasporti</td>
                    <td className="py-2 px-4 border-b border-gray-300">Algoritmi di ottimizzazione, Big Data Analytics</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Progettazione</td>
                    <td className="py-2 px-4 border-b border-gray-300">Design generativo e simulazione avanzata</td>
                    <td className="py-2 px-4 border-b border-gray-300">Prodotti più efficienti, riduzione materiali 20-30%, ottimizzazione prestazioni</td>
                    <td className="py-2 px-4 border-b border-gray-300">Generative AI, Simulazione numerica, Cloud Computing</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">39.3 Implementazione dell'IA nei Progetti Transizione 5.0</h3>
            
            <p className="mb-4">Per integrare efficacemente l'Intelligenza Artificiale nei progetti di Transizione 5.0, è consigliabile seguire un approccio strutturato:</p>
            
            <div className="space-y-4 mb-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-medium text-blue-700">1. Assessment e Definizione Obiettivi</h4>
                <p>Valutare i processi esistenti, identificare le aree con maggiore potenziale di miglioramento in termini di efficienza energetica e sostenibilità, definire KPI misurabili.</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-medium text-blue-700">2. Infrastruttura Dati</h4>
                <p>Implementare sistemi di raccolta dati (sensori IoT, sistemi SCADA, MES) e creare un'architettura dati adeguata per alimentare i modelli di IA.</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-medium text-blue-700">3. Selezione e Sviluppo Modelli IA</h4>
                <p>Scegliere le tecnologie IA più adatte agli obiettivi (machine learning, deep learning, reinforcement learning) e sviluppare modelli personalizzati o adattare soluzioni esistenti.</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-medium text-blue-700">4. Integrazione con Sistemi Esistenti</h4>
                <p>Integrare le soluzioni IA con i sistemi di gestione energetica, controllo di processo e automazione esistenti, garantendo interoperabilità.</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-medium text-blue-700">5. Monitoraggio e Miglioramento Continuo</h4>
                <p>Implementare sistemi di monitoraggio delle performance, valutare i risultati rispetto ai KPI definiti e migliorare continuamente i modelli IA.</p>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h4 className="font-medium text-blue-700 mb-2">Considerazioni sull'Ammissibilità al Credito d'Imposta</h4>
              <p className="mb-2">Per essere ammissibili al credito d'imposta Transizione 5.0, le soluzioni IA devono:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Essere direttamente correlate al miglioramento dell'efficienza energetica o alla riduzione dell'impatto ambientale</li>
                <li>Generare benefici misurabili e quantificabili in termini di risparmio energetico o riduzione delle emissioni</li>
                <li>Essere parte integrante di un progetto più ampio che soddisfi i requisiti minimi di riduzione dei consumi energetici</li>
                <li>Essere adeguatamente documentate sia in fase progettuale che in fase di rendicontazione</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">⚠️</span>
                <span><strong>Nota importante:</strong> L'implementazione di soluzioni IA richiede competenze specialistiche. È consigliabile collaborare con partner tecnologici esperti, università o centri di ricerca per massimizzare l'efficacia dei progetti. Inoltre, considerare gli aspetti etici e di privacy nell'utilizzo dell'IA, adottando un approccio di "IA responsabile" che consideri anche l'impatto sociale delle tecnologie implementate.</span>
              </p>
            </div>
          </div>
        )}
      </div>
      
      {/* Sezione 40: Prospettive Future della Transizione 5.0 */}
      <div className="mb-10">
        <div className="flex items-center justify-between bg-blue-700 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('prospettive-future')}>
          <h2 id="prospettive-future" className="text-2xl font-semibold text-white">40. Prospettive Future della Transizione 5.0</h2>
          <span className="text-white">{activeSection === 'prospettive-future' ? '−' : '+'}</span>
        </div>
        {activeSection === 'prospettive-future' && (
          <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">40.1 Evoluzione del Quadro Normativo</h3>
            
            <p className="mb-4">Il Piano Transizione 5.0 rappresenta un primo passo significativo verso un nuovo paradigma industriale che integra digitalizzazione e sostenibilità. Nei prossimi anni, è prevedibile un'evoluzione del quadro normativo in diverse direzioni:</p>
            
            <div className="space-y-4 mb-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-medium text-blue-700">Estensione Temporale</h4>
                <p>Il piano attuale copre il biennio 2024-2025, ma è probabile un'estensione temporale per garantire continuità agli investimenti. Le associazioni di categoria stanno già promuovendo un'estensione almeno fino al 2027, in linea con la programmazione europea.</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-medium text-blue-700">Ampliamento della Platea</h4>
                <p>Possibile inclusione di settori attualmente non prioritari e revisione dei requisiti di accesso per coinvolgere un numero maggiore di PMI, con particolare attenzione ai settori ad alta intensità energetica.</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-medium text-blue-700">Integrazione con il Green Deal Europeo</h4>
                <p>Progressivo allineamento con gli obiettivi del Green Deal europeo e con il pacchetto "Fit for 55", con possibile introduzione di requisiti più stringenti in termini di riduzione delle emissioni.</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-medium text-blue-700">Semplificazione Procedurale</h4>
                <p>Probabile evoluzione verso procedure di accesso e rendicontazione più snelle, con maggiore digitalizzazione dei processi e interoperabilità tra le diverse piattaforme pubbliche.</p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">40.2 Tendenze Tecnologiche Emergenti</h3>
            
            <p className="mb-4">Diverse tecnologie emergenti modelleranno il futuro della Transizione 5.0, offrendo nuove opportunità per l'integrazione tra digitalizzazione e sostenibilità:</p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-700 mb-2">Tecnologie Energetiche</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Idrogeno verde:</strong> Integrazione nei processi industriali ad alta intensità energetica</li>
                  <li><strong>Accumulo avanzato:</strong> Nuove tecnologie di batterie e sistemi di accumulo termico</li>
                  <li><strong>Micro-grid:</strong> Reti energetiche locali intelligenti per ottimizzare produzione e consumo</li>
                  <li><strong>Energy harvesting:</strong> Recupero di energia da fonti ambientali e di scarto</li>
                  <li><strong>Materiali a cambiamento di fase:</strong> Per stoccaggio termico ad alta efficienza</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-700 mb-2">Tecnologie Digitali</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Quantum computing:</strong> Per simulazioni complesse di efficienza energetica</li>
                  <li><strong>Edge AI:</strong> Intelligenza artificiale distribuita per ottimizzazione in tempo reale</li>
                  <li><strong>Digital twin avanzati:</strong> Simulazione completa di ecosistemi produttivi ed energetici</li>
                  <li><strong>Blockchain:</strong> Per certificazione trasparente dell'impronta carbonica</li>
                  <li><strong>6G e comunicazioni avanzate:</strong> Per gestione distribuita e real-time dell'energia</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">40.3 Nuovi Modelli di Business</h3>
            
            <p className="mb-4">La Transizione 5.0 catalizza l'emergere di nuovi modelli di business che integrano sostenibilità e digitalizzazione:</p>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Modello di Business</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Descrizione</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Impatto sulla Transizione 5.0</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Energy-as-a-Service (EaaS)</td>
                    <td className="py-2 px-4 border-b border-gray-300">Fornitura di soluzioni energetiche complete con pagamento basato sui risultati invece che sui consumi</td>
                    <td className="py-2 px-4 border-b border-gray-300">Accelerazione degli investimenti in efficienza senza impegno di capitale iniziale</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Product-as-a-Service</td>
                    <td className="py-2 px-4 border-b border-gray-300">Vendita dell'uso di un prodotto invece del prodotto stesso, incentivando durabilità e riparabilità</td>
                    <td className="py-2 px-4 border-b border-gray-300">Riduzione dell'impatto ambientale e ottimizzazione del ciclo di vita dei prodotti</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Industrial Symbiosis</td>
                    <td className="py-2 px-4 border-b border-gray-300">Ecosistemi industriali dove gli scarti di un'azienda diventano risorse per un'altra</td>
                    <td className="py-2 px-4 border-b border-gray-300">Ottimizzazione delle risorse a livello di sistema e riduzione dell'impatto ambientale complessivo</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Virtual Power Plants</td>
                    <td className="py-2 px-4 border-b border-gray-300">Aggregazione di risorse energetiche distribuite per ottimizzare produzione e consumo</td>
                    <td className="py-2 px-4 border-b border-gray-300">Valorizzazione della flessibilità energetica e integrazione ottimale delle rinnovabili</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Carbon Trading Platforms</td>
                    <td className="py-2 px-4 border-b border-gray-300">Piattaforme digitali per la compravendita di crediti di carbonio e certificati verdi</td>
                    <td className="py-2 px-4 border-b border-gray-300">Monetizzazione dei benefici ambientali e incentivo ulteriore alla decarbonizzazione</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">40.4 Verso una Transizione 6.0?</h3>
            
            <p className="mb-4">Guardando oltre l'orizzonte attuale, possiamo intravedere i contorni di quella che potrebbe essere definita una "Transizione 6.0", caratterizzata da:</p>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Integrazione completa tra mondo fisico e digitale</strong>, con sistemi cyber-fisici autonomi che ottimizzano continuamente i processi in base a obiettivi di sostenibilità</li>
                <li><strong>Economia circolare by design</strong>, dove ogni prodotto e processo è progettato fin dall'inizio per il riutilizzo e il riciclo completo</li>
                <li><strong>Neutralità carbonica come standard</strong>, non più come obiettivo, con processi produttivi a zero emissioni nette</li>
                <li><strong>Simbiosi industriale automatizzata</strong>, con piattaforme digitali che ottimizzano in tempo reale lo scambio di risorse tra aziende</li>
                <li><strong>Personalizzazione sostenibile di massa</strong>, con prodotti altamente personalizzati ma realizzati con il minimo impatto ambientale</li>
                <li><strong>Resilienza integrata</strong>, con sistemi produttivi ed energetici in grado di adattarsi rapidamente a shock esterni e cambiamenti climatici</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-medium text-green-700 mb-2">Considerazioni Finali</h4>
              <p>La Transizione 5.0 rappresenta un cambio di paradigma fondamentale per il sistema industriale italiano ed europeo. Le aziende che sapranno cogliere questa opportunità non solo beneficeranno degli incentivi fiscali attuali, ma si posizioneranno strategicamente per un futuro in cui sostenibilità e digitalizzazione saranno fattori imprescindibili di competitività.</p>
              <p className="mt-2">Il percorso verso un'industria pienamente sostenibile e digitale è appena iniziato, e richiederà un impegno continuo in termini di innovazione, formazione e collaborazione tra tutti gli attori dell'ecosistema: imprese, istituzioni, centri di ricerca e società civile.</p>
              <p className="mt-2">Le aziende che oggi investono nella Transizione 5.0 non stanno semplicemente adeguandosi a un requisito normativo, ma stanno costruendo le fondamenta per prosperare in un'economia del futuro più sostenibile, efficiente e resiliente.</p>
            </div>
          </div>
        )}
      </div>
      
      {/* Sezione 41: Transizione 5.0 e Industria 4.0 */}
      <div className="mb-10">
        <div className="flex items-center justify-between bg-blue-700 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('transizione-industria')}>
          <h2 id="transizione-industria" className="text-2xl font-semibold text-white">41. Transizione 5.0 e Industria 4.0</h2>
          <span className="text-white">{activeSection === 'transizione-industria' ? '−' : '+'}</span>
        </div>
        {activeSection === 'transizione-industria' && (
          <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">41.1 Evoluzione dal Piano Industria 4.0 alla Transizione 5.0</h3>
            
            <p className="mb-4">La Transizione 5.0 rappresenta l'evoluzione naturale del Piano Industria 4.0 (poi Transizione 4.0), integrando la digitalizzazione con la sostenibilità ambientale. Comprendere questa evoluzione è fondamentale per le aziende che hanno già investito in tecnologie 4.0 e vogliono ora progredire verso un modello più sostenibile.</p>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Aspetto</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Industria/Transizione 4.0</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Transizione 5.0</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Focus principale</td>
                    <td className="py-2 px-4 border-b border-gray-300">Digitalizzazione e automazione dei processi produttivi</td>
                    <td className="py-2 px-4 border-b border-gray-300">Integrazione tra digitalizzazione e sostenibilità ambientale</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Obiettivi</td>
                    <td className="py-2 px-4 border-b border-gray-300">Aumento produttività, flessibilità, qualità</td>
                    <td className="py-2 px-4 border-b border-gray-300">Riduzione consumi energetici, decarbonizzazione, economia circolare</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Tecnologie chiave</td>
                    <td className="py-2 px-4 border-b border-gray-300">IoT, Cloud, Big Data, Robotica, Simulazione</td>
                    <td className="py-2 px-4 border-b border-gray-300">Tecnologie 4.0 + sistemi di efficienza energetica, rinnovabili, monitoraggio ambientale</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Requisiti per incentivi</td>
                    <td className="py-2 px-4 border-b border-gray-300">Interconnessione e integrazione con sistemi aziendali</td>
                    <td className="py-2 px-4 border-b border-gray-300">Riduzione consumi energetici (almeno 3-6%) + digitalizzazione</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Metriche di successo</td>
                    <td className="py-2 px-4 border-b border-gray-300">OEE, time-to-market, costi operativi</td>
                    <td className="py-2 px-4 border-b border-gray-300">Consumi energetici, emissioni CO2, circolarità delle risorse</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">41.2 Integrazione degli Investimenti 4.0 nella Transizione 5.0</h3>
            
            <p className="mb-4">Per le aziende che hanno già investito in tecnologie 4.0, è possibile integrare questi asset all'interno di una strategia di Transizione 5.0:</p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-700 mb-2">Valorizzazione degli Asset 4.0 Esistenti</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Utilizzare i sistemi IoT già installati per monitorare anche i consumi energetici</li>
                  <li>Estendere le piattaforme di analytics per includere KPI ambientali</li>
                  <li>Aggiornare i software di simulazione per ottimizzare anche i parametri energetici</li>
                  <li>Integrare i robot collaborativi con sistemi di gestione energetica intelligente</li>
                  <li>Utilizzare i digital twin per testare scenari di efficientamento energetico</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-700 mb-2">Nuovi Investimenti Complementari</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Sistemi di monitoraggio energetico da integrare con l'infrastruttura IoT esistente</li>
                  <li>Moduli software per l'ottimizzazione energetica da aggiungere agli ERP/MES</li>
                  <li>Tecnologie per il recupero di calore e energia da processi esistenti</li>
                  <li>Sistemi di automazione intelligente per la gestione dei carichi energetici</li>
                  <li>Soluzioni per l'economia circolare da integrare nei processi digitalizzati</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">41.3 Casi di Successo di Integrazione 4.0-5.0</h3>
            
            <div className="space-y-4 mb-6">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-medium text-green-700">Caso 1: Azienda Manifatturiera Meccanica</h4>
                <p className="mb-2"><strong>Situazione iniziale:</strong> Linea produttiva automatizzata con robot, sensori IoT e sistema MES (Industria 4.0)</p>
                <p className="mb-2"><strong>Integrazione 5.0:</strong> Implementazione di un sistema di ottimizzazione energetica che utilizza i dati già raccolti dai sensori IoT per modulare il consumo energetico in base al carico di lavoro effettivo.</p>
                <p><strong>Risultati:</strong> Riduzione del 15% dei consumi energetici, miglioramento dell'efficienza produttiva del 8%, ROI dell'investimento aggiuntivo in 14 mesi.</p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-medium text-green-700">Caso 2: Azienda del Settore Alimentare</h4>
                <p className="mb-2"><strong>Situazione iniziale:</strong> Sistema di tracciabilità digitale e controllo qualità automatizzato (Industria 4.0)</p>
                <p className="mb-2"><strong>Integrazione 5.0:</strong> Estensione del sistema per includere il monitoraggio dell'impronta carbonica dei prodotti e ottimizzazione dei processi termici con recupero di calore.</p>
                <p><strong>Risultati:</strong> Riduzione del 20% dei consumi energetici, valorizzazione commerciale dei prodotti a bassa impronta carbonica, accesso a nuovi mercati sensibili alla sostenibilità.</p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">41.4 Roadmap per la Transizione da 4.0 a 5.0</h3>
            
            <p className="mb-4">Per le aziende che hanno già implementato soluzioni 4.0 e vogliono evolvere verso la Transizione 5.0, si suggerisce la seguente roadmap:</p>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6 border border-gray-200">
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  <strong>Assessment energetico e digitale integrato</strong>
                  <p className="text-sm mt-1">Valutare lo stato attuale delle tecnologie 4.0 e dei consumi energetici, identificando le aree di integrazione e miglioramento.</p>
                </li>
                <li>
                  <strong>Definizione di KPI integrati</strong>
                  <p className="text-sm mt-1">Stabilire metriche che combinino performance produttive e sostenibilità (es. energia consumata per unità prodotta, emissioni CO2 per lotto).</p>
                </li>
                <li>
                  <strong>Aggiornamento dell'infrastruttura di raccolta dati</strong>
                  <p className="text-sm mt-1">Estendere i sistemi IoT esistenti per includere parametri energetici e ambientali.</p>
                </li>
                <li>
                  <strong>Implementazione di sistemi di gestione energetica</strong>
                  <p className="text-sm mt-1">Integrare soluzioni di energy management con i sistemi di controllo della produzione esistenti.</p>
                </li>
                <li>
                  <strong>Ottimizzazione algoritmica integrata</strong>
                  <p className="text-sm mt-1">Sviluppare algoritmi che ottimizzino simultaneamente produttività, qualità ed efficienza energetica.</p>
                </li>
                <li>
                  <strong>Formazione del personale</strong>
                  <p className="text-sm mt-1">Aggiornare le competenze dei dipendenti combinando conoscenze digitali e di sostenibilità energetica.</p>
                </li>
                <li>
                  <strong>Monitoraggio e miglioramento continuo</strong>
                  <p className="text-sm mt-1">Implementare un ciclo di miglioramento continuo basato sui dati raccolti e sulle performance integrate.</p>
                </li>
              </ol>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">⚠️</span>
                <span><strong>Nota importante:</strong> Gli investimenti già effettuati nell'ambito di Industria/Transizione 4.0 possono essere valorizzati all'interno del piano Transizione 5.0, ma gli incentivi fiscali si applicano solo ai nuovi investimenti che rispettano i requisiti specifici del nuovo piano, in particolare quelli relativi alla riduzione dei consumi energetici. Verificare sempre la compatibilità e le possibilità di cumulo con eventuali incentivi già ottenuti.</span>
              </p>
            </div>
          </div>
        )}
      </div>
      
      {/* Sezione 42: Transizione 5.0 e Supply Chain Sostenibile */}
      <div className="mb-10">
        <div className="flex items-center justify-between bg-blue-700 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('supply-chain-sostenibile')}>
          <h2 id="supply-chain-sostenibile" className="text-2xl font-semibold text-white">42. Transizione 5.0 e Supply Chain Sostenibile</h2>
          <span className="text-white">{activeSection === 'supply-chain-sostenibile' ? '−' : '+'}</span>
        </div>
        {activeSection === 'supply-chain-sostenibile' && (
          <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">42.1 L'Importanza della Supply Chain nella Transizione 5.0</h3>
            
            <p className="mb-4">La Transizione 5.0 non si limita ai confini della singola azienda, ma coinvolge l'intera catena del valore. Una supply chain sostenibile è fondamentale per raggiungere gli obiettivi di decarbonizzazione e riduzione dell'impatto ambientale, oltre a rappresentare un elemento di competitività crescente.</p>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h4 className="font-medium text-blue-700 mb-2">Perché è cruciale integrare la supply chain nella Transizione 5.0:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Visione sistemica dell'impatto:</strong> Fino all'80% dell'impronta carbonica di un prodotto può derivare dalla supply chain e non dalle operazioni dirette dell'azienda.</li>
                <li><strong>Normative emergenti:</strong> La Corporate Sustainability Due Diligence Directive (CSDDD) e la Corporate Sustainability Reporting Directive (CSRD) richiedono alle aziende di rendicontare e gestire gli impatti ambientali lungo tutta la catena del valore.</li>
                <li><strong>Vantaggio competitivo:</strong> Clienti e investitori premiano sempre più le aziende con catene di fornitura sostenibili e trasparenti.</li>
                <li><strong>Resilienza:</strong> Una supply chain sostenibile è generalmente più resiliente agli shock esterni, come dimostrato durante recenti crisi globali.</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">42.2 Digitalizzazione della Supply Chain per la Sostenibilità</h3>
            
            <p className="mb-4">Le tecnologie digitali possono trasformare la supply chain in ottica di sostenibilità, creando sinergie perfettamente allineate con gli obiettivi della Transizione 5.0:</p>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Tecnologia</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Applicazione nella Supply Chain</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Benefici di Sostenibilità</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Blockchain</td>
                    <td className="py-2 px-4 border-b border-gray-300">Tracciabilità end-to-end dei materiali e prodotti</td>
                    <td className="py-2 px-4 border-b border-gray-300">Verifica dell'origine sostenibile, riduzione delle frodi, certificazione delle emissioni</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">IoT e sensori</td>
                    <td className="py-2 px-4 border-b border-gray-300">Monitoraggio in tempo reale di condizioni e consumi</td>
                    <td className="py-2 px-4 border-b border-gray-300">Ottimizzazione dei trasporti, riduzione degli sprechi, monitoraggio delle emissioni</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Digital Twin</td>
                    <td className="py-2 px-4 border-b border-gray-300">Simulazione della supply chain</td>
                    <td className="py-2 px-4 border-b border-gray-300">Ottimizzazione dei percorsi logistici, riduzione delle emissioni, scenario planning</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">AI e Machine Learning</td>
                    <td className="py-2 px-4 border-b border-gray-300">Previsione della domanda e ottimizzazione inventari</td>
                    <td className="py-2 px-4 border-b border-gray-300">Riduzione degli sprechi, ottimizzazione delle scorte, efficienza energetica</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Piattaforme collaborative</td>
                    <td className="py-2 px-4 border-b border-gray-300">Condivisione dati tra partner della supply chain</td>
                    <td className="py-2 px-4 border-b border-gray-300">Ottimizzazione carichi, logistica collaborativa, economia circolare</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">42.3 Strategie per una Supply Chain Sostenibile</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-medium text-blue-700 mb-2">Valutazione e Selezione Fornitori</h4>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Implementare criteri ESG nella selezione dei fornitori</li>
                  <li>Richiedere certificazioni ambientali (ISO 14001, 50001)</li>
                  <li>Sviluppare scorecard di sostenibilità per i fornitori</li>
                  <li>Condurre audit di sostenibilità nella supply chain</li>
                </ul>
                
                <h4 className="font-medium text-blue-700 mb-2">Ottimizzazione Logistica</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Implementare sistemi di ottimizzazione dei percorsi</li>
                  <li>Adottare veicoli a basse emissioni o elettrici</li>
                  <li>Consolidare le spedizioni e ottimizzare i carichi</li>
                  <li>Valutare alternative modali (es. ferrovia vs strada)</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-blue-700 mb-2">Design Circolare</h4>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Progettare prodotti per la riparabilità e il riciclo</li>
                  <li>Utilizzare materiali riciclati o a basso impatto</li>
                  <li>Implementare programmi di take-back e riutilizzo</li>
                  <li>Ridurre packaging e ottimizzarne la sostenibilità</li>
                </ul>
                
                <h4 className="font-medium text-blue-700 mb-2">Collaborazione e Trasparenza</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Condividere best practice con fornitori e partner</li>
                  <li>Stabilire obiettivi comuni di riduzione emissioni</li>
                  <li>Implementare piattaforme di condivisione dati</li>
                  <li>Pubblicare report di sostenibilità della supply chain</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">42.4 Misurazione dell'Impatto nella Supply Chain</h3>
            
            <p className="mb-4">Per integrare efficacemente la supply chain nella Transizione 5.0, è essenziale misurare e monitorare gli impatti ambientali lungo tutta la catena del valore:</p>
            
            <div className="bg-green-50 p-4 rounded-lg mb-6 border border-green-200">
              <h4 className="font-medium text-green-700 mb-2">Metriche Chiave per la Supply Chain Sostenibile:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Emissioni Scope 3:</strong> Misurazione delle emissioni indirette generate lungo la supply chain (spesso rappresentano oltre il 70% dell'impronta carbonica totale)</li>
                <li><strong>Intensità energetica:</strong> Energia consumata per unità di prodotto lungo tutta la catena del valore</li>
                <li><strong>Impronta idrica:</strong> Consumo e impatto sulle risorse idriche lungo la supply chain</li>
                <li><strong>Tasso di circolarità:</strong> Percentuale di materiali riciclati o riutilizzati nel ciclo produttivo</li>
                <li><strong>Distanza media di approvvigionamento:</strong> Chilometri percorsi dai materiali/componenti (favorire supply chain locali)</li>
                <li><strong>Percentuale di fornitori con certificazioni ambientali:</strong> Misura della maturità ambientale della supply chain</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">42.5 Caso Studio: Trasformazione Digitale e Sostenibile della Supply Chain</h3>
            
            <div className="border-l-4 border-green-500 pl-4 mb-6">
              <h4 className="font-medium text-green-700">Azienda del Settore Manifatturiero</h4>
              <p className="mb-2"><strong>Sfida:</strong> Ridurre l'impronta carbonica complessiva del 30% entro 5 anni, con particolare focus sulla supply chain che rappresentava il 75% delle emissioni totali.</p>
              <p className="mb-2"><strong>Soluzione implementata:</strong></p>
              <ul className="list-disc pl-6 space-y-1 mb-2">
                <li>Piattaforma blockchain per tracciare l'origine e l'impronta carbonica dei materiali</li>
                <li>Sistema IoT per monitoraggio real-time dei trasporti e ottimizzazione percorsi</li>
                <li>Programma di sviluppo fornitori con incentivi per riduzione emissioni</li>
                <li>Riprogettazione del packaging in ottica di economia circolare</li>
                <li>Digital twin della supply chain per simulazioni e ottimizzazioni continue</li>
              </ul>
              <p><strong>Risultati:</strong> Riduzione del 25% delle emissioni Scope 3 in tre anni, diminuzione dei costi logistici del 15%, miglioramento della resilienza della supply chain e accesso a nuovi mercati premium grazie alla maggiore sostenibilità certificata.</p>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">⚠️</span>
                <span><strong>Nota per gli investimenti Transizione 5.0:</strong> Gli investimenti in tecnologie digitali per la gestione sostenibile della supply chain possono rientrare nel perimetro della Transizione 5.0 se contribuiscono direttamente o indirettamente alla riduzione dei consumi energetici e all'efficientamento dei processi. È importante documentare adeguatamente il collegamento tra questi investimenti e i benefici energetici/ambientali ottenuti per accedere agli incentivi fiscali.</span>
              </p>
            </div>
          </div>
        )}
      </div>
      
      {/* Sezione 43: Transizione 5.0 e Formazione del Personale */}
      <div className="mb-10">
        <div className="flex items-center justify-between bg-blue-700 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('formazione-personale')}>
          <h2 id="formazione-personale" className="text-2xl font-semibold text-white">43. Transizione 5.0 e Formazione del Personale</h2>
          <span className="text-white">{activeSection === 'formazione-personale' ? '−' : '+'}</span>
        </div>
        {activeSection === 'formazione-personale' && (
          <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">43.1 Il Capitale Umano come Fattore Critico di Successo</h3>
            
            <p className="mb-4">La Transizione 5.0 non è solo una questione di tecnologie e processi, ma richiede un profondo cambiamento culturale e di competenze all'interno dell'organizzazione. Il capitale umano rappresenta il fattore critico di successo per l'implementazione efficace delle strategie di digitalizzazione sostenibile.</p>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h4 className="font-medium text-blue-700 mb-2">Perché la formazione è essenziale per la Transizione 5.0:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Nuove competenze ibride:</strong> La convergenza tra digitalizzazione e sostenibilità richiede profili professionali con competenze trasversali, precedentemente separate.</li>
                <li><strong>Resistenza al cambiamento:</strong> La formazione aiuta a superare le resistenze culturali e organizzative verso nuovi modelli operativi.</li>
                <li><strong>Valorizzazione degli investimenti:</strong> Senza adeguate competenze, gli investimenti in tecnologie avanzate rischiano di essere sottoutilizzati o inefficaci.</li>
                <li><strong>Innovazione continua:</strong> Personale formato può contribuire attivamente all'ottimizzazione e all'evoluzione dei processi di Transizione 5.0.</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">43.2 Competenze Chiave per la Transizione 5.0</h3>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Area di Competenza</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Competenze Specifiche</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Ruoli Aziendali Coinvolti</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Tecnologie Digitali Sostenibili</td>
                    <td className="py-2 px-4 border-b border-gray-300">IoT per monitoraggio energetico, AI per ottimizzazione consumi, Digital Twin per simulazioni ambientali</td>
                    <td className="py-2 px-4 border-b border-gray-300">IT Manager, Tecnici di produzione, Ingegneri di processo</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Gestione Energetica</td>
                    <td className="py-2 px-4 border-b border-gray-300">Analisi dei consumi, efficienza energetica, fonti rinnovabili, sistemi di recupero energetico</td>
                    <td className="py-2 px-4 border-b border-gray-300">Energy Manager, Facility Manager, Responsabili di produzione</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Economia Circolare</td>
                    <td className="py-2 px-4 border-b border-gray-300">Design for sustainability, analisi del ciclo di vita, gestione materiali, logistica inversa</td>
                    <td className="py-2 px-4 border-b border-gray-300">Product Designer, Supply Chain Manager, Responsabili R&D</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Normative e Incentivi</td>
                    <td className="py-2 px-4 border-b border-gray-300">Quadro normativo Transizione 5.0, requisiti tecnici, procedure di accesso agli incentivi</td>
                    <td className="py-2 px-4 border-b border-gray-300">Responsabili compliance, CFO, Consulenti fiscali</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Soft Skills per la Transizione</td>
                    <td className="py-2 px-4 border-b border-gray-300">Change management, pensiero sistemico, problem solving integrato, collaborazione cross-funzionale</td>
                    <td className="py-2 px-4 border-b border-gray-300">Tutti i livelli, con focus su management e team leader</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">43.3 Strategie di Formazione Efficaci</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-700 mb-2">Approcci Formativi Innovativi</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Learning by doing:</strong> Progetti pilota dove il personale applica direttamente le nuove competenze</li>
                  <li><strong>Formazione ibrida:</strong> Combinazione di sessioni in presenza e moduli e-learning personalizzati</li>
                  <li><strong>Gamification:</strong> Elementi di gioco per aumentare coinvolgimento e ritenzione delle conoscenze</li>
                  <li><strong>Realtà virtuale/aumentata:</strong> Simulazioni immersive di processi di Transizione 5.0</li>
                  <li><strong>Mentoring interno:</strong> Trasferimento di competenze tra personale esperto e nuovi addetti</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-700 mb-2">Pianificazione della Formazione</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Assessment delle competenze:</strong> Mappatura delle skills esistenti e gap analysis</li>
                  <li><strong>Percorsi personalizzati:</strong> Formazione calibrata sui diversi ruoli e livelli</li>
                  <li><strong>Formazione continua:</strong> Programmi di aggiornamento regolare sulle evoluzioni</li>
                  <li><strong>Certificazioni:</strong> Percorsi formativi che portino a certificazioni riconosciute</li>
                  <li><strong>Misurazione dei risultati:</strong> KPI specifici per valutare l'efficacia della formazione</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">43.4 Fondi e Incentivi per la Formazione</h3>
            
            <p className="mb-4">Per supportare le aziende nell'aggiornamento delle competenze del personale in ottica Transizione 5.0, sono disponibili diversi strumenti di finanziamento:</p>
            
            <div className="bg-green-50 p-4 rounded-lg mb-6 border border-green-200">
              <h4 className="font-medium text-green-700 mb-2">Strumenti di Finanziamento per la Formazione 5.0:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Credito d'imposta Formazione 4.0/5.0:</strong> Incentivo fiscale per la formazione del personale su tecnologie abilitanti, esteso anche alle competenze di sostenibilità energetica e ambientale.</li>
                <li><strong>Fondi Interprofessionali:</strong> Risorse gestite dalle parti sociali per finanziare piani formativi aziendali, settoriali o territoriali.</li>
                <li><strong>FSE+ (Fondo Sociale Europeo Plus):</strong> Programmi regionali che finanziano interventi di upskilling e reskilling in ambito digitale e green.</li>
                <li><strong>PNRR - Missione 4:</strong> Risorse dedicate al potenziamento delle competenze tecniche e trasversali, con focus su transizione digitale ed ecologica.</li>
                <li><strong>Programma GOL (Garanzia di Occupabilità dei Lavoratori):</strong> Misure per la riqualificazione dei lavoratori, con percorsi specifici per le competenze digitali e verdi.</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">43.5 Caso Studio: Piano di Formazione Integrato per la Transizione 5.0</h3>
            
            <div className="border-l-4 border-green-500 pl-4 mb-6">
              <h4 className="font-medium text-green-700">Azienda del Settore Automotive</h4>
              <p className="mb-2"><strong>Sfida:</strong> Trasformare la cultura aziendale e le competenze di 250 dipendenti per implementare con successo un programma di Transizione 5.0 che integrava digitalizzazione avanzata e decarbonizzazione dei processi produttivi.</p>
              <p className="mb-2"><strong>Soluzione implementata:</strong></p>
              <ul className="list-disc pl-6 space-y-1 mb-2">
                <li>Mappatura dettagliata delle competenze esistenti e definizione dei gap rispetto agli obiettivi di Transizione 5.0</li>
                <li>Creazione di una "Digital & Sustainability Academy" interna con percorsi differenziati per ruolo</li>
                <li>Formazione tecnica specifica su tecnologie IoT per monitoraggio energetico e sistemi di ottimizzazione AI-based</li>
                <li>Programma di change management per middle management focalizzato sull'integrazione di KPI digitali e di sostenibilità</li>
                <li>Collaborazione con università e centri di ricerca per formazione avanzata e aggiornamento continuo</li>
              </ul>
              <p><strong>Risultati:</strong> Riduzione del 40% del tempo di implementazione delle tecnologie 5.0, miglioramento del 25% nell'efficacia degli interventi di efficientamento energetico, creazione di 15 "ambasciatori della Transizione 5.0" interni che hanno facilitato il cambiamento culturale, ROI della formazione stimato in 2.8x l'investimento iniziale.</p>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">⚠️</span>
                <span><strong>Consiglio pratico:</strong> Quando si pianifica un progetto di Transizione 5.0, è fondamentale allocare almeno il 15-20% del budget complessivo alla formazione e allo sviluppo delle competenze. Questo investimento non solo massimizza il ritorno degli investimenti tecnologici, ma riduce significativamente i rischi di implementazione e accelera l'adozione delle nuove soluzioni. Ricorda che la formazione può beneficiare di incentivi specifici, che possono essere cumulati (nel rispetto delle regole di cumulo) con gli incentivi per gli investimenti in beni strumentali.</span>
              </p>
            </div>
          </div>
        )}
      </div>
      
      {/* Sezione 44: Transizione 5.0 e Monitoraggio delle Performance */}
      <div className="mb-10">
        <div className="flex items-center justify-between bg-blue-700 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('monitoraggio-performance')}>
          <h2 id="monitoraggio-performance" className="text-2xl font-semibold text-white">44. Transizione 5.0 e Monitoraggio delle Performance</h2>
          <span className="text-white">{activeSection === 'monitoraggio-performance' ? '−' : '+'}</span>
        </div>
        {activeSection === 'monitoraggio-performance' && (
          <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">44.1 L'Importanza della Misurazione Integrata</h3>
            
            <p className="mb-4">Un elemento fondamentale per il successo della Transizione 5.0 è la capacità di misurare e monitorare in modo integrato sia le performance digitali che quelle di sostenibilità energetica e ambientale. Questo approccio permette di verificare l'efficacia degli investimenti, ottimizzare continuamente i processi e dimostrare la conformità ai requisiti per gli incentivi fiscali.</p>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h4 className="font-medium text-blue-700 mb-2">Vantaggi di un sistema di monitoraggio integrato:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Verifica dei requisiti per incentivi:</strong> Documentazione puntuale della riduzione dei consumi energetici (3-6%) richiesta per il credito d'imposta.</li>
                <li><strong>Ottimizzazione continua:</strong> Identificazione di aree di miglioramento e opportunità di efficientamento ulteriore.</li>
                <li><strong>Decision making data-driven:</strong> Supporto alle decisioni aziendali basato su dati oggettivi e misurabili.</li>
                <li><strong>Comunicazione stakeholder:</strong> Dati concreti per la rendicontazione di sostenibilità e la comunicazione con investitori, clienti e partner.</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">44.2 KPI Chiave per la Transizione 5.0</h3>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Categoria</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">KPI</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Descrizione</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Unità di Misura</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300" rowSpan={3}>Efficienza Energetica</td>
                    <td className="py-2 px-4 border-b border-gray-300">Consumo energetico specifico</td>
                    <td className="py-2 px-4 border-b border-gray-300">Energia consumata per unità di prodotto/servizio</td>
                    <td className="py-2 px-4 border-b border-gray-300">kWh/unità</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Percentuale di riduzione consumi</td>
                    <td className="py-2 px-4 border-b border-gray-300">Riduzione percentuale rispetto al baseline pre-investimento</td>
                    <td className="py-2 px-4 border-b border-gray-300">%</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Efficienza energetica complessiva</td>
                    <td className="py-2 px-4 border-b border-gray-300">Rapporto tra output energetico utile e input energetico</td>
                    <td className="py-2 px-4 border-b border-gray-300">%</td>
                  </tr>
                  
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300" rowSpan={3}>Sostenibilità Ambientale</td>
                    <td className="py-2 px-4 border-b border-gray-300">Carbon footprint</td>
                    <td className="py-2 px-4 border-b border-gray-300">Emissioni di CO2 equivalente per unità prodotta</td>
                    <td className="py-2 px-4 border-b border-gray-300">kgCO2eq/unità</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Percentuale energia rinnovabile</td>
                    <td className="py-2 px-4 border-b border-gray-300">Quota di energia da fonti rinnovabili sul totale</td>
                    <td className="py-2 px-4 border-b border-gray-300">%</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Tasso di circolarità</td>
                    <td className="py-2 px-4 border-b border-gray-300">Percentuale di materiali riciclati/riutilizzati</td>
                    <td className="py-2 px-4 border-b border-gray-300">%</td>
                  </tr>
                  
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300" rowSpan={3}>Performance Digitali</td>
                    <td className="py-2 px-4 border-b border-gray-300">OEE (Overall Equipment Effectiveness)</td>
                    <td className="py-2 px-4 border-b border-gray-300">Efficienza complessiva degli impianti</td>
                    <td className="py-2 px-4 border-b border-gray-300">%</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Tasso di predittività</td>
                    <td className="py-2 px-4 border-b border-gray-300">Percentuale di interventi predittivi vs reattivi</td>
                    <td className="py-2 px-4 border-b border-gray-300">%</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Data quality index</td>
                    <td className="py-2 px-4 border-b border-gray-300">Qualità e completezza dei dati raccolti</td>
                    <td className="py-2 px-4 border-b border-gray-300">Score (0-100)</td>
                  </tr>
                  
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300" rowSpan={3}>Economico-Finanziari</td>
                    <td className="py-2 px-4 border-b border-gray-300">ROI Transizione 5.0</td>
                    <td className="py-2 px-4 border-b border-gray-300">Ritorno sull'investimento delle iniziative 5.0</td>
                    <td className="py-2 px-4 border-b border-gray-300">%</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Risparmio energetico monetizzato</td>
                    <td className="py-2 px-4 border-b border-gray-300">Valore economico dei risparmi energetici</td>
                    <td className="py-2 px-4 border-b border-gray-300">€/anno</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Costo evitato emissioni</td>
                    <td className="py-2 px-4 border-b border-gray-300">Risparmio da mancato acquisto quote CO2</td>
                    <td className="py-2 px-4 border-b border-gray-300">€/anno</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">44.3 Tecnologie per il Monitoraggio Integrato</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-700 mb-2">Sistemi di Monitoraggio Energetico</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Energy Management System (EMS):</strong> Piattaforme per il monitoraggio e la gestione dei consumi energetici in tempo reale</li>
                  <li><strong>Smart metering:</strong> Contatori intelligenti per la misurazione granulare dei consumi</li>
                  <li><strong>Sistemi SCADA energetici:</strong> Supervisione e controllo dei processi energetici</li>
                  <li><strong>Termografia e analisi predittiva:</strong> Identificazione preventiva di inefficienze energetiche</li>
                  <li><strong>Digital twin energetico:</strong> Simulazione e ottimizzazione dei flussi energetici</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-700 mb-2">Dashboard e Analytics Integrati</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>ESG data platform:</strong> Raccolta e analisi integrata di dati ambientali, sociali e di governance</li>
                  <li><strong>Sustainability Performance Management:</strong> Software per la gestione delle performance di sostenibilità</li>
                  <li><strong>Business Intelligence 5.0:</strong> Dashboard integrate per KPI digitali e di sostenibilità</li>
                  <li><strong>Carbon accounting software:</strong> Strumenti per il calcolo e la gestione dell'impronta carbonica</li>
                  <li><strong>AI per ottimizzazione multi-obiettivo:</strong> Algoritmi che bilanciano efficienza produttiva e sostenibilità</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">44.4 Implementazione di un Sistema di Monitoraggio Efficace</h3>
            
            <p className="mb-4">Per implementare un sistema di monitoraggio efficace per la Transizione 5.0, si consiglia di seguire questi passaggi:</p>
            
            <div className="bg-green-50 p-4 rounded-lg mb-6 border border-green-200">
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  <strong>Definizione del baseline</strong>
                  <p className="text-sm mt-1">Misurare e documentare accuratamente la situazione di partenza (consumi energetici, emissioni, performance produttive) prima degli investimenti in Transizione 5.0.</p>
                </li>
                <li>
                  <strong>Selezione dei KPI rilevanti</strong>
                  <p className="text-sm mt-1">Identificare gli indicatori più significativi per il proprio contesto aziendale e allineati con i requisiti degli incentivi fiscali.</p>
                </li>
                <li>
                  <strong>Implementazione dell'infrastruttura di monitoraggio</strong>
                  <p className="text-sm mt-1">Installare sensori, contatori, sistemi IoT e piattaforme software necessarie per la raccolta e l'elaborazione dei dati.</p>
                </li>
                <li>
                  <strong>Integrazione dei sistemi</strong>
                  <p className="text-sm mt-1">Connettere i sistemi di monitoraggio energetico con quelli di produzione, qualità e gestione aziendale per una visione unificata.</p>
                </li>
                <li>
                  <strong>Creazione di dashboard personalizzate</strong>
                  <p className="text-sm mt-1">Sviluppare interfacce intuitive che mostrino i KPI rilevanti ai diversi livelli dell'organizzazione, dal management operativo alla direzione.</p>
                </li>
                <li>
                  <strong>Implementazione di sistemi di allerta</strong>
                  <p className="text-sm mt-1">Configurare notifiche automatiche per segnalare scostamenti significativi rispetto agli obiettivi o anomalie nei consumi.</p>
                </li>
                <li>
                  <strong>Formazione del personale</strong>
                  <p className="text-sm mt-1">Addestrare il personale all'utilizzo e all'interpretazione dei dati di monitoraggio per promuovere una cultura del miglioramento continuo.</p>
                </li>
                <li>
                  <strong>Revisione periodica e miglioramento</strong>
                  <p className="text-sm mt-1">Analizzare regolarmente l'efficacia del sistema di monitoraggio e aggiornarlo in base alle evoluzioni tecnologiche e normative.</p>
                </li>
              </ol>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">44.5 Caso Studio: Sistema di Monitoraggio Integrato</h3>
            
            <div className="border-l-4 border-green-500 pl-4 mb-6">
              <h4 className="font-medium text-green-700">Azienda del Settore Chimico</h4>
              <p className="mb-2"><strong>Sfida:</strong> Implementare un sistema di monitoraggio integrato per verificare e ottimizzare i risultati degli investimenti in Transizione 5.0, con particolare focus sulla riduzione dei consumi energetici e sull'efficienza dei processi produttivi.</p>
              <p className="mb-2"><strong>Soluzione implementata:</strong></p>
              <ul className="list-disc pl-6 space-y-1 mb-2">
                <li>Installazione di un sistema di smart metering con oltre 200 punti di misura per monitorare i consumi energetici a livello di singolo macchinario e processo</li>
                <li>Implementazione di una piattaforma IoT per la raccolta e l'integrazione dei dati energetici, produttivi e ambientali</li>
                <li>Sviluppo di un digital twin energetico per simulare e ottimizzare i consumi in base ai piani di produzione</li>
                <li>Creazione di dashboard personalizzate per diversi livelli aziendali, dai tecnici di linea al management</li>
                <li>Implementazione di algoritmi di machine learning per l'identificazione di pattern di inefficienza e opportunità di ottimizzazione</li>
              </ul>
              <p><strong>Risultati:</strong> Riduzione aggiuntiva del 4.5% dei consumi energetici grazie all'ottimizzazione continua basata sui dati, documentazione puntuale per l'accesso agli incentivi fiscali, identificazione di inefficienze precedentemente non rilevate, creazione di un "Energy Control Room" centralizzato per la gestione integrata di energia e produzione.</p>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">⚠️</span>
                <span><strong>Consiglio per gli incentivi:</strong> Un sistema di monitoraggio ben progettato è fondamentale non solo per ottimizzare le performance, ma anche per documentare in modo incontrovertibile il raggiungimento della riduzione dei consumi energetici richiesta per accedere al credito d'imposta Transizione 5.0. Assicurati che il sistema possa produrre report dettagliati e certificabili che dimostrino chiaramente il confronto tra la situazione pre e post investimento, seguendo le linee guida ministeriali per la rendicontazione.</span>
              </p>
            </div>
          </div>
        )}
      </div>
      
      {/* Sezione 45: Transizione 5.0 e Cybersecurity */}
      <div className="mb-10">
        <div className="flex items-center justify-between bg-blue-700 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('cybersecurity')}>
          <h2 id="cybersecurity" className="text-2xl font-semibold text-white">45. Transizione 5.0 e Cybersecurity</h2>
          <span className="text-white">{activeSection === 'cybersecurity' ? '−' : '+'}</span>
        </div>
        {activeSection === 'cybersecurity' && (
          <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">45.1 Sicurezza Informatica come Elemento Fondamentale della Transizione 5.0</h3>
            
            <p className="mb-4">La Transizione 5.0 comporta un'integrazione sempre più profonda tra sistemi digitali e infrastrutture fisiche, in particolare quelle energetiche. Questa convergenza, se da un lato offre enormi opportunità di efficientamento e sostenibilità, dall'altro crea nuove superfici di attacco e vulnerabilità che devono essere adeguatamente protette.</p>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h4 className="font-medium text-blue-700 mb-2">Perché la cybersecurity è cruciale nella Transizione 5.0:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Protezione delle infrastrutture critiche:</strong> I sistemi energetici e produttivi digitalizzati diventano potenziali bersagli di attacchi informatici con conseguenze anche nel mondo fisico.</li>
                <li><strong>Tutela dei dati sensibili:</strong> I dati raccolti per l'ottimizzazione energetica e produttiva possono contenere informazioni strategiche e riservate sull'azienda.</li>
                <li><strong>Continuità operativa:</strong> Un attacco informatico può compromettere l'operatività dei sistemi di produzione e gestione energetica, con gravi perdite economiche.</li>
                <li><strong>Conformità normativa:</strong> Le normative sulla cybersecurity (es. NIS2, GDPR) richiedono misure adeguate di protezione, specialmente per infrastrutture critiche.</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">45.2 Principali Rischi Cyber nella Transizione 5.0</h3>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Categoria di Rischio</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Descrizione</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Impatto Potenziale</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Attacchi ai sistemi di controllo industriale (ICS/SCADA)</td>
                    <td className="py-2 px-4 border-b border-gray-300">Compromissione dei sistemi che controllano processi industriali e infrastrutture energetiche</td>
                    <td className="py-2 px-4 border-b border-gray-300">Interruzione della produzione, danni fisici agli impianti, rischi per la sicurezza del personale</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Attacchi ai dispositivi IoT</td>
                    <td className="py-2 px-4 border-b border-gray-300">Compromissione dei sensori e dispositivi connessi utilizzati per il monitoraggio energetico e produttivo</td>
                    <td className="py-2 px-4 border-b border-gray-300">Dati falsificati, decisioni errate, accesso non autorizzato alla rete aziendale</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Ransomware</td>
                    <td className="py-2 px-4 border-b border-gray-300">Crittografia dei dati aziendali con richiesta di riscatto</td>
                    <td className="py-2 px-4 border-b border-gray-300">Perdita di accesso ai sistemi di gestione energetica, blocco della produzione, perdite economiche</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Data breach</td>
                    <td className="py-2 px-4 border-b border-gray-300">Furto di dati sensibili relativi ai processi produttivi e alle strategie di efficientamento energetico</td>
                    <td className="py-2 px-4 border-b border-gray-300">Perdita di proprietà intellettuale, danni reputazionali, sanzioni per violazione privacy</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Supply chain attack</td>
                    <td className="py-2 px-4 border-b border-gray-300">Compromissione attraverso fornitori di tecnologie o servizi per la Transizione 5.0</td>
                    <td className="py-2 px-4 border-b border-gray-300">Accesso non autorizzato ai sistemi, installazione di backdoor, compromissione su larga scala</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">45.3 Strategie di Cybersecurity per la Transizione 5.0</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-700 mb-2">Security by Design</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Integrare requisiti di sicurezza fin dalle fasi di progettazione dei sistemi 5.0</li>
                  <li>Adottare il principio del "least privilege" per tutti i componenti</li>
                  <li>Implementare la segmentazione di rete tra sistemi IT e OT</li>
                  <li>Utilizzare protocolli di comunicazione sicuri e crittografati</li>
                  <li>Eseguire valutazioni di rischio e penetration testing regolari</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-700 mb-2">Protezione Operativa</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Implementare sistemi di monitoraggio e detection in tempo reale</li>
                  <li>Adottare soluzioni di endpoint protection specifiche per ambienti industriali</li>
                  <li>Sviluppare procedure di incident response dedicate</li>
                  <li>Eseguire backup regolari e test di disaster recovery</li>
                  <li>Aggiornare regolarmente firmware e software di tutti i componenti</li>
                </ul>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-700 mb-2">Governance e Compliance</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Definire policy di sicurezza specifiche per la Transizione 5.0</li>
                  <li>Allinearsi a framework di cybersecurity riconosciuti (es. NIST, ISO 27001)</li>
                  <li>Implementare programmi di formazione e awareness per il personale</li>
                  <li>Stabilire processi di gestione del rischio cyber</li>
                  <li>Verificare la compliance dei fornitori di tecnologie 5.0</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-700 mb-2">Tecnologie Avanzate</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Soluzioni di Industrial IoT Security per proteggere i dispositivi connessi</li>
                  <li>Sistemi di Anomaly Detection basati su AI per identificare comportamenti sospetti</li>
                  <li>Tecnologie di OT Security specifiche per ambienti industriali</li>
                  <li>Soluzioni di Secure Access Service Edge (SASE) per proteggere accessi remoti</li>
                  <li>Piattaforme di Security Orchestration and Response (SOAR) per automazione</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">45.4 Framework di Cybersecurity per la Transizione 5.0</h3>
            
            <p className="mb-4">Per implementare un approccio strutturato alla cybersecurity nell'ambito della Transizione 5.0, si consiglia di adottare un framework specifico che integri le peculiarità degli ambienti IT (Information Technology) e OT (Operational Technology):</p>
            
            <div className="bg-green-50 p-4 rounded-lg mb-6 border border-green-200">
              <h4 className="font-medium text-green-700 mb-2">Framework di Cybersecurity per la Transizione 5.0:</h4>
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  <strong>Identificazione</strong>
                  <p className="text-sm mt-1">Mappatura completa degli asset digitali e fisici coinvolti nella Transizione 5.0, inclusi sistemi energetici, dispositivi IoT, piattaforme di analisi dati e sistemi di controllo.</p>
                </li>
                <li>
                  <strong>Protezione</strong>
                  <p className="text-sm mt-1">Implementazione di misure di sicurezza preventive, come segmentazione di rete, controlli di accesso, crittografia, hardening dei sistemi e protezione degli endpoint industriali.</p>
                </li>
                <li>
                  <strong>Rilevamento</strong>
                  <p className="text-sm mt-1">Adozione di sistemi di monitoraggio continuo, SIEM (Security Information and Event Management), soluzioni di anomaly detection specifiche per ambienti industriali e sensori di sicurezza fisica.</p>
                </li>
                <li>
                  <strong>Risposta</strong>
                  <p className="text-sm mt-1">Sviluppo di procedure di incident response che considerino sia gli aspetti IT che OT, con particolare attenzione alla continuità operativa dei sistemi energetici e produttivi critici.</p>
                </li>
                <li>
                  <strong>Ripristino</strong>
                  <p className="text-sm mt-1">Predisposizione di piani di disaster recovery e business continuity specifici per gli ambienti di Transizione 5.0, con test regolari e procedure di ripristino rapido.</p>
                </li>
                <li>
                  <strong>Governance</strong>
                  <p className="text-sm mt-1">Definizione di ruoli e responsabilità chiari, con particolare attenzione all'integrazione tra team IT, OT e sostenibilità, oltre a programmi di formazione specifici.</p>
                </li>
                <li>
                  <strong>Miglioramento continuo</strong>
                  <p className="text-sm mt-1">Implementazione di processi di revisione periodica, esercitazioni di sicurezza, penetration testing e aggiornamento delle strategie in base all'evoluzione delle minacce.</p>
                </li>
              </ol>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">45.5 Caso Studio: Cybersecurity in un Progetto di Transizione 5.0</h3>
            
            <div className="border-l-4 border-green-500 pl-4 mb-6">
              <h4 className="font-medium text-green-700">Azienda del Settore Energetico</h4>
              <p className="mb-2"><strong>Sfida:</strong> Implementare un sistema integrato di gestione energetica e produttiva nell'ambito della Transizione 5.0, garantendo elevati standard di cybersecurity per proteggere infrastrutture critiche e dati sensibili.</p>
              <p className="mb-2"><strong>Soluzione implementata:</strong></p>
              <ul className="list-disc pl-6 space-y-1 mb-2">
                <li>Architettura di rete segmentata con separazione fisica tra reti IT, OT e sistemi di gestione energetica</li>
                <li>Implementazione di gateway sicuri per la comunicazione tra i diversi segmenti di rete</li>
                <li>Adozione di protocolli di comunicazione industriale sicuri (OPC UA con security extensions)</li>
                <li>Sistema di monitoraggio continuo con tecnologie di anomaly detection basate su AI</li>
                <li>Programma di vulnerability assessment e penetration testing trimestrale</li>
                <li>Formazione specialistica per il personale tecnico e di produzione</li>
              </ul>
              <p><strong>Risultati:</strong> Implementazione sicura del sistema di Transizione 5.0 con zero incidenti di sicurezza nei primi 18 mesi di operatività, superamento di audit di compliance NIS2, riduzione del 60% delle vulnerabilità critiche identificate, miglioramento della resilienza complessiva dell'infrastruttura.</p>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">⚠️</span>
                <span><strong>Nota importante:</strong> Gli investimenti in cybersecurity nell'ambito della Transizione 5.0 possono essere considerati ammissibili agli incentivi fiscali quando sono parte integrante dei progetti di digitalizzazione sostenibile e contribuiscono alla protezione delle infrastrutture critiche energetiche e produttive. È fondamentale documentare adeguatamente come questi investimenti siano funzionali al raggiungimento degli obiettivi di efficientamento energetico e riduzione dell'impatto ambientale, proteggendo al contempo la continuità operativa dei sistemi.</span>
              </p>
            </div>
          </div>
        )}
      </div>
      
      {/* Sezione 46: Innovazione e Sostenibilità */}
      <div className="mb-10">
        <div className="flex items-center justify-between bg-blue-700 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('innovazione-sostenibilita')}>
          <h2 id="innovazione-sostenibilita" className="text-2xl font-semibold text-white">46. Innovazione e Sostenibilità</h2>
          <span className="text-white">{activeSection === 'innovazione-sostenibilita' ? '−' : '+'}</span>
        </div>
        {activeSection === 'innovazione-sostenibilita' && (
          <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">46.1 L'Innovazione come Motore della Sostenibilità</h3>
            
            <p className="mb-4">La Transizione 5.0 si basa sul principio fondamentale che l'innovazione tecnologica e la sostenibilità ambientale non solo possono coesistere, ma sono reciprocamente potenzianti. L'approccio innovativo alla sostenibilità rappresenta un cambio di paradigma rispetto al passato, quando questi due aspetti erano spesso considerati in contrapposizione.</p>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h4 className="font-medium text-blue-700 mb-2">Il nuovo paradigma dell'innovazione sostenibile:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Da vincolo a opportunità:</strong> La sostenibilità non è più vista come un vincolo normativo o un costo aggiuntivo, ma come un driver di innovazione e competitività.</li>
                <li><strong>Da approccio reattivo a proattivo:</strong> Le aziende non si limitano a rispondere alle pressioni esterne, ma anticipano i cambiamenti e sviluppano soluzioni innovative.</li>
                <li><strong>Da efficienza a trasformazione:</strong> Non si tratta solo di ottimizzare i processi esistenti, ma di ripensare radicalmente prodotti, servizi e modelli di business.</li>
                <li><strong>Da soluzioni isolate a sistemiche:</strong> L'innovazione sostenibile richiede un approccio integrato che consideri l'intero ciclo di vita e l'ecosistema aziendale.</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">46.2 Tecnologie Abilitanti per l'Innovazione Sostenibile</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-700 mb-2">Tecnologie per l'Efficienza Energetica</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Smart grid e microgrids:</strong> Reti elettriche intelligenti per ottimizzare la distribuzione e l'utilizzo dell'energia</li>
                  <li><strong>Sistemi di accumulo avanzati:</strong> Batterie di nuova generazione e sistemi di accumulo termico</li>
                  <li><strong>Heat recovery systems:</strong> Tecnologie per il recupero e il riutilizzo del calore di scarto</li>
                  <li><strong>Illuminazione intelligente:</strong> Sistemi LED con sensori e controlli automatizzati</li>
                  <li><strong>Building automation:</strong> Gestione integrata di tutti i sistemi energetici degli edifici</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-700 mb-2">Tecnologie per l'Economia Circolare</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Materiali avanzati:</strong> Biomateriali, materiali biodegradabili e compostabili</li>
                  <li><strong>Tecnologie di riciclo chimico:</strong> Processi per scomporre polimeri in monomeri riutilizzabili</li>
                  <li><strong>Stampa 3D e manifattura additiva:</strong> Riduzione degli scarti e personalizzazione</li>
                  <li><strong>Blockchain per la tracciabilità:</strong> Monitoraggio del ciclo di vita dei materiali</li>
                  <li><strong>Piattaforme di simbiosi industriale:</strong> Scambio di risorse tra aziende diverse</li>
                </ul>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-700 mb-2">Tecnologie per la Decarbonizzazione</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Idrogeno verde:</strong> Produzione di idrogeno da fonti rinnovabili</li>
                  <li><strong>Carbon Capture and Storage (CCS):</strong> Cattura e stoccaggio della CO2</li>
                  <li><strong>Elettrificazione dei processi:</strong> Sostituzione di processi termici con elettrici</li>
                  <li><strong>Biocarburanti avanzati:</strong> Combustibili da biomasse non alimentari</li>
                  <li><strong>Tecnologie per l'efficienza dei motori:</strong> Riduzione dei consumi e delle emissioni</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-700 mb-2">Tecnologie Digitali per la Sostenibilità</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>AI per l'ottimizzazione energetica:</strong> Algoritmi predittivi per ridurre i consumi</li>
                  <li><strong>Digital twin per simulazioni ambientali:</strong> Modelli virtuali per testare scenari</li>
                  <li><strong>Big data analytics per la sostenibilità:</strong> Analisi di grandi volumi di dati ambientali</li>
                  <li><strong>IoT per il monitoraggio ambientale:</strong> Sensori connessi per misurazioni in tempo reale</li>
                  <li><strong>Cloud computing sostenibile:</strong> Infrastrutture IT a basso impatto energetico</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">46.3 Strategie di Open Innovation per la Sostenibilità</h3>
            
            <p className="mb-4">L'open innovation rappresenta un approccio particolarmente efficace per affrontare le sfide della sostenibilità, permettendo di accedere a competenze, tecnologie e risorse esterne all'azienda. Ecco le principali strategie di open innovation applicabili nel contesto della Transizione 5.0:</p>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Strategia</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Descrizione</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Vantaggi</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Esempi Applicativi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Collaborazione con startup</td>
                    <td className="py-2 px-4 border-b border-gray-300">Partnership con giovani imprese innovative nel campo della sostenibilità</td>
                    <td className="py-2 px-4 border-b border-gray-300">Accesso a tecnologie emergenti, agilità, nuove prospettive</td>
                    <td className="py-2 px-4 border-b border-gray-300">Programmi di corporate venture capital, incubatori aziendali, challenge di innovazione</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Collaborazione con università e centri di ricerca</td>
                    <td className="py-2 px-4 border-b border-gray-300">Progetti congiunti con istituzioni accademiche e scientifiche</td>
                    <td className="py-2 px-4 border-b border-gray-300">Accesso a ricerca avanzata, competenze specialistiche, finanziamenti pubblici</td>
                    <td className="py-2 px-4 border-b border-gray-300">Dottorati industriali, laboratori congiunti, progetti di ricerca finanziati</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Ecosistemi di innovazione</td>
                    <td className="py-2 px-4 border-b border-gray-300">Reti collaborative tra diversi attori (aziende, startup, università, enti pubblici)</td>
                    <td className="py-2 px-4 border-b border-gray-300">Approccio sistemico, condivisione di rischi e investimenti, massa critica</td>
                    <td className="py-2 px-4 border-b border-gray-300">Distretti tecnologici, cluster di innovazione, hub territoriali</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Crowdsourcing e challenge</td>
                    <td className="py-2 px-4 border-b border-gray-300">Coinvolgimento di comunità esterne per risolvere sfide di sostenibilità</td>
                    <td className="py-2 px-4 border-b border-gray-300">Diversità di prospettive, soluzioni inaspettate, engagement degli stakeholder</td>
                    <td className="py-2 px-4 border-b border-gray-300">Hackathon, concorsi di idee, piattaforme di innovazione aperta</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Co-creazione con clienti e fornitori</td>
                    <td className="py-2 px-4 border-b border-gray-300">Sviluppo congiunto di soluzioni sostenibili con partner della value chain</td>
                    <td className="py-2 px-4 border-b border-gray-300">Allineamento con esigenze di mercato, ottimizzazione dell'intera catena del valore</td>
                    <td className="py-2 px-4 border-b border-gray-300">Design thinking workshops, living labs, progetti pilota congiunti</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">46.4 Implementazione di una Strategia di Innovazione Sostenibile</h3>
            
            <p className="mb-4">Per implementare con successo una strategia di innovazione sostenibile nel contesto della Transizione 5.0, si consiglia di seguire questi passaggi:</p>
            
            <div className="bg-green-50 p-4 rounded-lg mb-6 border border-green-200">
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  <strong>Assessment iniziale</strong>
                  <p className="text-sm mt-1">Valutare il livello di maturità dell'azienda in termini di innovazione e sostenibilità, identificando punti di forza, debolezze e opportunità.</p>
                </li>
                <li>
                  <strong>Definizione degli obiettivi</strong>
                  <p className="text-sm mt-1">Stabilire obiettivi chiari e misurabili che integrino innovazione tecnologica e sostenibilità, allineati con la strategia aziendale complessiva.</p>
                </li>
                <li>
                  <strong>Mappatura delle tecnologie</strong>
                  <p className="text-sm mt-1">Identificare le tecnologie abilitanti più rilevanti per il proprio settore e contesto aziendale, valutandone maturità, costi e benefici potenziali.</p>
                </li>
                <li>
                  <strong>Creazione di un innovation hub interno</strong>
                  <p className="text-sm mt-1">Istituire un team dedicato all'innovazione sostenibile con competenze trasversali e la capacità di operare in modo agile e sperimentale.</p>
                </li>
                <li>
                  <strong>Sviluppo di partnership strategiche</strong>
                  <p className="text-sm mt-1">Identificare e coinvolgere partner esterni (startup, università, fornitori, clienti) per complementare le proprie competenze e risorse.</p>
                </li>
                <li>
                  <strong>Implementazione di progetti pilota</strong>
                  <p className="text-sm mt-1">Avviare progetti su scala ridotta per testare le soluzioni innovative, validarne l'efficacia e raccogliere feedback prima di un'implementazione più ampia.</p>
                </li>
                <li>
                  <strong>Misurazione dei risultati</strong>
                  <p className="text-sm mt-1">Definire KPI che integrino metriche di innovazione e sostenibilità, monitorando regolarmente i progressi e l'impatto delle iniziative.</p>
                </li>
                <li>
                  <strong>Scaling delle soluzioni di successo</strong>
                  <p className="text-sm mt-1">Estendere le soluzioni validate a tutta l'organizzazione, adattandole alle diverse unità di business e contesti operativi.</p>
                </li>
                <li>
                  <strong>Comunicazione e storytelling</strong>
                  <p className="text-sm mt-1">Valorizzare i risultati ottenuti attraverso una comunicazione efficace verso stakeholder interni ed esterni, evitando il greenwashing.</p>
                </li>
                <li>
                  <strong>Evoluzione continua</strong>
                  <p className="text-sm mt-1">Mantenere un approccio dinamico, aggiornando costantemente la strategia in base ai risultati ottenuti, ai cambiamenti tecnologici e alle nuove sfide di sostenibilità.</p>
                </li>
              </ol>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">46.5 Caso Studio: Innovazione Sostenibile in Azione</h3>
            
            <div className="border-l-4 border-green-500 pl-4 mb-6">
              <h4 className="font-medium text-green-700">Azienda del Settore Manifatturiero</h4>
              <p className="mb-2"><strong>Sfida:</strong> Ripensare il proprio modello di business e i processi produttivi in chiave sostenibile, riducendo significativamente l'impatto ambientale pur mantenendo competitività e margini.</p>
              <p className="mb-2"><strong>Approccio innovativo adottato:</strong></p>
              <ul className="list-disc pl-6 space-y-1 mb-2">
                <li>Creazione di un "Sustainable Innovation Lab" interno con team multidisciplinare dedicato</li>
                <li>Lancio di un programma di open innovation con call for startups su tecnologie circolari</li>
                <li>Partnership con un'università per lo sviluppo di nuovi biomateriali per il packaging</li>
                <li>Implementazione di digital twins per simulare e ottimizzare i consumi energetici dei processi</li>
                <li>Riprogettazione dei prodotti in ottica di ecodesign con approccio cradle-to-cradle</li>
                <li>Sviluppo di una piattaforma blockchain per la tracciabilità completa della supply chain</li>
              </ul>
              <p><strong>Risultati:</strong> Riduzione del 35% dell'impronta carbonica in 3 anni, diminuzione del 40% dei materiali vergini utilizzati, lancio di una nuova linea di prodotti eco-sostenibili con premium price del 15%, miglioramento della reputazione aziendale e attrazione di nuovi talenti, accesso a finanziamenti agevolati per l'innovazione sostenibile, incremento del 20% del valore delle azioni grazie al miglioramento del rating ESG.</p>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">⚠️</span>
                <span><strong>Consiglio per gli incentivi:</strong> Gli investimenti in innovazione sostenibile possono beneficiare di molteplici forme di incentivazione oltre al credito d'imposta Transizione 5.0. Valuta la possibilità di combinare (nel rispetto delle regole di cumulo) strumenti come il Patent Box per la proprietà intellettuale sviluppata, i fondi PNRR per progetti di economia circolare, gli incentivi regionali per l'eco-innovazione e i programmi europei come Horizon Europe. Un approccio integrato alla finanza agevolata può significativamente aumentare il ROI dei tuoi progetti di innovazione sostenibile.</span>
              </p>
            </div>
          </div>
        )}
      </div>
      
      {/* Sezione 47: Transizione 5.0 e Formazione del Personale */}
      <div className="mb-10">
        <div className="flex items-center justify-between bg-blue-700 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('formazione-personale')}>
          <h2 id="formazione-personale" className="text-2xl font-semibold text-white">47. Transizione 5.0 e Formazione del Personale</h2>
          <span className="text-white">{activeSection === 'formazione-personale' ? '−' : '+'}</span>
        </div>
        {activeSection === 'formazione-personale' && (
          <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">47.1 Il Ruolo Strategico della Formazione nella Transizione 5.0</h3>
            
            <p className="mb-4">La formazione del personale rappresenta un elemento fondamentale e imprescindibile per il successo dei progetti di Transizione 5.0. La trasformazione digitale e sostenibile richiede infatti non solo investimenti in tecnologie, ma soprattutto lo sviluppo di nuove competenze e un cambiamento culturale all'interno dell'organizzazione.</p>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h4 className="font-medium text-blue-700 mb-2">Perché la formazione è cruciale nella Transizione 5.0:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Colmare il gap di competenze:</strong> Le nuove tecnologie digitali e le pratiche di sostenibilità richiedono competenze specifiche che spesso non sono presenti all'interno dell'organizzazione.</li>
                <li><strong>Facilitare il cambiamento:</strong> La formazione aiuta a superare le resistenze al cambiamento, creando consapevolezza sui benefici della transizione e coinvolgendo attivamente il personale.</li>
                <li><strong>Massimizzare il ROI tecnologico:</strong> Senza adeguata formazione, anche le tecnologie più avanzate non vengono utilizzate al pieno delle loro potenzialità, riducendo il ritorno sull'investimento.</li>
                <li><strong>Garantire la continuità:</strong> La formazione assicura che l'organizzazione possa gestire e far evolvere autonomamente i nuovi sistemi e processi nel tempo.</li>
                <li><strong>Creare valore condiviso:</strong> Lo sviluppo di nuove competenze genera valore sia per l'azienda che per i dipendenti, aumentando l'occupabilità e la soddisfazione professionale.</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">47.2 Competenze Chiave per la Transizione 5.0</h3>
            
            <p className="mb-4">La Transizione 5.0 richiede un mix equilibrato di competenze tecniche, trasversali e specifiche sulla sostenibilità. Ecco le principali aree di competenza da sviluppare:</p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-700 mb-2">Competenze Digitali</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Data analytics e AI:</strong> Capacità di analizzare e interpretare dati per ottimizzare processi e consumi</li>
                  <li><strong>IoT e sistemi cyber-fisici:</strong> Comprensione e gestione di dispositivi connessi e loro integrazione</li>
                  <li><strong>Cybersecurity:</strong> Protezione dei sistemi integrati IT/OT e dei dati sensibili</li>
                  <li><strong>Cloud computing:</strong> Utilizzo efficiente di risorse cloud per elaborazione e storage</li>
                  <li><strong>Digital twin:</strong> Creazione e utilizzo di modelli virtuali per simulazioni e ottimizzazioni</li>
                  <li><strong>Automazione e robotica:</strong> Programmazione e gestione di sistemi automatizzati</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-700 mb-2">Competenze di Sostenibilità</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Efficienza energetica:</strong> Principi e tecniche di ottimizzazione dei consumi energetici</li>
                  <li><strong>Economia circolare:</strong> Approcci e metodologie per ridurre sprechi e riutilizzare risorse</li>
                  <li><strong>Carbon management:</strong> Misurazione, riduzione e compensazione delle emissioni di CO2</li>
                  <li><strong>Life Cycle Assessment:</strong> Valutazione dell'impatto ambientale lungo tutto il ciclo di vita</li>
                  <li><strong>ESG reporting:</strong> Raccolta dati e rendicontazione di metriche di sostenibilità</li>
                  <li><strong>Ecodesign:</strong> Progettazione di prodotti e processi a basso impatto ambientale</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-700 mb-2">Competenze Trasversali</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Pensiero sistemico:</strong> Capacità di comprendere le interconnessioni tra sistemi complessi</li>
                  <li><strong>Innovazione e creatività:</strong> Approccio orientato alla risoluzione creativa dei problemi</li>
                  <li><strong>Collaborazione cross-funzionale:</strong> Lavoro efficace tra team IT, OT, produzione e sostenibilità</li>
                  <li><strong>Adattabilità e apprendimento continuo:</strong> Capacità di evolvere con le tecnologie e le pratiche</li>
                  <li><strong>Leadership del cambiamento:</strong> Guidare e motivare i team durante la trasformazione</li>
                  <li><strong>Comunicazione efficace:</strong> Tradurre concetti tecnici per diversi stakeholder</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">47.3 Progettare un Piano di Formazione Efficace</h3>
            
            <p className="mb-4">Un piano di formazione efficace per la Transizione 5.0 deve essere strategico, personalizzato e continuo. Ecco le fasi principali per la sua progettazione e implementazione:</p>
            
            <div className="bg-green-50 p-4 rounded-lg mb-6 border border-green-200">
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  <strong>Assessment delle competenze</strong>
                  <p className="text-sm mt-1">Mappare le competenze esistenti all'interno dell'organizzazione e identificare i gap rispetto alle competenze necessarie per i progetti di Transizione 5.0 pianificati.</p>
                </li>
                <li>
                  <strong>Definizione degli obiettivi formativi</strong>
                  <p className="text-sm mt-1">Stabilire obiettivi chiari, misurabili e allineati con la strategia aziendale di trasformazione digitale e sostenibile.</p>
                </li>
                <li>
                  <strong>Segmentazione del personale</strong>
                  <p className="text-sm mt-1">Identificare diversi gruppi target con esigenze formative specifiche: management, team tecnici, operatori di linea, personale amministrativo, ecc.</p>
                </li>
                <li>
                  <strong>Selezione delle metodologie formative</strong>
                  <p className="text-sm mt-1">Combinare diverse modalità di apprendimento: formazione in aula, e-learning, training on-the-job, mentoring, learning by doing, realtà virtuale/aumentata.</p>
                </li>
                <li>
                  <strong>Sviluppo dei contenuti</strong>
                  <p className="text-sm mt-1">Creare o acquisire contenuti formativi rilevanti, aggiornati e personalizzati per il contesto aziendale specifico.</p>
                </li>
                <li>
                  <strong>Implementazione graduale</strong>
                  <p className="text-sm mt-1">Pianificare un percorso formativo progressivo, partendo dalle competenze di base e avanzando verso quelle più specialistiche.</p>
                </li>
                <li>
                  <strong>Formazione dei formatori interni</strong>
                  <p className="text-sm mt-1">Identificare e preparare figure chiave all'interno dell'organizzazione che possano diventare moltiplicatori di conoscenza.</p>
                </li>
                <li>
                  <strong>Monitoraggio e valutazione</strong>
                  <p className="text-sm mt-1">Definire KPI per misurare l'efficacia della formazione, come il livello di apprendimento, l'applicazione pratica delle competenze e l'impatto sui risultati aziendali.</p>
                </li>
                <li>
                  <strong>Creazione di una learning organization</strong>
                  <p className="text-sm mt-1">Promuovere una cultura dell'apprendimento continuo, con meccanismi di condivisione della conoscenza e incentivi all'aggiornamento costante.</p>
                </li>
                <li>
                  <strong>Aggiornamento continuo</strong>
                  <p className="text-sm mt-1">Rivedere e aggiornare regolarmente il piano formativo in base all'evoluzione tecnologica, normativa e alle esigenze emergenti.</p>
                </li>
              </ol>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">47.4 Modalità Formative Innovative per la Transizione 5.0</h3>
            
            <p className="mb-4">Le tradizionali metodologie formative possono essere efficacemente integrate con approcci innovativi particolarmente adatti per sviluppare le competenze necessarie alla Transizione 5.0:</p>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Modalità Formativa</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Descrizione</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Vantaggi</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Applicazioni nella Transizione 5.0</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Digital Twin per formazione</td>
                    <td className="py-2 px-4 border-b border-gray-300">Utilizzo di gemelli digitali di impianti e processi per simulazioni e training</td>
                    <td className="py-2 px-4 border-b border-gray-300">Apprendimento in ambiente sicuro, senza rischi operativi, possibilità di simulare scenari complessi</td>
                    <td className="py-2 px-4 border-b border-gray-300">Formazione su ottimizzazione energetica, gestione di impianti complessi, risposta a situazioni critiche</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Realtà Virtuale e Aumentata</td>
                    <td className="py-2 px-4 border-b border-gray-300">Utilizzo di tecnologie immersive per creare esperienze di apprendimento interattive</td>
                    <td className="py-2 px-4 border-b border-gray-300">Elevato coinvolgimento, apprendimento esperienziale, visualizzazione di concetti complessi</td>
                    <td className="py-2 px-4 border-b border-gray-300">Manutenzione di impianti energetici, visualizzazione di flussi energetici, training su nuove tecnologie</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Microlearning</td>
                    <td className="py-2 px-4 border-b border-gray-300">Contenuti formativi brevi e focalizzati, fruibili in qualsiasi momento</td>
                    <td className="py-2 px-4 border-b border-gray-300">Flessibilità, apprendimento continuo, alta ritenzione, minore interruzione del lavoro</td>
                    <td className="py-2 px-4 border-b border-gray-300">Aggiornamenti su normative, pillole su tecnologie specifiche, best practice di sostenibilità</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Gamification</td>
                    <td className="py-2 px-4 border-b border-gray-300">Applicazione di elementi tipici dei giochi in contesti formativi</td>
                    <td className="py-2 px-4 border-b border-gray-300">Maggiore motivazione e coinvolgimento, feedback immediato, apprendimento sociale</td>
                    <td className="py-2 px-4 border-b border-gray-300">Simulazioni di gestione energetica, sfide di riduzione delle emissioni, competizioni tra team</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Learning Experience Platform</td>
                    <td className="py-2 px-4 border-b border-gray-300">Piattaforme digitali che integrano contenuti, social learning e analytics</td>
                    <td className="py-2 px-4 border-b border-gray-300">Personalizzazione dei percorsi, apprendimento collaborativo, analisi dei risultati</td>
                    <td className="py-2 px-4 border-b border-gray-300">Hub centralizzato per tutte le competenze di Transizione 5.0, community di pratica interne</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">47.5 Caso Studio: Formazione per la Transizione 5.0</h3>
            
            <div className="border-l-4 border-green-500 pl-4 mb-6">
              <h4 className="font-medium text-green-700">Azienda del Settore Automotive</h4>
              <p className="mb-2"><strong>Sfida:</strong> Implementare un programma di Transizione 5.0 che integrasse digitalizzazione avanzata e sostenibilità in uno stabilimento produttivo con 500 dipendenti, caratterizzato da diversi livelli di competenze digitali e una cultura aziendale tradizionale.</p>
              <p className="mb-2"><strong>Approccio formativo adottato:</strong></p>
              <ul className="list-disc pl-6 space-y-1 mb-2">
                <li>Creazione di una "Digital & Sustainability Academy" interna con percorsi differenziati per ruoli e livelli</li>
                <li>Formazione iniziale del management per creare commitment e visione condivisa</li>
                <li>Identificazione e preparazione di 25 "Digital & Green Champions" come ambasciatori del cambiamento</li>
                <li>Sviluppo di un gemello digitale dello stabilimento per formazione immersiva su efficienza energetica</li>
                <li>Programma di microlearning su app mobile per aggiornamenti continui su tecnologie e pratiche sostenibili</li>
                <li>Workshop pratici con approccio learning-by-doing su tecnologie specifiche (IoT, AI, sistemi di monitoraggio energetico)</li>
                <li>Gamification dei risultati di sostenibilità con competizioni tra team di produzione</li>
                <li>Collaborazione con università locali per programmi formativi specialistici e certificazioni</li>
              </ul>
              <p><strong>Risultati:</strong> Riduzione del 40% del tempo di implementazione delle nuove tecnologie, aumento del 35% nell'utilizzo effettivo delle funzionalità avanzate dei sistemi, riduzione del 25% dei consumi energetici grazie all'applicazione delle competenze acquisite, diminuzione della resistenza al cambiamento con l'85% dei dipendenti che valuta positivamente la trasformazione, creazione di 15 nuovi progetti di miglioramento proposti direttamente dai dipendenti formati.</p>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">⚠️</span>
                <span><strong>Nota sugli incentivi:</strong> Gli investimenti in formazione del personale per progetti di Transizione 5.0 possono beneficiare del credito d'imposta Formazione 4.0, cumulabile con gli incentivi Transizione 5.0 nel rispetto dei massimali previsti. Per massimizzare il beneficio, è fondamentale documentare accuratamente i contenuti formativi, le ore erogate e la loro diretta correlazione con le tecnologie implementate. Ricorda che la formazione deve essere formalizzata attraverso contratti e attestazioni che certifichino l'effettivo svolgimento delle attività formative e le competenze acquisite dal personale.</span>
              </p>
            </div>
          </div>
        )}
      </div>
      
      {/* Sezione 48: Internazionalizzazione e Transizione 5.0 */}
      <div className="mb-10">
        <div className="flex items-center justify-between bg-blue-700 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('internazionalizzazione')}>
          <h2 id="internazionalizzazione" className="text-2xl font-semibold text-white">48. Internazionalizzazione e Transizione 5.0</h2>
          <span className="text-white">{activeSection === 'internazionalizzazione' ? '−' : '+'}</span>
        </div>
        {activeSection === 'internazionalizzazione' && (
          <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
            <p className="mb-4">La Transizione 5.0 rappresenta un'opportunità strategica per le imprese italiane non solo nel mercato domestico, ma anche come leva competitiva sui mercati internazionali. L'integrazione tra digitalizzazione e sostenibilità offre alle aziende italiane un vantaggio distintivo in un contesto globale sempre più orientato verso modelli di business sostenibili.</p>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">48.1 Transizione 5.0 come Leva Competitiva Internazionale</h3>
            
            <p className="mb-4">L'adozione di tecnologie e processi conformi ai principi della Transizione 5.0 consente alle imprese italiane di:</p>
            
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Accedere a mercati con elevati standard ambientali e di sostenibilità (Nord Europa, Canada, Giappone)</li>
              <li>Anticipare normative internazionali sempre più stringenti in tema di emissioni e impatto ambientale</li>
              <li>Ridurre i costi operativi grazie all'efficienza energetica, ottenendo margini competitivi sui mercati esteri</li>
              <li>Differenziare l'offerta con prodotti a minor impatto ambientale, sempre più richiesti dai consumatori globali</li>
              <li>Partecipare a gare e appalti internazionali che richiedono certificazioni di sostenibilità</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">48.2 Strategie di Internazionalizzazione Sostenibile</h3>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="py-2 px-4 border-b text-left">Strategia</th>
                    <th className="py-2 px-4 border-b text-left">Descrizione</th>
                    <th className="py-2 px-4 border-b text-left">Vantaggi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Green Export</td>
                    <td className="py-2 px-4 border-b">Esportazione di prodotti e servizi con certificazioni ambientali e di sostenibilità</td>
                    <td className="py-2 px-4 border-b">Accesso a mercati premium, margini più elevati, minori barriere non tariffarie</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Sustainable Supply Chain</td>
                    <td className="py-2 px-4 border-b">Integrazione in catene di fornitura globali con requisiti ESG</td>
                    <td className="py-2 px-4 border-b">Partnership con multinazionali, contratti di lungo periodo, trasferimento know-how</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Circular Partnerships</td>
                    <td className="py-2 px-4 border-b">Alleanze internazionali per l'economia circolare e il riutilizzo di materiali</td>
                    <td className="py-2 px-4 border-b">Riduzione costi materie prime, nuovi mercati per sottoprodotti, innovazione condivisa</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Digital Sustainability Hubs</td>
                    <td className="py-2 px-4 border-b">Creazione di centri di competenza internazionali su tecnologie sostenibili</td>
                    <td className="py-2 px-4 border-b">Attrazione talenti, finanziamenti internazionali, leadership tecnologica</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">48.3 Mercati Prioritari per la Transizione 5.0</h3>
            
            <p className="mb-4">Non tutti i mercati internazionali offrono le stesse opportunità per le imprese che investono nella Transizione 5.0. Alcuni contesti geografici rappresentano priorità strategiche:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-700 mb-2">Unione Europea</h4>
                <p>Mercato prioritario per la perfetta aderenza tra Transizione 5.0 e Green Deal europeo. Vantaggi competitivi per chi anticipa l'adeguamento a normative come CBAM (Carbon Border Adjustment Mechanism) e Corporate Sustainability Reporting Directive.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-700 mb-2">Nord America</h4>
                <p>USA e Canada offrono opportunità significative grazie all'Inflation Reduction Act e alle politiche di decarbonizzazione. Crescente domanda di tecnologie e prodotti sostenibili, con premium price per soluzioni a basso impatto ambientale.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-700 mb-2">Paesi MENA (Medio Oriente e Nord Africa)</h4>
                <p>Mercati in forte transizione energetica con investimenti massicci in energie rinnovabili e diversificazione economica. Opportunità per tecnologie di efficienza energetica, gestione idrica e economia circolare.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-700 mb-2">Asia-Pacifico</h4>
                <p>Giappone, Corea del Sud e Singapore guidano la transizione verso modelli industriali sostenibili. La Cina, nonostante tempi più lunghi, sta investendo massicciamente in tecnologie verdi, creando un enorme mercato potenziale.</p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">48.4 Strumenti di Supporto all'Internazionalizzazione Sostenibile</h3>
            
            <p className="mb-4">Le imprese italiane che intendono internazionalizzarsi con progetti di Transizione 5.0 possono beneficiare di diversi strumenti di supporto:</p>
            
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>SIMEST:</strong> Finanziamenti agevolati per progetti di internazionalizzazione con componenti di sostenibilità ambientale, con tassi di interesse ridotti per investimenti green</li>
              <li><strong>SACE:</strong> Garanzie e assicurazioni per l'export con condizioni vantaggiose per progetti di transizione ecologica e digitale</li>
              <li><strong>ICE:</strong> Programmi specifici di promozione internazionale per aziende con certificazioni ambientali e di sostenibilità</li>
              <li><strong>Horizon Europe:</strong> Finanziamenti per progetti collaborativi internazionali su tecnologie sostenibili e digitali</li>
              <li><strong>European Innovation Council:</strong> Supporto a scale-up di imprese innovative con soluzioni per la twin transition</li>
              <li><strong>Fondi PNRR:</strong> Risorse dedicate all'internazionalizzazione delle filiere strategiche con focus su sostenibilità</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">48.5 Caso Studio: Internazionalizzazione Sostenibile</h3>
            
            <div className="border-l-4 border-green-500 pl-4 mb-6">
              <h4 className="font-medium text-green-700">Azienda del Settore Meccanico</h4>
              <p className="mb-2"><strong>Sfida:</strong> PMI italiana produttrice di componenti meccanici di precisione con fatturato di €15 milioni, di cui solo il 20% all'estero, con necessità di espandere la presenza internazionale in un contesto di crescente competizione sui prezzi.</p>
              <p className="mb-2"><strong>Approccio adottato:</strong></p>
              <ul className="list-disc pl-6 space-y-1 mb-2">
                <li>Investimento in tecnologie Transizione 5.0: sistema di produzione digitalizzato con monitoraggio energetico avanzato e ottimizzazione dei consumi (-35%)</li>
                <li>Riprogettazione dei prodotti in ottica di economia circolare con riduzione materiali del 25% e utilizzo di materiali riciclati</li>
                <li>Ottenimento certificazioni ISO 14001, 50001 e EPD (Environmental Product Declaration) per i prodotti principali</li>
                <li>Partecipazione a fiere internazionali specializzate in tecnologie sostenibili con supporto ICE</li>
                <li>Sviluppo di una strategia di comunicazione digitale focalizzata sui benefici ambientali dei prodotti</li>
                <li>Utilizzo di finanziamenti SIMEST per l'apertura di uffici commerciali in Germania e Svezia con focus su clienti con requisiti ESG elevati</li>
              </ul>
              <p><strong>Risultati:</strong> In 24 mesi, l'azienda ha aumentato l'export al 45% del fatturato, con un incremento del 30% dei margini sui mercati esteri grazie al posizionamento premium. Ha ottenuto contratti con tre multinazionali tedesche e svedesi come fornitore certificato per componenti sostenibili, entrando in una supply chain globale. I costi energetici ridotti hanno migliorato la competitività complessiva, permettendo di vincere commesse anche in mercati price-sensitive.</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
              <h4 className="font-semibold text-blue-700 mb-2">Box Informativo: Certificazioni per l'Export Sostenibile</h4>
              <p className="mb-2">Le certificazioni ambientali e di sostenibilità rappresentano un passaporto fondamentale per l'internazionalizzazione delle imprese che adottano la Transizione 5.0:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>ISO 14001:</strong> Sistema di gestione ambientale, riconosciuto globalmente</li>
                <li><strong>ISO 50001:</strong> Sistema di gestione dell'energia, particolarmente apprezzato in mercati con alta sensibilità all'efficienza energetica</li>
                <li><strong>EPD (Environmental Product Declaration):</strong> Dichiarazione ambientale di prodotto basata su analisi del ciclo di vita</li>
                <li><strong>Carbon Footprint:</strong> Certificazione dell'impronta di carbonio di prodotti e organizzazioni</li>
                <li><strong>EU Ecolabel:</strong> Marchio di qualità ecologica dell'Unione Europea</li>
                <li><strong>Cradle to Cradle:</strong> Certificazione per prodotti circolari, molto valorizzata nei mercati nordeuropei e nordamericani</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">⚠️</span>
                <span><strong>Nota sugli incentivi:</strong> Le imprese che investono in Transizione 5.0 con obiettivi di internazionalizzazione possono beneficiare di un'integrazione tra gli incentivi fiscali del Piano Transizione 5.0 e gli strumenti finanziari per l'internazionalizzazione. È possibile, ad esempio, utilizzare il credito d'imposta per investimenti in beni strumentali e tecnologie digitali/green e contemporaneamente accedere ai finanziamenti SIMEST per la penetrazione commerciale estera. Per massimizzare i benefici, è consigliabile sviluppare una strategia integrata che consideri entrambe le dimensioni, coinvolgendo consulenti specializzati sia in Transizione 5.0 che in internazionalizzazione.</span>
              </p>
            </div>
          </div>
        )}
      </div>
      
      {/* Sezione 49: Transizione 5.0 e Finanza Sostenibile */}
      <div className="mb-10">
        <div className="flex items-center justify-between bg-blue-700 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('finanza-sostenibile')}>
          <h2 id="finanza-sostenibile" className="text-2xl font-semibold text-white">49. Transizione 5.0 e Finanza Sostenibile</h2>
          <span className="text-white">{activeSection === 'finanza-sostenibile' ? '−' : '+'}</span>
        </div>
        {activeSection === 'finanza-sostenibile' && (
          <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
            <p className="mb-4">La Transizione 5.0 richiede investimenti significativi in tecnologie, processi e competenze. La finanza sostenibile rappresenta un alleato fondamentale per le imprese che intraprendono questo percorso, offrendo strumenti finanziari innovativi che premiano la sostenibilità ambientale e sociale oltre alla performance economica.</p>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">49.1 Cos'è la Finanza Sostenibile</h3>
            
            <p className="mb-4">La finanza sostenibile comprende tutti gli strumenti e i servizi finanziari che integrano criteri ambientali, sociali e di governance (ESG) nei processi di investimento e finanziamento. Nel contesto della Transizione 5.0, questi strumenti diventano leve strategiche per:</p>
            
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Finanziare investimenti in tecnologie digitali e green</li>
              <li>Ridurre il costo del capitale per progetti sostenibili</li>
              <li>Mitigare i rischi legati alla transizione ecologica e digitale</li>
              <li>Attrarre investitori sensibili ai temi ESG</li>
              <li>Valorizzare gli asset intangibili legati alla sostenibilità</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">49.2 Strumenti di Finanza Sostenibile per la Transizione 5.0</h3>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="py-2 px-4 border-b text-left">Strumento</th>
                    <th className="py-2 px-4 border-b text-left">Caratteristiche</th>
                    <th className="py-2 px-4 border-b text-left">Vantaggi per la Transizione 5.0</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Green Bonds</td>
                    <td className="py-2 px-4 border-b">Obbligazioni i cui proventi sono destinati esclusivamente a progetti con benefici ambientali</td>
                    <td className="py-2 px-4 border-b">Finanziamento di investimenti in efficienza energetica, energie rinnovabili e tecnologie a basse emissioni</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Sustainability-Linked Loans</td>
                    <td className="py-2 px-4 border-b">Prestiti con tassi di interesse variabili in base al raggiungimento di obiettivi di sostenibilità</td>
                    <td className="py-2 px-4 border-b">Riduzione del costo del debito al miglioramento delle performance di sostenibilità (es. riduzione emissioni CO2)</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Digital & Green Venture Capital</td>
                    <td className="py-2 px-4 border-b">Fondi di investimento specializzati in startup innovative con focus su sostenibilità e digitalizzazione</td>
                    <td className="py-2 px-4 border-b">Capitale di rischio per lo sviluppo di tecnologie innovative per la twin transition</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">ESG-Linked Insurance</td>
                    <td className="py-2 px-4 border-b">Prodotti assicurativi con premi ridotti per aziende con elevati standard ESG</td>
                    <td className="py-2 px-4 border-b">Mitigazione dei rischi legati alla transizione e riduzione dei costi assicurativi</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Transition Bonds</td>
                    <td className="py-2 px-4 border-b">Obbligazioni per finanziare la transizione verso modelli di business più sostenibili</td>
                    <td className="py-2 px-4 border-b">Supporto specifico per settori ad alta intensità energetica nel percorso di decarbonizzazione</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">49.3 Il Ruolo delle Banche nella Transizione 5.0</h3>
            
            <p className="mb-4">Gli istituti bancari stanno evolvendo il loro approccio per supportare le imprese nel percorso di Transizione 5.0:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-700 mb-2">Valutazione ESG</h4>
                <p>Integrazione di parametri di sostenibilità ambientale e sociale nella valutazione del merito creditizio, con condizioni migliorative per aziende con elevati rating ESG.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-700 mb-2">Consulenza Specializzata</h4>
                <p>Servizi di advisory per supportare le imprese nell'identificazione delle migliori soluzioni finanziarie per progetti di twin transition e nell'accesso agli incentivi pubblici.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-700 mb-2">Prodotti Dedicati</h4>
                <p>Sviluppo di linee di credito specifiche per investimenti in tecnologie 5.0, con focus su digitalizzazione e sostenibilità, spesso in partnership con enti pubblici e fondi di garanzia.</p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">49.4 Tassonomia UE e Reporting di Sostenibilità</h3>
            
            <p className="mb-4">La Tassonomia UE delle attività sostenibili e le nuove normative sul reporting di sostenibilità (CSRD - Corporate Sustainability Reporting Directive) stanno ridefinendo il panorama della finanza sostenibile, con implicazioni dirette per le imprese che intraprendono la Transizione 5.0:</p>
            
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Accesso ai capitali:</strong> Gli investimenti allineati alla Tassonomia UE avranno accesso privilegiato ai capitali, con costi di finanziamento potenzialmente inferiori</li>
              <li><strong>Trasparenza:</strong> Le aziende dovranno rendicontare in modo sempre più dettagliato le loro performance di sostenibilità, inclusi gli investimenti in tecnologie digitali green</li>
              <li><strong>Catena di fornitura:</strong> Le grandi imprese richiederanno ai fornitori informazioni ESG sempre più dettagliate, creando un effetto a cascata anche sulle PMI</li>
              <li><strong>Valorizzazione degli investimenti:</strong> Gli investimenti in Transizione 5.0 allineati alla Tassonomia potranno essere valorizzati nei report di sostenibilità, migliorando l'attrattività dell'azienda verso investitori e clienti</li>
            </ul>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
              <h4 className="font-semibold text-blue-700 mb-2">Focus: Double Materiality nella Transizione 5.0</h4>
              <p className="mb-2">Il concetto di "doppia materialità" è centrale nella finanza sostenibile e nella Transizione 5.0:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Materialità finanziaria:</strong> Come i fattori ESG impattano sulla performance finanziaria dell'impresa (es. rischi climatici, costi energetici)</li>
                <li><strong>Materialità ambientale e sociale:</strong> Come le attività dell'impresa impattano sull'ambiente e sulla società</li>
              </ul>
              <p className="mt-2">Gli investimenti in Transizione 5.0 devono essere valutati secondo entrambe le prospettive per massimizzare il valore creato e attrarre finanziamenti sostenibili.</p>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">49.5 Caso Studio: Finanziamento della Transizione 5.0</h3>
            
            <div className="border-l-4 border-green-500 pl-4 mb-6">
              <h4 className="font-medium text-green-700">Azienda del Settore Tessile</h4>
              <p className="mb-2"><strong>Sfida:</strong> Media impresa italiana del settore tessile con necessità di investire €3,5 milioni per un programma completo di Transizione 5.0 includente digitalizzazione avanzata dei processi produttivi e riduzione dell'impatto ambientale.</p>
              <p className="mb-2"><strong>Approccio finanziario adottato:</strong></p>
              <ul className="list-disc pl-6 space-y-1 mb-2">
                <li>Realizzazione di un "Green Digital Transformation Plan" con obiettivi misurabili di riduzione consumi energetici (-40%), emissioni CO2 (-50%) e utilizzo acqua (-30%)</li>
                <li>Negoziazione di un Sustainability-Linked Loan da €2 milioni con una banca italiana, con riduzione dello spread di 20 punti base al raggiungimento degli obiettivi ESG</li>
                <li>Accesso al credito d'imposta Transizione 5.0 per €1 milione</li>
                <li>Emissione di un minibond "green" da €500.000 sottoscritto da un fondo specializzato in PMI sostenibili</li>
                <li>Ottenimento di una garanzia SACE Green per l'80% del finanziamento bancario, con riduzione significativa del costo del rischio</li>
                <li>Implementazione di un sistema di monitoraggio e reporting ESG allineato agli standard GRI per comunicare i progressi agli stakeholder finanziari</li>
              </ul>
              <p><strong>Risultati:</strong> L'azienda ha ottenuto un risparmio di circa 150.000 euro sul costo totale del finanziamento rispetto a soluzioni tradizionali. Gli investimenti hanno generato un risparmio energetico annuo di 220.000 euro e un incremento di produttività del 25%, con ROI complessivo raggiunto in meno di 4 anni. Il miglioramento del profilo ESG ha inoltre attratto nuovi clienti internazionali sensibili alla sostenibilità, con incremento del fatturato del 15% in due anni.</p>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">⚠️</span>
                <span><strong>Nota sugli incentivi:</strong> Quando si pianificano investimenti in Transizione 5.0, è fondamentale valutare la possibilità di integrare gli incentivi fiscali con strumenti di finanza sostenibile. Molte banche offrono prodotti finanziari con condizioni agevolate per progetti green e digitali, che possono essere cumulati con il credito d'imposta nei limiti previsti dalla normativa. Inoltre, è importante considerare che la rendicontazione di sostenibilità sta diventando sempre più rilevante per l'accesso al credito: documentare adeguatamente gli impatti positivi degli investimenti in Transizione 5.0 può migliorare significativamente il rating ESG dell'azienda e, di conseguenza, le condizioni di accesso ai capitali.</span>
              </p>
            </div>
          </div>
        )}
      </div>
      
      {/* Sezione 50: Transizione 5.0 e Formazione */}
      <div className="mb-10">
        <div className="flex items-center justify-between bg-blue-700 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('formazione-transizione')}>
          <h2 id="formazione-transizione" className="text-2xl font-semibold text-white">50. Transizione 5.0 e Formazione</h2>
          <span className="text-white">{activeSection === 'formazione-transizione' ? '−' : '+'}</span>
        </div>
        {activeSection === 'formazione-transizione' && (
          <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
            <p className="mb-4">La formazione rappresenta un pilastro fondamentale della Transizione 5.0. L'integrazione di tecnologie digitali avanzate e pratiche sostenibili richiede nuove competenze e un approccio sistemico all'aggiornamento del capitale umano. Questa sezione esplora le strategie formative più efficaci per supportare le imprese nel percorso di transizione.</p>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">50.1 Le Competenze Chiave per la Transizione 5.0</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-700 mb-2">Competenze Tecniche</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Analisi e gestione dei big data</li>
                  <li>Programmazione e sviluppo software</li>
                  <li>Cybersecurity e protezione dei dati</li>
                  <li>Gestione di sistemi IoT e cloud</li>
                  <li>Automazione industriale e robotica</li>
                  <li>Tecnologie per l'efficienza energetica</li>
                  <li>Progettazione di prodotti sostenibili</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-700 mb-2">Competenze Trasversali</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Pensiero sistemico e visione integrata</li>
                  <li>Problem solving complesso</li>
                  <li>Adattabilità e apprendimento continuo</li>
                  <li>Gestione del cambiamento</li>
                  <li>Collaborazione interdisciplinare</li>
                  <li>Comunicazione efficace</li>
                  <li>Valutazione degli impatti ambientali e sociali</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">50.2 Modelli Formativi per la Transizione 5.0</h3>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="py-2 px-4 border-b text-left">Modello Formativo</th>
                    <th className="py-2 px-4 border-b text-left">Caratteristiche</th>
                    <th className="py-2 px-4 border-b text-left">Vantaggi per la Transizione 5.0</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Learning by Doing</td>
                    <td className="py-2 px-4 border-b">Formazione sul campo attraverso progetti pilota e sperimentazioni pratiche</td>
                    <td className="py-2 px-4 border-b">Applicazione immediata delle competenze acquisite e adattamento alle specificità aziendali</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Formazione Ibrida</td>
                    <td className="py-2 px-4 border-b">Combinazione di formazione in presenza e a distanza, con utilizzo di piattaforme digitali</td>
                    <td className="py-2 px-4 border-b">Flessibilità, personalizzazione e possibilità di coinvolgere esperti internazionali</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Micro-learning</td>
                    <td className="py-2 px-4 border-b">Contenuti formativi brevi e mirati, fruibili on-demand</td>
                    <td className="py-2 px-4 border-b">Minimizzazione dell'impatto sulla produttività e apprendimento continuo</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Collaborative Learning</td>
                    <td className="py-2 px-4 border-b">Apprendimento attraverso comunità di pratica e gruppi di lavoro interdisciplinari</td>
                    <td className="py-2 px-4 border-b">Condivisione di esperienze, innovazione collaborativa e sviluppo di una cultura aziendale orientata alla transizione</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Digital Twin Training</td>
                    <td className="py-2 px-4 border-b">Utilizzo di gemelli digitali e simulazioni per la formazione</td>
                    <td className="py-2 px-4 border-b">Apprendimento in ambiente sicuro, riduzione dei rischi e ottimizzazione dei processi prima dell'implementazione</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">50.3 Il Credito d'Imposta Formazione 4.0 e la Transizione 5.0</h3>
            
            <p className="mb-4">Il Piano Transizione 5.0 prevede specifiche misure per la formazione del personale, in continuità con il precedente credito d'imposta Formazione 4.0, ma con un focus ampliato alle competenze per la sostenibilità:</p>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
              <h4 className="font-semibold text-blue-700 mb-2">Principali caratteristiche dell'incentivo</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Credito d'imposta fino al 50% delle spese ammissibili per la formazione del personale dipendente</li>
                <li>Massimale annuo di €300.000 per le piccole imprese, €250.000 per le medie imprese e €200.000 per le grandi imprese</li>
                <li>Formazione erogabile da soggetti qualificati esterni o interni all'impresa</li>
                <li>Necessità di certificazione delle spese sostenute</li>
                <li>Ampliamento delle tematiche ammissibili per includere competenze green e di sostenibilità</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">50.4 Strategie di Upskilling e Reskilling per la Transizione 5.0</h3>
            
            <p className="mb-4">Per affrontare efficacemente la Transizione 5.0, le imprese devono adottare un approccio strategico alla formazione del personale:</p>
            
            <ol className="list-decimal pl-6 space-y-2 mb-6">
              <li>
                <strong>Assessment delle competenze:</strong> Mappatura delle competenze esistenti e identificazione dei gap rispetto alle esigenze della Transizione 5.0
              </li>
              <li>
                <strong>Piano formativo personalizzato:</strong> Definizione di percorsi formativi differenziati per ruoli e livelli di competenza
              </li>
              <li>
                <strong>Formazione continua:</strong> Implementazione di un sistema di apprendimento permanente che accompagni l'evoluzione tecnologica e normativa
              </li>
              <li>
                <strong>Collaborazione con il sistema educativo:</strong> Partnership con università, ITS e centri di ricerca per programmi formativi specializzati
              </li>
              <li>
                <strong>Valorizzazione delle competenze interne:</strong> Creazione di un sistema di mentorship e knowledge sharing tra dipendenti
              </li>
              <li>
                <strong>Monitoraggio e valutazione:</strong> Misurazione dell'efficacia della formazione in termini di miglioramento delle performance e capacità di innovazione
              </li>
            </ol>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">50.5 Caso Studio: Programma di Formazione per la Transizione 5.0</h3>
            
            <div className="border-l-4 border-green-500 pl-4 mb-6">
              <h4 className="font-medium text-green-700">Azienda del Settore Automotive</h4>
              <p className="mb-2"><strong>Sfida:</strong> PMI italiana con 120 dipendenti, fornitrice di componenti per il settore automotive, necessitava di riqualificare il personale per adattarsi alla transizione verso la mobilità elettrica e processi produttivi più sostenibili.</p>
              <p className="mb-2"><strong>Approccio formativo adottato:</strong></p>
              <ul className="list-disc pl-6 space-y-1 mb-2">
                <li>Creazione di una "Digital & Green Academy" interna, con il supporto di consulenti specializzati</li>
                <li>Sviluppo di un "Digital Twin" dell'impianto produttivo per la formazione in ambiente simulato</li>
                <li>Programma di formazione articolato in moduli tecnici (automazione, IoT, efficienza energetica) e trasversali (gestione del cambiamento, economia circolare)</li>
                <li>Formazione di "Green Digital Champions" interni, responsabili di diffondere le competenze acquisite</li>
                <li>Partnership con un ITS locale per un programma di apprendistato duale focalizzato sulle tecnologie per la mobilità sostenibile</li>
                <li>Utilizzo del credito d'imposta Formazione 4.0 per coprire il 50% dei costi del programma</li>
              </ul>
              <p><strong>Risultati:</strong> In 18 mesi, l'azienda ha riqualificato l'80% della forza lavoro, sviluppando nuove linee di prodotto per veicoli elettrici che oggi rappresentano il 35% del fatturato. L'implementazione di processi produttivi ottimizzati ha portato a una riduzione del 25% dei consumi energetici e del 30% degli scarti di produzione. Il tasso di retention dei dipendenti è aumentato del 15%, con un significativo miglioramento del clima aziendale e della capacità di attrarre nuovi talenti.</p>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">⚠️</span>
                <span><strong>Nota importante:</strong> Per massimizzare l'efficacia della formazione per la Transizione 5.0, è fondamentale adottare un approccio integrato che colleghi gli aspetti digitali e di sostenibilità. La formazione non dovrebbe essere vista come un costo ma come un investimento strategico, essenziale per il successo della trasformazione aziendale. Le imprese che investono in modo sistematico nello sviluppo delle competenze hanno una probabilità significativamente maggiore di completare con successo il percorso di Transizione 5.0, ottenendo vantaggi competitivi duraturi.</span>
              </p>
            </div>
          </div>
        )}
      </div>
      
      {/* Sezione 51: Transizione 5.0 e Innovazione */}
      <div className="mb-10">
        <div className="flex items-center justify-between bg-blue-700 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('innovazione-transizione')}>
          <h2 id="innovazione-transizione" className="text-2xl font-semibold text-white">51. Transizione 5.0 e Innovazione</h2>
          <span className="text-white">{activeSection === 'innovazione-transizione' ? '−' : '+'}</span>
        </div>
        {activeSection === 'innovazione-transizione' && (
          <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
            <p className="mb-4">L'innovazione rappresenta il motore della Transizione 5.0, integrando tecnologie digitali avanzate con soluzioni sostenibili per creare nuovi modelli di business, prodotti e processi. Questa sezione esplora come le imprese possono sviluppare e implementare strategie di innovazione efficaci nel contesto della twin transition.</p>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">51.1 Il Paradigma dell'Innovazione Sostenibile</h3>
            
            <p className="mb-4">La Transizione 5.0 richiede un nuovo approccio all'innovazione che integri obiettivi economici, ambientali e sociali:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-700 mb-2">Innovazione Rigenerativa</h4>
                <p>Sviluppo di soluzioni che non solo riducono gli impatti negativi ma rigenerano attivamente gli ecosistemi naturali e sociali, creando valore condiviso per tutti gli stakeholder.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-700 mb-2">Innovazione Sistemica</h4>
                <p>Approccio che considera l'intero sistema di produzione e consumo, intervenendo su tutti gli elementi della catena del valore per massimizzare l'efficienza delle risorse e minimizzare gli sprechi.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-700 mb-2">Innovazione Inclusiva</h4>
                <p>Coinvolgimento di tutti gli stakeholder nel processo di innovazione, garantendo che i benefici della Transizione 5.0 siano equamente distribuiti e accessibili a tutte le imprese, indipendentemente dalle dimensioni.</p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">51.2 Tecnologie Abilitanti per la Transizione 5.0</h3>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="py-2 px-4 border-b text-left">Tecnologia</th>
                    <th className="py-2 px-4 border-b text-left">Applicazioni per la Transizione 5.0</th>
                    <th className="py-2 px-4 border-b text-left">Impatti sulla Sostenibilità</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Intelligenza Artificiale</td>
                    <td className="py-2 px-4 border-b">Ottimizzazione dei processi produttivi, manutenzione predittiva, personalizzazione dei prodotti</td>
                    <td className="py-2 px-4 border-b">Riduzione dei consumi energetici, minimizzazione degli scarti, estensione della vita utile dei macchinari</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Digital Twin</td>
                    <td className="py-2 px-4 border-b">Simulazione di processi e prodotti, test virtuali, ottimizzazione in tempo reale</td>
                    <td className="py-2 px-4 border-b">Riduzione dei prototipi fisici, ottimizzazione dei materiali, miglioramento dell'efficienza energetica</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Blockchain</td>
                    <td className="py-2 px-4 border-b">Tracciabilità della supply chain, certificazione dei prodotti, gestione dei crediti di carbonio</td>
                    <td className="py-2 px-4 border-b">Trasparenza dei processi produttivi, contrasto al greenwashing, valorizzazione delle pratiche sostenibili</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Materiali Avanzati</td>
                    <td className="py-2 px-4 border-b">Biomateriali, nanomateriali, materiali riciclati ad alte prestazioni</td>
                    <td className="py-2 px-4 border-b">Riduzione dell'impronta di carbonio, circolarità dei materiali, eliminazione di sostanze tossiche</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Edge Computing</td>
                    <td className="py-2 px-4 border-b">Elaborazione dati in prossimità dei dispositivi IoT, controllo in tempo reale</td>
                    <td className="py-2 px-4 border-b">Riduzione del consumo energetico per la trasmissione dati, ottimizzazione dei processi in tempo reale</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">51.3 Metodologie di Innovazione per la Transizione 5.0</h3>
            
            <p className="mb-4">Per implementare efficacemente l'innovazione nel contesto della Transizione 5.0, le imprese possono adottare diverse metodologie:</p>
            
            <ol className="list-decimal pl-6 space-y-2 mb-6">
              <li>
                <strong>Design Thinking per la Sostenibilità:</strong> Approccio centrato sull'utente che integra considerazioni ambientali e sociali in tutte le fasi del processo di design
              </li>
              <li>
                <strong>Lean Green:</strong> Applicazione dei principi lean alla riduzione degli sprechi ambientali, combinando efficienza operativa e sostenibilità
              </li>
              <li>
                <strong>Open Innovation Sostenibile:</strong> Collaborazione con stakeholder esterni (università, startup, fornitori, clienti) per sviluppare soluzioni innovative per la twin transition
              </li>
              <li>
                <strong>Circular Design:</strong> Progettazione di prodotti e servizi secondo i principi dell'economia circolare, considerando l'intero ciclo di vita
              </li>
              <li>
                <strong>Biomimicry:</strong> Ispirazione ai processi naturali per sviluppare soluzioni tecnologiche efficienti e sostenibili
              </li>
              <li>
                <strong>Life Cycle Assessment (LCA):</strong> Valutazione degli impatti ambientali lungo l'intero ciclo di vita di prodotti e processi per identificare opportunità di innovazione
              </li>
            </ol>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
              <h4 className="font-semibold text-blue-700 mb-2">Focus: Innovation Hub e Transizione 5.0</h4>
              <p className="mb-2">Gli Innovation Hub rappresentano un elemento chiave dell'ecosistema di supporto alla Transizione 5.0. Questi centri offrono:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Accesso a tecnologie avanzate e competenze specialistiche</li>
                <li>Spazi di co-creazione e sperimentazione</li>
                <li>Networking con potenziali partner e investitori</li>
                <li>Supporto nella definizione di strategie di innovazione sostenibile</li>
                <li>Formazione su tecnologie e metodologie innovative</li>
              </ul>
              <p className="mt-2">In Italia, la rete dei Digital Innovation Hub e dei Competence Center 4.0 sta evolvendo per integrare la dimensione della sostenibilità, offrendo servizi specifici per la Transizione 5.0.</p>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">51.4 Finanziare l'Innovazione per la Transizione 5.0</h3>
            
            <p className="mb-4">Oltre al credito d'imposta previsto dal Piano Transizione 5.0, le imprese possono accedere a diverse fonti di finanziamento per i loro progetti di innovazione sostenibile:</p>
            
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Horizon Europe:</strong> Programma quadro dell'UE per la ricerca e l'innovazione, con focus specifici su twin transition e Green Deal</li>
              <li><strong>PNRR:</strong> Missioni dedicate alla transizione ecologica e digitale, con bandi specifici per progetti innovativi</li>
              <li><strong>Fondo Nazionale Innovazione:</strong> Investimenti in startup e PMI innovative con focus su sostenibilità e digitalizzazione</li>
              <li><strong>European Innovation Council (EIC):</strong> Supporto a innovazioni breakthrough con potenziale di mercato e impatto positivo sulla sostenibilità</li>
              <li><strong>LIFE Programme:</strong> Finanziamenti per progetti innovativi nel campo dell'ambiente e dell'azione per il clima</li>
              <li><strong>Digital Europe Programme:</strong> Supporto all'adozione di tecnologie digitali avanzate da parte delle imprese europee</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">51.5 Caso Studio: Innovazione per la Transizione 5.0</h3>
            
            <div className="border-l-4 border-green-500 pl-4 mb-6">
              <h4 className="font-medium text-green-700">Azienda del Settore Agroalimentare</h4>
              <p className="mb-2"><strong>Sfida:</strong> Media impresa italiana del settore agroalimentare (produzione di conserve) con la necessità di innovare i processi produttivi per ridurre l'impatto ambientale e migliorare la competitività.</p>
              <p className="mb-2"><strong>Approccio all'innovazione:</strong></p>
              <ul className="list-disc pl-6 space-y-1 mb-2">
                <li>Creazione di un team di innovazione cross-funzionale, con competenze in tecnologia, sostenibilità e processi produttivi</li>
                <li>Collaborazione con un'università locale e un Digital Innovation Hub per sviluppare un gemello digitale dell'intero processo produttivo</li>
                <li>Implementazione di un sistema IoT per il monitoraggio in tempo reale dei consumi energetici, idrici e delle emissioni</li>
                <li>Sviluppo di un algoritmo di AI per l'ottimizzazione dei processi di cottura e sterilizzazione, con riduzione dei consumi energetici</li>
                <li>Riprogettazione del packaging secondo principi di eco-design, con riduzione del 40% dei materiali utilizzati</li>
                <li>Implementazione di un sistema blockchain per la tracciabilità completa della filiera, dalla materia prima al prodotto finito</li>
                <li>Utilizzo del credito d'imposta Transizione 5.0 e di un finanziamento Horizon Europe per sostenere gli investimenti</li>
              </ul>
              <p><strong>Risultati:</strong> L'approccio integrato all'innovazione ha portato a una riduzione del 35% dei consumi energetici, del 25% dell'utilizzo di acqua e del 45% degli scarti di produzione. La tracciabilità blockchain ha permesso di valorizzare la sostenibilità della filiera, con un aumento del 20% delle vendite nei mercati premium. Il gemello digitale ha ridotto del 70% i tempi di sviluppo di nuovi prodotti e ottimizzato i processi produttivi, con un aumento della produttività del 15%. L'azienda ha inoltre ottenuto una certificazione ambientale di prodotto (EPD) che ha aperto nuove opportunità commerciali nei mercati internazionali più sensibili alla sostenibilità.</p>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">⚠️</span>
                <span><strong>Nota sull'innovazione:</strong> Per massimizzare l'efficacia dei progetti di innovazione nel contesto della Transizione 5.0, è fondamentale adottare un approccio olistico che consideri simultaneamente gli aspetti tecnologici, ambientali, sociali ed economici. Le innovazioni di maggior successo sono quelle che creano sinergie tra digitalizzazione e sostenibilità, generando benefici su entrambi i fronti. È inoltre essenziale coinvolgere attivamente tutti gli stakeholder interni ed esterni all'azienda nel processo di innovazione, per garantire che le soluzioni sviluppate rispondano effettivamente alle esigenze del mercato e della società.</span>
              </p>
            </div>
          </div>
        )}
      </div>
      
      {/* Sezione 52: Transizione 5.0 ed Economia Circolare */}
      <div className="mb-10">
        <div className="flex items-center justify-between bg-blue-700 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('economia-circolare')}>
          <h2 id="economia-circolare" className="text-2xl font-semibold text-white">52. Transizione 5.0 ed Economia Circolare</h2>
          <span className="text-white">{activeSection === 'economia-circolare' ? '−' : '+'}</span>
        </div>
        {activeSection === 'economia-circolare' && (
          <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
            <p className="mb-4">L'economia circolare rappresenta un pilastro fondamentale della Transizione 5.0, offrendo un modello economico rigenerativo che minimizza gli sprechi, mantiene i prodotti e i materiali in uso il più a lungo possibile e rigenera i sistemi naturali. Le tecnologie digitali fungono da potenti abilitatori per accelerare la transizione verso modelli circolari.</p>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">52.1 I Principi dell'Economia Circolare nella Transizione 5.0</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-700 mb-2">Design Circolare</h4>
                <p>Progettazione di prodotti e servizi pensati fin dall'inizio per essere riutilizzati, riparati, ricondizionati e infine riciclati, eliminando il concetto di rifiuto.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-700 mb-2">Modelli di Business Circolari</h4>
                <p>Trasformazione da modelli lineari (produci-usa-getta) a modelli circolari basati su prodotto come servizio, condivisione, riparazione e rigenerazione.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-700 mb-2">Reverse Logistics</h4>
                <p>Creazione di catene di fornitura inverse efficienti per recuperare prodotti a fine vita, componenti e materiali, reintegrandoli nel ciclo produttivo.</p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">52.2 Tecnologie Digitali per l'Economia Circolare</h3>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="py-2 px-4 border-b text-left">Tecnologia</th>
                    <th className="py-2 px-4 border-b text-left">Applicazioni per l'Economia Circolare</th>
                    <th className="py-2 px-4 border-b text-left">Benefici per la Transizione 5.0</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Internet of Things (IoT)</td>
                    <td className="py-2 px-4 border-b">Monitoraggio in tempo reale delle condizioni dei prodotti, manutenzione predittiva, tracciamento dell'uso delle risorse</td>
                    <td className="py-2 px-4 border-b">Estensione della vita utile dei prodotti, ottimizzazione dell'uso delle risorse, riduzione degli sprechi</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Blockchain</td>
                    <td className="py-2 px-4 border-b">Passaporti digitali dei prodotti, tracciabilità dei materiali, certificazione dell'origine e dei processi circolari</td>
                    <td className="py-2 px-4 border-b">Trasparenza nella supply chain, verifica delle credenziali di sostenibilità, facilitazione del riuso e riciclo</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Big Data & AI</td>
                    <td className="py-2 px-4 border-b">Analisi dei flussi di materiali, previsione della domanda, ottimizzazione dei processi di raccolta e riciclo</td>
                    <td className="py-2 px-4 border-b">Riduzione degli scarti, miglioramento dell'efficienza dei processi circolari, personalizzazione dei prodotti</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Manifattura Additiva</td>
                    <td className="py-2 px-4 border-b">Produzione on-demand, riparazione di componenti, utilizzo di materiali riciclati</td>
                    <td className="py-2 px-4 border-b">Riduzione degli scarti di produzione, estensione della vita dei prodotti, personalizzazione</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Piattaforme Digitali</td>
                    <td className="py-2 px-4 border-b">Marketplace per materiali secondari, sharing economy, servizi di riparazione e ricondizionamento</td>
                    <td className="py-2 px-4 border-b">Creazione di nuovi modelli di business circolari, ottimizzazione dell'uso delle risorse, connessione tra domanda e offerta</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">52.3 Strategie di Implementazione dell'Economia Circolare</h3>
            
            <p className="mb-4">Per integrare efficacemente i principi dell'economia circolare nella Transizione 5.0, le imprese possono adottare diverse strategie:</p>
            
            <ol className="list-decimal pl-6 space-y-2 mb-6">
              <li>
                <strong>Circular Value Chain Assessment:</strong> Analisi dell'intera catena del valore per identificare opportunità di circolarità e punti critici in termini di uso delle risorse e generazione di rifiuti
              </li>
              <li>
                <strong>Eco-design e Design for Circularity:</strong> Riprogettazione di prodotti e processi secondo principi circolari, considerando l'intero ciclo di vita
              </li>
              <li>
                <strong>Simbiosi Industriale:</strong> Creazione di ecosistemi industriali dove gli scarti di un'azienda diventano risorse per un'altra, facilitati da piattaforme digitali di matching
              </li>
              <li>
                <strong>Product-as-a-Service:</strong> Transizione da modelli di vendita di prodotti a modelli di servitizzazione, mantenendo la proprietà e la responsabilità del fine vita
              </li>
              <li>
                <strong>Reverse Supply Chain:</strong> Sviluppo di sistemi logistici inversi per il recupero di prodotti e materiali a fine vita, supportati da tecnologie di tracciamento
              </li>
              <li>
                <strong>Circular Procurement:</strong> Adozione di criteri di circolarità negli acquisti aziendali, privilegiando fornitori con credenziali di sostenibilità verificate
              </li>
            </ol>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
              <h4 className="font-semibold text-blue-700 mb-2">Focus: Il Passaporto Digitale dei Prodotti</h4>
              <p className="mb-2">Il Digital Product Passport (DPP) rappresenta un'innovazione chiave per l'economia circolare nella Transizione 5.0:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Raccoglie e rende accessibili informazioni su composizione, riparabilità, disponibilità di pezzi di ricambio, impronta ambientale e istruzioni per lo smontaggio</li>
                <li>Utilizza tecnologie come QR code, RFID o blockchain per garantire l'accesso e l'integrità dei dati</li>
                <li>Facilita la riparazione, il riutilizzo e il riciclo a fine vita</li>
                <li>Sarà obbligatorio in Europa per diverse categorie di prodotti a partire dal 2026, secondo il regolamento Ecodesign for Sustainable Products</li>
                <li>Rappresenta un'opportunità per le imprese di valorizzare i propri sforzi in termini di sostenibilità e circolarità</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">52.4 Misurazione della Circolarità e KPI</h3>
            
            <p className="mb-4">La misurazione della circolarità è fondamentale per valutare i progressi e identificare aree di miglioramento. Nell'ambito della Transizione 5.0, le imprese possono adottare diversi indicatori:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Indicatori di Input Circolare</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Percentuale di materiali riciclati/rinnovabili utilizzati</li>
                  <li>Riduzione dell'uso di risorse vergini</li>
                  <li>Percentuale di energia da fonti rinnovabili</li>
                  <li>Riduzione dell'uso di sostanze pericolose</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Indicatori di Utilizzo</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Estensione della vita utile dei prodotti</li>
                  <li>Tasso di utilizzo dei prodotti</li>
                  <li>Numero di cicli di riutilizzo/ricondizionamento</li>
                  <li>Riduzione dei consumi durante la fase d'uso</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Indicatori di Output Circolare</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Percentuale di rifiuti riciclati/recuperati</li>
                  <li>Riduzione dei rifiuti destinati a discarica/incenerimento</li>
                  <li>Valore recuperato dai prodotti a fine vita</li>
                  <li>Percentuale di prodotti/componenti riutilizzati</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Indicatori di Business</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Fatturato da modelli di business circolari</li>
                  <li>Risparmio di costi grazie a pratiche circolari</li>
                  <li>ROI degli investimenti in circolarità</li>
                  <li>Nuovi mercati/clienti acquisiti grazie alla circolarità</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">52.5 Caso Studio: Economia Circolare nella Transizione 5.0</h3>
            
            <div className="border-l-4 border-green-500 pl-4 mb-6">
              <h4 className="font-medium text-green-700">Azienda del Settore Arredo</h4>
              <p className="mb-2"><strong>Sfida:</strong> Media impresa italiana produttrice di mobili per ufficio con la necessità di trasformare il proprio modello di business verso la circolarità e ridurre l'impatto ambientale dei propri prodotti.</p>
              <p className="mb-2"><strong>Approccio circolare adottato:</strong></p>
              <ul className="list-disc pl-6 space-y-1 mb-2">
                <li>Implementazione di un sistema di Product-as-a-Service per arredi da ufficio, con offerta di noleggio a lungo termine, manutenzione programmata e ritiro a fine uso</li>
                <li>Riprogettazione modulare dei prodotti secondo principi di eco-design, facilitando la riparazione, l'aggiornamento e lo smontaggio a fine vita</li>
                <li>Sviluppo di una piattaforma IoT per il monitoraggio in tempo reale delle condizioni dei mobili, abilitando la manutenzione predittiva</li>
                <li>Creazione di un passaporto digitale per ogni prodotto, accessibile tramite QR code, con informazioni su materiali, istruzioni di manutenzione e opzioni di fine vita</li>
                <li>Implementazione di un sistema di tracciabilità blockchain per certificare l'origine sostenibile dei materiali e documentare il ciclo di vita dei prodotti</li>
                <li>Creazione di una linea di prodotti realizzati con materiali riciclati provenienti da mobili dismessi</li>
                <li>Sviluppo di partnership con aziende di riciclo specializzate per il recupero di materiali a fine vita</li>
              </ul>
              <p><strong>Risultati:</strong> In due anni, l'azienda ha trasformato il 40% del proprio fatturato in servizi circolari, con un aumento del 25% della marginalità. La durata media dei prodotti è aumentata del 60%, mentre l'uso di materie prime vergini è diminuito del 35%. Il sistema IoT ha ridotto i costi di manutenzione del 30% grazie all'approccio predittivo. L'azienda ha inoltre ottenuto una certificazione di circolarità che ha aperto nuove opportunità nel mercato degli appalti pubblici verdi. La riduzione complessiva dell'impronta di carbonio è stata del 45%, contribuendo significativamente agli obiettivi ESG dell'azienda.</p>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">⚠️</span>
                <span><strong>Nota sull'economia circolare:</strong> L'integrazione dell'economia circolare nella Transizione 5.0 rappresenta una delle maggiori opportunità di innovazione e competitività per le imprese italiane. Le tecnologie digitali fungono da potenti abilitatori per i modelli circolari, permettendo di tracciare i materiali, ottimizzare l'uso delle risorse e sviluppare nuovi modelli di business. È importante sottolineare che la transizione verso l'economia circolare richiede un approccio sistemico e collaborativo, coinvolgendo l'intera catena del valore e creando ecosistemi industriali interconnessi. Le imprese che sapranno integrare efficacemente digitalizzazione e circolarità potranno beneficiare non solo di vantaggi ambientali, ma anche di significativi ritorni economici in termini di riduzione dei costi, accesso a nuovi mercati e miglioramento della reputazione aziendale.</span>
              </p>
            </div>
          </div>
        )}
      </div>
      
      {/* Sezione 53: Transizione 5.0 e Cybersecurity */}
      <div className="mb-10">
        <div className="flex items-center justify-between bg-blue-700 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('cybersecurity-transizione')}>
          <h2 id="cybersecurity-transizione" className="text-2xl font-semibold text-white">53. Transizione 5.0 e Cybersecurity</h2>
          <span className="text-white">{activeSection === 'cybersecurity-transizione' ? '−' : '+'}</span>
        </div>
        {activeSection === 'cybersecurity-transizione' && (
          <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
            <p className="mb-4">La Transizione 5.0 comporta un'accelerazione della digitalizzazione dei processi produttivi e un aumento della connettività tra dispositivi, sistemi e catene del valore. Questo scenario amplifica l'importanza della cybersecurity come elemento abilitante e imprescindibile per garantire la resilienza e la continuità operativa delle imprese.</p>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">53.1 Nuovi Rischi Cyber nella Transizione 5.0</h3>
            
            <p className="mb-4">L'integrazione tra tecnologie digitali e sostenibilità introduce nuove superfici di attacco e vulnerabilità:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-700 mb-2">Rischi OT/IT Convergence</h4>
                <p>La convergenza tra tecnologie operative (OT) e informatiche (IT) espone i sistemi industriali a minacce precedentemente limitate all'ambito IT, con potenziali impatti sulla sicurezza fisica e ambientale.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-700 mb-2">Vulnerabilità IoT e Edge</h4>
                <p>La proliferazione di dispositivi IoT e edge computing per il monitoraggio ambientale ed energetico crea nuovi punti di ingresso per attacchi, spesso con limitate capacità di sicurezza native.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-700 mb-2">Rischi Supply Chain</h4>
                <p>L'interconnessione delle catene di fornitura sostenibili aumenta la superficie di attacco, con la possibilità che vulnerabilità presso fornitori o partner si propaghino all'interno dell'ecosistema.</p>
              </div>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg border border-red-200 mb-6">
              <h4 className="font-semibold text-red-700 mb-2">Minacce Emergenti per la Transizione 5.0</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Attacchi ai sistemi di gestione energetica:</strong> Compromissione dei sistemi di monitoraggio e ottimizzazione energetica con potenziali impatti su efficienza e costi</li>
                <li><strong>Manipolazione dei dati ESG:</strong> Alterazione dei dati utilizzati per il reporting di sostenibilità, con rischi reputazionali e regolatori</li>
                <li><strong>Compromissione dei digital twin:</strong> Attacchi ai gemelli digitali utilizzati per simulare e ottimizzare processi sostenibili</li>
                <li><strong>Sabotaggio dei sistemi di economia circolare:</strong> Interruzione delle piattaforme digitali che facilitano il tracciamento e la gestione dei materiali riciclati</li>
                <li><strong>Attacchi ransomware mirati:</strong> Blocco dei sistemi critici per la gestione ambientale con richieste di riscatto</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">53.2 Framework di Cybersecurity per la Transizione 5.0</h3>
            
            <p className="mb-4">Per affrontare efficacemente le sfide di sicurezza nella Transizione 5.0, le imprese possono adottare framework specifici che integrano considerazioni di sostenibilità e digitalizzazione:</p>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="py-2 px-4 border-b text-left">Framework</th>
                    <th className="py-2 px-4 border-b text-left">Caratteristiche</th>
                    <th className="py-2 px-4 border-b text-left">Applicazione nella Transizione 5.0</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">NIST Cybersecurity Framework</td>
                    <td className="py-2 px-4 border-b">Approccio basato su Identificare, Proteggere, Rilevare, Rispondere, Recuperare</td>
                    <td className="py-2 px-4 border-b">Estensione per includere asset critici per la sostenibilità e sistemi di gestione energetica</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">IEC 62443</td>
                    <td className="py-2 px-4 border-b">Standard per la sicurezza dei sistemi di automazione e controllo industriale</td>
                    <td className="py-2 px-4 border-b">Protezione delle tecnologie operative utilizzate per l'efficienza energetica e la riduzione delle emissioni</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">ISO 27001 + ISO 50001</td>
                    <td className="py-2 px-4 border-b">Integrazione tra gestione della sicurezza delle informazioni e gestione dell'energia</td>
                    <td className="py-2 px-4 border-b">Approccio olistico che allinea obiettivi di sicurezza e sostenibilità energetica</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">ENISA Industry 4.0 Security</td>
                    <td className="py-2 px-4 border-b">Linee guida europee per la sicurezza nell'Industria 4.0</td>
                    <td className="py-2 px-4 border-b">Estensione per coprire le specificità della twin transition (digitale + sostenibile)</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Zero Trust Architecture</td>
                    <td className="py-2 px-4 border-b">Principio "non fidarsi mai, verificare sempre" per tutti gli accessi</td>
                    <td className="py-2 px-4 border-b">Protezione degli ecosistemi complessi e interconnessi tipici della Transizione 5.0</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">53.3 Strategie di Cybersecurity per la Transizione 5.0</h3>
            
            <ol className="list-decimal pl-6 space-y-2 mb-6">
              <li>
                <strong>Security by Design & Default:</strong> Integrazione della sicurezza fin dalle prime fasi di progettazione di prodotti, processi e sistemi sostenibili
              </li>
              <li>
                <strong>Segmentazione OT/IT:</strong> Implementazione di zone di sicurezza e condotti per isolare e proteggere i sistemi critici per la sostenibilità
              </li>
              <li>
                <strong>Gestione delle identità e degli accessi (IAM):</strong> Controllo granulare degli accessi ai sistemi critici per la twin transition
              </li>
              <li>
                <strong>Monitoraggio continuo e threat intelligence:</strong> Rilevamento precoce di minacce specifiche per i sistemi di gestione ambientale ed energetica
              </li>
              <li>
                <strong>Supply Chain Risk Management:</strong> Valutazione e mitigazione dei rischi cyber lungo tutta la catena di fornitura sostenibile
              </li>
              <li>
                <strong>Cyber-resilienza:</strong> Capacità di mantenere le funzionalità critiche per la sostenibilità anche durante un attacco
              </li>
              <li>
                <strong>Formazione e awareness:</strong> Sviluppo di una cultura della sicurezza che integri considerazioni di sostenibilità
              </li>
            </ol>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
              <h4 className="font-semibold text-blue-700 mb-2">Focus: Cybersecurity per i Sistemi di Gestione Energetica</h4>
              <p className="mb-2">I sistemi di gestione energetica (EMS) rappresentano un elemento critico della Transizione 5.0 e richiedono protezioni specifiche:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Autenticazione multi-fattore per l'accesso ai sistemi di controllo energetico</li>
                <li>Crittografia dei dati sensibili relativi ai consumi e alla produzione energetica</li>
                <li>Backup regolari e sistemi ridondanti per garantire la continuità del monitoraggio energetico</li>
                <li>Aggiornamenti di sicurezza regolari per i dispositivi IoT di monitoraggio energetico</li>
                <li>Test di penetrazione specifici per identificare vulnerabilità nei sistemi EMS</li>
                <li>Protocolli di risposta agli incidenti dedicati per gli attacchi ai sistemi energetici</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">53.4 Normative e Compliance</h3>
            
            <p className="mb-4">Il panorama normativo in materia di cybersecurity si sta evolvendo per affrontare le sfide della twin transition:</p>
            
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>NIS2 Directive:</strong> Amplia gli obblighi di sicurezza cyber a nuovi settori, inclusi quelli critici per la transizione ecologica</li>
              <li><strong>Cyber Resilience Act:</strong> Introduce requisiti di sicurezza per i prodotti connessi, inclusi quelli utilizzati per la sostenibilità</li>
              <li><strong>DORA (Digital Operational Resilience Act):</strong> Impatta la resilienza digitale del settore finanziario, inclusi i finanziamenti per progetti sostenibili</li>
              <li><strong>CSRD (Corporate Sustainability Reporting Directive):</strong> Richiede la rendicontazione dei rischi cyber legati alla sostenibilità</li>
              <li><strong>Regolamento Ecodesign:</strong> Integra considerazioni di sicurezza nei requisiti per prodotti sostenibili</li>
              <li><strong>Normative settoriali:</strong> Requisiti specifici per settori ad alta intensità energetica o con significativo impatto ambientale</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">53.5 Caso Studio: Cybersecurity nella Transizione 5.0</h3>
            
            <div className="border-l-4 border-green-500 pl-4 mb-6">
              <h4 className="font-medium text-green-700">Azienda del Settore Chimico</h4>
              <p className="mb-2"><strong>Sfida:</strong> Media impresa italiana del settore chimico impegnata nella Transizione 5.0, con implementazione di tecnologie digitali per ridurre l'impatto ambientale e ottimizzare i consumi energetici, esposta a rischi cyber significativi.</p>
              <p className="mb-2"><strong>Approccio alla cybersecurity:</strong></p>
              <ul className="list-disc pl-6 space-y-1 mb-2">
                <li>Conduzione di una valutazione del rischio cyber specifica per i sistemi critici della twin transition (impianti di trattamento acque, sistemi di monitoraggio emissioni, gestione energetica)</li>
                <li>Implementazione di una architettura di rete segmentata con separazione tra sistemi IT, OT e sistemi di gestione ambientale</li>
                <li>Adozione di un sistema di monitoraggio continuo con capacità di rilevamento anomalie nei consumi energetici e nei parametri ambientali</li>
                <li>Sviluppo di un programma di formazione specifico sulla cybersecurity per gli operatori dei sistemi di sostenibilità</li>
                <li>Implementazione di un sistema di gestione degli accessi basato su ruoli per i sistemi critici ambientali ed energetici</li>
                <li>Creazione di un piano di risposta agli incidenti specifico per attacchi ai sistemi di sostenibilità</li>
                <li>Conduzione di esercitazioni di risposta agli incidenti simulando attacchi ai sistemi di gestione energetica</li>
                <li>Sviluppo di un programma di valutazione della sicurezza dei fornitori di tecnologie per la sostenibilità</li>
              </ul>
              <p><strong>Risultati:</strong> L'approccio integrato alla cybersecurity ha permesso all'azienda di implementare con successo le tecnologie per la Transizione 5.0 senza compromettere la sicurezza. In particolare, è stato sventato un tentativo di attacco ransomware che avrebbe potuto compromettere i sistemi di gestione energetica. La resilienza cyber ha garantito la continuità dei processi di monitoraggio ambientale, evitando potenziali violazioni normative. L'azienda ha inoltre ottenuto una certificazione ISO 27001 integrata con ISO 50001, migliorando la propria reputazione presso clienti e partner. Il costo totale degli investimenti in cybersecurity è stato compensato dai risparmi derivanti dalla prevenzione di incidenti e dalle efficienze operative.</p>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">⚠️</span>
                <span><strong>Nota sulla cybersecurity:</strong> La sicurezza informatica non deve essere vista come un ostacolo alla Transizione 5.0, ma come un fattore abilitante che garantisce la resilienza e l'affidabilità dei sistemi digitali e sostenibili. Un approccio integrato alla cybersecurity, che consideri sia gli aspetti tecnologici che quelli organizzativi, è essenziale per proteggere gli investimenti nella twin transition. Le imprese dovrebbero considerare la sicurezza come parte integrante della propria strategia di Transizione 5.0, allocando risorse adeguate e sviluppando competenze specifiche. In particolare, è fondamentale che le funzioni IT, OT e sostenibilità collaborino strettamente per identificare e mitigare i rischi cyber in modo efficace.</span>
              </p>
            </div>
          </div>
        )}
      </div>
      
      {/* Sezione 54: Transizione 5.0 e Gestione dei Dati */}
      <div className="mb-10">
        <div className="flex items-center justify-between bg-blue-700 p-4 rounded-t-lg cursor-pointer" onClick={() => toggleSection('gestione-dati')}>
          <h2 id="gestione-dati" className="text-2xl font-semibold text-white">54. Transizione 5.0 e Gestione dei Dati</h2>
          <span className="text-white">{activeSection === 'gestione-dati' ? '−' : '+'}</span>
        </div>
        {activeSection === 'gestione-dati' && (
          <div className="bg-white p-6 rounded-b-lg shadow-md border border-blue-200">
            <p className="mb-4">La gestione efficace dei dati rappresenta un elemento fondamentale per il successo della Transizione 5.0. I dati sono la materia prima che alimenta sia l'innovazione digitale che il miglioramento delle performance di sostenibilità, consentendo alle imprese di ottimizzare processi, ridurre l'impatto ambientale e creare valore condiviso.</p>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">54.1 Il Ruolo dei Dati nella Twin Transition</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-700 mb-2">Dati per la Transizione Digitale</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Ottimizzazione dei processi produttivi</li>
                  <li>Personalizzazione di prodotti e servizi</li>
                  <li>Manutenzione predittiva</li>
                  <li>Automazione e robotica</li>
                  <li>Simulazione e digital twin</li>
                  <li>Intelligenza artificiale e machine learning</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-700 mb-2">Dati per la Transizione Sostenibile</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Monitoraggio e riduzione dei consumi energetici</li>
                  <li>Tracciamento dell'impronta di carbonio</li>
                  <li>Gestione efficiente delle risorse</li>
                  <li>Reporting di sostenibilità (ESG)</li>
                  <li>Economia circolare e tracciabilità dei materiali</li>
                  <li>Valutazione del ciclo di vita dei prodotti (LCA)</li>
                </ul>
              </div>
            </div>
            
            <p className="mb-4">La vera potenza della Transizione 5.0 si manifesta quando i dati vengono integrati tra queste due dimensioni, creando sinergie che amplificano i benefici sia in termini di efficienza operativa che di sostenibilità.</p>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">54.2 Architettura dei Dati per la Transizione 5.0</h3>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="py-2 px-4 border-b text-left">Livello</th>
                    <th className="py-2 px-4 border-b text-left">Componenti</th>
                    <th className="py-2 px-4 border-b text-left">Funzioni per la Transizione 5.0</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Acquisizione Dati</td>
                    <td className="py-2 px-4 border-b">Sensori IoT, sistemi SCADA, contatori intelligenti, sistemi ERP/MES, dispositivi edge</td>
                    <td className="py-2 px-4 border-b">Raccolta dati in tempo reale su processi produttivi, consumi energetici, emissioni, utilizzo di risorse</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Connettività</td>
                    <td className="py-2 px-4 border-b">5G, Wi-Fi 6, LPWAN, protocolli industriali, gateway IoT</td>
                    <td className="py-2 px-4 border-b">Trasmissione efficiente dei dati dai punti di raccolta ai sistemi di elaborazione, con attenzione all'efficienza energetica delle comunicazioni</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Storage</td>
                    <td className="py-2 px-4 border-b">Data lake, data warehouse, cloud storage, edge storage, database distribuiti</td>
                    <td className="py-2 px-4 border-b">Archiviazione ottimizzata dei dati con bilanciamento tra accessibilità e consumo energetico, implementando strategie di green storage</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Elaborazione</td>
                    <td className="py-2 px-4 border-b">Big data analytics, AI/ML, edge computing, high-performance computing</td>
                    <td className="py-2 px-4 border-b">Analisi avanzata dei dati per ottimizzare simultaneamente performance operative e sostenibilità, con algoritmi efficienti dal punto di vista energetico</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Visualizzazione</td>
                    <td className="py-2 px-4 border-b">Dashboard integrate, digital twin, sistemi di supporto decisionale, reporting ESG</td>
                    <td className="py-2 px-4 border-b">Rappresentazione visiva delle metriche chiave di performance digitali e di sostenibilità, facilitando decisioni informate e tempestive</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">54.3 Data Governance per la Transizione 5.0</h3>
            
            <p className="mb-4">Una solida governance dei dati è essenziale per garantire che le informazioni siano accurate, accessibili, sicure e utilizzabili per supportare gli obiettivi della twin transition:</p>
            
            <ol className="list-decimal pl-6 space-y-2 mb-6">
              <li>
                <strong>Data Strategy:</strong> Definizione di una strategia integrata per i dati che allinei gli obiettivi di digitalizzazione e sostenibilità, identificando le fonti di dati critiche per la Transizione 5.0
              </li>
              <li>
                <strong>Data Quality Management:</strong> Implementazione di processi per garantire l'accuratezza, completezza e affidabilità dei dati, fondamentali per il reporting ESG e le decisioni basate sui dati
              </li>
              <li>
                <strong>Data Integration:</strong> Creazione di un'architettura che integri dati provenienti da sistemi IT e OT, abbattendo i silos tra dati operativi e dati di sostenibilità
              </li>
              <li>
                <strong>Data Ownership:</strong> Definizione chiara di ruoli e responsabilità nella gestione dei dati, con particolare attenzione ai dati ESG e di performance energetica
              </li>
              <li>
                <strong>Data Privacy & Compliance:</strong> Conformità con le normative sulla protezione dei dati (GDPR) e con i requisiti emergenti per il reporting di sostenibilità (CSRD)
              </li>
              <li>
                <strong>Data Lifecycle Management:</strong> Gestione dell'intero ciclo di vita dei dati, dall'acquisizione all'archiviazione fino all'eliminazione, con attenzione all'impatto ambientale dello storage
              </li>
              <li>
                <strong>Data Ethics:</strong> Sviluppo di principi etici per l'utilizzo dei dati, considerando gli impatti sociali e ambientali delle decisioni basate sui dati
              </li>
            </ol>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
              <h4 className="font-semibold text-blue-700 mb-2">Focus: Green Data Management</h4>
              <p className="mb-2">La gestione sostenibile dei dati è un aspetto spesso trascurato ma fondamentale della Transizione 5.0:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Efficienza energetica dello storage:</strong> Ottimizzazione dell'archiviazione dei dati per ridurre il consumo energetico, utilizzando tecnologie come la deduplicazione, la compressione e lo storage a livelli</li>
                <li><strong>Data center sostenibili:</strong> Utilizzo di data center alimentati da energie rinnovabili e con sistemi di raffreddamento efficienti</li>
                <li><strong>Politiche di data retention:</strong> Definizione di politiche che bilancino le esigenze di conservazione con l'impatto ambientale dello storage</li>
                <li><strong>Edge computing:</strong> Elaborazione dei dati più vicino alla fonte per ridurre la trasmissione e il consumo energetico associato</li>
                <li><strong>Algoritmi efficienti:</strong> Sviluppo e utilizzo di algoritmi ottimizzati per ridurre il consumo di risorse computazionali</li>
                <li><strong>Carbon footprint dei dati:</strong> Monitoraggio e reporting dell'impronta di carbonio associata alla gestione dei dati aziendali</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">54.4 Tecnologie e Strumenti per la Gestione dei Dati nella Transizione 5.0</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-700 mb-2">Piattaforme IoT Industriali</h4>
                <p className="mb-2">Soluzioni integrate per la raccolta, l'elaborazione e l'analisi dei dati provenienti da dispositivi IoT industriali.</p>
                <p><strong>Applicazioni 5.0:</strong> Monitoraggio in tempo reale dei consumi energetici, delle emissioni e dell'efficienza dei processi produttivi.</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-700 mb-2">Data Analytics & AI</h4>
                <p className="mb-2">Strumenti avanzati per l'analisi predittiva e prescrittiva dei dati, con algoritmi di machine learning e intelligenza artificiale.</p>
                <p><strong>Applicazioni 5.0:</strong> Ottimizzazione dei processi per ridurre consumi ed emissioni, previsione della domanda energetica, manutenzione predittiva.</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-700 mb-2">Digital Twin</h4>
                <p className="mb-2">Rappresentazioni virtuali di prodotti, processi o sistemi che utilizzano dati in tempo reale per simulare comportamenti e performance.</p>
                <p><strong>Applicazioni 5.0:</strong> Simulazione dell'impatto ambientale di modifiche ai processi, ottimizzazione del ciclo di vita dei prodotti, test virtuali per ridurre prototipi fisici.</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-700 mb-2">ESG Data Management</h4>
                <p className="mb-2">Piattaforme specializzate per la raccolta, validazione e reporting dei dati ambientali, sociali e di governance.</p>
                <p><strong>Applicazioni 5.0:</strong> Automazione del reporting di sostenibilità, tracciamento degli obiettivi ESG, compliance con normative come la CSRD.</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-700 mb-2">Blockchain & DLT</h4>
                <p className="mb-2">Tecnologie di registro distribuito per garantire l'immutabilità, la trasparenza e la tracciabilità dei dati.</p>
                <p><strong>Applicazioni 5.0:</strong> Tracciabilità della supply chain sostenibile, certificazione dell'origine dei materiali, gestione dei crediti di carbonio.</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-700 mb-2">Data Integration Middleware</h4>
                <p className="mb-2">Soluzioni per l'integrazione di dati provenienti da fonti eterogenee, facilitando la comunicazione tra sistemi diversi.</p>
                <p><strong>Applicazioni 5.0:</strong> Integrazione tra sistemi IT e OT, connessione tra piattaforme di gestione energetica e sistemi produttivi.</p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-4">54.5 Caso Studio: Gestione dei Dati per la Transizione 5.0</h3>
            
            <div className="border-l-4 border-green-500 pl-4 mb-6">
              <h4 className="font-medium text-green-700">Azienda del Settore Manifatturiero</h4>
              <p className="mb-2"><strong>Sfida:</strong> Media impresa italiana del settore manifatturiero (componentistica automotive) con la necessità di implementare una strategia di gestione dei dati integrata per supportare la Transizione 5.0, ottimizzando simultaneamente efficienza produttiva e sostenibilità.</p>
              <p className="mb-2"><strong>Approccio alla gestione dei dati:</strong></p>
              <ul className="list-disc pl-6 space-y-1 mb-2">
                <li>Sviluppo di una data strategy integrata, allineata con gli obiettivi di Transizione 5.0 dell'azienda</li>
                <li>Implementazione di una rete di sensori IoT per il monitoraggio in tempo reale dei consumi energetici, delle emissioni e dei parametri di processo</li>
                <li>Creazione di un data lake centralizzato per integrare dati provenienti da sistemi di produzione, gestione energetica, supply chain e qualità</li>
                <li>Sviluppo di dashboard integrate che visualizzano KPI sia operativi che di sostenibilità, facilitando decisioni informate</li>
                <li>Implementazione di algoritmi di machine learning per l'ottimizzazione dei processi produttivi con obiettivi dual (efficienza e riduzione impatto ambientale)</li>
                <li>Creazione di digital twin dei principali processi produttivi per simulare scenari di ottimizzazione energetica</li>
                <li>Implementazione di una piattaforma blockchain per la tracciabilità dei materiali lungo la supply chain</li>
                <li>Adozione di una piattaforma ESG per automatizzare la raccolta e il reporting dei dati di sostenibilità</li>
              </ul>
              <p><strong>Risultati:</strong> L'approccio integrato alla gestione dei dati ha permesso all'azienda di ottenere significativi miglioramenti sia in termini di performance operative che di sostenibilità. I consumi energetici sono stati ridotti del 28% grazie all'ottimizzazione basata sui dati, mentre le emissioni di CO2 sono diminuite del 32%. La produttività è aumentata del 15% e gli scarti di produzione sono stati ridotti del 40%. La tracciabilità completa dei materiali ha permesso di aumentare la percentuale di materiali riciclati utilizzati dal 12% al 35%. L'automazione del reporting ESG ha ridotto del 70% il tempo dedicato alla raccolta dati per la rendicontazione di sostenibilità. Inoltre, la disponibilità di dati accurati e certificati ha facilitato l'accesso a finanziamenti green, con un risparmio sui costi di finanziamento stimato in 150.000 euro all'anno.</p>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">⚠️</span>
                <span><strong>Nota sulla gestione dei dati:</strong> La gestione efficace dei dati rappresenta un fattore critico di successo per la Transizione 5.0. Per massimizzare il valore dei dati, le imprese devono superare l'approccio a silos, integrando dati operativi e di sostenibilità in una visione unificata. È fondamentale sviluppare non solo le infrastrutture tecnologiche, ma anche le competenze e i processi organizzativi necessari per trasformare i dati in decisioni che bilancino performance economiche e sostenibilità. Le aziende dovrebbero inoltre considerare l'impatto ambientale della gestione dei dati stessi, adottando pratiche di green data management. Infine, è essenziale garantire la sicurezza e la privacy dei dati, implementando misure di protezione adeguate e rispettando le normative vigenti.</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
