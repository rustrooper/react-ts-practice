// const user = {
// 	name: 'Alex',
// 	sayHi() {
// 		return 'Hello, ' + this.name
// 	},
// }

// console.log(user.sayHi())

// const user2 = {
// 	name: 'Bill',
// }

// user2.sayHi = user.sayHi

// console.log(user2.sayHi())

let user2 = {
	firstName: 'Ilya',
	lastName: 'Smirnov',
	sayHi() {
		let arrow = () => console.log(this.firstName)
		arrow()
	},
	sayBie() {
		return () => console.log('Возвращение =>', this.firstName)
	},
	fullName: () => {
		console.log(this.firstName + ' ' + this.lastName)
	},
	fdSayHi() {
		console.log(this.firstName)
	},
}

user2.sayHi()
user2.sayBie()()
user2.fdSayHi()

const test = user.sayHi
const user = {
	name: 'Alex',
	surname: 'Popov',
	// fullName: this.name + this.surname, - ошибка, this определяется в момент вызова функции, а не в момент объявления
	fullname() {
		return this.name + this.surname
	},
	// fullnameArrow: () => this.name + this.surname, - ошибка, this в стрелочной функции будет браться из внешнего контекста
}

console.log(user.fullname())
