'use client';

import { useState } from 'react'
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'
import SeoHead from '@/components/SeoHead/SeoHead'

export default function EICPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <>
      <SeoHead 
        title="EIC - Consiglio Europeo per l'Innovazione | Finanziamenti fino a 17,5 Milioni € | SolariX Business"
        description="EIC Accelerator: finanziamenti fino a 2,5 milioni € a fondo perduto + 15 milioni € equity. Grant 70% + investimenti UE per tecnologie rivoluzionarie. Consulenza specializzata SolariX Business."
        keywords="EIC, Consiglio Europeo Innovazione, EIC Accelerator, finanziamenti innovazione, grant fondo perduto, equity UE, tecnologie rivoluzionarie, startup innovative"
        canonicalUrl="https://solarixbusiness.it/eic"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs 
            items={[
              { label: 'Home', path: '/' },
              { label: 'Bandi Europei', path: '/bandi-europei' },
              { label: 'EIC - Consiglio Europeo per l\'Innovazione', path: '/eic' }
            ]} 
          />

          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-6">
              EIC - Consiglio Europeo per l'Innovazione
            </h1>
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-2xl shadow-xl mb-8">
              <h2 className="text-3xl font-bold mb-4">🚀 FINANZIAMENTI RIVOLUZIONARI FINO A 17,5 MILIONI €</h2>
              <div className="grid md:grid-cols-3 gap-4 text-lg">
                <div className="bg-white/20 p-4 rounded-lg">
                  <div className="font-bold text-yellow-300">GRANT A FONDO PERDUTO</div>
                  <div className="text-2xl font-bold">Fino a 2,5 Milioni €</div>
                  <div className="text-sm">70% dei costi - Zero da restituire</div>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <div className="font-bold text-yellow-300">EQUITY INVESTMENT UE</div>
                  <div className="text-2xl font-bold">Fino a 15 Milioni €</div>
                  <div className="text-sm">Partnership strategica europea</div>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <div className="font-bold text-yellow-300">BUDGET TOTALE 2025</div>
                  <div className="text-2xl font-bold">1,4 Miliardi €</div>
                  <div className="text-sm">4 programmi integrati</div>
                </div>
              </div>
            </div>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Il <strong>Consiglio Europeo per l'Innovazione (EIC)</strong> è il principale programma dell'Unione Europea che finanzia 
              le innovazioni in tutte le loro fasi di sviluppo, dalla ricerca scientifica iniziale fino alla conquista definitiva del mercato mondiale. 
              <strong> Noi di SolariX Business vi accompagniamo</strong> in questo ecosistema integrato composto da 4 strumenti distinti 
              ma complementari che guidano le aziende innovative dal laboratorio di ricerca universitario fino al successo commerciale su scala globale.
            </p>
          </div>

          {/* Panoramica Programmi */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <button
              onClick={() => toggleSection('panoramica')}
              className="w-full flex justify-between items-center text-left"
            >
              <h2 className="text-3xl font-bold text-purple-800">📋 I 4 Programmi EIC: Il Vostro Percorso di Crescita</h2>
              <span className="text-3xl text-purple-600">{expandedSection === 'panoramica' ? '−' : '+'}</span>
            </button>
            
            {expandedSection === 'panoramica' && (
              <div className="mt-6">
                <div className="bg-purple-50 p-6 rounded-xl mb-6">
                  <h3 className="text-2xl font-bold text-purple-800 mb-4">Panoramica Completa dei Programmi</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-purple-300">
                      <thead>
                        <tr className="bg-purple-600 text-white">
                          <th className="border border-purple-300 p-3 text-left">Programma</th>
                          <th className="border border-purple-300 p-3 text-left">Fase Innovazione</th>
                          <th className="border border-purple-300 p-3 text-left">Livello Tecnologico</th>
                          <th className="border border-purple-300 p-3 text-left">Budget 2025</th>
                          <th className="border border-purple-300 p-3 text-left">Chi Può Partecipare</th>
                          <th className="border border-purple-300 p-3 text-left">Finanziamento</th>
                          <th className="border border-purple-300 p-3 text-left">Durata</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white">
                          <td className="border border-purple-300 p-3 font-bold text-purple-700">EIC Pathfinder</td>
                          <td className="border border-purple-300 p-3">Ricerca scientifica rivoluzionaria</td>
                          <td className="border border-purple-300 p-3">Idea iniziale (1-4)</td>
                          <td className="border border-purple-300 p-3 font-bold">262 milioni €</td>
                          <td className="border border-purple-300 p-3">Università, centri ricerca</td>
                          <td className="border border-purple-300 p-3 text-green-600 font-bold">Contributi fino a 4 milioni € a fondo perduto</td>
                          <td className="border border-purple-300 p-3">3-4 anni</td>
                        </tr>
                        <tr className="bg-purple-50">
                          <td className="border border-purple-300 p-3 font-bold text-purple-700">EIC Transition</td>
                          <td className="border border-purple-300 p-3">Ponte ricerca-business</td>
                          <td className="border border-purple-300 p-3">Sviluppo iniziale (4-6)</td>
                          <td className="border border-purple-300 p-3 font-bold">98 milioni €</td>
                          <td className="border border-purple-300 p-3">Team ricercatori-imprenditori</td>
                          <td className="border border-purple-300 p-3 text-green-600 font-bold">Contributi fino a 2,5 milioni € a fondo perduto</td>
                          <td className="border border-purple-300 p-3">2-3 anni</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border border-purple-300 p-3 font-bold text-purple-700">EIC Accelerator</td>
                          <td className="border border-purple-300 p-3">Commercializzazione</td>
                          <td className="border border-purple-300 p-3">Prototipo commerciale (6-8)</td>
                          <td className="border border-purple-300 p-3 font-bold">634 milioni €</td>
                          <td className="border border-purple-300 p-3">PMI innovative, startup</td>
                          <td className="border border-purple-300 p-3 text-green-600 font-bold">2,5 milioni € a fondo perduto + 15 milioni € investimenti</td>
                          <td className="border border-purple-300 p-3">1-2 anni</td>
                        </tr>
                        <tr className="bg-purple-50">
                          <td className="border border-purple-300 p-3 font-bold text-purple-700">STEP Scale-up</td>
                          <td className="border border-purple-300 p-3">Leadership mercato</td>
                          <td className="border border-purple-300 p-3">Prodotto validato (8-9)</td>
                          <td className="border border-purple-300 p-3 font-bold">300 milioni €</td>
                          <td className="border border-purple-300 p-3">Aziende in crescita rapida</td>
                          <td className="border border-purple-300 p-3 text-green-600 font-bold">Investimenti da 10 a 30 milioni €</td>
                          <td className="border border-purple-300 p-3">3-5 anni</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-green-800 mb-3">🎯 Logica Strategica dell'Ecosistema</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Ogni programma è progettato specificamente per preparare e alimentare il successivo, creando un percorso continuo e strutturato 
                    che porta la vostra innovazione dall'idea rivoluzionaria iniziale fino al successo commerciale globale. 
                    Questo approccio elimina il tradizionale "salto nel vuoto" che spesso caratterizza il passaggio dalla ricerca al mercato.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Struttura Grant + Equity */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <button
              onClick={() => toggleSection('struttura')}
              className="w-full flex justify-between items-center text-left"
            >
              <h2 className="text-3xl font-bold text-purple-800">💰 Struttura Innovativa Grant + Equity</h2>
              <span className="text-3xl text-purple-600">{expandedSection === 'struttura' ? '−' : '+'}</span>
            </button>
            
            {expandedSection === 'struttura' && (
              <div className="mt-6">
                <div className="bg-yellow-50 p-6 rounded-xl mb-6">
                  <h3 className="text-2xl font-bold text-yellow-800 mb-4">Caratteristica unica dell'EIC</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Il finanziamento combina contributi a fondo perduto con investimenti diretti dell'UE nella vostra azienda, 
                    creando un pacchetto finanziario unico nel panorama europeo.
                  </p>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-yellow-400">
                      <thead>
                        <tr className="bg-yellow-600 text-white">
                          <th className="border border-yellow-400 p-3 text-left">Componente</th>
                          <th className="border border-yellow-400 p-3 text-left">Importo</th>
                          <th className="border border-yellow-400 p-3 text-left">Natura</th>
                          <th className="border border-yellow-400 p-3 text-left">Caratteristiche</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white">
                          <td className="border border-yellow-400 p-3 font-bold text-yellow-700">Grant (Contributo)</td>
                          <td className="border border-yellow-400 p-3 font-bold text-green-600">Fino a 2,5 milioni € a fondo perduto</td>
                          <td className="border border-yellow-400 p-3">Zero da restituire</td>
                          <td className="border border-yellow-400 p-3">Copre sviluppo tecnologico, validazione, team</td>
                        </tr>
                        <tr className="bg-yellow-50">
                          <td className="border border-yellow-400 p-3 font-bold text-yellow-700">Equity (Investimento)</td>
                          <td className="border border-yellow-400 p-3 font-bold text-blue-600">Fino a 15 milioni € investimenti</td>
                          <td className="border border-yellow-400 p-3">Partnership azionaria</td>
                          <td className="border border-yellow-400 p-3">L'UE diventa socio di minoranza (5-20%)</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border border-yellow-400 p-3 font-bold text-yellow-700">Vostro Co-finanziamento</td>
                          <td className="border border-yellow-400 p-3 font-bold">Minimo 30%</td>
                          <td className="border border-yellow-400 p-3">Vostro impegno</td>
                          <td className="border border-yellow-400 p-3">Dimostra commitment e condivisione rischi</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-green-800 mb-3">🛡️ Vantaggio "Rischio Zero"</h4>
                  <p className="text-gray-700 leading-relaxed">
                    I contributi a fondo perduto <strong>non devono mai essere restituiti</strong>, indipendentemente da successo o fallimento del progetto. 
                    Elimina completamente il rischio finanziario tipico dei prestiti e permette concentrazione totale su innovazione.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Calendario Strategico */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <button
              onClick={() => toggleSection('calendario')}
              className="w-full flex justify-between items-center text-left"
            >
              <h2 className="text-3xl font-bold text-purple-800">📅 Calendario Strategico 2025-2030: Le Vostre Finestre di Opportunità</h2>
              <span className="text-3xl text-purple-600">{expandedSection === 'calendario' ? '−' : '+'}</span>
            </button>
            
            {expandedSection === 'calendario' && (
              <div className="mt-6">
                <div className="bg-blue-50 p-6 rounded-xl mb-6">
                  <h3 className="text-2xl font-bold text-blue-800 mb-4">Scadenze Immediate e Future</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Noi di SolariX Business monitoriamo tutte le finestre strategiche per le vostre decisioni di investimento:
                  </p>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-blue-300">
                      <thead>
                        <tr className="bg-blue-600 text-white">
                          <th className="border border-blue-300 p-3 text-left">Call</th>
                          <th className="border border-blue-300 p-3 text-left">Apertura</th>
                          <th className="border border-blue-300 p-3 text-left">Scadenza</th>
                          <th className="border border-blue-300 p-3 text-left">Budget</th>
                          <th className="border border-blue-300 p-3 text-left">Focus Settoriale</th>
                          <th className="border border-blue-300 p-3 text-left">Nostro Supporto</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white">
                          <td className="border border-blue-300 p-3 font-bold text-blue-700">Scadenza 1/2025</td>
                          <td className="border border-blue-300 p-3">Sempre aperta</td>
                          <td className="border border-blue-300 p-3 font-bold text-red-600">12 marzo 2025</td>
                          <td className="border border-blue-300 p-3 font-bold">300 milioni €</td>
                          <td className="border border-blue-300 p-3">Tutti i settori + 5 sfide specifiche</td>
                          <td className="border border-blue-300 p-3 text-green-600">Preparazione intensiva</td>
                        </tr>
                        <tr className="bg-blue-50">
                          <td className="border border-blue-300 p-3 font-bold text-blue-700">Scadenza 2/2025</td>
                          <td className="border border-blue-300 p-3">Sempre aperta</td>
                          <td className="border border-blue-300 p-3 font-bold text-red-600">1 ottobre 2025</td>
                          <td className="border border-blue-300 p-3 font-bold">334 milioni €</td>
                          <td className="border border-blue-300 p-3">Tutti i settori + 5 sfide specifiche</td>
                          <td className="border border-blue-300 p-3 text-green-600">Strategia a lungo termine</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border border-blue-300 p-3 font-bold text-blue-700">Sfide Speciali 2025</td>
                          <td className="border border-blue-300 p-3">Date variabili</td>
                          <td className="border border-blue-300 p-3">Durante l'anno</td>
                          <td className="border border-blue-300 p-3 font-bold">250 milioni € dedicati</td>
                          <td className="border border-blue-300 p-3">5 settori strategici specifici</td>
                          <td className="border border-blue-300 p-3 text-green-600">Consulenza specializzata</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-green-800 mb-3">🎯 Le 5 Sfide Strategiche 2025</h4>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                      <h5 className="font-bold text-green-700">1. Transizione Energetica Pulita - La Vostra Opportunità Principale</h5>
                      <p className="text-gray-700 mt-2">
                        Perfettamente allineata con le vostre competenze, cerca tecnologie rivoluzionarie per accelerare drasticamente 
                        la decarbonizzazione del sistema energetico europeo. <strong>Budget dedicato: 80 milioni di euro per il 2025.</strong>
                      </p>
                      <ul className="mt-3 text-sm text-gray-600 list-disc list-inside">
                        <li>Energia solare di nuova generazione (celle perovskite, fotovoltaico organico)</li>
                        <li>Sistemi di accumulo rivoluzionari (batterie solid-state, accumulo termico)</li>
                        <li>Integrazione intelligente delle rinnovabili nella rete elettrica</li>
                        <li>Tecnologie per l'efficienza energetica estrema degli edifici</li>
                        <li>Sistemi per elettrificazione dei trasporti</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                      <h5 className="font-bold text-blue-700">2. Trasformazione Digitale per l'Industria</h5>
                      <p className="text-gray-700 mt-2">
                        Intelligenza artificiale applicata all'industria, automazione avanzata per la manifattura sostenibile, 
                        sistemi cyber-fisici per l'efficienza energetica. <strong>Budget: 60 milioni di euro.</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Progetti Portfolio */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <button
              onClick={() => toggleSection('progetti')}
              className="w-full flex justify-between items-center text-left"
            >
              <h2 className="text-3xl font-bold text-purple-800">🚀 Progetti che Possiamo Sviluppare per Voi</h2>
              <span className="text-3xl text-purple-600">{expandedSection === 'progetti' ? '−' : '+'}</span>
            </button>
            
            {expandedSection === 'progetti' && (
              <div className="mt-6">
                <div className="bg-purple-50 p-6 rounded-xl mb-6">
                  <h3 className="text-2xl font-bold text-purple-800 mb-4">Portfolio Strategico SolariX Business</h3>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-purple-300">
                      <thead>
                        <tr className="bg-purple-600 text-white">
                          <th className="border border-purple-300 p-3 text-left">Progetto</th>
                          <th className="border border-purple-300 p-3 text-left">Budget Totale</th>
                          <th className="border border-purple-300 p-3 text-left">Contributo UE a Fondo Perduto</th>
                          <th className="border border-purple-300 p-3 text-left">Investimenti UE</th>
                          <th className="border border-purple-300 p-3 text-left">Vostro Investimento</th>
                          <th className="border border-purple-300 p-3 text-left">Durata</th>
                          <th className="border border-purple-300 p-3 text-left">Settore</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white">
                          <td className="border border-purple-300 p-3 font-bold text-purple-700">ThermoAI Smart</td>
                          <td className="border border-purple-300 p-3 font-bold">3.500.000 €</td>
                          <td className="border border-purple-300 p-3 text-green-600 font-bold">2.450.000 € a fondo perduto</td>
                          <td className="border border-purple-300 p-3 text-blue-600 font-bold">1.000.000 €</td>
                          <td className="border border-purple-300 p-3">1.050.000 €</td>
                          <td className="border border-purple-300 p-3">2,5 anni</td>
                          <td className="border border-purple-300 p-3">AI + Termico</td>
                        </tr>
                        <tr className="bg-purple-50">
                          <td className="border border-purple-300 p-3 font-bold text-purple-700">SolarFlex</td>
                          <td className="border border-purple-300 p-3 font-bold">2.200.000 €</td>
                          <td className="border border-purple-300 p-3 text-green-600 font-bold">1.540.000 € a fondo perduto</td>
                          <td className="border border-purple-300 p-3">0 €</td>
                          <td className="border border-purple-300 p-3">660.000 €</td>
                          <td className="border border-purple-300 p-3">2 anni</td>
                          <td className="border border-purple-300 p-3">Fotovoltaico</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border border-purple-300 p-3 font-bold text-purple-700">CobotGreen</td>
                          <td className="border border-purple-300 p-3 font-bold">4.000.000 €</td>
                          <td className="border border-purple-300 p-3 text-green-600 font-bold">2.500.000 € a fondo perduto</td>
                          <td className="border border-purple-300 p-3 text-blue-600 font-bold">1.500.000 €</td>
                          <td className="border border-purple-300 p-3">1.500.000 €</td>
                          <td className="border border-purple-300 p-3">3 anni</td>
                          <td className="border border-purple-300 p-3">Robot + Energia</td>
                        </tr>
                        <tr className="bg-purple-50">
                          <td className="border border-purple-300 p-3 font-bold text-purple-700">CommunityMesh</td>
                          <td className="border border-purple-300 p-3 font-bold">2.800.000 €</td>
                          <td className="border border-purple-300 p-3 text-green-600 font-bold">1.960.000 € a fondo perduto</td>
                          <td className="border border-purple-300 p-3 text-blue-600 font-bold">800.000 €</td>
                          <td className="border border-purple-300 p-3">840.000 €</td>
                          <td className="border border-purple-300 p-3">2,5 anni</td>
                          <td className="border border-purple-300 p-3">Comunità + Digitale</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* WhatsApp CTA */}
          <div className="text-center mt-12">
            <div className="bg-green-50 p-8 rounded-2xl border-2 border-green-200">
              <h3 className="text-2xl font-bold text-green-800 mb-4">
                🚀 Trasforma la Tua Azienda con i Finanziamenti EIC
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Contattaci per una <strong>consulenza personalizzata gratuita</strong> sui finanziamenti EIC. 
                Ti aiutiamo a ottenere fino a <strong>17,5 milioni € tra grant e equity</strong> per le tue innovazioni rivoluzionarie.
              </p>
              <a
                href="https://wa.me/393470087833?text=Ciao%20SolariX%20Business%2C%20sono%20interessato%20ai%20finanziamenti%20EIC%20per%20tecnologie%20innovative.%20Vorrei%20una%20consulenza%20personalizzata."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Consulenza Gratuita WhatsApp
              </a>
              <p className="text-sm text-gray-600 mt-4">
                📱 <strong>347 008 7833</strong> - Rispondiamo entro 2 ore lavorative
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
