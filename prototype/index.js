// const person = {
//     name: "Max",
//     age: 25,
//     greet: function () {
//         console.log("greet")
//     }
// }

const person = new Object({
        name: "Max",
        age: 25,
        greet: function () {
            console.log("greet")
        }
    }
)

Object.prototype.sayHello = function () {
    console.log('Say hello!')
}

const lena = Object.create(person)

const str = new String('I am string')