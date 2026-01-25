import {Button} from '../components/Button'
import './styles.scss'
import {NavLink} from 'react-router-dom'
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
				<Button tag='button' variant='main' href='aaaa'>
					Отправить данные
				</Button>
				<NavLink to='/solution'>Solution</NavLink>
				<Button tag='button' variant='main'>
					Перейти
				</Button>
				<Clock />
			</form>
		</>
	)
}
