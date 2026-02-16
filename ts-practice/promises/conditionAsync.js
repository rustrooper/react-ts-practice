function getUserSettings(isLoggedIn) {
	return isLoggedIn
		? new Promise(resolve => setTimeout(() => resolve({theme: 'dark', language: 'en'}), 1000))
		: Promise.reject('User is not logged in')
}

console.log(getUserSettings(true))

getUserSettings(false)
	.then(result => console.log(result))
	.catch(error => console.error('Поймана ошибка', error))
