import React from 'react';

export default function Parte4Strategia() {
  return (
    <div className="space-y-8">
      {/* Sezione 8 - Premialità e Cumulabilità */}
      <section id="premialita-cumulabilita" className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-purple-500 pb-4">
          8. PREMIALITÀ E CUMULABILITÀ
        </h2>

        {/* 8.1 Sistema delle Premialità */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-purple-700 mb-6 flex items-center">
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mr-3">8.1</span>
            Sistema delle Premialità
          </h3>
          
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 mb-6">
            <p className="text-purple-800 font-semibold mb-4">Le premialità sono cumulabili tra loro:</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
              <thead>
                <tr className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                  <th className="border border-purple-300 px-4 py-3 text-left font-semibold">Tipologia</th>
                  <th className="border border-purple-300 px-4 py-3 text-left font-semibold">Premialità</th>
                  <th className="border border-purple-300 px-4 py-3 text-left font-semibold">Condizioni</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-purple-50">
                  <td className="border border-purple-200 px-4 py-3 font-medium text-purple-800">Territoriale</td>
                  <td className="border border-purple-200 px-4 py-3 text-green-600 font-bold">+10%</td>
                  <td className="border border-purple-200 px-4 py-3 text-gray-700">Sede in: Abruzzo, Basilicata, Calabria, Campania, Molise, Puglia, Sardegna, Sicilia</td>
                </tr>
                <tr className="hover:bg-purple-50">
                  <td className="border border-purple-200 px-4 py-3 font-medium text-purple-800">Dimensionale</td>
                  <td className="border border-purple-200 px-4 py-3 text-green-600 font-bold">+5%</td>
                  <td className="border border-purple-200 px-4 py-3 text-gray-700">Micro, Piccole e Medie Imprese</td>
                </tr>
                <tr className="hover:bg-purple-50">
                  <td className="border border-purple-200 px-4 py-3 font-medium text-purple-800">Femminile/Giovanile</td>
                  <td className="border border-purple-200 px-4 py-3 text-green-600 font-bold">+5%</td>
                  <td className="border border-purple-200 px-4 py-3 text-gray-700">Prevalente partecipazione femminile o under 35</td>
                </tr>
                <tr className="hover:bg-purple-50">
                  <td className="border border-purple-200 px-4 py-3 font-medium text-purple-800">Energivore</td>
                  <td className="border border-purple-200 px-4 py-3 text-green-600 font-bold">+10%</td>
                  <td className="border border-purple-200 px-4 py-3 text-gray-700">Certificazioni energetiche o diagnosi</td>
                </tr>
                <tr className="hover:bg-purple-50">
                  <td className="border border-purple-200 px-4 py-3 font-medium text-purple-800">Geografica</td>
                  <td className="border border-purple-200 px-4 py-3 text-green-600 font-bold">+10%</td>
                  <td className="border border-purple-200 px-4 py-3 text-gray-700">Progetti in Africa, America Latina, India</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 8.2 Cumulabilità con Altri Incentivi */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-purple-700 mb-6 flex items-center">
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mr-3">8.2</span>
            Cumulabilità con Altri Incentivi
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Cumulabile */}
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h4 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
                <span className="text-green-500 mr-2">✅</span>
                Cumulabile con:
              </h4>
              <ul className="space-y-2 text-green-700 text-sm">
                <li>• Credito d'imposta Industria 4.0</li>
                <li>• Credito d'imposta R&S</li>
                <li>• Patent Box</li>
                <li>• Garanzie Fondo PMI</li>
                <li>• Incentivi occupazionali</li>
              </ul>
            </div>

            {/* NON Cumulabile */}
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h4 className="text-lg font-semibold text-red-800 mb-4 flex items-center">
                <span className="text-red-500 mr-2">❌</span>
                NON cumulabile con:
              </h4>
              <ul className="space-y-2 text-red-700 text-sm">
                <li>• Altri contributi a fondo perduto per stesse spese</li>
                <li>• Finanziamenti agevolati per stessi investimenti</li>
                <li>• Aiuti oltre i massimali UE</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-yellow-100 border border-yellow-300 rounded-lg p-4">
            <div className="flex items-center">
              <span className="text-yellow-600 font-bold mr-2">⚠️ ATTENZIONE:</span>
              <span className="text-yellow-800">Rispetto limite de minimis €200.000 in 3 anni</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione 9 - Controlli e Obblighi */}
      <section id="controlli-obblighi" className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-red-500 pb-4">
          9. CONTROLLI E OBBLIGHI POST-FINANZIAMENTO
        </h2>

        {/* 9.1 Obblighi dell'Impresa */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-red-700 mb-6 flex items-center">
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mr-3">9.1</span>
            Obblighi dell'Impresa
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Durante il progetto */}
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
              <h4 className="text-lg font-semibold text-orange-800 mb-4">Durante il progetto:</h4>
              <ul className="space-y-2 text-orange-700 text-sm">
                <li>• Utilizzo esclusivo conto dedicato</li>
                <li>• CUP su tutte le fatture</li>
                <li>• Comunicazione variazioni societarie &gt; 25%</li>
                <li>• Mantenimento requisiti ammissibilità</li>
              </ul>
            </div>

            {/* Post-consolidamento */}
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h4 className="text-lg font-semibold text-red-800 mb-4">Post-consolidamento (5 anni):</h4>
              <ul className="space-y-2 text-red-700 text-sm">
                <li>• Mantenimento destinazione d'uso beni</li>
                <li>• Divieto cessione senza autorizzazione</li>
                <li>• Invio bilanci annuali per 3 anni</li>
                <li>• Disponibilità per controlli</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 9.2 Cause di Revoca */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-red-700 mb-6 flex items-center">
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mr-3">9.2</span>
            Cause di Revoca
          </h3>

          <div className="bg-red-100 border border-red-300 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <span className="text-red-600 text-2xl mr-3">⚠️</span>
              <span className="text-red-800 font-bold text-lg">Revoca totale o parziale per:</span>
            </div>
            <ul className="space-y-3 text-red-700">
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">•</span>
                <span>Mancato rispetto scadenze rendicontazione</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">•</span>
                <span>Utilizzo improprio risorse</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">•</span>
                <span>Perdita requisiti ammissibilità</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">•</span>
                <span>Dichiarazioni false o mendaci</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">•</span>
                <span>Avvio procedure concorsuali</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 9.3 Conseguenze della Revoca */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-red-700 mb-6 flex items-center">
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mr-3">9.3</span>
            Conseguenze della Revoca
          </h3>

          <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-lg p-6">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-red-200 mr-2 mt-1">•</span>
                <span>Restituzione integrale somme erogate</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-200 mr-2 mt-1">•</span>
                <span>Interessi legali e di mora</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-200 mr-2 mt-1">•</span>
                <span>Esclusione da futuri finanziamenti SIMEST</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-200 mr-2 mt-1">•</span>
                <span>Segnalazione autorità competenti</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sezione 10 - Strategie per Massimizzare i Benefici */}
      <section id="strategie-benefici" className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-green-500 pb-4">
          10. STRATEGIE PER MASSIMIZZARE I BENEFICI
        </h2>

        {/* 10.1 Per Imprese Energivore */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-green-700 mb-6 flex items-center">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-3">10.1</span>
            Per Imprese Energivore
          </h3>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
            <h4 className="text-lg font-semibold text-green-800 mb-4">Piano d'azione ottimale:</h4>
            <ul className="space-y-2 text-green-700 mb-6">
              <li>• Ottenere diagnosi energetica o certificazioni ISO</li>
              <li>• Verificare consumo annuo &gt; 1 GWh</li>
              <li>• Strutturare progetto con 50% investimenti green</li>
              <li>• Combinare con credito d'imposta Industria 4.0</li>
              <li>• Sfruttare esenzione garanzie</li>
            </ul>
            <div className="bg-green-100 border border-green-300 rounded-lg p-4">
              <p className="text-green-800 font-bold">Risultato: Fino a 20% fondo perduto + finanziamento 0,371%</p>
            </div>
          </div>
        </div>

        {/* 10.2 Per PMI in Filiera */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-green-700 mb-6 flex items-center">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-3">10.2</span>
            Per PMI in Filiera
          </h3>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 border border-blue-200">
            <h4 className="text-lg font-semibold text-blue-800 mb-4">Piano d'azione ottimale:</h4>
            <ul className="space-y-2 text-blue-700 mb-6">
              <li>• Mappare clienti esportatori (&gt; 20% export)</li>
              <li>• Formalizzare contratti di fornitura</li>
              <li>• Raccogliere dichiarazioni IVA clienti</li>
              <li>• Strutturare progetto digitalizzazione</li>
              <li>• Verificare premialità applicabili</li>
            </ul>
            <div className="bg-blue-100 border border-blue-300 rounded-lg p-4">
              <p className="text-blue-800 font-bold">Risultato: Accesso al finanziamento anche senza export diretto</p>
            </div>
          </div>
        </div>

        {/* 10.3 Combinazioni Vincenti */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-green-700 mb-6 flex items-center">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-3">10.3</span>
            Combinazioni Vincenti
          </h3>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* COMBO 1 */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
              <h4 className="text-lg font-bold text-orange-800 mb-4">COMBO 1: Energivora + Mezzogiorno</h4>
              <ul className="space-y-2 text-orange-700 text-sm mb-4">
                <li>• Fondo perduto 20% (energivora)</li>
                <li>• +10% premialità territoriale</li>
                <li>• Esenzione garanzie</li>
              </ul>
              <div className="bg-orange-100 rounded p-3">
                <p className="text-orange-800 font-bold text-sm">Totale: Fino a 30% contributi</p>
              </div>
            </div>

            {/* COMBO 2 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
              <h4 className="text-lg font-bold text-blue-800 mb-4">COMBO 2: PMI + Industria 4.0</h4>
              <ul className="space-y-2 text-blue-700 text-sm mb-4">
                <li>• Finanziamento SIMEST per macchinari</li>
                <li>• Credito d'imposta 40% Industria 4.0</li>
                <li>• Fondo perduto 10-15%</li>
              </ul>
              <div className="bg-blue-100 rounded p-3">
                <p className="text-blue-800 font-bold text-sm">Risparmio totale: Fino a 55% investimento</p>
              </div>
            </div>

            {/* COMBO 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
              <h4 className="text-lg font-bold text-purple-800 mb-4">COMBO 3: Export + Africa/America Latina</h4>
              <ul className="space-y-2 text-purple-700 text-sm mb-4">
                <li>• Fondo perduto 20% (se Mezzogiorno)</li>
                <li>• Esenzione garanzie</li>
                <li>• Spese formazione ammissibili</li>
              </ul>
              <div className="bg-purple-100 rounded p-3">
                <p className="text-purple-800 font-bold text-sm">Vantaggio: Massima flessibilità operativa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione 11 - FAQ Operative */}
      <section id="faq-operative" className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-blue-500 pb-4">
          11. FAQ OPERATIVE
        </h2>

        <div className="space-y-6">
          {/* FAQ 1 */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h4 className="text-lg font-semibold text-blue-800 mb-3">
              D: Posso presentare domanda se ho export al 3% ma non sono energivora?
            </h4>
            <p className="text-blue-700">
              R: Sì, se fai parte di una filiera con almeno 3 clienti che esportano &gt; 20% del loro fatturato. Devi dimostrarlo con contratti di fornitura di almeno 12 mesi.
            </p>
          </div>

          {/* FAQ 2 */}
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
            <h4 className="text-lg font-semibold text-green-800 mb-3">
              D: Il CUP va messo anche su fatture di fornitori esteri?
            </h4>
            <p className="text-green-700">
              R: Sì, il CUP è obbligatorio su TUTTE le fatture relative a spese ammissibili, indipendentemente dalla provenienza del fornitore.
            </p>
          </div>

          {/* FAQ 3 */}
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
            <h4 className="text-lg font-semibold text-purple-800 mb-3">
              D: Posso modificare il progetto dopo l'approvazione?
            </h4>
            <p className="text-purple-700">
              R: Modifiche minori sono accettate in rendicontazione se coerenti con obiettivi. Modifiche sostanziali richiedono autorizzazione preventiva SIMEST.
            </p>
          </div>

          {/* FAQ 4 */}
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
            <h4 className="text-lg font-semibold text-orange-800 mb-3">
              D: Quanto tempo ho per utilizzare il finanziamento?
            </h4>
            <p className="text-orange-700">
              R: 24 mesi dalla stipula (estendibili a 30 con proroga). Tutte le spese devono essere sostenute e pagate in questo periodo.
            </p>
          </div>

          {/* FAQ 5 */}
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
            <h4 className="text-lg font-semibold text-red-800 mb-3">
              D: Se sono energivora ma non ho certificazioni, posso accedere al 20%?
            </h4>
            <p className="text-red-700">
              R: Sì, è sufficiente avere una diagnosi energetica in corso di validità. Puoi anche richiederla dopo la domanda ma prima dell'erogazione.
            </p>
          </div>
        </div>
      </section>

      {/* Sezione 12 - Checklist Pre-Domanda */}
      <section id="checklist-predomanda" className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-indigo-500 pb-4">
          12. CHECKLIST PRE-DOMANDA
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Colonna 1 */}
          <div className="space-y-6">
            {/* Requisiti Base */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
                <span className="text-green-500 mr-2">✅</span>
                Verifica Requisiti Base
              </h4>
              <ul className="space-y-2 text-green-700 text-sm">
                <li>• Sede legale in Italia</li>
                <li>• 2 bilanci depositati</li>
                <li>• Patrimonio netto positivo</li>
                <li>• DURC regolare</li>
                <li>• No procedure concorsuali</li>
              </ul>
            </div>

            {/* Requisiti Specifici */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
                <span className="text-blue-500 mr-2">✅</span>
                Verifica Requisiti Specifici
              </h4>
              <ul className="space-y-2 text-blue-700 text-sm">
                <li>• Export &ge; 10% OPPURE</li>
                <li>• Export &ge; 3% + filiera OPPURE</li>
                <li>• Energivora con export &ge; 3%</li>
              </ul>
            </div>

            {/* Documentazione */}
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-purple-800 mb-4 flex items-center">
                <span className="text-purple-500 mr-2">✅</span>
                Documentazione Pronta
              </h4>
              <ul className="space-y-2 text-purple-700 text-sm">
                <li>• Visura camerale &lt; 30 giorni</li>
                <li>• Bilanci ultimi 2 anni</li>
                <li>• Business plan progetto</li>
                <li>• Preventivi dettagliati</li>
                <li>• Dichiarazione De Minimis</li>
              </ul>
            </div>
          </div>

          {/* Colonna 2 */}
          <div className="space-y-6">
            {/* Per Energivore */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-orange-800 mb-4 flex items-center">
                <span className="text-orange-500 mr-2">✅</span>
                Per Energivore (aggiuntiva)
              </h4>
              <ul className="space-y-2 text-orange-700 text-sm">
                <li>• Diagnosi energetica O</li>
                <li>• Certificazioni ISO energia</li>
                <li>• Bollette ultimo anno</li>
                <li>• Piano efficientamento</li>
              </ul>
            </div>

            {/* Per Filiera */}
            <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-teal-800 mb-4 flex items-center">
                <span className="text-teal-500 mr-2">✅</span>
                Per Filiera (aggiuntiva)
              </h4>
              <ul className="space-y-2 text-teal-700 text-sm">
                <li>• Contratti fornitura (min. 2)</li>
                <li>• Dichiarazioni IVA clienti</li>
                <li>• Partitario clienti</li>
                <li>• Dichiarazione intento</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione 13: Analisi Strategica */}
      <section id="sezione-13" className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-purple-500 pb-4">
          13. ANALISI STRATEGICA: COSTRUIRE UN PROGETTO VINCENTE
        </h2>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8 mb-8">
          <p className="text-lg text-gray-800 mb-6 leading-relaxed">
            Molte imprese si concentrano sul "cosa" finanziare. Le pratiche di successo si distinguono perché costruiscono una narrativa strategica del "perché". SIMEST non finanzia una lista di spese, ma una visione di crescita.
          </p>
        </div>

        {/* 13.1 Dalla Spesa alla Strategia */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-purple-900 mb-6">
            13.1 Dalla Spesa alla Strategia: La Narrativa del Progetto
          </h3>
          
          <p className="text-gray-800 mb-6">
            Il vostro business plan deve raccontare una storia coerente. Non state chiedendo fondi per:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
              <h4 className="font-bold text-red-700 mb-3">❌ APPROCCIO SBAGLIATO</h4>
              <p className="text-red-800 italic">
                "Comprare pannelli fotovoltaici e un software"
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
              <h4 className="font-bold text-green-700 mb-3">✅ APPROCCIO VINCENTE</h4>
              <p className="text-green-800">
                "Realizzare un investimento integrato in efficienza e digitalizzazione per ridurre i costi energetici del 25% (diventando più competitivi), ottenere la certificazione ISO 50001 (per accedere a clienti "green" in Nord Europa) e ottimizzare la produzione (grazie al software di monitoraggio), aumentando la nostra capacità di export."
              </p>
            </div>
          </div>
        </div>

        {/* 13.2 KPI */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-purple-900 mb-6">
            13.2 L'Importanza dei KPI: Misurare il Successo
          </h3>
          
          <p className="text-gray-800 mb-6">
            Includete nel progetto indicatori di performance (KPI) chiari e misurabili. Questo dimostra professionalità e visione.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border border-green-200">
              <h4 className="text-xl font-bold text-green-800 mb-4">KPI ECOLOGICI</h4>
              <ul className="space-y-2 text-sm text-green-700">
                <li>• Riduzione consumo energetico (kWh/pezzo prodotto)</li>
                <li>• % di energia autoprodotta</li>
                <li>• Riduzione emissioni CO2 (t/anno)</li>
                <li>• Ottenimento certificazioni (ISO 14001/50001)</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
              <h4 className="text-xl font-bold text-blue-800 mb-4">KPI DIGITALI</h4>
              <ul className="space-y-2 text-sm text-blue-700">
                <li>• Aumento % fatturato da canali e-commerce</li>
                <li>• Riduzione tempo ciclo produttivo</li>
                <li>• Aumento OEE (Overall Equipment Effectiveness)</li>
                <li>• Riduzione errori/scarti di produzione</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 border border-orange-200">
              <h4 className="text-xl font-bold text-orange-800 mb-4">KPI DI BUSINESS</h4>
              <ul className="space-y-2 text-sm text-orange-700">
                <li>• Aumento % fatturato export</li>
                <li>• Acquisizione di N nuovi clienti esteri</li>
                <li>• Ingresso in N nuovi mercati</li>
                <li>• Aumento del margine operativo lordo (MOL)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione 14: Gestione del Rischio */}
      <section id="sezione-14" className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-red-500 pb-4">
          14. GESTIONE DEL RISCHIO: LA VITA DOPO LA DELIBERA
        </h2>

        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-8 mb-8">
          <p className="text-lg text-gray-800 leading-relaxed">
            Ottenere il finanziamento è solo l'inizio. La fase di gestione e rendicontazione è dove si nascondono i rischi maggiori. Un errore qui può portare alla revoca.
          </p>
        </div>

        {/* 14.1 I 5 Errori Mortali */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-red-900 mb-6">
            14.1 I 5 Errori Mortali della Rendicontazione (e Come Evitarli)
          </h3>

          <div className="space-y-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h4 className="text-xl font-bold text-red-800 mb-4">1. IL BONIFICO "MUTILO"</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-red-700 mb-2">ERRORE ❌:</p>
                  <p className="text-red-600 font-mono text-sm bg-red-100 p-2 rounded">
                    Causale "Saldo fattura 123"
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-green-700 mb-2">SOLUZIONE ✅:</p>
                  <p className="text-green-600 font-mono text-sm bg-green-100 p-2 rounded">
                    "Saldo ft. 123 del GG/MM/AA fornitore XYZ per acquisto [bene finanziato]. CUP: [NumeroCUP]"
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h4 className="text-xl font-bold text-red-800 mb-4">2. LA FATTURA "ORFANA" (SENZA CUP)</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-red-700 mb-2">ERRORE ❌:</p>
                  <p className="text-red-600">Dimenticarsi di comunicare il CUP al fornitore.</p>
                </div>
                <div>
                  <p className="font-semibold text-green-700 mb-2">SOLUZIONE ✅:</p>
                  <p className="text-green-600">Il CUP va comunicato prima dell'emissione della fattura. Una fattura senza CUP non è sanabile ed è inammissibile.</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h4 className="text-xl font-bold text-red-800 mb-4">3. IL PAGAMENTO DAL CONTO SBAGLIATO</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-red-700 mb-2">ERRORE ❌:</p>
                  <p className="text-red-600">Pagare una fattura dal conto corrente ordinario.</p>
                </div>
                <div>
                  <p className="font-semibold text-green-700 mb-2">SOLUZIONE ✅:</p>
                  <p className="text-green-600">Tutti i pagamenti devono partire dal conto dedicato. Se per errore si usa il conto ordinario, bisogna immediatamente fare un giroconto dal conto dedicato a quello ordinario per lo stesso importo, indicando nella causale del giroconto il riferimento alla fattura e il CUP.</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h4 className="text-xl font-bold text-red-800 mb-4">4. LA SPESA "FUORI TEMPO"</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-red-700 mb-2">ERRORE ❌:</p>
                  <p className="text-red-600">Pagare una fattura prima della ricezione del CUP o dopo la fine del Periodo di Realizzazione.</p>
                </div>
                <div>
                  <p className="font-semibold text-green-700 mb-2">SOLUZIONE ✅:</p>
                  <p className="text-green-600">Mantenere un cronoprogramma (Gantt) preciso di spese e pagamenti, allineato alle scadenze SIMEST.</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h4 className="text-xl font-bold text-red-800 mb-4">5. LA CONSULENZA "INFORMALE"</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-red-700 mb-2">ERRORE ❌:</p>
                  <p className="text-red-600">Affidarsi a un consulente con un accordo verbale o un preventivo via email.</p>
                </div>
                <div>
                  <p className="font-semibold text-green-700 mb-2">SOLUZIONE ✅:</p>
                  <p className="text-green-600">Qualsiasi consulenza (tecnica, di gestione, ecc.) deve essere supportata da un contratto di consulenza firmato, che ne definisca oggetto, durata e corrispettivo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 14.2 Checklist Audit Interno */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-red-900 mb-6">
            14.2 Checklist di Audit Interno Post-Finanziamento
          </h3>
          
          <p className="text-gray-800 mb-6">
            Una volta l'anno, dopo il consolidamento, fate un check interno per verificare il rispetto degli obblighi.
          </p>

          <div className="bg-gray-50 rounded-lg p-6">
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-blue-600 mr-3">□</span>
                <span className="text-gray-800">I beni finanziati sono ancora in azienda e utilizzati per lo scopo previsto?</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-3">□</span>
                <span className="text-gray-800">Non sono state fatte cessioni o vendite di beni senza autorizzazione SIMEST?</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-3">□</span>
                <span className="text-gray-800">L'assetto societario non ha subito variazioni rilevanti (&gt;25%) non comunicate?</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-3">□</span>
                <span className="text-gray-800">Abbiamo inviato i bilanci annuali a SIMEST come richiesto?</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-3">□</span>
                <span className="text-gray-800">Siamo pronti a un eventuale controllo in loco?</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione 15: Appendici Operative */}
      <section id="sezione-15" className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-indigo-500 pb-4">
          15. APPENDICI OPERATIVE
        </h2>

        {/* Appendice A: Simulatore */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-indigo-900 mb-6">
            APPENDICE A: SIMULATORE DI AMMISSIBILITÀ (CHECKLIST INTERATTIVA)
          </h3>
          
          <p className="text-gray-800 mb-6">
            Usa questa checklist per una prima autovalutazione rapida.
          </p>

          <div className="space-y-6">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h4 className="text-xl font-bold text-blue-800 mb-4">SEZIONE 1: REQUISITI BASE</h4>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-blue-300">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="border border-blue-300 p-3 text-left">Requisito</th>
                      <th className="border border-blue-300 p-3 text-left">La mia impresa...</th>
                      <th className="border border-blue-300 p-3 text-center">Verifica</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-blue-300 p-3">Ha sede legale in Italia?</td>
                      <td className="border border-blue-300 p-3">-</td>
                      <td className="border border-blue-300 p-3 text-center">□ Sì / □ No</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-300 p-3">Ha almeno 2 bilanci depositati?</td>
                      <td className="border border-blue-300 p-3">-</td>
                      <td className="border border-blue-300 p-3 text-center">□ Sì / □ No</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-300 p-3">Ha un patrimonio netto positivo?</td>
                      <td className="border border-blue-300 p-3">-</td>
                      <td className="border border-blue-300 p-3 text-center">□ Sì / □ No</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-300 p-3">Ha un DURC regolare?</td>
                      <td className="border border-blue-300 p-3">-</td>
                      <td className="border border-blue-300 p-3 text-center">□ Sì / □ No</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-4 p-3 bg-red-100 border border-red-300 rounded">
                <p className="text-red-800 font-semibold">
                  Se hai risposto "No" a una di queste, non sei ammissibile.
                </p>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <h4 className="text-xl font-bold text-green-800 mb-4">SEZIONE 2: VOCAZIONE INTERNAZIONALE (scegli un percorso)</h4>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-green-300">
                  <thead>
                    <tr className="bg-green-100">
                      <th className="border border-green-300 p-3 text-left">Percorso</th>
                      <th className="border border-green-300 p-3 text-left">Verifica</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-green-300 p-3 font-semibold">A) EXPORT DIRETTO</td>
                      <td className="border border-green-300 p-3">Il mio fatturato export 2024 è &gt; 10%?</td>
                    </tr>
                    <tr>
                      <td className="border border-green-300 p-3 font-semibold">B) FILIERA PRODUTTIVA</td>
                      <td className="border border-green-300 p-3">Sono una PMI produttiva con export &gt; 3% E ho clienti che esportano?</td>
                    </tr>
                    <tr>
                      <td className="border border-green-300 p-3 font-semibold">C) ENERGIVORA</td>
                      <td className="border border-green-300 p-3">Sono in elenco CSEA (o ho certificazioni/diagnosi) E il mio export è &gt; 3%?</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-4 p-3 bg-orange-100 border border-orange-300 rounded">
                <p className="text-orange-800 font-semibold">
                  Devi rientrare in almeno uno di questi percorsi.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Appendice B: Template Business Plan */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-indigo-900 mb-6">
            APPENDICE B: ONE-PAGE BUSINESS PLAN PER SIMEST (TEMPLATE)
          </h3>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-300">
            <div className="space-y-6">
              <div className="bg-white rounded p-4 border border-gray-200">
                <h4 className="font-bold text-gray-800 mb-2">1. CHI SIAMO E LA NOSTRA VISIONE INTERNAZIONALE</h4>
                <p className="text-sm text-gray-600 italic">
                  (Breve descrizione dell'azienda, dei prodotti/servizi e dei mercati esteri già serviti o target).
                </p>
              </div>

              <div className="bg-white rounded p-4 border border-gray-200">
                <h4 className="font-bold text-gray-800 mb-2">2. LA SFIDA STRATEGICA</h4>
                <p className="text-sm text-gray-600 italic">
                  (Descrivere il problema/opportunità: es. "Costi energetici elevati riducono la nostra competitività" oppure "La domanda di prodotti sostenibili nel mercato tedesco è in crescita").
                </p>
              </div>

              <div className="bg-white rounded p-4 border border-gray-200">
                <h4 className="font-bold text-gray-800 mb-2">3. IL PROGETTO: LA NOSTRA SOLUZIONE</h4>
                <p className="text-sm text-gray-600 italic mb-2">
                  (Elenco puntato degli investimenti previsti, spiegando come rispondono alla sfida).
                </p>
                <div className="font-mono text-sm text-gray-700 space-y-1">
                  <p>Investimento 1: [Descrizione] → Risultato atteso: [KPI]</p>
                  <p>Investimento 2: [Descrizione] → Risultato atteso: [KPI]</p>
                </div>
              </div>

              <div className="bg-white rounded p-4 border border-gray-200">
                <h4 className="font-bold text-gray-800 mb-2">4. OBIETTIVI E RISULTATI ATTESI (KPI)</h4>
                <p className="text-sm text-gray-600 italic">
                  (Quantificare i risultati: es. "Riduzione costi energetici del 20% in 24 mesi; Aumento export in Germania del 15% entro il 2027; Ottenimento certificazione ISO 50001").
                </p>
              </div>

              <div className="bg-white rounded p-4 border border-gray-200">
                <h4 className="font-bold text-gray-800 mb-4">5. PIANO FINANZIARIO E USO DEI FONDI</h4>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2 text-left">Voce di Spesa</th>
                        <th className="border border-gray-300 p-2 text-right">Importo (€)</th>
                        <th className="border border-gray-300 p-2 text-left">Fornitore (se noto)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2">Macchinario X</td>
                        <td className="border border-gray-300 p-2 text-right">150.000</td>
                        <td className="border border-gray-300 p-2">Fornitore A</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">Software Y</td>
                        <td className="border border-gray-300 p-2 text-right">50.000</td>
                        <td className="border border-gray-300 p-2">Fornitore B</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">Consulenza Z</td>
                        <td className="border border-gray-300 p-2 text-right">10.000</td>
                        <td className="border border-gray-300 p-2">Fornitore C</td>
                      </tr>
                      <tr className="bg-gray-100 font-semibold">
                        <td className="border border-gray-300 p-2">TOTALE PROGETTO</td>
                        <td className="border border-gray-300 p-2 text-right">210.000</td>
                        <td className="border border-gray-300 p-2">-</td>
                      </tr>
                      <tr className="bg-blue-100 font-bold">
                        <td className="border border-gray-300 p-2">IMPORTO RICHIESTO A SIMEST</td>
                        <td className="border border-gray-300 p-2 text-right">210.000</td>
                        <td className="border border-gray-300 p-2">-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
