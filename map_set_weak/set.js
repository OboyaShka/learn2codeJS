const set = new Set([1, 2, 3, 3, 4, 5, 6, 6, 6])

set.add(10)

// console.log(set)
// console.log(set.has(10))
// console.log(set.size)
// console.log(set.delete(1))
// console.log(set.clear())

// console.log(set.entries())
// console.log(set.keys())
//
// for (let key of set){
//     console.log(key)
// }

function uniqValues(array) {
    return [...new Set(array)]
}
//
// console.log(uniqValues([1, 1, 2, 2, 3, 4, 5, 5]))