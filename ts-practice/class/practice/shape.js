class Shape {
	constructor(name) {
		this.name = name
	}
	name2 = 'test'
	static name3 = 'test'

	getArea() {
		return `Площадь фигуры ${this.name} не определена`
	}
}

class Circle extends Shape {
	constructor(name, radius) {
		super(name)
		this.radius = radius
	}

	getArea() {
		return `Площадь круга: ${(Math.PI * this.radius ** 2).toFixed(2)}`
	}
}

const newCircle = new Circle('круг1', 10)

console.log(newCircle.getArea())
