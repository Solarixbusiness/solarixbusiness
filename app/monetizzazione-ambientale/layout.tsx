import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Monetizzazione Ambientale | SolarixBusiness',
  description: 'Trasforma il tuo impegno ambientale in valore economico. Scopri come monetizzare i crediti ambientali e accedere agli incentivi green con SolarixBusiness.',
  keywords: 'crediti ambientali, monetizzazione green, incentivi ambientali, certificati bianchi, crediti di carbonio, sostenibilità aziendale, ESG, carbon credit, carbon footprint, compensazione CO2',
  openGraph: {
    title: 'Monetizzazione Ambientale | SolarixBusiness',
    description: 'Trasforma il tuo impegno ambientale in valore economico. Monetizza i crediti ambientali e accedi agli incentivi green.',
    type: 'website',
    url: 'https://www.solarixbusiness.it/monetizzazione-ambientale',
    images: [
      {
        url: 'https://www.solarixbusiness.it/images/og/monetizzazione-ambientale.jpg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Monetizzazione Ambientale | SolarixBusiness',
    description: 'Scopri come trasformare il tuo impegno ambientale in valore economico con SolarixBusiness.',
    images: ['https://www.solarixbusiness.it/images/og/monetizzazione-ambientale.jpg'],
  },
}

export default function MonetizzazioneAmbientaleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 