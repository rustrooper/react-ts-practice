let user = {
	name: 'Alex',
	surname: 'Pereira',

	get fullName() {
		return `${this.name} ${this.surname}`
	},

	set fullName(value) {
		;[this.name, this.surname] = value.split(' ')
	},
}

console.log(user.fullName)

let admin = {
	__proto__: user,
	isAdmin: true,
}

console.log(admin.fullName)

admin.fullName = 'Alice Cooper'

console.log('User', user.name, user.surname)
console.log('Admin', admin.name, admin.surname)

function Employee(name, birthday) {
	this.name = name
	this.birthday = birthday

	Object.defineProperty(this, 'age', {
		get() {
			let todayYear = new Date().getFullYear()
			return todayYear - this.birthday.getFullYear()
		},
	})
}

let john = new Employee('John', new Date(1996, 10, 11))
console.log(john.birthday)
console.log(john.age)
