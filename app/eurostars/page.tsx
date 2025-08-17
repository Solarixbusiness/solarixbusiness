'use client';

import { useState } from 'react';
import SeoHead from '../../components/SeoHead/SeoHead';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

export default function EurostarsPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <>
      <SeoHead 
        title="Eurostars - Innovazione Tecnologica Europea Collaborativa | SolariX Business"
        description="Eurostars: finanziamenti fino al 60% a fondo perduto per PMI innovative. Collaborazioni internazionali, tecnologie avanzate, mercati europei. Budget 2-3 milioni €."
        keywords="Eurostars, innovazione tecnologica, collaborazione internazionale, PMI innovative, finanziamenti europei, ricerca sviluppo"
        canonicalUrl="https://www.solarixbusiness.it/eurostars"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs 
            items={[
              { label: 'Home', path: '/' },
              { label: 'Bandi Europei', path: '/bandi-europei' },
              { label: 'Eurostars', path: '/eurostars' }
            ]}
          />

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-indigo-800 mb-6">
              🚀 Eurostars - Innovazione Tecnologica Europea
            </h1>
            <p className="text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
              La Nostra Guida all'Innovazione Tecnologica Europea Collaborativa
            </p>
            
            {/* Key Stats */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-blue-200">
                <div className="text-3xl font-bold text-blue-600">Fino al 60%</div>
                <div className="text-lg text-gray-700">Contributi a Fondo Perduto</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-indigo-200">
                <div className="text-3xl font-bold text-indigo-600">2-3 Milioni €</div>
                <div className="text-lg text-gray-700">Budget Massimo per Progetto</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-purple-200">
                <div className="text-3xl font-bold text-purple-600">37 Paesi</div>
                <div className="text-lg text-gray-700">Network Europeo</div>
              </div>
            </div>
          </div>

          {/* Caratteristiche Distintive */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <button
              onClick={() => toggleSection('caratteristiche')}
              className="w-full flex justify-between items-center text-left"
            >
              <h2 className="text-3xl font-bold text-indigo-800">🎯 Caratteristiche Distintive del Programma</h2>
              <span className="text-3xl text-indigo-600">{expandedSection === 'caratteristiche' ? '−' : '+'}</span>
            </button>
            
            {expandedSection === 'caratteristiche' && (
              <div className="mt-6">
                <div className="bg-blue-50 p-6 rounded-xl mb-6">
                  <h3 className="text-2xl font-bold text-blue-800 mb-4">Progettato specificamente per PMI innovative come la vostra</h3>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-blue-300">
                      <thead>
                        <tr className="bg-blue-600 text-white">
                          <th className="border border-blue-300 p-3 text-left">Caratteristica</th>
                          <th className="border border-blue-300 p-3 text-left">Vantaggio per Voi</th>
                          <th className="border border-blue-300 p-3 text-left">Dettagli</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white">
                          <td className="border border-blue-300 p-3 font-bold text-blue-700">Focus PMI innovative</td>
                          <td className="border border-blue-300 p-3">Progettato per aziende come la vostra</td>
                          <td className="border border-blue-300 p-3 font-bold text-green-600">&lt;250 dipendenti, orientamento commerciale</td>
                        </tr>
                        <tr className="bg-blue-50">
                          <td className="border border-blue-300 p-3 font-bold text-blue-700">Collaborazione internazionale</td>
                          <td className="border border-blue-300 p-3">Accesso a competenze europee</td>
                          <td className="border border-blue-300 p-3">Minimo 2 partner da 2 paesi diversi</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border border-blue-300 p-3 font-bold text-blue-700">Orientamento al mercato</td>
                          <td className="border border-blue-300 p-3">Prodotti commercializzabili</td>
                          <td className="border border-blue-300 p-3">Progetti devono portare a soluzioni vendibili</td>
                        </tr>
                        <tr className="bg-blue-50">
                          <td className="border border-blue-300 p-3 font-bold text-blue-700">Finanziamento sostanziale</td>
                          <td className="border border-blue-300 p-3">Contributi a fondo perduto fino al 60%</td>
                          <td className="border border-blue-300 p-3 font-bold text-green-600">Massimo 2-3 milioni € per progetto</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border border-blue-300 p-3 font-bold text-blue-700">Network di 37 paesi</td>
                          <td className="border border-blue-300 p-3">Mercati europei accessibili</td>
                          <td className="border border-blue-300 p-3">Competenze e clienti in tutta Europa</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="mt-6 grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-100 p-4 rounded-lg">
                      <h4 className="font-bold text-blue-800 mb-2">Finanziamento nazionale italiano:</h4>
                      <ul className="text-blue-700">
                        <li>• Contributo a fondo perduto: Fino al 60% dei costi ammissibili</li>
                        <li>• Cofinanziamento aziendale: Minimo 40% con vostre risorse</li>
                        <li>• Range di investimento: Da 500.000€ a 2-3 milioni €</li>
                        <li>• Durata tipica: 24-36 mesi di sviluppo</li>
                      </ul>
                    </div>
                    <div className="bg-indigo-100 p-4 rounded-lg">
                      <h4 className="font-bold text-indigo-800 mb-2">Gestione finanziaria:</h4>
                      <ul className="text-indigo-700">
                        <li>• Erogazione diretta dal Ministero Università e Ricerca (MUR)</li>
                        <li>• Distribuzione proporzionale nel consorzio internazionale</li>
                        <li>• Partner italiano può ricevere 40-70% del budget totale</li>
                        <li>• Nessun prestito agevolato - solo contributi a fondo perduto</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Mappatura Opportunità */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <button
              onClick={() => toggleSection('opportunita')}
              className="w-full flex justify-between items-center text-left"
            >
              <h2 className="text-3xl font-bold text-indigo-800">🗺️ Mappatura Completa delle Opportunità</h2>
              <span className="text-3xl text-indigo-600">{expandedSection === 'opportunita' ? '−' : '+'}</span>
            </button>
            
            {expandedSection === 'opportunita' && (
              <div className="mt-6">
                <div className="bg-purple-50 p-6 rounded-xl mb-6">
                  <h3 className="text-2xl font-bold text-purple-800 mb-4">Settori di Innovazione: Le Vostre Opportunità Tecnologiche</h3>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-purple-300">
                      <thead>
                        <tr className="bg-purple-600 text-white">
                          <th className="border border-purple-300 p-3 text-left">Settore</th>
                          <th className="border border-purple-300 p-3 text-left">Soluzioni Innovative</th>
                          <th className="border border-purple-300 p-3 text-left">Budget Tipico</th>
                          <th className="border border-purple-300 p-3 text-left">Durata</th>
                          <th className="border border-purple-300 p-3 text-left">Priorità</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white">
                          <td className="border border-purple-300 p-3 font-bold text-purple-700">Energie Rinnovabili</td>
                          <td className="border border-purple-300 p-3">Fotovoltaico avanzato, sistemi accumulo, smart grid</td>
                          <td className="border border-purple-300 p-3">300-800k€</td>
                          <td className="border border-purple-300 p-3">24-36 mesi</td>
                          <td className="border border-purple-300 p-3 font-bold text-red-600">MOLTO ALTA</td>
                        </tr>
                        <tr className="bg-purple-50">
                          <td className="border border-purple-300 p-3 font-bold text-purple-700">Efficientamento Energetico</td>
                          <td className="border border-purple-300 p-3">Materiali isolanti, controllo climatico, automazione</td>
                          <td className="border border-purple-300 p-3">200-600k€</td>
                          <td className="border border-purple-300 p-3">18-30 mesi</td>
                          <td className="border border-purple-300 p-3 font-bold text-red-600">MOLTO ALTA</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border border-purple-300 p-3 font-bold text-purple-700">IoT e Digitale</td>
                          <td className="border border-purple-300 p-3">Sensori smart, piattaforme controllo, AI per energia</td>
                          <td className="border border-purple-300 p-3">250-700k€</td>
                          <td className="border border-purple-300 p-3">24-32 mesi</td>
                          <td className="border border-purple-300 p-3 font-bold text-orange-600">ALTA</td>
                        </tr>
                        <tr className="bg-purple-50">
                          <td className="border border-purple-300 p-3 font-bold text-purple-700">Robotica Collaborativa</td>
                          <td className="border border-purple-300 p-3">Cobot specializzati, automazione intelligente</td>
                          <td className="border border-purple-300 p-3">400-1000k€</td>
                          <td className="border border-purple-300 p-3">30-42 mesi</td>
                          <td className="border border-purple-300 p-3 font-bold text-orange-600">ALTA</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border border-purple-300 p-3 font-bold text-purple-700">Tecnologie Ambientali</td>
                          <td className="border border-purple-300 p-3">Monitoraggio emissioni, economia circolare</td>
                          <td className="border border-purple-300 p-3">200-500k€</td>
                          <td className="border border-purple-300 p-3">20-28 mesi</td>
                          <td className="border border-purple-300 p-3 font-bold text-orange-600">ALTA</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="mt-6 bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg">
                    <h4 className="text-xl font-bold text-indigo-800 mb-4">🎯 Energie Rinnovabili: Il Vostro Territorio di Eccellenza</h4>
                    <p className="text-indigo-700 mb-4">
                      <strong>Allineamento perfetto con le competenze Solarix:</strong> Questo settore rappresenta l'opportunità più diretta per sviluppare tecnologie proprietarie che vi distinguono dalla concorrenza tradizionale.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-bold text-blue-700 mb-2">Tecnologie Fotovoltaiche Avanzate:</h5>
                        <ul className="text-blue-600 text-sm">
                          <li>• Perovskite, tandem, concentrazione solare</li>
                          <li>• Sistemi agrivoltaici con monitoring intelligente</li>
                          <li>• Fotovoltaico galleggiante per bacini industriali</li>
                          <li>• Building-integrated PV ottimizzati</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-bold text-purple-700 mb-2">Sistemi di Accumulo e Gestione:</h5>
                        <ul className="text-purple-600 text-sm">
                          <li>• Batterie beyond-lithium per lunga durata</li>
                          <li>• Smart grid locali per comunità energetiche</li>
                          <li>• Vehicle-to-grid per mobilità elettrica</li>
                          <li>• Sistemi ibridi con AI per ottimizzazione</li>
                        </ul>
                      </div>
                    </div>
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
              <h2 className="text-3xl font-bold text-indigo-800">⚠️ Errori che Vi Evitiamo</h2>
              <span className="text-3xl text-indigo-600">{expandedSection === 'errori' ? '−' : '+'}</span>
            </button>
            
            {expandedSection === 'errori' && (
              <div className="mt-6">
                <div className="bg-red-50 p-6 rounded-xl mb-6">
                  <h3 className="text-2xl font-bold text-red-800 mb-4">Come SolariX Business Previene i Problemi Critici</h3>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-red-300">
                      <thead>
                        <tr className="bg-red-600 text-white">
                          <th className="border border-red-300 p-3 text-left">Errore Fatale</th>
                          <th className="border border-red-300 p-3 text-left">Frequenza</th>
                          <th className="border border-red-300 p-3 text-left">Impatto</th>
                          <th className="border border-red-300 p-3 text-left">Nostra Soluzione</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white">
                          <td className="border border-red-300 p-3 font-bold text-red-700">Partner inadeguato</td>
                          <td className="border border-red-300 p-3 font-bold">35%</td>
                          <td className="border border-red-300 p-3">Esclusione automatica</td>
                          <td className="border border-red-300 p-3 text-green-600">Due diligence approfondita partner</td>
                        </tr>
                        <tr className="bg-red-50">
                          <td className="border border-red-300 p-3 font-bold text-red-700">Innovazione insufficiente</td>
                          <td className="border border-red-300 p-3 font-bold">28%</td>
                          <td className="border border-red-300 p-3">Punteggio basso</td>
                          <td className="border border-red-300 p-3 text-green-600">Analisi stato dell'arte rigorosa</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border border-red-300 p-3 font-bold text-red-700">Business case debole</td>
                          <td className="border border-red-300 p-3 font-bold">25%</td>
                          <td className="border border-red-300 p-3">Rigetto commerciale</td>
                          <td className="border border-red-300 p-3 text-green-600">Market research professionale</td>
                        </tr>
                        <tr className="bg-red-50">
                          <td className="border border-red-300 p-3 font-bold text-red-700">Budget irrealistico</td>
                          <td className="border border-red-300 p-3 font-bold">20%</td>
                          <td className="border border-red-300 p-3">Riduzione finanziamento</td>
                          <td className="border border-red-300 p-3 text-green-600">Benchmarking costi industria</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border border-red-300 p-3 font-bold text-red-700">Timeline non credibile</td>
                          <td className="border border-red-300 p-3 font-bold">18%</td>
                          <td className="border border-red-300 p-3">Dubbi su feasibility</td>
                          <td className="border border-red-300 p-3 text-green-600">Pianificazione bottom-up dettagliata</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="mt-6 bg-green-100 p-4 rounded-lg">
                    <h4 className="font-bold text-green-800 mb-2">Best Practices che Applichiamo:</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="text-green-700">
                        <li>• <strong>Start early:</strong> Iniziamo preparazione 6 mesi prima deadline</li>
                        <li>• <strong>Multiple partners:</strong> Valutiamo 5-7 partner prima di scegliere</li>
                        <li>• <strong>Technology validation:</strong> Proof-of-concept preliminare</li>
                      </ul>
                      <ul className="text-green-700">
                        <li>• <strong>Market research:</strong> Analisi quantitativa mercato e competitori</li>
                        <li>• <strong>Storytelling compelling:</strong> Narrativa chiara problema e soluzione</li>
                        <li>• <strong>European dimension:</strong> Valore aggiunto collaborazione transnazionale</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* WhatsApp CTA */}
          <div className="text-center mt-12">
            <div className="bg-blue-50 p-8 rounded-2xl border-2 border-blue-200">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">
                🚀 Trasforma la Tua Azienda in Innovatore Europeo
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Contattaci per una <strong>consulenza personalizzata gratuita</strong> su Eurostars. 
                Ti aiutiamo a ottenere <strong>finanziamenti fino al 60% a fondo perduto</strong> per sviluppare tecnologie innovative con partner europei.
              </p>
              <a
                href="https://wa.me/393470087833?text=Ciao%20SolariX%20Business%2C%20sono%20interessato%20al%20programma%20Eurostars%20per%20sviluppare%20tecnologie%20innovative%20con%20collaborazioni%20internazionali.%20Vorrei%20una%20consulenza%20personalizzata."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
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
  );
}
