import { useEffect } from 'react'

import { useGetUserByIdQuery } from 'src/store/users/users.api'
import { formatDate3 } from 'src/helpers/utils'
import { useParams } from 'react-router-dom'
import { useActions } from 'src/hooks/actions/actions'
import { InfoRow } from 'src/UI/InfoRow/InfoRow'

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
					<InfoRow title='Дата рождения и возраст:' label={formatDate3(userData?.birthday)} />
					<InfoRow title='Населенный пункт:' label={userData?.locality} />
					<InfoRow title='Пол:' label={userData?.gender} margin='0 0 25px 0' />
					<InfoRow
						wrapperClassname={styles.phoneWrapper}
						title='Телефоны:'
						label={userData?.phones}
					/>
					<InfoRow
						title='Электронная почта:'
						label={<a href={`mailto:${userData?.email}`}>{userData?.email}</a>}
					/>
					<InfoRow
						title='Сайт / социальная сеть:'
						label={<a href={userData?.website}>{userData?.website}</a>}
					/>
				</div>
			</div>
		</div>
	)
}
