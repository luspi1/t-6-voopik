import { type FC, useState } from 'react'
import { type ProjectItem } from 'src/types/projects'

import { Link, useParams } from 'react-router-dom'

import { useDebounce } from 'src/hooks/debounce/debounce'
import { useGetUserProjectQuery } from 'src/store/users/users.api'
import { TableSearch } from 'src/modules/table-search/table-search'
import { MainSelect } from 'src/UI/MainSelect/MainSelect'
import { Loader } from 'src/components/loader/loader'
import { CustomTable } from 'src/components/custom-table/custom-table'
import { Pagination } from 'src/components/pagination/pagination'

import styles from './index.module.scss'
export const UserProjects: FC = () => {
	const [searchProjects, setSearchProjects] = useState<string>('')
	const debouncedSearch = useDebounce(searchProjects)

	const { id } = useParams()

	const { data: projectList, isLoading } = useGetUserProjectQuery([debouncedSearch, id ?? ''])

	const searchProjectsHandler = (value: string) => {
		setSearchProjects(value)
	}
	const tableTitles = [
		'№',
		<TableSearch
			wrapperClassName={styles.usersProjectsSearchWrapper}
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
		<section className={styles.userProjectsSection}>
			<p className={styles.projectLengthInfo}>
				Всего проектов: <span>{projectList?.length}</span>
			</p>
			<CustomTable
				className={styles.usersProjectsTable}
				cellsData={formatProjectsTableData(projectList)}
				colTitles={tableTitles}
			/>
			<Pagination pagesCount={7} activePage={2} />
		</section>
	)
}
