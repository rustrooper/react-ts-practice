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

interface INumberArray {
	[index: number]: string // ключи - индексы (числа), значения - строки
}
const names: INumberArray = ['Alice', 'Bob', 'Charlie']

const names2: string[] = ['Alice', 'Bob', 'Charlie']
