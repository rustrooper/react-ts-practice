import {Route, Routes} from 'react-router-dom'
import {FirstPage} from './pages/firstPage'
import {NotVerySecure} from './pages/solutions/NotVerySecure'

export const AppRoutes = () => {
	const baseRoutes = [
		{path: '*', element: <FirstPage />},
		{path: '/solution1', element: <NotVerySecure />},
	]

	return (
		<Routes>
			{baseRoutes.map(route => (
				<Route path={route.path} element={route.element}></Route>
			))}
		</Routes>
	)
}
