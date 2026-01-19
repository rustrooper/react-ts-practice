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
				<button type='submit'>Отправить данные</button>
				<NavLink to='/solution'>Solution</NavLink>
			</form>
		</>
	)
}
