"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabaseClient";

interface Nota {
  id: string;
  created_at: string;
  nota: string;
  lead_id: string;
  creata_da: string;
}

interface Props {
  userId: string;
}

export default function Note({ userId }: Props) {
  const [note, setNote] = useState<Nota[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNote = async () => {
      const { data, error } = await supabase
        .from("note_lead")
        .select("*")
        .eq("creata_da", userId)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Errore nel recupero delle note:", error);
      } else {
        setNote(data || []);
      }
      setLoading(false);
    };

    fetchNote();
  }, [userId]);

  if (loading) {
    return <div className="text-center text-gray-600">Caricamento note...</div>;
  }

  return (
    <div className="space-y-4">
      {note.length === 0 ? (
        <p className="text-gray-500 text-center py-4">
          Nessuna nota disponibile.
        </p>
      ) : (
        note.map((nota) => (
          <div
            key={nota.id}
            className="bg-yellow-50 border border-yellow-200 p-4 rounded shadow-sm"
          >
            <p className="text-sm text-gray-700">
              <strong>Lead:</strong> {nota.lead_id.slice(0, 8)}...<br />
              <strong>Scritta da:</strong> {nota.creata_da.slice(0, 8)}...<br />
              <strong>Data:</strong> {new Date(nota.created_at).toLocaleString()}
            </p>
            <p className="mt-2 text-gray-800 whitespace-pre-line">{nota.nota}</p>
          </div>
        ))
      )}
    </div>
  );
}
