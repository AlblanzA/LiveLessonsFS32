const superHero= [{
    id: 1,
    name: "SuperMan",
    power: 2000,
    canFly: true},

    {
        id: 2,
        name: "BatMan",
        power: 3000,
        canFly: false
    }
]

function StampaHero(){
    superHero.forEach((Hero) => {
   console.log("Nome supereroe: " + Hero.name);
   console.log("Forza: " + Hero.power);
   let verifica= Hero.canFly === true ? "SI" : "NO"
   console.log("Può volare? " + verifica);
    })
}

function filter(){
   const newArray= superHero.filter((Hero) => Hero.canFly === false)
console.log(newArray)
}
StampaHero()
filter()

let newHero= {
    id: 3,
    name: "SpiderMan",
    power: 5000,
    canFly: false

}

let newHero2= {
    id: 4,
    name: "Iron Man",
    power: 7000,
    canFly: true
}

function addHero(hero){
    superHero.push(hero)
}

addHero(newHero);
addHero(newHero2);
// StampaHero()

setTimeout(() => {
    StampaHero()
}, 2000)