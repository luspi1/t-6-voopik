import { type FC, useState } from 'react'
import { type GroupItem } from 'src/types/groups'

import { Link, useParams } from 'react-router-dom'

import { useDebounce } from 'src/hooks/debounce/debounce'
import { useGetUserGroupQuery } from 'src/store/users/users.api'
import { TableSearch } from 'src/modules/table-search/table-search'
import { MainSelect } from 'src/UI/MainSelect/MainSelect'
import { customFormatDate } from 'src/helpers/utils'
import { Loader } from 'src/components/loader/loader'
import { CustomTable } from 'src/components/custom-table/custom-table'
import { Pagination } from 'src/components/pagination/pagination'

import styles from './index.module.scss'
export const UserGroups: FC = () => {
	const [searchGroups, setSearchGroups] = useState<string>('')
	const debouncedSearch = useDebounce(searchGroups)

	const { id } = useParams()

	const { data: groupList, isLoading } = useGetUserGroupQuery([debouncedSearch, id ?? ''])

	const searchGroupsHandler = (value: string) => {
		setSearchGroups(value)
	}
	const tableTitles = [
		'№',
		'Регион',
		<MainSelect
			key={2}
			items={[
				{ label: 'Уровень', value: '0' },
				{ label: 'Уровень 1', value: '1' },
				{ label: 'Уровень 2', value: '2' },
				{ label: 'Уровень 3', value: '3' },
			]}
		/>,
		<TableSearch
			wrapperClassName={styles.usersGroupsSearchWrapper}
			key={3}
			handleSearch={searchGroupsHandler}
			placeholder='Поиск по названию группы'
		/>,
		'Роль',
		'Дата вступления',
		<MainSelect
			key={6}
			items={[
				{ label: 'Статус группы', value: '0' },
				{ label: 'Первый статус', value: '1' },
				{ label: 'Второй статус', value: '2' },
				{ label: 'Третий статус', value: '3' },
			]}
		/>,
	]

	const formatGroupsTableData = (groupsData: GroupItem[]) => {
		return groupsData.map((groupEl, idx) => {
			return [
				String(idx + 1),
				groupEl.regionCode,
				groupEl.level,
				<Link to={groupEl.id} key={groupEl.id}>
					{groupEl.title}
				</Link>,
				groupEl.role,
				customFormatDate(groupEl.entryDate),
				groupEl.status,
			]
		})
	}

	if (isLoading || !groupList) return <Loader />

	return (
		<section className={styles.userGroupsSection}>
			<p className={styles.groupLengthInfo}>
				Групп: <span>{groupList?.length}</span>
			</p>
			<CustomTable
				className={styles.usersGroupsTable}
				cellsData={formatGroupsTableData(groupList)}
				colTitles={tableTitles}
			/>
			<Pagination pagesCount={7} activePage={2} />
		</section>
	)
}
