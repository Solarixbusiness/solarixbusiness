import React from 'react';

interface IndiceItem {
  id: string;
  title: string;
  parte: string;
}

const indiceItems: IndiceItem[] = [
  // INTRODUZIONE - Sezioni 1-7
  { id: 'sezione-0', title: 'Panoramica Generale e Contesto Normativo', parte: 'INTRODUZIONE: Il Conto Termico 3.0: Una Nuova Era per l\'Efficienza Energetica' },
  { id: 'sezione-0', title: 'Beneficiari e Ambiti di Applicazione', parte: 'INTRODUZIONE: Il Conto Termico 3.0: Una Nuova Era per l\'Efficienza Energetica' },
  { id: 'sezione-0', title: 'Interventi Ammissibili e Innovazioni Tecnologiche', parte: 'INTRODUZIONE: Il Conto Termico 3.0: Una Nuova Era per l\'Efficienza Energetica' },
  { id: 'sezione-0', title: 'Requisiti Tecnici e Standard Ambientali', parte: 'INTRODUZIONE: Il Conto Termico 3.0: Una Nuova Era per l\'Efficienza Energetica' },
  { id: 'sezione-0', title: 'Calcolo e Erogazione degli Incentivi', parte: 'INTRODUZIONE: Il Conto Termico 3.0: Una Nuova Era per l\'Efficienza Energetica' },
  { id: 'sezione-0', title: 'Procedure Amministrative e Gestione Operativa', parte: 'INTRODUZIONE: Il Conto Termico 3.0: Una Nuova Era per l\'Efficienza Energetica' },
  { id: 'sezione-0', title: 'Impatti e Prospettive del Sistema', parte: 'INTRODUZIONE: Il Conto Termico 3.0: Una Nuova Era per l\'Efficienza Energetica' },

  // PARTE 1 - Sezioni 8-12
  { id: 'sezione-1', title: 'Introduzione: L\'Evoluzione Strategica del Conto Termico', parte: 'Parte 1: Introduzione e Quadro Generale' },
  { id: 'sezione-1', title: 'Il Contesto Normativo e gli Obiettivi Strategici', parte: 'Parte 1: Introduzione e Quadro Generale' },
  { id: 'sezione-1', title: 'L\'Attenzione Strategica per Imprese e Pubblica Amministrazione', parte: 'Parte 1: Introduzione e Quadro Generale' },
  { id: 'sezione-1', title: 'I Principi Fondamentali della Nuova Disciplina', parte: 'Parte 1: Introduzione e Quadro Generale' },
  { id: 'sezione-1', title: 'Budget e Dotazione Finanziaria', parte: 'Parte 1: Introduzione e Quadro Generale' },

  // PARTE 2 - Sezioni 13-15
  { id: 'sezione-2', title: 'Soggetti Beneficiari: Chi Può Accedere agli Incentivi', parte: 'Parte 2: Soggetti Beneficiari e Categorie Catastali Ammissibili' },
  { id: 'sezione-2', title: 'Categorie Catastali Ammissibili: La Mappa degli Edifici Incentivabili', parte: 'Parte 2: Soggetti Beneficiari e Categorie Catastali Ammissibili' },
  { id: 'sezione-2', title: 'Requisiti Generali di Ammissibilità', parte: 'Parte 2: Soggetti Beneficiari e Categorie Catastali Ammissibili' },

  // PARTE 3 - Sezioni 16-20
  { id: 'sezione-3', title: 'Tipologie di Intervento Incentivabili', parte: 'Parte 3: Interventi di Efficienza Energetica - Tipologie e Requisiti Tecnici' },
  { id: 'sezione-3', title: 'Articolo 5 - Interventi di Incremento dell\'Efficienza Energetica', parte: 'Parte 3: Interventi di Efficienza Energetica - Tipologie e Requisiti Tecnici' },
  { id: 'sezione-3', title: 'Innovazioni Tecnologiche e Premialità', parte: 'Parte 3: Interventi di Efficienza Energetica - Tipologie e Requisiti Tecnici' },
  { id: 'sezione-3', title: 'Metodologie di Calcolo degli Incentivi', parte: 'Parte 3: Interventi di Efficienza Energetica - Tipologie e Requisiti Tecnici' },
  { id: 'sezione-3', title: 'Procedure e Documentazione', parte: 'Parte 3: Interventi di Efficienza Energetica - Tipologie e Requisiti Tecnici' },

  // PARTE 4 - Sezioni 21-30
  { id: 'sezione-4', title: 'Panoramica delle Tecnologie Incentivate', parte: 'Parte 4: Interventi di Produzione di Energia Termica da Fonti Rinnovabili' },
  { id: 'sezione-4', title: 'Pompe di Calore: Il Cuore della Transizione', parte: 'Parte 4: Interventi di Produzione di Energia Termica da Fonti Rinnovabili' },
  { id: 'sezione-4', title: 'Generatori a Biomassa: Qualità e Sostenibilità', parte: 'Parte 4: Interventi di Produzione di Energia Termica da Fonti Rinnovabili' },
  { id: 'sezione-4', title: 'Solare Termico: Efficienza e Innovazione', parte: 'Parte 4: Interventi di Produzione di Energia Termica da Fonti Rinnovabili' },
  { id: 'sezione-4', title: 'Sistemi Ibridi e Bivalenti: Flessibilità Energetica', parte: 'Parte 4: Interventi di Produzione di Energia Termica da Fonti Rinnovabili' },
  { id: 'sezione-4', title: 'Scaldacqua a Pompa di Calore', parte: 'Parte 4: Interventi di Produzione di Energia Termica da Fonti Rinnovabili' },
  { id: 'sezione-4', title: 'Teleriscaldamento Efficiente', parte: 'Parte 4: Interventi di Produzione di Energia Termica da Fonti Rinnovabili' },
  { id: 'sezione-4', title: 'Microcogenerazione da Fonti Rinnovabili', parte: 'Parte 4: Interventi di Produzione di Energia Termica da Fonti Rinnovabili' },
  { id: 'sezione-4', title: 'Metodologie di Calcolo degli Incentivi', parte: 'Parte 4: Interventi di Produzione di Energia Termica da Fonti Rinnovabili' },
  { id: 'sezione-4', title: 'Controlli e Monitoraggio', parte: 'Parte 4: Interventi di Produzione di Energia Termica da Fonti Rinnovabili' },

  // PARTE 5 - Sezioni 31-43
  { id: 'sezione-5', title: 'Architettura del Sistema di Calcolo', parte: 'Parte 5: Metodologie di Calcolo Dettagliate, Coefficienti e Tabelle di Valorizzazione' },
  { id: 'sezione-5', title: 'Metodologie per Efficienza Energetica (Articolo 5)', parte: 'Parte 5: Metodologie di Calcolo Dettagliate, Coefficienti e Tabelle di Valorizzazione' },
  { id: 'sezione-5', title: 'Metodologie per Energia Rinnovabile (Articolo 8)', parte: 'Parte 5: Metodologie di Calcolo Dettagliate, Coefficienti e Tabelle di Valorizzazione' },
  { id: 'sezione-5', title: 'Generatori a Biomassa - Metodologie Specifiche', parte: 'Parte 5: Metodologie di Calcolo Dettagliate, Coefficienti e Tabelle di Valorizzazione' },
  { id: 'sezione-5', title: 'Solare Termico - Valorizzazione per Superficie', parte: 'Parte 5: Metodologie di Calcolo Dettagliate, Coefficienti e Tabelle di Valorizzazione' },
  { id: 'sezione-5', title: 'Sistemi Ibridi e Bivalenti', parte: 'Parte 5: Metodologie di Calcolo Dettagliate, Coefficienti e Tabelle di Valorizzazione' },
  { id: 'sezione-5', title: 'Infrastrutture Ricarica e Fotovoltaico', parte: 'Parte 5: Metodologie di Calcolo Dettagliate, Coefficienti e Tabelle di Valorizzazione' },
  { id: 'sezione-5', title: 'Teleriscaldamento e Microcogenerazione', parte: 'Parte 5: Metodologie di Calcolo Dettagliate, Coefficienti e Tabelle di Valorizzazione' },
  { id: 'sezione-5', title: 'Scaldacqua a Pompa di Calore (40% spesa)', parte: 'Parte 5: Metodologie di Calcolo Dettagliate, Coefficienti e Tabelle di Valorizzazione' },
  { id: 'sezione-5', title: 'Diagnosi Energetica e Certificazione', parte: 'Parte 5: Metodologie di Calcolo Dettagliate, Coefficienti e Tabelle di Valorizzazione' },
  { id: 'sezione-5', title: 'Durata degli Incentivi', parte: 'Parte 5: Metodologie di Calcolo Dettagliate, Coefficienti e Tabelle di Valorizzazione' },
  { id: 'sezione-5', title: 'Gestione Finanziaria e Limiti', parte: 'Parte 5: Metodologie di Calcolo Dettagliate, Coefficienti e Tabelle di Valorizzazione' },
  { id: 'sezione-5', title: 'Controlli e Verifiche', parte: 'Parte 5: Metodologie di Calcolo Dettagliate, Coefficienti e Tabelle di Valorizzazione' },

  // PARTE 6 - Sezioni 44-53
  { id: 'sezione-6', title: 'Architettura delle Procedure di Accesso', parte: 'Parte 6: Procedure di Accesso, Controlli e Gestione Contrattuale' },
  { id: 'sezione-6', title: 'Accesso Diretto: Semplicità e Velocità', parte: 'Parte 6: Procedure di Accesso, Controlli e Gestione Contrattuale' },
  { id: 'sezione-6', title: 'Accesso tramite Prenotazione: Programmazione Strategica', parte: 'Parte 6: Procedure di Accesso, Controlli e Gestione Contrattuale' },
  { id: 'sezione-6', title: 'Gestione Temporale delle Prenotazioni', parte: 'Parte 6: Procedure di Accesso, Controlli e Gestione Contrattuale' },
  { id: 'sezione-6', title: 'Catalogo Apparecchi Domestici: Semplificazione Operativa', parte: 'Parte 6: Procedure di Accesso, Controlli e Gestione Contrattuale' },
  { id: 'sezione-6', title: 'Gestione tramite ESCO e Terzi', parte: 'Parte 6: Procedure di Accesso, Controlli e Gestione Contrattuale' },
  { id: 'sezione-6', title: 'Sistema di Controlli e Verifiche', parte: 'Parte 6: Procedure di Accesso, Controlli e Gestione Contrattuale' },
  { id: 'sezione-6', title: 'Violazioni e Sanzioni', parte: 'Parte 6: Procedure di Accesso, Controlli e Gestione Contrattuale' },
  { id: 'sezione-6', title: 'Conservazione Documentale e Obblighi', parte: 'Parte 6: Procedure di Accesso, Controlli e Gestione Contrattuale' },
  { id: 'sezione-6', title: 'Integrazione Sistemi Informativi', parte: 'Parte 6: Procedure di Accesso, Controlli e Gestione Contrattuale' },

  // PARTE 7 - Sezioni 54-57
  { id: 'sezione-7', title: 'Controlli e Verifiche: Architettura Integrata', parte: 'Parte 7 Finale: Controlli, Verifiche e Raccomandazioni Strategiche' },
  { id: 'sezione-7', title: 'Raccomandazioni Strategiche Settoriali', parte: 'Parte 7 Finale: Controlli, Verifiche e Raccomandazioni Strategiche' },
  { id: 'sezione-7', title: 'Conclusioni e Valutazioni Strategiche', parte: 'Parte 7 Finale: Controlli, Verifiche e Raccomandazioni Strategiche' },
  { id: 'sezione-7', title: 'Vision Strategica e Prospettive Future', parte: 'Parte 7 Finale: Controlli, Verifiche e Raccomandazioni Strategiche' },
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
      </div>
    </div>
  );
}