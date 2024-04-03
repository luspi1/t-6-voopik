import { type FC } from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'src/UI/Container/Container'
import { NewsList } from 'src/layouts/main-layout/pages/home-page/components/news-section/components/news-list/news-list'

import { NewsItems } from './consts'

import { AppRoute } from 'src/routes/main-routes/consts'

import styles from './index.module.scss'

export const NewsSection: FC = () => {
	return (
		<section className={styles.newsSection}>
			<Container>
				<h4>Новости</h4>
				<NewsList newsItems={NewsItems} />
				<Link className={styles.allNewsLink} to={AppRoute.News}>
					Все новости
				</Link>
			</Container>
		</section>
	)
}
