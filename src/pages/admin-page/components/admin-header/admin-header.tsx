import { type FC } from 'react'
import { Container } from 'src/UI/Container/Container'

import { AdminPersonal } from 'src/pages/admin-page/components/admin-header/components/profile-personal/admin-personal'

import { MainInput } from 'src/UI/MainInput/MainInput'

import { SearchSvg } from 'src/UI/icons/searchSVG'
import styles from './index.module.scss'
export const AdminHeader: FC = () => {
	return (
		<header className={styles.adminHeader}>
			<Container className={styles.adminHeaderContainer} width='1870px'>
				<h3>Т-6 ВООПИК</h3>
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
