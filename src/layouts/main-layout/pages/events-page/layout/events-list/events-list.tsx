import { type FC, useEffect, useRef, useState } from 'react'
import { type SelOption } from 'src/types/select'
import { Helmet } from 'react-helmet-async'

import { PageContent } from 'src/components/page-content/page-content'
import { Loader } from 'src/components/loader/loader'
import { DatedItem } from 'src/components/dated-item/dated-item'
import { Pagination } from 'src/components/pagination/pagination'
import { MainSelect } from 'src/UI/MainSelect/MainSelect'
import { useGetAllEventsQuery } from 'src/store/events/events.api'

import styles from './index.module.scss'

export const EventsList: FC = () => {
	const [yearsSelectValue, setYearsSelectValue] = useState<string>('')
	const [yearsOptions, setYearsOptions] = useState<SelOption[]>([])
	const { data: eventsList, isLoading } = useGetAllEventsQuery({ year: yearsSelectValue })

	const isFetchedRef = useRef<boolean>(false)
	if (eventsList) {
		isFetchedRef.current = true
	}

	useEffect(() => {
		if (isFetchedRef.current) {
			const uniqYears = [
				...new Set(eventsList?.map((el) => new Date(el.dates[0]).getFullYear())),
			].map((el) => {
				return {
					label: String(el),
					value: String(el),
				}
			})
			setYearsOptions(uniqYears)
		}
	}, [isFetchedRef.current])

	return (
		<PageContent $padding='30px 40px 55px 30px' $maxWidth='100%'>
			<Helmet>
				<title>Все события</title>
			</Helmet>
			<div className={styles.eventsTitleBlock}>
				<h2>Все события</h2>
				<MainSelect
					onChange={(e) => setYearsSelectValue(e.target.value)}
					value={yearsSelectValue}
					className={styles.eventsYearsSelect}
					items={[{ label: 'Все годы', value: '' }, ...yearsOptions]}
				/>
			</div>
			{isLoading || !eventsList ? (
				<Loader />
			) : (
				<ul className={styles.eventsList}>
					{[...eventsList]
						?.reverse()
						.map((eventsItem, idx, array) => (
							<DatedItem
								key={eventsItem.id}
								id={eventsItem.id}
								date={eventsItem.dates}
								prevDate={array[idx - 1]?.dates[0]}
								previewImage={eventsItem.preview}
								title={eventsItem.title}
								desc={eventsItem.desc}
							/>
						))}
				</ul>
			)}
			<Pagination pagesCount={7} activePage={2} />
		</PageContent>
	)
}
