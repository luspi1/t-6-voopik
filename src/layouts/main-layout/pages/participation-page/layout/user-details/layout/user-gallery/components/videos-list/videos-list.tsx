import { type FC } from 'react'
import { type VideoItem } from 'src/types/videos'

import cn from 'classnames'

import { Link } from 'react-router-dom'
import { customFormatDate } from 'src/helpers/utils'

import styles from './index.module.scss'

type VideosListProps = {
	videos?: VideoItem[]
	className?: string
}
export const VideosList: FC<VideosListProps> = ({ videos, className }) => {
	if (!videos) return <h3>Нет видео</h3>
	return (
		<ul className={cn(styles.videosList, className)}>
			{videos?.map((video) => (
				<li key={video.id}>
					<div className={styles.videoImgWrapper}>
						<img src={video.url} alt={video.title} />
					</div>
					<Link to={video.id}>{video.title}</Link>
					<span>{customFormatDate(video.date)}</span>
				</li>
			))}
		</ul>
	)
}
