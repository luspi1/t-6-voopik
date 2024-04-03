import { type FC } from 'react'
import { type PhotoItem } from 'src/types/photos'

import cn from 'classnames'

import { Link } from 'react-router-dom'
import { customFormatDate } from 'src/helpers/utils'

import styles from './index.module.scss'

type PhotosListProps = {
	photos?: PhotoItem[]
	className?: string
}
export const PhotosList: FC<PhotosListProps> = ({ photos, className }) => {
	if (!photos) return <h3>Нет фотографий</h3>
	return (
		<ul className={cn(styles.photosList, className)}>
			{photos?.map((photo) => (
				<li key={photo.id}>
					<div className={styles.photoImgWrapper}>
						<img src={photo.url} alt={photo.title} />
					</div>
					<Link to={photo.id}>{photo.title}</Link>
					<span>{customFormatDate(photo.date)}</span>
				</li>
			))}
		</ul>
	)
}
