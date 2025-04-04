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