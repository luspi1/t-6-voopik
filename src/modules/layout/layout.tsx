import { type FC } from 'react'
import { Outlet } from 'react-router-dom'
import { MainNavigation } from 'src/modules/main-navigation/main-navigation'

export const Layout: FC = () => {
	return (
		<>
			<MainNavigation />
			<main>
				<Outlet />
			</main>
		</>
	)
}
