import React, { type FC } from 'react'

import { SearchIconSvg } from 'src/UI/icons/searchIconSVG'

import styles from './index.module.scss'
import { MainSelect } from 'src/UI/MainSelect/MainSelect'

export const GalleryFilter: FC = () => {
	return (
		<form className={styles.galleryFilterForm} noValidate>
			<div className={styles.searchInput}>
				<SearchIconSvg />
				<input type='text' placeholder='Поиск по названию Альбома' />
			</div>
			<MainSelect
				items={[
					{ label: 'Порядок показа', value: '0' },
					{ label: 'Сначала новые', value: '1' },
					{ label: 'Сначала старые', value: '2' },
				]}
			/>
			<MainSelect
				items={[
					{ label: 'Фото и видео', value: '0' },
					{ label: 'Только фото', value: '1' },
					{ label: 'Только видео', value: '2' },
				]}
			/>
			<button className={styles.filterBtn} type='button'>
				Найти
			</button>
		</form>
	)
}
