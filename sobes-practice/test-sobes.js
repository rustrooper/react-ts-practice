// Реализовать глобальную функцию myBind (упрощенный аналог bind)

// console.log('This это:', this)
// console.log('Первый аргумент:', context)
// console.log('Второй аргумент:', args)

Function.prototype.myBind = function (context, ...args) {
	const originalFnc = this
	return (...newArgs) => originalFnc.apply(context, [...args, ...newArgs])
}

const person = {
	name: 'John',
	greet(greeting, punctuation) {
		return `${greeting}, ${this.name}${punctuation}`
	},
}

const greetPerson = person.greet.myBind(person, 'Hello', '!')
console.log(greetPerson())

console.log('-----------------------------------------')

const greetPerson2 = person.greet.myBind(person, 'GoodBye')
console.log(greetPerson2('!!!'))
