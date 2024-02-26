import { type FC } from 'react'

import { NavLink } from 'react-router-dom'

import { adminMenuItems } from 'src/pages/admin-page/components/admin-navigation/consts'
import { AdminNavBtn } from 'src/pages/admin-page/components/admin-nav-btn/admin-nav-btn'

import styles from './index.module.scss'

export const AdminNavigation: FC = () => {
	const setActive = ({ isActive }: { isActive: boolean }) =>
		isActive ? `${styles.activeLink}` : ''
	return (
		<aside className={styles.adminNavigation}>
			<ul className={styles.adminNavigationList}>
				{adminMenuItems.map((navItem) => (
					<li key={navItem.link}>
						{navItem.childItems ? (
							<AdminNavBtn
								title={navItem.title}
								icon={navItem.icon}
								childNavItems={navItem.childItems}
							/>
						) : (
							<NavLink className={setActive} to={navItem.link}>
								{navItem.icon}
								{navItem.title}
							</NavLink>
						)}
					</li>
				))}
			</ul>
		</aside>
	)
}
