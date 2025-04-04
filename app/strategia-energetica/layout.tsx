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