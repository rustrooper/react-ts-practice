import {Route, Routes} from 'react-router-dom'
import {FirstPage} from './pages/firstPage'
import {Solution} from './components/solution'

export const AppRoutes = () => {
	const baseRoutes = [
		{path: '*', element: <FirstPage />},
		{path: '/solution', element: <Solution />},
	]

	return (
		<Routes>
			{baseRoutes.map(route => (
				<Route path={route.path} element={route.element}></Route>
			))}
		</Routes>
	)
}
