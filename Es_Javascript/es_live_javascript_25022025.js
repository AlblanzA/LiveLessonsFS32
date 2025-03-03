// ESERCIZIO CONSEGNA:

/*
Crea un array chiamato "users" che contiene oggetti, dove ogni oggetto rappresenta un utente con proprietà come "name", "age" e "isActive".
Scrivi una funzione filterAndSortUsers che filtra gli utenti attivi (isActive: true) e ordina l'array in base all'età (dal più giovane al più anziano).
Scrivi una funzione processUserData che prende come argomento l'array "users" e due callback: una per filtrare e ordinare i dati e una per visualizzare l'array risultante.
Usa setInterval per eseguire processUserData ogni 5 secondi, passando come argomento l'array "users" e le due callback.
Aggiungi un timeout che ferma l'intervallo dopo 25 secondi.
Usa il destructuring per accedere alle proprietà dell'oggetto utente all'interno delle callback.
Utilizza lo spread operator per creare nuove versioni dell'array quando necessario.
Usa lo spread parameter per passare un numero arbitrario di utenti a una funzione che esegue un'operazione su
 tutti gli utenti.*/

 const users = [{
    name : "Giovanni",
    age: 30,
    isActive: true,
 },
 {
    name: "Alberto",
    age: 35,
    isActive: false
 },
 {
    name: "Natascia",
    age: 22,
    isActive: true 
 }
]

function filterAndSortUsers(arrayFilterAndSort){
    let userFilter = arrayFilterAndSort.filter(user => user.isActive == true)
    // console.log(userFilter)
let sortUser = userFilter.sort((a, b) => a.age - b.age)
//    console.log(sortUser)
   return sortUser
}


function printUsers(arrayToPrint){
    arrayToPrint.forEach((user) =>{
        console.log("Nome utente: " + user.name, "Età utente: " + user.age, "Utente attivo: " + user.isActive)
    })
}

function processUserData(array, callbackFilter, callbackPrint){
    //step 1 filtro e ordino l'array ricevuto
    let risultato = callbackFilter(array)
    //step 2 stampo l'array filtrato
    callbackPrint(risultato)
    

}

processUserData(users, filterAndSortUsers, printUsers)

let interval = setInterval(() => {
    processUserData(users, filterAndSortUsers, printUsers)
}, 5000)

setTimeout(() => {
clearInterval(interval)
}, 25000)


const users2 = [{
    name : "John",
    age: 30,
    isActive: true,
 },
 {
    name: "Tomas",
    age: 35,
    isActive: false
 },
 {
    name: "Mary",
    age: 22,
    isActive: true 
 }
]



const newUsers = [...users, {name: "Luca", age: 20, isActive: true}]

processUserData(newUsers, filterAndSortUsers, printUsers)

function processMultiple(...arrays){
    console.log(arrays)
    arrays.forEach((arr) => {
    arr.forEach((item) => {
      console.log("Nome utente: " + item.name, "Età utente: " + item.age, "utente attivo " + item.isActive)
     })
    })
}

processMultiple(users, newUsers)
