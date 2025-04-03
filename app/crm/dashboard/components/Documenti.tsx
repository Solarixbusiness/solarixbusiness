"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabaseClient";

interface Documento {
  id: string;
  created_at: string;
  lead_id: string;
  nome_file: string;
  tipo_file: string;
  url_file: string;
  caricato_da: string;
}

interface Props {
  userId: string;
}

export default function Documenti({ userId }: Props) {
  const [documenti, setDocumenti] = useState<Documento[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDocumenti = async () => {
      const { data, error } = await supabase
        .from("documenti_lead")
        .select("*")
        .eq("caricato_da", userId)
        .order("created_at", { ascending: false });

      if (error) {
        setError(error.message);
      } else {
        setDocumenti(data || []);
      }
      setLoading(false);
    };

    fetchDocumenti();
  }, [userId]);

  if (loading) {
    return <div className="p-4 text-gray-600">Caricamento documenti...</div>;
  }

  if (error) {
    return (
      <div className="p-4 text-red-500">
        Errore nel caricamento dei documenti: {error}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">📂 Documenti caricati</h2>

      {documenti.length === 0 ? (
        <p className="text-gray-500">Nessun documento disponibile.</p>
      ) : (
        <ul className="space-y-3">
          {documenti.map((doc) => (
            <li
              key={doc.id}
              className="border p-4 rounded-lg shadow-sm bg-white hover:bg-gray-50"
            >
              <p className="font-semibold">{doc.nome_file}</p>
              <p className="text-sm text-gray-600">Tipo: {doc.tipo_file}</p>
              <a
                href={doc.url_file}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm"
              >
                🔗 Apri documento
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


