import React from 'react';

export const revalidate = 86400;
export const runtime = 'nodejs';

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Informativa sulla Privacy</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introduzione</h2>
        <p className="mb-4">
          SolariX Business ("noi", "nostro" o "nostra") rispetta la tua privacy ed è impegnata a proteggere i tuoi dati personali. 
          Questa informativa sulla privacy ti spiegherà come trattiamo i tuoi dati personali quando visiti il nostro sito web.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Dati che raccogliamo</h2>
        <p className="mb-4">
          Raccogliamo e trattiamo i seguenti tipi di dati personali:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Dati di contatto (nome, email, telefono)</li>
          <li>Dati aziendali (nome azienda, settore, dimensione)</li>
          <li>Dati di utilizzo (come utilizzi il nostro sito)</li>
          <li>Dati tecnici (indirizzo IP, tipo di browser, ecc.)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Come utilizziamo i tuoi dati</h2>
        <p className="mb-4">
          Utilizziamo i tuoi dati personali per:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Fornirti i nostri servizi</li>
          <li>Comunicare con te</li>
          <li>Migliorare il nostro sito web</li>
          <li>Rispettare obblighi legali</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Cookie e tecnologie simili</h2>
        <p className="mb-4">
          Utilizziamo cookie e tecnologie simili per migliorare la tua esperienza sul nostro sito. 
          Puoi gestire le tue preferenze sui cookie attraverso il nostro banner di consenso.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. I tuoi diritti</h2>
        <p className="mb-4">
          Hai il diritto di:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Accedere ai tuoi dati personali</li>
          <li>Correggere i tuoi dati</li>
          <li>Eliminare i tuoi dati</li>
          <li>Limitare il trattamento</li>
          <li>Opporti al trattamento</li>
          <li>Portabilità dei dati</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Contatti</h2>
        <p className="mb-4">
          Per qualsiasi domanda sulla privacy, contattaci a:
          <br />
          Email: privacy@solarixbusiness.com
          <br />
          Telefono: [Inserisci numero]
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Modifiche alla privacy policy</h2>
        <p className="mb-4">
          Questa privacy policy può essere aggiornata periodicamente. Ti consigliamo di controllare regolarmente questa pagina per eventuali modifiche.
        </p>
      </section>

      <p className="text-sm text-gray-600">
        Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
      </p>
    </div>
  );
} 