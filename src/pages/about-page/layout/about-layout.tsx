import { type FC } from 'react'

import { Outlet, useLocation } from 'react-router-dom'

import { Container } from 'src/UI/Container/Container'
import { AboutMenuItems } from 'src/pages/about-page/layout/consts'
import { BreadCrumbs } from 'src/components/bread-crumbs/bread-crumbs'
import { SideMenu } from 'src/components/side-menu/side-menu'
import { AsideDocuments } from 'src/components/aside-documents/aside-documents'

import { aboutPageDocuments } from './consts'

import styles from './index.module.scss'

export const AboutLayout: FC = () => {
	const { pathname } = useLocation()

	return (
		<div className={styles.aboutLayout}>
			<Container>
				<BreadCrumbs
					crumbsLinks={[
						...AboutMenuItems,
						{
							title: 'Об Обществе',
							link: 'about',
						},
					]}
					crumbsPathname={pathname}
				/>
				<div className={styles.aboutContentWrapper}>
					<Outlet />
					<div>
						<SideMenu className={styles.aboutSideMenu} sideItems={AboutMenuItems} />
						{pathname === '/about' && <AsideDocuments documents={aboutPageDocuments} />}
					</div>
				</div>
			</Container>
		</div>
	)
}
