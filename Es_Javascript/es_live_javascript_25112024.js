const user = {
  name: "canio",
  age: 23,
};

console.log(user.name);

switch (user.name) {
  case "canio":
    console.log("Ciao Canio");
    break;

  case "Natascia":
    console.log("Ciao Natascia");
    break;

  default:
    console.log("Undefined");
}
