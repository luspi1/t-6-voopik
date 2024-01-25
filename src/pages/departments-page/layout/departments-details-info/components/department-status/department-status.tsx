import { type FC } from 'react'
import cn from 'classnames'

import { type RegionItem } from 'src/types/regions'
import styles from './index.module.scss'

export type DepartmentStatusProps = {
	data: RegionItem
	className?: string
}

export const DepartmentStatus: FC<DepartmentStatusProps> = ({ data, className }) => {
	return (
		<div className={cn(className, styles.container)}>
			<div className={styles.departmentStatusTable}>
				<div className={styles.tableRow}>
					<p className={styles.tableTitle}>Связь с Объектами:</p>

					<ul>
						{data.relatedObjects.map((item, index) => (
							<li key={index}>
								<a href='#'>{item}</a>
							</li>
						))}
					</ul>
				</div>

				<div className={styles.tableRow}>
					<p className={styles.tableTitle}>Связь с Проектами:</p>
					<ul>
						{data.relatedProjects.map((item, index) => (
							<li key={index}>
								<a href='#'>{item}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}
