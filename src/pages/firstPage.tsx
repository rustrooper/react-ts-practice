import {Button} from '../components/Button'
import './styles.scss'
import {NavLink} from 'react-router-dom'

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
			</form>
		</>
	)
}
