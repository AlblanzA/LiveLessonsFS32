let day = "monday";

switch (day) {
  case "monday":
    console.log("è lunedi");
    break;

  case "tuesday":
    console.log("è martedi");
    break;

  default:
    console.log("undefined");
}

let ageUser = 20;
if (ageUser > 18) {
  console.log("sei maggiorenne")
}
else {
  console.log("sei minorenne")
}

if (ageUser > 10 && ageUser < 17 ) {
  console.log("sei un bambino")
}
else if (ageUser > 18) {
  console.log("sei maggiorenne")
} else {
  console.log("sei un neonato")
}

let number = 10;
for ( let y = 5; y <= number; y++) {
console.log(y)
}

function message () {
  console.log("stampa messaggio")
}

message()

function sumNumbers(a, b, c) {
  return a + b + c 
}
let results =  sumNumbers ( 13, 12, 15 )
console.log(sumNumbers(3,2,5))
console.log(results) 

const days = ["lunedi", "martedi", "mercoledi", "giovedi"]
console.log(days[1])