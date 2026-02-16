console.log('start')

Promise.resolve()
	.then(() => {
		console.log('promise1')
		Promise.resolve().then(() => console.log('promise2'))
	})
	.then(() => console.log('promise3'))

console.log('end')
