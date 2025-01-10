# Chiamata di rete con Axios

Axios è una libreria JavaScript popolare che facilita le richieste HTTP dal browser o da Node.js.

JSONPlaceholder è un servizio online gratuito che fornisce dati falsi JSON per test e prototipazione.

## Installazione di Axios

Prima di poter usare Axios, devi installarlo nel tuo progetto. Se ancora non è installato, apri il terminale nella cartella del tuo progetto e digita il seguente comando:

```bash
npm install axios
```

## Esempio di Richiesta GET

Ecco un esempio di come fare una richiesta GET a JSONPlaceholder per ottenere il post con ID 1:

```javascript
const axios = require('axios')

async function main() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')

    /* 
        RESPONSE
        
        {
            status: 200,
            headers: {
                "content-type": "application/json; charset=utf-8",
                ...
            },
            data: {
                "userId": 1,
                "id": 1,
                "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            }
        }
    */

    console.log(response.data)
    console.log(response.headers)
    console.log(response.status)
}

main()
```

## Esempio di Richiesta POST

```javascript
const axios = require('axios')

async function main() {
    const body = {
        title: 'foo',
        body: 'bar',
        userId: 1,
    }

    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', body)

     /* 
        RESPONSE
        
        {
            status: 201,
            headers: {
                "content-type": "application/json; charset=utf-8",
                ...
            },
            data: { title: 'foo', body: 'bar', userId: 1, id: 101 }
        }
    */

    console.log(response.data)
    console.log(response.headers)
    console.log(response.status)
}

main()
```
