// const obj = {
// 	name: 'Alex',
// 	getName() {
// 		return this.name
// 	},
// }

// const fn = obj.getName.bind(obj)

// console.log(fn())

// const obj = {
// 	name: 'Alex',
// 	getName: () => this.name,
// }

// console.log(obj.getName())

// Реализовать глобальную функцию myBind (упрощенный аналог bind)

// Function.prototype.myBind = function (context, ...args) {
//   return function (context){

//   }
// }

// Что выведет код?

// console.log(1);

// Promise.resolve().then(() => console.log(2));

// console.log(3);

// 132

// async function test() {
// 	return 5
// }

// test().then((res)=> console.log(res))

console.log('1')

setTimeout(() => console.log('2'), 0)

queueMicrotask(() => console.log('3'))

Promise.resolve()
	.then(() => {
		console.log('4')
		setTimeout(() => console.log('5'), 0)
	})
	.then(() => console.log('6'))
;(async () => {
	console.log('7')
	await Promise.resolve()
	console.log('8')
})()
console.log('9')

//179348625
