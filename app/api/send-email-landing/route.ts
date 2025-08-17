import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nome, email, telefono, azienda, messaggio } = body;

    // Invia l'email direttamente con Resend
    const data = await resend.emails.send({
      from: 'SolarixBusiness <info@solarixbusiness.it>',
      to: ['info@solarixbusiness.it'],
      subject: 'Nuovo contatto da Landing Page Google Ads',
      html: `
        <h2>Nuovo contatto da Landing Page Google Ads</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefono:</strong> ${telefono}</p>
        <p><strong>Azienda:</strong> ${azienda}</p>
        ${messaggio ? `<p><strong>Messaggio:</strong> ${messaggio}</p>` : ''}
        <hr>
        <p><em>Email inviata automaticamente dalla Landing Page Google Ads</em></p>
      `,
      reply_to: email,
    });

    console.log('Email inviata con successo:', data);
    return NextResponse.json({ message: 'Email inviata con successo' });
  } catch (error) {
    console.error('Errore durante l\'invio email:', error);
    return NextResponse.json(
      { error: 'Errore durante l\'invio dell\'email' },
      { status: 500 }
    );
  }
}