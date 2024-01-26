import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams, Link } from 'react-router-dom'

import { PageContent } from 'src/components/page-content/page-content'
import { useGetRegionByCodeQuery } from 'src/store/regions/regions.api'
import { DepartmentMainInfo } from './components/department-main-info/department-main-info'
import { DepartmentStatus } from './components/department-status/department-status'
import { DepartmentDescription } from 'src/pages/departments-page/layout/departments-details-info/components/department-description/department-description'
import { useAdditionalCrumbs } from 'src/hooks/additional-crumbs/additional-crumbs'
import { DepartmentLinks } from 'src/pages/departments-page/layout/departments-details-info/components/department-links/department-links'
import { DepartmentDocuments } from 'src/pages/departments-page/layout/departments-details-info/components/department-documents/department-documents'

import { AppRoute } from 'src/helpers/consts'

import styles from './index.module.scss'

export const DepartmentsDetailsInfo: FC = () => {
	const { id } = useParams()

	const { data: regionData } = useGetRegionByCodeQuery(id ?? '')

	useAdditionalCrumbs(regionData?.fullTitle)

	if (!regionData) {
		return (
			<PageContent $padding='30px 35px 30px 30px'>
				<Helmet>
					<title>Информация о регионе</title>
				</Helmet>
				<h2>Нет информации о данном регионе</h2>
			</PageContent>
		)
	}

	return (
		<PageContent $padding='30px 35px 30px 30px'>
			<Helmet>
				<title>Информация о регионе</title>
			</Helmet>
			<DepartmentMainInfo {...regionData} />
			<DepartmentDescription {...regionData} />
			<DepartmentStatus {...regionData} />
			<DepartmentDocuments {...regionData} />
			<DepartmentLinks {...regionData} />
			<Link className={styles.pageMainLink} to={`/${AppRoute.Departments}`}>
				На страницу списка отделений
			</Link>
		</PageContent>
	)
}
