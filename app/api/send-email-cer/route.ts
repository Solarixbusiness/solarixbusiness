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
      comune,
      abitanti,
      conoscenzaCer,
      preferenzaIncentivo,
      superficieDisponibile,
      adesioneEsistente
    } = await request.json();

    const data = await resend.emails.send({
      from: 'SolarixBusiness <info@solarixbusiness.it>',
      to: ['info@solarixbusiness.it'],
      subject: 'Nuova Richiesta Analisi CER',
      html: `
        <h2>Nuova richiesta di analisi CER</h2>
        <p><strong>Da:</strong> ${nome} ${cognome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefono:</strong> ${telefono}</p>
        <h3>Dettagli Localizzazione:</h3>
        <p><strong>Comune:</strong> ${comune || 'Non specificato'}</p>
        <p><strong>Comune sotto 30.000 abitanti:</strong> ${abitanti || 'Non specificato'}</p>
        <h3>Informazioni CER:</h3>
        <p><strong>Conoscenza CER:</strong> ${conoscenzaCer || 'Non specificata'}</p>
        <p><strong>Preferenza Incentivo:</strong> ${preferenzaIncentivo || 'Non specificata'}</p>
        <p><strong>Superficie Disponibile:</strong><br>${superficieDisponibile || 'Non specificata'}</p>
        <p><strong>Preferenza Adesione:</strong> ${adesioneEsistente || 'Non specificata'}</p>
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