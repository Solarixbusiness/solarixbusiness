import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Specifichiamo che questa route deve essere eseguita in ambiente Node.js
export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  console.log('🔍 API di contatto chiamata - inizio elaborazione');
  
  try {
    const body = await req.json();
    console.log('📦 Dati ricevuti:', JSON.stringify(body, null, 2));
    
    const { name, email, phone, company, companySize, interests, message, privacy, formType } = body;

    // Validazione base
    if (!name || !email) {
      console.log('❌ Validazione fallita: campi obbligatori mancanti');
      return NextResponse.json(
        { error: 'Per favore, compila tutti i campi obbligatori.' },
        { status: 400 }
      );
    }

    console.log(`✅ Validazione superata: ${name} (${email}), tipo form: ${formType || 'non specificato'}`);

    // Configurazione di Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.RECIPIENT_EMAIL || 'info@solarixbusiness.it';
    const fromEmail = 'info@solarixbusiness.it'; // Utilizziamo il dominio verificato

    console.log(`🔑 API Key Resend: ${resendApiKey ? 'configurata (nascosta)' : 'non configurata'}`);
    console.log(`📧 Email destinatario: ${recipientEmail}`);
    console.log(`📤 Email mittente: ${fromEmail}`);

    // Verifica che l'API key di Resend sia configurata
    if (!resendApiKey) {
      console.error('❌ API key di Resend non configurata');
      return NextResponse.json(
        { error: 'Configurazione del server email incompleta. Contattare l\'amministratore del sito.' },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);
    console.log('✅ Istanza Resend creata');

    // Costruzione del corpo dell'email in base al tipo di form
    let emailHtml = '';
    let emailSubject = '';

    if (formType === 'contact') {
      // Form di contatto dalla pagina contatti
      emailSubject = `Nuova richiesta di contatto da ${name}`;
      emailHtml = `
        <h2>Nuova richiesta di contatto da solariXbusiness</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefono:</strong> ${phone || 'Non specificato'}</p>
        <p><strong>Azienda:</strong> ${company || 'Non specificata'}</p>
        <p><strong>Messaggio:</strong> ${message || 'Nessun messaggio aggiuntivo'}</p>
        <p><strong>Privacy:</strong> ${privacy ? 'Accettata' : 'Non accettata'}</p>
        <hr />
        <p>Questa email è stata inviata automaticamente dal form di contatto del sito solariXbusiness.</p>
      `;
    } else {
      // Form incentivi
      // Formattazione degli interessi selezionati
      const interestsText = interests && interests.length > 0
        ? interests.map((interest: string) => {
            switch (interest) {
              case 'incentivi-nazionali': return 'Incentivi Nazionali';
              case 'incentivi-regionali': return 'Incentivi Regionali';
              case 'incentivi-settoriali': return 'Incentivi Settoriali';
              case 'consulenza-personalizzata': return 'Consulenza Personalizzata';
              default: return interest;
            }
          }).join(', ')
        : 'Nessun interesse specifico selezionato';

      // Formattazione della dimensione aziendale
      let companySizeText = '';
      switch (companySize) {
        case 'micro': companySizeText = 'Micro impresa (< 10 dipendenti)'; break;
        case 'small': companySizeText = 'Piccola impresa (< 50 dipendenti)'; break;
        case 'medium': companySizeText = 'Media impresa (< 250 dipendenti)'; break;
        case 'large': companySizeText = 'Grande impresa (≥ 250 dipendenti)'; break;
        default: companySizeText = companySize || 'Non specificata';
      }

      emailSubject = `Nuova richiesta di informazioni su incentivi da ${name}`;
      emailHtml = `
        <h2>Nuova richiesta di informazioni sugli incentivi da solariXbusiness</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefono:</strong> ${phone || 'Non specificato'}</p>
        <p><strong>Dimensione Azienda:</strong> ${companySizeText}</p>
        <p><strong>Interessi:</strong> ${interestsText}</p>
        <p><strong>Messaggio:</strong> ${message || 'Nessun messaggio aggiuntivo'}</p>
        <hr />
        <p>Questa email è stata inviata automaticamente dal form incentivi del sito solariXbusiness.</p>
      `;
    }

    console.log(`📝 Email preparata - Oggetto: ${emailSubject}`);
    console.log(`📧 Invio email a: ${recipientEmail}`);

    // Invio dell'email con Resend
    try {
      console.log('🚀 Tentativo di invio email con Resend...');
      console.log('📧 Configurazione email:', {
        from: `solariXbusiness <${fromEmail}>`,
        to: recipientEmail,
        subject: emailSubject,
        replyTo: email
      });
      
      const { data, error } = await resend.emails.send({
        from: `solariXbusiness <${fromEmail}>`,
        to: [recipientEmail],
        subject: emailSubject,
        html: emailHtml,
        replyTo: email,
      });

      if (error) {
        console.error('❌ Errore durante l\'invio dell\'email con Resend:', error);
        console.error('❌ Dettagli errore JSON:', JSON.stringify(error, null, 2));
        return NextResponse.json(
          { error: `Errore durante l'invio dell'email: ${error.message || JSON.stringify(error)}` },
          { status: 500 }
        );
      }

      console.log('✅ Email inviata con successo con Resend:', JSON.stringify(data, null, 2));
      
      return NextResponse.json({ 
        success: true, 
        message: 'Grazie per la tua richiesta! Ti contatteremo al più presto.' 
      });
    } catch (sendError: any) {
      console.error('❌ Errore durante l\'invio dell\'email con Resend:', sendError);
      console.error('❌ Dettagli errore JSON:', JSON.stringify(sendError, null, 2));
      return NextResponse.json(
        { error: `Errore durante l'invio dell'email: ${sendError.message || JSON.stringify(sendError)}` },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('❌ Errore generale durante l\'elaborazione della richiesta:', error);
    console.error('❌ Dettagli errore:', error.message || 'Errore sconosciuto');
    return NextResponse.json(
      { error: `Errore durante l'elaborazione della richiesta: ${error.message || 'Errore sconosciuto'}` },
      { status: 500 }
    );
  }
}
