import { type FC } from 'react'
import { Link } from 'react-router-dom'

import { useGetAllNewsQuery } from 'src/store/news/news.api'
import { customFormatDate } from 'src/helpers/utils'

import styles from './index.module.scss'

type AsideNewsProps = {
	previewCount?: number
	currentNewsId: string
}
export const AsideNews: FC<AsideNewsProps> = ({ previewCount = 4, currentNewsId }) => {
	const { data: newsList } = useGetAllNewsQuery({})

	if (!newsList) return null
	return (
		<aside className={styles.asideNews}>
			<h6>Другие новости:</h6>
			<ul>
				{[...newsList]
					.filter((el) => el.id !== currentNewsId)
					.reverse()
					.slice(0, previewCount)
					.map((newsEl) => (
						<li key={newsEl.id}>
							<span>{customFormatDate(newsEl.date, { day: 'numeric', month: 'long' })}</span>
							<Link to={`/news/${newsEl.id}`}>{newsEl.title}</Link>
						</li>
					))}
			</ul>
		</aside>
	)
}
