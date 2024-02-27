import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import { PageContent } from 'src/components/page-content/page-content'
import { ObjectsTable } from 'src/layouts/main-layout/pages/objects-page/layout/objects-list/objects-table/objects-table'

import { AppRoute } from 'src/routes/main-routes/consts'

import styles from './index.module.scss'

export const ObjectsList: FC = () => {
	return (
		<PageContent $padding='30px 35px 45px 30px'>
			<Helmet>
				<title>Объекты</title>
			</Helmet>
			<h2>Объекты</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
				Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar
				sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
				mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus
				pronin sapien nunc accuan eget.
			</p>
			<Link className={styles.aboutLink} to={AppRoute.ObjectsAbout}>
				Подробнее об объектах
			</Link>

			<ObjectsTable />
		</PageContent>
	)
}
