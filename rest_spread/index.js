const citiesRussia = ['Москва', 'Екатеринбург', 'Санкт-Петербург']
const citiesEurope = ['Берлин', 'Париж', 'Прага']

const cityRussiaPopulation = {
    Moskow: 20,
    Ekaterinburg: 25,
    SP: 14
}

const cityEuropePopulation = {
    Berlin: 30,
    Paris: 15,
    Praga: 54
}

//Spread

// console.log(...citiesRussia)
//
// const allCities = [...citiesRussia]
//
// console.log({...cityRussiaPopulation, ...cityEuropePopulation})

// const numbers = [5,37,32,16]
// console.log(Math.max(...numbers))

const divs = document.querySelectorAll('div')
const nodes = [...divs]
console.log(nodes)

//Rest

function sum(a, b, ...rest) {
    console.log(rest)
    return a + b + rest.reduce((a, i) =>  a + i,0)
}

const numbers = [1, 2, 3, 4, 5]

console.log(sum(...numbers)) //Spread!

// const a = numbers[0]
// const b = numbers[0]

const [a, b, ...other] = numbers

console.log(a, b, other)

const person = {
    name: 'Max',
    age: 22,
    city: 'Ekaterinburg'
}

const {name, age, ...address} = person

console.log( name, age, address)