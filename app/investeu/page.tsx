'use client'

import { useState } from 'react'
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'
import SeoHead from '@/components/SeoHead/SeoHead'

export default function InvestEUPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <>
      <SeoHead 
        title="InvestEU - Garanzie Finanziarie Europee | Tassi Agevolati 2-3% | SolariX Business"
        description="InvestEU: garanzie UE fino all'80% per investimenti sostenibili. Tassi ridotti 2-3%, finanziamenti 1-100 milioni €. Progetti green, innovazione, PMI. Consulenza specializzata SolariX Business."
        keywords="InvestEU, garanzie finanziarie UE, tassi agevolati, investimenti sostenibili, progetti green, finanziamenti europei, BEI, prestiti agevolati"
        canonicalUrl="https://solarixbusiness.it/investeu"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs 
            items={[
              { label: 'Home', path: '/' },
              { label: 'Bandi Europei', path: '/bandi-europei' },
              { label: 'InvestEU - Garanzie Finanziarie Europee', path: '/investeu' }
            ]} 
          />

          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mb-6">
              InvestEU - Garanzie Finanziarie Europee
            </h1>
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6 rounded-2xl shadow-xl mb-8">
              <h2 className="text-3xl font-bold mb-4">💰 GARANZIE UE FINO ALL'80% - TASSI RIDOTTI 2-3%</h2>
              <div className="grid md:grid-cols-3 gap-4 text-lg">
                <div className="bg-white/20 p-4 rounded-lg">
                  <div className="font-bold text-yellow-300">GARANZIE EUROPEE</div>
                  <div className="text-2xl font-bold">Fino all'80%</div>
                  <div className="text-sm">Riduzione rischio per banche</div>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <div className="font-bold text-yellow-300">TASSI AGEVOLATI</div>
                  <div className="text-2xl font-bold">2-3% vs Mercato</div>
                  <div className="text-sm">Risparmio significativo</div>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <div className="font-bold text-yellow-300">BUDGET TOTALE</div>
                  <div className="text-2xl font-bold">26,2 Miliardi €</div>
                  <div className="text-sm">Mobilita 372 miliardi €</div>
                </div>
              </div>
            </div>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              <strong>InvestEU</strong> è il principale programma dell'Unione Europea per stimolare investimenti sostenibili e strategici, 
              rappresentando una vera rivoluzione nel modo in cui l'UE supporta progetti di crescita verde, innovazione tecnologica, 
              e inclusione sociale. <strong>Noi di SolariX Business vi guidiamo</strong> in questo sistema innovativo di garanzie finanziarie 
              che mobilita capitali privati riducendo drasticamente rischi e costi per i vostri investimenti.
            </p>
          </div>

          {/* I 4 Pilastri Strategici */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <button
              onClick={() => toggleSection('pilastri')}
              className="w-full flex justify-between items-center text-left"
            >
              <h2 className="text-3xl font-bold text-emerald-800">🏛️ I 4 Pilastri Strategici: Le Vostre Opportunità di Investimento</h2>
              <span className="text-3xl text-emerald-600">{expandedSection === 'pilastri' ? '−' : '+'}</span>
            </button>
            
            {expandedSection === 'pilastri' && (
              <div className="mt-6">
                <div className="bg-emerald-50 p-6 rounded-xl mb-6">
                  <h3 className="text-2xl font-bold text-emerald-800 mb-4">Panoramica Completa dei Pilastri</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-emerald-300">
                      <thead>
                        <tr className="bg-emerald-600 text-white">
                          <th className="border border-emerald-300 p-3 text-left">Pilastro</th>
                          <th className="border border-emerald-300 p-3 text-left">Focus Strategico</th>
                          <th className="border border-emerald-300 p-3 text-left">Budget 2025</th>
                          <th className="border border-emerald-300 p-3 text-left">Target Beneficiari</th>
                          <th className="border border-emerald-300 p-3 text-left">Tipo Supporto</th>
                          <th className="border border-emerald-300 p-3 text-left">Durata</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white">
                          <td className="border border-emerald-300 p-3 font-bold text-emerald-700">Ricerca e Innovazione</td>
                          <td className="border border-emerald-300 p-3">Tecnologie innovative e R&amp;S</td>
                          <td className="border border-emerald-300 p-3 font-bold">2.000 milioni €</td>
                          <td className="border border-emerald-300 p-3">Startup, PMI, centri ricerca</td>
                          <td className="border border-emerald-300 p-3 text-green-600 font-bold">Garanzie per prestiti R&amp;D</td>
                          <td className="border border-emerald-300 p-3">2-5 anni</td>
                        </tr>
                        <tr className="bg-emerald-50">
                          <td className="border border-emerald-300 p-3 font-bold text-emerald-700">Investimenti Sostenibili</td>
                          <td className="border border-emerald-300 p-3">Progetti green e energia pulita</td>
                          <td className="border border-emerald-300 p-3 font-bold">8.000 milioni €</td>
                          <td className="border border-emerald-300 p-3">Imprese, enti pubblici</td>
                          <td className="border border-emerald-300 p-3 text-green-600 font-bold">Prestiti agevolati green</td>
                          <td className="border border-emerald-300 p-3">3-7 anni</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border border-emerald-300 p-3 font-bold text-emerald-700">Infrastrutture Sociali</td>
                          <td className="border border-emerald-300 p-3">Inclusione sociale, educazione</td>
                          <td className="border border-emerald-300 p-3 font-bold">3.000 milioni €</td>
                          <td className="border border-emerald-300 p-3">Organizzazioni sociali</td>
                          <td className="border border-emerald-300 p-3 text-green-600 font-bold">Garanzie investimenti sociali</td>
                          <td className="border border-emerald-300 p-3">2-4 anni</td>
                        </tr>
                        <tr className="bg-emerald-50">
                          <td className="border border-emerald-300 p-3 font-bold text-emerald-700">PMI e Mid-Cap</td>
                          <td className="border border-emerald-300 p-3">Crescita piccole e medie imprese</td>
                          <td className="border border-emerald-300 p-3 font-bold">4.000 milioni €</td>
                          <td className="border border-emerald-300 p-3">PMI in crescita</td>
                          <td className="border border-emerald-300 p-3 text-green-600 font-bold">Prestiti con tassi ridotti</td>
                          <td className="border border-emerald-300 p-3">1-3 anni</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="bg-teal-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-teal-800 mb-3">🎯 Investimenti Sostenibili: La Vostra Opportunità Principale</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Con un budget di <strong>8 miliardi di euro nel 2025</strong>, questo è il pilastro più rilevante e promettente per le vostre aziende. 
                    È specificamente progettato per supportare progetti che contribuiscono alla transizione energetica, alla decarbonizzazione, 
                    e al raggiungimento degli obiettivi del Green Deal europeo.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Impianti di energia rinnovabile:</strong> Fotovoltaico, eolico, idroelettrico con garanzie fino all'80%</li>
                    <li>• <strong>Sistemi di accumulo energetico:</strong> Batterie su larga scala, accumulo termico</li>
                    <li>• <strong>Efficientamento energetico industriale:</strong> Cogenerazione, recupero calore, automazione</li>
                    <li>• <strong>Comunità energetiche rinnovabili:</strong> Progetti multi-aziendali con gestione digitale</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Confronto Tassi di Interesse */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <button
              onClick={() => toggleSection('tassi')}
              className="w-full flex justify-between items-center text-left"
            >
              <h2 className="text-3xl font-bold text-emerald-800">📊 Confronto Tassi di Interesse</h2>
              <span className="text-3xl text-emerald-600">{expandedSection === 'tassi' ? '−' : '+'}</span>
            </button>
            
            {expandedSection === 'tassi' && (
              <div className="mt-6">
                <div className="bg-yellow-50 p-6 rounded-xl mb-6">
                  <h3 className="text-2xl font-bold text-yellow-800 mb-4">L'Europa riduce i vostri costi finanziari del 2-3%</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Le garanzie InvestEU permettono agli intermediari finanziari di offrire tassi di interesse significativamente ridotti rispetto al mercato. 
                    Con garanzie fino all'80% del rischio, le banche possono proporvi condizioni molto più vantaggiose per i vostri progetti strategici.
                  </p>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-yellow-400">
                      <thead>
                        <tr className="bg-yellow-600 text-white">
                          <th className="border border-yellow-400 p-3 text-left">Tipo Progetto</th>
                          <th className="border border-yellow-400 p-3 text-left">Tasso Mercato Standard</th>
                          <th className="border border-yellow-400 p-3 text-left">Tasso Agevolato InvestEU</th>
                          <th className="border border-yellow-400 p-3 text-left">Risparmio Annuale</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white">
                          <td className="border border-yellow-400 p-3 font-bold text-yellow-700">Fotovoltaico 10M€</td>
                          <td className="border border-yellow-400 p-3">5,0%</td>
                          <td className="border border-yellow-400 p-3 font-bold text-green-600">2,5%</td>
                          <td className="border border-yellow-400 p-3 font-bold text-green-600">250.000€</td>
                        </tr>
                        <tr className="bg-yellow-50">
                          <td className="border border-yellow-400 p-3 font-bold text-yellow-700">Efficientamento 5M€</td>
                          <td className="border border-yellow-400 p-3">4,5%</td>
                          <td className="border border-yellow-400 p-3 font-bold text-green-600">2,0%</td>
                          <td className="border border-yellow-400 p-3 font-bold text-green-600">125.000€</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border border-yellow-400 p-3 font-bold text-yellow-700">Comunità Energetica 20M€</td>
                          <td className="border border-yellow-400 p-3">5,5%</td>
                          <td className="border border-yellow-400 p-3 font-bold text-green-600">3,0%</td>
                          <td className="border border-yellow-400 p-3 font-bold text-green-600">500.000€</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-green-800 mb-3">✅ Caratteristiche delle Garanzie</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Garanzie fino all'80%</strong> del valore del prestito</li>
                    <li>• <strong>Accesso continuo</strong> senza scadenze fisse durante tutto l'anno</li>
                    <li>• <strong>Condizioni agevolate</strong> per progetti allineati alla sostenibilità</li>
                    <li>• <strong>Durata estesa</strong> fino a 15 anni per progetti infrastrutturali</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Esempi di Progetti Portfolio */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <button
              onClick={() => toggleSection('progetti')}
              className="w-full flex justify-between items-center text-left"
            >
              <h2 className="text-3xl font-bold text-emerald-800">🚀 Esempi di Progetti che Possiamo Realizzare per Voi</h2>
              <span className="text-3xl text-emerald-600">{expandedSection === 'progetti' ? '−' : '+'}</span>
            </button>
            
            {expandedSection === 'progetti' && (
              <div className="mt-6">
                <div className="bg-emerald-50 p-6 rounded-xl mb-6">
                  <h3 className="text-2xl font-bold text-emerald-800 mb-4">Portfolio Strategico SolariX Business</h3>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-emerald-300">
                      <thead>
                        <tr className="bg-emerald-600 text-white">
                          <th className="border border-emerald-300 p-3 text-left">Progetto</th>
                          <th className="border border-emerald-300 p-3 text-left">Budget Totale</th>
                          <th className="border border-emerald-300 p-3 text-left">Garanzia UE</th>
                          <th className="border border-emerald-300 p-3 text-left">Tasso Agevolato</th>
                          <th className="border border-emerald-300 p-3 text-left">Vostro Investimento</th>
                          <th className="border border-emerald-300 p-3 text-left">Risparmio Annuale</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white">
                          <td className="border border-emerald-300 p-3 font-bold text-emerald-700">Industrial Solar Plus</td>
                          <td className="border border-emerald-300 p-3 font-bold">15.000.000 €</td>
                          <td className="border border-emerald-300 p-3 text-blue-600 font-bold">80% (12M€)</td>
                          <td className="border border-emerald-300 p-3 text-green-600 font-bold">2,5% vs 5,0%</td>
                          <td className="border border-emerald-300 p-3">3.000.000 €</td>
                          <td className="border border-emerald-300 p-3 font-bold text-green-600">375.000€</td>
                        </tr>
                        <tr className="bg-emerald-50">
                          <td className="border border-emerald-300 p-3 font-bold text-emerald-700">Community Energy Networks</td>
                          <td className="border border-emerald-300 p-3 font-bold">25.000.000 €</td>
                          <td className="border border-emerald-300 p-3 text-blue-600 font-bold">80% (20M€)</td>
                          <td className="border border-emerald-300 p-3 text-green-600 font-bold">2,8% vs 5,2%</td>
                          <td className="border border-emerald-300 p-3">5.000.000 €</td>
                          <td className="border border-emerald-300 p-3 font-bold text-green-600">600.000€</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border border-emerald-300 p-3 font-bold text-emerald-700">Smart Efficiency Platform</td>
                          <td className="border border-emerald-300 p-3 font-bold">8.000.000 €</td>
                          <td className="border border-emerald-300 p-3 text-blue-600 font-bold">80% (6,4M€)</td>
                          <td className="border border-emerald-300 p-3 text-green-600 font-bold">2,2% vs 4,8%</td>
                          <td className="border border-emerald-300 p-3">1.600.000 €</td>
                          <td className="border border-emerald-300 p-3 font-bold text-green-600">208.000€</td>
                        </tr>
                        <tr className="bg-emerald-50">
                          <td className="border border-emerald-300 p-3 font-bold text-emerald-700">GreenBot Manufacturing</td>
                          <td className="border border-emerald-300 p-3 font-bold">12.000.000 €</td>
                          <td className="border border-emerald-300 p-3 text-blue-600 font-bold">80% (9,6M€)</td>
                          <td className="border border-emerald-300 p-3 text-green-600 font-bold">2,8% vs 5,5%</td>
                          <td className="border border-emerald-300 p-3">2.400.000 €</td>
                          <td className="border border-emerald-300 p-3 font-bold text-green-600">324.000€</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="bg-yellow-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-yellow-800 mb-3">🌟 Industrial Solar Plus: La Vostra Opportunità Principale</h4>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      <strong>Concept strategico:</strong> Programma per installazione di impianti fotovoltaici da 5-10 MW presso i vostri clienti industriali, 
                      integrati con sistemi di accumulo e gestione intelligente dei carichi.
                    </p>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-bold text-yellow-700 mb-2">Struttura finanziaria InvestEU:</h5>
                      <ul className="space-y-1 text-gray-700">
                        <li>• <strong>Garanzia 80%</strong> su prestito 15 milioni €</li>
                        <li>• <strong>Tasso agevolato 2,5%</strong> vs 5% mercato</li>
                        <li>• <strong>Durata 10 anni</strong> con piano di rimborso flessibile</li>
                        <li>• <strong>Risparmio:</strong> 375.000€ annui sui costi finanziari</li>
                        <li>• <strong>Target:</strong> 10-15 aziende manifatturiere del Nord Italia con consumi &gt;2 GWh/anno</li>
                        <li>• <strong>ROI migliorato:</strong> 6-7 anni invece di 9-10 anni senza agevolazioni</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Timeline Completa */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <button
              onClick={() => toggleSection('timeline')}
              className="w-full flex justify-between items-center text-left"
            >
              <h2 className="text-3xl font-bold text-emerald-800">⏱️ Timeline Completa che Monitoriamo</h2>
              <span className="text-3xl text-emerald-600">{expandedSection === 'timeline' ? '−' : '+'}</span>
            </button>
            
            {expandedSection === 'timeline' && (
              <div className="mt-6">
                <div className="bg-orange-50 p-6 rounded-xl mb-6">
                  <h3 className="text-2xl font-bold text-orange-800 mb-4">Il Nostro Processo Professionale</h3>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-orange-300">
                      <thead>
                        <tr className="bg-orange-600 text-white">
                          <th className="border border-orange-300 p-3 text-left">Fase</th>
                          <th className="border border-orange-300 p-3 text-left">Tempistica</th>
                          <th className="border border-orange-300 p-3 text-left">Attività</th>
                          <th className="border border-orange-300 p-3 text-left">Nostro Supporto</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white">
                          <td className="border border-orange-300 p-3 font-bold text-orange-700">Preparazione</td>
                          <td className="border border-orange-300 p-3">2-4 settimane</td>
                          <td className="border border-orange-300 p-3">Valutazione e documentazione</td>
                          <td className="border border-orange-300 p-3 text-green-600">Analisi strategica completa</td>
                        </tr>
                        <tr className="bg-orange-50">
                          <td className="border border-orange-300 p-3 font-bold text-orange-700">Presentazione</td>
                          <td className="border border-orange-300 p-3">1-2 settimane</td>
                          <td className="border border-orange-300 p-3">Submission all'intermediario</td>
                          <td className="border border-orange-300 p-3 text-green-600">Presentazione professionale</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border border-orange-300 p-3 font-bold text-orange-700">Due Diligence</td>
                          <td className="border border-orange-300 p-3">6-8 settimane</td>
                          <td className="border border-orange-300 p-3">Verifica tecnica e finanziaria</td>
                          <td className="border border-orange-300 p-3 text-green-600">Assistenza specializzata</td>
                        </tr>
                        <tr className="bg-orange-50">
                          <td className="border border-orange-300 p-3 font-bold text-orange-700">Approvazione</td>
                          <td className="border border-orange-300 p-3">2-4 settimane</td>
                          <td className="border border-orange-300 p-3">Decisione finale</td>
                          <td className="border border-orange-300 p-3 text-green-600">Supporto negoziale</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border border-orange-300 p-3 font-bold text-orange-700">Contratto</td>
                          <td className="border border-orange-300 p-3">2-3 settimane</td>
                          <td className="border border-orange-300 p-3">Definizione termini finali</td>
                          <td className="border border-orange-300 p-3 text-green-600">Assistenza legale</td>
                        </tr>
                        <tr className="bg-orange-50">
                          <td className="border border-orange-300 p-3 font-bold text-orange-700">Erogazione</td>
                          <td className="border border-orange-300 p-3">1-2 settimane</td>
                          <td className="border border-orange-300 p-3">Prima tranche fondi</td>
                          <td className="border border-orange-300 p-3 text-green-600">Setup progetto</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="mt-4 p-4 bg-orange-100 rounded-lg">
                    <p className="font-bold text-orange-800">Durata totale: 4-6 mesi dalla preparazione alla prima erogazione</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Confronto InvestEU vs Altri Strumenti */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <button
              onClick={() => toggleSection('confronto')}
              className="w-full flex justify-between items-center text-left"
            >
              <h2 className="text-3xl font-bold text-emerald-800">⚖️ Confronto InvestEU vs Altri Strumenti Finanziari</h2>
              <span className="text-3xl text-emerald-600">{expandedSection === 'confronto' ? '−' : '+'}</span>
            </button>
            
            {expandedSection === 'confronto' && (
              <div className="mt-6">
                <div className="bg-indigo-50 p-6 rounded-xl mb-6">
                  <h3 className="text-2xl font-bold text-indigo-800 mb-4">La nostra analisi per ottimizzare la vostra strategia finanziaria</h3>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-indigo-300">
                      <thead>
                        <tr className="bg-indigo-600 text-white">
                          <th className="border border-indigo-300 p-3 text-left">Strumento</th>
                          <th className="border border-indigo-300 p-3 text-left">Tassi Interesse</th>
                          <th className="border border-indigo-300 p-3 text-left">Importi</th>
                          <th className="border border-indigo-300 p-3 text-left">Tempi</th>
                          <th className="border border-indigo-300 p-3 text-left">Garanzie</th>
                          <th className="border border-indigo-300 p-3 text-left">Nostro Consiglio</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white">
                          <td className="border border-indigo-300 p-3 font-bold text-indigo-700">InvestEU</td>
                          <td className="border border-indigo-300 p-3 font-bold text-green-600">2-3% (agevolato)</td>
                          <td className="border border-indigo-300 p-3">1M€ - 100M€</td>
                          <td className="border border-indigo-300 p-3">4-6 mesi</td>
                          <td className="border border-indigo-300 p-3">Ridotte (garanzia UE)</td>
                          <td className="border border-indigo-300 p-3 text-green-600 font-bold">Progetti strategici sostenibili</td>
                        </tr>
                        <tr className="bg-indigo-50">
                          <td className="border border-indigo-300 p-3 font-bold text-indigo-700">Bancario Tradizionale</td>
                          <td className="border border-indigo-300 p-3">4-6% (mercato)</td>
                          <td className="border border-indigo-300 p-3">Limitato da rating</td>
                          <td className="border border-indigo-300 p-3">2-3 mesi</td>
                          <td className="border border-indigo-300 p-3">Elevate</td>
                          <td className="border border-indigo-300 p-3">Capitale circolante</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border border-indigo-300 p-3 font-bold text-indigo-700">PNRR/Fondi UE</td>
                          <td className="border border-indigo-300 p-3 font-bold text-green-600">0% (fondo perduto)</td>
                          <td className="border border-indigo-300 p-3">500K€ - 50M€</td>
                          <td className="border border-indigo-300 p-3">8-12 mesi</td>
                          <td className="border border-indigo-300 p-3">Minime</td>
                          <td className="border border-indigo-300 p-3">Componenti innovative</td>
                        </tr>
                        <tr className="bg-indigo-50">
                          <td className="border border-indigo-300 p-3 font-bold text-indigo-700">Leasing Operativo</td>
                          <td className="border border-indigo-300 p-3">3-5% (variabile)</td>
                          <td className="border border-indigo-300 p-3">Attrezzature</td>
                          <td className="border border-indigo-300 p-3">1-2 mesi</td>
                          <td className="border border-indigo-300 p-3">Moderate</td>
                          <td className="border border-indigo-300 p-3">Macchinari specifici</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Errori che Vi Evitiamo */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <button
              onClick={() => toggleSection('errori')}
              className="w-full flex justify-between items-center text-left"
            >
              <h2 className="text-3xl font-bold text-emerald-800">⚠️ Errori che Vi Evitiamo</h2>
              <span className="text-3xl text-emerald-600">{expandedSection === 'errori' ? '−' : '+'}</span>
            </button>
            
            {expandedSection === 'errori' && (
              <div className="mt-6">
                <div className="bg-red-50 p-6 rounded-xl mb-6">
                  <h3 className="text-2xl font-bold text-red-800 mb-4">Come SolariX Business Previene i Problemi Comuni</h3>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-red-300">
                      <thead>
                        <tr className="bg-red-600 text-white">
                          <th className="border border-red-300 p-3 text-left">Errore Critico</th>
                          <th className="border border-red-300 p-3 text-left">Impatto</th>
                          <th className="border border-red-300 p-3 text-left">Nostra Soluzione</th>
                          <th className="border border-red-300 p-3 text-left">Successo %</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white">
                          <td className="border border-red-300 p-3 font-bold text-red-700">Non allineamento tassonomia UE</td>
                          <td className="border border-red-300 p-3">Blocco immediato</td>
                          <td className="border border-red-300 p-3 text-green-600">Assessment professionale pre-candidatura</td>
                          <td className="border border-red-300 p-3 font-bold text-green-600">90%</td>
                        </tr>
                        <tr className="bg-red-50">
                          <td className="border border-red-300 p-3 font-bold text-red-700">Budget irrealistici</td>
                          <td className="border border-red-300 p-3">Perdita credibilità</td>
                          <td className="border border-red-300 p-3 text-green-600">Benchmark settore + buffer 15%</td>
                          <td className="border border-red-300 p-3 font-bold text-green-600">75%</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border border-red-300 p-3 font-bold text-red-700">Documentazione incompleta</td>
                          <td className="border border-red-300 p-3">Ritardi/rifiuto</td>
                          <td className="border border-red-300 p-3 text-green-600">Checklist completa + peer review</td>
                          <td className="border border-red-300 p-3 font-bold text-green-600">60%</td>
                        </tr>
                        <tr className="bg-red-50">
                          <td className="border border-red-300 p-3 font-bold text-red-700">Intermediario sbagliato</td>
                          <td className="border border-red-300 p-3">Processo rallentato</td>
                          <td className="border border-red-300 p-3 text-green-600">Ricerca specializzazioni specifiche</td>
                          <td className="border border-red-300 p-3 font-bold text-green-600">30%</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border border-red-300 p-3 font-bold text-red-700">Co-finanziamento non garantito</td>
                          <td className="border border-red-300 p-3">Blocco processo</td>
                          <td className="border border-red-300 p-3 text-green-600">Securing fondi prima candidatura</td>
                          <td className="border border-red-300 p-3 font-bold text-green-600">80%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Strategia 2025-2027 */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <button
              onClick={() => toggleSection('strategia')}
              className="w-full flex justify-between items-center text-left"
            >
              <h2 className="text-3xl font-bold text-emerald-800">🎯 La Nostra Strategia Specifica per Voi (2025-2027)</h2>
              <span className="text-3xl text-emerald-600">{expandedSection === 'strategia' ? '−' : '+'}</span>
            </button>
            
            {expandedSection === 'strategia' && (
              <div className="mt-6">
                <div className="bg-purple-50 p-6 rounded-xl mb-6">
                  <h3 className="text-2xl font-bold text-purple-800 mb-4">Roadmap SolariX Business per InvestEU</h3>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-purple-300">
                      <thead>
                        <tr className="bg-purple-600 text-white">
                          <th className="border border-purple-300 p-3 text-left">Anno</th>
                          <th className="border border-purple-300 p-3 text-left">Obiettivo</th>
                          <th className="border border-purple-300 p-3 text-left">Progetto Target</th>
                          <th className="border border-purple-300 p-3 text-left">Budget</th>
                          <th className="border border-purple-300 p-3 text-left">Vostro Vantaggio</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white">
                          <td className="border border-purple-300 p-3 font-bold text-purple-700">2025</td>
                          <td className="border border-purple-300 p-3">Preparazione e primo progetto</td>
                          <td className="border border-purple-300 p-3 font-bold">Industrial Solar Plus</td>
                          <td className="border border-purple-300 p-3 font-bold">15 milioni €</td>
                          <td className="border border-purple-300 p-3 text-green-600">Tassi agevolati</td>
                        </tr>
                        <tr className="bg-purple-50">
                          <td className="border border-purple-300 p-3 font-bold text-purple-700">2026</td>
                          <td className="border border-purple-300 p-3">Scaling e diversificazione</td>
                          <td className="border border-purple-300 p-3 font-bold">Community Energy Networks</td>
                          <td className="border border-purple-300 p-3 font-bold">25 milioni €</td>
                          <td className="border border-purple-300 p-3 text-green-600">Portfolio progetti</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border border-purple-300 p-3 font-bold text-purple-700">2027</td>
                          <td className="border border-purple-300 p-3">Leadership e innovazione</td>
                          <td className="border border-purple-300 p-3 font-bold">Smart Efficiency Platform</td>
                          <td className="border border-purple-300 p-3 font-bold">40 milioni €</td>
                          <td className="border border-purple-300 p-3 text-green-600">Leader settore</td>
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
                💰 Trasforma i Tuoi Investimenti con InvestEU
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Contattaci per una <strong>consulenza personalizzata gratuita</strong> sui finanziamenti InvestEU. 
                Ti aiutiamo a ottenere <strong>garanzie fino all'80% e tassi ridotti del 2-3%</strong> per i tuoi progetti sostenibili.
              </p>
              <a
                href="https://wa.me/393470087833?text=Ciao%20SolariX%20Business%2C%20sono%20interessato%20ai%20finanziamenti%20InvestEU%20per%20investimenti%20sostenibili.%20Vorrei%20una%20consulenza%20personalizzata."
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
