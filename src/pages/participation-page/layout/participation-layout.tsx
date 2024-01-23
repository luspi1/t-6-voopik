import { type FC } from 'react'

import { Outlet, useLocation } from 'react-router-dom'

import { Container } from 'src/UI/Container/Container'
import { BreadCrumbs } from 'src/components/bread-crumbs/bread-crumbs'
import { filterNumbersWithPathname } from 'src/helpers/utils'

import styles from 'src/pages/departments-page/layout/index.module.scss'

export const ParticipationLayout: FC = () => {
	const { pathname } = useLocation()

	return (
		<div className={styles.departmentsLayout}>
			<Container>
				<BreadCrumbs
					crumbsLinks={[
						{
							title: 'Список пользователей',
							link: 'users-list',
						},
					]}
					crumbsPathname={filterNumbersWithPathname(pathname)}
				/>
				<Outlet />
			</Container>
		</div>
	)
}
