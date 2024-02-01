import { type FC } from 'react'
import { useParams } from 'react-router-dom'

import { DepartmentObjectsTable } from './components/objects-table/objects-table'
import { useGetRegionObjectsQuery } from 'src/store/regions/regions.api'
import styles from './index.module.scss'

export const RegDetailsObjects: FC = () => {
	const { id } = useParams()
	const { data: objects } = useGetRegionObjectsQuery(['', id ?? ''])

	return (
		objects && (
			<div className={styles.objectsTablePage}>
				<h2 className={styles.title}>События</h2>
				<p className={styles.objectsCount}>Всего событий: {objects.length}</p>
				<DepartmentObjectsTable />
			</div>
		)
	)
}