import './globals.css'
import './mobile.css'
import { Metadata, Viewport } from 'next'
import { Roboto, Orbitron } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import FontLoader from '@/components/FontLoader/FontLoader'
import CookieConsent from '@/components/CookieConsent/CookieConsent'
import { I18nProvider } from '@/i18n/I18nProvider'
import PerformanceMetrics from '@/components/PerformanceMetrics/PerformanceMetrics'
import dynamic from 'next/dynamic'
import { SEO_CONSTANTS } from '@/utils/seoConstants'

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

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SEO_CONSTANTS.SITE_URL),
  title: {
    default: SEO_CONSTANTS.DEFAULT_TITLE,
    template: `%s | ${SEO_CONSTANTS.SITE_NAME}`,
  },
  description: SEO_CONSTANTS.DEFAULT_DESCRIPTION,
  keywords: 'solariXbusiness, sito web',
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
      <body className={roboto.className}>
        <I18nProvider>
          <FontLoader />
          <Navbar />
          <main className="min-h-screen">
            <div className="container mx-auto px-4 py-8">
              {children}
            </div>
          </main>
          <Footer />
          <CookieConsent />
          <PerformanceMetrics />
          <Analytics />
          <ErrorTracker />
          <FeedbackWidget />
          <ServiceWorkerRegistration />
          <OfflineDetector />
        </I18nProvider>
      </body>
    </html>
  )
}
