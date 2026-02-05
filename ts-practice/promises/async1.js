async function longOperation() {
	console.log('Начинаю долгую операцию...')
	const result = await new Promise(resolve =>
		setTimeout(() => {
			resolve('Выполнил долгую операцию')
		}, 5000),
	)
	return result
}

const operationPromise = longOperation()

console.log('Делаю что-то ещё...')
operationPromise.then(result => console.log(result))
