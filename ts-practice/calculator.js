const calculator = {
	read(a, b) {
		this.a = a
		this.b = b
	},
	sum() {
		return this.a + this.b
	},
	mul() {
		return this.a * this.b
	},
}

calculator.read(5, 10)
console.log(calculator.sum())
console.log(calculator.mul())

const obj = {}
obj.read = calculator.read
obj.sum = calculator.sum
obj.read(2, 4)
console.log(obj.sum())
