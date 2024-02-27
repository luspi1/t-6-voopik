import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import { Pagination } from 'src/components/pagination/pagination'
import { PageContent } from 'src/components/page-content/page-content'
import { DepartmentsTable } from 'src/layouts/main-layout/pages/departments-page/layout/departments-list/components/departments-table/departments-table'

import { AppRoute } from 'src/routes/main-routes/consts'

import styles from './index.module.scss'
export const DepartmentsList: FC = () => {
	return (
		<PageContent className={styles.departmentListPage} $padding='30px 50px 250px 30px'>
			<Helmet>
				<title>Региональные отделения</title>
			</Helmet>

			<h2>Региональные отделения</h2>

			<p className={styles.departmentListText}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
				Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar
				sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
				mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus
				pronin sapien nunc accuan eget.
			</p>
			<Link to={AppRoute.DepartmentsAbout}>Подробнее об отделениях</Link>
			<DepartmentsTable />
			<Pagination pagesCount={7} activePage={2} />
		</PageContent>
	)
}
