// ✅ API Route compatibile con Next.js 14 (app directory)
// Percorso: /app/api/saveLeadApi/route.js

import { writeFile, readFile, access, constants } from 'fs/promises';
import path from 'path';
import { NextResponse } from 'next/server';

const leadsFile = path.join(process.cwd(), 'public', 'leads.json');

export async function POST(req) {
  try {
    console.log('API saveLeadApi - Ricevuta richiesta POST');
    
    const body = await req.json();
    console.log('API saveLeadApi - Dati ricevuti:', body);
    
    // Verifica che i campi obbligatori siano presenti
    if (!body.nome || !body.email || !body.tipo_form) {
      console.log('API saveLeadApi - Mancano campi obbligatori');
      return NextResponse.json(
        { success: false, error: 'Campi obbligatori mancanti' },
        { status: 400 }
      );
    }

    // Aggiungi la data
    body.data = new Date().toISOString();
    console.log('API saveLeadApi - Aggiunta data:', body.data);

    // Leggi i dati esistenti
    let leads = [];
    try {
      console.log('API saveLeadApi - Tentativo di lettura del file leads.json');
      await access(leadsFile, constants.F_OK);
      const file = await readFile(leadsFile, 'utf-8');
      leads = JSON.parse(file);
      console.log('API saveLeadApi - File letto con successo, leads esistenti:', leads.length);
    } catch (e) {
      console.log('API saveLeadApi - File non esiste, inizializzazione array vuoto');
      leads = [];
    }

    // Inserisci il nuovo lead in cima
    leads.unshift(body);
    console.log('API saveLeadApi - Nuovo lead aggiunto, totale:', leads.length);

    // Scrivi i dati aggiornati
    await writeFile(leadsFile, JSON.stringify(leads, null, 2));
    console.log('API saveLeadApi - File salvato con successo');

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('API saveLeadApi - Errore:', err);
    return NextResponse.json(
      { success: false, error: 'Errore interno' },
      { status: 500 }
    );
  }
}
