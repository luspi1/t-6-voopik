import { type FC } from 'react'

import { NavLink } from 'react-router-dom'

import { UserInfoNavItems } from 'src/layouts/main-layout/pages/participation-page/layout/user-details/components/nav-user-info/consts'

import styles from './index.module.scss'
export const NavUserInfo: FC = () => {
	const setActive = ({ isActive }: { isActive: boolean }) =>
		isActive ? `${styles.activeLink}` : ''

	return (
		<nav>
			<ul className={styles.userInfoNav}>
				{UserInfoNavItems?.map((navItem) => (
					<li key={navItem.title}>
						<NavLink className={setActive} to={navItem.link}>
							{navItem.title}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	)
}
