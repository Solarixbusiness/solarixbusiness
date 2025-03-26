import { readFile } from 'fs/promises';
import path from 'path';
import { NextResponse } from 'next/server';

const leadsFile = path.join(process.cwd(), 'public', 'leads.json');

export async function GET() {
  try {
    console.log('API getLeads - Inizio lettura dei leads');
    
    console.log('API getLeads - Tentativo di lettura del file:', leadsFile);
    const file = await readFile(leadsFile, 'utf-8');
    console.log('API getLeads - File letto con successo');
    
    const leads = JSON.parse(file);
    console.log('API getLeads - Leads trovati:', leads.length);
    
    return NextResponse.json(leads);
  } catch (error) {
    console.error('API getLeads - Errore:', error);
    return NextResponse.json(
      { error: 'Errore nel leggere i leads' },
      { status: 500 }
    );
  }
}
