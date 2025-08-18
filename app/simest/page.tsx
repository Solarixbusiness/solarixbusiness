import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Roboto } from 'next/font/google';

import dynamic from 'next/dynamic';

// Server Components - caricamento immediato per migliori prestazioni
import QuadroNormativoSection from './components/QuadroNormativoSection';
import DefinizioniSection from './components/DefinizioniSection';
import CondizioniAmmissibilitaSection from './components/CondizioniAmmissibilitaSection';
import EscluzioniSection from './components/EscluzioniSection';
import FormaAssociataSection from './components/FormaAssociataSection';
import ImportiLimitiSection from './components/ImportiLimitiSection';
import BeneficiAggiuntiviSection from './components/BeneficiAggiuntiviSection';
import ProcedureAccessoSection from './components/ProcedureAccessoSection';
import SpeseAmmissibiliSection from './components/SpeseAmmissibiliSection';
import TimingSection from './components/TimingSection';
import ContoCorrenteSection from './components/ContoCorrenteSection';
import RendicontazioneSection from './components/RendicontazioneSection';

// Solo le ultime sezioni con lazy loading semplice
const ErogazioniSection = dynamic(() => import('./components/ErogazioniSection'));
const ConsolidamentoSection = dynamic(() => import('./components/ConsolidamentoSection'));
const ObbrighiSection = dynamic(() => import('./components/ObbrighiSection'));
const CumulabilitaSection = dynamic(() => import('./components/CumulabilitaSection'));
const RevocaSection = dynamic(() => import('./components/RevocaSection'));
const ConseguenzeRevocaSection = dynamic(() => import('./components/ConseguenzeRevocaSection'));
const ProceduraRevocaSection = dynamic(() => import('./components/ProceduraRevocaSection'));
const ControlliSection = dynamic(() => import('./components/ControlliSection'));
const ComunicazioniSection = dynamic(() => import('./components/ComunicazioniSection'));
const StipulaSection = dynamic(() => import('./components/StipulaSection'));
const FAQSection = dynamic(() => import('./components/FAQSection'));
const ConclusioniSection = dynamic(() => import('./components/ConclusioniSection'));

const roboto = Roboto({
  weight: ['400', '700'], // Pesi validi Roboto
  subsets: ['latin'],
  display: 'swap',
  preload: true, // Preload font critico
});

interface SectionInfo {
  id: string;
  title: string;
  component: React.ComponentType<any>;
  priority?: 'critical' | 'normal';
}

const sections: SectionInfo[] = [
  { id: 'quadro-normativo', title: '1. Introduzione al Quadro Normativo', component: QuadroNormativoSection, priority: 'critical' },
  { id: 'definizioni', title: '2. Definizioni Fondamentali', component: DefinizioniSection, priority: 'critical' },
  { id: 'condizioni-ammissibilita', title: '3. Condizioni di Ammissibilità', component: CondizioniAmmissibilitaSection, priority: 'critical' },
  { id: 'esclusioni', title: '4. Esclusioni Settoriali e Soggettive', component: EscluzioniSection },
  { id: 'forma-associata', title: '5. Forma Singola o Associata', component: FormaAssociataSection },
  { id: 'importi-limiti', title: '6. Importi e Limiti dell\'Intervento', component: ImportiLimitiSection },
  { id: 'benefici-aggiuntivi', title: '7. Benefici Aggiuntivi', component: BeneficiAggiuntiviSection },
  { id: 'procedure-accesso', title: '8. Procedure di Accesso', component: ProcedureAccessoSection },
  { id: 'spese-ammissibili', title: '9. Spese Ammissibili', component: SpeseAmmissibiliSection },
  { id: 'timing', title: '10. Timing e Sostenibilità delle Spese', component: TimingSection },
  { id: 'conto-corrente', title: '11. Conto Corrente Dedicato', component: ContoCorrenteSection },
  { id: 'rendicontazione', title: '12. Rendicontazione', component: RendicontazioneSection },
  { id: 'erogazioni', title: '13. Erogazioni', component: ErogazioniSection },
  { id: 'consolidamento', title: '14. Consolidamento', component: ConsolidamentoSection },
  { id: 'obblighi', title: '15. Obblighi dell\'Impresa', component: ObbrighiSection },
  { id: 'cumulabilita', title: '16. Cumulabilità con Altri Aiuti', component: CumulabilitaSection },
  { id: 'revoca', title: '17. Revoca dell\'Intervento', component: RevocaSection },
  { id: 'conseguenze-revoca', title: '18. Conseguenze della Revoca', component: ConseguenzeRevocaSection },
  { id: 'procedura-revoca', title: '19. Procedura di Revoca', component: ProceduraRevocaSection },
  { id: 'controlli', title: '20. Controlli e Verifiche', component: ControlliSection },
  { id: 'comunicazioni', title: '21. Comunicazioni con SIMEST', component: ComunicazioniSection },
  { id: 'stipula', title: '22. Stipula del Contratto', component: StipulaSection },
  { id: 'faq', title: '23. FAQ - Domande Frequenti', component: FAQSection },
  { id: 'conclusioni', title: '24. Conclusioni e Contatti', component: ConclusioniSection },
];

