import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'

import { PageContent } from 'src/components/page-content/page-content'
import { useGetAllNewsQuery } from 'src/store/news/news.api'
import { Loader } from 'src/components/loader/loader'
import { DatedItem } from 'src/components/dated-item/dated-item'

export const NewsList: FC = () => {
	const { data: newsList, isLoading } = useGetAllNewsQuery('')
	return (
		<PageContent $padding='30px 50px 250px 30px' $maxWidth='100%'>
			<Helmet>
				<title>Все новости</title>
			</Helmet>
			<h2>Все новости</h2>
			{isLoading || !newsList ? (
				<Loader />
			) : (
				<ul>
					{newsList.map((newsItem) => (
						<DatedItem
							key={newsItem.id}
							id={newsItem.id}
							date={newsItem.date}
							previewImage={newsItem.title}
							title={newsItem.title}
							desc={newsItem.desc}
						/>
					))}
				</ul>
			)}
		</PageContent>
	)
}
