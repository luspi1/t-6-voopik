import { type FC } from 'react'

import { Link } from 'react-router-dom'
import cnBind from 'classnames/bind'

import styles from './index.module.scss'

type NewsItemProps = {
	title: string
	link: string
	date: string
	desc?: string
	isMain?: boolean
}
export const NewsItem: FC<NewsItemProps> = ({ link, title, date, desc, isMain }) => {
	const cx = cnBind.bind(styles)

	return (
		<li className={cx(styles.newsItem, { _main: isMain })}>
			<Link to={link}>
				<h4>{title}</h4>
				<span>{date}</span>
				{desc && <p>{desc}</p>}
			</Link>
		</li>
	)
}
