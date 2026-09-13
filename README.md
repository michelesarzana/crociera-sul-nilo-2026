# Crociera sul Nilo 2026 🏛️

Sito web del viaggio **Egitto Voyager Nefertari** di Michele e Carlotta Meneghini-Sarzana  
**12–19 ottobre 2026**

🔗 [Visita il sito](https://michelesarzana.github.io/crociera-sul-nilo-2026/)

---

## Struttura

```
site/
├── index.html          ← Pagina principale
├── style.css           ← Tutti gli stili
├── script.js           ← JS: countdown, mappa Mapbox, animazioni, day selector
├── photos/             ← Cartella per le foto di viaggio (day1/ … day8/)
└── .github/
    └── workflows/
        └── pages.yml   ← Deploy automatico su GitHub Pages
```

## Setup Mappa Interattiva

1. Crea un account gratuito su [mapbox.com](https://www.mapbox.com/)
2. Vai su Account → Tokens → copia il tuo Public Token
3. Apri `script.js` e sostituisci `YOUR_MAPBOX_TOKEN` con il tuo token
4. Commit e push — la mappa si attiverà automaticamente

## Aggiungere Foto di Viaggio

Le foto live vanno in `photos/dayX/` (dove X è il numero del giorno).  
Dopo aver aggiunto le foto, modifica la sezione `#live` di `index.html` per mostrarle al posto dei placeholder.

## Deploy su GitHub Pages

Il sito si pubblica automaticamente a ogni push su `main` grazie a GitHub Actions.

**Impostazioni necessarie nel repo:**
1. Settings → Pages → Source: seleziona `GitHub Actions`
2. La prima volta, vai su Actions e avvia manualmente il workflow

---

*Buon viaggio! 🐫*
