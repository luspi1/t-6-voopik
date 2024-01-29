import { type FC, useState } from 'react'
import { type EventsItem } from 'src/types/events'

import { Link, useParams } from 'react-router-dom'

import { useDebounce } from 'src/hooks/debounce/debounce'
import { useGetUserEventQuery } from 'src/store/users/users.api'
import { TableSearch } from 'src/modules/table-search/table-search'
import { MainSelect } from 'src/UI/MainSelect/MainSelect'
import { formatDate1 } from 'src/helpers/utils'
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
		'В составе группы',
		'Место проведения',
		'Даты проведения',
		<MainSelect
			key={5}
			items={[
				{ label: 'Тип участия', value: '0' },
				{ label: 'Первый тип', value: '1' },
				{ label: 'Второй тип', value: '2' },
				{ label: 'Третий тип', value: '3' },
			]}
		/>,
	]

	const formatEventsTableData = (eventsData: EventsItem[]) => {
		return eventsData.map((eventEl, idx) => {
			return [
				String(idx + 1),
				<Link to={eventEl.id} key={eventEl.id}>
					{eventEl.title}
				</Link>,
				eventEl.partGroup,
				eventEl.location,
				<p key={4}>{`${formatDate1(eventEl.dates[0])} — ${formatDate1(eventEl.dates[1])}`}</p>,
				eventEl.type,
			]
		})
	}

	if (isLoading || !eventList) return <Loader />

	return (
		<section className={styles.userEventsSection}>
			<p className={styles.groupLengthInfo}>
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
