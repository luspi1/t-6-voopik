import { type FC, useState } from 'react'
import { type EventsItem } from 'src/types/events'

import { Link, useParams } from 'react-router-dom'

import { useDebounce } from 'src/hooks/debounce/debounce'
import { useGetUserEventQuery } from 'src/store/users/users.api'
import { TableSearch } from 'src/modules/table-search/table-search'
import { customFormatDate } from 'src/helpers/utils'
import { Loader } from 'src/components/loader/loader'
import { CustomTable } from 'src/components/custom-table/custom-table'
import { Pagination } from 'src/components/pagination/pagination'

import styles from './index.module.scss'
export const UserEvents: FC = () => {
	const [searchEvents, setSearchEvents] = useState<string>('')
	const debouncedSearch = useDebounce(searchEvents)

	const { id } = useParams()

	const { data: eventList, isLoading } = useGetUserEventQuery([debouncedSearch, id ?? ''])

	const searchEventsHandler = (value: string) => {
		setSearchEvents(value)
	}
	const tableTitles = [
		'№',
		<TableSearch
			wrapperClassName={styles.usersEventsSearchWrapper}
			key={1}
			handleSearch={searchEventsHandler}
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
				<p
					key={4}
				>{`${customFormatDate(eventEl.dates[0])} — ${customFormatDate(eventEl.dates[1])}`}</p>,
			]
		})
	}

	if (isLoading || !eventList) return <Loader />

	return (
		<section className={styles.userEventsSection}>
			<p className={styles.eventLengthInfo}>
				Всего событий: <span>{eventList?.length}</span>
			</p>
			<CustomTable
				className={styles.usersEventsTable}
				cellsData={formatEventsTableData(eventList)}
				colTitles={tableTitles}
			/>
			<Pagination pagesCount={7} activePage={2} />
		</section>
	)
}
