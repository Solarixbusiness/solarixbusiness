import { Metadata } from 'next'
import Link from 'next/link'
import FAQ from '@/components/FAQ/FAQ'
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'
import SeoManager from '@/components/SeoManager/SeoManager'
import { SEO_CONSTANTS } from '@/utils/seoConstants'
import { FaqItem } from '@/components/FaqSchema/FaqSchema'

export const metadata: Metadata = {
  title: 'FAQ | solariXbusiness',
  description: 'Domande frequenti sul fotovoltaico per aziende. Scopri tutto ciò che devi sapere sugli impianti fotovoltaici per la tua impresa.',
  keywords: 'faq fotovoltaico, domande frequenti fotovoltaico aziende, dubbi impianti solari, costi fotovoltaico industriale',
  openGraph: {
    title: 'FAQ sul Fotovoltaico per Aziende | solariXbusiness',
    description: 'Risposte alle domande più frequenti sul fotovoltaico per aziende. Costi, tempi, incentivi e vantaggi degli impianti fotovoltaici industriali.',
    url: 'https://www.solarixbusiness.it/faq',
    siteName: SEO_CONSTANTS.SITE_NAME,
    images: [
      {
        url: '/images/og-faq.jpg',
        width: 1200,
        height: 630,
        alt: 'FAQ solariXbusiness - Domande frequenti sul fotovoltaico aziendale',
      },
    ],
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ sul Fotovoltaico per Aziende | solariXbusiness',
    description: 'Risposte alle domande più frequenti sul fotovoltaico per aziende. Costi, tempi, incentivi e vantaggi degli impianti fotovoltaici industriali.',
    images: ['/images/og-faq.jpg'],
  },
}

// Organizzare le FAQ in categorie per migliorare la struttura e la navigazione
const financialFaqs: FaqItem[] = [
  {
    question: "Quali sono i vantaggi finanziari di un impianto fotovoltaico per la mia azienda?",
    answer: "Un impianto fotovoltaico rappresenta una vera leva finanziaria per le aziende: riduzione immediata dei costi energetici, protezione dalle fluttuazioni dei prezzi dell'energia, accesso a incentivi fiscali dedicati, possibilità di monetizzare i certificati verdi e i carbon credits, e un rapido ritorno dell'investimento (generalmente tra i 3 e i 7 anni) con successivi flussi di cassa positivi per oltre 25 anni."
  },
  {
    question: "Quali incentivi e agevolazioni fiscali sono disponibili per le aziende?",
    answer: "Le aziende possono beneficiare di diversi strumenti finanziari: detrazioni fiscali, ammortamento accelerato, credito d'imposta per investimenti in beni strumentali, meccanismi di scambio sul posto, e accesso a finanziamenti agevolati. La nostra consulenza si concentra sull'individuare e combinare gli incentivi più vantaggiosi per il vostro caso specifico, massimizzando il ritorno dell'investimento."
  },
  {
    question: "Quanto costa un impianto fotovoltaico per un'azienda e come si calcola il ritorno dell'investimento?",
    answer: "Il costo varia in base a diversi fattori, ma l'aspetto più importante è considerarlo come un investimento, non una spesa. Il ROI (ritorno sull'investimento) dipende da: consumo energetico attuale, tariffe pagate, capacità dell'impianto e incentivi applicabili. La nostra analisi finanziaria personalizzata valuta tutti questi fattori per mostrarvi esattamente quando l'impianto inizierà a generare profitto, generalmente tra il terzo e il settimo anno dall'installazione."
  }
];

const operationalFaqs: FaqItem[] = [
  {
    question: "Quanto tempo è necessario per implementare una soluzione fotovoltaica aziendale?",
    answer: "L'intero processo, dalla consulenza iniziale alla messa in funzione, richiede generalmente da 2 a 4 mesi. Questo include l'analisi finanziaria e dei consumi, la progettazione, l'ottenimento dei permessi, l'installazione fisica (2-4 settimane) e l'allacciamento alla rete. Il nostro team coordina l'intero processo con i partner tecnici selezionati, minimizzando l'impatto sulle vostre attività quotidiane."
  },
  {
    question: "È possibile installare un impianto fotovoltaico su qualsiasi tipo di tetto aziendale?",
    answer: "La maggior parte dei tetti aziendali è adatta all'installazione, ma è necessaria una valutazione tecnica preliminare per verificare: orientamento e inclinazione, presenza di ombreggiamenti, capacità portante della struttura e stato della copertura. In alternativa, esistono soluzioni a terra o su pensiline per parcheggi. Il nostro network di partners tecnici garantisce l'individuazione della soluzione più adatta al vostro caso specifico."
  }
];

