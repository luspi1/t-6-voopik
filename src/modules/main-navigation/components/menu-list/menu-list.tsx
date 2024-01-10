import { NavLink } from 'react-router-dom'

import { MenuItems } from 'src/modules/main-navigation/components/menu-list/consts'

import cnBind from 'classnames/bind'
import styles from './index.module.scss'
export const MenuList = () => {
	const cx = cnBind.bind(styles)

	return (
		<ul className={styles.menuList}>
			{MenuItems.map((menuEl) => (
				<li className={cx(styles.menuItem, { _accent: menuEl.accent })} key={menuEl.link}>
					<NavLink to={menuEl.link}>{menuEl.title}</NavLink>
				</li>
			))}
		</ul>
	)
}
