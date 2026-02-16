import {useEffect, useReducer, useCallback} from 'react'
import {TrafficSignal} from '../TrafficSignal'
import type {TrafficSignalType, TrafficMode} from '../../types/trafficSignalTypes'
import './styles.scss'

const SIGNAL_SEQUENCE: TrafficSignalType[] = ['red', 'green', 'yellow']

const SIGNAL_DURATIONS: Record<TrafficSignalType, number> = {
	red: 5,
	yellow: 4,
	green: 5,
} as const

interface TrafficLightState {
	mode: TrafficMode
	activeSignal: TrafficSignalType
	timer: number
	isBlinking: boolean
	isEmergency: boolean
}

export type TrafficLightAction =
	| {type: 'SWITCH_MODE'; payload: TrafficMode}
	| {type: 'NEXT_SIGNAL'}
	| {type: 'UPDATE_TIMER'}
	| {type: 'EMERGENCY_STOP'}
	| {type: 'CLEAR_EMERGENCY'}
	| {type: 'SET_SIGNAL'; payload: TrafficSignalType}
	| {type: 'RESET_TIMER'}

const initialState: TrafficLightState = {
	mode: 'normal',
	activeSignal: 'red',
	timer: SIGNAL_DURATIONS.red,
	isBlinking: false,
	isEmergency: false,
}

const reducer = (state: TrafficLightState, action: TrafficLightAction): TrafficLightState => {
	switch (action.type) {
		case 'SWITCH_MODE': {
			const newMode = action.payload
			let newSignal: TrafficSignalType = 'red'
			const newTimer = SIGNAL_DURATIONS.red
			let newIsBlinking = false

			if (newMode === 'night') {
				newSignal = 'yellow'
				newIsBlinking = true
			} else if (newMode === 'emergency') {
				newSignal = 'red'
				newIsBlinking = true
			}

			return {
				...state,
				mode: newMode,
				activeSignal: newSignal,
				timer: newTimer,
				isBlinking: newIsBlinking,
				isEmergency: newMode === 'emergency',
			}
		}

		case 'NEXT_SIGNAL': {
			if (state.mode !== 'normal') return state

			const currentIndex = SIGNAL_SEQUENCE.indexOf(state.activeSignal)
			const nextIndex = (currentIndex + 1) % SIGNAL_SEQUENCE.length
			const nextSignal = SIGNAL_SEQUENCE[nextIndex]

			return {
				...state,
				activeSignal: nextSignal,
				timer: SIGNAL_DURATIONS[nextSignal],
				isBlinking: nextSignal === 'yellow' ? true : false,
			}
		}

		case 'UPDATE_TIMER': {
			if (state.timer <= 0) {
				if (state.mode === 'normal') {
					return reducer(state, {type: 'NEXT_SIGNAL'})
				}
				return state
			}
			return {
				...state,
				timer: state.timer - 1,
			}
		}

		case 'EMERGENCY_STOP':
			return {
				...state,
				mode: 'emergency',
				activeSignal: 'red',
				isBlinking: true,
				isEmergency: true,
			}

		case 'CLEAR_EMERGENCY': {
			return {...initialState, mode: 'normal'}
		}

		case 'SET_SIGNAL':
			if (state.mode !== 'normal') return state
			return {
				...state,
				activeSignal: action.payload,
				timer: SIGNAL_DURATIONS[action.payload],
			}

		case 'RESET_TIMER':
			return {...state, timer: SIGNAL_DURATIONS[state.activeSignal]}

		default:
			return state
	}
}

const initState = (initialMode: TrafficMode): TrafficLightState => {
	const state = {
		...initialState,
		mode: initialMode,
	}

	switch (initialMode) {
		case 'night':
			state.activeSignal = 'yellow'
			state.isBlinking = true
			state.timer = SIGNAL_DURATIONS.yellow
			break
		case 'emergency':
			state.activeSignal = 'red'
			state.isBlinking = true
			state.isEmergency = true
			state.timer = SIGNAL_DURATIONS.red
			break
	}

	return state
}

export interface TrafficLightProps {
	initialMode?: TrafficMode
	initialSignal?: TrafficSignalType
	className?: string
}

export const TraficLight = ({initialMode = 'normal', className = ''}: TrafficLightProps) => {
	const [state, dispatch] = useReducer(reducer, initialMode, initState)

	useEffect(() => {
		if (state.mode !== 'normal') return

		const interval = setInterval(() => {
			dispatch({type: 'UPDATE_TIMER'})
		}, 1000)

		return () => clearInterval(interval)
	}, [state.mode, dispatch])

	const handleModeChange = useCallback(
		(mode: TrafficMode) => {
			dispatch({type: 'SWITCH_MODE', payload: mode})
		},
		[dispatch],
	)

	const handleEmergencyStop = useCallback(() => {
		dispatch({type: 'EMERGENCY_STOP'})
	}, [dispatch])

	const handleClearEmergency = useCallback(() => {
		dispatch({type: 'CLEAR_EMERGENCY'})
	}, [dispatch])

	const handleManualSignalChange = useCallback(
		(signal: TrafficSignalType) => {
			if (state.mode === 'normal') {
				dispatch({type: 'SET_SIGNAL', payload: signal})
			}
		},
		[state.mode, dispatch],
	)

	function renderReducerState(data: TrafficLightState) {
		return (
			<div>
				{Object.entries(data).map(([key, value]) => (
					<div key={key}>
						<strong>{key}:</strong> {JSON.stringify(value)}
					</div>
				))}
			</div>
		)
	}

	return (
		<>
			<div className={`traffic-light ${className}`}>
				<div className='lights'>
					<TrafficSignal
						signal='red'
						label='Стоп'
						isActive={state.activeSignal === 'red'}
						isBlinking={state.isBlinking}
						blinkInterval={500}
					/>
					<TrafficSignal
						signal='yellow'
						label='Внимание'
						isActive={state.activeSignal === 'yellow'}
						isBlinking={state.isBlinking}
						blinkInterval={1000}
					/>
					<TrafficSignal signal='green' label='Путь' isActive={state.activeSignal === 'green'} />
				</div>

				<div className='timer'>Таймер: {state.timer}с</div>

				<div className='controls'>
					<button onClick={() => handleModeChange('normal')} disabled={state.mode === 'normal'}>
						Нормальный режим
					</button>

					<button onClick={() => handleModeChange('night')} disabled={state.mode === 'night'}>
						Ночной режим
					</button>

					<button onClick={handleEmergencyStop} disabled={state.mode === 'emergency'} className='emergency-btn'>
						Экстренная остановка
					</button>

					{state.isEmergency && (
						<button onClick={handleClearEmergency} className='clear-emergency-btn'>
							Сброс аварии
						</button>
					)}
				</div>

				<div className='manual-controls'>
					<p className='status'>Ручное управление (только в нормальном режиме):</p>
					<button onClick={() => handleManualSignalChange('red')} disabled={state.mode !== 'normal'}>
						Красный
					</button>
					<button onClick={() => handleManualSignalChange('yellow')} disabled={state.mode !== 'normal'}>
						Желтый
					</button>
					<button onClick={() => handleManualSignalChange('green')} disabled={state.mode !== 'normal'}>
						Зеленый
					</button>
				</div>

				<div className='status'>
					Режим: {state.mode === 'normal' ? 'Нормальный' : state.mode === 'night' ? 'Ночной' : 'Аварийный'}
				</div>
			</div>
			{renderReducerState(state)}
		</>
	)
}
