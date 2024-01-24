import { type FC } from 'react'

import { Outlet } from 'react-router-dom'

import { Container } from 'src/UI/Container/Container'
import { BreadCrumbs } from 'src/modules/bread-crumbs/bread-crumbs'

import styles from 'src/pages/departments-page/layout/index.module.scss'

export const ParticipationLayout: FC = () => {
	return (
		<div className={styles.departmentsLayout}>
			<Container>
				<BreadCrumbs
					crumbsLinksMap={[
						{
							title: 'Список пользователей',
							link: 'users-list',
						},
					]}
				/>
				<Outlet />
			</Container>
		</div>
	)
}
