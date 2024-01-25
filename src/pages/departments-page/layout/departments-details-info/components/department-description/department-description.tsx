import { type FC } from 'react'
import cn from 'classnames'

import { type RegionItem } from 'src/types/regions'
import styles from './index.module.scss'

export type DepartmentDescriptionProps = {
	data: RegionItem
	className?: string
}

export const DepartmentDescription: FC<DepartmentDescriptionProps> = ({ data, className }) => {
	return (
		<div className={cn(className, styles.container)}>
			{data.descList.map((item, index) => (
				<p className={styles.paragraph} key={index}>
					{item}
				</p>
			))}
		</div>
	)
}
