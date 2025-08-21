import { Metadata } from 'next'
import Script from 'next/script'

export const revalidate = 86400;
export const runtime = 'nodejs';

export const metadata: Metadata = {
  title: 'Parla con un consulente | solariXbusiness',
  description: 'Richiedi una consulenza gratuita con i nostri esperti. Rispondiamo alle tue domande senza impegno e ti aiutiamo a capire le opportunità per la tua azienda.',
  keywords: 'consulenza fotovoltaica, domande energia solare, esperti fotovoltaici, consulenza aziendale',
  openGraph: {
    title: 'Parla con un consulente | solariXbusiness',
    description: 'Richiedi una consulenza gratuita con i nostri esperti. Rispondiamo alle tue domande senza impegno e ti aiutiamo a capire le opportunità per la tua azienda.',
    url: 'https://www.solarixbusiness.it/parla-con-un-consulente',
    siteName: 'solariXbusiness',
    images: [
      {
        url: '/images/og-parla-consulente.jpg',
        width: 1200,
        height: 630,
        alt: 'Parla con un consulente',
      },
    ],
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Parla con un consulente | solariXbusiness',
    description: 'Richiedi una consulenza gratuita con i nostri esperti. Rispondiamo alle tue domande senza impegno e ti aiutiamo a capire le opportunità per la tua azienda.',
    images: ['/images/og-parla-consulente.jpg'],
  },
}

export default function ParlaConConsulenteLayout({
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