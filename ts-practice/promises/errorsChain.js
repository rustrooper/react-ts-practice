async function stepOne() {
	return 10
}

stepOne().then(result => console.log(result))

function stepTwo(number) {
	return new Promise((resolve, reject) => {
		if (number < 5) {
			reject('Ошибка на втором шаге')
		}
	})
}

stepTwo(4).then(
	result => console.log(result),
	error => console.error('Поймана ошибка', error),
)

async function stepThree(number) {
	return number * 2
}

stepThree(4).then(result => console.log(result))
