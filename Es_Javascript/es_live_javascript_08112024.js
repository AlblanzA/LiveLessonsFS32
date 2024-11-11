let nameUser = "canio";
let ageUser = 23;
let ageUser2 = 10;
let isLogged = true;
let y = 5;

if (isLogged) {
  console.log("sei loggato");

  //richiamo la funzione passando il parametro ageUser
  checkUserAge(ageUser);

  //funzione di test
  stampaMessaggio();

  //richiamo la funzione passando il parametro ageUser2
  checkUserAge(ageUser2);

  addNumber(5, 10);
} else {
  console.log("accedi per continuare");
}

//creo la funzione per verificare l'età dell'utente
function checkUserAge(parametroPassato) {
  console.log("inizio controllo età");
  if (parametroPassato >= 18) {
    console.log("sei maggiorenne");
  } else {
    console.log("sei minorenne");
  }
  console.log("fine controllo età");
}

function stampaMessaggio() {
  console.log("funzione di test");
}

//creo una funzione per sommare 2 numeri
function addNumber(number1, number2) {
  let somma = number1 + number2;
  console.log(somma);
}
