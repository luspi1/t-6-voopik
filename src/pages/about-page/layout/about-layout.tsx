import { type FC } from 'react'

import { Outlet, useLocation } from 'react-router-dom'

import { Container } from 'src/UI/Container/Container'
import { AboutMenuItems } from 'src/pages/about-page/layout/consts'
import { BreadCrumbs } from 'src/components/bread-crumbs/bread-crumbs'
import { PageContent } from 'src/components/page-content/page-content'
import { SideMenu } from 'src/components/side-menu/side-menu'
import { DocumentsList } from 'src/pages/about-page/components/documents-list/documents-list'

import styles from './index.module.scss'
import { aboutPageDocuments } from './consts'

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
					<PageContent>
						<Outlet />
					</PageContent>
					<div>
						<SideMenu className={styles.aboutSideMenu} sideItems={AboutMenuItems} />
						{pathname === '/about' && <DocumentsList documents={aboutPageDocuments} />}
					</div>
				</div>
			</Container>
		</div>
	)
}
