let animal = {
	eats: true,
	walk() {
		console.log('Animal Walk')
	},
}

let rabbit = {
	// eats: false,
	jumps: true,
	__proto__: animal,
}

// rabbit.__proto__ = animal
console.log(rabbit.eats)
rabbit.walk()
// console.log(longEar.jumps)

let longEar = {
	earLength: 10,
	__proto__: rabbit,
}

let descriptor = Object.getOwnPropertyDescriptor(longEar, 'earLength')
console.log(descriptor)
Object.defineProperty(longEar, 'earLength', {writable: true, configurable: false})
descriptor = Object.getOwnPropertyDescriptor(longEar, 'earLength')
console.log(descriptor)

longEar.earLength = 11
Object.defineProperty(longEar, 'earLength', {writable: false})
descriptor = Object.getOwnPropertyDescriptor(longEar, 'earLength')
console.log(descriptor)

// Object.defineProperty(longEar, 'earLength', {writable: true})
