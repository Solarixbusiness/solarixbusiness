'use client'

import React from 'react'
import Link from 'next/link'

export default function AboutSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="space-y-16">
        
        {/* Hero Statement */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Chi Siamo
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-2xl md:text-3xl text-gray-700 font-light max-w-4xl mx-auto leading-relaxed">
            Non siamo fornitori di tecnologie. Siamo architetti della trasformazione industriale che costruiscono il futuro competitivo delle aziende italiane.
          </p>
        </div>

        {/* La Nostra Visione */}
        <div className="bg-gray-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">La nostra visione</h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              <strong className="text-gray-900">SolarixBusiness nasce dalla convinzione che la competitività del futuro si costruisce oggi</strong>, integrando efficientamento energetico, automazione intelligente, innovazione tecnologica e sostenibilità in un'unica strategia di crescita aziendale.
            </p>
            <p>
              Mentre il mercato offre soluzioni frammentate, noi abbiamo creato l'ecosistema completo che accompagna le PMI italiane nella trasformazione verso l'Industria 4.0, massimizzando ogni opportunità di finanziamento e costruendo profili aziendali sempre più competitivi e attrattivi.
            </p>
            <p className="text-xl font-semibold text-blue-700">
              Non implementiamo singole tecnologie. Progettiamo la trasformazione sistemica che rende le aziende leader nel loro settore.
            </p>
          </div>
        </div>
        
        {/* Il nostro approccio integrato */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-gray-900">Il nostro approccio integrato</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            SolarixBusiness è l'unico partner che unisce competenze tecniche, finanziarie e strategiche per una trasformazione aziendale completa e sostenibile nel tempo.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Efficientamento Energetico Avanzato</h3>
              <p className="text-gray-700 leading-relaxed">
                Audit energetici approfonditi, implementazione di sistemi di energia rinnovabile integrati, ottimizzazione dei consumi e monitoraggio intelligente per ridurre minimo 40% max 100% dei costi operativi a seconda del profilo aziendale e aumentare l'indipendenza energetica aziendale.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Automazione e Robotica Collaborativa</h3>
              <p className="text-gray-700 leading-relaxed">
                Progettazione e implementazione di sistemi cobot, automazione dei processi produttivi, integrazione di tecnologie di visione artificiale e controllo qualità automatizzato per aumentare produttività ed efficienza operativa.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovazione Tecnologica e Digitalizzazione</h3>
              <p className="text-gray-700 leading-relaxed">
                Implementazione di soluzioni IoT industriale, sistemi di monitoraggio intelligente, digitalizzazione dei processi e integrazione di tecnologie emergenti per creare fabbriche connesse e data-driven.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Certificazioni e Compliance Strategica</h3>
              <p className="text-gray-700 leading-relaxed">
                Consulenza specializzata per l'ottenimento di certificazioni ISO necessarie e strategiche, strutturazione del profilo aziendale per massimizzare l'accesso a bandi e incentivi, e costruzione di un posizionamento competitivo duraturo.
              </p>
            </div>
          </div>
        </div>

        {/* Expertise in Finanza Agevolata */}
        <div className="bg-blue-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Expertise in finanza agevolata e partnership strategiche</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Monitoraggio continuo delle opportunità di finanziamento</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Il nostro team specializzato monitora costantemente bandi nazionali, europei e regionali, mantenendo aggiornamenti in tempo reale su Transizione 5.0, PNRR, Horizon Europe, bandi regionali e settoriali. Questa vigilanza continua ci permette di identificare e combinare strategicamente le migliori opportunità per ogni cliente.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Costruzione di sinergie e collaborazioni</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Quando necessario, strutturiamo partnership strategiche con altre aziende, enti di ricerca e istituzioni per rafforzare le candidature ai bandi, creare progetti consortili più competitivi e accedere a finanziamenti di maggiore entità. La nostra rete di collaborazioni amplifica le possibilità di successo di ogni progetto.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ottimizzazione del profilo aziendale</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Strutturiamo il profilo aziendale per renderlo più attrattivo e competitivo: dalla consulenza sulle certificazioni ISO più strategiche, alla preparazione della documentazione per i bandi, fino alla costruzione di un posizionamento che massimizza le probabilità di ottenere finanziamenti e incentivi.
              </p>
            </div>
          </div>
        </div>

        {/* Risultati e Numeri */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-8 text-center">I risultati che generiamo</h2>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Tasso di successo sui bandi presentati</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold mb-2">65%</div>
              <div className="text-blue-100">Riduzione media costi operativi</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold mb-2">18</div>
              <div className="text-blue-100">Mesi per ROI medio progetti</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold mb-2">200</div>
              <div className="text-blue-100">Clienti soddisfatti</div>
            </div>
          </div>
          
          <p className="text-center text-xl mt-8 text-blue-100">
            Oltre 50 milioni di euro in finanziamenti ottenuti per i nostri clienti negli ultimi tre anni
          </p>
        </div>
 {/* I nostri founder */}
 <div className="space-y-8">
          <h2 className="text-3xl font-bold text-gray-900">I nostri founder</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            SolarixBusiness è guidata da tre professionisti con competenze complementari che hanno unito le loro expertise per creare l'ecosistema più completo per la trasformazione industriale delle PMI italiane.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-8 text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">TE</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tiziano Ena</h3>
              <p className="text-blue-600 font-semibold mb-3">CEO & Strategic Investment Architect</p>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Visionario strategico dell'ottimizzazione finanziaria industriale, architetto delle strategie di investimento che massimizzano ROI e minimizzano rischi. Specializzato nel trasformare incentivi e bandi in leve competitive, costruisce ecosistemi di crescita che rafforzano le aziende e moltiplicano i profitti attraverso l'integrazione intelligente di opportunità di finanziamento.
              </p>
              <a href="mailto:tiziano.ena@solarixbusiness.it" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                tiziano.ena@solarixbusiness.it
              </a>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-8 text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">KC</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Katia Cavaliere</h3>
              <p className="text-blue-600 font-semibold mb-3">Co-Founder & CFO - Consulenza e Sviluppo</p>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Esperta in finanza agevolata e sviluppo aziendale, orchestratrice delle opportunità di finanziamento per l'innovazione industriale. Trasforma le complessità burocratiche in vantaggi competitivi, massimizzando l'accesso a bandi e incentivi per accelerare la crescita delle aziende clienti.
              </p>
              <a href="mailto:katia.cavaliere@solarixbusiness.it" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                katia.cavaliere@solarixbusiness.it
              </a>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-8 text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">PO</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Piercarlo Orsello</h3>
              <p className="text-blue-600 font-semibold mb-3">Co-Founder & Shareholder - Architetto</p>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Architetto della trasformazione spaziale e funzionale degli ambienti industriali. Progetta l'integrazione armonica tra innovazione tecnologica e spazi produttivi, creando fabbriche del futuro che ottimizzano flussi, efficienza e benessere lavorativo in un'unica visione architettonica.
              </p>
              <a href="mailto:piercarlo.orsello@solarixbusiness.it" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                piercarlo.orsello@solarixbusiness.it
              </a>
            </div>
          </div>
        </div>

        {/* La Nostra Rete di Partner Strategici */}
        <div className="bg-gray-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">La nostra rete di partner strategici</h2>
          
          <div className="space-y-6 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              La complessità della trasformazione industriale 4.0 richiede competenze altamente specializzate in ambiti diversi. Per garantire l'eccellenza in ogni fase del progetto, SolarixBusiness ha costruito una rete selezionata di partner strategici, ciascuno leader nel proprio settore.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong className="text-gray-900">Noi rimaniamo il vostro unico punto di riferimento</strong>, coordinando e orchestrando tutte le competenze necessarie per il successo del vostro progetto. Questa rete ci permette di offrire soluzioni complete mantenendo la massima qualità e specializzazione in ogni ambito.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-2">
                <a href="https://www.creditsafe.com/it/it.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                  Creditsafe
                </a>
              </h4>
              <p className="text-gray-600 text-sm">Partner strategico per analisi e valutazioni aziendali</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-2">
                <a href="https://www.poloinnovativo.it/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                  Polo Innovativo
                </a>
              </h4>
              <p className="text-gray-600 text-sm">Partner strategico per innovazione e digitalizzazione</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-2">
                <a href="https://www.pjritaly.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                  PJR Italy
                </a>
              </h4>
              <p className="text-gray-600 text-sm">Partner strategico per soluzioni tecnologiche avanzate</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-2">
                <a href="https://www.confidisystema.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                  Confidi Sistema
                </a>
              </h4>
              <p className="text-gray-600 text-sm">Partner strategico per supporto finanziario</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-2">
                <a href="https://hidrasocietabenefit.it/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                  Hidra Società Benefit
                </a>
              </h4>
              <p className="text-gray-600 text-sm">Partner strategico per sostenibilità e ESG</p>
            </div>
          </div>
          
          <div className="mt-8 bg-blue-50 rounded-lg p-6">
            <p className="text-center text-gray-700 leading-relaxed">
              <strong className="text-blue-700">Il vostro vantaggio:</strong> Un'unica interfaccia con SolarixBusiness per accedere alle migliori competenze specialistiche del mercato. Massima qualità, coordinamento perfetto, responsabilità unica.
            </p>
          </div>
        </div>

        {/* Team Operativo */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Il nostro team operativo</h2>
          
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Oltre ai founder, SolarixBusiness può contare su un team operativo di <strong className="text-gray-900">specialisti interni e consulenti dedicati</strong> distribuiti su tutto il territorio nazionale, coordinati direttamente dai nostri founder per garantire standard qualitativi uniformi e eccellenti.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">8</div>
                <div className="text-gray-700">Ingegneri industriali</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
                <div className="text-gray-700">Consulenti finanziari</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
                <div className="text-gray-700">Project manager</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">6</div>
                <div className="text-gray-700">Specialisti tecnici</div>
              </div>
            </div>
            
            <p className="text-center text-gray-600 mt-6 italic">
              Un team multidisciplinare al servizio della vostra trasformazione industriale
            </p>
          </div>
        </div>

        {/* La Nostra Promessa */}
        <div className="bg-gray-900 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-8 text-center">Il nostro impegno verso di voi</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-lg mb-2">Trasparenza totale e risultati misurabili</h4>
                <p className="text-gray-300">Ogni investimento è pianificato con ROI verificabile, tempi certi e milestone controllabili. Non promettiamo, dimostriamo con numeri concreti.</p>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-2">Approccio sistemico e integrato</h4>
                <p className="text-gray-300">Non installiamo singole tecnologie ma progettiamo ecosistemi completi che si potenziano reciprocamente per massimizzare efficienza e competitività.</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-lg mb-2">Partnership di lungo termine</h4>
                <p className="text-gray-300">Vi accompagniamo oltre l'implementazione, con monitoraggio continuo, aggiornamenti tecnologici e supporto per nuove opportunità di crescita e finanziamento.</p>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-2">Massimizzazione delle opportunità</h4>
                <p className="text-gray-300">Combinazione strategica di bandi, incentivi e certificazioni per ridurre l'investimento fino all'80% e costruire un profilo aziendale sempre più competitivo.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Posizionamento Finale */}
        <div className="text-center space-y-8">
          <h2 className="text-3xl font-bold text-gray-900">Perché scegliere SolarixBusiness</h2>
          
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Se cercate il fornitore più economico o la soluzione più semplice, probabilmente non siamo il partner giusto per voi.
            </p>
            <p>
              Se invece volete trasformare la vostra azienda in un'eccellenza competitiva, costruire un futuro sostenibile e massimizzare ogni opportunità di crescita e finanziamento, allora abbiamo molto da offrirvi.
            </p>
          </div>
          
          <div className="bg-blue-50 rounded-xl p-8 max-w-4xl mx-auto">
            <p className="text-2xl font-bold text-blue-700 leading-relaxed">
              Non vendiamo tecnologie. Costruiamo il futuro industriale delle PMI italiane, un progetto alla volta, un successo alla volta.
            </p>
          </div>
          
          <div className="pt-8">
            <Link 
              href="/contatti" 
              className="inline-block bg-blue-600 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              Iniziamo a progettare il vostro futuro
            </Link>
          </div>
        </div>

        {/* Testimonianza Finale */}
        <div className="bg-blue-50 rounded-2xl p-12">
          <blockquote className="text-center">
            <p className="text-2xl font-light text-gray-700 italic leading-relaxed max-w-4xl mx-auto mb-6">
              "Con SolarixBusiness, ogni euro investito in innovazione si trasforma in vantaggio competitivo duraturo. Ogni certificazione ottenuta apre nuove opportunità. Ogni tecnologia implementata costruisce il futuro della vostra azienda. Non è consulenza. È partnership strategica per la crescita."
            </p>
            <footer className="text-gray-600 font-semibold">
              — Il Team SolarixBusiness
            </footer>
          </blockquote>
        </div>

      </div>
    </section>
  )
}
