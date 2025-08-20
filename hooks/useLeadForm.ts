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
    console.log('submitLead chiamato con:', { formType, data });
    
    setLoading(true);
    setError(null);
    
    try {
      // Simulazione invio - sostituire con API reale se necessario
      console.log('Lead simulato:', { ...data, form_type: formType });
      
      // Simula delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (onSuccess) {
        onSuccess();
      }

      return { success: true, message: 'Lead registrato con successo' };
    } catch (err) {
      console.error('Errore in submitLead:', err);
      setError(err instanceof Error ? err.message : 'Errore sconosciuto');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { submitLead, loading, error };
}