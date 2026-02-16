class BankAccount {
	#balance = 0
	_pin = 0
	constructor(initialBalance, pin) {
		this._pin = pin
		this.#balance = initialBalance
	}

	getBalance(pin) {
		return this._pin === pin ? this.#balance : console.log('Неверный пин')
	}

	deposit(amount) {
		this.#balance += amount
	}

	withdraw(amount, pin) {
		if (this._pin === pin && this.#balance >= amount) {
			this.#balance -= amount
			console.log(`Деньги сняты, ваш баланс: ${this.#balance}`)
		} else {
			console.log('Ошибка операции')
		}
	}
}

const myAccount = new BankAccount(1000, 537)

console.log(myAccount.getBalance(537))
myAccount.deposit(500)
myAccount.withdraw(1200, 537)
