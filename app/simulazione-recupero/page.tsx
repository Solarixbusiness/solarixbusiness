'use client';

import React, { FormEvent, useState } from 'react';
import { Roboto } from 'next/font/google';

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
  conoscenzaFinanza: string;
  motivoNonUso: string;
  altroMotivo: string;
  interesseConsulente: string;
  progettoInCorso: string;
  ambiti: string;
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
  'name': 'Simulazione di Recupero Finanziario',
  'provider': {
    '@type': 'Organization',
    'name': 'SolarixBusiness',
    'url': 'https://www.solarixbusiness.it'
  },
  'serviceType': 'Consulenza Finanziaria',
  'areaServed': {
    '@type': 'Country',
    'name': 'Italia'
  },
  'description': 'Servizio di simulazione per il recupero di incentivi e agevolazioni finanziarie per progetti energetici e aziendali.'
};

export default function SimulazioneRecuperoPage() {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    cognome: '',
    email: '',
    telefono: '',
    conoscenzaFinanza: '',
    motivoNonUso: '',
    altroMotivo: '',
    interesseConsulente: '',
    progettoInCorso: '',
    ambiti: ''
  });

  const [formStatus, setFormStatus] = useState<FormStatus>({
    submitted: false,
    loading: false,
    success: false,
    message: ''
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validazione base
    if (!formData.nome || !formData.email || !formData.telefono) {
      setFormStatus({
        submitted: true,
        loading: false,
        success: false,
        message: 'Per favore, compila tutti i campi obbligatori.'
      });
      return;
    }

    try {
      setFormStatus({
        submitted: true,
        loading: true,
        success: false,
        message: 'Invio in corso...'
      });

      const response = await fetch('/api/send-email-recupero', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Si è verificato un errore durante l\'invio');
      }

      setFormStatus({
        submitted: true,
        loading: false,
        success: true,
        message: 'Grazie! La tua richiesta è stata inviata con successo.'
      });
      
      // Reset form
      setFormData({
        nome: '',
        cognome: '',
        email: '',
        telefono: '',
        conoscenzaFinanza: '',
        motivoNonUso: '',
        altroMotivo: '',
        interesseConsulente: '',
        progettoInCorso: '',
        ambiti: ''
      });
      
      // Reset status dopo 5 secondi
      setTimeout(() => {
        setFormStatus(prev => ({
          ...prev,
          submitted: false
        }));
      }, 5000);
    } catch (error) {
      console.error('Errore durante l\'invio del form:', error);
      setFormStatus({
        submitted: true,
        loading: false,
        success: false,
        message: error instanceof Error ? error.message : 'Si è verificato un errore durante l\'invio. Riprova più tardi.'
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
          <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Richiedi Simulazione di Recupero</h2>
          <p className="text-center text-gray-700 mb-12">
            La finanza agevolata non è un'opportunità per pochi, ma un vero vantaggio competitivo accessibile. 
            Scopri quanto potresti recuperare sull'investimento energetico e sulle spese aziendali grazie agli incentivi cumulabili.
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
              <label htmlFor="conoscenza-finanza" className="block font-medium text-gray-800 mb-1">
                Conosci la finanza agevolata?
              </label>
              <select 
                id="conoscenza-finanza" 
                name="conoscenzaFinanza"
                value={formData.conoscenzaFinanza}
                onChange={(e) => setFormData({...formData, conoscenzaFinanza: e.target.value})}
                className="w-full border-gray-300 rounded-lg shadow-sm"
              >
                <option value="">Seleziona un'opzione</option>
                <option value="no">No, non la conosco</option>
                <option value="poco">Ne ho sentito parlare ma non l'ho mai usata</option>
                <option value="si">Sì, la utilizzo già</option>
              </select>
            </div>

            <div>
              <label htmlFor="motivo-non-uso" className="block font-medium text-gray-800 mb-1">
                Se non l'hai mai sfruttata, perché?
              </label>
              <select 
                id="motivo-non-uso" 
                name="motivoNonUso"
                value={formData.motivoNonUso}
                onChange={(e) => setFormData({...formData, motivoNonUso: e.target.value})}
                className="w-full border-gray-300 rounded-lg shadow-sm"
              >
                <option value="">Seleziona un'opzione</option>
                <option value="non sapevo">Non sapevo di poter accedere</option>
                <option value="troppo complicato">Sembrava complicata</option>
                <option value="nessuna esigenza">Pensavo non fosse utile alla mia attività</option>
                <option value="altro">Altro (specifica sotto)</option>
              </select>
              <textarea 
                id="altro-motivo" 
                name="altroMotivo"
                value={formData.altroMotivo}
                onChange={(e) => setFormData({...formData, altroMotivo: e.target.value})}
                rows={2} 
                className="w-full border-gray-300 rounded-lg shadow-sm mt-2" 
                placeholder="Se hai selezionato 'Altro', specifica qui..."
              ></textarea>
            </div>

            <div>
              <label htmlFor="interesse-consulente" className="block font-medium text-gray-800 mb-1">
                Vorresti un consulente esperto in finanza agevolata che segua l'azienda nel tempo?
              </label>
              <select 
                id="interesse-consulente" 
                name="interesseConsulente"
                value={formData.interesseConsulente}
                onChange={(e) => setFormData({...formData, interesseConsulente: e.target.value})}
                className="w-full border-gray-300 rounded-lg shadow-sm"
              >
                <option value="">Seleziona un'opzione</option>
                <option value="si">Sì, assolutamente</option>
                <option value="forse">Forse, se ci sono vantaggi chiari</option>
                <option value="no">No, voglio solo supporto una tantum</option>
              </select>
            </div>

            <div>
              <label htmlFor="progetto-in-corso" className="block font-medium text-gray-800 mb-1">
                Hai un progetto in corso per il quale vorresti una simulazione?
              </label>
              <textarea 
                id="progetto-in-corso" 
                name="progettoInCorso"
                value={formData.progettoInCorso}
                onChange={(e) => setFormData({...formData, progettoInCorso: e.target.value})}
                rows={3} 
                className="w-full border-gray-300 rounded-lg shadow-sm" 
                placeholder="Es. impianto fotovoltaico, efficientamento energetico, macchinari innovativi..."
              ></textarea>
            </div>

            <div>
              <label htmlFor="ambiti" className="block font-medium text-gray-800 mb-1">
                Quali ambiti vorresti valorizzare con la finanza agevolata?
              </label>
              <textarea 
                id="ambiti" 
                name="ambiti"
                value={formData.ambiti}
                onChange={(e) => setFormData({...formData, ambiti: e.target.value})}
                rows={3} 
                className="w-full border-gray-300 rounded-lg shadow-sm" 
                placeholder="Es. energia, sostenibilità, automazione, transizione digitale..."
              ></textarea>
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

            <div className="text-center pt-6">
              <button 
                type="submit" 
                className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-lg"
                disabled={formStatus.loading}
              >
                {formStatus.loading ? 'Invio in corso...' : 'Invia richiesta simulazione di recupero'}
              </button>
              <p className="text-sm text-gray-500 mt-2">
                Ogni azienda ha diritto a più di quanto immagina: iniziamo a scoprirlo insieme.
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}