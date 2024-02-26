import { type FC, type ReactNode, useState } from 'react'
import { BottomArrowSvg } from 'src/UI/icons/bottomArrowSVG'

import { type NavigationItem } from 'src/types/navigation'
import { NavLink } from 'react-router-dom'

import styles from './index.module.scss'
import cn from 'classnames'

type AdminNavBtnProps = {
	title: string
	childNavItems: NavigationItem[]
	icon?: ReactNode
}
export const AdminNavBtn: FC<AdminNavBtnProps> = ({ icon, title, childNavItems }) => {
	const [isActive, setIsActive] = useState<boolean>(false)
	return (
		<>
			<button
				className={cn(styles.navBtn, { [styles._activeBtn]: isActive })}
				type='button'
				onClick={() => setIsActive(!isActive)}
			>
				{icon}
				{title}
				<BottomArrowSvg className={styles.navArrow} />
			</button>

			{isActive && (
				<ul className={styles.navSubmenu}>
					{childNavItems.map((childNav) => (
						<li key={childNav.link}>
							<NavLink to={childNav.link}>{childNav.title}</NavLink>
						</li>
					))}
				</ul>
			)}
		</>
	)
}
