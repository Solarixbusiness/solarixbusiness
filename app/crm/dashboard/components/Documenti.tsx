"use client";

import { useEffect, useState, useRef } from "react";
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

interface LeadOption {
  id: string;
  nome: string;
  cognome: string;
  email: string;
}

interface Props {
  userId: string;
}

export default function Documenti({ userId }: Props) {
  const [documenti, setDocumenti] = useState<Documento[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [leadOptions, setLeadOptions] = useState<LeadOption[]>([]);
  const [selectedLeadId, setSelectedLeadId] = useState<string>("");
  const [note, setNote] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const verifyFileExists = async (url: string) => {
    try {
      const response = await fetch(url, { method: 'HEAD' });
      return response.status === 200;
    } catch (error) {
      return false;
    }
  };

  useEffect(() => {
    const fetchDocumenti = async () => {
      const { data, error } = await supabase
        .from("documenti_lead")
        .select("*")
        .eq("caricato_da", userId)
        .order("created_at", { ascending: false });

      if (error) {
        setError(error.message);
      } else if (data) {
        // Filtra i documenti verificando che il file esista
        const documentiVerificati = [];
        for (const doc of data) {
          const exists = await verifyFileExists(doc.url_file);
          if (exists) {
            documentiVerificati.push(doc);
          } else {
            // Rimuovi il documento dal database se il file non esiste
            await supabase.from("documenti_lead").delete().eq("id", doc.id);
          }
        }
        setDocumenti(documentiVerificati);
      }
      setLoading(false);
    };

    fetchDocumenti();
  }, [userId]);

  useEffect(() => {
    const fetchLeadOptions = async () => {
      const { data, error } = await supabase
        .from("leads")
        .select("id, nome, cognome, email")
        .eq("assegnato_a", userId);

      if (!error) {
        setLeadOptions(data || []);
      } else {
        console.error("Errore nel recupero dei lead:", error);
      }
    };

    fetchLeadOptions();
  }, [userId]);

  const handleFileUpload = async (file: File, isCamera: boolean = false) => {
    if (!selectedLeadId) {
      alert("Seleziona un lead prima di caricare un documento");
      return;
    }

    setUploading(true);

    try {
      // Genera un nome file unico
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `${userId}/${selectedLeadId}/${fileName}`;

      // Carica il file nello storage di Supabase
      const { error: uploadError } = await supabase.storage
        .from("documenti")
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      // Ottieni l'URL firmato del file (valido per 1 anno)
      const { data: signedUrlData, error: signedUrlError } = await supabase.storage
        .from("documenti")
        .createSignedUrl(filePath, 60 * 60 * 24 * 365); // URL valido per 1 anno

      if (signedUrlError) {
        throw signedUrlError;
      }

      // Inserisci i dettagli del documento nel database
      const { error: insertError } = await supabase
        .from("documenti_lead")
        .insert({
          lead_id: selectedLeadId,
          nome_file: isCamera ? `Foto ${new Date().toLocaleString()}` : file.name,
          tipo_file: isCamera ? "foto" : file.type,
          url_file: signedUrlData.signedUrl, // Usa signedUrl invece di publicUrl
          caricato_da: userId,
          note: note
        });

      if (insertError) {
        throw insertError;
      }

      // Aggiorna la lista dei documenti
      const { data: updatedDocs, error: fetchError } = await supabase
        .from("documenti_lead")
        .select("*")
        .eq("caricato_da", userId)
        .order("created_at", { ascending: false });

      if (fetchError) {
        throw fetchError;
      }

      setDocumenti(updatedDocs || []);
      setSelectedLeadId("");
      setNote("");
      alert("Documento caricato con successo!");
    } catch (err) {
      console.error("Errore durante il caricamento:", err);
      alert("Errore durante il caricamento del documento");
    } finally {
      setUploading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleCameraCapture = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileUpload(file, true);
    }
  };

  const deleteDocument = async (docId: string, filePath: string) => {
    try {
      // Prima elimina il file dallo storage
      const { error: storageError } = await supabase.storage
        .from("documenti")
        .remove([filePath]);
      
      if (storageError) throw storageError;

      // Poi elimina il record dal database
      const { error: dbError } = await supabase
        .from("documenti_lead")
        .delete()
        .eq("id", docId);
      
      if (dbError) throw dbError;

      // Aggiorna la lista dei documenti
      setDocumenti(documenti.filter(doc => doc.id !== docId));
      
      alert("Documento eliminato con successo");
    } catch (error) {
      console.error("Errore durante l'eliminazione:", error);
      alert("Errore durante l'eliminazione del documento");
    }
  };

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
    <div className="space-y-6">
      <h2 className="text-xl font-bold">📂 Documenti</h2>

      {/* Form di caricamento */}
      <div className="bg-white p-5 rounded-lg shadow-sm space-y-4">
        <h3 className="text-lg font-medium">Carica nuovo documento</h3>
        
        <select
          value={selectedLeadId}
          onChange={(e) => setSelectedLeadId(e.target.value)}
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

        <textarea
          placeholder="Note sul documento (opzionale)"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />

        <div className="flex flex-wrap gap-3">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading || !selectedLeadId}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-blue-300"
          >
            📁 Seleziona file
          </button>

          <input
            type="file"
            accept="image/*"
            capture="environment"
            ref={cameraInputRef}
            onChange={handleCameraCapture}
            className="hidden"
          />
          <button
            onClick={() => cameraInputRef.current?.click()}
            disabled={uploading || !selectedLeadId}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:bg-green-300"
          >
            📷 Scatta foto
          </button>

          {uploading && (
            <span className="text-blue-600 animate-pulse ml-2 self-center">
              Caricamento in corso...
            </span>
          )}
        </div>
      </div>

      {/* Lista documenti */}
      <div>
        <h3 className="text-lg font-medium mb-3">Documenti caricati</h3>
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
                <div className="flex gap-2 mt-2">
                  <a
                    href={doc.url_file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    🔗 Apri documento
                  </a>
                  {doc.tipo_file.startsWith('image/') && (
                    <a
                      href={doc.url_file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:underline text-sm"
                    >
                      🖼️ Visualizza immagine
                    </a>
                  )}
                  <button
                    onClick={() => deleteDocument(doc.id, doc.url_file.split('/').pop() || '')}
                    className="text-red-600 hover:underline text-sm"
                  >
                    🗑️ Elimina
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

