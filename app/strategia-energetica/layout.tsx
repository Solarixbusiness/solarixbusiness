import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Strategia Energetica Aziendale | SolarixBusiness',
  description: 'Sviluppa una strategia energetica efficiente per la tua azienda. Ottimizza consumi, costi e sostenibilità con soluzioni personalizzate.',
  keywords: 'strategia energetica, efficienza energetica, consulenza energetica, ottimizzazione consumi, sostenibilità aziendale',
  openGraph: {
    title: 'Strategia Energetica Aziendale | SolarixBusiness',
    description: 'Ottimizza la gestione energetica della tua azienda con una strategia personalizzata.',
    type: 'website',
    url: 'https://www.solarixbusiness.it/strategia-energetica',
    images: [
      {
        url: 'https://www.solarixbusiness.it/images/og/strategia-energetica.jpg',
      },
    ],
  },
}

export default function StrategiaEnergeticaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 