class User {
	constructor(name) {
		this.name = name
	}

	get name() {
		return this._name
	}

	set name(value) {
		if (value.length < 4) {
			console.log('Имя слишком короткое')
			return
		}
		this._name = value
	}
}

let user = new User('Иван')
console.log(Object.getOwnPropertyDescriptor(User.prototype, 'constructor'))
console.log(Object.getOwnPropertyDescriptor(User, 'constructor'))
console.log(Object.getOwnPropertyDescriptor(User, 'name'))
console.log(user)
user.name = 'Pavel'
console.log(user.name)
console.log(user._name)

// let UserObj = {
// 	get name() {
// 		return this._name
// 	},

// 	set name(value) {
// 		if (value.length < 4) {
// 			console.log('Имя слишком короткое')
// 			return
// 		}
// 		this._name = value
// 	},
// }

console.log('-------------------------')

function UserFnc(name) {
	this.name = name
}

Object.defineProperty(UserFnc.prototype, 'name', {
	get: function () {
		return this._name
	},
	set: function (value) {
		if (value.length < 4) {
			console.log('Имя слишком короткое')
			return
		}
		this._name = value
	},
})

let user2 = new UserFnc('Jack')
console.log(Object.getOwnPropertyDescriptor(UserFnc.prototype, 'name'))
console.log(Object.getOwnPropertyDescriptor(UserFnc, 'name'))
console.log(user2)
