'use client';

import { useState } from 'react';
import { useLeadForm } from '@/hooks/useLeadForm';

interface FormData {
  nome: string;
  cognome: string;
  email: string;
  telefono: string;
  interests: string[];  // Array per le checkbox
  message: string;
}

export default function IncentiveForm() {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    cognome: '',
    email: '',
    telefono: '',
    interests: [],
    message: ''
  });

  const { submitLead, loading, error } = useLeadForm({
    formType: 'incentivi_home',
    onSuccess: () => {
      setFormData({
        nome: '',
        cognome: '',
        email: '',
        telefono: '',
        interests: [],
        message: ''
      });
      alert('Lead salvato con successo!');
    },
    onError: (error: Error) => {
      setFormData({
        nome: '',
        cognome: '',
        email: '',
        telefono: '',
        interests: [],
        message: ''
      });
      alert('Si è verificato un errore. Riprova più tardi.');
    }
  });

  const handleCheckboxChange = (value: string) => {
    setFormData(prev => {
      const interests = prev.interests.includes(value)
        ? prev.interests.filter(i => i !== value)
        : [...prev.interests, value];
      return { ...prev, interests };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('1. Form sottomesso con dati:', formData);

    await submitLead({
      nome: formData.nome,
      cognome: formData.cognome,
      email: formData.email,
      telefono: formData.telefono,
      note: formData.message,
      form_type: 'incentive_home',
      additional_data: {
        fonte: 'Homepage',
        sezione: 'Hero Section',
        interests: formData.interests
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={(e) => setFormData({...formData, nome: e.target.value})}
          placeholder="Nome"
          required
          autoComplete="given-name"
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div>
        <input
          type="text"
          id="cognome"
          name="cognome"
          value={formData.cognome}
          onChange={(e) => setFormData({...formData, cognome: e.target.value})}
          placeholder="Cognome"
          autoComplete="family-name"
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          placeholder="Email"
          required
          autoComplete="email"
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={(e) => setFormData({...formData, telefono: e.target.value})}
          placeholder="Telefono"
          required
          autoComplete="tel"
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="space-y-2">
        <label className="block font-medium">Sono interessato a:</label>
        <div className="space-y-1">
          <label className="flex items-center">
            <input
              type="checkbox"
              value="Incentivi Nazionali"
              checked={formData.interests.includes('Incentivi Nazionali')}
              onChange={(e) => handleCheckboxChange(e.target.value)}
              className="mr-2"
            />
            Incentivi Nazionali
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              value="Incentivi Regionali"
              checked={formData.interests.includes('Incentivi Regionali')}
              onChange={(e) => handleCheckboxChange(e.target.value)}
              className="mr-2"
            />
            Incentivi Regionali
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              value="Incentivi Settoriali"
              checked={formData.interests.includes('Incentivi Settoriali')}
              onChange={(e) => handleCheckboxChange(e.target.value)}
              className="mr-2"
            />
            Incentivi Settoriali
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              value="Consulenza Personalizzata"
              checked={formData.interests.includes('Consulenza Personalizzata')}
              onChange={(e) => handleCheckboxChange(e.target.value)}
              className="mr-2"
            />
            Consulenza Personalizzata
          </label>
        </div>
      </div>
      <div>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          placeholder="Scrivi qui eventuali dettagli o domande..."
          className="w-full px-3 py-2 border rounded-md"
          rows={4}
        />
      </div>
      <button 
        type="submit"
        disabled={loading}
        className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 disabled:opacity-50"
      >
        {loading ? 'Invio in corso...' : 'Invia'}
      </button>

      {error && (
        <div className="text-red-600 mt-2">
          {error}
        </div>
      )}
    </form>
  );
} 