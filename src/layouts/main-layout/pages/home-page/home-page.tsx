import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'

import { SliderSearch } from 'src/layouts/main-layout/pages/home-page/components/slider-search/slider-search'

import styles from './index.module.scss'
import { ObjectsSection } from 'src/layouts/main-layout/pages/home-page/components/objects-section/objects-section'
import { NewsSection } from 'src/layouts/main-layout/pages/home-page/components/news-section/news-section'
import { FeedbackSection } from 'src/layouts/main-layout/pages/home-page/components/feedback-section/feedback-section'

export const HomePage: FC = () => {
	return (
		<div className={styles.homePage}>
			<Helmet>
				<title>Главная</title>
			</Helmet>
			<div className={styles.headerImgWrapper}></div>
			<SliderSearch />
			<ObjectsSection />
			<NewsSection />
			<FeedbackSection />
		</div>
	)
}
