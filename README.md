# Telegram Bot Starter

Documentazione:

- [0 - Installazione](./docs/0_installazione.md)
- [1 - Terminale](./docs/1_terminale.md)
- [2 - Moduli NPM](./docs/2_modulo_npm.md)
- [3 - Oggetti in JS](./docs/3_oggetti.md)
- [4 - HTTP](./docs/4_http.md)
- [5 - Axios](./docs/5_axios.md)
- [6 - env](./docs/6_env.md)

Esempi:

- [1 - hello world](./examples/1_hello_world.js)
- [2 - Chiamata in GET con axios](./examples/2_axios_get.js)
- [3 - Chiamata in POST con axios](./examples/3_axios_post.js)
- [4 - Chiamata con Axios, callback vs async/await](./examples/4_axios_callback_async_await.js)

## Bot telegram

### Creazione del bot e token

Per creare un bot su Telegram, è necessario contattare il bot `@BotFather` e seguire le istruzioni.

Una volta creato il bot, `@BotFather` fornirà un token che dovrà essere utilizzato per interagire con il bot.

Crea il file `.env` e inserisci il token del bot

```env
TELEGRAM_BOT_TOKEN=<token>
```

### Installazione delle dependencies

Apri un terminale nella cartella del progetto e lancia il comando

```bash
npm install
```

### Avvio del bot

Per avviare il bot, lancia il comando

```bash
node index.js
```

## API Pubbliche

- [rapidapi](https://rapidapi.com/collection/list-of-free-apis): richiede registrazione, ma fornisce snippet di codice NodeJS con Axios
- [jsonplaceholder](https://jsonplaceholder.typicode.com/)
- [public-apis github reposirot](https://github.com/public-apis/public-apis)
- [Dog API](https://dog.ceo/dog-api/)
- [publicapis.dev](https://publicapis.dev/)
- [HTTP Dog](https://http.dog/)
- [HTTP Cat](https://http.cat/)

## Note

- Il bot deve essere avviato per poter ricevere e rispondere ai messaggi
- Il bot non può essere avviato su più dispositivi contemporaneamente a meno che non vengano utilizzati token diversi
- Una volta effettuate delle modifiche sul codice, il bot dovrà essere riavviato per poterle applicare. Quindi è necessario interrompere il processo e riavviarlo
- Esempio di implementazione di un bot telegram è disponibile nel file `index.js`
