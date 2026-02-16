import {CardList} from '../components/CardList'
import {TodoList} from '../components/Todo'

const users = [
	{id: 1, name: 'Alex', age: 25, lastActiveAt: '2024-01-01'},
	{id: 2, name: 'John', age: 30, lastActiveAt: '2024-02-01'},
	{id: 3, name: 'Bob', age: 20, lastActiveAt: '2023-12-01'},
]

export const SecondPage = () => {
	return <div>{<CardList users={users}></CardList>}</div>
}
