'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/utils/supabaseClient';
import Leads from './components/Leads';
import Appuntamenti from './components/Appuntamenti';
import DocumentiLead from './components/Documenti';
import NoteLead from './components/Note';
import { useRouter } from 'next/navigation';

export default function CrmDashboard() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState<'leads' | 'appuntamenti' | 'documenti' | 'note'>('leads');
  const router = useRouter();

  useEffect(() => {
    const fetchSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push('/crm/login');
        return;
      }
      setUser(session.user);
      setLoading(false);
    };

    fetchSession();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Caricamento in corso...
      </div>
    );
  }

  const renderSection = () => {
    switch (activeSection) {
      case 'leads':
        return <Leads userId={user.id} />;
      case 'appuntamenti':
        return <Appuntamenti userId={user.id} />;
      case 'documenti':
        return <DocumentiLead userId={user.id} />;
      case 'note':
        return <NoteLead userId={user.id} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-6">📊 CRM</h2>
        <nav className="space-y-3">
          <button
            onClick={() => setActiveSection('leads')}
            className={`block w-full text-left px-4 py-2 rounded ${
              activeSection === 'leads' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
            }`}
          >
            📋 Lead
          </button>
          <button
            onClick={() => setActiveSection('appuntamenti')}
            className={`block w-full text-left px-4 py-2 rounded ${
              activeSection === 'appuntamenti' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
            }`}
          >
            📅 Appuntamenti
          </button>
          <button
            onClick={() => setActiveSection('documenti')}
            className={`block w-full text-left px-4 py-2 rounded ${
              activeSection === 'documenti' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
            }`}
          >
            📁 Documenti
          </button>
          <button
            onClick={() => setActiveSection('note')}
            className={`block w-full text-left px-4 py-2 rounded ${
              activeSection === 'note' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
            }`}
          >
            📝 Note
          </button>
          <button
            onClick={async () => {
              await supabase.auth.signOut();
              router.push('/crm/login');
            }}
            className="mt-10 text-red-600 hover:text-red-800"
          >
            🚪 Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">{renderSection()}</main>
    </div>
  );
}

