class Validator {
	static rules = {isEmail: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, minLength: 8}
	static isEmail(str) {
		return this.rules.isEmail.test(str)
	}
	static isLength(str, min = this.rules.minLength) {
		return str.length >= min
	}

	// constructor(str) {
	// 	this.str = str
	// }

	validate(str, type) {
		switch (type) {
			case 'email':
				return Validator.isEmail(str)
			case 'length':
				return Validator.isLength(str)
			default:
				console.log('Неизвестный тип проверки')
				return false
		}
	}
}

console.log(Validator.isEmail('test@mail.com'))

const newValidator = new Validator()
console.log(newValidator.validate('ssdasdssssssssssssssss', 'length'))
