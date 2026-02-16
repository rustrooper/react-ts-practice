console.log('start')

Promise.resolve().then(() => {
	console.log('micro 1')
	Promise.resolve().then(() => {
		console.log('micro 2')
		Promise.resolve().then(() => console.log('micro 3'))
	})
})

setTimeout(() => console.log('timeout'), 0)

console.log('end')

//start end micro1 micro2 micro3 timeout
