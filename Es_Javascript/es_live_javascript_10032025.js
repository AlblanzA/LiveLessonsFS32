const books = []

const book2={
    
    title:"Pinocchio",
    year:1980,
    isRead: true
}

const book = {title:"Paul Coehlo", year: 1986, isRead:false};
//funzione stampa libro
function stampaLibri(){
    if(books.length>0){
        books.forEach(element => {
            console.log("Il titolo del libro è:" + element.title)
            console.log("L'anno di pubblicazione del libro è:" + element.year)
            console.log("Il libro è stato letto " + leggiLibro(element.isRead))
     });  
    }else{
        console.log("Nessun libro presente")
    }
 
}

stampaLibri()


//funzione aggiundi libro

function aggiungiLibro(libro, libro2){
    books.push(libro,libro2)
   
}

function aggiungiLibriMultiplo(...libri){
    books.push(...libri)

}

//aggiungiLibro(book2,book)
//console.log("Il libro aggiunto è:" +book2.title)
//stampaLibri()


//aggiungi più libri
aggiungiLibriMultiplo(book2,book,{title:"biancaneve", year:1988, isRead:false})
stampaLibri()


//
function leggiLibro(isRead){
    if(isRead=== true){
    return "si"
}else{
    return "no"
}
}


   function eliminaLibro(index){
    books.splice(index,1)
   }
eliminaLibro(2)
stampaLibri()
