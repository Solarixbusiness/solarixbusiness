'use client';

import { useState, Suspense, lazy } from 'react'
import SeoHead from '../../components/SeoHead/SeoHead'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'

// Lazy load di tutti gli articoli
const Article01_ImpresaESGReady = lazy(() => import('./components/Article01_ImpresaESGReady'))
const Article02_SfidePMI = lazy(() => import('./components/Article02_SfidePMI'))
const Article03_ReportingIntegrato = lazy(() => import('./components/Article03_ReportingIntegrato'))
const Article04_PreparazionePersonale = lazy(() => import('./components/Article04_PreparazionePersonale'))
const Article05_CostiCSRD = lazy(() => import('./components/Article05_CostiCSRD'))
const Article06_SoftwareStrumenti = lazy(() => import('./components/Article06_SoftwareStrumenti'))
const Article07_IntelligenzaArtificiale = lazy(() => import('./components/Article07_IntelligenzaArtificiale'))
const Article08_BestPractice = lazy(() => import('./components/Article08_BestPractice'))
const Article09_ValoreMercato = lazy(() => import('./components/Article09_ValoreMercato'))
const Article10_KPIIndicatori = lazy(() => import('./components/Article10_KPIIndicatori'))
const Article11_DifficoltaImplementazione = lazy(() => import('./components/Article11_DifficoltaImplementazione'))
const Article12_OpportunitaBusiness = lazy(() => import('./components/Article12_OpportunitaBusiness'))
const Article13_IncentiviSupporti = lazy(() => import('./components/Article13_IncentiviSupporti'))
const Article14_RischiESG = lazy(() => import('./components/Article14_RischiESG'))
const Article15_SistemaBancario = lazy(() => import('./components/Article15_SistemaBancario'))
const Article16_SettoriEsposti = lazy(() => import('./components/Article16_SettoriEsposti'))
const Article17_GestioneRischi = lazy(() => import('./components/Article17_GestioneRischi'))
const Article18_Sanzioni = lazy(() => import('./components/Article18_Sanzioni'))
const Article19_DifferenzeNFRD = lazy(() => import('./components/Article19_DifferenzeNFRD'))
const Article20_DoppiaMaterialita = lazy(() => import('./components/Article20_DoppiaMaterialita'))

