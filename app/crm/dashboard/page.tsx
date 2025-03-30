'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/utils/supabaseClient';
import { useRouter } from 'next/navigation';

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
}

export default function Dashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const initializeDashboard = async () => {
      try {
        const { data: { session }, error: authError } = await supabase.auth.getSession();
        
        if (authError) {
          console.error('Errore autenticazione:', authError);
          router.push('/crm/login');
          return;
        }

        if (!session) {
          console.log('Sessione non trovata, redirect al login');
          router.push('/crm/login');
          return;
        }

        console.log('Inizio caricamento lead...');
        const { data, error } = await supabase
          .from('leads')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Errore Supabase:', error);
          setError(`Errore nel recupero dei lead: ${error.message}`);
          return;
        }

        console.log('Lead recuperati:', data);
        setLeads(data || []);
      } catch (err) {
        console.error('Errore generico:', err);
        setError(err instanceof Error ? err.message : 'Errore nel recupero dei lead');
      } finally {
        setLoading(false);
      }
    };

    initializeDashboard();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/crm/login');
  };

  console.log('Stato attuale:', { loading, error, leadsCount: leads.length });

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="animate-pulse text-center text-gray-600">
              Caricamento lead in corso...
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h2 className="text-red-600 font-semibold">Errore</h2>
            <p className="text-red-500">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Riprova
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">Dashboard CRM</h1>
            </div>
            <div className="flex items-center">
              <button
                onClick={handleLogout}
                className="ml-4 px-4 py-2 text-sm text-red-600 hover:text-red-900"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              📋 Lead ricevuti ({leads.length})
            </h2>
            
            {leads.length === 0 ? (
              <p className="text-gray-500 text-center py-4">
                Nessun lead trovato nel database.
              </p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Telefono</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stato</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Form</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {leads.map((lead) => (
                      <tr key={lead.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          {lead.nome} {lead.cognome}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <a href={`mailto:${lead.email}`} className="text-blue-600 hover:text-blue-900">
                            {lead.email}
                          </a>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <a href={`tel:${lead.telefono}`} className="text-blue-600 hover:text-blue-900">
                            {lead.telefono}
                          </a>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            lead.stato === 'nuovo' ? 'bg-green-100 text-green-800' :
                            lead.stato === 'in_corso' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {lead.stato}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {lead.form_type}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(lead.created_at).toLocaleDateString('it-IT')}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 