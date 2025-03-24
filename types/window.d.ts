interface WindowWithDataLayer {
  dataLayer: any[];
}

declare global {
  interface Window extends WindowWithDataLayer {
    dataLayer: any[];
  }
} 