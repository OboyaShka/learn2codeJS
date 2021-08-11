const person = Object.create(
    {
    calculateAge() {
        console.log(new Date().getFullYear() - this.birthYear)
    }
}, {
    name: {
        value: 'Denis',
        enumerable: true,   //Делает поле "видимым"
        writable: true,  //Возможность изменять
        configurable: true //Возможность удалить
    },
    birthYear: {
        value: 1999
    },
    age: {
        get(){
            return new Date().getFullYear() - this.birthYear
        },
        set(value){
            console.log(`set age ${value}`)
        }
    }
})

const personDef = {
    name: 'Denis',
    birthYear: 1999
}

const personObj = new Object({
    name: 'Denis',
    birthYear: 1999
})

console.log(person)
console.log(personDef)
console.log(personObj)

person.name = 'Dennis'

for (let key in person){
    if (person.hasOwnProperty(key))
        console.log(key)
}