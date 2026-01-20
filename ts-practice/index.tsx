type Props = {
	users: unknown[]
}

const arr: unknown[] = [1, 2, 3]

if (arr instanceof Array) {
	const result = arr.map(item => {
		if (typeof item === 'number') {
			item++
		}
	})
}

function f1() {
	const student: [string, number, boolean] = ['John', 25, true]
	return student
}

f1()
