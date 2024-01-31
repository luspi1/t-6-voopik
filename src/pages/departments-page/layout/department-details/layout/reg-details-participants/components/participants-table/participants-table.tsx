import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { CustomTable } from 'src/components/custom-table/custom-table'
import { TableSearch } from 'src/modules/table-search/table-search'
import { MainSelect } from 'src/UI/MainSelect/MainSelect'
import { Loader } from 'src/components/loader/loader'

import { useDebounce } from 'src/hooks/debounce/debounce'
import { useGetRegionParticipantsQuery } from 'src/store/regions/regions.api'
import { type ShortUserItemType } from 'src/types/users'
import styles from './index.module.scss'
import { formatDate1 } from 'src/helpers/utils'

export const DepartmentParticipantsTable = () => {
	const { id } = useParams()

	const [searchRegionParticipants, setSearchRegionParticipants] = useState<string>('')
	const debouncedSearch = useDebounce(searchRegionParticipants)
	const { data: participants, isLoading } = useGetRegionParticipantsQuery([
		debouncedSearch,
		id ?? '',
	])

	const searchDepartments = (value: string) => {
		setSearchRegionParticipants(value)
	}

	const tableTitles = [
		'№',
		<TableSearch
			wrapperClassName={styles.usersSearchWrapper}
			key={1}
			handleSearch={searchDepartments}
			placeholder='Поиск по фамилии Персоны'
		/>,
		'Должность',
		'Группа',
		'Дата регистрации',
		<MainSelect key={5} items={[{ label: 'Статус Персоны', value: '0' }]} />,
	]

	const formatUsersTableData = (usersData: ShortUserItemType[]) => {
		return usersData.map((userEl, idx) => {
			return [
				String(idx + 1),
				<Link to={userEl.id} key={userEl.id}>
					{userEl.fullname}
				</Link>,
				userEl.position,
				userEl.group,
				formatDate1(userEl.regDate),
				userEl.mainStatus,
			]
		})
	}

	if (isLoading || !participants) return <Loader />

	return (
		<CustomTable
			className={styles.departmentTable}
			cellsData={formatUsersTableData(participants)}
			colTitles={tableTitles}
		/>
	)
}
