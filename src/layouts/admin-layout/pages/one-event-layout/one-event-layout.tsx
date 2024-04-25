import { type ContentNav } from 'src/types/navigation'

import { Helmet } from 'react-helmet-async'
import { Navigate, Outlet } from 'react-router-dom'

import { TabNavigation } from 'src/layouts/admin-layout/components/tab-navigation/tab-navigation'
import { oneEventTabs } from 'src/layouts/admin-layout/pages/one-event-layout/consts'
import { useLocationMatch } from 'src/hooks/location-match'
import { AdminRoute } from 'src/routes/admin-routes/consts'

import adminStyles from 'src/layouts/admin-layout/index.module.scss'
import { useState } from 'react'
export const OneEventLayout = () => {
	const [matchesLocation] = useLocationMatch<ContentNav>([
		`${AdminRoute.AdminHome}/${AdminRoute.AdminEventNew}`,
	])

	const [activeTab, setActiveTab] = useState(0)

	if (matchesLocation) return <Navigate to={AdminRoute.AdminEventProfile} replace />
	return (
		<>
			<Helmet>
				<title>Профиль события</title>
			</Helmet>
			<div className={adminStyles.adminTitleTab}>
				<h1>{oneEventTabs[activeTab].title}</h1>
				<TabNavigation handleActiveTab={(idx) => setActiveTab(idx)} navItems={oneEventTabs} />
			</div>

			<Outlet />
		</>
	)
}
