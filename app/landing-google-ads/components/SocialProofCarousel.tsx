'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface TestimonialData {
  name: string;
  quote: string;
  sector: string;
}

interface SocialProofItem {
  image: string;
  title: string;
  percentage: string;
  text: string;
  testimonial: TestimonialData;
}

const socialProofItems: SocialProofItem[] = [
  {
    image: '/landing/carosel/1c.webp',
    title: 'Transizione 5.0 + CER',
    percentage: '-78%',
    text: '',
    testimonial: {
      name: 'Marco R. – Borgomanero (NO)',
      quote: '"Investimento azzerato in 3 anni grazie agli incentivi. Ora produciamo energia pulita."',
      sector: 'Settore: lavorazione legno'
    }
  },
  {
    image: '/landing/carosel/2c.webp',
    title: 'Bando Regionale + Transizione 5.0',
    percentage: '-85%',
    text: '',
    testimonial: {
      name: 'Laura M. – Novara (NO)',
      quote: '"Non credevo fosse possibile risparmiare così tanto. Ora abbiamo un impianto all\'avanguardia."',
      sector: 'Settore: tessile'
    }
  },
  {
    image: '/landing/carosel/3c.webp',
    title: 'PNRR + Transizione 5.0',
    percentage: '-72%',
    text: '',
    testimonial: {
      name: 'Giuseppe T. – Arona (NO)',
      quote: '"Processo semplificato e risultati oltre le aspettative."',
      sector: 'Settore: meccanica di precisione'
    }
  },
  {
    image: '/landing/carosel/4c.webp',
    title: 'Bando Regionale Piemonte',
    percentage: '-65%',
    text: '',
    testimonial: {
      name: 'Francesca L. – Cameri (NO)',
      quote: '"Supporto completo dalla progettazione all\'installazione."',
      sector: 'Settore: alimentare'
    }
  },
  {
    image: '/landing/carosel/5c.webp',
    title: 'CER + Incentivi GSE',
    percentage: '-58%',
    text: '',
    testimonial: {
      name: 'Anna G. – Cavaglio d\'Agogna (NO)',
      quote: '"Non pensavamo di rientrare nei fondi. Invece l\'impianto è quasi a metà prezzo."',
      sector: 'Settore: torneria automatica'
    }
  },
  {
    image: '/landing/carosel/6c.webp',
    title: 'Fondo Perduto CER + Transizione 5.0',
    percentage: '-67%',
    text: '',
    testimonial: {
      name: 'Marco T. – Piasco (CN)',
      quote: '"Progetto su misura e contributi gestiti da A a Z."',
      sector: 'Settore: falegnameria industriale'
    }
  },
  {
    image: '/landing/carosel/7c.webp',
    title: 'SIMEST + MIMIT',
    percentage: '-46%',
    text: '',
    testimonial: {
      name: 'Cliente soddisfatto',
      quote: '"Soluzione personalizzata per le nostre esigenze aziendali."',
      sector: 'Settore: manifatturiero'
    }
  },
  {
    image: '/landing/carosel/8c.webp',
    title: 'Transizione 5.0 + Bando Regionale',
    percentage: '-73%',
    text: '',
    testimonial: {
      name: 'Cliente soddisfatto',
      quote: '"Abbiamo modernizzato l\'azienda con un investimento sostenibile."',
      sector: 'Settore: automazione industriale'
    }
  },
  {
    image: '/landing/carosel/9c.webp',
    title: 'transizione 5.0',
    percentage: '-67,5%',
    text: '',
    testimonial: {
      name: 'Cliente soddisfatto',
      quote: '"Risultati superiori alle aspettative con un supporto costante."',
      sector: 'Settore: lavorazione metalli'
    }
  },
  {
    image: '/landing/carosel/10c.webp',
    title: 'rating ESG Ecomate',
    percentage: '',
    text: '',
    testimonial: {
      name: 'Cliente soddisfatto',
      quote: '"Migliorato il nostro rating ESG con un approccio strutturato."',
      sector: 'Settore: servizi alle imprese'
    }
  }
];

export default function SocialProofCarousel() {
  const [socialProofIndex, setSocialProofIndex] = useState(0);
  const visibleItems = 5;

  const handlePrev = () => {
    setSocialProofIndex(prev => 
      prev === 0 ? socialProofItems.length - visibleItems : prev - 1
    );
  };

  const handleNext = () => {
    setSocialProofIndex(prev => 
      prev === socialProofItems.length - visibleItems ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      padding: '80px 0',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '16px'
          }}>
            I Nostri Clienti Hanno Già Risparmiato
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#6b7280',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Scopri come abbiamo aiutato centinaia di aziende ad accedere agli incentivi
          </p>
        </div>

        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{
            display: 'flex',
            transform: `translateX(-${socialProofIndex * (100 / visibleItems)}%)`,
            transition: 'transform 0.5s ease-in-out',
            gap: '20px'
          }}>
            {socialProofItems.map((item, index) => (
              <div
                key={index}
                style={{
                  minWidth: `calc(${100 / visibleItems}% - 16px)`,
                  background: 'white',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease'
                }}
              >
                <div style={{ position: 'relative', height: '200px' }}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                    loading={index < 3 ? "eager" : "lazy"}
                    quality={60}
                  />
                  {item.percentage && (
                    <div style={{
                      position: 'absolute',
                      top: '16px',
                      right: '16px',
                      background: 'rgba(16, 185, 129, 0.9)',
                      color: 'white',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontWeight: 'bold',
                      fontSize: '1.1rem'
                    }}>
                      {item.percentage}
                    </div>
                  )}
                </div>
                
                <div style={{ padding: '24px' }}>
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    color: '#1f2937',
                    marginBottom: '12px',
                    minHeight: '50px'
                  }}>
                    {item.title}
                  </h3>
                  
                  <div style={{
                    borderTop: '1px solid #e5e7eb',
                    paddingTop: '16px'
                  }}>
                    <p style={{
                      fontSize: '0.9rem',
                      color: '#374151',
                      fontStyle: 'italic',
                      marginBottom: '8px',
                      minHeight: '40px'
                    }}>
                      {item.testimonial.quote}
                    </p>
                    <p style={{
                      fontSize: '0.8rem',
                      color: '#6b7280',
                      fontWeight: '500'
                    }}>
                      {item.testimonial.name}
                    </p>
                    <p style={{
                      fontSize: '0.8rem',
                      color: '#9ca3af'
                    }}>
                      {item.testimonial.sector}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            style={{
              position: 'absolute',
              left: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.9)',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              fontSize: '1.5rem',
              color: '#374151'
            }}
          >
            ←
          </button>
          
          <button
            onClick={handleNext}
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.9)',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              fontSize: '1.5rem',
              color: '#374151'
            }}
          >
            →
          </button>
        </div>

        {/* Dots Indicator */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          marginTop: '40px'
        }}>
          {Array.from({ length: socialProofItems.length - visibleItems + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setSocialProofIndex(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                background: index === socialProofIndex ? '#3b82f6' : '#d1d5db',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
