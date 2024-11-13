//scope delle variabili
let sport = " Football";
function canPlay() {
  let personName;

  if (true) {
    personName = "Cosimo";
  }

  console.log(personName + sport);
}

canPlay();

console.log(sport);

//object

let user = {
  name: "giovanni",
  age: 10,
  surname: "sorrenti",
};
if (user.age > 18) {
  console.log("Sei Maggiorenne");
} else {
  console.log("Sei minorenne");
}
console.log("Il mio nome è " + user.name, user.age, user.surname);

//for in

for (let key in user) {
  console.log(key);
}
console.log(user);

//value vs reference

let user2 = {
  name: "Cosimo",
  age: 30,
};

//let newUser = user2;
//utilizzo spread operator ...
let newUser = {
  ...user2,
};

newUser.name = "Paolo";

console.log(newUser);
console.log(user2);

//ciclo l'oggetto e assegno i singoli valori a un'altro oggetto(simile a spread operator)
let newUser2 = {};
for (let key in user2) {
  newUser2[key] = user2[key];
}
newUser2.name = "Carlo";
console.log(newUser2);

switch (user.name) {
  case "Paolo":
    console.log("Ciao Paolo");
    break;
  case 33:
    console.log("Sei maggiorenne");
    break;
  case "giovanni":
    console.log("Ciao Giovanni");
    break
  default:
    console.log("Dato non definito");
}

//arrow function(consigliato usare const invece di let)
const stampaMessaggio=(messaggiop) => console.log (messaggiop)
stampaMessaggio("Ciao")

const addNumber=(a,b) => a+b 
addNumber (1,1) 
stampaMessaggio(addNumber(1,1))

// se l'arrow function va a capo su più righe devo usare le graffe {}

const stampaMessaggio2=() => {
console.log("test1")
console.log("test2")
}
stampaMessaggio2()

const addNumber2= (a,b,c, callback) => {
    callback(a+b+c)
}
addNumber2(1,2,3, stampaMessaggio)



















let user3= {
    name:"Canio",
    age:23
}
if (user3.age>18) {
    console.log("Sei maggiorenne")
} else {
    console.log("Sei minorenne")
}
function stampaUtente() {
console.log(user3.name)
}
function stampaUtente2(nome) {
    console.log(nome)
}
stampaUtente2 ("kevin")

const addNumber3=(a,b) => a+b
addNumber3 (1,3)
console.log (addNumber3(1+3))