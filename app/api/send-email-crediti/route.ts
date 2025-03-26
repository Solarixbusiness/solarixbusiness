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
      conoscenzaCrediti,
      interesseInfo,
      tipoIntervento,
      interventoFuturo,
      interesseMonetizzazione
    } = await request.json();

    const data = await resend.emails.send({
      from: 'SolarixBusiness <info@solarixbusiness.it>',
      to: ['info@solarixbusiness.it'],
      subject: 'Nuova Richiesta Valutazione Crediti Ambientali',
      html: `
        <h2>Nuova richiesta di valutazione crediti ambientali</h2>
        <p><strong>Da:</strong> ${nome} ${cognome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefono:</strong> ${telefono}</p>
        <h3>Informazioni sui Crediti:</h3>
        <p><strong>Conoscenza Crediti:</strong> ${conoscenzaCrediti || 'Non specificata'}</p>
        <p><strong>Interesse Info:</strong> ${interesseInfo || 'Non specificato'}</p>
        <p><strong>Tipo Intervento Esistente:</strong><br>${tipoIntervento || 'Non specificato'}</p>
        <p><strong>Intervento Futuro:</strong><br>${interventoFuturo || 'Non specificato'}</p>
        <p><strong>Interesse Monetizzazione:</strong> ${interesseMonetizzazione || 'Non specificato'}</p>
      `,
      replyTo: email,
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