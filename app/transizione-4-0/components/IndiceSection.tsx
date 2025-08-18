import React from 'react';

interface IndiceItem {
  id: string;
  title: string;
  parte: string;
}

const indiceItems: IndiceItem[] = [
  // Parte 1: Quadro Normativo e Beneficiari (Sezioni 1-4)
  { id: 'introduzione-transizione-4-0', title: 'Introduzione alla Transizione 4.0', parte: 'Parte 1: Quadro Normativo e Beneficiari' },
  { id: 'quadro-normativo', title: 'Quadro Normativo', parte: 'Parte 1: Quadro Normativo e Beneficiari' },
  { id: 'soggetti-beneficiari', title: 'Soggetti Beneficiari', parte: 'Parte 1: Quadro Normativo e Beneficiari' },
  { id: 'novita-2025', title: 'Novità 2025', parte: 'Parte 1: Quadro Normativo e Beneficiari' },

  // Parte 2: Beni Ammissibili e Crediti (Sezioni 5-8)
  { id: 'beni-ammissibili', title: 'Beni Ammissibili', parte: 'Parte 2: Beni Ammissibili e Crediti' },
  { id: 'aliquote-calcolo-credito', title: 'Aliquote e Calcolo del Credito', parte: 'Parte 2: Beni Ammissibili e Crediti' },
  { id: 'utilizzo-credito-imposta', title: 'Utilizzo del Credito d\'Imposta', parte: 'Parte 2: Beni Ammissibili e Crediti' },
  { id: 'comunicazioni-obbligatorie', title: 'Comunicazioni Obbligatorie', parte: 'Parte 2: Beni Ammissibili e Crediti' },

  // Parte 3: Documentazione e Controlli (Sezioni 9-12)
  { id: 'documentazione-necessaria', title: 'Documentazione Necessaria', parte: 'Parte 3: Documentazione e Controlli' },
  { id: 'controlli-verifiche', title: 'Controlli e Verifiche', parte: 'Parte 3: Documentazione e Controlli' },
  { id: 'faq-domande-frequenti', title: 'FAQ - Domande Frequenti', parte: 'Parte 3: Documentazione e Controlli' },
  { id: 'checklist-finale', title: 'Checklist Finale', parte: 'Parte 3: Documentazione e Controlli' },
];

// Raggruppa gli elementi per parte
const groupedItems = indiceItems.reduce((acc, item) => {
  if (!acc[item.parte]) {
    acc[item.parte] = [];
  }
  acc[item.parte].push(item);
  return acc;
}, {} as Record<string, IndiceItem[]>);

export default function IndiceSection() {
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
      </div>
    </div>
  );
}
