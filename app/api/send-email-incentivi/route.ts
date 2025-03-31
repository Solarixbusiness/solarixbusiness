import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const {
      nome,
      cognome,
      email,
      telefono,
      settore,
      attivita,
      sede,
      esperienzaBandi,
      interesseSpecifico,
      livelloConoscenza
    } = await request.json();

    const data = await resend.emails.send({
      from: 'SolarixBusiness <info@solarixbusiness.it>',
      to: ['info@solarixbusiness.it'],
      subject: 'Nuova Richiesta Analisi Incentivi',
      html: `
        <h2>Nuova richiesta di analisi incentivi</h2>
        <p><strong>Da:</strong> ${nome} ${cognome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefono:</strong> ${telefono}</p>
        <h3>Dettagli Azienda:</h3>
        <p><strong>Settore:</strong> ${settore || 'Non specificato'}</p>
        <p><strong>Attività:</strong><br>${attivita || 'Non specificata'}</p>
        <p><strong>Sede Operativa:</strong> ${sede || 'Non specificata'}</p>
        <h3>Esperienza e Interessi:</h3>
        <p><strong>Esperienza con Bandi:</strong><br>${esperienzaBandi || 'Non specificata'}</p>
        <p><strong>Interesse Specifico:</strong><br>${interesseSpecifico || 'Non specificato'}</p>
        <p><strong>Livello di Conoscenza:</strong> ${livelloConoscenza || 'Non specificato'}</p>
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