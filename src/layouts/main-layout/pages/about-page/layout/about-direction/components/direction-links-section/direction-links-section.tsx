import { type FC } from 'react'

import styles from './index.module.scss'
import { directionLinks } from './consts'

export const DirectionLinksSection: FC = () => {
	return (
		<div className={styles.directionLinks}>
			{directionLinks.map((item) => (
				<div key={item.id}>
					<h3>{item.title}</h3>
					<a href={item.linkSource}>{item.linkTitle}</a>
				</div>
			))}
		</div>
	)
}
