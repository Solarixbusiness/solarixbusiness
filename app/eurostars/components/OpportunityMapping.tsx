'use client';

interface OpportunityMappingProps {
  expandedSection: string | null;
  toggleSectionAction: (section: string) => void;
}

export default function OpportunityMapping({ expandedSection, toggleSectionAction }: OpportunityMappingProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
      <button
        onClick={() => toggleSectionAction('opportunita')}
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
  );
}
