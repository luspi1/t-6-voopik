import { type FC } from 'react'

import { type RegionLink } from 'src/types/regions'
import styles from './index.module.scss'

export type DepartmentLinksProps = {
	relatedLinks?: RegionLink[]
}

export const DepartmentLinks: FC<DepartmentLinksProps> = ({ relatedLinks }) => {
	return (
		<div className={styles.container}>
			<h4>Массив ссылок ({relatedLinks?.length ?? 0})</h4>
			{relatedLinks && (
				<ul>
					{relatedLinks.map((item) => (
						<li key={item.id}>
							<a href='#'>{item.title}</a>
							<p className={styles.linkInfo}>
								{item.date}, {item.source}
							</p>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}
