import { type FC } from 'react'
import { type TabNavigationItem } from 'src/types/navigation'

import { NavLink } from 'react-router-dom'
import { setActive } from 'src/helpers/utils'

import styles from './index.module.scss'

type TabNavigationProps = {
	navItems: TabNavigationItem[]
}
export const TabNavigation: FC<TabNavigationProps> = ({ navItems }) => {
	return (
		<ul className={styles.tabNavList}>
			{navItems?.map((navEl) => (
				<li key={navEl.title}>
					<NavLink
						className={({ isActive }) => setActive(isActive, styles.activeLink)}
						to={navEl.link}
					>
						{navEl.title}
					</NavLink>
				</li>
			))}
		</ul>
	)
}
