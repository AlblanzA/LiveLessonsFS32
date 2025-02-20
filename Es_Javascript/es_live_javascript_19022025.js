let cars = [
  {
    model: "3008",
    brand: "Peageot",
    km: 54000,
  },
  {
    model: "Grande Punto",
    brand: "Fiat",
    km: 200000,
  },
  {
    model: "x3",
    brand: "BMW",
    km: 120000,
  }
];

function stampaCars() {
  cars.forEach((car) => {
    console.log(
      "Nome modello: " + car.model,
      "Nome brand: " + car.brand,
      "KM totali: " + car.km
    );
    let controlloKM = verificaKM(car.km)
    let nazionalità = verificaNazionalità(car.brand)
  });
}

stampaCars();

let car = {
  model: "500",
  brand: "Fiat",
  km: 100000,
};

function addCar(element) {
  console.log("Inserimento in corso...");

  cars.push(element);
  console.log("Inserimento avvenuto con successo!");
}

// addCar(car);
// stampaCars();

setTimeout(() => {
  addCar(car), stampaCars();
  countFiat();
}, 3000);

//creare una funzione che stampa il numero di auto con brand Fiat
function countFiat() {
  const Fiat = cars.filter((car) => car.brand == "Fiat");
  console.log("Il numero delle macchine Fiat è: " + Fiat.length);
}

countFiat();

//Creare una funzione che verifica i km ricevuti e restituisce se è necessario fare il tagliando o meno

function verificaKM(kilometri) {
  if (kilometri > 60000) {
    console.log("Fare tagliando");
  } else if (kilometri > 100000 && kilometri < 200000) {
    console.log("L'auto è da vendere");
  } else {
    console.log("L'auto è Ok");
  }
}

//Creare una funzione che controlla il brand ricevuto e restituisce la sua nazionalità 

function verificaNazionalità(brand){
    if(brand == "Fiat"){
        console.log("L'auto è italiana")
    }else if(brand == "Peageot"){
        console.log("L'auto è francesce")
    }else{
        console.log("Modello auto non riconosciuto")
    }
}

//Creare una funzione per eliminare una vettura dell'array

function removeCar(element){
let newArray = cars.splice([1], 1); // 2nd parameter: il primo parametro da dove deve partire e il secondo quanti ne deve eliminare
console.log(newArray)
}

removeCar()