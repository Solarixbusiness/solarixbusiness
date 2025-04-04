import { useEffect, useState } from 'react';
import { supabase } from '@/utils/supabaseClient';

interface Lead {
  id: string;
  nome: string;
  cognome: string;
  email: string;
  telefono: string;
  stato: string;
  form_type: string;
  note?: string;
  additional_data?: any;
  created_at: string;
  assegnato_a?: string | null;
  data_appuntamento?: string;
  ora_appuntamento?: string;
  indirizzo_appuntamento?: string;
  note_appuntamento?: string;
}

interface Props {
  userId: string;
}

export default function Leads({ userId }: Props) {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLeads = async () => {
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) setError(error.message);
      else setLeads(data || []);

      setLoading(false);
    };

    fetchLeads();
  }, []);

  const assegnaLead = async (leadId: string) => {
    const { error } = await supabase
      .from('leads')
      .update({ assegnato_a: userId })
      .eq('id', leadId)
      .is('assegnato_a', null);

    if (!error) {
      const { data } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false });
      setLeads(data || []);
    } else {
      alert('Errore durante l\'assegnazione');
    }
  };

  const leadNonAssegnati = leads.filter((lead) => !lead.assegnato_a);
  const leadMiei = leads.filter((lead) => lead.assegnato_a === userId);

  if (loading) return <p>Caricamento in corso...</p>;
  if (error) return <p>Errore: {error}</p>;

  return (
    <>
      <div className="bg-white shadow rounded-lg p-6 mb-10">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          📥 Lead da assegnare ({leadNonAssegnati.length})
        </h2>
        {leadNonAssegnati.length === 0 ? (
          <p className="text-gray-500 text-center">Nessun lead da assegnare.</p>
        ) : (
          <div className="space-y-4">
            {leadNonAssegnati.map((lead) => (
              <div key={lead.id} className="bg-white border p-4 rounded shadow-sm">
                <p><strong>{lead.nome} {lead.cognome}</strong> - {lead.email}</p>
                <p>Telefono: {lead.telefono}</p>
                <p>Form: {lead.form_type}</p>
                <button
                  onClick={() => assegnaLead(lead.id)}
                  className="mt-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  ➕ Assegna a me
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          👤 Lead assegnati a me ({leadMiei.length})
        </h2>
        {leadMiei.length === 0 ? (
          <p className="text-gray-500 text-center">Nessun lead assegnato.</p>
        ) : (
          <div className="space-y-4">
            {leadMiei.map((lead) => (
              <div key={lead.id} className="bg-green-50 border border-green-200 p-4 rounded shadow-sm">
                <p><strong>{lead.nome} {lead.cognome}</strong> - {lead.email}</p>
                <p>Telefono: {lead.telefono}</p>
                <p>Form: {lead.form_type}</p>
                <p>Stato: <strong>{lead.stato}</strong></p>
                
                {/* Aggiungi questa sezione per mostrare i dettagli dell'appuntamento */}
                {lead.data_appuntamento && (
                  <div className="mt-3 pt-3 border-t border-green-200">
                    <p className="font-medium">📅 Appuntamento:</p>
                    <p>Data: {lead.data_appuntamento}</p>
                    <p>Ora: {lead.ora_appuntamento}</p>
                    {lead.indirizzo_appuntamento && (
                      <p>Luogo: {lead.indirizzo_appuntamento}</p>
                    )}
                    {lead.note_appuntamento && (
                      <p>Note: {lead.note_appuntamento}</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

 