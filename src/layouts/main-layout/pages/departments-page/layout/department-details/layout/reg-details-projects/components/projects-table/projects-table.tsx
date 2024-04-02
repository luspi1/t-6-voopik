import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { CustomTable } from 'src/components/custom-table/custom-table'
import { TableSearch } from 'src/modules/table-search/table-search'
import { MainSelect } from 'src/UI/MainSelect/MainSelect'
import { Loader } from 'src/components/loader/loader'

import { useDebounce } from 'src/hooks/debounce/debounce'
import { useGetRegionProjectsQuery } from 'src/store/regions/regions.api'
import { type ProjectItem } from 'src/types/projects'
import styles from './index.module.scss'

export const DepartmentProjectsTable = () => {
	const { id } = useParams()

	const [searchRegionProjects, setSearchRegionProjects] = useState<string>('')
	const debouncedSearch = useDebounce(searchRegionProjects)
	const { data: projects, isLoading } = useGetRegionProjectsQuery([debouncedSearch, id ?? ''])

	const searchProjects = (value: string) => {
		setSearchRegionProjects(value)
	}

	const tableTitles = [
		'№',
		<TableSearch
			wrapperClassName={styles.projectsSearchWrapper}
			key={1}
			handleSearch={searchProjects}
			placeholder='Поиск по названию Проекта'
		/>,
		<MainSelect key={5} items={[{ label: 'Статус проекта', value: '0' }]} />,
		'Регион',
	]

	const formatEventsTableData = (projectsData: ProjectItem[]) => {
		return projectsData.map((projectEl, idx) => {
			return [
				String(idx + 1),
				<Link to={projectEl.id} key={projectEl.id}>
					{projectEl.title}
				</Link>,

				projectEl.status,
				projectEl.region,
			]
		})
	}

	if (isLoading || !projects) return <Loader />

	return (
		<CustomTable
			className={styles.projectsTable}
			cellsData={formatEventsTableData(projects)}
			colTitles={tableTitles}
		/>
	)
}
