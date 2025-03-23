# Guida al Deployment di SolariX Business su Infomaniak VPS

Questa guida ti aiuterà a deployare il sito SolariX Business su un VPS Infomaniak.

## Prerequisiti

- Un VPS Infomaniak con accesso SSH
- Node.js (versione 18 o superiore) installato sul VPS
- PM2 installato globalmente sul VPS (`npm install -g pm2`)
- Git installato sul VPS

## Passaggi per il Deployment

### 1. Accedi al tuo VPS tramite SSH

```bash
ssh utente@tuo-vps.infomaniak.com
```

### 2. Crea una directory per il progetto

```bash
mkdir -p /var/www/solarixbusiness
cd /var/www/solarixbusiness
```

### 3. Clona il repository o carica i file

Opzione A: Se utilizzi Git:
```bash
git clone tuo-repository-git .
```

Opzione B: Se carichi i file tramite SFTP:
- Carica tutti i file del progetto nella directory `/var/www/solarixbusiness`

### 4. Installa le dipendenze

```bash
npm install --production
```

### 5. Configura le variabili d'ambiente

Crea un file `.env.local` nella directory principale del progetto con le seguenti variabili:

```
SMTP_HOST=webmail.postassl.it
SMTP_PORT=587
SMTP_USER=info@solarixbusiness.it
SMTP_PASSWORD=anton10#
RECIPIENT_EMAIL=info@solarixbusiness.it

# Map ID
NEXT_PUBLIC_GOOGLE_MAPS_ID=5af6c7812c55ed29

# Mapbox
NEXT_PUBLIC_MAPBOX_TOKEN=pk.eyJ1IjoiZmlseWltcGlhbnRpIiwiYSI6ImNtNHdueWFwNDA2dnYya3IwamxibGJwdTEifQ.9j-puKYjscfE8iFY5RvkhA

# Environment
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://www.solarixbusiness.it
NEXT_PUBLIC_SITE_URL=https://www.solarixbusiness.it
NEXT_PUBLIC_SITE_NAME=solariXbusiness
NEXT_PUBLIC_PRODUCTION_URL=https://www.solarixbusiness.it

# Google Analytics
NEXT_PUBLIC_GOOGLE_ANALYTICS=G-XC5QMSHZKQ
```

### 6. Costruisci l'applicazione

```bash
npm run build
```

### 7. Avvia l'applicazione con PM2

```bash
pm2 start ecosystem.config.js
```

### 8. Configura PM2 per avviarsi al riavvio del sistema

```bash
pm2 save
pm2 startup
```
Esegui il comando che PM2 ti suggerisce.

### 9. Configura il server web (Apache/Nginx)

#### Per Apache (se utilizzato da Infomaniak)

Assicurati che il file `.htaccess` nella directory principale contenga:

```
RewriteEngine On
RewriteRule ^(.*)$ http://localhost:3000/$1 [P,L]
```

Inoltre, assicurati che i moduli `proxy` e `proxy_http` siano abilitati:

```bash
sudo a2enmod proxy
sudo a2enmod proxy_http
sudo systemctl restart apache2
```

#### Per Nginx (se utilizzato da Infomaniak)

Crea un file di configurazione per il tuo dominio:

```
server {
    listen 80;
    server_name www.solarixbusiness.it solarixbusiness.it;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 10. Configura HTTPS con Let's Encrypt

Installa Certbot e ottieni un certificato SSL:

```bash
sudo apt-get update
sudo apt-get install certbot
sudo certbot --apache -d www.solarixbusiness.it -d solarixbusiness.it
```

o per Nginx:

```bash
sudo apt-get update
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d www.solarixbusiness.it -d solarixbusiness.it
```

### 11. Verifica il deployment

Visita il tuo sito all'indirizzo https://www.solarixbusiness.it e assicurati che tutto funzioni correttamente.

## Manutenzione e Aggiornamenti

Per aggiornare il sito in futuro:

1. Accedi al VPS tramite SSH
2. Vai alla directory del progetto: `cd /var/www/solarixbusiness`
3. Scarica gli aggiornamenti (via Git o SFTP)
4. Installa eventuali nuove dipendenze: `npm install --production`
5. Ricostruisci l'applicazione: `npm run build`
6. Riavvia l'applicazione: `pm2 restart solarixbusiness`

## Risoluzione dei problemi

Se riscontri problemi con il deployment, controlla:

1. I log di PM2: `pm2 logs solarixbusiness`
2. I log del server web (Apache/Nginx)
3. Assicurati che le porte necessarie siano aperte nel firewall
4. Verifica che le variabili d'ambiente siano configurate correttamente
