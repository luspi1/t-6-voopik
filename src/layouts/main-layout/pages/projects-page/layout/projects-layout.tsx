import { type FC } from 'react'

import { Outlet } from 'react-router-dom'

import { Container } from 'src/UI/Container/Container'
import { BreadCrumbs } from 'src/modules/bread-crumbs/bread-crumbs'
import { SideMenu } from 'src/components/side-menu/side-menu'

import { ProjectsMenuItems } from 'src/layouts/main-layout/pages/projects-page/layout/consts'

import styles from './index.module.scss'

export const ProjectsLayout: FC = () => {
	return (
		<div>
			<Container>
				<BreadCrumbs
					crumbsLinksMap={[
						{
							title: 'Проекты',
							link: 'projects',
						},
						{
							title: 'О Проектах',
							link: 'projects-about',
						},
					]}
				/>
				<div className={styles.projectsContentWrapper}>
					<Outlet />
					<SideMenu className={styles.projectsSideMenu} sideItems={ProjectsMenuItems} />
				</div>
			</Container>
		</div>
	)
}
