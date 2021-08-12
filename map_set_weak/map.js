const person = {
    name: 'Denis',
    age: 25,
    job: 'fullstack'
}

const entries = [
    ['name','Denis'],
    ['age',25],
    ['job','fullstack']
]

// console.log(Object.entries(person))
// console.log(Object.fromEntries(entries))

const map = new Map(entries)
// console.log(map.get('job'))

map
    .set('newField', 42)
    .set(person, 'Value of object')
    .set(NaN, 'NaN')

// console.log(map.get(person))
map.delete('job')

// console.log(map.has('job'))
// console.log(map.size)
// map.clear()

//=============
//
// for (let [key, value] of map){
//     console.log(key, value)
// }
//
// for (let val of map.values()){
//     console.log(val)
// }
//
// for (let key of map.keys()){
//     console.log(key)
// }
//
// map.forEach((val, key, m) => {
//     console.log(val,key, m)
// })

//================
// const array = [...map]
// // const array = Array.from(map)
// const mapObj = Object.fromEntries(map.entries())
//
// console.log(array)
// console.log(mapObj)

const users = [
    {name: 'Denis'},
    {name: 'Alex'},
    {name: 'Elena'}
]

const visits = new Map()

visits
    .set(users[0], new Date())
    .set(users[1], new Date()+1000*60)
    .set(users[2], new Date()+3000*60)

function lastVisit(user) {
    return visits.get(user)
}

// console.log(lastVisit(users[2]))