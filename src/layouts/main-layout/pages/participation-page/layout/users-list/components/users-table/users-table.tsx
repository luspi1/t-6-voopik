import { type UserItem } from 'src/types/users'

import { useState } from 'react'
import { Link } from 'react-router-dom'

import { CustomTable } from 'src/components/custom-table/custom-table'
import { TableSearch } from 'src/modules/table-search/table-search'
import { useDebounce } from 'src/hooks/debounce/debounce'
import { MainSelect } from 'src/UI/MainSelect/MainSelect'
import { Loader } from 'src/components/loader/loader'
import { useGetAllUsersQuery } from 'src/store/users/users.api'

import styles from './index.module.scss'
import { customFormatDate } from 'src/helpers/utils'
export const UsersTable = () => {
	const [searchUser, setSearchUser] = useState<string>('')
	const debouncedSearch = useDebounce(searchUser)
	const { data: usersList, isLoading } = useGetAllUsersQuery(debouncedSearch)

	const searchUsers = (value: string) => {
		setSearchUser(value)
	}
	const tableTitles = [
		'№',
		<TableSearch
			wrapperClassName={styles.usersSearchWrapper}
			key={1}
			handleSearch={searchUsers}
			placeholder='Поиск по фамилии Персоны'
		/>,
		'Должность',
		'Группа',
		'Дата регистрации',
		<MainSelect key={5} items={[{ label: 'Статус Персоны', value: '0' }]} />,
	]

	const formatUsersTableData = (usersData: UserItem[]) => {
		return usersData.map((userEl, idx) => {
			return [
				String(idx + 1),
				<Link to={userEl.id} key={userEl.id}>
					{userEl.fullname}
				</Link>,
				userEl.position,
				userEl.group,
				customFormatDate(userEl.regDate),
				userEl.mainStatus,
			]
		})
	}

	if (isLoading || !usersList) return <Loader />

	return (
		<CustomTable
			className={styles.usersTable}
			cellsData={formatUsersTableData(usersList)}
			colTitles={tableTitles}
		/>
	)
}
