import { type FC } from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'src/UI/Container/Container'
import { MenuList } from 'src/modules/main-navigation/components/menu-list/menu-list'
import { AuthSvg } from 'src/UI/icons/authSVG'
import { AppRoute } from 'src/helpers/consts'

import styles from './index.module.scss'
import { MainLogoSvg } from 'src/UI/icons/mainLogoSVG'
export const MainNavigation: FC = () => {
	return (
		<nav className={styles.mainNav}>
			<Container className={styles.navContainer}>
				<Link to={AppRoute.Home} className={styles.logoWrapper}>
					<MainLogoSvg />
				</Link>
				<MenuList />
				<button className={styles.authBtn} type='button'>
					Войти
					<AuthSvg />
				</button>
			</Container>
		</nav>
	)
}