// Force static generation for better performance
export const revalidate = 86400; // Revalidate every 24 hours
export const runtime = 'nodejs'; // Avoid Edge runtime

// Metadata API (replaces next/head)
export const metadata = {
  title: 'SIMEST Fondo 394/81 - Finanziamenti per l\'Internazionalizzazione | SolariX Business',
  description: 'Scopri il SIMEST Fondo 394/81: finanziamenti agevolati per l\'internazionalizzazione delle PMI italiane. Guida completa su requisiti, procedure e benefici.',
  keywords: 'SIMEST, Fondo 394/81, finanziamenti internazionalizzazione, export, PMI, agevolazioni',
  openGraph: {
    title: 'SIMEST Fondo 394/81 - Finanziamenti per l\'Internazionalizzazione',
    description: 'Guida completa al SIMEST Fondo 394/81: requisiti, procedure e benefici per l\'internazionalizzazione delle PMI',
    type: 'article',
  },
  alternates: {
    canonical: 'https://solarixbusiness.it/simest',
  },
};


export default function SimestPage() {
  return (
    <>
      <div className={`min-h-screen bg-gray-50 ${roboto.className}`}>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "SIMEST Fondo 394/81 - Finanziamenti per l'Internazionalizzazione",
              "description": "Guida completa al SIMEST Fondo 394/81: requisiti, procedure e benefici per l'internazionalizzazione delle PMI",
              "author": {
                "@type": "Organization",
                "name": "SolariX Business"
              },
              "publisher": {
                "@type": "Organization",
                "name": "SolariX Business",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://solarixbusiness.it/logo.png"
                }
              },
              "datePublished": "2024-01-01",
              "dateModified": "2024-01-01"
            })
          }}
        />

        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/strumenti/SIMEST_11zon.webp"
              alt="SIMEST Fondo 394/81"
              fill
              className="object-cover opacity-20"
              priority
              sizes="100vw"
            />
          </div>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80"></div>
          
          {/* Content */}
          <div className="relative container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
              SIMEST Fondo 394/81
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Finanziamenti agevolati per l'internazionalizzazione delle PMI italiane
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <span className="text-blue-100 font-medium">Fino al 100% del progetto</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <span className="text-blue-100 font-medium">Mercati esteri</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <span className="text-blue-100 font-medium">Procedure semplificate</span>
              </div>
            </div>
          </div>
        </div>

      {/* Index Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Indice dei Contenuti</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-left p-3 rounded-lg border border-gray-200 text-sm hover:bg-blue-50 hover:border-blue-300 transition-colors cursor-pointer"
              >
                {section.title}
              </a>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section) => {
            const SectionComponent = section.component;
            return (
              <div key={section.id} id={section.id} className="section-container">
                <SectionComponent />
              </div>
            );
          })}
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-lg shadow-xl p-8 mt-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              Trasforma i tuoi progetti di internazionalizzazione in realtà con SOLARIXBUSINESS
            </h2>
            <p className="text-xl mb-6 text-blue-100">
              Pronto a conquistare i mercati internazionali con il supporto del Fondo SIMEST 394/81?
            </p>
            <p className="text-lg text-blue-100 mb-8">
              SOLARIXBUSINESS è il partner specializzato che ti accompagna nell'accesso ai finanziamenti SIMEST, 
              dalla fase di analisi preliminare fino al consolidamento del finanziamento. I nostri esperti conoscono 
              ogni dettaglio della normativa e possono massimizzare le tue possibilità di successo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Servizi Specializzati */}
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-white">I nostri servizi specializzati SIMEST:</h3>
              <ul className="space-y-2 text-blue-100">
                <li>✅ <strong>Analisi di Fattibilità Gratuita</strong> - Verifichiamo la tua ammissibilità e identifichiamo la linea più adatta</li>
                <li>✅ <strong>Preparazione Business Plan</strong> - Elaboriamo progetti convincenti e documentazione tecnica completa</li>
                <li>✅ <strong>Gestione Domanda Completa</strong> - Ci occupiamo di tutto l'iter burocratico sul portale SIMEST</li>
                <li>✅ <strong>Supporto Contrattuale</strong> - Ti assistiamo nella stipula e nella costituzione delle garanzie</li>
                <li>✅ <strong>Rendicontazione Professionale</strong> - Gestiamo tutte le fasi di rendicontazione e reporting</li>
                <li>✅ <strong>Gestione Controlli</strong> - Ti supportiamo durante verifiche e ispezioni SIMEST</li>
              </ul>
            </div>

            {/* Benefici SIMEST */}
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-white">Con SIMEST 394/81 puoi ottenere:</h3>
              <ul className="space-y-2 text-blue-100 mb-6">
                <li>• Finanziamenti agevolati a tasso 0,50% annuo</li>
                <li>• Contributi a fondo perduto fino al 40%</li>
                <li>• Importi da €10.000 a €4.000.000</li>
                <li>• Preammortamento fino a 2 anni</li>
                <li>• Durata finanziamento fino a 6 anni</li>
              </ul>

              <h4 className="font-bold mb-2 text-white">Linee di finanziamento coperte:</h4>
              <ul className="space-y-1 text-blue-100 text-sm">
                <li>• Partecipazione a Fiere e Mostre Internazionali</li>
                <li>• Inserimento nei Mercati Esteri</li>
                <li>• Temporary Export Manager (TEM)</li>
                <li>• E-Commerce Internazionale</li>
                <li>• Transizione Digitale ed Ecologica (PNRR)</li>
              </ul>
            </div>
          </div>

          {/* Perché Scegliere SOLARIXBUSINESS */}
          <div className="bg-white/10 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4 text-white">Perché scegliere SOLARIXBUSINESS per SIMEST?</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-blue-100 mb-2"><strong>Esperienza Specializzata</strong> - Oltre 150 pratiche SIMEST approvate con successo</p>
                <p className="text-blue-100"><strong>Competenza Tecnica</strong> - Conosciamo ogni dettaglio della normativa e delle procedure</p>
              </div>
              <div>
                <p className="text-blue-100 mb-2"><strong>Supporto Integrato</strong> - Ti seguiamo dall'idea progettuale fino al consolidamento</p>
                <p className="text-blue-100"><strong>Assistenza Continuativa</strong> - Supporto per tutta la durata del finanziamento</p>
              </div>
            </div>
          </div>

          {/* Contatti e CTA */}
          <div className="bg-white/10 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold mb-4 text-white text-center">Contatta subito SOLARIXBUSINESS</h3>
            <div className="text-center mb-6">
              <p className="text-lg font-semibold text-yellow-300 mb-2">CONSULENZA GRATUITA di 30 minuti</p>
              <p className="text-blue-100 mb-4">
                Analizziamo insieme il tuo progetto di internazionalizzazione e identifichiamo la strategia SIMEST più efficace.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <p className="text-white font-semibold">📞 Telefono:</p>
                  <p className="text-blue-100">011 1883 7752</p>
                </div>
                <div className="text-center">
                  <p className="text-white font-semibold">📧 Email:</p>
                  <p className="text-blue-100">info@solarixbusiness.it</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link 
                href="/contatti" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors text-center"
              >
                Richiedi Consulenza Gratuita
              </Link>
              <a 
                href="https://wa.me/+393470087833" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors text-center"
              >
                Contattaci su WhatsApp
              </a>
            </div>

            <div className="text-center">
              <p className="text-yellow-300 font-semibold mb-2">Non perdere l'opportunità!</p>
              <p className="text-blue-100 text-sm mb-4">
                Il Fondo 394/81 offre risorse preziose per l'internazionalizzazione. 
                Contattaci oggi stesso per trasformare i tuoi progetti internazionali in realtà concrete.
              </p>
              <p className="text-white font-bold">SOLARIXBUSINESS SRL - Il tuo partner per l'internazionalizzazione</p>
              <p className="text-blue-200 text-sm italic">Trasformiamo le opportunità SIMEST in successi imprenditoriali</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
