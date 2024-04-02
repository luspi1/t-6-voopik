import { type FC } from 'react'
import { useParams } from 'react-router-dom'

import { DepartmentObjectsTable } from './component/objects-table/objects-table'
import { useGetRegionObjectsQuery } from 'src/store/regions/regions.api'
import styles from './index.module.scss'
import { Pagination } from 'src/components/pagination/pagination'

export const RegDetailsObjects: FC = () => {
	const { id } = useParams()
	const { data: objects } = useGetRegionObjectsQuery(['', id ?? ''])

	return (
		objects && (
			<div className={styles.objectsTablePage}>
				<h2 className={styles.title}>Объекты</h2>
				<p className={styles.objectsCount}>Всего объектов: {objects.length}</p>
				<DepartmentObjectsTable />
				<Pagination pagesCount={7} activePage={4} />
			</div>
		)
	)
}
