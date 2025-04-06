import './globals.css'
import './mobile.css'
import { Metadata, Viewport } from 'next'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import FontLoader from '@/components/FontLoader/FontLoader'
import CookieConsent from '@/components/CookieConsent/CookieConsent'
import { I18nProvider } from '@/i18n/I18nProvider'
import PerformanceMetrics from '@/components/PerformanceMetrics/PerformanceMetrics'
import { SEO_CONSTANTS } from '@/utils/seoConstants'
import ClientProviders from '@/components/ClientProviders'
import { Inter } from 'next/font/google'
import Script from 'next/script'

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
  maximumScale: 1,
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
        <Script id="google-tag-manager" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TV8D8Q7C');
        `}</Script>
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
            <FontLoader />
            <Navbar />
            <main className="min-h-screen pt-[60px]">
              <div className="container mx-auto px-4 py-8">
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
