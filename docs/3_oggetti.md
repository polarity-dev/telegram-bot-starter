# Oggetti in JS

Gli oggetti in JavaScript sono collezioni di proprietà. Una proprietà è un'associazione tra un nome (o chiave) e un valore.

Ad esempio:

```javascript
const persona = {
  nome: 'Mario',
  eta: 30,
  figli: [{
    nome: 'Luca',
    eta: 5,
  }, {
    nome: 'Anna',
    eta: 3
  }]
}
```

In questo esempio, `persona` è un oggetto con tre proprietà: `nome`, `eta` e `figli`. La proprietà `figli` è un array di oggetti.

## Accesso alle proprietà

Per accedere a una proprietà di un oggetto, puoi usare la notazione a punto `.` o la notazione a parentesi quadre `[]`:

```javascript
console.log(persona.nome); // Mario
// oppure
console.log(persona['nome']); // Mario


console.log(persona.figli[0].nome); // Luca
// oppure
console.log(persona['figli'][0]['nome']); // Luca
```

## JSON

JSON (JavaScript Object Notation) è un formato di scambio dati basato su JavaScript. È comunemente utilizzato per inviare e ricevere dati da un server.

È il formato standard per scambiare dati tra client e server.

Ha una sintassi simile a quella degli oggetti JavaScript, ma è una stringa.

Esempio oggetto JS:

```javascript
{
  nome: 'Mario',
  eta: 30
}
```

Esempio JSON:

```json
{
  "nome": "Mario",
  "eta": 30
}
```

In diversi casi, i client HTTP come Axios convertono automaticamente i dati JSON in oggetti JavaScript e viceversa al momento della richiesta.

## References

- [Guida javascript.info](https://it.javascript.info/object)