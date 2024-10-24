/*Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Potete usare liste, input e bottoni non stilizzati, mettendo stampe di debug in console e risultato finale in un alert.
Solo una volta finito, a piacere e facoltativamente, potete aggiungete lo stile.
NOTA:  non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
BONUS
Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.
Consigli del giorno
Pensate prima in italiano.
Dividete in piccoli problemi la consegna.
Individuate gli elementi di cui avete bisogno per realizzare il programma.
Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array" */

// Genera numeri casuali e li visualizza
let randomNumbers = [];
const numbersContainer = document.getElementById("numbers-container");
const inputContainer = document.getElementById("input-container");
const submitBtn = document.getElementById("submit-btn");

// Funzione per generare numeri casuali univoci
function generateRandomNumbers() {
  while (randomNumbers.length < 5) {
    let num = Math.floor(Math.random() * 100) + 1;
    if (!randomNumbers.includes(num)) {
      randomNumbers.push(num);
    }
  }
}

// Mostra i numeri casuali e inizia il timer di 30 secondi
function showRandomNumbers() {
  generateRandomNumbers();
  numbersContainer.innerHTML = `<p>${randomNumbers.join(" - ")}</p>`;
  console.log("Numeri da ricordare: ", randomNumbers);

  // Dopo 30 secondi i numeri scompaiono e appare l'input
  setTimeout(() => {
    numbersContainer.style.display = "none";
    inputContainer.style.display = "block"; // Mostra il contenitore input
  }, 0); // 30 secondi
}

showRandomNumbers();

// Controlla i numeri inseriti dall'utente
function checkNumbers() {
  let userNumbers = [
    parseInt(document.getElementById("input1").value),
    parseInt(document.getElementById("input2").value),
    parseInt(document.getElementById("input3").value),
    parseInt(document.getElementById("input4").value),
    parseInt(document.getElementById("input5").value),
  ];

  let correctNumbers = userNumbers.filter((num) => randomNumbers.includes(num));
  console.log("Numeri inseriti dall'utente: ", userNumbers);
  console.log("Numeri corretti: ", correctNumbers);

  alert(
    `Hai indovinato ${
      correctNumbers.length
    } numeri corretti: ${correctNumbers.join(", ")}`
  );
}


submitBtn.addEventListener("click", checkNumbers);
