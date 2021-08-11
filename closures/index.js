// function createCalcFunction(n) {
//     return function () {
//         console.log(1000 * n)
//     }
// }
//
// const calc = createCalcFunction(5)
//
// calc()
//
// function createIncrementor(n) {
//     return function (num) {
//         return n + num
//     }
// }
//
// const addOne = createIncrementor(1)
// const addTen = createIncrementor(10)
//
// console.log(addOne(5))
// console.log(addTen(5))
//
// function urlGenerator(domain) {
//     return function (url) {
//         return `https://${url}.${domain}`
//     }
// }
//
// const comUrl = urlGenerator("com")
// const ruUrl = urlGenerator("ru")
//
// console.log(comUrl('abc'))
// console.log(ruUrl('abc'))

function bind(context, fn) {

    return function(...args){
        console.log(args)
        fn.apply(context, args)
    }
}

function logPerson(a,b) {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
    console.log(a,b)
}

const person1 = {name: 'Маша', age: 22, job: 'SMM'}
const person2 = {name: 'Иван', age: 21, job: 'MMA'}

bind(person1, logPerson)(1,2)
bind(person2, logPerson)(3,4)