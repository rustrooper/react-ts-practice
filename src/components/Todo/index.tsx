import React, {useReducer, useRef} from 'react'
import type {FormEvent} from 'react'

// 1. Определяем типы
interface Task {
	id: number
	text: string
	completed: boolean
}

interface State {
	tasks: Task[]
	taskText: string
}

// 2. Определяем типы действий (actions)
type Action =
	| {type: 'ADD_TASK'}
	| {type: 'DELETE_TASK'; payload: number}
	| {type: 'TOGGLE_TASK'; payload: number}
	| {type: 'UPDATE_TASK_TEXT'; payload: string}
	| {type: 'CLEAR_COMPLETED'}

// 3. Начальное состояние с типом
const initialState: State = {
	tasks: [],
	taskText: '',
}

// 4. Редьюсер с типами
function todoReducer(state: State, action: Action): State {
	switch (action.type) {
		case 'ADD_TASK': {
			// Добавляем новую задачу. ID генерируется на основе времени
			const newTask: Task = {
				id: Date.now(),
				text: state.taskText,
				completed: false,
			}
			return {
				...state,
				tasks: [...state.tasks, newTask],
				taskText: '', // Очищаем поле ввода
			}
		}

		case 'DELETE_TASK': {
			// Удаляем задачу по ID
			return {
				...state,
				tasks: state.tasks.filter(task => task.id !== action.payload),
			}
		}

		case 'TOGGLE_TASK': {
			// Переключаем статус выполнения задачи
			return {
				...state,
				tasks: state.tasks.map(task => (task.id === action.payload ? {...task, completed: !task.completed} : task)),
			}
		}

		case 'UPDATE_TASK_TEXT': {
			// Обновляем текст в поле ввода
			return {
				...state,
				taskText: action.payload,
			}
		}

		case 'CLEAR_COMPLETED': {
			// Удаляем все выполненные задачи
			return {
				...state,
				tasks: state.tasks.filter(task => !task.completed),
			}
		}

		default: {
			// TypeScript гарантирует, что все случаи обработаны,
			// но для безопасности оставляем default
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const _exhaustiveCheck: never = action
			return state
		}
	}
}

export const TodoList: React.FC = () => {
	// 5. Инициализируем useReducer с типами
	const [state, dispatch] = useReducer(todoReducer, initialState)
	const inputRef = useRef<HTMLInputElement>(null)

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (state.taskText.trim()) {
			dispatch({type: 'ADD_TASK'})
			// Фокусируемся на поле ввода после добавления
			inputRef.current?.focus()
		}
	}

	const completedCount = state.tasks.filter(task => task.completed).length

	return (
		<div style={{maxWidth: '400px', margin: '20px auto'}}>
			<h2>Мой список задач ({state.tasks.length})</h2>

			<form onSubmit={handleSubmit}>
				<input
					ref={inputRef}
					type='text'
					value={state.taskText}
					onChange={e => dispatch({type: 'UPDATE_TASK_TEXT', payload: e.target.value})}
					placeholder='Введите новую задачу'
				/>
				<button type='submit'>Добавить</button>
			</form>

			<div style={{marginTop: '20px'}}>
				{state.tasks.length === 0 ? (
					<p>Задач пока нет. Добавьте первую!</p>
				) : (
					<ul style={{listStyle: 'none', padding: 0}}>
						{state.tasks.map(task => (
							<li
								key={task.id}
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'center',
									marginBottom: '10px',
									padding: '10px',
									border: '1px solid #ddd',
									borderRadius: '4px',
									textDecoration: task.completed ? 'line-through' : 'none',
									opacity: task.completed ? 0.7 : 1,
								}}>
								<span
									onClick={() => dispatch({type: 'TOGGLE_TASK', payload: task.id})}
									style={{cursor: 'pointer', flexGrow: 1}}>
									{task.text}
								</span>
								<button onClick={() => dispatch({type: 'DELETE_TASK', payload: task.id})} style={{marginLeft: '10px'}}>
									✕
								</button>
							</li>
						))}
					</ul>
				)}
			</div>

			{state.tasks.length > 0 && (
				<div style={{marginTop: '20px'}}>
					<p>
						Выполнено: {completedCount} из {state.tasks.length}
					</p>
					{completedCount > 0 && (
						<button onClick={() => dispatch({type: 'CLEAR_COMPLETED'})}>Очистить выполненные</button>
					)}
				</div>
			)}
		</div>
	)
}

export default TodoList
