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
	function counter() {
		return (counter.count += 1)
	}

	counter.count = initial
	counter.peek = () => counter.count
	counter.set = number => (counter.count = number)
	counter.reset = () => (counter.count = initial)

	return counter
}

const c = createCounter(10)
console.log(c())
c.count = 55
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
let descriptor = Object.getOwnPropertyDescriptor(user, 'name')
console.log(descriptor)
console.log(user.sayBy())
console.log(user.sayU()())
console.log(user.sayHi())

let garage = {
	toyota: true,
	vag: false,
	amount: 3,
	visitors: [
		{name: 'Alex', age: 20},
		{name: 'Bill', age: 30},
	],
}

const clone = structuredClone(garage)
const clone2 = {...garage}
const clone3 = garage

garage.toyota = false
garage.visitors.push({name: 'Sergey', age: 40})
console.log('Глубокое копирование     ', clone)
console.log('Поверхностное копирование', clone2)
console.log('Ссылка на объект         ', clone3)
