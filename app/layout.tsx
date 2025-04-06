import './globals.css'
import './mobile.css'
import { Viewport } from 'next'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import FontLoader from '@/components/FontLoader/FontLoader'
import CookieConsent from '@/components/CookieConsent/CookieConsent'
import { I18nProvider } from '@/i18n/I18nProvider'
import PerformanceMetrics from '@/components/PerformanceMetrics/PerformanceMetrics'
import ClientProviders from '@/components/ClientProviders'
import { Inter } from 'next/font/google'
import { metadata as siteMetadata } from './metadata'

const inter = Inter({ subsets: ['latin'] })

// Esportiamo i metadati dal file centralizzato
export const metadata = siteMetadata;

export const viewport: Viewport = {
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
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
        <link rel="icon" href="/favico/favicon.ico" sizes="any" />
        <link rel="icon" href="/favico/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favico/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TV8D8Q7C"
        height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
        {/* End Google Tag Manager (noscript) */}
        <ClientProviders>
          <I18nProvider>
            <FontLoader />
            <Navbar />
            <main className="min-h-screen pt-0 md:pt-[60px]">
              <div className="container mx-auto px-4 pt-0 pb-4 md:py-8">
                {children}
              </div>
            </main>
            <Footer />
            <CookieConsent />
            <PerformanceMetrics />
          </I18nProvider>
        </ClientProviders>
      </body>
    </html>
  )
}
