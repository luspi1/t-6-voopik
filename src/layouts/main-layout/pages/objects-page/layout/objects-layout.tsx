import { type FC } from 'react'

import { Outlet } from 'react-router-dom'

import { Container } from 'src/UI/Container/Container'
import { BreadCrumbs } from 'src/modules/bread-crumbs/bread-crumbs'
import { SideMenu } from 'src/components/side-menu/side-menu'

import { ObjectsMenuItems } from 'src/layouts/main-layout/pages/objects-page/layout/consts'

import styles from './index.module.scss'

export const ObjectsLayout: FC = () => {
	return (
		<div>
			<Container>
				<BreadCrumbs
					crumbsLinksMap={[
						{
							title: 'Объекты',
							link: 'objects',
						},
						{
							title: 'Об объектах',
							link: 'objects-about',
						},
					]}
				/>
				<div className={styles.objectsContentWrapper}>
					<Outlet />
					<SideMenu className={styles.objectsSideMenu} sideItems={ObjectsMenuItems} />
				</div>
			</Container>
		</div>
	)
}
