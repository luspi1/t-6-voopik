import { type FC } from 'react'

import styles from './index.module.scss'
export const SearchWithTags: FC = () => {
	return (
		<div className={styles.searchWrapper}>
			<form action='#'>
				<input type='text' />
				<button type='submit'>найти</button>
			</form>
		</div>
	)
}
