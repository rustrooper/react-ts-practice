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

let user = {
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

user.sayHi()
user.sayBie()()
user.fdSayHi()

const test = user.sayHi
