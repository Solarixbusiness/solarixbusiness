import SeoHead from '../../components/SeoHead/SeoHead'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import IndiceArticoli from './components/IndiceArticoli'
import Article01_ImpresaESGReady from './components/Article01_ImpresaESGReady'
import Article02_SfidePMI from './components/Article02_SfidePMI'
import Article03_ReportingIntegrato from './components/Article03_ReportingIntegrato'
import Article04_PreparazionePersonale from './components/Article04_PreparazionePersonale'
import Article05_CostiCSRD from './components/Article05_CostiCSRD'
import Article06_SoftwareStrumenti from './components/Article06_SoftwareStrumenti'
import Article07_IntelligenzaArtificiale from './components/Article07_IntelligenzaArtificiale'
import Article08_BestPractice from './components/Article08_BestPractice'
import Article09_ValoreMercato from './components/Article09_ValoreMercato'
import Article10_KPIIndicatori from './components/Article10_KPIIndicatori'
import Article11_DifficoltaImplementazione from './components/Article11_DifficoltaImplementazione'
import Article12_OpportunitaBusiness from './components/Article12_OpportunitaBusiness'
import Article13_IncentiviSupporti from './components/Article13_IncentiviSupporti'
import Article14_RischiESG from './components/Article14_RischiESG'
import Article15_SistemaBancario from './components/Article15_SistemaBancario'
import Article16_SettoriEsposti from './components/Article16_SettoriEsposti'
import Article17_GestioneRischi from './components/Article17_GestioneRischi'
import Article18_Sanzioni from './components/Article18_Sanzioni'
import Article19_DifferenzeNFRD from './components/Article19_DifferenzeNFRD'
import Article20_DoppiaMaterialita from './components/Article20_DoppiaMaterialita'

export const revalidate = 86400;
export const runtime = 'nodejs';

export default function RatingESGPage() {
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
              Guida Completa ESG & CSRD
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 mb-6">
              Rating ESG
            </h1>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                La Vostra Guida Completa alla Sostenibilità Aziendale
              </h2>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
                  Rating ESG
                </span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
                  CSRD Compliance
                </span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-semibold">
                  PMI Italiane
                </span>
              </div>
            </div>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mt-6">
              <strong>20 articoli specialistici</strong> per guidare le PMI italiane nella transizione verso la sostenibilità, 
              dalla compliance CSRD agli strumenti digitali, dai KPI alle best practice di settore. 
              <strong>SolariX Business</strong> vi accompagna in ogni fase del percorso ESG.
            </p>
          </div>

          <IndiceArticoli />
          
          {/* Articoli */}
          <div className="space-y-8">
            <Article01_ImpresaESGReady />
            <Article02_SfidePMI />
            <Article03_ReportingIntegrato />
            <Article04_PreparazionePersonale />
            <Article05_CostiCSRD />
            <Article06_SoftwareStrumenti />
            <Article07_IntelligenzaArtificiale />
            <Article08_BestPractice />
            <Article09_ValoreMercato />
            <Article10_KPIIndicatori />
            <Article11_DifficoltaImplementazione />
            <Article12_OpportunitaBusiness />
            <Article13_IncentiviSupporti />
            <Article14_RischiESG />
            <Article15_SistemaBancario />
            <Article16_SettoriEsposti />
            <Article17_GestioneRischi />
            <Article18_Sanzioni />
            <Article19_DifferenzeNFRD />
            <Article20_DoppiaMaterialita />
          </div>
          
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
            
            <p className="text-sm text-gray-600 mt-4 text-center">
              <strong>347 008 7833</strong> - Rispondiamo entro 2 ore lavorative
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
