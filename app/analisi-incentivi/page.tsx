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

  const { submitLead, loading, error } = useLeadForm({
    formType: 'analisi_incentivi'
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
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

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="settore" className="block font-medium text-gray-800 mb-1">In quale settore opera la tua azienda?</label>
              <input 
                type="text" 
                id="settore" 
                name="settore"
                value={formData.settore}
                onChange={(e) => setFormData({...formData, settore: e.target.value})}
                className="w-full border-gray-300 rounded-lg shadow-sm" 
                placeholder="Es. agroalimentare, metalmeccanico, servizi, logistica..."
              />
            </div>

            <div>
              <label htmlFor="attivita" className="block font-medium text-gray-800 mb-1">Descrivi brevemente di cosa vi occupate</label>
              <textarea 
                id="attivita" 
                name="attivita"
                value={formData.attivita}
                onChange={(e) => setFormData({...formData, attivita: e.target.value})}
                rows={3} 
                className="w-full border-gray-300 rounded-lg shadow-sm" 
                placeholder="Produzione, trasformazione, distribuzione, servizi energetici..."
              ></textarea>
            </div>

            <div>
              <label htmlFor="sede" className="block font-medium text-gray-800 mb-1">Dove si trova la sede operativa?</label>
              <input 
                type="text" 
                id="sede" 
                name="sede"
                value={formData.sede}
                onChange={(e) => setFormData({...formData, sede: e.target.value})}
                className="w-full border-gray-300 rounded-lg shadow-sm" 
                placeholder="Comune, provincia"
              />
            </div>

            <div>
              <label htmlFor="esperienza-bandi" className="block font-medium text-gray-800 mb-1">
                Avete mai usufruito o richiesto incentivi o bandi in passato?
              </label>
              <textarea 
                id="esperienza-bandi" 
                name="esperienzaBandi"
                value={formData.esperienzaBandi}
                onChange={(e) => setFormData({...formData, esperienzaBandi: e.target.value})}
                rows={3} 
                className="w-full border-gray-300 rounded-lg shadow-sm" 
                placeholder="Es. Conto Termico, Industria 4.0, bandi regionali, credito d'imposta..."
              ></textarea>
            </div>

            <div>
              <label htmlFor="interesse-specifico" className="block font-medium text-gray-800 mb-1">
                Hai già in mente un incentivo specifico su cui vuoi chiarimenti o conferme?
              </label>
              <textarea 
                id="interesse-specifico" 
                name="interesseSpecifico"
                value={formData.interesseSpecifico}
                onChange={(e) => setFormData({...formData, interesseSpecifico: e.target.value})}
                rows={3} 
                className="w-full border-gray-300 rounded-lg shadow-sm" 
                placeholder="Es. Transizione 5.0, CER, PNRR, bandi energia Piemonte, ecc."
              ></textarea>
            </div>

            <div>
              <label htmlFor="livello-conoscenza" className="block font-medium text-gray-800 mb-1">
                Quanto conosci la materia degli incentivi e della finanza agevolata?
              </label>
              <select 
                id="livello-conoscenza" 
                name="livelloConoscenza"
                value={formData.livelloConoscenza}
                onChange={(e) => setFormData({...formData, livelloConoscenza: e.target.value})}
                className="w-full border-gray-300 rounded-lg shadow-sm"
              >
                <option value="">Seleziona un'opzione</option>
                <option value="base">Conosco poco, voglio capirci di più</option>
                <option value="media">Ne ho sentito parlare, ma non so come applicarla</option>
                <option value="avanzata">Conosco la materia, voglio solo verifica e supporto</option>
              </select>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">I tuoi recapiti per ricontattarti</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nome" className="block font-medium text-gray-800 mb-1">Nome *</label>
                  <input 
                    type="text" 
                    id="nome" 
                    name="nome"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
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
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full border-gray-300 rounded-lg shadow-sm"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="text-center pt-6">
              <button 
                type="submit" 
                className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-lg"
                disabled={formStatus.loading}
              >
                {formStatus.loading ? 'Invio in corso...' : 'Invia richiesta analisi incentivi'}
              </button>
              <p className="text-sm text-gray-500 mt-2">
                Compila solo ciò che desideri: ogni informazione ci aiuta a guidarti meglio tra le agevolazioni disponibili.
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}