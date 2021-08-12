let obj1 = {name: 'weakmap'}

// obj = null

// console.log(obj)

const mapWeak = new WeakMap([
    [obj1, 'obj data']
])
//get set delete has
// obj1 = null
//
// console.log(mapWeak)
//
// const cashe = new WeakMap()
//
// function casheUser(user) {
//     if (!cashe.has(user)){
//         cashe.set(user, Date.now())
//     }
//     return cashe.get(user)
// }
//
// let lena = {name: 'Elena'}
// let alex = {name: 'Alex'}
//
// casheUser(lena)
// casheUser(alex)
//
// lena = null
//
// console.log(cashe)