'use client';

import { useState } from 'react';
import SeoHead from '../../components/SeoHead/SeoHead';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

export default function PSRPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <>
      <SeoHead 
        title="PSR - Programmi di Sviluppo Rurale | Finanziamenti Agricoli UE | SolariX Business"
        description="Programmi di Sviluppo Rurale (PSR): contributi a fondo perduto 40-60% per modernizzazione agricola, energie rinnovabili e efficientamento energetico. Budget 8 miliardi €."
        keywords="PSR, Programmi Sviluppo Rurale, finanziamenti agricoli, contributi fondo perduto, modernizzazione agricola, energie rinnovabili agricole"
        canonicalUrl="https://www.solarixbusiness.it/psr"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs 
            items={[
              { label: 'Home', path: '/' },
              { label: 'Bandi Europei', path: '/bandi-europei' },
              { label: 'PSR', path: '/psr' }
            ]}
          />

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-green-800 mb-6">
              🌾 Programmi di Sviluppo Rurale (PSR)
            </h1>
            <p className="text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
              La Nostra Guida alla Transizione Energetica Agricola
            </p>
            
            {/* Key Stats */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-green-200">
                <div className="text-3xl font-bold text-green-600">40-60%</div>
                <div className="text-lg text-gray-700">Contributi a Fondo Perduto</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-emerald-200">
                <div className="text-3xl font-bold text-emerald-600">8 Miliardi €</div>
                <div className="text-lg text-gray-700">Budget Nazionale 2023-2027</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-teal-200">
                <div className="text-3xl font-bold text-teal-600">Gestione Regionale</div>
                <div className="text-lg text-gray-700">Criteri Territoriali Specifici</div>
              </div>
            </div>
          </div>

          {/* Struttura Finanziamenti */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <button
              onClick={() => toggleSection('struttura')}
              className="w-full flex justify-between items-center text-left"
            >
              <h2 className="text-3xl font-bold text-green-800">💰 Struttura dei Finanziamenti a Fondo Perduto</h2>
              <span className="text-3xl text-green-600">{expandedSection === 'struttura' ? '−' : '+'}</span>
            </button>
            
            {expandedSection === 'struttura' && (
              <div className="mt-6">
                <div className="bg-green-50 p-6 rounded-xl mb-6">
                  <h3 className="text-2xl font-bold text-green-800 mb-4">L'Europa finanzia dal 40% al 60% dei vostri investimenti agricoli a fondo perduto</h3>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-green-300">
                      <thead>
                        <tr className="bg-green-600 text-white">
                          <th className="border border-green-300 p-3 text-left">Tipo Intervento</th>
                          <th className="border border-green-300 p-3 text-left">Contributo a Fondo Perduto</th>
                          <th className="border border-green-300 p-3 text-left">Budget Tipico</th>
                          <th className="border border-green-300 p-3 text-left">Durata</th>
                          <th className="border border-green-300 p-3 text-left">Chi Può Accedere</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white">
                          <td className="border border-green-300 p-3 font-bold text-green-700">Efficientamento Energetico</td>
                          <td className="border border-green-300 p-3 font-bold text-blue-600">40-60% a fondo perduto</td>
                          <td className="border border-green-300 p-3">20.000-200.000€</td>
                          <td className="border border-green-300 p-3">2-3 anni</td>
                          <td className="border border-green-300 p-3">Aziende agricole, allevamenti</td>
                        </tr>
                        <tr className="bg-green-50">
                          <td className="border border-green-300 p-3 font-bold text-green-700">Energie Rinnovabili</td>
                          <td className="border border-green-300 p-3 font-bold text-blue-600">40-50% a fondo perduto</td>
                          <td className="border border-green-300 p-3">50.000-500.000€</td>
                          <td className="border border-green-300 p-3">3-5 anni</td>
                          <td className="border border-green-300 p-3">Imprese agricole, cooperative</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border border-green-300 p-3 font-bold text-green-700">Automazione e Digitale</td>
                          <td className="border border-green-300 p-3 font-bold text-blue-600">50-60% a fondo perduto</td>
                          <td className="border border-green-300 p-3">30.000-300.000€</td>
                          <td className="border border-green-300 p-3">2-4 anni</td>
                          <td className="border border-green-300 p-3">Aziende innovative</td>
                        </tr>
                        <tr className="bg-green-50">
                          <td className="border border-green-300 p-3 font-bold text-green-700">Edilizia Rurale</td>
                          <td className="border border-green-300 p-3 font-bold text-blue-600">40-50% a fondo perduto</td>
                          <td className="border border-green-300 p-3">100.000-1.000.000€</td>
                          <td className="border border-green-300 p-3">3-7 anni</td>
                          <td className="border border-green-300 p-3">Imprese agricole, agriturismi</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="mt-6 grid md:grid-cols-2 gap-6">
                    <div className="bg-green-100 p-4 rounded-lg">
                      <h4 className="font-bold text-green-800 mb-2">Caratteristiche dei contributi:</h4>
                      <ul className="text-green-700">
                        <li>• 100% a fondo perduto - nessun rimborso richiesto</li>
                        <li>• Gestione regionale con criteri territoriali specifici</li>
                        <li>• Maggiorazioni per giovani agricoltori, aree svantaggiate</li>
                        <li>• Accesso continuo con bandi periodici durante l'anno</li>
                      </ul>
                    </div>
                    <div className="bg-emerald-100 p-4 rounded-lg">
                      <h4 className="font-bold text-emerald-800 mb-2">Budget e Portata:</h4>
                      <ul className="text-emerald-700">
                        <li>• Budget totale italiano 2023-2027: 8 miliardi di euro</li>
                        <li>• Range progetti: Da 10.000€ a diversi milioni</li>
                        <li>• Settori: Efficientamento, rinnovabili, automazione</li>
                        <li>• Gestione: Regionale autonoma con priorità territoriali</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Settori di Intervento */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <button
              onClick={() => toggleSection('settori')}
              className="w-full flex justify-between items-center text-left"
            >
              <h2 className="text-3xl font-bold text-green-800">🎯 Settori di Intervento: Le Vostre Opportunità di Modernizzazione</h2>
              <span className="text-3xl text-green-600">{expandedSection === 'settori' ? '−' : '+'}</span>
            </button>
            
            {expandedSection === 'settori' && (
              <div className="mt-6">
                <div className="bg-blue-50 p-6 rounded-xl mb-6">
                  <h3 className="text-2xl font-bold text-blue-800 mb-4">Mappatura Completa delle Opportunità</h3>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-blue-300">
                      <thead>
                        <tr className="bg-blue-600 text-white">
                          <th className="border border-blue-300 p-3 text-left">Settore</th>
                          <th className="border border-blue-300 p-3 text-left">Soluzioni Solarix</th>
                          <th className="border border-blue-300 p-3 text-left">Budget Tipico</th>
                          <th className="border border-blue-300 p-3 text-left">Contributo</th>
                          <th className="border border-blue-300 p-3 text-left">Durata</th>
                          <th className="border border-blue-300 p-3 text-left">Priorità</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white">
                          <td className="border border-blue-300 p-3 font-bold text-blue-700">Efficientamento Energetico</td>
                          <td className="border border-blue-300 p-3">Isolamento, pompe di calore, controlli</td>
                          <td className="border border-blue-300 p-3">20.000-200.000€</td>
                          <td className="border border-blue-300 p-3 font-bold text-green-600">40-60% a fondo perduto</td>
                          <td className="border border-blue-300 p-3">2-3 anni</td>
                          <td className="border border-blue-300 p-3 font-bold text-red-600">MOLTO ALTA</td>
                        </tr>
                        <tr className="bg-blue-50">
                          <td className="border border-blue-300 p-3 font-bold text-blue-700">Energie Rinnovabili</td>
                          <td className="border border-blue-300 p-3">Fotovoltaico, biomasse, geotermico</td>
                          <td className="border border-blue-300 p-3">50.000-500.000€</td>
                          <td className="border border-blue-300 p-3 font-bold text-green-600">40-50% a fondo perduto</td>
                          <td className="border border-blue-300 p-3">3-5 anni</td>
                          <td className="border border-blue-300 p-3 font-bold text-red-600">MOLTO ALTA</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border border-blue-300 p-3 font-bold text-blue-700">Automazione e Digitale</td>
                          <td className="border border-blue-300 p-3">Sensori IoT, robot, sistemi gestione</td>
                          <td className="border border-blue-300 p-3">30.000-300.000€</td>
                          <td className="border border-blue-300 p-3 font-bold text-green-600">50-60% a fondo perduto</td>
                          <td className="border border-blue-300 p-3">2-4 anni</td>
                          <td className="border border-blue-300 p-3 font-bold text-orange-600">ALTA</td>
                        </tr>
                        <tr className="bg-blue-50">
                          <td className="border border-blue-300 p-3 font-bold text-blue-700">Infrastrutture Irrigue</td>
                          <td className="border border-blue-300 p-3">Sistemi irrigazione efficiente</td>
                          <td className="border border-blue-300 p-3">40.000-400.000€</td>
                          <td className="border border-blue-300 p-3 font-bold text-green-600">50-60% a fondo perduto</td>
                          <td className="border border-blue-300 p-3">3-5 anni</td>
                          <td className="border border-blue-300 p-3 font-bold text-yellow-600">MEDIA</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Tempi di Processo */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <button
              onClick={() => toggleSection('tempi')}
              className="w-full flex justify-between items-center text-left"
            >
              <h2 className="text-3xl font-bold text-green-800">⏱️ Tempi di Processo che Monitoriamo</h2>
              <span className="text-3xl text-green-600">{expandedSection === 'tempi' ? '−' : '+'}</span>
            </button>
            
            {expandedSection === 'tempi' && (
              <div className="mt-6">
                <div className="bg-orange-50 p-6 rounded-xl mb-6">
                  <h3 className="text-2xl font-bold text-orange-800 mb-4">Il Nostro Processo Completo per i PSR</h3>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-orange-300">
                      <thead>
                        <tr className="bg-orange-600 text-white">
                          <th className="border border-orange-300 p-3 text-left">Fase</th>
                          <th className="border border-orange-300 p-3 text-left">Durata</th>
                          <th className="border border-orange-300 p-3 text-left">Attività</th>
                          <th className="border border-orange-300 p-3 text-left">Nostro Supporto</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white">
                          <td className="border border-orange-300 p-3 font-bold text-orange-700">Preparazione</td>
                          <td className="border border-orange-300 p-3">2-4 settimane</td>
                          <td className="border border-orange-300 p-3">Valutazione eleggibilità</td>
                          <td className="border border-orange-300 p-3 text-green-600">Analisi strategica completa</td>
                        </tr>
                        <tr className="bg-orange-50">
                          <td className="border border-orange-300 p-3 font-bold text-orange-700">Progettazione</td>
                          <td className="border border-orange-300 p-3">4-6 settimane</td>
                          <td className="border border-orange-300 p-3">Sviluppo progetto tecnico</td>
                          <td className="border border-orange-300 p-3 text-green-600">Progettazione professionale</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border border-orange-300 p-3 font-bold text-orange-700">Presentazione</td>
                          <td className="border border-orange-300 p-3">2-3 settimane</td>
                          <td className="border border-orange-300 p-3">Submission domanda</td>
                          <td className="border border-orange-300 p-3 text-green-600">Gestione documentazione</td>
                        </tr>
                        <tr className="bg-orange-50">
                          <td className="border border-orange-300 p-3 font-bold text-orange-700">Valutazione</td>
                          <td className="border border-orange-300 p-3">60-120 giorni</td>
                          <td className="border border-orange-300 p-3">Istruttoria tecnico-amministrativa</td>
                          <td className="border border-orange-300 p-3 text-green-600">Monitoraggio e supporto</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border border-orange-300 p-3 font-bold text-orange-700">Realizzazione</td>
                          <td className="border border-orange-300 p-3">6-24 mesi</td>
                          <td className="border border-orange-300 p-3">Implementazione progetto</td>
                          <td className="border border-orange-300 p-3 text-green-600">Coordinamento completo</td>
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
              <h2 className="text-3xl font-bold text-green-800">⚠️ Errori che Vi Evitiamo</h2>
              <span className="text-3xl text-green-600">{expandedSection === 'errori' ? '−' : '+'}</span>
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
                          <td className="border border-red-300 p-3 font-bold text-red-700">Domanda incompleta</td>
                          <td className="border border-red-300 p-3">Esclusione automatica</td>
                          <td className="border border-red-300 p-3 text-green-600">Checklist pre-invio completa</td>
                          <td className="border border-red-300 p-3 font-bold text-green-600">75%</td>
                        </tr>
                        <tr className="bg-red-50">
                          <td className="border border-red-300 p-3 font-bold text-red-700">Budget sovrastimato</td>
                          <td className="border border-red-300 p-3">Riduzione contributo</td>
                          <td className="border border-red-300 p-3 text-green-600">Preventivi realistici multipli</td>
                          <td className="border border-red-300 p-3 font-bold text-green-600">80%</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border border-red-300 p-3 font-bold text-red-700">Mancato rispetto tempi</td>
                          <td className="border border-red-300 p-3">Revoca finanziamento</td>
                          <td className="border border-red-300 p-3 text-green-600">Pianificazione realistica</td>
                          <td className="border border-red-300 p-3 font-bold text-green-600">85%</td>
                        </tr>
                        <tr className="bg-red-50">
                          <td className="border border-red-300 p-3 font-bold text-red-700">Variazioni non autorizzate</td>
                          <td className="border border-red-300 p-3">Recupero contributi</td>
                          <td className="border border-red-300 p-3 text-green-600">Comunicazione preventiva</td>
                          <td className="border border-red-300 p-3 font-bold text-green-600">88%</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border border-red-300 p-3 font-bold text-red-700">Documentazione inadeguata</td>
                          <td className="border border-red-300 p-3">Ritardi o esclusione</td>
                          <td className="border border-red-300 p-3 text-green-600">Consulenza specializzata</td>
                          <td className="border border-red-300 p-3 font-bold text-green-600">82%</td>
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
                🌾 Trasforma la Tua Azienda Agricola con i PSR
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Contattaci per una <strong>consulenza personalizzata gratuita</strong> sui Programmi di Sviluppo Rurale. 
                Ti aiutiamo a ottenere <strong>contributi a fondo perduto del 40-60%</strong> per modernizzare la tua azienda agricola.
              </p>
              <a
                href="https://wa.me/393470087833?text=Ciao%20SolariX%20Business%2C%20sono%20interessato%20ai%20Programmi%20di%20Sviluppo%20Rurale%20(PSR)%20per%20modernizzare%20la%20mia%20azienda%20agricola.%20Vorrei%20una%20consulenza%20personalizzata."
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
  );
}
