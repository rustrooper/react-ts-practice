let animal = {
	eats: true,
	sleep: false,
}

function Rabbit(name) {
	this.name = name
}

console.log(Rabbit.prototype.constructor == Rabbit)

// Rabbit.prototype.eats = false
Object.assign(Rabbit.prototype, animal)

console.log('Прототип prototype:', Rabbit.prototype)

let rabbit = new Rabbit('White Rabbit')
console.log('Прототип __proto__', rabbit.__proto__)

let rabbit2 = new rabbit.constructor('BlackRabbit')
console.log(rabbit)
console.log(rabbit2)

console.log(rabbit2.__proto__)
