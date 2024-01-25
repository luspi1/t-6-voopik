import { type FC } from 'react'
import { type RegionItem } from 'src/types/regions'
import styles from './index.module.scss'

export type DepartmentStatusProps = {
	data: RegionItem
	className?: string
}

export const DepartmentStatus: FC<DepartmentStatusProps> = ({ data, className }) => {
	return (
		<div className={className}>
			<div className={styles.departmentStatusTable}>
				<div className={styles.tableRow}>
					<p className={styles.tableTitle}>Связь с Объектами:</p>

					<ul>
						{data.relatedObjects.map((item) => (
							<li key={item}>
								<a href='#'>{item}</a>
							</li>
						))}
					</ul>
				</div>

				<div className={styles.tableRow}>
					<p className={styles.tableTitle}>Связь с Проектами:</p>
					<ul>
						{data.relatedProjects.map((item) => (
							<li key={item}>
								<a href='#'>{item}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}
