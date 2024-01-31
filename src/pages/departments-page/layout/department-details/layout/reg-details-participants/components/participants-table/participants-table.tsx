import { type ShortUserItemType } from 'src/types/users'
// import { type RegionItem } from 'src/types/regions'

import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { CustomTable } from 'src/components/custom-table/custom-table'
import { TableSearch } from 'src/modules/table-search/table-search'
import { useDebounce } from 'src/hooks/debounce/debounce'
import { MainSelect } from 'src/UI/MainSelect/MainSelect'
import { Loader } from 'src/components/loader/loader'
// import { useGetAllUsersQuery } from 'src/store/users/users.api'
// import { useGetAllRegionsQuery } from 'src/store/regions/regions.api'
import { useGetRegionByCodeQuery } from 'src/store/regions/regions.api'
// import { formatDate2 } from 'src/helpers/utils'

import styles from './index.module.scss'
import { formatDate1 } from 'src/helpers/utils'

export const DepartmentParticipantsTable = () => {
	// const [searchUser, setSearchUser] = useState<string>('')
	// const debouncedSearch = useDebounce(searchUser)
	// const { data: usersList, isLoading } = useGetAllUsersQuery(debouncedSearch)

	const [searchRegionParticipants, setSearchRegionParticipants] = useState<string>('')
	const debouncedSearch = useDebounce(searchRegionParticipants)
	// const { data: regionParticipants, isLoading } = useGetAllRegionsQuery(debouncedSearch)

	const { id } = useParams()

	const { data: regionData.participants, isLoading } = useGetRegionByCodeQuery(id ?? '')

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

	// const tableTitles = [
	// 	'№',
	// 	'Код региона',
	// 	'Логотип',
	// 	<TableSearch
	// 		key={3}
	// 		handleSearch={searchDepartments}
	// 		placeholder='Поиск по названию отделения'
	// 	/>,
	// 	'Дата открытия',
	// 	'Статус Отделения',
	// ]

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

	// const formatRegionsTableData = (regionsData: RegionItem[]) => {
	// 	return regionsData.map((regionEl, idx) => {
	// 		return [
	// 			String(idx + 1),
	// 			regionEl.regionCode,
	// 			<img src={regionEl.logo} alt={regionEl.title} key={idx} />,
	// 			<Link to={regionEl.regionCode} key={regionEl.regionCode}>
	// 				{regionEl.title}
	// 			</Link>,
	// 			formatDate2(regionEl.openDate),
	// 			regionEl.status,
	// 		]
	// 	})
	// }

	if (isLoading || !regionParticipants) return <Loader />

	return (
		<CustomTable
			className={styles.usersTable}
			cellsData={formatUsersTableData(regionParticipants.participants)}
			colTitles={tableTitles}
		/>
	)
}
