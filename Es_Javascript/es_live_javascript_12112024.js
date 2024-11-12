let nameUser= "canio"
let ageUser= 23
let nameUser2=  "giovanni"
let isLogged= true

function printMex(){
    console.log("Stampa messaggio della callback")
}

//FUNZIONE CON LA CALLBACK COME PARAMETRO
function checkIfUserIsLogged(checklogged, callback) {
    if (checklogged==true) {
        console.log("Login Ok")
    }
    else {
        console.log("Login No")
    
    }
    callback()
    
}

checkIfUserIsLogged (isLogged, printMex)

