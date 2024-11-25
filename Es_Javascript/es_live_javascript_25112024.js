const user = {
  name: "canio",
  age: 23,
};

console.log(user.name);

switch (user.name) {
  case "canio":
    console.log("Ciao Canio");
    break;

  case "Natascia":
    console.log("Ciao Natascia");
    break;

  default:
    console.log("Undefined");
}

if (user.age > 18) {
  console.log ("sei maggiorenne")
}
else {
console.log("sei minorenne") 
}


if (user.age > 10 && user.age < 18) {
  console.log("sei un bambino")
}
else if (user.age > 18) {
  console.log("sei maggiorenne")
}
else {
  console.log("sei un ninfante")
} 

const numbers = [ 1, 2 ,3, 4]

function sum(a, b) {
return a + b 
}
let result = sum(numbers[1], numbers[3])
//console.log(sum(numbers[1], numbers[3])) 
console.log(result / 2 )

for (let i=0; i <= 10; i++){
  console.log(i)
}

const object = [ 
  { name: "canio",
    age: 23,
  },

  {
    name: "alberto",
    age: 24,
  }

]

console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")


console.log("il mio nome è" + ' ' + object[1].name)
for (let indice in object) {
  console.log(object[indice].name)

  //verifico ogni nome trovato se cè giovanni 
  if (object[indice].name == "giovanni") {
    console.log("c'è giovanni")
  } else {
    console.log("giovanni non è presente, lo inserisco")
    // inserisco nell'array di oggetti l'oggetto giovanni 
    object.push({name: "giovanni", age: 25})
 console.log("inserimento avvenuto con successo")
  }
}
console.log(object)