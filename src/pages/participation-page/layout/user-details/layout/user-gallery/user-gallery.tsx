import { type FC } from 'react'

import styles from './index.module.scss'
import { GalleryFilter } from 'src/pages/participation-page/layout/user-details/layout/user-gallery/components/gallery-filter/gallery-filter'
export const UserGallery: FC = () => {
	return (
		<div className={styles.userGallery}>
			<div className={styles.galleryHeader}>
				<p className={styles.galleryLengthInfo}>
					Всего альбомов и видео: <span>20</span>
				</p>
				<GalleryFilter />
			</div>
		</div>
	)
}
