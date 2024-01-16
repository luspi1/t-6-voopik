import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'

import { Brandbook } from './components/brand-book/brand-book'
import { ForPress } from './components/for-press/for-press'
import styles from './index.module.scss'

export const AboutMediakit: FC = () => {
	return (
		<div className={styles.mediakitPage}>
			<Helmet>
				<title>Об Обществе – Медиакит</title>
			</Helmet>
			<h2>Медиакит</h2>

			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
				Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar
				sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
				mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus
				pronin sapien nunc accuan eget.
			</p>

			<Brandbook />
			<ForPress />
		</div>
	)
}
