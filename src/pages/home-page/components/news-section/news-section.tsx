import { type FC } from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'src/UI/Container/Container'
import { NewsList } from 'src/pages/home-page/components/news-section/components/news-list/news-list'

import { AppRoute } from 'src/helpers/consts'
import { NewsItems } from './consts'

import styles from './index.module.scss'

export const NewsSection: FC = () => {
	return (
		<section className={styles.newsSection}>
			<Container>
				<h4>Новости</h4>
				<NewsList newsItems={NewsItems} />
				<Link className={styles.allNewsLink} to={AppRoute.Events}>
					Все новости
				</Link>
			</Container>
		</section>
	)
}
