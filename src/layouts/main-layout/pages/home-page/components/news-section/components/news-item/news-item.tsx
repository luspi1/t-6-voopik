import { type FC } from 'react'

import { Link } from 'react-router-dom'
import cnBind from 'classnames/bind'

import styles from './index.module.scss'
import { AppRoute } from 'src/routes/main-routes/consts'

type NewsItemProps = {
	id: string
	title: string
	date: string
	desc?: string
	isMain?: boolean
}
export const NewsItem: FC<NewsItemProps> = ({ title, date, desc, isMain, id }) => {
	const cx = cnBind.bind(styles)

	return (
		<li className={cx(styles.newsItem, { _main: isMain })}>
			<Link to={`/${AppRoute.News}/${id}`}>
				<h4>{title}</h4>
				<span>{date}</span>
				{desc && <p>{desc}</p>}
			</Link>
		</li>
	)
}
