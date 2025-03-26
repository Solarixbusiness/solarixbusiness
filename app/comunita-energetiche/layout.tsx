import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Comunità Energetiche Rinnovabili | SolarixBusiness',
  description: 'Sviluppa e partecipa a comunità energetiche rinnovabili. Ottimizza la produzione e il consumo di energia con soluzioni collaborative.',
  keywords: 'comunità energetiche, CER, energia rinnovabile, autoconsumo collettivo, fotovoltaico condiviso',
  openGraph: {
    title: 'Comunità Energetiche Rinnovabili | SolarixBusiness',
    description: 'Scopri come partecipare e beneficiare delle comunità energetiche rinnovabili.',
    type: 'website',
    url: 'https://www.solarixbusiness.it/comunita-energetiche',
    images: [
      {
        url: 'https://www.solarixbusiness.it/images/og/comunita-energetiche.jpg',
      },
    ],
  },
}

export default function ComunitaEnergeticheLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 