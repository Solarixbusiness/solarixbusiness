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

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TV8D8Q7C');
        `}} />
        {/* End Google Tag Manager */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TV8D8Q7C"
        height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
} 