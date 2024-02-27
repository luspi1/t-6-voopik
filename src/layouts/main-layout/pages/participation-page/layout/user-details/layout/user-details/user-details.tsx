import { type FC } from 'react'
import { type LinkItem } from 'src/types/global'
import { type UserLink } from 'src/types/users'

import { useParams } from 'react-router-dom'

import { InfoRow } from 'src/UI/InfoRow/InfoRow'
import { useGetUserByIdQuery } from 'src/store/users/users.api'
import { formatDocumentLinks, formatRelatedLinks } from 'src/helpers/utils'
import { LinksList } from 'src/components/links-list/links-list'

import styles from './index.module.scss'

export const UserDetails: FC = () => {
	const { id } = useParams()

	const { data: userInfo } = useGetUserByIdQuery(id ?? '')
	const formatUserLinks = (data: UserLink[] | undefined): LinkItem[] | undefined => {
		if (!data) return undefined
		return data.map((regItem) => ({
			id: regItem.id,
			link: regItem.link,
			titleLink: regItem.title,
			label: [regItem.date, regItem.source],
		}))
	}

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
			<section>
				<LinksList
					dataList={formatDocumentLinks(userInfo?.documents)}
					title='Документы Пользователя'
				/>
			</section>
			<section>
				<LinksList dataList={formatUserLinks(userInfo?.relatedLinks)} title='Массив ссылок' />
			</section>
		</div>
	)
}
