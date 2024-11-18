let number = 2;
let name = "Paolo";
let bolean = true;

if (number > 5) {
  console.log(number);
} else {
  console.log("il numero è minore di 5");
}

if (name == "Paolo") {
  console.log("OK");
} else if (name == "Giovani") {
  console.log("okok");
} else {
  console.log("okokok");
}

switch (number) {
  case 1:
    console.log(number + 10);
    break;
  case 2222:
    console.log("il mio numero è " + number);
    break;
  default:
    console.log("il numero non è definito");
}

let name2 = "Paolo";

switch (name2) {
  case "Paolo":
    console.log("ok");
    break;
  case "Alberto":
    console.log("okok");
    break;
  default:
    console.log("okokok");
}

let number3 = 11;

for (let i = 0; i <= number3; i++) {
  console.log(i);
}

function stampaMessaggio() {
  console.log("Stampa Messaggio");
}

stampaMessaggio();

function somma(a, b, c, d) {
  return a + b + c + d;
}

let result = somma(4, 2, 5, 8);
console.log(result + 10);
