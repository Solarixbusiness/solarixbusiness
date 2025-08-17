'use client';

import React, { useState } from 'react'

export default function TestEmailPage() {
  const [formData, setFormData] = useState({
    name: 'Test User',
    email: 'test@example.com',
    phone: '123456789',
    message: 'Questo è un messaggio di test per verificare Resend',
    formType: 'contact'
  });

  const [status, setStatus] = useState<{
    loading: boolean;
    success: boolean;
    error: string | null;
  }>({
    loading: false,
    success: false,
    error: null
  });

  const [response, setResponse] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });
    
    try {
      console.log('Invio dati al server:', formData);
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      setResponse(result);
      
      if (!response.ok) {
        throw new Error(result.error || 'Si è verificato un errore durante l\'invio dell\'email');
      }
      
      console.log('Risposta dal server:', result);
      setStatus({ loading: false, success: true, error: null });
    } catch (error: any) {
      console.error('Errore durante l\'invio dell\'email:', error);
      setStatus({ 
        loading: false, 
        success: false, 
        error: error.message || 'Si è verificato un errore sconosciuto' 
      });
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '2rem' }}>Test Invio Email con Resend</h1>
      
      <div style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '4px' }}>
        <h2>Configurazione attuale:</h2>
        <p><strong>API Key Resend:</strong> Configurata nel file .env.local</p>
        <p><strong>Email destinatario:</strong> info@solarixbusiness.it</p>
        <p><strong>Email mittente:</strong> info@solarixbusiness.it (dominio verificato)</p>
      </div>
      
      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
        <button 
          type="submit" 
          disabled={status.loading}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: status.loading ? 'not-allowed' : 'pointer',
            fontSize: '1rem',
            fontWeight: 'bold'
          }}
        >
          {status.loading ? 'Invio in corso...' : 'Invia Email di Test'}
        </button>
      </form>
      
      {status.error && (
        <div style={{ padding: '1rem', backgroundColor: '#ffebee', color: '#c62828', borderRadius: '4px', marginBottom: '1rem' }}>
          <h3>Errore:</h3>
          <p>{status.error}</p>
        </div>
      )}
      
      {status.success && (
        <div style={{ padding: '1rem', backgroundColor: '#e8f5e9', color: '#2e7d32', borderRadius: '4px', marginBottom: '1rem' }}>
          <h3>Successo!</h3>
          <p>L'email è stata inviata correttamente.</p>
        </div>
      )}
      
      {response && (
        <div style={{ marginTop: '2rem' }}>
          <h3>Risposta dal server:</h3>
          <pre style={{ 
            backgroundColor: '#f5f5f5', 
            padding: '1rem', 
            borderRadius: '4px', 
            overflow: 'auto',
            maxHeight: '300px'
          }}>
            {JSON.stringify(response, null, 2)}
          </pre>
        </div>
      )}
    </div>
  )
}
