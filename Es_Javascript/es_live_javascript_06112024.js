let x = 1
let y = 2

let conf1 = x > y
let conf2 = x < y
let conf3 = 10 > 3
let conf4 = x <= y

//GLI OPERATORI LOGICI

// && o ||
console.log(conf1 && conf2 && conf3 && conf4)  // AND
console.log(conf1 || conf2 || conf3 || conf4)  // OR

// !()  
console.log(!conf3)

//IF - ELSE CONDIZIONI
console.log("inizio condizioni")
if (5 > 11) {
    console.log("dentro if")
} 
console.log("fuori if")

let canioAge=18

// if (canioAge <18){
//     console.log("sei minorenne")
// } else {
//     console.log("sei maggiorenne")
// }
// IF - ELSE IF - ELSE
let albertoAge=4

if (albertoAge <18 && albertoAge >10  ) { 
    console.log("sei adolescente")
} else if (albertoAge <5) {
    console.log("sei un bambino")
}else {
    console.log("sei maggiorenne")
}


