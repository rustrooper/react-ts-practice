class Book {
	constructor(title, author, year) {
		this.title = title
		this.author = author
		this.year = year
	}

	getInfo() {
		return `Название: ${this.title}, Автор: ${this.author}, Год: ${this.year}`
	}

	getAge() {
		return new Date(Date.now()).getFullYear() - this.year
	}
}

const newBook = new Book('Отцы и дети', 'Кто-то', '1920')

console.log(newBook.getInfo())
console.log(newBook.getAge())
