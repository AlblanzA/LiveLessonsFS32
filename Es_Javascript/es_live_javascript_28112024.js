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
    console.log ( "L'auto è consumata")
}
else if(cars[0].km <=50000){
    console.log("La macchina è buona")
}
else {
    console.log("Chilometri non definiti")
}

if (cars[0].km > cars[1].km) {
    console.log("La vettura " + cars[0].brand + " " + cars[0].model + " è più vecchia di" + cars[1].brand + " " + cars[1].model)
}

if (cars[2].isHybrid==true) {
    console.log("La vettura è ibrida")
} else {
    console.log("La vettura non è ibrida")
}

function checkIsHybrid