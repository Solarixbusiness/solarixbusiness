import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Consulenza Finanziaria Integrata | SolarixBusiness',
  description: 'Servizi di consulenza finanziaria per ottimizzare i tuoi investimenti energetici. Soluzioni personalizzate per massimizzare il ritorno.',
  keywords: 'consulenza finanziaria, investimenti energetici, finanziamento fotovoltaico, ROI energia, pianificazione finanziaria',
}

export default function Layout({ children }: { children: React.ReactNode }) {
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