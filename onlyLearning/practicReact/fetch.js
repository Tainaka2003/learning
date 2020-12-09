const requestURL = 'https://jsonplaceholder.typicode.com/users'
// XHR


function sendRequest(method, url, body = null) {
	return new Promise( (resolve, reject) => {

		const xhr = new XMLHttpRequest()

		xhr.open(method, url)

		xhr.responseType = 'json' //json in console with action with js
		xhr.setRequestHeader('Content-Type', 'application/json')

		xhr.onload = () => {
			if (xhr.status >= 400) {
				reject(xhr.response)
			} else {
				resolve(xhr.response)
				//console.log(xhr.response) //string
				//console.log(JSON.parse(xhr.response)) //json in console
			}
		}

		xhr.onerror = () => {
			reject(xhr.response) //work with error
		}

		xhr.send(JSON.stringify(body))
	})
}

// sendRequest('GET',requestURL)
// 	.then(data => console.log(data))
// 	.catch(err => console.log(err))

const body = {
	name: 'Dimos',
	age: 22
}

sendRequest('POST',requestURL, body)
	.then(data => console.log(data))
	.catch(err => console.log(err))