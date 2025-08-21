import React from 'react';

interface IndiceItem {
  id: string;
  title: string;
  parte: string;
}

const indiceItems: IndiceItem[] = [
  // Parte 1: Fondamenti Generali (Sezioni 1-12)
  { id: 'definizione-concetto-base', title: 'Definizione e Concetto Base', parte: 'Parte 1: Fondamenti Generali' },
  { id: 'quadro-normativo-europeo', title: 'Quadro Normativo Europeo', parte: 'Parte 1: Fondamenti Generali' },
  { id: 'normativa-italiana', title: 'Normativa Italiana', parte: 'Parte 1: Fondamenti Generali' },
  { id: 'soggetti-ammissibili', title: 'Soggetti Ammissibili', parte: 'Parte 1: Fondamenti Generali' },
  { id: 'requisiti-territoriali', title: 'Requisiti Territoriali', parte: 'Parte 1: Fondamenti Generali' },
  { id: 'vincoli-dimensionali', title: 'Vincoli Dimensionali', parte: 'Parte 1: Fondamenti Generali' },
  { id: 'tecnologie-ammissibili', title: 'Tecnologie Ammissibili', parte: 'Parte 1: Fondamenti Generali' },
  { id: 'principi-fondamentali', title: 'Principi Fondamentali', parte: 'Parte 1: Fondamenti Generali' },
  { id: 'benefici-ambientali', title: 'Benefici Ambientali', parte: 'Parte 1: Fondamenti Generali' },
  { id: 'benefici-economici', title: 'Benefici Economici', parte: 'Parte 1: Fondamenti Generali' },
  { id: 'benefici-sociali', title: 'Benefici Sociali', parte: 'Parte 1: Fondamenti Generali' },
  { id: 'sfide-opportunita', title: 'Sfide e Opportunità', parte: 'Parte 1: Fondamenti Generali' },

  // Parte 2: Sistema Incentivante (Sezioni 13-25)
  { id: 'panoramica-sistema-incentivante', title: 'Panoramica del Sistema Incentivante', parte: 'Parte 2: Sistema Incentivante' },
  { id: 'tariffa-incentivante-tip', title: 'Tariffa Incentivante (TIP)', parte: 'Parte 2: Sistema Incentivante' },
  { id: 'contributo-pnrr', title: 'Contributo PNRR', parte: 'Parte 2: Sistema Incentivante' },
  { id: 'cumulabilita-incentivi', title: 'Cumulabilità degli Incentivi', parte: 'Parte 2: Sistema Incentivante' },
  { id: 'calcolo-energia-condivisa', title: 'Calcolo dell\'Energia Condivisa', parte: 'Parte 2: Sistema Incentivante' },
  { id: 'valorizzazione-economica', title: 'Valorizzazione Economica', parte: 'Parte 2: Sistema Incentivante' },
  { id: 'ripartizione-benefici', title: 'Ripartizione dei Benefici', parte: 'Parte 2: Sistema Incentivante' },
  { id: 'durata-incentivazione', title: 'Durata dell\'Incentivazione', parte: 'Parte 2: Sistema Incentivante' },
  { id: 'modalita-erogazione', title: 'Modalità di Erogazione', parte: 'Parte 2: Sistema Incentivante' },
  { id: 'monitoraggio-controlli', title: 'Monitoraggio e Controlli', parte: 'Parte 2: Sistema Incentivante' },
  { id: 'aspetti-fiscali-incentivi', title: 'Aspetti Fiscali degli Incentivi', parte: 'Parte 2: Sistema Incentivante' },
  { id: 'esempi-calcolo', title: 'Esempi di Calcolo', parte: 'Parte 2: Sistema Incentivante' },
  { id: 'ottimizzazione-benefici', title: 'Ottimizzazione dei Benefici', parte: 'Parte 2: Sistema Incentivante' },

  // Parte 3: Fasi Costituzione (Sezioni 26-41)
  { id: 'studio-fattibilita', title: 'Studio di Fattibilità', parte: 'Parte 3: Fasi Costituzione' },
  { id: 'analisi-preliminare', title: 'Analisi Preliminare', parte: 'Parte 3: Fasi Costituzione' },
  { id: 'coinvolgimento-stakeholder', title: 'Coinvolgimento degli Stakeholder', parte: 'Parte 3: Fasi Costituzione' },
  { id: 'business-plan', title: 'Business Plan', parte: 'Parte 3: Fasi Costituzione' },
  { id: 'costituzione-legale', title: 'Costituzione Legale', parte: 'Parte 3: Fasi Costituzione' },
  { id: 'autorizzazioni', title: 'Autorizzazioni', parte: 'Parte 3: Fasi Costituzione' },
  { id: 'realizzazione-impianti', title: 'Realizzazione degli Impianti', parte: 'Parte 3: Fasi Costituzione' },
  { id: 'avvio-operativo', title: 'Avvio Operativo', parte: 'Parte 3: Fasi Costituzione' },
  { id: 'gestione-contratti', title: 'Gestione dei Contratti', parte: 'Parte 3: Fasi Costituzione' },
  { id: 'comunicazione-membri', title: 'Comunicazione con i Membri', parte: 'Parte 3: Fasi Costituzione' },
  { id: 'formazione-competenze', title: 'Formazione e Competenze', parte: 'Parte 3: Fasi Costituzione' },
  { id: 'strumenti-digitali', title: 'Strumenti Digitali', parte: 'Parte 3: Fasi Costituzione' },
  { id: 'partnership-strategiche', title: 'Partnership Strategiche', parte: 'Parte 3: Fasi Costituzione' },
  { id: 'finanziamento-progetti', title: 'Finanziamento dei Progetti', parte: 'Parte 3: Fasi Costituzione' },
  { id: 'rischi-mitigazione', title: 'Rischi e Mitigazione', parte: 'Parte 3: Fasi Costituzione' },
  { id: 'monitoraggio-performance', title: 'Monitoraggio delle Performance', parte: 'Parte 3: Fasi Costituzione' },

  // Parte 4: Statuto e Governance (Sezioni 42-53)
  { id: 'sezione-42', title: 'Importanza dello Statuto per le CER', parte: 'Parte 4: Statuto e Governance' },
  { id: 'sezione-43', title: 'Forme Giuridiche per le CER', parte: 'Parte 4: Statuto e Governance' },
  { id: 'sezione-44', title: 'Struttura di uno Statuto CER', parte: 'Parte 4: Statuto e Governance' },
  { id: 'sezione-45', title: 'Titolo I: Fondamenti della CER', parte: 'Parte 4: Statuto e Governance' },
  { id: 'sezione-46', title: 'Titolo II: Membri della CER', parte: 'Parte 4: Statuto e Governance' },
  { id: 'sezione-47', title: 'Titolo III: Patrimonio e Gestione Economica', parte: 'Parte 4: Statuto e Governance' },
  { id: 'sezione-48', title: 'Titolo IV: Organi Sociali', parte: 'Parte 4: Statuto e Governance' },
  { id: 'sezione-49', title: 'Regolamento Interno Operativo', parte: 'Parte 4: Statuto e Governance' },
  { id: 'sezione-50', title: 'Clausole Specifiche per GSE', parte: 'Parte 4: Statuto e Governance' },
  { id: 'sezione-51', title: 'Disposizioni Finali', parte: 'Parte 4: Statuto e Governance' },
  { id: 'sezione-52', title: 'Checklist Statuto CER', parte: 'Parte 4: Statuto e Governance' },
  { id: 'sezione-53', title: 'Varianti per Diverse Forme Giuridiche', parte: 'Parte 4: Statuto e Governance' },

  // Parte 5: Casi Pratici e Conclusioni (Sezioni 54-64)
  { id: 'sezione-54', title: 'Casi Pratici di CER', parte: 'Parte 5: Casi Pratici e Conclusioni' },
  { id: 'sezione-55', title: 'Aspetti Fiscali delle CER', parte: 'Parte 5: Casi Pratici e Conclusioni' },
  { id: 'sezione-56', title: 'Gestione Operativa Avanzata', parte: 'Parte 5: Casi Pratici e Conclusioni' },
  { id: 'sezione-57', title: 'Best Practices Gestionali', parte: 'Parte 5: Casi Pratici e Conclusioni' },
  { id: 'sezione-58', title: 'Gestione Rischi e Criticità', parte: 'Parte 5: Casi Pratici e Conclusioni' },
  { id: 'sezione-59', title: 'Innovazioni e Sviluppi Futuri', parte: 'Parte 5: Casi Pratici e Conclusioni' },
  { id: 'sezione-60', title: 'Valutazione dell\'Impatto', parte: 'Parte 5: Casi Pratici e Conclusioni' },
  { id: 'sezione-61', title: 'Errori Comuni da Evitare', parte: 'Parte 5: Casi Pratici e Conclusioni' },
  { id: 'sezione-62', title: 'Fattori Critici di Successo', parte: 'Parte 5: Casi Pratici e Conclusioni' },
  { id: 'sezione-63', title: 'Checklist Finale per CER di Successo', parte: 'Parte 5: Casi Pratici e Conclusioni' },
  { id: 'sezione-64', title: 'Conclusioni', parte: 'Parte 5: Casi Pratici e Conclusioni' },
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
            <div key={parte} className="border-l-4 border-green-500 pl-4">
              <h3 className="text-lg font-semibold text-green-900 mb-3">{parte}</h3>
              <div className="grid md:grid-cols-2 gap-2">
                {items.map((item) => {
                  globalIndex++;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="text-left p-3 rounded-lg border border-gray-200 text-sm hover:bg-green-50 hover:border-green-300 transition-colors cursor-pointer block"
                    >
                      <span className="font-medium text-green-700">{globalIndex}.</span> {item.title}
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