"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabaseClient";

interface Appuntamento {
  id: string;
  created_at: string;
  lead_id: string;
  operatore_id: string;
  autore_id: string;
  data: string;
  ora: string;
  indirizzo: string;
  note: string;
}

interface LeadOption {
  id: string;
  nome: string;
  cognome: string;
  email: string;
}

interface Props {
  userId: string;
}

export default function Appuntamenti({ userId }: Props) {
  const [appuntamenti, setAppuntamenti] = useState<Appuntamento[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [leadId, setLeadId] = useState("");
  const [data, setData] = useState("");
  const [ora, setOra] = useState("");
  const [indirizzo, setIndirizzo] = useState("");
  const [note, setNote] = useState("");
  const [creating, setCreating] = useState(false);
  const [leadOptions, setLeadOptions] = useState<LeadOption[]>([]);

  useEffect(() => {
    const fetchAppuntamenti = async () => {
      const { data, error } = await supabase
        .from("appuntamenti")
        .select("*")
        .or(`operatore_id.eq.${userId},autore_id.eq.${userId}`)
        .order("created_at", { ascending: false });

      if (error) {
        setError("Errore nel caricamento degli appuntamenti");
      } else {
        setAppuntamenti(data || []);
      }
      setLoading(false);
    };

    fetchAppuntamenti();
  }, [userId]);

  useEffect(() => {
    const fetchLeadOptions = async () => {
      const { data, error } = await supabase
        .from("leads")
        .select("id, nome, cognome, email")
        .eq("assegnato_a", userId);

      if (!error) {
        setLeadOptions(data || []);
      }
    };

    fetchLeadOptions();
  }, [userId]);

  const creaAppuntamento = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadId || !data || !ora) return;
    setCreating(true);

    try {
      // Inserimento dell'appuntamento nel database
      const { data: newAppointment, error: insertError } = await supabase
        .from("appuntamenti")
        .insert([
          {
            lead_id: leadId,
            operatore_id: userId,
            autore_id: userId,
            data,
            ora,
            indirizzo,
            note,
          },
        ])
        .select(); // Questo restituisce i dati inseriti

      if (insertError) throw insertError;

      console.log("Appuntamento creato:", newAppointment);

      // Aggiornamento del lead associato con i dettagli dell'appuntamento
      const { error: updateError } = await supabase
        .from("leads")
        .update({
          data_appuntamento: data,
          ora_appuntamento: ora,
          indirizzo_appuntamento: indirizzo,
          note_appuntamento: note,
          stato: "appuntamento_fissato" // Aggiunto per cambiare lo stato del lead
        })
        .eq("id", leadId);

      if (updateError) {
        console.error("Errore nell'aggiornamento del lead:", updateError);
        alert("Errore durante l'aggiornamento del lead con i dettagli dell'appuntamento");
      } else {
        // Se l'aggiornamento è avvenuto con successo, aggiorna la lista degli appuntamenti
        const { data: updatedAppuntamenti, error: fetchError } = await supabase
          .from("appuntamenti")
          .select("*")
          .or(`operatore_id.eq.${userId},autore_id.eq.${userId}`)
          .order("created_at", { ascending: false });

        if (fetchError) {
          console.error("Errore nel recupero degli appuntamenti:", fetchError);
          setError("Errore durante il recupero degli appuntamenti");
        } else {
          setAppuntamenti(updatedAppuntamenti || []);
          // Reset dei campi del form
          setLeadId("");
          setData("");
          setOra("");
          setIndirizzo("");
          setNote("");
          alert("Appuntamento creato e lead aggiornato con successo!");
        }
      }
    } catch (err) {
      console.error("Errore generale:", err);
      alert("Errore durante la creazione dell'appuntamento");
    } finally {
      setCreating(false);
    }
  };

  if (loading) return <p>Caricamento appuntamenti...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">📅 Appuntamenti recenti</h2>

      <form onSubmit={creaAppuntamento} className="bg-white p-4 rounded shadow space-y-4">
        <h3 className="text-lg font-medium text-gray-800">➕ Nuovo Appuntamento</h3>

        <select
          value={leadId}
          onChange={(e) => setLeadId(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        >
          <option value="">Seleziona un lead...</option>
          {leadOptions.map((lead) => (
            <option key={lead.id} value={lead.id}>
              {lead.nome} {lead.cognome} ({lead.email})
            </option>
          ))}
        </select>

        <input
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />

        <input
          type="time"
          value={ora}
          onChange={(e) => setOra(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />

        <input
          type="text"
          placeholder="Indirizzo"
          value={indirizzo}
          onChange={(e) => setIndirizzo(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />

        <textarea
          placeholder="Note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />

        <button
          type="submit"
          disabled={creating}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {creating ? "Creazione..." : "Crea Appuntamento"}
        </button>
      </form>

      {appuntamenti.length === 0 ? (
        <p>Nessun appuntamento trovato.</p>
      ) : (
        appuntamenti.map((app) => (
          <div key={app.id} className="border p-4 rounded bg-white shadow-sm">
            <p><strong>Data:</strong> {app.data}</p>
            <p><strong>Ora:</strong> {app.ora}</p>
            <p><strong>Indirizzo:</strong> <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(app.indirizzo)}`} target="_blank" rel="noopener noreferrer">{app.indirizzo}</a></p>
            <p><strong>Note:</strong> {app.note}</p>
          </div>
        ))
      )}
    </div>
  );
}






