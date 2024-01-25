import { useEffect } from 'react'

import { useGetUserByIdQuery } from 'src/store/users/users.api'
import { formatDate1 } from 'src/helpers/utils'
import { useParams } from 'react-router-dom'
import { useActions } from 'src/hooks/actions/actions'

import styles from './index.module.scss'
export const UserInfo = () => {
	const { id } = useParams()
	const { data: userData } = useGetUserByIdQuery(id ?? '')

	const { setAdditionalCrumbs } = useActions()

	useEffect(() => {
		if (userData?.fullname) {
			setAdditionalCrumbs(userData.fullname)
		}
		return () => {
			setAdditionalCrumbs(null)
		}
	}, [userData])

	return (
		<div className={styles.userInfoWrapper}>
			<h2>{userData?.fullname}</h2>
			{userData?.statuses && (
				<div className={styles.userInfoStatuses}>
					{userData.statuses?.map((status) => <span key={status}>{status}</span>)}
				</div>
			)}
			<div className={styles.mainInfo}>
				<div className={styles.avatarWrapper}>
					<img src={userData?.avatar} alt={userData?.fullname} />
				</div>
				<div className={styles.infoBlock}>
					<p>{userData?.mainDesc}</p>
				</div>
			</div>

			<p>Дата рождения и возраст:</p>
			<p>{formatDate1(userData?.birthday)}</p>
		</div>
	)
}
