// Esercizio: SILULAZIONE DI UNA APP TO DO

/********
 * Creare un'applicazione TODOLIST dove possiamo aggiungere, rimuovere e visualizzare le attività
 * Ogni attività ha queste keys: title, text, id, asCompleted
 *  *****/

const toDo = [];

function stampaAttivita() {
  console.log("Stampa in corso...");
  if (toDo.length > 0) {
    toDo.forEach((element) => {
      let statoAttivita = controlloAttivita(element.asCompleted);
      console.log(
        "Titolo attivita: " + element.title,
        "Descrizione attivita: " + element.text,
        "Attivita completata: " + statoAttivita
      );
    });
  } else {
    console.log("Non ci sono attivita disponibili");
  }
}

stampaAttivita();

//Creo la funzione che aggiunge un'attivita

function aggiungiAttivita(item) {
  console.log("Inserimento attività in corso...");
  toDo.push(item);
  console.log("Attività inserita");
}

aggiungiAttivita({
  id: 1,
  title: "lista della spesa",
  text: "comprare",
  asCompleted: true,
});
aggiungiAttivita({
  id: 2,
  title: "andare in palestra",
  text: "esercizi",
  asCompleted: false,
});
stampaAttivita();

let nuovaAttivita = {
  id: 3,
  title: "cucinare",
  text: "pasta",
  asCompleted: true,
};
aggiungiAttivita(nuovaAttivita);
stampaAttivita();

//creo una funzione che verifica se un'attivita è completata o meno, ritornando "SI" se è true e "No" se è false
function controlloAttivita(statoAttivita) {
  if (statoAttivita === true) {
    return "Si";
  } else {
    return "No";
  }
}

// creo una funzione che elimina un'attivita dall'indice che riceve
function rimuovereAttivita(index) {
  if (toDo.length > 0) {
    let rimuovere = toDo.splice(index, 1);
    console.log(rimuovere);
    console.log("Cancellazione avvenuta con successo");
  } else {
    console.log("Non ci sono attivita");
  }
}

rimuovereAttivita(0);
stampaAttivita();
rimuovereAttivita(0);
stampaAttivita();
rimuovereAttivita(0);
stampaAttivita();
rimuovereAttivita(0);
stampaAttivita();
rimuovereAttivita(0);
stampaAttivita();
