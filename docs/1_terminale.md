# Guida all'uso del Terminale

Il terminale è uno strumento essenziale per lo sviluppo software e la gestione di sistemi.

## Avvio del Terminale

### Su macOS

Puoi aprire il Terminale su macOS cercandolo tramite Spotlight (premi `Cmd + Spazio` e digita "Terminal") o accedendo direttamente dall'applicazione "Terminal" situata nella cartella "Utility" nel Finder.

### Su Windows

Su Windows, puoi aprire il Prompt dei comandi (CMD) cercandoli nella barra di ricerca accanto al pulsante Start o premendo `Win + R` e digitando `cmd`, poi premendo `Enter`.

### Da Visual Studio Code

Per aprire un terminale integrato in Visual Studio Code, puoi navigare nel menu Visualizza > Terminale.

## Visualizzare la cartella corrente

Per vedere il percorso della cartella in cui ti trovi attualmente, digita il comando:

- Su macOS e Linux: `pwd`
- Su Windows: `cd`

## Percorsi relativi e assoluti

- Un **percorso assoluto** è il percorso completo che parte dalla radice del sistema di file fino alla cartella o al file desiderato (es. `/Users/nomeutente/documenti/progetto` su macOS o `C:\Utenti\nomeutente\Documenti\progetto` su Windows).
- Un **percorso relativo** è il percorso che parte dalla directory corrente. Ad esempio, se sei nella cartella `Documenti` e vuoi accedere a `progetto`, il percorso relativo sarebbe semplicemente `progetto`.

## Spostarsi tra le cartelle

Per cambiare la directory corrente:

- Su macOS e Linux: `cd [percorso]` (es. `cd progetto/`)
- Su Windows: lo stesso comando `cd [percorso]` funziona, come `cd progetto\`

## Eseguire un file JavaScript

Per eseguire un file JavaScript dal terminale, devi avere Node.js installato. Naviga nella cartella che contiene il tuo file e digita:

```bash
node nomefile.js
```

Sostituisci nomefile.js con il nome del file JavaScript che desideri eseguire.
