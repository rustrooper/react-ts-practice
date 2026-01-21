import {useEffect, useState} from 'react'

export const Clock = () => {
	const [time, setTime] = useState('00:00:00')

	useEffect(() => {
		const currentTime = () => {
			return new Date()
				.toLocaleTimeString('ru-RU', {
					hour: '2-digit',
					minute: '2-digit',
					second: '2-digit',
					hour12: false,
				})
				.slice(0, 8)
		}

		const intervalId = setInterval(() => setTime(currentTime()), 1000)

		return () => clearInterval(intervalId)
	}, [])

	return <div>Время: {time}</div>
}
