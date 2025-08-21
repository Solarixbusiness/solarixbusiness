import Link from 'next/link';
import ProgrammeContent from './components/ProgrammeContent';
import ServicesContent from './components/ServicesContent';
import StrategyContent from './components/StrategyContent';

export const revalidate = 86400;
export const runtime = 'nodejs';

export default function LifeProgrammePage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              🌱 LIFE Programme 2025-2030
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Finanziamenti a Fondo Perduto per la Transizione Verde
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">💰 Fino a 4 Milioni € - 60% a Fondo Perduto</h2>
              <p className="text-lg">
                Il programma LIFE è il principale strumento finanziario dell'UE per l'ambiente e l'azione per il clima
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/contatti" 
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-bold text-lg transition-colors"
              >
                💬 Consulenza Gratuita
              </Link>
              <Link 
                href="/progetti" 
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-8 py-3 rounded-lg font-bold text-lg transition-colors"
              >
                📋 Vedi Progetti
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Programme Content Component */}
          <ProgrammeContent />

          {/* Services Content Component */}
          <ServicesContent />

          {/* Strategy Content Component */}
          <StrategyContent />

        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto mt-12 text-center">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-8 rounded-lg shadow-xl">
            <h2 className="text-3xl font-bold mb-4">🚀 Inizia Subito il Tuo Progetto LIFE</h2>
            <p className="text-xl mb-6 opacity-90">
              Non perdere l'opportunità di ottenere fino a 4 milioni di euro a fondo perduto
            </p>
            <Link 
              href="/contatti" 
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-bold text-xl transition-colors inline-block"
            >
              💬 Richiedi Consulenza Gratuita
            </Link>
            <div className="text-sm opacity-90 mt-4">
              Documento preparato dal team Solarix Business - Aggiornato con le ultime informazioni ufficiali LIFE Programme 2025
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
