import { type FC } from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'src/UI/Container/Container'
import { MenuList } from 'src/modules/main-navigation/components/menu-list/menu-list'
import { AuthSvg } from 'src/UI/icons/authSVG'
import { AppRoute } from 'src/helpers/consts'

import logoImage from 'src/assets/img/logo.png'

import styles from './index.module.scss'
export const MainNavigation: FC = () => {
	return (
		<nav className={styles.mainNav}>
			<Container className={styles.navContainer}>
				<Link to={AppRoute.Home} className={styles.logoWrapper}>
					<img src={logoImage} alt='Логотип' />
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
