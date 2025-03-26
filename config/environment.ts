export const environment = {
  production: process.env.NODE_ENV === 'production',
  apiUrl: process.env.NEXT_PUBLIC_API_URL,
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  analytics: {
    googleAnalyticsId: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
  },
  sentry: {
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  },
  maps: {
    googleMapsId: process.env.NEXT_PUBLIC_GOOGLE_MAPS_ID,
    mapboxToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
  }
}; 