# Ottimizzazioni SEO per SolariX Business

Questo documento descrive le ottimizzazioni SEO implementate nel sito SolariX Business.

## Componenti SEO

### SeoManager

Componente centralizzato per la gestione di tutti gli aspetti SEO del sito. Sostituisce i componenti individuali precedenti e fornisce un'interfaccia unificata per:

- Gestione dei dati strutturati (JSON-LD)
- Gestione dei link canonici e hreflang
- Gestione dei metadati per i social media (Open Graph, Twitter Cards)

Esempio di utilizzo:

```tsx
<SeoManager 
  canonicalPath="/chi-siamo"
  organizationData={getOrganizationSchema()}
  socialData={{
    title: 'Chi Siamo | solariXbusiness',
    description: 'Descrizione della pagina',
    ogImage: '/images/og-chi-siamo.jpg',
    ogType: 'website',
    twitterCard: 'summary_large_image'
  }}
/>
```

### Altri Componenti SEO

- **SeoImage**: Componente per ottimizzare le immagini con attributi SEO migliorati
- **Breadcrumbs**: Navigazione strutturata con markup schema.org
- **FontLoader**: Caricamento ottimizzato dei font per migliorare le Core Web Vitals

## File di Configurazione SEO

- **robots.ts**: Configurazione per i crawler con regole di accesso e link alla sitemap
- **sitemap.ts**: Mappa del sito completa con priorità e frequenze di aggiornamento
- **seoConstants.ts**: Centralizzazione delle costanti SEO

## Dati Strutturati Implementati

- **Organization**: Informazioni sull'organizzazione
- **LocalBusiness**: Informazioni sull'azienda locale (indirizzo, contatti, orari)
- **FAQPage**: Domande frequenti e risposte
- **BreadcrumbList**: Percorso di navigazione strutturato

## Metadati e Tag SEO

- **Metadata**: Configurazione dei metadati Next.js per ogni pagina
- **Open Graph**: Tag per la condivisione sui social media
- **Twitter Cards**: Tag per la condivisione su Twitter
- **Canonical Links**: Link canonici per evitare contenuti duplicati
- **Hreflang**: Tag per le versioni in lingue alternative

## Ottimizzazioni per le Core Web Vitals

- **Caricamento Font**: Ottimizzazione del caricamento dei font con font-display: swap
- **Preconnect**: Preconnect per Google Fonts e altre risorse esterne
- **Preload**: Preload per i font locali

## Ottimizzazioni per le Immagini

- **Alt Text**: Gestione automatica di alt text per le immagini
- **Lazy Loading**: Caricamento ottimizzato delle immagini
- **Dimensioni Responsive**: Immagini ottimizzate per diverse dimensioni dello schermo

## Pagine Ottimizzate

- Home page
- Chi siamo
- Fotovoltaico aziende
- FAQ
- Contatti

## PWA (Progressive Web App)

- **Manifest**: Configurazione del manifest.json per l'installazione come app
- **Icone**: Icone in diverse dimensioni per dispositivi diversi
- **Tema**: Colori del tema personalizzati

## Monitoraggio e Analisi

- **WebVitals**: Monitoraggio delle Core Web Vitals per Google Analytics

## Best Practices Implementate

- Utilizzo di tag semantici HTML5
- Gestione delle lingue alternative con tag hreflang
- Implementazione di canonical URL per evitare contenuti duplicati
- Ottimizzazione delle immagini per ridurre i tempi di caricamento
- Strutturazione dei dati per rich snippets nei risultati di ricerca
