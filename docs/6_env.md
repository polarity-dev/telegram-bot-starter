# Variabili d'ambiente

Le variabili d'ambiente sono variabili di sistema che possono essere utilizzate da tutti i processi in esecuzione su un sistema operativo. Queste variabili sono utilizzate per memorizzare informazioni di configurazione.

In Node.js, le variabili d'ambiente sono accessibili tramite l'oggetto globale `process.env`. Questo oggetto contiene tutte le variabili d'ambiente disponibili sul sistema operativo.

## File `.env`

Per proteggere le informazioni sensibili, come le chiavi API o le password, è possibile utilizzare un file `.env`. Questo file è un file di testo che contiene coppie chiave-valore di variabili d'ambiente.

Ad esempio, il seguente file `.env` definisce due variabili d'ambiente:

```env
TELEGRAM_BOT_TOKEN=1234567890:ABCDEFGHIJKLMNOPQRSTUVWXYZ
OPENWEATHER_API_KEY=abcdefghijklmnopqrstuvwxyz
```

Questo file non dovrebbe essere mai caricato su un repository pubblico, poiché potrebbe contenere informazioni sensibili.

## Modulo dotenv

Per utilizzare le variabili d'ambiente definite nel file `.env` all'interno di un applicativo NodeJS, è possibile utilizzare il pacchetto `dotenv`. Questo pacchetto carica automaticamente le variabili d'ambiente definite nel file `.env` e le rende disponibili tramite l'oggetto `process.env`.

Per installare il pacchetto `dotenv`, eseguire il seguente comando:

```bash
npm install dotenv
```

Per utilizzare il pacchetto `dotenv`, è necessario richiamare il metodo `config` del modulo `dotenv` all'inizio del file principale del progetto. Ad esempio:

```javascript
require('dotenv').config()
```

## Leggere una Variabile d'Ambiente

Per leggere una variabile d'ambiente, è sufficiente accedere alla proprietà corrispondente dell'oggetto `process.env`. Ad esempio, per leggere la variabile d'ambiente `NODE_ENV`, è possibile utilizzare il seguente codice:

```javascript
console.log(process.env.NODE_ENV)
```
