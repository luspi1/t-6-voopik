import { type FC } from 'react'

import { Outlet } from 'react-router-dom'

import { AdminHeader } from 'src/pages/admin-page/components/admin-header/admin-header'

import styles from './index.module.scss'
export const AdminLayout: FC = () => {
	return (
		<div className={styles.adminLayout}>
			<AdminHeader />
			<div>
				<Outlet />
			</div>
		</div>
	)
}
