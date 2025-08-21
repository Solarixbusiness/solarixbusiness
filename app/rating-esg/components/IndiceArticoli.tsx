import React from 'react';

interface ArticleItem {
  id: string;
  title: string;
  section: string;
}

const articleItems: ArticleItem[] = [
  // Sezione 1: Fondamenti ESG e Preparazione
  { id: 'impresa-esg-ready', title: "La tua impresa è ESG ready? Guida completa per PMI italiane", section: "Sezione 1: Fondamenti ESG e Preparazione" },
  { id: 'sfide-pmi', title: "Le sfide delle PMI nell'era della sostenibilità: come superarle", section: "Sezione 1: Fondamenti ESG e Preparazione" },
  { id: 'reporting-integrato', title: "Reporting integrato: il futuro della comunicazione aziendale", section: "Sezione 1: Fondamenti ESG e Preparazione" },
  { id: 'preparazione-personale', title: "Come preparare il personale alla transizione ESG", section: "Sezione 1: Fondamenti ESG e Preparazione" },
  { id: 'costi-csrd', title: "I costi nascosti della CSRD: budget e pianificazione", section: "Sezione 1: Fondamenti ESG e Preparazione" },

  // Sezione 2: Strumenti e Tecnologie
  { id: 'software-strumenti', title: "Software e strumenti digitali per la gestione ESG", section: "Sezione 2: Strumenti e Tecnologie" },
  { id: 'intelligenza-artificiale', title: "Intelligenza artificiale applicata alla sostenibilità aziendale", section: "Sezione 2: Strumenti e Tecnologie" },
  { id: 'best-practice', title: "Best practice ESG: casi di successo italiani", section: "Sezione 2: Strumenti e Tecnologie" },
  { id: 'valore-mercato', title: "Come la sostenibilità crea valore di mercato", section: "Sezione 2: Strumenti e Tecnologie" },
  { id: 'kpi-indicatori', title: "KPI e indicatori ESG: misurare per migliorare", section: "Sezione 2: Strumenti e Tecnologie" },

  // Sezione 3: Implementazione e Opportunità
  { id: 'difficolta-implementazione', title: "Le difficoltà di implementazione dei criteri ESG", section: "Sezione 3: Implementazione e Opportunità" },
  { id: 'opportunita-business', title: "Opportunità di business nella transizione verde", section: "Sezione 3: Implementazione e Opportunità" },
  { id: 'incentivi-supporti', title: "Incentivi e supporti pubblici per la sostenibilità", section: "Sezione 3: Implementazione e Opportunità" },
  { id: 'gestione-rischi-esg', title: "Gestione dei rischi ESG: approcci e metodologie", section: "Sezione 3: Implementazione e Opportunità" },
  { id: 'sistema-bancario', title: "ESG e sistema bancario: nuovi criteri di valutazione", section: "Sezione 3: Implementazione e Opportunità" },

  // Sezione 4: Rischi e Compliance
  { id: 'settori-esposti', title: "Settori più esposti ai rischi climatici e ambientali", section: "Sezione 4: Rischi e Compliance" },
  { id: 'strategie-gestione-rischi', title: "Strategie di gestione del rischio ESG", section: "Sezione 4: Rischi e Compliance" },
  { id: 'sanzioni-compliance', title: "Sanzioni e compliance: evitare le penalità", section: "Sezione 4: Rischi e Compliance" },
  { id: 'differenze-nfrd', title: "Differenze tra CSRD e NFRD: cosa cambia", section: "Sezione 4: Rischi e Compliance" },
  { id: 'doppia-materialita', title: "Doppia materialità: principi e applicazione pratica", section: "Sezione 4: Rischi e Compliance" }
];

// Raggruppa gli articoli per sezione
const groupedArticles = articleItems.reduce((acc, item) => {
  if (!acc[item.section]) {
    acc[item.section] = [];
  }
  acc[item.section].push(item);
  return acc;
}, {} as Record<string, ArticleItem[]>);

export default function IndiceArticoli() {
  // Calcola la numerazione sequenziale
  let globalIndex = 0;
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Indice dei Contenuti</h2>
        
        <div className="space-y-6">
          {Object.entries(groupedArticles).map(([section, items]) => (
            <div key={section} className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">{section}</h3>
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