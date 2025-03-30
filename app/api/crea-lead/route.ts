import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(request: Request) {
  console.log('1. API crea-lead chiamata');

  try {
    const data = await request.json();
    console.log('2. Dati ricevuti dal form:', data);

    // Validazione campi obbligatori
    if (!data.nome || !data.email || !data.telefono) {
      console.error('3. Validazione fallita - Campi obbligatori mancanti:', { nome: data.nome, email: data.email, telefono: data.telefono });
      return NextResponse.json(
        { error: 'Campi obbligatori mancanti' },
        { status: 400 }
      );
    }

    console.log('4. Tentativo inserimento in Supabase...');
    const { error } = await supabase
      .from('leads')
      .insert([
        {
          nome: data.nome,
          cognome: data.cognome || '',
          email: data.email,
          telefono: data.telefono,
          note: data.note || '',
          form_type: data.form_type,
          additional_data: data.additional_data || {}
        }
      ]);

    if (error) {
      console.error('5. Errore Supabase:', error);
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    console.log('6. Lead salvato con successo');
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('7. Errore salvataggio lead:', error);
    return NextResponse.json(
      { error: 'Errore durante il salvataggio del lead' },
      { status: 500 }
    );
  }
} 