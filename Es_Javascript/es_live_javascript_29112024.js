const cars = [
  { id: 1, brand: "Ferrari", model: "California", km: 10000, isHybrid: true },
  { id: 2, brand: "Alfa Romeo", model: "Stelvio", km: 20000, isHybrid: false },
  { id: 3, brand: "Renault", model: "Clio", km: 30000, isHybrid: true },
];

/******* SEZIONE DEDICATA ALLE FUNCTION ******/

function checkKilometers(kilometers) {
  switch (true) {
    case kilometers <= 10000:
      return "la macchina è nuova";

    case kilometers >= 20000 && kilometers <= 29999:
      return "la macchina è vecchia";

    case kilometers <= 30000:
      return "la macchina è da buttare";

    default:
      return "km non validi";
  }
}

function isHybridOrNot(isHybrid) {
  if (isHybrid === true) {
    return "è ibrida";
  } else {
    return "non è ibrida";
  }
}

function addCar(array, newData) {
  array.push(newData);
}

/******* FINE SEZIONE DEDICATA ALLE FUNCTION ******/

let x = checkKilometers(cars[0].km); //solo oggetto [0] dell'array cars
console.log(x);

cars.forEach((car) => {
  console.log("xxxxxxxxx");
  console.log("controllo vettura:  " + car.brand + " " + car.model);
  console.log(checkKilometers(car.km)); //tutti gli oggetti di cars
  console.log(isHybridOrNot(car.isHybrid));
  console.log("fine controllo vettura  " + car.brand + " " + car.model);
  console.log("xxxxxxxxx");
});

cars.push({
  id: 4,
  brand: "Lamborghini",
  model: "Aventator",
  km: 40000,
  isHybrid: true,
});
console.log(cars);

addCar(cars, {
  id: 5,
  brand: "Fiat",
  model: "GrandePunto",
  km: 50000,
  isHybrid: false,
});

addCar(cars, {
  id: 6,
  brand: "Volswaghen",
  model: "Golf",
  km: 60000,
  isHybrid: true,
});
console.log(cars);

console.log("xxxxxxxxxxxxxxx");

const newCars = cars.filter((car) => car.isHybrid === true);
console.log(newCars);
