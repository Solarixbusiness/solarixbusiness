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
  name: string;
  email: string;
  phone: string;
  message: string;
  motivoNonUso: string;
  altroMotivo: string;
  privacy: boolean;
  settore: string;
  attivita: string;
  sede: string;
  esperienzaBandi: string;
  interesseSpecifico: string;
  livelloConoscenza: string;
  cognome: string;
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
  'name': 'Analisi Incentivi',
  'provider': {
    '@type': 'Organization',
    'name': 'SolarixBusiness',
    'url': 'https://www.solarixbusiness.it'
  },
  'serviceType': 'Analisi incentivi energetici',
  'areaServed': {
    '@type': 'Country',
    'name': 'Italia'
  },
  'description': 'Servizio di analisi personalizzata degli incentivi disponibili per progetti energetici.'
};

const sendEmail = async (formData: FormData) => {
  const response = await fetch('/api/contact', {
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

export default function AnalisiIncentiviPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    motivoNonUso: '',
    altroMotivo: '',
    privacy: false,
    settore: '',
    attivita: '',
    sede: '',
    esperienzaBandi: '',
    interesseSpecifico: '',
    livelloConoscenza: '',
    cognome: ''
  });

  const [formStatus, setFormStatus] = useState<FormStatus>({
    submitted: false,
    loading: false,
    success: false,
    message: ''
  });

  const [showPrivacyAlert, setShowPrivacyAlert] = useState(false);

  const { submitLead, loading, error } = useLeadForm({
    formType: 'analisi_incentivi'
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.privacy) {
      setShowPrivacyAlert(true);
      // Scroll al checkbox della privacy
      const privacyCheckbox = document.getElementById('privacy');
      privacyCheckbox?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    
    setShowPrivacyAlert(false);
    setFormStatus({
      submitted: true,
      loading: true,
      success: false,
      message: 'Invio in corso...'
    });
    
    try {
      await sendEmail(formData);
      
      await submitLead({
        nome: formData.name,
        cognome: formData.cognome,
        telefono: formData.phone,
        email: formData.email,
        note: formData.message,
        form_type: 'analisi_incentivi',
        additional_data: {
          settore: formData.settore,
          attivita: formData.attivita,
          sede: formData.sede,
          esperienza_bandi: formData.esperienzaBandi,
          fonte: 'Pagina Analisi Incentivi'
        }
      });

      setFormStatus({
        submitted: true,
        loading: false,
        success: true,
        message: 'Grazie! Ti contatteremo presto.'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        motivoNonUso: '',
        altroMotivo: '',
        privacy: false,
        settore: '',
        attivita: '',
        sede: '',
        esperienzaBandi: '',
        interesseSpecifico: '',
        livelloConoscenza: '',
        cognome: ''
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
          <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Richiedi Analisi Incentivi</h2>
          <p className="text-center text-gray-700 mb-12">
            Compila il modulo per ricevere un'analisi dettagliata degli incentivi attivabili dalla tua azienda. 
            Nessun campo è obbligatorio, ma più informazioni ci fornisci, più l'analisi sarà mirata ed efficace.
          </p>

          {formStatus.submitted && (
            <div 
              className={`p-4 mb-6 rounded-lg ${formStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
              role="alert"
              aria-live="assertive"
            >
              {formStatus.message}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit} aria-label="Form richiesta analisi incentivi">
            <div>
              <label htmlFor="settore" id="settore-label" className="block font-medium text-gray-800 mb-1">In quale settore opera la tua azienda?</label>
              <input 
                type="text" 
                id="settore" 
                name="settore"
                value={formData.settore}
                onChange={(e) => setFormData({...formData, settore: e.target.value})}
                className="w-full border-gray-300 rounded-lg shadow-sm" 
                placeholder="Es. agroalimentare, metalmeccanico, servizi, logistica..."
                aria-labelledby="settore-label"
                autoComplete="organization"
              />
            </div>

            <div>
              <label htmlFor="attivita" id="attivita-label" className="block font-medium text-gray-800 mb-1">Descrivi brevemente la tua attività</label>
              <textarea
                id="attivita"
                name="attivita"
                value={formData.attivita}
                onChange={(e) => setFormData({...formData, attivita: e.target.value})}
                className="w-full border-gray-300 rounded-lg shadow-sm"
                rows={3}
                placeholder="Descrivi brevemente la tua attività..."
                aria-labelledby="attivita-label"
                autoComplete="off"
              />
            </div>

            <div>
              <label htmlFor="sede" id="sede-label" className="block font-medium text-gray-800 mb-1">Dove si trova la tua sede principale?</label>
              <input
                type="text"
                id="sede"
                name="sede"
                value={formData.sede}
                onChange={(e) => setFormData({...formData, sede: e.target.value})}
                className="w-full border-gray-300 rounded-lg shadow-sm"
                placeholder="Città e provincia"
                aria-labelledby="sede-label"
                autoComplete="street-address"
              />
            </div>

            <div>
              <label htmlFor="name" id="name-label" className="block font-medium text-gray-800 mb-1">Nome *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full border-gray-300 rounded-lg shadow-sm"
                required
                aria-required="true"
                aria-labelledby="name-label"
                autoComplete="given-name"
              />
            </div>

            <div>
              <label htmlFor="cognome" id="cognome-label" className="block font-medium text-gray-800 mb-1">Cognome *</label>
              <input
                type="text"
                id="cognome"
                name="cognome"
                value={formData.cognome}
                onChange={(e) => setFormData({...formData, cognome: e.target.value})}
                className="w-full border-gray-300 rounded-lg shadow-sm"
                required
                aria-required="true"
                aria-labelledby="cognome-label"
                autoComplete="family-name"
              />
            </div>

            <div>
              <label htmlFor="email" id="email-label" className="block font-medium text-gray-800 mb-1">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full border-gray-300 rounded-lg shadow-sm"
                required
                aria-required="true"
                aria-labelledby="email-label"
                autoComplete="email"
              />
            </div>

            <div>
              <label htmlFor="phone" id="phone-label" className="block font-medium text-gray-800 mb-1">Telefono *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full border-gray-300 rounded-lg shadow-sm"
                required
                aria-required="true"
                aria-labelledby="phone-label"
                autoComplete="tel"
              />
            </div>

            <div>
              <label htmlFor="esperienzaBandi" id="esperienzaBandi-label" className="block font-medium text-gray-800 mb-1">
                Hai già esperienza con bandi e incentivi?
              </label>
              <select
                id="esperienzaBandi"
                name="esperienzaBandi"
                value={formData.esperienzaBandi}
                onChange={(e) => setFormData({...formData, esperienzaBandi: e.target.value})}
                className="w-full border-gray-300 rounded-lg shadow-sm"
                aria-labelledby="esperienzaBandi-label"
              >
                <option value="">Seleziona...</option>
                <option value="no">No, mai utilizzati</option>
                <option value="poco">Sì, ma poca esperienza</option>
                <option value="molto">Sì, molta esperienza</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" id="message-label" className="block font-medium text-gray-800 mb-1">Note o richieste particolari</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full border-gray-300 rounded-lg shadow-sm"
                rows={4}
                placeholder="Scrivi qui eventuali note o richieste..."
                aria-labelledby="message-label"
                autoComplete="off"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    checked={formData.privacy}
                    onChange={(e) => {
                      setFormData({...formData, privacy: e.target.checked});
                      if (e.target.checked) {
                        setShowPrivacyAlert(false);
                      }
                    }}
                    className="w-4 h-4 border-gray-300 rounded focus:ring-2 focus:ring-green-500"
                    required
                    aria-required="true"
                    aria-label="Accetto la privacy policy"
                  />
                </div>
                <div className="ml-3">
                  <label htmlFor="privacy" id="privacy-label" className="text-sm text-gray-700">
                    Accetto la privacy policy *
                  </label>
                </div>
              </div>

              {showPrivacyAlert && (
                <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-md" role="alert">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-orange-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-orange-700">
                        Per favore accetta la privacy policy prima di inviare il form
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={formStatus.loading}
              className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              aria-label={formStatus.loading ? 'Invio in corso...' : 'Invia richiesta analisi'}
            >
              {formStatus.loading ? 'Invio in corso...' : 'Richiedi Analisi'}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}