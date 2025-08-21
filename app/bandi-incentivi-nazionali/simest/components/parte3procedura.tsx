import React from 'react';

export default function Parte3Procedura() {
  return (
    <div className="space-y-8">
      {/* Sezione 6 - Procedure di Accesso */}
      <section id="procedure-accesso" className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-blue-500 pb-4">
          6. PROCEDURE DI ACCESSO: STEP BY STEP
        </h2>

        {/* 6.1 Timeline del Processo */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-blue-700 mb-6 flex items-center">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3">6.1</span>
            Timeline del Processo
          </h3>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
            <div className="bg-gray-800 text-white rounded-lg p-6 font-mono text-sm">
              <div className="border border-gray-600 rounded p-4">
                <div className="text-center text-lg font-bold mb-4 text-blue-300">TIMELINE SIMEST</div>
                <div className="border-t border-gray-600 pt-4">
                  
                  <div className="mb-6">
                    <div className="text-green-300 font-bold mb-2">FASE 1: PREPARAZIONE (7-10 giorni)</div>
                    <div className="ml-4 space-y-1">
                      <div>├─ Registrazione Portale SIMEST</div>
                      <div>├─ Raccolta documentazione</div>
                      <div>└─ Verifica requisiti</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-yellow-300 font-bold mb-2">FASE 2: PRESENTAZIONE (1-2 giorni)</div>
                    <div className="ml-4 space-y-1">
                      <div>├─ Compilazione domanda online</div>
                      <div>├─ Upload documenti</div>
                      <div>└─ Firma digitale e invio</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-orange-300 font-bold mb-2">FASE 3: ISTRUTTORIA (30-60 giorni)</div>
                    <div className="ml-4 space-y-1">
                      <div>├─ Verifica formale</div>
                      <div>├─ Valutazione merito creditizio</div>
                      <div>├─ Rilascio CUP</div>
                      <div>└─ Eventuale richiesta integrazioni</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-purple-300 font-bold mb-2">FASE 4: DELIBERA (15-30 giorni)</div>
                    <div className="ml-4 space-y-1">
                      <div>├─ Comunicazione esito</div>
                      <div>└─ Invio lettera di delibera</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-cyan-300 font-bold mb-2">FASE 5: STIPULA (15-30 giorni)</div>
                    <div className="ml-4 space-y-1">
                      <div>├─ Firma contratto</div>
                      <div>├─ Apertura conto dedicato</div>
                      <div>└─ Prima erogazione (50%)</div>
                    </div>
                  </div>

                  <div className="border-t border-gray-600 pt-4 text-center">
                    <div className="text-red-300 font-bold">TOTALE: 60-90 giorni dall'invio domanda</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6.2 Documentazione Necessaria */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-blue-700 mb-6 flex items-center">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3">6.2</span>
            Documentazione Necessaria
          </h3>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Documentazione Base */}
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h4 className="text-lg font-semibold text-green-800 mb-4">Documentazione Base (sempre richiesta):</h4>
              <ul className="space-y-2 text-green-700 text-sm">
                <li>• Visura camerale aggiornata (&lt; 30 giorni)</li>
                <li>• Ultimi 2 bilanci approvati e depositati</li>
                <li>• Situazione economico-patrimoniale infrannuale</li>
                <li>• Documento identità legale rappresentante</li>
                <li>• Dichiarazione De Minimis</li>
                <li>• DURC in corso di validità</li>
              </ul>
            </div>

            {/* Per Imprese Energivore */}
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
              <h4 className="text-lg font-semibold text-orange-800 mb-4">Per Imprese Energivore (aggiuntiva):</h4>
              <ul className="space-y-2 text-orange-700 text-sm">
                <li>• Certificazioni energetiche (ISO 50001, etc.)</li>
                <li>• Diagnosi energetica (se presente)</li>
                <li>• Bollette energetiche ultimo anno</li>
                <li>• Dichiarazione consumi energetici</li>
              </ul>
            </div>

            {/* Per Imprese in Filiera */}
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <h4 className="text-lg font-semibold text-purple-800 mb-4">Per Imprese in Filiera (aggiuntiva):</h4>
              <ul className="space-y-2 text-purple-700 text-sm">
                <li>• Contratti di fornitura (minimo 2, da 12+ mesi)</li>
                <li>• Partitario clienti</li>
                <li>• Dichiarazioni IVA clienti esportatori</li>
                <li>• Dichiarazione di intento clienti</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 6.3 Portale SIMEST: Date Chiave 2025 */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-blue-700 mb-6 flex items-center">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3">6.3</span>
            Portale SIMEST: Date Chiave 2025
          </h3>

          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-yellow-300">
                  <div className="font-semibold text-yellow-800 mb-2">Dal 25 marzo 2025:</div>
                  <p className="text-yellow-700 text-sm">Apertura nuovi strumenti America Latina e Africa</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-orange-300">
                  <div className="font-semibold text-orange-800 mb-2">Dal 7 agosto 2025:</div>
                  <p className="text-orange-700 text-sm">Apertura alle imprese non esportatrici in filiera</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-blue-300">
                  <div className="font-semibold text-blue-800 mb-2">Dal 16 settembre 2025:</div>
                  <p className="text-blue-700 text-sm">Nuovo strumento "Affiancamento strategico mercato indiano"</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-green-300">
                  <div className="font-semibold text-green-800 mb-2">Fino al 31 dicembre 2026:</div>
                  <p className="text-green-700 text-sm">Condizioni speciali per imprese energivore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione 7 - Gestione del Finanziamento */}
      <section id="gestione-finanziamento" className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-green-500 pb-4">
          7. GESTIONE DEL FINANZIAMENTO
        </h2>

        {/* 7.1 Conto Corrente Dedicato */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-green-700 mb-6 flex items-center">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-3">7.1</span>
            Conto Corrente Dedicato
          </h3>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">OBBLIGATORIO</span>
              <span className="text-red-800 font-semibold">entro 30 giorni dalla stipula:</span>
            </div>
            
            <ul className="space-y-3 text-red-700">
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">•</span>
                <span>Utilizzo esclusivo per operazioni del finanziamento</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">•</span>
                <span>Tutti i pagamenti devono transitare da questo conto</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">•</span>
                <span>CUP obbligatorio su bonifici e fatture</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">•</span>
                <span>Può essere condiviso con altri interventi SIMEST</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 7.2 Periodo di Realizzazione */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-green-700 mb-6 flex items-center">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-3">7.2</span>
            Periodo di Realizzazione
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-blue-800">Inizio:</span>
                  <span className="text-blue-700">Ricezione del CUP</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-blue-800">Durata:</span>
                  <span className="text-blue-700">24 mesi dalla stipula</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-blue-800">Proroga:</span>
                  <span className="text-blue-700">Possibile per 6 mesi aggiuntivi</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-blue-800">Rendicontazione:</span>
                  <span className="text-blue-700">Entro 29 mesi (35 con proroga)</span>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-600 mb-2">24</div>
                <div className="text-yellow-800 font-semibold">MESI</div>
                <div className="text-yellow-700 text-sm mt-2">Tempo standard per realizzazione</div>
                <div className="mt-4 text-xs text-yellow-600">+ 6 mesi di proroga possibile</div>
              </div>
            </div>
          </div>
        </div>

        {/* 7.3 Erogazioni */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-green-700 mb-6 flex items-center">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-3">7.3</span>
            Erogazioni
          </h3>

          <div className="space-y-6">
            {/* Prima Erogazione */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
              <h4 className="text-lg font-bold text-green-800 mb-4">1° EROGAZIONE (Anticipo)</h4>
              <div className="bg-white rounded-lg p-4 font-mono text-sm">
                <div className="space-y-1">
                  <div>├─ 50% del finanziamento</div>
                  <div>├─ Entro 30 giorni dalla stipula</div>
                  <div>└─ Non richiede rendicontazione</div>
                </div>
              </div>
            </div>

            {/* Seconda Erogazione */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 border border-blue-200">
              <h4 className="text-lg font-bold text-blue-800 mb-4">2° EROGAZIONE (SAL)</h4>
              <div className="bg-white rounded-lg p-4 font-mono text-sm">
                <div className="space-y-1">
                  <div>├─ Dopo rendicontazione 50% spese</div>
                  <div>├─ Entro 13 mesi dalla stipula</div>
                  <div>└─ Proporzionale alle spese validate</div>
                </div>
              </div>
            </div>

            {/* Erogazione Finale */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
              <h4 className="text-lg font-bold text-purple-800 mb-4">EROGAZIONE FINALE</h4>
              <div className="bg-white rounded-lg p-4 font-mono text-sm">
                <div className="space-y-1">
                  <div>├─ Saldo residuo</div>
                  <div>├─ Dopo rendicontazione finale</div>
                  <div>└─ Entro 29 mesi dalla stipula</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 7.4 Rendicontazione */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-green-700 mb-6 flex items-center">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-3">7.4</span>
            Rendicontazione
          </h3>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Documenti richiesti */}
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg">
              <h4 className="text-lg font-semibold text-indigo-800 mb-4">Documenti richiesti:</h4>
              <ul className="space-y-2 text-indigo-700 text-sm">
                <li>• Relazione finale sull'utilizzo</li>
                <li>• Rendiconto analitico spese</li>
                <li>• Fatture con CUP</li>
                <li>• Estratti conto dedicato</li>
                <li>• Asseverazione revisore legale</li>
              </ul>
            </div>

            {/* Scadenze critiche */}
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h4 className="text-lg font-semibold text-red-800 mb-4">Scadenze critiche:</h4>
              <div className="space-y-3 text-red-700 text-sm">
                <div className="bg-white rounded p-3 border border-red-200">
                  <div className="font-semibold">Prima rendicontazione:</div>
                  <div>entro 13 mesi (minimo 50% spese)</div>
                </div>
                <div className="bg-white rounded p-3 border border-red-200">
                  <div className="font-semibold">Rendicontazione finale:</div>
                  <div>entro 29 mesi</div>
                </div>
                <div className="bg-red-100 rounded p-3 border border-red-300">
                  <div className="font-bold text-red-800">Mancato rispetto = possibile revoca</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
