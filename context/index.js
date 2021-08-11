function hello() {
    console.log('hi', this)
}

const person = {
    name: "Denis",
    age: 25,
    sayHello: hello,
    sayHelloWindow: hello.bind(this),
    logInfo: function (job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`job is ${job}`)
        console.log(`phone is ${phone}`)
        console.groupEnd()
    }
}

console.log(document)

const lena = {
    name: "Elena",
    age: 20
}

person.logInfo.bind(lena, 'developer', '+7000')()

person.logInfo.call(lena, 'developer', '+7000')

person.logInfo.apply(lena, ['developer', '+7000'])

//+++++++++++++++++++

const array = [1, 2, 3, 4, 5]

// function multBy(arr, n) {
//         return arr.map(function (i) {
//             return i*n
//         })
// }

Array.prototype.multBy = function(n) {
    return this.map(function (i) {
        return i*n
    })
}

console.log(array.multBy(2))