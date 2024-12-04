let number = 20;
let string = "ciao";
let boolean = true;
const userName = "Luca";
let array2 = ["Alberto", "Maria"];

if (number > 20) {
  console.log("ok");
} else {
  console.log("KO");
}

if (number > 20) {
  console.log("Ok");
} else if (number > 40) {
  console.log("okok");
} else {
  console.log("KO");
}

switch (number) {
  case 20:
    console.log("ok");
    break;
  case 40:
    console.log("okok");
    break;
  default:
    console.log("ko");
}
for (let i = 0; i < 10; i++) {
  console.log(i);
}

let array = [1, 2, 3, 4, 5];
array.push(6);
console.log(array);
array.forEach((item) => console.log(item));

function sommaDueNumeri(a, b) {
  return a + b;
}

const result = sommaDueNumeri(4, 7);
console.log(result);

let x = 8;
let y = 3;

sommaDueNumeri(x, y);

const cars = [
  { id: 1, brand: "Bmw", name: "x6", type: "Suv", km: 1000 },
  { id: 2, brand: "Peugeot", name: "3008", type: "Suv", km: 3000 },
];

function checkTypeBrand(type) {
  if (type === "Suv") {
    return "l'auto è un suv";
  } else if (type === "Berlina") {
    return "l'auto è una berlina";
  } else {
    return "tipologia auto non riconosciuta";
  }
}

console.log("inizio controllo auto");

cars.forEach((car) => {
  console.log(car.name);
  const checktype = checkTypeBrand(car.type);
  console.log(checktype);
});

function checkKm(km) {
  if (km >= 1000 && km <= 1999) {
    return "l'auto è nuova";
  } else if (km > 2000) {
    return "l'auto è vecchia";
  } else {
    return "km non validi";
  }
}

cars.forEach((car) => {
  console.log(car.name);
  const checKilometri = checkKm(car.km);
  console.log(checKilometri);
});

cars.push({ id: 3, brand: "Audi", name: "A5", type: "berlina", km: 3000 });
console.log(cars);

let newCars = cars.filter((car) => car.type === "Suv");
console.log(newCars);
