import { useParams } from 'react-router-dom'

import { useGetUserByIdQuery } from 'src/store/users/users.api'
import { calculateAge, customFormatDate } from 'src/helpers/utils'
import { InfoRow } from 'src/UI/InfoRow/InfoRow'
import { useAdditionalCrumbs } from 'src/hooks/additional-crumbs/additional-crumbs'

import styles from './index.module.scss'

export const UserInfo = () => {
	const { id } = useParams()
	const { data: userData } = useGetUserByIdQuery(id ?? '')

	useAdditionalCrumbs(userData?.fullname)

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
					<InfoRow
						title='Дата рождения и возраст:'
						label={
							<p className={styles.userBirthday}>
								{customFormatDate(userData?.birthday, {
									day: 'numeric',
									month: 'long',
									year: 'numeric',
								})}{' '}
								<span>({calculateAge(userData?.birthday)})</span>
							</p>
						}
					/>
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
