'use client';

import { useState } from 'react';
import styles from './IncentiveSection.module.css';
import IncentiveForm from '../IncentiveForm/IncentiveForm';

const incentiveArticles = [
  {
    id: 'transition-5',
    type: 'national',
    title: 'Piano Transizione 5.0 – Automazione e Sostenibilità Energetica',
    context: 'La Transizione 5.0 rappresenta una svolta strategica per le aziende italiane: un piano di incentivi rivolto alle imprese che puntano su automazione, digitalizzazione ed efficienza energetica.',
    problem: 'Non cogliere questa opportunità significa perdere accesso a finanziamenti e agevolazioni che possono ridurre drasticamente i costi di trasformazione aziendale. In un mercato sempre più competitivo, chi non innova rischia di restare indietro.',
    solution: 'Il Piano Transizione 5.0 offre contributi a fondo perduto e crediti d\'imposta per investimenti in tecnologie avanzate, inclusi impianti fotovoltaici per l\'autosufficienza energetica. Con solariXbusiness, la tua azienda può accedere a questi incentivi senza complicazioni burocratiche.',
    benefits: [
      'Finanziamenti fino al 45% degli investimenti in innovazione e sostenibilità',
      'Riduzione dei costi energetici grazie all\'integrazione di impianti fotovoltaici',
      'Maggior competitività attraverso digitalizzazione e automazione',
      'Semplificazione burocratica: solariXbusiness gestisce tutto per te'
    ]
  },
  {
    id: 'sabatini-green',
    type: 'national',
    title: 'Nuova Sabatini Green – Finanziamenti Agevolati per le PMI',
    context: 'La Nuova Sabatini Green è un\'agevolazione pensata per le PMI italiane che investono in tecnologie innovative e sostenibili, comprese le energie rinnovabili.',
    problem: 'Molte aziende rinunciano ad ammodernare i propri impianti per via dei costi iniziali elevati. Questo significa maggiori spese operative nel lungo periodo e minore competitività.',
    solution: 'La Nuova Sabatini Green fornisce finanziamenti agevolati fino all\'80% dell\'investimento e contributi sugli interessi bancari, rendendo più accessibile l\'installazione di impianti fotovoltaici e altre soluzioni green.',
    benefits: [
      'Accesso a finanziamenti rapidi e semplificati',
      'Riduzione degli oneri finanziari grazie ai contributi statali',
      'Sostegno agli investimenti in impianti fotovoltaici e tecnologie sostenibili',
      'Miglioramento dell\'efficienza energetica e risparmio sui costi'
    ]
  },
  {
    id: 'fer2',
    type: 'national',
    title: 'Decreto FER2 – Incentivi per Impianti Rinnovabili Innovativi',
    context: 'Il Decreto FER2 è un programma di incentivi destinato a sostenere impianti rinnovabili innovativi, inclusi impianti fotovoltaici di nuova generazione e soluzioni avanzate di accumulo energetico.',
    problem: 'Senza incentivi, l\'adozione di tecnologie rinnovabili avanzate può risultare troppo costosa, limitando la diffusione di soluzioni ad alta efficienza e riducendo la competitività aziendale nel mercato dell\'energia.',
    solution: 'Il Decreto FER2 offre tariffe incentivanti e contributi a fondo perduto per chi investe in tecnologie rinnovabili innovative, facilitando l\'adozione di impianti fotovoltaici avanzati.',
    benefits: [
      'Tariffe incentivanti per l\'energia prodotta da impianti rinnovabili innovativi',
      'Contributi a fondo perduto per l\'installazione di nuove tecnologie',
      'Adozione di soluzioni di accumulo energetico per massimizzare l\'autoconsumo',
      'Riduzione della dipendenza dalla rete elettrica e taglio dei costi energetici'
    ]
  },
  {
    id: 'reverse-charge',
    type: 'national',
    title: 'Reverse Charge – IVA Agevolata per gli Impianti Fotovoltaici',
    context: 'Il Reverse Charge è un meccanismo fiscale che consente alle aziende di non anticipare l\'IVA sull\'acquisto e installazione di impianti fotovoltaici.',
    problem: 'Le imprese che acquistano impianti fotovoltaici con il metodo tradizionale devono pagare subito l\'IVA, aumentando la pressione finanziaria.',
    solution: 'Grazie al Reverse Charge, l\'IVA non viene versata immediatamente dal cliente, ma è contabilizzata e liquidata direttamente dal destinatario.',
    benefits: [
      'Nessun esborso immediato dell\'IVA sull\'acquisto dell\'impianto',
      'Migliore gestione della liquidità aziendale',
      'Semplificazione amministrativa e contabile',
      'Maggiore accessibilità agli impianti fotovoltaici per le aziende'
    ]
  },
  {
    id: 'bandi-regionali',
    type: 'regional',
    title: 'Bandi Regionali – Opportunità Locali per Aziende',
    context: 'I Bandi Regionali rappresentano una risorsa fondamentale per le aziende che desiderano investire in sostenibilità e innovazione con il supporto di contributi e agevolazioni locali.',
    problem: 'Molte imprese non sono a conoscenza di queste opportunità o trovano difficoltoso accedere ai fondi per via di procedure complesse.',
    solution: 'Con solariXbusiness puoi ottenere supporto nella richiesta e gestione dei finanziamenti regionali, accedendo a contributi che possono coprire fino al 70% dell\'investimento.',
    benefits: [
      'Accesso a fondi locali specifici per la tua Regione',
      'Riduzione dei costi per l\'installazione di impianti fotovoltaici',
      'Procedure semplificate grazie al supporto di esperti',
      'Maggiore competitività e sostenibilità per la tua azienda'
    ]
  },
  {
    id: 'csr-piemonte',
    type: 'regional',
    title: 'CSR Piemonte – Finanziamenti per le Aziende Piemontesi',
    context: 'Il CSR Piemonte è un programma di finanziamento dedicato alle aziende che operano nella Regione Piemonte.',
    problem: 'Molte imprese piemontesi non sfruttano i fondi disponibili per la crescita sostenibile a causa della scarsa informazione e complessità burocratica.',
    solution: 'Grazie al CSR Piemonte, le aziende possono ottenere contributi a fondo perduto fino al 50% dell\'investimento.',
    benefits: [
      'Fondi regionali per lo sviluppo sostenibile',
      'Copertura fino al 50% degli investimenti per impianti fotovoltaici',
      'Maggior efficienza energetica e riduzione dei costi aziendali',
      'Supporto completo nella richiesta dei finanziamenti'
    ]
  },
  {
    id: 'agrisolare',
    type: 'sector',
    title: 'Bando Agrisolare – Incentivi per il Settore Agricolo',
    context: 'Il Bando Agrisolare è un\'iniziativa dedicata alle imprese agricole che desiderano investire in impianti fotovoltaici e tecnologie sostenibili.',
    problem: 'L\'agricoltura è un settore ad alta intensità energetica, e i costi dell\'energia rappresentano una voce di spesa significativa.',
    solution: 'Grazie al Bando Agrisolare, le aziende agricole possono ottenere contributi a fondo perduto fino all\'80% per l\'installazione di impianti fotovoltaici.',
    benefits: [
      'Riduzione dei costi energetici per le aziende agricole',
      'Contributi a fondo perduto fino all\'80% dell\'investimento',
      'Miglioramento della sostenibilità e dell\'impatto ambientale',
      'Semplificazione burocratica e assistenza completa'
    ]
  },
  {
    id: 'cer',
    type: 'sector',
    title: 'Comunità Energetiche Rinnovabili (CER)',
    context: 'Le Comunità Energetiche Rinnovabili rappresentano una rivoluzione nel settore dell\'energia, permettendo la condivisione di energia rinnovabile prodotta localmente.',
    problem: 'L\'aumento dei costi energetici e la dipendenza dalla rete tradizionale rendono le aziende meno competitive.',
    solution: 'Le CER permettono di produrre, immagazzinare e condividere energia rinnovabile, ottenendo benefici economici e ambientali.',
    benefits: [
      'Riduzione delle bollette energetiche grazie all\'autoconsumo collettivo',
      'Accesso a incentivi e agevolazioni fiscali',
      'Maggiore indipendenza dalla rete elettrica tradizionale',
      'Contributo alla transizione ecologica'
    ]
  },
  {
    id: 'conto-termico',
    type: 'national',
    title: 'Conto Termico 3.0 – Contributi per l\'Efficientamento Energetico',
    context: 'Il Conto Termico 3.0 è un meccanismo di incentivazione per le aziende che vogliono migliorare l\'efficienza energetica degli edifici.',
    problem: 'Molte aziende hanno impianti obsoleti e ad alto consumo energetico, ma il costo iniziale per la loro sostituzione può essere elevato.',
    solution: 'Il Conto Termico 3.0 offre contributi a fondo perduto fino al 65% dell\'investimento per interventi di efficientamento energetico.',
    benefits: [
      'Riduzione dei consumi energetici e delle emissioni di CO2',
      'Contributi a fondo perduto fino al 65%',
      'Miglioramento dell\'efficienza energetica degli edifici aziendali',
      'Gestione semplificata della richiesta di incentivi'
    ]
  },
  {
    id: 'isi-inail',
    type: 'sector',
    title: 'ISI INAIL – Incentivi per la Bonifica dell\'Amianto',
    context: 'Il bando ISI INAIL nasce per incentivare gli interventi di miglioramento della sicurezza nei luoghi di lavoro, inclusa la bonifica dell\'amianto.',
    problem: 'Molte strutture industriali e agricole hanno coperture in amianto, il cui smaltimento comporta costi elevati.',
    solution: 'Gli incentivi del bando ISI INAIL offrono contributi a fondo perduto fino al 65% delle spese per la rimozione dell\'amianto.',
    benefits: [
      'Riduzione del rischio ambientale e miglioramento della sicurezza',
      'Contributi fino al 65% per la rimozione dell\'amianto',
      'Possibilità di installare impianti fotovoltaici su strutture rinnovate',
      'Gestione completa del progetto: dalla bonifica all\'installazione'
    ]
  }
];

