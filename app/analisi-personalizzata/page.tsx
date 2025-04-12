'use client';

import React, { FormEvent, useState } from 'react';
import { Roboto } from 'next/font/google';
import { useLeadForm } from '@/hooks/useLeadForm';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
});

interface FormData {
  nome: string;
  cognome: string;
  email: string;
  telefono: string;
  tipoAzienda: string;
  dipendenti: string;
  localita: string;
  superficie: string;
  preventivi: string;
  obiettivi: string;
  richieste: string;
  privacy: boolean;
}

interface FormStatus {
  submitted: boolean;
  loading: boolean;
  success: boolean;
  message: string;
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'Analisi Energetica Personalizzata',
  'provider': {
    '@type': 'Organization',
    'name': 'SolarixBusiness',
    'url': 'https://www.solarixbusiness.it'
  },
  'serviceType': 'Analisi strategica energetica',
  'areaServed': {
    '@type': 'Country',
    'name': 'Italia'
  },
  'description': 'Servizio di analisi personalizzata per l\'ottimizzazione della strategia energetica aziendale.'
};

export default function AnalisiPersonalizzata() {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    cognome: '',
    email: '',
    telefono: '',
    tipoAzienda: '',
    dipendenti: '',
    localita: '',
    superficie: '',
    preventivi: '',
    obiettivi: '',
    richieste: '',
    privacy: false
  });

  const [formStatus, setFormStatus] = useState<FormStatus>({
    submitted: false,
    loading: false,
    success: false,
    message: ''
  });

  const { submitLead, loading: submitLoading, error } = useLeadForm({
    formType: 'analisi_personalizzata'
  });

  const sendEmail = async (formData: FormData) => {
    const response = await fetch('/api/send-email-analisi', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Errore nell\'invio dell\'email');
    }

    return response.json();
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.privacy) {
      setFormStatus({
        submitted: true,
        loading: false,
        success: false,
        message: 'Devi accettare la privacy policy per procedere.'
      });
      return;
    }

    setFormStatus({
      submitted: true,
      loading: true,
      success: false,
      message: 'Invio in corso...'
    });
    
    try {
      await sendEmail(formData);
      
      await submitLead({
        nome: formData.nome,
        cognome: formData.cognome,
        email: formData.email,
        telefono: formData.telefono,
        note: formData.richieste,
        form_type: 'analisi_personalizzata',
        additional_data: {
          tipo_azienda: formData.tipoAzienda,
          dipendenti: formData.dipendenti,
          localita: formData.localita,
          superficie: formData.superficie,
          preventivi: formData.preventivi,
          obiettivi: formData.obiettivi,
          richieste: formData.richieste,
          fonte: 'Pagina Analisi Personalizzata',
          privacy_accepted: formData.privacy
        }
      });

      setFormStatus({
        submitted: true,
        loading: false,
        success: true,
        message: 'Grazie! Ti contatteremo presto.'
      });
      
      // Tracciamento conversione Google Ads
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'conversion', {
          'send_to': 'AW-16979483829/8kRVCPDUkJQZEOXdvv4p'
        });
        console.log('Conversione tracciata su Google Ads');
      }

      setFormData({
        nome: '',
        cognome: '',
        email: '',
        telefono: '',
        tipoAzienda: '',
        dipendenti: '',
        localita: '',
        superficie: '',
        preventivi: '',
        obiettivi: '',
        richieste: '',
        privacy: false
      });

    } catch (error) {
      console.error('Errore:', error);
      setFormStatus({
        submitted: true,
        loading: false,
        success: false,
        message: 'Si è verificato un errore. Riprova più tardi.'
      });
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="bg-white py-16 px-6 md:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Richiedi l'Analisi Personalizzata</h2>
          <p className="text-center text-gray-700 mb-12">
            Compila il modulo seguente per aiutarci a comprendere la tua azienda e costruire una strategia energetica su misura. 
            Nessun campo è obbligatorio, ma più informazioni ci fornisci, più precisa sarà la nostra proposta.
          </p>

          {formStatus.submitted && (
            <div 
              className={`p-4 mb-6 rounded-lg ${
                formStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}
              role="alert"
              aria-live="assertive"
            >
              {formStatus.message}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Tipo di azienda */}
            <div>
              <label htmlFor="tipo-azienda" className="block font-medium text-gray-800 mb-1">Che tipo di azienda sei?</label>
              <input 
                type="text" 
                id="tipo-azienda" 
                name="tipoAzienda"
                value={formData.tipoAzienda}
                onChange={(e) => setFormData({...formData, tipoAzienda: e.target.value})}
                className="w-full border-gray-300 rounded-lg shadow-sm" 
                placeholder="Es. manifatturiera, agricola, logistica, ecc."
              />
            </div>

            {/* Numero dipendenti */}
            <div>
              <label htmlFor="dipendenti" className="block font-medium text-gray-800 mb-1">Quanti dipendenti avete?</label>
              <input 
                type="number" 
                id="dipendenti" 
                name="dipendenti"
                value={formData.dipendenti}
                onChange={(e) => setFormData({...formData, dipendenti: e.target.value})}
                className="w-full border-gray-300 rounded-lg shadow-sm" 
                placeholder="Es. 5, 25, 100"
              />
            </div>

            {/* Localizzazione */}
            <div>
              <label htmlFor="localita" className="block font-medium text-gray-800 mb-1">Dove si trova la tua sede operativa?</label>
              <input 
                type="text" 
                id="localita" 
                name="localita"
                value={formData.localita}
                onChange={(e) => setFormData({...formData, localita: e.target.value})}
                className="w-full border-gray-300 rounded-lg shadow-sm" 
                placeholder="Comune, provincia"
              />
            </div>

            {/* Superficie disponibile */}
            <div>
              <label htmlFor="superficie" className="block font-medium text-gray-800 mb-1">Hai una superficie disponibile per un impianto?</label>
              <textarea 
                id="superficie" 
                name="superficie"
                value={formData.superficie}
                onChange={(e) => setFormData({...formData, superficie: e.target.value})}
                rows={3} 
                className="w-full border-gray-300 rounded-lg shadow-sm" 
                placeholder="Es. 500 m² di tetto, terreno agricolo, copertura industriale..."
              ></textarea>
            </div>

            {/* Preventivi esistenti */}
            <div>
              <label htmlFor="preventivi" className="block font-medium text-gray-800 mb-1">Hai già ricevuto preventivi o consulenze?</label>
              <textarea 
                id="preventivi" 
                name="preventivi"
                value={formData.preventivi}
                onChange={(e) => setFormData({...formData, preventivi: e.target.value})}
                rows={3} 
                className="w-full border-gray-300 rounded-lg shadow-sm" 
                placeholder="Raccontaci se hai già valutato altre soluzioni."
              ></textarea>
            </div>

            {/* Obiettivi */}
            <div>
              <label htmlFor="obiettivi" className="block font-medium text-gray-800 mb-1">Quali sono i tuoi obiettivi principali?</label>
              <textarea 
                id="obiettivi" 
                name="obiettivi"
                value={formData.obiettivi}
                onChange={(e) => setFormData({...formData, obiettivi: e.target.value})}
                rows={3} 
                className="w-full border-gray-300 rounded-lg shadow-sm" 
                placeholder="Riduzione dei costi, sostenibilità, investimento a lungo termine, valorizzazione ESG..."
              ></textarea>
            </div>

            {/* Richieste specifiche */}
            <div>
              <label htmlFor="richieste" className="block font-medium text-gray-800 mb-1">Hai richieste specifiche o criticità particolari?</label>
              <textarea 
                id="richieste" 
                name="richieste"
                value={formData.richieste}
                onChange={(e) => setFormData({...formData, richieste: e.target.value})}
                rows={3} 
                className="w-full border-gray-300 rounded-lg shadow-sm" 
                placeholder="Es. vincoli paesaggistici, problemi burocratici, esigenze di produzione continua..."
              ></textarea>
            </div>

            {/* Recapiti */}
            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">I tuoi recapiti per ricontattarti</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nome" className="block font-medium text-gray-800 mb-1">Nome *</label>
                  <input 
                    type="text" 
                    id="nome" 
                    name="nome"
                    value={formData.nome}
                    onChange={(e) => setFormData({...formData, nome: e.target.value})}
                    className="w-full border-gray-300 rounded-lg shadow-sm"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="cognome" className="block font-medium text-gray-800 mb-1">Cognome *</label>
                  <input 
                    type="text" 
                    id="cognome" 
                    name="cognome"
                    value={formData.cognome}
                    onChange={(e) => setFormData({...formData, cognome: e.target.value})}
                    className="w-full border-gray-300 rounded-lg shadow-sm"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-medium text-gray-800 mb-1">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full border-gray-300 rounded-lg shadow-sm"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="telefono" className="block font-medium text-gray-800 mb-1">Telefono *</label>
                  <input 
                    type="tel" 
                    id="telefono" 
                    name="telefono"
                    value={formData.telefono}
                    onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                    className="w-full border-gray-300 rounded-lg shadow-sm"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Privacy */}
            <div className="pt-4">
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="privacy" 
                  name="privacy"
                  checked={formData.privacy}
                  onChange={(e) => setFormData({...formData, privacy: e.target.checked})}
                  className="h-4 w-4 text-green-700 border-gray-300 rounded"
                  required
                />
                <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                  Accetto la privacy policy *
                </label>
              </div>
            </div>

            {/* Submit */}
            <div className="text-center pt-6">
              <button 
                type="submit" 
                className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-lg"
                disabled={formStatus.loading}
              >
                {formStatus.loading ? 'Invio in corso...' : 'Invia richiesta di analisi personalizzata'}
              </button>
              <p className="text-sm text-gray-500 mt-2">
                Compila solo ciò che vuoi: la tua privacy è rispettata e nessun dato verrà ceduto a terzi.
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
} 