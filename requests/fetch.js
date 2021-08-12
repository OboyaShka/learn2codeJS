
function sendRequest(method, url, body = null) {
    const headers = {
        'Content-Type':'application/json'
    }
   return fetch(url, {
       method: method,
       body: JSON.stringify(body),
       headers: headers
   }).then(response => {
       if(response.ok)
       {
           return response.json()
       }

       return response.json().then(error => {
           console.log = new Error('Что-то пошло не так')
           e.data = error
           throw e
       })
   })
}

// sendRequest('GET', requestUrl)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))



sendRequest('POST', requestUrl, body)
    .then(data => console.log(data))
    .catch(err => console.log(err))