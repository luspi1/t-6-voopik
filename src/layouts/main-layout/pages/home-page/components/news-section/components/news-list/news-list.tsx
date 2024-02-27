import { type FC } from 'react'
import { type NewsItemType } from 'src/layouts/main-layout/pages/home-page/components/news-section/types'

import { NewsItem } from 'src/layouts/main-layout/pages/home-page/components/news-section/components/news-item/news-item'

import styles from './index.module.scss'

type NewsListProps = {
	newsItems: NewsItemType[]
}
export const NewsList: FC<NewsListProps> = ({ newsItems }) => {
	return (
		<ul className={styles.newsList}>
			{newsItems?.map((item) => <NewsItem key={item.id} {...item} />)}
		</ul>
	)
}
