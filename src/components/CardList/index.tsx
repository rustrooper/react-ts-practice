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
	// const [list, setList] = useState(users)
  
	const sort = function () {
		// const sorted = list.map(user => user)
		setList(list.sort(()=>()))
	}

	return (
		<>
			<button onClick={sort}>Сортировка</button>
			<ul>
				{users.map(user => (
					<li
						key={user.id}>{`Пользователь ${user.name}, возраст ${user.age}, дата активности ${user.lastActiveAt}`}</li>
				))}
			</ul>
		</>
	)
}
