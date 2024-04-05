import { type FC } from 'react'
import { Container } from 'src/UI/Container/Container'
import { BreadCrumbs } from 'src/modules/bread-crumbs/bread-crumbs'
import { Outlet } from 'react-router-dom'

export const EventsLayout: FC = () => {
	return (
		<Container>
			<BreadCrumbs
				crumbsLinksMap={[
					{
						title: 'Все события',
						link: 'events',
					},
				]}
			/>
			<Outlet />
		</Container>
	)
}
