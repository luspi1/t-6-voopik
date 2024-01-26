import { type FC } from 'react'
import { type RelatedLink } from 'src/types/global'

import { InfoRow } from 'src/UI/InfoRow/InfoRow'
import { formatRelatedLinks } from 'src/helpers/utils'

import styles from './index.module.scss'

export type DepartmentStatusProps = {
	relatedObjects?: RelatedLink[]
	relatedProjects?: RelatedLink[]
}

export const DepartmentStatus: FC<DepartmentStatusProps> = ({
	relatedObjects,
	relatedProjects,
}) => {
	if (!relatedObjects && !relatedProjects) return null

	return (
		<div className={styles.container}>
			<InfoRow
				wrapperClassname={styles.relatedRow}
				title='Связь с Объектами:'
				label={formatRelatedLinks(relatedObjects, 'objects')}
			/>
			<InfoRow
				wrapperClassname={styles.relatedRow}
				title='Связь с Проектами:'
				label={formatRelatedLinks(relatedProjects, 'projects')}
			/>
		</div>
	)
}
