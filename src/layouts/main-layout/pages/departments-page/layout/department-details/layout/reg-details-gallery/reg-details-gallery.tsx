import { type FC, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import cn from 'classnames'

import { useGetRegionPhotosQuery, useGetRegionVideosQuery } from 'src/store/regions/regions.api'
import styles from './index.module.scss'

export const RegDetailsGallery: FC = () => {
	const { id } = useParams()
	const { data: photos } = useGetRegionPhotosQuery(id ?? '')
	const { data: videos } = useGetRegionVideosQuery(id ?? '')

	const [currentMode, setCurrentMode] = useState<'photos' | 'videos'>('photos')

	return (
		<div className={styles.galleryPage}>
			<h2 className={styles.title}>Галерея</h2>

			<div className={styles.modeButtons}>
				<button
					className={cn(styles.modeSwitcher, { [styles._active]: currentMode === 'photos' })}
					onClick={() => setCurrentMode('photos')}
				>
					фото <span>({photos?.length ?? '0'})</span>
				</button>
				<button
					className={cn(styles.modeSwitcher, { [styles._active]: currentMode === 'videos' })}
					onClick={() => setCurrentMode('videos')}
				>
					видео ({videos?.length ?? '0'})
				</button>
			</div>

			{currentMode === 'photos' ? (
				<>
					<p className={styles.itemsCount}>Всего фото в альбоме: {photos?.length}</p>

					{photos && (
						<ul className={styles.gallery}>
							{photos?.map((item) => (
								<li key={item.id}>
									<figure className={styles.image}>
										<img src={item.url} alt={item.title} />
										<figcaption>{item.title}</figcaption>
									</figure>
								</li>
							))}
						</ul>
					)}

					<Link to='#'>Показать все фотографии</Link>
				</>
			) : (
				<>
					<p className={styles.itemsCount}>Всего видео в альбоме: {videos?.length}</p>
					{videos && (
						<ul className={styles.gallery}>
							{photos?.map((item) => (
								<li key={item.id}>
									<figure className={styles.image}>
										<img src={item.url} alt={item.title} />
										<figcaption>{item.title}</figcaption>
									</figure>
								</li>
							))}
						</ul>
					)}
					<Link to='#'>Показать все видеозаписи</Link>
				</>
			)}
		</div>
	)
}
