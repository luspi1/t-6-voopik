import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { CustomTable } from 'src/components/custom-table/custom-table'
import { TableSearch } from 'src/modules/table-search/table-search'
import { MainSelect } from 'src/UI/MainSelect/MainSelect'
import { Loader } from 'src/components/loader/loader'

import { useDebounce } from 'src/hooks/debounce/debounce'
import { useGetRegionObjectsQuery } from 'src/store/regions/regions.api'
import { type ObjectItem } from 'src/types/objects'
import styles from './index.module.scss'

export const DepartmentObjectsTable = () => {
	const { id } = useParams()

	const [searchRegionObjects, setSearchRegionObjects] = useState<string>('')
	const debouncedSearch = useDebounce(searchRegionObjects)
	const { data: objects, isLoading } = useGetRegionObjectsQuery([debouncedSearch, id ?? ''])

	const searchObjects = (value: string) => {
		setSearchRegionObjects(value)
	}

	const tableTitles = [
		'№',
		<MainSelect key={1} items={[{ label: 'Категория ИКЗ', value: '0' }]} />,
		'Номер в госреестре',
		<TableSearch
			wrapperClassName={styles.objectsSearchWrapper}
			key={3}
			handleSearch={searchObjects}
			placeholder='Поиск по названию Объекта'
		/>,
		<MainSelect key={4} items={[{ label: 'Вид Объекта', value: '0' }]} />,
		'Регион',
	]

	const formatEventsTableData = (objectsData: ObjectItem[]) => {
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

	if (isLoading || !objects) return <Loader />

	return (
		<CustomTable
			className={styles.objectsTable}
			cellsData={formatEventsTableData(objects)}
			colTitles={tableTitles}
		/>
	)
}
