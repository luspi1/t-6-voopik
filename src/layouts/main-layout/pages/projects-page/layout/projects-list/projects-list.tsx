import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import { PageContent } from 'src/components/page-content/page-content'
import { ProjectsTable } from 'src/layouts/main-layout/pages/projects-page/layout/projects-list/projects-table/projects-table'

import { AppRoute } from 'src/routes/main-routes/consts'

import styles from './index.module.scss'

export const ProjectsList: FC = () => {
	return (
		<PageContent $padding='30px 35px 45px 30px'>
			<Helmet>
				<title>Проекты</title>
			</Helmet>
			<h2>Проекты</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
				Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar
				sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
				mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus
				pronin sapien nunc accuan eget.
			</p>
			<Link className={styles.projectLink} to={AppRoute.ProjectsAbout}>
				Подробнее о проектах
			</Link>

			<ProjectsTable />
		</PageContent>
	)
}
