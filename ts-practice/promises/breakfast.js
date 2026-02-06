function makeCoffee() {
	return new Promise(resolve => {
		setTimeout(() => resolve('кофе готов'), 1000)
	})
}

function fryEggs() {
	return new Promise(resolve => {
		setTimeout(() => resolve('яичница готова'), 1000)
	})
}

function toastBread() {
	return new Promise(resolve => {
		setTimeout(() => resolve('тосты готовы'), 1000)
	})
}

makeCoffee()
	.then(result => {
		console.log(result)
		return fryEggs()
	})
	.then(result => {
		console.log(result)
		return toastBread()
	})
	.then(result => {
		console.log(result)
		console.log('Завтрак готов')
	})
