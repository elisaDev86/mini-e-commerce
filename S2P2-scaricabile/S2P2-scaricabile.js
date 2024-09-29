// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/
// elenco utenti
const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
};

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
};

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
};

//definizione variabili costi e spedizioni
const prices = [34, 5, 2];
const shippingCost = 50;

//utente selezionato
let utenteCheEffettuaLAcquisto = amy; //cambia il valore qui per provare se il tuo algoritmo funziona!

//INIZIO SVILUPPO LOGICA ALGORITMO

//creo un array di utenti
const utenti = [];
utenti.push(marco);
utenti.push(paul);
utenti.push(amy);

function ambassador() {
  // prendo i valori inseriti dall'utente
  const nomeInput = document.getElementById("nome").value;
  const cognomeInput = document.getElementById("cognome").value;

  // inizializzare una variabile per il risultato
  let risultato = "";

  // iterazione sugli utenti
  for (let i = 0; i < utenti.length; i++) {
    const utente = utenti[i];

    // confronto nomi e cognomi
    if (utente.name.toLowerCase() === nomeInput.toLowerCase() &&
        utente.lastName.toLowerCase() === cognomeInput.toLowerCase()) {
      risultato = utente.name + " " + utente.lastName + (utente.isAmbassador ? " è ambassador" : " non è ambassador");
      break; 
    }
  }

  // risultato
  document.getElementById("risultato").innerHTML = risultato || "Utente non trovato";
}

//gestione logica costi e spedizioni
let carrello = 0;

for (let i = 0; i < utenti.length; i++) {
  carrello = 0;

  for (let j = 0; j < prices.length; j++) {
    carrello += prices[j];
  }

  //condizione se il cliente è ambassador applicare lo sconto
  function scontoApplicato(){
    if (utenti[i].isAmbassador) {
      carrello = carrello * 0.7; //sconto 30%
      document.getElementById("risultato2").innerText = 
        utenti[i].name + " " + utenti[i].lastName + " " + "ha diritto allo sconto"
      ;
    } else {
      document.getElementById("risultato2").innerText = 
        utenti[i].name + " " + utenti[i].lastName + " " + "non si applica sconto"
      ;
    }
  }
  }

  function carrelloTotale() {
    // ottenere l'importo inserito dall'utente
    const importoInserito = parseFloat(document.getElementById("totalAmount").value);
   
  
    // verifica se l'importo è superiore a 100€
    if (importoInserito > 100) {
      document.getElementById("risultato3").innerText = "Spedizione gratuita";
    } else {
      const totale = importoInserito + shippingCost;
      document.getElementById("risultato3").innerText = "Costo spedizione: " + shippingCost + "Il tuo totale è: " + totale + " euro";
    }
  }

