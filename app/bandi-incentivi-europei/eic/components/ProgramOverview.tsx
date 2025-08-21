export default function ProgramOverview() {
  return (
    <>
      {/* Panoramica Programmi */}
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
        <h2 className="text-3xl font-bold text-purple-800 mb-6">I 4 Programmi EIC: Il Vostro Percorso di Crescita</h2>
        
        <div className="bg-purple-50 p-6 rounded-xl mb-6">
          <h3 className="text-2xl font-bold text-purple-800 mb-4">Panoramica Completa dei Programmi</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-purple-300">
              <thead>
                <tr className="bg-purple-600 text-white">
                  <th className="border border-purple-300 p-3 text-left">Programma</th>
                  <th className="border border-purple-300 p-3 text-left">Fase Innovazione</th>
                  <th className="border border-purple-300 p-3 text-left">Livello Tecnologico</th>
                  <th className="border border-purple-300 p-3 text-left">Budget 2025</th>
                  <th className="border border-purple-300 p-3 text-left">Chi Può Partecipare</th>
                  <th className="border border-purple-300 p-3 text-left">Finanziamento</th>
                  <th className="border border-purple-300 p-3 text-left">Durata</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-purple-300 p-3 font-bold text-purple-700">EIC Pathfinder</td>
                  <td className="border border-purple-300 p-3">Ricerca scientifica rivoluzionaria</td>
                  <td className="border border-purple-300 p-3">Idea iniziale (1-4)</td>
                  <td className="border border-purple-300 p-3 font-bold">262 milioni €</td>
                  <td className="border border-purple-300 p-3">Università, centri ricerca</td>
                  <td className="border border-purple-300 p-3 text-green-600 font-bold">Contributi fino a 4 milioni € a fondo perduto</td>
                  <td className="border border-purple-300 p-3">3-4 anni</td>
                </tr>
                <tr className="bg-purple-50">
                  <td className="border border-purple-300 p-3 font-bold text-purple-700">EIC Transition</td>
                  <td className="border border-purple-300 p-3">Ponte ricerca-business</td>
                  <td className="border border-purple-300 p-3">Sviluppo iniziale (4-6)</td>
                  <td className="border border-purple-300 p-3 font-bold">98 milioni €</td>
                  <td className="border border-purple-300 p-3">Team ricercatori-imprenditori</td>
                  <td className="border border-purple-300 p-3 text-green-600 font-bold">Contributi fino a 2,5 milioni € a fondo perduto</td>
                  <td className="border border-purple-300 p-3">2-3 anni</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-purple-300 p-3 font-bold text-purple-700">EIC Accelerator</td>
                  <td className="border border-purple-300 p-3">Commercializzazione</td>
                  <td className="border border-purple-300 p-3">Prototipo commerciale (6-8)</td>
                  <td className="border border-purple-300 p-3 font-bold">634 milioni €</td>
                  <td className="border border-purple-300 p-3">PMI innovative, startup</td>
                  <td className="border border-purple-300 p-3 text-green-600 font-bold">2,5 milioni € a fondo perduto + 15 milioni € investimenti</td>
                  <td className="border border-purple-300 p-3">1-2 anni</td>
                </tr>
                <tr className="bg-purple-50">
                  <td className="border border-purple-300 p-3 font-bold text-purple-700">STEP Scale-up</td>
                  <td className="border border-purple-300 p-3">Leadership mercato</td>
                  <td className="border border-purple-300 p-3">Prodotto validato (8-9)</td>
                  <td className="border border-purple-300 p-3 font-bold">300 milioni €</td>
                  <td className="border border-purple-300 p-3">Aziende in crescita rapida</td>
                  <td className="border border-purple-300 p-3 text-green-600 font-bold">Investimenti da 10 a 30 milioni €</td>
                  <td className="border border-purple-300 p-3">3-5 anni</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="bg-green-50 p-6 rounded-xl">
          <h4 className="text-xl font-bold text-green-800 mb-3">Logica Strategica dell'Ecosistema</h4>
          <p className="text-gray-700 leading-relaxed">
            Ogni programma è progettato specificamente per preparare e alimentare il successivo, creando un percorso continuo e strutturato 
            che porta la vostra innovazione dall'idea rivoluzionaria iniziale fino al successo commerciale globale. 
            Questo approccio elimina il tradizionale "salto nel vuoto" che spesso caratterizza il passaggio dalla ricerca al mercato.
          </p>
        </div>
      </div>

      {/* Struttura Grant + Equity */}
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
        <h2 className="text-3xl font-bold text-purple-800 mb-6">Struttura Innovativa Grant + Equity</h2>
        
        <div className="bg-yellow-50 p-6 rounded-xl mb-6">
          <h3 className="text-2xl font-bold text-yellow-800 mb-4">Caratteristica unica dell'EIC</h3>
          <p className="text-lg text-gray-700 mb-4">
            Il finanziamento combina contributi a fondo perduto con investimenti diretti dell'UE nella vostra azienda, 
            creando un pacchetto finanziario unico nel panorama europeo.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-yellow-400">
              <thead>
                <tr className="bg-yellow-600 text-white">
                  <th className="border border-yellow-400 p-3 text-left">Componente</th>
                  <th className="border border-yellow-400 p-3 text-left">Importo</th>
                  <th className="border border-yellow-400 p-3 text-left">Natura</th>
                  <th className="border border-yellow-400 p-3 text-left">Caratteristiche</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-yellow-400 p-3 font-bold text-yellow-700">Grant (Contributo)</td>
                  <td className="border border-yellow-400 p-3 font-bold text-green-600">Fino a 2,5 milioni € a fondo perduto</td>
                  <td className="border border-yellow-400 p-3">Zero da restituire</td>
                  <td className="border border-yellow-400 p-3">Copre sviluppo tecnologico, validazione, team</td>
                </tr>
                <tr className="bg-yellow-50">
                  <td className="border border-yellow-400 p-3 font-bold text-yellow-700">Equity (Investimento)</td>
                  <td className="border border-yellow-400 p-3 font-bold text-blue-600">Fino a 15 milioni € investimenti</td>
                  <td className="border border-yellow-400 p-3">Partnership azionaria</td>
                  <td className="border border-yellow-400 p-3">L'UE diventa socio di minoranza (5-20%)</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-yellow-400 p-3 font-bold text-yellow-700">Vostro Co-finanziamento</td>
                  <td className="border border-yellow-400 p-3 font-bold">Minimo 30%</td>
                  <td className="border border-yellow-400 p-3">Vostro impegno</td>
                  <td className="border border-yellow-400 p-3">Dimostra commitment e condivisione rischi</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="bg-green-50 p-6 rounded-xl">
          <h4 className="text-xl font-bold text-green-800 mb-3">Vantaggio "Rischio Zero"</h4>
          <p className="text-gray-700 leading-relaxed">
            I contributi a fondo perduto <strong>non devono mai essere restituiti</strong>, indipendentemente da successo o fallimento del progetto. 
            Elimina completamente il rischio finanziario tipico dei prestiti e permette concentrazione totale su innovazione.
          </p>
        </div>
      </div>
    </>
  );
}
