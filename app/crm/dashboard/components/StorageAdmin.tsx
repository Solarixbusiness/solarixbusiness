"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/utils/supabaseClient";

interface FileInfo {
  name: string;
  path: string;
  inDatabase: boolean;
}

export default function StorageAdmin() {
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState<FileInfo[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);
  const [deleting, setDeleting] = useState(false);

  const loadFiles = async () => {
    setLoading(true);
    try {
      // 1. Ottieni tutti i file dallo storage
      const { data: storageFiles, error: storageError } = await supabase
        .storage
        .from('documenti')
        .list('', { sortBy: { column: 'name', order: 'asc' } });

      if (storageError) throw storageError;

      // 2. Ottieni tutti i documenti dal database
      const { data: dbFiles, error: dbError } = await supabase
        .from('documenti_lead')
        .select('url_file');

      if (dbError) throw dbError;

      // 3. Estrai i percorsi dei file dal database
      const dbFilePaths = dbFiles.map(doc => {
        const parts = doc.url_file.split('/documenti/');
        return parts.length > 1 ? parts[1] : null;
      }).filter(Boolean);

      // 4. Costruisci l'elenco dei file con il flag "inDatabase"
      const allFiles: FileInfo[] = [];
      
      // Processa file di primo livello
      const processFiles = (files: any[], prefix: string = '') => {
        files.forEach(file => {
          if (file.id) { // È un file, non una cartella
            const fullPath = prefix + file.name;
            const inDb = dbFilePaths.some(dbPath => dbPath === fullPath);
            allFiles.push({
              name: file.name,
              path: fullPath,
              inDatabase: inDb
            });
          } else {
            // È una cartella, esplora ricorsivamente
            const folderPrefix = prefix + file.name + '/';
            supabase.storage.from('documenti').list(folderPrefix)
              .then(({ data }) => {
                if (data) processFiles(data, folderPrefix);
              });
          }
        });
      };

      processFiles(storageFiles || []);
      
      // 5. Aggiorna lo stato
      setFiles(allFiles);
    } catch (error) {
      console.error("Errore nel caricamento dei file:", error);
      alert("Errore nel caricamento dei file");
    } finally {
      setLoading(false);
    }
  };

  const deleteSelectedFiles = async () => {
    if (selectedFiles.length === 0) return;
    
    if (!confirm(`Sei sicuro di voler eliminare ${selectedFiles.length} file?`)) {
      return;
    }
    
    setDeleting(true);
    try {
      const { error } = await supabase
        .storage
        .from('documenti')
        .remove(selectedFiles);
        
      if (error) throw error;
      
      alert(`${selectedFiles.length} file eliminati con successo`);
      setSelectedFiles([]);
      loadFiles(); // Ricarica la lista
    } catch (error) {
      console.error("Errore nell'eliminazione dei file:", error);
      alert("Errore nell'eliminazione dei file");
    } finally {
      setDeleting(false);
    }
  };

  const toggleFileSelection = (path: string) => {
    setSelectedFiles(prev => 
      prev.includes(path) 
        ? prev.filter(p => p !== path) 
        : [...prev, path]
    );
  };

  const selectAllOrphans = () => {
    const orphanPaths = files
      .filter(file => !file.inDatabase)
      .map(file => file.path);
    setSelectedFiles(orphanPaths);
  };

  useEffect(() => {
    loadFiles();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Admin Storage</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">File nello Storage</h2>
          <div className="space-x-2">
            <button
              onClick={loadFiles}
              disabled={loading}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              🔄 Aggiorna
            </button>
            <button
              onClick={selectAllOrphans}
              disabled={loading}
              className="px-4 py-2 bg-yellow-100 rounded hover:bg-yellow-200"
            >
              🔍 Seleziona Orfani
            </button>
            <button
              onClick={deleteSelectedFiles}
              disabled={deleting || selectedFiles.length === 0}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:bg-red-300"
            >
              🗑️ Elimina Selezionati ({selectedFiles.length})
            </button>
          </div>
        </div>
        
        {loading ? (
          <div className="text-center py-8">Caricamento dei file...</div>
        ) : (
          <div className="border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="p-3 text-left">Seleziona</th>
                  <th className="p-3 text-left">Nome File</th>
                  <th className="p-3 text-left">Stato</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {files.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="p-4 text-center text-gray-500">
                      Nessun file trovato
                    </td>
                  </tr>
                ) : (
                  files.map((file) => (
                    <tr 
                      key={file.path} 
                      className={`hover:bg-gray-50 ${!file.inDatabase ? 'bg-red-50' : ''}`}
                    >
                      <td className="p-3">
                        <input
                          type="checkbox"
                          checked={selectedFiles.includes(file.path)}
                          onChange={() => toggleFileSelection(file.path)}
                          className="w-4 h-4"
                        />
                      </td>
                      <td className="p-3 font-mono text-sm truncate max-w-xs">
                        {file.path}
                      </td>
                      <td className="p-3">
                        {file.inDatabase ? (
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                            Nel database
                          </span>
                        ) : (
                          <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">
                            Orfano
                          </span>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
} 