/**************
 SIMULAZIONE PROGRAMMA SENZA GUI (SCHERMO IN HTML)
 - aggiungere libri
 - rimuovere libri
 - visualizzare libri
 - simulare una login
 */

let checkProcess = false

function printBooks(arr) {
    //Controllo lunghezza
    if (arr.length > 0) {
        console.log("Libri:")
        arr.forEach((book) => {
            console.log(`- Titolo: ${book.title}, Autore: ${book.author}, Anno: ${book.year}`)
        })
    } else {
        console.log("Non ci sono libri...")
    }
}

function addBook(arr, newElement) {

    console.log("Aggiunta elemento in corso...")


    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //Spread operator
            arr.push(...newElement)
            console.log("Dato inserito correttamente")
            resolve()
        }, 2000)
    })

}

async function main() {
    const books = []

    console.log("Avvio programma")
    console.log("Controllo libri in corso...")


    printBooks(books)

    try { //Aggiungo libro - perderà 2 secondi
        await addBook(books,
            [
                {id: 1, title: "Harry Potter e la Camera dei segreti", author: "J.k. Rowling", year: 2002},
                {id: 2, title: "Il Signore degli Anelli", author: "Tolken", year: 1910},
            ])


        printBooks(books)
        console.log("Chiusura programma")
    } catch (e) {
    }
}

//Avvio programma
main();
