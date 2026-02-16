import React, {useEffect, useState} from 'react'
import type {TrafficSignalType} from '../../types/trafficSignalTypes'

interface TrafficSignalProps {
	signal: TrafficSignalType
	label: string
	isActive: boolean
	isBlinking?: boolean
	blinkInterval?: number
}

export const TrafficSignal = React.memo(
	({signal, label, isActive, isBlinking = false, blinkInterval = 1000}: TrafficSignalProps) => {
		const [isVisible, setIsVisible] = useState(true)

		useEffect(() => {
			if (!isActive || !isBlinking) {
				return
			}

			const interval = setInterval(() => {
				setIsVisible(prev => !prev)
			}, blinkInterval)

			return () => clearInterval(interval)
		}, [isActive, isBlinking, blinkInterval])

		const shouldShow = isActive && (isBlinking ? isVisible : true)

		return (
			<div
				className={`signal ${signal} ${shouldShow ? 'active' : 'inactive'}`}
				style={{
					backgroundColor: shouldShow ? signal : '#333',
					opacity: shouldShow ? 1 : 0.3,
				}}>
				{label}
			</div>
		)
	},
)
