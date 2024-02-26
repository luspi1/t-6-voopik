import { type FC } from 'react'

import { Outlet } from 'react-router-dom'

import { AdminHeader } from 'src/pages/admin-page/components/admin-header/admin-header'

import styles from './index.module.scss'
import { AdminNavigation } from 'src/pages/admin-page/components/admin-navigation/admin-navigation'
import { Container } from 'src/UI/Container/Container'
import { AdminContent } from 'src/components/admin-content/admin-content'
export const AdminLayout: FC = () => {
	return (
		<div className={styles.adminLayout}>
			<AdminHeader />
			<Container className={styles.adminInner} $width='1870px' $padding='30px 15px'>
				<AdminNavigation />
				<AdminContent>
					<Outlet />
				</AdminContent>
			</Container>
		</div>
	)
}
