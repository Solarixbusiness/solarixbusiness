import { Metadata } from 'next'
import Script from 'next/script'

export const revalidate = 86400;
export const runtime = 'nodejs';

export const metadata: Metadata = {
  title: 'Monetizzazione Ambientale | SolarixBusiness',
  description: 'Trasforma il tuo impegno ambientale in valore economico. Scopri le opportunità di monetizzazione attraverso crediti di carbonio e certificati verdi.',
  keywords: 'monetizzazione ambientale, crediti di carbonio, certificati verdi, sostenibilità aziendale, economia circolare',
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

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Google Tag Manager */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TV8D8Q7C');
        `}
      </Script>
      
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe 
          src="https://www.googletagmanager.com/ns.html?id=GTM-TV8D8Q7C"
          height="0" 
          width="0" 
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
      
      {children}
    </>
  );
}