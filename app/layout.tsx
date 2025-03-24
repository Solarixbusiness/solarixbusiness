import './globals.css'
import './mobile.css'
import { Metadata, Viewport } from 'next'
import { Roboto, Orbitron } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import FontLoader from '@/components/FontLoader/FontLoader'
import CookieConsent from '@/components/CookieConsent/CookieConsent'
import I18nProvider from '@/i18n/I18nProvider'
import PerformanceMetrics from '@/components/PerformanceMetrics/PerformanceMetrics'
import { SEO_CONSTANTS, getWebsiteSchema } from '@/utils/seoConstants'
import dynamic from 'next/dynamic'

// Importiamo SafeDOMWrapper per gestire in modo sicuro le manipolazioni del DOM
const SafeDOMWrapper = dynamic(
  () => import('@/components/SafeDOMWrapper/SafeDOMWrapper'),
  { ssr: false }
)

// Importiamo ErrorBoundary in modo dinamico per evitare errori di SSR
const ErrorBoundary = dynamic(
  () => import('@/components/ErrorBoundary/ErrorBoundary'),
  { ssr: false }
)

// Importiamo OfflineDetector in modo dinamico
const OfflineDetector = dynamic(
  () => import('@/components/OfflineDetector/OfflineDetector'),
  { ssr: false }
)

// Importiamo Analytics in modo dinamico
const Analytics = dynamic(
  () => import('@/components/Analytics/Analytics'),
  { ssr: false }
)

// Importiamo ErrorTracker in modo dinamico
const ErrorTracker = dynamic(
  () => import('@/components/ErrorTracker/ErrorTracker'),
  { ssr: false }
)

// Importiamo FeedbackWidget in modo dinamico
const FeedbackWidget = dynamic(
  () => import('@/components/FeedbackWidget/FeedbackWidget'),
  { ssr: false }
)

// Importiamo ServiceWorkerRegistration in modo dinamico
const ServiceWorkerRegistration = dynamic(
  () => import('@/components/ServiceWorkerRegistration/ServiceWorkerRegistration'),
  { ssr: false }
)

export const metadata: Metadata = {
  title: {
    default: SEO_CONSTANTS.DEFAULT_TITLE,
    template: '%s | solariXbusiness',
  },
  description: SEO_CONSTANTS.DEFAULT_DESCRIPTION,
  keywords: SEO_CONSTANTS.DEFAULT_KEYWORDS,
  openGraph: {
    title: SEO_CONSTANTS.DEFAULT_TITLE,
    description: SEO_CONSTANTS.DEFAULT_DESCRIPTION,
    url: SEO_CONSTANTS.SITE_URL,
    siteName: SEO_CONSTANTS.SITE_NAME,
    images: [
      {
        url: SEO_CONSTANTS.DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: SEO_CONSTANTS.DEFAULT_TITLE,
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
    title: SEO_CONSTANTS.DEFAULT_TITLE,
    description: SEO_CONSTANTS.DEFAULT_DESCRIPTION,
    images: [SEO_CONSTANTS.DEFAULT_OG_IMAGE],
  },
  alternates: {
    canonical: SEO_CONSTANTS.SITE_URL,
    languages: {
      'it': SEO_CONSTANTS.SITE_URL,
      'en': `${SEO_CONSTANTS.SITE_URL}/en`,
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
        <link rel="icon" href="/images/faviconbus.ico" />
        <FontLoader />
      </head>
      <body className="flex flex-col min-h-screen">
        <ErrorBoundary>
          <SafeDOMWrapper>
            <I18nProvider>
              <Analytics />
              <ErrorTracker />
              <OfflineDetector />
              <ServiceWorkerRegistration />
              <FeedbackWidget />
              <Navbar />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
              <CookieConsent />
              {process.env.NODE_ENV === 'development' && <PerformanceMetrics />}
            </I18nProvider>
          </SafeDOMWrapper>
        </ErrorBoundary>
      </body>
    </html>
  )
}
