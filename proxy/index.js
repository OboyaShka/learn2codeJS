//Объекты
const person = {
    name: 'Denis',
    age: 25,
    job: 'fullstack'
}

const op = new Proxy(person, {
    get(target, prop){
        console.log('getting', prop)

        if(!(prop in target)){
            return prop
                .split('_')
                .map(p => target[p])
                .join(' ')
        }

        return target[prop]
    },
    set(target, prop, value){
        if (prop in target) {
             target[prop] = value
        } else console.log('Error')
    },
    has(target, prop){
        return ['age', 'name', 'job'].includes(prop)
    }, // 'name' in op === true
    deleteProperty(target, prop) {
        console.log('Deleting...')
        delete target[prop]
    }
})

//Функции

const log = text => `Текст => ${text}`

const fp = new Proxy(log, {
    apply(target, thisArg, argArray) {  //Таргет, контекст который передали, параментры функции
        console.log('Calling fn...')

        return target.apply(thisArg, argArray).toUpperCase()
    }
})

//Классы

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

const PersonProxy = new Proxy(Person, {
    construct(target, argArray, newTarget) {
        console.log('Construct')

        return new Proxy(new target(...argArray), {
            get(target, prop){
                console.log('Getting prop')
                return target[prop]
            }
        })
    }
})

const denis = new PersonProxy('Denis', 21)