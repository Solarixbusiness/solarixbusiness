'use client';

import React from 'react';
import Link from 'next/link';

const QuadroNormativoSection: React.FC = () => {
  return (
    <div className="mb-12">
      <div className="bg-white p-6 border border-green-100 rounded-lg shadow-lg">
        <h2 id="quadro-normativo" className="text-2xl font-semibold text-green-700 mb-6">1. INTRODUZIONE AL QUADRO NORMATIVO</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">1.1 Base Normativa e Riferimenti Legislativi</h3>
          <p className="mb-3">
            Il Fondo 394/81 rappresenta uno strumento strategico per l'internazionalizzazione delle imprese italiane, disciplinato da un quadro normativo complesso che include:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li><strong>Decreto del 1° giugno 2023:</strong> Disciplina principale del Fondo 394/81</li>
            <li><strong>Circolare 4/394/2023-DE-28.02.2025:</strong> Documento operativo dettagliato</li>
            <li><strong>Regolamento UE n. 2831/2023:</strong> Normativa "de minimis" (sostituisce il precedente n. 1407/2013)</li>
            <li><strong>Regolamento UE n. 651/2014:</strong> GBER (General Block Exemption Regulation)</li>
            <li><strong>Regolamento UE 2021/523:</strong> InvestEU (con relative esclusioni nell'Allegato V - Lettera B)</li>
            <li><strong>Operatività PNRR:</strong> Circolari specifiche per Transizione Digitale ed Ecologica</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">1.2 Quadro degli Aiuti di Stato</h3>
          <p className="mb-3">
            Gli interventi sono concessi esclusivamente:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>Nei limiti della normativa europea sugli aiuti "de minimis"</li>
            <li>In conformità con la normativa europea sugli aiuti di Stato</li>
            <li>Rispettando il principio di assenza del "doppio finanziamento" (per risorse PNRR)</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3">1.3 Gestione del Fondo</h3>
          <p className="mb-3">
            SIMEST opera come gestore del Fondo 394/81 con le seguenti caratteristiche:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Patrimonio autonomo e distinto da quello di SIMEST</li>
            <li>Contabilità separata con rendiconto annuale sottoposto al Comitato Agevolazioni</li>
            <li>Risorse derivanti da: versamenti al Fondo, entrate imputate al medesimo, stanziamenti normativi</li>
          </ul>
        </div>
        
        <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
          <h4 className="font-semibold text-green-600 mb-2">Hai bisogno di supporto?</h4>
          <p className="mb-4">Se hai dubbi sul quadro normativo o necessiti di assistenza per comprendere meglio le normative applicabili, il nostro team di consulenti è a tua disposizione.</p>
          <div className="flex items-center">
            <Link href="/contatti" className="text-blue-600 hover:underline mr-6">Contattaci per una consulenza</Link>
            <a href="https://wa.me/+393470087833" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-lg">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.14 4.486c-3.868 0-7.015 3.147-7.015 7.015 0 1.513.469 2.919 1.27 4.075l-1.665 4.975 5.095-1.635a6.979 6.979 0 004.315 1.485c3.868 0 7.015-3.147 7.015-7.015s-3.147-7.015-7.015-7.015h-.005z"/>
              </svg>
              Contattaci su WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuadroNormativoSection;
