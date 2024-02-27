import { type FC } from 'react'

import { Route, Routes } from 'react-router-dom'

import { AdminRoutes } from 'src/routes/admin-routes/admin-routes'
import { MainRoutes } from 'src/routes/main-routes/main-routes'
import { NotFound } from 'src/pages/not-found/not-found'

export const App: FC = () => {
	return (
		<Routes>
			<Route path='/*' element={<MainRoutes />} />
			<Route path='/admin/*' element={<AdminRoutes />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}
export default App
