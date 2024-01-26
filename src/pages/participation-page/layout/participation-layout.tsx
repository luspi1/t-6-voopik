import { type FC } from 'react'

import { Outlet } from 'react-router-dom'

import { Container } from 'src/UI/Container/Container'
import { BreadCrumbs } from 'src/modules/bread-crumbs/bread-crumbs'

export const ParticipationLayout: FC = () => {
	return (
		<div>
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
