'use client'

import { useState, FormEvent } from 'react'

interface ServiceFormProps {
  title: string
  formType: string
}

export default function ServiceForm({ title, formType }: ServiceFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    privacy: false
  })

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  })

  const [showPrivacyAlert, setShowPrivacyAlert] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!formData.privacy) {
      setShowPrivacyAlert(true);
      // Scroll al checkbox della privacy
      const privacyCheckbox = document.getElementById('service-privacy');
      privacyCheckbox?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    
    setShowPrivacyAlert(false);
    setStatus({ loading: true, success: false, error: false, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, formType }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({
          loading: false,
          success: true,
          error: false,
          message: 'Grazie! Ti contatteremo presto.'
        })
        
        // Tracciamento conversione Google Ads
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'conversion', {
            'send_to': 'AW-16979483829/8kRVCPDUkJQZEOXdvv4p',
            'value': 1.0,
            'currency': 'EUR',
            'transaction_id': new Date().getTime().toString()
          });
          console.log('Conversione tracciata su Google Ads');
        }
        
        setFormData({ name: '', email: '', phone: '', company: '', message: '', privacy: false })
      } else {
        throw new Error(data.error || 'Errore durante l\'invio')
      }
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Si è verificato un errore. Riprova più tardi.'
      })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h2 className="text-3xl font-bold text-center text-primary-600 mb-6">{title}</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6" aria-label={`Form richiesta ${title}`}>
        <div className="space-y-4">
          <div>
            <label htmlFor="name" id="name-label" className="block text-sm font-medium text-gray-700">Nome completo *</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              autoComplete="name"
              aria-required="true"
              aria-labelledby="name-label"
              aria-label="Nome e cognome completo"
            />
          </div>

          <div>
            <label htmlFor="email" id="email-label" className="block text-sm font-medium text-gray-700">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              autoComplete="email"
              aria-required="true"
              aria-labelledby="email-label"
              aria-label="Indirizzo email"
            />
          </div>

          <div>
            <label htmlFor="phone" id="phone-label" className="block text-sm font-medium text-gray-700">Telefono *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              autoComplete="tel"
              aria-required="true"
              aria-labelledby="phone-label"
              aria-label="Numero di telefono"
            />
          </div>

          <div>
            <label htmlFor="company" id="company-label" className="block text-sm font-medium text-gray-700">Azienda</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              autoComplete="organization"
              aria-labelledby="company-label"
              aria-label="Nome dell'azienda"
            />
          </div>

          <div>
            <label htmlFor="message" id="message-label" className="block text-sm font-medium text-gray-700">Messaggio *</label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              autoComplete="off"
              aria-required="true"
              aria-labelledby="message-label"
              aria-label="Il tuo messaggio"
            ></textarea>
          </div>

          <div className="flex flex-col space-y-2">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  id="service-privacy"
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
                <label htmlFor="service-privacy" className="text-sm text-gray-700">
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
        </div>

        {status.message && (
          <div 
            className={`p-4 rounded-md ${status.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}
            role="alert"
            aria-live="assertive"
          >
            {status.message}
          </div>
        )}

        <button
          type="submit"
          disabled={status.loading}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          aria-label={status.loading ? 'Invio in corso...' : 'Invia richiesta'}
        >
          {status.loading ? 'Invio in corso...' : 'Invia'}
        </button>
      </form>
    </div>
  )
}