import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Analisi Incentivi | SolarixBusiness',
  description: 'Richiedi un\'analisi personalizzata degli incentivi disponibili per il tuo progetto energetico.',
  keywords: 'analisi incentivi, valutazione bandi, consulenza agevolazioni, studio fattibilità, analisi finanziamenti',
  openGraph: {
    title: 'Analisi Incentivi | SolarixBusiness',
    description: 'Scopri quali incentivi sono disponibili per il tuo progetto con un\'analisi personalizzata.',
    type: 'website',
    url: 'https://www.solarixbusiness.it/analisi-incentivi',
  },
}

export default function AnalisiIncentiviLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 