let fetchData1 = () => new Promise(resolve => setTimeout(() => resolve('Данные 1'), 1000))
let fetchData2 = () => new Promise(resolve => setTimeout(() => resolve('Данные 2'), 500))
let fetchData3 = () => new Promise(resolve => setTimeout(() => resolve('Данные 3'), 800))

async function timeWrapper(asyncAction) {
	const start = performance.now()
	await Promise.all(asyncAction.map(fn => fn())).then(result => {
		console.log('Результат выполнения промисов', result)
		console.log('Времени прошло (сек)', ((performance.now() - start) / 1000).toFixed(2))
	})
}

const fetchArr = [fetchData1, fetchData2, fetchData3]

timeWrapper(fetchArr)
