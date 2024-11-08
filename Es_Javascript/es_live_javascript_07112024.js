let nameUser = "natascia"
let ageUser = 22
let isLogged = true
let dayOfWeek = 111

//verifico se l'utente è loggato 
if (isLogged === true) {
    console.log("is logged")

    //verifico l'età dell'utente loggato 
    if (ageUser > 18) {
        console.log("sei maggiorenne")

    } else {
        console.log("sei minorenne")
    }


    // verifico il giorno della settimana
    switch (dayOfWeek) {
        case 0:
            console.log("è lunedi")
            break
        case 1:
            console.log(" è martedi")
            break
        case 2:
            console.log(" è mercoledi")
            break
        case 3:
            console.log(" è giovedi")
            break
        case 4:
            console.log(" è venerdi")
            break
        case 5:
            console.log(" è sabato")
            break
        case 6:
            console.log(" è domenica")
            break
        default:
            console.log(" giorno della settimana non valido")
        }
    
    
        }else {
        console.log("accedi per continuare")
    }
