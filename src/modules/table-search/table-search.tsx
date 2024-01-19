import React, { type FC } from 'react'

import { SearchIconSvg } from 'src/UI/icons/searchIconSVG'

import styles from './index.module.scss'

type TableSearchProps = {
	handleSearch: (e: string) => void
}

export const TableSearch: FC<React.InputHTMLAttributes<HTMLInputElement> & TableSearchProps> = ({
	handleSearch,
	...props
}) => {
	const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		handleSearch(e.currentTarget.value.toLowerCase())
	}

	return (
		<div className={styles.searchWrapper}>
			<SearchIconSvg />
			<input {...props} type='text' onInput={onChangeSearchInput} />
		</div>
	)
}
