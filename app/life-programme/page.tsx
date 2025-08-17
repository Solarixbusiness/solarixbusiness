'use client'

import { useState } from 'react'

export default function LifeProgrammePage() {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({})

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            LIFE PROGRAMME
          </h1>
          <p className="text-xl md:text-2xl text-center opacity-90 max-w-4xl mx-auto">
            Clean Energy Transition: La Nostra Guida Completa per la Vostra Transizione Energetica
          </p>
          <p className="text-lg text-center mt-4 opacity-80">
            <strong>🎯 FINANZIAMENTI A FONDO PERDUTO 60% - FINESTRE APERTE FINO AL 2030+</strong>
          </p>
          <p className="text-md text-center mt-2 opacity-90">
            Noi di Solarix Business Vi Accompagniamo nei Finanziamenti Europei LIFE
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Introduzione */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection('introduzione')}
            >
              <h2 className="text-2xl font-bold text-green-700">Introduzione al LIFE Programme</h2>
              <span className="text-2xl text-green-600">
                {openSections['introduzione'] ? '−' : '+'}
              </span>
            </div>
            
            {openSections['introduzione'] && (
              <div className="mt-6 space-y-4 text-gray-700">
                <p>
                  Il programma europeo LIFE, nella sezione dedicata alla transizione energetica pulita, rappresenta un'opportunità straordinaria che noi di Solarix Business mettiamo a disposizione dei nostri clienti per crescere attraverso finanziamenti europei a fondo perduto. Vi aiutiamo a sviluppare progetti su risparmio energetico, riscaldamento efficiente, comunità energetiche rinnovabili, tecnologie digitali e robotica, costruendo insieme percorsi di crescita ambiziosi senza dipendere dagli incentivi statali.
                </p>
                <p>
                  <strong>Cosa finanzia il bando LIFE:</strong> Il programma LIFE per la transizione energetica è un finanziamento europeo che sostiene progetti per passare all'energia pulita: miglioramento dell'efficienza energetica, energie rinnovabili, comunità energetiche e innovazione nel riscaldamento e nel digitale. Supporta le vostre azioni pratiche per ridurre consumi ed emissioni, con focus su risultati misurabili, senza richiedere necessariamente tecnologie super-avanzate.
                </p>
                <p>
                  <strong>A chi è rivolto:</strong> Aperto a imprese (piccole e medie incluse), enti pubblici (statali, regionali, comunali), organizzazioni non profit, università e associazioni di paesi europei. Il grande vantaggio: non serve formare gruppi obbligatori (si può candidare anche da soli), ideale per i nostri clienti come fabbriche, comunità locali o aziende innovative.
                </p>
                <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-lg border-l-4 border-green-500">
                  <h4 className="text-lg font-bold text-green-800 mb-3">🚀 OPPORTUNITÀ CONTINUE - NON PERDETE IL TRENO!</h4>
                  <p className="mb-3"><strong>📅 Finestre 2025:</strong> Scadenza <strong className="text-red-600">23 settembre 2025</strong> per progetti standard</p>
                  <p className="mb-3"><strong>📅 Finestre 2026-2030:</strong> Il programma LIFE continua con <strong className="text-green-600">nuove finestre ogni anno</strong> fino al 2030 e oltre</p>
                  <p className="mb-3"><strong>💰 FONDO PERDUTO GARANTITO:</strong> <span className="bg-green-200 px-2 py-1 rounded font-bold text-green-800">60% del budget totale NON si restituisce mai</span></p>
                  <p><strong>🎯 La nostra strategia:</strong> Se non riuscite nel 2025, vi prepariamo per le finestre 2026, 2027, 2028... fino al successo!</p>
                </div>
              </div>
            )}
          </div>

          {/* Quadro Completo dei Finanziamenti */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection('quadro-finanziamenti')}
            >
              <h2 className="text-2xl font-bold text-green-700">💰 FINANZIAMENTI A FONDO PERDUTO - Mai da Restituire!</h2>
              <span className="text-2xl text-green-600">
                {openSections['quadro-finanziamenti'] ? '−' : '+'}
              </span>
            </div>
            
            {openSections['quadro-finanziamenti'] && (
              <div className="mt-6">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-green-100">
                        <th className="border border-gray-300 p-3 text-left font-bold">Tipo Progetto</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Contributo a Fondo Perduto</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Durata</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Budget Massimo</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Settori Coperti</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-green-50">
                        <td className="border border-gray-300 p-3 font-semibold">Progetti Standard Transizione Energetica</td>
                        <td className="border border-gray-300 p-3"><strong className="text-green-600">60% a fondo perduto</strong></td>
                        <td className="border border-gray-300 p-3">2-5 anni</td>
                        <td className="border border-gray-300 p-3"><strong className="text-blue-600">4 milioni €</strong></td>
                        <td className="border border-gray-300 p-3">Efficienza energetica, rinnovabili, digitale</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-semibold">Azioni di Coordinamento e Supporto</td>
                        <td className="border border-gray-300 p-3"><strong className="text-green-600">60% a fondo perduto</strong></td>
                        <td className="border border-gray-300 p-3">2-3 anni</td>
                        <td className="border border-gray-300 p-3">Variabile</td>
                        <td className="border border-gray-300 p-3">Formazione, networking, policy</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-3 font-semibold">Progetti Natura e Biodiversità*</td>
                        <td className="border border-gray-300 p-3"><strong className="text-orange-600">75% a fondo perduto</strong></td>
                        <td className="border border-gray-300 p-3">3-5 anni</td>
                        <td className="border border-gray-300 p-3"><strong className="text-blue-600">4 milioni €</strong></td>
                        <td className="border border-gray-300 p-3">Habitat prioritari, specie protette</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-600 mt-2 italic">*Solo per confronto - non applicabile alla transizione energetica</p>
                
                <div className="bg-gradient-to-r from-yellow-100 to-green-100 p-8 rounded-lg mt-6 border-2 border-green-400">
                  <h3 className="text-2xl font-bold text-green-800 mb-4 text-center">🎯 60% A FONDO PERDUTO = SOLDI REGALATI DALL'EUROPA!</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow">
                      <h4 className="font-bold text-green-700 mb-2">💶 ESEMPIO PRATICO:</h4>
                      <p>Progetto da <strong>2.000.000 €</strong></p>
                      <p className="text-green-600 font-bold text-lg">✅ Europa paga: 1.200.000 € GRATIS</p>
                      <p>Voi investite: 800.000 €</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <h4 className="font-bold text-blue-700 mb-2">🔒 GARANZIE:</h4>
                      <p>❌ NON è un prestito</p>
                      <p>❌ NON si restituisce</p>
                      <p>❌ NON ci sono interessi</p>
                      <p className="text-green-600 font-bold">✅ È VOSTRO per sempre!</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* I Settori dove Vi Possiamo Supportare */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection('settori')}
            >
              <h2 className="text-2xl font-bold text-green-700">I Settori dove Vi Possiamo Supportare</h2>
              <span className="text-2xl text-green-600">
                {openSections['settori'] ? '−' : '+'}
              </span>
            </div>
            
            {openSections['settori'] && (
              <div className="mt-6">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-blue-100">
                        <th className="border border-gray-300 p-3 text-left font-bold">Settore</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Soluzioni Solarix</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Budget Tipico</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Durata</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Risultati Attesi</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Replicabilità</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-red-50">
                        <td className="border border-gray-300 p-3 font-semibold">Termico</td>
                        <td className="border border-gray-300 p-3">Pompe di calore + fotovoltaico</td>
                        <td className="border border-gray-300 p-3"><strong>1-2 milioni €</strong></td>
                        <td className="border border-gray-300 p-3">3-4 anni</td>
                        <td className="border border-gray-300 p-3"><strong className="text-green-600">-40% consumi termici</strong></td>
                        <td className="border border-gray-300 p-3">Alta (edifici EU)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-semibold">Digitale/IoT</td>
                        <td className="border border-gray-300 p-3">Sensori intelligenti</td>
                        <td className="border border-gray-300 p-3"><strong>0.5-1.5 milioni €</strong></td>
                        <td className="border border-gray-300 p-3">2-3 anni</td>
                        <td className="border border-gray-300 p-3"><strong className="text-green-600">-25% sprechi energetici</strong></td>
                        <td className="border border-gray-300 p-3">Molto alta</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-3 font-semibold">Robot Collaborativi</td>
                        <td className="border border-gray-300 p-3">Automazione produzione</td>
                        <td className="border border-gray-300 p-3"><strong>2-3 milioni €</strong></td>
                        <td className="border border-gray-300 p-3">3-4 anni</td>
                        <td className="border border-gray-300 p-3"><strong className="text-green-600">+30% efficienza</strong></td>
                        <td className="border border-gray-300 p-3">Media (industria)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-semibold">Comunità Energetiche</td>
                        <td className="border border-gray-300 p-3">Reti condivise + app</td>
                        <td className="border border-gray-300 p-3"><strong>2-4 milioni €</strong></td>
                        <td className="border border-gray-300 p-3">4-5 anni</td>
                        <td className="border border-gray-300 p-3"><strong className="text-green-600">500+ utenti coinvolti</strong></td>
                        <td className="border border-gray-300 p-3">Alta (città EU)</td>
                      </tr>
                      <tr className="bg-yellow-50">
                        <td className="border border-gray-300 p-3 font-semibold">Efficienza Industriale</td>
                        <td className="border border-gray-300 p-3">Ottimizzazione processi</td>
                        <td className="border border-gray-300 p-3"><strong>1.5-3 milioni €</strong></td>
                        <td className="border border-gray-300 p-3">3-4 anni</td>
                        <td className="border border-gray-300 p-3"><strong className="text-green-600">-20% consumi industria</strong></td>
                        <td className="border border-gray-300 p-3">Media (settore)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* Esempi di Progetti che Realizziamo */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection('esempi-progetti')}
            >
              <h2 className="text-2xl font-bold text-green-700">Esempi di Progetti che Realizziamo per Voi</h2>
              <span className="text-2xl text-green-600">
                {openSections['esempi-progetti'] ? '−' : '+'}
              </span>
            </div>
            
            {openSections['esempi-progetti'] && (
              <div className="mt-6">
                <h3 className="text-xl font-bold text-blue-700 mb-4">Portfolio Progetti Solarix Business</h3>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 mb-6">
                    <thead>
                      <tr className="bg-green-100">
                        <th className="border border-gray-300 p-3 text-left font-bold">Progetto</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Budget Totale</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Contributo UE a Fondo Perduto</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Vostro Investimento</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Durata</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Impatto</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-red-50">
                        <td className="border border-gray-300 p-3 font-semibold">ThermoFV Local</td>
                        <td className="border border-gray-300 p-3"><strong>2.000.000 €</strong></td>
                        <td className="border border-gray-300 p-3"><strong className="text-green-600">1.200.000 € a fondo perduto</strong></td>
                        <td className="border border-gray-300 p-3">800.000 €</td>
                        <td className="border border-gray-300 p-3">3 anni</td>
                        <td className="border border-gray-300 p-3">300 ton CO2/anno</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-semibold">CER Connect</td>
                        <td className="border border-gray-300 p-3"><strong>3.000.000 €</strong></td>
                        <td className="border border-gray-300 p-3"><strong className="text-green-600">1.800.000 € a fondo perduto</strong></td>
                        <td className="border border-gray-300 p-3">1.200.000 €</td>
                        <td className="border border-gray-300 p-3">4 anni</td>
                        <td className="border border-gray-300 p-3">500 utenti coinvolti</td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="border border-gray-300 p-3 font-semibold">Cobot Energy Prod</td>
                        <td className="border border-gray-300 p-3"><strong>2.500.000 €</strong></td>
                        <td className="border border-gray-300 p-3"><strong className="text-green-600">1.500.000 € a fondo perduto</strong></td>
                        <td className="border border-gray-300 p-3">1.000.000 €</td>
                        <td className="border border-gray-300 p-3">3 anni</td>
                        <td className="border border-gray-300 p-3">+30% efficienza produttiva</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-semibold">AI Thermo Optim</td>
                        <td className="border border-gray-300 p-3"><strong>1.500.000 €</strong></td>
                        <td className="border border-gray-300 p-3"><strong className="text-green-600">900.000 € a fondo perduto</strong></td>
                        <td className="border border-gray-300 p-3">600.000 €</td>
                        <td className="border border-gray-300 p-3">2 anni</td>
                        <td className="border border-gray-300 p-3">-25% sprechi energetici</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* Timeline Completa */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection('timeline')}
            >
              <h2 className="text-2xl font-bold text-green-700">📅 Timeline 2025-2030+ - Opportunità Continue!</h2>
              <span className="text-2xl text-green-600">
                {openSections['timeline'] ? '−' : '+'}
              </span>
            </div>
            
            {openSections['timeline'] && (
              <div className="mt-6">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-purple-100">
                        <th className="border border-gray-300 p-3 text-left font-bold">Fase</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Data</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Cosa Succede</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Nostro Supporto</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-green-50">
                        <td className="border border-gray-300 p-3 font-semibold">🚀 Bandi 2025</td>
                        <td className="border border-gray-300 p-3"><strong>24 Apr 2025</strong></td>
                        <td className="border border-gray-300 p-3">Pubblicazione richieste</td>
                        <td className="border border-gray-300 p-3">Preparazione documenti</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-semibold">⏰ Scadenza 2025</td>
                        <td className="border border-gray-300 p-3"><strong className="text-red-600">23 Set 2025</strong></td>
                        <td className="border border-gray-300 p-3">Deadline proposte 2025</td>
                        <td className="border border-gray-300 p-3">Invio domanda completa</td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="border border-gray-300 p-3 font-semibold">🎯 Bandi 2026</td>
                        <td className="border border-gray-300 p-3"><strong className="text-green-600">Apr-Set 2026</strong></td>
                        <td className="border border-gray-300 p-3">Nuova finestra opportunità</td>
                        <td className="border border-gray-300 p-3">Preparazione migliorata</td>
                      </tr>
                      <tr className="bg-yellow-50">
                        <td className="border border-gray-300 p-3 font-semibold">🔄 Bandi 2027-2030</td>
                        <td className="border border-gray-300 p-3"><strong className="text-blue-600">Ogni anno</strong></td>
                        <td className="border border-gray-300 p-3">Finestre continue</td>
                        <td className="border border-gray-300 p-3">Strategia multi-anno</td>
                      </tr>
                      <tr className="bg-yellow-50">
                        <td className="border border-gray-300 p-3 font-semibold">Valutazione</td>
                        <td className="border border-gray-300 p-3">4-6 mesi</td>
                        <td className="border border-gray-300 p-3">Esperti EU valutano</td>
                        <td className="border border-gray-300 p-3">Attesa (possibili chiarimenti)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-semibold">Notifica risultato</td>
                        <td className="border border-gray-300 p-3"><strong>Mar 2026</strong></td>
                        <td className="border border-gray-300 p-3">Comunicazione esito</td>
                        <td className="border border-gray-300 p-3">Preparazione firma accordo</td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="border border-gray-300 p-3 font-semibold">Firma accordo</td>
                        <td className="border border-gray-300 p-3">2-3 mesi</td>
                        <td className="border border-gray-300 p-3">Negoziazione finale</td>
                        <td className="border border-gray-300 p-3">Assistenza legale</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-semibold">Primi fondi</td>
                        <td className="border border-gray-300 p-3"><strong className="text-green-600">30 giorni</strong></td>
                        <td className="border border-gray-300 p-3">Pre-finanziamento 20-40%</td>
                        <td className="border border-gray-300 p-3">Avvio attività</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-3 font-semibold">Report intermedi</td>
                        <td className="border border-gray-300 p-3">Ogni 12-18 mesi</td>
                        <td className="border border-gray-300 p-3">Rendicontazione</td>
                        <td className="border border-gray-300 p-3">Documentazione avanzamento</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-semibold">Fondi finali</td>
                        <td className="border border-gray-300 p-3">Fine progetto</td>
                        <td className="border border-gray-300 p-3">Saldo 10-20%</td>
                        <td className="border border-gray-300 p-3">Report finale e audit</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-lg mt-4 border-2 border-green-400">
                  <h4 className="text-lg font-bold text-green-800 mb-2">💰 SOLDI SUL VOSTRO CONTO CORRENTE!</h4>
                  <p className="font-semibold text-green-700 mb-2">
                    <strong>⏱️ Tempistiche:</strong> 10-12 mesi da proposta a primi fondi
                  </p>
                  <p className="font-semibold text-blue-700">
                    <strong>🎯 Strategia pluriennale:</strong> Se non vincete nel 2025, vi prepariamo per 2026, 2027, 2028... fino al successo!
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Confronto Scenari Temporali */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection('scenari-temporali')}
            >
              <h2 className="text-2xl font-bold text-green-700">Confronto Scenari Temporali</h2>
              <span className="text-2xl text-green-600">
                {openSections['scenari-temporali'] ? '−' : '+'}
              </span>
            </div>
            
            {openSections['scenari-temporali'] && (
              <div className="mt-6">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-orange-100">
                        <th className="border border-gray-300 p-3 text-left font-bold">Strategia</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Durata</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Primi Fondi</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Tutti Fondi</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Vantaggi</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Svantaggi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-green-50">
                        <td className="border border-gray-300 p-3 font-semibold">Veloce</td>
                        <td className="border border-gray-300 p-3">2 anni</td>
                        <td className="border border-gray-300 p-3">11 mesi</td>
                        <td className="border border-gray-300 p-3">2.5 anni</td>
                        <td className="border border-gray-300 p-3">Liquidità rapida</td>
                        <td className="border border-gray-300 p-3">Meno tempo validazione</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-semibold">Standard</td>
                        <td className="border border-gray-300 p-3">3-4 anni</td>
                        <td className="border border-gray-300 p-3">11 mesi</td>
                        <td className="border border-gray-300 p-3">4-5 anni</td>
                        <td className="border border-gray-300 p-3">Impatto consolidato</td>
                        <td className="border border-gray-300 p-3">Liquidità dilazionata</td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="border border-gray-300 p-3 font-semibold">Esteso</td>
                        <td className="border border-gray-300 p-3">5 anni</td>
                        <td className="border border-gray-300 p-3">11 mesi</td>
                        <td className="border border-gray-300 p-3">6 anni</td>
                        <td className="border border-gray-300 p-3">Massimo impatto</td>
                        <td className="border border-gray-300 p-3">Risk finanziario</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* Statistiche di Successo */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection('statistiche')}
            >
              <h2 className="text-2xl font-bold text-green-700">Statistiche di Successo che Vi Garantiamo</h2>
              <span className="text-2xl text-green-600">
                {openSections['statistiche'] ? '−' : '+'}
              </span>
            </div>
            
            {openSections['statistiche'] && (
              <div className="mt-6">
                <h3 className="text-xl font-bold text-blue-700 mb-4">Percentuali di Approvazione per Settore</h3>
                <p className="mb-4 text-gray-700">Noi di Solarix Business analizziamo per voi le statistiche: la percentuale di approvazione è mediamente <strong>14%</strong>, ma varia in base alla qualità delle proposte che prepariamo.</p>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-blue-100">
                        <th className="border border-gray-300 p-3 text-left font-bold">Settore</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Proposte</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Approvate</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">% Successo</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Budget Medio</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-green-50">
                        <td className="border border-gray-300 p-3 font-semibold">Efficienza Energetica</td>
                        <td className="border border-gray-300 p-3">120</td>
                        <td className="border border-gray-300 p-3">18</td>
                        <td className="border border-gray-300 p-3"><strong className="text-green-600">15%</strong></td>
                        <td className="border border-gray-300 p-3">2.1 milioni €</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-semibold">Comunità Energetiche</td>
                        <td className="border border-gray-300 p-3">85</td>
                        <td className="border border-gray-300 p-3">12</td>
                        <td className="border border-gray-300 p-3"><strong className="text-green-600">14%</strong></td>
                        <td className="border border-gray-300 p-3">2.8 milioni €</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-3 font-semibold">Digitale/IoT</td>
                        <td className="border border-gray-300 p-3">65</td>
                        <td className="border border-gray-300 p-3">8</td>
                        <td className="border border-gray-300 p-3"><strong className="text-blue-600">12%</strong></td>
                        <td className="border border-gray-300 p-3">1.4 milioni €</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-semibold">Automazione/Robot</td>
                        <td className="border border-gray-300 p-3">40</td>
                        <td className="border border-gray-300 p-3">6</td>
                        <td className="border border-gray-300 p-3"><strong className="text-green-600">15%</strong></td>
                        <td className="border border-gray-300 p-3">2.5 milioni €</td>
                      </tr>
                      <tr className="bg-yellow-50">
                        <td className="border border-gray-300 p-3 font-semibold"><strong>TOTALE CET</strong></td>
                        <td className="border border-gray-300 p-3"><strong>310</strong></td>
                        <td className="border border-gray-300 p-3"><strong>44</strong></td>
                        <td className="border border-gray-300 p-3"><strong className="text-green-600">14%</strong></td>
                        <td className="border border-gray-300 p-3"><strong>2.2 milioni €</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* Matrice Errori vs Soluzioni */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection('errori-soluzioni')}
            >
              <h2 className="text-2xl font-bold text-green-700">Matrice Errori vs Soluzioni Solarix</h2>
              <span className="text-2xl text-green-600">
                {openSections['errori-soluzioni'] ? '−' : '+'}
              </span>
            </div>
            
            {openSections['errori-soluzioni'] && (
              <div className="mt-6">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-red-100">
                        <th className="border border-gray-300 p-3 text-left font-bold">Errore Comune</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Impatto</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Nostra Soluzione</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Successo %</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-green-50">
                        <td className="border border-gray-300 p-3 font-semibold">Budget non dettagliato</td>
                        <td className="border border-gray-300 p-3">Rifiuto immediato</td>
                        <td className="border border-gray-300 p-3"><strong className="text-green-600">Template UE professionale</strong></td>
                        <td className="border border-gray-300 p-3"><strong className="text-green-600">100%</strong></td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-semibold">Mancato allineamento Green Deal</td>
                        <td className="border border-gray-300 p-3">Basso punteggio</td>
                        <td className="border border-gray-300 p-3"><strong className="text-green-600">Studio politiche UE</strong></td>
                        <td className="border border-gray-300 p-3"><strong className="text-orange-600">80%</strong></td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-3 font-semibold">Partner inadeguati</td>
                        <td className="border border-gray-300 p-3">Scarsa credibilità</td>
                        <td className="border border-gray-300 p-3"><strong className="text-green-600">Selezione strategica</strong></td>
                        <td className="border border-gray-300 p-3"><strong className="text-blue-600">60%</strong></td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-semibold">Obiettivi non misurabili</td>
                        <td className="border border-gray-300 p-3">Impatto non verificabile</td>
                        <td className="border border-gray-300 p-3"><strong className="text-green-600">KPI quantificati</strong></td>
                        <td className="border border-gray-300 p-3"><strong className="text-green-600">70%</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* Analisi Costi-Benefici */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection('analisi-costi')}
            >
              <h2 className="text-2xl font-bold text-green-700">Analisi Costi-Benefici per Voi</h2>
              <span className="text-2xl text-green-600">
                {openSections['analisi-costi'] ? '−' : '+'}
              </span>
            </div>
            
            {openSections['analisi-costi'] && (
              <div className="mt-6">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-green-100">
                        <th className="border border-gray-300 p-3 text-left font-bold">Vostro Investimento</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Contributi a Fondo Perduto Immediati</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Benefici a Lungo Termine</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Tempistica</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-blue-50">
                        <td className="border border-gray-300 p-3">Tempo preparazione 3-6 mesi consulenza</td>
                        <td className="border border-gray-300 p-3"><strong className="text-green-600">1.2-1.8 milioni € a fondo perduto</strong></td>
                        <td className="border border-gray-300 p-3">Crescita aziendale</td>
                        <td className="border border-gray-300 p-3">Immediato alla firma</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">Co-finanziamento 40% 600.000-1.200.000 €</td>
                        <td className="border border-gray-300 p-3"><strong className="text-green-600">Progetti da 1.5-3 milioni € (60% a fondo perduto)</strong></td>
                        <td className="border border-gray-300 p-3">Competitività europea</td>
                        <td className="border border-gray-300 p-3">2-3 anni</td>
                      </tr>
                      <tr className="bg-yellow-50">
                        <td className="border border-gray-300 p-3">Competenze sviluppate</td>
                        <td className="border border-gray-300 p-3"><strong className="text-green-600">Specializzazione UE a fondo perduto</strong></td>
                        <td className="border border-gray-300 p-3">Credibilità consulenza</td>
                        <td className="border border-gray-300 p-3">Permanente</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">Network partners</td>
                        <td className="border border-gray-300 p-3"><strong className="text-green-600">Relazioni europee a fondo perduto</strong></td>
                        <td className="border border-gray-300 p-3">Progetti futuri</td>
                        <td className="border border-gray-300 p-3">5+ anni</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* Posizionamento Competitivo */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection('posizionamento')}
            >
              <h2 className="text-2xl font-bold text-green-700">Il Nostro Posizionamento Competitivo per Voi</h2>
              <span className="text-2xl text-green-600">
                {openSections['posizionamento'] ? '−' : '+'}
              </span>
            </div>
            
            {openSections['posizionamento'] && (
              <div className="mt-6">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-blue-100">
                        <th className="border border-gray-300 p-3 text-left font-bold">Competitor</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Loro Punti Forti</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Loro Debolezze</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Vantaggio Solarix</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-red-50">
                        <td className="border border-gray-300 p-3 font-semibold">Grandi Consulting</td>
                        <td className="border border-gray-300 p-3">Esperienza EU</td>
                        <td className="border border-gray-300 p-3">Costi alti, rigidità</td>
                        <td className="border border-gray-300 p-3"><strong className="text-green-600">Agilità + specializzazione</strong></td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-semibold">PMI Locali</td>
                        <td className="border border-gray-300 p-3">Costi contenuti</td>
                        <td className="border border-gray-300 p-3">Mancanza expertise EU</td>
                        <td className="border border-gray-300 p-3"><strong className="text-green-600">Competenze LIFE specifiche</strong></td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-3 font-semibold">Università</td>
                        <td className="border border-gray-300 p-3">Credibilità scientifica</td>
                        <td className="border border-gray-300 p-3">Lentezza esecuzione</td>
                        <td className="border border-gray-300 p-3"><strong className="text-green-600">Business orientation</strong></td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-semibold">Associazioni</td>
                        <td className="border border-gray-300 p-3">Network territoriale</td>
                        <td className="border border-gray-300 p-3">Limiti commerciali</td>
                        <td className="border border-gray-300 p-3"><strong className="text-green-600">Approccio profit oriented</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* Strategia di Crescita */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection('strategia-crescita')}
            >
              <h2 className="text-2xl font-bold text-green-700">La Nostra Strategia di Crescita con Voi</h2>
              <span className="text-2xl text-green-600">
                {openSections['strategia-crescita'] ? '−' : '+'}
              </span>
            </div>
            
            {openSections['strategia-crescita'] && (
              <div className="mt-6">
                <h3 className="text-xl font-bold text-blue-700 mb-4">Roadmap Solarix Business per i Vostri Progetti</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-purple-100">
                        <th className="border border-gray-300 p-3 text-left font-bold">Anno</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Obiettivo</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Progetto Target</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Budget</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Vostro Vantaggio</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-green-50">
                        <td className="border border-gray-300 p-3 font-semibold">2025</td>
                        <td className="border border-gray-300 p-3">Prima candidatura</td>
                        <td className="border border-gray-300 p-3">Preparazione proposta CER</td>
                        <td className="border border-gray-300 p-3"><strong>1.8 milioni €</strong></td>
                        <td className="border border-gray-300 p-3">Esperienza + network</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-semibold">2026</td>
                        <td className="border border-gray-300 p-3">Secondo progetto</td>
                        <td className="border border-gray-300 p-3">Efficienza industriale</td>
                        <td className="border border-gray-300 p-3"><strong>2.5 milioni €</strong></td>
                        <td className="border border-gray-300 p-3">Specializzazione</td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="border border-gray-300 p-3 font-semibold">2027</td>
                        <td className="border border-gray-300 p-3">Portfolio completo</td>
                        <td className="border border-gray-300 p-3">2-3 progetti paralleli</td>
                        <td className="border border-gray-300 p-3"><strong>5+ milioni €</strong></td>
                        <td className="border border-gray-300 p-3">Leadership mercato</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-semibold">2028+</td>
                        <td className="border border-gray-300 p-3">Consulenza premium</td>
                        <td className="border border-gray-300 p-3">Supporto altri clienti</td>
                        <td className="border border-gray-300 p-3">Variabile</td>
                        <td className="border border-gray-300 p-3">Revenue ricorrente</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* Matrice Rischio-Opportunità */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection('rischio-opportunita')}
            >
              <h2 className="text-2xl font-bold text-green-700">Matrice Rischio-Opportunità per le Vostre Decisioni</h2>
              <span className="text-2xl text-green-600">
                {openSections['rischio-opportunita'] ? '−' : '+'}
              </span>
            </div>
            
            {openSections['rischio-opportunita'] && (
              <div className="mt-6">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-yellow-100">
                        <th className="border border-gray-300 p-3 text-left font-bold">Scenario</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Opportunità</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Rischi</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Gestione Rischi</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Raccomandazione</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-green-50">
                        <td className="border border-gray-300 p-3 font-semibold">Budget 1-2M€</td>
                        <td className="border border-gray-300 p-3">Gestione semplice</td>
                        <td className="border border-gray-300 p-3">Controlli standard</td>
                        <td className="border border-gray-300 p-3">Audit UE</td>
                        <td className="border border-gray-300 p-3"><strong className="text-green-600">Primi progetti</strong></td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-semibold">Budget 3-4M€</td>
                        <td className="border border-gray-300 p-3">Impatto significativo</td>
                        <td className="border border-gray-300 p-3">Complessità partner</td>
                        <td className="border border-gray-300 p-3">Governance complessa</td>
                        <td className="border border-gray-300 p-3"><strong className="text-blue-600">Leadership settore</strong></td>
                      </tr>
                      <tr className="bg-orange-50">
                        <td className="border border-gray-300 p-3 font-semibold">Multi-progetto</td>
                        <td className="border border-gray-300 p-3">Portfolio diversificato</td>
                        <td className="border border-gray-300 p-3">Sovraccarico team</td>
                        <td className="border border-gray-300 p-3">Dispersione focus</td>
                        <td className="border border-gray-300 p-3"><strong className="text-purple-600">Economia scala</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Solarix Business - Il Vostro Partner Strategico per i Fondi LIFE</h2>
            <p className="text-xl mb-6">
              Dalla candidatura alla rendicontazione finale, vi accompagniamo per massimizzare i fondi europei LIFE e far crescere il vostro business
            </p>
            <div className="flex justify-center mb-6">
              <a 
                href="https://wa.me/393470087833" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg flex items-center space-x-3 transition-colors duration-300 text-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span>Contattaci su WhatsApp: 347 008 7833</span>
              </a>
            </div>
            <p className="text-lg mb-4">
              Per una consulenza personalizzata sui finanziamenti europei LIFE Programme
            </p>
            <div className="text-sm opacity-90">
              Documento preparato dal team Solarix Business - Aggiornato con le ultime informazioni ufficiali LIFE Programme 2025
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
