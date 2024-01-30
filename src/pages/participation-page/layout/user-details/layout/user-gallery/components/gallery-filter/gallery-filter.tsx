import React, { type FC, type FormEvent, useRef } from 'react'

import { SearchIconSvg } from 'src/UI/icons/searchIconSVG'
import { MainSelect } from 'src/UI/MainSelect/MainSelect'

import styles from './index.module.scss'

type GalleryFilterProps = {
	filterHandler: (search: string, type: string, order: string) => void
}

export const GalleryFilter: FC<GalleryFilterProps> = ({ filterHandler }) => {
	const searchInputRef = useRef<HTMLInputElement>(null)
	const orderSelectRef = useRef<HTMLSelectElement>(null)
	const typeSelectRef = useRef<HTMLSelectElement>(null)

	const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (searchInputRef.current && orderSelectRef.current && typeSelectRef.current) {
			filterHandler(
				searchInputRef.current?.value,
				typeSelectRef.current?.value,
				orderSelectRef.current?.value,
			)
		}
	}

	return (
		<form className={styles.galleryFilterForm} onSubmit={onSubmitHandler} noValidate>
			<div className={styles.searchInput}>
				<SearchIconSvg />
				<input type='text' placeholder='Поиск по названию Альбома' ref={searchInputRef} />
			</div>
			<MainSelect
				items={[
					{ label: 'Порядок показа', value: '0' },
					{ label: 'Сначала новые', value: '1' },
					{ label: 'Сначала старые', value: '2' },
				]}
				ref={orderSelectRef}
			/>
			<MainSelect
				items={[
					{ label: 'Фото и видео', value: '0' },
					{ label: 'Только фото', value: '1' },
					{ label: 'Только видео', value: '2' },
				]}
				ref={typeSelectRef}
			/>
			<button className={styles.filterBtn} type='submit'>
				Найти
			</button>
		</form>
	)
}
