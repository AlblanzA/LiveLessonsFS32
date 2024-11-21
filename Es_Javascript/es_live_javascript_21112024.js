const users = [
    {
        id:1,
       name: "maria",
       age: 20,

    },
    {
        id:2,
        name: "giovanni",
        age: 30,
    }, 
    {
        id:3,
        name:"canio",
        age:31,
    },
]

// let user1 = users[0].name
switch (users[0].name) {
    case "maria":
        console.log("sei maria")
        break

        case "giovanni":
        console.log("sei giovanni")
        break

        default:
        console.log("undefined")
}

if (users[1].age > 18) {
    console.log("La tua età è " + users[1].age + " anni")
}
// console.log(users[1].id)
// console.log(users[1].name)

users.forEach ( user => {
console.log("Mi chiamo " + user.name + " ed ho " + user.age)
if(user.age>=30) {
    console.log(user.name.toUpperCase())
}
})

const newUsers= users.some((user)=> user.age >=30)
console.log(newUsers)

const addAge = users.reduce((a, user)=> a+ user.age, 0)
console.log(addAge)