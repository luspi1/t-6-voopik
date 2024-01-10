import { type FC } from 'react'
import { Container } from 'src/UI/Container/Container'
import { Helmet } from 'react-helmet-async'

import styles from './index.module.scss'

export const HomePage: FC = () => {
	return (
		<Container className={styles.homePage}>
			<Helmet>
				<title>Домашняя страница</title>
			</Helmet>
		</Container>
	)
}
