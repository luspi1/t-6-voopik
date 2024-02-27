import { type FC } from 'react'

import { Outlet } from 'react-router-dom'
import { MainNavigation } from 'src/layouts/main-layout/components/main-navigation/main-navigation'
import { Footer } from 'src/layouts/main-layout/components/footer/footer'

export const MainLayout: FC = () => {
	return (
		<>
			<MainNavigation />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}
