const item1 = { id: 1, brand: "apple", name: "iphone 18X", quantity: 100 };
const warehouse = [];

//INIZIO FUNZIONI
//crea una funzione che aggiunge elementi all'array
function add(arr, elements) {
  arr.push(elements);
  return arr;
}

function checkAvailability(arr, qt) {
  return arr.filter((element) => element.quantity >= qt);
}

function printElements(arr) {
  arr.forEach((element) => {
    console.log("- nome: " + element.name + " , quantity: " + element.quantity);
  });
}

function sum(quantity, somma) {
  return quantity + somma;
}

//FINE FUNZIONI

const results = add(warehouse, item1);

const item2 = { id: 2, brand: "samsung", name: "galaxy S20", quantity: 150 };
add(warehouse, item2);
add(warehouse, { id: 3, brand: "lg", name: "televisione", quantity: 200 });

console.log("inizio controllo magazzino");
console.log("elenco elementi contenuti nel magazzino: ");

let somma = 0;

// warehouse.forEach((element) => {
//    console.log("- nome: " + element.name + " , quantity: " + element.quantity)
// //   somma = somma + element.quantity
// somma += element.quantity
// })

warehouse.forEach((element) => {
  somma = sum(element.quantity, somma);
});

printElements(warehouse);
console.log(checkAvailability(warehouse, 200));
console.log("totale elementi contenuti nel magazzino: " + warehouse.length);
console.log("quantità in magazzino: " + somma);
