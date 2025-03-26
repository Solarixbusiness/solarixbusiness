import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Accesso Incentivi e Bandi | SolarixBusiness',
  description: 'Scopri e accedi agli incentivi disponibili per i tuoi progetti energetici. Consulenza specializzata per bandi e agevolazioni.',
  keywords: 'incentivi energia, bandi fotovoltaico, agevolazioni green, finanziamenti rinnovabili, bonus energia',
  openGraph: {
    title: 'Accesso Incentivi e Bandi | SolarixBusiness',
    description: 'Massimizza le opportunità di finanziamento per i tuoi progetti energetici.',
    type: 'website',
    url: 'https://www.solarixbusiness.it/accesso-incentivi',
    images: [
      {
        url: 'https://www.solarixbusiness.it/images/og/accesso-incentivi.jpg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accesso agli Incentivi e Bandi | SolarixBusiness',
    description: 'Scopri gli incentivi per il fotovoltaico e accedi ai bandi disponibili grazie alla nostra rete di consulenza fiscale e agevolata.',
    images: ['https://www.solarixbusiness.it/images/og/incentivi-bandi.jpg'],
  },
}

export default function AccessoIncentiviLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 