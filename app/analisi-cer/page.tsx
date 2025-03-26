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
  comune: string;
  abitanti: string;
  conoscenzaCer: string;
  preferenzaIncentivo: string;
  superficieDisponibile: string;
  adesioneEsistente: string;
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
  'name': 'Analisi Comunità Energetica Rinnovabile',
  'provider': {
    '@type': 'Organization',
    'name': 'SolarixBusiness',
    'url': 'https://www.solarixbusiness.it'
  },
  'serviceType': 'Analisi CER',
  'areaServed': {
    '@type': 'Country',
    'name': 'Italia'
  },
  'description': 'Servizio di analisi per la valutazione di partecipazione a Comunità Energetiche Rinnovabili.'
};

export default function AnalisiCERPage() {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    cognome: '',
    email: '',
    telefono: '',
    comune: '',
    abitanti: '',
    conoscenzaCer: '',
    preferenzaIncentivo: '',
    superficieDisponibile: '',
    adesioneEsistente: ''
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

      const response = await fetch('/api/send-email-cer', {
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
        comune: '',
        abitanti: '',
        conoscenzaCer: '',
        preferenzaIncentivo: '',
        superficieDisponibile: '',
        adesioneEsistente: ''
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
          <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Richiedi Analisi CER</h2>
          <p className="text-center text-gray-700 mb-12">
            Compila il modulo per sapere se la tua azienda può entrare in una Comunità Energetica Rinnovabile e ottenere contributi o tariffe incentivanti. 
            Nessun campo è obbligatorio: rispondi liberamente per aiutarci a inquadrarti meglio.
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
              <label htmlFor="comune" className="block font-medium text-gray-800 mb-1">In quale comune si trova la tua azienda?</label>
              <input 
                type="text" 
                id="comune" 
                name="comune"
                value={formData.comune}
                onChange={(e) => setFormData({...formData, comune: e.target.value})}
                className="w-full border-gray-300 rounded-lg shadow-sm" 
                placeholder="Es. Carmagnola (TO)"
              />
            </div>

            <div>
              <label htmlFor="abitanti" className="block font-medium text-gray-800 mb-1">Sai se il comune ha meno di 30.000 abitanti?</label>
              <select 
                id="abitanti" 
                name="abitanti"
                value={formData.abitanti}
                onChange={(e) => setFormData({...formData, abitanti: e.target.value})}
                className="w-full border-gray-300 rounded-lg shadow-sm"
              >
                <option value="">Seleziona un'opzione</option>
                <option value="si">Sì</option>
                <option value="no">No</option>
                <option value="non so">Non lo so</option>
              </select>
            </div>

            <div>
              <label htmlFor="conoscenza-cer" className="block font-medium text-gray-800 mb-1">
                Hai già capito come funziona una Comunità Energetica?
              </label>
              <select 
                id="conoscenza-cer" 
                name="conoscenzaCer"
                value={formData.conoscenzaCer}
                onChange={(e) => setFormData({...formData, conoscenzaCer: e.target.value})}
                className="w-full border-gray-300 rounded-lg shadow-sm"
              >
                <option value="">Seleziona un'opzione</option>
                <option value="no">No, voglio una spiegazione semplice</option>
                <option value="poco">Ne ho sentito parlare, ma voglio approfondire</option>
                <option value="si">Sì, conosco il funzionamento</option>
              </select>
            </div>

            <div>
              <label htmlFor="preferenza-incentivo" className="block font-medium text-gray-800 mb-1">Cosa ti interessa di più?</label>
              <select 
                id="preferenza-incentivo" 
                name="preferenzaIncentivo"
                value={formData.preferenzaIncentivo}
                onChange={(e) => setFormData({...formData, preferenzaIncentivo: e.target.value})}
                className="w-full border-gray-300 rounded-lg shadow-sm"
              >
                <option value="">Seleziona un'opzione</option>
                <option value="contributo">Ricevere il 40% a fondo perduto sull'impianto</option>
                <option value="tariffa">Accedere alla tariffa incentivante sulla produzione e condivisione</option>
                <option value="entrambi">Valutare entrambe le opzioni</option>
                <option value="non so">Non lo so ancora</option>
              </select>
            </div>

            <div>
              <label htmlFor="superficie-disponibile" className="block font-medium text-gray-800 mb-1">
                Hai una superficie disponibile per installare un impianto?
              </label>
              <textarea 
                id="superficie-disponibile" 
                name="superficieDisponibile"
                value={formData.superficieDisponibile}
                onChange={(e) => setFormData({...formData, superficieDisponibile: e.target.value})}
                rows={3} 
                className="w-full border-gray-300 rounded-lg shadow-sm" 
                placeholder="Es. tetto aziendale, tettoia, terreno... indica anche i mq se possibile."
              ></textarea>
            </div>

            <div>
              <label htmlFor="adesione-esistente" className="block font-medium text-gray-800 mb-1">
                Vorresti entrare in una CER esistente o crearne una nuova?
              </label>
              <select 
                id="adesione-esistente" 
                name="adesioneEsistente"
                value={formData.adesioneEsistente}
                onChange={(e) => setFormData({...formData, adesioneEsistente: e.target.value})}
                className="w-full border-gray-300 rounded-lg shadow-sm"
              >
                <option value="">Seleziona un'opzione</option>
                <option value="entrare">Entrare in una CER esistente</option>
                <option value="creare">Valutare la creazione di una nuova</option>
                <option value="entrambi">Valutare entrambe</option>
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
                {formStatus.loading ? 'Invio in corso...' : 'Invia richiesta analisi CER'}
              </button>
              <p className="text-sm text-gray-500 mt-2">
                Non è un modulo obbligatorio: ogni risposta ci aiuterà a proporti la soluzione migliore.
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}