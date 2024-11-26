const users = [
  { id: 1, nome: "Canio", eta: 23 },
  { id: 2, nome: "Alberto", eta: 23 },
  { id: 3, nome: "Natascia", eta: 25 },
];

console.log(users);

switch (users[1].nome){
    case "Alberto":
        console.log("Sei Alberto")
        break

        case "Giovanni":
        console.log("Ciao Giovanni")
        break

        default:
            console.log("Undefined")
}