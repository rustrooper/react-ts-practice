import {useState} from 'react'

export const Solution = () => {
	const [result, setResult] = useState<string>('')
	const [word, setWord] = useState<string>('')

	const codes = {
		a: 1,
		e: 2,
		i: 3,
		o: 4,
		u: 5,
	}

	function encode(string: string) {
		for (const [vowel, code] of Object.entries(codes)) {
			const regexp = new RegExp(vowel, 'g')
			string = string.replace(regexp, code.toString())
		}
		return string
	}

	function decode(string: string) {
		for (const [vowel, code] of Object.entries(codes)) {
			const regexp = new RegExp(code.toString(), 'g')
			string = string.replace(regexp, vowel)
		}
		return string
	}

	return (
		<>
			<input onChange={e => setWord(e.target.value)} placeholder='Введите текст'></input>
			<div>
				<button
					onClick={() => {
						setResult(encode(word))
					}}>
					Кодировать
				</button>
				<button
					onClick={() => {
						setResult(decode(word))
					}}>
					Раскодировать
				</button>
			</div>
			<div>Результат: {result}</div>
		</>
	)
}
