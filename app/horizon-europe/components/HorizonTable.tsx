'use client';

interface HorizonTableProps {
  openSections: { [key: string]: boolean };
}

export default function HorizonTable({ openSections }: HorizonTableProps) {
  return (
    <>
      {openSections['gruppi-tabella'] && (
        <div className="mt-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-green-100">
                  <th className="border border-gray-300 p-3 text-left font-bold">Gruppo</th>
                  <th className="border border-gray-300 p-3 text-left font-bold">Focus Principale</th>
                  <th className="border border-gray-300 p-3 text-left font-bold">Budget Indicativo</th>
                  <th className="border border-gray-300 p-3 text-left font-bold">Scadenze 2025</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium text-red-700">1. Salute</td>
                  <td className="border border-gray-300 p-3">Prevenzione malattie, cure personalizzate, invecchiamento sano</td>
                  <td className="border border-gray-300 p-3 font-bold text-green-600">€8.2 miliardi</td>
                  <td className="border border-gray-300 p-3">19 Feb, 17 Set</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium text-purple-700">2. Cultura e Società</td>
                  <td className="border border-gray-300 p-3">Democrazia, inclusione, creatività, identità europea</td>
                  <td className="border border-gray-300 p-3 font-bold text-green-600">€2.3 miliardi</td>
                  <td className="border border-gray-300 p-3">20 Feb, 18 Set</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium text-orange-700">3. Sicurezza Civile</td>
                  <td className="border border-gray-300 p-3">Protezione da crimini, disastri, attacchi cyber</td>
                  <td className="border border-gray-300 p-3 font-bold text-green-600">€1.4 miliardi</td>
                  <td className="border border-gray-300 p-3">27 Feb, 25 Set</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium text-blue-700">4. Digitale e Industria</td>
                  <td className="border border-gray-300 p-3">Tecnologie avanzate, manifattura, spazio</td>
                  <td className="border border-gray-300 p-3 font-bold text-green-600">€15.3 miliardi</td>
                  <td className="border border-gray-300 p-3">18 Mar, 16 Set</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium text-green-700">5. Clima ed Energia</td>
                  <td className="border border-gray-300 p-3">Energie rinnovabili, efficienza, sostenibilità</td>
                  <td className="border border-gray-300 p-3 font-bold text-green-600">€15.1 miliardi</td>
                  <td className="border border-gray-300 p-3">10 Apr, 23 Set</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium text-teal-700">6. Alimentazione e Risorse</td>
                  <td className="border border-gray-300 p-3">
                    Agricoltura sostenibile, biodiversità, economia circolare
                  </td>
                  <td className="border border-gray-300 p-3 font-bold text-green-600">€9.1 miliardi</td>
                  <td className="border border-gray-300 p-3">15 Apr, 30 Set</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

