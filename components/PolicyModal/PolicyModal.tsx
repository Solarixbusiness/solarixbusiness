'use client'

import { useState } from 'react'
import styles from './PolicyModal.module.css'

interface PolicyModalProps {
  isOpen: boolean
  onCloseAction: () => void
  type: 'cookie' | 'privacy' | 'terms'
}

export default function PolicyModal({ isOpen, onCloseAction, type }: PolicyModalProps) {
  const [currentType, setCurrentType] = useState(type)

  const switchPolicy = (newType: 'cookie' | 'privacy' | 'terms') => {
    setCurrentType(newType)
  }

  if (!isOpen) return null

  return (
    <div 
      className={`${styles.policyModal} ${isOpen ? styles.displayBlock : ''}`}
      onClick={onCloseAction}
    >
      <div 
        className={styles.policyContent}
        onClick={e => e.stopPropagation()}
      >
        <button 
          className={styles.policyClose}
          onClick={onCloseAction}
        >
          <span>&times;</span>
          <span className={styles.closeText}>Chiudi</span>
        </button>

        <div className={styles.policyNav}>
          <button 
            className={`${styles.policyNavButton} ${currentType === 'cookie' ? styles.active : ''}`}
            onClick={() => switchPolicy('cookie')}
          >
            Cookie Policy
          </button>
          <button 
            className={`${styles.policyNavButton} ${currentType === 'privacy' ? styles.active : ''}`}
            onClick={() => switchPolicy('privacy')}
          >
            Privacy Policy
          </button>
          <button 
            className={`${styles.policyNavButton} ${currentType === 'terms' ? styles.active : ''}`}
            onClick={() => switchPolicy('terms')}
          >
            Terms of Service
          </button>
        </div>

        <div className={styles.policyText}>
          {currentType === 'cookie' ? (
            <>
              <h2>Cookie Policy</h2>
              <h3>Cosa sono i cookie?</h3>
              <p>I cookie sono piccoli file di testo che i siti visitati inviano al terminale dell'utente, dove vengono memorizzati, per poi essere ritrasmessi agli stessi siti alla visita successiva.</p>

              <h3>Cookie utilizzati da questo sito</h3>
              <h4>Cookie tecnici necessari (durata: sessione)</h4>
              <p>Questi cookie sono essenziali per il corretto funzionamento del sito. Non possono essere disattivati nei nostri sistemi. Vengono eliminati alla chiusura del browser.</p>

              <h4>Cookie analitici (durata: 12 mesi)</h4>
              <p>Ci aiutano a capire come gli utenti interagiscono con il nostro sito raccogliendo e trasmettendo informazioni in forma anonima.</p>

              <h4>Cookie analitici (Google Analytics)</h4>
              <p>Utilizziamo Google Analytics per raccogliere statistiche anonime sull'utilizzo del sito. 
                 I dati sono trattati in forma aggregata e non permettono di identificare il singolo utente.</p>
              <p>I dati raccolti includono:</p>
              <ul>
                <li>Pagine visitate e tempo di permanenza</li>
                <li>Dispositivo e browser utilizzati</li>
                <li>Paese di provenienza (in forma anonima)</li>
              </ul>
              <p>I dati sono conservati sui server di Google per 14 mesi e trattati secondo la loro 
                 <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.</p>

              <h3>Conservazione dei dati</h3>
              <ul>
                <li>Cookie di sessione: vengono eliminati alla chiusura del browser</li>
                <li>Cookie analitici: conservati per 12 mesi dalla data di installazione</li>
                <li>Cookie tecnici persistenti: conservati per 24 mesi</li>
              </ul>

              <h4>Google Maps</h4>
              <p>Utilizziamo Google Maps per mostrare la nostra sede. Il servizio potrebbe utilizzare cookie tecnici per:</p>
              <ul>
                <li>Visualizzazione della mappa</li>
                <li>Interazioni con la mappa</li>
                <li>Calcolo percorsi</li>
              </ul>
              <p>I dati sono gestiti da Google secondo la loro 
                 <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.</p>
            </>
          ) : currentType === 'privacy' ? (
            <>
              <h2>Privacy Policy</h2>
              <h3>Titolare del Trattamento dei Dati</h3>
              <p>
                SolariX Business<br/>
                Via Bertolotti 7 | 10121 Torino (TO) | Italy<br/>
                P.IVA: IT11130140012<br/>
                Tel: 011 1883 7752
              </p>

              <h3>Tipologie di Dati raccolti e tempi di conservazione</h3>
              <ul>
                <li>Cookie e Dati di utilizzo (12-24 mesi)</li>
                <li>Nome, Email e Telefono dai form di contatto (36 mesi)</li>
                <li>Dati di navigazione come IP e orari (6 mesi)</li>
              </ul>

              <h3>Base giuridica del trattamento</h3>
              <p>Il trattamento dei dati si basa su:</p>
              <ul>
                <li>Consenso dell'utente</li>
                <li>Legittimo interesse del titolare</li>
                <li>Adempimento di obblighi contrattuali</li>
                <li>Obblighi di legge</li>
              </ul>

              <h3>I tuoi diritti (GDPR)</h3>
              <p>Hai il diritto di:</p>
              <ul>
                <li><strong>Accesso:</strong> ottenere conferma del trattamento e copia dei tuoi dati</li>
                <li><strong>Rettifica:</strong> correggere o aggiornare i tuoi dati</li>
                <li><strong>Cancellazione:</strong> richiedere la rimozione dei tuoi dati ("diritto all'oblio")</li>
                <li><strong>Limitazione:</strong> limitare il trattamento dei tuoi dati</li>
                <li><strong>Portabilità:</strong> ricevere i tuoi dati in formato strutturato</li>
                <li><strong>Opposizione:</strong> opporti al trattamento dei tuoi dati</li>
                <li><strong>Revoca del consenso:</strong> revocare i consensi precedentemente forniti</li>
              </ul>

              <h3>Come esercitare i tuoi diritti</h3>
              <p>Puoi esercitare i tuoi diritti contattando il Titolare:</p>
              <ul>
                <li>Tel: 011 1883 7752</li>
                <li>Posta: Via Bertolotti 7, 10121 Torino (TO)</li>
                <li>Risponderemo entro 30 giorni dalla richiesta</li>
              </ul>

              <h3>Reclami</h3>
              <p>Hai il diritto di proporre reclamo all'Autorità Garante per la protezione dei dati personali:</p>
              <ul>
                <li>www.garanteprivacy.it</li>
                <li>Piazza Venezia 11 - 00187 Roma</li>
              </ul>

              <h3>Trasferimento dati extra-UE</h3>
              <p>Alcuni dei servizi utilizzati potrebbero trasferire i dati in paesi extra-UE:</p>
              <ul>
                <li><strong>Google Analytics:</strong> I dati sono trasferiti negli USA con garanzie adeguate:
                  <ul>
                    <li>Clausole Contrattuali Standard approvate dalla Commissione Europea</li>
                    <li>Anonimizzazione degli IP prima del trasferimento</li>
                    <li>Conservazione limitata a 14 mesi</li>
                  </ul>
                </li>
              </ul>

              <h3>Misure di Sicurezza</h3>
              <p>Adottiamo le seguenti misure per proteggere i tuoi dati:</p>
              <ul>
                <li>Connessione HTTPS cifrata</li>
                <li>Protezione CSRF sui form</li>
                <li>Conservazione sicura dei consensi</li>
                <li>Accesso limitato ai dati personali</li>
              </ul>
            </>
          ) : (
            <>
              <h2>Termini e Condizioni di Servizio</h2>
              <h3>1. Introduzione</h3>
              <p>I presenti Termini e Condizioni regolano l'uso del sito web www.solarixbusiness.it (di seguito "Sito"), gestito da SolariX Business, con sede in Via Bertolotti 7, 10121 Torino (TO), Italia, P.IVA IT11130140012.</p>
              <p>Accedendo e utilizzando il Sito, l'utente accetta integralmente i seguenti termini. Se non si accettano questi termini, si prega di non utilizzare il Sito.</p>

              <h3>2. Servizi Offerti</h3>
              <p>Solarix Business offre consulenza e soluzioni per l'installazione di impianti fotovoltaici, gestione dell'energia e commercializzazione di crediti di carbonio. I dettagli dei servizi sono descritti nel Sito e possono essere aggiornati periodicamente.</p>

              <h3>3. Uso del Sito</h3>
              <p>L'utente si impegna a:</p>
              <ul>
                <li>Utilizzare il Sito in conformità con le leggi vigenti e questi Termini.</li>
                <li>Non tentare di accedere in modo non autorizzato ai server o ai sistemi del Sito.</li>
                <li>Non diffondere contenuti illegali, offensivi o dannosi.</li>
              </ul>
              <p>Solarix Business si riserva il diritto di sospendere o terminare l'accesso al Sito in caso di violazione di questi Termini.</p>

              <h3>4. Responsabilità e Limitazioni</h3>
              <p>Solarix Business si impegna a fornire informazioni accurate sul Sito, ma non garantisce che siano prive di errori o sempre aggiornate.</p>
              <p>L'uso del Sito è a rischio dell'utente. Non siamo responsabili per eventuali danni derivanti dall'utilizzo delle informazioni fornite.</p>
              <p>Non siamo responsabili per eventuali interruzioni del Sito dovute a manutenzione, problemi tecnici o cause di forza maggiore.</p>

              <h3>5. Proprietà Intellettuale</h3>
              <p>Tutti i contenuti del Sito (testi, immagini, loghi, marchi, grafica) sono di proprietà di Solarix Business o concessi in licenza. È vietata la riproduzione, distribuzione o modifica senza autorizzazione scritta.</p>

              <h3>6. Privacy e Cookie</h3>
              <p>L'uso del Sito è soggetto alla nostra Privacy Policy e Cookie Policy, che spiegano come raccogliamo e trattiamo i dati personali.</p>

              <h3>7. Modifiche ai Termini</h3>
              <p>Solarix Business si riserva il diritto di modificare i presenti Termini in qualsiasi momento. Le modifiche saranno pubblicate sul Sito e l'uso continuato del Sito implica l'accettazione dei nuovi Termini.</p>

              <h3>8. Legge Applicabile e Foro Competente</h3>
              <p>I presenti Termini sono regolati dalla legge italiana. Eventuali controversie saranno di competenza del foro di Torino, Italia, salvo diversa disposizione di legge.</p>

              <h3>9. Contatti</h3>
              <p>Per qualsiasi informazione sui presenti Termini, puoi contattarci:</p>
              <ul>
                <li>Email: info@solarixbusiness.it</li>
                <li>Telefono: 011 1883 7752</li>
                <li>Indirizzo: Via Bertolotti 7, 10121 Torino (TO), Italia</li>
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
