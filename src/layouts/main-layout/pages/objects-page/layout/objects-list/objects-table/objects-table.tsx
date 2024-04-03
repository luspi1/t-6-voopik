import { type ObjectItem } from 'src/types/objects'

import { Link } from 'react-router-dom'
import { useState } from 'react'

import { useDebounce } from 'src/hooks/debounce/debounce'
import { MainSelect } from 'src/UI/MainSelect/MainSelect'
import { TableSearch } from 'src/modules/table-search/table-search'
import { Loader } from 'src/components/loader/loader'
import { CustomTable } from 'src/components/custom-table/custom-table'
import { useGetAllObjectsQuery } from 'src/store/objects/objects.api'

import styles from './index.module.scss'

export const ObjectsTable = () => {
	const [searchObjects, setSearchObjects] = useState<string>('')
	const debouncedSearch = useDebounce(searchObjects)

	const { data: objectList, isLoading } = useGetAllObjectsQuery(debouncedSearch)

	const searchObjectsHandler = (value: string) => {
		setSearchObjects(value)
	}
	const tableTitles = [
		'№',
		<MainSelect key={1} items={[{ label: 'Категория ИКЗ', value: '0' }]} />,
		'Номер в госреестре',
		<TableSearch
			wrapperClassName={styles.objectsSearchWrapper}
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
		<CustomTable
			className={styles.objectsTable}
			cellsData={formatObjectsTableData(objectList)}
			colTitles={tableTitles}
		/>
	)
}
