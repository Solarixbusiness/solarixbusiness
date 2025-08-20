export default function CTASection() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 px-8 rounded-xl shadow-2xl border border-slate-700 mt-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-yellow-500 text-black px-6 py-2 rounded-full font-bold text-lg mb-4">
            HAI LETTO LA GUIDA COMPLETA AL CONTO TERMICO 3.0?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ORA È IL MOMENTO DI AGIRE!
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Non lasciare che questa opportunità unica ti sfugga. Il Conto Termico 3.0 rappresenta la più grande rivoluzione degli incentivi per l'efficienza energetica in Italia.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-yellow-400">
            PERCHÉ SCEGLIERE SOLARIXBUSINESS?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="font-bold text-green-400 mb-2">ESPERTI CERTIFICATI</div>
              <p className="text-slate-300">Conosciamo ogni dettaglio del nuovo decreto</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="font-bold text-green-400 mb-2">CONSULENZA PERSONALIZZATA</div>
              <p className="text-slate-300">Analizziamo il tuo caso specifico</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="font-bold text-green-400 mb-2">MASSIMI INCENTIVI</div>
              <p className="text-slate-300">Ti aiutiamo a ottenere il 100% degli incentivi disponibili</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="font-bold text-green-400 mb-2">GESTIONE COMPLETA</div>
              <p className="text-slate-300">Dalla progettazione all'erogazione finale</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 md:col-span-2 lg:col-span-1">
              <div className="font-bold text-green-400 mb-2">SUPPORTO TOTALE</div>
              <p className="text-slate-300">Ti accompagniamo in ogni fase del processo</p>
            </div>
          </div>
        </div>

        {/* Incentives */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-yellow-400">
            GLI INCENTIVI CHE PUOI OTTENERE:
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-blue-600/20 to-blue-800/20 p-6 rounded-lg border border-blue-400/30">
              <div className="font-bold text-blue-300 mb-2">AZIENDE</div>
              <p className="text-white">Fino a 1.000.000€ per interventi di efficienza energetica</p>
            </div>
            <div className="bg-gradient-to-r from-green-600/20 to-green-800/20 p-6 rounded-lg border border-green-400/30">
              <div className="font-bold text-green-300 mb-2">PA & PICCOLI COMUNI</div>
              <p className="text-white">100% delle spese coperte</p>
            </div>
            <div className="bg-gradient-to-r from-purple-600/20 to-purple-800/20 p-6 rounded-lg border border-purple-400/30">
              <div className="font-bold text-purple-300 mb-2">POMPE DI CALORE</div>
              <p className="text-white">Incentivi fino a 160€/kW installato</p>
            </div>
            <div className="bg-gradient-to-r from-orange-600/20 to-orange-800/20 p-6 rounded-lg border border-orange-400/30">
              <div className="font-bold text-orange-300 mb-2">FOTOVOLTAICO + ACCUMULO</div>
              <p className="text-white">1.500€/kW + bonus UE del 20%</p>
            </div>
            <div className="bg-gradient-to-r from-red-600/20 to-red-800/20 p-6 rounded-lg border border-red-400/30 md:col-span-2">
              <div className="font-bold text-red-300 mb-2">SISTEMI IBRIDI</div>
              <p className="text-white">Maggiorazioni fino al 25%</p>
            </div>
          </div>
        </div>

        {/* Urgency */}
        <div className="bg-red-600/20 border border-red-400/50 rounded-lg p-6 mb-12 text-center">
          <h3 className="text-2xl font-bold text-red-300 mb-4">
            ATTENZIONE: BUDGET LIMITATO!
          </h3>
          <p className="text-xl text-white">
            900 MILIONI€/ANNO - Le risorse si esauriscono rapidamente!
          </p>
        </div>

        {/* Contact Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-6 text-yellow-400">
            CONTATTACI SUBITO
          </h3>
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-lg inline-block mb-8">
            <div className="font-bold text-lg">CONSULENZA GRATUITA - ANALISI PRELIMINARE INCLUSA</div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="text-slate-300 mb-2">Email</div>
              <a href="mailto:info@solarixbusiness.it" className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
                info@solarixbusiness.it
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="text-slate-300 mb-2">Telefono</div>
              <a href="tel:+390111883752" className="text-2xl font-bold text-green-400 hover:text-green-300 transition-colors">
                011 1883 7752
              </a>
            </div>
          </div>
        </div>

        {/* Action Steps */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-yellow-400">
            COSA ASPETTI?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 text-center">
              <div className="font-bold text-blue-300 mb-2">CHIAMA ORA</div>
              <p className="text-sm text-slate-300">per una consulenza gratuita</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 text-center">
              <div className="font-bold text-green-300 mb-2">ANALISI</div>
              <p className="text-sm text-slate-300">del tuo edificio/azienda</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 text-center">
              <div className="font-bold text-purple-300 mb-2">PROGETTAZIONE</div>
              <p className="text-sm text-slate-300">personalizzata</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 text-center">
              <div className="font-bold text-orange-300 mb-2">REALIZZAZIONE</div>
              <p className="text-sm text-slate-300">e gestione completa</p>
            </div>
          </div>
        </div>

        {/* Urgency Warning */}
        <div className="bg-red-600/20 border border-red-400/50 rounded-lg p-6 mb-12">
          <h3 className="text-xl font-bold text-red-300 mb-4 text-center">
            URGENTE: SCADENZE RAVVICINATE
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="font-bold text-red-300">90 giorni</div>
              <p className="text-sm text-slate-300">per l'accesso diretto</p>
            </div>
            <div>
              <div className="font-bold text-red-300">Documentazione complessa</div>
              <p className="text-sm text-slate-300">servono esperti</p>
            </div>
            <div>
              <div className="font-bold text-red-300">Procedure digitali</div>
              <p className="text-sm text-slate-300">zero margine d'errore</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-yellow-400">
            NON RIMANDARE - LE OPPORTUNITÀ NON ASPETTANO
          </h3>
          <p className="text-xl text-slate-300 mb-8">
            Il Conto Termico 3.0 è operativo. I tuoi concorrenti stanno già muovendosi. E tu?
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
            <a 
              href="tel:+390111883752" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-flex items-center gap-3"
            >
              <span>CHIAMA ADESSO: 011 1883 7752</span>
            </a>
            <a 
              href="mailto:info@solarixbusiness.it" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              SCRIVI ORA: info@solarixbusiness.it
            </a>
            <a 
              href="https://wa.me/390111883752" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-flex items-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              WhatsApp
            </a>
          </div>
          
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg inline-block">
            <div className="font-bold text-xl">TRASFORMA I TUOI CONSUMI IN RISPARMIO GARANTITO</div>
          </div>
          
          <div className="mt-8 text-slate-400">
            <p className="font-semibold">SolarixBusiness - Il tuo partner strategico per l'efficienza energetica</p>
          </div>
        </div>
      </div>
    </section>
  )
}
