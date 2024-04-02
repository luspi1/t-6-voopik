import { type EventsItem } from 'src/types/events'

import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { CustomTable } from 'src/components/custom-table/custom-table'
import { TableSearch } from 'src/modules/table-search/table-search'
import { Loader } from 'src/components/loader/loader'

import { useDebounce } from 'src/hooks/debounce/debounce'
import { useGetRegionEventsQuery } from 'src/store/regions/regions.api'

import styles from './index.module.scss'

export const DepartmentEventsTable = () => {
	const { id } = useParams()

	const [searchRegionEvents, setSearchRegionEvents] = useState<string>('')
	const debouncedSearch = useDebounce(searchRegionEvents)
	const { data: events, isLoading } = useGetRegionEventsQuery([debouncedSearch, id ?? ''])

	const searchEvents = (value: string) => {
		setSearchRegionEvents(value)
	}

	const tableTitles = [
		'№',
		<TableSearch
			wrapperClassName={styles.eventsSearchWrapper}
			key={1}
			handleSearch={searchEvents}
			placeholder='Поиск по названию события'
		/>,
		'Контактное лицо',
		'Место проведения',
		'Даты проведения',
	]

	const formatEventsTableData = (eventsData: EventsItem[]) => {
		return eventsData.map((eventEl, idx) => {
			return [
				String(idx + 1),
				<Link to={eventEl.id} key={eventEl.id}>
					{eventEl.title}
				</Link>,
				eventEl.contactPerson,
				eventEl.location,
				eventEl.dates.join(' - '),
			]
		})
	}

	if (isLoading || !events) return <Loader />

	return (
		<CustomTable
			className={styles.eventsTable}
			cellsData={formatEventsTableData(events)}
			colTitles={tableTitles}
		/>
	)
}
