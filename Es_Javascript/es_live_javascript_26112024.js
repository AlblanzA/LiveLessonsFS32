const users = [
  { id: 1, nome: "Canio", eta: 23, isLogged: true },
  { id: 2, nome: "Alberto", eta: 23, isLogged: true },
  { id: 3, nome: "Natascia", eta: 25, isLogged: true },
];

console.log(users);

switch (users[1].nome) {
  case "Alberto":
    console.log("Sei Alberto");
    break;

  case "Giovanni":
    console.log("Ciao Giovanni");
    break;

  default:
    console.log("Undefined");
}
console.log("xx-x-x-x-x-xx-x-");

//controllo se un utente dell'array users NON  è loggato
const findUserNotLogged = users.filter((user) => user.isLogged === false);
// console.log(findUserNotLogged);
// console.log(findUserNotLogged.nome + " Non sei loggato");

//messaggio verrà stampato solo nel caso in cui abbia dei risultati della condizone definita
if (findUserNotLogged && findUserNotLogged.length > 0) {
  findUserNotLogged.forEach((element) => {
    console.log(element.nome + " Non sei loggato xxxxx");
  });
}

console.log("xx-x-x-x-x-xx-x-");
users.forEach((user) => {
  //sfoglio gli utenti
  if (user.isLogged === false) {
    //stabilisco la condizone di selezione
    console.log(user.nome + " Non sei loggato"); //stampo nome utente + stringa
  }
});