const strategicFaqs: FaqItem[] = [
  {
    question: "Come il fotovoltaico può migliorare il posizionamento strategico della mia azienda?",
    answer: "Oltre ai vantaggi economici diretti, il fotovoltaico offre importanti benefici strategici: miglioramento dell'immagine aziendale grazie all'impegno per la sostenibilità, vantaggio competitivo nei confronti di clienti e partner sempre più attenti all'impatto ambientale, conformità anticipata a normative sempre più stringenti in materia di emissioni, e possibilità di ottenere certificazioni ambientali che aprono nuovi mercati e opportunità commerciali."
  },
  {
    question: "Posso combinare il fotovoltaico con altre soluzioni di efficientamento energetico?",
    answer: "Assolutamente sì, e questo rappresenta spesso la strategia più vantaggiosa. Un approccio integrato che combina fotovoltaico con sistemi di accumulo, pompe di calore, efficientamento dell'illuminazione o dei sistemi di riscaldamento/raffrescamento può massimizzare i benefici economici e ambientali. La nostra consulenza vi aiuta a sviluppare un piano energetico completo e su misura per le vostre esigenze."
  }
];

// Combinare tutte le FAQ per i dati strutturati
const allFaqItems: FaqItem[] = [...financialFaqs, ...operationalFaqs, ...strategicFaqs];

export default function FAQPage() {
  return (
    <>
      <SeoManager 
        canonicalPath="/faq"
        faqItems={allFaqItems}
        socialData={{
          title: 'FAQ sul Fotovoltaico per Aziende | solariXbusiness',
          description: 'Risposte alle domande più frequenti sul fotovoltaico per aziende. Costi, tempi, incentivi e vantaggi degli impianti fotovoltaici industriali.',
          ogImage: '/images/og-faq.jpg',
          ogType: 'website',
          twitterCard: 'summary_large_image'
        }}
      />
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs />
        
        {/* Introduzione contestuale */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">Domande frequenti sul fotovoltaico come leva finanziaria</h1>
          <p className="text-lg text-gray-600 mb-6">
            Il fotovoltaico rappresenta oggi una delle più potenti leve finanziarie a disposizione delle aziende. 
            Non si tratta solo di una soluzione energetica, ma di uno strumento strategico per migliorare la redditività, 
            ridurre i costi operativi e generare valore nel lungo periodo. Abbiamo raccolto le domande più frequenti 
            per aiutarti a comprendere come questa tecnologia possa trasformarsi in un vero asset finanziario per la tua impresa.
          </p>
        </div>
        
        {/* Sezione FAQ categorizzate */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Aspetti Finanziari */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-[#FF6600] py-4 px-6">
              <h2 className="text-xl font-bold text-white">Aspetti Finanziari</h2>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Scopri come il fotovoltaico può diventare un vero investimento con ritorni concreti e misurabili per la tua azienda.
              </p>
              <div className="space-y-4">
                {financialFaqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4">
                    <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                    <p className="text-gray-600 mt-2">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Aspetti Operativi */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-[#FF6600] py-4 px-6">
              <h2 className="text-xl font-bold text-white">Aspetti Operativi</h2>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Informazioni pratiche sull'implementazione e il funzionamento delle soluzioni fotovoltaiche per la tua impresa.
              </p>
              <div className="space-y-4">
                {operationalFaqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4">
                    <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                    <p className="text-gray-600 mt-2">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Aspetti Strategici */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-[#FF6600] py-4 px-6">
              <h2 className="text-xl font-bold text-white">Aspetti Strategici</h2>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Come integrare il fotovoltaico nella strategia aziendale per un vantaggio competitivo sostenibile nel lungo periodo.
              </p>
              <div className="space-y-4">
                {strategicFaqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                    <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                    <p className="text-gray-600 mt-2">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Contenuti correlati */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Approfondimenti consigliati</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/#incentivi" className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-[#FF6600] mb-2">Guida agli Incentivi 2025</h3>
              <p className="text-gray-600">Scopri tutti gli incentivi e le agevolazioni fiscali attualmente disponibili per le aziende.</p>
            </Link>
            <Link href="/analisi-personalizzata" className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-[#FF6600] mb-2">Analisi Finanziaria Personalizzata</h3>
              <p className="text-gray-600">Richiedi uno studio dettagliato sul potenziale risparmio e guadagno per la tua specifica situazione aziendale.</p>
            </Link>
            <Link href="/monetizzazione-ambientale" className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-[#FF6600] mb-2">Carbon Credits e Nuovi Mercati</h3>
              <p className="text-gray-600">Come monetizzare il tuo impegno ambientale attraverso i mercati dei crediti di carbonio.</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
