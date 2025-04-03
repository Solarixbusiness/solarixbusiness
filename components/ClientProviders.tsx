'use client'

import dynamic from 'next/dynamic'
import { ReactNode } from 'react'

const SafeDOMWrapper = dynamic(
  () => import('@/components/SafeDOMWrapper/SafeDOMWrapper'),
  { ssr: false }
)

const ErrorBoundary = dynamic(
  () => import('@/components/ErrorBoundary/ErrorBoundary'),
  { ssr: false }
)

const OfflineDetector = dynamic(
  () => import('@/components/OfflineDetector/OfflineDetector'),
  { ssr: false }
)

const Analytics = dynamic(
  () => import('@/components/Analytics/Analytics'),
  { ssr: false }
)

const ErrorTracker = dynamic(
  () => import('@/components/ErrorTracker/ErrorTracker'),
  { ssr: false }
)

const FeedbackWidget = dynamic(
  () => import('@/components/FeedbackWidget/FeedbackWidget'),
  { ssr: false }
)

const ServiceWorkerRegistration = dynamic(
  () => import('@/components/ServiceWorkerRegistration/ServiceWorkerRegistration'),
  { ssr: false }
)

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <SafeDOMWrapper>
      <ErrorBoundary>
        <OfflineDetector />
        <Analytics />
        <ErrorTracker />
        <FeedbackWidget />
        <ServiceWorkerRegistration />
        {children}
      </ErrorBoundary>
    </SafeDOMWrapper>
  )
} 