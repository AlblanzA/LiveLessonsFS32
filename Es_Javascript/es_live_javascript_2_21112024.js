//webapp questionario

//simulo i dati ricevuti dal front-end

const frontEndDati = {
  quizType: 1,
  answers: ["gatto", "cane", "tigre", "elefante"],
  newsletter: true,
};
//controllo se le risposte dell'utente sono corrette
//controllo se la risposta è corretta aggiungo +1 al punteggio dell'utente altrimenti 0

//step 1: simulo e recupero delle risposte corrette dal database

const quizAnimali = ["gatto", "puma", "leone", "elefante"];
const quizStoria = ["napoleone", "cleopatra", "hitler", "attila"];

if (frontEndDati.quizType === 1) {
  console.log("E' stato scelto il questionario Animali");
  //step 2: controllo le singole risposte, se corretta assegno 1 punto altrimenti 0 punti
  let score = 0;
  //   score = 5;
  const userAnswers = frontEndDati.answers;
  //   userAnswers === quizAnimali
  userAnswers.forEach((userAnswer) => {});

  console.log("il punteggio è " + score);
} else if (frontEndDati.quizAnimali === 2) {
  console.log("E' stato scelto il questionario Storia");
} else {
  //gestisco un caso di errore
  console.log("tipologia questionario non valida");
}
