import { Metadata } from 'next'
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

export default function FAQPage() {
  // Definizione delle FAQ per i dati strutturati
  const faqItems: FaqItem[] = [
    {
      question: "Quali sono i vantaggi di un impianto fotovoltaico per la mia azienda?",
      answer: "Un impianto fotovoltaico offre numerosi vantaggi per le aziende: riduzione significativa dei costi energetici, indipendenza dalle fluttuazioni dei prezzi dell'energia, miglioramento dell'immagine aziendale grazie all'impegno per la sostenibilità, accesso a incentivi fiscali e contributi statali, e un rapido ritorno dell'investimento (generalmente tra i 3 e i 7 anni)."
    },
    {
      question: "Quanto costa un impianto fotovoltaico per un'azienda?",
      answer: "Il costo di un impianto fotovoltaico per un'azienda dipende da diversi fattori: dimensione dell'impianto, tipo di installazione (a terra, su tetto piano o inclinato), qualità dei componenti scelti e complessità dell'installazione. In media, per impianti industriali, il costo può variare da 800€ a 1.200€ per kWp installato. Offriamo preventivi personalizzati gratuiti per valutare il caso specifico della tua azienda."
    },
    {
      question: "Quali incentivi sono disponibili per le aziende che installano impianti fotovoltaici?",
      answer: "Le aziende che installano impianti fotovoltaici possono beneficiare di diversi incentivi: detrazioni fiscali, ammortamento accelerato, credito d'imposta per investimenti in beni strumentali, e in alcuni casi contributi regionali o locali. Inoltre, è possibile accedere a meccanismi come lo Scambio sul Posto o il ritiro dedicato dell'energia prodotta in eccesso."
    },
    {
      question: "Quanto tempo è necessario per installare un impianto fotovoltaico aziendale?",
      answer: "I tempi di installazione variano in base alla dimensione e alla complessità dell'impianto. Per un impianto aziendale di medie dimensioni (50-100 kWp), l'installazione fisica richiede generalmente da 2 a 4 settimane. Tuttavia, l'intero processo, compresi permessi, progettazione e allacciamento alla rete, può richiedere da 2 a 4 mesi. Il nostro team gestisce l'intero processo per minimizzare i disagi alla tua attività."
    },
    {
      question: "È possibile installare un impianto fotovoltaico su qualsiasi tipo di tetto aziendale?",
      answer: "La maggior parte dei tetti aziendali è adatta all'installazione di impianti fotovoltaici, ma ci sono alcuni fattori da considerare: l'orientamento e l'inclinazione del tetto, la presenza di ombreggiamenti, la capacità portante della struttura e lo stato di conservazione della copertura. Effettuiamo sempre un sopralluogo tecnico preliminare per valutare la fattibilità dell'installazione e proporre la soluzione più adatta."
    }
  ];

  return (
    <>
      <SeoManager 
        canonicalPath="/faq"
        faqItems={faqItems}
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
        <FAQ />
      </div>
    </>
  )
}
