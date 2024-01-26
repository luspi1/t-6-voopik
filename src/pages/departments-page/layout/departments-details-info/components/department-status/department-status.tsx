import { type FC } from 'react'

import { InfoRow } from 'src/UI/InfoRow/InfoRow'
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
				<InfoRow title='Связь с Объектами:' label={relatedObjects} margin='0' />
				<InfoRow title='Связь с Проектами:' label={relatedProjects} margin='0' />
			</div>
		</div>
	)
}
