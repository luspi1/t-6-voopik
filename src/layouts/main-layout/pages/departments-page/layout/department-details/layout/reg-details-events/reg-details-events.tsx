import { type FC } from 'react'
import { useParams } from 'react-router-dom'

import { DepartmentEventsTable } from './components/events-table/events-table'
import { useGetRegionEventsQuery } from 'src/store/regions/regions.api'
import styles from './index.module.scss'
import { Pagination } from 'src/components/pagination/pagination'

export const RegDetailsEvents: FC = () => {
	const { id } = useParams()
	const { data: events } = useGetRegionEventsQuery(['', id ?? ''])

	return (
		events && (
			<div className={styles.eventsTablePage}>
				<h2 className={styles.title}>События</h2>
				<p className={styles.eventsCount}>Всего событий: {events.length}</p>
				<DepartmentEventsTable />
				<Pagination pagesCount={7} activePage={4} />
			</div>
		)
	)
}
