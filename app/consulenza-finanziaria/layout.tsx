import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Consulenza Finanziaria Integrata | SolarixBusiness',
  description: 'Ottimizza gli investimenti energetici con la nostra consulenza finanziaria integrata. Accedi a incentivi, agevolazioni e strumenti finanziari dedicati.',
  keywords: 'consulenza finanziaria, finanza agevolata, incentivi energia, bandi fotovoltaico, finanziamenti green, consulenza fiscale, agevolazioni imprese',
  openGraph: {
    title: 'Consulenza Finanziaria Integrata | SolarixBusiness',
    description: 'Massimizza il ritorno dei tuoi investimenti energetici con una strategia finanziaria integrata e personalizzata.',
    type: 'website',
    url: 'https://www.solarixbusiness.it/consulenza-finanziaria',
    images: [
      {
        url: 'https://www.solarixbusiness.it/images/og/consulenza-finanziaria.jpg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Consulenza Finanziaria Integrata | SolarixBusiness',
    description: 'Scopri come ottimizzare i tuoi investimenti energetici con una strategia finanziaria personalizzata.',
    images: ['https://www.solarixbusiness.it/images/og/consulenza-finanziaria.jpg'],
  },
}

export default function ConsulenzaFinanziariaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 