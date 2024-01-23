import { type FC } from 'react'

import { NavLink } from 'react-router-dom'

import { UserInfoNavItems } from 'src/pages/participation-page/layout/user-details/layout/components/nav-user-info/consts'

export const NavUserInfo: FC = () => {
	return (
		<nav>
			<ul>
				{UserInfoNavItems?.map((navItem) => (
					<li key={navItem.title}>
						<NavLink to={navItem.link}>{navItem.title}</NavLink>
					</li>
				))}
			</ul>
		</nav>
	)
}
