// Есть список пользователей формата:

import {useState} from 'react'

// id
// name
// возраст
// последняя активность

// Пример:

// const users = [
//   { id: 1, name: "Alex", age: 25, lastActiveAt: "2024-01-01" },
//   { id: 2, name: "John", age: 30, lastActiveAt: "2024-02-01" },
//   { id: 3, name: "Bob", age: 20, lastActiveAt: "2023-12-01" }
// ];

// Нужно реализовать компонент, который:

// Отображает список пользователей
// Имеет input для поиска по имени
// Имеет select для выбора поля сортировки
// Имеет toggle для направления сортировки
// Использует корректную типизацию TypeScript
// Не мутирует исходный массив users
// Использует key правильно

type User = {
	id: number
	name: string
	age: number
	lastActiveAt: string
}

interface Props {
	users: User[]
}

export const CardList = ({users}: Props) => {
	const [list, setList] = useState(users)
	const [sortWay, setSortWay] = useState('asc')
	const [sortField, setSortField] = useState<keyof User>('name')

	const handleSort = function (sortWay: string, sortField: string) {
		// switch ()
		if (sortWay === 'asc') {
			setList(list.sort((a, b) => a.name.localeCompare(b.name)))
			setSortWay('desc')
		} else if (sortWay === 'desc') {
			setList(list.sort((a, b) => b.name.localeCompare(a.name)))
			setSortWay('asc')
		}
	}

	return (
		<>
			<select value={sortField} onChange={e => setSortField(e.target.value)}>
				<option value='name'>Имя</option>
				<option value='age'>Возраст</option>
			</select>
			<button onClick={() => handleSort(sortWay, sortField)}>Сортировка</button>
			<ul>
				{list.map(user => (
					<li
						key={user.id}>{`Пользователь ${user.name}, возраст ${user.age}, дата активности ${user.lastActiveAt}`}</li>
				))}
			</ul>
		</>
	)
}
