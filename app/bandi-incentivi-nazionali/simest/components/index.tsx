import React from 'react';

interface IndiceItem {
  id: string;
  title: string;
  parte: string;
}

const indiceItems: IndiceItem[] = [
  // Executive Summary
  { id: 'executive-summary', title: 'Executive Summary: Le Novità Cruciali del 2025', parte: 'Executive Summary' },
  
  // Parte 1: Scenario e Regole del Gioco
  { id: 'sezione-1', title: 'Introduzione al Quadro Normativo', parte: 'Parte 1: Scenario e Regole del Gioco' },
  { id: 'sezione-2', title: 'Schema Operativo: Come Funziona il Bando', parte: 'Parte 1: Scenario e Regole del Gioco' },
  { id: 'sezione-3', title: 'Novità 2025: Focus Imprese Energivore e Filiere', parte: 'Parte 1: Scenario e Regole del Gioco' },

  // Parte 2: Cosa e Come Finanziare
  { id: 'sezione-4', title: 'Linee di Intervento e Strategie di Cumulo', parte: 'Parte 2: Cosa e Come Finanziare' },
  { id: 'sezione-5', title: 'Spese Ammissibili: Dettaglio Completo', parte: 'Parte 2: Cosa e Come Finanziare' },

  // Parte 3: La Procedura Passo-Passo
  { id: 'sezione-6', title: 'Procedure di Accesso: Step by Step', parte: 'Parte 3: La Procedura Passo-Passo' },
  { id: 'sezione-7', title: 'Gestione del Finanziamento', parte: 'Parte 3: La Procedura Passo-Passo' },

  // Parte 4: Ottimizzazione e Controllo
  { id: 'sezione-8', title: 'Premialità e Cumulabilità', parte: 'Parte 4: Ottimizzazione e Controllo' },
  { id: 'sezione-9', title: 'Controlli e Obblighi Post-Finanziamento', parte: 'Parte 4: Ottimizzazione e Controllo' },
  { id: 'sezione-10', title: 'Strategie per Massimizzare i Benefici', parte: 'Parte 4: Ottimizzazione e Controllo' },
  { id: 'sezione-11', title: 'FAQ Operative', parte: 'Parte 4: Ottimizzazione e Controllo' },
  { id: 'sezione-12', title: 'Checklist Pre-Domanda', parte: 'Parte 4: Ottimizzazione e Controllo' },

  // Parte 5: Conclusioni e Strumenti
  { id: 'conclusioni', title: 'Conclusioni', parte: 'Parte 5: Conclusioni e Strumenti' },
  { id: 'contatti', title: 'Contatti e Assistenza', parte: 'Parte 5: Conclusioni e Strumenti' },
  { id: 'appendici', title: 'Appendici', parte: 'Parte 5: Conclusioni e Strumenti' },
];

export default function IndiceSimest() {
  const groupedItems = indiceItems.reduce((acc, item) => {
    if (!acc[item.parte]) {
      acc[item.parte] = [];
    }
    acc[item.parte].push(item);
    return acc;
  }, {} as Record<string, IndiceItem[]>);

  let globalIndex = 0;

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-green-50 rounded-xl shadow-xl p-8 border border-blue-200">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
          INDICE DELLA GUIDA SIMEST 2025
        </h2>
        <p className="text-lg text-gray-600">
          Finanziamenti agevolati per l'internazionalizzazione delle imprese
        </p>
      </div>

      <div className="space-y-8">
        {Object.entries(groupedItems).map(([parte, items]) => (
          <div key={parte} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
            <h3 className="text-xl font-bold text-blue-900 mb-4">{parte}</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {items.map((item) => {
                globalIndex++;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="group flex items-start p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 cursor-pointer"
                  >
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      {globalIndex}
                    </span>
                    <div className="flex-1">
                      <span className="text-sm font-medium text-gray-800 group-hover:text-blue-700 transition-colors">
                        {item.title}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-blue-100 to-green-100 rounded-lg border border-blue-200">
        <div className="text-center">
          <h4 className="text-lg font-bold text-blue-800 mb-2">Navigazione Rapida</h4>
          <p className="text-sm text-blue-700">
            Clicca su qualsiasi sezione per accedere direttamente al contenuto. 
            La guida è strutturata per accompagnarti passo dopo passo nel processo SIMEST 2025.
          </p>
        </div>
      </div>
    </div>
  );
}
