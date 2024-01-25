import { type FC } from 'react'
import cn from 'classnames'

import { type RegionItem } from 'src/types/regions'
import styles from './index.module.scss'

export type DepartmentLinksProps = {
	data: RegionItem
	className?: string
}

export const DepartmentLinks: FC<DepartmentLinksProps> = ({ data, className }) => {
	return (
		<div className={cn(className, styles.container)}>
			<h4>Массив ссылок ({data.relatedLinks.length})</h4>

			<ul>
				{data.relatedLinks.map((item) => (
					<li key={item.id}>
						<a href='#'>{item.title}</a>
						<p className={styles.linkInfo}>
							{item.date}, {item.source}
						</p>
					</li>
				))}
			</ul>
		</div>
	)
}
