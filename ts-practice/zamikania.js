// 1) Задача: реализуй createCounter(initial) так, чтобы:
// counter() увеличивал значение и возвращал новое
// counter.peek() возвращал текущее без изменения
// counter.reset() сбрасывал к initial
// counter.set(n) устанавливал значение
// Пример:

// const {count} = require('console')

// const c = createCounter(10);
// c();        // 11
// c();        // 12
// c.peek();   // 12
// c.set(100); // 100
// c();        // 101
// c.reset();  // 10
// c.peek();   // 10

function createCounter(initial) {
	let count = initial

	const counter = function () {
		return (count += 1)
	}

	counter.peek = () => count
	counter.set = number => (count = number)
	counter.reset = () => (count = initial)

	return counter
}

const c = createCounter(10)
console.log(c())
console.log(c())
console.log(c.set(20))
console.log(c())
console.log(c())

const s = createCounter(10)
console.log(s())
console.log(c())

// const peek = function () {
// 	return count
// }

console.log('---------------------------')

const name = 'Bill'
let wrapper = {
	name: 'Alex',
	user: {
		name: 'John',
		sayBy: function () {
			return 'Good by, ' + name
		},
		sayU: function () {
			return () => {
				return 'Wrapper.user.sayU => this: Hello, ' + this.name // this берется из внешней стрелочной функции
			}
		},
	},
}
console.log(wrapper.user.sayU()())

let user = {
	name: 'John',
	sayBy: function () {
		return 'Good by, ' + name
	},
	sayU: function () {
		return () => {
			return 'Arrow! Hello, ' + this.name
		}
	},
}

function sayHi() {
	return 'Hello, ' + this.name
}

user.sayHi = sayHi
console.log(user.sayBy())
console.log(user.sayU()())
console.log(user.sayHi())
