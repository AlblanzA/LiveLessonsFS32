const cars = [
  { id: 1, brand: "Ferrari", model: "California", km: 50000, isHybrid: true },
  {
    id: 2,
    brand: "Lamborghini",
    model: "Aventador",
    km: 40000,
    isHybrid: true,
  },
  {
    id: 3,
    brand: "Lamborghini",
    model: "Gallardo",
    km: 60000,
    isHybrid: false,
  },
];
// let brand = "Ferrari";
switch (cars[0].brand) {
  case "Ferrari":
    console.log("L'auto è una ferrari");
    break;

  case "Lamborghini":
    console.log("L'auto è una lamborghini");
    break;

  default:
    console.log("Modello non conosciuto");
}

if (cars[0].km > 100000) {
  console.log("L'auto è consumata");
} else if (cars[0].km <= 50000) {
  console.log("La macchina è buona");
} else {
  console.log("Chilometri non definiti");
}

if (cars[0].km > cars[1].km) {
  console.log(
    "La vettura " +
      cars[0].brand +
      " " +
      cars[0].model +
      " è più vecchia di" +
      cars[1].brand +
      " " +
      cars[1].model
  );
}

if (cars[2].isHybrid == true) {
  console.log("La vettura è ibrida");
} else {
  console.log("La vettura non è ibrida");
}

console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxx");

function checkIsHybrid(batman) {
  if (batman == true) {
    return "la vettura è ibrida";
  } else {
    return "la vettura non è ibrida ";
  }
}

let check = checkIsHybrid(cars[1].isHybrid);
console.log(check);

cars.forEach((car) => {
  let check2 = checkIsHybrid(car.isHybrid);
  console.log(check2);
  let check3 = checkBrand(car.brand);
  console.log(check3);
});

function checkBrand(superman, callback) {
  switch (superman) {
    case "Ferrari":
      return "L'auto è una ferrari";
      break;

    case "Lamborghini":
      return "L'auto è una lamborghini";
      break;

    default:
      callback();
      return "Modello non conosciuto";
  }
}
function StampaMessaggio(messaggio) {
  console.log(messaggio);
}
function StampaMessaggio2() {
  console.log("io sono la callback2");
}
checkBrand(3, StampaMessaggio2);

function sommaDueNumeri(a, b, callback) {
  let sum = a + b;

  callback(sum);
}
sommaDueNumeri(2, 10, StampaMessaggio);
