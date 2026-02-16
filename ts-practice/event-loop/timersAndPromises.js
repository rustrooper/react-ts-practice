setTimeout(() => console.log('t1'), 50) // 6
setTimeout(() => console.log('t2'), 10) // 3

Promise.resolve()
	.then(() => {
		console.log('p1') // 2
		return new Promise(resolve => {
			setTimeout(() => {
				console.log('t3') // 4
				resolve()
			}, 30)
		})
	})
	.then(() => console.log('p2')) // 5

console.log('sync') // 1

// sync, p1, t2, t3, p2, t1
