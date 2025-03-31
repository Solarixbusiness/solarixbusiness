import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const {
      nome,
      email,
      telefono,
      tipoAzienda,
      dipendenti,
      localita,
      superficie,
      preventivi,
      obiettivi,
      richieste
    } = await request.json();

    const data = await resend.emails.send({
      from: 'SolarixBusiness <info@solarixbusiness.it>',
      to: ['info@solarixbusiness.it'],
      subject: 'Nuova Richiesta di Analisi Personalizzata',
      html: `
        <h2>Nuova richiesta di analisi personalizzata</h2>
        <p><strong>Da:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefono:</strong> ${telefono}</p>
        <h3>Dettagli Azienda:</h3>
        <p><strong>Tipo Azienda:</strong> ${tipoAzienda || 'Non specificato'}</p>
        <p><strong>Numero Dipendenti:</strong> ${dipendenti || 'Non specificato'}</p>
        <p><strong>Località:</strong> ${localita || 'Non specificata'}</p>
        <h3>Dettagli Progetto:</h3>
        <p><strong>Superficie Disponibile:</strong><br>${superficie || 'Non specificata'}</p>
        <p><strong>Preventivi Esistenti:</strong><br>${preventivi || 'Non specificati'}</p>
        <p><strong>Obiettivi:</strong><br>${obiettivi || 'Non specificati'}</p>
        <p><strong>Richieste Specifiche:</strong><br>${richieste || 'Non specificate'}</p>
      `,
      reply_to: email,
    });

    return NextResponse.json({ message: 'Email inviata con successo' });
  } catch (error) {
    console.error('Errore durante l\'invio dell\'email:', error);
    return NextResponse.json(
      { error: 'Errore durante l\'invio dell\'email' },
      { status: 500 }
    );
  }
} 