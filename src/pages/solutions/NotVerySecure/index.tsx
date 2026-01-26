import {Solution} from '../../../components/Solution'

export const NotVerySecure = () => {
	function alphanumeric(string: string) {
		return /^[a-z0-9]+$/i.test(string)
	}

	return (
		<Solution
			id='001'
			title='title'
			description='test'
			inputFields={[{id: '002', label: 'Инпут', type: 'string'}]}
			solutionFunction={alphanumeric}></Solution>
	)
}
