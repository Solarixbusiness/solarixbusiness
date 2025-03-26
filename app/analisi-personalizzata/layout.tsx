import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Analisi Personalizzata | SolarixBusiness',
  description: 'Richiedi un\'analisi personalizzata per ottimizzare la strategia energetica della tua azienda.',
  keywords: 'analisi energetica, studio consumi, ottimizzazione energetica, efficienza aziendale, audit energetico',
  openGraph: {
    title: 'Analisi Personalizzata | SolarixBusiness',
    description: 'Ottieni un\'analisi dettagliata per migliorare l\'efficienza energetica della tua azienda.',
    type: 'website',
    url: 'https://www.solarixbusiness.it/analisi-personalizzata',
  },
}

export default function AnalisiPersonalizzataLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 