const requestUrl = 'https://jsonplaceholder.typicode.com/users'

function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) =>{
        const xhr = new XMLHttpRequest()

        xhr.open(method, url)
        xhr.setRequestHeader('Content-Type','application/json')

        xhr.responseType = 'json'

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else
                resolve(xhr.response)
            // console.log(JSON.parse(xhr.response))
        }

        xhr.onerror = () => {
            reject(xhr.response)
        }
        if (body === null)
            xhr.send()
        else xhr.send(JSON.stringify(body))

    })
}

// sendRequest('GET', requestUrl)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

const body = {
    name: 'Denis'
}

sendRequest('POST', requestUrl, body)
    .then(data => console.log(data))
    .catch(err => console.log(err))