import { type FC } from 'react'

import { useParams } from 'react-router-dom'

import { InfoRow } from 'src/UI/InfoRow/InfoRow'
import { useGetUserByIdQuery } from 'src/store/users/users.api'

import { formatRelatedLinks } from 'src/helpers/utils'

import styles from './index.module.scss'

export const UserDetails: FC = () => {
	const { id } = useParams()

	const { data: userInfo } = useGetUserByIdQuery(id ?? '')

	return (
		<div>
			<section>
				<InfoRow
					wrapperClassname={styles.statusesRow}
					title='Статусы Пользователя:'
					margin='0 0 35px 0'
					label={userInfo?.statuses}
				/>
				<InfoRow
					wrapperClassname={styles.relatedRow}
					title='Связь с Объектами:'
					label={formatRelatedLinks(userInfo?.relatedObjects, 'objects')}
				/>
				<InfoRow
					wrapperClassname={styles.relatedRow}
					title='Связь с Проектами:'
					label={formatRelatedLinks(userInfo?.relatedProjects, 'projects')}
				/>
			</section>
		</div>
	)
}
