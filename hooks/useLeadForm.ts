'use client';

import { useState } from 'react';

export interface LeadFormData {
  nome: string;
  cognome: string;
  email: string;
  telefono: string;
  form_type: string;
  note?: string;
  additional_data?: any;
}

interface UseLeadFormProps {
  formType: string;
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export function useLeadForm({ formType, onSuccess }: UseLeadFormProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitLead = async (data: LeadFormData) => {
    console.log('1. submitLead chiamato con:', { 
      formType, 
      data,
      env: {
        hasUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
        hasAnonKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        hasServiceKey: !!process.env.SUPABASE_SERVICE_ROLE_KEY
      }
    });
    
    setLoading(true);
    setError(null);
    
    try {
      console.log('2. Invio richiesta a /api/crea-lead');
      const response = await fetch('/api/crea-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...data,
          form_type: formType
        })
      });

      console.log('3. Risposta ricevuta:', {
        status: response.status,
        ok: response.ok,
        statusText: response.statusText
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error('4. Errore risposta:', {
          status: response.status,
          errorData,
          headers: Object.fromEntries(response.headers.entries())
        });
        throw new Error(errorData.error || 'Errore nel salvataggio del lead');
      }

      const result = await response.json();
      console.log('5. Lead salvato con successo:', {
        result,
        formType,
        dataInviati: data
      });
      
      if (onSuccess) {
        console.log('6. Chiamata callback onSuccess');
        onSuccess();
      }

      return result;
    } catch (err) {
      console.error('❌ Errore in submitLead:', {
        error: err,
        message: err instanceof Error ? err.message : 'Errore sconosciuto',
        formType,
        data
      });
      setError(err instanceof Error ? err.message : 'Errore sconosciuto');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { submitLead, loading, error };
} 