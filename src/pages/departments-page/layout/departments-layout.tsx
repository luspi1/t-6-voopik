import { type FC } from 'react'

import { Outlet, useLocation } from 'react-router-dom'

import { Container } from 'src/UI/Container/Container'
import { BreadCrumbs } from 'src/modules/bread-crumbs/bread-crumbs'
import { SideMenu } from 'src/components/side-menu/side-menu'

import { DepartmentsMenuItems, OneDepartmentMenu } from 'src/pages/departments-page/layout/consts'

import styles from './index.module.scss'

export const DepartmentsLayout: FC = () => {
	const location = useLocation()
	return (
		<div className={styles.departmentsLayout}>
			<Container>
				<BreadCrumbs
					crumbsLinksMap={[
						{
							title: 'Региональные отделения',
							link: 'departments-list',
						},
						{
							title: 'О региональных отделениях ВООПИК',
							link: 'departments-about',
						},
					]}
				/>
				<div className={styles.departmentsContentWrapper}>
					<Outlet />
					<div>
						{location.pathname.includes('departments-details-info') ? (
							<SideMenu className={styles.departmentsSideMenu} sideItems={OneDepartmentMenu} />
						) : (
							<SideMenu className={styles.departmentsSideMenu} sideItems={DepartmentsMenuItems} />
						)}
					</div>
				</div>
			</Container>
		</div>
	)
}
