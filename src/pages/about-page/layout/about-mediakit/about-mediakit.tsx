import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'

import { DocumentsItem } from 'src/components/documents-item/documents-item'
import { DocumentsList } from 'src/components/documents-list/documents-list'

import { brandbookData, forPressData } from 'src/pages/about-page/layout/about-mediakit/consts'

import styles from './index.module.scss'
import { FeedbackForm } from 'src/modules/feedback-form/feedback-form'

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

			<DocumentsItem {...brandbookData} />
			<DocumentsList listTitle='Для прессы' data={forPressData} />
			<FeedbackForm />
		</div>
	)
}
