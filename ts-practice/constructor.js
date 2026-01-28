// function Person(name, age) {
// 	this.name = name
// 	this.age = age
// }

// const me = new Person('Alex', 31)

// console.log(me)

// Person.prototype.hello = function () {
// 	console.log(`Hello from ${this.name}`)
// }

// console.log(me)
// me.hello()

// function createPerson(name, age) {
// 	return {
// 		name,
// 		age,
// 	}
// }

// const me2 = createPerson('Daniil', 29)

// // console.log(me)

// createPerson.prototype.hello = function () {
// 	console.log(`Hello from ${this.name}`)
// }

// console.log('Объект 2', me2)

// me2.hello()

let f1 = new Function('a', 'b', 'return a + b')

console.log(f1(2, 3))
