type Props = {
	users: unknown[]
}

const arr: unknown[] = [1, 2, 3]

if (arr instanceof Array) {
	const result = arr.map(item => {
		if (typeof item === 'number') {
			item++
		}
	})
}

function f1() {
	const student: [string, number, boolean] = ['John', 25, true]
	return student
}

f1()

interface Car {
	make: string
	model: string
	year: number
	displayInfo: () => string // Метод возвращает строку
}

const car: Car = {
	make: 'Tesla',
	model: 'Model 3',
	year: 2022,
	displayInfo: function () {
		return `text`
	},
}
console.log(car)

interface Dictionary {
	[key: string]: string //объект может иметь любые строки в качестве ключей и соответствующие им строки в качестве значений
}

const dictionary: Dictionary = {
	hello: 'привет',
	world: 'мир',
	type: 'тип',
}
console.log(dictionary)

type userProps = {
	name: string
	age: number
}
const user: userProps = {name: 'Alice', age: 25}
console.log('Тип user', typeof user)
for (const key in user) {
	console.log(key, user[key as keyof userProps])
}

Object.entries(user).forEach(([key, value]) => {
	console.log(key, value) // TypeScript знает типы!
})

interface IStudent {
	name: string
	age: number
	greet(text: string): string
}
const student: IStudent = {
	name: 'Paul',
	age: 12,
	greet(text) {
		return text
	},
}
student.greet('hi')

interface IFigure {
	height: number
	readonly width: number
}
const square: IFigure = {height: 120, width: 150}
square.height = 100
square.width = 120
interface INumberArray {
	[index: number]: string // ключи - индексы (числа), значения - строки
}
const names: INumberArray = ['Alice', 'Bob', 'Charlie']

const names2: string[] = ['Alice', 'Bob', 'Charlie']
