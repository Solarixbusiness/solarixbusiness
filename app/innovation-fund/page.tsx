'use client'

import { useState } from 'react'

export default function InnovationFundPage() {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({})

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            INNOVATION FUND
          </h1>
          <p className="text-xl md:text-2xl text-center opacity-90 max-w-4xl mx-auto">
            Mega-Progetti di Transizione Energetica: La Vostra Porta d'Accesso ai Grandi Finanziamenti Europei
          </p>
          <p className="text-lg text-center mt-4 opacity-80">
            <strong>🎯 FINANZIAMENTI A FONDO PERDUTO FINO AL 60% - PROGETTI DA 7,5+ MILIONI €</strong>
          </p>
          <p className="text-md text-center mt-2 opacity-90">
            Noi di Solarix Business Vi Accompagniamo nei Mega-Progetti Europei
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
              <h2 className="text-2xl font-bold text-blue-700">Introduzione all'Innovation Fund</h2>
              <span className="text-2xl text-blue-600">
                {openSections['introduzione'] ? '−' : '+'}
              </span>
            </div>
            
            {openSections['introduzione'] && (
              <div className="mt-6 space-y-4 text-gray-700">
                <p>
                  L'Innovation Fund è il programma dell'Unione Europea progettato per finanziare progetti su larga scala che riducono drasticamente le emissioni di carbonio e promuovono tecnologie pulite rivoluzionarie. Noi di Solarix Business vi guidiamo in questo programma d'élite che finanzia impianti innovativi per l'energia rinnovabile e processi industriali a basso impatto ambientale.
                </p>
                <p>
                  Per la vostra azienda, rappresenta l'opportunità di realizzare progetti di efficientamento energetico, termico o comunità energetiche di scala industriale, permettendovi di passare da iniziative locali a strategie complete per la crescita sostenibile europea.
                </p>
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg border-l-4 border-blue-500">
                  <h4 className="text-lg font-bold text-blue-800 mb-3">🚀 MEGA-PROGETTI EUROPEI - SCALA INDUSTRIALE!</h4>
                  <p className="mb-3"><strong>📅 Finestre Continue:</strong> Bandi annuali garantiti fino al 2030 con budget crescenti</p>
                  <p className="mb-3"><strong>💰 FONDO PERDUTO GARANTITO:</strong> <span className="bg-blue-200 px-2 py-1 rounded font-bold text-blue-800">Fino al 60% del budget totale NON si restituisce mai</span></p>
                  <p><strong>🎯 La nostra strategia:</strong> Vi trasformiamo da azienda locale a leader europeo nei mega-progetti!</p>
                </div>
              </div>
            )}
          </div>

          {/* Struttura dei Finanziamenti */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection('struttura-finanziamenti')}
            >
              <h2 className="text-2xl font-bold text-blue-700">💰 Struttura dei Finanziamenti a Fondo Perduto</h2>
              <span className="text-2xl text-blue-600">
                {openSections['struttura-finanziamenti'] ? '−' : '+'}
              </span>
            </div>
            
            {openSections['struttura-finanziamenti'] && (
              <div className="mt-6">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-blue-100">
                        <th className="border border-gray-300 p-3 text-left font-bold">Tipologia Progetto</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Contributo a Fondo Perduto</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Budget Minimo</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Durata</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Budget Tipico</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Settori</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-green-50">
                        <td className="border border-gray-300 p-3 font-semibold">Progetti Standard</td>
                        <td className="border border-gray-300 p-3"><strong className="text-green-600">40-50% a fondo perduto</strong></td>
                        <td className="border border-gray-300 p-3"><strong>7,5 milioni €</strong></td>
                        <td className="border border-gray-300 p-3">5-10 anni</td>
                        <td className="border border-gray-300 p-3"><strong className="text-blue-600">10-50 milioni €</strong></td>
                        <td className="border border-gray-300 p-3">Industria, energia, mobilità</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-semibold">Progetti Innovativi</td>
                        <td className="border border-gray-300 p-3"><strong className="text-green-600">50-55% a fondo perduto</strong></td>
                        <td className="border border-gray-300 p-3"><strong>7,5 milioni €</strong></td>
                        <td className="border border-gray-300 p-3">5-10 anni</td>
                        <td className="border border-gray-300 p-3"><strong className="text-blue-600">20-100 milioni €</strong></td>
                        <td className="border border-gray-300 p-3">Tecnologie avanzate</td>
                      </tr>
                      <tr className="bg-purple-50">
                        <td className="border border-gray-300 p-3 font-semibold">Progetti Pionieri</td>
                        <td className="border border-gray-300 p-3"><strong className="text-purple-600">60% a fondo perduto</strong></td>
                        <td className="border border-gray-300 p-3"><strong>7,5 milioni €</strong></td>
                        <td className="border border-gray-300 p-3">5-10 anni</td>
                        <td className="border border-gray-300 p-3"><strong className="text-blue-600">50-500 milioni €</strong></td>
                        <td className="border border-gray-300 p-3">Tecnologie rivoluzionarie</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="bg-gradient-to-r from-yellow-100 to-blue-100 p-8 rounded-lg mt-6 border-2 border-blue-400">
                  <h3 className="text-2xl font-bold text-blue-800 mb-4 text-center">🎯 FINO AL 60% A FONDO PERDUTO = MEGA-FINANZIAMENTI EUROPEI!</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow">
                      <h4 className="font-bold text-blue-700 mb-2">💶 ESEMPIO MEGA-PROGETTO:</h4>
                      <p>Progetto da <strong>30.000.000 €</strong></p>
                      <p className="text-blue-600 font-bold text-lg">✅ Europa paga: 18.000.000 € GRATIS</p>
                      <p>Voi investite: 12.000.000 €</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <h4 className="font-bold text-purple-700 mb-2">🔒 CARATTERISTICHE:</h4>
                      <p>✅ 100% a fondo perduto - nessun rimborso</p>
                      <p>✅ Copertura costi capitali e operativi</p>
                      <p>✅ Nessun prestito agevolato</p>
                      <p className="text-blue-600 font-bold">✅ Solo contributi diretti!</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Finestre Future */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection('finestre-future')}
            >
              <h2 className="text-2xl font-bold text-blue-700">📅 Finestre Immediate e Future 2025-2030</h2>
              <span className="text-2xl text-blue-600">
                {openSections['finestre-future'] ? '−' : '+'}
              </span>
            </div>
            
            {openSections['finestre-future'] && (
              <div className="mt-6">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-purple-100">
                        <th className="border border-gray-300 p-3 text-left font-bold">Call</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Apertura</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Scadenza</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Budget</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Focus Settoriale</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-yellow-50">
                        <td className="border border-gray-300 p-3 font-semibold">IF24</td>
                        <td className="border border-gray-300 p-3">Apr 2024</td>
                        <td className="border border-gray-300 p-3">Apr 2024</td>
                        <td className="border border-gray-300 p-3"><strong>4,8 miliardi €</strong></td>
                        <td className="border border-gray-300 p-3">Industria pesante</td>
                        <td className="border border-gray-300 p-3 text-orange-600">Valutazione in corso</td>
                      </tr>
                      <tr className="bg-green-50">
                        <td className="border border-gray-300 p-3 font-semibold">IF25</td>
                        <td className="border border-gray-300 p-3"><strong className="text-green-600">Dic 2025</strong></td>
                        <td className="border border-gray-300 p-3"><strong className="text-red-600">Apr 2026</strong></td>
                        <td className="border border-gray-300 p-3"><strong>1 miliardo €</strong></td>
                        <td className="border border-gray-300 p-3">Batterie, rinnovabili</td>
                        <td className="border border-gray-300 p-3 text-green-600">Preparazione</td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="border border-gray-300 p-3 font-semibold">IF26</td>
                        <td className="border border-gray-300 p-3">Apr 2026</td>
                        <td className="border border-gray-300 p-3">Set 2026</td>
                        <td className="border border-gray-300 p-3"><strong className="text-blue-600">5+ miliardi €</strong></td>
                        <td className="border border-gray-300 p-3">Da definire</td>
                        <td className="border border-gray-300 p-3 text-blue-600">Pianificazione</td>
                      </tr>
                      <tr className="bg-purple-50">
                        <td className="border border-gray-300 p-3 font-semibold">IF27-30</td>
                        <td className="border border-gray-300 p-3">Annuale</td>
                        <td className="border border-gray-300 p-3">Annuale</td>
                        <td className="border border-gray-300 p-3"><strong className="text-purple-600">6+ miliardi €/anno</strong></td>
                        <td className="border border-gray-300 p-3">Evoluzione tecnologie</td>
                        <td className="border border-gray-300 p-3 text-purple-600">Programmate</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* Settori */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection('settori')}
            >
              <h2 className="text-2xl font-bold text-blue-700">I Settori dove Vi Possiamo Supportare</h2>
              <span className="text-2xl text-blue-600">
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
                        <th className="border border-gray-300 p-3 text-left font-bold">Riduzione CO2</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Opportunità</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-red-50">
                        <td className="border border-gray-300 p-3 font-semibold">Decarbonizzazione Industriale</td>
                        <td className="border border-gray-300 p-3">Processi termici efficienti con cobot</td>
                        <td className="border border-gray-300 p-3"><strong>10-50 milioni €</strong></td>
                        <td className="border border-gray-300 p-3">5-8 anni</td>
                        <td className="border border-gray-300 p-3"><strong className="text-green-600">&gt;50%</strong></td>
                        <td className="border border-gray-300 p-3">Alta - efficientamento + robot</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-semibold">Energia Rinnovabile</td>
                        <td className="border border-gray-300 p-3">Fotovoltaico + accumulo + comunità</td>
                        <td className="border border-gray-300 p-3"><strong>7,5-100 milioni €</strong></td>
                        <td className="border border-gray-300 p-3">5-10 anni</td>
                        <td className="border border-gray-300 p-3"><strong className="text-green-600">&gt;60%</strong></td>
                        <td className="border border-gray-300 p-3">Molto alta - core business</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-3 font-semibold">Mobilità Elettrica</td>
                        <td className="border border-gray-300 p-3">Sistemi ricarica + efficientamento</td>
                        <td className="border border-gray-300 p-3"><strong>15-80 milioni €</strong></td>
                        <td className="border border-gray-300 p-3">5-7 anni</td>
                        <td className="border border-gray-300 p-3"><strong className="text-green-600">&gt;50%</strong></td>
                        <td className="border border-gray-300 p-3">Media - integrazione digitale</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-semibold">Idrogeno Verde</td>
                        <td className="border border-gray-300 p-3">Produzione e uso energetico</td>
                        <td className="border border-gray-300 p-3"><strong>25-150 milioni €</strong></td>
                        <td className="border border-gray-300 p-3">5-10 anni</td>
                        <td className="border border-gray-300 p-3"><strong className="text-green-600">&gt;60%</strong></td>
                        <td className="border border-gray-300 p-3">Alta - integrazione rinnovabili</td>
                      </tr>
                      <tr className="bg-yellow-50">
                        <td className="border border-gray-300 p-3 font-semibold">Materiali Sostenibili</td>
                        <td className="border border-gray-300 p-3">Innovazioni costruzione + automazione</td>
                        <td className="border border-gray-300 p-3"><strong>10-60 milioni €</strong></td>
                        <td className="border border-gray-300 p-3">5-8 anni</td>
                        <td className="border border-gray-300 p-3"><strong className="text-green-600">&gt;50%</strong></td>
                        <td className="border border-gray-300 p-3">Alta - cobot + efficienza</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* Progetti */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection('progetti')}
            >
              <h2 className="text-2xl font-bold text-blue-700">Esempi di Mega-Progetti che Realizziamo</h2>
              <span className="text-2xl text-blue-600">
                {openSections['progetti'] ? '−' : '+'}
              </span>
            </div>
            
            {openSections['progetti'] && (
              <div className="mt-6">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-purple-100">
                        <th className="border border-gray-300 p-3 text-left font-bold">Progetto</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Budget Totale</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Contributo UE a Fondo Perduto</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Vostro Investimento</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Durata</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">CO2 Evitata</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Settore</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-red-50">
                        <td className="border border-gray-300 p-3 font-semibold">ThermoCobot Industrial</td>
                        <td className="border border-gray-300 p-3"><strong>15.000.000 €</strong></td>
                        <td className="border border-gray-300 p-3"><strong className="text-green-600">9.000.000 € a fondo perduto (60%)</strong></td>
                        <td className="border border-gray-300 p-3">6.000.000 €</td>
                        <td className="border border-gray-300 p-3">6 anni</td>
                        <td className="border border-gray-300 p-3">2.000 ton/anno</td>
                        <td className="border border-gray-300 p-3">Industria + Robot</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-semibold">MegaSolar Community</td>
                        <td className="border border-gray-300 p-3"><strong>25.000.000 €</strong></td>
                        <td className="border border-gray-300 p-3"><strong className="text-green-600">12.500.000 € a fondo perduto (50%)</strong></td>
                        <td className="border border-gray-300 p-3">12.500.000 €</td>
                        <td className="border border-gray-300 p-3">8 anni</td>
                        <td className="border border-gray-300 p-3">5.000 ton/anno</td>
                        <td className="border border-gray-300 p-3">Fotovoltaico + CER</td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="border border-gray-300 p-3 font-semibold">SmartAccumulo Hub</td>
                        <td className="border border-gray-300 p-3"><strong>20.000.000 €</strong></td>
                        <td className="border border-gray-300 p-3"><strong className="text-green-600">11.000.000 € a fondo perduto (55%)</strong></td>
                        <td className="border border-gray-300 p-3">9.000.000 €</td>
                        <td className="border border-gray-300 p-3">7 anni</td>
                        <td className="border border-gray-300 p-3">3.500 ton/anno</td>
                        <td className="border border-gray-300 p-3">Accumulo + Digitale</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-semibold">GreenFactory AI</td>
                        <td className="border border-gray-300 p-3"><strong>30.000.000 €</strong></td>
                        <td className="border border-gray-300 p-3"><strong className="text-green-600">18.000.000 € a fondo perduto (60%)</strong></td>
                        <td className="border border-gray-300 p-3">12.000.000 €</td>
                        <td className="border border-gray-300 p-3">9 anni</td>
                        <td className="border border-gray-300 p-3">8.000 ton/anno</td>
                        <td className="border border-gray-300 p-3">AI + Efficienza</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Pronti per il Vostro Mega-Progetto Europeo?</h3>
            <p className="text-lg mb-6 opacity-90">
              Contattateci per una consulenza personalizzata sui finanziamenti Innovation Fund
            </p>
            <a 
              href="https://wa.me/393470087833" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              Consulenza WhatsApp Gratuita
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}
