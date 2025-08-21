import SeoHead from '../../../components/SeoHead/SeoHead';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';
import FundingStructure from './components/FundingStructure';
import ProcessTimeline from './components/ProcessTimeline';

export const revalidate = 86400;
export const runtime = 'nodejs';

export default function PSRPage() {

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
              Programmi di Sviluppo Rurale (PSR)
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

          {/* Funding Structure Component */}
          <FundingStructure />

          {/* Process Timeline Component */}
          <ProcessTimeline />

          {/* WhatsApp CTA */}
          <div className="text-center mt-12">
            <div className="bg-green-50 p-8 rounded-2xl border-2 border-green-200">
              <h3 className="text-2xl font-bold text-green-800 mb-4">
                Trasforma la Tua Azienda Agricola con i PSR
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
                <strong>347 008 7833</strong> - Rispondiamo entro 2 ore lavorative
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
