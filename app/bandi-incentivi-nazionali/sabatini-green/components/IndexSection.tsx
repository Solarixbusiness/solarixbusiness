import React from 'react';

interface IndiceItem {
  id: string;
  title: string;
  parte: string;
}

const indiceItems: IndiceItem[] = [
  // PARTE 1 - Sezioni 1-4
  { id: 'sezione-1', title: 'Introduzione alla Nuova Sabatini Green', parte: 'Parte 1: Introduzione e Requisiti' },
  { id: 'sezione-2', title: 'Requisiti di Accesso', parte: 'Parte 1: Introduzione e Requisiti' },
  { id: 'sezione-3', title: 'Agevolazioni e Benefici', parte: 'Parte 1: Introduzione e Requisiti' },
  { id: 'sezione-4', title: 'Banche Convenzionate', parte: 'Parte 1: Introduzione e Requisiti' },

  // PARTE 2 - Sezioni 5-9
  { id: 'sezione-5', title: 'Procedura di Richiesta', parte: 'Parte 2: Procedura e Aspetti Operativi' },
  { id: 'sezione-6', title: 'Valutazione e Approvazione', parte: 'Parte 2: Procedura e Aspetti Operativi' },
  { id: 'sezione-7', title: 'Erogazione del Contributo', parte: 'Parte 2: Procedura e Aspetti Operativi' },
  { id: 'sezione-8', title: 'Obblighi e Vincoli', parte: 'Parte 2: Procedura e Aspetti Operativi' },
  { id: 'sezione-9', title: 'Domande Frequenti (FAQ)', parte: 'Parte 2: Procedura e Aspetti Operativi' },
];

// Raggruppa gli elementi per parte
const groupedItems = indiceItems.reduce((acc, item) => {
  if (!acc[item.parte]) {
    acc[item.parte] = [];
  }
  acc[item.parte].push(item);
  return acc;
}, {} as Record<string, IndiceItem[]>);

export default function IndexSection() {
  // Calcola la numerazione sequenziale
  let globalIndex = 0;
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Indice dei Contenuti</h2>
        
        <div className="space-y-6">
          {Object.entries(groupedItems).map(([parte, items]) => (
            <div key={parte} className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">{parte}</h3>
              <div className="grid md:grid-cols-2 gap-2">
                {items.map((item) => {
                  globalIndex++;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="text-left p-3 rounded-lg border border-gray-200 text-sm hover:bg-blue-50 hover:border-blue-300 transition-colors cursor-pointer block"
                    >
                      <span className="font-medium text-blue-700">{globalIndex}.</span> {item.title}
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-800">
            Clicca su una sezione per navigare direttamente al contenuto corrispondente nella pagina.
          </p>
        </div>
      </div>
    </div>
  );
}
