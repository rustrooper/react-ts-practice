interface IPerson {
	name: string
	age: number
	greet(name: string, age: number): void
}

interface IEmployee extends IPerson {
	position: string
	salary: number
	work(position: string, salary: number): string
}

function createEmployee({name, age, position, salary}: IEmployee) {
	return {
		name,
		age,
		position,
		salary,

		greet(): void {
			console.log(`Приветствую ${name}, тебе ${age} лет`)
		},

		work(): string {
			return `Твоя работа ${this.position}, с зарплатой ${this.salary}`
		},
	}
}

const obj = {
	name: 'dan',
	age: 29,
	position: 'sss',
	salary: 100,
	greet(): void {},
	work(): string {
		return `Твоя работа ${this.position}, с зарплатой ${this.salary}`
	},
}

createEmployee(obj)

// const employee: IEmployee = {
// 	name: 'Dan',
// 	age: 29,
// 	position: 'developer',
// 	salary: 100,

// 	greet(): void {
// 		console.log(`Приветствую ${this.name}, тебе ${this.age} лет`)
// 	},

// 	work(): string {
// 		return `Твоя работа ${this.position}, с зарплатой ${this.salary}`
// 	},
// }

interface Pair<T, U> {
	[key: number]: T | U
}

const pair: Pair<string, number> = {123: 'Age', 333: 30}
console.log(pair)

function getLength<T extends {length: number}>(arg: T): number {
	return arg.length
}

console.log(getLength([1]))

interface Repository<T> {
	get(id: number): T
	save(item: T): void
}

interface Cacheable {
	cached: boolean
	cacheTime: Date
}

type CachedRepository<T> = Repository<T> & Cacheable

const userRepo: CachedRepository<{id: number; name: string}> = {
	get(id) {
		return {id, name: 'John'}
	},
	save(item) {
		console.log('Saved:', item)
	},
	cached: true,
	cacheTime: new Date(),
}

console.log(userRepo.get(1))
console.log(userRepo.save({id: 1, name: 'ddd'}))

function logArray<T>(arr: T[]): void {
	console.log(arr)
}
logArray([1, 2, 3])
logArray(['1', '2', '3'])

type bucket = {
	fruits: string
	vegetables: string
	candies: number
}

type bucket2 = {
	vegetables: string
}

const myBucket: bucket = {
	fruits: 'apple',
	vegetables: 'onion',
	candies: 10,
}

const myBucket2: Omit<bucket, keyof bucket2> = {
	fruits: 'pineapple',
	candies: 100,
}

const myBucket3: Pick<bucket, keyof bucket2> = {
	vegetables: 'cucumber',
}

const myBucket3: Record<keyof bucket, boolean> = {
	vegetables: false,
	candies: true,
	fruits: false,
}
