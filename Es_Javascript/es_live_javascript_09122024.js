/**************
 SIMULAZIONE PROGRAMMA SENZA GUI (SCHERMO IN HTML)
 - aggiungere libri
 - rimuovere libri
 - visualizzare libri
 */
//funzioni
 function addBook (newBook, arr){
    console.log("Inserimento libro in corso...")
    if(newBook.id && newBook.name && newBook.Author && newBook.year){
        arr.push(newBook)
        console.log("Operazione riuscita")
    } else {
        console.log("Formato data errato")
    }

 }

 function addBookAsync(newBook, arr){
console.log("Inserimento libri in corso...")
return new Promise((resolve, reject) => {
setTimeout(() => { 
    if(newBook.id && newBook.name && newBook.Author && newBook.year){
        arr.push(newBook)
        resolve("Operazione riuscita")
    } else if(Array.isArray(newBook)){
        arr.push(...newBook) //Uso spead Operator per pushare solo i valori dell'array dentro l'array
        resolve("Operazione riuscita")
    }
     else {
        reject("Formato data errato")
    }

}, 3000)
})
 }



console.log("Avvio programma...")
 //array
 const books = []
 let book1 = { id: 1, name: "Il signore degli anelli", Author: "Tolkien", year: 1954}
//  addBook(book1, books)
 console.log(books)

 let book2 = { id: 2, name: "Harry Potter", Author: "J.K. Rowling,", year: 2000}





addBookAsync([book2, book1], books).then((data) => {
 console.log(data)
 console.log(books)
}).catch((error) => {  
console.log(error)
})


//  addBook("cane", books)
//  console.log(books)
