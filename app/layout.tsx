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

// Importiamo ServiceWorkerRegistration in modo dinamico
const ServiceWorkerRegistration = dynamic(
  () => import('@/components/ServiceWorkerRegistration/ServiceWorkerRegistration'),
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

// Importiamo WebVitals in modo dinamico
const WebVitals = dynamic(
  () => import('@/components/WebVitals/WebVitals'),
  { ssr: false }
)

// Importiamo SeoManager in modo dinamico
const SeoManager = dynamic(
  () => import('@/components/SeoManager/SeoManager'),
  { ssr: false }
)

// Configurazione viewport separata come richiesto da Next.js
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#00A651',
}

export const metadata: Metadata = {
  title: {
    default: SEO_CONSTANTS.DEFAULT_TITLE,
    template: '%s | ' + SEO_CONSTANTS.SITE_NAME
  },
  description: SEO_CONSTANTS.DEFAULT_DESCRIPTION,
  keywords: SEO_CONSTANTS.DEFAULT_KEYWORDS,
  icons: {
    icon: '/images/faviconbus.ico',
    apple: '/images/apple-touch-icon.png'
  },
  manifest: '/manifest.json',
  formatDetection: {
    telephone: true,
    date: false,
    address: false,
    email: true,
    url: true
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: SEO_CONSTANTS.SITE_URL,
    siteName: SEO_CONSTANTS.SITE_NAME,
    title: SEO_CONSTANTS.DEFAULT_TITLE,
    description: SEO_CONSTANTS.DEFAULT_DESCRIPTION,
    images: [
      {
        url: SEO_CONSTANTS.DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: SEO_CONSTANTS.DEFAULT_TITLE,
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO_CONSTANTS.DEFAULT_TITLE,
    description: SEO_CONSTANTS.DEFAULT_DESCRIPTION,
    images: [SEO_CONSTANTS.DEFAULT_OG_IMAGE],
  },
  robots: SEO_CONSTANTS.ROBOTS,
  alternates: {
    canonical: SEO_CONSTANTS.SITE_URL,
    languages: {
      'it': SEO_CONSTANTS.SITE_URL,
      'en': `${SEO_CONSTANTS.SITE_URL}/en`,
    },
  },
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
              {/* Componente SeoManager globale */}
              <SeoManager 
                organizationData={{
                  name: SEO_CONSTANTS.COMPANY_NAME,
                  url: SEO_CONSTANTS.SITE_URL,
                  logo: SEO_CONSTANTS.COMPANY_LOGO,
                  contactPoint: {
                    '@type': 'ContactPoint',
                    telephone: SEO_CONSTANTS.COMPANY_PHONE,
                    email: SEO_CONSTANTS.COMPANY_EMAIL,
                    contactType: 'customer service',
                    availableLanguage: ['Italian', 'English'],
                  },
                  sameAs: [
                    SEO_CONSTANTS.SOCIAL_FACEBOOK,
                    SEO_CONSTANTS.SOCIAL_INSTAGRAM,
                    SEO_CONSTANTS.SOCIAL_LINKEDIN,
                  ],
                }}
                socialData={{
                  title: SEO_CONSTANTS.DEFAULT_TITLE,
                  description: SEO_CONSTANTS.DEFAULT_DESCRIPTION,
                  ogImage: SEO_CONSTANTS.DEFAULT_OG_IMAGE,
                  ogType: 'website',
                  twitterCard: 'summary_large_image'
                }}
              />
              <Navbar />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
              <CookieConsent />
              {process.env.NODE_ENV === 'development' && <PerformanceMetrics />}
              <OfflineDetector />
              <ServiceWorkerRegistration />
              <Analytics />
              <ErrorTracker />
              <FeedbackWidget />
              <WebVitals />
            </I18nProvider>
          </SafeDOMWrapper>
        </ErrorBoundary>
      </body>
    </html>
  )
}
