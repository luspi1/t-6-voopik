import { type FC } from 'react'

import { Outlet, useLocation } from 'react-router-dom'

import { Container } from 'src/UI/Container/Container'
import { BreadCrumbs } from 'src/components/bread-crumbs/bread-crumbs'
import { PageContent } from 'src/components/page-content/page-content'
import { SideMenu } from 'src/components/side-menu/side-menu'

import { DepartmentsMenuItems } from 'src/pages/departments-page/layout/consts'

import styles from './index.module.scss'

export const DepartmentsLayout: FC = () => {
	const { pathname } = useLocation()

	return (
		<div className={styles.departmentsLayout}>
			<Container>
				<BreadCrumbs
					crumbsLinks={[
						{
							title: 'Региональные отделения',
							link: 'departments-list',
						},
						{
							title: 'О региональных отделениях ВООПИК',
							link: 'departments-about',
						},
					]}
					crumbsPathname={pathname}
				/>
				<div className={styles.departmentsContentWrapper}>
					<PageContent>
						<Outlet />
					</PageContent>
					<div>
						<SideMenu className={styles.departmentsSideMenu} sideItems={DepartmentsMenuItems} />
					</div>
				</div>
			</Container>
		</div>
	)
}
