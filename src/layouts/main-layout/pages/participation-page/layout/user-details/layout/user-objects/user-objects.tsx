import { type FC, useState } from 'react'
import { type ObjectItem } from 'src/types/objects'

import { Link, useParams } from 'react-router-dom'

import { useDebounce } from 'src/hooks/debounce/debounce'
import { TableSearch } from 'src/modules/table-search/table-search'
import { MainSelect } from 'src/UI/MainSelect/MainSelect'
import { Loader } from 'src/components/loader/loader'
import { CustomTable } from 'src/components/custom-table/custom-table'
import { Pagination } from 'src/components/pagination/pagination'
import { useGetUserObjectQuery } from 'src/store/users/users.api'

import styles from './index.module.scss'
export const UserObjects: FC = () => {
	const [searchObjects, setSearchObjects] = useState<string>('')
	const debouncedSearch = useDebounce(searchObjects)

	const { id } = useParams()

	const { data: objectList, isLoading } = useGetUserObjectQuery([debouncedSearch, id ?? ''])

	const searchObjectsHandler = (value: string) => {
		setSearchObjects(value)
	}
	const tableTitles = [
		'№',
		<MainSelect key={1} items={[{ label: 'Категория ИКЗ', value: '0' }]} />,
		'Номер в госреестре',
		<TableSearch
			wrapperClassName={styles.usersObjectsSearchWrapper}
			key={3}
			handleSearch={searchObjectsHandler}
			placeholder='Поиск по названию Объекта'
		/>,
		<MainSelect key={4} items={[{ label: 'Вид Объекта', value: '0' }]} />,
		'Регион',
	]

	const formatObjectsTableData = (objectsData: ObjectItem[]) => {
		return objectsData.map((objectEl, idx) => {
			return [
				String(idx + 1),
				objectEl.category,
				objectEl.registryNumber,
				<Link to={objectEl.id} key={objectEl.id}>
					{objectEl.title}
				</Link>,
				objectEl.kind,
				objectEl.region,
			]
		})
	}

	if (isLoading || !objectList) return <Loader />

	return (
		<section className={styles.userObjectsSection}>
			<p className={styles.objectLengthInfo}>
				Всего объектов: <span>{objectList?.length}</span>
			</p>
			<CustomTable
				className={styles.usersObjectsTable}
				cellsData={formatObjectsTableData(objectList)}
				colTitles={tableTitles}
			/>
			<Pagination pagesCount={7} activePage={2} />
		</section>
	)
}
