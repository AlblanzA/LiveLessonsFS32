let books = [{
id: 1,
title: "Harry potter",
year: 2002,
isRead: true
}]


let book = {
    id: 2,
    title: "Il signore degli anelli",
    year: 1960,
    isRead: false
}

//Creiamo una funzione per aggiungere libri all'array
function addBooks(element){
    console.log("Inserimento libro in corso...")
    books.push(element)
    console.log("Libro inserito con successo!")
}

//Creiamo una funzione per stampare i libri 
function printBooks(){
    if(books.length > 0){
    books.forEach((book) => { 
     console.log("Titolo libro: " + book.title, "Anno di pubblicazione: " + book.year, "Il libro è stato letto: " + book.isRead)
    }) 
}else {
    console.log("Non ci sono libri")
}
}

function removeBooks(index){
    console.log("Rimozione libro in corso...")
   books.splice(index, 1)
}


// printBooks()
// addBooks(book)
// printBooks()
// removeBooks(0)
// printBooks()

//Esercizio users 
const students = [
    { id: 1, name: "Luca", surname: "Rossi", age: 20, hobby: 'gamer'},
    { id: 2, name: "Mario", surname: "Bianchi", age: 24, hobby: 'sportsman'},
    { id: 3, name: "Giovanna", surname: "Brambilla", age: 26, hobby: 'gamer'},
    { id: 4, name: "Carmelo", surname: "Verdi", age: 18, hobby: 'photographer'},
    ];

    function printStudents(){
        students.forEach((student) => {
        console.log("Nome studente: " + student.name, "Cognome studente: " + student.surname)
        console.log("Età studente: " + student.age)
        if(student.hobby == 'gamer'){
         console.log("Sta giocando a gta")
        }else if(student.hobby == 'sportsman'){
            console.log("sta giocando a calcio")
        }else(
            console.log("sta scattando fotografie")
        )

        let checkAge = ageStudents()
        if(student.age == checkAge ){
            console.log("é lo studente più giovane")
        } else{
            console.log("é il più grande")
        }
        })
    }

    // printStudents()

    function ageStudents(){
        students.sort((a, b) => a.age - b.age)
        // console.log(students)
        return students[0].age
    }

    ageStudents()
   printStudents()