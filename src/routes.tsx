import {Route, Routes} from 'react-router-dom'
import {FirstPage} from './pages/firstPage'
import {NotVerySecure} from './pages/solutions/NotVerySecure'
import {SecondPage} from './pages/secondPage'
import {ThirdPage} from './pages/thirdPage'

export const AppRoutes = () => {
	const baseRoutes = [
		{path: '*', element: <FirstPage />},
		{path: '/solution1', element: <NotVerySecure />},
		{path: '/secondPage', element: <SecondPage></SecondPage>},
		{path: '/thirdPage', element: <ThirdPage></ThirdPage>},
	]

	return (
		<Routes>
			{baseRoutes.map(route => (
				<Route path={route.path} element={route.element}></Route>
			))}
		</Routes>
	)
}
