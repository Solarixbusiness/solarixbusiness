export const revalidate = 86400;
export const runtime = 'nodejs';

export default function ParlaConUnConsulente() {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-6">
          Hai domande? Parliamone con calma.
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Forse hai già sentito parlare di impianti fotovoltaici, incentivi, comunità energetiche.
          Oppure no, e ti sembra tutto un casino di numeri, sigle e sigilli.
          Quello che ti proponiamo qui <strong>non è una consulenza commerciale</strong>, ma <strong>un momento di chiarezza</strong>.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Nessuna pressione. Solo risposte. Parli con un esperto che ti ascolta, ti fa 2 domande, e ti spiega
          <strong> se e dove </strong> ci sono opportunità per te.
        </p>
        <ul className="text-left text-gray-700 list-disc list-inside mb-6">
          <li>✅ Senza impegno</li>
          <li>✅ Senza appuntamenti forzati</li>
          <li>✅ Senza venderti nulla che non serva davvero</li>
        </ul>
        <p className="text-lg text-gray-700 mb-8">
          📩 La consulenza è gratuita. Il valore che può generare, invece, <strong>è tutto tuo</strong>.
        </p>

        <div className="flex justify-center mb-8">
          <a href="https://wa.me/393470087833" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white border border-green-700 text-green-700 hover:bg-gray-100 font-semibold py-3 px-6 rounded shadow">
            <img src="/icons/WhatsApp.svg" alt="WhatsApp" className="w-5 h-5" />
            Contattaci su WhatsApp o chiama: <strong>347 008 7833</strong>
          </a>
        </div>

        <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-lg shadow p-6 text-left">
          <h3 className="text-xl font-semibold text-green-700 mb-2">📇 Info Rapide</h3>
          <p className="text-gray-700 mb-1"><strong>Nome:</strong> SolarixBusiness</p>
          <p className="text-gray-700 mb-1"><strong>Telefono:</strong> 347 008 7833</p>
          <p className="text-gray-700 mb-1"><strong>Email:</strong> info@solarixbusiness.it</p>
          <p className="text-gray-700"><strong>Sede:</strong> Via Bertolotti 7 | 10121 Torino (TO) | Italy</p>
        </div>
      </div>
    </section>
  );
}
