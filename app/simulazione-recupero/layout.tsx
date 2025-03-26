import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Simulazione Recupero Finanziario | SolarixBusiness',
  description: 'Richiedi una simulazione personalizzata per il recupero degli investimenti energetici attraverso incentivi, agevolazioni e strumenti finanziari dedicati.',
  keywords: 'simulazione recupero, incentivi energia, calcolo ROI, agevolazioni fotovoltaico, recupero investimenti green',
  openGraph: {
    title: 'Simulazione Recupero Finanziario | SolarixBusiness',
    description: 'Calcola il potenziale di recupero dei tuoi investimenti energetici con una simulazione personalizzata.',
    type: 'website',
    url: 'https://www.solarixbusiness.it/simulazione-recupero',
  },
}

export default function SimulazioneRecuperoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 