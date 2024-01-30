import { type FC } from 'react'

import { Outlet, useParams } from 'react-router-dom'

import { Container } from 'src/UI/Container/Container'
import { BreadCrumbs } from 'src/modules/bread-crumbs/bread-crumbs'
import { SideMenu } from 'src/components/side-menu/side-menu'

import { ObjectsMenuItems } from 'src/pages/objects-page/layout/consts'

import styles from './index.module.scss'

export const ObjectsLayout: FC = () => {
	const { id } = useParams()
	return (
		<div>
			<Container>
				<BreadCrumbs
					crumbsLinksMap={[
						{
							title: 'Объекты',
							link: 'objects-list',
						},
						{
							title: 'Об объектах',
							link: 'objects-about',
						},
					]}
				/>
				<div className={styles.objectsContentWrapper}>
					<Outlet />

					{!id && <SideMenu className={styles.objectsSideMenu} sideItems={ObjectsMenuItems} />}
				</div>
			</Container>
		</div>
	)
}
