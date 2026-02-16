class CoffeeMachine {
	#waterLimit = 200
	#waterAmount = 0

	get waterAmount() {
		this.#checkWater(this.#waterAmount)
		return this.#waterAmount
	}

	set waterAmount(value) {
		if (value < 0) throw new Error('Отрицательный уровень воды')
		this.#waterAmount = value
	}

	#checkWater(value) {
		if (value < 0) throw new Error('Отрицательный уровень воды')
		if (value > this.#waterLimit) throw new Error('Слишком много воды')
	}
}

let coffeeMachine = new CoffeeMachine()
// coffeeMachine.#waterLimit = 1000

coffeeMachine.waterAmount = -1

// console.log(coffeeMachine.checkWater)

console.log(coffeeMachine.waterAmount)