export default function RatingESGPage() {
  const [activeArticle, setActiveArticle] = useState<number | null>(null)

  const toggleArticle = (articleNumber: number) => {
    setActiveArticle(activeArticle === articleNumber ? null : articleNumber)
  }

  const articles = [
    "Imprese ESG-Ready: La Nuova Era della Trasparenza Sostenibile",
    "Quali sono le sfide principali che le PMI italiane affrontano nell'adozione della CSRD?",
    "Come integrare efficacemente la reportistica ESG con i tradizionali sistemi di reporting finanziario?",
    "Come preparare il personale aziendale alla rendicontazione integrata ESG?",
    "Quali sono i costi della CSRD per le PMI italiane?",
    "Quali software e strumenti digitali possono supportare la rendicontazione di sostenibilità?",
    "Come l'intelligenza artificiale può supportare la rendicontazione ESG nelle PMI italiane?",
    "Quali sono le best practice di rendicontazione di sostenibilità per PMI italiane?",
    "Quale impatto ha la rendicontazione di sostenibilità sul valore di mercato delle PMI italiane?",
    "Quali sono gli indicatori chiave (KPI) utilizzati dalle PMI italiane nei report di sostenibilità?",
    "Quali sono le difficoltà delle PMI italiane nell'implementazione della CSRD?",
    "Quali opportunità di business offre la CSRD per le PMI italiane?",
    "Quali incentivi e supporti sono disponibili per le PMI italiane nei percorsi di sostenibilità?",
    "Quali sono i rischi ESG per le PMI italiane?",
    "Come il sistema bancario italiano valuta gli indicatori ESG delle PMI?",
    "Quali settori industriali italiani sono più esposti ai rischi di non conformità ESG?",
    "Come possono le PMI italiane migliorare la loro gestione dei rischi ESG con risorse limitate?",
    "Quali sono le sanzioni previste in Italia per la non conformità agli standard ESG?",
    "Quali sono le principali differenze tra la CSRD e la precedente direttiva NFRD?",
    "Come funziona il concetto di doppia materialità nella CSRD?"
  ]

  const renderArticle = (articleNumber: number) => {
    const components = [
      Article01_ImpresaESGReady, Article02_SfidePMI, Article03_ReportingIntegrato,
      Article04_PreparazionePersonale, Article05_CostiCSRD, Article06_SoftwareStrumenti,
      Article07_IntelligenzaArtificiale, Article08_BestPractice, Article09_ValoreMercato,
      Article10_KPIIndicatori, Article11_DifficoltaImplementazione, Article12_OpportunitaBusiness,
      Article13_IncentiviSupporti, Article14_RischiESG, Article15_SistemaBancario,
      Article16_SettoriEsposti, Article17_GestioneRischi, Article18_Sanzioni,
      Article19_DifferenzeNFRD, Article20_DoppiaMaterialita
    ]
    
    const Component = components[articleNumber - 1]
    return Component ? <Component /> : null
  }

  return (
    <>
      <SeoHead 
        title="Rating ESG e Sostenibilità per PMI | Guida Completa CSRD | SolariX Business"
        description="Guida completa al Rating ESG e alla rendicontazione di sostenibilità CSRD per PMI italiane. 20 articoli specialistici su compliance, KPI, strumenti digitali e best practice."
        keywords="rating ESG, CSRD, sostenibilità PMI, rendicontazione sostenibilità, compliance ESG, KPI sostenibilità, report sostenibilità"
        canonicalUrl="https://solarixbusiness.it/rating-esg"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs 
            items={[
              { label: 'Home', path: '/' },
              { label: 'Rating ESG', path: '/rating-esg' }
            ]} 
          />

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-6 py-3 rounded-full font-semibold mb-6">
              <span className="mr-2">🌱</span>
              Guida Completa ESG & CSRD
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 mb-6">
              Rating ESG
            </h1>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                🎯 La Vostra Guida Completa alla Sostenibilità Aziendale
              </h2>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
                  📊 Rating ESG
                </span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
                  📋 CSRD Compliance
                </span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-semibold">
                  🎯 PMI Italiane
                </span>
              </div>
            </div>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mt-6">
              <strong>20 articoli specialistici</strong> per guidare le PMI italiane nella transizione verso la sostenibilità, 
              dalla compliance CSRD agli strumenti digitali, dai KPI alle best practice di settore. 
              <strong>SolariX Business</strong> vi accompagna in ogni fase del percorso ESG.
            </p>
          </div>

          {/* Indice degli Articoli */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">📚 Indice degli Articoli</h2>
            <div className="grid gap-4">
              {articles.map((title, index) => (
                <div key={index + 1} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <button
                    onClick={() => toggleArticle(index + 1)}
                    className="w-full text-left flex items-center justify-between"
                  >
                    <span className="font-semibold text-gray-800">
                      <span className="text-blue-600 mr-3">{index + 1}.</span>
                      {title}
                    </span>
                    <span className="text-2xl text-blue-600">
                      {activeArticle === index + 1 ? '−' : '+'}
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Contenuto Articoli */}
          {activeArticle && (
            <Suspense fallback={
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <div className="animate-pulse">
                  <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  </div>
                </div>
              </div>
            }>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                {renderArticle(activeArticle)}
              </div>
            </Suspense>
          )}

          {/* CTA Finale - Mostrata solo quando tutti gli articoli sono stati visualizzati */}
          {activeArticle === 20 && (
            <div className="mt-12 p-8 bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl shadow-xl border-2 border-green-200">
              <h3 className="text-3xl font-bold text-green-800 mb-6 text-center">
                Trasforma la sostenibilità in un vantaggio competitivo per la tua azienda
              </h3>
              <p className="text-xl text-gray-700 mb-6 text-center max-w-4xl mx-auto font-semibold">
                Sei pronto a guidare il cambiamento verso un futuro più sostenibile?
              </p>
              <p className="text-lg text-gray-700 mb-8 text-center max-w-5xl mx-auto">
                <strong>SOLARIXBUSINESS</strong> è il partner strategico che ti accompagna in ogni fase del tuo percorso ESG. 
                Dalla rendicontazione di sostenibilità all'implementazione della CSRD, dalle certificazioni ambientali all'ottimizzazione energetica.
              </p>
              
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">I nostri servizi includono:</h4>
                <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                  <div className="flex items-start space-x-3">
                    <span className="text-green-600 font-bold text-lg">✅</span>
                    <span className="text-gray-700"><strong>Consulenza CSRD e Rendicontazione ESG</strong> - Supporto completo per la conformità normativa</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-600 font-bold text-lg">✅</span>
                    <span className="text-gray-700"><strong>Analisi di Materialità</strong> - Identificazione dei fattori ESG più rilevanti per il tuo business</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-600 font-bold text-lg">✅</span>
                    <span className="text-gray-700"><strong>Implementazione Software ESG</strong> - Digitalizzazione dei processi di raccolta e monitoraggio dati</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-600 font-bold text-lg">✅</span>
                    <span className="text-gray-700"><strong>Formazione del Personale</strong> - Sviluppo delle competenze interne in ambito sostenibilità</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-600 font-bold text-lg">✅</span>
                    <span className="text-gray-700"><strong>Accesso a Finanziamenti Agevolati</strong> - Supporto per ottenere green loan e incentivi pubblici</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-600 font-bold text-lg">✅</span>
                    <span className="text-gray-700"><strong>Certificazioni Ambientali</strong> - Percorsi verso ISO 14001, 50001 e altre certificazioni ESG</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 rounded-xl p-6 mb-8">
                <p className="text-lg text-gray-800 text-center mb-4">
                  <strong>Non aspettare che la sostenibilità diventi un obbligo: trasformala subito in un'opportunità.</strong>
                </p>
                <p className="text-gray-700 text-center">
                  Con oltre anni di esperienza nel settore, SOLARIXBUSINESS ha già aiutato centinaia di PMI italiane a diventare più competitive attraverso la sostenibilità.
                </p>
              </div>

              <div className="text-center mb-6">
                <h4 className="text-xl font-bold text-gray-800 mb-2">📞 Contatta subito SOLARIXBUSINESS</h4>
                <p className="text-gray-700 mb-1">Email: info@solarixbusiness.it</p>
                <p className="text-gray-700">Tel: 011 1883 7752</p>
              </div>

              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 mb-8">
                <h4 className="text-xl font-bold text-yellow-800 mb-2 text-center">🎯 Richiedi oggi stesso una consulenza gratuita di 30 minuti</h4>
                <p className="text-yellow-700 text-center">
                  Scopri come la tua azienda può beneficiare delle opportunità ESG e prepararsi alle nuove normative europee.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/landing-google-ads"
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  Richiedi Consulenza Gratuita
                </a>
                
                <a
                  href="https://wa.me/393470087833?text=Ciao%20SOLARIXBUSINESS%2C%20ho%20letto%20la%20vostra%20guida%20ESG%20completa%20e%20sono%20interessato%20a%20trasformare%20la%20sostenibilità%20in%20un%20vantaggio%20competitivo%20per%20la%20mia%20azienda."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Contatta su WhatsApp
                </a>
              </div>
              
              <p className="text-sm text-gray-600 mt-4 text-center">
                📱 <strong>347 008 7833</strong> - Rispondiamo entro 2 ore lavorative
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
