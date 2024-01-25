import { type FC } from 'react'

import styles from './index.module.scss'

export type DepartmentStatusProps = {
	relatedObjects?: string[]
	relatedProjects?: string[]
}

export const DepartmentStatus: FC<DepartmentStatusProps> = ({
	relatedObjects,
	relatedProjects,
}) => {
	if (!relatedObjects && !relatedProjects) return null

	return (
		<div className={styles.container}>
			<div className={styles.departmentStatusTable}>
				{!!relatedObjects?.length && (
					<div className={styles.tableRow}>
						<p className={styles.tableTitle}>Связь с Объектами:</p>
						<ul>
							{relatedObjects.map((item, index) => (
								<li key={index}>
									<a href='#'>{item}</a>
								</li>
							))}
						</ul>
					</div>
				)}

				{!!relatedProjects?.length && (
					<div className={styles.tableRow}>
						<p className={styles.tableTitle}>Связь с Проектами:</p>
						<ul>
							{relatedProjects.map((item, index) => (
								<li key={index}>
									<a href='#'>{item}</a>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</div>
	)
}