import { type FC } from 'react'
import { type ContentNav } from 'src/types/navigation'

import { Outlet, Navigate, Link } from 'react-router-dom'

import { PageContent } from 'src/components/page-content/page-content'
import { UserInfo } from 'src/pages/participation-page/layout/user-details/layout/components/user-info/user-info'
import { NavUserInfo } from 'src/pages/participation-page/layout/user-details/layout/components/nav-user-info/nav-user-info'
import { useLocationMatch } from 'src/hooks/location-match'
import { AppRoute } from 'src/helpers/consts'

import styles from './index.module.scss'
export const UserDetailsLayout: FC = () => {
	const [matchesLocation] = useLocationMatch<ContentNav>([`${AppRoute.Users}/:id`])

	if (matchesLocation) return <Navigate to={AppRoute.UserInfo} replace />
	return (
		<PageContent className={styles.userDetailsContent}>
			<UserInfo />
			<h3>Информация</h3>
			<NavUserInfo />
			<Outlet />
			<Link className={styles.usersListLink} to={`/${AppRoute.Users}`}>
				На страницу списка Пользователей
			</Link>
		</PageContent>
	)
}
