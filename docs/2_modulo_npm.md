# Gestione dei pacchetti con npm

npm è il gestore di pacchetti per Node.js, utilizzato per gestire le librerie e le dipendenze nei progetti. Questa guida rapida copre le operazioni di base.

## Visualizzare i pacchetti disponibili

Per cercare pacchetti disponibili su npm, puoi usare il sito web ufficiale:

[npmjs.com](https://www.npmjs.com/)

## Installare un modulo

Per installare un modulo nel tuo progetto, apri il terminale nella cartella del progetto e digita:

```bash
npm install nome-modulo
```

## Visualizzare i pacchetti installati

I pacchetti installati nel progetto sono elencati nel file `package.json`. Per visualizzare i pacchetti installati, puoi aprire il file `package.json` e cercare la sezione `dependencies`. Non modificare manualmente quella sezione!

## Installare i modulo dato un file `package.json`

Se hai ricevuto un progetto Node.js da qualcun altro, puoi installare tutti i pacchetti necessari eseguendo:

```bash
npm install
```

Questo comando leggerà il file `package.json` e installerà tutte le dipendenze elencate al suo interno.

## node_modules

I pacchetti installati vengono memorizzati nella cartella `node_modules` nella radice del progetto. Questa cartella non dovrebbe essere modificata manualmente.

Quando la cartella del progetto viene condivisa con altri, è sufficiente condividere il file `package.json` senza la cartella `node_modules`. Gli altri utenti possono quindi eseguire `npm install` per installare tutti i pacchetti necessari.

## Utilizzare un modulo

Per utilizzare un modulo installato nel tuo progetto, puoi richiamarlo nel tuo codice JavaScript. Ad esempio, se hai installato il modulo `axios`, puoi utilizzarlo nel tuo codice come segue:

```javascript
const axios = require('axios');
```