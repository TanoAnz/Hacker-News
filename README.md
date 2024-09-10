
# Hacker News Angular 17.3.7 Application

## Descrizione

Questa applicazione Angular visualizza l'elenco delle ultime news recuperate dall'API di Hacker News. Alla startup, l'applicazione mostra le prime 10 news, inclusi titolo, link e data. Gli utenti possono caricare ulteriori news tramite un pulsante "View More", che visualizza le successive 10 news.

## Funzionalità

- **Visualizzazione News:** L'applicazione visualizza il titolo, il link e la data delle ultime news.
- **Caricamento Dinamico:** Carica inizialmente le prime 10 news e permette di caricare altre 10 news alla volta tramite il pulsante "Load more".
- **Gestione delle API:** Utilizza le API di Hacker News per recuperare l'elenco degli ID delle news e i dettagli di ciascuna news.

## API Utilizzate

1. **Recupero degli ID delle Ultime News:**
   - **Endpoint:** `https://hacker-news.firebaseio.com/v0/newstories.json`
   - **Metodo:** GET
   - **Descrizione:** Restituisce un array di ID delle ultime news (circa 500 elementi).

2. **Recupero dei Dettagli della News:**
   - **Endpoint:** `https://hacker-news.firebaseio.com/v0/item/{id}.json`
   - **Metodo:** GET
   - **Descrizione:** Restituisce i dettagli di una news, inclusi titolo, link e data.
