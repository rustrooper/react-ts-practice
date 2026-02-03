function delay(ms) {
	return new Promise(resolve => {
		setTimeout(resolve, ms)
	})
}

console.log('Старт скрипта')
delay(3000).then(() => console.log('выполнилось через 3 секунды'))
