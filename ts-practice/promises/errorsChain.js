async function stepOne() {
	return 10
}

function stepTwo(number) {
	return new Promise((resolve, reject) => {
		if (number > 5) {
			reject('Ошибка на втором шаге')
		}
		resolve(number)
	})
}

async function stepThree(number) {
	return number * 2
}

async function pipeline() {
	return await stepOne()
		.then(result => stepTwo(result))
		.then(result => stepThree(result))
		.catch(error => {
			console.error('Поймана ошибка', error)
			return 0
		})
		.finally(() => console.log('Pipeline завершен'))
}

async function pipeline2() {
	try {
		const result1 = await stepOne()
		const result2 = await stepTwo(result1)
		const result3 = await stepThree(result2)
		return result3
	} catch (error) {
		console.error('Поймана ошибка2', error)
		return 0
	} finally {
		console.log('Pipeline завершен')
	}
}

pipeline().then(result => console.log(result))
pipeline2().then(result => console.log(result))

// stepOne().then(result => console.log(result))

// stepTwo(4).then(
// 	result => console.log(result),
// 	error => console.error('Поймана ошибка', error),
// )

// stepThree(4).then(result => console.log(result))
