import { type FC, useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'

import { PageContent } from 'src/components/page-content/page-content'
import { useGetAllNewsQuery } from 'src/store/news/news.api'
import { Loader } from 'src/components/loader/loader'
import { DatedItem } from 'src/components/dated-item/dated-item'
import { Pagination } from 'src/components/pagination/pagination'

import styles from './index.module.scss'
import { MainSelect } from 'src/UI/MainSelect/MainSelect'
import { type SelOption } from 'src/types/select'

export const NewsList: FC = () => {
	const [yearsSelectValue, setYearsSelectValue] = useState<string>('')
	const [yearsOptions, setYearsOptions] = useState<SelOption[]>([])
	const { data: newsList, isLoading } = useGetAllNewsQuery({ year: yearsSelectValue })

	const isFetchedRef = useRef<boolean>(false)
	if (newsList) {
		isFetchedRef.current = true
	}

	useEffect(() => {
		if (isFetchedRef.current) {
			const uniqYears = [...new Set(newsList?.map((el) => new Date(el.date).getFullYear()))].map(
				(el) => {
					return {
						label: String(el),
						value: String(el),
					}
				},
			)
			setYearsOptions(uniqYears)
		}
	}, [isFetchedRef.current])

	return (
		<PageContent $padding='30px 40px 55px 30px' $maxWidth='100%'>
			<Helmet>
				<title>Все новости</title>
			</Helmet>
			<div className={styles.newsTitleBlock}>
				<h2>Все новости</h2>
				<MainSelect
					onChange={(e) => setYearsSelectValue(e.target.value)}
					value={yearsSelectValue}
					className={styles.newsYearsSelect}
					items={[{ label: 'Все годы', value: '' }, ...yearsOptions]}
				/>
			</div>
			{isLoading || !newsList ? (
				<Loader />
			) : (
				<ul className={styles.newsList}>
					{[...newsList]
						?.reverse()
						.map((newsItem, idx, array) => (
							<DatedItem
								key={newsItem.id}
								id={newsItem.id}
								date={newsItem.date}
								prevDate={array[idx - 1]?.date}
								previewImage={newsItem.preview}
								title={newsItem.title}
								desc={newsItem.desc}
							/>
						))}
				</ul>
			)}
			<Pagination pagesCount={7} activePage={2} />
		</PageContent>
	)
}
