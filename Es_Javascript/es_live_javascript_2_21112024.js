//webapp questionario 

//simulo i dati ricevuti dal front-end

const frontEndDati= {
    quizType: 1,
    answers: ["gatto" , "cane" , "tigre", "elefante"],
    newsletter: true,
}
//controllo se le risposte dell'utente sono corrette
//controllo se la risposta è corretta aggiungo +1 al punteggio dell'utente altrimenti 0

//step 1: simulo e recupero delle risposte corrette dal database

const quizAnimali = ["gatto" , "puma" , "leone" , "elefante"]
const quizStoria = ["napoleone" , "cleopatra" , "hitler" , "attila"]

if (frontEndDati.answers === quizAnimali) {}