'use client';

import React, { useState, Suspense, lazy } from 'react';
import Head from 'next/head';
import Image from 'next/image';

// Lazy load components
const IntroductionSection = lazy(() => import('./components/IntroductionSection'));
const RequirementsSection = lazy(() => import('./components/RequirementsSection'));
const BenefitsSection = lazy(() => import('./components/BenefitsSection'));
const BanksSection = lazy(() => import('./components/BanksSection'));
const ApplicationSection = lazy(() => import('./components/ApplicationSection'));
const EvaluationSection = lazy(() => import('./components/EvaluationSection'));
const DisbursementSection = lazy(() => import('./components/DisbursementSection'));
const ObligationsSection = lazy(() => import('./components/ObligationsSection'));
const FAQSection = lazy(() => import('./components/FAQSection'));

interface SectionProps {
  activeSection: string | null;
  toggleSection: (sectionId: string) => void;
}

export default function SabatiniGreenPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (sectionId: string) => {
    if (activeSection === sectionId) {
      setActiveSection(null);
    } else {
      setActiveSection(sectionId);
    }
  };

  const handleSectionClick = (sectionId: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
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
        <title>Nuova Sabatini Green: Finanziamenti Agevolati per Investimenti Sostenibili | SolariX Business</title>
        <meta name="description" content="Scopri la Nuova Sabatini Green: finanziamenti agevolati fino a 4 milioni di euro per investimenti in tecnologie sostenibili e digitalizzazione. Contributi ministeriali e tassi vantaggiosi." />
        <meta name="keywords" content="Nuova Sabatini Green, finanziamenti agevolati, investimenti sostenibili, digitalizzazione, contributi ministeriali, PMI, tecnologie green" />
        <meta property="og:title" content="Nuova Sabatini Green: Finanziamenti Agevolati per Investimenti Sostenibili" />
        <meta property="og:description" content="Finanziamenti agevolati fino a 4 milioni di euro per investimenti in tecnologie sostenibili e digitalizzazione con contributi ministeriali." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://solarixbusiness.it/sabatini-green" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nuova Sabatini Green: Finanziamenti Agevolati per Investimenti Sostenibili" />
        <meta name="twitter:description" content="Finanziamenti agevolati fino a 4 milioni di euro per investimenti sostenibili con contributi ministeriali." />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "GovernmentService",
            "name": "Nuova Sabatini Green",
            "description": "Finanziamenti agevolati per investimenti in beni strumentali sostenibili e digitalizzazione",
            "provider": {
              "@type": "GovernmentOrganization",
              "name": "Ministero delle Imprese e del Made in Italy"
            },
            "areaServed": "IT",
            "audience": {
              "@type": "BusinessAudience",
              "audienceType": "Piccole e Medie Imprese"
            }
          })}
        </script>
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-10">
              Nuova Sabatini Green: Guida Completa 2025
            </h1>
          </div>

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
                    <a href="#introduzione" onClick={(e) => handleSectionClick('introduzione')(e)} className="text-blue-600 hover:underline flex items-center">
                      <span className="inline-block w-6 h-6 bg-green-100 text-green-700 rounded-full text-center mr-2">1</span>
                      Introduzione alla Sabatini Green
                    </a>
                  </li>
                  <li>
                    <a href="#requisiti" onClick={(e) => handleSectionClick('requisiti')(e)} className="text-blue-600 hover:underline flex items-center">
                      <span className="inline-block w-6 h-6 bg-green-100 text-green-700 rounded-full text-center mr-2">2</span>
                      Soggetti Beneficiari
                    </a>
                  </li>
                  <li>
                    <a href="#agevolazioni" onClick={(e) => handleSectionClick('agevolazioni')(e)} className="text-blue-600 hover:underline flex items-center">
                      <span className="inline-block w-6 h-6 bg-green-100 text-green-700 rounded-full text-center mr-2">3</span>
                      Investimenti Ammissibili
                    </a>
                  </li>
                  <li>
                    <a href="#banche" onClick={(e) => handleSectionClick('banche')(e)} className="text-blue-600 hover:underline flex items-center">
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
                    <a href="#procedura" onClick={(e) => handleSectionClick('procedura')(e)} className="text-blue-600 hover:underline flex items-center">
                      <span className="inline-block w-6 h-6 bg-green-100 text-green-700 rounded-full text-center mr-2">5</span>
                      Presentazione della Domanda
                    </a>
                  </li>
                  <li>
                    <a href="#valutazione" onClick={(e) => handleSectionClick('valutazione')(e)} className="text-blue-600 hover:underline flex items-center">
                      <span className="inline-block w-6 h-6 bg-green-100 text-green-700 rounded-full text-center mr-2">6</span>
                      Valutazione e Concessione
                    </a>
                  </li>
                  <li>
                    <a href="#erogazione" onClick={(e) => handleSectionClick('erogazione')(e)} className="text-blue-600 hover:underline flex items-center">
                      <span className="inline-block w-6 h-6 bg-green-100 text-green-700 rounded-full text-center mr-2">7</span>
                      Erogazione del Contributo
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#obblighi" 
                      onClick={(e) => handleSectionClick('obblighi')(e)} 
                      className="text-blue-600 hover:underline flex items-center"
                    >
                      <span className="inline-block w-6 h-6 bg-green-100 text-green-700 rounded-full text-center mr-2">8</span>
                      Obblighi e Controlli
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#faq" 
                      onClick={(e) => handleSectionClick('faq')(e)} 
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

          {/* Lazy-loaded Sections */}
          <div className="space-y-6">
            <Suspense fallback={<div className="bg-white rounded-lg shadow-lg p-6 animate-pulse"><div className="h-4 bg-gray-200 rounded w-3/4"></div></div>}>
              <IntroductionSection activeSection={activeSection} toggleSection={toggleSection} />
            </Suspense>

            <Suspense fallback={<div className="bg-white rounded-lg shadow-lg p-6 animate-pulse"><div className="h-4 bg-gray-200 rounded w-3/4"></div></div>}>
              <RequirementsSection activeSection={activeSection} toggleSection={toggleSection} />
            </Suspense>

            <Suspense fallback={<div className="bg-white rounded-lg shadow-lg p-6 animate-pulse"><div className="h-4 bg-gray-200 rounded w-3/4"></div></div>}>
              <BenefitsSection activeSection={activeSection} toggleSection={toggleSection} />
            </Suspense>

            <Suspense fallback={<div className="bg-white rounded-lg shadow-lg p-6 animate-pulse"><div className="h-4 bg-gray-200 rounded w-3/4"></div></div>}>
              <BanksSection activeSection={activeSection} toggleSection={toggleSection} />
            </Suspense>

            <Suspense fallback={<div className="bg-white rounded-lg shadow-lg p-6 animate-pulse"><div className="h-4 bg-gray-200 rounded w-3/4"></div></div>}>
              <ApplicationSection activeSection={activeSection} toggleSection={toggleSection} />
            </Suspense>

            <Suspense fallback={<div className="bg-white rounded-lg shadow-lg p-6 animate-pulse"><div className="h-4 bg-gray-200 rounded w-3/4"></div></div>}>
              <EvaluationSection activeSection={activeSection} toggleSection={toggleSection} />
            </Suspense>

            <Suspense fallback={<div className="bg-white rounded-lg shadow-lg p-6 animate-pulse"><div className="h-4 bg-gray-200 rounded w-3/4"></div></div>}>
              <DisbursementSection activeSection={activeSection} toggleSection={toggleSection} />
            </Suspense>

            <Suspense fallback={<div className="bg-white rounded-lg shadow-lg p-6 animate-pulse"><div className="h-4 bg-gray-200 rounded w-3/4"></div></div>}>
              <ObligationsSection activeSection={activeSection} toggleSection={toggleSection} />
            </Suspense>

            <Suspense fallback={<div className="bg-white rounded-lg shadow-lg p-6 animate-pulse"><div className="h-4 bg-gray-200 rounded w-3/4"></div></div>}>
              <FAQSection activeSection={activeSection} toggleSection={toggleSection} />
            </Suspense>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-lg shadow-xl p-8 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Trasforma i tuoi investimenti Green in opportunità concrete con SOLARIXBUSINESS
              </h2>
              <p className="text-xl mb-6">
                Pronto a finanziare il futuro sostenibile della tua azienda?
              </p>
              <p className="text-lg mb-8">
                SOLARIXBUSINESS è il partner esperto che ti accompagna passo dopo passo nell'ottenimento della Nuova Sabatini Green. Dalla valutazione della fattibilità fino all'erogazione del contributo, il nostro team specializzato massimizza le tue possibilità di successo.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">🎯 I nostri servizi per la Nuova Sabatini Green:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✅</span>
                    <span><strong>Analisi di Fattibilità Gratuita</strong> - Verifichiamo gratuitamente se il tuo progetto è ammissibile</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✅</span>
                    <span><strong>Supporto nella Scelta dei Beni</strong> - Ti aiutiamo a identificare macchinari e attrezzature Green conformi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✅</span>
                    <span><strong>Compilazione e Invio Domanda</strong> - Gestiamo l'intero iter burocratico per te</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✅</span>
                    <span><strong>Assistenza Bancaria</strong> - Ti mettiamo in contatto con gli istituti più vantaggiosi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✅</span>
                    <span><strong>Monitoraggio Pratica</strong> - Seguiamo costantemente l'avanzamento della tua richiesta</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✅</span>
                    <span><strong>Gestione Erogazione</strong> - Ti assistiamo fino al ricevimento del contributo</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Con la Nuova Sabatini Green puoi ottenere:</h3>
                <ul className="space-y-2 mb-6">
                  <li>• Contributi fino al 3,575% dell'investimento (4,648% per il Sud Italia)</li>
                  <li>• Finanziamenti agevolati da €20.000 a €4 milioni</li>
                  <li>• Copertura fino al 100% dell'investimento</li>
                  <li>• Maggiorazioni per beni 4.0 e investimenti Green</li>
                </ul>

                <h3 className="text-2xl font-bold mb-4">💡 Perché scegliere SOLARIXBUSINESS?</h3>
                <ul className="space-y-2">
                  <li>🏆 <strong>Esperienza Consolidata</strong> - Oltre 200 pratiche Sabatini approvate con successo</li>
                  <li>⚡ <strong>Tempi Rapidi</strong> - Riduciamo i tempi di istruttoria del 40%</li>
                  <li>💰 <strong>Costi Chiari</strong> - Paghi solo a risultato ottenuto</li>
                  <li>🔧 <strong>Supporto Completo</strong> - Ti assistiamo dall'idea progettuale fino all'ultima rata</li>
                </ul>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 rounded-lg p-6 mb-8">
              <h3 className="text-2xl font-bold mb-4 text-center">📞 Contatta subito SOLARIXBUSINESS</h3>
              <div className="text-center mb-4">
                <p className="text-xl font-semibold">🎯 CONSULENZA GRATUITA di 30 minuti</p>
                <p>Verifichiamo insieme la fattibilità del tuo progetto e calcoliamo il contributo ottenibile.</p>
              </div>
              <div className="text-center mb-4">
                <p><strong>Telefono:</strong> 011 1883 7752</p>
                <p><strong>Email:</strong> info@solarixbusiness.it</p>
              </div>
            </div>

            <div className="bg-yellow-500 bg-opacity-20 rounded-lg p-6 mb-8">
              <h3 className="text-2xl font-bold mb-2 text-center">⏰ Non perdere l'opportunità!</h3>
              <p className="text-center">
                Gli sportelli della Nuova Sabatini Green hanno risorse limitate. Contattaci oggi stesso per non perdere il finanziamento per i tuoi investimenti sostenibili.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contatti" 
                className="bg-white text-green-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors text-center"
              >
                Richiedi Consulenza Gratuita
              </a>
              <a 
                href="https://wa.me/3901118837752?text=Ciao,%20sono%20interessato%20alla%20Nuova%20Sabatini%20Green.%20Vorrei%20una%20consulenza%20gratuita." 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-900 transition-colors text-center"
              >
                Contattaci su WhatsApp
              </a>
            </div>

            <div className="text-center mt-8">
              <p className="text-lg font-semibold">SOLARIXBUSINESS SRL - Il tuo partner per gli incentivi alle imprese</p>
              <p className="text-sm opacity-90">Trasformiamo la burocrazia in opportunità</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
