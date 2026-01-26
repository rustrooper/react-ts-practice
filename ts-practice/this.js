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
