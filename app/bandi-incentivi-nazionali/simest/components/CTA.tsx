import React from 'react';

export default function CTA() {
  return (
    <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-green-800 rounded-xl shadow-2xl p-8 text-white">
      {/* Header principale */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">
          SIMEST 2025: FINO A €5 MILIONI AL TASSO 0,371%
        </h2>
        <p className="text-xl font-semibold text-blue-100">
          IL FINANZIAMENTO PIÙ CONVENIENTE PER L'INTERNAZIONALIZZAZIONE
        </p>
      </div>

      {/* Novità straordinarie */}
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
        <h3 className="text-2xl font-bold mb-6 text-center text-yellow-300">
          NOVITÀ STRAORDINARIE 2025:
        </h3>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Imprese Energivore */}
          <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg p-6 border border-orange-300/30">
            <h4 className="text-xl font-bold mb-4 text-orange-200">
              IMPRESE ENERGIVORE - CONDIZIONI ESCLUSIVE:
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-orange-300 mr-2">•</span>
                €200.000 a fondo perduto (20% invece del 10% standard)
              </li>
              <li className="flex items-start">
                <span className="text-orange-300 mr-2">•</span>
                ESENZIONE TOTALE dalle garanzie
              </li>
              <li className="flex items-start">
                <span className="text-orange-300 mr-2">•</span>
                Finanziamento fino a €5 milioni a tasso quasi zero
              </li>
            </ul>
          </div>

          {/* Filiere Produttive */}
          <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg p-6 border border-green-300/30">
            <h4 className="text-xl font-bold mb-4 text-green-200">
              APERTURA ALLE FILIERE PRODUTTIVE:
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-green-300 mr-2">•</span>
                Accesso anche senza export diretto
              </li>
              <li className="flex items-start">
                <span className="text-green-300 mr-2">•</span>
                Sufficiente il 3% di fatturato export tramite clienti
              </li>
              <li className="flex items-start">
                <span className="text-green-300 mr-2">•</span>
                €2,5 milioni disponibili per PMI
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Strategia vincente */}
      <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-6 mb-8 border border-purple-300/30">
        <h3 className="text-2xl font-bold mb-4 text-center text-purple-200">
          STRATEGIA VINCENTE:
        </h3>
        <div className="text-center mb-4">
          <p className="text-xl font-bold text-yellow-300">
            SIMEST + CREDITI D'IMPOSTA = RISPARMIO FINO AL 70%
          </p>
        </div>
        
        <div className="bg-white/10 rounded-lg p-4">
          <h4 className="font-bold mb-3 text-purple-200">Caso reale: €1.000.000 di investimento</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="text-center">
              <p className="font-semibold text-green-300">SIMEST fondo perduto:</p>
              <p className="text-xl font-bold">€200.000</p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-blue-300">Credito d'imposta 4.0:</p>
              <p className="text-xl font-bold">€400.000</p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-yellow-300">Costo effettivo:</p>
              <p className="text-xl font-bold">€400.000</p>
            </div>
          </div>
        </div>
      </div>

      {/* Alert fondi limitati */}
      <div className="bg-red-600/30 border border-red-400 rounded-lg p-4 mb-8 text-center">
        <p className="text-xl font-bold text-red-200">
          FONDI LIMITATI - ASSEGNAZIONE A SPORTELLO
        </p>
      </div>

      {/* CTA finale */}
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-6 text-yellow-300">
          VERIFICA IMMEDIATA DEI REQUISITI
        </h3>
        
        {/* Bottone WhatsApp */}
        <div className="mb-6">
          <a
            href="https://wa.me/3470087833?text=Ciao,%20vorrei%20informazioni%20su%20SIMEST%202025%20per%20la%20mia%20azienda"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            CONTATTA SU WHATSAPP
          </a>
        </div>

        {/* Contatti */}
        <div className="space-y-2 text-sm text-blue-100">
          <p>
            <span className="font-semibold">Tel:</span> 011 1883 7752 | 
            <span className="font-semibold"> Cell:</span> 347 008 7833
          </p>
          <p>
            <span className="font-semibold">Email:</span> info@solarixbusiness.it
          </p>
          <p className="text-xs text-blue-200 mt-4">
            SolariX Business - Consulenza strategica per i finanziamenti agevolati
          </p>
        </div>
      </div>
    </div>
  );
}
