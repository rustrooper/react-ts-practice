class User {
	static count = 0

	constructor(name) {
		this._name = name
		User.count++
	}

	get name() {
		return this._name
	}

	chirik() {
		console.log('Chick')
	}

	static getCount() {
		return User.count
	}
}

const user1 = new User('Anna')
const user2 = new User('Bob')

console.log(User.getCount())
console.log(User.prototype)
