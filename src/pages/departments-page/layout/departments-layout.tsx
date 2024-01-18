import { type FC, useEffect, useState } from 'react'

import { Outlet, useLocation } from 'react-router-dom'

import { Container } from 'src/UI/Container/Container'
import { BreadCrumbs } from 'src/components/bread-crumbs/bread-crumbs'
import { SideMenu } from 'src/components/side-menu/side-menu'

import { DepartmentsMenuItems } from 'src/pages/departments-page/layout/consts'

import styles from './index.module.scss'

export const DepartmentsLayout: FC = () => {
	const { pathname, state } = useLocation()

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
						{
							title: state?.regionTitle,
							link: 'departments-details-info',
						},
					]}
					crumbsPathname={pathname}
				/>
				<div className={styles.departmentsContentWrapper}>
					<Outlet />
					<div>
						<SideMenu className={styles.departmentsSideMenu} sideItems={DepartmentsMenuItems} />
					</div>
				</div>
			</Container>
		</div>
	)
}
