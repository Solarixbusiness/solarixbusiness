import { Metadata } from 'next';
import Script from 'next/script';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Static generation configuration
export const revalidate = 86400;
export const runtime = 'nodejs';

// Dynamic imports for Client Components
const ServiceForm = dynamic(() => import('../../components/ServiceForm'), { ssr: false });
const CookieConsent = dynamic(() => import('../../components/CookieConsent/CookieConsent'), { ssr: false });
const SocialProofCarousel = dynamic(() => import('./components/SocialProofCarousel'), { 
  ssr: false,
  loading: () => <div style={{ height: '400px', background: '#f8fafc' }} />
});

export const metadata: Metadata = {
  title: 'Incentivi e Bandi per Aziende | SolariX Business',
  description: 'Accedi a incentivi e bandi per la tua azienda con SolariX Business. Consulenza specializzata per massimizzare i finanziamenti disponibili.',
  keywords: 'incentivi aziende, bandi, finanziamenti, consulenza aziendale, SolariX Business',
  openGraph: {
    title: 'Incentivi e Bandi per Aziende | SolariX Business',
    description: 'Accedi a incentivi e bandi per la tua azienda con SolariX Business. Consulenza specializzata per massimizzare i finanziamenti disponibili.',
    type: 'website',
  },
};

export default function LandingGoogleAds() {
  return (
    <>
      {/* Google Tag Manager */}
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');
          `,
        }}
      />

      <div style={{ 
        minHeight: '100vh', 
        backgroundColor: '#f8fafc',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 9999,
        overflow: 'auto'
      }}>
        {/* Hero Section */}
        <div style={{ 
          position: 'relative',
          background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
          color: 'white',
          padding: '80px 0',
          textAlign: 'center'
        }}>
          <div style={{ position: 'absolute', inset: 0, opacity: 0.1 }}>
            <Image
              src="/landing/ads.webp"
              alt="SolariX Business - Incentivi e Bandi"
              fill
              style={{ objectFit: 'cover' }}
              priority
              quality={75}
              placeholder="blur"
              blurDataURL="data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA="
            />
          </div>
          
          <div style={{ 
            position: 'relative', 
            maxWidth: '1200px', 
            margin: '0 auto', 
            padding: '0 20px' 
          }}>
            <h1 style={{ 
              fontSize: '3.5rem', 
              fontWeight: 'bold', 
              marginBottom: '24px',
              lineHeight: '1.1'
            }}>
              Accedi agli Incentivi per la Tua Azienda
            </h1>
            
            <p style={{ 
              fontSize: '1.5rem', 
              marginBottom: '40px',
              opacity: 0.9,
              maxWidth: '800px',
              margin: '0 auto 40px'
            }}>
              Consulenza specializzata per massimizzare i finanziamenti e gli incentivi disponibili per il tuo business
            </p>

            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '16px',
              flexWrap: 'wrap'
            }}>
              <div style={{
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                padding: '12px 24px',
                borderRadius: '50px',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                <span style={{ fontWeight: '500' }}>Transizione 5.0</span>
              </div>
              <div style={{
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                padding: '12px 24px',
                borderRadius: '50px',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                <span style={{ fontWeight: '500' }}>Bandi Regionali</span>
              </div>
              <div style={{
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                padding: '12px 24px',
                borderRadius: '50px',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                <span style={{ fontWeight: '500' }}>Fotovoltaico</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof Carousel - Loaded after hero */}
        <div style={{ marginTop: '40px' }}>
          <SocialProofCarousel />
        </div>

        {/* Main Content */}
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
          {/* Benefits Section */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '40px',
            marginBottom: '80px'
          }}>
            <div style={{
              background: 'white',
              padding: '40px',
              borderRadius: '16px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #3b82f6, #1e40af)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                fontSize: '2rem'
              }}>
                💰
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '16px', color: '#1f2937' }}>
                Massimizza i Finanziamenti
              </h3>
              <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                Identifichiamo tutti gli incentivi disponibili per il tuo settore e ti guidiamo nell'accesso ai fondi
              </p>
            </div>

            <div style={{
              background: 'white',
              padding: '40px',
              borderRadius: '16px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #10b981, #059669)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                fontSize: '2rem'
              }}>
                📋
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '16px', color: '#1f2937' }}>
                Gestione Completa
              </h3>
              <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                Ci occupiamo di tutta la documentazione e le pratiche burocratiche per te
              </p>
            </div>

            <div style={{
              background: 'white',
              padding: '40px',
              borderRadius: '16px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                fontSize: '2rem'
              }}>
                🎯
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '16px', color: '#1f2937' }}>
                Strategia Personalizzata
              </h3>
              <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                Sviluppiamo una strategia su misura per le esigenze specifiche della tua azienda
              </p>
            </div>
          </div>

          {/* Additional Benefits Section */}
          <div style={{
            background: 'white',
            padding: '60px 40px',
            borderRadius: '20px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            marginBottom: '80px'
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#1f2937',
              marginBottom: '50px'
            }}>
              Perché Scegliere SolariX Business
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '40px'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontSize: '1.5rem'
                }}>
                  🏆
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '12px', color: '#1f2937' }}>
                  Esperienza Comprovata
                </h3>
                <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                  Oltre 200 aziende hanno già ottenuto finanziamenti grazie alla nostra consulenza specializzata
                </p>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #ec4899, #db2777)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontSize: '1.5rem'
                }}>
                  ⚡
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '12px', color: '#1f2937' }}>
                  Processo Veloce
                </h3>
                <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                  Tempi di risposta rapidi e gestione completa delle pratiche burocratiche
                </p>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #06b6d4, #0891b2)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontSize: '1.5rem'
                }}>
                  🔒
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '12px', color: '#1f2937' }}>
                  Garanzia di Risultato
                </h3>
                <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                  95% di successo nell'ottenimento dei finanziamenti richiesti
                </p>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #84cc16, #65a30d)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontSize: '1.5rem'
                }}>
                  💡
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '12px', color: '#1f2937' }}>
                  Consulenza Personalizzata
                </h3>
                <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                  Ogni progetto è studiato su misura per le specifiche esigenze aziendali
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div style={{
            background: 'white',
            padding: '60px 40px',
            borderRadius: '20px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold', 
              marginBottom: '16px',
              color: '#1f2937'
            }}>
              Richiedi una Consulenza Gratuita
            </h2>
            
            <p style={{ 
              fontSize: '1.2rem', 
              color: '#6b7280', 
              marginBottom: '40px',
              maxWidth: '600px',
              margin: '0 auto 40px'
            }}>
              I nostri esperti analizzeranno la tua situazione e ti proporranno le migliori opportunità di finanziamento
            </p>

            {/* Service Form - Client Component */}
            <ServiceForm title="Richiedi Consulenza" formType="landing" />
          </div>

          {/* Trust Indicators */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '40px',
            marginTop: '60px',
            textAlign: 'center'
          }}>
            <div style={{ 
              background: 'linear-gradient(135deg, #3b82f6, #1e40af)',
              color: 'white',
              padding: '30px 20px',
              borderRadius: '16px',
              boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)'
            }}>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '8px' }}>
                95%
              </div>
              <p style={{ fontSize: '1rem', opacity: 0.9 }}>Tasso di successo nei bandi</p>
            </div>
            
            <div style={{ 
              background: 'linear-gradient(135deg, #10b981, #059669)',
              color: 'white',
              padding: '30px 20px',
              borderRadius: '16px',
              boxShadow: '0 10px 25px rgba(16, 185, 129, 0.3)'
            }}>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '8px' }}>
                200+
              </div>
              <p style={{ fontSize: '1rem', opacity: 0.9 }}>Clienti soddisfatti</p>
            </div>
            
            <div style={{ 
              background: 'linear-gradient(135deg, #f59e0b, #d97706)',
              color: 'white',
              padding: '30px 20px',
              borderRadius: '16px',
              boxShadow: '0 10px 25px rgba(245, 158, 11, 0.3)'
            }}>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '8px' }}>
                €50M+
              </div>
              <p style={{ fontSize: '1rem', opacity: 0.9 }}>Finanziamenti ottenuti</p>
            </div>

            <div style={{ 
              background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
              color: 'white',
              padding: '30px 20px',
              borderRadius: '16px',
              boxShadow: '0 10px 25px rgba(139, 92, 246, 0.3)'
            }}>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '8px' }}>
                24/7
              </div>
              <p style={{ fontSize: '1rem', opacity: 0.9 }}>Supporto personalizzato</p>
            </div>
          </div>
        </div>

        {/* Cookie Consent */}
        <CookieConsent />
      </div>
    </>
  );
}
