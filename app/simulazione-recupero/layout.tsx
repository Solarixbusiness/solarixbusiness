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