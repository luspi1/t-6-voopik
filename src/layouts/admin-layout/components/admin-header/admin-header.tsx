import { type FC } from 'react'
import { Link } from 'react-router-dom'

import { Container } from 'src/UI/Container/Container'
import { AdminPersonal } from 'src/layouts/admin-layout/components/admin-header/components/profile-personal/admin-personal'
import { MainInput } from 'src/UI/MainInput/MainInput'
import { SearchSvg } from 'src/UI/icons/searchSVG'

import styles from './index.module.scss'
import { AdminRoute } from 'src/routes/admin-routes/consts'

export const AdminHeader: FC = () => {
	return (
		<header className={styles.adminHeader}>
			<Container className={styles.adminHeaderContainer} $width='1870px'>
				<Link className={styles.logoLink} to={`/${AdminRoute.AdminHome}`}>
					Т-6 ВООПИК
				</Link>
				<MainInput
					className={styles.adminSearchInput}
					name='admin_search'
					svgNode={<SearchSvg />}
				/>
				<AdminPersonal />
			</Container>
		</header>
	)
}
