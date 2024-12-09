/**************
 SIMULAZIONE PROGRAMMA SENZA GUI (SCHERMO IN HTML)
 - aggiungere libri
 - rimuovere libri
 - visualizzare libri
 - simulare una login
 */

function addBook(newBook, arr) {
    arr.push(newBook)
}

function printBooks(arr){
if (arr.length > 0){
    console.log("libri:") 
    arr.forEach(element => { 
        console.log("-id" + element.id + "-libro:" + element.book + "-autore" + element.Author + "-anno:" + element.year )
    });
} else {
    console.log("Non ci sono libri")
}
}



let books = []

console.log("Avvio programma in corso...");
printBooks(books)

console.log("Inserimento libro in corso...")
let book1 = { id: 1, book: "Il piccolo principe", Author: "Antoine", year: 1943 }
addBook(book1, books)

let book2 = { id: 2, book: "Il signore degli anelli", Author: "Tolkien", year: 1910 }
addBook(book2, books)

let book3 = { id: 3, book: "Harry Potter e la camera dei segreti", Author: "J.K. Rowling", year: 1999 }
addBook(book3, books)

console.log("Operazione eseguita con successo!")
printBooks(books)

