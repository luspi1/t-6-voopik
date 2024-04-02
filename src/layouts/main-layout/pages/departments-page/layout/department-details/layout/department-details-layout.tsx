import { type FC } from 'react'
import { type ContentNav } from 'src/types/navigation'
import { Navigate, Outlet } from 'react-router-dom'

import { PageContent } from 'src/components/page-content/page-content'
import { DepartmentHeader } from 'src/layouts/main-layout/pages/departments-page/layout/department-details/components/department-header/department-header'
import { SideMenu } from 'src/components/side-menu/side-menu'

import { OneDepartmentMenu } from 'src/layouts/main-layout/pages/departments-page/layout/department-details/layout/consts'

import { useLocationMatch } from 'src/hooks/location-match'
import { AppRoute } from 'src/routes/main-routes/consts'

import styles from './index.module.scss'

export const DepartmentDetailsLayout: FC = () => {
	const [matchesLocation] = useLocationMatch<ContentNav>([`${AppRoute.Departments}/:id`])

	if (matchesLocation) return <Navigate to={AppRoute.DepartmentsDetailsInfo} replace />
	return (
		<div className={styles.departmentDetailsLayoutWrapper}>
			<PageContent $padding='30px 35px 30px 30px'>
				<DepartmentHeader />
				<Outlet />
			</PageContent>
			<SideMenu className={styles.departmentDetailsSideMenu} sideItems={OneDepartmentMenu} />
		</div>
	)
}
