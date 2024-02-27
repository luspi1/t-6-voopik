import { type FC, useState } from 'react'

import { Link, useParams } from 'react-router-dom'

import { GalleryFilter } from 'src/layouts/main-layout/pages/participation-page/layout/user-details/layout/user-gallery/components/gallery-filter/gallery-filter'
import { useGetUserPhotoQuery, useGetUserVideoQuery } from 'src/store/users/users.api'
import { useDebounce } from 'src/hooks/debounce/debounce'
import { PhotosList } from 'src/layouts/main-layout/pages/participation-page/layout/user-details/layout/user-gallery/components/photos-list/photos-list'
import { VideosList } from 'src/layouts/main-layout/pages/participation-page/layout/user-details/layout/user-gallery/components/videos-list/videos-list'

import styles from './index.module.scss'

export const UserGallery: FC = () => {
	const [searchAlbums, setSearchAlbums] = useState<string>('')
	const [filtrationType, setFiltrationType] = useState<string>('0')

	const debouncedSearch = useDebounce(searchAlbums)

	const { id } = useParams()

	const { data: photosData } = useGetUserPhotoQuery([debouncedSearch, id ?? ''])
	const { data: videosData } = useGetUserVideoQuery([debouncedSearch, id ?? ''])

	const searchEventsHandler = (search: string, type: string) => {
		setSearchAlbums(search)
		setFiltrationType(type)
	}

	return (
		<section className={styles.userGallery}>
			<div className={styles.galleryHeader}>
				<p className={styles.galleryLengthInfo}>
					Всего альбомов и видео:{' '}
					<strong>({Number(photosData?.length) + Number(videosData?.length)})</strong>
				</p>
				<GalleryFilter filterHandler={searchEventsHandler} />
			</div>

			{(filtrationType === '1' || filtrationType === '0') && (
				<>
					<h4>Фото</h4>
					<PhotosList photos={photosData} />
				</>
			)}
			{(filtrationType === '2' || filtrationType === '0') && (
				<>
					<h4>Видео</h4>
					<VideosList videos={videosData} />
				</>
			)}
			<Link className={styles.allAlbumsLink} to='/albums'>
				Показать все альбомы и видео{' '}
				<strong>({Number(photosData?.length) + Number(videosData?.length)})</strong>
			</Link>
		</section>
	)
}
