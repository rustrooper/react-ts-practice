import {useState} from 'react'

// Интерфейс для описания задачи
export interface CodeWarsTask {
	id: string
	title: string
	description: string
	solutionFunction: (...args: any[]) => any
	inputFields: InputField[]
}

export interface InputField {
	id: string
	label: string
	type: 'number' | 'string' | 'boolean' | 'array' | 'object'
}

// Вспомогательная функция для преобразования строки в нужный тип
const parseInputValue = (value: string, type: InputField['type']) => {
	try {
		switch (type) {
			case 'number':
				return Number(value)
			case 'boolean':
				return value.toLowerCase() === 'true'
			case 'array':
			case 'object':
				return JSON.parse(value)
			case 'string':
			default:
				return value
		}
	} catch (error) {
		console.error('Parse error:', error)
		return type === 'array' ? [] : type === 'object' ? {} : value
	}
}

export const Solution = ({title, description, solutionFunction, inputFields}: CodeWarsTask) => {
	const [inputValues, setInputValues] = useState({})
	const [result, setResult] = useState(null)
	const [error, setError] = useState<string | null>(null)

	// Инициализация значений по умолчанию
	// useEffect(() => {
	// 	const initialValues: {[key: string]: any} = {}
	// 	inputFields.forEach(field => {
	// 		initialValues[field.id] = field.defaultValue
	// 	})
	// 	setInputValues(initialValues)
	// }, [inputFields])

	const handleInputChange = (fieldId: string, value: string) => {
		const field = inputFields.find(f => f.id === fieldId)
		if (!field) return

		const parsedValue = parseInputValue(value, field.type)
		setInputValues(prev => ({
			...prev,
			[fieldId]: parsedValue,
		}))
	}

	const executeFunction = () => {
		setError(null)
		setResult(null)

		try {
			const inputValuesArray = inputFields.map(field => inputValues[field.id])
			const executionResult = solutionFunction(...inputValuesArray)
			setResult(executionResult)
		} catch (err) {
			setError(err instanceof Error ? err.message : String(err))
		}
	}

	const formatValue = (value): string => {
		if (value === null) return 'null'
		if (value === undefined) return 'undefined'

		if (Array.isArray(value)) {
			return `[${value.map(v => formatValue(v)).join(', ')}]`
		}
		if (typeof value === 'object') {
			return JSON.stringify(value, null, 2)
		}
		return String(value)
	}

	return (
		<div className='solution-container'>
			<div className='solution-header'>
				<h2>{title}</h2>
				<p className='task-description'>{description}</p>
			</div>

			<div className='input-section'>
				<h3>Входные данные:</h3>
				<div className='input-fields'>
					{inputFields.map(field => (
						<div key={field.id} className='input-group'>
							<label htmlFor={field.id}>{field.label}:</label>
							<input
								id={field.id}
								type='text'
								value={formatValue(inputValues[field.id])}
								onChange={e => handleInputChange(field.id, e.target.value)}
								placeholder={`Введите ${field.type}`}
							/>
							<span className='input-type'>({field.type})</span>
						</div>
					))}
				</div>

				<div className='buttons-group'>
					<button onClick={executeFunction}>Выполнить функцию</button>
				</div>

				{error && (
					<div className='error-result'>
						<h4>Ошибка:</h4>
						<div className='error-value'>{error}</div>
					</div>
				)}

				{result !== null && !error && (
					<div className='result'>
						<h4>Результат:</h4>
						<div className='result-value'>{formatValue(result)}</div>
						<div className='result-type'>Тип: {typeof result}</div>
					</div>
				)}
			</div>
		</div>
	)
}
