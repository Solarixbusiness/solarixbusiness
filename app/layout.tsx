import { Inter } from 'next/font/google'
import './globals.css'
import { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { criticalCSS } from '../utils/criticalCSS'
import CookieConsent from '@/components/CookieConsent/CookieConsent'
import { I18nProvider } from '@/i18n/I18nProvider'
import PerformanceMetrics from '@/components/PerformanceMetrics/PerformanceMetrics'
import { SEO_CONSTANTS } from '@/utils/seoConstants'
import ClientProviders from '@/components/ClientProviders'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(SEO_CONSTANTS.SITE_URL),
  title: {
    default: SEO_CONSTANTS.DEFAULT_TITLE,
    template: `%s | ${SEO_CONSTANTS.SITE_NAME}`,
  },
  description: SEO_CONSTANTS.DEFAULT_DESCRIPTION,
  keywords: 'solariXbusiness, sito web',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'icon',
      url: '/favicon.ico',
    },
  },
  openGraph: {
    title: 'solariXbusiness',
    description: 'Sito web di solariXbusiness',
    url: 'https://solariXbusiness.it',
    siteName: 'solariXbusiness',
    images: [
      {
        url: 'https://solariXbusiness.it/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'solariXbusiness',
      },
    ],
    locale: 'it_IT',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'solariXbusiness',
    description: 'Sito web di solariXbusiness',
    images: ['https://solariXbusiness.it/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://solariXbusiness.it',
    languages: {
      'it': 'https://solariXbusiness.it',
      'en': 'https://solariXbusiness.it/en',
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <head>
        {/* Critical CSS inline per ottimizzare Critical Rendering Path */}
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        
        {/* Preload risorse critiche */}
        <link rel="preload" href="/images/hero/heroweb.webp" as="image" type="image/webp" />
        <link rel="preload" href="/fonts/orbitron/Orbitron-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/montserrant/Montserrat-SemiBold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* DNS prefetch per risorse esterne */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* Define dataLayer and the gtag function */}
        <Script id="consent-mode-setup" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}

          // Set default consent to 'denied' as a placeholder
          gtag('consent', 'default', {
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'analytics_storage': 'denied',
            'wait_for_update': 1000
          });
          
          // Imposta il trattamento dati limitato di default (per CCPA)
          gtag('set', 'restricted_data_processing', true);
          
          // Imposta la stringa us_privacy di default (per IAB CCPA)
          gtag('set', 'us_privacy', '1YNN');
          
          // Supporto per IAB TCF
          window.__tcfapi = function(command, version, callback) {
            if (command === 'addEventListener') {
              // Simuliamo una risposta TCF
              const tcData = {
                gdprApplies: true,
                eventStatus: 'tcloaded',
                purpose: {
                  consents: {
                    1: false, // Memorizzazione/accesso informazioni
                    2: false, // Personalizzazione
                    3: false, // Selezione, consegna e report degli annunci
                    4: false, // Selezione, consegna e report dei contenuti
                    5: false, // Misurazione
                    6: false, // Altro
                    7: false, // Altro
                    8: false, // Altro
                    9: false, // Altro
                    10: false // Altro
                  }
                },
                vendor: {
                  consents: {}
                }
              };
              
              callback(tcData, true);
              
              // Memorizziamo il callback per chiamarlo quando l'utente aggiorna il consenso
              window.tcfCallbacks = window.tcfCallbacks || [];
              window.tcfCallbacks.push(callback);
            } else if (command === 'removeEventListener') {
              // Rimuovi il listener
              callback({}, true);
            } else if (command === 'getTCData') {
              // Restituisci i dati TCF attuali
              const tcData = {
                gdprApplies: true,
                eventStatus: 'tcloaded',
                purpose: {
                  consents: {}
                },
                vendor: {
                  consents: {}
                }
              };
              
              // Leggi il consenso dal localStorage
              try {
                const storedConsent = localStorage.getItem('cookie-consent');
                if (storedConsent) {
                  const parsedConsent = JSON.parse(storedConsent);
                  
                  // Imposta i consensi in base alle preferenze dell'utente
                  if (parsedConsent.iabTcfAccepted) {
                    tcData.purpose.consents = {
                      1: true,
                      2: parsedConsent.preferences,
                      3: parsedConsent.marketing,
                      4: parsedConsent.preferences,
                      5: parsedConsent.analytics,
                      6: parsedConsent.necessary,
                      7: parsedConsent.necessary,
                      8: parsedConsent.necessary,
                      9: parsedConsent.necessary,
                      10: parsedConsent.necessary
                    };
                  }
                }
              } catch (e) {
                console.error('Errore durante la lettura del consenso TCF:', e);
              }
              
              callback(tcData, true);
            }
          };
        `}</Script>
        
        {/* Google Tag Manager - TEMPORARILY DISABLED FOR PERFORMANCE TEST */}
        {/* <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TV8D8Q7C');
            `,
          }}
        /> */}
        {/* End Google Tag Manager */}
        
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MB624KV3DS"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MB624KV3DS');
          `}
        </Script>
        {/* End Google Analytics 4 */}
        
        {/* Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16979483829"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16979483829');
          `}
        </Script>
        {/* End Google Ads */}
        {/* Font Preloads - Critical for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/roboto/Roboto-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/roboto/Roboto-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/orbitron/Orbitron-Medium.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        <link rel="icon" href="/favico/favicon.ico" sizes="any" />
        <link rel="icon" href="/favico/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favico/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TV8D8Q7C"
        height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
        {/* End Google Tag Manager (noscript) */}
        <ClientProviders>
          <I18nProvider>
            {/* FontLoader rimosso - preload ora nel head */}
            <Navbar />
            <main className="min-h-screen pt-[60px]">
              <div className="container mx-auto px-4 py-8">
                {children}
              </div>
            </main>
            <Footer />
            <CookieConsent />
            <PerformanceMetrics />
            <SpeedInsights />
          </I18nProvider>
        </ClientProviders>
      </body>
    </html>
  )
}
