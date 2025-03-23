/**
 * Genera una versione a bassa qualità di un'immagine per il caricamento progressivo
 * @param src URL dell'immagine originale
 * @param width Larghezza dell'immagine a bassa qualità
 * @returns URL dell'immagine a bassa qualità
 */
export function generateLowQualityImage(src: string, width: number = 20): string {
  // Se l'immagine è esterna, utilizziamo un servizio di ridimensionamento
  if (src.startsWith('http') || src.startsWith('https')) {
    return `https://images.weserv.nl/?url=${encodeURIComponent(src)}&w=${width}&q=50&blur=5`;
  }
  
  // Per le immagini locali, utilizziamo Next.js Image Optimization
  // Rimuoviamo eventuali slash iniziali
  const cleanSrc = src.startsWith('/') ? src.slice(1) : src;
  
  // Costruiamo l'URL per l'API di ottimizzazione delle immagini di Next.js
  return `/_next/image?url=${encodeURIComponent('/' + cleanSrc)}&w=${width}&q=50`;
}

/**
 * Calcola le dimensioni ottimali per un'immagine responsive
 * @param containerWidth Larghezza del container
 * @param containerHeight Altezza del container
 * @param imageAspectRatio Rapporto d'aspetto dell'immagine (larghezza / altezza)
 * @returns Dimensioni ottimali dell'immagine
 */
export function calculateOptimalImageSize(
  containerWidth: number,
  containerHeight: number,
  imageAspectRatio: number
): { width: number; height: number } {
  // Se il container è più largo dell'immagine
  if (containerWidth / containerHeight > imageAspectRatio) {
    const width = containerWidth;
    const height = width / imageAspectRatio;
    return { width, height };
  } else {
    // Se il container è più alto dell'immagine
    const height = containerHeight;
    const width = height * imageAspectRatio;
    return { width, height };
  }
}

/**
 * Genera i valori per l'attributo srcset
 * @param src URL dell'immagine
 * @param sizes Array di larghezze per il srcset
 * @returns Stringa formattata per l'attributo srcset
 */
export function generateSrcSet(src: string, sizes: number[] = [640, 750, 828, 1080, 1200, 1920, 2048]): string {
  // Se l'immagine è esterna, utilizziamo un servizio di ridimensionamento
  if (src.startsWith('http') || src.startsWith('https')) {
    return sizes
      .map(size => `https://images.weserv.nl/?url=${encodeURIComponent(src)}&w=${size} ${size}w`)
      .join(', ');
  }
  
  // Per le immagini locali, utilizziamo Next.js Image Optimization
  const cleanSrc = src.startsWith('/') ? src.slice(1) : src;
  
  return sizes
    .map(size => `/_next/image?url=${encodeURIComponent('/' + cleanSrc)}&w=${size}&q=75 ${size}w`)
    .join(', ');
}
