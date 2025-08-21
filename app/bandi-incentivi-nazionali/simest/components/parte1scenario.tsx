import React from 'react';

export default function Parte1Scenario() {
  return (
    <div className="space-y-8">
      {/* Executive Summary */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6">EXECUTIVE SUMMARY: LE NOVITÀ CRUCIALI DEL 2025</h2>
        <div className="prose max-w-none text-white leading-relaxed">
          <p className="mb-4">
            Il Fondo 394/81 si rinnova nel 2025 con importanti novità che ampliano significativamente le opportunità per le imprese italiane:
          </p>
          
          <h3 className="text-xl font-semibold text-yellow-300 mb-4 mt-6">Le 3 Novità Principali</h3>
          
          <div className="grid md:grid-cols-1 gap-4">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
              <h4 className="font-semibold text-yellow-300 mb-2">Fondo Perduto al 20% per Imprese Energivore:</h4>
              <p className="text-sm">Le aziende energivore o con percorsi certificati di efficientamento energetico possono ora accedere a una quota di fondo perduto raddoppiata (dal 10% al 20%, fino a €200.000)</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
              <h4 className="font-semibold text-yellow-300 mb-2">Apertura alle Filiere Produttive:</h4>
              <p className="text-sm">Dal 7 agosto 2025, anche le imprese non direttamente esportatrici ma appartenenti a filiere produttive possono accedere ai finanziamenti</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
              <h4 className="font-semibold text-yellow-300 mb-2">Esenzione Garanzie:</h4>
              <p className="text-sm">Per imprese energivore e progetti in aree strategiche (Africa, America Latina, India), prevista l'esenzione dalla prestazione di garanzie</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sezione 1: Introduzione al Quadro Normativo */}
      <div id="sezione-1" className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">1. INTRODUZIONE AL QUADRO NORMATIVO</h2>
        
        <div className="prose max-w-none text-gray-600 leading-relaxed space-y-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-3">1.1 Base Normativa e Riferimenti Legislativi</h3>
          <p>
            Il Fondo 394/81 rappresenta lo strumento strategico principale per l'internazionalizzazione delle imprese italiane, disciplinato da:
          </p>
          
          <h4 className="text-lg font-semibold text-blue-700 mb-3 mt-6">Normativa Principale</h4>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>Decreto del 1° giugno 2023:</strong> Disciplina principale del Fondo 394/81</li>
            <li><strong>Circolare 4/394/2023-DE-28.02.2025:</strong> Documento operativo per Transizione Digitale ed Ecologica (ultima versione aggiornata)</li>
            <li><strong>Legge 30 dicembre 2024, n. 207:</strong> Introduce l'esenzione dalle garanzie per imprese energivore</li>
          </ul>
          
          <h4 className="text-lg font-semibold text-blue-700 mb-3 mt-6">Normativa Europea di Riferimento</h4>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>Regolamento UE n. 2831/2023:</strong> Nuova normativa "de minimis" (sostituisce il Reg. 1407/2013)</li>
            <li><strong>Regolamento UE n. 651/2014:</strong> GBER (General Block Exemption Regulation)</li>
            <li><strong>Regolamento UE 2021/523:</strong> InvestEU con esclusioni specifiche (Allegato V - Lettera B)</li>
          </ul>
          
          <h4 className="text-lg font-semibold text-blue-700 mb-3 mt-6">Operatività PNRR</h4>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Circolari specifiche per Transizione Digitale ed Ecologica</li>
            <li>Principio DNSH (Do No Significant Harm) obbligatorio</li>
            <li>Divieto assoluto di doppio finanziamento</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-700 mb-3 mt-8">1.2 Quadro degli Aiuti di Stato</h3>
          <p>Gli interventi sono concessi nel rispetto di:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Limiti della normativa europea sugli aiuti "de minimis" (€200.000 in tre esercizi finanziari)</li>
            <li>Conformità con la normativa europea sugli aiuti di Stato</li>
            <li>Principio di assenza del "doppio finanziamento" per risorse PNRR</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-700 mb-3 mt-8">1.3 Gestione del Fondo</h3>
          <p>SIMEST opera come gestore del Fondo 394/81 con:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Patrimonio autonomo e distinto</li>
            <li>Contabilità separata con rendiconto annuale</li>
            <li>Supervisione del Comitato Agevolazioni</li>
            <li>Risorse derivanti da versamenti, entrate e stanziamenti normativi</li>
          </ul>
        </div>
      </div>

      {/* Sezione 2: Schema Operativo */}
      <div id="sezione-2" className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">2. SCHEMA OPERATIVO: COME FUNZIONA IL BANDO</h2>
        
        <div className="prose max-w-none text-gray-600 leading-relaxed space-y-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-3">2.1 Schema delle Percentuali di Fondo Perduto</h3>
          
          <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-6 font-mono text-sm">
            <div className="text-center font-bold text-lg mb-4 text-gray-800">STRUTTURA DEL FINANZIAMENTO SIMEST</div>
            <div className="border-b border-gray-400 mb-4"></div>
            
            <div className="mb-6">
              <div className="font-semibold text-blue-700 mb-2">FINANZIAMENTO AGEVOLATO (Tasso 0,371% - 6 anni)</div>
              <div className="ml-4 space-y-1">
                <div>├─ Fino a €500.000 (Micro Imprese)</div>
                <div>├─ Fino a €2.500.000 (PMI)</div>
                <div>└─ Fino a €5.000.000 (Grandi Imprese)</div>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="font-semibold text-green-700 mb-2">+ FONDO PERDUTO (in base ai requisiti):</div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-blue-100 border border-blue-300 rounded p-3">
                <div className="font-semibold text-blue-800">IMPRESE STANDARD</div>
                <div>• 10% (max €100.000)</div>
              </div>
              
              <div className="bg-green-100 border border-green-300 rounded p-3">
                <div className="font-semibold text-green-800">IMPRESE ENERGIVORE O CON EFFICIENTAMENTO</div>
                <div>• 20% (max €200.000) <span className="bg-yellow-200 px-2 py-1 rounded text-xs font-bold">NOVITÀ</span></div>
                <div className="text-sm mt-2">Requisiti:</div>
                <div className="text-sm ml-2">- Certificazioni ISO 50001, ISO 14064, ISO 14068</div>
                <div className="text-sm ml-2">- Diagnosi energetica in corso</div>
                <div className="text-sm ml-2">- Fatturato export minimo 3%</div>
              </div>
              
              <div className="bg-purple-100 border border-purple-300 rounded p-3">
                <div className="font-semibold text-purple-800">IMPRESE DEL MEZZOGIORNO</div>
                <div>• 20% (max €200.000)</div>
                <div className="text-sm">Per progetti in aree strategiche</div>
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-700 mb-3 mt-8">2.2 Schema dei Requisiti di Accesso</h3>
          
          <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-6 font-mono text-sm">
            <div className="text-center font-bold text-lg mb-4 text-gray-800">REQUISITI DI ACCESSO</div>
            <div className="border-b border-gray-400 mb-4"></div>
            
            <div className="space-y-6">
              <div>
                <div className="font-semibold text-blue-700 mb-2">PERCORSO A: IMPRESE ESPORTATRICI DIRETTE</div>
                <div className="ml-4">└─► Fatturato export ≥ 10% dell'ultimo bilancio</div>
              </div>
              
              <div>
                <div className="font-semibold text-green-700 mb-2">PERCORSO B: PMI IN FILIERA</div>
                <div className="ml-4 space-y-1">
                  <div>├─► Codice ATECO produttivo</div>
                  <div>├─► Fatturato export ≥ 3% dell'ultimo bilancio</div>
                  <div>└─► Parte di filiera con almeno 3 imprese clienti che:</div>
                  <div>└─► Esportano &gt; 20% del proprio fatturato</div>
                </div>
              </div>
              
              <div>
                <div className="font-semibold text-purple-700 mb-2">PERCORSO C: IMPRESE ENERGIVORE</div>
                <div className="ml-4 space-y-1">
                  <div>├─► Consumo annuo ≥ 1 GWh</div>
                  <div>├─► Intensità elettrica ≥ 20%</div>
                  <div>├─► Fatturato export ≥ 3%</div>
                  <div>└─► Certificazioni energetiche o diagnosi in corso</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sezione 3: Novità 2025 */}
      <div id="sezione-3" className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">3. NOVITÀ 2025: FOCUS IMPRESE ENERGIVORE E FILIERE</h2>
        
        <div className="prose max-w-none text-gray-600 leading-relaxed space-y-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-3">3.1 Imprese Energivore: Il Vantaggio Competitivo</h3>
          <p>
            Le imprese energivore o che hanno intrapreso percorsi certificati di efficientamento energetico possono accedere a una quota di fondo perduto fino al 20% (massimo €200.000), concessa in regime di aiuti de minimis.
          </p>
          
          <h4 className="text-lg font-semibold text-blue-700 mb-3 mt-6">Chi può accedere:</h4>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Imprese con consumo annuo di almeno 1 GWh</li>
            <li>Imprese con Indice di Intensità Elettrica (IIE) ≥ 20%</li>
            <li>Imprese con certificazioni: ISO 50001, ISO 14064-1 o -2, ISO 14068</li>
            <li>Imprese con diagnosi energetica in corso di validità</li>
          </ul>
          
          <h4 className="text-lg font-semibold text-green-700 mb-3 mt-6">Vantaggi esclusivi:</h4>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>Fondo perduto raddoppiato:</strong> 20% invece del 10% standard</li>
            <li><strong>Esenzione dalle garanzie:</strong> nessuna fideiussione richiesta</li>
            <li><strong>Importi maggiorati:</strong> fino a €5.000.000 per Grandi Imprese</li>
            <li><strong>Spese ammissibili ampliate:</strong> investimenti per efficientamento energetico anche in Italia</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-700 mb-3 mt-8">3.2 Apertura alle Filiere Produttive</h3>
          <p>
            Dal 7 agosto 2025 si estende la misura anche alle imprese non esportatrici appartenenti ad una filiera.
          </p>
          
          <h4 className="text-lg font-semibold text-blue-700 mb-3 mt-6">Come funziona il requisito filiera:</h4>
          <p><strong>Per PMI non direttamente esportatrici:</strong></p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Avere codice ATECO produttivo</li>
            <li>Fatturato export minimo 3% del bilancio</li>
            <li>Far parte di una filiera di almeno 3 imprese clienti</li>
            <li>I clienti devono esportare almeno il 20% del loro fatturato</li>
          </ul>
          
          <h4 className="text-lg font-semibold text-blue-700 mb-3 mt-6">Documentazione richiesta:</h4>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Almeno 2 contratti di fornitura stipulati da 12+ mesi</li>
            <li>Dichiarazioni IVA dei clienti esportatori</li>
            <li>Partitario clienti con importi di vendita</li>
            <li>Dichiarazione di intento dell'impresa cliente esportatrice</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-700 mb-3 mt-8">3.3 Calcolo Aritmetico del Finanziamento</h3>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h4 className="text-lg font-semibold text-blue-800 mb-4">ESEMPIO 1: PMI Energivora</h4>
            <div className="space-y-2 text-sm">
              <div><strong>Fatturato medio ultimi 2 anni:</strong> €10.000.000</div>
              <div><strong>Calcolo importo massimo:</strong> 35% × €10.000.000 = €3.500.000</div>
              <div><strong>Limite per PMI:</strong> €2.500.000</div>
              <div className="font-bold text-blue-700">IMPORTO FINANZIABILE: €2.500.000</div>
              
              <div className="mt-4">
                <div className="font-semibold mb-2">Composizione:</div>
                <div>- Finanziamento agevolato (0,371%): €2.000.000</div>
                <div>- Fondo perduto (20%): €500.000 → limitato a €200.000</div>
                <div className="font-bold text-green-700 mt-2">TOTALE AGEVOLAZIONE: €2.200.000</div>
                <div className="text-xs">(di cui €200.000 a fondo perduto)</div>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-green-800 mb-4">ESEMPIO 2: Micro Impresa in Filiera</h4>
            <div className="space-y-2 text-sm">
              <div><strong>Fatturato medio ultimi 2 anni:</strong> €1.500.000</div>
              <div><strong>Calcolo importo massimo:</strong> 35% × €1.500.000 = €525.000</div>
              <div><strong>Limite per Micro Imprese:</strong> €500.000</div>
              <div className="font-bold text-green-700">IMPORTO FINANZIABILE: €500.000</div>
              
              <div className="mt-4">
                <div className="font-semibold mb-2">Composizione:</div>
                <div>- Finanziamento agevolato (0,371%): €450.000</div>
                <div>- Fondo perduto (10%): €50.000</div>
                <div className="font-bold text-blue-700 mt-2">TOTALE AGEVOLAZIONE: €500.000</div>
                <div className="text-xs">(di cui €50.000 a fondo perduto)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
