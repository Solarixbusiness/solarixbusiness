import React from 'react';

export default function CTA() {
  return (
    <div className="bg-gradient-to-r from-green-600 to-emerald-600 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-6">
            TRASFORMA LA TUA AZIENDA IN PROTAGONISTA DELLA RIVOLUZIONE ENERGETICA
          </h2>
          <h3 className="text-2xl font-semibold text-green-100 mb-4">
            Entra nella Prima Comunità Energetica Rinnovabile per le Aziende
          </h3>
          <p className="text-xl text-green-100 max-w-4xl mx-auto">
            Non essere più solo un consumatore di energia. Diventa un prosumer e guida il cambiamento verso un futuro sostenibile.
          </p>
        </div>

        <div className="bg-white rounded-lg p-8 mb-8">
          <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            VANTAGGI CON SOLARIX BUSINESS:
          </h4>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h5 className="text-xl font-bold text-green-800 mb-4">ECONOMICI:</h5>
              <ul className="space-y-2 text-gray-700">
                <li>• Riduci fino al 40% i costi energetici</li>
                <li>• Incentivi GSE per 20 anni sull'energia condivisa</li>
                <li>• Contributi PNRR fino al 40% dell'investimento</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h5 className="text-xl font-bold text-blue-800 mb-4">COMPETITIVI:</h5>
              <ul className="space-y-2 text-gray-700">
                <li>• Migliora il rating ESG e la brand reputation</li>
                <li>• Crea partnership strategiche con altre aziende del territorio</li>
                <li>• Anticipi le normative future come leader del settore</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg mb-8">
            <h5 className="text-xl font-bold text-yellow-800 mb-4 text-center">SERVIZIO COMPLETO:</h5>
            <p className="text-center text-gray-700">
              Analisi gratuita • Gestione pratiche • Zero investimenti infrastrutturali • Monitoraggio automatico
            </p>
          </div>

          <div className="bg-red-50 p-6 rounded-lg mb-8 text-center">
            <h5 className="text-xl font-bold text-red-800 mb-2">URGENTE:</h5>
            <p className="text-red-700 font-semibold">Fondi PNRR scadenza 30 novembre 2025</p>
          </div>
        </div>

        <div className="text-center">
          <h4 className="text-2xl font-bold text-white mb-6">CONSULENZA GRATUITA</h4>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <a 
              href="tel:01118837752"
              className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-300"
            >
              Tel: 011 1883 7752
            </a>
            
            <a 
              href="https://wa.me/393470087833"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-400 transition-colors duration-300 flex items-center gap-2"
            >
              WhatsApp: 347 008 7833
            </a>
            
            <a 
              href="mailto:info@solarixbusiness.it"
              className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-300"
            >
              Email: info@solarixbusiness.it
            </a>
          </div>
          
          <p className="text-green-100 font-semibold text-lg">
            SolariX Business - Trasformiamo la sostenibilità in competitività
          </p>
        </div>
      </div>
    </div>
  );
}
