// Modello per la modalità di consenso di Google per SolariXBusiness
// Basato sulle best practice di Google per la modalità di consenso v2

// Funzioni richieste dal modello GTM
const log = require('logToConsole');
const setDefaultConsentState = require('setDefaultConsentState');
const updateConsentState = require('updateConsentState');
const getCookieValues = require('getCookieValues');
const callInWindow = require('callInWindow');
const gtagSet = require('gtagSet');

// Nome del cookie utilizzato da SolariXBusiness per memorizzare le preferenze di consenso
const COOKIE_NAME = 'cookie-consent';

// Funzione per dividere l'input in un array di stringhe
const splitInput = (input) => {
  return input.split(',')
      .map(entry => entry.trim())
      .filter(entry => entry.length !== 0);
};

// Elabora i dati dalla tabella delle impostazioni predefinite
const parseCommandData = (settings) => {
  const regions = splitInput(settings['region']);
  const granted = splitInput(settings['granted']);
  const denied = splitInput(settings['denied']);
  const commandData = {};
  
  if (regions.length > 0) {
    commandData.region = regions;
  }
  
  granted.forEach(entry => {
    commandData[entry] = 'granted';
  });
  
  denied.forEach(entry => {
    commandData[entry] = 'denied';
  });
  
  return commandData;
};

// Funzione chiamata quando cambia il consenso dell'utente
const onUserConsent = (consent) => {
  log('Aggiornamento consenso:', consent);
  
  // Gestione standard della modalità di consenso
  const consentModeStates = {
    ad_storage: consent.marketing ? 'granted' : 'denied',
    ad_user_data: consent.marketing ? 'granted' : 'denied',
    ad_personalization: consent.marketing ? 'granted' : 'denied',
    analytics_storage: consent.analytics ? 'granted' : 'denied',
    functionality_storage: consent.necessary ? 'granted' : 'denied',
    personalization_storage: consent.preferences ? 'granted' : 'denied',
    security_storage: 'granted' // Sempre consentito per motivi di sicurezza
  };
  
  // Se l'utente ha accettato IAB TCF, possiamo aggiungere ulteriori parametri
  if (consent.iabTcfAccepted) {
    // Nessuna azione aggiuntiva necessaria, IAB TCF viene gestito separatamente
    log('IAB TCF accettato dall\'utente');
  }
  
  // Gestione CCPA (California Consumer Privacy Act)
  if (consent.ccpaOptOut) {
    // Se l'utente ha scelto di non consentire la vendita dei propri dati
    log('Utente ha scelto opt-out per CCPA');
    
    // Impostiamo la stringa us_privacy per indicare l'opt-out
    // Formato: 1YNN dove Y indica che l'utente ha fatto opt-out
    gtagSet('us_privacy', '1YNN');
    
    // Attiva il trattamento dati limitato per Google Ads
    gtagSet('restricted_data_processing', true);
  } else {
    // Se l'utente non ha fatto opt-out
    log('Utente non ha scelto opt-out per CCPA');
    
    // Impostiamo la stringa us_privacy per indicare che non c'è opt-out
    // Formato: 1NNN dove N indica che l'utente non ha fatto opt-out
    gtagSet('us_privacy', '1NNN');
    
    // Disattiva il trattamento dati limitato
    gtagSet('restricted_data_processing', false);
  }
  
  updateConsentState(consentModeStates);
};

// Funzione principale
const main = (data) => {
  // Impostazioni opzionali
  gtagSet('ads_data_redaction', data.ads_data_redaction);
  gtagSet('url_passthrough', data.url_passthrough);
  
  // Imposta gli stati di consenso predefiniti
  data.defaultSettings.forEach(settings => {
    const defaultData = parseCommandData(settings);
    // Attendi 500ms per ricevere le scelte dell'utente dalla CMP
    defaultData.wait_for_update = 500;
    setDefaultConsentState(defaultData);
  });
  
  // Controlla se il cookie è impostato e ha valori corrispondenti ai tipi di consenso di Google
  const cookieValue = getCookieValues(COOKIE_NAME);
  if (cookieValue && cookieValue.length > 0) {
    try {
      const consentData = JSON.parse(cookieValue[0]);
      onUserConsent(consentData);
    } catch (e) {
      log('Errore durante il parsing del cookie di consenso:', e);
    }
  }
  
  // Aggiungi un listener per gli aggiornamenti del consenso
  // Questo deve corrispondere alla funzione nel componente CookieConsent
  callInWindow('addConsentListener', onUserConsent);
};

// Esporta la funzione principale
module.exports = {
  main
};
