let number = 20;
let string = "ciao";
let boolean = true;
const userName = "Luca";
let array2 = ["Alberto", "Maria"];

if (number > 20) {
  console.log("ok");
} else {
  console.log("KO");
}

if (number > 20) {
  console.log("Ok");
} else if (number > 40) {
  console.log("okok");
} else {
  console.log("KO");
}

switch (number) {
  case 20:
    console.log("ok");
    break;
  case 40:
    console.log("okok");
    break;
  default:
    console.log("ko");
}
for (let i = 0; i < 10; i++) {
  console.log(i);
}

let array = [1, 2, 3, 4, 5];
array.push(6)
console.log(array)
array.forEach((item)=>console.log(item))


function sommaDueNumeri(a, b){
    return a+b
}

const result=sommaDueNumeri(4,7)
console.log(result)

let x=8
let y=3

sommaDueNumeri(x,y)

