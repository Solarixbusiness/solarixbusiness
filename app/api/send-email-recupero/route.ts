import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  console.log('🔍 API di recupero chiamata - inizio elaborazione');
  
  try {
    const {
      nome,
      cognome,
      email,
      telefono,
      conoscenzaFinanza,
      motivoNonUso,
      altroMotivo,
      interesseConsulente,
      progettoInCorso,
      ambiti
    } = await request.json();

    console.log('📦 Dati ricevuti:', JSON.stringify({
      nome,
      cognome,
      email,
      telefono,
      conoscenzaFinanza,
      motivoNonUso,
      altroMotivo,
      interesseConsulente,
      progettoInCorso,
      ambiti
    }, null, 2));
    
    // Validazione base
    if (!nome || !cognome || !email || !telefono) {
      console.log('❌ Validazione fallita: campi obbligatori mancanti');
      return NextResponse.json(
        { error: 'Per favore, compila tutti i campi obbligatori.' },
        { status: 400 }
      );
    }

    const emailSubject = `Nuova richiesta di simulazione recupero da ${nome} ${cognome}`;
    const emailHtml = `
      <h2>Nuova richiesta di simulazione recupero da solariXbusiness</h2>
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>Cognome:</strong> ${cognome}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefono:</strong> ${telefono}</p>
      <h3>Informazioni sulla Finanza Agevolata:</h3>
      <p><strong>Conoscenza Finanza Agevolata:</strong> ${conoscenzaFinanza || 'Non specificata'}</p>
      <p><strong>Motivo Non Utilizzo:</strong> ${motivoNonUso || 'Non specificato'}</p>
      <p><strong>Altro Motivo:</strong><br>${altroMotivo || 'Non specificato'}</p>
      <p><strong>Interesse Consulenza:</strong> ${interesseConsulente || 'Non specificato'}</p>
      <p><strong>Progetto in Corso:</strong><br>${progettoInCorso || 'Non specificato'}</p>
      <p><strong>Ambiti di Interesse:</strong><br>${ambiti || 'Non specificati'}</p>
      <hr />
      <p>Questa email è stata inviata automaticamente dal form di simulazione recupero del sito solariXbusiness.</p>
    `;

    try {
      const { data, error } = await resend.emails.send({
        from: 'SolarixBusiness <info@solarixbusiness.it>',
        to: ['info@solarixbusiness.it'],
        subject: emailSubject,
        html: emailHtml,
        reply_to: email,
      });

      if (error) {
        console.error('❌ Errore durante l\'invio dell\'email:', error);
        return NextResponse.json(
          { error: 'Errore durante l\'invio dell\'email.' },
          { status: 500 }
        );
      }

      return NextResponse.json({ 
        success: true, 
        message: 'Grazie per la tua richiesta! Ti contatteremo al più presto.' 
      });
    } catch (sendError: any) {
      console.error('❌ Errore durante l\'invio dell\'email:', sendError);
      return NextResponse.json(
        { error: 'Errore durante l\'invio dell\'email.' },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('❌ Errore generale:', error);
    return NextResponse.json(
      { error: 'Errore durante l\'elaborazione della richiesta.' },
      { status: 500 }
    );
  }
} 