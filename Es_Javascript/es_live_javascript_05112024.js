let nameUser = "canio" //stringa
let ageUser = 23 //intero
let isLogged = true // boolean
let yearUser = "1994"
let ageUser2 = 30

console.log("start program")
console.log(nameUser)

//cambio il valore di nameUser
nameUser = 5
console.log(nameUser)

console.log(ageUser)
console.log(isLogged)
console.log(nameUser, ageUser, isLogged)
console.log(nameUser + ageUser)
console.log("sono nata il 17 settembre" + yearUser)
//utilizzo Number() per convertire la variabile da stringa ad intero
console.log(String(ageUser) + Number(yearUser))

//per conoscere e stampare il tipo di variabile utilitto tyopeof()
console.log(typeof (ageUser))

//confronto le variabili
console.log(ageUser == ageUser2)
console.log(ageUser != ageUser2)
console.log(ageUser > ageUser2)
console.log(ageUser < ageUser2)
console.log(ageUser <= ageUser2)
console.log(ageUser >= ageUser2)

let check = ageUser > ageUser2
console.log ("il valore è :" + check)

//operazioni di incremento e decremento
let sum = ageUser + 1
console.log (sum)
console.log("inizio incremento e decremento")
console.log(ageUser)
ageUser++
console.log (ageUser)
ageUser--
console.log (ageUser--)
console.log("fine incremento e decremento")
console.log("end program")