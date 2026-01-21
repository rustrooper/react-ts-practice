import './styles.scss'
import {NavLink} from 'react-router-dom'
import {Button} from '../components/Button'
import {Clock} from '../components/Clock'

export const FirstPage = () => {
	return (
		<>
			<form
				className=''
				action=''
				onSubmit={e => {
					e.preventDefault()
				}}>
				<input placeholder='Ввведите данные'></input>
				<button type='submit'>Отправить данные</button>
				<NavLink to='/solution'>Solution</NavLink>
				<Button tag='button' variant='main'>
					Перейти
				</Button>
				<Clock />
			</form>
		</>
	)
}
