function loadUserData(userId) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (typeof userId === 'number') {
				resolve({id: userId, name: 'Joe Joe'})
			} else {
				reject('Error. Invalid user Id')
			}
		}, 1000)
	})
}

async function run() {
	try {
		const user = await loadUserData('tt')
		console.log(user)
	} catch (err) {
		console.error('Ошибка async', err)
	}
}

run()
