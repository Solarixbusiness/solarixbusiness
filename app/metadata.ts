import { Metadata, Viewport } from 'next'
import { SEO_CONSTANTS } from '@/utils/seoConstants'

export const metadata: Metadata = {
  metadataBase: new URL(SEO_CONSTANTS.SITE_URL),
  title: {
    default: SEO_CONSTANTS.DEFAULT_TITLE,
    template: `%s | ${SEO_CONSTANTS.SITE_NAME}`,
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
  icons: {
    icon: '/favico/favicon.ico',
    shortcut: '/favico/favicon.ico',
    apple: '/favico/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
}
