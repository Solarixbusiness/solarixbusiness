import React from 'react';

interface IndiceItem {
  id: string;
  title: string;
  parte: string;
}

const indiceItems: IndiceItem[] = [
  // Parte 1: Quadro Normativo (Sezioni 1-8)
  { id: 'che-cose-piano', title: 'Che cos\'è il Piano Transizione 5.0', parte: 'Parte 1: Quadro Normativo' },
  { id: 'quadro-normativo', title: 'Quadro Normativo di Riferimento', parte: 'Parte 1: Quadro Normativo' },
  { id: 'natura-agevolazione', title: 'Natura dell\'Agevolazione', parte: 'Parte 1: Quadro Normativo' },
  { id: 'ambito-temporale', title: 'Ambito Temporale', parte: 'Parte 1: Quadro Normativo' },
  { id: 'requisito-fondamentale', title: 'Requisito Fondamentale: Riduzione Consumi Energetici', parte: 'Parte 1: Quadro Normativo' },
  { id: 'soggetti-beneficiari', title: 'Soggetti Beneficiari', parte: 'Parte 1: Quadro Normativo' },
  { id: 'obiettivi-strategici', title: 'Obiettivi Strategici del Piano', parte: 'Parte 1: Quadro Normativo' },
  { id: 'tipologie-investimenti', title: 'Tipologie di Investimenti Agevolabili', parte: 'Parte 1: Quadro Normativo' },

  // Parte 2: Procedura di Accesso (Sezioni 9-16)
  { id: 'panoramica-processo', title: 'Panoramica del Processo', parte: 'Parte 2: Procedura di Accesso' },
  { id: 'comunicazione-preventiva', title: 'Comunicazione Preventiva (Ex-Ante)', parte: 'Parte 2: Procedura di Accesso' },
  { id: 'esito-prenotazione', title: 'Esito della Prenotazione', parte: 'Parte 2: Procedura di Accesso' },
  { id: 'conferma-ordini', title: 'Conferma Ordini (20%)', parte: 'Parte 2: Procedura di Accesso' },
  { id: 'completamento-progetto', title: 'Completamento del Progetto', parte: 'Parte 2: Procedura di Accesso' },
  { id: 'comunicazione-completamento', title: 'Comunicazione di Completamento', parte: 'Parte 2: Procedura di Accesso' },
  { id: 'gestione-variazioni', title: 'Determinazione del Credito d\'Imposta', parte: 'Parte 2: Procedura di Accesso' },
  { id: 'utilizzo-credito', title: 'Utilizzo del Credito d\'Imposta', parte: 'Parte 2: Procedura di Accesso' },

  // Parte 3: Beni e Investimenti (Sezioni 17-24)
  { id: 'investimenti-principali', title: 'Investimenti Principali: Beni Materiali e Immateriali', parte: 'Parte 3: Beni e Investimenti' },
  { id: 'principio-dnsh', title: 'Principio DNSH (Do No Significant Harm)', parte: 'Parte 3: Beni e Investimenti' },
  { id: 'revoca-recupero', title: 'Revoca e Recupero', parte: 'Parte 3: Beni e Investimenti' },
  { id: 'formazione-personale', title: 'Formazione del Personale', parte: 'Parte 3: Beni e Investimenti' },
  { id: 'documentazione-certificazioni', title: 'Documentazione e Certificazioni', parte: 'Parte 3: Beni e Investimenti' },
  { id: 'imprese-nuova-costituzione', title: 'Imprese Nuova Costituzione', parte: 'Parte 3: Beni e Investimenti' },
  { id: 'limitazioni-vincoli', title: 'Limitazioni e Vincoli', parte: 'Parte 3: Beni e Investimenti' },
  { id: 'aspetti-contabili-fiscali', title: 'Aspetti Contabili e Fiscali', parte: 'Parte 3: Beni e Investimenti' },
  { id: 'faq-domande', title: 'FAQ - Domande Frequenti', parte: 'Parte 3: Beni e Investimenti' },
  { id: 'contatti-assistenza', title: 'Contatti e Assistenza', parte: 'Parte 3: Beni e Investimenti' },

  // Parte 4: Risparmio Energetico (Sezioni 25-32)
  { id: 'casi-studio', title: 'Casi di Studio', parte: 'Parte 4: Risparmio Energetico' },
  { id: 'confronto-transizione-4-0', title: 'Confronto con Transizione 4.0', parte: 'Parte 4: Risparmio Energetico' },
  { id: 'strumenti-calcolo', title: 'Strumenti di Calcolo', parte: 'Parte 4: Risparmio Energetico' },
  { id: 'integrazione-pnrr', title: 'Integrazione con PNRR', parte: 'Parte 4: Risparmio Energetico' },
  { id: 'normativa-riferimento', title: 'Normativa di Riferimento', parte: 'Parte 4: Risparmio Energetico' },
  { id: 'glossario', title: 'Glossario', parte: 'Parte 4: Risparmio Energetico' },
  { id: 'casi-studio-avanzati', title: 'Casi di Studio Avanzati', parte: 'Parte 4: Risparmio Energetico' },
  { id: 'formazione-competenze', title: 'Formazione e Competenze', parte: 'Parte 4: Risparmio Energetico' },

  // Parte 5: Cumulabilità (Sezioni 33-40)
  { id: 'cumulabilita-incentivi', title: 'Cumulabilità con Altri Incentivi', parte: 'Parte 5: Cumulabilità' },
  { id: 'innovazione-sostenibilita', title: 'Innovazione e Sostenibilità', parte: 'Parte 5: Cumulabilità' },
  { id: 'analisi-costi-benefici', title: 'Analisi Costi-Benefici', parte: 'Parte 5: Cumulabilità' },
  { id: 'internazionalizzazione-transizione', title: 'Internazionalizzazione e Transizione 5.0', parte: 'Parte 5: Cumulabilità' },
  { id: 'finanza-sostenibile', title: 'Transizione 5.0 e Finanza Sostenibile', parte: 'Parte 5: Cumulabilità' },
  { id: 'transizione-pnrr', title: 'Transizione 5.0 e PNRR', parte: 'Parte 5: Cumulabilità' },
  { id: 'transizione-intelligenza-artificiale', title: 'Transizione 5.0 e Intelligenza Artificiale', parte: 'Parte 5: Cumulabilità' },
  { id: 'transizione-blockchain', title: 'Transizione 5.0 e Blockchain', parte: 'Parte 5: Cumulabilità' },

  // Parte 6: Controlli e Aspetti Finali (Sezioni 41-43)
  { id: 'transizione-industria-4-0', title: 'Transizione 5.0 e Industria 4.0', parte: 'Parte 6: Controlli e Aspetti Finali' },
  { id: 'supply-chain-sostenibile', title: 'Transizione 5.0 e Supply Chain Sostenibile', parte: 'Parte 6: Controlli e Aspetti Finali' },
  { id: 'formazione-personale', title: 'Transizione 5.0 e Formazione del Personale', parte: 'Parte 6: Controlli e Aspetti Finali' },

  // Parte 7: Contatti e Assistenza (Sezioni 44-47)
  { id: 'monitoraggio-performance', title: 'Transizione 5.0 e Monitoraggio delle Performance', parte: 'Parte 7: Contatti e Assistenza' },
  { id: 'cybersecurity', title: 'Transizione 5.0 e Cybersecurity', parte: 'Parte 7: Contatti e Assistenza' },
  { id: 'innovazione-sostenibilita', title: 'Transizione 5.0 e Innovazione e Sostenibilità', parte: 'Parte 7: Contatti e Assistenza' },
  { id: 'formazione-personale', title: 'Transizione 5.0 e Formazione del Personale', parte: 'Parte 7: Contatti e Assistenza' },

  // Parte 8: Approfondimenti Tematici (Sezioni 48-55)
  { id: 'internazionalizzazione', title: 'Internazionalizzazione e Transizione 5.0', parte: 'Parte 8: Approfondimenti Tematici' },
  { id: 'finanza-sostenibile', title: 'Transizione 5.0 e Finanza Sostenibile', parte: 'Parte 8: Approfondimenti Tematici' },
  { id: 'formazione', title: 'Transizione 5.0 e Formazione', parte: 'Parte 8: Approfondimenti Tematici' },
  { id: 'innovazione', title: 'Transizione 5.0 e Innovazione', parte: 'Parte 8: Approfondimenti Tematici' },
  { id: 'economia-circolare', title: 'Transizione 5.0 ed Economia Circolare', parte: 'Parte 8: Approfondimenti Tematici' },
  { id: 'cybersecurity', title: 'Transizione 5.0 e Cybersecurity', parte: 'Parte 8: Approfondimenti Tematici' },
  { id: 'gestione-dati', title: 'Transizione 5.0 e Gestione dei Dati', parte: 'Parte 8: Approfondimenti Tematici' },
  { id: 'gestione-dati-avanzata', title: 'Transizione 5.0 e Gestione dei Dati Avanzata', parte: 'Parte 8: Approfondimenti Tematici' },
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
