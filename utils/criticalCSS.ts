/**
 * Critical CSS extraction and inlining utility
 * Ottimizza il Critical Rendering Path inlinando CSS critici
 */

// CSS critici per above-the-fold content
export const criticalCSS = `
  /* Reset e base styles critici */
  *,*::before,*::after{box-sizing:border-box}
  body{margin:0;font-family:system-ui,-apple-system,sans-serif;line-height:1.5}
  
  /* Layout critici per hero section */
  .hero{position:relative;min-height:100vh;display:flex;align-items:center;justify-content:center}
  .hero_overlay{position:absolute;inset:0;background:rgba(0,0,0,0.4);z-index:1}
  .hero_content{position:relative;z-index:2;text-align:center;color:white;max-width:800px;padding:2rem}
  
  /* Typography critica */
  h1{font-size:clamp(2rem,5vw,4rem);font-weight:700;margin:0 0 1rem;line-height:1.1}
  h2{font-size:clamp(1.2rem,3vw,2rem);font-weight:400;margin:0 0 2rem;opacity:0.9}
  
  /* CTA button critico */
  .main_cta_button{
    display:inline-block;
    background:#ff6b35;
    color:white;
    padding:1rem 2rem;
    text-decoration:none;
    border-radius:8px;
    font-weight:600;
    transition:transform 0.2s,box-shadow 0.2s;
  }
  .main_cta_button:hover{transform:translateY(-2px);box-shadow:0 8px 25px rgba(255,107,53,0.3)}
  
  /* Loading states */
  .animate-pulse{animation:pulse 2s cubic-bezier(0.4,0,0.6,1) infinite}
  @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.5}}
`;

// Funzione per iniettare CSS critici
export const injectCriticalCSS = () => {
  if (typeof document === 'undefined') return;
  
  const existingStyle = document.getElementById('critical-css');
  if (existingStyle) return; // Già iniettato
  
  const style = document.createElement('style');
  style.id = 'critical-css';
  style.textContent = criticalCSS;
  
  // Inserisci prima di qualsiasi altro CSS
  const head = document.head;
  const firstLink = head.querySelector('link[rel="stylesheet"]');
  
  if (firstLink) {
    head.insertBefore(style, firstLink);
  } else {
    head.appendChild(style);
  }
};

// CSS non critici da caricare in modo asincrono
export const loadNonCriticalCSS = () => {
  if (typeof document === 'undefined') return;
  
  const nonCriticalStyles = [
    '/styles/components.css',
    '/styles/animations.css',
    '/styles/responsive.css'
  ];
  
  nonCriticalStyles.forEach(href => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.media = 'print';
    link.onload = () => {
      link.media = 'all';
    };
    document.head.appendChild(link);
  });
};

// Preload risorse critiche
export const preloadCriticalResources = () => {
  if (typeof document === 'undefined') return;
  
  const criticalResources = [
    { href: '/images/hero/heroweb.webp', as: 'image', type: 'image/webp' },
    { href: '/fonts/orbitron/Orbitron-Bold.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
    { href: '/fonts/montserrant/Montserrat-SemiBold.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' }
  ];
  
  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource.href;
    link.as = resource.as;
    if (resource.type) link.type = resource.type;
    if (resource.crossorigin) link.crossOrigin = resource.crossorigin;
    document.head.appendChild(link);
  });
};
