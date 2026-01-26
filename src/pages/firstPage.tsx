import {Button} from '../components/Button'
import './styles.scss'
import {NavLink} from 'react-router-dom'
import {Clock} from '../components/Clock'

export const FirstPage = () => {
	return (
		<div className='wrapper'>
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
			</form>
			<NavLink to='/solution1'>Solution</NavLink>
			<Button className='button' tag='button' variant='main'>
				Перейти
			</Button>
			<Clock />
			<div>{[1, 2, 3, 4]}</div>
		</div>
	)
}
