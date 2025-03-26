import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Analisi CER | SolarixBusiness',
  description: 'Richiedi un\'analisi per valutare le opportunità di partecipazione a una Comunità Energetica Rinnovabile.',
  keywords: 'analisi CER, comunità energetica, valutazione rinnovabili, studio fattibilità CER, autoconsumo collettivo',
  openGraph: {
    title: 'Analisi CER | SolarixBusiness',
    description: 'Scopri i vantaggi della partecipazione a una Comunità Energetica Rinnovabile con un\'analisi dedicata.',
    type: 'website',
    url: 'https://www.solarixbusiness.it/analisi-cer',
  },
}

export default function AnalisiCERLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 