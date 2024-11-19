let user = "Canio";
let age = 23;
let isYoung = true;

switch (user) {
  case "Canio":
    console.log("Mi chiamo" + user);
    break;

  case "Alberto":
    console.log("Mi chiamo" + user);
    break;

  default:
    console.log("Mi chiamo" + user + "La mia età è" + age );
}

if (age > 18 ) {
    console.log("Sei maggiorennexxxxxxxxxxxx")
}
else {
    console.log("Sei minorenne")
}

if (age > 10 && age <18 ) {
    console.log("Sei un bambino")
}
else if (age > 18) {
    console.log("Sei maggiorenne")
}

else {
    console.log("Sei un neonato")
}

const number = 10 
for(let i=0 ; i <=number ; i++) {
    console.log(i)
}

function stampaMessaggio () {
    console.log("Stampa messaggio")
}
stampaMessaggio()


function somma (a, b, c, d) {
    console.log(a + b + c + d)
}
somma (10, 20, 30 , 40)


function somma2 (a, b) {
    return (a + b)
}
// console.log(somma2 (1, 2))

const sum3= somma2 (1, 3)
console.log(sum3)

const sum = somma2 (1, 2)
console.log (sum)

const sum2 = somma2 (2,3) + 10
console.log(sum2)

const somma3 = (a, b) => a + b
// const add= somma3 (10, 20)
// console.log(add)
console.log(somma3(10,20))



const weight = [1, 70, 4, 90];
let myAge ="La mia età è " + weight[1] + " anni"
console.log(myAge)

