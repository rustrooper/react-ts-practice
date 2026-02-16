async function async1() {
	console.log('async1 start') // 2
	await async2()
	console.log('async1 end') // 6
}

async function async2() {
	console.log('async2') // 3
}

console.log('script start') // 1

setTimeout(() => console.log('setTimeout'), 0) // 8

async1()

new Promise(resolve => {
	console.log('promise1') // 4
	resolve()
}).then(() => console.log('promise2')) // 7

console.log('script end') // 5

// scriptstart async1 start scriptend async2 async1end promise1 promise2 setTimeout
