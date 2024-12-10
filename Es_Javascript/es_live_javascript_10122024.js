/**************
 SIMULAZIONE PROGRAMMA SENZA GUI (SCHERMO IN HTML)
 - aggiungere films
 - rimuovere films
 - visualizzare films
 */
//funzioni

function addMovies(newMovie, arr) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Aggiungo nuovo film...");
      if (newMovie.title && newMovie.id) {
        arr.push(newMovie);
        resolve("Ho aggiunto il film: " + newMovie.title);
      } else {
        reject("Titolo film non valido");
      }
    }, 2000);
  });
}

function deleteMovies(deleteMovies, arr) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Cancello questo film: " + deleteMovies.title);

      //   let search = arr.find((element) => element.title === deleteMovies.title);
      //   console.log(search);

      //cerco indice del film che voglio eliminare cercando per id con indexOf
      let i = arr.indexOf(deleteMovies);

      //elimino il film usando il metodo slice inserendo la posizione del film trovato ed il numero di elmenti da eliminare
      arr.splice(i, 1);

      // arr.slice(posizione dell'array, e numero elementi cancellare da quella posizione)
      resolve("Film eliminato :" + deleteMovies.title);
    }, 3000);
  });
}

function printMovies(arr) {
  console.log("Stampo nuovo film...");
  if (arr.length > 0) {
    arr.forEach((element) => {
      console.log(
        "id " + element.id + " title " + element.title + " year " + element.year
      );
    });
  } else {
    console.log("empty list");
  }
}

async function main() {
  let movies = [];

  let movie1 = { id: 1, title: "The Godfather", year: 1978 };
  let movie2 = { id: 2, year: 1978 };
  let movie3 = { id: 3, title: "Titanic", year: 1999 };
  let movie4 = { id: 4, title: "Scarface", year: 1983 };

  try {
    console.log("Avvio il programma...");

    const res = await addMovies(movie1, movies);
    console.log(res);
    const res2 = await addMovies(movie2, movies);
    console.log(res2);
    const res3 = await addMovies(movie3, movies);
    console.log(res3);
    const res4 = await addMovies(movie4, movies);
    console.log(res4);
    printMovies(movies);
    const del5 = await deleteMovies(movie3, movies);
    console.log(del5);
    printMovies(movies);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("termine programma");
  }
}

//   addMovies(movie1, movies)
//     .then((data) => {
//       console.log(data);
//       printMovies(movies);
//     })
//     .catch((error) => {
//       console.log(error);
//     });

//   addMovies(movie2, movies)
//     .then((data) => {
//       console.log(data);
//       printMovies(movies);
//     })
//     .catch((error) => {
//       console.log(error);
//     });

//   addMovies(movie3, movies)
//     .then((data) => {
//       console.log(data);
//       printMovies(movies);
//     })
//     .catch((error) => {
//       console.log(error);
//     });

//   addMovies(movie4, movies)
//     .then((data) => {
//       console.log(data);
//       printMovies(movies);
//       deleteMovies(movie1, movies)
//         .then((data22) => {
//           console.log(data22);
//           printMovies(movies);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     })
//     .catch((error) => {
//       console.log(error);
//     });

main();
