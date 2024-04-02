import { type FC } from 'react'
import { useParams } from 'react-router-dom'

import { DepartmentProjectsTable } from './components/projects-table/projects-table'
import { useGetRegionProjectsQuery } from 'src/store/regions/regions.api'
import styles from './index.module.scss'
import { Pagination } from 'src/components/pagination/pagination'

export const RegDetailsProjects: FC = () => {
	const { id } = useParams()
	const { data: projects } = useGetRegionProjectsQuery(['', id ?? ''])

	return (
		projects && (
			<div className={styles.projectsTablePage}>
				<h2 className={styles.title}>Проекты</h2>
				<p className={styles.projectsCount}>Всего проектов: {projects.length}</p>
				<DepartmentProjectsTable />
				<Pagination pagesCount={7} activePage={4} />
			</div>
		)
	)
}
