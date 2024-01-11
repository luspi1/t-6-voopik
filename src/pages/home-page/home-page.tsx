import { type FC } from 'react'
import { Container } from 'src/UI/Container/Container'
import { Helmet } from 'react-helmet-async'

import styles from './index.module.scss'

export const HomePage: FC = () => {
	return (
		<div className={styles.homePage}>
			<Helmet>
				<title>Главная</title>
			</Helmet>
			<div className={styles.headerImgWrapper}></div>
			<Container></Container>
		</div>
	)
}