const incentiveTypes = [
  {
    id: 'national',
    label: 'Nazionali',
    description: 'Incentivi disponibili su tutto il territorio nazionale'
  },
  {
    id: 'regional',
    label: 'Regionali',
    description: 'Incentivi specifici per la tua regione'
  },
  {
    id: 'sector',
    label: 'Settoriali',
    description: 'Incentivi dedicati al tuo settore'
  }
];

export default function IncentiveSection() {
  const [activeTab, setActiveTab] = useState('national');

  const filteredArticles = incentiveArticles.filter(article => article.type === activeTab);

  return (
    <section className={styles.incentiveSection}>
      <div className={styles.header}>
        <h2>Incentivi e Agevolazioni</h2>
        <p className={styles.subtitle}>
          Scopri tutte le opportunità di finanziamento per la tua azienda
        </p>
      </div>

      <div className={styles.content}>
        <div className={styles.incentiveTypes}>
          {incentiveTypes.map((type) => (
            <button
              key={type.id}
              className={`${styles.typeButton} ${activeTab === type.id ? styles.active : ''}`}
              onClick={() => setActiveTab(type.id)}
            >
              <span className={styles.typeLabel}>{type.label}</span>
              <span className={styles.typeDescription}>{type.description}</span>
            </button>
          ))}
        </div>

        <div className={styles.articlesGrid}>
          {filteredArticles.map((article) => (
            <article key={article.id} className={styles.articleCard}>
              <h3>{article.title}</h3>
              
              <div className={styles.articleSection}>
                <h4>Il Contesto</h4>
                <p>{article.context}</p>
              </div>

              <div className={styles.articleSection}>
                <h4>Problema/Rischio</h4>
                <p>{article.problem}</p>
              </div>

              <div className={styles.articleSection}>
                <h4>Soluzione/Incentivo</h4>
                <p>{article.solution}</p>
              </div>

              <div className={styles.benefitsSection}>
                <h4>Benefici Chiave</h4>
                <ul>
                  {article.benefits.map((benefit, index) => (
                    <li key={index}>
                      <span className={styles.checkIcon}>✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.formSection}>
          <IncentiveForm />
        </div>
      </div>
    </section>
  );
}