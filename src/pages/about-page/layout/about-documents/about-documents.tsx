import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'

import { Regulation } from './components/regulation/regulation'
import { Rules } from './components/rules/rules'
import { Laws } from './components/laws/laws'

import styles from './index.module.scss'

export const AboutDocuments: FC = () => {
	return (
		<div className={styles.documentsPage}>
			<Helmet>
				<title>Об Обществе – Документы</title>
			</Helmet>

			<h2>Документы</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
				Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar
				sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
				mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus
				pronin sapien nunc accuan eget.
			</p>
			<Regulation />
			<Rules />
			<Laws />
		</div>
	)
}
