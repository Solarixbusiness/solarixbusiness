import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const resend = new Resend(process.env.RESEND_API_KEY);
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nome, email, telefono, azienda } = body;

    // Salva il lead in Supabase
    const { error: supabaseError } = await supabase
      .from('leads')
      .insert([
        {
          nome: nome,
          email: email,
          telefono: telefono,
          note: `Azienda: ${azienda}`,
          form_type: 'landing_google_ads',
          additional_data: { azienda }
        }
      ]);

    if (supabaseError) {
      console.error('Errore Supabase:', supabaseError);
      throw new Error('Errore durante il salvataggio del lead');
    }

    // Invia l'email
    const data = await resend.emails.send({
      from: 'SolarixBusiness <info@solarixbusiness.it>',
      to: ['info@solarixbusiness.it'],
      subject: 'Nuovo contatto da Landing Page Google Ads',
      html: `
        <h2>Nuovo contatto da Landing Page</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefono:</strong> ${telefono}</p>
        <p><strong>Azienda:</strong> ${azienda}</p>
      `,
      reply_to: email,
    });

    return NextResponse.json({ message: 'Lead salvato e email inviata con successo' });
  } catch (error) {
    console.error('Errore durante l\'elaborazione:', error);
    return NextResponse.json(
      { error: 'Errore durante l\'elaborazione della richiesta' },
      { status: 500 }
    );
  }
} 