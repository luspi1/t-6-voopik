import { type FC, useState } from 'react'
import { type ProjectItem } from 'src/types/projects'

import { Link } from 'react-router-dom'

import { CustomTable } from 'src/components/custom-table/custom-table'
import { useDebounce } from 'src/hooks/debounce/debounce'
import { MainSelect } from 'src/UI/MainSelect/MainSelect'
import { TableSearch } from 'src/modules/table-search/table-search'
import { Loader } from 'src/components/loader/loader'
import { useGetAllProjectsQuery } from 'src/store/projects/projects.api'

import styles from './index.module.scss'

export const ProjectsTable: FC = () => {
	const [searchProjects, setSearchProjects] = useState<string>('')
	const debouncedSearch = useDebounce(searchProjects)

	const { data: projectList, isLoading } = useGetAllProjectsQuery(debouncedSearch)

	const searchProjectsHandler = (value: string) => {
		setSearchProjects(value)
	}
	const tableTitles = [
		'№',
		<MainSelect
			key={1}
			items={[
				{ label: 'Тип Проекта', value: '0' },
				{ label: 'Первый тип', value: '1' },
				{ label: 'Второй тип', value: '2' },
			]}
		/>,
		<TableSearch
			wrapperClassName={styles.projectsSearchWrapper}
			key={2}
			handleSearch={searchProjectsHandler}
			placeholder='Поиск по названию Проекта'
		/>,
		<MainSelect
			key={3}
			items={[
				{ label: 'Статус проекта', value: '0' },
				{ label: 'закрыт', value: '1' },
				{ label: 'открыт', value: '2' },
				{ label: 'перекрыт', value: '3' },
			]}
		/>,
		'Регион',
	]

	const formatProjectsTableData = (projectsData: ProjectItem[]) => {
		return projectsData.map((projectEl, idx) => {
			return [
				String(idx + 1),
				projectEl.type,
				<Link to={projectEl.id} key={projectEl.id}>
					{projectEl.title}
				</Link>,
				projectEl.status,
				projectEl.region,
			]
		})
	}

	if (isLoading || !projectList) return <Loader />

	return (
		<CustomTable
			className={styles.projectsTable}
			cellsData={formatProjectsTableData(projectList)}
			colTitles={tableTitles}
		/>
	)
}
