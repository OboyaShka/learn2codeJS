const delay = ms => {
    return new Promise(r => setTimeout(() => r(), ms))
}

delay(2000).then(()=> console.log('2 sec'))

const url = 'https://jsonplaceholder.typicode.com/todos'

// function fetchTodos() {
//     console.log('Started')
//     return delay(2000)
//         .then(() => fetch(url))
//         .then(res => res.json())
// }
//
// fetchTodos().then(data => {
//     console.log(data)
// })

async function fetchAsyncTodos() {
    console.log('Started')
    try{
        await delay(2000)
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    } catch (e) {
        console.log(e)
    } finally {

    }

}

fetchAsyncTodos()