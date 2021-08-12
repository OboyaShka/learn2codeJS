const usersSet = [
    {name: 'Denis'},
    {name: 'Alex'},
    {name: 'Elena'}
]

const visitsSet = new WeakSet()

visitsSet.add(usersSet[0]).add(usersSet[1])

usersSet.splice(0,1)

console.log(visitsSet.has(usersSet[0]))
console.log(visitsSet.has(usersSet[1]))