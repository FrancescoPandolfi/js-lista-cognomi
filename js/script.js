var cognomeUtente = prompt("Inserisci il tuo cognome").toUpperCase();
var cognomi = ["CORSINI", "GRAZIANI", "ADAMO", "NICOLINI", "FURLAN", "GOBBI", "SCALA", "FALCO", "VISCONTI"];
var i = 0;

// Aggiunge la stringa inserita dall'utente alla fine dell'array
cognomi.push(cognomeUtente);

// Organizzo i cognomi in ordine alfabetico
cognomi.sort();

// Questo ciclo scrive tutti i cognomi nell'HTML uno dopo l'altro
while (i < cognomi.length) {
  document.getElementById('lista_cognomi').innerHTML += "<li>" + cognomi[i] + "</li>\n"

  // E scrive la posizione del cognome inserito dall'utente
  if (cognomeUtente == cognomi[i]) {
    document.getElementById('posizione').innerHTML += i + 1 + " della lista.";
  }
  i++;
}
