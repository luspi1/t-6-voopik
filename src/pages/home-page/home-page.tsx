import { type FC } from 'react'
import { Container } from 'src/UI/Container/Container'
import { Helmet } from 'react-helmet-async'

import styles from './index.module.scss'
import { SliderSearch } from 'src/pages/home-page/components/slider-search/slider-search'

export const HomePage: FC = () => {
	return (
		<div className={styles.homePage}>
			<Helmet>
				<title>Главная</title>
			</Helmet>
			<div className={styles.headerImgWrapper}></div>
			<SliderSearch />
			<Container></Container>
		</div>
	)
}
