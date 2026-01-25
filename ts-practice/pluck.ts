;(function () {
	function pluck<T, K extends keyof T>(arr: T[], key: K): T[K][] {
		return arr.map(item => item[key])
	}

	interface Person {
		name: string
		age: number
	}

	const people: Person[] = [
		{name: 'Alice', age: 30},
		{name: 'Bob', age: 25},
	]

	const users = [
		{name: 'Peter', age: 30},
		{name: 'John', age: 25, city: 'NY'},
	]

	const names = pluck(people, 'name')
	const ages = pluck(people, 'age')
	const names2 = pluck(users, 'city')

	console.log(names)
	console.log(ages)
	console.log(names2)
})()
