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

let longEar = {
	earLength: 10,
	__proto__: rabbit,
}

// rabbit.__proto__ = animal
console.log(rabbit.eats)
rabbit.walk()
console.log(longEar.jumps)
