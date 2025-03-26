import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Parla con un consulente | solariXbusiness',
  description: 'Richiedi una consulenza gratuita con i nostri esperti. Rispondiamo alle tue domande senza impegno e ti aiutiamo a capire le opportunità per la tua azienda.',
  keywords: 'consulenza fotovoltaica, domande energia solare, esperti fotovoltaici, consulenza aziendale',
  openGraph: {
    title: 'Parla con un consulente | solariXbusiness',
    description: 'Richiedi una consulenza gratuita con i nostri esperti. Rispondiamo alle tue domande senza impegno e ti aiutiamo a capire le opportunità per la tua azienda.',
    url: 'https://www.solarixbusiness.it/parla-con-un-consulente',
    siteName: 'solariXbusiness',
    images: [
      {
        url: '/images/og-parla-consulente.jpg',
        width: 1200,
        height: 630,
        alt: 'Parla con un consulente',
      },
    ],
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Parla con un consulente | solariXbusiness',
    description: 'Richiedi una consulenza gratuita con i nostri esperti. Rispondiamo alle tue domande senza impegno e ti aiutiamo a capire le opportunità per la tua azienda.',
    images: ['/images/og-parla-consulente.jpg'],
  },
}

export default function ParlaConConsulenteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 