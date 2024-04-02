import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'

import { SliderSearch } from 'src/layouts/main-layout/pages/home-page/components/slider-search/slider-search'
import { ProjectsSection } from 'src/layouts/main-layout/pages/home-page/components/projects-section/projects-section'
import { NewsSection } from 'src/layouts/main-layout/pages/home-page/components/news-section/news-section'
import { FeedbackSection } from 'src/layouts/main-layout/pages/home-page/components/feedback-section/feedback-section'

import styles from './index.module.scss'

export const HomePage: FC = () => {
	return (
		<div className={styles.homePage}>
			<Helmet>
				<title>Главная</title>
			</Helmet>
			<div className={styles.headerImgWrapper}></div>
			<SliderSearch />
			<ProjectsSection />
			<NewsSection />
			<FeedbackSection />
		</div>
	)
}
