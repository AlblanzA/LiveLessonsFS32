//SEZIONE FUNZIONI

function checkPasseggers(maxPasseggers, numberPassaggers) {
  if (maxPasseggers >= numberPassaggers) {
    return "Entrano tutti i passeggeri";
  } else {
    return "Non entrano i passeggeri";
  }
}


//FINE SEZIONE FUNZIONI

const aerplanes = [
  { id: 1, model: "Boing737", passeggers: 5000 },
  { id: 2, model: "A320", passeggers: 6000 },
];

switch (aerplanes[0].model) {
  case "Boing737":
    console.log("è un aereo economico");
    break;

  case "A320":
    console.log("è un aereo di lunghe tratte");
    break;

  default:
    console.log("Modello aereo non riconosciuto");
}

aerplanes.forEach((aerplane) => {
  console.log("Controllo aereo: " + aerplane.model);
const verifyPasseggers= checkPasseggers(aerplane.passeggers, 5500);
console.log(verifyPasseggers) 
console.log("Fine controllo aereo")
});


