/**************
 SIMULAZIONE PROGRAMMA QUESTIONARIO 
 - ricevo l'oggetto frontEndDati dal front-end
 - simulo e recupero delle risposte corrette dal database
 - controllo le singole risposte, se corretta assegno 1 punto altrimenti 0 punti
 - restituisco il punteggio all'utente
 */

//

const frontEndDati = {
  quizType: 1,
  answers: ["gatto", "cane", "tigre", "elefante"],
  newsletter: true,
};

const quizAnimali = ["gatto", "puma", "leone", "elefante"];
const quizStoria = ["napoleone", "cleopatra", "hitler", "attila"];

function checkScore(answer, quiz) {
  let x = 0;

  answer.forEach((answe) => {
    quiz.forEach((element) => {
      if (answe === element) {
        x++;
      }
    });
  });
  return x;
}

if (frontEndDati.quizType === 1) {
  console.log("E' stato scelto il questionario Animali");
  //step 2: controllo le singole risposte, se corretta assegno 1 punto altrimenti 0 punti
  let score = 0;
  score = checkScore(frontEndDati.answers, quizAnimali);

  console.log("il punteggio è " + score);
} else if (frontEndDati.quizType === 2) {
  console.log("E' stato scelto il questionario Storia");

  let score = 0;
  score = checkScore(frontEndDati.answers, quizStoria);

  console.log("il punteggio è " + score);
} else {
  //gestisco un caso di errore
  console.log("tipologia questionario non valida");
}
