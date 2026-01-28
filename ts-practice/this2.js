function Person(name) {
	this.name = name
	this.sayHi = function () {
		console.log(`Hi, I'm ${this.name}`)
	}
}

const john = new Person('John')
john.sayHi()
// console.log(john)

function Person2(name) {
	return {
		name: name,
		sayHi: function () {
			console.log(`Hi, I'm ${this.name}`)
		},
	}
}

const alex = Person2('Alex')
alex.sayHi()
console.log(alex)

function Person3(name) {
	return () => {
		console.log(`Hi, I'm ${name}`)
	}
}

const bob = Person3('Bob')
bob()

function Person4(name) {
	return function () {
		console.log(`Hi, I'm ${name}`)
	}
}

const bill = Person4('bill')
bill()
console.log(bill)
